(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const m of r)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const m={};return r.integrity&&(m.integrity=r.integrity),r.referrerPolicy&&(m.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?m.credentials="include":r.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(r){if(r.ep)return;r.ep=!0;const m=n(r);fetch(r.href,m)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ua(t,l){const n=new Set(t.split(","));return l?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Pe={},$i=[],at=()=>{},Qc=()=>!1,bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vn=t=>t.startsWith("onUpdate:"),He=Object.assign,In=(t,l)=>{const n=t.indexOf(l);n>-1&&t.splice(n,1)},Xc=Object.prototype.hasOwnProperty,xe=(t,l)=>Xc.call(t,l),se=Array.isArray,Ti=t=>Ii(t)==="[object Map]",hi=t=>Ii(t)==="[object Set]",$s=t=>Ii(t)==="[object Date]",Zc=t=>Ii(t)==="[object RegExp]",fe=t=>typeof t=="function",je=t=>typeof t=="string",Kt=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Ln=t=>(De(t)||fe(t))&&fe(t.then)&&fe(t.catch),Or=Object.prototype.toString,Ii=t=>Or.call(t),em=t=>Ii(t).slice(8,-1),Hr=t=>Ii(t)==="[object Object]",On=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=t=>{const l=Object.create(null);return n=>l[n]||(l[n]=t(n))},tm=/-(\w)/g,it=ra(t=>t.replace(tm,(l,n)=>n?n.toUpperCase():"")),im=/\B([A-Z])/g,mt=ra(t=>t.replace(im,"-$1").toLowerCase()),vl=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),el=ra(t=>t?`on${vl(t)}`:""),yt=(t,l)=>!Object.is(t,l),Ei=(t,l)=>{for(let n=0;n<t.length;n++)t[n](l)},Ul=(t,l,n)=>{Object.defineProperty(t,l,{configurable:!0,enumerable:!1,value:n})},ol=t=>{const l=parseFloat(t);return isNaN(l)?t:l},Jl=t=>{const l=je(t)?Number(t):NaN;return isNaN(l)?t:l};let Ts;const jr=()=>Ts||(Ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),lm="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",am=ua(lm);function yl(t){if(se(t)){const l={};for(let n=0;n<t.length;n++){const s=t[n],r=je(s)?um(s):yl(s);if(r)for(const m in r)l[m]=r[m]}return l}else if(je(t)||De(t))return t}const nm=/;(?![^(]*\))/g,sm=/:([^]+)/,om=/\/\*[^]*?\*\//g;function um(t){const l={};return t.replace(om,"").split(nm).forEach(n=>{if(n){const s=n.split(sm);s.length>1&&(l[s[0].trim()]=s[1].trim())}}),l}function Cl(t){let l="";if(je(t))l=t;else if(se(t))for(let n=0;n<t.length;n++){const s=Cl(t[n]);s&&(l+=s+" ")}else if(De(t))for(const n in t)t[n]&&(l+=n+" ");return l.trim()}function rm(t){if(!t)return null;let{class:l,style:n}=t;return l&&!je(l)&&(t.class=Cl(l)),n&&(t.style=yl(n)),t}const dm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cm=ua(dm);function qr(t){return!!t||t===""}function mm(t,l){if(t.length!==l.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Pt(t[s],l[s]);return n}function Pt(t,l){if(t===l)return!0;let n=$s(t),s=$s(l);if(n||s)return n&&s?t.getTime()===l.getTime():!1;if(n=Kt(t),s=Kt(l),n||s)return t===l;if(n=se(t),s=se(l),n||s)return n&&s?mm(t,l):!1;if(n=De(t),s=De(l),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,m=Object.keys(l).length;if(r!==m)return!1;for(const f in t){const p=t.hasOwnProperty(f),o=l.hasOwnProperty(f);if(p&&!o||!p&&o||!Pt(t[f],l[f]))return!1}}return String(t)===String(l)}function da(t,l){return t.findIndex(n=>Pt(n,l))}const $e=t=>je(t)?t:t==null?"":se(t)||De(t)&&(t.toString===Or||!fe(t.toString))?JSON.stringify(t,Ur,2):String(t),Ur=(t,l)=>l&&l.__v_isRef?Ur(t,l.value):Ti(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((n,[s,r],m)=>(n[Ma(s,m)+" =>"]=r,n),{})}:hi(l)?{[`Set(${l.size})`]:[...l.values()].map(n=>Ma(n))}:Kt(l)?Ma(l):De(l)&&!se(l)&&!Hr(l)?String(l):l,Ma=(t,l="")=>{var n;return Kt(t)?`Symbol(${(n=t.description)!=null?n:l})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class Hn{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this.parent=rt,!l&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}run(l){if(this._active){const n=rt;try{return rt=this,l()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(l){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!l){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function pm(t){return new Hn(t)}function Jr(t,l=rt){l&&l.active&&l.effects.push(t)}function jn(){return rt}function Gr(t){rt&&rt.cleanups.push(t)}let ni;class zi{constructor(l,n,s,r){this.fn=l,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Jr(this,r)}get dirty(){if(this._dirtyLevel===1){_i();for(let l=0;l<this._depsLength;l++){const n=this.deps[l];if(n.computed&&(fm(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),bi()}return this._dirtyLevel>=2}set dirty(l){this._dirtyLevel=l?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let l=Yt,n=ni;try{return Yt=!0,ni=this,this._runnings++,Es(this),this.fn()}finally{xs(this),this._runnings--,ni=n,Yt=l}}stop(){var l;this.active&&(Es(this),xs(this),(l=this.onStop)==null||l.call(this),this.active=!1)}}function fm(t){return t.value}function Es(t){t._trackId++,t._depsLength=0}function xs(t){if(t.deps&&t.deps.length>t._depsLength){for(let l=t._depsLength;l<t.deps.length;l++)Yr(t.deps[l],t);t.deps.length=t._depsLength}}function Yr(t,l){const n=t.get(l);n!==void 0&&l._trackId!==n&&(t.delete(l),t.size===0&&t.cleanup())}function gm(t,l){t.effect instanceof zi&&(t=t.effect.fn);const n=new zi(t,at,()=>{n.dirty&&n.run()});l&&(He(n,l),l.scope&&Jr(n,l.scope)),(!l||!l.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function hm(t){t.effect.stop()}let Yt=!0,en=0;const Wr=[];function _i(){Wr.push(Yt),Yt=!1}function bi(){const t=Wr.pop();Yt=t===void 0?!0:t}function qn(){en++}function Un(){for(en--;!en&&tn.length;)tn.shift()()}function Kr(t,l,n){if(l.get(t)!==t._trackId){l.set(t,t._trackId);const s=t.deps[t._depsLength];s!==l?(s&&Yr(s,t),t.deps[t._depsLength++]=l):t._depsLength++}}const tn=[];function Qr(t,l,n){qn();for(const s of t.keys())if(s._dirtyLevel<l&&t.get(s)===s._trackId){const r=s._dirtyLevel;s._dirtyLevel=l,r===0&&(s._shouldSchedule=!0,s.trigger())}Xr(t),Un()}function Xr(t){for(const l of t.keys())l.scheduler&&l._shouldSchedule&&(!l._runnings||l.allowRecurse)&&t.get(l)===l._trackId&&(l._shouldSchedule=!1,tn.push(l.scheduler))}const Zr=(t,l)=>{const n=new Map;return n.cleanup=t,n.computed=l,n},Gl=new WeakMap,si=Symbol(""),ln=Symbol("");function st(t,l,n){if(Yt&&ni){let s=Gl.get(t);s||Gl.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Zr(()=>s.delete(n))),Kr(ni,r)}}function Rt(t,l,n,s,r,m){const f=Gl.get(t);if(!f)return;let p=[];if(l==="clear")p=[...f.values()];else if(n==="length"&&se(t)){const o=Number(s);f.forEach((u,g)=>{(g==="length"||!Kt(g)&&g>=o)&&p.push(u)})}else switch(n!==void 0&&p.push(f.get(n)),l){case"add":se(t)?On(n)&&p.push(f.get("length")):(p.push(f.get(si)),Ti(t)&&p.push(f.get(ln)));break;case"delete":se(t)||(p.push(f.get(si)),Ti(t)&&p.push(f.get(ln)));break;case"set":Ti(t)&&p.push(f.get(si));break}qn();for(const o of p)o&&Qr(o,2);Un()}function _m(t,l){var n;return(n=Gl.get(t))==null?void 0:n.get(l)}const bm=ua("__proto__,__v_isRef,__isVue"),ed=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kt)),Bs=vm();function vm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(l=>{t[l]=function(...n){const s=ke(this);for(let m=0,f=this.length;m<f;m++)st(s,"get",m+"");const r=s[l](...n);return r===-1||r===!1?s[l](...n.map(ke)):r}}),["push","pop","shift","unshift","splice"].forEach(l=>{t[l]=function(...n){_i(),qn();const s=ke(this)[l].apply(this,n);return Un(),bi(),s}}),t}function ym(t){const l=ke(this);return st(l,"has",t),l.hasOwnProperty(t)}class td{constructor(l=!1,n=!1){this._isReadonly=l,this._shallow=n}get(l,n,s){const r=this._isReadonly,m=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return m;if(n==="__v_raw")return s===(r?m?od:sd:m?nd:ad).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(s)?l:void 0;const f=se(l);if(!r){if(f&&xe(Bs,n))return Reflect.get(Bs,n,s);if(n==="hasOwnProperty")return ym}const p=Reflect.get(l,n,s);return(Kt(n)?ed.has(n):bm(n))||(r||st(l,"get",n),m)?p:Qe(p)?f&&On(n)?p:p.value:De(p)?r?Gn(p):Mt(p):p}}class id extends td{constructor(l=!1){super(!1,l)}set(l,n,s,r){let m=l[n];if(!this._shallow){const o=di(m);if(!ul(s)&&!di(s)&&(m=ke(m),s=ke(s)),!se(l)&&Qe(m)&&!Qe(s))return o?!1:(m.value=s,!0)}const f=se(l)&&On(n)?Number(n)<l.length:xe(l,n),p=Reflect.set(l,n,s,r);return l===ke(r)&&(f?yt(s,m)&&Rt(l,"set",n,s):Rt(l,"add",n,s)),p}deleteProperty(l,n){const s=xe(l,n);l[n];const r=Reflect.deleteProperty(l,n);return r&&s&&Rt(l,"delete",n,void 0),r}has(l,n){const s=Reflect.has(l,n);return(!Kt(n)||!ed.has(n))&&st(l,"has",n),s}ownKeys(l){return st(l,"iterate",se(l)?"length":si),Reflect.ownKeys(l)}}class ld extends td{constructor(l=!1){super(!0,l)}set(l,n){return!0}deleteProperty(l,n){return!0}}const Cm=new id,wm=new ld,Am=new id(!0),Sm=new ld(!0),Jn=t=>t,ca=t=>Reflect.getPrototypeOf(t);function Tl(t,l,n=!1,s=!1){t=t.__v_raw;const r=ke(t),m=ke(l);n||(yt(l,m)&&st(r,"get",l),st(r,"get",m));const{has:f}=ca(r),p=s?Jn:n?Kn:rl;if(f.call(r,l))return p(t.get(l));if(f.call(r,m))return p(t.get(m));t!==r&&t.get(l)}function El(t,l=!1){const n=this.__v_raw,s=ke(n),r=ke(t);return l||(yt(t,r)&&st(s,"has",t),st(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function xl(t,l=!1){return t=t.__v_raw,!l&&st(ke(t),"iterate",si),Reflect.get(t,"size",t)}function Rs(t){t=ke(t);const l=ke(this);return ca(l).has.call(l,t)||(l.add(t),Rt(l,"add",t,t)),this}function zs(t,l){l=ke(l);const n=ke(this),{has:s,get:r}=ca(n);let m=s.call(n,t);m||(t=ke(t),m=s.call(n,t));const f=r.call(n,t);return n.set(t,l),m?yt(l,f)&&Rt(n,"set",t,l):Rt(n,"add",t,l),this}function Ps(t){const l=ke(this),{has:n,get:s}=ca(l);let r=n.call(l,t);r||(t=ke(t),r=n.call(l,t)),s&&s.call(l,t);const m=l.delete(t);return r&&Rt(l,"delete",t,void 0),m}function Ms(){const t=ke(this),l=t.size!==0,n=t.clear();return l&&Rt(t,"clear",void 0,void 0),n}function Bl(t,l){return function(s,r){const m=this,f=m.__v_raw,p=ke(f),o=l?Jn:t?Kn:rl;return!t&&st(p,"iterate",si),f.forEach((u,g)=>s.call(r,o(u),o(g),m))}}function Rl(t,l,n){return function(...s){const r=this.__v_raw,m=ke(r),f=Ti(m),p=t==="entries"||t===Symbol.iterator&&f,o=t==="keys"&&f,u=r[t](...s),g=n?Jn:l?Kn:rl;return!l&&st(m,"iterate",o?ln:si),{next(){const{value:c,done:h}=u.next();return h?{value:c,done:h}:{value:p?[g(c[0]),g(c[1])]:g(c),done:h}},[Symbol.iterator](){return this}}}}function Vt(t){return function(...l){return t==="delete"?!1:t==="clear"?void 0:this}}function km(){const t={get(m){return Tl(this,m)},get size(){return xl(this)},has:El,add:Rs,set:zs,delete:Ps,clear:Ms,forEach:Bl(!1,!1)},l={get(m){return Tl(this,m,!1,!0)},get size(){return xl(this)},has:El,add:Rs,set:zs,delete:Ps,clear:Ms,forEach:Bl(!1,!0)},n={get(m){return Tl(this,m,!0)},get size(){return xl(this,!0)},has(m){return El.call(this,m,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:Bl(!0,!1)},s={get(m){return Tl(this,m,!0,!0)},get size(){return xl(this,!0)},has(m){return El.call(this,m,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:Bl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{t[m]=Rl(m,!1,!1),n[m]=Rl(m,!0,!1),l[m]=Rl(m,!1,!0),s[m]=Rl(m,!0,!0)}),[t,n,l,s]}const[$m,Tm,Em,xm]=km();function ma(t,l){const n=l?t?xm:Em:t?Tm:$m;return(s,r,m)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(xe(n,r)&&r in s?n:s,r,m)}const Bm={get:ma(!1,!1)},Rm={get:ma(!1,!0)},zm={get:ma(!0,!1)},Pm={get:ma(!0,!0)},ad=new WeakMap,nd=new WeakMap,sd=new WeakMap,od=new WeakMap;function Mm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nm(t){return t.__v_skip||!Object.isExtensible(t)?0:Mm(em(t))}function Mt(t){return di(t)?t:pa(t,!1,Cm,Bm,ad)}function ud(t){return pa(t,!1,Am,Rm,nd)}function Gn(t){return pa(t,!0,wm,zm,sd)}function Dm(t){return pa(t,!0,Sm,Pm,od)}function pa(t,l,n,s,r){if(!De(t)||t.__v_raw&&!(l&&t.__v_isReactive))return t;const m=r.get(t);if(m)return m;const f=Nm(t);if(f===0)return t;const p=new Proxy(t,f===2?s:n);return r.set(t,p),p}function oi(t){return di(t)?oi(t.__v_raw):!!(t&&t.__v_isReactive)}function di(t){return!!(t&&t.__v_isReadonly)}function ul(t){return!!(t&&t.__v_isShallow)}function Yn(t){return oi(t)||di(t)}function ke(t){const l=t&&t.__v_raw;return l?ke(l):t}function Wn(t){return Ul(t,"__v_skip",!0),t}const rl=t=>De(t)?Mt(t):t,Kn=t=>De(t)?Gn(t):t;class rd{constructor(l,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zi(()=>l(this._value),()=>xi(this,1),()=>this.dep&&Xr(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const l=ke(this);return(!l._cacheable||l.effect.dirty)&&yt(l._value,l._value=l.effect.run())&&xi(l,2),Qn(l),l.effect._dirtyLevel>=1&&xi(l,1),l._value}set value(l){this._setter(l)}get _dirty(){return this.effect.dirty}set _dirty(l){this.effect.dirty=l}}function Fm(t,l,n=!1){let s,r;const m=fe(t);return m?(s=t,r=at):(s=t.get,r=t.set),new rd(s,r,m||!r,n)}function Qn(t){Yt&&ni&&(t=ke(t),Kr(ni,t.dep||(t.dep=Zr(()=>t.dep=void 0,t instanceof rd?t:void 0))))}function xi(t,l=2,n){t=ke(t);const s=t.dep;s&&Qr(s,l)}function Qe(t){return!!(t&&t.__v_isRef===!0)}function I(t){return cd(t,!1)}function dd(t){return cd(t,!0)}function cd(t,l){return Qe(t)?t:new Vm(t,l)}class Vm{constructor(l,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?l:ke(l),this._value=n?l:rl(l)}get value(){return Qn(this),this._value}set value(l){const n=this.__v_isShallow||ul(l)||di(l);l=n?l:ke(l),yt(l,this._rawValue)&&(this._rawValue=l,this._value=n?l:rl(l),xi(this,2))}}function Im(t){xi(t,2)}function Wt(t){return Qe(t)?t.value:t}function Lm(t){return fe(t)?t():Wt(t)}const Om={get:(t,l,n)=>Wt(Reflect.get(t,l,n)),set:(t,l,n,s)=>{const r=t[l];return Qe(r)&&!Qe(n)?(r.value=n,!0):Reflect.set(t,l,n,s)}};function Xn(t){return oi(t)?t:new Proxy(t,Om)}class Hm{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=l(()=>Qn(this),()=>xi(this));this._get=n,this._set=s}get value(){return this._get()}set value(l){this._set(l)}}function md(t){return new Hm(t)}function jm(t){const l=se(t)?new Array(t.length):{};for(const n in t)l[n]=pd(t,n);return l}class qm{constructor(l,n,s){this._object=l,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}get dep(){return _m(ke(this._object),this._key)}}class Um{constructor(l){this._getter=l,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function an(t,l,n){return Qe(t)?t:fe(t)?new Um(t):De(t)&&arguments.length>1?pd(t,l,n):I(t)}function pd(t,l,n){const s=t[l];return Qe(s)?s:new qm(t,l,n)}const Jm={GET:"get",HAS:"has",ITERATE:"iterate"},Gm={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ym(t,l){}const Wm={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Km={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function zt(t,l,n,s){let r;try{r=s?t(...s):t()}catch(m){vi(m,l,n)}return r}function pt(t,l,n,s){if(fe(t)){const m=zt(t,l,n,s);return m&&Ln(m)&&m.catch(f=>{vi(f,l,n)}),m}const r=[];for(let m=0;m<t.length;m++)r.push(pt(t[m],l,n,s));return r}function vi(t,l,n,s=!0){const r=l?l.vnode:null;if(l){let m=l.parent;const f=l.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;m;){const u=m.ec;if(u){for(let g=0;g<u.length;g++)if(u[g](t,f,p)===!1)return}m=m.parent}const o=l.appContext.config.errorHandler;if(o){zt(o,null,10,[t,f,p]);return}}Qm(t,n,r,s)}function Qm(t,l,n,s=!0){console.error(t)}let dl=!1,nn=!1;const Xe=[];let St=0;const Bi=[];let jt=null,li=0;const fd=Promise.resolve();let Zn=null;function Li(t){const l=Zn||fd;return t?l.then(this?t.bind(this):t):l}function Xm(t){let l=St+1,n=Xe.length;for(;l<n;){const s=l+n>>>1,r=Xe[s],m=cl(r);m<t||m===t&&r.pre?l=s+1:n=s}return l}function fa(t){(!Xe.length||!Xe.includes(t,dl&&t.allowRecurse?St+1:St))&&(t.id==null?Xe.push(t):Xe.splice(Xm(t.id),0,t),gd())}function gd(){!dl&&!nn&&(nn=!0,Zn=fd.then(hd))}function Zm(t){const l=Xe.indexOf(t);l>St&&Xe.splice(l,1)}function Yl(t){se(t)?Bi.push(...t):(!jt||!jt.includes(t,t.allowRecurse?li+1:li))&&Bi.push(t),gd()}function Ns(t,l,n=dl?St+1:0){for(;n<Xe.length;n++){const s=Xe[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Xe.splice(n,1),n--,s()}}}function Wl(t){if(Bi.length){const l=[...new Set(Bi)].sort((n,s)=>cl(n)-cl(s));if(Bi.length=0,jt){jt.push(...l);return}for(jt=l,li=0;li<jt.length;li++)jt[li]();jt=null,li=0}}const cl=t=>t.id==null?1/0:t.id,ep=(t,l)=>{const n=cl(t)-cl(l);if(n===0){if(t.pre&&!l.pre)return-1;if(l.pre&&!t.pre)return 1}return n};function hd(t){nn=!1,dl=!0,Xe.sort(ep);try{for(St=0;St<Xe.length;St++){const l=Xe[St];l&&l.active!==!1&&zt(l,null,14)}}finally{St=0,Xe.length=0,Wl(),dl=!1,Zn=null,(Xe.length||Bi.length)&&hd()}}let Si,zl=[];function _d(t,l){var n,s;Si=t,Si?(Si.enabled=!0,zl.forEach(({event:r,args:m})=>Si.emit(r,...m)),zl=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{_d(m,l)}),setTimeout(()=>{Si||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,zl=[])},3e3)):zl=[]}function tp(t,l,...n){if(t.isUnmounted)return;const s=t.vnode.props||Pe;let r=n;const m=l.startsWith("update:"),f=m&&l.slice(7);if(f&&f in s){const g=`${f==="modelValue"?"model":f}Modifiers`,{number:c,trim:h}=s[g]||Pe;h&&(r=n.map(v=>je(v)?v.trim():v)),c&&(r=n.map(ol))}let p,o=s[p=el(l)]||s[p=el(it(l))];!o&&m&&(o=s[p=el(mt(l))]),o&&pt(o,t,6,r);const u=s[p+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[p])return;t.emitted[p]=!0,pt(u,t,6,r)}}function bd(t,l,n=!1){const s=l.emitsCache,r=s.get(t);if(r!==void 0)return r;const m=t.emits;let f={},p=!1;if(!fe(t)){const o=u=>{const g=bd(u,l,!0);g&&(p=!0,He(f,g))};!n&&l.mixins.length&&l.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!m&&!p?(De(t)&&s.set(t,null),null):(se(m)?m.forEach(o=>f[o]=null):He(f,m),De(t)&&s.set(t,f),f)}function ga(t,l){return!t||!bl(l)?!1:(l=l.slice(2).replace(/Once$/,""),xe(t,l[0].toLowerCase()+l.slice(1))||xe(t,mt(l))||xe(t,l))}let qe=null,ha=null;function ml(t){const l=qe;return qe=t,ha=t&&t.type.__scopeId||null,l}function _a(t){ha=t}function ba(){ha=null}const ip=t=>i;function i(t,l=qe,n){if(!l||t._n)return t;const s=(...r)=>{s._d&&pn(-1);const m=ml(l);let f;try{f=t(...r)}finally{ml(m),s._d&&pn(1)}return f};return s._n=!0,s._c=!0,s._d=!0,s}function Hl(t){const{type:l,vnode:n,proxy:s,withProxy:r,props:m,propsOptions:[f],slots:p,attrs:o,emit:u,render:g,renderCache:c,data:h,setupState:v,ctx:d,inheritAttrs:y}=t;let A,$;const b=ml(t);try{if(n.shapeFlag&4){const k=r||s,T=k;A=dt(g.call(T,k,c,m,v,h,d)),$=o}else{const k=l;A=dt(k.length>1?k(m,{attrs:o,slots:p,emit:u}):k(m,null)),$=l.props?o:ap(o)}}catch(k){ll.length=0,vi(k,t,1),A=e(et)}let w=A;if($&&y!==!1){const k=Object.keys($),{shapeFlag:T}=w;k.length&&T&7&&(f&&k.some(Vn)&&($=np($,f)),w=$t(w,$))}return n.dirs&&(w=$t(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),A=w,ml(b),A}function lp(t,l=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(kt(r)){if(r.type!==et||r.children==="v-if"){if(n)return;n=r}}else return}return n}const ap=t=>{let l;for(const n in t)(n==="class"||n==="style"||bl(n))&&((l||(l={}))[n]=t[n]);return l},np=(t,l)=>{const n={};for(const s in t)(!Vn(s)||!(s.slice(9)in l))&&(n[s]=t[s]);return n};function sp(t,l,n){const{props:s,children:r,component:m}=t,{props:f,children:p,patchFlag:o}=l,u=m.emitsOptions;if(l.dirs||l.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return s?Ds(s,f,u):!!f;if(o&8){const g=l.dynamicProps;for(let c=0;c<g.length;c++){const h=g[c];if(f[h]!==s[h]&&!ga(u,h))return!0}}}else return(r||p)&&(!p||!p.$stable)?!0:s===f?!1:s?f?Ds(s,f,u):!0:!!f;return!1}function Ds(t,l,n){const s=Object.keys(l);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const m=s[r];if(l[m]!==t[m]&&!ga(n,m))return!0}return!1}function es({vnode:t,parent:l},n){for(;l;){const s=l.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=l.vnode).el=n,l=l.parent;else break}}const ts="components",op="directives";function _(t,l){return is(ts,t,!0,l)||t}const vd=Symbol.for("v-ndc");function up(t){return je(t)?is(ts,t,!1)||t:t||vd}function va(t){return is(op,t)}function is(t,l,n=!0,s=!1){const r=qe||Je;if(r){const m=r.type;if(t===ts){const p=bn(m,!1);if(p&&(p===l||p===it(l)||p===vl(it(l))))return m}const f=Fs(r[t]||m[t],l)||Fs(r.appContext[t],l);return!f&&s?m:f}}function Fs(t,l){return t&&(t[l]||t[it(l)]||t[vl(it(l))])}const yd=t=>t.__isSuspense;let sn=0;const rp={name:"Suspense",__isSuspense:!0,process(t,l,n,s,r,m,f,p,o,u){if(t==null)cp(l,n,s,r,m,f,p,o,u);else{if(m&&m.deps>0){l.suspense=t.suspense;return}mp(t,l,n,s,r,f,p,o,u)}},hydrate:pp,create:ls,normalize:fp},dp=rp;function pl(t,l){const n=t.props&&t.props[l];fe(n)&&n()}function cp(t,l,n,s,r,m,f,p,o){const{p:u,o:{createElement:g}}=o,c=g("div"),h=t.suspense=ls(t,r,s,l,c,n,m,f,p,o);u(null,h.pendingBranch=t.ssContent,c,null,s,h,m,f),h.deps>0?(pl(t,"onPending"),pl(t,"onFallback"),u(null,t.ssFallback,l,n,s,null,m,f),Ri(h,t.ssFallback)):h.resolve(!1,!0)}function mp(t,l,n,s,r,m,f,p,{p:o,um:u,o:{createElement:g}}){const c=l.suspense=t.suspense;c.vnode=l,l.el=t.el;const h=l.ssContent,v=l.ssFallback,{activeBranch:d,pendingBranch:y,isInFallback:A,isHydrating:$}=c;if(y)c.pendingBranch=h,vt(h,y)?(o(y,h,c.hiddenContainer,null,r,c,m,f,p),c.deps<=0?c.resolve():A&&($||(o(d,v,n,s,r,null,m,f,p),Ri(c,v)))):(c.pendingId=sn++,$?(c.isHydrating=!1,c.activeBranch=y):u(y,r,c),c.deps=0,c.effects.length=0,c.hiddenContainer=g("div"),A?(o(null,h,c.hiddenContainer,null,r,c,m,f,p),c.deps<=0?c.resolve():(o(d,v,n,s,r,null,m,f,p),Ri(c,v))):d&&vt(h,d)?(o(d,h,n,s,r,c,m,f,p),c.resolve(!0)):(o(null,h,c.hiddenContainer,null,r,c,m,f,p),c.deps<=0&&c.resolve()));else if(d&&vt(h,d))o(d,h,n,s,r,c,m,f,p),Ri(c,h);else if(pl(l,"onPending"),c.pendingBranch=h,h.shapeFlag&512?c.pendingId=h.component.suspenseId:c.pendingId=sn++,o(null,h,c.hiddenContainer,null,r,c,m,f,p),c.deps<=0)c.resolve();else{const{timeout:b,pendingId:w}=c;b>0?setTimeout(()=>{c.pendingId===w&&c.fallback(v)},b):b===0&&c.fallback(v)}}function ls(t,l,n,s,r,m,f,p,o,u,g=!1){const{p:c,m:h,um:v,n:d,o:{parentNode:y,remove:A}}=u;let $;const b=gp(t);b&&l!=null&&l.pendingBranch&&($=l.pendingId,l.deps++);const w=t.props?Jl(t.props.timeout):void 0,k=m,T={vnode:t,parent:l,parentComponent:n,namespace:f,container:s,hiddenContainer:r,deps:0,pendingId:sn++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(x=!1,P=!1){const{vnode:M,activeBranch:z,pendingBranch:F,pendingId:Z,effects:H,parentComponent:re,container:ye}=T;let V=!1;T.isHydrating?T.isHydrating=!1:x||(V=z&&F.transition&&F.transition.mode==="out-in",V&&(z.transition.afterLeave=()=>{Z===T.pendingId&&(h(F,ye,m===k?d(z):m,0),Yl(H))}),z&&(y(z.el)!==T.hiddenContainer&&(m=d(z)),v(z,re,T,!0)),V||h(F,ye,m,0)),Ri(T,F),T.pendingBranch=null,T.isInFallback=!1;let O=T.parent,ae=!1;for(;O;){if(O.pendingBranch){O.effects.push(...H),ae=!0;break}O=O.parent}!ae&&!V&&Yl(H),T.effects=[],b&&l&&l.pendingBranch&&$===l.pendingId&&(l.deps--,l.deps===0&&!P&&l.resolve()),pl(M,"onResolve")},fallback(x){if(!T.pendingBranch)return;const{vnode:P,activeBranch:M,parentComponent:z,container:F,namespace:Z}=T;pl(P,"onFallback");const H=d(M),re=()=>{T.isInFallback&&(c(null,x,F,H,z,null,Z,p,o),Ri(T,x))},ye=x.transition&&x.transition.mode==="out-in";ye&&(M.transition.afterLeave=re),T.isInFallback=!0,v(M,z,null,!0),ye||re()},move(x,P,M){T.activeBranch&&h(T.activeBranch,x,P,M),T.container=x},next(){return T.activeBranch&&d(T.activeBranch)},registerDep(x,P){const M=!!T.pendingBranch;M&&T.deps++;const z=x.vnode.el;x.asyncDep.catch(F=>{vi(F,x,0)}).then(F=>{if(x.isUnmounted||T.isUnmounted||T.pendingId!==x.suspenseId)return;x.asyncResolved=!0;const{vnode:Z}=x;hn(x,F,!1),z&&(Z.el=z);const H=!z&&x.subTree.el;P(x,Z,y(z||x.subTree.el),z?null:d(x.subTree),T,f,o),H&&A(H),es(x,Z.el),M&&--T.deps===0&&T.resolve()})},unmount(x,P){T.isUnmounted=!0,T.activeBranch&&v(T.activeBranch,n,x,P),T.pendingBranch&&v(T.pendingBranch,n,x,P)}};return T}function pp(t,l,n,s,r,m,f,p,o){const u=l.suspense=ls(l,s,n,t.parentNode,document.createElement("div"),null,r,m,f,p,!0),g=o(t,u.pendingBranch=l.ssContent,n,u,m,f);return u.deps===0&&u.resolve(!1,!0),g}function fp(t){const{shapeFlag:l,children:n}=t,s=l&32;t.ssContent=Vs(s?n.default:n),t.ssFallback=s?Vs(n.fallback):e(et)}function Vs(t){let l;if(fe(t)){const n=pi&&t._c;n&&(t._d=!1,K()),t=t(),n&&(t._d=!0,l=nt,Xd())}return se(t)&&(t=lp(t)),t=dt(t),l&&!t.dynamicChildren&&(t.dynamicChildren=l.filter(n=>n!==t)),t}function Cd(t,l){l&&l.pendingBranch?se(t)?l.effects.push(...t):l.effects.push(t):Yl(t)}function Ri(t,l){t.activeBranch=l;const{vnode:n,parentComponent:s}=t;let r=l.el;for(;!r&&l.component;)l=l.component.subTree,r=l.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,es(s,r))}function gp(t){var l;return((l=t.props)==null?void 0:l.suspensible)!=null&&t.props.suspensible!==!1}const wd=Symbol.for("v-scx"),Ad=()=>Be(wd);function as(t,l){return wl(t,null,l)}function Sd(t,l){return wl(t,null,{flush:"post"})}function kd(t,l){return wl(t,null,{flush:"sync"})}const Pl={};function Ze(t,l,n){return wl(t,l,n)}function wl(t,l,{immediate:n,deep:s,flush:r,once:m,onTrack:f,onTrigger:p}=Pe){if(l&&m){const x=l;l=(...P)=>{x(...P),T()}}const o=Je,u=x=>s===!0?x:ai(x,s===!1?1:void 0);let g,c=!1,h=!1;if(Qe(t)?(g=()=>t.value,c=ul(t)):oi(t)?(g=()=>u(t),c=!0):se(t)?(h=!0,c=t.some(x=>oi(x)||ul(x)),g=()=>t.map(x=>{if(Qe(x))return x.value;if(oi(x))return u(x);if(fe(x))return zt(x,o,2)})):fe(t)?l?g=()=>zt(t,o,2):g=()=>(v&&v(),pt(t,o,3,[d])):g=at,l&&s){const x=g;g=()=>ai(x())}let v,d=x=>{v=w.onStop=()=>{zt(x,o,4),v=w.onStop=void 0}},y;if(kl)if(d=at,l?n&&pt(l,o,3,[g(),h?[]:void 0,d]):g(),r==="sync"){const x=Ad();y=x.__watcherHandles||(x.__watcherHandles=[])}else return at;let A=h?new Array(t.length).fill(Pl):Pl;const $=()=>{if(!(!w.active||!w.dirty))if(l){const x=w.run();(s||c||(h?x.some((P,M)=>yt(P,A[M])):yt(x,A)))&&(v&&v(),pt(l,o,3,[x,A===Pl?void 0:h&&A[0]===Pl?[]:A,d]),A=x)}else w.run()};$.allowRecurse=!!l;let b;r==="sync"?b=$:r==="post"?b=()=>Ye($,o&&o.suspense):($.pre=!0,o&&($.id=o.uid),b=()=>fa($));const w=new zi(g,at,b),k=jn(),T=()=>{w.stop(),k&&In(k.effects,w)};return l?n?$():A=w.run():r==="post"?Ye(w.run.bind(w),o&&o.suspense):w.run(),y&&y.push(T),T}function hp(t,l,n){const s=this.proxy,r=je(t)?t.includes(".")?$d(s,t):()=>s[t]:t.bind(s,s);let m;fe(l)?m=l:(m=l.handler,n=l);const f=fi(this),p=wl(r,m.bind(s),n);return f(),p}function $d(t,l){const n=l.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ai(t,l,n=0,s){if(!De(t)||t.__v_skip)return t;if(l&&l>0){if(n>=l)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Qe(t))ai(t.value,l,n,s);else if(se(t))for(let r=0;r<t.length;r++)ai(t[r],l,n,s);else if(hi(t)||Ti(t))t.forEach(r=>{ai(r,l,n,s)});else if(Hr(t))for(const r in t)ai(t[r],l,n,s);return t}function ya(t,l){if(qe===null)return t;const n=$a(qe)||qe.proxy,s=t.dirs||(t.dirs=[]);for(let r=0;r<l.length;r++){let[m,f,p,o=Pe]=l[r];m&&(fe(m)&&(m={mounted:m,updated:m}),m.deep&&ai(f),s.push({dir:m,instance:n,value:f,oldValue:void 0,arg:p,modifiers:o}))}return t}function At(t,l,n,s){const r=t.dirs,m=l&&l.dirs;for(let f=0;f<r.length;f++){const p=r[f];m&&(p.oldValue=m[f].value);let o=p.dir[s];o&&(_i(),pt(o,n,8,[t.el,p,t,l]),bi())}}const qt=Symbol("_leaveCb"),Ml=Symbol("_enterCb");function ns(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yi(()=>{t.isMounted=!0}),Sa(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],ss={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},_p={name:"BaseTransition",props:ss,setup(t,{slots:l}){const n=Dt(),s=ns();let r;return()=>{const m=l.default&&Ca(l.default(),!0);if(!m||!m.length)return;let f=m[0];if(m.length>1){for(const y of m)if(y.type!==et){f=y;break}}const p=ke(t),{mode:o}=p;if(s.isLeaving)return Na(f);const u=Is(f);if(!u)return Na(f);const g=Pi(u,p,s,n);ci(u,g);const c=n.subTree,h=c&&Is(c);let v=!1;const{getTransitionKey:d}=u.type;if(d){const y=d();r===void 0?r=y:y!==r&&(r=y,v=!0)}if(h&&h.type!==et&&(!vt(u,h)||v)){const y=Pi(h,p,s,n);if(ci(h,y),o==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Na(f);o==="in-out"&&u.type!==et&&(y.delayLeave=(A,$,b)=>{const w=Ed(s,h);w[String(h.key)]=h,A[qt]=()=>{$(),A[qt]=void 0,delete g.delayedLeave},g.delayedLeave=b})}return f}}},Td=_p;function Ed(t,l){const{leavingVNodes:n}=t;let s=n.get(l.type);return s||(s=Object.create(null),n.set(l.type,s)),s}function Pi(t,l,n,s){const{appear:r,mode:m,persisted:f=!1,onBeforeEnter:p,onEnter:o,onAfterEnter:u,onEnterCancelled:g,onBeforeLeave:c,onLeave:h,onAfterLeave:v,onLeaveCancelled:d,onBeforeAppear:y,onAppear:A,onAfterAppear:$,onAppearCancelled:b}=l,w=String(t.key),k=Ed(n,t),T=(M,z)=>{M&&pt(M,s,9,z)},x=(M,z)=>{const F=z[1];T(M,z),se(M)?M.every(Z=>Z.length<=1)&&F():M.length<=1&&F()},P={mode:m,persisted:f,beforeEnter(M){let z=p;if(!n.isMounted)if(r)z=y||p;else return;M[qt]&&M[qt](!0);const F=k[w];F&&vt(t,F)&&F.el[qt]&&F.el[qt](),T(z,[M])},enter(M){let z=o,F=u,Z=g;if(!n.isMounted)if(r)z=A||o,F=$||u,Z=b||g;else return;let H=!1;const re=M[Ml]=ye=>{H||(H=!0,ye?T(Z,[M]):T(F,[M]),P.delayedLeave&&P.delayedLeave(),M[Ml]=void 0)};z?x(z,[M,re]):re()},leave(M,z){const F=String(t.key);if(M[Ml]&&M[Ml](!0),n.isUnmounting)return z();T(c,[M]);let Z=!1;const H=M[qt]=re=>{Z||(Z=!0,z(),re?T(d,[M]):T(v,[M]),M[qt]=void 0,k[F]===t&&delete k[F])};k[F]=t,h?x(h,[M,H]):H()},clone(M){return Pi(M,l,n,s)}};return P}function Na(t){if(Al(t))return t=$t(t),t.children=null,t}function Is(t){return Al(t)?t.children?t.children[0]:void 0:t}function ci(t,l){t.shapeFlag&6&&t.component?ci(t.component.subTree,l):t.shapeFlag&128?(t.ssContent.transition=l.clone(t.ssContent),t.ssFallback.transition=l.clone(t.ssFallback)):t.transition=l}function Ca(t,l=!1,n){let s=[],r=0;for(let m=0;m<t.length;m++){let f=t[m];const p=n==null?f.key:String(n)+String(f.key!=null?f.key:m);f.type===we?(f.patchFlag&128&&r++,s=s.concat(Ca(f.children,l,p))):(l||f.type!==et)&&s.push(p!=null?$t(f,{key:p}):f)}if(r>1)for(let m=0;m<s.length;m++)s[m].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function B(t,l){return fe(t)?He({name:t.name},l,{setup:t}):t}const ui=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function bp(t){fe(t)&&(t={loader:t});const{loader:l,loadingComponent:n,errorComponent:s,delay:r=200,timeout:m,suspensible:f=!0,onError:p}=t;let o=null,u,g=0;const c=()=>(g++,o=null,h()),h=()=>{let v;return o||(v=o=l().catch(d=>{if(d=d instanceof Error?d:new Error(String(d)),p)return new Promise((y,A)=>{p(d,()=>y(c()),()=>A(d),g+1)});throw d}).then(d=>v!==o&&o?o:(d&&(d.__esModule||d[Symbol.toStringTag]==="Module")&&(d=d.default),u=d,d)))};return B({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const v=Je;if(u)return()=>Da(u,v);const d=b=>{o=null,vi(b,v,13,!s)};if(f&&v.suspense||kl)return h().then(b=>()=>Da(b,v)).catch(b=>(d(b),()=>s?e(s,{error:b}):null));const y=I(!1),A=I(),$=I(!!r);return r&&setTimeout(()=>{$.value=!1},r),m!=null&&setTimeout(()=>{if(!y.value&&!A.value){const b=new Error(`Async component timed out after ${m}ms.`);d(b),A.value=b}},m),h().then(()=>{y.value=!0,v.parent&&Al(v.parent.vnode)&&(v.parent.effect.dirty=!0,fa(v.parent.update))}).catch(b=>{d(b),A.value=b}),()=>{if(y.value&&u)return Da(u,v);if(A.value&&s)return e(s,{error:A.value});if(n&&!$.value)return e(n)}}})}function Da(t,l){const{ref:n,props:s,children:r,ce:m}=l.vnode,f=e(t,s,r);return f.ref=n,f.ce=m,delete l.vnode.ce,f}const Al=t=>t.type.__isKeepAlive,vp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:l}){const n=Dt(),s=n.ctx;if(!s.renderer)return()=>{const b=l.default&&l.default();return b&&b.length===1?b[0]:b};const r=new Map,m=new Set;let f=null;const p=n.suspense,{renderer:{p:o,m:u,um:g,o:{createElement:c}}}=s,h=c("div");s.activate=(b,w,k,T,x)=>{const P=b.component;u(b,w,k,0,p),o(P.vnode,b,w,k,P,p,T,b.slotScopeIds,x),Ye(()=>{P.isDeactivated=!1,P.a&&Ei(P.a);const M=b.props&&b.props.onVnodeMounted;M&&lt(M,P.parent,b)},p)},s.deactivate=b=>{const w=b.component;u(b,h,null,1,p),Ye(()=>{w.da&&Ei(w.da);const k=b.props&&b.props.onVnodeUnmounted;k&&lt(k,w.parent,b),w.isDeactivated=!0},p)};function v(b){Fa(b),g(b,n,p,!0)}function d(b){r.forEach((w,k)=>{const T=bn(w.type);T&&(!b||!b(T))&&y(k)})}function y(b){const w=r.get(b);!f||!vt(w,f)?v(w):f&&Fa(f),r.delete(b),m.delete(b)}Ze(()=>[t.include,t.exclude],([b,w])=>{b&&d(k=>Yi(b,k)),w&&d(k=>!Yi(w,k))},{flush:"post",deep:!0});let A=null;const $=()=>{A!=null&&r.set(A,Va(n.subTree))};return yi($),Aa($),Sa(()=>{r.forEach(b=>{const{subTree:w,suspense:k}=n,T=Va(w);if(b.type===T.type&&b.key===T.key){Fa(T);const x=T.component.da;x&&Ye(x,k);return}v(b)})}),()=>{if(A=null,!l.default)return null;const b=l.default(),w=b[0];if(b.length>1)return f=null,b;if(!kt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return f=null,w;let k=Va(w);const T=k.type,x=bn(ui(k)?k.type.__asyncResolved||{}:T),{include:P,exclude:M,max:z}=t;if(P&&(!x||!Yi(P,x))||M&&x&&Yi(M,x))return f=k,w;const F=k.key==null?T:k.key,Z=r.get(F);return k.el&&(k=$t(k),w.shapeFlag&128&&(w.ssContent=k)),A=F,Z?(k.el=Z.el,k.component=Z.component,k.transition&&ci(k,k.transition),k.shapeFlag|=512,m.delete(F),m.add(F)):(m.add(F),z&&m.size>parseInt(z,10)&&y(m.values().next().value)),k.shapeFlag|=256,f=k,yd(w.type)?w:k}}},yp=vp;function Yi(t,l){return se(t)?t.some(n=>Yi(n,l)):je(t)?t.split(",").includes(l):Zc(t)?t.test(l):!1}function os(t,l){xd(t,"a",l)}function us(t,l){xd(t,"da",l)}function xd(t,l,n=Je){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(wa(l,s,n),n){let r=n.parent;for(;r&&r.parent;)Al(r.parent.vnode)&&Cp(s,l,n,r),r=r.parent}}function Cp(t,l,n,s){const r=wa(l,t,s,!0);Ci(()=>{In(s[l],r)},n)}function Fa(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Va(t){return t.shapeFlag&128?t.ssContent:t}function wa(t,l,n=Je,s=!1){if(n){const r=n[t]||(n[t]=[]),m=l.__weh||(l.__weh=(...f)=>{if(n.isUnmounted)return;_i();const p=fi(n),o=pt(l,n,t,f);return p(),bi(),o});return s?r.unshift(m):r.push(m),m}}const Nt=t=>(l,n=Je)=>(!kl||t==="sp")&&wa(t,(...s)=>l(...s),n),Bd=Nt("bm"),yi=Nt("m"),Rd=Nt("bu"),Aa=Nt("u"),Sa=Nt("bum"),Ci=Nt("um"),zd=Nt("sp"),Pd=Nt("rtg"),Md=Nt("rtc");function Nd(t,l=Je){wa("ec",t,l)}function Ke(t,l,n,s){let r;const m=n&&n[s];if(se(t)||je(t)){r=new Array(t.length);for(let f=0,p=t.length;f<p;f++)r[f]=l(t[f],f,void 0,m&&m[f])}else if(typeof t=="number"){r=new Array(t);for(let f=0;f<t;f++)r[f]=l(f+1,f,void 0,m&&m[f])}else if(De(t))if(t[Symbol.iterator])r=Array.from(t,(f,p)=>l(f,p,void 0,m&&m[p]));else{const f=Object.keys(t);r=new Array(f.length);for(let p=0,o=f.length;p<o;p++){const u=f[p];r[p]=l(t[u],u,p,m&&m[p])}}else r=[];return n&&(n[s]=r),r}function wp(t,l){for(let n=0;n<l.length;n++){const s=l[n];if(se(s))for(let r=0;r<s.length;r++)t[s[r].name]=s[r].fn;else s&&(t[s.name]=s.key?(...r)=>{const m=s.fn(...r);return m&&(m.key=s.key),m}:s.fn)}return t}function Dd(t,l,n={},s,r){if(qe.isCE||qe.parent&&ui(qe.parent)&&qe.parent.isCE)return l!=="default"&&(n.name=l),e("slot",n,s&&s());let m=t[l];m&&m._c&&(m._d=!1),K();const f=m&&Fd(m(n)),p=Ve(we,{key:n.key||f&&f.key||`_${l}`},f||(s?s():[]),f&&t._===1?64:-2);return!r&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),m&&m._c&&(m._d=!0),p}function Fd(t){return t.some(l=>kt(l)?!(l.type===et||l.type===we&&!Fd(l.children)):!0)?t:null}function Ap(t,l){const n={};for(const s in t)n[l&&/[A-Z]/.test(s)?`on:${s}`:el(s)]=t[s];return n}const on=t=>t?ac(t)?$a(t)||t.proxy:on(t.parent):null,tl=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>on(t.parent),$root:t=>on(t.root),$emit:t=>t.emit,$options:t=>rs(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,fa(t.update)}),$nextTick:t=>t.n||(t.n=Li.bind(t.proxy)),$watch:t=>hp.bind(t)}),Ia=(t,l)=>t!==Pe&&!t.__isScriptSetup&&xe(t,l),un={get({_:t},l){const{ctx:n,setupState:s,data:r,props:m,accessCache:f,type:p,appContext:o}=t;let u;if(l[0]!=="$"){const v=f[l];if(v!==void 0)switch(v){case 1:return s[l];case 2:return r[l];case 4:return n[l];case 3:return m[l]}else{if(Ia(s,l))return f[l]=1,s[l];if(r!==Pe&&xe(r,l))return f[l]=2,r[l];if((u=t.propsOptions[0])&&xe(u,l))return f[l]=3,m[l];if(n!==Pe&&xe(n,l))return f[l]=4,n[l];rn&&(f[l]=0)}}const g=tl[l];let c,h;if(g)return l==="$attrs"&&st(t,"get",l),g(t);if((c=p.__cssModules)&&(c=c[l]))return c;if(n!==Pe&&xe(n,l))return f[l]=4,n[l];if(h=o.config.globalProperties,xe(h,l))return h[l]},set({_:t},l,n){const{data:s,setupState:r,ctx:m}=t;return Ia(r,l)?(r[l]=n,!0):s!==Pe&&xe(s,l)?(s[l]=n,!0):xe(t.props,l)||l[0]==="$"&&l.slice(1)in t?!1:(m[l]=n,!0)},has({_:{data:t,setupState:l,accessCache:n,ctx:s,appContext:r,propsOptions:m}},f){let p;return!!n[f]||t!==Pe&&xe(t,f)||Ia(l,f)||(p=m[0])&&xe(p,f)||xe(s,f)||xe(tl,f)||xe(r.config.globalProperties,f)},defineProperty(t,l,n){return n.get!=null?t._.accessCache[l]=0:xe(n,"value")&&this.set(t,l,n.value,null),Reflect.defineProperty(t,l,n)}},Sp=He({},un,{get(t,l){if(l!==Symbol.unscopables)return un.get(t,l,t)},has(t,l){return l[0]!=="_"&&!am(l)}});function kp(){return null}function $p(){return null}function Tp(t){}function Ep(t){}function xp(){return null}function Bp(){}function Rp(t,l){return null}function zp(){return Vd().slots}function Pp(){return Vd().attrs}function Vd(){const t=Dt();return t.setupContext||(t.setupContext=oc(t))}function fl(t){return se(t)?t.reduce((l,n)=>(l[n]=null,l),{}):t}function Mp(t,l){const n=fl(t);for(const s in l){if(s.startsWith("__skip"))continue;let r=n[s];r?se(r)||fe(r)?r=n[s]={type:r,default:l[s]}:r.default=l[s]:r===null&&(r=n[s]={default:l[s]}),r&&l[`__skip_${s}`]&&(r.skipFactory=!0)}return n}function Np(t,l){return!t||!l?t||l:se(t)&&se(l)?t.concat(l):He({},fl(t),fl(l))}function Dp(t,l){const n={};for(const s in t)l.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function Fp(t){const l=Dt();let n=t();return gn(),Ln(n)&&(n=n.catch(s=>{throw fi(l),s})),[n,()=>fi(l)]}let rn=!0;function Vp(t){const l=rs(t),n=t.proxy,s=t.ctx;rn=!1,l.beforeCreate&&Ls(l.beforeCreate,t,"bc");const{data:r,computed:m,methods:f,watch:p,provide:o,inject:u,created:g,beforeMount:c,mounted:h,beforeUpdate:v,updated:d,activated:y,deactivated:A,beforeDestroy:$,beforeUnmount:b,destroyed:w,unmounted:k,render:T,renderTracked:x,renderTriggered:P,errorCaptured:M,serverPrefetch:z,expose:F,inheritAttrs:Z,components:H,directives:re,filters:ye}=l;if(u&&Ip(u,s,null),f)for(const ae in f){const W=f[ae];fe(W)&&(s[ae]=W.bind(n))}if(r){const ae=r.call(n,n);De(ae)&&(t.data=Mt(ae))}if(rn=!0,m)for(const ae in m){const W=m[ae],Ae=fe(W)?W.bind(n,n):fe(W.get)?W.get.bind(n,n):at,Le=!fe(W)&&fe(W.set)?W.set.bind(n):at,Ue=D({get:Ae,set:Le});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Me=>Ue.value=Me})}if(p)for(const ae in p)Id(p[ae],s,n,ae);if(o){const ae=fe(o)?o.call(n):o;Reflect.ownKeys(ae).forEach(W=>{We(W,ae[W])})}g&&Ls(g,t,"c");function O(ae,W){se(W)?W.forEach(Ae=>ae(Ae.bind(n))):W&&ae(W.bind(n))}if(O(Bd,c),O(yi,h),O(Rd,v),O(Aa,d),O(os,y),O(us,A),O(Nd,M),O(Md,x),O(Pd,P),O(Sa,b),O(Ci,k),O(zd,z),se(F))if(F.length){const ae=t.exposed||(t.exposed={});F.forEach(W=>{Object.defineProperty(ae,W,{get:()=>n[W],set:Ae=>n[W]=Ae})})}else t.exposed||(t.exposed={});T&&t.render===at&&(t.render=T),Z!=null&&(t.inheritAttrs=Z),H&&(t.components=H),re&&(t.directives=re)}function Ip(t,l,n=at){se(t)&&(t=dn(t));for(const s in t){const r=t[s];let m;De(r)?"default"in r?m=Be(r.from||s,r.default,!0):m=Be(r.from||s):m=Be(r),Qe(m)?Object.defineProperty(l,s,{enumerable:!0,configurable:!0,get:()=>m.value,set:f=>m.value=f}):l[s]=m}}function Ls(t,l,n){pt(se(t)?t.map(s=>s.bind(l.proxy)):t.bind(l.proxy),l,n)}function Id(t,l,n,s){const r=s.includes(".")?$d(n,s):()=>n[s];if(je(t)){const m=l[t];fe(m)&&Ze(r,m)}else if(fe(t))Ze(r,t.bind(n));else if(De(t))if(se(t))t.forEach(m=>Id(m,l,n,s));else{const m=fe(t.handler)?t.handler.bind(n):l[t.handler];fe(m)&&Ze(r,m,t)}}function rs(t){const l=t.type,{mixins:n,extends:s}=l,{mixins:r,optionsCache:m,config:{optionMergeStrategies:f}}=t.appContext,p=m.get(l);let o;return p?o=p:!r.length&&!n&&!s?o=l:(o={},r.length&&r.forEach(u=>Kl(o,u,f,!0)),Kl(o,l,f)),De(l)&&m.set(l,o),o}function Kl(t,l,n,s=!1){const{mixins:r,extends:m}=l;m&&Kl(t,m,n,!0),r&&r.forEach(f=>Kl(t,f,n,!0));for(const f in l)if(!(s&&f==="expose")){const p=Lp[f]||n&&n[f];t[f]=p?p(t[f],l[f]):l[f]}return t}const Lp={data:Os,props:Hs,emits:Hs,methods:Wi,computed:Wi,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Wi,directives:Wi,watch:Hp,provide:Os,inject:Op};function Os(t,l){return l?t?function(){return He(fe(t)?t.call(this,this):t,fe(l)?l.call(this,this):l)}:l:t}function Op(t,l){return Wi(dn(t),dn(l))}function dn(t){if(se(t)){const l={};for(let n=0;n<t.length;n++)l[t[n]]=t[n];return l}return t}function tt(t,l){return t?[...new Set([].concat(t,l))]:l}function Wi(t,l){return t?He(Object.create(null),t,l):l}function Hs(t,l){return t?se(t)&&se(l)?[...new Set([...t,...l])]:He(Object.create(null),fl(t),fl(l??{})):l}function Hp(t,l){if(!t)return l;if(!l)return t;const n=He(Object.create(null),t);for(const s in l)n[s]=tt(t[s],l[s]);return n}function Ld(){return{app:null,config:{isNativeTag:Qc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jp=0;function qp(t,l){return function(s,r=null){fe(s)||(s=He({},s)),r!=null&&!De(r)&&(r=null);const m=Ld(),f=new WeakSet;let p=!1;const o=m.app={_uid:jp++,_component:s,_props:r,_container:null,_context:m,_instance:null,version:rc,get config(){return m.config},set config(u){},use(u,...g){return f.has(u)||(u&&fe(u.install)?(f.add(u),u.install(o,...g)):fe(u)&&(f.add(u),u(o,...g))),o},mixin(u){return m.mixins.includes(u)||m.mixins.push(u),o},component(u,g){return g?(m.components[u]=g,o):m.components[u]},directive(u,g){return g?(m.directives[u]=g,o):m.directives[u]},mount(u,g,c){if(!p){const h=e(s,r);return h.appContext=m,c===!0?c="svg":c===!1&&(c=void 0),g&&l?l(h,u):t(h,u,c),p=!0,o._container=u,u.__vue_app__=o,$a(h.component)||h.component.proxy}},unmount(){p&&(t(null,o._container),delete o._container.__vue_app__)},provide(u,g){return m.provides[u]=g,o},runWithContext(u){gl=o;try{return u()}finally{gl=null}}};return o}}let gl=null;function We(t,l){if(Je){let n=Je.provides;const s=Je.parent&&Je.parent.provides;s===n&&(n=Je.provides=Object.create(s)),n[t]=l}}function Be(t,l,n=!1){const s=Je||qe;if(s||gl){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:gl._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&fe(l)?l.call(s&&s.proxy):l}}function Up(){return!!(Je||qe||gl)}function Jp(t,l,n,s=!1){const r={},m={};Ul(m,ka,1),t.propsDefaults=Object.create(null),Od(t,l,r,m);for(const f in t.propsOptions[0])f in r||(r[f]=void 0);n?t.props=s?r:ud(r):t.type.props?t.props=r:t.props=m,t.attrs=m}function Gp(t,l,n,s){const{props:r,attrs:m,vnode:{patchFlag:f}}=t,p=ke(r),[o]=t.propsOptions;let u=!1;if((s||f>0)&&!(f&16)){if(f&8){const g=t.vnode.dynamicProps;for(let c=0;c<g.length;c++){let h=g[c];if(ga(t.emitsOptions,h))continue;const v=l[h];if(o)if(xe(m,h))v!==m[h]&&(m[h]=v,u=!0);else{const d=it(h);r[d]=cn(o,p,d,v,t,!1)}else v!==m[h]&&(m[h]=v,u=!0)}}}else{Od(t,l,r,m)&&(u=!0);let g;for(const c in p)(!l||!xe(l,c)&&((g=mt(c))===c||!xe(l,g)))&&(o?n&&(n[c]!==void 0||n[g]!==void 0)&&(r[c]=cn(o,p,c,void 0,t,!0)):delete r[c]);if(m!==p)for(const c in m)(!l||!xe(l,c))&&(delete m[c],u=!0)}u&&Rt(t,"set","$attrs")}function Od(t,l,n,s){const[r,m]=t.propsOptions;let f=!1,p;if(l)for(let o in l){if(Zi(o))continue;const u=l[o];let g;r&&xe(r,g=it(o))?!m||!m.includes(g)?n[g]=u:(p||(p={}))[g]=u:ga(t.emitsOptions,o)||(!(o in s)||u!==s[o])&&(s[o]=u,f=!0)}if(m){const o=ke(n),u=p||Pe;for(let g=0;g<m.length;g++){const c=m[g];n[c]=cn(r,o,c,u[c],t,!xe(u,c))}}return f}function cn(t,l,n,s,r,m){const f=t[n];if(f!=null){const p=xe(f,"default");if(p&&s===void 0){const o=f.default;if(f.type!==Function&&!f.skipFactory&&fe(o)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const g=fi(r);s=u[n]=o.call(null,l),g()}}else s=o}f[0]&&(m&&!p?s=!1:f[1]&&(s===""||s===mt(n))&&(s=!0))}return s}function Hd(t,l,n=!1){const s=l.propsCache,r=s.get(t);if(r)return r;const m=t.props,f={},p=[];let o=!1;if(!fe(t)){const g=c=>{o=!0;const[h,v]=Hd(c,l,!0);He(f,h),v&&p.push(...v)};!n&&l.mixins.length&&l.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!m&&!o)return De(t)&&s.set(t,$i),$i;if(se(m))for(let g=0;g<m.length;g++){const c=it(m[g]);js(c)&&(f[c]=Pe)}else if(m)for(const g in m){const c=it(g);if(js(c)){const h=m[g],v=f[c]=se(h)||fe(h)?{type:h}:He({},h);if(v){const d=Js(Boolean,v.type),y=Js(String,v.type);v[0]=d>-1,v[1]=y<0||d<y,(d>-1||xe(v,"default"))&&p.push(c)}}}const u=[f,p];return De(t)&&s.set(t,u),u}function js(t){return t[0]!=="$"}function qs(t){const l=t&&t.toString().match(/^\s*(function|class) (\w+)/);return l?l[2]:t===null?"null":""}function Us(t,l){return qs(t)===qs(l)}function Js(t,l){return se(l)?l.findIndex(n=>Us(n,t)):fe(l)&&Us(l,t)?0:-1}const jd=t=>t[0]==="_"||t==="$stable",ds=t=>se(t)?t.map(dt):[dt(t)],Yp=(t,l,n)=>{if(l._n)return l;const s=i((...r)=>ds(l(...r)),n);return s._c=!1,s},qd=(t,l,n)=>{const s=t._ctx;for(const r in t){if(jd(r))continue;const m=t[r];if(fe(m))l[r]=Yp(r,m,s);else if(m!=null){const f=ds(m);l[r]=()=>f}}},Ud=(t,l)=>{const n=ds(l);t.slots.default=()=>n},Wp=(t,l)=>{if(t.vnode.shapeFlag&32){const n=l._;n?(t.slots=ke(l),Ul(l,"_",n)):qd(l,t.slots={})}else t.slots={},l&&Ud(t,l);Ul(t.slots,ka,1)},Kp=(t,l,n)=>{const{vnode:s,slots:r}=t;let m=!0,f=Pe;if(s.shapeFlag&32){const p=l._;p?n&&p===1?m=!1:(He(r,l),!n&&p===1&&delete r._):(m=!l.$stable,qd(l,r)),f=l}else l&&(Ud(t,l),f={default:1});if(m)for(const p in r)!jd(p)&&f[p]==null&&delete r[p]};function Ql(t,l,n,s,r=!1){if(se(t)){t.forEach((h,v)=>Ql(h,l&&(se(l)?l[v]:l),n,s,r));return}if(ui(s)&&!r)return;const m=s.shapeFlag&4?$a(s.component)||s.component.proxy:s.el,f=r?null:m,{i:p,r:o}=t,u=l&&l.r,g=p.refs===Pe?p.refs={}:p.refs,c=p.setupState;if(u!=null&&u!==o&&(je(u)?(g[u]=null,xe(c,u)&&(c[u]=null)):Qe(u)&&(u.value=null)),fe(o))zt(o,p,12,[f,g]);else{const h=je(o),v=Qe(o),d=t.f;if(h||v){const y=()=>{if(d){const A=h?xe(c,o)?c[o]:g[o]:o.value;r?se(A)&&In(A,m):se(A)?A.includes(m)||A.push(m):h?(g[o]=[m],xe(c,o)&&(c[o]=g[o])):(o.value=[m],t.k&&(g[t.k]=o.value))}else h?(g[o]=f,xe(c,o)&&(c[o]=f)):v&&(o.value=f,t.k&&(g[t.k]=f))};r||d?y():(y.id=-1,Ye(y,n))}}}let It=!1;const Qp=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Xp=t=>t.namespaceURI.includes("MathML"),Nl=t=>{if(Qp(t))return"svg";if(Xp(t))return"mathml"},Dl=t=>t.nodeType===8;function Zp(t){const{mt:l,p:n,o:{patchProp:s,createText:r,nextSibling:m,parentNode:f,remove:p,insert:o,createComment:u}}=t,g=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),Wl(),k._vnode=w;return}It=!1,c(k.firstChild,w,null,null,null),Wl(),k._vnode=w,It&&console.error("Hydration completed but contains mismatches.")},c=(w,k,T,x,P,M=!1)=>{const z=Dl(w)&&w.data==="[",F=()=>y(w,k,T,x,P,z),{type:Z,ref:H,shapeFlag:re,patchFlag:ye}=k;let V=w.nodeType;k.el=w,ye===-2&&(M=!1,k.dynamicChildren=null);let O=null;switch(Z){case mi:V!==3?k.children===""?(o(k.el=r(""),f(w),w),O=w):O=F():(w.data!==k.children&&(It=!0,w.data=k.children),O=m(w));break;case et:b(w)?(O=m(w),$(k.el=w.content.firstChild,w,T)):V!==8||z?O=F():O=m(w);break;case ri:if(z&&(w=m(w),V=w.nodeType),V===1||V===3){O=w;const ae=!k.children.length;for(let W=0;W<k.staticCount;W++)ae&&(k.children+=O.nodeType===1?O.outerHTML:O.data),W===k.staticCount-1&&(k.anchor=O),O=m(O);return z?m(O):O}else F();break;case we:z?O=d(w,k,T,x,P,M):O=F();break;default:if(re&1)(V!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!b(w)?O=F():O=h(w,k,T,x,P,M);else if(re&6){k.slotScopeIds=P;const ae=f(w);if(z?O=A(w):Dl(w)&&w.data==="teleport start"?O=A(w,w.data,"teleport end"):O=m(w),l(k,ae,null,T,x,Nl(ae),M),ui(k)){let W;z?(W=e(we),W.anchor=O?O.previousSibling:ae.lastChild):W=w.nodeType===3?a(""):e("div"),W.el=w,k.component.subTree=W}}else re&64?V!==8?O=F():O=k.type.hydrate(w,k,T,x,P,M,t,v):re&128&&(O=k.type.hydrate(w,k,T,x,Nl(f(w)),P,M,t,c))}return H!=null&&Ql(H,null,x,k),O},h=(w,k,T,x,P,M)=>{M=M||!!k.dynamicChildren;const{type:z,props:F,patchFlag:Z,shapeFlag:H,dirs:re,transition:ye}=k,V=z==="input"||z==="option";if(V||Z!==-1){re&&At(k,null,T,"created");let O=!1;if(b(w)){O=Wd(x,ye)&&T&&T.vnode.props&&T.vnode.props.appear;const W=w.content.firstChild;O&&ye.beforeEnter(W),$(W,w,T),k.el=w=W}if(H&16&&!(F&&(F.innerHTML||F.textContent))){let W=v(w.firstChild,k,w,T,x,P,M);for(;W;){It=!0;const Ae=W;W=W.nextSibling,p(Ae)}}else H&8&&w.textContent!==k.children&&(It=!0,w.textContent=k.children);if(F)if(V||!M||Z&48)for(const W in F)(V&&(W.endsWith("value")||W==="indeterminate")||bl(W)&&!Zi(W)||W[0]===".")&&s(w,W,null,F[W],void 0,void 0,T);else F.onClick&&s(w,"onClick",null,F.onClick,void 0,void 0,T);let ae;(ae=F&&F.onVnodeBeforeMount)&&lt(ae,T,k),re&&At(k,null,T,"beforeMount"),((ae=F&&F.onVnodeMounted)||re||O)&&Cd(()=>{ae&&lt(ae,T,k),O&&ye.enter(w),re&&At(k,null,T,"mounted")},x)}return w.nextSibling},v=(w,k,T,x,P,M,z)=>{z=z||!!k.dynamicChildren;const F=k.children,Z=F.length;for(let H=0;H<Z;H++){const re=z?F[H]:F[H]=dt(F[H]);if(w)w=c(w,re,x,P,M,z);else{if(re.type===mi&&!re.children)continue;It=!0,n(null,re,T,null,x,P,Nl(T),M)}}return w},d=(w,k,T,x,P,M)=>{const{slotScopeIds:z}=k;z&&(P=P?P.concat(z):z);const F=f(w),Z=v(m(w),k,F,T,x,P,M);return Z&&Dl(Z)&&Z.data==="]"?m(k.anchor=Z):(It=!0,o(k.anchor=u("]"),F,Z),Z)},y=(w,k,T,x,P,M)=>{if(It=!0,k.el=null,M){const Z=A(w);for(;;){const H=m(w);if(H&&H!==Z)p(H);else break}}const z=m(w),F=f(w);return p(w),n(null,k,F,z,T,x,Nl(F),P),z},A=(w,k="[",T="]")=>{let x=0;for(;w;)if(w=m(w),w&&Dl(w)&&(w.data===k&&x++,w.data===T)){if(x===0)return m(w);x--}return w},$=(w,k,T)=>{const x=k.parentNode;x&&x.replaceChild(w,k);let P=T;for(;P;)P.vnode.el===k&&(P.vnode.el=P.subTree.el=w),P=P.parent},b=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[g,c]}const Ye=Cd;function Jd(t){return Yd(t)}function Gd(t){return Yd(t,Zp)}function Yd(t,l){const n=jr();n.__VUE__=!0;const{insert:s,remove:r,patchProp:m,createElement:f,createText:p,createComment:o,setText:u,setElementText:g,parentNode:c,nextSibling:h,setScopeId:v=at,insertStaticContent:d}=t,y=(E,R,N,j=null,q=null,X=null,le=void 0,Q=null,te=!!R.dynamicChildren)=>{if(E===R)return;E&&!vt(E,R)&&(j=ee(E),Me(E,q,X,!0),E=null),R.patchFlag===-2&&(te=!1,R.dynamicChildren=null);const{type:J,ref:ne,shapeFlag:ce}=R;switch(J){case mi:A(E,R,N,j);break;case et:$(E,R,N,j);break;case ri:E==null&&b(R,N,j,le);break;case we:H(E,R,N,j,q,X,le,Q,te);break;default:ce&1?T(E,R,N,j,q,X,le,Q,te):ce&6?re(E,R,N,j,q,X,le,Q,te):(ce&64||ce&128)&&J.process(E,R,N,j,q,X,le,Q,te,ze)}ne!=null&&q&&Ql(ne,E&&E.ref,X,R||E,!R)},A=(E,R,N,j)=>{if(E==null)s(R.el=p(R.children),N,j);else{const q=R.el=E.el;R.children!==E.children&&u(q,R.children)}},$=(E,R,N,j)=>{E==null?s(R.el=o(R.children||""),N,j):R.el=E.el},b=(E,R,N,j)=>{[E.el,E.anchor]=d(E.children,R,N,j,E.el,E.anchor)},w=({el:E,anchor:R},N,j)=>{let q;for(;E&&E!==R;)q=h(E),s(E,N,j),E=q;s(R,N,j)},k=({el:E,anchor:R})=>{let N;for(;E&&E!==R;)N=h(E),r(E),E=N;r(R)},T=(E,R,N,j,q,X,le,Q,te)=>{R.type==="svg"?le="svg":R.type==="math"&&(le="mathml"),E==null?x(R,N,j,q,X,le,Q,te):z(E,R,q,X,le,Q,te)},x=(E,R,N,j,q,X,le,Q)=>{let te,J;const{props:ne,shapeFlag:ce,transition:de,dirs:he}=E;if(te=E.el=f(E.type,X,ne&&ne.is,ne),ce&8?g(te,E.children):ce&16&&M(E.children,te,null,j,q,La(E,X),le,Q),he&&At(E,null,j,"created"),P(te,E,E.scopeId,le,j),ne){for(const Ne in ne)Ne!=="value"&&!Zi(Ne)&&m(te,Ne,null,ne[Ne],X,E.children,j,q,ie);"value"in ne&&m(te,"value",null,ne.value,X),(J=ne.onVnodeBeforeMount)&&lt(J,j,E)}he&&At(E,null,j,"beforeMount");const Se=Wd(q,de);Se&&de.beforeEnter(te),s(te,R,N),((J=ne&&ne.onVnodeMounted)||Se||he)&&Ye(()=>{J&&lt(J,j,E),Se&&de.enter(te),he&&At(E,null,j,"mounted")},q)},P=(E,R,N,j,q)=>{if(N&&v(E,N),j)for(let X=0;X<j.length;X++)v(E,j[X]);if(q){let X=q.subTree;if(R===X){const le=q.vnode;P(E,le,le.scopeId,le.slotScopeIds,q.parent)}}},M=(E,R,N,j,q,X,le,Q,te=0)=>{for(let J=te;J<E.length;J++){const ne=E[J]=Q?Ut(E[J]):dt(E[J]);y(null,ne,R,N,j,q,X,le,Q)}},z=(E,R,N,j,q,X,le)=>{const Q=R.el=E.el;let{patchFlag:te,dynamicChildren:J,dirs:ne}=R;te|=E.patchFlag&16;const ce=E.props||Pe,de=R.props||Pe;let he;if(N&&Zt(N,!1),(he=de.onVnodeBeforeUpdate)&&lt(he,N,R,E),ne&&At(R,E,N,"beforeUpdate"),N&&Zt(N,!0),J?F(E.dynamicChildren,J,Q,N,j,La(R,q),X):le||W(E,R,Q,null,N,j,La(R,q),X,!1),te>0){if(te&16)Z(Q,R,ce,de,N,j,q);else if(te&2&&ce.class!==de.class&&m(Q,"class",null,de.class,q),te&4&&m(Q,"style",ce.style,de.style,q),te&8){const Se=R.dynamicProps;for(let Ne=0;Ne<Se.length;Ne++){const Oe=Se[Ne],Ge=ce[Oe],bt=de[Oe];(bt!==Ge||Oe==="value")&&m(Q,Oe,Ge,bt,q,E.children,N,j,ie)}}te&1&&E.children!==R.children&&g(Q,R.children)}else!le&&J==null&&Z(Q,R,ce,de,N,j,q);((he=de.onVnodeUpdated)||ne)&&Ye(()=>{he&&lt(he,N,R,E),ne&&At(R,E,N,"updated")},j)},F=(E,R,N,j,q,X,le)=>{for(let Q=0;Q<R.length;Q++){const te=E[Q],J=R[Q],ne=te.el&&(te.type===we||!vt(te,J)||te.shapeFlag&70)?c(te.el):N;y(te,J,ne,null,j,q,X,le,!0)}},Z=(E,R,N,j,q,X,le)=>{if(N!==j){if(N!==Pe)for(const Q in N)!Zi(Q)&&!(Q in j)&&m(E,Q,N[Q],null,le,R.children,q,X,ie);for(const Q in j){if(Zi(Q))continue;const te=j[Q],J=N[Q];te!==J&&Q!=="value"&&m(E,Q,J,te,le,R.children,q,X,ie)}"value"in j&&m(E,"value",N.value,j.value,le)}},H=(E,R,N,j,q,X,le,Q,te)=>{const J=R.el=E?E.el:p(""),ne=R.anchor=E?E.anchor:p("");let{patchFlag:ce,dynamicChildren:de,slotScopeIds:he}=R;he&&(Q=Q?Q.concat(he):he),E==null?(s(J,N,j),s(ne,N,j),M(R.children||[],N,ne,q,X,le,Q,te)):ce>0&&ce&64&&de&&E.dynamicChildren?(F(E.dynamicChildren,de,N,q,X,le,Q),(R.key!=null||q&&R===q.subTree)&&cs(E,R,!0)):W(E,R,N,ne,q,X,le,Q,te)},re=(E,R,N,j,q,X,le,Q,te)=>{R.slotScopeIds=Q,E==null?R.shapeFlag&512?q.ctx.activate(R,N,j,le,te):ye(R,N,j,q,X,le,te):V(E,R,te)},ye=(E,R,N,j,q,X,le)=>{const Q=E.component=lc(E,j,q);if(Al(E)&&(Q.ctx.renderer=ze),nc(Q),Q.asyncDep){if(q&&q.registerDep(Q,O),!E.el){const te=Q.subTree=e(et);$(null,te,R,N)}}else O(Q,E,R,N,q,X,le)},V=(E,R,N)=>{const j=R.component=E.component;if(sp(E,R,N))if(j.asyncDep&&!j.asyncResolved){ae(j,R,N);return}else j.next=R,Zm(j.update),j.effect.dirty=!0,j.update();else R.el=E.el,j.vnode=R},O=(E,R,N,j,q,X,le)=>{const Q=()=>{if(E.isMounted){let{next:ne,bu:ce,u:de,parent:he,vnode:Se}=E;{const wi=Kd(E);if(wi){ne&&(ne.el=Se.el,ae(E,ne,le)),wi.asyncDep.then(()=>{E.isUnmounted||Q()});return}}let Ne=ne,Oe;Zt(E,!1),ne?(ne.el=Se.el,ae(E,ne,le)):ne=Se,ce&&Ei(ce),(Oe=ne.props&&ne.props.onVnodeBeforeUpdate)&&lt(Oe,he,ne,Se),Zt(E,!0);const Ge=Hl(E),bt=E.subTree;E.subTree=Ge,y(bt,Ge,c(bt.el),ee(bt),E,q,X),ne.el=Ge.el,Ne===null&&es(E,Ge.el),de&&Ye(de,q),(Oe=ne.props&&ne.props.onVnodeUpdated)&&Ye(()=>lt(Oe,he,ne,Se),q)}else{let ne;const{el:ce,props:de}=R,{bm:he,m:Se,parent:Ne}=E,Oe=ui(R);if(Zt(E,!1),he&&Ei(he),!Oe&&(ne=de&&de.onVnodeBeforeMount)&&lt(ne,Ne,R),Zt(E,!0),ce&&be){const Ge=()=>{E.subTree=Hl(E),be(ce,E.subTree,E,q,null)};Oe?R.type.__asyncLoader().then(()=>!E.isUnmounted&&Ge()):Ge()}else{const Ge=E.subTree=Hl(E);y(null,Ge,N,j,E,q,X),R.el=Ge.el}if(Se&&Ye(Se,q),!Oe&&(ne=de&&de.onVnodeMounted)){const Ge=R;Ye(()=>lt(ne,Ne,Ge),q)}(R.shapeFlag&256||Ne&&ui(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&E.a&&Ye(E.a,q),E.isMounted=!0,R=N=j=null}},te=E.effect=new zi(Q,at,()=>fa(J),E.scope),J=E.update=()=>{te.dirty&&te.run()};J.id=E.uid,Zt(E,!0),J()},ae=(E,R,N)=>{R.component=E;const j=E.vnode.props;E.vnode=R,E.next=null,Gp(E,R.props,j,N),Kp(E,R.children,N),_i(),Ns(E),bi()},W=(E,R,N,j,q,X,le,Q,te=!1)=>{const J=E&&E.children,ne=E?E.shapeFlag:0,ce=R.children,{patchFlag:de,shapeFlag:he}=R;if(de>0){if(de&128){Le(J,ce,N,j,q,X,le,Q,te);return}else if(de&256){Ae(J,ce,N,j,q,X,le,Q,te);return}}he&8?(ne&16&&ie(J,q,X),ce!==J&&g(N,ce)):ne&16?he&16?Le(J,ce,N,j,q,X,le,Q,te):ie(J,q,X,!0):(ne&8&&g(N,""),he&16&&M(ce,N,j,q,X,le,Q,te))},Ae=(E,R,N,j,q,X,le,Q,te)=>{E=E||$i,R=R||$i;const J=E.length,ne=R.length,ce=Math.min(J,ne);let de;for(de=0;de<ce;de++){const he=R[de]=te?Ut(R[de]):dt(R[de]);y(E[de],he,N,null,q,X,le,Q,te)}J>ne?ie(E,q,X,!0,!1,ce):M(R,N,j,q,X,le,Q,te,ce)},Le=(E,R,N,j,q,X,le,Q,te)=>{let J=0;const ne=R.length;let ce=E.length-1,de=ne-1;for(;J<=ce&&J<=de;){const he=E[J],Se=R[J]=te?Ut(R[J]):dt(R[J]);if(vt(he,Se))y(he,Se,N,null,q,X,le,Q,te);else break;J++}for(;J<=ce&&J<=de;){const he=E[ce],Se=R[de]=te?Ut(R[de]):dt(R[de]);if(vt(he,Se))y(he,Se,N,null,q,X,le,Q,te);else break;ce--,de--}if(J>ce){if(J<=de){const he=de+1,Se=he<ne?R[he].el:j;for(;J<=de;)y(null,R[J]=te?Ut(R[J]):dt(R[J]),N,Se,q,X,le,Q,te),J++}}else if(J>de)for(;J<=ce;)Me(E[J],q,X,!0),J++;else{const he=J,Se=J,Ne=new Map;for(J=Se;J<=de;J++){const ut=R[J]=te?Ut(R[J]):dt(R[J]);ut.key!=null&&Ne.set(ut.key,J)}let Oe,Ge=0;const bt=de-Se+1;let wi=!1,As=0;const ji=new Array(bt);for(J=0;J<bt;J++)ji[J]=0;for(J=he;J<=ce;J++){const ut=E[J];if(Ge>=bt){Me(ut,q,X,!0);continue}let wt;if(ut.key!=null)wt=Ne.get(ut.key);else for(Oe=Se;Oe<=de;Oe++)if(ji[Oe-Se]===0&&vt(ut,R[Oe])){wt=Oe;break}wt===void 0?Me(ut,q,X,!0):(ji[wt-Se]=J+1,wt>=As?As=wt:wi=!0,y(ut,R[wt],N,null,q,X,le,Q,te),Ge++)}const Ss=wi?ef(ji):$i;for(Oe=Ss.length-1,J=bt-1;J>=0;J--){const ut=Se+J,wt=R[ut],ks=ut+1<ne?R[ut+1].el:j;ji[J]===0?y(null,wt,N,ks,q,X,le,Q,te):wi&&(Oe<0||J!==Ss[Oe]?Ue(wt,N,ks,2):Oe--)}}},Ue=(E,R,N,j,q=null)=>{const{el:X,type:le,transition:Q,children:te,shapeFlag:J}=E;if(J&6){Ue(E.component.subTree,R,N,j);return}if(J&128){E.suspense.move(R,N,j);return}if(J&64){le.move(E,R,N,ze);return}if(le===we){s(X,R,N);for(let ce=0;ce<te.length;ce++)Ue(te[ce],R,N,j);s(E.anchor,R,N);return}if(le===ri){w(E,R,N);return}if(j!==2&&J&1&&Q)if(j===0)Q.beforeEnter(X),s(X,R,N),Ye(()=>Q.enter(X),q);else{const{leave:ce,delayLeave:de,afterLeave:he}=Q,Se=()=>s(X,R,N),Ne=()=>{ce(X,()=>{Se(),he&&he()})};de?de(X,Se,Ne):Ne()}else s(X,R,N)},Me=(E,R,N,j=!1,q=!1)=>{const{type:X,props:le,ref:Q,children:te,dynamicChildren:J,shapeFlag:ne,patchFlag:ce,dirs:de}=E;if(Q!=null&&Ql(Q,null,N,E,!0),ne&256){R.ctx.deactivate(E);return}const he=ne&1&&de,Se=!ui(E);let Ne;if(Se&&(Ne=le&&le.onVnodeBeforeUnmount)&&lt(Ne,R,E),ne&6)L(E.component,N,j);else{if(ne&128){E.suspense.unmount(N,j);return}he&&At(E,null,R,"beforeUnmount"),ne&64?E.type.remove(E,R,N,q,ze,j):J&&(X!==we||ce>0&&ce&64)?ie(J,R,N,!1,!0):(X===we&&ce&384||!q&&ne&16)&&ie(te,R,N),j&&Ct(E)}(Se&&(Ne=le&&le.onVnodeUnmounted)||he)&&Ye(()=>{Ne&&lt(Ne,R,E),he&&At(E,null,R,"unmounted")},N)},Ct=E=>{const{type:R,el:N,anchor:j,transition:q}=E;if(R===we){ot(N,j);return}if(R===ri){k(E);return}const X=()=>{r(N),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(E.shapeFlag&1&&q&&!q.persisted){const{leave:le,delayLeave:Q}=q,te=()=>le(N,X);Q?Q(E.el,X,te):te()}else X()},ot=(E,R)=>{let N;for(;E!==R;)N=h(E),r(E),E=N;r(R)},L=(E,R,N)=>{const{bum:j,scope:q,update:X,subTree:le,um:Q}=E;j&&Ei(j),q.stop(),X&&(X.active=!1,Me(le,E,R,N)),Q&&Ye(Q,R),Ye(()=>{E.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ie=(E,R,N,j=!1,q=!1,X=0)=>{for(let le=X;le<E.length;le++)Me(E[le],R,N,j,q)},ee=E=>E.shapeFlag&6?ee(E.component.subTree):E.shapeFlag&128?E.suspense.next():h(E.anchor||E.el);let ue=!1;const Re=(E,R,N)=>{E==null?R._vnode&&Me(R._vnode,null,null,!0):y(R._vnode||null,E,R,null,null,null,N),ue||(ue=!0,Ns(),Wl(),ue=!1),R._vnode=E},ze={p:y,um:Me,m:Ue,r:Ct,mt:ye,mc:M,pc:W,pbc:F,n:ee,o:t};let _e,be;return l&&([_e,be]=l(ze)),{render:Re,hydrate:_e,createApp:qp(Re,_e)}}function La({type:t,props:l},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:n}function Zt({effect:t,update:l},n){t.allowRecurse=l.allowRecurse=n}function Wd(t,l){return(!t||t&&!t.pendingBranch)&&l&&!l.persisted}function cs(t,l,n=!1){const s=t.children,r=l.children;if(se(s)&&se(r))for(let m=0;m<s.length;m++){const f=s[m];let p=r[m];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=r[m]=Ut(r[m]),p.el=f.el),n||cs(f,p)),p.type===mi&&(p.el=f.el)}}function ef(t){const l=t.slice(),n=[0];let s,r,m,f,p;const o=t.length;for(s=0;s<o;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){l[s]=r,n.push(s);continue}for(m=0,f=n.length-1;m<f;)p=m+f>>1,t[n[p]]<u?m=p+1:f=p;u<t[n[m]]&&(m>0&&(l[s]=n[m-1]),n[m]=s)}}for(m=n.length,f=n[m-1];m-- >0;)n[m]=f,f=l[f];return n}function Kd(t){const l=t.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:Kd(l)}const tf=t=>t.__isTeleport,il=t=>t&&(t.disabled||t.disabled===""),Gs=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ys=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,mn=(t,l)=>{const n=t&&t.to;return je(n)?l?l(n):null:n},lf={name:"Teleport",__isTeleport:!0,process(t,l,n,s,r,m,f,p,o,u){const{mc:g,pc:c,pbc:h,o:{insert:v,querySelector:d,createText:y,createComment:A}}=u,$=il(l.props);let{shapeFlag:b,children:w,dynamicChildren:k}=l;if(t==null){const T=l.el=y(""),x=l.anchor=y("");v(T,n,s),v(x,n,s);const P=l.target=mn(l.props,d),M=l.targetAnchor=y("");P&&(v(M,P),f==="svg"||Gs(P)?f="svg":(f==="mathml"||Ys(P))&&(f="mathml"));const z=(F,Z)=>{b&16&&g(w,F,Z,r,m,f,p,o)};$?z(n,x):P&&z(P,M)}else{l.el=t.el;const T=l.anchor=t.anchor,x=l.target=t.target,P=l.targetAnchor=t.targetAnchor,M=il(t.props),z=M?n:x,F=M?T:P;if(f==="svg"||Gs(x)?f="svg":(f==="mathml"||Ys(x))&&(f="mathml"),k?(h(t.dynamicChildren,k,z,r,m,f,p),cs(t,l,!0)):o||c(t,l,z,F,r,m,f,p,!1),$)M?l.props&&t.props&&l.props.to!==t.props.to&&(l.props.to=t.props.to):Fl(l,n,T,u,1);else if((l.props&&l.props.to)!==(t.props&&t.props.to)){const Z=l.target=mn(l.props,d);Z&&Fl(l,Z,null,u,0)}else M&&Fl(l,x,P,u,1)}Qd(l)},remove(t,l,n,s,{um:r,o:{remove:m}},f){const{shapeFlag:p,children:o,anchor:u,targetAnchor:g,target:c,props:h}=t;if(c&&m(g),f&&m(u),p&16){const v=f||!il(h);for(let d=0;d<o.length;d++){const y=o[d];r(y,l,n,v,!!y.dynamicChildren)}}},move:Fl,hydrate:af};function Fl(t,l,n,{o:{insert:s},m:r},m=2){m===0&&s(t.targetAnchor,l,n);const{el:f,anchor:p,shapeFlag:o,children:u,props:g}=t,c=m===2;if(c&&s(f,l,n),(!c||il(g))&&o&16)for(let h=0;h<u.length;h++)r(u[h],l,n,2);c&&s(p,l,n)}function af(t,l,n,s,r,m,{o:{nextSibling:f,parentNode:p,querySelector:o}},u){const g=l.target=mn(l.props,o);if(g){const c=g._lpa||g.firstChild;if(l.shapeFlag&16)if(il(l.props))l.anchor=u(f(t),l,p(t),n,s,r,m),l.targetAnchor=c;else{l.anchor=f(t);let h=c;for(;h;)if(h=f(h),h&&h.nodeType===8&&h.data==="teleport anchor"){l.targetAnchor=h,g._lpa=l.targetAnchor&&f(l.targetAnchor);break}u(c,l,g,n,s,r,m)}Qd(l)}return l.anchor&&f(l.anchor)}const ms=lf;function Qd(t){const l=t.ctx;if(l&&l.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",l.uid),n=n.nextSibling;l.ut()}}const we=Symbol.for("v-fgt"),mi=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),ri=Symbol.for("v-stc"),ll=[];let nt=null;function K(t=!1){ll.push(nt=t?null:[])}function Xd(){ll.pop(),nt=ll[ll.length-1]||null}let pi=1;function pn(t){pi+=t}function Zd(t){return t.dynamicChildren=pi>0?nt||$i:null,Xd(),pi>0&&nt&&nt.push(t),t}function oe(t,l,n,s,r,m){return Zd(C(t,l,n,s,r,m,!0))}function Ve(t,l,n,s,r){return Zd(e(t,l,n,s,r,!0))}function kt(t){return t?t.__v_isVNode===!0:!1}function vt(t,l){return t.type===l.type&&t.key===l.key}function nf(t){}const ka="__vInternal",ec=({key:t})=>t??null,jl=({ref:t,ref_key:l,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||Qe(t)||fe(t)?{i:qe,r:t,k:l,f:!!n}:t:null);function C(t,l=null,n=null,s=0,r=null,m=t===we?0:1,f=!1,p=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:l,key:l&&ec(l),ref:l&&jl(l),scopeId:ha,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:qe};return p?(ps(o,n),m&128&&t.normalize(o)):n&&(o.shapeFlag|=je(n)?8:16),pi>0&&!f&&nt&&(o.patchFlag>0||m&6)&&o.patchFlag!==32&&nt.push(o),o}const e=sf;function sf(t,l=null,n=null,s=0,r=null,m=!1){if((!t||t===vd)&&(t=et),kt(t)){const p=$t(t,l,!0);return n&&ps(p,n),pi>0&&!m&&nt&&(p.shapeFlag&6?nt[nt.indexOf(t)]=p:nt.push(p)),p.patchFlag|=-2,p}if(ff(t)&&(t=t.__vccOpts),l){l=tc(l);let{class:p,style:o}=l;p&&!je(p)&&(l.class=Cl(p)),De(o)&&(Yn(o)&&!se(o)&&(o=He({},o)),l.style=yl(o))}const f=je(t)?1:yd(t)?128:tf(t)?64:De(t)?4:fe(t)?2:0;return C(t,l,n,s,r,f,m,!0)}function tc(t){return t?Yn(t)||ka in t?He({},t):t:null}function $t(t,l,n=!1){const{props:s,ref:r,patchFlag:m,children:f}=t,p=l?Sl(s||{},l):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&ec(p),ref:l&&l.ref?n&&r?se(r)?r.concat(jl(l)):[r,jl(l)]:jl(l):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:f,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:l&&t.type!==we?m===-1?16:m|16:m,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$t(t.ssContent),ssFallback:t.ssFallback&&$t(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function a(t=" ",l=0){return e(mi,null,t,l)}function of(t,l){const n=e(ri,null,t);return n.staticCount=l,n}function ic(t="",l=!1){return l?(K(),Ve(et,null,t)):e(et,null,t)}function dt(t){return t==null||typeof t=="boolean"?e(et):se(t)?e(we,null,t.slice()):typeof t=="object"?Ut(t):e(mi,null,String(t))}function Ut(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:$t(t)}function ps(t,l){let n=0;const{shapeFlag:s}=t;if(l==null)l=null;else if(se(l))n=16;else if(typeof l=="object")if(s&65){const r=l.default;r&&(r._c&&(r._d=!1),ps(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=l._;!r&&!(ka in l)?l._ctx=qe:r===3&&qe&&(qe.slots._===1?l._=1:(l._=2,t.patchFlag|=1024))}else fe(l)?(l={default:l,_ctx:qe},n=32):(l=String(l),s&64?(n=16,l=[a(l)]):n=8);t.children=l,t.shapeFlag|=n}function Sl(...t){const l={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")l.class!==s.class&&(l.class=Cl([l.class,s.class]));else if(r==="style")l.style=yl([l.style,s.style]);else if(bl(r)){const m=l[r],f=s[r];f&&m!==f&&!(se(m)&&m.includes(f))&&(l[r]=m?[].concat(m,f):f)}else r!==""&&(l[r]=s[r])}return l}function lt(t,l,n,s=null){pt(t,l,7,[n,s])}const uf=Ld();let rf=0;function lc(t,l,n){const s=t.type,r=(l?l.appContext:t.appContext)||uf,m={uid:rf++,vnode:t,type:s,parent:l,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hd(s,r),emitsOptions:bd(s,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=l?l.root:m,m.emit=tp.bind(null,m),t.ce&&t.ce(m),m}let Je=null;const Dt=()=>Je||qe;let Xl,fn;{const t=jr(),l=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),m=>{r.length>1?r.forEach(f=>f(m)):r[0](m)}};Xl=l("__VUE_INSTANCE_SETTERS__",n=>Je=n),fn=l("__VUE_SSR_SETTERS__",n=>kl=n)}const fi=t=>{const l=Je;return Xl(t),t.scope.on(),()=>{t.scope.off(),Xl(l)}},gn=()=>{Je&&Je.scope.off(),Xl(null)};function ac(t){return t.vnode.shapeFlag&4}let kl=!1;function nc(t,l=!1){l&&fn(l);const{props:n,children:s}=t.vnode,r=ac(t);Jp(t,n,r,l),Wp(t,s);const m=r?df(t,l):void 0;return l&&fn(!1),m}function df(t,l){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wn(new Proxy(t.ctx,un));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?oc(t):null,m=fi(t);_i();const f=zt(s,t,0,[t.props,r]);if(bi(),m(),Ln(f)){if(f.then(gn,gn),l)return f.then(p=>{hn(t,p,l)}).catch(p=>{vi(p,t,0)});t.asyncDep=f}else hn(t,f,l)}else sc(t,l)}function hn(t,l,n){fe(l)?t.type.__ssrInlineRender?t.ssrRender=l:t.render=l:De(l)&&(t.setupState=Xn(l)),sc(t,n)}let Zl,_n;function cf(t){Zl=t,_n=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,Sp))}}const mf=()=>!Zl;function sc(t,l,n){const s=t.type;if(!t.render){if(!l&&Zl&&!s.render){const r=s.template||rs(t).template;if(r){const{isCustomElement:m,compilerOptions:f}=t.appContext.config,{delimiters:p,compilerOptions:o}=s,u=He(He({isCustomElement:m,delimiters:p},f),o);s.render=Zl(r,u)}}t.render=s.render||at,_n&&_n(t)}{const r=fi(t);_i();try{Vp(t)}finally{bi(),r()}}}function pf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(l,n){return st(t,"get","$attrs"),l[n]}}))}function oc(t){const l=n=>{t.exposed=n||{}};return{get attrs(){return pf(t)},slots:t.slots,emit:t.emit,expose:l}}function $a(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xn(Wn(t.exposed)),{get(l,n){if(n in l)return l[n];if(n in tl)return tl[n](t)},has(l,n){return n in l||n in tl}}))}function bn(t,l=!0){return fe(t)?t.displayName||t.name:t.name||l&&t.__name}function ff(t){return fe(t)&&"__vccOpts"in t}const D=(t,l)=>Fm(t,l,kl);function gf(t,l,n=Pe){const s=Dt(),r=it(l),m=mt(l),f=md((o,u)=>{let g;return kd(()=>{const c=t[l];yt(g,c)&&(g=c,u())}),{get(){return o(),n.get?n.get(g):g},set(c){const h=s.vnode.props;!(h&&(l in h||r in h||m in h)&&(`onUpdate:${l}`in h||`onUpdate:${r}`in h||`onUpdate:${m}`in h))&&yt(c,g)&&(g=c,u()),s.emit(`update:${l}`,n.set?n.set(c):c)}}}),p=l==="modelValue"?"modelModifiers":`${l}Modifiers`;return f[Symbol.iterator]=()=>{let o=0;return{next(){return o<2?{value:o++?t[p]||{}:f,done:!1}:{done:!0}}}},f}function U(t,l,n){const s=arguments.length;return s===2?De(l)&&!se(l)?kt(l)?e(t,null,[l]):e(t,l):e(t,null,l):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kt(n)&&(n=[n]),e(t,l,n))}function hf(){}function _f(t,l,n,s){const r=n[s];if(r&&uc(r,t))return r;const m=l();return m.memo=t.slice(),n[s]=m}function uc(t,l){const n=t.memo;if(n.length!=l.length)return!1;for(let s=0;s<n.length;s++)if(yt(n[s],l[s]))return!1;return pi>0&&nt&&nt.push(t),!0}const rc="3.4.15",bf=at,vf=Km,yf=Si,Cf=_d,wf={createComponentInstance:lc,setupComponent:nc,renderComponentRoot:Hl,setCurrentRenderingInstance:ml,isVNode:kt,normalizeVNode:dt},Af=wf,Sf=null,kf=null,$f=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Tf="http://www.w3.org/2000/svg",Ef="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,Ws=Jt&&Jt.createElement("template"),xf={insert:(t,l,n)=>{l.insertBefore(t,n||null)},remove:t=>{const l=t.parentNode;l&&l.removeChild(t)},createElement:(t,l,n,s)=>{const r=l==="svg"?Jt.createElementNS(Tf,t):l==="mathml"?Jt.createElementNS(Ef,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,l)=>{t.nodeValue=l},setElementText:(t,l)=>{t.textContent=l},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,l){t.setAttribute(l,"")},insertStaticContent(t,l,n,s,r,m){const f=n?n.previousSibling:l.lastChild;if(r&&(r===m||r.nextSibling))for(;l.insertBefore(r.cloneNode(!0),n),!(r===m||!(r=r.nextSibling)););else{Ws.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const p=Ws.content;if(s==="svg"||s==="mathml"){const o=p.firstChild;for(;o.firstChild;)p.appendChild(o.firstChild);p.removeChild(o)}l.insertBefore(p,n)}return[f?f.nextSibling:l.firstChild,n?n.previousSibling:l.lastChild]}},Lt="transition",qi="animation",Mi=Symbol("_vtc"),fs=(t,{slots:l})=>U(Td,cc(t),l);fs.displayName="Transition";const dc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Bf=fs.props=He({},ss,dc),ei=(t,l=[])=>{se(t)?t.forEach(n=>n(...l)):t&&t(...l)},Ks=t=>t?se(t)?t.some(l=>l.length>1):t.length>1:!1;function cc(t){const l={};for(const H in t)H in dc||(l[H]=t[H]);if(t.css===!1)return l;const{name:n="v",type:s,duration:r,enterFromClass:m=`${n}-enter-from`,enterActiveClass:f=`${n}-enter-active`,enterToClass:p=`${n}-enter-to`,appearFromClass:o=m,appearActiveClass:u=f,appearToClass:g=p,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,d=Rf(r),y=d&&d[0],A=d&&d[1],{onBeforeEnter:$,onEnter:b,onEnterCancelled:w,onLeave:k,onLeaveCancelled:T,onBeforeAppear:x=$,onAppear:P=b,onAppearCancelled:M=w}=l,z=(H,re,ye)=>{Ht(H,re?g:p),Ht(H,re?u:f),ye&&ye()},F=(H,re)=>{H._isLeaving=!1,Ht(H,c),Ht(H,v),Ht(H,h),re&&re()},Z=H=>(re,ye)=>{const V=H?P:b,O=()=>z(re,H,ye);ei(V,[re,O]),Qs(()=>{Ht(re,H?o:m),Et(re,H?g:p),Ks(V)||Xs(re,s,y,O)})};return He(l,{onBeforeEnter(H){ei($,[H]),Et(H,m),Et(H,f)},onBeforeAppear(H){ei(x,[H]),Et(H,o),Et(H,u)},onEnter:Z(!1),onAppear:Z(!0),onLeave(H,re){H._isLeaving=!0;const ye=()=>F(H,re);Et(H,c),pc(),Et(H,h),Qs(()=>{H._isLeaving&&(Ht(H,c),Et(H,v),Ks(k)||Xs(H,s,A,ye))}),ei(k,[H,ye])},onEnterCancelled(H){z(H,!1),ei(w,[H])},onAppearCancelled(H){z(H,!0),ei(M,[H])},onLeaveCancelled(H){F(H),ei(T,[H])}})}function Rf(t){if(t==null)return null;if(De(t))return[Oa(t.enter),Oa(t.leave)];{const l=Oa(t);return[l,l]}}function Oa(t){return Jl(t)}function Et(t,l){l.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Mi]||(t[Mi]=new Set)).add(l)}function Ht(t,l){l.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Mi];n&&(n.delete(l),n.size||(t[Mi]=void 0))}function Qs(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zf=0;function Xs(t,l,n,s){const r=t._endId=++zf,m=()=>{r===t._endId&&s()};if(n)return setTimeout(m,n);const{type:f,timeout:p,propCount:o}=mc(t,l);if(!f)return s();const u=f+"end";let g=0;const c=()=>{t.removeEventListener(u,h),m()},h=v=>{v.target===t&&++g>=o&&c()};setTimeout(()=>{g<o&&c()},p+1),t.addEventListener(u,h)}function mc(t,l){const n=window.getComputedStyle(t),s=d=>(n[d]||"").split(", "),r=s(`${Lt}Delay`),m=s(`${Lt}Duration`),f=Zs(r,m),p=s(`${qi}Delay`),o=s(`${qi}Duration`),u=Zs(p,o);let g=null,c=0,h=0;l===Lt?f>0&&(g=Lt,c=f,h=m.length):l===qi?u>0&&(g=qi,c=u,h=o.length):(c=Math.max(f,u),g=c>0?f>u?Lt:qi:null,h=g?g===Lt?m.length:o.length:0);const v=g===Lt&&/\b(transform|all)(,|$)/.test(s(`${Lt}Property`).toString());return{type:g,timeout:c,propCount:h,hasTransform:v}}function Zs(t,l){for(;t.length<l.length;)t=t.concat(t);return Math.max(...l.map((n,s)=>eo(n)+eo(t[s])))}function eo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function pc(){return document.body.offsetHeight}function Pf(t,l,n){const s=t[Mi];s&&(l=(l?[l,...s]:[...s]).join(" ")),l==null?t.removeAttribute("class"):n?t.setAttribute("class",l):t.className=l}const gs=Symbol("_vod"),fc={beforeMount(t,{value:l},{transition:n}){t[gs]=t.style.display==="none"?"":t.style.display,n&&l?n.beforeEnter(t):Ui(t,l)},mounted(t,{value:l},{transition:n}){n&&l&&n.enter(t)},updated(t,{value:l,oldValue:n},{transition:s}){!l!=!n&&(s?l?(s.beforeEnter(t),Ui(t,!0),s.enter(t)):s.leave(t,()=>{Ui(t,!1)}):Ui(t,l))},beforeUnmount(t,{value:l}){Ui(t,l)}};function Ui(t,l){t.style.display=l?t[gs]:"none"}function Mf(){fc.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const gc=Symbol("");function Nf(t){const l=Dt();if(!l)return;const n=l.ut=(r=t(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(m=>yn(m,r))},s=()=>{const r=t(l.proxy);vn(l.subTree,r),n(r)};Sd(s),yi(()=>{const r=new MutationObserver(s);r.observe(l.subTree.el.parentNode,{childList:!0}),Ci(()=>r.disconnect())})}function vn(t,l){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{vn(n.activeBranch,l)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)yn(t.el,l);else if(t.type===we)t.children.forEach(n=>vn(n,l));else if(t.type===ri){let{el:n,anchor:s}=t;for(;n&&(yn(n,l),n!==s);)n=n.nextSibling}}function yn(t,l){if(t.nodeType===1){const n=t.style;let s="";for(const r in l)n.setProperty(`--${r}`,l[r]),s+=`--${r}: ${l[r]};`;n[gc]=s}}function Df(t,l,n){const s=t.style,r=s.display,m=je(n);if(n&&!m){if(l&&!je(l))for(const f in l)n[f]==null&&Cn(s,f,"");for(const f in n)Cn(s,f,n[f])}else if(m){if(l!==n){const f=s[gc];f&&(n+=";"+f),s.cssText=n}}else l&&t.removeAttribute("style");gs in t&&(s.display=r)}const to=/\s*!important$/;function Cn(t,l,n){if(se(n))n.forEach(s=>Cn(t,l,s));else if(n==null&&(n=""),l.startsWith("--"))t.setProperty(l,n);else{const s=Ff(t,l);to.test(n)?t.setProperty(mt(s),n.replace(to,""),"important"):t[s]=n}}const io=["Webkit","Moz","ms"],Ha={};function Ff(t,l){const n=Ha[l];if(n)return n;let s=it(l);if(s!=="filter"&&s in t)return Ha[l]=s;s=vl(s);for(let r=0;r<io.length;r++){const m=io[r]+s;if(m in t)return Ha[l]=m}return l}const lo="http://www.w3.org/1999/xlink";function Vf(t,l,n,s,r){if(s&&l.startsWith("xlink:"))n==null?t.removeAttributeNS(lo,l.slice(6,l.length)):t.setAttributeNS(lo,l,n);else{const m=cm(l);n==null||m&&!qr(n)?t.removeAttribute(l):t.setAttribute(l,m?"":n)}}function If(t,l,n,s,r,m,f){if(l==="innerHTML"||l==="textContent"){s&&f(s,r,m),t[l]=n??"";return}const p=t.tagName;if(l==="value"&&p!=="PROGRESS"&&!p.includes("-")){t._value=n;const u=p==="OPTION"?t.getAttribute("value"):t.value,g=n??"";u!==g&&(t.value=g),n==null&&t.removeAttribute(l);return}let o=!1;if(n===""||n==null){const u=typeof t[l];u==="boolean"?n=qr(n):n==null&&u==="string"?(n="",o=!0):u==="number"&&(n=0,o=!0)}try{t[l]=n}catch{}o&&t.removeAttribute(l)}function Bt(t,l,n,s){t.addEventListener(l,n,s)}function Lf(t,l,n,s){t.removeEventListener(l,n,s)}const ao=Symbol("_vei");function Of(t,l,n,s,r=null){const m=t[ao]||(t[ao]={}),f=m[l];if(s&&f)f.value=s;else{const[p,o]=Hf(l);if(s){const u=m[l]=Uf(s,r);Bt(t,p,u,o)}else f&&(Lf(t,p,f,o),m[l]=void 0)}}const no=/(?:Once|Passive|Capture)$/;function Hf(t){let l;if(no.test(t)){l={};let s;for(;s=t.match(no);)t=t.slice(0,t.length-s[0].length),l[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mt(t.slice(2)),l]}let ja=0;const jf=Promise.resolve(),qf=()=>ja||(jf.then(()=>ja=0),ja=Date.now());function Uf(t,l){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pt(Jf(s,n.value),l,5,[s])};return n.value=t,n.attached=qf(),n}function Jf(t,l){if(se(l)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},l.map(s=>r=>!r._stopped&&s&&s(r))}else return l}const so=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gf=(t,l,n,s,r,m,f,p,o)=>{const u=r==="svg";l==="class"?Pf(t,s,u):l==="style"?Df(t,n,s):bl(l)?Vn(l)||Of(t,l,n,s,f):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):Yf(t,l,s,u))?If(t,l,s,m,f,p,o):(l==="true-value"?t._trueValue=s:l==="false-value"&&(t._falseValue=s),Vf(t,l,s,u))};function Yf(t,l,n,s){if(s)return!!(l==="innerHTML"||l==="textContent"||l in t&&so(l)&&fe(n));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&t.tagName==="INPUT"||l==="type"&&t.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return so(l)&&je(n)?!1:l in t}/*! #__NO_SIDE_EFFECTS__ */function hc(t,l){const n=B(t);class s extends Ta{constructor(m){super(n,m,l)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const Wf=t=>hc(t,Tc),Kf=typeof HTMLElement<"u"?HTMLElement:class{};class Ta extends Kf{constructor(l,n={},s){super(),this._def=l,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Li(()=>{this._connected||(wn(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const r of s)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const l=(s,r=!1)=>{const{props:m,styles:f}=s;let p;if(m&&!se(m))for(const o in m){const u=m[o];(u===Number||u&&u.type===Number)&&(o in this._props&&(this._props[o]=Jl(this._props[o])),(p||(p=Object.create(null)))[it(o)]=!0)}this._numberProps=p,r&&this._resolveProps(s),this._applyStyles(f),this._update()},n=this._def.__asyncLoader;n?n().then(s=>l(s,!0)):l(this._def)}_resolveProps(l){const{props:n}=l,s=se(n)?n:Object.keys(n||{});for(const r of Object.keys(this))r[0]!=="_"&&s.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of s.map(it))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(m){this._setProp(r,m)}})}_setAttr(l){let n=this.getAttribute(l);const s=it(l);this._numberProps&&this._numberProps[s]&&(n=Jl(n)),this._setProp(s,n,!1)}_getProp(l){return this._props[l]}_setProp(l,n,s=!0,r=!0){n!==this._props[l]&&(this._props[l]=n,r&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(mt(l),""):typeof n=="string"||typeof n=="number"?this.setAttribute(mt(l),n+""):n||this.removeAttribute(mt(l))))}_update(){wn(this._createVNode(),this.shadowRoot)}_createVNode(){const l=e(this._def,He({},this._props));return this._instance||(l.ce=n=>{this._instance=n,n.isCE=!0;const s=(m,f)=>{this.dispatchEvent(new CustomEvent(m,{detail:f}))};n.emit=(m,...f)=>{s(m,f),mt(m)!==m&&s(mt(m),f)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof Ta){n.parent=r._instance,n.provides=r._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function Qf(t="$style"){{const l=Dt();if(!l)return Pe;const n=l.type.__cssModules;if(!n)return Pe;const s=n[t];return s||Pe}}const _c=new WeakMap,bc=new WeakMap,ea=Symbol("_moveCb"),oo=Symbol("_enterCb"),vc={name:"TransitionGroup",props:He({},Bf,{tag:String,moveClass:String}),setup(t,{slots:l}){const n=Dt(),s=ns();let r,m;return Aa(()=>{if(!r.length)return;const f=t.moveClass||`${t.name||"v"}-move`;if(!lg(r[0].el,n.vnode.el,f))return;r.forEach(eg),r.forEach(tg);const p=r.filter(ig);pc(),p.forEach(o=>{const u=o.el,g=u.style;Et(u,f),g.transform=g.webkitTransform=g.transitionDuration="";const c=u[ea]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",c),u[ea]=null,Ht(u,f))};u.addEventListener("transitionend",c)})}),()=>{const f=ke(t),p=cc(f);let o=f.tag||we;r=m,m=l.default?Ca(l.default()):[];for(let u=0;u<m.length;u++){const g=m[u];g.key!=null&&ci(g,Pi(g,p,s,n))}if(r)for(let u=0;u<r.length;u++){const g=r[u];ci(g,Pi(g,p,s,n)),_c.set(g,g.el.getBoundingClientRect())}return e(o,null,m)}}},Xf=t=>delete t.mode;vc.props;const Zf=vc;function eg(t){const l=t.el;l[ea]&&l[ea](),l[oo]&&l[oo]()}function tg(t){bc.set(t,t.el.getBoundingClientRect())}function ig(t){const l=_c.get(t),n=bc.get(t),s=l.left-n.left,r=l.top-n.top;if(s||r){const m=t.el.style;return m.transform=m.webkitTransform=`translate(${s}px,${r}px)`,m.transitionDuration="0s",t}}function lg(t,l,n){const s=t.cloneNode(),r=t[Mi];r&&r.forEach(p=>{p.split(/\s+/).forEach(o=>o&&s.classList.remove(o))}),n.split(/\s+/).forEach(p=>p&&s.classList.add(p)),s.style.display="none";const m=l.nodeType===1?l:l.parentNode;m.appendChild(s);const{hasTransform:f}=mc(s);return m.removeChild(s),f}const Qt=t=>{const l=t.props["onUpdate:modelValue"]||!1;return se(l)?n=>Ei(l,n):l};function ag(t){t.target.composing=!0}function uo(t){const l=t.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const _t=Symbol("_assign"),ta={created(t,{modifiers:{lazy:l,trim:n,number:s}},r){t[_t]=Qt(r);const m=s||r.props&&r.props.type==="number";Bt(t,l?"change":"input",f=>{if(f.target.composing)return;let p=t.value;n&&(p=p.trim()),m&&(p=ol(p)),t[_t](p)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),l||(Bt(t,"compositionstart",ag),Bt(t,"compositionend",uo),Bt(t,"change",uo))},mounted(t,{value:l}){t.value=l??""},beforeUpdate(t,{value:l,modifiers:{lazy:n,trim:s,number:r}},m){if(t[_t]=Qt(m),t.composing)return;const f=r||t.type==="number"?ol(t.value):t.value,p=l??"";f!==p&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===p)||(t.value=p))}},hs={deep:!0,created(t,l,n){t[_t]=Qt(n),Bt(t,"change",()=>{const s=t._modelValue,r=Ni(t),m=t.checked,f=t[_t];if(se(s)){const p=da(s,r),o=p!==-1;if(m&&!o)f(s.concat(r));else if(!m&&o){const u=[...s];u.splice(p,1),f(u)}}else if(hi(s)){const p=new Set(s);m?p.add(r):p.delete(r),f(p)}else f(Cc(t,m))})},mounted:ro,beforeUpdate(t,l,n){t[_t]=Qt(n),ro(t,l,n)}};function ro(t,{value:l,oldValue:n},s){t._modelValue=l,se(l)?t.checked=da(l,s.props.value)>-1:hi(l)?t.checked=l.has(s.props.value):l!==n&&(t.checked=Pt(l,Cc(t,!0)))}const _s={created(t,{value:l},n){t.checked=Pt(l,n.props.value),t[_t]=Qt(n),Bt(t,"change",()=>{t[_t](Ni(t))})},beforeUpdate(t,{value:l,oldValue:n},s){t[_t]=Qt(s),l!==n&&(t.checked=Pt(l,s.props.value))}},yc={deep:!0,created(t,{value:l,modifiers:{number:n}},s){const r=hi(l);Bt(t,"change",()=>{const m=Array.prototype.filter.call(t.options,f=>f.selected).map(f=>n?ol(Ni(f)):Ni(f));t[_t](t.multiple?r?new Set(m):m:m[0]),t._assigning=!0,Li(()=>{t._assigning=!1})}),t[_t]=Qt(s)},mounted(t,{value:l,oldValue:n,modifiers:{number:s}}){co(t,l,n,s)},beforeUpdate(t,l,n){t[_t]=Qt(n)},updated(t,{value:l,oldValue:n,modifiers:{number:s}}){t._assigning||co(t,l,n,s)}};function co(t,l,n,s){const r=t.multiple,m=se(l);if(!(r&&!m&&!hi(l))&&!(m&&Pt(l,n))){for(let f=0,p=t.options.length;f<p;f++){const o=t.options[f],u=Ni(o);if(r)if(m){const g=typeof u;g==="string"||g==="number"?o.selected=l.includes(s?ol(u):u):o.selected=da(l,u)>-1}else o.selected=l.has(u);else if(Pt(Ni(o),l)){t.selectedIndex!==f&&(t.selectedIndex=f);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ni(t){return"_value"in t?t._value:t.value}function Cc(t,l){const n=l?"_trueValue":"_falseValue";return n in t?t[n]:l}const wc={created(t,l,n){Vl(t,l,n,null,"created")},mounted(t,l,n){Vl(t,l,n,null,"mounted")},beforeUpdate(t,l,n,s){Vl(t,l,n,s,"beforeUpdate")},updated(t,l,n,s){Vl(t,l,n,s,"updated")}};function Ac(t,l){switch(t){case"SELECT":return yc;case"TEXTAREA":return ta;default:switch(l){case"checkbox":return hs;case"radio":return _s;default:return ta}}}function Vl(t,l,n,s,r){const f=Ac(t.tagName,n.props&&n.props.type)[r];f&&f(t,l,n,s)}function ng(){ta.getSSRProps=({value:t})=>({value:t}),_s.getSSRProps=({value:t},l)=>{if(l.props&&Pt(l.props.value,t))return{checked:!0}},hs.getSSRProps=({value:t},l)=>{if(se(t)){if(l.props&&da(t,l.props.value)>-1)return{checked:!0}}else if(hi(t)){if(l.props&&t.has(l.props.value))return{checked:!0}}else if(t)return{checked:!0}},wc.getSSRProps=(t,l)=>{if(typeof l.type!="string")return;const n=Ac(l.type.toUpperCase(),l.props&&l.props.type);if(n.getSSRProps)return n.getSSRProps(t,l)}}const sg=["ctrl","shift","alt","meta"],og={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,l)=>sg.some(n=>t[`${n}Key`]&&!l.includes(n))},ft=(t,l)=>{const n=t._withMods||(t._withMods={}),s=l.join(".");return n[s]||(n[s]=(r,...m)=>{for(let f=0;f<l.length;f++){const p=og[l[f]];if(p&&p(r,l))return}return t(r,...m)})},ug={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rg=(t,l)=>{const n=t._withKeys||(t._withKeys={}),s=l.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const m=mt(r.key);if(l.some(f=>f===m||ug[f]===m))return t(r)})},Sc=He({patchProp:Gf},xf);let al,mo=!1;function kc(){return al||(al=Jd(Sc))}function $c(){return al=mo?al:Gd(Sc),mo=!0,al}const wn=(...t)=>{kc().render(...t)},Tc=(...t)=>{$c().hydrate(...t)},Ec=(...t)=>{const l=kc().createApp(...t),{mount:n}=l;return l.mount=s=>{const r=Bc(s);if(!r)return;const m=l._component;!fe(m)&&!m.render&&!m.template&&(m.template=r.innerHTML),r.innerHTML="";const f=n(r,!1,xc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),f},l},dg=(...t)=>{const l=$c().createApp(...t),{mount:n}=l;return l.mount=s=>{const r=Bc(s);if(r)return n(r,!0,xc(r))},l};function xc(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bc(t){return je(t)?document.querySelector(t):t}let po=!1;const cg=()=>{po||(po=!0,ng(),Mf())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mg=()=>{},pg=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Td,BaseTransitionPropsValidators:ss,Comment:et,DeprecationTypes:$f,EffectScope:Hn,ErrorCodes:Wm,ErrorTypeStrings:vf,Fragment:we,KeepAlive:yp,ReactiveEffect:zi,Static:ri,Suspense:dp,Teleport:ms,Text:mi,TrackOpTypes:Jm,Transition:fs,TransitionGroup:Zf,TriggerOpTypes:Gm,VueElement:Ta,assertNumber:Ym,callWithAsyncErrorHandling:pt,callWithErrorHandling:zt,camelize:it,capitalize:vl,cloneVNode:$t,compatUtils:kf,compile:mg,computed:D,createApp:Ec,createBlock:Ve,createCommentVNode:ic,createElementBlock:oe,createElementVNode:C,createHydrationRenderer:Gd,createPropsRestProxy:Dp,createRenderer:Jd,createSSRApp:dg,createSlots:wp,createStaticVNode:of,createTextVNode:a,createVNode:e,customRef:md,defineAsyncComponent:bp,defineComponent:B,defineCustomElement:hc,defineEmits:$p,defineExpose:Tp,defineModel:Bp,defineOptions:Ep,defineProps:kp,defineSSRCustomElement:Wf,defineSlots:xp,devtools:yf,effect:gm,effectScope:pm,getCurrentInstance:Dt,getCurrentScope:jn,getTransitionRawChildren:Ca,guardReactiveProps:tc,h:U,handleError:vi,hasInjectionContext:Up,hydrate:Tc,initCustomFormatter:hf,initDirectivesForSSR:cg,inject:Be,isMemoSame:uc,isProxy:Yn,isReactive:oi,isReadonly:di,isRef:Qe,isRuntimeOnly:mf,isShallow:ul,isVNode:kt,markRaw:Wn,mergeDefaults:Mp,mergeModels:Np,mergeProps:Sl,nextTick:Li,normalizeClass:Cl,normalizeProps:rm,normalizeStyle:yl,onActivated:os,onBeforeMount:Bd,onBeforeUnmount:Sa,onBeforeUpdate:Rd,onDeactivated:us,onErrorCaptured:Nd,onMounted:yi,onRenderTracked:Md,onRenderTriggered:Pd,onScopeDispose:Gr,onServerPrefetch:zd,onUnmounted:Ci,onUpdated:Aa,openBlock:K,popScopeId:ba,provide:We,proxyRefs:Xn,pushScopeId:_a,queuePostFlushCb:Yl,reactive:Mt,readonly:Gn,ref:I,registerRuntimeCompiler:cf,render:wn,renderList:Ke,renderSlot:Dd,resolveComponent:_,resolveDirective:va,resolveDynamicComponent:up,resolveFilter:Sf,resolveTransitionHooks:Pi,setBlockTracking:pn,setDevtoolsHook:Cf,setTransitionHooks:ci,shallowReactive:ud,shallowReadonly:Dm,shallowRef:dd,ssrContextKey:wd,ssrUtils:Af,stop:hm,toDisplayString:$e,toHandlerKey:el,toHandlers:Ap,toRaw:ke,toRef:an,toRefs:jm,toValue:Lm,transformVNodeArgs:nf,triggerRef:Im,unref:Wt,useAttrs:Pp,useCssModule:Qf,useCssVars:Nf,useModel:gf,useSSRContext:Ad,useSlots:zp,useTransitionState:ns,vModelCheckbox:hs,vModelDynamic:wc,vModelRadio:_s,vModelSelect:yc,vModelText:ta,vShow:fc,version:rc,warn:bf,watch:Ze,watchEffect:as,watchPostEffect:Sd,watchSyncEffect:kd,withAsyncContext:Fp,withCtx:i,withDefaults:Rp,withDirectives:ya,withKeys:rg,withMemo:_f,withModifiers:ft,withScopeId:ip},Symbol.toStringTag,{value:"Module"})),fg=B({name:"App"}),pe=(t,l)=>{const n=t.__vccOpts||t;for(const[s,r]of l)n[s]=r;return n};function gg(t,l,n,s,r,m){const f=_("router-view");return K(),Ve(f)}const hg=pe(fg,[["render",gg]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Rc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Oi=t=>Rc?Symbol(t):"_vr_"+t,zc=Oi("rvlm"),fo=Oi("rvd"),Ea=Oi("r"),bs=Oi("rl"),An=Oi("rvl"),ki=typeof window<"u";function _g(t){return t.__esModule||Rc&&t[Symbol.toStringTag]==="Module"}const Fe=Object.assign;function qa(t,l){const n={};for(const s in l){const r=l[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const nl=()=>{},bg=/\/$/,vg=t=>t.replace(bg,"");function Ua(t,l,n="/"){let s,r={},m="",f="";const p=l.indexOf("?"),o=l.indexOf("#",p>-1?p:0);return p>-1&&(s=l.slice(0,p),m=l.slice(p+1,o>-1?o:l.length),r=t(m)),o>-1&&(s=s||l.slice(0,o),f=l.slice(o,l.length)),s=Ag(s??l,n),{fullPath:s+(m&&"?")+m+f,path:s,query:r,hash:f}}function yg(t,l){const n=l.query?t(l.query):"";return l.path+(n&&"?")+n+(l.hash||"")}function go(t,l){return!l||!t.toLowerCase().startsWith(l.toLowerCase())?t:t.slice(l.length)||"/"}function Cg(t,l,n){const s=l.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Di(l.matched[s],n.matched[r])&&Pc(l.params,n.params)&&t(l.query)===t(n.query)&&l.hash===n.hash}function Di(t,l){return(t.aliasOf||t)===(l.aliasOf||l)}function Pc(t,l){if(Object.keys(t).length!==Object.keys(l).length)return!1;for(const n in t)if(!wg(t[n],l[n]))return!1;return!0}function wg(t,l){return Array.isArray(t)?ho(t,l):Array.isArray(l)?ho(l,t):t===l}function ho(t,l){return Array.isArray(l)?t.length===l.length&&t.every((n,s)=>n===l[s]):t.length===1&&t[0]===l}function Ag(t,l){if(t.startsWith("/"))return t;if(!t)return l;const n=l.split("/"),s=t.split("/");let r=n.length-1,m,f;for(m=0;m<s.length;m++)if(f=s[m],!(r===1||f==="."))if(f==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(m-(m===s.length?1:0)).join("/")}var hl;(function(t){t.pop="pop",t.push="push"})(hl||(hl={}));var sl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(sl||(sl={}));function Sg(t){if(!t)if(ki){const l=document.querySelector("base");t=l&&l.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vg(t)}const kg=/^[^#]+#/;function $g(t,l){return t.replace(kg,"#")+l}function Tg(t,l){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:l.behavior,left:s.left-n.left-(l.left||0),top:s.top-n.top-(l.top||0)}}const xa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Eg(t){let l;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;l=Tg(r,t)}else l=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function _o(t,l){return(history.state?history.state.position-l:-1)+t}const Sn=new Map;function xg(t,l){Sn.set(t,l)}function Bg(t){const l=Sn.get(t);return Sn.delete(t),l}let Rg=()=>location.protocol+"//"+location.host;function Mc(t,l){const{pathname:n,search:s,hash:r}=l,m=t.indexOf("#");if(m>-1){let p=r.includes(t.slice(m))?t.slice(m).length:1,o=r.slice(p);return o[0]!=="/"&&(o="/"+o),go(o,"")}return go(n,t)+s+r}function zg(t,l,n,s){let r=[],m=[],f=null;const p=({state:h})=>{const v=Mc(t,location),d=n.value,y=l.value;let A=0;if(h){if(n.value=v,l.value=h,f&&f===d){f=null;return}A=y?h.position-y.position:0}else s(v);r.forEach($=>{$(n.value,d,{delta:A,type:hl.pop,direction:A?A>0?sl.forward:sl.back:sl.unknown})})};function o(){f=n.value}function u(h){r.push(h);const v=()=>{const d=r.indexOf(h);d>-1&&r.splice(d,1)};return m.push(v),v}function g(){const{history:h}=window;h.state&&h.replaceState(Fe({},h.state,{scroll:xa()}),"")}function c(){for(const h of m)h();m=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",g),{pauseListeners:o,listen:u,destroy:c}}function bo(t,l,n,s=!1,r=!1){return{back:t,current:l,forward:n,replaced:s,position:window.history.length,scroll:r?xa():null}}function Pg(t){const{history:l,location:n}=window,s={value:Mc(t,n)},r={value:l.state};r.value||m(s.value,{back:null,current:s.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function m(o,u,g){const c=t.indexOf("#"),h=c>-1?(n.host&&document.querySelector("base")?t:t.slice(c))+o:Rg()+t+o;try{l[g?"replaceState":"pushState"](u,"",h),r.value=u}catch(v){console.error(v),n[g?"replace":"assign"](h)}}function f(o,u){const g=Fe({},l.state,bo(r.value.back,o,r.value.forward,!0),u,{position:r.value.position});m(o,g,!0),s.value=o}function p(o,u){const g=Fe({},r.value,l.state,{forward:o,scroll:xa()});m(g.current,g,!0);const c=Fe({},bo(s.value,o,null),{position:g.position+1},u);m(o,c,!1),s.value=o}return{location:s,state:r,push:p,replace:f}}function Mg(t){t=Sg(t);const l=Pg(t),n=zg(t,l.state,l.location,l.replace);function s(m,f=!0){f||n.pauseListeners(),history.go(m)}const r=Fe({location:"",base:t,go:s,createHref:$g.bind(null,t)},l,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>l.state.value}),r}function Ng(t){return typeof t=="string"||t&&typeof t=="object"}function Nc(t){return typeof t=="string"||typeof t=="symbol"}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dc=Oi("nf");var vo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vo||(vo={}));function Fi(t,l){return Fe(new Error,{type:t,[Dc]:!0},l)}function ti(t,l){return t instanceof Error&&Dc in t&&(l==null||!!(t.type&l))}const yo="[^/]+?",Dg={sensitive:!1,strict:!1,start:!0,end:!0},Fg=/[.+*?^${}()[\]/\\]/g;function Vg(t,l){const n=Fe({},Dg,l),s=[];let r=n.start?"^":"";const m=[];for(const u of t){const g=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let c=0;c<u.length;c++){const h=u[c];let v=40+(n.sensitive?.25:0);if(h.type===0)c||(r+="/"),r+=h.value.replace(Fg,"\\$&"),v+=40;else if(h.type===1){const{value:d,repeatable:y,optional:A,regexp:$}=h;m.push({name:d,repeatable:y,optional:A});const b=$||yo;if(b!==yo){v+=10;try{new RegExp(`(${b})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${d}" (${b}): `+k.message)}}let w=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;c||(w=A&&u.length<2?`(?:/${w})`:"/"+w),A&&(w+="?"),r+=w,v+=20,A&&(v+=-8),y&&(v+=-20),b===".*"&&(v+=-50)}g.push(v)}s.push(g)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const f=new RegExp(r,n.sensitive?"":"i");function p(u){const g=u.match(f),c={};if(!g)return null;for(let h=1;h<g.length;h++){const v=g[h]||"",d=m[h-1];c[d.name]=v&&d.repeatable?v.split("/"):v}return c}function o(u){let g="",c=!1;for(const h of t){(!c||!g.endsWith("/"))&&(g+="/"),c=!1;for(const v of h)if(v.type===0)g+=v.value;else if(v.type===1){const{value:d,repeatable:y,optional:A}=v,$=d in u?u[d]:"";if(Array.isArray($)&&!y)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray($)?$.join("/"):$;if(!b)if(A)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):c=!0);else throw new Error(`Missing required param "${d}"`);g+=b}}return g}return{re:f,score:s,keys:m,parse:p,stringify:o}}function Ig(t,l){let n=0;for(;n<t.length&&n<l.length;){const s=l[n]-t[n];if(s)return s;n++}return t.length<l.length?t.length===1&&t[0]===80?-1:1:t.length>l.length?l.length===1&&l[0]===80?1:-1:0}function Lg(t,l){let n=0;const s=t.score,r=l.score;for(;n<s.length&&n<r.length;){const m=Ig(s[n],r[n]);if(m)return m;n++}return r.length-s.length}const Og={type:0,value:""},Hg=/[a-zA-Z0-9_]/;function jg(t){if(!t)return[[]];if(t==="/")return[[Og]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function l(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,s=n;const r=[];let m;function f(){m&&r.push(m),m=[]}let p=0,o,u="",g="";function c(){u&&(n===0?m.push({type:0,value:u}):n===1||n===2||n===3?(m.length>1&&(o==="*"||o==="+")&&l(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:u,regexp:g,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):l("Invalid state to consume buffer"),u="")}function h(){u+=o}for(;p<t.length;){if(o=t[p++],o==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:o==="/"?(u&&c(),f()):o===":"?(c(),n=1):h();break;case 4:h(),n=s;break;case 1:o==="("?n=2:Hg.test(o)?h():(c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--);break;case 2:o===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+o:n=3:g+=o;break;case 3:c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&p--,g="";break;default:l("Unknown state");break}}return n===2&&l(`Unfinished custom RegExp for param "${u}"`),c(),f(),r}function qg(t,l,n){const s=Vg(jg(t.path),n),r=Fe(s,{record:t,parent:l,children:[],alias:[]});return l&&!r.record.aliasOf==!l.record.aliasOf&&l.children.push(r),r}function Ug(t,l){const n=[],s=new Map;l=wo({strict:!1,end:!0,sensitive:!1},l);function r(g){return s.get(g)}function m(g,c,h){const v=!h,d=Gg(g);d.aliasOf=h&&h.record;const y=wo(l,g),A=[d];if("alias"in g){const w=typeof g.alias=="string"?[g.alias]:g.alias;for(const k of w)A.push(Fe({},d,{components:h?h.record.components:d.components,path:k,aliasOf:h?h.record:d}))}let $,b;for(const w of A){const{path:k}=w;if(c&&k[0]!=="/"){const T=c.record.path,x=T[T.length-1]==="/"?"":"/";w.path=c.record.path+(k&&x+k)}if($=qg(w,c,y),h?h.alias.push($):(b=b||$,b!==$&&b.alias.push($),v&&g.name&&!Co($)&&f(g.name)),"children"in d){const T=d.children;for(let x=0;x<T.length;x++)m(T[x],$,h&&h.children[x])}h=h||$,o($)}return b?()=>{f(b)}:nl}function f(g){if(Nc(g)){const c=s.get(g);c&&(s.delete(g),n.splice(n.indexOf(c),1),c.children.forEach(f),c.alias.forEach(f))}else{const c=n.indexOf(g);c>-1&&(n.splice(c,1),g.record.name&&s.delete(g.record.name),g.children.forEach(f),g.alias.forEach(f))}}function p(){return n}function o(g){let c=0;for(;c<n.length&&Lg(g,n[c])>=0;)c++;n.splice(c,0,g),g.record.name&&!Co(g)&&s.set(g.record.name,g)}function u(g,c){let h,v={},d,y;if("name"in g&&g.name){if(h=s.get(g.name),!h)throw Fi(1,{location:g});y=h.record.name,v=Fe(Jg(c.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),g.params),d=h.stringify(v)}else if("path"in g)d=g.path,h=n.find(b=>b.re.test(d)),h&&(v=h.parse(d),y=h.record.name);else{if(h=c.name?s.get(c.name):n.find(b=>b.re.test(c.path)),!h)throw Fi(1,{location:g,currentLocation:c});y=h.record.name,v=Fe({},c.params,g.params),d=h.stringify(v)}const A=[];let $=h;for(;$;)A.unshift($.record),$=$.parent;return{name:y,path:d,params:v,matched:A,meta:Wg(A)}}return t.forEach(g=>m(g)),{addRoute:m,resolve:u,removeRoute:f,getRoutes:p,getRecordMatcher:r}}function Jg(t,l){const n={};for(const s of l)s in t&&(n[s]=t[s]);return n}function Gg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Yg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Yg(t){const l={},n=t.props||!1;if("component"in t)l.default=n;else for(const s in t.components)l[s]=typeof n=="boolean"?n:n[s];return l}function Co(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Wg(t){return t.reduce((l,n)=>Fe(l,n.meta),{})}function wo(t,l){const n={};for(const s in t)n[s]=s in l?l[s]:t[s];return n}const Fc=/#/g,Kg=/&/g,Qg=/\//g,Xg=/=/g,Zg=/\?/g,Vc=/\+/g,eh=/%5B/g,th=/%5D/g,Ic=/%5E/g,ih=/%60/g,Lc=/%7B/g,lh=/%7C/g,Oc=/%7D/g,ah=/%20/g;function vs(t){return encodeURI(""+t).replace(lh,"|").replace(eh,"[").replace(th,"]")}function nh(t){return vs(t).replace(Lc,"{").replace(Oc,"}").replace(Ic,"^")}function kn(t){return vs(t).replace(Vc,"%2B").replace(ah,"+").replace(Fc,"%23").replace(Kg,"%26").replace(ih,"`").replace(Lc,"{").replace(Oc,"}").replace(Ic,"^")}function sh(t){return kn(t).replace(Xg,"%3D")}function oh(t){return vs(t).replace(Fc,"%23").replace(Zg,"%3F")}function uh(t){return t==null?"":oh(t).replace(Qg,"%2F")}function ia(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function rh(t){const l={};if(t===""||t==="?")return l;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const m=s[r].replace(Vc," "),f=m.indexOf("="),p=ia(f<0?m:m.slice(0,f)),o=f<0?null:ia(m.slice(f+1));if(p in l){let u=l[p];Array.isArray(u)||(u=l[p]=[u]),u.push(o)}else l[p]=o}return l}function Ao(t){let l="";for(let n in t){const s=t[n];if(n=sh(n),s==null){s!==void 0&&(l+=(l.length?"&":"")+n);continue}(Array.isArray(s)?s.map(m=>m&&kn(m)):[s&&kn(s)]).forEach(m=>{m!==void 0&&(l+=(l.length?"&":"")+n,m!=null&&(l+="="+m))})}return l}function dh(t){const l={};for(const n in t){const s=t[n];s!==void 0&&(l[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return l}function Ji(){let t=[];function l(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:l,list:()=>t,reset:n}}function ch(t,l,n){const s=()=>{t[l].delete(n)};Ci(s),us(s),os(()=>{t[l].add(n)}),t[l].add(n)}function mh(t){const l=Be(zc,{}).value;l&&ch(l,"updateGuards",t)}function Gt(t,l,n,s,r){const m=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((f,p)=>{const o=c=>{c===!1?p(Fi(4,{from:n,to:l})):c instanceof Error?p(c):Ng(c)?p(Fi(2,{from:l,to:c})):(m&&s.enterCallbacks[r]===m&&typeof c=="function"&&m.push(c),f())},u=t.call(s&&s.instances[r],l,n,o);let g=Promise.resolve(u);t.length<3&&(g=g.then(o)),g.catch(c=>p(c))})}function Ja(t,l,n,s){const r=[];for(const m of t)for(const f in m.components){let p=m.components[f];if(!(l!=="beforeRouteEnter"&&!m.instances[f]))if(ph(p)){const u=(p.__vccOpts||p)[l];u&&r.push(Gt(u,n,s,m,f))}else{let o=p();r.push(()=>o.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${f}" at "${m.path}"`));const g=_g(u)?u.default:u;m.components[f]=g;const h=(g.__vccOpts||g)[l];return h&&Gt(h,n,s,m,f)()}))}}return r}function ph(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function So(t){const l=Be(Ea),n=Be(bs),s=D(()=>l.resolve(Wt(t.to))),r=D(()=>{const{matched:o}=s.value,{length:u}=o,g=o[u-1],c=n.matched;if(!g||!c.length)return-1;const h=c.findIndex(Di.bind(null,g));if(h>-1)return h;const v=ko(o[u-2]);return u>1&&ko(g)===v&&c[c.length-1].path!==v?c.findIndex(Di.bind(null,o[u-2])):h}),m=D(()=>r.value>-1&&_h(n.params,s.value.params)),f=D(()=>r.value>-1&&r.value===n.matched.length-1&&Pc(n.params,s.value.params));function p(o={}){return hh(o)?l[Wt(t.replace)?"replace":"push"](Wt(t.to)).catch(nl):Promise.resolve()}return{route:s,href:D(()=>s.value.href),isActive:m,isExactActive:f,navigate:p}}const fh=B({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:So,setup(t,{slots:l}){const n=Mt(So(t)),{options:s}=Be(Ea),r=D(()=>({[$o(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[$o(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const m=l.default&&l.default(n);return t.custom?m:U("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},m)}}}),gh=fh;function hh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const l=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return t.preventDefault&&t.preventDefault(),!0}}function _h(t,l){for(const n in l){const s=l[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((m,f)=>m!==r[f]))return!1}return!0}function ko(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $o=(t,l,n)=>t??l??n,bh=B({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:l,slots:n}){const s=Be(An),r=D(()=>t.route||s.value),m=Be(fo,0),f=D(()=>r.value.matched[m]);We(fo,m+1),We(zc,f),We(An,r);const p=I();return Ze(()=>[p.value,f.value,t.name],([o,u,g],[c,h,v])=>{u&&(u.instances[g]=o,h&&h!==u&&o&&o===c&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),o&&u&&(!h||!Di(u,h)||!c)&&(u.enterCallbacks[g]||[]).forEach(d=>d(o))},{flush:"post"}),()=>{const o=r.value,u=f.value,g=u&&u.components[t.name],c=t.name;if(!g)return To(n.default,{Component:g,route:o});const h=u.props[t.name],v=h?h===!0?o.params:typeof h=="function"?h(o):h:null,y=U(g,Fe({},v,l,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[c]=null)},ref:p}));return To(n.default,{Component:y,route:o})||y}}});function To(t,l){if(!t)return null;const n=t(l);return n.length===1?n[0]:n}const vh=bh;function yh(t){const l=Ug(t.routes,t),n=t.parseQuery||rh,s=t.stringifyQuery||Ao,r=t.history,m=Ji(),f=Ji(),p=Ji(),o=dd(Ot);let u=Ot;ki&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=qa.bind(null,L=>""+L),c=qa.bind(null,uh),h=qa.bind(null,ia);function v(L,ie){let ee,ue;return Nc(L)?(ee=l.getRecordMatcher(L),ue=ie):ue=L,l.addRoute(ue,ee)}function d(L){const ie=l.getRecordMatcher(L);ie&&l.removeRoute(ie)}function y(){return l.getRoutes().map(L=>L.record)}function A(L){return!!l.getRecordMatcher(L)}function $(L,ie){if(ie=Fe({},ie||o.value),typeof L=="string"){const be=Ua(n,L,ie.path),E=l.resolve({path:be.path},ie),R=r.createHref(be.fullPath);return Fe(be,E,{params:h(E.params),hash:ia(be.hash),redirectedFrom:void 0,href:R})}let ee;if("path"in L)ee=Fe({},L,{path:Ua(n,L.path,ie.path).path});else{const be=Fe({},L.params);for(const E in be)be[E]==null&&delete be[E];ee=Fe({},L,{params:c(L.params)}),ie.params=c(ie.params)}const ue=l.resolve(ee,ie),Re=L.hash||"";ue.params=g(h(ue.params));const ze=yg(s,Fe({},L,{hash:nh(Re),path:ue.path})),_e=r.createHref(ze);return Fe({fullPath:ze,hash:Re,query:s===Ao?dh(L.query):L.query||{}},ue,{redirectedFrom:void 0,href:_e})}function b(L){return typeof L=="string"?Ua(n,L,o.value.path):Fe({},L)}function w(L,ie){if(u!==L)return Fi(8,{from:ie,to:L})}function k(L){return P(L)}function T(L){return k(Fe(b(L),{replace:!0}))}function x(L){const ie=L.matched[L.matched.length-1];if(ie&&ie.redirect){const{redirect:ee}=ie;let ue=typeof ee=="function"?ee(L):ee;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=b(ue):{path:ue},ue.params={}),Fe({query:L.query,hash:L.hash,params:L.params},ue)}}function P(L,ie){const ee=u=$(L),ue=o.value,Re=L.state,ze=L.force,_e=L.replace===!0,be=x(ee);if(be)return P(Fe(b(be),{state:Re,force:ze,replace:_e}),ie||ee);const E=ee;E.redirectedFrom=ie;let R;return!ze&&Cg(s,ue,ee)&&(R=Fi(16,{to:E,from:ue}),Le(ue,ue,!0,!1)),(R?Promise.resolve(R):z(E,ue)).catch(N=>ti(N)?N:ae(N,E,ue)).then(N=>{if(N){if(ti(N,2))return P(Fe(b(N.to),{state:Re,force:ze,replace:_e}),ie||E)}else N=Z(E,ue,!0,_e,Re);return F(E,ue,N),N})}function M(L,ie){const ee=w(L,ie);return ee?Promise.reject(ee):Promise.resolve()}function z(L,ie){let ee;const[ue,Re,ze]=Ch(L,ie);ee=Ja(ue.reverse(),"beforeRouteLeave",L,ie);for(const be of ue)be.leaveGuards.forEach(E=>{ee.push(Gt(E,L,ie))});const _e=M.bind(null,L,ie);return ee.push(_e),Ai(ee).then(()=>{ee=[];for(const be of m.list())ee.push(Gt(be,L,ie));return ee.push(_e),Ai(ee)}).then(()=>{ee=Ja(Re,"beforeRouteUpdate",L,ie);for(const be of Re)be.updateGuards.forEach(E=>{ee.push(Gt(E,L,ie))});return ee.push(_e),Ai(ee)}).then(()=>{ee=[];for(const be of L.matched)if(be.beforeEnter&&!ie.matched.includes(be))if(Array.isArray(be.beforeEnter))for(const E of be.beforeEnter)ee.push(Gt(E,L,ie));else ee.push(Gt(be.beforeEnter,L,ie));return ee.push(_e),Ai(ee)}).then(()=>(L.matched.forEach(be=>be.enterCallbacks={}),ee=Ja(ze,"beforeRouteEnter",L,ie),ee.push(_e),Ai(ee))).then(()=>{ee=[];for(const be of f.list())ee.push(Gt(be,L,ie));return ee.push(_e),Ai(ee)}).catch(be=>ti(be,8)?be:Promise.reject(be))}function F(L,ie,ee){for(const ue of p.list())ue(L,ie,ee)}function Z(L,ie,ee,ue,Re){const ze=w(L,ie);if(ze)return ze;const _e=ie===Ot,be=ki?history.state:{};ee&&(ue||_e?r.replace(L.fullPath,Fe({scroll:_e&&be&&be.scroll},Re)):r.push(L.fullPath,Re)),o.value=L,Le(L,ie,ee,_e),Ae()}let H;function re(){H=r.listen((L,ie,ee)=>{const ue=$(L),Re=x(ue);if(Re){P(Fe(Re,{replace:!0}),ue).catch(nl);return}u=ue;const ze=o.value;ki&&xg(_o(ze.fullPath,ee.delta),xa()),z(ue,ze).catch(_e=>ti(_e,12)?_e:ti(_e,2)?(P(_e.to,ue).then(be=>{ti(be,20)&&!ee.delta&&ee.type===hl.pop&&r.go(-1,!1)}).catch(nl),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),ae(_e,ue,ze))).then(_e=>{_e=_e||Z(ue,ze,!1),_e&&(ee.delta?r.go(-ee.delta,!1):ee.type===hl.pop&&ti(_e,20)&&r.go(-1,!1)),F(ue,ze,_e)}).catch(nl)})}let ye=Ji(),V=Ji(),O;function ae(L,ie,ee){Ae(L);const ue=V.list();return ue.length?ue.forEach(Re=>Re(L,ie,ee)):console.error(L),Promise.reject(L)}function W(){return O&&o.value!==Ot?Promise.resolve():new Promise((L,ie)=>{ye.add([L,ie])})}function Ae(L){O||(O=!0,re(),ye.list().forEach(([ie,ee])=>L?ee(L):ie()),ye.reset())}function Le(L,ie,ee,ue){const{scrollBehavior:Re}=t;if(!ki||!Re)return Promise.resolve();const ze=!ee&&Bg(_o(L.fullPath,0))||(ue||!ee)&&history.state&&history.state.scroll||null;return Li().then(()=>Re(L,ie,ze)).then(_e=>_e&&Eg(_e)).catch(_e=>ae(_e,L,ie))}const Ue=L=>r.go(L);let Me;const Ct=new Set;return{currentRoute:o,addRoute:v,removeRoute:d,hasRoute:A,getRoutes:y,resolve:$,options:t,push:k,replace:T,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:m.add,beforeResolve:f.add,afterEach:p.add,onError:V.add,isReady:W,install(L){const ie=this;L.component("RouterLink",gh),L.component("RouterView",vh),L.config.globalProperties.$router=ie,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(o)}),ki&&!Me&&o.value===Ot&&(Me=!0,k(r.location).catch(Re=>{}));const ee={};for(const Re in Ot)ee[Re]=D(()=>o.value[Re]);L.provide(Ea,ie),L.provide(bs,Mt(ee)),L.provide(An,o);const ue=L.unmount;Ct.add(L),L.unmount=function(){Ct.delete(L),Ct.size<1&&(u=Ot,H&&H(),o.value=Ot,Me=!1,O=!1),ue()}}}}function Ai(t){return t.reduce((l,n)=>l.then(()=>n()),Promise.resolve())}function Ch(t,l){const n=[],s=[],r=[],m=Math.max(l.matched.length,t.matched.length);for(let f=0;f<m;f++){const p=l.matched[f];p&&(t.matched.find(u=>Di(u,p))?s.push(p):n.push(p));const o=t.matched[f];o&&(l.matched.find(u=>Di(u,o))||r.push(o))}return[n,s,r]}function wh(){return Be(Ea)}function Hc(){return Be(bs)}const Ah={__name:"Navbar",props:["onClick"],setup(t){const l=I(),n=wh();function s(r){return r.charAt(0).toUpperCase()+r.slice(1)}return as(()=>{const f=n.currentRoute.value.path.match(/\/([^/]+)$/);f&&(l.value=s(f[1]))}),(r,m)=>{const f=_("SuiIcon"),p=_("SuiMenuItem"),o=_("SuiMenu");return K(),Ve(o,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[e(p,{onClick:t.onClick},{default:i(()=>[e(f,{name:"hamburger"})]),_:1},8,["onClick"]),e(p,null,{default:i(()=>[a($e(l.value),1)]),_:1})]),_:1})}}},Sh=pe(Ah,[["__scopeId","data-v-338afb35"]]),kh=B({name:"Sidebar",setup(){const t=Hc();return{isActive:f=>t.path===f,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"}]}}}),$h=C("strong",null," Fomantic UI Vue ",-1),Th=C("b",null,"Getting Started",-1);function Eh(t,l,n,s,r,m){const f=_("sui-menu-item"),p=_("sui-menu-header"),o=_("sui-menu-menu"),u=_("sui-menu");return K(),Ve(u,{fluid:"",inverted:"",vertical:""},{default:i(()=>[e(f,{as:"div"},{default:i(()=>[$h]),_:1}),e(f,{as:"router-link",to:"/"},{default:i(()=>[Th]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Elements"}),e(o,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.elements,g=>(K(),Ve(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Collections"}),e(o,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.collections,g=>(K(),Ve(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Views"}),e(o,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.views,g=>(K(),Ve(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Modules"}),e(o,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.modules,g=>(K(),Ve(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const xh=pe(kh,[["render",Eh]]),Bh={class:"sidemenu"},Rh={style:{flex:"1","overflow-y":"scroll"}},zh={__name:"Sidebar",setup(t){return(l,n)=>(K(),oe("div",Bh,[C("div",Rh,[e(xh)])]))}},Ph=pe(zh,[["__scopeId","data-v-9625d97d"]]),Mh=B({name:"Sidebar",setup(){const t=Hc();return{isActive:f=>t.path===f,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"}]}}}),Nh=C("strong",null," Fomantic UI Vue ",-1),Dh=C("b",null,"Getting Started",-1);function Fh(t,l,n,s,r,m){const f=_("sui-menu-item"),p=_("sui-menu-header"),o=_("sui-menu-menu"),u=_("sui-sidebar");return K(),Ve(u,{visible:t.visible,dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[e(f,{as:"div"},{default:i(()=>[Nh]),_:1}),e(f,{as:"router-link",to:"/"},{default:i(()=>[Dh]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Elements"}),e(o,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.elements,g=>(K(),Ve(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Collections"}),e(o,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.collections,g=>(K(),Ve(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Views"}),e(o,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.views,g=>(K(),Ve(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(f,{as:"div"},{default:i(()=>[e(p,{content:"Modules"}),e(o,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.modules,g=>(K(),Ve(f,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1},8,["visible"])}const Vh=pe(Mh,[["render",Fh]]),Ih={class:"pusher",style:{height:"100vh"}},Lh={class:"article"},Oh={__name:"Home",setup(t){const l=I(!1),n=()=>l.value=!l.value;return mh(()=>{l.value=!1}),(s,r)=>{const m=_("router-view"),f=_("SuiSegment");return K(),Ve(f,{class:"pushable",style:{border:"none"}},{default:i(()=>[e(Vh,{visible:l.value},null,8,["visible"]),C("div",Ih,[e(Ph),e(Sh,{"on-click":n}),C("div",Lh,[e(m)])])]),_:1})}}};var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function jh(t){if(t.__esModule)return t;var l=t.default;if(typeof l=="function"){var n=function s(){return this instanceof s?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};n.prototype=l.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var r=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return t[s]}})}),n}const qh=jh(pg);var jc={exports:{}};(function(t){var l=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,m=0,f={},p={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function b(w){return w instanceof o?new o(w.type,b(w.content),w.alias):Array.isArray(w)?w.map(b):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++m}),b.__id},clone:function b(w,k){k=k||{};var T,x;switch(p.util.type(w)){case"Object":if(x=p.util.objId(w),k[x])return k[x];T={},k[x]=T;for(var P in w)w.hasOwnProperty(P)&&(T[P]=b(w[P],k));return T;case"Array":return x=p.util.objId(w),k[x]?k[x]:(T=[],k[x]=T,w.forEach(function(M,z){T[z]=b(M,k)}),T);default:return w}},getLanguage:function(b){for(;b;){var w=r.exec(b.className);if(w)return w[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,w){b.className=b.className.replace(RegExp(r,"gi"),""),b.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(T){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(b){var w=document.getElementsByTagName("script");for(var k in w)if(w[k].src==b)return w[k]}return null}},isActive:function(b,w,k){for(var T="no-"+w;b;){var x=b.classList;if(x.contains(w))return!0;if(x.contains(T))return!1;b=b.parentElement}return!!k}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(b,w){var k=p.util.clone(p.languages[b]);for(var T in w)k[T]=w[T];return k},insertBefore:function(b,w,k,T){T=T||p.languages;var x=T[b],P={};for(var M in x)if(x.hasOwnProperty(M)){if(M==w)for(var z in k)k.hasOwnProperty(z)&&(P[z]=k[z]);k.hasOwnProperty(M)||(P[M]=x[M])}var F=T[b];return T[b]=P,p.languages.DFS(p.languages,function(Z,H){H===F&&Z!=b&&(this[Z]=P)}),P},DFS:function b(w,k,T,x){x=x||{};var P=p.util.objId;for(var M in w)if(w.hasOwnProperty(M)){k.call(w,M,w[M],T||M);var z=w[M],F=p.util.type(z);F==="Object"&&!x[P(z)]?(x[P(z)]=!0,b(z,k,null,x)):F==="Array"&&!x[P(z)]&&(x[P(z)]=!0,b(z,k,M,x))}}},plugins:{},highlightAll:function(b,w){p.highlightAllUnder(document,b,w)},highlightAllUnder:function(b,w,k){var T={callback:k,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),p.hooks.run("before-all-elements-highlight",T);for(var x=0,P;P=T.elements[x++];)p.highlightElement(P,w===!0,T.callback)},highlightElement:function(b,w,k){var T=p.util.getLanguage(b),x=p.languages[T];p.util.setLanguage(b,T);var P=b.parentElement;P&&P.nodeName.toLowerCase()==="pre"&&p.util.setLanguage(P,T);var M=b.textContent,z={element:b,language:T,grammar:x,code:M};function F(H){z.highlightedCode=H,p.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,p.hooks.run("after-highlight",z),p.hooks.run("complete",z),k&&k.call(z.element)}if(p.hooks.run("before-sanity-check",z),P=z.element.parentElement,P&&P.nodeName.toLowerCase()==="pre"&&!P.hasAttribute("tabindex")&&P.setAttribute("tabindex","0"),!z.code){p.hooks.run("complete",z),k&&k.call(z.element);return}if(p.hooks.run("before-highlight",z),!z.grammar){F(p.util.encode(z.code));return}if(w&&s.Worker){var Z=new Worker(p.filename);Z.onmessage=function(H){F(H.data)},Z.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else F(p.highlight(z.code,z.grammar,z.language))},highlight:function(b,w,k){var T={code:b,grammar:w,language:k};if(p.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=p.tokenize(T.code,T.grammar),p.hooks.run("after-tokenize",T),o.stringify(p.util.encode(T.tokens),T.language)},tokenize:function(b,w){var k=w.rest;if(k){for(var T in k)w[T]=k[T];delete w.rest}var x=new c;return h(x,x.head,b),g(b,x,w,x.head,0),d(x)},hooks:{all:{},add:function(b,w){var k=p.hooks.all;k[b]=k[b]||[],k[b].push(w)},run:function(b,w){var k=p.hooks.all[b];if(!(!k||!k.length))for(var T=0,x;x=k[T++];)x(w)}},Token:o};s.Prism=p;function o(b,w,k,T){this.type=b,this.content=w,this.alias=k,this.length=(T||"").length|0}o.stringify=function b(w,k){if(typeof w=="string")return w;if(Array.isArray(w)){var T="";return w.forEach(function(F){T+=b(F,k)}),T}var x={type:w.type,content:b(w.content,k),tag:"span",classes:["token",w.type],attributes:{},language:k},P=w.alias;P&&(Array.isArray(P)?Array.prototype.push.apply(x.classes,P):x.classes.push(P)),p.hooks.run("wrap",x);var M="";for(var z in x.attributes)M+=" "+z+'="'+(x.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+M+">"+x.content+"</"+x.tag+">"};function u(b,w,k,T){b.lastIndex=w;var x=b.exec(k);if(x&&T&&x[1]){var P=x[1].length;x.index+=P,x[0]=x[0].slice(P)}return x}function g(b,w,k,T,x,P){for(var M in k)if(!(!k.hasOwnProperty(M)||!k[M])){var z=k[M];z=Array.isArray(z)?z:[z];for(var F=0;F<z.length;++F){if(P&&P.cause==M+","+F)return;var Z=z[F],H=Z.inside,re=!!Z.lookbehind,ye=!!Z.greedy,V=Z.alias;if(ye&&!Z.pattern.global){var O=Z.pattern.toString().match(/[imsuy]*$/)[0];Z.pattern=RegExp(Z.pattern.source,O+"g")}for(var ae=Z.pattern||Z,W=T.next,Ae=x;W!==w.tail&&!(P&&Ae>=P.reach);Ae+=W.value.length,W=W.next){var Le=W.value;if(w.length>b.length)return;if(!(Le instanceof o)){var Ue=1,Me;if(ye){if(Me=u(ae,Ae,b,re),!Me||Me.index>=b.length)break;var ie=Me.index,Ct=Me.index+Me[0].length,ot=Ae;for(ot+=W.value.length;ie>=ot;)W=W.next,ot+=W.value.length;if(ot-=W.value.length,Ae=ot,W.value instanceof o)continue;for(var L=W;L!==w.tail&&(ot<Ct||typeof L.value=="string");L=L.next)Ue++,ot+=L.value.length;Ue--,Le=b.slice(Ae,ot),Me.index-=Ae}else if(Me=u(ae,0,Le,re),!Me)continue;var ie=Me.index,ee=Me[0],ue=Le.slice(0,ie),Re=Le.slice(ie+ee.length),ze=Ae+Le.length;P&&ze>P.reach&&(P.reach=ze);var _e=W.prev;ue&&(_e=h(w,_e,ue),Ae+=ue.length),v(w,_e,Ue);var be=new o(M,H?p.tokenize(ee,H):ee,V,ee);if(W=h(w,_e,be),Re&&h(w,W,Re),Ue>1){var E={cause:M+","+F,reach:ze};g(b,w,k,W.prev,Ae,E),P&&E.reach>P.reach&&(P.reach=E.reach)}}}}}}function c(){var b={value:null,prev:null,next:null},w={value:null,prev:b,next:null};b.next=w,this.head=b,this.tail=w,this.length=0}function h(b,w,k){var T=w.next,x={value:k,prev:w,next:T};return w.next=x,T.prev=x,b.length++,x}function v(b,w,k){for(var T=w.next,x=0;x<k&&T!==b.tail;x++)T=T.next;w.next=T,T.prev=w,b.length-=x}function d(b){for(var w=[],k=b.head.next;k!==b.tail;)w.push(k.value),k=k.next;return w}if(!s.document)return s.addEventListener&&(p.disableWorkerMessageHandler||s.addEventListener("message",function(b){var w=JSON.parse(b.data),k=w.language,T=w.code,x=w.immediateClose;s.postMessage(p.highlight(T,p.languages[k],k)),x&&s.close()},!1)),p;var y=p.util.currentScript();y&&(p.filename=y.src,y.hasAttribute("data-manual")&&(p.manual=!0));function A(){p.manual||p.highlightAll()}if(!p.manual){var $=document.readyState;$==="loading"||$==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return p}(l);t.exports&&(t.exports=n),typeof Eo<"u"&&(Eo.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(r,m){var f={};f["language-"+m]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[m]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var p={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};p["language-"+m]={pattern:/[\s\S]+/,inside:n.languages[m]};var o={};o[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:p},n.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,r){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:n.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var m=s.languages.markup;m&&(m.tag.addInlined("style","css"),m.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",r=function(y,A){return"✖ Error "+y+" while fetching file: "+A},m="✖ Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",o="loading",u="loaded",g="failed",c="pre[data-src]:not(["+p+'="'+u+'"]):not(['+p+'="'+o+'"])';function h(y,A,$){var b=new XMLHttpRequest;b.open("GET",y,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?A(b.responseText):b.status>=400?$(r(b.status,b.statusText)):$(m))},b.send(null)}function v(y){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(A){var $=Number(A[1]),b=A[2],w=A[3];return b?w?[$,Number(w)]:[$,void 0]:[$,$]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+c}),n.hooks.add("before-sanity-check",function(y){var A=y.element;if(A.matches(c)){y.code="",A.setAttribute(p,o);var $=A.appendChild(document.createElement("CODE"));$.textContent=s;var b=A.getAttribute("data-src"),w=y.language;if(w==="none"){var k=(/\.(\w+)$/.exec(b)||[,"none"])[1];w=f[k]||k}n.util.setLanguage($,w),n.util.setLanguage(A,w);var T=n.plugins.autoloader;T&&T.loadLanguages(w),h(b,function(x){A.setAttribute(p,u);var P=v(A.getAttribute("data-range"));if(P){var M=x.split(/\r\n?|\n/g),z=P[0],F=P[1]==null?M.length:P[1];z<0&&(z+=M.length),z=Math.max(0,Math.min(z-1,M.length)),F<0&&(F+=M.length),F=Math.max(0,Math.min(F,M.length)),x=M.slice(z,F).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(z+1))}$.textContent=x,n.highlightElement($)},function(x){A.setAttribute(p,g),$.textContent=x})}}),n.plugins.fileHighlight={highlight:function(A){for(var $=(A||document).querySelectorAll(c),b=0,w;w=$[b++];)n.highlightElement(w)}};var d=!1;n.fileHighlight=function(){d||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),d=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(jc);var Uh=jc.exports;function Jh(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Il=qh,Ga=Jh(Uh),Gh=Il.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(l,n){var s=n.slots,r=n.attrs,m=s&&s.default&&s.default()||[],f=l.code||m&&m.length?m[0].children:"",p=l.inline,o=l.language,u=Ga.languages[o],g="language-".concat(o);return function(){return p?Il.h("code",{class:[g],innerHTML:Ga.highlight(f,u)}):Il.h("pre",Object.assign({},r,{class:[r.class,g]}),[Il.h("code",Object.assign({},r,{class:[r.class,g],innerHTML:Ga.highlight(f,u)}))])}}}),Yh=Gh;const qc=Hh(Yh),Wh=B({name:"DocPageHeader",props:{title:String,sub:String}}),Kh={class:"intro"};function Qh(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment");return K(),Ve(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Kh,[e(p,{as:"h1"},{default:i(()=>[a($e(t.title)+" ",1),e(f,null,{default:i(()=>[a($e(t.sub),1)]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const Ie=pe(Wh,[["render",Qh]]),Xh=B({name:"GettingStarted",components:{Prism:qc,DocPageHeader:Ie}}),Ba=t=>(_a("data-v-2f4c2002"),t=t(),ba(),t),Zh=Ba(()=>C("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),e_=Ba(()=>C("p",null," You can import all components as Vue plugin. ",-1)),t_=Ba(()=>C("br",null,null,-1)),i_=Ba(()=>C("p",null," Or pick a component indivisually, add it to your components option. ",-1));function l_(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("prism"),u=_("sui-container");return K(),oe("div",null,[e(f,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),e(u,{class:"main"},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Install")]),_:1}),Zh,e(p,{as:"h3"},{default:i(()=>[a("via Package Manager")]),_:1}),e(o,{language:"bash"},{default:i(()=>[a($e(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),e(p,{as:"h2"},{default:i(()=>[a("Usage")]),_:1}),e_,e(o,{language:"js"},{default:i(()=>[a($e(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),t_,i_,e(o,{language:"js"},{default:i(()=>[a($e(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const a_=pe(Xh,[["render",l_],["__scopeId","data-v-2f4c2002"]]),n_=B({name:"DocExample",components:{Prism:qc},props:{title:String,description:String,code:String},setup(){const t=I(!1);return{active:t,toggle:()=>t.value=!t.value}}}),s_={class:"example"};function o_(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-grid-column"),u=_("sui-icon"),g=_("sui-grid-row"),c=_("prism"),h=_("sui-grid");return K(),oe("div",s_,[e(h,{columns:2},{default:i(()=>[e(g,null,{default:i(()=>[e(o,null,{default:i(()=>[e(p,{as:"h3"},{default:i(()=>[a($e(t.title)+" ",1),e(f,null,{default:i(()=>[a($e(t.description),1)]),_:1})]),_:1})]),_:1}),e(o,{textAlign:"right"},{default:i(()=>[e(u,{name:"code",color:"grey",onClick:t.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(o,{width:16},{default:i(()=>[Dd(t.$slots,"default")]),_:3}),t.active?(K(),Ve(o,{key:0,width:16},{default:i(()=>[e(c,{language:"markup"},{default:i(()=>[a($e(t.code),1)]),_:1})]),_:1})):ic("",!0)]),_:3})]),_:3})])}const ve=pe(n_,[["render",o_]]),ge="/vue-fomantic-ui/images/wireframe/paragraph.png",u_=B({name:"ButtonDoc",components:{DocExample:ve},setup(){const t=I(!1);return{active:t,toggle:()=>t.value=!t.value,buttonExample:`<template>
  <sui-button>Follow</sui-button>
</template>`,emphasisExample:`<template>
  <div>
    <sui-button primary>Primary</sui-button>
    <sui-button secondary>Secondary</sui-button>
  </div>
</template>`,animatedExample:`<template>
  <div>
    <sui-button animated>
      <sui-button-content visible>Next</sui-button-content>
      <sui-button-content hidden>
        <sui-icon name="arrow right" />
      </sui-button-content>
    </sui-button>
    <sui-button animated="vertical">
      <sui-button-content visible>
        <sui-icon name="shop" />
      </sui-button-content>
      <sui-button-content hidden>Shop</sui-button-content>
    </sui-button>
    <sui-button animated="fade">
      <sui-button-content visible>
        Sign-up for a Pro account
      </sui-button-content>
      <sui-button-content hidden>$12.99 a month</sui-button-content>
    </sui-button>
  </div>
<template>`,labeledExample:`<sui-button labelPosition="right" as="div">
  <sui-button icon>
    <sui-icon name="heart" />
    Like
  </sui-button>
  <sui-label basic>2,048</sui-label>
</sui-button>
<sui-button labelPosition="left" as="div">
  <sui-label basic pointing="right">2,048</sui-label>
  <sui-button icon>
    <sui-icon name="heart" />
    Like
  </sui-button>
</sui-button>
<sui-button labelPosition="left" as="div">
  <sui-label basic>1,048</sui-label>
  <sui-button icon>
    <sui-icon name="fork" />
  </sui-button>
</sui-button>`,labeledExample2:`<sui-button labelPosition="right" as="div">
  <sui-button icon color="red">
    <sui-icon name="heart" />
    Like
  </sui-button>
  <sui-label basic pointing="left" color="red">
    1,048
  </sui-label>
</sui-button>
<sui-button labelPosition="right" as="div">
  <sui-button basic icon color="blue">
    <sui-icon name="fork" />
    Forks
  </sui-button>
  <sui-label basic pointing="left" color="blue">
    1,048
  </sui-label>
</sui-button>`,iconExample:`<template>
  <sui-button icon>
    <sui-icon name="cloud" />
  </sui-button>
</template>`,labeledIconExample:`<template>
  <div>
    <sui-button labeled icon>
      <sui-icon name="pause" />
      Pause
    </sui-button>
    <sui-button labeled="right" icon>
      <sui-icon name="right arrow" />
      Next
    </sui-button>
  <div>
</template>`,basicExample:`<template>
  <sui-button basic>
    <sui-icon name="user" />
    Add Friend
  </sui-button>
</template>`,basicExample2:`<template>
  <div>
    <sui-button basic primary>Primary</sui-button>
    <sui-button basic secondary>Secondary</sui-button>
    <sui-button basic positive>Positive</sui-button>
    <sui-button basic negative>Negative</sui-button>
  </div>
</template>`,basicExample3:`<template>
  <div>
    <sui-button basic color="red">Red</sui-button>
    <sui-button basic color="orange">Orange</sui-button>
    <sui-button basic color="yellow">Yellow</sui-button>
    <sui-button basic color="olive">Olive</sui-button>
    <sui-button basic color="green">Green</sui-button>
    <sui-button basic color="teal">Teal</sui-button>
    <sui-button basic color="blue">Blue</sui-button>
    <sui-button basic color="violet">Violet</sui-button>
    <sui-button basic color="purple">Purple</sui-button>
    <sui-button basic color="pink">Pink</sui-button>
    <sui-button basic color="brown">Brown</sui-button>
    <sui-button basic color="grey">Grey</sui-button>
    <sui-button basic color="black">Black</sui-button>
  </div>
</template>`,invertedExample:`<template>
  <sui-segment inverted>
    <sui-button inverted>Standard</sui-button>
    <sui-button inverted primary>Primary</sui-button>
    <sui-button inverted secondary>Secondary</sui-button>
    <sui-button inverted color="red">Red</sui-button>
    <sui-button inverted color="orange">Orange</sui-button>
    <sui-button inverted color="yellow">Yellow</sui-button>
    <sui-button inverted color="olive">Olive</sui-button>
    <sui-button inverted color="green">Green</sui-button>
    <sui-button inverted color="teal">Teal</sui-button>
    <sui-button inverted color="blue">Blue</sui-button>
    <sui-button inverted color="violet">Violet</sui-button>
    <sui-button inverted color="purple">Purple</sui-button>
    <sui-button inverted color="pink">Pink</sui-button>
    <sui-button inverted color="brown">Brown</sui-button>
    <sui-button inverted color="grey">Grey</sui-button>
    <sui-button inverted color="black">Black</sui-button>
  </sui-segment>
</template>`,invertedExample2:`<template>
  <sui-segment inverted>
    <sui-button inverted basic>Basic</sui-button>
    <sui-button inverted basic primary>Primary</sui-button>
    <sui-button inverted basic secondary>Secondary</sui-button>
    <sui-button inverted basic color="red">Basic Red</sui-button>
    <sui-button inverted basic color="orange">Basic Orange</sui-button>
    <sui-button inverted basic color="yellow">Basic Yellow</sui-button>
    <sui-button inverted basic color="olive">Basic Olive</sui-button>
    <sui-button inverted basic color="green">Basic Green</sui-button>
    <sui-button inverted basic color="teal">Basic Teal</sui-button>
    <sui-button inverted basic color="blue">Basic Blue</sui-button>
    <sui-button inverted basic color="violet">Basic Violet</sui-button>
    <sui-button inverted basic color="purple">Basic Purple</sui-button>
    <sui-button inverted basic color="pink">Basic Pink</sui-button>
    <sui-button inverted basic color="brown">Basic Brown</sui-button>
    <sui-button inverted basic color="grey">Basic Grey</sui-button>
    <sui-button inverted basic color="black">Basic Black</sui-button>
  </sui-segment>
</template>`,buttonsExample:`<template>
  <sui-button-group>
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`,iconButtonsExample:`<template>
  <div>
    <sui-button-group icon>
      <sui-button><sui-icon name="align left" /></sui-button>
      <sui-button><sui-icon name="align center" /></sui-button>
      <sui-button><sui-icon name="align right" /></sui-button>
      <sui-button><sui-icon name="align justify" /></sui-button>
    </sui-button-group>
    <sui-button-group icon>
      <sui-button><sui-icon name="bold" /></sui-button>
      <sui-button><sui-icon name="underline" /></sui-button>
      <sui-button><sui-icon name="text width" /></sui-button>
    </sui-button-group>
  </div>
</template>`,conditionalsExample:`<template>
  <sui-button-group>
    <sui-button>Cancel</sui-button>
    <div class="or"></div>
    <sui-button positive>Save</sui-button>
  </sui-button-group>
</template>`,conditionalsExample2:`<template>
  <sui-button-group>
    <sui-button>Cancel</sui-button>
    <div class="or" data-text="ou"></div>
    <sui-button positive>Save</sui-button>
  </sui-button-group>
</template>`,activeExample:`<template>
  <sui-button active>
    <sui-icon name="user" />
    Follow
  </sui-button>
</template>`,disabledExample:`<template>
  <sui-button disabled>
    <sui-icon name="user" />
    Followed
  </sui-button>
</template>`,loadingExample:`<template>
  <div>
    <sui-button loading>Loading</sui-button>
    <sui-button basic loading>Loading</sui-button>
    <sui-button primary loading>Loading</sui-button>
    <sui-button secondary loading>Loading</sui-button>
  </div>
</template>`,socialExample:`<template>
  <div>
    <sui-button facebook>
      <sui-icon name="facebook" />
      Facebook
    </sui-button>
    <sui-button twitter>
      <sui-icon name="twitter" />
      Twitter
    </sui-button>
    <sui-button vk>
      <sui-icon name="vk" />
      VK
    </sui-button>
    <sui-button linkedin>
      <sui-icon name="linkedin" />
      LinkedIn
    </sui-button>
    <sui-button instagram>
      <sui-icon name="instagram" />
      Instagram
    </sui-button>
    <sui-button youtube>
      <sui-icon name="youtube" />
      YouTube
    </sui-button>
  </div>
</template>`,sizeExample:`<template>
  <div>
    <sui-button size="mini">Mini</sui-button>
    <sui-button size="tiny">Tiny</sui-button>
    <sui-button size="small">Small</sui-button>
    <sui-button size="medium">Medium</sui-button>
    <sui-button size="large">Large</sui-button>
    <sui-button size="big">Big</sui-button>
    <sui-button size="huge">Huge</sui-button>
    <sui-button size="massive">Massive</sui-button>
  </div>
</template>`,floatedExample:`<template>
  <div>
    <sui-button floated="left">Left Floated</sui-button>
    <sui-button floated="right">Right Floated</sui-button>
  </div>
</template>`,coloredExample:`<template>
  <div>
    <sui-button color="red">Red</sui-button>
    <sui-button color="orange">Orange</sui-button>
    <sui-button color="yellow">Yellow</sui-button>
    <sui-button color="olive">Olive</sui-button>
    <sui-button color="green">Green</sui-button>
    <sui-button color="teal">Teal</sui-button>
    <sui-button color="blue">Blue</sui-button>
    <sui-button color="violet">Violet</sui-button>
    <sui-button color="purple">Purple</sui-button>
    <sui-button color="pink">Pink</sui-button>
    <sui-button color="brown">Brown</sui-button>
    <sui-button color="grey">Grey</sui-button>
    <sui-button color="black">Black</sui-button>
  </div>
</template>`,compactExample:`<template>
  <div>
    <sui-button compact>Compact</sui-button>
    <sui-button>Normal</sui-button>
  </div>
</template>`,toggleExample:`<template>
  <sui-button toggle :active="active" @click="() => active = !active">Vote</sui-button>
</template>`,positiveExample:`<template>
  <sui-button positive>Positive</sui-button>
</template>`,negativeExample:`<template>
  <sui-button negative>Negative</sui-button>
</template>`,fluidExample:`<template>
  <sui-button fluid>Fluid</sui-button>
</template>`,circularExample:`<template>
  <sui-button circular icon>
    <sui-icon name="settings" />
  </sui-button>
</template>`,circularExample2:`<template>
  <div>
    <sui-button facebook circular icon>
      <sui-icon name="facebook" />
    </sui-button>
    <sui-button twitter circular icon>
      <sui-icon name="twitter" />
    </sui-button>
    <sui-button linkedin circular icon>
      <sui-icon name="linkedin" />
    </sui-button>
    <sui-button youtube circular icon>
      <sui-icon name="youtube" />
    </sui-button>
  </div>
</template>`,attachedExample:`<template>
  <div>
    <sui-button attached="top">Top</sui-button>
    <sui-segment attached>
      <img src="/images/wireframe/paragraph.png">
    </sui-segment>
    <sui-button attached="bottom">Bottom</sui-button>
  </div>
</template>`,attachedExample2:`<template>
  <div>
    <sui-button-group attached="top">
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
    </sui-button-group>
    <sui-segment attached>
      <img src="/images/wireframe/paragraph.png">
    </sui-segment>
    <sui-button-group attached="bottom">
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
    </sui-button-group>
  </div>
</template>`,horizontalAttachedExample:`<tempalte>
  <div>
    <sui-button attached="left">Left</sui-button>
    <sui-button attached="right">Right</sui-button>
  </div>
</template>`,verticalButtonsExample:`<template>
  <sui-button-group vertical>
    <sui-button>Feed</sui-button>
    <sui-button>Messages</sui-button>
    <sui-button>Events</sui-button>
    <sui-button>Photos</sui-button>
  </sui-button-group>
</template>`,labeledIconButtonsExample:`<template>
  <sui-button-group vertical labeled icon>
    <sui-button>
      <sui-icon name="pause" />
      Pause
    </sui-button>
    <sui-button>
      <sui-icon name="play" />
      Play
    </sui-button>
    <sui-button>
      <sui-icon name="shuffle" />
      Shuffle
    </sui-button>
  </sui-button-group>
</template>`,mixedGroupExample:`<template>
  <sui-button-group>
    <sui-button labelPosition="left" icon>
      <sui-icon name="left chevron" />
      Back
    </sui-button>
    <sui-button>
      <sui-icon name="stop" />
      Stop
    </sui-button>
    <sui-button labelPosition="right" icon>
      <sui-icon name="right chevron" />
      Forward
    </sui-button>
  </sui-button-group>
</template>`,equalWidthExample:`<template>
  <div>
    <sui-button-group :widths="5">
      <sui-button>Overview</sui-button>
      <sui-button>Specs</sui-button>
      <sui-button>Warranty</sui-button>
      <sui-button>Reviews</sui-button>
      <sui-button>Support</sui-button>
    </sui-button-group>
    <sui-divider />
    <sui-button-group :widths="3">
      <sui-button>Overview</sui-button>
      <sui-button>Specs</sui-button>
      <sui-button>Support</sui-button>
    </sui-button-group>
  </div>
</template>`,coloredButtonsExample:`<template>
  <sui-button-group color="blue">
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`,basicButtonsExample:`<template>
  <div>
    <sui-button-group basic>
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
      <sui-button>Three</sui-button>
    </sui-button-group>
    <sui-divider />
    <sui-button-group basic vertical>
      <sui-button>One</sui-button>
      <sui-button>Two</sui-button>
      <sui-button>Three</sui-button>
    </sui-button-group>
  </div>
</template>`,basicButtonsExample2:`<template>
  <sui-button-group>
    <sui-button basic color="red">One</sui-button>
    <sui-button basic color="blue">Two</sui-button>
    <sui-button basic color="green">Three</sui-button>
  </sui-button-group>
</template>`,groupSizesExample:`<template>
  <sui-button-group size="large">
    <sui-button>One</sui-button>
    <sui-button>Two</sui-button>
    <sui-button>Three</sui-button>
  </sui-button-group>
</template>`,groupSizesExample2:`<template>
  <sui-button-group basic icon size="small">
    <sui-button><sui-icon name="file" /></sui-button>
    <sui-button><sui-icon name="save" /></sui-button>
    <sui-button><sui-icon name="upload" /></sui-button>
    <sui-button><sui-icon name="download" /></sui-button>
  </sui-button-group>
</template>`,groupSizesExample3:`<template>
  <sui-button-group size="large">
    <sui-button>One</sui-button>
    <div class="or"></div>
    <sui-button>Two</sui-button>
  </sui-button-group>
</template>`}}}),$l=t=>(_a("data-v-e27c391e"),t=t(),ba(),t),r_={class:"intro"},d_=$l(()=>C("div",{class:"or"},null,-1)),c_=$l(()=>C("div",{class:"or","data-text":"ou"},null,-1)),m_=$l(()=>C("img",{src:ge},null,-1)),p_=$l(()=>C("img",{src:ge},null,-1)),f_=$l(()=>C("div",{class:"or"},null,-1));function g_(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-button"),y=_("doc-example"),A=_("sui-button-content"),$=_("sui-label"),b=_("sui-button-group");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,null,{default:i(()=>[C("div",r_,[e(p,{as:"h1"},{default:i(()=>[a("Button "),e(f,null,{default:i(()=>[a("A button indicates a possible user action")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Button",description:"A standard button",code:t.buttonExample},{default:i(()=>[e(d,null,{default:i(()=>[a("Follow")]),_:1})]),_:1},8,["code"]),e(y,{title:"Emphasis",description:"A button can be formatted to show different levels of emphasis",code:t.emphasisExample},{default:i(()=>[C("div",null,[e(d,{primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{secondary:""},{default:i(()=>[a("Secondary")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Animated",description:"A button can animate to show hidden content",code:t.animatedExample},{default:i(()=>[e(d,{animated:""},{default:i(()=>[e(A,{visible:""},{default:i(()=>[a("Next")]),_:1}),e(A,{hidden:""},{default:i(()=>[e(u,{name:"arrow right"})]),_:1})]),_:1}),e(d,{animated:"vertical"},{default:i(()=>[e(A,{visible:""},{default:i(()=>[e(u,{name:"shop"})]),_:1}),e(A,{hidden:""},{default:i(()=>[a("Shop")]),_:1})]),_:1}),e(d,{animated:"fade"},{default:i(()=>[e(A,{visible:""},{default:i(()=>[a(" Sign-up for a Pro account ")]),_:1}),e(A,{hidden:""},{default:i(()=>[a("$12.99 a month")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled",description:"A button can appear alongside a label",code:t.labeledExample},{default:i(()=>[e(d,{labelPosition:"right",as:"div"},{default:i(()=>[e(d,{icon:""},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1}),e($,{basic:""},{default:i(()=>[a("2,048")]),_:1})]),_:1}),e(d,{labelPosition:"left",as:"div"},{default:i(()=>[e($,{basic:"",pointing:"right"},{default:i(()=>[a("2,048")]),_:1}),e(d,{icon:""},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1})]),_:1}),e(d,{labelPosition:"left",as:"div"},{default:i(()=>[e($,{basic:""},{default:i(()=>[a("1,048")]),_:1}),e(d,{icon:""},{default:i(()=>[e(u,{name:"fork"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.labeledExample2},{default:i(()=>[e(d,{labelPosition:"right",as:"div"},{default:i(()=>[e(d,{icon:"",color:"red"},{default:i(()=>[e(u,{name:"heart"}),a(" Like ")]),_:1}),e($,{basic:"",pointing:"left",color:"red"},{default:i(()=>[a(" 1,048 ")]),_:1})]),_:1}),e(d,{labelPosition:"right",as:"div"},{default:i(()=>[e(d,{basic:"",icon:"",color:"blue"},{default:i(()=>[e(u,{name:"fork"}),a(" Forks ")]),_:1}),e($,{basic:"",pointing:"left",color:"blue"},{default:i(()=>[a(" 1,048 ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon",description:"A button can have only an icon",code:t.iconExample},{default:i(()=>[e(d,{icon:""},{default:i(()=>[e(u,{name:"cloud"})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled Icon",description:"A button can use an icon as a label",code:t.labeledIconExample},{default:i(()=>[e(d,{labeled:"",icon:""},{default:i(()=>[e(u,{name:"pause"}),a(" Pause ")]),_:1}),e(d,{labeled:"right",icon:""},{default:i(()=>[e(u,{name:"right arrow"}),a(" Next ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic",description:"A basic button is less pronounced",code:t.basicExample},{default:i(()=>[e(d,{basic:""},{default:i(()=>[e(u,{name:"user"}),a(" Add Friend ")]),_:1})]),_:1},8,["code"]),e(y,{code:t.basicExample2},{default:i(()=>[e(d,{basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(d,{basic:"",positive:""},{default:i(()=>[a("Positive")]),_:1}),e(d,{basic:"",negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1},8,["code"]),e(y,{code:t.basicExample3},{default:i(()=>[e(d,{basic:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{basic:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{basic:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{basic:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{basic:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{basic:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{basic:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{basic:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{basic:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{basic:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{basic:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{basic:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{basic:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"A button can be formatted to appear on dark backgrounds",code:t.invertedExample},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{inverted:""},{default:i(()=>[a("Standard")]),_:1}),e(d,{inverted:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{inverted:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(d,{inverted:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{inverted:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{inverted:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{inverted:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{inverted:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{inverted:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{inverted:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{inverted:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{inverted:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{inverted:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{inverted:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{inverted:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{inverted:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.invertedExample2},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{inverted:"",basic:""},{default:i(()=>[a("Basic")]),_:1}),e(d,{inverted:"",basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(d,{inverted:"",basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(d,{inverted:"",basic:"",color:"red"},{default:i(()=>[a("Basic Red")]),_:1}),e(d,{inverted:"",basic:"",color:"orange"},{default:i(()=>[a("Basic Orange")]),_:1}),e(d,{inverted:"",basic:"",color:"yellow"},{default:i(()=>[a("Basic Yellow")]),_:1}),e(d,{inverted:"",basic:"",color:"olive"},{default:i(()=>[a("Basic Olive")]),_:1}),e(d,{inverted:"",basic:"",color:"green"},{default:i(()=>[a("Basic Green")]),_:1}),e(d,{inverted:"",basic:"",color:"teal"},{default:i(()=>[a("Basic Teal")]),_:1}),e(d,{inverted:"",basic:"",color:"blue"},{default:i(()=>[a("Basic Blue")]),_:1}),e(d,{inverted:"",basic:"",color:"violet"},{default:i(()=>[a("Basic Violet")]),_:1}),e(d,{inverted:"",basic:"",color:"purple"},{default:i(()=>[a("Basic Purple")]),_:1}),e(d,{inverted:"",basic:"",color:"pink"},{default:i(()=>[a("Basic Pink")]),_:1}),e(d,{inverted:"",basic:"",color:"brown"},{default:i(()=>[a("Basic Brown")]),_:1}),e(d,{inverted:"",basic:"",color:"grey"},{default:i(()=>[a("Basic Grey")]),_:1}),e(d,{inverted:"",basic:"",color:"black"},{default:i(()=>[a("Basic Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Buttons",description:"Buttons can exist together as a group",code:t.buttonsExample},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon Buttons",description:"Buttons can exist together as a group",code:t.iconButtonsExample},{default:i(()=>[e(b,{icon:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"align left"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"align center"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"align right"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"align justify"})]),_:1})]),_:1}),e(b,{icon:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"bold"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"underline"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"text width"})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Conditionals",description:"Button groups can contain conditionals",code:t.conditionalsExample},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Cancel")]),_:1}),d_,e(d,{positive:""},{default:i(()=>[a("Save")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.conditionalsExample2},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Cancel")]),_:1}),c_,e(d,{positive:""},{default:i(()=>[a("Save")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Active",description:"A button can show it is currently the active user selection",code:t.activeExample},{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"user"}),a(" Follow ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Disabled",description:"A button can show it is currently unable to be interacted with",code:t.disabledExample},{default:i(()=>[e(d,{disabled:""},{default:i(()=>[e(u,{name:"user"}),a(" Followed ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Loading",description:"A button can show a loading indicator",code:t.loadingExample},{default:i(()=>[e(d,{loading:""},{default:i(()=>[a("Loading")]),_:1}),e(d,{basic:"",loading:""},{default:i(()=>[a("Loading")]),_:1}),e(d,{primary:"",loading:""},{default:i(()=>[a("Loading")]),_:1}),e(d,{secondary:"",loading:""},{default:i(()=>[a("Loading")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Social",description:"A button can be formatted to link to a social website",code:t.socialExample},{default:i(()=>[e(d,{facebook:""},{default:i(()=>[e(u,{name:"facebook"}),a(" Facebook ")]),_:1}),e(d,{twitter:""},{default:i(()=>[e(u,{name:"twitter"}),a(" Twitter ")]),_:1}),e(d,{vk:""},{default:i(()=>[e(u,{name:"vk"}),a(" VK ")]),_:1}),e(d,{linkedin:""},{default:i(()=>[e(u,{name:"linkedin"}),a(" LinkedIn ")]),_:1}),e(d,{instagram:""},{default:i(()=>[e(u,{name:"instagram"}),a(" Instagram ")]),_:1}),e(d,{youtube:""},{default:i(()=>[e(u,{name:"youtube"}),a(" YouTube ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Size",description:"Buttons can have assorted sizes",code:t.sizeExample},{default:i(()=>[C("div",null,[e(d,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),e(d,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),e(d,{size:"small"},{default:i(()=>[a("Small")]),_:1}),e(d,{size:"medium"},{default:i(()=>[a("Medium")]),_:1}),e(d,{size:"large"},{default:i(()=>[a("Large")]),_:1}),e(d,{size:"big"},{default:i(()=>[a("Big")]),_:1}),e(d,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),e(d,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Floated",description:"A button can be aligned to the left or right of its container",code:t.floatedExample},{default:i(()=>[C("div",null,[e(d,{floated:"left"},{default:i(()=>[a("Left Floated")]),_:1}),e(d,{floated:"right"},{default:i(()=>[a("Right Floated")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored",description:"A button can have different colors",code:t.coloredExample},{default:i(()=>[C("div",null,[e(d,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Compact",description:"A button can reduce its padding to fit into tighter spaces",code:t.compactExample},{default:i(()=>[C("div",null,[e(d,{compact:""},{default:i(()=>[a("Compact")]),_:1}),e(d,null,{default:i(()=>[a("Normal")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Toggle",description:"A button can be formatted to toggle on and off",code:t.toggleExample},{default:i(()=>[e(d,{toggle:"",active:t.active,onClick:l[0]||(l[0]=()=>t.active=!t.active)},{default:i(()=>[a("Vote")]),_:1},8,["active"])]),_:1},8,["code"]),e(y,{title:"Positive",description:"A button can hint towards a positive consequence",code:t.positiveExample},{default:i(()=>[e(d,{positive:""},{default:i(()=>[a("Positive")]),_:1})]),_:1},8,["code"]),e(y,{title:"Negative",description:"A button can hint towards a negative consequence",code:t.negativeExample},{default:i(()=>[e(d,{negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"A button can take the width of its container",code:t.fluidExample},{default:i(()=>[e(d,{fluid:""},{default:i(()=>[a("Fluid")]),_:1})]),_:1},8,["code"]),e(y,{title:"Circular",description:"A button can be circular",code:t.circularExample},{default:i(()=>[e(d,{circular:"",icon:""},{default:i(()=>[e(u,{name:"settings"})]),_:1})]),_:1},8,["code"]),e(y,{code:t.circularExample2},{default:i(()=>[C("div",null,[e(d,{facebook:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"facebook"})]),_:1}),e(d,{twitter:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"twitter"})]),_:1}),e(d,{linkedin:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"linkedin"})]),_:1}),e(d,{youtube:"",circular:"",icon:""},{default:i(()=>[e(u,{name:"youtube"})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Vertically Attached",description:"A button can be attached to the top or bottom of other content",code:t.attachedExample},{default:i(()=>[C("div",null,[e(d,{attached:"top"},{default:i(()=>[a("Top")]),_:1}),e(v,{attached:""},{default:i(()=>[m_]),_:1}),e(d,{attached:"bottom"},{default:i(()=>[a("Bottom")]),_:1})])]),_:1},8,["code"]),e(y,{code:t.attachedExample2},{default:i(()=>[C("div",null,[e(b,{attached:"top"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[p_]),_:1}),e(b,{attached:"bottom"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Horizontally Attached",description:"A button can be attached to the left or right of other content",code:t.horizontalAttachedExample},{default:i(()=>[C("div",null,[e(d,{attached:"left"},{default:i(()=>[a("Left")]),_:1}),e(d,{attached:"right"},{default:i(()=>[a("Right")]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Group Variations")]),_:1}),e(y,{title:"Vertical Buttons",description:"Groups can be formatted to appear vertically",code:t.verticalButtonsExample},{default:i(()=>[e(b,{vertical:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Feed")]),_:1}),e(d,null,{default:i(()=>[a("Messages")]),_:1}),e(d,null,{default:i(()=>[a("Events")]),_:1}),e(d,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Labeled Icon Buttons",description:"Groups can be formatted as labeled icons",code:t.labeledIconButtonsExample},{default:i(()=>[e(b,{vertical:"",labeled:"",icon:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"pause"}),a(" Pause ")]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"play"}),a(" Play ")]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"shuffle"}),a(" Shuffle ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Mixed Group",description:"Groups can be formatted to use multiple button types together",code:t.mixedGroupExample},{default:i(()=>[e(b,null,{default:i(()=>[e(d,{labelPosition:"left",icon:""},{default:i(()=>[e(u,{name:"left chevron"}),a(" Back ")]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"stop"}),a(" Stop ")]),_:1}),e(d,{labelPosition:"right",icon:""},{default:i(()=>[e(u,{name:"right chevron"}),a(" Forward ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Equal Width",description:"Groups can have their widths divided evenly",code:t.equalWidthExample},{default:i(()=>[C("div",null,[e(b,{widths:5},{default:i(()=>[e(d,null,{default:i(()=>[a("Overview")]),_:1}),e(d,null,{default:i(()=>[a("Specs")]),_:1}),e(d,null,{default:i(()=>[a("Warranty")]),_:1}),e(d,null,{default:i(()=>[a("Reviews")]),_:1}),e(d,null,{default:i(()=>[a("Support")]),_:1})]),_:1}),e(o),e(b,{widths:3},{default:i(()=>[e(d,null,{default:i(()=>[a("Overview")]),_:1}),e(d,null,{default:i(()=>[a("Specs")]),_:1}),e(d,null,{default:i(()=>[a("Support")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored Buttons",description:"Groups can have a shared color",code:t.coloredButtonsExample},{default:i(()=>[e(b,{color:"blue"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic Buttons",description:"A button group can be less pronounced",code:t.basicButtonsExample},{default:i(()=>[C("div",null,[e(b,{basic:""},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1}),e(o),e(b,{basic:"",vertical:""},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})])]),_:1},8,["code"]),e(y,{code:t.basicButtonsExample2},{default:i(()=>[e(b,null,{default:i(()=>[e(d,{basic:"",color:"red"},{default:i(()=>[a("One")]),_:1}),e(d,{basic:"",color:"blue"},{default:i(()=>[a("Two")]),_:1}),e(d,{basic:"",color:"green"},{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Group Sizes",description:"Groups can have a shared size",code:t.groupSizesExample},{default:i(()=>[e(b,{size:"large"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),e(d,null,{default:i(()=>[a("Two")]),_:1}),e(d,null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.groupSizesExample2},{default:i(()=>[e(b,{basic:"",icon:"",size:"small"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"file"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"save"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"upload"})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"download"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{code:t.groupSizesExample3},{default:i(()=>[e(b,{size:"large"},{default:i(()=>[e(d,null,{default:i(()=>[a("One")]),_:1}),f_,e(d,null,{default:i(()=>[a("Two")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const h_=pe(u_,[["render",g_],["__scopeId","data-v-e27c391e"]]),__=B({name:"ContainerDoc",components:{DocExample:ve},setup(){return{containerExample:`<template>
  <sui-container>
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
  </sui-container>
</template>`,textContainerExample:`<template>
  <sui-container text>
    <sui-header as="h2">Header</sui-header>
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
  </sui-container>
</template>`,textAlignmentExample:`<template>
  <div>
    <sui-container textAlign="left">Left Aligned</sui-container>
    <sui-container textAlign="center">Center Aligned</sui-container>
    <sui-container textAlign="right">Right Aligned</sui-container>
  </div>
</template>`,fluidExample:`<template>
  <sui-container fluid>
    <sui-header as="h2">Dogs Roles with Humans</sui-header>
    <p>
      Domestic dogs inherited complex behaviors, such as bite inhibition, from
      their wolf ancestors, which would have been pack hunters with complex
      body language. These sophisticated forms of social cognition and
      communication may account for their trainability, playfulness, and
      ability to fit into human households and social situations, and these
      attributes have given dogs a relationship with humans that has enabled
      them to become one of the most successful species on the planet today.
    </p>
  </sui-container>
</template>`}}}),ys=t=>(_a("data-v-3696fd53"),t=t(),ba(),t),b_={class:"intro"},v_=ys(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),y_=ys(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),C_=ys(()=>C("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1));function w_(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",b_,[e(p,{as:"h1"},{default:i(()=>[a("Container "),e(f,null,{default:i(()=>[a("A container limits content to a maximum width")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Container",description:"A standard container",code:t.containerExample},{default:i(()=>[e(h,null,{default:i(()=>[v_]),_:1})]),_:1},8,["code"]),e(d,{title:"Text Container",description:"A container can reduce its maximum width to more naturally accommodate a single column of text",code:t.textContainerExample},{default:i(()=>[e(h,{text:""},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Header")]),_:1}),y_]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Text Alignment",description:"A container can specify its text alignment",code:t.textAlignmentExample},{default:i(()=>[C("div",null,[e(h,{textAlign:"left"},{default:i(()=>[a("Left Aligned")]),_:1}),e(h,{textAlign:"center"},{default:i(()=>[a("Center Aligned")]),_:1}),e(h,{textAlign:"right"},{default:i(()=>[a("Right Aligned")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Fluid",description:"A fluid container has no maximum width",code:t.fluidExample},{default:i(()=>[e(h,{fluid:""},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Dogs Roles with Humans")]),_:1}),C_]),_:1})]),_:1},8,["code"])]),_:1})])}const A_=pe(__,[["render",w_],["__scopeId","data-v-3696fd53"]]),Ce="/vue-fomantic-ui/images/wireframe/short-paragraph.png",S_=B({name:"DividerDoc",components:{DocExample:ve},setup(){return{dividerCode:`<div>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider />
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</div>`,verticalDividerCode:`<sui-segment>
  <sui-grid :columns="2" relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
  <sui-divider vertical>and</sui-divider>
</sui-segment>`,horizontalDividerCode:`<sui-segment>
  <sui-grid relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
  <sui-divider horizontal>and</sui-divider>
  <sui-grid relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
</sui-segment>`,horizontalAlignmentCode:`<div>
  <sui-divider horizontal textAlign="left">
    <sui-header as="h4">
      <sui-icon name="left align" />
      Left Aligned
    </sui-header>
  </sui-divider>
  <sui-divider horizontal textAlign="center">
    <sui-header as="h4">
      <sui-icon name="center align" />
      Center Aligned
    </sui-header>
  </sui-divider>
  <sui-divider horizontal textAlign="right">
    <sui-header as="h4">
      <sui-icon name="right align" />
      Right Aligned
    </sui-header>
  </sui-divider>
</div>`,invertedCode:`<sui-segment inverted>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider inverted />
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</sui-segment>`,fittedCode:`<sui-segment>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  <sui-divider fitted />
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
</sui-segment>`,hiddenCode:`<div>
  <sui-header as="h3">Section One</sui-header>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider hidden />
  <sui-header as="h3">Section Two</sui-header>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</div>`,sectionCode:`<div>
  <sui-header as="h3">Section One</sui-header>
  <sui-image src="/images/wireframe/short-paragraph.png" />
  <sui-divider section />
  <sui-header as="h3">Section Two</sui-header>
  <sui-image src="/images/wireframe/short-paragraph.png" />
</div>`,clearingCode:`<sui-segment>
  <sui-header floated="right">Floated Content</sui-header>
  <sui-divider clearing />
  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`}}}),k_={class:"intro"};function $_(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("doc-example"),A=_("sui-grid-column"),$=_("sui-grid");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",k_,[e(p,{as:"h1"},{default:i(()=>[a("Divider "),e(f,null,{default:i(()=>[a("A divider visually segments content into groups")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Divider",description:"A standard divider",code:t.dividerCode},{default:i(()=>[C("div",null,[e(d,{src:Ce}),e(o),e(d,{src:Ce})])]),_:1},8,["code"]),e(y,{title:"Vertical Divider",description:"A divider can segment content vertically",code:t.verticalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e($,{columns:2,relaxed:"very"},{default:i(()=>[e(A,null,{default:i(()=>[e(d,{src:Ce})]),_:1}),e(A,null,{default:i(()=>[e(d,{src:Ce})]),_:1})]),_:1}),e(o,{vertical:""},{default:i(()=>[a("and")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Divider",description:"A divider can segment content horizontally",code:t.horizontalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e($,{relaxed:"very"},{default:i(()=>[e(A,null,{default:i(()=>[e(d,{src:Ce})]),_:1})]),_:1}),e(o,{horizontal:""},{default:i(()=>[a("and")]),_:1}),e($,{relaxed:"very"},{default:i(()=>[e(A,null,{default:i(()=>[e(d,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Alignment",description:"A horizontal divider can be aligned",code:t.horizontalAlignmentCode},{default:i(()=>[C("div",null,[e(o,{horizontal:"",textAlign:"left"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[e(u,{name:"left align"}),a(" Left Aligned ")]),_:1})]),_:1}),e(o,{horizontal:"",textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[e(u,{name:"center align"}),a(" Center Aligned ")]),_:1})]),_:1}),e(o,{horizontal:"",textAlign:"right"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[e(u,{name:"right align"}),a(" Right Aligned ")]),_:1})]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Inverted",description:"A divider can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{src:Ce}),e(o,{inverted:""}),e(d,{src:Ce})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fitted",description:"A divider can be fitted, without any space above or below it",code:t.fittedCode},{default:i(()=>[e(v,null,{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),e(o,{fitted:""}),a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Hidden",description:"A hidden divider divides content without creating a dividing line",code:t.hiddenCode},{default:i(()=>[C("div",null,[e(p,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(d,{src:Ce}),e(o,{hidden:""}),e(p,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(d,{src:Ce})])]),_:1},8,["code"]),e(y,{title:"Section",description:"A divider can provide greater margins to divide sections of content",code:t.sectionCode},{default:i(()=>[C("div",null,[e(p,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(d,{src:Ce}),e(o,{section:""}),e(p,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(d,{src:Ce})])]),_:1},8,["code"]),e(y,{title:"Clearing",description:"A divider can clear the contents above it",code:t.clearingCode},{default:i(()=>[e(v,null,{default:i(()=>[e(p,{floated:"right"},{default:i(()=>[a("Floated Content")]),_:1}),e(o,{clearing:""}),e(d,{src:Ce})]),_:1})]),_:1},8,["code"])]),_:1})])}const T_=pe(S_,[["render",$_],["__scopeId","data-v-3a1972e7"]]),E_=B({name:"EmojiDoc",components:{DocExample:ve},setup(){return{disabledCode:`<sui-segment basic>
  <sui-emoji name="anguished" disabled />
</sui-segment>`,loadingCode:`<sui-segment basic>
  <sui-emoji name="angel" loading />
  <sui-emoji name="blush" loading />
  <sui-emoji name="grin" loading />
</sui-segment>`,sizeCode:`<sui-segment basic>
  <sui-emoji name="relaxed" size="small" /> Small
  <br>
  <sui-emoji name="relaxed" size="medium" /> Medium
  <br>
  <sui-emoji name="relaxed" size="large" /> Large
  <br>
  <sui-emoji name="relaxed" size="big" /> Big
</sui-segment>`,autosizingCode:`<sui-segment basic>
  <sui-header size="small">Within a header <sui-emoji name="relaxed" /></sui-header>
  <sui-button size="large">Within a button <sui-emoji name="relaxed" /></sui-button>
  <br><br>
  <sui-label size="massive">Within a label <sui-emoji name="relaxed" /></sui-label>
</sui-segment>`,linkCode:`<sui-segment basic>
  <sui-emoji name="slight_smile" link />
</sui-segment>`}}}),x_={class:"intro"},B_=C("br",null,null,-1),R_=C("br",null,null,-1),z_=C("br",null,null,-1),P_=C("br",null,null,-1),M_=C("br",null,null,-1);function N_(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-emoji"),y=_("doc-example"),A=_("sui-button"),$=_("sui-label");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",x_,[e(p,{as:"h1"},{default:i(()=>[a("Emoji "),e(f,null,{default:i(()=>[a(" An emoji is a glyph used to represent an emotional state ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Disabled",description:"An emoji can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"anguished",disabled:""})]),_:1})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An emoji can be used as a simple loader",code:t.loadingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"angel",loading:""}),e(d,{name:"blush",loading:""}),e(d,{name:"grin",loading:""})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Size",description:"An emoji can vary in size",code:t.sizeCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"relaxed",size:"small"}),a(" Small "),B_,e(d,{name:"relaxed",size:"medium"}),a(" Medium "),R_,e(d,{name:"relaxed",size:"large"}),a(" Large "),z_,e(d,{name:"relaxed",size:"big"}),a(" Big ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Autosizing",description:"If no specific size class is given, all emojis are automatically sized according to the current element font-size",code:t.autosizingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(p,{size:"small"},{default:i(()=>[a("Within a header "),e(d,{name:"relaxed"})]),_:1}),e(A,{size:"large"},{default:i(()=>[a("Within a button "),e(d,{name:"relaxed"})]),_:1}),P_,M_,e($,{size:"massive"},{default:i(()=>[a("Within a label "),e(d,{name:"relaxed"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link",description:"An emoji can be formatted as a link",code:t.linkCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(d,{name:"slight_smile",link:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const D_=pe(E_,[["render",N_]]),F_=B({name:"FlagDoc",components:{DocExample:ve},setup(){return{flagCode:`<div>
  <sui-flag name="ae" />
  <sui-flag name="france" />
  <sui-flag name="myanmar" />
</div>`}}}),V_={class:"intro"};function I_(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-flag"),y=_("doc-example");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",V_,[e(p,{as:"h1"},{default:i(()=>[a("Flag "),e(f,null,{default:i(()=>[a(" A flag is used to represent a political state ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(y,{title:"Flag",description:"A flag can use the two digit country code, the full name, or a common alias",code:t.flagCode},{default:i(()=>[C("div",null,[e(d,{name:"ae"}),e(d,{name:"france"}),e(d,{name:"myanmar"})])]),_:1},8,["code"])]),_:1})])}const L_=pe(F_,[["render",I_]]),O_="/vue-fomantic-ui/images/icons/school.png",H_=B({name:"HeaderDoc",components:{DocExample:ve},setup(){return{pageHeaderCode:`<div>
  <sui-header as="h1">First header</sui-header>
  <sui-header as="h2">Second header</sui-header>
  <sui-header as="h3">Third header</sui-header>
  <sui-header as="h4">Fourth header</sui-header>
  <sui-header as="h5">Fifth header</sui-header>
</div>`,contentHeaderCode:`<div>
  <sui-header size="huge">Huge Header</sui-header>
  <sui-header size="large">Large Header</sui-header>
  <sui-header size="medium">Medium Header</sui-header>
  <sui-header size="small">Small Header</sui-header>
  <sui-header size="tiny">Tiny Header</sui-header>
</div>`,iconHeadersCode:`<sui-header icon>
  <sui-icon name="settings" />
  <sui-header-content>
    AccountSettings
    <sui-header-subheader>
      Manage your account settings and set e-mail preferences.
    </sui-header-subheader>
  </sui-header-content>
</sui-header>`,subHeadersCode:`<div>
  <sui-header as="h2" sub>Price</sui-header>
  <span>$10.99</span>
</div>`,imageCode:`<sui-header>
  <sui-image src="/images/icons/school.png" />
  <sui-header-content>Learn More</sui-header-content>
</sui-header>`,iconCode:`<sui-header>
  <sui-icon name="plug" />
  <sui-header-content>Uptime Guarantee</sui-header-content>
</sui-header>`,subheaderCode:`<sui-header as="h2">
  AccountSettings
  <sui-header-subheader>
    Manage your account settings and set e-mail preferences.
  </sui-header-subheader>
</sui-header>`,disabledCode:"<sui-header disabled>Disabled Header</sui-header>",dividingCode:'<sui-header as="h3" dividing>Dividing Header</sui-header>',blockCode:'<sui-header as="h3" block>Block Header</sui-header>',attachedCode:`<div>
  <sui-header as="h2" attached="top">Attached Header</sui-header>
  <sui-segment attached>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </sui-segment>
</div>`,floatingCode:`<sui-segment clearing>
  <sui-header as="h3" floated="right">Go Forward</sui-header>
  <sui-header as="h3" floated="left">Go Back</sui-header>
</sui-segment>`,textAlignCode:`<sui-segment>
  <sui-header as="h3" textAlign="right">Right</sui-header>
  <sui-header as="h3" textAlign="left">Left</sui-header>
  <sui-header as="h3" textAlign="justified">
    This should take up the full width even if only one line
  </sui-header>
  <sui-header as="h3" textAlign="center">Center</sui-header>
</sui-segment>`,coloredCode:`<div>
  <sui-header as="h4" color="primary">Primary</sui-header>
  <sui-header as="h4" color="secondary">Secondary</sui-header>
  <sui-header as="h4" color="red">Red</sui-header>
  <sui-header as="h4" color="orange">Orange</sui-header>
  <sui-header as="h4" color="yellow">Yellow</sui-header>
  <sui-header as="h4" color="olive">Olive</sui-header>
  <sui-header as="h4" color="green">Green</sui-header>
  <sui-header as="h4" color="teal">Teal</sui-header>
  <sui-header as="h4" color="blue">Blue</sui-header>
  <sui-header as="h4" color="purple">Purple</sui-header>
  <sui-header as="h4" color="violet">Violet</sui-header>
  <sui-header as="h4" color="pink">Pink</sui-header>
  <sui-header as="h4" color="brown">Brown</sui-header>
  <sui-header as="h4" color="grey">Grey</sui-header>
</div>`,invertedCode:`<sui-segment inverted>
  <sui-header as="h4" color="red" inverted>Red</sui-header>
  <sui-header as="h4" color="orange" inverted>Orange</sui-header>
  <sui-header as="h4" color="yellow" inverted>Yellow</sui-header>
  <sui-header as="h4" color="olive" inverted>Olive</sui-header>
  <sui-header as="h4" color="green" inverted>Green</sui-header>
  <sui-header as="h4" color="teal" inverted>Teal</sui-header>
  <sui-header as="h4" color="blue" inverted>Blue</sui-header>
  <sui-header as="h4" color="purple" inverted>Purple</sui-header>
  <sui-header as="h4" color="violet" inverted>Violet</sui-header>
  <sui-header as="h4" color="pink" inverted>Pink</sui-header>
  <sui-header as="h4" color="brown" inverted>Brown</sui-header>
  <sui-header as="h4" color="grey" inverted>Grey</sui-header>
</sui-segment>`}}}),j_={class:"intro"},q_=C("span",null,"$10.99",-1);function U_(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example"),y=_("sui-header-content"),A=_("sui-image");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",j_,[e(p,{as:"h1"},{default:i(()=>[a("Header "),e(f,null,{default:i(()=>[a(" A header provides a short summary of content ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Page Headers",description:"Headers may be oriented to give the hierarchy of a section in the context of the page",code:t.pageHeaderCode},{default:i(()=>[C("div",null,[e(p,{as:"h1"},{default:i(()=>[a("First header")]),_:1}),e(p,{as:"h2"},{default:i(()=>[a("Second header")]),_:1}),e(p,{as:"h3"},{default:i(()=>[a("Third header")]),_:1}),e(p,{as:"h4"},{default:i(()=>[a("Fourth header")]),_:1}),e(p,{as:"h5"},{default:i(()=>[a("Fifth header")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Content Headers",description:"Headers may be oriented to give the importance of a section in the context of the content that surrounds it",code:t.contentHeaderCode},{default:i(()=>[C("div",null,[e(p,{size:"huge"},{default:i(()=>[a("Huge Header")]),_:1}),e(p,{size:"large"},{default:i(()=>[a("Large Header")]),_:1}),e(p,{size:"medium"},{default:i(()=>[a("Medium Header")]),_:1}),e(p,{size:"small"},{default:i(()=>[a("Small Header")]),_:1}),e(p,{size:"tiny"},{default:i(()=>[a("Tiny Header")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Icon Headers",description:"A header can be formatted to emphasize an icon",code:t.iconHeadersCode},{default:i(()=>[e(p,{icon:""},{default:i(()=>[e(u,{name:"settings"}),e(y,null,{default:i(()=>[a(" AccountSettings "),e(f,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Sub Headers",description:"Headers may be formatted to label smaller or de-emphasized content",code:t.subHeadersCode},{default:i(()=>[C("div",null,[e(p,{as:"h2",sub:""},{default:i(()=>[a("Price")]),_:1}),q_])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(d,{title:"Image",description:"A header may contain an image",code:t.imageCode},{default:i(()=>[e(p,null,{default:i(()=>[e(A,{src:O_}),e(y,null,{default:i(()=>[a("Learn More")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Icon",description:"A header may contain an icon",code:t.iconCode},{default:i(()=>[e(p,null,{default:i(()=>[e(u,{name:"plug"}),e(y,null,{default:i(()=>[a("Uptime Guarantee")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Subheader",description:"Headers may contain subheaders",code:t.subheaderCode},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a(" AccountSettings "),e(f,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Disabled",description:"A header can show that it is inactive",code:t.disabledCode},{default:i(()=>[e(p,{disabled:""},{default:i(()=>[a("Disabled Header")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Dividing",description:"A header can be formatted to divide itself from the content below it",code:t.dividingCode},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Dividing Header")]),_:1})]),_:1},8,["code"]),e(d,{title:"Block",description:"A header can be formatted to appear inside a content block",code:t.blockCode},{default:i(()=>[e(p,{as:"h3",block:""},{default:i(()=>[a("Block Header")]),_:1})]),_:1},8,["code"]),e(d,{title:"Attached",description:"A header can be attached to other content, like a segment",code:t.attachedCode},{default:i(()=>[C("div",null,[e(p,{as:"h2",attached:"top"},{default:i(()=>[a("Attached Header")]),_:1}),e(v,{attached:""},{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Floating",description:"A header can sit to the left or right of other content",code:t.floatingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(p,{as:"h3",floated:"right"},{default:i(()=>[a("Go Forward")]),_:1}),e(p,{as:"h3",floated:"left"},{default:i(()=>[a("Go Back")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Text Alignment",description:"A header can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[e(v,null,{default:i(()=>[e(p,{as:"h3",textAlign:"right"},{default:i(()=>[a("Right")]),_:1}),e(p,{as:"h3",textAlign:"left"},{default:i(()=>[a("Left")]),_:1}),e(p,{as:"h3",textAlign:"justified"},{default:i(()=>[a(" This should take up the full width even if only one line ")]),_:1}),e(p,{as:"h3",textAlign:"center"},{default:i(()=>[a("Center")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored",description:"A header can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(p,{as:"h4",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(p,{as:"h4",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(p,{as:"h4",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(p,{as:"h4",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(p,{as:"h4",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(p,{as:"h4",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(p,{as:"h4",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(p,{as:"h4",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(p,{as:"h4",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(p,{as:"h4",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(p,{as:"h4",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(p,{as:"h4",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(p,{as:"h4",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(p,{as:"h4",color:"grey"},{default:i(()=>[a("Grey")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Inverted",description:"A header can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(p,{as:"h4",color:"red",inverted:""},{default:i(()=>[a("Red")]),_:1}),e(p,{as:"h4",color:"orange",inverted:""},{default:i(()=>[a("Orange")]),_:1}),e(p,{as:"h4",color:"yellow",inverted:""},{default:i(()=>[a("Yellow")]),_:1}),e(p,{as:"h4",color:"olive",inverted:""},{default:i(()=>[a("Olive")]),_:1}),e(p,{as:"h4",color:"green",inverted:""},{default:i(()=>[a("Green")]),_:1}),e(p,{as:"h4",color:"teal",inverted:""},{default:i(()=>[a("Teal")]),_:1}),e(p,{as:"h4",color:"blue",inverted:""},{default:i(()=>[a("Blue")]),_:1}),e(p,{as:"h4",color:"purple",inverted:""},{default:i(()=>[a("Purple")]),_:1}),e(p,{as:"h4",color:"violet",inverted:""},{default:i(()=>[a("Violet")]),_:1}),e(p,{as:"h4",color:"pink",inverted:""},{default:i(()=>[a("Pink")]),_:1}),e(p,{as:"h4",color:"brown",inverted:""},{default:i(()=>[a("Brown")]),_:1}),e(p,{as:"h4",color:"grey",inverted:""},{default:i(()=>[a("Grey")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const J_=pe(H_,[["render",U_]]),G_=B({name:"IconDoc",components:{DocExample:ve},setup(){return{disabledCode:'<sui-icon name="users" disabled />',loadingCode:`<div>
  <sui-icon name="spinner" loading />
  <sui-icon name="notched circle" loading />
  <sui-icon name="asterisk" loading />
</div>`,fittedCode:`<div>
  This icon
  <sui-icon name="help" fitted />
  is fitted.
  <br>
  This icon
  <sui-icon name="help" />
  is not.
</div>`,sizeCode:`<div>
  <sui-icon name="home" size="mini" />
  <sui-icon name="home" size="tiny" />
  <sui-icon name="home" size="small" />
  <br>
  <sui-icon name="home" />
  <br>
  <sui-icon name="home" size="large" />
  <br>
  <sui-icon name="home" size="big" />
  <br>
  <sui-icon name="home" size="huge" />
  <br>
  <sui-icon name="home" size="massive" />
</div>`,linkCode:`<div>
  <sui-icon name="close" link />
  <sui-icon name="help" link />
</div>`,flippedCode:`<div>
  <sui-icon name="cloud" flipped="horizontally" />
  <sui-icon name="cloud" flipped="vertically" />
</div>`,rotatedCode:`<div>
  <sui-icon name="cloud" rotated="clockwise" />
  <sui-icon name="cloud" rotated="counterclockwise" />
</div>`,circularCode:`<div>
  <sui-icon name="users" circular />
  <sui-icon name="users" color="teal" circular />
  <sui-icon name="users" inverted circular />
  <sui-icon name="users" color="teal" inverted circular />
</div>`,borderedCode:`<div>
  <sui-icon name="users" bordered />
  <sui-icon name="users" bordered color="teal" />
  <sui-icon name="users" inverted bordered color="black" />
  <sui-icon name="users" inverted bordered color="teal" />
</div>`,coloredCode:`<div>
  <sui-icon name="users" color="primary" />
  <sui-icon name="users" color="secondary" />
  <sui-icon name="users" color="red" />
  <sui-icon name="users" color="orange" />
  <sui-icon name="users" color="yellow" />
  <sui-icon name="users" color="olive" />
  <sui-icon name="users" color="green" />
  <sui-icon name="users" color="teal" />
  <sui-icon name="users" color="blue" />
  <sui-icon name="users" color="violet" />
  <sui-icon name="users" color="purple" />
  <sui-icon name="users" color="pink" />
  <sui-icon name="users" color="brown" />
  <sui-icon name="users" color="grey" />
  <sui-icon name="users" color="black" />
</div>`,invertedCode:`<sui-segment inverted>
  <sui-icon name="users" inverted />
  <sui-icon name="users" inverted color="primary" />
  <sui-icon name="users" inverted color="secondary" />
  <sui-icon name="users" inverted color="red" />
  <sui-icon name="users" inverted color="orange" />
  <sui-icon name="users" inverted color="yellow" />
  <sui-icon name="users" inverted color="olive" />
  <sui-icon name="users" inverted color="green" />
  <sui-icon name="users" inverted color="teal" />
  <sui-icon name="users" inverted color="blue" />
  <sui-icon name="users" inverted color="violet" />
  <sui-icon name="users" inverted color="purple" />
  <sui-icon name="users" inverted color="pink" />
  <sui-icon name="users" inverted color="brown" />
  <sui-icon name="users" inverted color="grey" />
</sui-segment>`,iconsCode:`<sui-icon-group size="huge">
  <sui-icon name="circle outline" size="big" />
  <sui-icon name="user" />
</sui-icon-group>`,cornerIconCode:`<sui-icon-group size="huge">
  <sui-icon name="puzzle" />
  <sui-icon name="add" corner />
</sui-icon-group>`}}}),Y_={class:"intro"},W_=C("br",null,null,-1),K_=C("br",null,null,-1),Q_=C("br",null,null,-1),X_=C("br",null,null,-1),Z_=C("br",null,null,-1),eb=C("br",null,null,-1);function tb(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example"),y=_("sui-icon-group");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Y_,[e(p,{as:"h1"},{default:i(()=>[a("Icon "),e(f,null,{default:i(()=>[a(" An icon is a glyph used to represent something else ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Disabled",description:"An icon can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(u,{name:"users",disabled:""})]),_:1},8,["code"]),e(d,{title:"Loading",description:"An icon can be used as a simple loader",code:t.loadingCode},{default:i(()=>[C("div",null,[e(u,{name:"spinner",loading:""}),e(u,{name:"notched circle",loading:""}),e(u,{name:"asterisk",loading:""})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Fitted",description:"An icon can be fitted, without any space to the left or right of it",code:t.fittedCode},{default:i(()=>[C("div",null,[a(" This icon "),e(u,{name:"help",fitted:""}),a(" is fitted. "),W_,a(" This icon "),e(u,{name:"help"}),a(" is not. ")])]),_:1},8,["code"]),e(d,{title:"Size",description:"An icon can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(u,{name:"home",size:"mini"}),e(u,{name:"home",size:"tiny"}),e(u,{name:"home",size:"small"}),K_,e(u,{name:"home"}),Q_,e(u,{name:"home",size:"large"}),X_,e(u,{name:"home",size:"big"}),Z_,e(u,{name:"home",size:"huge"}),eb,e(u,{name:"home",size:"massive"})])]),_:1},8,["code"]),e(d,{title:"Link",description:"An icon can be formatted as a link",code:t.linkCode},{default:i(()=>[C("div",null,[e(u,{name:"close",link:""}),e(u,{name:"help",link:""})])]),_:1},8,["code"]),e(d,{title:"Flipped",description:"An icon can be flipped",code:t.flippedCode},{default:i(()=>[C("div",null,[e(u,{name:"cloud",flipped:"horizontally"}),e(u,{name:"cloud",flipped:"vertically"})])]),_:1},8,["code"]),e(d,{title:"Rotated",description:"An icon can be rotated",code:t.rotatedCode},{default:i(()=>[C("div",null,[e(u,{name:"cloud",rotated:"clockwise"}),e(u,{name:"cloud",rotated:"counterclockwise"})])]),_:1},8,["code"]),e(d,{title:"Circular",description:"An icon can be formatted to appear circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(u,{name:"users",circular:""}),e(u,{name:"users",color:"teal",circular:""}),e(u,{name:"users",inverted:"",circular:""}),e(u,{name:"users",color:"teal",inverted:"",circular:""})])]),_:1},8,["code"]),e(d,{title:"Bordered",description:"An icon can be formatted to appear bordered",code:t.borderedCode},{default:i(()=>[C("div",null,[e(u,{name:"users",bordered:""}),e(u,{name:"users",bordered:"",color:"teal"}),e(u,{name:"users",inverted:"",bordered:"",color:"black"}),e(u,{name:"users",inverted:"",bordered:"",color:"teal"})])]),_:1},8,["code"]),e(d,{title:"Colored",description:"An icon can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(u,{name:"users",color:"primary"}),e(u,{name:"users",color:"secondary"}),e(u,{name:"users",color:"red"}),e(u,{name:"users",color:"orange"}),e(u,{name:"users",color:"yellow"}),e(u,{name:"users",color:"olive"}),e(u,{name:"users",color:"green"}),e(u,{name:"users",color:"teal"}),e(u,{name:"users",color:"blue"}),e(u,{name:"users",color:"violet"}),e(u,{name:"users",color:"purple"}),e(u,{name:"users",color:"pink"}),e(u,{name:"users",color:"brown"}),e(u,{name:"users",color:"grey"}),e(u,{name:"users",color:"black"})])]),_:1},8,["code"]),e(d,{title:"Inverted",description:"An icon can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(u,{name:"users",inverted:""}),e(u,{name:"users",inverted:"",color:"primary"}),e(u,{name:"users",inverted:"",color:"secondary"}),e(u,{name:"users",inverted:"",color:"red"}),e(u,{name:"users",inverted:"",color:"orange"}),e(u,{name:"users",inverted:"",color:"yellow"}),e(u,{name:"users",inverted:"",color:"olive"}),e(u,{name:"users",inverted:"",color:"green"}),e(u,{name:"users",inverted:"",color:"teal"}),e(u,{name:"users",inverted:"",color:"blue"}),e(u,{name:"users",inverted:"",color:"violet"}),e(u,{name:"users",inverted:"",color:"purple"}),e(u,{name:"users",inverted:"",color:"pink"}),e(u,{name:"users",inverted:"",color:"brown"}),e(u,{name:"users",inverted:"",color:"grey"})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(d,{title:"Icons",description:"Several icons can be used together as a group",code:t.iconsCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(u,{name:"circle outline",size:"big"}),e(u,{name:"user"})]),_:1})]),_:1},8,["code"]),e(d,{title:"Corner Icon",description:"A group of icons can display a smaller corner icon",code:t.cornerIconCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(u,{name:"puzzle"}),e(u,{name:"add",corner:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const ib=pe(G_,[["render",tb]]),G="/vue-fomantic-ui/images/wireframe/image.png",Ll="/vue-fomantic-ui/images/wireframe/image-text.png",Ki="/vue-fomantic-ui/images/wireframe/white-image.png",ct="/vue-fomantic-ui/images/wireframe/square-image.png",lb=B({name:"ImageDoc",components:{DocExample:ve},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),ab={class:"intro"},nb=C("span",null,"Username",-1),sb=C("span",null,"Top Aligned",-1),ob=C("span",null,"Middle Aligned",-1),ub=C("span",null,"Bottom Aligned",-1),rb=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),db=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),cb=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),mb=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),pb=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),fb=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function gb(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("doc-example"),A=_("sui-image-group");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",ab,[e(p,{as:"h1"},{default:i(()=>[a("Image "),e(f,null,{default:i(()=>[a(" An image is a graphic representation of something ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Image",description:"An image",code:t.imageCode},{default:i(()=>[e(d,{src:G,size:"small"})]),_:1},8,["code"]),e(y,{title:"Image Link",description:"An image can be formatted to link to other content",code:t.imageLinkCode},{default:i(()=>[e(d,{as:"a",size:"medium",src:Ll,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Hidden",description:"An image can be hidden",code:t.hiddenCode},{default:i(()=>[e(d,{hidden:"",src:G,size:"small"})]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:t.disabledCode},{default:i(()=>[e(d,{disabled:"",src:G,size:"small"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:t.avatarCode},{default:i(()=>[C("div",null,[e(d,{avatar:"",src:G}),nb])]),_:1},8,["code"]),e(y,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:t.borderedCode},{default:i(()=>[e(d,{bordered:"",size:"medium",src:Ki})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An image can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(d,{fluid:"",src:G})]),_:1},8,["code"]),e(y,{title:"Rounded",description:"An image may appear rounded",code:t.roundedCode},{default:i(()=>[e(d,{rounded:"",size:"medium",src:G})]),_:1},8,["code"]),e(y,{title:"Circular",description:"An image may appear circular",code:t.circularCode},{default:i(()=>[e(d,{circular:"",size:"medium",src:ct})]),_:1},8,["code"]),e(y,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:t.verticallyAlignedCode},{default:i(()=>[C("div",null,[e(d,{verticalAlign:"top",size:"tiny",src:ct}),sb,e(o),e(d,{verticalAlign:"middle",size:"tiny",src:ct}),ob,e(o),e(d,{verticalAlign:"bottom",size:"tiny",src:ct}),ub])]),_:1},8,["code"]),e(y,{title:"Centered",description:"An image can appear centered in a content block",code:t.centeredCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{centered:"",size:"medium",src:G}),rb,db,e(d,{centered:"",size:"small",src:Ll}),cb]),_:1})]),_:1},8,["code"]),e(y,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:t.spacedCode},{default:i(()=>[e(v,null,{default:i(()=>[C("p",null,[a("Te eum doming eirmod, nominati pertinacia "),e(d,{spaced:"",size:"mini",src:G}),a(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),e(y,{title:"Floated",description:"An image can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{floated:"left",size:"small",src:Ll}),mb,e(d,{floated:"right",size:"small",src:Ll}),pb,fb]),_:1})]),_:1},8,["code"]),e(y,{title:"Size",description:"An image may appear at different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(d,{size:"mini",src:G}),e(o,{hidden:""}),e(d,{size:"tiny",src:G}),e(o,{hidden:""}),e(d,{size:"medium",src:G}),e(o,{hidden:""}),e(d,{size:"large",src:G})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Size",description:"A group of images can be formatted to have the same size",code:t.sizeGroupCode},{default:i(()=>[e(A,{size:"tiny"},{default:i(()=>[e(d,{src:G}),e(d,{src:G}),e(d,{src:G}),e(d,{src:G})]),_:1})]),_:1},8,["code"])]),_:1})])}const hb=pe(lb,[["render",gb]]),_b=B({name:"InputDoc",components:{DocExample:ve},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
  <sui-input loading placeholder="Search..." />
  <sui-divider hidden />
  <sui-input loading iconPosition="left" placeholder="Search..." />
</div>`,disabledCode:'<sui-input disabled placeholder="Search..." />',errorCode:'<sui-input error placeholder="Search..." />',iconCode:'<sui-input icon="search" placeholder="Search..." />',labeledCode:'<sui-input label="http://" placeholder="mysite.com" />',actionCode:'<sui-input action="Search" placeholder="Search..." />',transparentCode:'<sui-input transparent placeholder="Search..." />',invertedCode:`<sui-segment inverted>
  <sui-input inverted placeholder="Search..." />
  <sui-divider inverted />
  <sui-input inverted icon="search" iconPosition="left" placeholder="Search..." />
  <sui-divider inverted />
  <sui-input inverted transparent icon="search" placeholder="Search..." />
</sui-segment>`,fluidCode:'<sui-input fluid icon="search" placeholder="Search..." />',sizeCode:`<div>
  <sui-input size="mini" icon="search" placeholder="Search mini" />
  <sui-divider hidden />
  <sui-input size="small" icon="search" placeholder="Search small" />
  <sui-divider hidden />
  <sui-input size="large" icon="search" placeholder="Search large" />
  <sui-divider hidden />
  <sui-input size="big" icon="search" placeholder="Search big" />
  <sui-divider hidden />
  <sui-input size="huge" icon="search" placeholder="Search huge" />
  <sui-divider hidden />
  <sui-input size="massive" icon="search" placeholder="Search massive" />
</div>`}}}),bb={class:"intro"};function vb(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-input"),y=_("doc-example");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",bb,[e(p,{as:"h1"},{default:i(()=>[a("Input "),e(f,null,{default:i(()=>[a(" An input is a field used to elicit a response from a user ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Input",description:"A standard input",code:t.inputCode},{default:i(()=>[e(d,{placeholder:"Search..."})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:t.focusCode},{default:i(()=>[e(d,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:t.loadingCode},{default:i(()=>[C("div",null,[e(d,{loading:"",placeholder:"Search..."}),e(o,{hidden:""}),e(d,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An input field can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(d,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Error",description:"An input field can show the data contains errors",code:t.errorCode},{default:i(()=>[e(d,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Icon",description:"An input can be formatted with an icon",code:t.iconCode},{default:i(()=>[e(d,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Labeled",description:"An input can be formatted with a label",code:t.labeledCode},{default:i(()=>[C("div",null,[e(d,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),e(y,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:t.actionCode},{default:i(()=>[e(d,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Transparent",description:"A transparent input has no background",code:t.transparentCode},{default:i(()=>[e(d,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(d,{inverted:"",placeholder:"Search..."}),e(o,{inverted:""}),e(d,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),e(o,{inverted:""}),e(d,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An input can take the size of its container",code:t.fluidCode},{default:i(()=>[e(d,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Size",description:"An input can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(d,{size:"mini",icon:"search",placeholder:"Search mini"}),e(o,{hidden:""}),e(d,{size:"small",icon:"search",placeholder:"Search small"}),e(o,{hidden:""}),e(d,{size:"large",icon:"search",placeholder:"Search large"}),e(o,{hidden:""}),e(d,{size:"big",icon:"search",placeholder:"Search big"}),e(o,{hidden:""}),e(d,{size:"huge",icon:"search",placeholder:"Search huge"}),e(o,{hidden:""}),e(d,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}const yb=pe(_b,[["render",vb]]),$n="/vue-fomantic-ui/images/avatar/small/joe.jpg",Tt="/vue-fomantic-ui/images/avatar/small/elliot.jpg",_l="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Cb=B({name:"LabelDoc",components:{DocExample:ve},setup(){return{labelCode:`<sui-label>
  <sui-icon name="mail" /> 23
</sui-label>`,imageCode:`<div>
  <sui-label as="a" image>
    <img src="/images/avatar/small/joe.jpg" />
    Joe
  </sui-label>
  <sui-label as="a" image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label as="a" image>
    <img src="/images/avatar/small/stevie.jpg" />
    Stevie
  </sui-label>
</div>`,pointingCode:`<sui-form fluid>
  <sui-form-field>
    <input type="text" placeholder="First name" />
    <sui-label pointing>Please enter a value</sui-label>
  </sui-form-field>
  <sui-divider />

  <sui-form-field>
    <sui-label pointing="below">Please enter a value</sui-label>
    <input type="text" placeholder="Last name" />
  </sui-form-field>
  <sui-divider />

  <sui-form-field inline>
    <input type="text" placeholder="Username" />
    <sui-label pointing="left">That name is taken!</sui-label>
  </sui-form-field>
  <sui-divider />

  <sui-form-field inline>
    <sui-label pointing="right">Your password must be 6 characters or more</sui-label>
    <input type="password" placeholder="Password" />
  </sui-form-field>
</sui-form>`,cornerCode:`<sui-grid :columns="2">
  <sui-grid-column>
    <sui-image
      fluid
      src="/images/wireframe/image.png"
      :label="{ corner: 'left', icon: 'heart' }"
    />
  </sui-grid-column>
  <sui-grid-column>
    <sui-image
      fluid
      src="/images/wireframe/image.png"
      :label="{ corner: 'right', icon: 'save', color: 'red' }"
    />
  </sui-grid-column>
</sui-grid>`,tagCode:`<div>
  <sui-label tag>New</sui-label>
  <sui-label tag color="red">Upcoming</sui-label>
  <sui-label tag color="teal">Featured</sui-label>
</div>`,ribbonCode:`<sui-grid :columns="2">
  <sui-grid-column>
    <sui-segment raised>
      <sui-label as="a" ribbon color="red">Overview</sui-label>
      <span>Account Details</span>
      <sui-image src="/images/wireframe/paragraph.png" />

      <sui-label as="a" ribbon color="blue">Community</sui-label>
      <span>User Reviews</span>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>

  <sui-grid-column>
    <sui-segment raised>
      <sui-label as="a" ribbon="right" color="orange">Specs</sui-label>
      <sui-image src="/images/wireframe/paragraph.png" />

      <sui-label as="a" ribbon="right" color="teal">Reviews</sui-label>
      <sui-image src="/images/wireframe/paragraph.png" />
    </sui-segment>
  </sui-grid-column>
</sui-grid>`,attachedCode:`<sui-grid :columns="3">
  <sui-grid-row>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top">HTML</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom">CSS</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top right">Code</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
  </sui-grid-row>

  <sui-grid-row>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="top left">View</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom left">User View</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
    <sui-grid-column>
      <sui-segment padded>
        <sui-label attached="bottom right">Admin View</sui-label>
        <sui-image src="/images/wireframe/paragraph.png" />
      </sui-segment>
    </sui-grid-column>
  </sui-grid-row>
</sui-grid>`,horizontalCode:`<sui-list divided selection>
  <sui-list-item>
    <sui-label color="red" horizontal>Fruit</sui-label>
    Kumquats
  </sui-list-item>
  <sui-list-item>
    <sui-label  color="purple" horizontal>Candy</sui-label>
    Ice Cream
  </sui-list-item>
  <sui-list-item>
    <sui-label color="red" horizontal>Fruit</sui-label>
    Orange
  </sui-list-item>
  <sui-list-item>
    <sui-label horizontal>Dog</sui-label>
    Poodle
  </sui-list-item>
</sui-list>`,floatingCode:`<sui-menu compact>
  <sui-menu-item>
    <sui-icon name="mail" /> Messages
    <sui-label floating color="red">22</sui-label>
  </sui-menu-item>
  <sui-menu-item>
    <sui-icon name="users" /> Friends
    <sui-label floating color="teal">22</sui-label>
  </sui-menu-item>
</sui-menu>`,detailCode:`<sui-label>
  Dogs
  <sui-label-detail>214</sui-label-detail>
</sui-label>`,iconCode:`<div>
  <sui-label as="a">
    <sui-icon name="mail" />
    Mail
  </sui-label>
  <sui-label as="a">
    Tag
    <sui-icon name="delete" />
  </sui-label>
</div>`,imageIncludeCode:`<div>
  <sui-label as="a">
    <sui-image avatar spaced="right" src="/images/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label as="a">
    <img src="/images/avatar/small/stevie.jpg" />
    Stevie
  </sui-label>
</div>`,linkCode:`<sui-label as="a" link>
  <sui-icon name="mail" /> 23
</sui-label>`,circularCode:`<div>
  <sui-label as="a" circular color="red">2</sui-label>
  <sui-label as="a" circular color="orange">2</sui-label>
  <sui-label as="a" circular color="yellow">2</sui-label>
  <sui-label as="a" circular color="olive">2</sui-label>
  <sui-label as="a" circular color="green">2</sui-label>
  <sui-label as="a" circular color="teal">2</sui-label>
  <sui-label as="a" circular color="blue">2</sui-label>
  <sui-label as="a" circular color="violet">2</sui-label>
  <sui-label as="a" circular color="purple">2</sui-label>
  <sui-label as="a" circular color="pink">2</sui-label>
  <sui-label as="a" circular color="brown">2</sui-label>
  <sui-label as="a" circular color="grey">2</sui-label>
  <sui-label as="a" circular color="black">2</sui-label>
</div>`,basicCode:`<div>
  <sui-label basic as="a">Basic</sui-label>
  <sui-label basic as="a" pointing>Pointing</sui-label>
  <sui-label basic as="a" image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </sui-label>
  <sui-label basic as="a" pointing color="red">Red Pointing</sui-label>
  <sui-label basic as="a" color="blue">Blue</sui-label>
</div>`,coloredCode:`<div>
  <sui-label as="a" color="primary">Primary</sui-label>
  <sui-label as="a" color="secondary">Secondary</sui-label>
  <sui-label as="a" color="red">Red</sui-label>
  <sui-label as="a" color="orange">Orange</sui-label>
  <sui-label as="a" color="yellow">Yellow</sui-label>
  <sui-label as="a" color="olive">Olive</sui-label>
  <sui-label as="a" color="green">Green</sui-label>
  <sui-label as="a" color="teal">Teal</sui-label>
  <sui-label as="a" color="blue">Blue</sui-label>
  <sui-label as="a" color="violet">Violet</sui-label>
  <sui-label as="a" color="purple">Purple</sui-label>
  <sui-label as="a" color="pink">Pink</sui-label>
  <sui-label as="a" color="brown">Brown</sui-label>
  <sui-label as="a" color="grey">Grey</sui-label>
  <sui-label as="a" color="black">Black</sui-label>
</div>`,basicTagCode:`<div>
  <sui-label as="a" basic tag color="primary">Primary</sui-label>
  <sui-label as="a" basic tag color="secondary">Secondary</sui-label>
  <sui-label as="a" basic tag color="red">Red</sui-label>
  <sui-label as="a" basic tag color="orange">Orange</sui-label>
  <sui-label as="a" basic tag color="yellow">Yellow</sui-label>
  <sui-label as="a" basic tag color="olive">Olive</sui-label>
  <sui-label as="a" basic tag color="green">Green</sui-label>
  <sui-label as="a" basic tag color="teal">Teal</sui-label>
  <sui-label as="a" basic tag color="blue">Blue</sui-label>
  <sui-label as="a" basic tag color="violet">Violet</sui-label>
  <sui-label as="a" basic tag color="purple">Purple</sui-label>
  <sui-label as="a" basic tag color="pink">Pink</sui-label>
  <sui-label as="a" basic tag color="brown">Brown</sui-label>
  <sui-label as="a" basic tag color="grey">Grey</sui-label>
  <sui-label as="a" basic tag color="black">Black</sui-label>
</div>`,sizeCode:`<div>
  <sui-label size="mini">Mini</sui-label>
  <sui-label size="tiny">Tiny</sui-label>
  <sui-label size="small">Small</sui-label>
  <sui-label>Medium</sui-label>
  <sui-label size="large">Large</sui-label>
  <sui-label size="big">Big</sui-label>
  <sui-label size="huge">Huge</sui-label>
  <sui-label size="massive">Massive</sui-label>
</div>`,groupSizeCode:`<sui-label-group size="huge">
  <sui-label>Fun</sui-label>
  <sui-label>Happy</sui-label>
  <sui-label>Smart</sui-label>
  <sui-label>Witty</sui-label>
</sui-label-group>`,coloredGroupCode:`<sui-label-group color="blue">
  <sui-label as="a">
    Fun <sui-icon name="close" />
  </sui-label>
  <sui-label as="a">
    Happy
    <sui-label-detail>22</sui-label-detail>
  </sui-label>
  <sui-label as="a">Smart</sui-label>
  <sui-label as="a">Insane</sui-label>
  <sui-label as="a">Exciting</sui-label>
</sui-label-group>`,basicGroupCode:`<sui-label-group basic>
  <sui-label as="a">
    Fun <sui-icon name="close" />
  </sui-label>
  <sui-label as="a">
    Happy
    <sui-label-detail>22</sui-label-detail>
  </sui-label>
  <sui-label as="a">Smart</sui-label>
  <sui-label as="a">Insane</sui-label>
  <sui-label as="a">Exciting</sui-label>
</sui-label-group>`,tagGroupCode:`<sui-label-group tag>
  <sui-label as="a">$10.00</sui-label>
  <sui-label as="a">$19.99</sui-label>
  <sui-label as="a">$24.99</sui-label>
  <sui-label as="a">$30.99</sui-label>
  <sui-label as="a">$10.25</sui-label>
</sui-label-group>`,circularGroupCode:`<sui-label-group circular>
  <sui-label>11</sui-label>
  <sui-label>22</sui-label>
  <sui-label>33</sui-label>
  <sui-label>44</sui-label>
  <sui-label>141</sui-label>
</sui-label-group>`}}}),wb={class:"intro"},Ab=C("img",{src:$n},null,-1),Sb=C("img",{src:Tt},null,-1),kb=C("img",{src:_l},null,-1),$b=C("input",{type:"text",placeholder:"First name"},null,-1),Tb=C("input",{type:"text",placeholder:"Last name"},null,-1),Eb=C("input",{type:"text",placeholder:"Username"},null,-1),xb=C("input",{type:"password",placeholder:"Password"},null,-1),Bb=C("span",null,"Account Details",-1),Rb=C("span",null,"User Reviews",-1),zb=C("img",{src:_l},null,-1),Pb=C("img",{src:Tt},null,-1);function Mb(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-label"),y=_("doc-example"),A=_("sui-form-field"),$=_("sui-form"),b=_("sui-image"),w=_("sui-grid-column"),k=_("sui-grid"),T=_("sui-grid-row"),x=_("sui-list-item"),P=_("sui-list"),M=_("sui-label-detail"),z=_("sui-label-group");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",wb,[e(p,{as:"h1"},{default:i(()=>[a("Label "),e(f,null,{default:i(()=>[a(" A label displays content classification ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Label",description:"A label",code:t.labelCode},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can be formatted to emphasize an image",code:t.imageCode},{default:i(()=>[C("div",null,[e(d,{as:"a",image:""},{default:i(()=>[Ab,a(" Joe ")]),_:1}),e(d,{as:"a",image:""},{default:i(()=>[Sb,a(" Elliot ")]),_:1}),e(d,{as:"a",image:""},{default:i(()=>[kb,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Pointing",description:"A label can point to content next to it",code:t.pointingCode},{default:i(()=>[e($,{fluid:""},{default:i(()=>[e(A,null,{default:i(()=>[$b,e(d,{pointing:""},{default:i(()=>[a("Please enter a value")]),_:1})]),_:1}),e(o),e(A,null,{default:i(()=>[e(d,{pointing:"below"},{default:i(()=>[a("Please enter a value")]),_:1}),Tb]),_:1}),e(o),e(A,{inline:""},{default:i(()=>[Eb,e(d,{pointing:"left"},{default:i(()=>[a("That name is taken!")]),_:1})]),_:1}),e(o),e(A,{inline:""},{default:i(()=>[e(d,{pointing:"right"},{default:i(()=>[a("Your password must be 6 characters or more")]),_:1}),xb]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Corner",description:"A label can position itself in the corner of an element",code:t.cornerCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(b,{fluid:"",src:G,label:{corner:"left",icon:"heart"}})]),_:1}),e(w,null,{default:i(()=>[e(b,{fluid:"",src:G,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag",description:"A label can appear as a tag",code:t.tagCode},{default:i(()=>[C("div",null,[e(d,{tag:""},{default:i(()=>[a("New")]),_:1}),e(d,{tag:"",color:"red"},{default:i(()=>[a("Upcoming")]),_:1}),e(d,{tag:"",color:"teal"},{default:i(()=>[a("Featured")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:t.ribbonCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(d,{as:"a",ribbon:"",color:"red"},{default:i(()=>[a("Overview")]),_:1}),Bb,e(b,{src:ge}),e(d,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[a("Community")]),_:1}),Rb,e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(d,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[a("Specs")]),_:1}),e(b,{src:ge}),e(d,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[a("Reviews")]),_:1}),e(b,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Attached",description:"A label can attach to a content segment",code:t.attachedCode},{default:i(()=>[e(k,{columns:3},{default:i(()=>[e(T,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"top"},{default:i(()=>[a("HTML")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"bottom"},{default:i(()=>[a("CSS")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"top right"},{default:i(()=>[a("Code")]),_:1}),e(b,{src:ge})]),_:1})]),_:1})]),_:1}),e(T,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"top left"},{default:i(()=>[a("View")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"bottom left"},{default:i(()=>[a("User View")]),_:1}),e(b,{src:ge})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(d,{attached:"bottom right"},{default:i(()=>[a("Admin View")]),_:1}),e(b,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:t.horizontalCode},{default:i(()=>[e(P,{divided:"",selection:""},{default:i(()=>[e(x,null,{default:i(()=>[e(d,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Kumquats ")]),_:1}),e(x,null,{default:i(()=>[e(d,{color:"purple",horizontal:""},{default:i(()=>[a("Candy")]),_:1}),a(" Ice Cream ")]),_:1}),e(x,null,{default:i(()=>[e(d,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Orange ")]),_:1}),e(x,null,{default:i(()=>[e(d,{horizontal:""},{default:i(()=>[a("Dog")]),_:1}),a(" Poodle ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Floating",description:"A label can float above or below another element",code:t.floatingCode},{default:i(()=>[e(c,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{name:"mail"}),a(" Messages "),e(d,{floating:"",color:"red"},{default:i(()=>[a("22")]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(u,{name:"users"}),a(" Friends "),e(d,{floating:"",color:"teal"},{default:i(()=>[a("22")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Detail",description:"A label can contain a detail",code:t.detailCode},{default:i(()=>[e(d,null,{default:i(()=>[a(" Dogs "),e(M,null,{default:i(()=>[a("214")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon",description:"A label can include an icon",code:t.iconCode},{default:i(()=>[C("div",null,[e(d,{as:"a"},{default:i(()=>[e(u,{name:"mail"}),a(" Mail ")]),_:1}),e(d,{as:"a"},{default:i(()=>[a(" Tag "),e(u,{name:"delete"})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can include an image",code:t.imageIncludeCode},{default:i(()=>[C("div",null,[e(d,{as:"a"},{default:i(()=>[e(b,{avatar:"",spaced:"right",src:Tt}),a(" Elliot ")]),_:1}),e(d,{as:"a"},{default:i(()=>[zb,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Link",description:"A label can be a link or contain an item that links",code:t.linkCode},{default:i(()=>[e(d,{as:"a",link:""},{default:i(()=>[e(u,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Circular",description:"A label can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(d,{as:"a",circular:"",color:"red"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"orange"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"yellow"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"olive"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"green"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"teal"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"blue"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"violet"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"purple"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"pink"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"brown"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"grey"},{default:i(()=>[a("2")]),_:1}),e(d,{as:"a",circular:"",color:"black"},{default:i(()=>[a("2")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A label can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(d,{basic:"",as:"a"},{default:i(()=>[a("Basic")]),_:1}),e(d,{basic:"",as:"a",pointing:""},{default:i(()=>[a("Pointing")]),_:1}),e(d,{basic:"",as:"a",image:""},{default:i(()=>[Pb,a(" Elliot ")]),_:1}),e(d,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[a("Red Pointing")]),_:1}),e(d,{basic:"",as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored",description:"A label can have different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(d,{as:"a",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(d,{as:"a",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(d,{as:"a",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{as:"a",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{as:"a",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{as:"a",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{as:"a",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{as:"a",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{as:"a",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{as:"a",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{as:"a",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{as:"a",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{as:"a",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{as:"a",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic Tag",description:"",code:t.basicTagCode},{default:i(()=>[C("div",null,[e(d,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(d,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Size",description:"A label can be small or large",code:t.sizeCode},{default:i(()=>[C("div",null,[e(d,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),e(d,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),e(d,{size:"small"},{default:i(()=>[a("Small")]),_:1}),e(d,null,{default:i(()=>[a("Medium")]),_:1}),e(d,{size:"large"},{default:i(()=>[a("Large")]),_:1}),e(d,{size:"big"},{default:i(()=>[a("Big")]),_:1}),e(d,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),e(d,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Group Size",description:"Labels can share sizes together",code:t.groupSizeCode},{default:i(()=>[e(z,{size:"huge"},{default:i(()=>[e(d,null,{default:i(()=>[a("Fun")]),_:1}),e(d,null,{default:i(()=>[a("Happy")]),_:1}),e(d,null,{default:i(()=>[a("Smart")]),_:1}),e(d,null,{default:i(()=>[a("Witty")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored Group",description:"Labels can share colors together",code:t.coloredGroupCode},{default:i(()=>[e(z,{color:"blue"},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a(" Fun "),e(u,{name:"close"})]),_:1}),e(d,{as:"a"},{default:i(()=>[a(" Happy "),e(M,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic Group",description:"Labels can share their style together",code:t.basicGroupCode},{default:i(()=>[e(z,{basic:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a(" Fun "),e(u,{name:"close"})]),_:1}),e(d,{as:"a"},{default:i(()=>[a(" Happy "),e(M,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag Group",description:"Labels can share tag formatting",code:t.tagGroupCode},{default:i(()=>[e(z,{tag:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("$10.00")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$19.99")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$24.99")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$30.99")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("$10.25")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"CircularGroup",description:"Labels can share shapes",code:t.circularGroupCode},{default:i(()=>[e(z,{circular:""},{default:i(()=>[e(d,null,{default:i(()=>[a("11")]),_:1}),e(d,null,{default:i(()=>[a("22")]),_:1}),e(d,null,{default:i(()=>[a("33")]),_:1}),e(d,null,{default:i(()=>[a("44")]),_:1}),e(d,null,{default:i(()=>[a("141")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Nb=pe(Cb,[["render",Mb]]),Db="/vue-fomantic-ui/images/avatar/small/rachel.png",Fb="/vue-fomantic-ui/images/avatar/small/lindsay.png",Vb="/vue-fomantic-ui/images/avatar/small/matthew.png",Ra="/vue-fomantic-ui/images/avatar/small/jenny.jpg",Ib="/vue-fomantic-ui/images/avatar/small/veronika.jpg",Lb="/vue-fomantic-ui/images/avatar/small/tom.jpg",Ol="/vue-fomantic-ui/images/avatar/small/christian.jpg",za="/vue-fomantic-ui/images/avatar/small/matt.jpg",Qi="/vue-fomantic-ui/images/avatar/small/helen.jpg",ii="/vue-fomantic-ui/images/avatar/small/daniel.jpg",Ob=B({name:"ListDoc",components:{DocExample:ve},setup(){return{listCode:`<sui-list>
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
</div>`}}}),Hb={class:"intro"},jb=C("div",null,"Benefits",-1),qb={class:"list"},Ub=C("a",null,"Languages",-1),Jb=C("a",null,[C("b",null,"Arrested Development")],-1),Gb=C("a",null,[C("b",null,"Bob's Burgers")],-1),Yb=C("a",null,[C("b",null,"The Godfather Part 2")],-1),Wb=C("a",null,[C("b",null,"Twin Peaks")],-1),Kb=C("a",null,[C("b",null,"Arrested Development")],-1),Qb=C("a",null,[C("b",null,"Bob's Burgers")],-1),Xb=C("a",null,[C("b",null,"The Godfather Part 2")],-1);function Zb(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-list-item"),y=_("sui-list"),A=_("doc-example"),$=_("sui-list-list"),b=_("sui-list-header"),w=_("sui-list-description"),k=_("sui-list-content"),T=_("sui-image");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Hb,[e(p,{as:"h1"},{default:i(()=>[a("List "),e(f,null,{default:i(()=>[a(" A list is used to group related content ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"List",description:"A list groups related content",code:t.listCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Apples")]),_:1}),e(d,null,{default:i(()=>[a("Pears")]),_:1}),e(d,null,{default:i(()=>[a("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Bulleted",description:"A list can mark items with a bullet",code:t.bulletedCode},{default:i(()=>[e(y,{bulleted:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Gaining Access")]),_:1}),e(d,null,{default:i(()=>[a("Inviting Friends")]),_:1}),e(d,null,{default:i(()=>[jb,C("div",qb,[e(d,{as:"a"},{default:i(()=>[a("Link to somewhere")]),_:1}),e(d,null,{default:i(()=>[a("Rebates")]),_:1}),e(d,null,{default:i(()=>[a("Discounts")]),_:1})])]),_:1}),e(d,null,{default:i(()=>[a("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Ordered",description:"A list can be ordered numerically",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("Getting Started")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Introduction")]),_:1}),e(d,null,{default:i(()=>[Ub,e($,null,{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("HTML")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Javascript")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("CSS")]),_:1})]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Review")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Link",description:"A list can be specially formatted for navigation links",code:t.linkCode},{default:i(()=>[e(y,{link:""},{default:i(()=>[e(d,{active:""},{default:i(()=>[a("Home")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("About")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Jobs")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Team")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"Item",description:"A list item can contain a set of items",code:t.itemCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[a("1")]),_:1}),e(d,null,{default:i(()=>[a("2")]),_:1}),e(d,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Icon",description:"A list item can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{as:"a"},{default:i(()=>[e(u,{name:"help"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Floated Icon")]),_:1}),e(w,null,{default:i(()=>[a(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),e(d,{as:"a"},{default:i(()=>[e(u,{name:"right triangle"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Icon Alignment")]),_:1}),e(w,null,{default:i(()=>[a(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"help"}),a(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Image",description:"A list can contain an image",code:t.imageContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Db}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Rachel")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Jb,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Fb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Lindsay")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Gb,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Vb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matthew")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Yb,a(" yesterday. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Ra}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Wb,a(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Ib}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(w,null,{default:i(()=>[a(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Link",description:"A list can contain links",code:t.linkContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("What is a FAQ?")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Who is our user?")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"header",description:"A list item can contain a header",code:t.headerContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("New York City")]),_:1}),a(" A lovely city ")]),_:1}),e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Chicago")]),_:1}),a(" Also quite a lovely city ")]),_:1}),e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Los Angeles")]),_:1}),a(" Sometimes can be a lovely city ")]),_:1}),e(d,null,{default:i(()=>[e(b,null,{default:i(()=>[a("San Francisco")]),_:1}),a(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Description",description:"A list item can contain a description",code:t.descriptionContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Krolewskie Jadlo")]),_:1}),e(w,null,{default:i(()=>[a(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Xian Famous Foods")]),_:1}),e(w,null,{default:i(()=>[a(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Sapporo Haru")]),_:1}),e(w,null,{default:i(()=>[a(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(u,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Enid's")]),_:1}),e(w,null,{default:i(()=>[a(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:t.horizontalVarCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Lb}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Tom")]),_:1}),a(" Top Contributor ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Ol}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian Rocha")]),_:1}),a(" Admin ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:za}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matt")]),_:1}),a(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:t.invertedVarCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",relaxed:"",divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Selection",description:"A selection list formats list items as possible choices",code:t.selectionVarCode},{default:i(()=>[e(y,{selection:"",verticalAlign:"middle"},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Qi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Ol}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:t.animatedVarCode},{default:i(()=>[e(y,{animated:"",verticalAlign:"middle"},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Qi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Ol}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:t.relaxedVarCode},{default:i(()=>[e(y,{relaxed:""},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Kb,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:_l}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Qb,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Tt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),Xb,a(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Divided",description:"A list can show divisions between content",code:t.dividedVarCode},{default:i(()=>[e(y,{divided:"",verticalAlign:"middle"},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:_l}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Tt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Celled",description:"A list can divide its items into cells",code:t.celledVarCode},{default:i(()=>[e(y,{celled:""},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Qi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Size",description:"A list can vary in size",code:t.sizeCode},{default:i(()=>[e(y,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:Qi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:Ol}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ii}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content Variations")]),_:1}),e(A,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:t.verticalAlignedCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(d,null,{default:i(()=>[e(T,{avatar:"",src:ct}),e(k,{verticalAlign:"top"},{default:i(()=>[a(" Top Aligned ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ct}),e(k,{verticalAlign:"middle"},{default:i(()=>[a(" Middle ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(T,{avatar:"",src:ct}),e(k,{verticalAlign:"bottom"},{default:i(()=>[a(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:t.floatedCode},{default:i(()=>[C("div",null,[e(y,{floated:"right",horizontal:""},{default:i(()=>[e(d,{disabled:""},{default:i(()=>[a("© GitHub, Inc.")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Terms")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Privacy")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Contact")]),_:1})]),_:1}),e(y,{horizontal:""},{default:i(()=>[e(d,{as:"a"},{default:i(()=>[a("About Us")]),_:1}),e(d,{as:"a"},{default:i(()=>[a("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const ev=pe(Ob,[["render",Zb]]),tv=B({name:"LoaderDoc",components:{DocExample:ve},setup(){return{loaderCode:`<sui-segment>
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
</sui-segment>`}}}),iv={class:"intro"};function lv(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-loader"),y=_("sui-dimmer"),A=_("sui-image"),$=_("doc-example");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",iv,[e(p,{as:"h1"},{default:i(()=>[a("Loader "),e(f,null,{default:i(()=>[a(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e($,{title:"Loader",description:"A loader",code:t.loaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d)]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Text Loader",description:"A loader can contain text",code:t.textLoaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e($,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:t.indeterminateCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d,{indeterminate:""},{default:i(()=>[a("Preparing Files")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Active",description:"A loader can be active or visible",code:t.activeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{active:""}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Diasbled",description:"A loader can be disabled or hidden",code:t.disabledCode},{default:i(()=>[e(v,null,{default:i(()=>[e(d,{disabled:""}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e($,{title:"Inline",description:"Loaders can appear inline with content",code:t.inlineCode},{default:i(()=>[e(d,{inline:"",active:""})]),_:1},8,["code"]),e($,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:t.inlineCenterCode},{default:i(()=>[e(d,{inline:"centered",active:""})]),_:1},8,["code"]),e($,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:t.speedCode},{default:i(()=>[C("div",null,[e(d,{slow:"",active:"",inline:""}),e(d,{active:"",inline:""}),e(d,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),e($,{title:"Colors",description:"Loaders can be different colors",code:t.colorsCode},{default:i(()=>[C("div",null,[e(d,{color:"primary",inline:"",active:""}),e(d,{color:"secondary",inline:"",active:""}),e(d,{color:"red",inline:"",active:""}),e(d,{color:"orange",inline:"",active:""}),e(d,{color:"yellow",inline:"",active:""}),e(d,{color:"olive",inline:"",active:""}),e(d,{color:"green",inline:"",active:""}),e(d,{color:"teal",inline:"",active:""}),e(d,{color:"blue",inline:"",active:""}),e(d,{color:"violet",inline:"",active:""}),e(d,{color:"purple",inline:"",active:""}),e(d,{color:"pink",inline:"",active:""}),e(d,{color:"brown",inline:"",active:""}),e(d,{color:"grey",inline:"",active:""}),e(d,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),e($,{title:"Size",description:"Loaders can have different sizes",code:t.sizeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(d,{size:"mini"},{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"]),e($,{title:"Inverted",description:"Loaders can have their colors inverted",code:t.invertedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:"",inverted:""},{default:i(()=>[e(d,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(A,{src:Ce})]),_:1})]),_:1},8,["code"])]),_:1})])}const av=pe(tv,[["render",lv]]),nv=B({name:"RailDoc",components:{DocExample:ve},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),sv={class:"intro"};function ov(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("sui-rail"),A=_("sui-grid-column"),$=_("sui-grid"),b=_("doc-example");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",sv,[e(p,{as:"h1"},{default:i(()=>[a("Rail "),e(f,null,{default:i(()=>[a(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:t.railCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:t.internalCode},{default:i(()=>[e(v,{textAlign:"center"},{default:i(()=>[e(d,{src:Ce}),e(y,{internal:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a("Left Rail Content")]),_:1})]),_:1}),e(y,{internal:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Dividing",description:"A rail can create a division between itself and a container",code:t.dividingCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{dividing:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{dividing:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Attached",description:"A rail can appear attached to the main viewport",code:t.attachedCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{attached:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{attached:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Close",description:"A rail can appear closer to the main viewport",code:t.closeCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{close:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{close:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Size",description:"A rail can have different sizes",code:t.sizeCode},{default:i(()=>[e($,{centered:"",columns:3},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[e(d,{src:Ce}),e(y,{size:"small",position:"left"},{default:i(()=>[a(" Left Small Rail ")]),_:1}),e(y,{size:"large",position:"right"},{default:i(()=>[a(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const uv=pe(nv,[["render",ov]]),rv="/vue-fomantic-ui/images/avatar/large/ade.jpg",xo="/vue-fomantic-ui/images/avatar/large/chris.jpg",Tn="/vue-fomantic-ui/images/avatar/large/stevie.jpg",Bo="/vue-fomantic-ui/images/avatar/large/nan.jpg",dv=B({name:"RevealDoc",components:{DocExample:ve},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),cv={class:"intro"};function mv(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-image"),y=_("sui-reveal-content"),A=_("sui-reveal"),$=_("doc-example");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",cv,[e(p,{as:"h1"},{default:i(()=>[a("Reveal "),e(f,null,{default:i(()=>[a(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e($,{title:"Fade",description:"An element can disappear to reveal content below",code:t.fadeCode},{default:i(()=>[e(A,{animated:"fade"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ct})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:rv})]),_:1})]),_:1})]),_:1},8,["code"]),e($,{title:"Move",description:"An element can move in a direction to reveal content",code:t.moveCode},{default:i(()=>[e(A,{animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ct})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:xo})]),_:1})]),_:1})]),_:1},8,["code"]),e($,{title:"Rotate",description:"An element can rotate to reveal content below",code:t.rotateCode},{default:i(()=>[e(A,{animated:"rotate"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{circular:"",size:"small",src:ct})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{circular:"",size:"small",src:Tn})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e($,{title:"Active",description:"An active reveal displays its hidden content",code:t.activeCode},{default:i(()=>[e(A,{active:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ct})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:Bo})]),_:1})]),_:1})]),_:1},8,["code"]),e($,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:t.disabledCode},{default:i(()=>[e(A,{disabled:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ct})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:Bo})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e($,{title:"Instant",description:"An element can show its content without delay",code:t.instantCode},{default:i(()=>[e(A,{instant:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(d,{size:"small",src:ct})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(d,{size:"small",src:xo})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const pv=pe(dv,[["render",mv]]),fv=B({name:"SegmentDoc",components:{DocExample:ve},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),gv={class:"intro"},hv=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),_v=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),bv=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),vv=C("p",null,"Top",-1),yv=C("p",null,"Middle",-1),Cv=C("p",null,"Middle",-1),wv=C("p",null,"Middle",-1),Av=C("p",null,"Bottom",-1),Sv=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),kv=C("p",null,"This segment is on top",-1),$v=C("p",null,"This segment is attached on both sides",-1),Tv=C("p",null,"This segment is on bottom",-1),Ev=C("p",null,"Fitted Segment",-1),xv=C("p",null,"Horizontally fitted segment",-1),Bv=C("p",null,"Vertically fitted segment",-1),Rv=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),zv=C("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),Pv=C("p",null,"If you notice me you must be looking very hard.",-1),Mv=C("p",null,"This segment will appear to the right",-1),Nv=C("p",null,"This segment will appear to the left",-1),Dv=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function Fv(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("doc-example"),y=_("sui-button"),A=_("sui-segment-group");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",gv,[e(p,{as:"h1"},{default:i(()=>[a("Segment "),e(f,null,{default:i(()=>[a(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Segment",description:"A segment of content",code:t.segmentCode},{default:i(()=>[e(v,null,{default:i(()=>[a("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),e(d,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:t.placeholderCode},{default:i(()=>[e(v,{placeholder:""},{default:i(()=>[e(p,{icon:""},{default:i(()=>[e(u,{name:"file outline"}),a(" No documents are listed for this customer. ")]),_:1}),e(y,{color:"primary"},{default:i(()=>[a("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Raised",description:"A segment may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(v,{raised:""},{default:i(()=>[hv]),_:1})]),_:1},8,["code"]),e(d,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:t.stackedCode},{default:i(()=>[e(v,{stacked:""},{default:i(()=>[_v]),_:1})]),_:1},8,["code"]),e(d,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:t.piledCode},{default:i(()=>[e(v,{piled:""},{default:i(()=>[bv]),_:1})]),_:1},8,["code"]),e(d,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:t.verticalCode},{default:i(()=>[C("div",null,[e(v,{vertical:""},{default:i(()=>[a(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(d,{title:"Segments",description:"A group of segments can be formatted to appear together",code:t.segmentsCode},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[vv]),_:1}),e(v,null,{default:i(()=>[yv]),_:1}),e(v,null,{default:i(()=>[Cv]),_:1}),e(v,null,{default:i(()=>[wv]),_:1}),e(v,null,{default:i(()=>[Av]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:t.nestedCode},{default:i(()=>[e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(A,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Nested Top")]),_:1}),e(v,null,{default:i(()=>[a("Nested Middle")]),_:1}),e(v,null,{default:i(()=>[a("Nested Bottom")]),_:1})]),_:1}),e(A,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:t.horizontalCode},{default:i(()=>[e(A,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Left")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Right")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Raised Segments",description:"A group of segments can be raised",code:t.raisedSegmentsCode},{default:i(()=>[e(A,{raised:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Stacked Segments",description:"A group of segments can be stacked",code:t.stackedSegmentsCode},{default:i(()=>[e(A,{stacked:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Piled Segments",description:"A group of segments can be piled",code:t.piledSegmentsCode},{default:i(()=>[e(A,{piled:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Disabled",description:"A segment may show its content is disabled",code:t.disabledCode},{default:i(()=>[e(v,{disabled:""},{default:i(()=>[a("Disabled content")]),_:1})]),_:1},8,["code"]),e(d,{title:"Loading",description:"A segment may show its content is being loaded",code:t.loadingCode},{default:i(()=>[e(v,{loading:""},{default:i(()=>[a("Now Loading...")]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[Sv]),_:1})]),_:1},8,["code"]),e(d,{title:"Attached",description:"A segment can be attached to other content on a page",code:t.attachedCode},{default:i(()=>[C("div",null,[e(v,{attached:"top"},{default:i(()=>[kv]),_:1}),e(v,{attached:""},{default:i(()=>[$v]),_:1}),e(v,{attached:"bottom"},{default:i(()=>[Tv]),_:1})])]),_:1},8,["code"]),e(d,{title:"Padded",description:"A segment can increase its padding",code:t.paddedCode},{default:i(()=>[e(v,{padded:""},{default:i(()=>[a("Padded content")]),_:1})]),_:1},8,["code"]),e(d,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[C("div",null,[e(v,{fitted:""},{default:i(()=>[Ev]),_:1}),e(v,{fitted:"horizontally"},{default:i(()=>[xv]),_:1}),e(v,{fitted:"vertically"},{default:i(()=>[Bv]),_:1})])]),_:1},8,["code"]),e(d,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:t.compactCode},{default:i(()=>[e(v,{compact:""},{default:i(()=>[a("Compact content")]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored",description:"A segment can be colored",code:t.coloredCode},{default:i(()=>[C("div",null,[e(v,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(v,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(v,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(v,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(v,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(v,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(v,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(v,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(v,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(v,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(v,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(v,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(v,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:t.emphasisCode},{default:i(()=>[C("div",null,[e(v,null,{default:i(()=>[Rv]),_:1}),e(v,{secondary:""},{default:i(()=>[zv]),_:1}),e(v,{tertiary:""},{default:i(()=>[Pv]),_:1})])]),_:1},8,["code"]),e(d,{title:"Circular",description:"A segment can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(f,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1}),e(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(f,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Clearing",description:"A segment can clear floated content",code:t.clearingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(y,{floated:"right"},{default:i(()=>[a("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Floated",description:"A segment can appear to the left or right of other content",code:t.floatedCode},{default:i(()=>[C("div",null,[e(v,{floated:"right"},{default:i(()=>[Mv]),_:1}),e(v,{floated:"left"},{default:i(()=>[Nv]),_:1})])]),_:1},8,["code"]),e(d,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[C("div",null,[e(v,{textAlign:"right"},{default:i(()=>[a(" Right ")]),_:1}),e(v,{textAlign:"left"},{default:i(()=>[a(" Left ")]),_:1}),e(v,{textAlign:"center"},{default:i(()=>[a(" Center ")]),_:1})])]),_:1},8,["code"]),e(d,{title:"Basic",description:"A basic segment has no special formatting",code:t.basicCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[Dv]),_:1})]),_:1},8,["code"])]),_:1})])}const Vv=pe(fv,[["render",Fv]]),Iv=B({name:"StepDoc",components:{DocExample:ve},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),Lv={class:"intro"},Ov=C("p",null,"The steps take up the entire column width",-1),Hv=C("p",null,"Main content",-1);function jv(t,l,n,s,r,m){const f=_("sui-header-subheader"),p=_("sui-header"),o=_("sui-divider"),u=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),d=_("sui-step"),y=_("sui-step-group"),A=_("doc-example"),$=_("sui-step-title"),b=_("sui-step-description"),w=_("sui-step-content"),k=_("sui-grid-column"),T=_("sui-grid");return K(),oe("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Lv,[e(p,{as:"h1"},{default:i(()=>[a("Step "),e(f,null,{default:i(()=>[a(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(u,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Step",description:"A single step",code:t.stepCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[a("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(A,{title:"Steps",description:"A set of steps",code:t.stepsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Vertical",description:"A step can be displayed stacked vertically",code:t.verticalCode},{default:i(()=>[e(y,{vertical:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"Description",description:"A step can contain a description",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Icon",description:"A step can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Link",description:"A step can link",code:t.linkCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{link:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(A,{title:"Active",description:"A step can be highlighted as active",code:t.activeCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Completed",description:"A step can show that a user has completed it",code:t.completedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Disabled",description:"A step can show that it cannot be selected",code:t.disabledCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,{disabled:""},{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:t.stackableCode},{default:i(()=>[e(y,{stackable:"tablet"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"plane"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:t.unstackableCode},{default:i(()=>[e(y,{unstackable:""},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"plane"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info circle"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Fluid",description:"A fluid step takes up the width of its container",code:t.fluidCode},{default:i(()=>[e(T,{columns:2},{default:i(()=>[e(k,null,{default:i(()=>[e(y,{fluid:"",vertical:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"dollar"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:i(()=>[Ov]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Attached",description:"Steps can be attached to other elements",code:t.attachedCode},{default:i(()=>[C("div",null,[e(y,{attached:"top"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[Hv]),_:1}),e(y,{attached:"bottom"},{default:i(()=>[e(d,null,{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(A,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:t.evenlyDividedCode},{default:i(()=>[e(y,{widths:2},{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Size",description:"Steps can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"mini"},{default:i(()=>[e(d,{active:""},{default:i(()=>[e(u,{name:"payment"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(d,{disabled:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"A step's color can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",vertical:""},{default:i(()=>[e(d,{completed:""},{default:i(()=>[e(u,{name:"truck"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(d,{completed:""},{default:i(()=>[e(u,{name:"credit card"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(d,{active:""},{default:i(()=>[e(u,{name:"info"}),e(w,null,{default:i(()=>[e($,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const qv=pe(Iv,[["render",jv]]),Uv=B({name:"BreadcrumbDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function Jv(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-breadcrumb-section"),u=_("sui-breadcrumb-divider"),g=_("sui-breadcrumb"),c=_("doc-example"),h=_("sui-segment"),v=_("sui-container");return K(),oe("div",null,[e(f,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),e(v,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Breadcrumb",description:"A standard breadcrumb",code:t.breadcrumbCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{link:""},{default:i(()=>[a("Store")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{description:"You can do the same using shorthands",code:t.breadcrumbCode2},{default:i(()=>[e(g,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(c,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:t.dividerCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right arrow"}),e(o,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:t.sectionCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Link",description:"A section may be linkable or contain a link",code:t.linkCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(c,{title:"Active",description:"A section can be active",code:t.activeCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Product")]),_:1}),e(u,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Inverted",description:"A breadcrumb can be inverted",code:t.invertedCode},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right chevron"}),e(o,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Size",description:"A breadcrumb can vary in size",code:t.sizeCode},{default:i(()=>[e(g,{size:"mini"},{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(u,{icon:"right chevron"}),e(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(u,{icon:"right chevron"}),e(o,null,{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Gv=pe(Uv,[["render",Jv]]),Yv=B({name:"FormDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function Wv(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-form-field"),u=_("sui-checkbox"),g=_("sui-button"),c=_("sui-form"),h=_("doc-example"),v=_("sui-form-group"),d=_("sui-container");return K(),oe("div",null,[e(f,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),e(d,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Form",description:"A form",code:t.formCode},{default:i(()=>[e(c,null,{default:i(()=>[e(o,{label:"First Name",placeholder:"First Name"}),e(o,{label:"Last Name",placeholder:"Last Name"}),e(o,null,{default:i(()=>[e(u,{label:"I agree to the Terms and Conditions"})]),_:1}),e(g,null,{default:i(()=>[a("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(h,{title:"Field",description:"A field is a form element containing a label and an input",code:t.fieldCode},{default:i(()=>[e(c,null,{default:i(()=>[e(o,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),e(h,{title:"Fields",description:"A set of fields can appear grouped together",code:t.fieldsCode},{default:i(()=>[e(c,null,{default:i(()=>[e(v,null,{default:i(()=>[e(o,{label:"First name",placeholder:"First Name"}),e(o,{label:"Middle name",placeholder:"Middle Name"}),e(o,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Kv=pe(Yv,[["render",Wv]]),xt="/vue-fomantic-ui/images/wireframe/media-paragraph.png",Ro="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",Qv=B({name:"GridDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),Xv=C("br",null,null,-1);function Zv(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-image"),u=_("sui-grid-column"),g=_("sui-grid"),c=_("doc-example"),h=_("sui-grid-row"),v=_("sui-segment"),d=_("sui-divider"),y=_("sui-menu-item"),A=_("sui-menu"),$=_("sui-container");return K(),oe("div",null,[e(f,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Grid",description:"A basic grid",code:t.gridCode},{default:i(()=>[e(g,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.numbers,b=>(K(),Ve(u,{key:b},{default:i(()=>[e(o,{src:G})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),e(c,{title:"Divided",description:"A grid can have dividers between its columns",code:t.dividedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:xt})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:xt})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:xt})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:xt})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:xt})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:xt})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:t.verticalDividedCode},{default:i(()=>[e(g,{divided:"vertically"},{default:i(()=>[e(h,{columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Celled",description:"A grid can have rows divided into cells",code:t.celledCode},{default:i(()=>[e(g,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(o,{src:G})]),_:1}),e(u,{width:13},{default:i(()=>[e(o,{src:Ro})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(o,{src:G})]),_:1}),e(u,{width:10},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{width:3},{default:i(()=>[e(o,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:t.internallyCelledCode},{default:i(()=>[e(g,{celled:"internally"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(o,{src:G})]),_:1}),e(u,{width:13},{default:i(()=>[e(o,{src:Ro})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{width:3},{default:i(()=>[e(o,{src:G})]),_:1}),e(u,{width:10},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{width:3},{default:i(()=>[e(o,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(c,{title:"Rows",description:"A row is a horizontal grouping of columns",code:t.rowsCode},{default:i(()=>[e(g,{columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:t.columnsCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:8},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{width:8},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{width:8},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{width:8},{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:t.floatedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{floated:"left",width:5},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{floated:"right",width:5},{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:t.columnWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{width:4},{default:i(()=>[e(o,{src:G})]),_:1}),e(u,{width:9},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{width:3},{default:i(()=>[e(o,{src:xt})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Count",description:"A grid can have a different number of columns per row",code:t.columnCountCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1})]),_:1}),e(h,{columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Equal Width",description:"Equal Width",code:t.equalWidthCode},{default:i(()=>[e(g,{columns:"equal"},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(u,{width:8},{default:i(()=>[e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:t.stretchedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,{stretched:""},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1}),e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:t.paddedCode},{default:i(()=>[C("div",null,[e(d),e(g,{padded:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1})])]),_:1},8,["code"]),e(c,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:t.relaxedCode},{default:i(()=>[e(g,{relaxed:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Colored",description:"A row or column can be colored",code:t.coloredCode},{default:i(()=>[e(g,{padded:"",columns:5},{default:i(()=>[e(u,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(u,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(u,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(u,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(u,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(u,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(u,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(u,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(u,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(u,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(u,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(u,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(u,{color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Centered",description:"A grid can have its columns centered",code:t.centeredCode},{default:i(()=>[e(g,{centered:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(h,{centered:"",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:t.textAlignCode},{default:i(()=>[e(g,{textAlign:"center",columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(A,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Cats")]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(A,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Dogs")]),_:1}),e(y,null,{default:i(()=>[a("Poodle")]),_:1}),e(y,null,{default:i(()=>[a("Cockerspaniel")]),_:1})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(A,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:t.verticalAlignCode},{default:i(()=>[e(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G}),Xv,e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Responsive Variations")]),_:1}),e(c,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:t.doublingCode},{default:i(()=>[e(g,{doubling:"",columns:5},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(u,null,{default:i(()=>[e(o,{src:G})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:t.stackableCode},{default:i(()=>[e(g,{stackable:"",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:t.reversedCode},{default:i(()=>[e(g,{reversed:"computer vertically"},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 3")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 2")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:t.deviceVisibilityCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{only:"large screen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1})]),_:1}),e(h,{only:"widescreen",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1})]),_:1}),e(h,{only:"mobile",columns:2},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(u,{only:"computer"},{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,{only:"mobile"},{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet and Mobile")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1})]),_:1}),e(h,{only:"computer",columns:4},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1})]),_:1}),e(h,{only:"tablet",columns:3},{default:i(()=>[e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:t.responsiveWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:ge})]),_:1}),e(u,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const e1=pe(Qv,[["render",Zv]]),t1="/vue-fomantic-ui/images/logo.png",i1=B({name:"MenuDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),l1=C("p",null,"Check out our new promotions",-1),a1=C("p",null,"Check out our collection of coupons",-1),n1=C("p",null,"Visit our rebate forum for information on claiming rebates",-1),s1=C("img",{src:t1},null,-1);function o1(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-menu-item"),u=_("sui-menu"),g=_("doc-example"),c=_("sui-input"),h=_("sui-menu-menu"),v=_("sui-label"),d=_("sui-button"),y=_("sui-dropdown-item"),A=_("sui-dropdown-menu"),$=_("sui-dropdown"),b=_("sui-icon"),w=_("sui-segment"),k=_("sui-container");return K(),oe("div",null,[e(f,{title:"Menu",sub:"A menu displays grouped navigation actions"}),e(k,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Menu",description:"A menu",code:t.menuCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Editorials")]),_:1}),e(o,null,{default:i(()=>[a("Reviews")]),_:1}),e(o,null,{default:i(()=>[a("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:t.secondaryMenuCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(o,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(o,null,{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(o,null,{default:i(()=>[a("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(o,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(o,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:t.tabularCode},{default:i(()=>[e(u,{tabular:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Bio")]),_:1}),e(o,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",description:"A menu can be formatted for text content",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(o,{header:""},{default:i(()=>[a("Sort By")]),_:1}),e(o,{active:""},{default:i(()=>[a("Closest")]),_:1}),e(o,null,{default:i(()=>[a("Most Comments")]),_:1}),e(o,null,{default:i(()=>[a("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:t.verticalMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(o,{active:"",color:"teal"},{default:i(()=>[a(" Inbox "),e(v,{color:"teal",pointing:"left"},{default:i(()=>[a("1")]),_:1})]),_:1}),e(o,null,{default:i(()=>[a(" Spam "),e(v,null,{default:i(()=>[a("51")]),_:1})]),_:1}),e(o,null,{default:i(()=>[a(" Updates "),e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:t.paginationCode},{default:i(()=>[e(u,{pagination:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("1")]),_:1}),e(o,{disabled:""},{default:i(()=>[a("...")]),_:1}),e(o,null,{default:i(()=>[a("10")]),_:1}),e(o,null,{default:i(()=>[a("11")]),_:1}),e(o,null,{default:i(()=>[a("12")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:t.headerCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{header:""},{default:i(()=>[a("Our Company")]),_:1}),e(o,null,{default:i(()=>[a("About us")]),_:1}),e(o,null,{default:i(()=>[a("Jobs")]),_:1}),e(o,null,{default:i(()=>[a("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:t.textContentCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(o,null,{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Promotions")]),_:1}),l1]),_:1}),e(o,null,{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Coupons")]),_:1}),a1]),_:1}),e(o,null,{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Rebates")]),_:1}),n1]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Input",description:"A menu item can contain an input inside of it",code:t.inputCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{as:"div"},{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(o,{position:"right",as:"div"},{default:i(()=>[e(c,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Button",description:"A menu item can contain a button inside of it",code:t.buttonCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{as:"div"},{default:i(()=>[e(d,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1}),e(o,{as:"div"},{default:i(()=>[e(d,null,{default:i(()=>[a("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:t.linkItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(o,{href:"https://google.com"},{default:i(()=>[a("Visit Google")]),_:1}),e(o,{link:"",as:"div"},{default:i(()=>[a("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:t.dropdownItemCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e($,{item:"",text:"Categories"},{default:i(()=>[e(A,null,{default:i(()=>[e(y,{text:"Electoronics"}),e(y,{text:"Automotive"}),e(y,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:t.menuContentCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Browse")]),_:1}),e(o,null,{default:i(()=>[a("Submit")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(o,null,{default:i(()=>[a("Sign up")]),_:1}),e(o,null,{default:i(()=>[a("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:t.subMenuCode},{default:i(()=>[e(u,{vertical:""},{default:i(()=>[e(o,{as:"div"},{default:i(()=>[e(c,{placeholder:"Search..."})]),_:1}),e(o,{as:"div"},{default:i(()=>[a(" Home "),e(h,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Search")]),_:1}),e(o,null,{default:i(()=>[a("Add")]),_:1}),e(o,null,{default:i(()=>[a("Remove")]),_:1})]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"grid layout"}),a(" Browse ")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e($,{item:"",text:"More"},{default:i(()=>[e(A,null,{default:i(()=>[e(y,{icon:"edit",text:"Edit Profile"}),e(y,{icon:"globe",text:"Choose Language"}),e(y,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hover",description:"A menu item can be hovered",code:t.hoverCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(o,null,{default:i(()=>[a("A link")]),_:1}),e(o,{as:"div",link:""},{default:i(()=>[a("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Active",description:"A menu item can be active",code:t.activeCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:t.stackableCode},{default:i(()=>[e(u,{stackable:""},{default:i(()=>[e(o,{as:"div"},{default:i(()=>[s1]),_:1}),e(o,null,{default:i(()=>[a("Features")]),_:1}),e(o,null,{default:i(()=>[a("Testimonials")]),_:1}),e(o,null,{default:i(()=>[a("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:t.invertedCode},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(o,null,{default:i(()=>[a("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"Additional colors can be specified",code:t.coloredCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{active:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(o,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(o,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(o,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(o,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(o,{color:"teal"},{default:i(()=>[a("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icons",description:"A menu may have just icons",code:t.iconsCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(o,null,{default:i(()=>[e(b,{name:"gamepad"})]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video camera"})]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:t.labeledIconCode},{default:i(()=>[e(u,{icon:"labeled"},{default:i(()=>[e(o,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",vertical:""},{default:i(()=>[e(o,null,{default:i(()=>[a("Run")]),_:1}),e(o,null,{default:i(()=>[a("Walk")]),_:1}),e(o,null,{default:i(()=>[a("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[e(o,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:t.evenlyDividedCode},{default:i(()=>[e(u,{fluid:"",widths:3},{default:i(()=>[e(o,null,{default:i(()=>[a("Buy")]),_:1}),e(o,null,{default:i(()=>[a("Sell")]),_:1}),e(o,null,{default:i(()=>[a("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A menu may be attached to other content segments",code:t.attachedCode},{default:i(()=>[C("div",null,[e(u,{attached:"top",tabular:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("tab1")]),_:1}),e(o,null,{default:i(()=>[a("tab2")]),_:1})]),_:1}),e(w,{attached:"bottom"},{default:i(()=>[a(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A menu can vary in size",code:t.sizeCode},{default:i(()=>[e(u,{size:"mini"},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(h,{position:"right"},{default:i(()=>[e($,{item:"",text:"Language"},{default:i(()=>[e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[a("English")]),_:1}),e(y,null,{default:i(()=>[a("Russian")]),_:1}),e(y,null,{default:i(()=>[a("Spanish")]),_:1})]),_:1})]),_:1}),e(o,{as:"div"},{default:i(()=>[e(d,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{fitted:""},{default:i(()=>[a("No padding whatsoever")]),_:1}),e(o,{fitted:"horizontally"},{default:i(()=>[a("No horizontal padding")]),_:1}),e(o,{fitted:"vertically"},{default:i(()=>[a("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:t.borderlessCode},{default:i(()=>[e(u,{borderless:""},{default:i(()=>[e(o,null,{default:i(()=>[a("1")]),_:1}),e(o,null,{default:i(()=>[a("2")]),_:1}),e(o,null,{default:i(()=>[a("3")]),_:1}),e(o,null,{default:i(()=>[a("4")]),_:1}),e(o,null,{default:i(()=>[a("5")]),_:1}),e(o,null,{default:i(()=>[a("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const u1=pe(i1,[["render",o1]]),r1=B({name:"MessageDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),d1=C("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),c1=C("p",null,"Get the best news in your e-mail every day.",-1),m1=C("p",null,"You can't see me",-1),p1=C("p",null,"You can always see me",-1),f1=C("p",null,"Way to go!",-1),g1=C("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),h1=C("a",{href:"#"},"Login here",-1),_1=C("p",null,[a("Go to your "),C("b",null,"special offers"),a(" page to see now.")],-1),b1=C("p",null,"That offer has expired",-1);function v1(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-message-header"),u=_("sui-message"),g=_("doc-example"),c=_("sui-message-item"),h=_("sui-message-list"),v=_("sui-icon"),d=_("sui-message-content"),y=_("sui-form-field"),A=_("sui-form-group"),$=_("sui-button"),b=_("sui-form"),w=_("sui-container");return K(),oe("div",null,[e(f,{title:"Message",sub:"A message displays information that explains nearby content"}),e(w,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Message",description:"A basic message",code:t.messageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Changes in Service")]),_:1}),d1]),_:1})]),_:1},8,["code"]),e(g,{title:"List Message",description:"A message with a list",code:t.listMessageCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("New Site Features")]),_:1}),e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("You can now have cover images on blog pages")]),_:1}),e(c,null,{default:i(()=>[a("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icon Message",description:"A message can contain an icon",code:t.iconMessageCode},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(v,{name:"inbox"}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[a(" Have you heard about our mailing list? ")]),_:1}),c1]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hidden",description:"A message can be hidden",code:t.hiddenCode},{default:i(()=>[e(u,{hidden:""},{default:i(()=>[m1]),_:1})]),_:1},8,["code"]),e(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:t.visibleCode},{default:i(()=>[e(u,{visible:""},{default:i(()=>[p1]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Floating",description:"A message can float above content that it is related to",code:t.floatingCode},{default:i(()=>[e(u,{floating:""},{default:i(()=>[f1]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A message can only take up the width of its content",code:t.compactCode},{default:i(()=>[e(u,{compact:""},{default:i(()=>[g1]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:t.attachedCode},{default:i(()=>[C("div",null,[e(u,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),e(b,{class:"attached fluid segment"},{default:i(()=>[e(A,{widths:"equal"},{default:i(()=>[e(y,{label:"First Name",placeholder:"First Name"}),e(y,{label:"Last Name",placeholder:"Last Name"})]),_:1}),e(y,{label:"Username",placeholder:"Username"}),e(y,{label:"Password",placeholder:"Password"}),e($,{color:"primary"},{default:i(()=>[a("Submit")]),_:1})]),_:1}),e(u,{attached:"bottom",warning:""},{default:i(()=>[e(v,{name:"help"}),a(" Already signed up? "),h1,a(" instead. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:t.warningCode},{default:i(()=>[e(u,{warning:""},{default:i(()=>[e(v,{name:"close"}),e(o,null,{default:i(()=>[a(" You must register before you can do that! ")]),_:1}),a(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),e(g,{title:"Info",description:"A message may be formatted to display information",code:t.infoCode},{default:i(()=>[e(u,{info:""},{default:i(()=>[e(o,null,{default:i(()=>[a("Was this what you wanted?")]),_:1}),e(h,null,{default:i(()=>[a("It's good to see you again.")]),_:1}),e(h,null,{default:i(()=>[a("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:t.positiveSuccessCode},{default:i(()=>[e(u,{positive:""},{default:i(()=>[e(o,null,{default:i(()=>[a("You are eligible for a reward")]),_:1}),_1]),_:1})]),_:1},8,["code"]),e(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:t.negativeErrorCode},{default:i(()=>[e(u,{negative:""},{default:i(()=>[e(v,{name:"close"}),e(o,null,{default:i(()=>[a("We're sorry we can't apply that discount")]),_:1}),b1]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"A message can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(u,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(u,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(u,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(u,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(u,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(u,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(u,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(u,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(u,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(u,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(u,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(u,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A message can have different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(u,{size:"mini"},{default:i(()=>[a("This is a mini message.")]),_:1}),e(u,{size:"large"},{default:i(()=>[a("This is a large message.")]),_:1}),e(u,{size:"massive"},{default:i(()=>[a("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const y1=pe(r1,[["render",v1]]),C1=B({name:"TableDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),w1=C("a",{href:"#"},"Edit",-1),A1=C("a",{href:"#"},"Edit",-1),S1=C("a",{href:"#"},"Edit",-1),k1=C("br",null,null,-1),$1=C("br",null,null,-1),T1=C("br",null,null,-1),E1=C("br",null,null,-1),x1=C("br",null,null,-1),B1=C("br",null,null,-1),R1=C("br",null,null,-1);function z1(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-table-header-cell"),u=_("sui-table-row"),g=_("sui-table-header"),c=_("sui-table-cell"),h=_("sui-table-body"),v=_("sui-table"),d=_("doc-example"),y=_("sui-icon"),A=_("sui-table-footer"),$=_("sui-container");return K(),oe("div",null,[e(f,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(d,{title:"Table",description:"A standard table",code:t.tableCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Age")]),_:1}),e(o,null,{default:i(()=>[a("Job")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("James")]),_:1}),e(c,null,{default:i(()=>[a("24")]),_:1}),e(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("26")]),_:1}),e(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Elyse")]),_:1}),e(c,null,{default:i(()=>[a("24")]),_:1}),e(c,null,{default:i(()=>[a("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:t.definitionCode},{default:i(()=>[e(v,{definition:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o),e(o,null,{default:i(()=>[a("Arguments")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("reset rating")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1}),e(c,null,{default:i(()=>[a("Resets rating to default value")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("set rating")]),_:1}),e(c,null,{default:i(()=>[a("rating (integer)")]),_:1}),e(c,null,{default:i(()=>[a("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Structured",description:"A table can be formatted to display complex structured data",code:t.structuredCode},{default:i(()=>[e(v,{structured:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{rowspan:"2"},{default:i(()=>[a("Name")]),_:1}),e(o,{rowspan:"2"},{default:i(()=>[a("Type")]),_:1}),e(o,{rowspan:"2"},{default:i(()=>[a("Files")]),_:1}),e(o,{colspan:"3"},{default:i(()=>[a("Languages")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Ruby")]),_:1}),e(o,null,{default:i(()=>[a("Javascript")]),_:1}),e(o,null,{default:i(()=>[a("Python")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Alpha Team")]),_:1}),e(c,null,{default:i(()=>[a("Project 1")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("2")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,{rowspan:"3"},{default:i(()=>[a("Beta Team")]),_:1}),e(c,null,{default:i(()=>[a("Project 1")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("52")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Project 2")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("12")]),_:1}),e(c),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c)]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Project 3")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("21")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(d,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:t.positiveNegativeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{negative:""},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{positive:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"checkmark"}),a(" Approved ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{positive:""},{default:i(()=>[e(y,{name:"close"}),a(" Requires call ")]),_:1})]),_:1}),e(u,{negative:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:t.errorCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{error:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Cannot pull data")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{error:""},{default:i(()=>[e(y,{name:"attention"}),a(" Requires call ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Warning",description:"A cell or row may warn a user",code:t.warningCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"attention"}),a(" Requires Action ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{warning:""},{default:i(()=>[e(y,{name:"attention"}),a(" Hostile ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Active",description:"A cell or row can be active or selected by a user",code:t.activeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{active:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Selected")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{active:""},{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Disabled",description:"A cell can be disabled",code:t.disabledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{disabled:""},{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Selected")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{disabled:""},{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:t.coloredCellsCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{color:"orange"},{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{color:"blue"},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{color:"pink"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{color:"green"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:t.markedCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{marked:"right",color:"blue"},{default:i(()=>[a("No Name Specified")]),_:1}),e(c,{marked:"left",color:"red"},{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{marked:"left",color:"green"},{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{marked:"left",color:"orange"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{marked:"right",color:"purple"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(d,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:t.singleLineCode},{default:i(()=>[e(v,{"single-line":""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Registration Date")]),_:1}),e(o,null,{default:i(()=>[a("E-mail address")]),_:1}),e(o,null,{default:i(()=>[a("Premium Plan")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John Lilki")]),_:1}),e(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:t.fixedCode},{default:i(()=>[e(v,{fixed:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:t.stackingCode},{default:i(()=>[e(v,{stackable:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:t.selectableRowCode},{default:i(()=>[e(v,{selectable:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Selectable Cell",description:"A table cell can be selectable",code:t.selectableCellCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(c,{selectable:""},{default:i(()=>[w1]),_:1})]),_:1}),e(u,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{selectable:""},{default:i(()=>[A1]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(c,{selectable:""},{default:i(()=>[S1]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:t.verticalAlignmentCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{verticalAlign:"top"},{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{verticalAlign:"top"},{default:i(()=>[a(" Notes "),k1,a(" 1"),$1,a(" 2"),T1]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{verticalAlign:"bottom"},{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a(" Notes "),E1,a(" 1"),x1,a(" 2"),B1]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:t.textAlignCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,{textAlign:"right"},{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:t.stripedCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Date Joined")]),_:1}),e(o,null,{default:i(()=>[a("E-mail")]),_:1}),e(o,null,{default:i(()=>[a("Called")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John Lilki")]),_:1}),e(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Celled",description:"A table may be divided each row into separate cells",code:t.celledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("3 People")]),_:1}),e(c,null,{default:i(()=>[a("2 Approved")]),_:1}),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:t.basicCode},{default:i(()=>[C("div",null,[e(v,{basic:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1}),R1,e(v,{basic:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:t.collapsingCode},{default:i(()=>[e(v,{collapsing:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Age")]),_:1}),e(o,null,{default:i(()=>[a("Gender")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("27")]),_:1}),e(c,null,{default:i(()=>[a("Male")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("32")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("22")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("3 People")]),_:1}),e(o,null,{default:i(()=>[a("2 Approved")]),_:1}),e(o),e(o),e(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:t.collapsingCellCode},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:t.columnCountCode},{default:i(()=>[e(v,{columns:5},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Age")]),_:1}),e(o,null,{default:i(()=>[a("Gender")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("27")]),_:1}),e(c,null,{default:i(()=>[a("Male")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("32")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("22")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("3 People")]),_:1}),e(o,null,{default:i(()=>[a("2 Approved")]),_:1}),e(o),e(o),e(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Column Width",description:"Column Width",code:t.columnWidthCode},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,{width:10},{default:i(()=>[a("Name")]),_:1}),e(o,{width:6},{default:i(()=>[a("Status")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:t.coloredCode},{default:i(()=>[e(v,{color:"red"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Food")]),_:1}),e(o,null,{default:i(()=>[a("Calories")]),_:1}),e(o,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Apples")]),_:1}),e(c,null,{default:i(()=>[a("200")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Orange")]),_:1}),e(c,null,{default:i(()=>[a("310")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Inverted",description:"A table's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Food")]),_:1}),e(o,null,{default:i(()=>[a("Calories")]),_:1}),e(o,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Apples")]),_:1}),e(c,null,{default:i(()=>[a("200")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Orange")]),_:1}),e(c,null,{default:i(()=>[a("310")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(d,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:t.paddedCode},{default:i(()=>[C("div",null,[e(v,{padded:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{padded:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:t.compactCode},{default:i(()=>[C("div",null,[e(v,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{compact:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(d,{title:"Size",description:"A table can also be small or large",code:t.sizeCode},{default:i(()=>[e(v,{size:"small"},{default:i(()=>[e(g,null,{default:i(()=>[e(u,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(u,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const P1=pe(C1,[["render",z1]]),M1=B({name:"AdvertisementDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),N1=C("img",{src:G},null,-1),D1=C("br",null,null,-1);function F1(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-advertisement"),u=_("doc-example"),g=_("sui-container");return K(),oe("div",null,[e(f,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),e(g,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Ad",description:"A standard ad",code:t.adCode},{default:i(()=>[e(o,{unit:"medium rectangle"},{default:i(()=>[N1]),_:1})]),_:1},8,["code"]),e(u,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:t.commonUnitsCode},{default:i(()=>[C("div",null,[e(o,{unit:"medium rectangle",test:"Medium Rectangle"}),e(o,{unit:"banner",test:"Banner"}),e(o,{unit:"leaderboard",test:"Leaderboard"}),e(o,{unit:"large rectangle",test:"Large Rectangle"}),e(o,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),e(u,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:t.mobileCode},{default:i(()=>[C("div",null,[e(o,{unit:"mobile banner",test:"Mobile Banner"}),e(o,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),e(u,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:t.rectangleCode},{default:i(()=>[e(o,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),e(u,{title:"Button",description:"An ad can use button ad unit size",code:t.buttonCode},{default:i(()=>[C("div",null,[e(o,{unit:"button",test:"Button"}),e(o,{unit:"square button",test:"Square Button"}),e(o,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),e(u,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:t.skyscraperCode},{default:i(()=>[C("div",null,[e(o,{unit:"skyscraper",test:"Skyscraper"}),D1,e(o,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),e(u,{title:"Banner",description:"An ad can use banner ad unit size",code:t.bannerCode},{default:i(()=>[C("div",null,[e(o,{unit:"banner",test:"Banner"}),e(o,{unit:"vertical banner",test:"Vertical Banner"}),e(o,{unit:"top banner",test:"Top Banner"}),e(o,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),e(u,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:t.leaderboardCode},{default:i(()=>[C("div",null,[e(o,{unit:"leaderboard",test:"Leaderboard"}),e(o,{unit:"large leaderboard",test:"Large Leaderboard"}),e(o,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),e(u,{title:"Panorama",description:"An ad can use panorama ad unit size",code:t.panoramaCode},{default:i(()=>[e(o,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),e(u,{title:"Netboard",description:"An ad can use netboard ad unit size",code:t.netboardCode},{default:i(()=>[e(o,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Centered",description:"An advertisement can appear centered",code:t.centeredCode},{default:i(()=>[e(o,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),e(u,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:t.testCode},{default:i(()=>[e(o,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const V1=pe(M1,[["render",F1]]),zo="/vue-fomantic-ui/images/avatar/large/kristy.png",I1="/vue-fomantic-ui/images/avatar/large/daniel.jpg",Ya="/vue-fomantic-ui/images/avatar/large/helen.jpg",Wa="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Ka="/vue-fomantic-ui/images/avatar/large/elyse.png",L1="/vue-fomantic-ui/images/avatar/large/matthew.png",O1="/vue-fomantic-ui/images/avatar/large/molly.png",Po="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Mo="/vue-fomantic-ui/images/avatar/large/veronika.jpg",No="/vue-fomantic-ui/images/avatar/large/steve.jpg",H1=B({name:"CardDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),j1=C("span",{class:"date"},"Joined in 2013",-1),q1=C("a",null,"Elliot Fu",-1),U1=C("a",null,"Jenny Hess",-1),J1=C("a",null,"Stevie Feliciano",-1),G1=C("a",null,"Administrator",-1),Y1=C("a",null,"Helen Troy",-1),W1=C("span",{class:"date"},"Joined in 2013",-1),K1=C("span",null,"2 days ago",-1),Q1=C("a",null,"Animals",-1),X1=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),Z1=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),ey=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),ty=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),iy=C("span",{class:"category"},"Animals",-1),ly=C("span",{class:"category"},"Animals",-1),ay=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:za}),a(" Matt ")],-1),ny=C("span",{class:"category"},"Animals",-1),sy=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:za}),a(" Matt ")],-1),oy=C("p",null,"Jenny is a student studying Media Management at the New School",-1),uy=C("div",{class:"center aligned author"},[C("img",{class:"ui avatar image",src:Ra}),a(" Jenny ")],-1),ry=C("a",null,"Friends",-1),dy=C("span",{class:"right floated"}," Joined in 2013 ",-1),cy=C("a",null,[C("i",{class:"user icon"}),a(" 75 Friends ")],-1),my=C("a",null,"Coworker",-1),py=C("span",{class:"right floated"}," Joined in 2011 ",-1),fy=C("a",null,[C("i",{class:"user icon"}),a(" 35 Friends ")],-1),gy=C("a",null,"Coworker",-1),hy=C("span",{class:"right floated"}," Joined in 2014 ",-1),_y=C("a",null,[C("i",{class:"user icon"}),a(" 151 Friends ")],-1);function by(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-image"),u=_("sui-card-header"),g=_("sui-card-meta"),c=_("sui-card-description"),h=_("sui-card-content"),v=_("sui-icon"),d=_("sui-card"),y=_("doc-example"),A=_("sui-button"),$=_("sui-button-group"),b=_("sui-card-group"),w=_("sui-feed-summary"),k=_("sui-feed-content"),T=_("sui-feed-event"),x=_("sui-feed"),P=_("sui-grid-column"),M=_("sui-grid"),z=_("sui-segment"),F=_("sui-container");return K(),oe("div",null,[e(f,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),e(F,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Card",description:"A single card",code:t.cardCode},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:zo,wrapped:""}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[j1]),_:1}),e(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Cards",description:"A group of cards",code:t.cardsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(o,{src:Tt,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friends of Veronika")]),_:1}),e(c,null,{default:i(()=>[a("Elliot requested permission to view your contact details")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e($,{widths:2},{default:i(()=>[e(A,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(A,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(o,{src:Ra,floated:"right",size:"mini"}),e(u,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("New Member")]),_:1}),e(c,null,{default:i(()=>[a("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e($,{widths:2},{default:i(()=>[e(A,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(A,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Content Block",description:"A card can contain blocks of content",code:t.contentBlockCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Project Timeline")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(p,{sub:""},{default:i(()=>[a("Activity")]),_:1}),e(x,{size:"small"},{default:i(()=>[e(T,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[q1,a(" added "),U1,a(" to the project ")]),_:1})]),_:1})]),_:1}),e(T,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[J1,a(" was added as an "),G1]),_:1})]),_:1})]),_:1}),e(T,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[Y1,a(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(A,{as:"button"},{default:i(()=>[a("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A card can contain an image",code:t.imageCode},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:zo,wrapped:""}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[W1]),_:1}),e(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Header",description:"A card can contain a header",code:t.headerCode},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Metadata",description:"A card can contain content metadata",code:t.metadataCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[K1,Q1]),_:1}),e(c,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Buttons",description:"A card can contain buttons",code:t.buttonsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),e(A,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),e(A,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:t.descriptionCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[X1,Z1]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[ey,ty]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(v,{name:"check"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:t.fluidCardCode},{default:i(()=>[e(M,{columns:3},{default:i(()=>[e(P,null,{default:i(()=>[e(d,{fluid:""},{default:i(()=>[e(o,{src:I1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),e(P,null,{default:i(()=>[e(d,{fluid:""},{default:i(()=>[e(o,{src:Ya}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),e(P,null,{default:i(()=>[e(d,{fluid:""},{default:i(()=>[e(o,{src:Wa}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Centered Card",description:"A card can center itself inside its container",code:t.centeredCardCode},{default:i(()=>[e(d,{centered:""},{default:i(()=>[e(o,{src:Ka}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Cards",description:"A card can display horizontally",code:t.horizontalCardsCode},{default:i(()=>[e(d,{horizontal:""},{default:i(()=>[e(o,{src:Ka}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[iy]),_:1}),e(c,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(d,{raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[ly]),_:1}),e(c,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[ay]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:t.linkCardCode},{default:i(()=>[e(d,{href:"#",raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[ny]),_:1}),e(c,null,{default:i(()=>[e(o,{src:ge})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[sy]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:t.textAlignCode},{default:i(()=>[e(d,null,{default:i(()=>[e(h,null,{default:i(()=>[e(u,{textAlign:"center"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[oy]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[uy]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"Card's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(z,{inverted:""},{default:i(()=>[e(b,{inverted:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:L1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Matt Giampietro")]),_:1}),e(g,null,{default:i(()=>[ry]),_:1}),e(c,null,{default:i(()=>[a(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[dy,cy]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:O1}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Molly")]),_:1}),e(g,null,{default:i(()=>[my]),_:1}),e(c,null,{default:i(()=>[a(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[py,fy]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Ka}),e(h,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elyse")]),_:1}),e(g,null,{default:i(()=>[gy]),_:1}),e(c,null,{default:i(()=>[a(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[hy,_y]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored",description:"A card can specify a color",code:t.coloredCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(d,{color:"primary",href:"#"},{default:i(()=>[e(o,{src:Ki})]),_:1}),e(d,{color:"secondary",href:"#"},{default:i(()=>[e(o,{src:Ki})]),_:1}),e(d,{color:"red",href:"#"},{default:i(()=>[e(o,{src:Ki})]),_:1}),e(d,{color:"orange",href:"#"},{default:i(()=>[e(o,{src:Ki})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:t.columnCountCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:G})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:G})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(b,{itemsPerRow:3,stackable:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:Wa})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Ya})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Po})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Mo})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Tn})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:No})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:t.doublingCode},{default:i(()=>[e(b,{itemsPerRow:6,doubling:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:Wa})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Ya})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Po})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Mo})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:Tn})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:No})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const vy=pe(H1,[["render",by]]),yy=B({name:"CommentDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),Cy=C("span",null,"Today at 5:42PM",-1),wy=C("a",null,"Reply",-1),Ay=C("span",null,"Yesterday at 12:30AM",-1),Sy=C("a",null,"Reply",-1),ky={class:"comments"},$y=C("span",null,"Just now",-1),Ty=C("a",null,"Reply",-1),Ey=C("span",null,"5 days ago",-1),xy=C("a",null,"Reply",-1),By=C("div",{class:"date"},"2 days ago",-1),Ry=C("div",{class:"rating"},[C("i",{class:"star icon"}),a(" 5 Faves ")],-1),zy=C("a",null,"Reply",-1),Py=C("a",null,"Save",-1),My=C("a",null,"Hide",-1),Ny=C("a",null,[C("i",{class:"expand icon"}),a(" Full-screen ")],-1),Dy=C("a",null,"Reply",-1),Fy=C("a",null,"Reply",-1),Vy=C("a",null,"Replay",-1),Iy=C("span",null,"Today at 5:42PM",-1),Ly=C("a",{href:"#"},"Replay",-1),Oy=C("span",null,"Yesterday at 12:30AM",-1),Hy=C("a",{href:"#"},"Replay",-1),jy=C("span",null,"Just now",-1),qy=C("a",{href:"#"},"Replay",-1),Uy=C("span",null,"5 days ago",-1),Jy=C("a",{href:"#"},"Replay",-1),Gy=C("span",null,"Today at 5:42PM",-1),Yy=C("a",{href:"#"},"Replay",-1),Wy=C("span",null,"Yesterday at 12:30AM",-1),Ky=C("a",{href:"#"},"Replay",-1),Qy=C("span",null,"Just now",-1),Xy=C("a",{href:"#"},"Replay",-1),Zy=C("span",null,"5 days ago",-1),eC=C("a",{href:"#"},"Replay",-1),tC=C("span",null,"Today at 5:42PM",-1),iC=C("a",{href:"#"},"Replay",-1),lC=C("span",null,"Yesterday at 12:30AM",-1),aC=C("a",{href:"#"},"Replay",-1),nC=C("span",null,"Just now",-1),sC=C("a",{href:"#"},"Replay",-1),oC=C("span",null,"5 days ago",-1),uC=C("a",{href:"#"},"Replay",-1),rC=C("span",null,"Today at 5:42PM",-1),dC=C("a",{href:"#"},"Replay",-1),cC=C("span",null,"Yesterday at 12:30AM",-1),mC=C("a",{href:"#"},"Replay",-1),pC=C("span",null,"Just now",-1),fC=C("a",{href:"#"},"Replay",-1),gC=C("span",null,"5 days ago",-1),hC=C("a",{href:"#"},"Replay",-1);function _C(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-comment-avatar"),u=_("sui-comment-author"),g=_("sui-comment-metadata"),c=_("sui-comment-text"),h=_("sui-comment-actions"),v=_("sui-comment-content"),d=_("sui-comment"),y=_("sui-comment-group"),A=_("doc-example"),$=_("sui-form-textarea"),b=_("sui-icon"),w=_("sui-button"),k=_("sui-form"),T=_("sui-segment"),x=_("sui-container");return K(),oe("div",null,[e(f,{title:"Comment",sub:"A comment displays user feedback to site content"}),e(x,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Comments",description:"A basic list of comments",code:t.commentsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Cy]),_:1}),e(c,null,{default:i(()=>[a("How artistic!")]),_:1}),e(h,null,{default:i(()=>[wy]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[Ay]),_:1}),e(c,null,{default:i(()=>[a("This has been very useful for my research. Thanks as well!")]),_:1}),e(h,null,{default:i(()=>[Sy]),_:1})]),_:1}),C("div",ky,[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[$y]),_:1}),e(c,null,{default:i(()=>[a("Elliot you are always so right :)")]),_:1}),e(h,null,{default:i(()=>[Ty]),_:1})]),_:1})]),_:1})])]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Ey]),_:1}),e(c,null,{default:i(()=>[a("Dude, this is awesome. Thanks so much")]),_:1}),e(h,null,{default:i(()=>[xy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"avatar",description:"A comment can contain an image or avatar",code:t.avatarCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/stevie.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(g,null,{default:i(()=>[By,Ry]),_:1}),e(c,null,{default:i(()=>[a(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:t.actionsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Tom Lukic")]),_:1}),e(c,null,{default:i(()=>[a(" This will be great for business reports. I will definitely download this. ")]),_:1}),e(h,null,{default:i(()=>[zy,Py,My,Ny]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:t.replyFormCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/steve.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Steve Jobs")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[a("Revolutionary!")]),_:1}),e(h,null,{default:i(()=>[Dy]),_:1}),e(k,{reply:""},{default:i(()=>[e($),e(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[e(b,{name:"edit"}),a(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(A,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:t.collapsedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/christian.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Christian Rocha")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[a(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),e(h,null,{default:i(()=>[Fy]),_:1})]),_:1}),e(y,{collapsed:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("1 days ago")]),_:1}),e(c,null,{default:i(()=>[a("No, it wont")]),_:1}),e(h,null,{default:i(()=>[Vy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:t.threadedCode},{default:i(()=>[e(y,{threaded:""},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Iy]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Ly]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[Oy]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Hy]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[jy]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[qy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Uy]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[Jy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:t.minimalCode},{default:i(()=>[e(y,{minimal:""},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Gy]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Yy]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[Wy]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Ky]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Qy]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[Xy]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Zy]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[eC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Size",description:"Comments can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"small"},{default:i(()=>[e(p,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[tC]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[iC]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[lC]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[aC]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[nC]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[sC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[oC]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[uC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"Comments's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(T,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(p,{as:"h3",inverted:"",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[rC]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[dC]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[cC]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[mC]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[pC]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[fC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[gC]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[hC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const bC=pe(yy,[["render",_C]]),vC=B({name:"FeedDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),yC=C("img",{src:Tt},null,-1),CC=C("img",{src:Tt},null,-1),wC=C("a",null,"Coworkers",-1),AC=C("img",{src:Ra},null,-1),SC=C("a",null,"Jenny Hess",-1),kC=C("a",null,"coworker",-1),$C=C("img",{src:Qi},null,-1),TC=C("a",null,"Helen Troy",-1),EC=C("a",null,[C("img",{src:G})],-1),xC=C("a",null,[C("img",{src:G})],-1),BC=C("a",null,"Elliot Fu",-1),RC=C("a",null,"Jenny Hess",-1),zC=C("a",null,"Stevie Feliciano",-1),PC=C("a",null,"Elliot Fu",-1),MC=C("a",null,"Helen Troy",-1),NC=C("a",null,"Christian Rocha",-1),DC=C("img",{src:Tt},null,-1),FC=C("div",{class:"date"},"Just now",-1),VC=C("a",{class:"user"},"Elliot Fu",-1);function IC(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-feed-label"),u=_("sui-feed-user"),g=_("sui-feed-date"),c=_("sui-feed-summary"),h=_("sui-icon"),v=_("sui-feed-like"),d=_("sui-feed-meta"),y=_("sui-feed-content"),A=_("sui-feed-event"),$=_("sui-feed"),b=_("doc-example"),w=_("sui-feed-extra"),k=_("sui-segment"),T=_("sui-container");return K(),oe("div",null,[e(f,{title:"Feed",sub:"A feed presents user activity chronologically"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Feed",description:"A feed",code:t.feedCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(o,null,{default:i(()=>[yC]),_:1}),e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Elliot Fu")]),_:1}),a(" added you as a friend "),e(g,null,{default:i(()=>[a("1 Hour Ago")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,{name:"like"}),a(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(b,{title:"Label",description:"An event can contain an image or icon label",code:t.labelCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(o,null,{default:i(()=>[CC]),_:1}),e(y,null,{default:i(()=>[a(" You added Elliot Fu to the group "),wC]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Date",description:"An event or an event summary can contain a date",code:t.dateCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(o,null,{default:i(()=>[AC]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(c,null,{default:i(()=>[a(" You added "),SC,a(" to your "),kC,a(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:t.additionalInfoCode},{default:i(()=>[e($,null,{default:i(()=>[e(A,null,{default:i(()=>[e(o,null,{default:i(()=>[$C]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(c,null,{default:i(()=>[TC,a(" added 2 photos ")]),_:1}),e(w,{images:""},{default:i(()=>[EC,xC]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Size",description:"A feed can have different sizes",code:t.sizeCode},{default:i(()=>[e($,{size:"small"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Followers Activity")]),_:1}),e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[BC,a(" added "),RC,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[zC,a(" added "),PC,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[MC,a(" added "),NC,a(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Inverted",description:"A feed's color can be inverted",code:t.invertedCode},{default:i(()=>[e(k,{inverted:""},{default:i(()=>[e($,{inverted:""},{default:i(()=>[e(A,null,{default:i(()=>[e(o,null,{default:i(()=>[DC]),_:1}),e(y,null,{default:i(()=>[FC,e(c,null,{default:i(()=>[VC,a(" posted on his page ")]),_:1}),e(w,{text:""},{default:i(()=>[a(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const LC=pe(vC,[["render",IC]]),OC=B({name:"ItemDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),HC=C("img",{src:G},null,-1),jC=C("span",null,"Description",-1),qC=C("img",{src:Ce},null,-1),UC=C("img",{src:G},null,-1),JC=C("span",null,"Description",-1),GC=C("img",{src:Ce},null,-1),YC=C("img",{src:G},null,-1),WC=C("img",{src:G},null,-1),KC=C("img",{src:G},null,-1),QC=C("img",{src:G},null,-1),XC=C("img",{src:G},null,-1),ZC=C("img",{src:G},null,-1),ew=C("img",{src:G},null,-1),tw=C("span",{class:"price"},"$1200",-1),iw=C("span",{class:"stay"},"1 Month",-1),lw=C("img",{src:Ce},null,-1),aw=C("span",{class:"price"},"$1000",-1),nw=C("span",{class:"stay"},"2 Weeks",-1),sw=C("img",{src:Ce},null,-1),ow=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),uw=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),rw=C("img",{src:Ce},null,-1),dw=C("img",{src:G},null,-1),cw=C("span",{class:"cinema"},"Union Square 14",-1),mw=C("img",{src:Ce},null,-1),pw=C("img",{src:G},null,-1),fw=C("span",{class:"cinema"},"IFC Cinema",-1),gw=C("img",{src:Ce},null,-1),hw=C("img",{src:G},null,-1),_w=C("span",{class:"cinema"},"IFC",-1),bw=C("img",{src:Ce},null,-1),vw=C("img",{src:Ce},null,-1),yw=C("img",{src:Ce},null,-1),Cw=C("img",{src:Ce},null,-1),ww=C("span",{class:"price"},"$1200",-1),Aw=C("span",{class:"stay"},"1 Month",-1),Sw=C("img",{src:Ce},null,-1),kw=C("span",{class:"price"},"$1000",-1),$w=C("span",{class:"stay"},"2 Weeks",-1),Tw=C("img",{src:Ce},null,-1);function Ew(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-item-image"),u=_("sui-item-header"),g=_("sui-item-meta"),c=_("sui-item-description"),h=_("sui-item-extra"),v=_("sui-item-content"),d=_("sui-item"),y=_("sui-item-group"),A=_("doc-example"),$=_("sui-image"),b=_("sui-icon"),w=_("sui-label"),k=_("sui-button"),T=_("sui-segment"),x=_("sui-container");return K(),oe("div",null,[e(f,{title:"Item",sub:"An item view presents large collections of site content for display"}),e(x,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Items",description:"A group of items",code:t.itemsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[HC]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[jC]),_:1}),e(c,null,{default:i(()=>[qC]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[UC]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[JC]),_:1}),e(c,null,{default:i(()=>[GC]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(A,{title:"Image",description:"An item can contain an image",code:t.imageCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[YC]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[WC]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[KC]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Content",description:"An item can contain content",code:t.contentCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[QC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content A ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[XC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content B ")]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[ZC]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Header",description:"An item can contain a header",code:t.headerCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[ew]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Metadata",description:"An item can contain content metadata",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[tw,iw]),_:1}),e(c,null,{default:i(()=>[lw]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[aw,nw]),_:1}),e(c,null,{default:i(()=>[sw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(c,null,{default:i(()=>[ow,uw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(c,null,{default:i(()=>[rw]),_:1}),e(h,null,{default:i(()=>[e(b,{name:"check",color:"green"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(A,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:t.dividedCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[dw]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("12 Years a Slave")]),_:1}),e(g,null,{default:i(()=>[cw]),_:1}),e(c,null,{default:i(()=>[mw]),_:1}),e(h,null,{default:i(()=>[e(w,null,{default:i(()=>[a("IMAX")]),_:1}),e(w,null,{default:i(()=>[e(b,{name:"globe"}),a(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[pw]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(g,null,{default:i(()=>[fw]),_:1}),e(c,null,{default:i(()=>[gw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1}),e(w,null,{default:i(()=>[a("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e(o,null,{default:i(()=>[hw]),_:1}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Watchmen")]),_:1}),e(g,null,{default:i(()=>[_w]),_:1}),e(c,null,{default:i(()=>[bw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:t.relaxedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"tiny",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"tiny",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"tiny",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,{as:"a"},{default:i(()=>[a("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:t.verticalAlignCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Top Aligned")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Middle Aligned")]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"bottom"},{default:i(()=>[e(u,null,{default:i(()=>[a("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Floated Content",description:"Any content element can be floated left or right",code:t.floatedContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content A")]),_:1}),e(c,null,{default:i(()=>[vw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content B")]),_:1}),e(c,null,{default:i(()=>[yw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(u,null,{default:i(()=>[a("Content C")]),_:1}),e(c,null,{default:i(()=>[Cw]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(A,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:t.invertedCode},{default:i(()=>[e(T,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[ww,Aw]),_:1}),e(c,null,{default:i(()=>[Sw]),_:1})]),_:1})]),_:1}),e(d,null,{default:i(()=>[e($,{size:"small",src:G}),e(v,null,{default:i(()=>[e(u,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[kw,$w]),_:1}),e(c,null,{default:i(()=>[Tw]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const xw=pe(OC,[["render",Ew]]),Bw=B({name:"StatisticDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),Rw=C("br",null,null,-1),zw=C("br",null,null,-1),Pw=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),Mw=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),Nw=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),Dw=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function Fw(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-statistic"),u=_("doc-example"),g=_("sui-statistic-group"),c=_("sui-statistic-value"),h=_("sui-statistic-label"),v=_("sui-icon"),d=_("sui-image"),y=_("sui-segment"),A=_("sui-container");return K(),oe("div",null,[e(f,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),e(A,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:t.statisticCode},{default:i(()=>[e(o,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),e(u,{title:"Statistic Group",description:"A group of statistics",code:t.groupCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{value:"22",label:"Faves"}),e(o,{value:"31,200",label:"Views"}),e(o,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(u,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:t.valueCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{value:"22",label:"Faves"}),e(o,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[a(" Three"),Rw,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,null,{default:i(()=>[e(d,{circular:"",inline:"",src:$n}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:t.labelCode},{default:i(()=>[e(o,{value:"2,204",label:"Views"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:t.horizontalCode},{default:i(()=>[e(o,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),e(u,{title:"Colored",description:"A statistic can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:t.invertedCode},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(g,{stackable:""},{default:i(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:t.evenlyDividedCode},{default:i(()=>[e(g,{widths:4},{default:i(()=>[e(o,{value:"22",label:"Faves"}),e(o,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[a(" Three"),zw,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,null,{default:i(()=>[e(d,{circular:"",inline:"",src:$n}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(u,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(o,{floated:"right",value:"2,204",label:"Views"}),Pw,Mw,e(o,{floated:"left",value:"2,204",label:"Views"}),Nw,Dw]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A statistic can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{size:"mini",value:"2,204",label:"Views"}),e(o,{size:"tiny",value:"2,204",label:"Views"}),e(o,{size:"small",value:"2,204",label:"Views"}),e(o,{value:"2,204",label:"Views"}),e(o,{size:"large",value:"2,204",label:"Views"}),e(o,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const Vw=pe(Bw,[["render",Fw]]),Iw=B({name:"AccordionDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),Lw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Ow=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Hw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),jw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),qw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Uw=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Jw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Gw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),Yw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Ww=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),Kw=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Qw=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),Xw=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),Zw=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),eA=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),tA=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),iA=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),lA=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),aA=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),nA=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function sA(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-accordion-tab"),u=_("sui-accordion"),g=_("doc-example"),c=_("sui-segment"),h=_("sui-container");return K(),oe("div",null,[e(f,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),e(h,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Accordion",description:"A standard accordion",code:t.accordionCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[Lw]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[Ow]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[Hw,jw]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:t.styledCode},{default:i(()=>[e(u,{styled:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[qw]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[Uw]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[Jw,Gw]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(u,{fluid:"",styled:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[Yw]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[Ww]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[Kw,Qw]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(c,{inverted:""},{default:i(()=>[e(u,{inverted:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[Xw]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[Zw]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[eA,tA]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Usage")]),_:1}),e(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:t.multipleCode},{default:i(()=>[e(u,{multiple:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[iA]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[lA]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[aA,nA]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const oA=pe(Iw,[["render",sA]]),uA=B({name:"CalendarDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{calendar1:I(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function rA(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-calendar"),u=_("doc-example"),g=_("sui-container");return K(),oe("div",null,[e(f,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),e(g,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Calendar",description:"A standard calendar",code:t.calendarCode},{default:i(()=>[e(o,{modelValue:t.calendar1,"onUpdate:modelValue":l[0]||(l[0]=c=>t.calendar1=c),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const dA=pe(uA,[["render",rA]]),cA=B({name:"PropertyListTable",props:{properties:Array}});function mA(t,l,n,s,r,m){const f=_("sui-table-header-cell"),p=_("sui-table-row"),o=_("sui-table-header"),u=_("sui-table-cell"),g=_("sui-table-body"),c=_("sui-table");return K(),Ve(c,{celled:""},{default:i(()=>[e(o,null,{default:i(()=>[e(p,null,{default:i(()=>[e(f,null,{default:i(()=>[a("Name")]),_:1}),e(f,null,{default:i(()=>[a("Type")]),_:1}),e(f,null,{default:i(()=>[a("Default")]),_:1}),e(f,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.properties,h=>(K(),Ve(p,{key:h.name},{default:i(()=>[e(u,null,{default:i(()=>[a($e(h.name),1)]),_:2},1024),e(u,null,{default:i(()=>[a($e(h.type),1)]),_:2},1024),e(u,null,{default:i(()=>[a($e(h.default),1)]),_:2},1024),e(u,null,{default:i(()=>[a($e(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const Pa=pe(cA,[["render",mA]]),pA=B({name:"CheckboxDoc",components:{DocPageHeader:Ie,DocExample:ve,PropertyListTable:Pa},setup(){const t=I(!1),l='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=I([]),s=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,r=I(!1),m='<sui-checkbox toggle v-model="toggle" />',f=I(!1);return{checked:t,checkboxCode:l,selected:n,multipleCode:s,toggle:r,toggleCode:m,slider:f,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),fA={class:"ui form"},gA={class:"grouped fields"},hA={class:"field"},_A={class:"field"},bA={class:"field"};function vA(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-checkbox"),u=_("doc-example"),g=_("property-list-table"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),d=_("sui-table-cell"),y=_("sui-table-body"),A=_("sui-table"),$=_("sui-container");return K(),oe("div",null,[e(f,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Checkbox",description:"A standard checkbox",code:t.checkboxCode},{default:i(()=>[e(o,{label:"Make my profile visible",modelValue:t.checked,"onUpdate:modelValue":l[0]||(l[0]=b=>t.checked=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:t.multipleCode},{default:i(()=>[C("div",fA,[C("div",gA,[C("div",hA,[e(o,{label:"Apple",value:"Apple",modelValue:t.selected,"onUpdate:modelValue":l[1]||(l[1]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",_A,[e(o,{label:"Banana",value:"Banana",modelValue:t.selected,"onUpdate:modelValue":l[2]||(l[2]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",bA,[e(o,{label:"Chocolate",value:"Chocolate",modelValue:t.selected,"onUpdate:modelValue":l[3]||(l[3]=b=>t.selected=b)},null,8,["modelValue"])])])]),a(" selected : "+$e(t.selected),1)]),_:1},8,["code"]),e(u,{title:"Toggle",description:"A checkbox can toggle",code:t.toggleCode},{default:i(()=>[e(o,{toggle:"",modelValue:t.toggle,"onUpdate:modelValue":l[4]||(l[4]=b=>t.toggle=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Slider",description:"A checkbox can look like a slider",code:t.sliderCode},{default:i(()=>[e(o,{slider:"",modelValue:t.slider,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.events,b=>(K(),Ve(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a($e(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a($e(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const yA=pe(pA,[["render",vA]]),CA=B({name:"DimmerDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,n=I(!1);return{dimmerCode:t,contentDimmerCode:l,active:n,pageDimmerCode:`<div>
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
</div>`}}});function wA(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-image"),u=_("sui-image-group"),g=_("sui-dimmer"),c=_("sui-dimmer-dimmable"),h=_("doc-example"),v=_("sui-icon"),d=_("sui-button"),y=_("sui-header-subheader"),A=_("sui-container");return K(),oe("div",null,[e(f,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),e(A,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:t.dimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(p,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(u,{size:"small"},{default:i(()=>[e(o,{src:G}),e(o,{src:G}),e(o,{src:G})]),_:1}),e(o,{size:"medium",src:xt}),e(g,{active:""})]),_:1})]),_:1},8,["code"]),e(h,{title:"Content Dimmer",description:"A dimmer can display content",code:t.contentDimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(p,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(u,{size:"small"},{default:i(()=>[e(o,{src:G}),e(o,{src:G}),e(o,{src:G})]),_:1}),e(o,{size:"medium",src:xt}),e(g,{active:""},{default:i(()=>[e(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:t.pageDimmerCode},{default:i(()=>[C("div",null,[e(d,{labeled:"",icon:"",onClick:l[0]||(l[0]=$=>t.active=!0)},{default:i(()=>[e(v,{name:"plus"}),a(" Show ")]),_:1}),e(g,{active:t.active,page:"",onClick:l[1]||(l[1]=$=>t.active=!1)},{default:i(()=>[e(p,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! "),e(y,null,{default:i(()=>[a("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const AA=pe(CA,[["render",wA]]),SA=B({name:"DropdownDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=`<sui-dropdown text="File">
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
</sui-dropdown>`,l=I(null),n=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,s=I(null),r=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],m=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,f=I(null),p=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],o=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,u=I(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,c=I(null),h=`<sui-dropdown
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
/>`,v=I(null),d=`<sui-dropdown
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
/>`,y=I(null),A=`<sui-dropdown
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
/>`,$=I({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:t,selected1:l,selectionCode:n,selected2:s,searchSelectionOptions:r,searchSelectionCode:m,selected3:f,clearableSelectionOptions:p,clearableSelectionCode:o,selected4:u,multipleCode:g,selected5:c,multipleCode2:h,selected6:v,searchDropdownCode:d,selected7:y,searchInMenuCode:A,selected8:$,inlineCode:`<span>
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
</sui-button-group>`}}});function kA(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-dropdown-item"),u=_("sui-divider"),g=_("sui-dropdown-menu"),c=_("sui-dropdown"),h=_("doc-example"),v=_("sui-button"),d=_("sui-button-group"),y=_("sui-container");return K(),oe("div",null,[e(f,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),e(y,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dropdown",description:"A dropdown",code:t.dropdownCode},{default:i(()=>[e(c,{text:"File"},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{text:"New"}),e(o,{text:"Open...",description:"ctrl + o"}),e(o,{text:"Save as...",description:"ctrl + s"}),e(o,{text:"Rename",description:"ctrl + r"}),e(o,{text:"Make a copy"}),e(o,{icon:"folder",text:"Move to folder"}),e(o,{icon:"trash",text:"Move to trash"}),e(u),e(o,{text:"Download As..."}),e(o,{text:"Publish To Web"}),e(o,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:t.selectionCode},{default:i(()=>[e(c,{selection:"",placeholder:"Pet",modelValue:t.selected1,"onUpdate:modelValue":l[0]||(l[0]=A=>t.selected1=A),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:t.searchSelectionCode},{default:i(()=>[e(c,{search:"",selection:"",fluid:"",modelValue:t.selected2,"onUpdate:modelValue":l[1]||(l[1]=A=>t.selected2=A),options:t.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:t.clearableSelectionCode},{default:i(()=>[e(c,{clearable:"",selection:"",modelValue:t.selected3,"onUpdate:modelValue":l[2]||(l[2]=A=>t.selected3=A),options:t.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:t.multipleCode},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",modelValue:t.selected4,"onUpdate:modelValue":l[3]||(l[3]=A=>t.selected4=A),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{code:t.multipleCode2},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",search:"",modelValue:t.selected5,"onUpdate:modelValue":l[4]||(l[4]=A=>t.selected5=A),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:t.searchDropdownCode},{default:i(()=>[e(c,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:t.selected6,"onUpdate:modelValue":l[5]||(l[5]=A=>t.selected6=A),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:t.searchInMenuCode},{default:i(()=>[e(c,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:t.selected7,"onUpdate:modelValue":l[6]||(l[6]=A=>t.selected7=A),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:t.inlineCode},{default:i(()=>[C("span",null,[a(" Show me posts by "),e(c,{inline:"",modelValue:t.selected8,"onUpdate:modelValue":l[7]||(l[7]=A=>t.selected8=A),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),e(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:t.pointingCode},{default:i(()=>[e(c,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{text:"New"}),e(o,{text:"Save As"}),e(o,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:t.floatingCode},{default:i(()=>[e(d,{color:"teal"},{default:i(()=>[e(v,null,{default:i(()=>[a("Save")]),_:1}),e(c,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{text:"Edit Post",icon:"edit"}),e(o,{text:"Remove Post",icon:"delete"}),e(o,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const $A=pe(SA,[["render",kA]]),TA=B({name:"EmbedDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function EA(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-embed"),u=_("doc-example"),g=_("sui-container");return K(),oe("div",null,[e(f,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),e(g,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:t.youtubeCode},{default:i(()=>[e(o,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:t.aspectRatioCode},{default:i(()=>[e(o,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const xA=pe(TA,[["render",EA]]),BA="/vue-fomantic-ui/images/avatar/large/rachel.png",RA=B({name:"ModalDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=`<div>
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
</div>`,l=I(!1),n=I(!1);return{modalCode:t,modal1:l,basicModal:n,basicCode:`<div>
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
</div>`}}}),zA=C("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),PA=C("p",null,"Is it okay to use this photo?",-1),MA=C("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function NA(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-button"),u=_("sui-modal-header"),g=_("sui-image"),c=_("sui-modal-description"),h=_("sui-modal-content"),v=_("sui-modal-actions"),d=_("sui-modal"),y=_("doc-example"),A=_("sui-icon"),$=_("sui-container");return K(),oe("div",null,[e(f,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Modal",description:"A standard modal",code:t.modalCode},{default:i(()=>[C("div",null,[e(o,{onClick:l[0]||(l[0]=b=>t.modal1=!0)},{default:i(()=>[a("Show Modal")]),_:1}),e(d,{modelValue:t.modal1,"onUpdate:modelValue":l[2]||(l[2]=b=>t.modal1=b)},{default:i(()=>[e(u,null,{default:i(()=>[a("Select a Photo")]),_:1}),e(h,{image:""},{default:i(()=>[e(g,{wrapped:"",size:"medium",src:BA}),e(c,null,{default:i(()=>[e(p,null,{default:i(()=>[a("Default Profile Image")]),_:1}),zA,PA]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(o,{positive:"",onClick:l[1]||(l[1]=b=>t.modal1=!1)},{default:i(()=>[a("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A modal can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(o,{onClick:l[3]||(l[3]=b=>t.basicModal=!0)},{default:i(()=>[a("Basic Modal")]),_:1}),e(d,{basic:"",modelValue:t.basicModal,"onUpdate:modelValue":l[5]||(l[5]=b=>t.basicModal=b)},{default:i(()=>[e(u,{icon:""},{default:i(()=>[e(A,{name:"archive"}),a(" Archive Old Messages ")]),_:1}),e(h,null,{default:i(()=>[MA]),_:1}),e(v,null,{default:i(()=>[e(o,{basic:"",color:"red",inverted:"",onClick:l[4]||(l[4]=b=>t.basicModal=!1)},{default:i(()=>[e(A,{name:"remove"}),a(" No ")]),_:1}),e(o,{basic:"",color:"green"},{default:i(()=>[e(A,{name:"checkmark"}),a(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const DA=pe(RA,[["render",NA]]),FA="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",VA=B({name:"PopupDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=I(null),l=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=I(null),s=I(null),r=I(null),m=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,f=I(null),p=`<sui-card ref="triggerTriger">
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
</sui-popup>`,o=I(null),u=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=I(null),c=I(null),h=I(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,d=I(null),y=I(null),A=I(null),$=I(null),b=I(null),w=I(null),k=I(null),T=I(null),x=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,P=I(null),M=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,z=I(null),F=I(null),Z=I(null),H=I(null),re=I(null),ye=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,V=I(null),O=I(null);return{popupTrigger:t,popupCode:l,titledTrigger1:n,titledTrigger2:s,titledTrigger3:r,titledCode:m,triggerTriger:f,triggerCode:p,basicTrigger:o,basicCode:u,wideTrigger1:g,wideTrigger2:c,wideTrigger3:h,wideCode:v,positionTrigger1:d,positionTrigger2:y,positionTrigger3:A,positionTrigger4:$,positionTrigger5:b,positionTrigger6:w,positionTrigger7:k,positionTrigger8:T,positionCode:x,flowingTrigger:P,flowingCode:M,sizeTrigger1:z,sizeTrigger2:F,sizeTrigger3:Z,sizeTrigger4:H,sizeTrigger5:re,sizeCode:ye,invertedTrigger1:V,invertedTrigger2:O,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),IA=C("p",null,[C("b",null,"2"),a(" projects, $10 a month ")],-1),LA=C("p",null,[C("b",null,"5"),a(" projects, $20 a month ")],-1),OA=C("p",null,[C("b",null,"8"),a(" projects, $25 a month ")],-1);function HA(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-icon"),u=_("sui-button"),g=_("sui-popup"),c=_("doc-example"),h=_("sui-image"),v=_("sui-card-header"),d=_("sui-card-description"),y=_("sui-card-content"),A=_("sui-card"),$=_("sui-rating"),b=_("sui-divider"),w=_("sui-grid-column"),k=_("sui-grid"),T=_("sui-container");return K(),oe("div",null,[e(f,{title:"Popup",sub:"A popup displays additional information on top of a page"}),e(T,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Popup",description:"An element can specify popup content to appear",code:t.popupCode},{default:i(()=>[e(u,{icon:"",ref:"popupTrigger"},{default:i(()=>[e(o,{name:"add"})]),_:1},512),e(g,{trigger:t.popupTrigger},{default:i(()=>[a(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Titled",description:"An element can specify popup content with a title",code:t.titledCode},{default:i(()=>[e(h,{avatar:"",src:Tt,ref:"titledTrigger1"},null,512),e(h,{avatar:"",src:_l,ref:"titledTrigger2"},null,512),e(h,{avatar:"",src:za,ref:"titledTrigger3"},null,512),e(g,{trigger:t.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Trigger",description:"A trigger can be complex element",code:t.triggerCode},{default:i(()=>[e(A,{ref:"triggerTriger"},{default:i(()=>[e(h,{src:FA}),e(y,null,{default:i(()=>[e(v,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(d,null,{default:i(()=>[a(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),e(g,{trigger:t.triggerTriger,header:"User Rating"},{default:i(()=>[e($,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Basic",description:"A popup can provide more basic formatting",code:t.basicCode},{default:i(()=>[e(u,{icon:"",ref:"basicTrigger"},{default:i(()=>[e(o,{name:"add"})]),_:1},512),e(g,{trigger:t.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Position",description:"A popup can be position around its trigger",code:t.positionCode},{default:i(()=>[e(u,{ref:"positionTrigger1"},{default:i(()=>[a("Top Left")]),_:1},512),e(u,{ref:"positionTrigger2"},{default:i(()=>[a("Top Center")]),_:1},512),e(u,{ref:"positionTrigger3"},{default:i(()=>[a("Top Right")]),_:1},512),e(b),e(u,{ref:"positionTrigger4"},{default:i(()=>[a("Bottom Left")]),_:1},512),e(u,{ref:"positionTrigger5"},{default:i(()=>[a("Bottom Center")]),_:1},512),e(u,{ref:"positionTrigger6"},{default:i(()=>[a("Bottom Right")]),_:1},512),e(b),e(u,{ref:"positionTrigger7"},{default:i(()=>[a("Right Center")]),_:1},512),e(u,{ref:"positionTrigger8"},{default:i(()=>[a("Left Center")]),_:1},512),e(g,{trigger:t.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:t.flowingCode},{default:i(()=>[e(u,{ref:"flowingTrigger"},{default:i(()=>[a("Show Flowing Popup")]),_:1},512),e(g,{trigger:t.flowingTrigger,flowing:""},{default:i(()=>[e(k,{centered:"",divided:"",columns:3},{default:i(()=>[e(w,{textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Basic Plan")]),_:1}),IA,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Business Plan")]),_:1}),LA,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(p,{as:"h4"},{default:i(()=>[a("Premium Plan")]),_:1}),OA,e(u,null,{default:i(()=>[a("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Size",description:"A popup can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),e(g,{size:"mini",content:"Hello. This is a mini popup",trigger:t.sizeTrigger1},null,8,["trigger"]),e(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:t.sizeTrigger2},null,8,["trigger"]),e(g,{size:"small",content:"Hello. This is a small popup",trigger:t.sizeTrigger3},null,8,["trigger"]),e(g,{size:"large",content:"Hello. This is a large popup",trigger:t.sizeTrigger4},null,8,["trigger"]),e(g,{size:"huge",content:"Hello. This is a huge popup",trigger:t.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:t.wideCode},{default:i(()=>[e(o,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),e(o,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),e(o,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),e(g,{trigger:t.wideTrigger1},{default:i(()=>[a(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger2,wide:""},{default:i(()=>[a(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger3,wide:"very"},{default:i(()=>[a(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Inverted",description:"A popup can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(o,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),e(u,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[e(o,{name:"add"})]),_:1},512),e(g,{trigger:t.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),e(g,{trigger:t.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const jA=pe(VA,[["render",HA]]),qA=B({name:"ProgressDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function UA(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-progress"),u=_("doc-example"),g=_("sui-segment"),c=_("sui-container");return K(),oe("div",null,[e(f,{title:"Progress",sub:"A progress bar shows the progression of a task"}),e(c,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Standard",description:"A standard progress bar",code:t.standardCode},{default:i(()=>[e(o,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(u,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:t.indicatingCode},{default:i(()=>[e(o,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(u,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:t.barCode},{default:i(()=>[e(o,{percent:33})]),_:1},8,["code"]),e(u,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:t.progressCode},{default:i(()=>[e(o,{percent:14,progress:""})]),_:1},8,["code"]),e(u,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:t.centeredCode},{default:i(()=>[e(o,{percent:68,progress:"centered"})]),_:1},8,["code"]),e(u,{title:"Label",description:"A progress element can contain a label",code:t.labelCode},{default:i(()=>[e(o,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(u,{title:"Active",description:"A progress bar can show activity",code:t.activeCode},{default:i(()=>[e(o,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),e(u,{title:"Success",description:"A progress bar can show a success state",code:t.successCode},{default:i(()=>[e(o,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),e(u,{title:"Warning",description:"A progress bar can show a warning state",code:t.warningCode},{default:i(()=>[e(o,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),e(u,{title:"Error",description:"A progress bar can show an error state",code:t.errorCode},{default:i(()=>[e(o,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),e(u,{title:"Disabled",description:"A progress bar can be disabled",code:t.disabledCode},{default:i(()=>[e(o,{percent:25,disabled:""})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Inverted",description:"A progress bar can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{inverted:"",percent:41,label:"Uploading Files",progress:""}),e(o,{inverted:"",percent:100,label:"Success",success:"",progress:""}),e(o,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),e(o,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),e(u,{title:"Attached",description:"A progress bar can show progress of an element",code:t.attachedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{percent:47,attached:"top"}),a(" La la la la "),e(o,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A progress bar can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{percent:88,size:"tiny",label:"tiny"}),e(o,{percent:100,size:"small",label:"small",success:""}),e(o,{percent:83,label:"standard"}),e(o,{percent:73,size:"large",label:"large"}),e(o,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),e(u,{title:"Color",description:"A progress bar can have different colors",code:t.colorCode},{default:i(()=>[e(o,{percent:32,color:"red"}),e(o,{percent:53,color:"orange"}),e(o,{percent:13,color:"yellow"}),e(o,{percent:37,color:"olive"}),e(o,{percent:83,color:"green"}),e(o,{percent:24,color:"teal"}),e(o,{percent:88,color:"blue"}),e(o,{percent:41,color:"violet"}),e(o,{percent:47,color:"purple"}),e(o,{percent:30,color:"pink"}),e(o,{percent:68,color:"brown"}),e(o,{percent:35,color:"grey"}),e(o,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const JA=pe(qA,[["render",UA]]),GA=B({name:"RatingDoc",components:{DocPageHeader:Ie,DocExample:ve,PropertyListTable:Pa},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),YA=C("br",null,null,-1),WA=C("br",null,null,-1),KA=C("br",null,null,-1),QA=C("br",null,null,-1),XA=C("br",null,null,-1),ZA=C("br",null,null,-1),eS=C("br",null,null,-1),tS=C("br",null,null,-1),iS=C("br",null,null,-1),lS=C("br",null,null,-1),aS=C("br",null,null,-1),nS=C("br",null,null,-1),sS=C("br",null,null,-1),oS=C("br",null,null,-1),uS=C("br",null,null,-1),rS=C("br",null,null,-1),dS=C("br",null,null,-1),cS=C("br",null,null,-1),mS=C("br",null,null,-1),pS=C("br",null,null,-1),fS=C("br",null,null,-1),gS=C("br",null,null,-1),hS=C("br",null,null,-1),_S=C("br",null,null,-1),bS=C("br",null,null,-1),vS=C("br",null,null,-1),yS=C("br",null,null,-1),CS=C("br",null,null,-1),wS=C("br",null,null,-1),AS=C("br",null,null,-1),SS=C("br",null,null,-1),kS=C("br",null,null,-1),$S=C("br",null,null,-1),TS=C("br",null,null,-1),ES=C("br",null,null,-1),xS=C("br",null,null,-1),BS=C("br",null,null,-1),RS=C("br",null,null,-1),zS=C("br",null,null,-1),PS=C("br",null,null,-1),MS=C("br",null,null,-1),NS=C("br",null,null,-1),DS=C("br",null,null,-1),FS=C("br",null,null,-1),VS=C("br",null,null,-1),IS=C("br",null,null,-1),LS=C("br",null,null,-1),OS=C("br",null,null,-1);function HS(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-rating"),u=_("doc-example"),g=_("property-list-table"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),d=_("sui-table-cell"),y=_("sui-table-body"),A=_("sui-table"),$=_("sui-container");return K(),oe("div",null,[e(f,{title:"Rating",sub:"A rating indicates user interest in content"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Rating",description:"A Basic rating",code:t.ratingCode},{default:i(()=>[e(o)]),_:1},8,["code"]),e(u,{title:"Icon",description:"You can use any available icon as rating indicator",code:t.iconCode},{default:i(()=>[e(o,{defaultRating:2,maxRating:4,color:"yellow"}),YA,WA,e(o,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),KA,QA,e(o,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),XA,ZA,e(o,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),eS,tS,e(o,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),iS,lS,e(o,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),aS,nS,e(o,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),e(u,{title:"Color",description:"You can specify any color of the FUI color palette",code:t.colorCode},{default:i(()=>[e(o,{defaultRating:1,maxRating:7,color:"red"}),sS,oS,e(o,{defaultRating:2,maxRating:7,color:"orange"}),uS,rS,e(o,{defaultRating:3,maxRating:7,color:"yellow"}),dS,cS,e(o,{defaultRating:4,maxRating:7,color:"olive"}),mS,pS,e(o,{defaultRating:5,maxRating:7,color:"green"}),fS,gS,e(o,{defaultRating:6,maxRating:7,color:"teal"}),hS,_S,e(o,{defaultRating:6,maxRating:7,color:"blue"}),bS,vS,e(o,{defaultRating:5,maxRating:7,color:"violet"}),yS,CS,e(o,{defaultRating:4,maxRating:7,color:"purple"}),wS,AS,e(o,{defaultRating:3,maxRating:7,color:"pink"}),SS,kS,e(o,{defaultRating:2,maxRating:7,color:"brown"}),$S,TS,e(o,{defaultRating:1,maxRating:7,color:"grey"}),ES,xS,e(o,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(u,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:t.disabledCode},{default:i(()=>[e(o,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Size",description:"A rating can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),BS,RS,e(o,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),zS,PS,e(o,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),MS,NS,e(o,{defaultRating:3,maxRating:4,color:"yellow"}),DS,FS,e(o,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),VS,IS,e(o,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),LS,OS,e(o,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.events,b=>(K(),Ve(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a($e(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a($e(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const jS=pe(GA,[["render",HS]]),qS=B({name:"SidebarDoc",components:{DocPageHeader:Ie,DocExample:ve,PropertyListTable:Pa},setup(){return{visible1:I(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),US={class:"pusher"};function JS(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-icon"),u=_("sui-button"),g=_("sui-grid-column"),c=_("sui-menu-item"),h=_("sui-sidebar"),v=_("sui-image"),d=_("sui-segment"),y=_("sui-grid"),A=_("doc-example"),$=_("property-list-table"),b=_("sui-table-header-cell"),w=_("sui-table-row"),k=_("sui-table-header"),T=_("sui-table-cell"),x=_("sui-table-body"),P=_("sui-table"),M=_("sui-container");return K(),oe("div",null,[e(f,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),e(M,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(A,{title:"Sidebar",description:"A sidebar",code:t.sidebarCode},{default:i(()=>[e(y,{columns:1},{default:i(()=>[e(g,null,{default:i(()=>[e(u,{onClick:l[0]||(l[0]=z=>t.visible1=!t.visible1),icon:""},{default:i(()=>[e(o,{name:"arrow right"})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(d,{class:"pushable"},{default:i(()=>[e(h,{visible:t.visible1,"onUpdate:visible":l[1]||(l[1]=z=>t.visible1=z),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[e(c,null,{default:i(()=>[e(o,{name:"home"}),a(" Home ")]),_:1}),e(c,null,{default:i(()=>[e(o,{name:"gamepad"}),a(" Games ")]),_:1}),e(c,null,{default:i(()=>[e(o,{name:"camera"}),a(" Channels ")]),_:1})]),_:1},8,["visible"]),C("div",US,[e(d,null,{default:i(()=>[e(p,{as:"h2"},{default:i(()=>[a("Main Header")]),_:1}),e(v,{src:ge})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e($,{properties:t.properties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(P,{celled:""},{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Name")]),_:1}),e(b,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(x,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.events,z=>(K(),Ve(w,{key:z.name},{default:i(()=>[e(T,null,{default:i(()=>[a($e(z.name),1)]),_:2},1024),e(T,null,{default:i(()=>[a($e(z.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const GS=pe(qS,[["render",JS]]),YS=B({name:"SliderDoc",components:{DocPageHeader:Ie,DocExample:ve},setup(){const t=I(5),l='<sui-slider v-model="slider1" />',n=I(4),s='<sui-slider labeled v-model="slider2" />',r=I(6),m='<sui-slider labeled="ticked" v-model="slider3" />',f=I(0),p=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,o=I(40),u='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=I([]);g.value.push(20,60);const c='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=I(7),v='<sui-slider disabled v-model="slider7" />',d=I(8),y=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,A=I(3),$='<sui-slider reversed v-model="slider9" />',b=I(18),w='<sui-slider vertical v-model="slider10" :max="20" />',k=I(5),T=I(5),x=I(5),P=I(5),M=I(5),z=I(5),F=I(5),Z=I(5),H=I(5),re=I(5),ye=I(5),V=I(5),O=I(5),ae=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,W=`<sui-segment inverted>
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
</sui-segment>`,Ae=I(5),Le=I(5),Ue=I(5);return{slider1:t,sliderCode:l,slider2:n,labeledSliderCode:s,slider3:r,labeledTickedCode:m,slider4:f,customLabelsCode:p,slider5:o,stepCode:u,slider6:g,rangeCode:c,slider7:h,disabledCode:v,slider8:d,invertedCode:y,slider9:A,reversedCode:$,slider10:b,verticalCode:w,redSlider:k,orangeSlider:T,yellowSlider:x,oliveSlider:P,greenSlider:M,tealSlider:z,blueSlider:F,violetSlider:Z,purpleSlider:H,pinkSlider:re,brownSlider:ye,greySlider:V,blackSlider:O,coloredCode:ae,invertedColoredCode:W,smallSlider:Ae,largeSlider:Le,bigSlider:Ue,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function WS(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-slider"),u=_("doc-example"),g=_("sui-segment"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),d=_("sui-table-cell"),y=_("sui-table-body"),A=_("sui-table"),$=_("sui-container");return K(),oe("div",null,[e(f,{title:"Slider",sub:"A slider allows users to select values within a range"}),e($,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(u,{title:"Slider",description:"A standard slider",code:t.sliderCode},{default:i(()=>[e(o,{modelValue:t.slider1,"onUpdate:modelValue":l[0]||(l[0]=b=>t.slider1=b)},null,8,["modelValue"]),a(" "+$e(t.slider1),1)]),_:1},8,["code"]),e(u,{title:"Labeled Slider",description:"A slider that show its labels",code:t.labeledSliderCode},{default:i(()=>[e(o,{labeled:"",modelValue:t.slider2,"onUpdate:modelValue":l[1]||(l[1]=b=>t.slider2=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:t.labeledTickedCode},{default:i(()=>[e(o,{labeled:"ticked",modelValue:t.slider3,"onUpdate:modelValue":l[2]||(l[2]=b=>t.slider3=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:t.customLabelsCode},{default:i(()=>[e(o,{modelValue:t.slider4,"onUpdate:modelValue":l[3]||(l[3]=b=>t.slider4=b),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Step",description:"A slider can change the default step increment",code:t.stepCode},{default:i(()=>[e(o,{modelValue:t.slider5,"onUpdate:modelValue":l[4]||(l[4]=b=>t.slider5=b),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),a(" "+$e(t.slider5),1)]),_:1},8,["code"]),e(u,{title:"Range",description:"A range slider which allow you to select a range between two values",code:t.rangeCode},{default:i(()=>[e(o,{modelValue:t.slider6,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider6=b),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),a(" "+$e(t.slider6),1)]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(u,{title:"Disabled",description:"A slider can appear disabled",code:t.disabledCode},{default:i(()=>[e(o,{disabled:"",modelValue:t.slider7,"onUpdate:modelValue":l[6]||(l[6]=b=>t.slider7=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted",description:"A slider can be inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{inverted:"",modelValue:t.slider8,"onUpdate:modelValue":l[7]||(l[7]=b=>t.slider8=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Reversed",description:"A slider can be reversed",code:t.reversedCode},{default:i(()=>[e(o,{reversed:"",modelValue:t.slider9,"onUpdate:modelValue":l[8]||(l[8]=b=>t.slider9=b)},null,8,["modelValue"]),a(" "+$e(t.slider9),1)]),_:1},8,["code"]),e(u,{title:"Vertical",description:"A slider can be vertical",code:t.verticalCode},{default:i(()=>[e(o,{vertical:"",modelValue:t.slider10,"onUpdate:modelValue":l[9]||(l[9]=b=>t.slider10=b),max:20},null,8,["modelValue"]),a(" "+$e(t.slider10),1)]),_:1},8,["code"]),e(u,{title:"Colored",description:"A slider can be different colors",code:t.coloredCode},{default:i(()=>[e(o,{color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[10]||(l[10]=b=>t.redSlider=b)},null,8,["modelValue"]),e(o,{color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[11]||(l[11]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(o,{color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[12]||(l[12]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(o,{color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[13]||(l[13]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(o,{color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[14]||(l[14]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(o,{color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[15]||(l[15]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(o,{color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[16]||(l[16]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(o,{color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[17]||(l[17]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(o,{color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[18]||(l[18]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(o,{color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[19]||(l[19]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(o,{color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[20]||(l[20]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(o,{color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[21]||(l[21]=b=>t.greySlider=b)},null,8,["modelValue"]),e(o,{color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[22]||(l[22]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(u,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:t.invertedColoredCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{inverted:"",color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[23]||(l[23]=b=>t.redSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[24]||(l[24]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[25]||(l[25]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[26]||(l[26]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[27]||(l[27]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[28]||(l[28]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[29]||(l[29]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[30]||(l[30]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[31]||(l[31]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[32]||(l[32]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[33]||(l[33]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[34]||(l[34]=b=>t.greySlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[35]||(l[35]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(u,{title:"Size",description:"A slider can have different sizes",code:t.sizeCode},{default:i(()=>[e(o,{size:"small",color:"red",modelValue:t.smallSlider,"onUpdate:modelValue":l[36]||(l[36]=b=>t.smallSlider=b)},null,8,["modelValue"]),e(o,{size:"large",color:"yellow",modelValue:t.largeSlider,"onUpdate:modelValue":l[37]||(l[37]=b=>t.largeSlider=b)},null,8,["modelValue"]),e(o,{size:"big",color:"olive",modelValue:t.bigSlider,"onUpdate:modelValue":l[38]||(l[38]=b=>t.bigSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Type")]),_:1}),e(c,null,{default:i(()=>[a("Default")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.properties,b=>(K(),Ve(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a($e(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a($e(b.type),1)]),_:2},1024),e(d,null,{default:i(()=>[a($e(b.default),1)]),_:2},1024),e(d,null,{default:i(()=>[a($e(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(A,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.events,b=>(K(),Ve(h,{key:b.name},{default:i(()=>[e(d,null,{default:i(()=>[a($e(b.name),1)]),_:2},1024),e(d,null,{default:i(()=>[a($e(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const KS=pe(YS,[["render",WS]]),QS=B({name:"TabDoc",components:{DocPageHeader:Ie,DocExample:ve,PropertyListTable:Pa},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function XS(t,l,n,s,r,m){const f=_("doc-page-header"),p=_("sui-header"),o=_("sui-tab-panel"),u=_("sui-tab"),g=_("doc-example"),c=_("property-list-table"),h=_("sui-table-header-cell"),v=_("sui-table-row"),d=_("sui-table-header"),y=_("sui-table-cell"),A=_("sui-table-body"),$=_("sui-table"),b=_("sui-container");return K(),oe("div",null,[e(f,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),e(b,{class:"main"},{default:i(()=>[e(p,{as:"h2",dividing:""},{default:i(()=>[a("Examples")]),_:1}),e(g,{title:"Basic",code:t.basicCode},{default:i(()=>[e(u,null,{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",code:t.pointingCode},{default:i(()=>[e(u,{pointing:""},{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary",code:t.secondaryCode},{default:i(()=>[e(u,{secondary:""},{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",code:t.textCode},{default:i(()=>[e(u,{text:""},{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(p,{as:"h3"},{default:i(()=>[a("Tab")]),_:1}),e(c,{properties:t.tabProperties},null,8,["properties"]),e(p,{as:"h3"},{default:i(()=>[a("TabPanel")]),_:1}),e(c,{properties:t.tabPanelProperties},null,8,["properties"]),e(p,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e($,{celled:""},{default:i(()=>[e(d,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[a("Name")]),_:1}),e(h,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(A,null,{default:i(()=>[(K(!0),oe(we,null,Ke(t.events,w=>(K(),Ve(v,{key:w.name},{default:i(()=>[e(y,null,{default:i(()=>[a($e(w.name),1)]),_:2},1024),e(y,null,{default:i(()=>[a($e(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const ZS=pe(QS,[["render",XS]]),ek=[{path:"/",component:Oh,children:[{path:"/",component:a_},{path:"elements/button",component:h_},{path:"elements/container",component:A_},{path:"elements/divider",component:T_},{path:"elements/emoji",component:D_},{path:"elements/flag",component:L_},{path:"elements/header",component:J_},{path:"elements/icon",component:ib},{path:"elements/image",component:hb},{path:"elements/input",component:yb},{path:"elements/label",component:Nb},{path:"elements/list",component:ev},{path:"elements/loader",component:av},{path:"elements/rail",component:uv},{path:"elements/reveal",component:pv},{path:"elements/segment",component:Vv},{path:"elements/step",component:qv},{path:"collections/breadcrumb",component:Gv},{path:"collections/form",component:Kv},{path:"collections/grid",component:e1},{path:"collections/menu",component:u1},{path:"collections/message",component:y1},{path:"collections/table",component:P1},{path:"views/advertisement",component:V1},{path:"views/card",component:vy},{path:"views/comment",component:bC},{path:"views/feed",component:LC},{path:"views/item",component:xw},{path:"views/statistic",component:Vw},{path:"modules/accordion",component:oA},{path:"modules/calendar",component:dA},{path:"modules/checkbox",component:yA},{path:"modules/dimmer",component:AA},{path:"modules/dropdown",component:$A},{path:"modules/embed",component:xA},{path:"modules/modal",component:DA},{path:"modules/popup",component:jA},{path:"modules/progress",component:JA},{path:"modules/rating",component:jS},{path:"modules/sidebar",component:GS},{path:"modules/slider",component:KS},{path:"modules/tab",component:ZS}]}],tk=yh({history:Mg("/vue-fomantic-ui/"),routes:ek});function Uc(t){var l,n,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t))for(l=0;l<t.length;l++)t[l]&&(n=Uc(t[l]))&&(s&&(s+=" "),s+=n);else for(l in t)t[l]&&(s&&(s+=" "),s+=l);return s}function Y(){for(var t,l,n=0,s="";n<arguments.length;)(t=arguments[n++])&&(l=Uc(t))&&(s&&(s+=" "),s+=l);return s}const S=(t,l)=>t?l:"",Ee=(t,l)=>typeof t=="string"?`${t} ${l}`:"",Te=(t,l)=>t===!0?l:t==="below"?`${l} ${t}`:typeof t=="string"?`${t} ${l}`:"",Hi=t=>t==="justified"?"justified":Ee(t,"aligned"),Ft=(t,l)=>typeof t=="number"&&l?`${En(t)} ${l}`:typeof t=="number"&&!l?En(t):typeof t=="string"&&t==="equal"?`${t} width`:"",Gi=(t,l)=>t?`${En(t)} wide ${l}`:"",En=t=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][t-1],xn=B({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,labeled:[Boolean,String],labelPosition:String,icon:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,loading:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.active,"active"),S(t.basic,"basic"),S(t.circular,"circular"),S(t.compact,"compact"),S(t.disabled,"disabled"),S(t.facebook,"facebook"),S(t.fluid,"fluid"),S(t.google,"google"),S(t.icon,"icon"),S(t.linkedin,"linkedin"),S(t.instagram,"instagram"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.primary,"primary"),S(t.secondary,"secondary"),S(t.telegram,"telegram"),S(t.tertiary,"tertiary"),S(t.toggle,"toggle"),S(t.twitter,"twitter"),S(t.vk,"vk"),S(t.whatsapp,"whatsapp"),S(t.youtube,"youtube"),Ee(t.attached,"attached"),Ee(t.floated,"floated"),Ee(t.labelPosition,"labeled"),Te(t.animated,"animated"),Te(t.labeled,"labeled"),"button"))}},render(){let t=this.as||"div";return e(t,{class:this.computedClass,role:"button"},{default:()=>{var l,n;return[(n=(l=this.$slots).default)==null?void 0:n.call(l)]}})}}),Do=B({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.hidden,"hidden"),S(t.visible,"visible"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Fo=B({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.basic,"basic"),S(t.icon,"icon"),S(t.labeled,"labeled"),S(t.vertical,"vertical"),Ee(t.attached,"attached"),Ft(t.widths,""),"buttons"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ik={install(t){t.component(xn.name,xn),t.component(Do.name,Do),t.component(Fo.name,Fo)}},Vo=B({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(t){return{computedClass:D(()=>Y("ui",S(t.fluid,"fluid"),S(t.text,"text"),Hi(t.textAlign),"container"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),lk={install(t){t.component(Vo.name,Vo)}},Io=B({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:D(()=>Y("ui",S(t.clearing,"clearing"),S(t.fitted,"fitted"),S(t.hidden,"hidden"),S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.section,"section"),S(t.vertical,"vertical"),Ee(t.textAlign,"aligned"),"divider"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ak={install(t){t.component(Io.name,Io)}},Lo=B({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(t){return{computedClass:D(()=>Y(t.size,S(t.disabled,"disabled"),S(t.link,"link"),S(t.loading,"loading")))}},render(){return this.computedClass?U("em",{class:this.computedClass,"data-emoji":this.$props.name}):U("em",{"data-emoji":this.$props.name})}}),nk={install(t){t.component(Lo.name,Lo)}},Oo=B({name:"SuiFlag",props:{name:String},setup(t){return{computedClass:D(()=>Y(t.name,"flag"))}},render(){return U("i",{class:this.computedClass})}}),sk={install(t){t.component(Oo.name,Oo)}},la=B({name:"SuiHeaderSubheader",props:{as:String},setup(t){return{elementType:t.as||"div"}},render(){var t,l;return U(this.elementType,{class:"sub header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ho=B({name:"SuiHeader",components:{HeaderSubheader:la},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(t){const l=t.as||"div",n=D(()=>Y("ui",t.color,t.size,S(t.block,"block"),S(t.disabled,"disabled"),S(t.dividing,"dividing"),S(t.icon,"icon"),S(t.image,"image"),S(t.inverted,"inverted"),S(t.sub,"sub"),Ee(t.floated,"floated"),Te(t.attached,"attached"),Hi(t.textAlign),"header"));return{elementType:l,computedClass:n}},render(){var t,l;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(U(la,{},this.subheader)),n.length>0?U(this.elementType,{class:this.computedClass},n):U(this.elementType,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),jo=B({name:"SuiHeaderContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ok={install(t){t.component(Ho.name,Ho),t.component(jo.name,jo),t.component(la.name,la)}},gi=B({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(t){return{computedClass:D(()=>Y(t.color,t.name,t.size,S(t.bordered,"bordered"),S(t.circular,"circular"),S(t.disabled,"disabled"),S(t.fitted,"fitted"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.loading,"loading"),Ee(t.flipped,"flipped"),Ee(t.rotated,"rotated"),Te(t.corner,"corner"),"icon"))}},render(){let t=this.$props.as||"i";return U(t,{"aria-hidden":!0,class:this.computedClass})}}),qo=B({name:"SuiIconGroup",props:{as:String,size:String},setup(t){return{computedClass:D(()=>Y(t.size,"icons"))}},render(){var t,l;let n=this.$props.as||"i";return U(n,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),uk={install(t){t.component(gi.name,gi),t.component(qo.name,qo)}},Jc=["top","middle","bottom"],rk={verticalAlign:{type:String,validator:t=>Jc.includes(t)}};function dk(t){return{verticalAlignClass:D(()=>t.verticalAlign&&Jc.includes(t.verticalAlign)?`${t.verticalAlign} aligned`:null)}}const ck=["left","right"],mk={floated:{type:String,validator:t=>ck.includes(t)}};function pk(t){return{floatedClass:D(()=>t.floated&&(t.floated==="left"||t.floated==="right")?`${t.floated} floated`:null)}}const Vi=B({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(t,{slots:l}){const n=D(()=>Y("ui",t.size,t.color,S(t.basic,"basic"),S(t.circular,"circular"),S(t.empty,"empty"),S(t.floating,"floating"),S(t.horizontal,"horizontal"),S(t.image,"image"),S(t.inverted,"inverted"),S(t.prompt,"prompt"),S(t.tag,"tag"),Ee(t.attached,"attached"),Ee(t.corner,"corner"),Te(t.pointing,"pointing"),Te(t.ribbon,"ribbon"),"label"));let s=t.as||"div";return t.icon?()=>U(s,{class:n.value},U(gi,{name:t.icon})):()=>{var r;return U(s,{class:n.value},(r=l.default)==null?void 0:r.call(l))}}}),Uo=B({name:"SuiLabelDetail",render(){var t,l;return e("div",{class:"detail"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Jo=B({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(t,{slots:l}){const n=D(()=>Y("ui",t.color,t.size,S(t.basic,"basic"),S(t.circular,"circular"),S(t.tag,"tag"),"labels"));return()=>{var s;return U("div",{class:n.value},(s=l.default)==null?void 0:s.call(l))}}}),fk={install(t){t.component(Vi.name,Vi),t.component(Uo.name,Uo),t.component(Jo.name,Jo)}},aa=B({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...rk,...mk},setup(t,{slots:l}){const{verticalAlignClass:n}=dk(t),{floatedClass:s}=pk(t),r=D(()=>Y("ui",t.size,n.value,s.value,S(t.avatar,"avatar"),S(t.bordered,"bordered"),S(t.centered,"centered"),S(t.circular,"circular"),S(t.disabled,"disabled"),S(t.fluid,"fluid"),S(t.hidden,"hidden"),S(t.inline,"inline"),S(t.rounded,"rounded"),Te(t.spaced,"spaced"),"image"));if(t.as==="a"||t.as==="router-link"){let m=t.as;return t.as==="router-link"&&(m=_(t.as)),()=>{var f;return U(m,{class:r.value,href:t.href,target:t.target&&t.target},U("img",{src:t.src},(f=l.default)==null?void 0:f.call(l)))}}return t.wrapped?()=>{var m;return U("div",{class:r.value},U("img",{src:t.src},(m=l.default)==null?void 0:m.call(l)))}:t.label?()=>U("div",{class:r.value},[U("img",{src:t.src}),U(Vi,{...t.label})]):()=>e("img",{class:r.value,src:t.src},null)}}),Go=B({name:"SuiImageGroup",props:{size:String},setup(t,{slots:l}){const n=D(()=>Y("ui",t.size,"images"));return()=>{var s;return U("div",{class:n.value},(s=l.default)==null?void 0:s.call(l))}}}),gk={install(t){t.component(aa.name,aa),t.component(Go.name,Go)}},Yo=B({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(t,{emit:l}){const n=D(()=>typeof t.icon=="string"||t.loading),s=D(()=>!!t.label||t.labeled),r=D(()=>Y("ui",t.size,t.action&&"action",S(t.disabled,"disabled"),S(t.error,"error"),S(t.fluid,"fluid"),S(t.focus,"focus"),t.iconPosition,S(n.value,"icon"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.transparent,"transparent"),S(s.value,"labeled"),"input")),m=f=>l("update:modelValue",f.target.value);return()=>e("div",{class:r.value},[t.label&&e(Vi,null,{default:()=>[t.label]}),e("input",{type:t.type||"text",placeholder:t.placeholder,value:t.modelValue,onInput:f=>m(f)},null),n.value&&e(gi,{name:t.icon||"spinner"},null),t.action&&e(xn,null,{default:()=>[t.action]})])}}),hk={install(t){t.component(Yo.name,Yo)}},Wo=B({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(t,{slots:l}){const n=D(()=>Y("ui",S(t.animated,"animated"),S(t.bulleted,"bulleted"),S(t.celled,"celled"),S(t.divided,"divided"),S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.ordered,"ordered"),S(t.relaxed,"relaxed"),S(t.selection,"selection"),Ee(t.verticalAlign,"aligned"),Ee(t.floated,"floated"),"list"));let s=t.as||"div";return()=>{var r;return U(s,{class:n.value},(r=l.default)==null?void 0:r.call(l))}}}),Ko=B({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(t,{slots:l}){let n=t.as||"div";const s=D(()=>Y(S(t.active,"active"),S(t.disabled,"disabled"),"item"));return()=>{var r;return U(n,{class:s.value},(r=l.default)==null?void 0:r.call(l))}}}),Qo=B({name:"SuiListIcon",components:{Icon:gi},setup(t,{slots:l}){return()=>{var n;return U(_(gi.name),{...t},(n=l.default)==null?void 0:n.call(l))}}}),Xo=B({name:"SuiListContent",props:{verticalAlign:String},setup(t){return{computedClass:D(()=>Y(Ee(t.verticalAlign,"aligned"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Zo=B({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return U(t.as,{class:"header"},(n=l.default)==null?void 0:n.call(l))}}}),eu=B({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return U(t.as,{class:"description"},(n=l.default)==null?void 0:n.call(l))}}}),tu=B({name:"SuiListList",render(){var t,l;return e("div",{class:"list"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),_k={install(t){t.component(Wo.name,Wo),t.component(Ko.name,Ko),t.component(Qo.name,Qo),t.component(Xo.name,Xo),t.component(Zo.name,Zo),t.component(eu.name,eu),t.component(tu.name,tu)}},iu=B({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(t,{slots:l}){return{computedClass:D(()=>{var n;return Y("ui",t.color,t.size,S(t.active,"active"),S(t.disabled,"disabled"),S(t.fast,"fast"),S(t.indeterminate,"indeterminate"),S(t.inverted,"inverted"),S(t.slow,"slow"),S(t.text||!!((n=l.default)!=null&&n.call(l)),"text"),Te(t.inline,"inline"),"loader")})}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),bk={install(t){t.component(iu.name,iu)}},lu=B({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(t){return{computedClass:D(()=>Y("ui",t.position,t.size,S(t.attached,"attached"),S(t.dividing,"dividing"),S(t.internal,"internal"),Te(t.close,"close"),"rail"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),vk={install(t){t.component(lu.name,lu)}},au=B({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.animated,S(t.active,"active"),S(t.disabled,"disabled"),S(t.instant,"instant"),"reveal"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),nu=B({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(t){return{computedClass:D(()=>Y("ui",S(t.visible,"visible"),S(t.hidden,"hidden"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),yk={install(t){t.component(au.name,au),t.component(nu.name,nu)}},na=B({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.basic,"basic"),S(t.circular,"circular"),S(t.clearing,"clearing"),S(t.compact,"compact"),S(t.disabled,"disabled"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.piled,"piled"),S(t.placeholder,"placeholder"),S(t.raised,"raised"),S(t.secondary,"secondary"),S(t.stacked,"stacked"),S(t.tertiary,"tertiary"),S(t.vertical,"vertical"),Ee(t.floated,"floated"),Ee(t.textAlign,"aligned"),Te(t.attached,"attached"),Te(t.fitted,"fitted"),Te(t.padded,"padded"),"segment"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),su=B({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.compact,"compact"),S(t.horizontal,"horizontal"),S(t.piled,"piled"),S(t.raised,"raised"),S(t.stacked,"stacked"),"segments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ou=B({name:"SuiSegmentInline",render(){var t,l;return e("div",{class:"inline"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ck={install(t){t.component(na.name,na),t.component(su.name,su),t.component(ou.name,ou)}},uu=B({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.active,"active"),S(t.completed,"completed"),S(t.disabled,"disabled"),S(t.fluid,"fluid"),S(t.link,"link"),S(t.vertical,"vertical"),"step"))}},render(){var t,l,n,s;return this.href?e("a",{class:this.computedClass,href:this.href},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("div",{class:this.computedClass},[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),wk=["one","two","three","four","five","six","seven","eight"],ru=B({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(t){const{widths:l}=t;return{computedClass:D(()=>Y("ui",l&&wk[l-1],t.size,S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.ordered,"ordered"),S(t.unstackable,"unstackable"),S(t.vertical,"vertical"),Ee(t.attached,"attached"),Ee(t.stackable,"stackable"),"steps"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),du=B({name:"SuiStepContent",render(){var t,l;return e("div",{class:"content"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),cu=B({name:"SuiStepTitle",render(){var t,l;return e("div",{class:"title"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),mu=B({name:"SuiStepDescription",render(){var t,l;return e("div",{class:"description"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ak={install(t){t.component(uu.name,uu),t.component(ru.name,ru),t.component(du.name,du),t.component(cu.name,cu),t.component(mu.name,mu)}},Sk=Object.freeze(Object.defineProperty({__proto__:null,Button:ik,Container:lk,Divider:ak,Emoji:nk,Flag:sk,Header:ok,Icon:uk,Image:gk,Input:hk,Label:fk,List:_k,Loader:bk,Rail:vk,Reveal:yk,Segment:Ck,Step:Ak},Symbol.toStringTag,{value:"Module"})),Bn=B({name:"SuiBreadcrumbDivider",props:{icon:String},setup(t){return{computedClass:D(()=>Y(t.icon,"icon","divider"))}},render(){var t,l;return this.icon?e("i",{"aria-hidden":"true",class:this.computedClass},null):e("div",{class:"divider"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Rn=B({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(t){const l=D(()=>Y(S(t.active,"active"),"section")),n=t.link||!!t.href;return{computedClass:l,isLink:n}},render(){let t="div";this.isLink?t="a":this.to&&(t=_("router-link"));const l={href:this.href,to:this.to};return e(t,Sl({class:this.computedClass},l),{default:()=>{var n,s;return[(s=(n=this.$slots).default)==null?void 0:s.call(n)]}})}}),pu=B({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.inverted,"inverted"),"breadcrumb"))}},render(){var t,l;const n=()=>{var s;return(s=this.sections)==null?void 0:s.map((r,m)=>{const f={active:r.active,href:r.href,link:r.link,to:r.to};return e(we,null,[e(Rn,f,{default:()=>[r.content]}),this.sections.length!==m+1&&e(Bn,{icon:this.icon},{default:()=>[a(" / ")]})])})};return e("div",{class:this.computedClass},[((l=(t=this.$slots).default)==null?void 0:l.call(t))||n()])}}),kk={install(t){t.component(pu.name,pu),t.component(Bn.name,Bn),t.component(Rn.name,Rn)}},fu=B({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.error,"error"),S(t.inverted,"inverted"),S(t.loading,"loading"),S(t.reply,"reply"),S(t.success,"success"),S(t.unstackable,"unstackable"),S(t.warning,"warning"),"form"))}},render(){var t,l;return e("form",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),gu=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function $k(t){return{widthClass:D(()=>Number(t.width)>0?`${gu[Number(t.width)-1]} wide`:typeof t.width=="string"||gu.includes(t.width)?`${t.width} wide`:null)}}const hu=B({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(t,{emit:l}){const{widthClass:n}=$k(t),s=D(()=>Y(S(t.disabled,"disabled"),S(t.error,"error"),S(t.inline,"inline"),S(t.required,"required"),n.value,"field")),r=t.type||"text";return{computedClass:s,inputType:r,onInput:m=>l("update:modelValue",m.target.value)}},render(){var t,l;return this.label?e("div",{class:this.computedClass},[e("label",null,[this.label]),e("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),_u=B({name:"SuiFormGroup",props:{widths:String},setup(t){return{computedClass:D(()=>Y(Ee(t.widths,"width"),"fields"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),bu=B({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&e("div",{class:"field"},[e("label",null,[this.label]),e("textarea",{placeholder:this.placeholder},null)]),e("div",{class:"field"},[e("textarea",{placeholder:this.placeholder},null)])}}),Tk={install(t){t.component(fu.name,fu),t.component(hu.name,hu),t.component(_u.name,_u),t.component(bu.name,bu)}},vu=B({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(t){return{computedClass:D(()=>Y("ui",t.container&&"container",S(t.centered,"centered"),S(t.compact,"compact"),S(t.doubling,"doubling"),S(t.inverted,"inverted"),S(t.stackable,"stackable"),Ee(t.reversed,"reversed"),Ee(t.verticalAlign,"aligned"),Te(t.celled,"celled"),Te(t.divided,"divided"),Te(t.padded,"padded"),Te(t.relaxed,"relaxed"),Hi(t.textAlign),Ft(t.columns,"column"),"grid"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),yu=B({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(t){return{computedClass:D(()=>Y(t.color,Ee(t.floated,"floated"),Ee(t.only,"only"),Hi(t.textAlign),Ft(t.width,"wide"),Gi(t.mobile,"mobile"),Gi(t.tablet,"tablet"),Gi(t.computer,"computer"),Gi(t.largeScreen,"large screen"),Gi(t.widescreen,"widescreen"),"column"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Cu=B({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(t){return{computedClass:D(()=>Y(t.color,S(t.centered,"centered"),S(t.stretched,"stretched"),Ee(t.only,"only"),Ft(t.columns,"column"),Hi(t.textAlign),"row"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ek={install(t){t.component(vu.name,vu),t.component(yu.name,yu),t.component(Cu.name,Cu)}},wu=B({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.borderless,"borderless"),S(t.compact,"compact"),S(t.fixed,"fixed"),S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.pagination,"pagination"),S(t.pointing,"pointing"),S(t.secondary,"secondary"),S(t.stackable,"stackable"),S(t.text,"text"),S(t.vertical,"vertical"),Te(t.attached,"attached"),Te(t.floated,"floated"),Te(t.icon,"icon"),Te(t.tabular,"tabular"),Ft(t.widths,"item"),"menu"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Au=B({name:"SuiMenuHeader",props:{as:String,content:String},setup(t,{slots:l}){let n=t.as||"div";return()=>e(n,{class:"header"},{default:()=>{var s;return[t.content||((s=l.default)==null?void 0:s.call(l))]}})}}),Su=B({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(t,{slots:l}){let n=t.as||"a";t.header&&(n="div"),t.as==="router-link"&&(n=_(t.as));const s=D(()=>Y(t.color,t.position,S(t.action,"action"),S(t.active,"active"),S(t.browse,"browse"),S(t.disabled,"disabled"),S(t.header,"header"),S(t.link,"link"),Te(t.fitted,"fitted"),"item"));return()=>e(n,{class:s.value},{default:()=>{var r;return[t.name||((r=l.default)==null?void 0:r.call(l))]}})}}),ku=B({name:"SuiMenuMenu",props:{position:String},setup(t){const{position:l}=t;return{computedClass:D(()=>Y(l,"menu"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),xk={install(t){t.component(wu.name,wu),t.component(Au.name,Au),t.component(Su.name,Su),t.component(ku.name,ku)}},$u=B({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.compact,"compact"),S(t.error,"error"),S(t.floating,"floating"),S(t.hidden,"hidden"),S(t.icon,"icon"),S(t.info,"info"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.success,"success"),S(t.visible,"visible"),S(t.warning,"warning"),Te(t.attached,"attached"),"message"))}},render(){var t,l;return e("div",{class:this.computedClass},[(this.header||this.content)&&e(zn,null,{default:()=>[e(Pn,null,{default:()=>[this.header]}),e("p",null,[this.content])]}),(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),zn=B({name:"SuiMessageContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Pn=B({name:"SuiMessageHeader",render(){var t,l;return U("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Tu=B({name:"SuiMessageItem",render(){var t,l;return U("li",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Eu=B({name:"SuiMessageList",render(){var t,l;return U("ul",{class:"list"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Bk={install(t){t.component($u.name,$u),t.component(zn.name,zn),t.component(Pn.name,Pn),t.component(Tu.name,Tu),t.component(Eu.name,Eu)}},xu=B({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,t.size,S(t.celled,"celled"),S(t.collapsing,"collapsing"),S(t.definition,"definition"),S(t.fixed,"fixed"),S(t.inverted,"inverted"),S(t.selectable,"selectable"),S(t.singleLine,"single line"),S(t.stackable,"stackable"),S(t.striped,"striped"),S(t.structured,"structured"),S(t.unstackable,"unstackable"),Te(t.attached,"attached"),Te(t.basic,"basic"),Te(t.compact,"compact"),Te(t.padded,"padded"),Ft(t.columns,"column"),"table"))}},render(){var t,l;return e("table",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Bu=B({name:"SuiTableBody",render(){var t,l;return U("tbody",{},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ru=B({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:D(()=>Y(t.color,S(t.active,"active"),S(t.collapsing,"collapsing"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.selectable,"selectable"),S(t.singleLine,"single line"),S(t.warning,"warning"),Ee(t.verticalAlign,"aligned"),Ee(t.marked,"marked"),Hi(t.textAlign)))}},render(){var t,l,n,s;return this.computedClass?e("td",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("td",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),zu=B({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(t){const{fullWidth:l}=t;return{computedClass:D(()=>Y(S(l,"full-width")))}},render(){var t,l,n,s;return this.computedClass?U("tfoot",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("tfoot",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),Pu=B({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.fullWidth,"full-width")))}},render(){var t,l,n,s;return this.computedClass?U("thead",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("thead",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),Mu=B({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(t){return{computedClass:D(()=>Y(S(t.singleLine,"single line"),Ee(t.textAlign,"aligned"),Ft(t.width,"wide")))}},render(){var t,l,n,s;return this.computedClass?e("th",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("th",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Nu=B({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:D(()=>Y(t.color,S(t.active,"active"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.negative,"negative"),S(t.positive,"positive"),S(t.warning,"warning"),Ee(t.textAlign,"aligned"),Ee(t.verticalAlign,"aligned")))}},render(){var t,l,n,s;return this.computedClass?e("tr",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("tr",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Rk={install(t){t.component(xu.name,xu),t.component(Bu.name,Bu),t.component(Ru.name,Ru),t.component(zu.name,zu),t.component(Pu.name,Pu),t.component(Mu.name,Mu),t.component(Nu.name,Nu)}},zk=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:kk,Form:Tk,Grid:Ek,Menu:xk,Message:Bk,Table:Rk},Symbol.toStringTag,{value:"Module"})),Du=B({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(t){return{computedClass:D(()=>Y("ui",t.unit,S(t.centered,"centered"),S(!!t.test,"test"),"ad"))}},render(){var t,l,n,s;return this.$props.test?U("div",{class:this.computedClass,"data-text":this.$props.test},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),Pk={install(t){t.component(Du.name,Du)}},Fu=B({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.color,S(t.centered,"centered"),S(t.fluid,"fluid"),S(t.horizontal,"horizontal"),S(t.link,"link"),S(t.raised,"raised"),"card"))}},render(){var t,l,n,s;return this.$props.href||this.$props.link?U("a",{class:this.computedClass,href:this.$slots.href},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),Vu=B({name:"SuiCardContent",props:{extra:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.extra,"extra"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Iu=B({name:"SuiCardDescription",props:{textAlign:String},setup(t){return{computedClass:D(()=>Y(Ee(t.textAlign,"aligned"),"description"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Lu=B({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(t){return{computedClass:D(()=>Y("ui",S(t.centered,"centered"),S(t.doubling,"doubling"),S(t.inverted,"inverted"),S(t.stackable,"stackable"),Ft(t.itemsPerRow,""),"cards"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ou=B({name:"SuiCardHeader",props:{textAlign:String},setup(t){return{computedClass:D(()=>Y(Ee(t.textAlign,"aligned"),"header"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Hu=B({name:"SuiCardMeta",render(){var t,l;return U("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Mk={install(t){t.component(Fu.name,Fu),t.component(Vu.name,Vu),t.component(Iu.name,Iu),t.component(Lu.name,Lu),t.component(Ou.name,Ou),t.component(Hu.name,Hu)}},ju=B({name:"SuiComment",render(){var t,l;return U("div",{class:"comment"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),qu=B({name:"SuiCommentAction",props:{active:Boolean},setup(t){const{active:l}=t;return{computedClass:D(()=>Y(S(l,"active")))}},render(){var t,l,n,s;return this.computedClass?U("a",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("a",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),Uu=B({name:"SuiCommentActions",render(){var t,l;return U("div",{class:"actions"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ju=B({name:"SuiCommentAuthor",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return U(n,{class:"author"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Gu=B({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let t=this.$props.as||"div";return U(t,{class:"avatar"},U("img",{src:this.$props.src}))}}),Yu=B({name:"SuiCommentContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Wu=B({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.collapsed,"collapsed"),S(t.inverted,"inverted"),S(t.minimal,"minimal"),S(t.threaded,"threaded"),"comments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ku=B({name:"SuiCommentMetadata",render(){var t,l;return U("div",{class:"metadata"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Qu=B({name:"SuiCommentText",render(){var t,l;return U("div",{class:"text"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Nk={install(t){t.component(ju.name,ju),t.component(qu.name,qu),t.component(Uu.name,Uu),t.component(Ju.name,Ju),t.component(Gu.name,Gu),t.component(Yu.name,Yu),t.component(Wu.name,Wu),t.component(Ku.name,Ku),t.component(Qu.name,Qu)}},Xu=B({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(t){return{computedClass:D(()=>Y("ui",t.size,S(t.inverted,"inverted"),"feed"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Zu=B({name:"SuiFeedContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),er=B({name:"SuiFeedDate",render(){var t,l;return U("div",{class:"date"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),tr=B({name:"SuiFeedEvent",render(){var t,l;return U("div",{class:"event"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ir=B({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(t){const{images:l,text:n}=t;return{computedClass:D(()=>Y(S(l,"images"),S(n,"text"),"extra"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),lr=B({name:"SuiFeedLabel",render(){var t,l;return U("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ar=B({name:"SuiFeedLike",render(){var t,l;return U("a",{class:"like"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),nr=B({name:"SuiFeedMeta",render(){var t,l;return U("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),sr=B({name:"SuiFeedSummary",render(){var t,l;return U("div",{class:"summary"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),or=B({name:"SuiFeedUser",render(){var t,l;return U("a",{class:"user"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Dk={install(t){t.component(Xu.name,Xu),t.component(Zu.name,Zu),t.component(er.name,er),t.component(tr.name,tr),t.component(ir.name,ir),t.component(lr.name,lr),t.component(ar.name,ar),t.component(nr.name,nr),t.component(sr.name,sr),t.component(or.name,or)}},ur=B({name:"SuiItem",render(){var t,l;return U("div",{class:"item"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),rr=B({name:"SuiItemContent",props:{verticalAlign:String},setup(t){const{verticalAlign:l}=t;return{computedClass:D(()=>Y(Ee(l,"aligned"),"content"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),dr=B({name:"SuiItemDescription",render(){var t,l;return U("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),cr=B({name:"SuiItemExtra",render(){var t,l;return U("div",{class:"extra"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),mr=B({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(t){return{computedClass:D(()=>Y("ui",S(t.divided,"divided"),S(t.inverted,"inverted"),S(t.link,"link"),S(t.unstackable,"unstackable"),Te(t.relaxed,"relaxed"),"items"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),pr=B({name:"SuiItemHeader",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return U(n,{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),fr=B({name:"SuiItemImage",props:{size:String},setup(t){return{computedClass:D(()=>Y(t.size,"image"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),gr=B({name:"SuiItemMeta",render(){var t,l;return U("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Fk={install(t){t.component(ur.name,ur),t.component(rr.name,rr),t.component(dr.name,dr),t.component(cr.name,cr),t.component(mr.name,mr),t.component(pr.name,pr),t.component(fr.name,fr),t.component(gr.name,gr)}},sa=B({name:"SuiStatisticLabel",props:{content:String},render(){var t,l;return this.$props.content?U("div",{class:"label"},this.$props.content):U("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),oa=B({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.text,"text"),"value"))}},render(){var t,l;return this.$props.content?U("div",{class:this.computedClass},this.$props.content):U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),hr=B({name:"SuiStatistic",components:{StatisticLabel:sa,StatisticValue:oa},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(t){const l=Be("ui",!0);return{computedClass:D(()=>Y(l&&"ui",t.color,t.size,S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),S(t.text,"text"),Te(t.floated,"floated"),"statistic"))}},render(){var t,l,n,s,r,m;let f=[];return this.$props.value&&f.push(U(oa,{content:this.$props.value},(l=(t=this.$slots).default)==null?void 0:l.call(t))),this.$props.label&&f.push(U(sa,{content:this.$props.label},(s=(n=this.$slots).default)==null?void 0:s.call(n))),U("div",{class:this.computedClass},f.length>0?f:(m=(r=this.$slots).default)==null?void 0:m.call(r))}}),_r=B({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(t){return We("ui",!1),{computedClass:D(()=>Y("ui",t.color,t.size,S(t.horizontal,"horizontal"),S(t.inverted,"inverted"),Ft(t.widths,""),"statistics"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Vk={install(t){t.component(hr.name,hr),t.component(_r.name,_r),t.component(sa.name,sa),t.component(oa.name,oa)}},Ik=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:Pk,Card:Mk,Comment:Nk,Feed:Dk,Item:Fk,Statistic:Vk},Symbol.toStringTag,{value:"Module"})),br=B({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(t){const l=t.multiple?I([]):I(-1),n=r=>t.multiple?l.value.includes(r):l.value===r,s=r=>{const m=n(r);t.multiple?m?l.value=l.value.filter(f=>f!==r):l.value.push(r):l.value=m?-1:r};return We("isTabActive",n),We("updateActiveIndex",s),{computedClass:D(()=>Y("ui",S(t.fluid,"fluid"),S(t.inverted,"inverted"),S(t.styled,"styled"),"accordion"))}},render(){var t,l;const n=s=>(s.forEach((r,m)=>{r.props.index=m}),s);return e("div",{class:this.computedClass},[n((l=(t=this.$slots).default)==null?void 0:l.call(t))])}}),vr=B({name:"SuiAccordionAccordion",render(){var t,l;return U("div",{class:"accordion"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Mn=B({name:"SuiAccordionContent",props:{active:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.active,"active"),"content"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),yr=B({name:"SuiAccordionTab",props:{index:Number,title:String},setup(t){const l=Be("isTabActive"),n=Be("updateActiveIndex"),s=D(()=>Y(S(l(t.index),"active"),"title"));return{isTabActive:l,updateActiveIndex:n,titleClass:s}},render(){return e(we,null,[e("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[e(gi,{name:"dropdown"},null),this.title]),e(Mn,{active:this.isTabActive(this.index)},{default:()=>{var t,l;return[(l=(t=this.$slots).default)==null?void 0:l.call(t)]}})])}}),Cr=B({name:"SuiAccordionTitle",props:{active:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.active,"active"),"title"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Lk={install(t){t.component(br.name,br),t.component(vr.name,vr),t.component(Mn.name,Mn),t.component(yr.name,yr),t.component(Cr.name,Cr)}},Ok=(t,l,n)=>{t.clickOutside=s=>{t===s.target||t.contains(s.target)||l.value(s,t)},document.body.addEventListener("click",t.clickOutside)},Hk=(t,l,n)=>{document.body.removeEventListener("click",t.clickOutside)},Cs={mounted:Ok,unmounted:Hk};function jk(t,l={}){const n=I(t.value?"open":"closed"),s=()=>n.value=t.value?"open":"closed";Ze(t,p=>{n.value=p?"opening":"closing"});const r=p=>{p.addEventListener("animationend",s,!0)},m=p=>{p&&p.removeEventListener("animationend",s)},f=D((p="scale")=>{switch(n.value){case"opening":return`animating ${p} in`;case"open":return"visible active";case"closing":return`visible active animating ${p} out`;case"closed":return"hidden"}});return{setupAnimation:r,removeAnimation:m,computeAnimationClass:f}}const qk=B({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(t,{emit:l}){const n=I(!1),s=()=>{t.disabled||(n.value=!0)},r=()=>n.value=!1,m=()=>{t.disabled||l("select-day",t.date)},f=()=>{let o=new Date;return o.getFullYear()===t.date.year&&o.getMonth()===t.date.month&&o.getDate()===t.date.day},p=D(()=>Y("link",S(n.value,"focus"),S(t.active&&!t.disabled,"active"),S(t.disabled,"adjacent disabled"),S(f(),"today")));return{onMouseEnter:s,onMouseLeave:r,onClick:m,computedClass:p}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:ft(this.onClick,["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Uk=B({name:"SuiCalendarDateTable",setup(){const{calendarDays:t,updateSelectMode:l,set:n,add:s,subtract:r,selectedDate:m,setSelectedDate:f,selectType:p,updateVisible:o,formatDate:u}=Be(Xt);return{calendarDays:t,isEqualDay:g=>{if(!m.value)return!1;const c=m.value;return c.getFullYear()===g.year&&c.getMonth()===g.month&&c.getDate()===g.day},onSelectDay:g=>{if(n(g.year,"years"),n(g.month,"months"),n(g.day,"days"),p.value==="date"){let c=new Date(g.year,g.month,g.day);f(c),o(!1);return}l("hour")},updateSelectMode:l,formatDate:u,add:s,subtract:r}},render(){const t=()=>this.calendarDays.map((l,n)=>e("tr",null,[l.map(s=>e(qk,{active:this.isEqualDay(s),date:s,disabled:!s.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[s.day]}))]));return e("table",{class:"ui celled center aligned unstackable table day seven column"},[e("thead",null,[e("tr",null,[e("th",{colspan:7},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"months")},[e("i",{class:"chevron right icon"},null)])])]),e("tr",null,[e("th",null,[a("S")]),e("th",null,[a("M")]),e("th",null,[a("T")]),e("th",null,[a("W")]),e("th",null,[a("T")]),e("th",null,[a("F")]),e("th",null,[a("S")])])]),e("tbody",null,[t()])])}}),me=B({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(t){const l=I(!1),n=()=>l.value=!0,s=()=>l.value=!1,r=D(()=>Y("link",S(t.active,"active"),S(t.today,"today"),S(l.value,"focus")));return{onMouseEnter:n,onMouseLeave:s,computedClass:r}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:ft(()=>this.$emit("click-cell",this.value),["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Jk=B({name:"SuiCalendarMonthTable",setup(){const{state:t,set:l,add:n,subtract:s,selectedDate:r,updateSelectMode:m}=Be(Xt);return{state:t,add:n,subtract:s,updateSelectMode:m,isActive:f=>r.value?t.year===r.value.getFullYear()&&t.month===f:!1,isThisMonth:f=>{let p=new Date;return f===p.getMonth()&&t.year===p.getFullYear()},onClickCell:f=>{l(f,"months"),m("day")}}},render(){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=()=>Array(4).fill(0).map((n,s)=>e("tr",null,[e(me,{value:s*3,active:this.isActive(s*3),today:this.isThisMonth(s*3),onClickCell:this.onClickCell},{default:()=>[t[s*3]]}),e(me,{value:s*3+1,active:this.isActive(s*3+1),today:this.isThisMonth(s*3+1),onClickCell:this.onClickCell},{default:()=>[t[s*3+1]]}),e(me,{value:s*3+2,active:this.isActive(s*3+2),today:this.isThisMonth(s*3+2),onClickCell:this.onClickCell},{default:()=>[t[s*3+2]]})]));return e("table",{class:"ui celled center aligned unstackable table month three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"years")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[l()])])}}),Gk=B({name:"SuiCalendarYearTable",setup(t){const{state:l,set:n,add:s,subtract:r,selectedDate:m,updateSelectMode:f}=Be(Xt),p=()=>s(10,"years"),o=()=>r(10,"years"),u=D(()=>Math.round(l.year/10)*10+1);return{updateSelectMode:f,moveNextTwelveYears:p,movePrevTwelveYears:o,headerStartYear:u,isActive:g=>m.value?g===m.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{n(g,"years"),f("day")}}},render(){return e("table",{class:"ui celled center aligned unstackable table year three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,a(" - "),this.headerStartYear+11]),e("span",{class:"prev link",onClick:this.movePrevTwelveYears},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.moveNextTwelveYears},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),e(me,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),e(me,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),e("tr",null,[e(me,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),e(me,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),e(me,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),e("tr",null,[e(me,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),e(me,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),e(me,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),e("tr",null,[e(me,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),e(me,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),e(me,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),Yk=B({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:t,state:l,set:n,add:s,subtract:r,formatDate:m,selectedDate:f}=Be(Xt);return{updateSelectMode:t,formatDate:m,onPrevClick:()=>r(1,"days"),onNextClick:()=>s(1,"days"),onClickCell:p=>{n(p,"hours"),t("minute")},isActive:p=>{if(!f.value)return!1;let o=f.value.getFullYear(),u=f.value.getMonth(),g=f.value.getDate(),c=f.value.getHours();return l.year===o&&l.month===u&&l.day===g&&p===c}}},render(){return e("table",{class:"ui celled center aligned unstackable table hour four column"},[e("thead",null,[e("tr",null,[e("th",{colspan:4},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:this.onPrevClick},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.onNextClick},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[a("12:00 AM")]}),e(me,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[a("1:00 AM")]}),e(me,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[a("2:00 AM")]}),e(me,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[a("3:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[a("4:00 AM")]}),e(me,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[a("5:00 AM")]}),e(me,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[a("6:00 AM")]}),e(me,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[a("7:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[a("8:00 AM")]}),e(me,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[a("9:00 AM")]}),e(me,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[a("10:00 AM")]}),e(me,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[a("11:00 AM")]})]),e("tr",null,[e(me,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[a("12:00 PM")]}),e(me,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[a("1:00 PM")]}),e(me,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[a("2:00 PM")]}),e(me,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[a("3:00 PM")]})]),e("tr",null,[e(me,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[a("4:00 PM")]}),e(me,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[a("5:00 PM")]}),e(me,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[a("6:00 PM")]}),e(me,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[a("7:00 PM")]})]),e("tr",null,[e(me,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[a("8:00 PM")]}),e(me,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[a("9:00 PM")]}),e(me,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[a("10:00 PM")]}),e(me,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[a("11:00 PM")]})])])])}});function ht(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!kt(t)}const Wk=B({name:"SuiCalendarMinuteTable",setup(){const{state:t,set:l,add:n,subtract:s,formatDate:r,updateSelectMode:m,updateVisible:f,selectedDate:p}=Be(Xt);return{add:n,subtract:s,formatDate:r,updateSelectMode:m,getTimeLabel:o=>{let u=t.hour%12,g=t.hour>12?"PM":"AM",c=o.toString().padStart(2,"0");return t.hour===0?`12:${c} AM`:t.hour===12?`12:${c} PM`:`${u}:${c} ${g}`},onClickCell:o=>{l(o,"minutes"),p.value=new Date(t.year,t.month,t.day,t.hour,t.minute),f(!1)},isActive:o=>{if(!p.value)return!1;let u=p.value.getFullYear(),g=p.value.getMonth(),c=p.value.getDate(),h=p.value.getHours(),v=p.value.getMinutes();return t.year===u&&t.month===g&&t.day===c&&t.hour===h&&o===v}}},render(){let t,l,n,s,r,m,f,p,o,u,g,c;return e("table",{class:"ui celled center aligned unstackable table minute three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:ft(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"days")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(me,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},ht(t=this.getTimeLabel(0))?t:{default:()=>[t]}),e(me,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},ht(l=this.getTimeLabel(5))?l:{default:()=>[l]}),e(me,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},ht(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),e("tr",null,[e(me,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},ht(s=this.getTimeLabel(15))?s:{default:()=>[s]}),e(me,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},ht(r=this.getTimeLabel(20))?r:{default:()=>[r]}),e(me,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},ht(m=this.getTimeLabel(25))?m:{default:()=>[m]})]),e("tr",null,[e(me,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},ht(f=this.getTimeLabel(30))?f:{default:()=>[f]}),e(me,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},ht(p=this.getTimeLabel(35))?p:{default:()=>[p]}),e(me,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},ht(o=this.getTimeLabel(40))?o:{default:()=>[o]})]),e("tr",null,[e(me,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},ht(u=this.getTimeLabel(45))?u:{default:()=>[u]}),e(me,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},ht(g=this.getTimeLabel(50))?g:{default:()=>[g]}),e(me,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},ht(c=this.getTimeLabel(55))?c:{default:()=>[c]})])])])}}),Kk=B({name:"SuiCalendarBody",setup(){const t=I(null),{visible:l,selectMode:n}=Be(Xt),{setupAnimation:s,removeAnimation:r,computeAnimationClass:m}=jk(l);yi(()=>s(t.value)),Ci(()=>r(t.value));const f=D(()=>Y("ui popup calendar","bottom left","transition",m.value));return{rootRef:t,computedClass:f,selectMode:n}},render(){const t=()=>{switch(this.selectMode){case"day":return e(Uk,null,null);case"month":return e(Jk,null,null);case"year":return e(Gk,null,null);case"hour":return e(Yk,null,null);case"minute":return e(Wk,null,null)}};return e("div",{ref:l=>this.rootRef=l,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[t()])}}),Qk=B({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(t){const{visible:l,updateVisible:n,updateSelectMode:s,set:r,state:m,formatCalendarDate:f}=Be(Xt);return{visible:l,formatCalendarDate:f,onClick:()=>{l.value||(s("day"),t.value&&(r(t.value.getFullYear(),"years"),r(t.value.getMonth(),"months"))),n(!l.value)}}},render(){return e("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),Xk=(t,l)=>{let n=new Date;n.setDate(1),n.setMonth(l),n.setFullYear(t);let s=n.getDay();return s>=7?s-7:s},Zk=(t,l)=>{let n,s;return l===0?(n=11,s=t-1):(n=l-1,s=t),32-new Date(s,n,32).getDate()},Qa=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t];function e0(){const t=I(!1),l=(y=!1)=>t.value=y,n=new Date;function s(y){if(!y)return;let A=y.getFullYear(),$=Qa(y.getMonth()),b=y.getDate(),w=y.getHours(),k=y.getMinutes(),T=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let x=k.toString().padStart(2,"0");return`${$} ${b}, ${A} ${w}:${x} ${T}`}const r=I("default"),m=I("day");function f(y){m.value=y}const p=I(null),o=y=>{p.value=y},u=Mt({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),g=(y,A)=>{switch(A){case"years":u.year=y;break;case"months":u.month=y;break;case"days":u.day=y;break;case"hours":u.hour=y;break;case"minutes":u.minute=y}},c=(y,A)=>{let $=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":$.setFullYear($.getFullYear()+y);break;case"months":$.setMonth($.getMonth()+y);break;case"days":$.setDate($.getDate()+y);break;case"hours":$.setHours($.getHours()+y);break}u.year=$.getFullYear(),u.month=$.getMonth(),u.day=$.getDate(),u.hour=$.getHours()},h=(y,A)=>{let $=new Date(u.year,u.month,u.day,u.hour);switch(A){case"years":$.setFullYear($.getFullYear()-y);break;case"months":$.setMonth($.getMonth()-y);break;case"days":$.setDate($.getDate()-y);break;case"hours":$.setHours($.getHours()-y);break}u.year=$.getFullYear(),u.month=$.getMonth(),u.day=$.getDate(),u.hour=$.getHours()},v=(y="default")=>y==="date"?`${Qa(u.month)} ${u.year}`:`${Qa(u.month)} ${u.day}, ${u.year}`,d=D(()=>{let y=u.month,A=u.year;y>11&&(y=y%11-1,A+=1);let $=[],b=Xk(A,y),w=32-new Date(A,y,32).getDate(),k=Zk(A,y),T=1;for(let x=0;x<6;x++){let P=[];if(x===0){for(let z=k-b+1;z<=k;z++){let F=y===0?11:y-1,Z=y===0?A-1:A;P.push({day:z,month:F,year:Z,currentMonth:!1})}let M=7-P.length;for(let z=0;z<M;z++)P.push({day:T,month:y,year:A,currentMonth:!0}),T++}else for(let M=0;M<7;M++){if(T>w){let z=y===11?0:y+1,F=y===11?A+1:A;P.push({day:T-w,month:z,year:F,currentMonth:!1})}else P.push({day:T,month:y,year:A,currentMonth:!0});T++}$.push(P)}return $});return{visible:t,updateVisible:l,calendarDays:d,formatCalendarDate:s,selectMode:m,updateSelectMode:f,selectType:r,selectedDate:p,setSelectedDate:o,state:u,set:g,add:c,subtract:h,formatDate:v}}const Xt=Symbol("useCalendar"),wr=B({name:"SuiCalendar",directives:{clickoutside:Cs},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(t,{emit:l}){const n=e0();We(Xt,n);const{updateVisible:s,selectedDate:r}=n;return Ze(r,m=>{l("update:modelValue",m)}),{updateVisible:s}},render(){return ya(e("div",{class:"ui calendar"},[e("div",{class:"ui input left icon"},[e(Kk,null,null),e("i",{class:"calendar icon"},null),e(Qk,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[va("clickoutside"),()=>this.updateVisible(!1)]])}}),t0={install:t=>{t.component(wr.name,wr)}},Ar=B({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(t,{emit:l}){const n=D(()=>Y("ui",!t.label&&"fitted",S(t.disabled,"disabled"),S(t.indeterminate,"indeterminate"),S(t.radio,"radio"),S(t.readOnly,"read-only"),S(t.slider,"slider"),S(t.toggle,"toggle"),"checkbox")),s=D(()=>Array.isArray(t.modelValue)?t.modelValue.includes(t.value):t.modelValue);return{computedClass:n,checked:s,onClick:r=>{if(t.disabled||t.readOnly)return;let m;t.value?s.value?m=t.modelValue.filter(f=>t.value!==f):m=t.modelValue?[...t.modelValue,t.value]:[t.value]:m=!t.modelValue,l("change",r),l("click",r),l("update:modelValue",m)}}},render(){return e("div",{class:this.computedClass,onClick:this.onClick},[e("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),e("label",null,[this.label])])}}),i0={install(t){t.component(Ar.name,Ar)}},Sr=B({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(t){return{computedClass:D(()=>Y("ui",S(t.active,"active"),S(t.inverted,"inverted"),S(t.page,"page"),S(t.simple,"simple"),Ee(t.verticalAlign,"aligned"),"dimmer"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),kr=B({name:"SuiDimmerDimmable",components:{Segment:na},props:{blurring:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.blurring,"blurring"),"dimmable"))}},render(){var t,l;return U(na,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),l0={install(t){t.component(Sr.name,Sr),t.component(kr.name,kr)}},a0=(t,l)=>t.map(n=>n[l]),n0=B({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(t){return{computedClass:D(()=>Y(S(t.filtered,"filtered"),S(!t.text&&!t.item||Array.isArray(t.item)&&t.item.length===0,"default"),"text"))}},render(){var t,l;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:m,text:f}=this.item;n=e(we,null,[m&&e("i",{class:`${m} flag`},null),f])}else n=this.item;else n=this.text||this.placeholder;const s=typeof this.item=="object"?(t=this.item)==null?void 0:t.image:null,r=typeof this.item=="object"?(l=this.item)==null?void 0:l.label:null;return e(we,null,[e("div",{class:this.computedClass},[s&&e(aa,s,null),r&&e(Vi,r,null),n]),e("i",{class:`${this.icon} icon`},null),this.$props.clearable&&e("i",{class:"remove icon",onClick:ft(()=>this.$emit("remove"),["stop"])},null)])}}),s0=t=>{const l=Mt({visible:!1,animating:!1,direction:"down",multiple:t.multiple});return Ze(()=>l.visible,()=>{l.animating=!0,setTimeout(()=>l.animating=!1,200)}),{state:l,show:()=>!l.animating&&(l.visible=!0),hide:()=>{l.animating||(l.visible=!1)}}};function o0(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!kt(t)}const $r=B({name:"SuiDropdown",directives:{clickoutside:Cs},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(t,{emit:l}){const n=s0(t);We("useDropdown",n);const{state:s,show:r,hide:m}=n,f=D(()=>Y("ui",S(t.button,"button"),S(t.clearable,"clearable"),S(t.compact,"compact"),S(t.floating,"floating"),S(t.fluid,"fluid"),S(!!t.icon,"icon"),S(t.inline,"inline"),S(t.item,"item"),S(t.labeled,"labeled"),S(t.multiple,"multiple"),S(t.search,"search"),S(t.scrolling,"scrolling"),S(t.selection,"selection"),S(t.simple,"simple"),Te(t.pointing,"pointing"),"dropdown",S(s.visible,"active visible"),S(s.direction==="up","upward"))),p=()=>{var A;if(s.visible)return m();(A=h.value)==null||A.focus(),r()},o=()=>{t.search&&h.value&&h.value.focus(),r()},u=()=>m(),g=I(""),c=D(()=>{const A=g.value.toLowerCase();return t.options.filter($=>{const b=typeof $=="object"?$.text:$,w=b.toLowerCase().includes(A);if(!t.multiple)return w;if(Array.isArray(t.modelValue)){const k=typeof $=="object"?a0(t.modelValue,"text").includes(b):t.modelValue.includes(b);return w&&!k}return w})}),h=I(null),v=A=>g.value=A.target.value,d=A=>{var $;if(g.value="",t.search&&(($=h.value)==null||$.focus()),t.multiple){let b=Array.isArray(t.modelValue)?[...t.modelValue,A]:[A];return l("update:modelValue",b)}return l("update:modelValue",A)},y=A=>{if(Array.isArray(t.modelValue)){const $=t.modelValue.findIndex(b=>b===A);if($>-1){let b=Object.assign(t.modelValue);b.splice($,1),l("update:modelValue",b)}}};return We("selection",t.selection),{computedClass:f,onClick:p,openMenu:o,closeMenu:u,filteredText:g,filteredOptions:c,inputRef:h,onInput:v,onSelect:d,removeItem:y}},render(){var t,l;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(f=>typeof f=="object"?e("a",{class:"ui label"},[f.flag&&e("i",{class:`${f.flag} flag`},null),f.text,e("i",{class:"delete icon",onClick:ft(()=>this.removeItem(f),["stop"])},null)]):e("a",{class:"ui label"},[f,e("i",{class:"delete icon",onClick:ft(()=>this.removeItem(f),["stop"])},null)]))},s=()=>this.filteredOptions.filter(f=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(f):!0).map(f=>e(Nn,{item:f,active:this.$props.modelValue&&typeof f=="object"?f.text===this.$props.modelValue.text:f===this.$props.modelValue,text:typeof f=="object"?f.text:f,flag:typeof f=="object"&&Object.keys(f).includes("flag")?f.flag:"",image:f.image,label:f.label,disabled:f.disabled,onSelect:this.onSelect},null)),r=()=>{let f={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return e(n0,Sl(f,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},m=()=>{let f;return e(Dn,{search:this.$props.searchInMenu,onSearch:this.onInput},o0(f=s())?f:{default:()=>[f]})};return ya(e("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&e("input",{ref:f=>this.inputRef=f,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:f=>this.onInput(f)},null),this.search&&this.multiple&&e("span",{class:"sizer"},null),r(),((l=(t=this.$slots).default)==null?void 0:l.call(t))||m()]),[[va("clickoutside"),this.closeMenu]])}}),Nn=B({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(t,{emit:l}){const{state:n,hide:s}=Be("useDropdown");return{computedClass:D(()=>Y(S(t.active,"active"),S(t.disabled,"disabled"),"item")),onClick:()=>{n.multiple||s(),l("select",t.item?t.item:t.text)}}},render(){return e("div",{class:this.computedClass,onClick:ft(this.onClick,["stop"])},[this.flag&&e("i",{class:`${this.flag} flag`},null),this.icon&&e("i",{class:`${this.icon} icon`},null),this.image&&e(aa,this.image,null),this.label&&e(Vi,this.label,null),this.description&&e("span",{class:"description"},[this.description]),this.text])}}),Dn=B({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(t,{emit:l,slots:n}){const{state:s}=Be("useDropdown"),r=I(null),m=D(()=>{let p=()=>s.visible?`animating slide ${s.direction} in visible`:`animating slide ${s.direction} out visible`;return Y("menu","transition",S(s.visible,"visible"),S(!s.visible&&!s.animating,"hidden"),S(s.animating,p()))});Ze(()=>s.visible,p=>{if(!p||!r.value)return;let o=r.value.parentElement;const{top:u,height:g}=o==null?void 0:o.getBoundingClientRect(),c=u-f.value.length*37,h=document.documentElement.clientHeight-u-g-f.value.length*37;s.direction=c>h?"up":"down"});const f=D(()=>{var p;let o=[],u=(p=n.default)==null?void 0:p.call(n);return u&&u.forEach(g=>{g.type.name==="SuiSelectItem"&&o.push(g)}),o});return{container:r,computedClass:m,onSearchInput:p=>l("search",p)}},render(){var t,l,n,s;const r=()=>e(we,null,[e("div",{class:"ui left icon input",onClick:ft(()=>{},["stop"])},[e("input",{type:"text",onInput:m=>this.onSearchInput(m)},null),e("i",{class:"search icon"},null)]),e("div",{class:"ui divider"},null)]);return e("div",{ref:m=>this.container=m,class:this.computedClass},[this.$slots.header&&e("div",{class:"header"},[(l=(t=this.$slots).header)==null?void 0:l.call(t)]),this.$props.search&&r(),(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),u0={install(t){t.component($r.name,$r),t.component(Nn.name,Nn),t.component(Dn.name,Dn)}},Tr=B({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(t){const l=I(t.active),n=()=>{l.value=!l.value},s=()=>t.source==="youtube"?[`//www.youtube.com/embed/${t.id}`,"?autohide=true",`&amp;autoplay=${t.autoplay}`,"&amp;jsapi=false"].join(""):t.url,r=D(()=>Y("ui",t.aspectRatio,S(l.value,"active"),"embed"));return{active:l,getSrc:s,clickHandler:n,computedClass:r}},render(){let t=[U("i",{class:"video play icon"}),U("img",{class:"placeholder",src:this.placeholder})];return this.active&&t.push(U("div",{class:"embed"},U("iframe",{src:this.getSrc()}))),U("div",{class:this.computedClass,onClick:this.clickHandler},t)}}),r0={install(t){t.component(Tr.name,Tr)}};function d0(t){return jn()?(Gr(t),!0):!1}function Gc(t){return typeof t=="function"?t():Wt(t)}const Yc=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const c0=Object.prototype.toString,m0=t=>c0.call(t)==="[object Object]",ql=()=>{},p0=f0();function f0(){var t,l;return Yc&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((l=window==null?void 0:window.navigator)==null?void 0:l.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Xi(t){var l;const n=Gc(t);return(l=n==null?void 0:n.$el)!=null?l:n}const Wc=Yc?window:void 0;function Xa(...t){let l,n,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,r]=t,l=Wc):[l,n,s,r]=t,!l)return ql;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const m=[],f=()=>{m.forEach(g=>g()),m.length=0},p=(g,c,h,v)=>(g.addEventListener(c,h,v),()=>g.removeEventListener(c,h,v)),o=Ze(()=>[Xi(l),Gc(r)],([g,c])=>{if(f(),!g)return;const h=m0(c)?{...c}:c;m.push(...n.flatMap(v=>s.map(d=>p(g,v,d,h))))},{immediate:!0,flush:"post"}),u=()=>{o(),f()};return d0(u),u}let Er=!1;function g0(t,l,n={}){const{window:s=Wc,ignore:r=[],capture:m=!0,detectIframe:f=!1}=n;if(!s)return ql;p0&&!Er&&(Er=!0,Array.from(s.document.body.children).forEach(g=>g.addEventListener("click",ql)),s.document.documentElement.addEventListener("click",ql));let p=!0;const o=g=>r.some(c=>{if(typeof c=="string")return Array.from(s.document.querySelectorAll(c)).some(h=>h===g.target||g.composedPath().includes(h));{const h=Xi(c);return h&&(g.target===h||g.composedPath().includes(h))}}),u=[Xa(s,"click",g=>{const c=Xi(t);if(!(!c||c===g.target||g.composedPath().includes(c))){if(g.detail===0&&(p=!o(g)),!p){p=!0;return}l(g)}},{passive:!0,capture:m}),Xa(s,"pointerdown",g=>{const c=Xi(t);p=!o(g)&&!!(c&&!g.composedPath().includes(c))},{passive:!0}),f&&Xa(s,"blur",g=>{setTimeout(()=>{var c;const h=Xi(t);((c=s.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(h!=null&&h.contains(s.document.activeElement))&&l(g)},0)})].filter(Boolean);return()=>u.forEach(g=>g())}function Kc(t,l="scale"){const n=I(t.modelValue?"open":"closed");return Ze(()=>t.modelValue,s=>{n.value=s?"opening":"closing"}),{animationClasses:D(()=>{switch(n.value){case"opening":return`animating ${l} in`;case"open":return"visible active";case"closing":return`visible active animating ${l} out`;case"closed":return"hidden"}}),isClosed:D(()=>n.value==="closed"),onAnimationEnd:()=>n.value=t.modelValue?"open":"closed"}}const h0=B({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(t){const{animationClasses:l,isClosed:n,onAnimationEnd:s}=Kc(t,"fade"),r=D(()=>Y("ui","page modals dimmer transition",S(t.inverted,"inverted"),l.value)),m=D(()=>({display:n.value?"none !important":"flex !important",animationDuration:"500ms"})),f=D(()=>Y("dimmable","dimmed",S(t.blurring,"blurring")));return Ze(()=>t.modelValue,p=>{if(p){document.body.classList.add(...f.value.split(" "));return}document.body.classList.remove(...f.value.split(" "))}),{className:r,style:m,onAnimationEnd:s}},render(){var t,l;return e("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),xr=B({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(t,{emit:l}){const n=I(),{animationClasses:s,isClosed:r}=Kc(t),m=D(()=>Y("ui",t.size,S(t.basic,"basic"),S(t.overlay,"overlay"),S(t.fullscreen,"fullscreen"),"modal","transition",s.value)),f=D(()=>({display:r.value?"none !important":"block !important",animationDuration:"500ms"})),p=()=>l("update:modelValue",!1);return g0(n,()=>t.closable&&l("update:modelValue",!1)),{computedClass:m,style:f,close:p,modalRef:n}},render(){return e(ms,{to:"body"},{default:()=>[e(h0,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var t,l;return[e("div",{class:this.computedClass,style:this.style,onClick:n=>n.stopPropagation(),ref:n=>this.modalRef=n},[this.closeIcon&&e("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(l=(t=this.$slots).default)==null?void 0:l.call(t)])]}})]})}}),Br=B({name:"SuiModalActions",render(){var t,l;return e("div",{class:"actions"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Rr=B({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(t){return{computedClass:D(()=>Y(S(t.image,"image"),S(t.scrolling,"scrolling"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),zr=B({name:"SuiModalDescription",render(){var t,l;return U("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Pr=B({name:"SuiModalHeader",render(){var t,l;return U("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),_0={install(t){t.component(xr.name,xr),t.component(Br.name,Br),t.component(Rr.name,Rr),t.component(zr.name,zr),t.component(Pr.name,Pr)}},b0=t=>{const l=I(!1),n=an(t,"position"),s=I(null),r=an(t,"trigger"),m=()=>{l.value=!0,Li(()=>p())},f=()=>{l.value=!1},p=()=>{if(!s.value||!r.value)return;let o=0,u=0;const g=s.value,c=r.value.$el;g.style.transform=`translate(${o}px, ${u}px)`;const{top:h,left:v,width:d,height:y}=c.getBoundingClientRect(),A=g.getBoundingClientRect(),{pageXOffset:$,pageYOffset:b}=window;if(n.value.includes("top")?(o=$+v,u=b+h-g.offsetTop-g.offsetHeight):(o=v,u=h+y-A.top),n.value.includes("right")){const w=d-A.width;o=v+w}if(n.value.includes("center")){const w=d/2-A.width/2;o=v+w}n.value==="right center"&&(o=v+d,u=h+y/2-A.top-A.height/2),n.value==="left center"&&(o=v-A.width,u=h+y/2-A.top-A.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${o}px, ${u}px)`};return{show:l,showPopup:m,hidePopup:f,placement:n,popupRef:s,triggerRef:r}},Mr=B({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(t,{slots:l}){const{show:n,showPopup:s,hidePopup:r,popupRef:m,triggerRef:f}=b0(t);as(()=>{var h,v,d;(h=f.value)!=null&&h.$el&&((v=f.value)==null||v.$el.addEventListener("mouseenter",s),(d=f.value)==null||d.$el.addEventListener("mouseleave",r))});const p=I(n.value?"open":"close");D(()=>p.value!=="closed"),Ze(()=>n.value,h=>{p.value=h?"opening":"closing"});const o=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},u=()=>p.value=n.value?"open":"closed";yi(()=>{var h;(h=m.value)==null||h.addEventListener("animationend",u,!0)}),Ci(()=>{var h;(h=m.value)==null||h.removeEventListener("animationend",u)});const g={position:"initial",animationDuration:"200ms"},c=D(()=>Y("ignored ui",t.position,t.size,S(t.basic,"basic"),S(t.flowing,"flowing"),S(t.inverted,"inverted"),Te(t.wide,"wide"),"popup transition",o(p.value,"scale")));return()=>e(ms,{to:"body"},{default:()=>{var h;return[e("div",{ref:m,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[e("div",{class:c.value,style:g},[t.header&&e("div",{class:"header"},[t.header]),e("div",{class:"content"},[t.content?t.content:(h=l.default)==null?void 0:h.call(l)])])])]}})}}),v0={install(t){t.component(Mr.name,Mr)}},Nr=B({name:"SuiProgress",props:{active:Boolean,attached:String,color:String,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean},setup(t){const l=D(()=>Y("ui",t.color,t.size,S(t.active,"active"),S(t.disabled,"disabled"),S(t.error,"error"),S(t.indicating,"indicating"),S(t.inverted,"inverted"),S(t.success,"success"),S(t.warning,"warning"),Ee(t.attached,"attached"),"progress")),n=D(()=>Y(Te(t.progress,"progress")));return()=>e("div",{class:l.value,"data-percent":t.percent},[e("div",{class:"bar",style:`width: ${t.percent}%; transition-duration: 300ms;`},[t.progress&&e("div",{class:n.value},[t.percent,a("%")])]),t.label&&e("div",{class:"label"},[t.label])])}}),y0={install(t){t.component(Nr.name,Nr)}},C0=B({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(t){const l=Be("rating",I(0)),n=Be("updateRating"),s=Be("selectedIndex",I(0)),r=Be("updateSelectedIndex"),m=Be("clearable",!1),f=Be("disabled",!1),p=()=>{if(!f){if(m&&t.index===l.value){n(0),r(0);return}n(t.index)}},o=()=>{f||r(t.index)},u=D(()=>t.index<=l.value),g=D(()=>t.index<=s.value),c=D(()=>Y(t.icon,S(u.value,"active"),S(g.value,"selected"),"icon"));return()=>e("i",{class:c.value,onClick:()=>p(),onMouseenter:()=>o()},null)}}),Dr=B({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(t,{emit:l}){const n=I(t.modelValue||t.defaultRating),s=I(!1),r=I(0),m=g=>{n.value=g,l("update:modelValue",g),l("change",g)},f=g=>r.value=g,p=()=>{t.disabled||(s.value=!0)},o=()=>{t.disabled||(s.value=!1,f(0))},u=D(()=>Y("ui",t.color,t.icon,t.size,S(t.disabled,"disabled"),"rating",S(s.value,"selected")));return We("rating",n),We("updateRating",m),We("selectedIndex",r),We("updateSelectedIndex",f),We("clearable",t.clearable),We("disabled",t.disabled),()=>e("div",{class:u.value,onMouseenter:()=>p(),onMouseleave:()=>o()},[[...Array(t.maxRating)].map((g,c)=>e(C0,{icon:t.icon,index:c+1},null))])}}),w0={install(t){t.component(Dr.name,Dr)}},Fr=B({name:"SuiSearch",props:{icon:String,placeholder:String},setup(t){return()=>e("div",{class:"ui search"},[e("div",{class:"ui icon input"},[e("input",{type:"text",class:"prompt",placeholder:t.placeholder},null),e("i",{class:"search icon"},null)]),e("div",{class:"results"},null)])}}),A0={install(t){t.component(Fr.name,Fr)}},Vr=B({name:"SuiSidebar",directives:{clickoutside:Cs},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(t,{emit:l}){const n=Mt({animating:!1}),s=D(()=>{const r=t.direction==="right"||t.direction==="left";return Y("ui","sidebar",t.direction,t.animation,S(t.inverted,"inverted"),S(t.visible,"visible"),S(n.animating,"animating"),S(r,"vertical"),Te(t.icon,"icon"),"menu")});return Ze(()=>t.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),t.dimmed){const r=document.querySelector(".pusher");r&&r.classList.toggle("dimmed")}}),{computedClass:s,onClickPusher:r=>{const m=r.path||r.composedPath&&r.composedPath();m&&m.find(f=>f.classList&&f.classList.contains("pusher"))&&t.visible&&l("update:visible",!1)}}},render(){var t,l;return ya(e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]),[[va("clickoutside"),this.onClickPusher]])}}),S0={install:t=>{t.component(Vr.name,Vr)}};class Za{static getWindowScrollTop(){let{documentElement:l}=document;return(window.pageYOffset||l.scrollTop)-(l.clientTop||0)}static getWindowScrollLeft(){let{documentElement:l}=document;return(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}static hasClass(l,n){return l.classList.contains(n)}}const Ir=B({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(t,{emit:l}){const n=D(()=>Y("ui",t.color,t.size,S(t.disabled,"disabled"),S(t.inverted,"inverted"),S(t.reversed,"reversed"),S(t.vertical,"vertical"),Te(t.labeled,"labeled"),"slider")),s=()=>100*(t.modelValue[0]-t.min)/(t.max-t.min),r=()=>100*(t.modelValue[1]-t.min)/(t.max-t.min),m=D(()=>{if(t.range)return t.reversed&&!t.vertical?{right:s()+"%",width:r()-s()+"%"}:t.vertical?t.reversed?{bottom:s()+"%",height:r()-s()+"%"}:{top:s()+"%",height:r()-s()+"%"}:{left:s()+"%",width:r()-s()+"%"};let V=t.modelValue>t.max?t.max:t.modelValue;return t.reversed?t.vertical?{bottom:"0%",top:`${100-(V-t.min)/(t.max-t.min)*100}%`}:{right:"0%",left:`${100-(V-t.min)/(t.max-t.min)*100}%`}:t.vertical?{top:"0%",bottom:`${100-(V-t.min)/(t.max-t.min)*100}%`}:{left:"0%",right:`${100-(V-t.min)/(t.max-t.min)*100}%`}}),f=D(()=>{let V=t.range?t.modelValue[0]:t.modelValue>t.max?t.max:t.modelValue;return!t.reversed&&t.vertical?{top:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:t.reversed&&t.vertical?{top:"auto",bottom:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.reversed&&!t.vertical?{left:"auto",right:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{left:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),p=D(()=>{let V=t.modelValue[1]>t.max?t.max:t.modelValue[1];return t.reversed&&!t.vertical?{left:"auto",right:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.vertical?t.reversed?{top:"auto",bottom:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{top:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(V-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),o=D(()=>t.labels?t.labels:[...Array(t.max-t.min+1)].map((V,O)=>O*t.step+t.min)),u=()=>{var V,O;let ae=1,W=g(),Ae=(t.vertical?(V=h.value)==null?void 0:V.clientHeight:(O=h.value)==null?void 0:O.clientWidth)||0,Le=1;if(Ae>0)for(;Ae/W*Le<100;)W%Le||(ae=Le),Le+=1;return ae},g=()=>Math.round((t.max-t.min)/t.step),c=I(null),h=I(null),v=I(0),d=I(0),y=I(0),A=I(0),$=()=>{if(!c.value)return;let V=c.value.getBoundingClientRect();v.value=V.left+Za.getWindowScrollLeft(),d.value=V.top+Za.getWindowScrollTop(),y.value=c.value.offsetWidth,A.value=c.value.offsetHeight},b=I(0),w=V=>{let{pageX:O,pageY:ae}=V.touches?V.touches[0]:V,W,Ae;t.vertical?W=(d.value+A.value-ae)*100/A.value:W=(O-v.value)*100/y.value,Ae=(t.max-t.min)*(W/100)+t.min;const Le=t.range?t.modelValue[b.value]:t.modelValue||0;Ae=Le+Math.round(Ae/t.step-Le/t.step)*t.step,t.reversed&&(Ae=t.max-Ae+t.min),t.vertical&&(Ae=t.max-Ae+t.min),k(Ae)},k=V=>{let O=V,ae;if(t.range)if(ae=t.modelValue?[...t.modelValue]:[],b.value===0){let W=t.modelValue?t.modelValue[1]:t.max;O<t.min?O=t.min:O>W&&(O=W),ae[0]=O,ae[1]=ae[1]||t.max}else{let W=t.modelValue?t.modelValue[0]:t.min;O>t.max?O=t.max:O<W&&(O=W),ae[0]=ae[0]||t.min,ae[1]=O}else O<t.min&&(O=t.min),O>t.max&&(O=t.max),ae=O;l("update:modelValue",ae),l("change",ae)},T=I(!1),x=V=>T.value=V,P=(V,O=0)=>{x(!0),$(),b.value=O,V.preventDefault()},M=V=>{T.value&&(x(!1),document.removeEventListener("mousemove",z),l("slideend",{event:V,value:t.modelValue}))},z=V=>{T.value&&(w(V),V==null||V.preventDefault())},F=(V,O=0)=>{t.disabled||(P(V,O),document.addEventListener("mousemove",z),document.addEventListener("mouseup",M),V.preventDefault())},Z=(V,O=0)=>{switch(b.value=O,V.code){case"ArrowUp":t.vertical&&(t.reversed?H():re()),V.preventDefault();break;case"ArrowDown":t.vertical&&(t.reversed?re():H()),V.preventDefault();break;case"ArrowRight":t.reversed?re():H(),V.preventDefault();break;case"ArrowLeft":t.reversed?H():re(),V.preventDefault();break}},H=()=>{let V=0;t.range?V=t.modelValue[b.value]+t.step:V=t.modelValue+t.step,k(V)},re=()=>{let V=0;t.range?V=t.modelValue[b.value]-t.step:V=t.modelValue-t.step,k(V)},ye=V=>{if(!t.disabled&&!Za.hasClass(V.target,"thumb")){if(t.range){let O=(t.vertical?V.offsetY/V.target.clientHeight:V.offsetX/V.target.clientWidth)*100,ae=(s()+r())/2;O<ae?b.value=t.reversed?1:0:b.value=t.reversed?0:1}$(),w(V)}};return()=>e("div",{ref:V=>c.value=V,class:n.value,style:t.vertical?`height: ${t.verticalHeight}px;`:""},[e("div",{class:"inner",onClick:ye},[e("div",{class:"track",ref:V=>h.value=V},null),e("div",{class:"track-fill",style:m.value},null),e("div",{class:"thumb",style:f.value,onMousedown:V=>F(V),onTouchstart:V=>P(V),onTouchmove:V=>z(V),onTouchend:V=>M(V),onKeydown:V=>Z(V),tabindex:0},null),t.range&&e("div",{class:"thumb second",style:p.value,onMousedown:V=>F(V,1),onTouchstart:V=>P(V,1),onTouchmove:V=>z(V),onTouchend:V=>M(V),onKeydown:V=>Z(V,1),tabindex:0},null)]),t.labeled&&e("ul",{class:"auto labels"},[[...Array(g()+1)].map((V,O)=>{let ae=O/g();return O%u()?e("li",{class:"halftick label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ae} + 7px);`},null):e("li",{class:"label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${ae} + 7px);`},[t.reversed&&!t.vertical?t.labels?t.labels[g()-O]:o.value[g()-O]:t.labels?t.labels[O]:o.value[O]])})])])}}),k0={install(t){t.component(Ir.name,Ir)}},Fn=B({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(t){return{computedClass:D(()=>Y("ui tab segment",S(t.active,"active"),Te(t.attached,"attached")))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Lr=B({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(t,{emit:l,slots:n}){const s=I(t.activeIndex);Ze(()=>t.activeIndex,u=>{s.value=u});const r=(u,g)=>{s.value!==g&&(s.value=g,l("update:activeIndex",g),l("tab-change",{event:u,index:g})),l("tab-click",{event:u,index:g})},m=(u,g)=>{u.key==="Enter"&&r(u,g)},f=D(()=>{var u,g;let c=[];return(u=n.default)!=null&&u.call(n)&&((g=n.default)==null||g.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&c.push(h)})),c}),p=D(()=>!t.secondary&&!t.pointing&&!t.text),o=D(()=>Y("ui menu",S(p.value,"tabular attached"),S(t.pointing,"pointing"),S(t.secondary,"secondary"),S(t.text,"text")));return{onClick:r,onKeyDown:m,tabIndex:s,tabs:f,tabMenuClass:o,isDefaultMenu:p}},render(){const t=()=>this.tabs.map((n,s)=>e("a",{class:`item ${this.tabIndex===s&&"active"}`,onClick:r=>this.onClick(r,s),onKeydown:r=>this.onKeyDown(r,s),tabindex:0},[n.props.header])),l=()=>this.tabs.map((n,s)=>e(Fn,Sl(n.props,{active:this.tabIndex===s,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var r,m;return[(m=(r=n.children).default)==null?void 0:m.call(r)]}}));return e(we,null,[e("div",{class:this.tabMenuClass},[t()]),l()])}}),$0={install(t){t.component(Lr.name,Lr),t.component(Fn.name,Fn)}},T0=Object.freeze(Object.defineProperty({__proto__:null,Accordion:Lk,Calendar:t0,Checkbox:i0,Dimmer:l0,Dropdown:u0,Embed:r0,Modal:_0,Popup:v0,Progress:y0,Rating:w0,Search:A0,Sidebar:S0,Slider:k0,Tab:$0},Symbol.toStringTag,{value:"Module"}));function E0(t){Object.values({...Sk,...zk,...Ik,...T0}).map(l=>t.use(l))}const x0={install:E0};(function(t){var l="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:n,environment:{pattern:RegExp("\\$"+l),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+l),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+l),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+l),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=t.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],m=s.variable[1].inside,f=0;f<r.length;f++)m[r[f]]=t.languages.bash[r[f]];t.languages.sh=t.languages.bash,t.languages.shell=t.languages.bash})(Prism);const ws=Ec(hg);ws.use(tk);ws.use(x0);ws.mount("#app");

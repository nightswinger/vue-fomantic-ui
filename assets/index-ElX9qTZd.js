(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=n(u);fetch(u.href,d)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ma(t,l){const n=new Set(t.split(","));return l?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Fe={},Fi=[],ct=()=>{},dp=()=>!1,Hl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bs=t=>t.startsWith("onUpdate:"),Ge=Object.assign,vs=(t,l)=>{const n=t.indexOf(l);n>-1&&t.splice(n,1)},cp=Object.prototype.hasOwnProperty,ze=(t,l)=>cp.call(t,l),ce=Array.isArray,Ni=t=>al(t)==="[object Map]",$i=t=>al(t)==="[object Set]",co=t=>al(t)==="[object Date]",mp=t=>al(t)==="[object RegExp]",ve=t=>typeof t=="function",Ye=t=>typeof t=="string",si=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",ys=t=>(Le(t)||ve(t))&&ve(t.then)&&ve(t.catch),Ed=Object.prototype.toString,al=t=>Ed.call(t),pp=t=>al(t).slice(8,-1),Rd=t=>al(t)==="[object Object]",Cs=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cl=Ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=t=>{const l=Object.create(null);return n=>l[n]||(l[n]=t(n))},fp=/-(\w)/g,rt=Ia(t=>t.replace(fp,(l,n)=>n?n.toUpperCase():"")),gp=/\B([A-Z])/g,bt=Ia(t=>t.replace(gp,"-$1").toLowerCase()),jl=Ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),wl=Ia(t=>t?`on${jl(t)}`:""),xt=(t,l)=>!Object.is(t,l),Li=(t,l)=>{for(let n=0;n<t.length;n++)t[n](l)},fa=(t,l,n)=>{Object.defineProperty(t,l,{configurable:!0,enumerable:!1,value:n})},El=t=>{const l=parseFloat(t);return isNaN(l)?t:l},ga=t=>{const l=Ye(t)?Number(t):NaN;return isNaN(l)?t:l};let mo;const Pd=()=>mo||(mo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),hp="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",_p=Ma(hp);function nl(t){if(ce(t)){const l={};for(let n=0;n<t.length;n++){const s=t[n],u=Ye(s)?Cp(s):nl(s);if(u)for(const d in u)l[d]=u[d]}return l}else if(Ye(t)||Le(t))return t}const bp=/;(?![^(]*\))/g,vp=/:([^]+)/,yp=/\/\*[^]*?\*\//g;function Cp(t){const l={};return t.replace(yp,"").split(bp).forEach(n=>{if(n){const s=n.split(vp);s.length>1&&(l[s[0].trim()]=s[1].trim())}}),l}function ql(t){let l="";if(Ye(t))l=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=ql(t[n]);s&&(l+=s+" ")}else if(Le(t))for(const n in t)t[n]&&(l+=n+" ");return l.trim()}function wp(t){if(!t)return null;let{class:l,style:n}=t;return l&&!Ye(l)&&(t.class=ql(l)),n&&(t.style=nl(n)),t}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ap=Ma(Sp);function zd(t){return!!t||t===""}function kp(t,l){if(t.length!==l.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=jt(t[s],l[s]);return n}function jt(t,l){if(t===l)return!0;let n=co(t),s=co(l);if(n||s)return n&&s?t.getTime()===l.getTime():!1;if(n=si(t),s=si(l),n||s)return t===l;if(n=ce(t),s=ce(l),n||s)return n&&s?kp(t,l):!1;if(n=Le(t),s=Le(l),n||s){if(!n||!s)return!1;const u=Object.keys(t).length,d=Object.keys(l).length;if(u!==d)return!1;for(const p in t){const m=t.hasOwnProperty(p),o=l.hasOwnProperty(p);if(m&&!o||!m&&o||!jt(t[p],l[p]))return!1}}return String(t)===String(l)}function Va(t,l){return t.findIndex(n=>jt(n,l))}const Be=t=>Ye(t)?t:t==null?"":ce(t)||Le(t)&&(t.toString===Ed||!ve(t.toString))?JSON.stringify(t,Dd,2):String(t),Dd=(t,l)=>l&&l.__v_isRef?Dd(t,l.value):Ni(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((n,[s,u],d)=>(n[on(s,d)+" =>"]=u,n),{})}:$i(l)?{[`Set(${l.size})`]:[...l.values()].map(n=>on(n))}:si(l)?on(l):Le(l)&&!ce(l)&&!Rd(l)?String(l):l,on=(t,l="")=>{var n;return si(t)?`Symbol(${(n=t.description)!=null?n:l})`:t};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class ws{constructor(l=!1){this.detached=l,this._active=!0,this.effects=[],this.cleanups=[],this.parent=gt,!l&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}run(l){if(this._active){const n=gt;try{return gt=this,l()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(l){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!l){const u=this.parent.scopes.pop();u&&u!==this&&(this.parent.scopes[this.index]=u,u.index=this.index)}this.parent=void 0,this._active=!1}}}function Bp(t){return new ws(t)}function Md(t,l=gt){l&&l.active&&l.effects.push(t)}function Ss(){return gt}function Id(t){gt&&gt.cleanups.push(t)}let _i;class Wi{constructor(l,n,s,u){this.fn=l,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Md(this,u)}get dirty(){if(this._dirtyLevel===1){Ti();for(let l=0;l<this._depsLength;l++){const n=this.deps[l];if(n.computed&&($p(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),xi()}return this._dirtyLevel>=2}set dirty(l){this._dirtyLevel=l?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let l=ai,n=_i;try{return ai=!0,_i=this,this._runnings++,po(this),this.fn()}finally{fo(this),this._runnings--,_i=n,ai=l}}stop(){var l;this.active&&(po(this),fo(this),(l=this.onStop)==null||l.call(this),this.active=!1)}}function $p(t){return t.value}function po(t){t._trackId++,t._depsLength=0}function fo(t){if(t.deps&&t.deps.length>t._depsLength){for(let l=t._depsLength;l<t.deps.length;l++)Vd(t.deps[l],t);t.deps.length=t._depsLength}}function Vd(t,l){const n=t.get(l);n!==void 0&&l._trackId!==n&&(t.delete(l),t.size===0&&t.cleanup())}function Tp(t,l){t.effect instanceof Wi&&(t=t.effect.fn);const n=new Wi(t,ct,()=>{n.dirty&&n.run()});l&&(Ge(n,l),l.scope&&Md(n,l.scope)),(!l||!l.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function xp(t){t.effect.stop()}let ai=!0,Pn=0;const Fd=[];function Ti(){Fd.push(ai),ai=!1}function xi(){const t=Fd.pop();ai=t===void 0?!0:t}function As(){Pn++}function ks(){for(Pn--;!Pn&&zn.length;)zn.shift()()}function Nd(t,l,n){if(l.get(t)!==t._trackId){l.set(t,t._trackId);const s=t.deps[t._depsLength];s!==l?(s&&Vd(s,t),t.deps[t._depsLength++]=l):t._depsLength++}}const zn=[];function Ld(t,l,n){As();for(const s of t.keys())if(s._dirtyLevel<l&&t.get(s)===s._trackId){const u=s._dirtyLevel;s._dirtyLevel=l,u===0&&(s._shouldSchedule=!0,s.trigger())}Od(t),ks()}function Od(t){for(const l of t.keys())l.scheduler&&l._shouldSchedule&&(!l._runnings||l.allowRecurse)&&t.get(l)===l._trackId&&(l._shouldSchedule=!1,zn.push(l.scheduler))}const Hd=(t,l)=>{const n=new Map;return n.cleanup=t,n.computed=l,n},ha=new WeakMap,bi=Symbol(""),Dn=Symbol("");function pt(t,l,n){if(ai&&_i){let s=ha.get(t);s||ha.set(t,s=new Map);let u=s.get(n);u||s.set(n,u=Hd(()=>s.delete(n))),Nd(_i,u)}}function Lt(t,l,n,s,u,d){const p=ha.get(t);if(!p)return;let m=[];if(l==="clear")m=[...p.values()];else if(n==="length"&&ce(t)){const o=Number(s);p.forEach((r,g)=>{(g==="length"||!si(g)&&g>=o)&&m.push(r)})}else switch(n!==void 0&&m.push(p.get(n)),l){case"add":ce(t)?Cs(n)&&m.push(p.get("length")):(m.push(p.get(bi)),Ni(t)&&m.push(p.get(Dn)));break;case"delete":ce(t)||(m.push(p.get(bi)),Ni(t)&&m.push(p.get(Dn)));break;case"set":Ni(t)&&m.push(p.get(bi));break}As();for(const o of m)o&&Ld(o,2);ks()}function Ep(t,l){var n;return(n=ha.get(t))==null?void 0:n.get(l)}const Rp=Ma("__proto__,__v_isRef,__isVue"),jd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(si)),go=Pp();function Pp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(l=>{t[l]=function(...n){const s=Re(this);for(let d=0,p=this.length;d<p;d++)pt(s,"get",d+"");const u=s[l](...n);return u===-1||u===!1?s[l](...n.map(Re)):u}}),["push","pop","shift","unshift","splice"].forEach(l=>{t[l]=function(...n){Ti(),As();const s=Re(this)[l].apply(this,n);return ks(),xi(),s}}),t}function zp(t){const l=Re(this);return pt(l,"has",t),l.hasOwnProperty(t)}class qd{constructor(l=!1,n=!1){this._isReadonly=l,this._shallow=n}get(l,n,s){const u=this._isReadonly,d=this._shallow;if(n==="__v_isReactive")return!u;if(n==="__v_isReadonly")return u;if(n==="__v_isShallow")return d;if(n==="__v_raw")return s===(u?d?Kd:Wd:d?Jd:Yd).get(l)||Object.getPrototypeOf(l)===Object.getPrototypeOf(s)?l:void 0;const p=ce(l);if(!u){if(p&&ze(go,n))return Reflect.get(go,n,s);if(n==="hasOwnProperty")return zp}const m=Reflect.get(l,n,s);return(si(n)?jd.has(n):Rp(n))||(u||pt(l,"get",n),d)?m:it(m)?p&&Cs(n)?m:m.value:Le(m)?u?$s(m):qt(m):m}}class Ud extends qd{constructor(l=!1){super(!1,l)}set(l,n,s,u){let d=l[n];if(!this._shallow){const o=wi(d);if(!Rl(s)&&!wi(s)&&(d=Re(d),s=Re(s)),!ce(l)&&it(d)&&!it(s))return o?!1:(d.value=s,!0)}const p=ce(l)&&Cs(n)?Number(n)<l.length:ze(l,n),m=Reflect.set(l,n,s,u);return l===Re(u)&&(p?xt(s,d)&&Lt(l,"set",n,s):Lt(l,"add",n,s)),m}deleteProperty(l,n){const s=ze(l,n);l[n];const u=Reflect.deleteProperty(l,n);return u&&s&&Lt(l,"delete",n,void 0),u}has(l,n){const s=Reflect.has(l,n);return(!si(n)||!jd.has(n))&&pt(l,"has",n),s}ownKeys(l){return pt(l,"iterate",ce(l)?"length":bi),Reflect.ownKeys(l)}}class Gd extends qd{constructor(l=!1){super(!0,l)}set(l,n){return!0}deleteProperty(l,n){return!0}}const Dp=new Ud,Mp=new Gd,Ip=new Ud(!0),Vp=new Gd(!0),Bs=t=>t,Fa=t=>Reflect.getPrototypeOf(t);function Wl(t,l,n=!1,s=!1){t=t.__v_raw;const u=Re(t),d=Re(l);n||(xt(l,d)&&pt(u,"get",l),pt(u,"get",d));const{has:p}=Fa(u),m=s?Bs:n?Es:Pl;if(p.call(u,l))return m(t.get(l));if(p.call(u,d))return m(t.get(d));t!==u&&t.get(l)}function Kl(t,l=!1){const n=this.__v_raw,s=Re(n),u=Re(t);return l||(xt(t,u)&&pt(s,"has",t),pt(s,"has",u)),t===u?n.has(t):n.has(t)||n.has(u)}function Xl(t,l=!1){return t=t.__v_raw,!l&&pt(Re(t),"iterate",bi),Reflect.get(t,"size",t)}function ho(t){t=Re(t);const l=Re(this);return Fa(l).has.call(l,t)||(l.add(t),Lt(l,"add",t,t)),this}function _o(t,l){l=Re(l);const n=Re(this),{has:s,get:u}=Fa(n);let d=s.call(n,t);d||(t=Re(t),d=s.call(n,t));const p=u.call(n,t);return n.set(t,l),d?xt(l,p)&&Lt(n,"set",t,l):Lt(n,"add",t,l),this}function bo(t){const l=Re(this),{has:n,get:s}=Fa(l);let u=n.call(l,t);u||(t=Re(t),u=n.call(l,t)),s&&s.call(l,t);const d=l.delete(t);return u&&Lt(l,"delete",t,void 0),d}function vo(){const t=Re(this),l=t.size!==0,n=t.clear();return l&&Lt(t,"clear",void 0,void 0),n}function Ql(t,l){return function(s,u){const d=this,p=d.__v_raw,m=Re(p),o=l?Bs:t?Es:Pl;return!t&&pt(m,"iterate",bi),p.forEach((r,g)=>s.call(u,o(r),o(g),d))}}function Zl(t,l,n){return function(...s){const u=this.__v_raw,d=Re(u),p=Ni(d),m=t==="entries"||t===Symbol.iterator&&p,o=t==="keys"&&p,r=u[t](...s),g=n?Bs:l?Es:Pl;return!l&&pt(d,"iterate",o?Dn:bi),{next(){const{value:c,done:h}=r.next();return h?{value:c,done:h}:{value:m?[g(c[0]),g(c[1])]:g(c),done:h}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...l){return t==="delete"?!1:t==="clear"?void 0:this}}function Fp(){const t={get(d){return Wl(this,d)},get size(){return Xl(this)},has:Kl,add:ho,set:_o,delete:bo,clear:vo,forEach:Ql(!1,!1)},l={get(d){return Wl(this,d,!1,!0)},get size(){return Xl(this)},has:Kl,add:ho,set:_o,delete:bo,clear:vo,forEach:Ql(!1,!0)},n={get(d){return Wl(this,d,!0)},get size(){return Xl(this,!0)},has(d){return Kl.call(this,d,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Ql(!0,!1)},s={get(d){return Wl(this,d,!0,!0)},get size(){return Xl(this,!0)},has(d){return Kl.call(this,d,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Ql(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(d=>{t[d]=Zl(d,!1,!1),n[d]=Zl(d,!0,!1),l[d]=Zl(d,!1,!0),s[d]=Zl(d,!0,!0)}),[t,n,l,s]}const[Np,Lp,Op,Hp]=Fp();function Na(t,l){const n=l?t?Hp:Op:t?Lp:Np;return(s,u,d)=>u==="__v_isReactive"?!t:u==="__v_isReadonly"?t:u==="__v_raw"?s:Reflect.get(ze(n,u)&&u in s?n:s,u,d)}const jp={get:Na(!1,!1)},qp={get:Na(!1,!0)},Up={get:Na(!0,!1)},Gp={get:Na(!0,!0)},Yd=new WeakMap,Jd=new WeakMap,Wd=new WeakMap,Kd=new WeakMap;function Yp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jp(t){return t.__v_skip||!Object.isExtensible(t)?0:Yp(pp(t))}function qt(t){return wi(t)?t:La(t,!1,Dp,jp,Yd)}function Xd(t){return La(t,!1,Ip,qp,Jd)}function $s(t){return La(t,!0,Mp,Up,Wd)}function Wp(t){return La(t,!0,Vp,Gp,Kd)}function La(t,l,n,s,u){if(!Le(t)||t.__v_raw&&!(l&&t.__v_isReactive))return t;const d=u.get(t);if(d)return d;const p=Jp(t);if(p===0)return t;const m=new Proxy(t,p===2?s:n);return u.set(t,m),m}function vi(t){return wi(t)?vi(t.__v_raw):!!(t&&t.__v_isReactive)}function wi(t){return!!(t&&t.__v_isReadonly)}function Rl(t){return!!(t&&t.__v_isShallow)}function Ts(t){return vi(t)||wi(t)}function Re(t){const l=t&&t.__v_raw;return l?Re(l):t}function xs(t){return fa(t,"__v_skip",!0),t}const Pl=t=>Le(t)?qt(t):t,Es=t=>Le(t)?$s(t):t;class Qd{constructor(l,n,s,u){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Wi(()=>l(this._value),()=>Oi(this,1),()=>this.dep&&Od(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!u,this.__v_isReadonly=s}get value(){const l=Re(this);return(!l._cacheable||l.effect.dirty)&&xt(l._value,l._value=l.effect.run())&&Oi(l,2),Rs(l),l.effect._dirtyLevel>=1&&Oi(l,1),l._value}set value(l){this._setter(l)}get _dirty(){return this.effect.dirty}set _dirty(l){this.effect.dirty=l}}function Kp(t,l,n=!1){let s,u;const d=ve(t);return d?(s=t,u=ct):(s=t.get,u=t.set),new Qd(s,u,d||!u,n)}function Rs(t){ai&&_i&&(t=Re(t),Nd(_i,t.dep||(t.dep=Hd(()=>t.dep=void 0,t instanceof Qd?t:void 0))))}function Oi(t,l=2,n){t=Re(t);const s=t.dep;s&&Ld(s,l)}function it(t){return!!(t&&t.__v_isRef===!0)}function H(t){return ec(t,!1)}function Zd(t){return ec(t,!0)}function ec(t,l){return it(t)?t:new Xp(t,l)}class Xp{constructor(l,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?l:Re(l),this._value=n?l:Pl(l)}get value(){return Rs(this),this._value}set value(l){const n=this.__v_isShallow||Rl(l)||wi(l);l=n?l:Re(l),xt(l,this._rawValue)&&(this._rawValue=l,this._value=n?l:Pl(l),Oi(this,2))}}function Qp(t){Oi(t,2)}function R(t){return it(t)?t.value:t}function Zp(t){return ve(t)?t():R(t)}const ef={get:(t,l,n)=>R(Reflect.get(t,l,n)),set:(t,l,n,s)=>{const u=t[l];return it(u)&&!it(n)?(u.value=n,!0):Reflect.set(t,l,n,s)}};function Ps(t){return vi(t)?t:new Proxy(t,ef)}class tf{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=l(()=>Rs(this),()=>Oi(this));this._get=n,this._set=s}get value(){return this._get()}set value(l){this._set(l)}}function tc(t){return new tf(t)}function lf(t){const l=ce(t)?new Array(t.length):{};for(const n in t)l[n]=ic(t,n);return l}class af{constructor(l,n,s){this._object=l,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}get dep(){return Ep(Re(this._object),this._key)}}class nf{constructor(l){this._getter=l,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Mn(t,l,n){return it(t)?t:ve(t)?new nf(t):Le(t)&&arguments.length>1?ic(t,l,n):H(t)}function ic(t,l,n){const s=t[l];return it(s)?s:new af(t,l,n)}const sf={GET:"get",HAS:"has",ITERATE:"iterate"},of={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rf(t,l){}const uf={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},df={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Ot(t,l,n,s){let u;try{u=s?t(...s):t()}catch(d){Ei(d,l,n)}return u}function vt(t,l,n,s){if(ve(t)){const d=Ot(t,l,n,s);return d&&ys(d)&&d.catch(p=>{Ei(p,l,n)}),d}const u=[];for(let d=0;d<t.length;d++)u.push(vt(t[d],l,n,s));return u}function Ei(t,l,n,s=!0){const u=l?l.vnode:null;if(l){let d=l.parent;const p=l.proxy,m=`https://vuejs.org/error-reference/#runtime-${n}`;for(;d;){const r=d.ec;if(r){for(let g=0;g<r.length;g++)if(r[g](t,p,m)===!1)return}d=d.parent}const o=l.appContext.config.errorHandler;if(o){Ot(o,null,10,[t,p,m]);return}}cf(t,n,u,s)}function cf(t,l,n,s=!0){console.error(t)}let zl=!1,In=!1;const at=[];let Pt=0;const Hi=[];let Qt=null,gi=0;const lc=Promise.resolve();let zs=null;function sl(t){const l=zs||lc;return t?l.then(this?t.bind(this):t):l}function mf(t){let l=Pt+1,n=at.length;for(;l<n;){const s=l+n>>>1,u=at[s],d=Dl(u);d<t||d===t&&u.pre?l=s+1:n=s}return l}function Oa(t){(!at.length||!at.includes(t,zl&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?at.push(t):at.splice(mf(t.id),0,t),ac())}function ac(){!zl&&!In&&(In=!0,zs=lc.then(nc))}function pf(t){const l=at.indexOf(t);l>Pt&&at.splice(l,1)}function _a(t){ce(t)?Hi.push(...t):(!Qt||!Qt.includes(t,t.allowRecurse?gi+1:gi))&&Hi.push(t),ac()}function yo(t,l,n=zl?Pt+1:0){for(;n<at.length;n++){const s=at[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;at.splice(n,1),n--,s()}}}function ba(t){if(Hi.length){const l=[...new Set(Hi)].sort((n,s)=>Dl(n)-Dl(s));if(Hi.length=0,Qt){Qt.push(...l);return}for(Qt=l,gi=0;gi<Qt.length;gi++)Qt[gi]();Qt=null,gi=0}}const Dl=t=>t.id==null?1/0:t.id,ff=(t,l)=>{const n=Dl(t)-Dl(l);if(n===0){if(t.pre&&!l.pre)return-1;if(l.pre&&!t.pre)return 1}return n};function nc(t){In=!1,zl=!0,at.sort(ff);try{for(Pt=0;Pt<at.length;Pt++){const l=at[Pt];l&&l.active!==!1&&Ot(l,null,14)}}finally{Pt=0,at.length=0,ba(),zl=!1,zs=null,(at.length||Hi.length)&&nc()}}let Mi,ea=[];function sc(t,l){var n,s;Mi=t,Mi?(Mi.enabled=!0,ea.forEach(({event:u,args:d})=>Mi.emit(u,...d)),ea=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(d=>{sc(d,l)}),setTimeout(()=>{Mi||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ea=[])},3e3)):ea=[]}function gf(t,l,...n){if(t.isUnmounted)return;const s=t.vnode.props||Fe;let u=n;const d=l.startsWith("update:"),p=d&&l.slice(7);if(p&&p in s){const g=`${p==="modelValue"?"model":p}Modifiers`,{number:c,trim:h}=s[g]||Fe;h&&(u=n.map(v=>Ye(v)?v.trim():v)),c&&(u=n.map(El))}let m,o=s[m=wl(l)]||s[m=wl(rt(l))];!o&&d&&(o=s[m=wl(bt(l))]),o&&vt(o,t,6,u);const r=s[m+"Once"];if(r){if(!t.emitted)t.emitted={};else if(t.emitted[m])return;t.emitted[m]=!0,vt(r,t,6,u)}}function oc(t,l,n=!1){const s=l.emitsCache,u=s.get(t);if(u!==void 0)return u;const d=t.emits;let p={},m=!1;if(!ve(t)){const o=r=>{const g=oc(r,l,!0);g&&(m=!0,Ge(p,g))};!n&&l.mixins.length&&l.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!d&&!m?(Le(t)&&s.set(t,null),null):(ce(d)?d.forEach(o=>p[o]=null):Ge(p,d),Le(t)&&s.set(t,p),p)}function Ha(t,l){return!t||!Hl(l)?!1:(l=l.slice(2).replace(/Once$/,""),ze(t,l[0].toLowerCase()+l.slice(1))||ze(t,bt(l))||ze(t,l))}let Je=null,ja=null;function Ml(t){const l=Je;return Je=t,ja=t&&t.type.__scopeId||null,l}function Ds(t){ja=t}function Ms(){ja=null}const hf=t=>i;function i(t,l=Je,n){if(!l||t._n)return t;const s=(...u)=>{s._d&&qn(-1);const d=Ml(l);let p;try{p=t(...u)}finally{Ml(d),s._d&&qn(1)}return p};return s._n=!0,s._c=!0,s._d=!0,s}function ca(t){const{type:l,vnode:n,proxy:s,withProxy:u,props:d,propsOptions:[p],slots:m,attrs:o,emit:r,render:g,renderCache:c,data:h,setupState:v,ctx:f,inheritAttrs:y}=t;let S,B;const b=Ml(t);try{if(n.shapeFlag&4){const k=u||s,$=k;S=ht(g.call($,k,c,d,v,h,f)),B=o}else{const k=l;S=ht(k.length>1?k(d,{attrs:o,slots:m,emit:r}):k(d,null)),B=l.props?o:bf(o)}}catch(k){kl.length=0,Ei(k,t,1),S=e(st)}let w=S;if(B&&y!==!1){const k=Object.keys(B),{shapeFlag:$}=w;k.length&&$&7&&(p&&k.some(bs)&&(B=vf(B,p)),w=zt(w,B))}return n.dirs&&(w=zt(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),S=w,Ml(b),S}function _f(t,l=!0){let n;for(let s=0;s<t.length;s++){const u=t[s];if(Bt(u)){if(u.type!==st||u.children==="v-if"){if(n)return;n=u}}else return}return n}const bf=t=>{let l;for(const n in t)(n==="class"||n==="style"||Hl(n))&&((l||(l={}))[n]=t[n]);return l},vf=(t,l)=>{const n={};for(const s in t)(!bs(s)||!(s.slice(9)in l))&&(n[s]=t[s]);return n};function yf(t,l,n){const{props:s,children:u,component:d}=t,{props:p,children:m,patchFlag:o}=l,r=d.emitsOptions;if(l.dirs||l.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return s?Co(s,p,r):!!p;if(o&8){const g=l.dynamicProps;for(let c=0;c<g.length;c++){const h=g[c];if(p[h]!==s[h]&&!Ha(r,h))return!0}}}else return(u||m)&&(!m||!m.$stable)?!0:s===p?!1:s?p?Co(s,p,r):!0:!!p;return!1}function Co(t,l,n){const s=Object.keys(l);if(s.length!==Object.keys(t).length)return!0;for(let u=0;u<s.length;u++){const d=s[u];if(l[d]!==t[d]&&!Ha(n,d))return!0}return!1}function Is({vnode:t,parent:l},n){for(;l;){const s=l.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=l.vnode).el=n,l=l.parent;else break}}const Vs="components",Cf="directives";function _(t,l){return Fs(Vs,t,!0,l)||t}const rc=Symbol.for("v-ndc");function uc(t){return Ye(t)?Fs(Vs,t,!1)||t:t||rc}function qa(t){return Fs(Cf,t)}function Fs(t,l,n=!0,s=!1){const u=Je||We;if(u){const d=u.type;if(t===Vs){const m=Wn(d,!1);if(m&&(m===l||m===rt(l)||m===jl(rt(l))))return d}const p=wo(u[t]||d[t],l)||wo(u.appContext[t],l);return!p&&s?d:p}}function wo(t,l){return t&&(t[l]||t[rt(l)]||t[jl(rt(l))])}const dc=t=>t.__isSuspense;let Vn=0;const wf={name:"Suspense",__isSuspense:!0,process(t,l,n,s,u,d,p,m,o,r){if(t==null)Af(l,n,s,u,d,p,m,o,r);else{if(d&&d.deps>0){l.suspense=t.suspense;return}kf(t,l,n,s,u,p,m,o,r)}},hydrate:Bf,create:Ns,normalize:$f},Sf=wf;function Il(t,l){const n=t.props&&t.props[l];ve(n)&&n()}function Af(t,l,n,s,u,d,p,m,o){const{p:r,o:{createElement:g}}=o,c=g("div"),h=t.suspense=Ns(t,u,s,l,c,n,d,p,m,o);r(null,h.pendingBranch=t.ssContent,c,null,s,h,d,p),h.deps>0?(Il(t,"onPending"),Il(t,"onFallback"),r(null,t.ssFallback,l,n,s,null,d,p),ji(h,t.ssFallback)):h.resolve(!1,!0)}function kf(t,l,n,s,u,d,p,m,{p:o,um:r,o:{createElement:g}}){const c=l.suspense=t.suspense;c.vnode=l,l.el=t.el;const h=l.ssContent,v=l.ssFallback,{activeBranch:f,pendingBranch:y,isInFallback:S,isHydrating:B}=c;if(y)c.pendingBranch=h,Tt(h,y)?(o(y,h,c.hiddenContainer,null,u,c,d,p,m),c.deps<=0?c.resolve():S&&(B||(o(f,v,n,s,u,null,d,p,m),ji(c,v)))):(c.pendingId=Vn++,B?(c.isHydrating=!1,c.activeBranch=y):r(y,u,c),c.deps=0,c.effects.length=0,c.hiddenContainer=g("div"),S?(o(null,h,c.hiddenContainer,null,u,c,d,p,m),c.deps<=0?c.resolve():(o(f,v,n,s,u,null,d,p,m),ji(c,v))):f&&Tt(h,f)?(o(f,h,n,s,u,c,d,p,m),c.resolve(!0)):(o(null,h,c.hiddenContainer,null,u,c,d,p,m),c.deps<=0&&c.resolve()));else if(f&&Tt(h,f))o(f,h,n,s,u,c,d,p,m),ji(c,h);else if(Il(l,"onPending"),c.pendingBranch=h,h.shapeFlag&512?c.pendingId=h.component.suspenseId:c.pendingId=Vn++,o(null,h,c.hiddenContainer,null,u,c,d,p,m),c.deps<=0)c.resolve();else{const{timeout:b,pendingId:w}=c;b>0?setTimeout(()=>{c.pendingId===w&&c.fallback(v)},b):b===0&&c.fallback(v)}}function Ns(t,l,n,s,u,d,p,m,o,r,g=!1){const{p:c,m:h,um:v,n:f,o:{parentNode:y,remove:S}}=r;let B;const b=Tf(t);b&&l!=null&&l.pendingBranch&&(B=l.pendingId,l.deps++);const w=t.props?ga(t.props.timeout):void 0,k=d,$={vnode:t,parent:l,parentComponent:n,namespace:p,container:s,hiddenContainer:u,deps:0,pendingId:Vn++,timeout:typeof w=="number"?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!g,isHydrating:g,isUnmounted:!1,effects:[],resolve(x=!1,D=!1){const{vnode:V,activeBranch:z,pendingBranch:L,pendingId:Y,effects:j,parentComponent:de,container:ke}=$;let O=!1;$.isHydrating?$.isHydrating=!1:x||(O=z&&L.transition&&L.transition.mode==="out-in",O&&(z.transition.afterLeave=()=>{Y===$.pendingId&&(h(L,ke,d===k?f(z):d,0),_a(j))}),z&&(y(z.el)!==$.hiddenContainer&&(d=f(z)),v(z,de,$,!0)),O||h(L,ke,d,0)),ji($,L),$.pendingBranch=null,$.isInFallback=!1;let G=$.parent,oe=!1;for(;G;){if(G.pendingBranch){G.effects.push(...j),oe=!0;break}G=G.parent}!oe&&!O&&_a(j),$.effects=[],b&&l&&l.pendingBranch&&B===l.pendingId&&(l.deps--,l.deps===0&&!D&&l.resolve()),Il(V,"onResolve")},fallback(x){if(!$.pendingBranch)return;const{vnode:D,activeBranch:V,parentComponent:z,container:L,namespace:Y}=$;Il(D,"onFallback");const j=f(V),de=()=>{$.isInFallback&&(c(null,x,L,j,z,null,Y,m,o),ji($,x))},ke=x.transition&&x.transition.mode==="out-in";ke&&(V.transition.afterLeave=de),$.isInFallback=!0,v(V,z,null,!0),ke||de()},move(x,D,V){$.activeBranch&&h($.activeBranch,x,D,V),$.container=x},next(){return $.activeBranch&&f($.activeBranch)},registerDep(x,D){const V=!!$.pendingBranch;V&&$.deps++;const z=x.vnode.el;x.asyncDep.catch(L=>{Ei(L,x,0)}).then(L=>{if(x.isUnmounted||$.isUnmounted||$.pendingId!==x.suspenseId)return;x.asyncResolved=!0;const{vnode:Y}=x;Yn(x,L,!1),z&&(Y.el=z);const j=!z&&x.subTree.el;D(x,Y,y(z||x.subTree.el),z?null:f(x.subTree),$,p,o),j&&S(j),Is(x,Y.el),V&&--$.deps===0&&$.resolve()})},unmount(x,D){$.isUnmounted=!0,$.activeBranch&&v($.activeBranch,n,x,D),$.pendingBranch&&v($.pendingBranch,n,x,D)}};return $}function Bf(t,l,n,s,u,d,p,m,o){const r=l.suspense=Ns(l,s,n,t.parentNode,document.createElement("div"),null,u,d,p,m,!0),g=o(t,r.pendingBranch=l.ssContent,n,r,d,p);return r.deps===0&&r.resolve(!1,!0),g}function $f(t){const{shapeFlag:l,children:n}=t,s=l&32;t.ssContent=So(s?n.default:n),t.ssFallback=s?So(n.fallback):e(st)}function So(t){let l;if(ve(t)){const n=ki&&t._c;n&&(t._d=!1,I()),t=t(),n&&(t._d=!0,l=mt,Oc())}return ce(t)&&(t=_f(t)),t=ht(t),l&&!t.dynamicChildren&&(t.dynamicChildren=l.filter(n=>n!==t)),t}function cc(t,l){l&&l.pendingBranch?ce(t)?l.effects.push(...t):l.effects.push(t):_a(t)}function ji(t,l){t.activeBranch=l;const{vnode:n,parentComponent:s}=t;let u=l.el;for(;!u&&l.component;)l=l.component.subTree,u=l.el;n.el=u,s&&s.subTree===n&&(s.vnode.el=u,Is(s,u))}function Tf(t){var l;return((l=t.props)==null?void 0:l.suspensible)!=null&&t.props.suspensible!==!1}const mc=Symbol.for("v-scx"),pc=()=>Me(mc);function Ls(t,l){return Ul(t,null,l)}function fc(t,l){return Ul(t,null,{flush:"post"})}function gc(t,l){return Ul(t,null,{flush:"sync"})}const ta={};function nt(t,l,n){return Ul(t,l,n)}function Ul(t,l,{immediate:n,deep:s,flush:u,once:d,onTrack:p,onTrigger:m}=Fe){if(l&&d){const x=l;l=(...D)=>{x(...D),$()}}const o=We,r=x=>s===!0?x:hi(x,s===!1?1:void 0);let g,c=!1,h=!1;if(it(t)?(g=()=>t.value,c=Rl(t)):vi(t)?(g=()=>r(t),c=!0):ce(t)?(h=!0,c=t.some(x=>vi(x)||Rl(x)),g=()=>t.map(x=>{if(it(x))return x.value;if(vi(x))return r(x);if(ve(x))return Ot(x,o,2)})):ve(t)?l?g=()=>Ot(t,o,2):g=()=>(v&&v(),vt(t,o,3,[f])):g=ct,l&&s){const x=g;g=()=>hi(x())}let v,f=x=>{v=w.onStop=()=>{Ot(x,o,4),v=w.onStop=void 0}},y;if(Jl)if(f=ct,l?n&&vt(l,o,3,[g(),h?[]:void 0,f]):g(),u==="sync"){const x=pc();y=x.__watcherHandles||(x.__watcherHandles=[])}else return ct;let S=h?new Array(t.length).fill(ta):ta;const B=()=>{if(!(!w.active||!w.dirty))if(l){const x=w.run();(s||c||(h?x.some((D,V)=>xt(D,S[V])):xt(x,S)))&&(v&&v(),vt(l,o,3,[x,S===ta?void 0:h&&S[0]===ta?[]:S,f]),S=x)}else w.run()};B.allowRecurse=!!l;let b;u==="sync"?b=B:u==="post"?b=()=>et(B,o&&o.suspense):(B.pre=!0,o&&(B.id=o.uid),b=()=>Oa(B));const w=new Wi(g,ct,b),k=Ss(),$=()=>{w.stop(),k&&vs(k.effects,w)};return l?n?B():S=w.run():u==="post"?et(w.run.bind(w),o&&o.suspense):w.run(),y&&y.push($),$}function xf(t,l,n){const s=this.proxy,u=Ye(t)?t.includes(".")?hc(s,t):()=>s[t]:t.bind(s,s);let d;ve(l)?d=l:(d=l.handler,n=l);const p=Bi(this),m=Ul(u,d.bind(s),n);return p(),m}function hc(t,l){const n=l.split(".");return()=>{let s=t;for(let u=0;u<n.length&&s;u++)s=s[n[u]];return s}}function hi(t,l,n=0,s){if(!Le(t)||t.__v_skip)return t;if(l&&l>0){if(n>=l)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),it(t))hi(t.value,l,n,s);else if(ce(t))for(let u=0;u<t.length;u++)hi(t[u],l,n,s);else if($i(t)||Ni(t))t.forEach(u=>{hi(u,l,n,s)});else if(Rd(t))for(const u in t)hi(t[u],l,n,s);return t}function Gl(t,l){if(Je===null)return t;const n=Xa(Je)||Je.proxy,s=t.dirs||(t.dirs=[]);for(let u=0;u<l.length;u++){let[d,p,m,o=Fe]=l[u];d&&(ve(d)&&(d={mounted:d,updated:d}),d.deep&&hi(p),s.push({dir:d,instance:n,value:p,oldValue:void 0,arg:m,modifiers:o}))}return t}function Rt(t,l,n,s){const u=t.dirs,d=l&&l.dirs;for(let p=0;p<u.length;p++){const m=u[p];d&&(m.oldValue=d[p].value);let o=m.dir[s];o&&(Ti(),vt(o,n,8,[t.el,m,t,l]),xi())}}const Zt=Symbol("_leaveCb"),ia=Symbol("_enterCb");function Os(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ri(()=>{t.isMounted=!0}),Ja(()=>{t.isUnmounting=!0}),t}const wt=[Function,Array],Hs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wt,onEnter:wt,onAfterEnter:wt,onEnterCancelled:wt,onBeforeLeave:wt,onLeave:wt,onAfterLeave:wt,onLeaveCancelled:wt,onBeforeAppear:wt,onAppear:wt,onAfterAppear:wt,onAppearCancelled:wt},Ef={name:"BaseTransition",props:Hs,setup(t,{slots:l}){const n=Mt(),s=Os();let u;return()=>{const d=l.default&&Ua(l.default(),!0);if(!d||!d.length)return;let p=d[0];if(d.length>1){for(const y of d)if(y.type!==st){p=y;break}}const m=Re(t),{mode:o}=m;if(s.isLeaving)return rn(p);const r=Ao(p);if(!r)return rn(p);const g=Ki(r,m,s,n);Si(r,g);const c=n.subTree,h=c&&Ao(c);let v=!1;const{getTransitionKey:f}=r.type;if(f){const y=f();u===void 0?u=y:y!==u&&(u=y,v=!0)}if(h&&h.type!==st&&(!Tt(r,h)||v)){const y=Ki(h,m,s,n);if(Si(h,y),o==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},rn(p);o==="in-out"&&r.type!==st&&(y.delayLeave=(S,B,b)=>{const w=bc(s,h);w[String(h.key)]=h,S[Zt]=()=>{B(),S[Zt]=void 0,delete g.delayedLeave},g.delayedLeave=b})}return p}}},_c=Ef;function bc(t,l){const{leavingVNodes:n}=t;let s=n.get(l.type);return s||(s=Object.create(null),n.set(l.type,s)),s}function Ki(t,l,n,s){const{appear:u,mode:d,persisted:p=!1,onBeforeEnter:m,onEnter:o,onAfterEnter:r,onEnterCancelled:g,onBeforeLeave:c,onLeave:h,onAfterLeave:v,onLeaveCancelled:f,onBeforeAppear:y,onAppear:S,onAfterAppear:B,onAppearCancelled:b}=l,w=String(t.key),k=bc(n,t),$=(V,z)=>{V&&vt(V,s,9,z)},x=(V,z)=>{const L=z[1];$(V,z),ce(V)?V.every(Y=>Y.length<=1)&&L():V.length<=1&&L()},D={mode:d,persisted:p,beforeEnter(V){let z=m;if(!n.isMounted)if(u)z=y||m;else return;V[Zt]&&V[Zt](!0);const L=k[w];L&&Tt(t,L)&&L.el[Zt]&&L.el[Zt](),$(z,[V])},enter(V){let z=o,L=r,Y=g;if(!n.isMounted)if(u)z=S||o,L=B||r,Y=b||g;else return;let j=!1;const de=V[ia]=ke=>{j||(j=!0,ke?$(Y,[V]):$(L,[V]),D.delayedLeave&&D.delayedLeave(),V[ia]=void 0)};z?x(z,[V,de]):de()},leave(V,z){const L=String(t.key);if(V[ia]&&V[ia](!0),n.isUnmounting)return z();$(c,[V]);let Y=!1;const j=V[Zt]=de=>{Y||(Y=!0,z(),de?$(f,[V]):$(v,[V]),V[Zt]=void 0,k[L]===t&&delete k[L])};k[L]=t,h?x(h,[V,j]):j()},clone(V){return Ki(V,l,n,s)}};return D}function rn(t){if(Yl(t))return t=zt(t),t.children=null,t}function Ao(t){return Yl(t)?t.children?t.children[0]:void 0:t}function Si(t,l){t.shapeFlag&6&&t.component?Si(t.component.subTree,l):t.shapeFlag&128?(t.ssContent.transition=l.clone(t.ssContent),t.ssFallback.transition=l.clone(t.ssFallback)):t.transition=l}function Ua(t,l=!1,n){let s=[],u=0;for(let d=0;d<t.length;d++){let p=t[d];const m=n==null?p.key:String(n)+String(p.key!=null?p.key:d);p.type===we?(p.patchFlag&128&&u++,s=s.concat(Ua(p.children,l,m))):(l||p.type!==st)&&s.push(m!=null?zt(p,{key:m}):p)}if(u>1)for(let d=0;d<s.length;d++)s[d].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function E(t,l){return ve(t)?Ge({name:t.name},l,{setup:t}):t}const yi=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Rf(t){ve(t)&&(t={loader:t});const{loader:l,loadingComponent:n,errorComponent:s,delay:u=200,timeout:d,suspensible:p=!0,onError:m}=t;let o=null,r,g=0;const c=()=>(g++,o=null,h()),h=()=>{let v;return o||(v=o=l().catch(f=>{if(f=f instanceof Error?f:new Error(String(f)),m)return new Promise((y,S)=>{m(f,()=>y(c()),()=>S(f),g+1)});throw f}).then(f=>v!==o&&o?o:(f&&(f.__esModule||f[Symbol.toStringTag]==="Module")&&(f=f.default),r=f,f)))};return E({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return r},setup(){const v=We;if(r)return()=>un(r,v);const f=b=>{o=null,Ei(b,v,13,!s)};if(p&&v.suspense||Jl)return h().then(b=>()=>un(b,v)).catch(b=>(f(b),()=>s?e(s,{error:b}):null));const y=H(!1),S=H(),B=H(!!u);return u&&setTimeout(()=>{B.value=!1},u),d!=null&&setTimeout(()=>{if(!y.value&&!S.value){const b=new Error(`Async component timed out after ${d}ms.`);f(b),S.value=b}},d),h().then(()=>{y.value=!0,v.parent&&Yl(v.parent.vnode)&&(v.parent.effect.dirty=!0,Oa(v.parent.update))}).catch(b=>{f(b),S.value=b}),()=>{if(y.value&&r)return un(r,v);if(S.value&&s)return e(s,{error:S.value});if(n&&!B.value)return e(n)}}})}function un(t,l){const{ref:n,props:s,children:u,ce:d}=l.vnode,p=e(t,s,u);return p.ref=n,p.ce=d,delete l.vnode.ce,p}const Yl=t=>t.type.__isKeepAlive,Pf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:l}){const n=Mt(),s=n.ctx;if(!s.renderer)return()=>{const b=l.default&&l.default();return b&&b.length===1?b[0]:b};const u=new Map,d=new Set;let p=null;const m=n.suspense,{renderer:{p:o,m:r,um:g,o:{createElement:c}}}=s,h=c("div");s.activate=(b,w,k,$,x)=>{const D=b.component;r(b,w,k,0,m),o(D.vnode,b,w,k,D,m,$,b.slotScopeIds,x),et(()=>{D.isDeactivated=!1,D.a&&Li(D.a);const V=b.props&&b.props.onVnodeMounted;V&&dt(V,D.parent,b)},m)},s.deactivate=b=>{const w=b.component;r(b,h,null,1,m),et(()=>{w.da&&Li(w.da);const k=b.props&&b.props.onVnodeUnmounted;k&&dt(k,w.parent,b),w.isDeactivated=!0},m)};function v(b){dn(b),g(b,n,m,!0)}function f(b){u.forEach((w,k)=>{const $=Wn(w.type);$&&(!b||!b($))&&y(k)})}function y(b){const w=u.get(b);!p||!Tt(w,p)?v(w):p&&dn(p),u.delete(b),d.delete(b)}nt(()=>[t.include,t.exclude],([b,w])=>{b&&f(k=>gl(b,k)),w&&f(k=>!gl(w,k))},{flush:"post",deep:!0});let S=null;const B=()=>{S!=null&&u.set(S,cn(n.subTree))};return ri(B),Ya(B),Ja(()=>{u.forEach(b=>{const{subTree:w,suspense:k}=n,$=cn(w);if(b.type===$.type&&b.key===$.key){dn($);const x=$.component.da;x&&et(x,k);return}v(b)})}),()=>{if(S=null,!l.default)return null;const b=l.default(),w=b[0];if(b.length>1)return p=null,b;if(!Bt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return p=null,w;let k=cn(w);const $=k.type,x=Wn(yi(k)?k.type.__asyncResolved||{}:$),{include:D,exclude:V,max:z}=t;if(D&&(!x||!gl(D,x))||V&&x&&gl(V,x))return p=k,w;const L=k.key==null?$:k.key,Y=u.get(L);return k.el&&(k=zt(k),w.shapeFlag&128&&(w.ssContent=k)),S=L,Y?(k.el=Y.el,k.component=Y.component,k.transition&&Si(k,k.transition),k.shapeFlag|=512,d.delete(L),d.add(L)):(d.add(L),z&&d.size>parseInt(z,10)&&y(d.values().next().value)),k.shapeFlag|=256,p=k,dc(w.type)?w:k}}},zf=Pf;function gl(t,l){return ce(t)?t.some(n=>gl(n,l)):Ye(t)?t.split(",").includes(l):mp(t)?t.test(l):!1}function js(t,l){vc(t,"a",l)}function qs(t,l){vc(t,"da",l)}function vc(t,l,n=We){const s=t.__wdc||(t.__wdc=()=>{let u=n;for(;u;){if(u.isDeactivated)return;u=u.parent}return t()});if(Ga(l,s,n),n){let u=n.parent;for(;u&&u.parent;)Yl(u.parent.vnode)&&Df(s,l,n,u),u=u.parent}}function Df(t,l,n,s){const u=Ga(l,t,s,!0);Ri(()=>{vs(s[l],u)},n)}function dn(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function cn(t){return t.shapeFlag&128?t.ssContent:t}function Ga(t,l,n=We,s=!1){if(n){const u=n[t]||(n[t]=[]),d=l.__weh||(l.__weh=(...p)=>{if(n.isUnmounted)return;Ti();const m=Bi(n),o=vt(l,n,t,p);return m(),xi(),o});return s?u.unshift(d):u.push(d),d}}const Ut=t=>(l,n=We)=>(!Jl||t==="sp")&&Ga(t,(...s)=>l(...s),n),yc=Ut("bm"),ri=Ut("m"),Cc=Ut("bu"),Ya=Ut("u"),Ja=Ut("bum"),Ri=Ut("um"),wc=Ut("sp"),Sc=Ut("rtg"),Ac=Ut("rtc");function kc(t,l=We){Ga("ec",t,l)}function Ke(t,l,n,s){let u;const d=n&&n[s];if(ce(t)||Ye(t)){u=new Array(t.length);for(let p=0,m=t.length;p<m;p++)u[p]=l(t[p],p,void 0,d&&d[p])}else if(typeof t=="number"){u=new Array(t);for(let p=0;p<t;p++)u[p]=l(p+1,p,void 0,d&&d[p])}else if(Le(t))if(t[Symbol.iterator])u=Array.from(t,(p,m)=>l(p,m,void 0,d&&d[m]));else{const p=Object.keys(t);u=new Array(p.length);for(let m=0,o=p.length;m<o;m++){const r=p[m];u[m]=l(t[r],r,m,d&&d[m])}}else u=[];return n&&(n[s]=u),u}function Mf(t,l){for(let n=0;n<l.length;n++){const s=l[n];if(ce(s))for(let u=0;u<s.length;u++)t[s[u].name]=s[u].fn;else s&&(t[s.name]=s.key?(...u)=>{const d=s.fn(...u);return d&&(d.key=s.key),d}:s.fn)}return t}function Xi(t,l,n={},s,u){if(Je.isCE||Je.parent&&yi(Je.parent)&&Je.parent.isCE)return l!=="default"&&(n.name=l),e("slot",n,s&&s());let d=t[l];d&&d._c&&(d._d=!1),I();const p=d&&Bc(d(n)),m=te(we,{key:n.key||p&&p.key||`_${l}`},p||(s?s():[]),p&&t._===1?64:-2);return!u&&m.scopeId&&(m.slotScopeIds=[m.scopeId+"-s"]),d&&d._c&&(d._d=!0),m}function Bc(t){return t.some(l=>Bt(l)?!(l.type===st||l.type===we&&!Bc(l.children)):!0)?t:null}function If(t,l){const n={};for(const s in t)n[l&&/[A-Z]/.test(s)?`on:${s}`:wl(s)]=t[s];return n}const Fn=t=>t?Gc(t)?Xa(t)||t.proxy:Fn(t.parent):null,Sl=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fn(t.parent),$root:t=>Fn(t.root),$emit:t=>t.emit,$options:t=>Us(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Oa(t.update)}),$nextTick:t=>t.n||(t.n=sl.bind(t.proxy)),$watch:t=>xf.bind(t)}),mn=(t,l)=>t!==Fe&&!t.__isScriptSetup&&ze(t,l),Nn={get({_:t},l){const{ctx:n,setupState:s,data:u,props:d,accessCache:p,type:m,appContext:o}=t;let r;if(l[0]!=="$"){const v=p[l];if(v!==void 0)switch(v){case 1:return s[l];case 2:return u[l];case 4:return n[l];case 3:return d[l]}else{if(mn(s,l))return p[l]=1,s[l];if(u!==Fe&&ze(u,l))return p[l]=2,u[l];if((r=t.propsOptions[0])&&ze(r,l))return p[l]=3,d[l];if(n!==Fe&&ze(n,l))return p[l]=4,n[l];Ln&&(p[l]=0)}}const g=Sl[l];let c,h;if(g)return l==="$attrs"&&pt(t,"get",l),g(t);if((c=m.__cssModules)&&(c=c[l]))return c;if(n!==Fe&&ze(n,l))return p[l]=4,n[l];if(h=o.config.globalProperties,ze(h,l))return h[l]},set({_:t},l,n){const{data:s,setupState:u,ctx:d}=t;return mn(u,l)?(u[l]=n,!0):s!==Fe&&ze(s,l)?(s[l]=n,!0):ze(t.props,l)||l[0]==="$"&&l.slice(1)in t?!1:(d[l]=n,!0)},has({_:{data:t,setupState:l,accessCache:n,ctx:s,appContext:u,propsOptions:d}},p){let m;return!!n[p]||t!==Fe&&ze(t,p)||mn(l,p)||(m=d[0])&&ze(m,p)||ze(s,p)||ze(Sl,p)||ze(u.config.globalProperties,p)},defineProperty(t,l,n){return n.get!=null?t._.accessCache[l]=0:ze(n,"value")&&this.set(t,l,n.value,null),Reflect.defineProperty(t,l,n)}},Vf=Ge({},Nn,{get(t,l){if(l!==Symbol.unscopables)return Nn.get(t,l,t)},has(t,l){return l[0]!=="_"&&!_p(l)}});function Ff(){return null}function Nf(){return null}function Lf(t){}function Of(t){}function Hf(){return null}function jf(){}function qf(t,l){return null}function Uf(){return $c().slots}function Gf(){return $c().attrs}function $c(){const t=Mt();return t.setupContext||(t.setupContext=Wc(t))}function Vl(t){return ce(t)?t.reduce((l,n)=>(l[n]=null,l),{}):t}function Yf(t,l){const n=Vl(t);for(const s in l){if(s.startsWith("__skip"))continue;let u=n[s];u?ce(u)||ve(u)?u=n[s]={type:u,default:l[s]}:u.default=l[s]:u===null&&(u=n[s]={default:l[s]}),u&&l[`__skip_${s}`]&&(u.skipFactory=!0)}return n}function Jf(t,l){return!t||!l?t||l:ce(t)&&ce(l)?t.concat(l):Ge({},Vl(t),Vl(l))}function Wf(t,l){const n={};for(const s in t)l.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function Kf(t){const l=Mt();let n=t();return Gn(),ys(n)&&(n=n.catch(s=>{throw Bi(l),s})),[n,()=>Bi(l)]}let Ln=!0;function Xf(t){const l=Us(t),n=t.proxy,s=t.ctx;Ln=!1,l.beforeCreate&&ko(l.beforeCreate,t,"bc");const{data:u,computed:d,methods:p,watch:m,provide:o,inject:r,created:g,beforeMount:c,mounted:h,beforeUpdate:v,updated:f,activated:y,deactivated:S,beforeDestroy:B,beforeUnmount:b,destroyed:w,unmounted:k,render:$,renderTracked:x,renderTriggered:D,errorCaptured:V,serverPrefetch:z,expose:L,inheritAttrs:Y,components:j,directives:de,filters:ke}=l;if(r&&Qf(r,s,null),p)for(const oe in p){const Z=p[oe];ve(Z)&&(s[oe]=Z.bind(n))}if(u){const oe=u.call(n,n);Le(oe)&&(t.data=qt(oe))}if(Ln=!0,d)for(const oe in d){const Z=d[oe],xe=ve(Z)?Z.bind(n,n):ve(Z.get)?Z.get.bind(n,n):ct,qe=!ve(Z)&&ve(Z.set)?Z.set.bind(n):ct,Xe=F({get:xe,set:qe});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Oe=>Xe.value=Oe})}if(m)for(const oe in m)Tc(m[oe],s,n,oe);if(o){const oe=ve(o)?o.call(n):o;Reflect.ownKeys(oe).forEach(Z=>{tt(Z,oe[Z])})}g&&ko(g,t,"c");function G(oe,Z){ce(Z)?Z.forEach(xe=>oe(xe.bind(n))):Z&&oe(Z.bind(n))}if(G(yc,c),G(ri,h),G(Cc,v),G(Ya,f),G(js,y),G(qs,S),G(kc,V),G(Ac,x),G(Sc,D),G(Ja,b),G(Ri,k),G(wc,z),ce(L))if(L.length){const oe=t.exposed||(t.exposed={});L.forEach(Z=>{Object.defineProperty(oe,Z,{get:()=>n[Z],set:xe=>n[Z]=xe})})}else t.exposed||(t.exposed={});$&&t.render===ct&&(t.render=$),Y!=null&&(t.inheritAttrs=Y),j&&(t.components=j),de&&(t.directives=de)}function Qf(t,l,n=ct){ce(t)&&(t=On(t));for(const s in t){const u=t[s];let d;Le(u)?"default"in u?d=Me(u.from||s,u.default,!0):d=Me(u.from||s):d=Me(u),it(d)?Object.defineProperty(l,s,{enumerable:!0,configurable:!0,get:()=>d.value,set:p=>d.value=p}):l[s]=d}}function ko(t,l,n){vt(ce(t)?t.map(s=>s.bind(l.proxy)):t.bind(l.proxy),l,n)}function Tc(t,l,n,s){const u=s.includes(".")?hc(n,s):()=>n[s];if(Ye(t)){const d=l[t];ve(d)&&nt(u,d)}else if(ve(t))nt(u,t.bind(n));else if(Le(t))if(ce(t))t.forEach(d=>Tc(d,l,n,s));else{const d=ve(t.handler)?t.handler.bind(n):l[t.handler];ve(d)&&nt(u,d,t)}}function Us(t){const l=t.type,{mixins:n,extends:s}=l,{mixins:u,optionsCache:d,config:{optionMergeStrategies:p}}=t.appContext,m=d.get(l);let o;return m?o=m:!u.length&&!n&&!s?o=l:(o={},u.length&&u.forEach(r=>va(o,r,p,!0)),va(o,l,p)),Le(l)&&d.set(l,o),o}function va(t,l,n,s=!1){const{mixins:u,extends:d}=l;d&&va(t,d,n,!0),u&&u.forEach(p=>va(t,p,n,!0));for(const p in l)if(!(s&&p==="expose")){const m=Zf[p]||n&&n[p];t[p]=m?m(t[p],l[p]):l[p]}return t}const Zf={data:Bo,props:$o,emits:$o,methods:hl,computed:hl,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:hl,directives:hl,watch:tg,provide:Bo,inject:eg};function Bo(t,l){return l?t?function(){return Ge(ve(t)?t.call(this,this):t,ve(l)?l.call(this,this):l)}:l:t}function eg(t,l){return hl(On(t),On(l))}function On(t){if(ce(t)){const l={};for(let n=0;n<t.length;n++)l[t[n]]=t[n];return l}return t}function ot(t,l){return t?[...new Set([].concat(t,l))]:l}function hl(t,l){return t?Ge(Object.create(null),t,l):l}function $o(t,l){return t?ce(t)&&ce(l)?[...new Set([...t,...l])]:Ge(Object.create(null),Vl(t),Vl(l??{})):l}function tg(t,l){if(!t)return l;if(!l)return t;const n=Ge(Object.create(null),t);for(const s in l)n[s]=ot(t[s],l[s]);return n}function xc(){return{app:null,config:{isNativeTag:dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ig=0;function lg(t,l){return function(s,u=null){ve(s)||(s=Ge({},s)),u!=null&&!Le(u)&&(u=null);const d=xc(),p=new WeakSet;let m=!1;const o=d.app={_uid:ig++,_component:s,_props:u,_container:null,_context:d,_instance:null,version:Xc,get config(){return d.config},set config(r){},use(r,...g){return p.has(r)||(r&&ve(r.install)?(p.add(r),r.install(o,...g)):ve(r)&&(p.add(r),r(o,...g))),o},mixin(r){return d.mixins.includes(r)||d.mixins.push(r),o},component(r,g){return g?(d.components[r]=g,o):d.components[r]},directive(r,g){return g?(d.directives[r]=g,o):d.directives[r]},mount(r,g,c){if(!m){const h=e(s,u);return h.appContext=d,c===!0?c="svg":c===!1&&(c=void 0),g&&l?l(h,r):t(h,r,c),m=!0,o._container=r,r.__vue_app__=o,Xa(h.component)||h.component.proxy}},unmount(){m&&(t(null,o._container),delete o._container.__vue_app__)},provide(r,g){return d.provides[r]=g,o},runWithContext(r){Fl=o;try{return r()}finally{Fl=null}}};return o}}let Fl=null;function tt(t,l){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[t]=l}}function Me(t,l,n=!1){const s=We||Je;if(s||Fl){const u=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Fl._context.provides;if(u&&t in u)return u[t];if(arguments.length>1)return n&&ve(l)?l.call(s&&s.proxy):l}}function ag(){return!!(We||Je||Fl)}function ng(t,l,n,s=!1){const u={},d={};fa(d,Ka,1),t.propsDefaults=Object.create(null),Ec(t,l,u,d);for(const p in t.propsOptions[0])p in u||(u[p]=void 0);n?t.props=s?u:Xd(u):t.type.props?t.props=u:t.props=d,t.attrs=d}function sg(t,l,n,s){const{props:u,attrs:d,vnode:{patchFlag:p}}=t,m=Re(u),[o]=t.propsOptions;let r=!1;if((s||p>0)&&!(p&16)){if(p&8){const g=t.vnode.dynamicProps;for(let c=0;c<g.length;c++){let h=g[c];if(Ha(t.emitsOptions,h))continue;const v=l[h];if(o)if(ze(d,h))v!==d[h]&&(d[h]=v,r=!0);else{const f=rt(h);u[f]=Hn(o,m,f,v,t,!1)}else v!==d[h]&&(d[h]=v,r=!0)}}}else{Ec(t,l,u,d)&&(r=!0);let g;for(const c in m)(!l||!ze(l,c)&&((g=bt(c))===c||!ze(l,g)))&&(o?n&&(n[c]!==void 0||n[g]!==void 0)&&(u[c]=Hn(o,m,c,void 0,t,!0)):delete u[c]);if(d!==m)for(const c in d)(!l||!ze(l,c))&&(delete d[c],r=!0)}r&&Lt(t,"set","$attrs")}function Ec(t,l,n,s){const[u,d]=t.propsOptions;let p=!1,m;if(l)for(let o in l){if(Cl(o))continue;const r=l[o];let g;u&&ze(u,g=rt(o))?!d||!d.includes(g)?n[g]=r:(m||(m={}))[g]=r:Ha(t.emitsOptions,o)||(!(o in s)||r!==s[o])&&(s[o]=r,p=!0)}if(d){const o=Re(n),r=m||Fe;for(let g=0;g<d.length;g++){const c=d[g];n[c]=Hn(u,o,c,r[c],t,!ze(r,c))}}return p}function Hn(t,l,n,s,u,d){const p=t[n];if(p!=null){const m=ze(p,"default");if(m&&s===void 0){const o=p.default;if(p.type!==Function&&!p.skipFactory&&ve(o)){const{propsDefaults:r}=u;if(n in r)s=r[n];else{const g=Bi(u);s=r[n]=o.call(null,l),g()}}else s=o}p[0]&&(d&&!m?s=!1:p[1]&&(s===""||s===bt(n))&&(s=!0))}return s}function Rc(t,l,n=!1){const s=l.propsCache,u=s.get(t);if(u)return u;const d=t.props,p={},m=[];let o=!1;if(!ve(t)){const g=c=>{o=!0;const[h,v]=Rc(c,l,!0);Ge(p,h),v&&m.push(...v)};!n&&l.mixins.length&&l.mixins.forEach(g),t.extends&&g(t.extends),t.mixins&&t.mixins.forEach(g)}if(!d&&!o)return Le(t)&&s.set(t,Fi),Fi;if(ce(d))for(let g=0;g<d.length;g++){const c=rt(d[g]);To(c)&&(p[c]=Fe)}else if(d)for(const g in d){const c=rt(g);if(To(c)){const h=d[g],v=p[c]=ce(h)||ve(h)?{type:h}:Ge({},h);if(v){const f=Ro(Boolean,v.type),y=Ro(String,v.type);v[0]=f>-1,v[1]=y<0||f<y,(f>-1||ze(v,"default"))&&m.push(c)}}}const r=[p,m];return Le(t)&&s.set(t,r),r}function To(t){return t[0]!=="$"}function xo(t){const l=t&&t.toString().match(/^\s*(function|class) (\w+)/);return l?l[2]:t===null?"null":""}function Eo(t,l){return xo(t)===xo(l)}function Ro(t,l){return ce(l)?l.findIndex(n=>Eo(n,t)):ve(l)&&Eo(l,t)?0:-1}const Pc=t=>t[0]==="_"||t==="$stable",Gs=t=>ce(t)?t.map(ht):[ht(t)],og=(t,l,n)=>{if(l._n)return l;const s=i((...u)=>Gs(l(...u)),n);return s._c=!1,s},zc=(t,l,n)=>{const s=t._ctx;for(const u in t){if(Pc(u))continue;const d=t[u];if(ve(d))l[u]=og(u,d,s);else if(d!=null){const p=Gs(d);l[u]=()=>p}}},Dc=(t,l)=>{const n=Gs(l);t.slots.default=()=>n},rg=(t,l)=>{if(t.vnode.shapeFlag&32){const n=l._;n?(t.slots=Re(l),fa(l,"_",n)):zc(l,t.slots={})}else t.slots={},l&&Dc(t,l);fa(t.slots,Ka,1)},ug=(t,l,n)=>{const{vnode:s,slots:u}=t;let d=!0,p=Fe;if(s.shapeFlag&32){const m=l._;m?n&&m===1?d=!1:(Ge(u,l),!n&&m===1&&delete u._):(d=!l.$stable,zc(l,u)),p=l}else l&&(Dc(t,l),p={default:1});if(d)for(const m in u)!Pc(m)&&p[m]==null&&delete u[m]};function ya(t,l,n,s,u=!1){if(ce(t)){t.forEach((h,v)=>ya(h,l&&(ce(l)?l[v]:l),n,s,u));return}if(yi(s)&&!u)return;const d=s.shapeFlag&4?Xa(s.component)||s.component.proxy:s.el,p=u?null:d,{i:m,r:o}=t,r=l&&l.r,g=m.refs===Fe?m.refs={}:m.refs,c=m.setupState;if(r!=null&&r!==o&&(Ye(r)?(g[r]=null,ze(c,r)&&(c[r]=null)):it(r)&&(r.value=null)),ve(o))Ot(o,m,12,[p,g]);else{const h=Ye(o),v=it(o),f=t.f;if(h||v){const y=()=>{if(f){const S=h?ze(c,o)?c[o]:g[o]:o.value;u?ce(S)&&vs(S,d):ce(S)?S.includes(d)||S.push(d):h?(g[o]=[d],ze(c,o)&&(c[o]=g[o])):(o.value=[d],t.k&&(g[t.k]=o.value))}else h?(g[o]=p,ze(c,o)&&(c[o]=p)):v&&(o.value=p,t.k&&(g[t.k]=p))};u||f?y():(y.id=-1,et(y,n))}}}let Jt=!1;const dg=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",cg=t=>t.namespaceURI.includes("MathML"),la=t=>{if(dg(t))return"svg";if(cg(t))return"mathml"},aa=t=>t.nodeType===8;function mg(t){const{mt:l,p:n,o:{patchProp:s,createText:u,nextSibling:d,parentNode:p,remove:m,insert:o,createComment:r}}=t,g=(w,k)=>{if(!k.hasChildNodes()){n(null,w,k),ba(),k._vnode=w;return}Jt=!1,c(k.firstChild,w,null,null,null),ba(),k._vnode=w,Jt&&console.error("Hydration completed but contains mismatches.")},c=(w,k,$,x,D,V=!1)=>{const z=aa(w)&&w.data==="[",L=()=>y(w,k,$,x,D,z),{type:Y,ref:j,shapeFlag:de,patchFlag:ke}=k;let O=w.nodeType;k.el=w,ke===-2&&(V=!1,k.dynamicChildren=null);let G=null;switch(Y){case Ai:O!==3?k.children===""?(o(k.el=u(""),p(w),w),G=w):G=L():(w.data!==k.children&&(Jt=!0,w.data=k.children),G=d(w));break;case st:b(w)?(G=d(w),B(k.el=w.content.firstChild,w,$)):O!==8||z?G=L():G=d(w);break;case Ci:if(z&&(w=d(w),O=w.nodeType),O===1||O===3){G=w;const oe=!k.children.length;for(let Z=0;Z<k.staticCount;Z++)oe&&(k.children+=G.nodeType===1?G.outerHTML:G.data),Z===k.staticCount-1&&(k.anchor=G),G=d(G);return z?d(G):G}else L();break;case we:z?G=f(w,k,$,x,D,V):G=L();break;default:if(de&1)(O!==1||k.type.toLowerCase()!==w.tagName.toLowerCase())&&!b(w)?G=L():G=h(w,k,$,x,D,V);else if(de&6){k.slotScopeIds=D;const oe=p(w);if(z?G=S(w):aa(w)&&w.data==="teleport start"?G=S(w,w.data,"teleport end"):G=d(w),l(k,oe,null,$,x,la(oe),V),yi(k)){let Z;z?(Z=e(we),Z.anchor=G?G.previousSibling:oe.lastChild):Z=w.nodeType===3?a(""):e("div"),Z.el=w,k.component.subTree=Z}}else de&64?O!==8?G=L():G=k.type.hydrate(w,k,$,x,D,V,t,v):de&128&&(G=k.type.hydrate(w,k,$,x,la(p(w)),D,V,t,c))}return j!=null&&ya(j,null,x,k),G},h=(w,k,$,x,D,V)=>{V=V||!!k.dynamicChildren;const{type:z,props:L,patchFlag:Y,shapeFlag:j,dirs:de,transition:ke}=k,O=z==="input"||z==="option";if(O||Y!==-1){de&&Rt(k,null,$,"created");let G=!1;if(b(w)){G=Fc(x,ke)&&$&&$.vnode.props&&$.vnode.props.appear;const Z=w.content.firstChild;G&&ke.beforeEnter(Z),B(Z,w,$),k.el=w=Z}if(j&16&&!(L&&(L.innerHTML||L.textContent))){let Z=v(w.firstChild,k,w,$,x,D,V);for(;Z;){Jt=!0;const xe=Z;Z=Z.nextSibling,m(xe)}}else j&8&&w.textContent!==k.children&&(Jt=!0,w.textContent=k.children);if(L)if(O||!V||Y&48)for(const Z in L)(O&&(Z.endsWith("value")||Z==="indeterminate")||Hl(Z)&&!Cl(Z)||Z[0]===".")&&s(w,Z,null,L[Z],void 0,void 0,$);else L.onClick&&s(w,"onClick",null,L.onClick,void 0,void 0,$);let oe;(oe=L&&L.onVnodeBeforeMount)&&dt(oe,$,k),de&&Rt(k,null,$,"beforeMount"),((oe=L&&L.onVnodeMounted)||de||G)&&cc(()=>{oe&&dt(oe,$,k),G&&ke.enter(w),de&&Rt(k,null,$,"mounted")},x)}return w.nextSibling},v=(w,k,$,x,D,V,z)=>{z=z||!!k.dynamicChildren;const L=k.children,Y=L.length;for(let j=0;j<Y;j++){const de=z?L[j]:L[j]=ht(L[j]);if(w)w=c(w,de,x,D,V,z);else{if(de.type===Ai&&!de.children)continue;Jt=!0,n(null,de,$,null,x,D,la($),V)}}return w},f=(w,k,$,x,D,V)=>{const{slotScopeIds:z}=k;z&&(D=D?D.concat(z):z);const L=p(w),Y=v(d(w),k,L,$,x,D,V);return Y&&aa(Y)&&Y.data==="]"?d(k.anchor=Y):(Jt=!0,o(k.anchor=r("]"),L,Y),Y)},y=(w,k,$,x,D,V)=>{if(Jt=!0,k.el=null,V){const Y=S(w);for(;;){const j=d(w);if(j&&j!==Y)m(j);else break}}const z=d(w),L=p(w);return m(w),n(null,k,L,z,$,x,la(L),D),z},S=(w,k="[",$="]")=>{let x=0;for(;w;)if(w=d(w),w&&aa(w)&&(w.data===k&&x++,w.data===$)){if(x===0)return d(w);x--}return w},B=(w,k,$)=>{const x=k.parentNode;x&&x.replaceChild(w,k);let D=$;for(;D;)D.vnode.el===k&&(D.vnode.el=D.subTree.el=w),D=D.parent},b=w=>w.nodeType===1&&w.tagName.toLowerCase()==="template";return[g,c]}const et=cc;function Mc(t){return Vc(t)}function Ic(t){return Vc(t,mg)}function Vc(t,l){const n=Pd();n.__VUE__=!0;const{insert:s,remove:u,patchProp:d,createElement:p,createText:m,createComment:o,setText:r,setElementText:g,parentNode:c,nextSibling:h,setScopeId:v=ct,insertStaticContent:f}=t,y=(T,P,N,J=null,W=null,ie=null,se=void 0,ee=null,le=!!P.dynamicChildren)=>{if(T===P)return;T&&!Tt(T,P)&&(J=ae(T),Oe(T,W,ie,!0),T=null),P.patchFlag===-2&&(le=!1,P.dynamicChildren=null);const{type:X,ref:ue,shapeFlag:_e}=P;switch(X){case Ai:S(T,P,N,J);break;case st:B(T,P,N,J);break;case Ci:T==null&&b(P,N,J,se);break;case we:j(T,P,N,J,W,ie,se,ee,le);break;default:_e&1?$(T,P,N,J,W,ie,se,ee,le):_e&6?de(T,P,N,J,W,ie,se,ee,le):(_e&64||_e&128)&&X.process(T,P,N,J,W,ie,se,ee,le,Ve)}ue!=null&&W&&ya(ue,T&&T.ref,ie,P||T,!P)},S=(T,P,N,J)=>{if(T==null)s(P.el=m(P.children),N,J);else{const W=P.el=T.el;P.children!==T.children&&r(W,P.children)}},B=(T,P,N,J)=>{T==null?s(P.el=o(P.children||""),N,J):P.el=T.el},b=(T,P,N,J)=>{[T.el,T.anchor]=f(T.children,P,N,J,T.el,T.anchor)},w=({el:T,anchor:P},N,J)=>{let W;for(;T&&T!==P;)W=h(T),s(T,N,J),T=W;s(P,N,J)},k=({el:T,anchor:P})=>{let N;for(;T&&T!==P;)N=h(T),u(T),T=N;u(P)},$=(T,P,N,J,W,ie,se,ee,le)=>{P.type==="svg"?se="svg":P.type==="math"&&(se="mathml"),T==null?x(P,N,J,W,ie,se,ee,le):z(T,P,W,ie,se,ee,le)},x=(T,P,N,J,W,ie,se,ee)=>{let le,X;const{props:ue,shapeFlag:_e,transition:fe,dirs:ye}=T;if(le=T.el=p(T.type,ie,ue&&ue.is,ue),_e&8?g(le,T.children):_e&16&&V(T.children,le,null,J,W,pn(T,ie),se,ee),ye&&Rt(T,null,J,"created"),D(le,T,T.scopeId,se,J),ue){for(const Ne in ue)Ne!=="value"&&!Cl(Ne)&&d(le,Ne,null,ue[Ne],ie,T.children,J,W,ne);"value"in ue&&d(le,"value",null,ue.value,ie),(X=ue.onVnodeBeforeMount)&&dt(X,J,T)}ye&&Rt(T,null,J,"beforeMount");const Ee=Fc(W,fe);Ee&&fe.beforeEnter(le),s(le,P,N),((X=ue&&ue.onVnodeMounted)||Ee||ye)&&et(()=>{X&&dt(X,J,T),Ee&&fe.enter(le),ye&&Rt(T,null,J,"mounted")},W)},D=(T,P,N,J,W)=>{if(N&&v(T,N),J)for(let ie=0;ie<J.length;ie++)v(T,J[ie]);if(W){let ie=W.subTree;if(P===ie){const se=W.vnode;D(T,se,se.scopeId,se.slotScopeIds,W.parent)}}},V=(T,P,N,J,W,ie,se,ee,le=0)=>{for(let X=le;X<T.length;X++){const ue=T[X]=ee?ei(T[X]):ht(T[X]);y(null,ue,P,N,J,W,ie,se,ee)}},z=(T,P,N,J,W,ie,se)=>{const ee=P.el=T.el;let{patchFlag:le,dynamicChildren:X,dirs:ue}=P;le|=T.patchFlag&16;const _e=T.props||Fe,fe=P.props||Fe;let ye;if(N&&ci(N,!1),(ye=fe.onVnodeBeforeUpdate)&&dt(ye,N,P,T),ue&&Rt(P,T,N,"beforeUpdate"),N&&ci(N,!0),X?L(T.dynamicChildren,X,ee,N,J,pn(P,W),ie):se||Z(T,P,ee,null,N,J,pn(P,W),ie,!1),le>0){if(le&16)Y(ee,P,_e,fe,N,J,W);else if(le&2&&_e.class!==fe.class&&d(ee,"class",null,fe.class,W),le&4&&d(ee,"style",_e.style,fe.style,W),le&8){const Ee=P.dynamicProps;for(let Ne=0;Ne<Ee.length;Ne++){const Ue=Ee[Ne],Qe=_e[Ue],$t=fe[Ue];($t!==Qe||Ue==="value")&&d(ee,Ue,Qe,$t,W,T.children,N,J,ne)}}le&1&&T.children!==P.children&&g(ee,P.children)}else!se&&X==null&&Y(ee,P,_e,fe,N,J,W);((ye=fe.onVnodeUpdated)||ue)&&et(()=>{ye&&dt(ye,N,P,T),ue&&Rt(P,T,N,"updated")},J)},L=(T,P,N,J,W,ie,se)=>{for(let ee=0;ee<P.length;ee++){const le=T[ee],X=P[ee],ue=le.el&&(le.type===we||!Tt(le,X)||le.shapeFlag&70)?c(le.el):N;y(le,X,ue,null,J,W,ie,se,!0)}},Y=(T,P,N,J,W,ie,se)=>{if(N!==J){if(N!==Fe)for(const ee in N)!Cl(ee)&&!(ee in J)&&d(T,ee,N[ee],null,se,P.children,W,ie,ne);for(const ee in J){if(Cl(ee))continue;const le=J[ee],X=N[ee];le!==X&&ee!=="value"&&d(T,ee,X,le,se,P.children,W,ie,ne)}"value"in J&&d(T,"value",N.value,J.value,se)}},j=(T,P,N,J,W,ie,se,ee,le)=>{const X=P.el=T?T.el:m(""),ue=P.anchor=T?T.anchor:m("");let{patchFlag:_e,dynamicChildren:fe,slotScopeIds:ye}=P;ye&&(ee=ee?ee.concat(ye):ye),T==null?(s(X,N,J),s(ue,N,J),V(P.children||[],N,ue,W,ie,se,ee,le)):_e>0&&_e&64&&fe&&T.dynamicChildren?(L(T.dynamicChildren,fe,N,W,ie,se,ee),(P.key!=null||W&&P===W.subTree)&&Ys(T,P,!0)):Z(T,P,N,ue,W,ie,se,ee,le)},de=(T,P,N,J,W,ie,se,ee,le)=>{P.slotScopeIds=ee,T==null?P.shapeFlag&512?W.ctx.activate(P,N,J,se,le):ke(P,N,J,W,ie,se,le):O(T,P,le)},ke=(T,P,N,J,W,ie,se)=>{const ee=T.component=Uc(T,J,W);if(Yl(T)&&(ee.ctx.renderer=Ve),Yc(ee),ee.asyncDep){if(W&&W.registerDep(ee,G),!T.el){const le=ee.subTree=e(st);B(null,le,P,N)}}else G(ee,T,P,N,W,ie,se)},O=(T,P,N)=>{const J=P.component=T.component;if(yf(T,P,N))if(J.asyncDep&&!J.asyncResolved){oe(J,P,N);return}else J.next=P,pf(J.update),J.effect.dirty=!0,J.update();else P.el=T.el,J.vnode=P},G=(T,P,N,J,W,ie,se)=>{const ee=()=>{if(T.isMounted){let{next:ue,bu:_e,u:fe,parent:ye,vnode:Ee}=T;{const zi=Nc(T);if(zi){ue&&(ue.el=Ee.el,oe(T,ue,se)),zi.asyncDep.then(()=>{T.isUnmounted||ee()});return}}let Ne=ue,Ue;ci(T,!1),ue?(ue.el=Ee.el,oe(T,ue,se)):ue=Ee,_e&&Li(_e),(Ue=ue.props&&ue.props.onVnodeBeforeUpdate)&&dt(Ue,ye,ue,Ee),ci(T,!0);const Qe=ca(T),$t=T.subTree;T.subTree=Qe,y($t,Qe,c($t.el),ae($t),T,W,ie),ue.el=Qe.el,Ne===null&&Is(T,Qe.el),fe&&et(fe,W),(Ue=ue.props&&ue.props.onVnodeUpdated)&&et(()=>dt(Ue,ye,ue,Ee),W)}else{let ue;const{el:_e,props:fe}=P,{bm:ye,m:Ee,parent:Ne}=T,Ue=yi(P);if(ci(T,!1),ye&&Li(ye),!Ue&&(ue=fe&&fe.onVnodeBeforeMount)&&dt(ue,Ne,P),ci(T,!0),_e&&Ae){const Qe=()=>{T.subTree=ca(T),Ae(_e,T.subTree,T,W,null)};Ue?P.type.__asyncLoader().then(()=>!T.isUnmounted&&Qe()):Qe()}else{const Qe=T.subTree=ca(T);y(null,Qe,N,J,T,W,ie),P.el=Qe.el}if(Ee&&et(Ee,W),!Ue&&(ue=fe&&fe.onVnodeMounted)){const Qe=P;et(()=>dt(ue,Ne,Qe),W)}(P.shapeFlag&256||Ne&&yi(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&T.a&&et(T.a,W),T.isMounted=!0,P=N=J=null}},le=T.effect=new Wi(ee,ct,()=>Oa(X),T.scope),X=T.update=()=>{le.dirty&&le.run()};X.id=T.uid,ci(T,!0),X()},oe=(T,P,N)=>{P.component=T;const J=T.vnode.props;T.vnode=P,T.next=null,sg(T,P.props,J,N),ug(T,P.children,N),Ti(),yo(T),xi()},Z=(T,P,N,J,W,ie,se,ee,le=!1)=>{const X=T&&T.children,ue=T?T.shapeFlag:0,_e=P.children,{patchFlag:fe,shapeFlag:ye}=P;if(fe>0){if(fe&128){qe(X,_e,N,J,W,ie,se,ee,le);return}else if(fe&256){xe(X,_e,N,J,W,ie,se,ee,le);return}}ye&8?(ue&16&&ne(X,W,ie),_e!==X&&g(N,_e)):ue&16?ye&16?qe(X,_e,N,J,W,ie,se,ee,le):ne(X,W,ie,!0):(ue&8&&g(N,""),ye&16&&V(_e,N,J,W,ie,se,ee,le))},xe=(T,P,N,J,W,ie,se,ee,le)=>{T=T||Fi,P=P||Fi;const X=T.length,ue=P.length,_e=Math.min(X,ue);let fe;for(fe=0;fe<_e;fe++){const ye=P[fe]=le?ei(P[fe]):ht(P[fe]);y(T[fe],ye,N,null,W,ie,se,ee,le)}X>ue?ne(T,W,ie,!0,!1,_e):V(P,N,J,W,ie,se,ee,le,_e)},qe=(T,P,N,J,W,ie,se,ee,le)=>{let X=0;const ue=P.length;let _e=T.length-1,fe=ue-1;for(;X<=_e&&X<=fe;){const ye=T[X],Ee=P[X]=le?ei(P[X]):ht(P[X]);if(Tt(ye,Ee))y(ye,Ee,N,null,W,ie,se,ee,le);else break;X++}for(;X<=_e&&X<=fe;){const ye=T[_e],Ee=P[fe]=le?ei(P[fe]):ht(P[fe]);if(Tt(ye,Ee))y(ye,Ee,N,null,W,ie,se,ee,le);else break;_e--,fe--}if(X>_e){if(X<=fe){const ye=fe+1,Ee=ye<ue?P[ye].el:J;for(;X<=fe;)y(null,P[X]=le?ei(P[X]):ht(P[X]),N,Ee,W,ie,se,ee,le),X++}}else if(X>fe)for(;X<=_e;)Oe(T[X],W,ie,!0),X++;else{const ye=X,Ee=X,Ne=new Map;for(X=Ee;X<=fe;X++){const ft=P[X]=le?ei(P[X]):ht(P[X]);ft.key!=null&&Ne.set(ft.key,X)}let Ue,Qe=0;const $t=fe-Ee+1;let zi=!1,oo=0;const ul=new Array($t);for(X=0;X<$t;X++)ul[X]=0;for(X=ye;X<=_e;X++){const ft=T[X];if(Qe>=$t){Oe(ft,W,ie,!0);continue}let Et;if(ft.key!=null)Et=Ne.get(ft.key);else for(Ue=Ee;Ue<=fe;Ue++)if(ul[Ue-Ee]===0&&Tt(ft,P[Ue])){Et=Ue;break}Et===void 0?Oe(ft,W,ie,!0):(ul[Et-Ee]=X+1,Et>=oo?oo=Et:zi=!0,y(ft,P[Et],N,null,W,ie,se,ee,le),Qe++)}const ro=zi?pg(ul):Fi;for(Ue=ro.length-1,X=$t-1;X>=0;X--){const ft=Ee+X,Et=P[ft],uo=ft+1<ue?P[ft+1].el:J;ul[X]===0?y(null,Et,N,uo,W,ie,se,ee,le):zi&&(Ue<0||X!==ro[Ue]?Xe(Et,N,uo,2):Ue--)}}},Xe=(T,P,N,J,W=null)=>{const{el:ie,type:se,transition:ee,children:le,shapeFlag:X}=T;if(X&6){Xe(T.component.subTree,P,N,J);return}if(X&128){T.suspense.move(P,N,J);return}if(X&64){se.move(T,P,N,Ve);return}if(se===we){s(ie,P,N);for(let _e=0;_e<le.length;_e++)Xe(le[_e],P,N,J);s(T.anchor,P,N);return}if(se===Ci){w(T,P,N);return}if(J!==2&&X&1&&ee)if(J===0)ee.beforeEnter(ie),s(ie,P,N),et(()=>ee.enter(ie),W);else{const{leave:_e,delayLeave:fe,afterLeave:ye}=ee,Ee=()=>s(ie,P,N),Ne=()=>{_e(ie,()=>{Ee(),ye&&ye()})};fe?fe(ie,Ee,Ne):Ne()}else s(ie,P,N)},Oe=(T,P,N,J=!1,W=!1)=>{const{type:ie,props:se,ref:ee,children:le,dynamicChildren:X,shapeFlag:ue,patchFlag:_e,dirs:fe}=T;if(ee!=null&&ya(ee,null,N,T,!0),ue&256){P.ctx.deactivate(T);return}const ye=ue&1&&fe,Ee=!yi(T);let Ne;if(Ee&&(Ne=se&&se.onVnodeBeforeUnmount)&&dt(Ne,P,T),ue&6)q(T.component,N,J);else{if(ue&128){T.suspense.unmount(N,J);return}ye&&Rt(T,null,P,"beforeUnmount"),ue&64?T.type.remove(T,P,N,W,Ve,J):X&&(ie!==we||_e>0&&_e&64)?ne(X,P,N,!1,!0):(ie===we&&_e&384||!W&&ue&16)&&ne(le,P,N),J&&It(T)}(Ee&&(Ne=se&&se.onVnodeUnmounted)||ye)&&et(()=>{Ne&&dt(Ne,P,T),ye&&Rt(T,null,P,"unmounted")},N)},It=T=>{const{type:P,el:N,anchor:J,transition:W}=T;if(P===we){Ct(N,J);return}if(P===Ci){k(T);return}const ie=()=>{u(N),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(T.shapeFlag&1&&W&&!W.persisted){const{leave:se,delayLeave:ee}=W,le=()=>se(N,ie);ee?ee(T.el,ie,le):le()}else ie()},Ct=(T,P)=>{let N;for(;T!==P;)N=h(T),u(T),T=N;u(P)},q=(T,P,N)=>{const{bum:J,scope:W,update:ie,subTree:se,um:ee}=T;J&&Li(J),W.stop(),ie&&(ie.active=!1,Oe(se,T,P,N)),ee&&et(ee,P),et(()=>{T.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},ne=(T,P,N,J=!1,W=!1,ie=0)=>{for(let se=ie;se<T.length;se++)Oe(T[se],P,N,J,W)},ae=T=>T.shapeFlag&6?ae(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el);let me=!1;const Ie=(T,P,N)=>{T==null?P._vnode&&Oe(P._vnode,null,null,!0):y(P._vnode||null,T,P,null,null,null,N),me||(me=!0,yo(),ba(),me=!1),P._vnode=T},Ve={p:y,um:Oe,m:Xe,r:It,mt:ke,mc:V,pc:Z,pbc:L,n:ae,o:t};let Se,Ae;return l&&([Se,Ae]=l(Ve)),{render:Ie,hydrate:Se,createApp:lg(Ie,Se)}}function pn({type:t,props:l},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&l&&l.encoding&&l.encoding.includes("html")?void 0:n}function ci({effect:t,update:l},n){t.allowRecurse=l.allowRecurse=n}function Fc(t,l){return(!t||t&&!t.pendingBranch)&&l&&!l.persisted}function Ys(t,l,n=!1){const s=t.children,u=l.children;if(ce(s)&&ce(u))for(let d=0;d<s.length;d++){const p=s[d];let m=u[d];m.shapeFlag&1&&!m.dynamicChildren&&((m.patchFlag<=0||m.patchFlag===32)&&(m=u[d]=ei(u[d]),m.el=p.el),n||Ys(p,m)),m.type===Ai&&(m.el=p.el)}}function pg(t){const l=t.slice(),n=[0];let s,u,d,p,m;const o=t.length;for(s=0;s<o;s++){const r=t[s];if(r!==0){if(u=n[n.length-1],t[u]<r){l[s]=u,n.push(s);continue}for(d=0,p=n.length-1;d<p;)m=d+p>>1,t[n[m]]<r?d=m+1:p=m;r<t[n[d]]&&(d>0&&(l[s]=n[d-1]),n[d]=s)}}for(d=n.length,p=n[d-1];d-- >0;)n[d]=p,p=l[p];return n}function Nc(t){const l=t.subTree.component;if(l)return l.asyncDep&&!l.asyncResolved?l:Nc(l)}const fg=t=>t.__isTeleport,Al=t=>t&&(t.disabled||t.disabled===""),Po=t=>typeof SVGElement<"u"&&t instanceof SVGElement,zo=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,jn=(t,l)=>{const n=t&&t.to;return Ye(n)?l?l(n):null:n},gg={name:"Teleport",__isTeleport:!0,process(t,l,n,s,u,d,p,m,o,r){const{mc:g,pc:c,pbc:h,o:{insert:v,querySelector:f,createText:y,createComment:S}}=r,B=Al(l.props);let{shapeFlag:b,children:w,dynamicChildren:k}=l;if(t==null){const $=l.el=y(""),x=l.anchor=y("");v($,n,s),v(x,n,s);const D=l.target=jn(l.props,f),V=l.targetAnchor=y("");D&&(v(V,D),p==="svg"||Po(D)?p="svg":(p==="mathml"||zo(D))&&(p="mathml"));const z=(L,Y)=>{b&16&&g(w,L,Y,u,d,p,m,o)};B?z(n,x):D&&z(D,V)}else{l.el=t.el;const $=l.anchor=t.anchor,x=l.target=t.target,D=l.targetAnchor=t.targetAnchor,V=Al(t.props),z=V?n:x,L=V?$:D;if(p==="svg"||Po(x)?p="svg":(p==="mathml"||zo(x))&&(p="mathml"),k?(h(t.dynamicChildren,k,z,u,d,p,m),Ys(t,l,!0)):o||c(t,l,z,L,u,d,p,m,!1),B)V?l.props&&t.props&&l.props.to!==t.props.to&&(l.props.to=t.props.to):na(l,n,$,r,1);else if((l.props&&l.props.to)!==(t.props&&t.props.to)){const Y=l.target=jn(l.props,f);Y&&na(l,Y,null,r,0)}else V&&na(l,x,D,r,1)}Lc(l)},remove(t,l,n,s,{um:u,o:{remove:d}},p){const{shapeFlag:m,children:o,anchor:r,targetAnchor:g,target:c,props:h}=t;if(c&&d(g),p&&d(r),m&16){const v=p||!Al(h);for(let f=0;f<o.length;f++){const y=o[f];u(y,l,n,v,!!y.dynamicChildren)}}},move:na,hydrate:hg};function na(t,l,n,{o:{insert:s},m:u},d=2){d===0&&s(t.targetAnchor,l,n);const{el:p,anchor:m,shapeFlag:o,children:r,props:g}=t,c=d===2;if(c&&s(p,l,n),(!c||Al(g))&&o&16)for(let h=0;h<r.length;h++)u(r[h],l,n,2);c&&s(m,l,n)}function hg(t,l,n,s,u,d,{o:{nextSibling:p,parentNode:m,querySelector:o}},r){const g=l.target=jn(l.props,o);if(g){const c=g._lpa||g.firstChild;if(l.shapeFlag&16)if(Al(l.props))l.anchor=r(p(t),l,m(t),n,s,u,d),l.targetAnchor=c;else{l.anchor=p(t);let h=c;for(;h;)if(h=p(h),h&&h.nodeType===8&&h.data==="teleport anchor"){l.targetAnchor=h,g._lpa=l.targetAnchor&&p(l.targetAnchor);break}r(c,l,g,n,s,u,d)}Lc(l)}return l.anchor&&p(l.anchor)}const Wa=gg;function Lc(t){const l=t.ctx;if(l&&l.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",l.uid),n=n.nextSibling;l.ut()}}const we=Symbol.for("v-fgt"),Ai=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),Ci=Symbol.for("v-stc"),kl=[];let mt=null;function I(t=!1){kl.push(mt=t?null:[])}function Oc(){kl.pop(),mt=kl[kl.length-1]||null}let ki=1;function qn(t){ki+=t}function Hc(t){return t.dynamicChildren=ki>0?mt||Fi:null,Oc(),ki>0&&mt&&mt.push(t),t}function re(t,l,n,s,u,d){return Hc(C(t,l,n,s,u,d,!0))}function te(t,l,n,s,u){return Hc(e(t,l,n,s,u,!0))}function Bt(t){return t?t.__v_isVNode===!0:!1}function Tt(t,l){return t.type===l.type&&t.key===l.key}function _g(t){}const Ka="__vInternal",jc=({key:t})=>t??null,ma=({ref:t,ref_key:l,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||it(t)||ve(t)?{i:Je,r:t,k:l,f:!!n}:t:null);function C(t,l=null,n=null,s=0,u=null,d=t===we?0:1,p=!1,m=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:l,key:l&&jc(l),ref:l&&ma(l),scopeId:ja,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:s,dynamicProps:u,dynamicChildren:null,appContext:null,ctx:Je};return m?(Ws(o,n),d&128&&t.normalize(o)):n&&(o.shapeFlag|=Ye(n)?8:16),ki>0&&!p&&mt&&(o.patchFlag>0||d&6)&&o.patchFlag!==32&&mt.push(o),o}const e=bg;function bg(t,l=null,n=null,s=0,u=null,d=!1){if((!t||t===rc)&&(t=st),Bt(t)){const m=zt(t,l,!0);return n&&Ws(m,n),ki>0&&!d&&mt&&(m.shapeFlag&6?mt[mt.indexOf(t)]=m:mt.push(m)),m.patchFlag|=-2,m}if(Bg(t)&&(t=t.__vccOpts),l){l=qc(l);let{class:m,style:o}=l;m&&!Ye(m)&&(l.class=ql(m)),Le(o)&&(Ts(o)&&!ce(o)&&(o=Ge({},o)),l.style=nl(o))}const p=Ye(t)?1:dc(t)?128:fg(t)?64:Le(t)?4:ve(t)?2:0;return C(t,l,n,s,u,p,d,!0)}function qc(t){return t?Ts(t)||Ka in t?Ge({},t):t:null}function zt(t,l,n=!1){const{props:s,ref:u,patchFlag:d,children:p}=t,m=l?Pi(s||{},l):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:m,key:m&&jc(m),ref:l&&l.ref?n&&u?ce(u)?u.concat(ma(l)):[u,ma(l)]:ma(l):u,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:p,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:l&&t.type!==we?d===-1?16:d|16:d,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function a(t=" ",l=0){return e(Ai,null,t,l)}function vg(t,l){const n=e(Ci,null,t);return n.staticCount=l,n}function Js(t="",l=!1){return l?(I(),te(st,null,t)):e(st,null,t)}function ht(t){return t==null||typeof t=="boolean"?e(st):ce(t)?e(we,null,t.slice()):typeof t=="object"?ei(t):e(Ai,null,String(t))}function ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function Ws(t,l){let n=0;const{shapeFlag:s}=t;if(l==null)l=null;else if(ce(l))n=16;else if(typeof l=="object")if(s&65){const u=l.default;u&&(u._c&&(u._d=!1),Ws(t,u()),u._c&&(u._d=!0));return}else{n=32;const u=l._;!u&&!(Ka in l)?l._ctx=Je:u===3&&Je&&(Je.slots._===1?l._=1:(l._=2,t.patchFlag|=1024))}else ve(l)?(l={default:l,_ctx:Je},n=32):(l=String(l),s&64?(n=16,l=[a(l)]):n=8);t.children=l,t.shapeFlag|=n}function Pi(...t){const l={};for(let n=0;n<t.length;n++){const s=t[n];for(const u in s)if(u==="class")l.class!==s.class&&(l.class=ql([l.class,s.class]));else if(u==="style")l.style=nl([l.style,s.style]);else if(Hl(u)){const d=l[u],p=s[u];p&&d!==p&&!(ce(d)&&d.includes(p))&&(l[u]=d?[].concat(d,p):p)}else u!==""&&(l[u]=s[u])}return l}function dt(t,l,n,s=null){vt(t,l,7,[n,s])}const yg=xc();let Cg=0;function Uc(t,l,n){const s=t.type,u=(l?l.appContext:t.appContext)||yg,d={uid:Cg++,vnode:t,type:s,parent:l,appContext:u,root:null,next:null,subTree:null,effect:null,update:null,scope:new ws(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(u.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rc(s,u),emitsOptions:oc(s,u),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=l?l.root:d,d.emit=gf.bind(null,d),t.ce&&t.ce(d),d}let We=null;const Mt=()=>We||Je;let Ca,Un;{const t=Pd(),l=(n,s)=>{let u;return(u=t[n])||(u=t[n]=[]),u.push(s),d=>{u.length>1?u.forEach(p=>p(d)):u[0](d)}};Ca=l("__VUE_INSTANCE_SETTERS__",n=>We=n),Un=l("__VUE_SSR_SETTERS__",n=>Jl=n)}const Bi=t=>{const l=We;return Ca(t),t.scope.on(),()=>{t.scope.off(),Ca(l)}},Gn=()=>{We&&We.scope.off(),Ca(null)};function Gc(t){return t.vnode.shapeFlag&4}let Jl=!1;function Yc(t,l=!1){l&&Un(l);const{props:n,children:s}=t.vnode,u=Gc(t);ng(t,n,u,l),rg(t,s);const d=u?wg(t,l):void 0;return l&&Un(!1),d}function wg(t,l){const n=t.type;t.accessCache=Object.create(null),t.proxy=xs(new Proxy(t.ctx,Nn));const{setup:s}=n;if(s){const u=t.setupContext=s.length>1?Wc(t):null,d=Bi(t);Ti();const p=Ot(s,t,0,[t.props,u]);if(xi(),d(),ys(p)){if(p.then(Gn,Gn),l)return p.then(m=>{Yn(t,m,l)}).catch(m=>{Ei(m,t,0)});t.asyncDep=p}else Yn(t,p,l)}else Jc(t,l)}function Yn(t,l,n){ve(l)?t.type.__ssrInlineRender?t.ssrRender=l:t.render=l:Le(l)&&(t.setupState=Ps(l)),Jc(t,n)}let wa,Jn;function Sg(t){wa=t,Jn=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,Vf))}}const Ag=()=>!wa;function Jc(t,l,n){const s=t.type;if(!t.render){if(!l&&wa&&!s.render){const u=s.template||Us(t).template;if(u){const{isCustomElement:d,compilerOptions:p}=t.appContext.config,{delimiters:m,compilerOptions:o}=s,r=Ge(Ge({isCustomElement:d,delimiters:m},p),o);s.render=wa(u,r)}}t.render=s.render||ct,Jn&&Jn(t)}{const u=Bi(t);Ti();try{Xf(t)}finally{xi(),u()}}}function kg(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(l,n){return pt(t,"get","$attrs"),l[n]}}))}function Wc(t){const l=n=>{t.exposed=n||{}};return{get attrs(){return kg(t)},slots:t.slots,emit:t.emit,expose:l}}function Xa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ps(xs(t.exposed)),{get(l,n){if(n in l)return l[n];if(n in Sl)return Sl[n](t)},has(l,n){return n in l||n in Sl}}))}function Wn(t,l=!0){return ve(t)?t.displayName||t.name:t.name||l&&t.__name}function Bg(t){return ve(t)&&"__vccOpts"in t}const F=(t,l)=>Kp(t,l,Jl);function $g(t,l,n=Fe){const s=Mt(),u=rt(l),d=bt(l),p=tc((o,r)=>{let g;return gc(()=>{const c=t[l];xt(g,c)&&(g=c,r())}),{get(){return o(),n.get?n.get(g):g},set(c){const h=s.vnode.props;!(h&&(l in h||u in h||d in h)&&(`onUpdate:${l}`in h||`onUpdate:${u}`in h||`onUpdate:${d}`in h))&&xt(c,g)&&(g=c,r()),s.emit(`update:${l}`,n.set?n.set(c):c)}}}),m=l==="modelValue"?"modelModifiers":`${l}Modifiers`;return p[Symbol.iterator]=()=>{let o=0;return{next(){return o<2?{value:o++?t[m]||{}:p,done:!1}:{done:!0}}}},p}function U(t,l,n){const s=arguments.length;return s===2?Le(l)&&!ce(l)?Bt(l)?e(t,null,[l]):e(t,l):e(t,null,l):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Bt(n)&&(n=[n]),e(t,l,n))}function Tg(){}function xg(t,l,n,s){const u=n[s];if(u&&Kc(u,t))return u;const d=l();return d.memo=t.slice(),n[s]=d}function Kc(t,l){const n=t.memo;if(n.length!=l.length)return!1;for(let s=0;s<n.length;s++)if(xt(n[s],l[s]))return!1;return ki>0&&mt&&mt.push(t),!0}const Xc="3.4.15",Eg=ct,Rg=df,Pg=Mi,zg=sc,Dg={createComponentInstance:Uc,setupComponent:Yc,renderComponentRoot:ca,setCurrentRenderingInstance:Ml,isVNode:Bt,normalizeVNode:ht},Mg=Dg,Ig=null,Vg=null,Fg=null;/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ng="http://www.w3.org/2000/svg",Lg="http://www.w3.org/1998/Math/MathML",ti=typeof document<"u"?document:null,Do=ti&&ti.createElement("template"),Og={insert:(t,l,n)=>{l.insertBefore(t,n||null)},remove:t=>{const l=t.parentNode;l&&l.removeChild(t)},createElement:(t,l,n,s)=>{const u=l==="svg"?ti.createElementNS(Ng,t):l==="mathml"?ti.createElementNS(Lg,t):ti.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&u.setAttribute("multiple",s.multiple),u},createText:t=>ti.createTextNode(t),createComment:t=>ti.createComment(t),setText:(t,l)=>{t.nodeValue=l},setElementText:(t,l)=>{t.textContent=l},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ti.querySelector(t),setScopeId(t,l){t.setAttribute(l,"")},insertStaticContent(t,l,n,s,u,d){const p=n?n.previousSibling:l.lastChild;if(u&&(u===d||u.nextSibling))for(;l.insertBefore(u.cloneNode(!0),n),!(u===d||!(u=u.nextSibling)););else{Do.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const m=Do.content;if(s==="svg"||s==="mathml"){const o=m.firstChild;for(;o.firstChild;)m.appendChild(o.firstChild);m.removeChild(o)}l.insertBefore(m,n)}return[p?p.nextSibling:l.firstChild,n?n.previousSibling:l.lastChild]}},Wt="transition",dl="animation",Qi=Symbol("_vtc"),Qa=(t,{slots:l})=>U(_c,Zc(t),l);Qa.displayName="Transition";const Qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hg=Qa.props=Ge({},Hs,Qc),mi=(t,l=[])=>{ce(t)?t.forEach(n=>n(...l)):t&&t(...l)},Mo=t=>t?ce(t)?t.some(l=>l.length>1):t.length>1:!1;function Zc(t){const l={};for(const j in t)j in Qc||(l[j]=t[j]);if(t.css===!1)return l;const{name:n="v",type:s,duration:u,enterFromClass:d=`${n}-enter-from`,enterActiveClass:p=`${n}-enter-active`,enterToClass:m=`${n}-enter-to`,appearFromClass:o=d,appearActiveClass:r=p,appearToClass:g=m,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=t,f=jg(u),y=f&&f[0],S=f&&f[1],{onBeforeEnter:B,onEnter:b,onEnterCancelled:w,onLeave:k,onLeaveCancelled:$,onBeforeAppear:x=B,onAppear:D=b,onAppearCancelled:V=w}=l,z=(j,de,ke)=>{Xt(j,de?g:m),Xt(j,de?r:p),ke&&ke()},L=(j,de)=>{j._isLeaving=!1,Xt(j,c),Xt(j,v),Xt(j,h),de&&de()},Y=j=>(de,ke)=>{const O=j?D:b,G=()=>z(de,j,ke);mi(O,[de,G]),Io(()=>{Xt(de,j?o:d),Vt(de,j?g:m),Mo(O)||Vo(de,s,y,G)})};return Ge(l,{onBeforeEnter(j){mi(B,[j]),Vt(j,d),Vt(j,p)},onBeforeAppear(j){mi(x,[j]),Vt(j,o),Vt(j,r)},onEnter:Y(!1),onAppear:Y(!0),onLeave(j,de){j._isLeaving=!0;const ke=()=>L(j,de);Vt(j,c),tm(),Vt(j,h),Io(()=>{j._isLeaving&&(Xt(j,c),Vt(j,v),Mo(k)||Vo(j,s,S,ke))}),mi(k,[j,ke])},onEnterCancelled(j){z(j,!1),mi(w,[j])},onAppearCancelled(j){z(j,!0),mi(V,[j])},onLeaveCancelled(j){L(j),mi($,[j])}})}function jg(t){if(t==null)return null;if(Le(t))return[fn(t.enter),fn(t.leave)];{const l=fn(t);return[l,l]}}function fn(t){return ga(t)}function Vt(t,l){l.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Qi]||(t[Qi]=new Set)).add(l)}function Xt(t,l){l.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Qi];n&&(n.delete(l),n.size||(t[Qi]=void 0))}function Io(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qg=0;function Vo(t,l,n,s){const u=t._endId=++qg,d=()=>{u===t._endId&&s()};if(n)return setTimeout(d,n);const{type:p,timeout:m,propCount:o}=em(t,l);if(!p)return s();const r=p+"end";let g=0;const c=()=>{t.removeEventListener(r,h),d()},h=v=>{v.target===t&&++g>=o&&c()};setTimeout(()=>{g<o&&c()},m+1),t.addEventListener(r,h)}function em(t,l){const n=window.getComputedStyle(t),s=f=>(n[f]||"").split(", "),u=s(`${Wt}Delay`),d=s(`${Wt}Duration`),p=Fo(u,d),m=s(`${dl}Delay`),o=s(`${dl}Duration`),r=Fo(m,o);let g=null,c=0,h=0;l===Wt?p>0&&(g=Wt,c=p,h=d.length):l===dl?r>0&&(g=dl,c=r,h=o.length):(c=Math.max(p,r),g=c>0?p>r?Wt:dl:null,h=g?g===Wt?d.length:o.length:0);const v=g===Wt&&/\b(transform|all)(,|$)/.test(s(`${Wt}Property`).toString());return{type:g,timeout:c,propCount:h,hasTransform:v}}function Fo(t,l){for(;t.length<l.length;)t=t.concat(t);return Math.max(...l.map((n,s)=>No(n)+No(t[s])))}function No(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function tm(){return document.body.offsetHeight}function Ug(t,l,n){const s=t[Qi];s&&(l=(l?[l,...s]:[...s]).join(" ")),l==null?t.removeAttribute("class"):n?t.setAttribute("class",l):t.className=l}const Ks=Symbol("_vod"),im={beforeMount(t,{value:l},{transition:n}){t[Ks]=t.style.display==="none"?"":t.style.display,n&&l?n.beforeEnter(t):cl(t,l)},mounted(t,{value:l},{transition:n}){n&&l&&n.enter(t)},updated(t,{value:l,oldValue:n},{transition:s}){!l!=!n&&(s?l?(s.beforeEnter(t),cl(t,!0),s.enter(t)):s.leave(t,()=>{cl(t,!1)}):cl(t,l))},beforeUnmount(t,{value:l}){cl(t,l)}};function cl(t,l){t.style.display=l?t[Ks]:"none"}function Gg(){im.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const lm=Symbol("");function Yg(t){const l=Mt();if(!l)return;const n=l.ut=(u=t(l.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${l.uid}"]`)).forEach(d=>Xn(d,u))},s=()=>{const u=t(l.proxy);Kn(l.subTree,u),n(u)};fc(s),ri(()=>{const u=new MutationObserver(s);u.observe(l.subTree.el.parentNode,{childList:!0}),Ri(()=>u.disconnect())})}function Kn(t,l){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Kn(n.activeBranch,l)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Xn(t.el,l);else if(t.type===we)t.children.forEach(n=>Kn(n,l));else if(t.type===Ci){let{el:n,anchor:s}=t;for(;n&&(Xn(n,l),n!==s);)n=n.nextSibling}}function Xn(t,l){if(t.nodeType===1){const n=t.style;let s="";for(const u in l)n.setProperty(`--${u}`,l[u]),s+=`--${u}: ${l[u]};`;n[lm]=s}}function Jg(t,l,n){const s=t.style,u=s.display,d=Ye(n);if(n&&!d){if(l&&!Ye(l))for(const p in l)n[p]==null&&Qn(s,p,"");for(const p in n)Qn(s,p,n[p])}else if(d){if(l!==n){const p=s[lm];p&&(n+=";"+p),s.cssText=n}}else l&&t.removeAttribute("style");Ks in t&&(s.display=u)}const Lo=/\s*!important$/;function Qn(t,l,n){if(ce(n))n.forEach(s=>Qn(t,l,s));else if(n==null&&(n=""),l.startsWith("--"))t.setProperty(l,n);else{const s=Wg(t,l);Lo.test(n)?t.setProperty(bt(s),n.replace(Lo,""),"important"):t[s]=n}}const Oo=["Webkit","Moz","ms"],gn={};function Wg(t,l){const n=gn[l];if(n)return n;let s=rt(l);if(s!=="filter"&&s in t)return gn[l]=s;s=jl(s);for(let u=0;u<Oo.length;u++){const d=Oo[u]+s;if(d in t)return gn[l]=d}return l}const Ho="http://www.w3.org/1999/xlink";function Kg(t,l,n,s,u){if(s&&l.startsWith("xlink:"))n==null?t.removeAttributeNS(Ho,l.slice(6,l.length)):t.setAttributeNS(Ho,l,n);else{const d=Ap(l);n==null||d&&!zd(n)?t.removeAttribute(l):t.setAttribute(l,d?"":n)}}function Xg(t,l,n,s,u,d,p){if(l==="innerHTML"||l==="textContent"){s&&p(s,u,d),t[l]=n??"";return}const m=t.tagName;if(l==="value"&&m!=="PROGRESS"&&!m.includes("-")){t._value=n;const r=m==="OPTION"?t.getAttribute("value"):t.value,g=n??"";r!==g&&(t.value=g),n==null&&t.removeAttribute(l);return}let o=!1;if(n===""||n==null){const r=typeof t[l];r==="boolean"?n=zd(n):n==null&&r==="string"?(n="",o=!0):r==="number"&&(n=0,o=!0)}try{t[l]=n}catch{}o&&t.removeAttribute(l)}function Nt(t,l,n,s){t.addEventListener(l,n,s)}function Qg(t,l,n,s){t.removeEventListener(l,n,s)}const jo=Symbol("_vei");function Zg(t,l,n,s,u=null){const d=t[jo]||(t[jo]={}),p=d[l];if(s&&p)p.value=s;else{const[m,o]=eh(l);if(s){const r=d[l]=lh(s,u);Nt(t,m,r,o)}else p&&(Qg(t,m,p,o),d[l]=void 0)}}const qo=/(?:Once|Passive|Capture)$/;function eh(t){let l;if(qo.test(t)){l={};let s;for(;s=t.match(qo);)t=t.slice(0,t.length-s[0].length),l[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bt(t.slice(2)),l]}let hn=0;const th=Promise.resolve(),ih=()=>hn||(th.then(()=>hn=0),hn=Date.now());function lh(t,l){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;vt(ah(s,n.value),l,5,[s])};return n.value=t,n.attached=ih(),n}function ah(t,l){if(ce(l)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},l.map(s=>u=>!u._stopped&&s&&s(u))}else return l}const Uo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nh=(t,l,n,s,u,d,p,m,o)=>{const r=u==="svg";l==="class"?Ug(t,s,r):l==="style"?Jg(t,n,s):Hl(l)?bs(l)||Zg(t,l,n,s,p):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):sh(t,l,s,r))?Xg(t,l,s,d,p,m,o):(l==="true-value"?t._trueValue=s:l==="false-value"&&(t._falseValue=s),Kg(t,l,s,r))};function sh(t,l,n,s){if(s)return!!(l==="innerHTML"||l==="textContent"||l in t&&Uo(l)&&ve(n));if(l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&t.tagName==="INPUT"||l==="type"&&t.tagName==="TEXTAREA")return!1;if(l==="width"||l==="height"){const u=t.tagName;if(u==="IMG"||u==="VIDEO"||u==="CANVAS"||u==="SOURCE")return!1}return Uo(l)&&Ye(n)?!1:l in t}/*! #__NO_SIDE_EFFECTS__ */function am(t,l){const n=E(t);class s extends Za{constructor(d){super(n,d,l)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const oh=t=>am(t,hm),rh=typeof HTMLElement<"u"?HTMLElement:class{};class Za extends rh{constructor(l,n={},s){super(),this._def=l,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),sl(()=>{this._connected||(ka(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const u of s)this._setAttr(u.attributeName)}),this._ob.observe(this,{attributes:!0});const l=(s,u=!1)=>{const{props:d,styles:p}=s;let m;if(d&&!ce(d))for(const o in d){const r=d[o];(r===Number||r&&r.type===Number)&&(o in this._props&&(this._props[o]=ga(this._props[o])),(m||(m=Object.create(null)))[rt(o)]=!0)}this._numberProps=m,u&&this._resolveProps(s),this._applyStyles(p),this._update()},n=this._def.__asyncLoader;n?n().then(s=>l(s,!0)):l(this._def)}_resolveProps(l){const{props:n}=l,s=ce(n)?n:Object.keys(n||{});for(const u of Object.keys(this))u[0]!=="_"&&s.includes(u)&&this._setProp(u,this[u],!0,!1);for(const u of s.map(rt))Object.defineProperty(this,u,{get(){return this._getProp(u)},set(d){this._setProp(u,d)}})}_setAttr(l){let n=this.getAttribute(l);const s=rt(l);this._numberProps&&this._numberProps[s]&&(n=ga(n)),this._setProp(s,n,!1)}_getProp(l){return this._props[l]}_setProp(l,n,s=!0,u=!0){n!==this._props[l]&&(this._props[l]=n,u&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(bt(l),""):typeof n=="string"||typeof n=="number"?this.setAttribute(bt(l),n+""):n||this.removeAttribute(bt(l))))}_update(){ka(this._createVNode(),this.shadowRoot)}_createVNode(){const l=e(this._def,Ge({},this._props));return this._instance||(l.ce=n=>{this._instance=n,n.isCE=!0;const s=(d,p)=>{this.dispatchEvent(new CustomEvent(d,{detail:p}))};n.emit=(d,...p)=>{s(d,p),bt(d)!==d&&s(bt(d),p)};let u=this;for(;u=u&&(u.parentNode||u.host);)if(u instanceof Za){n.parent=u._instance,n.provides=u._instance.provides;break}}),l}_applyStyles(l){l&&l.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function uh(t="$style"){{const l=Mt();if(!l)return Fe;const n=l.type.__cssModules;if(!n)return Fe;const s=n[t];return s||Fe}}const nm=new WeakMap,sm=new WeakMap,Sa=Symbol("_moveCb"),Go=Symbol("_enterCb"),om={name:"TransitionGroup",props:Ge({},Hg,{tag:String,moveClass:String}),setup(t,{slots:l}){const n=Mt(),s=Os();let u,d;return Ya(()=>{if(!u.length)return;const p=t.moveClass||`${t.name||"v"}-move`;if(!fh(u[0].el,n.vnode.el,p))return;u.forEach(ch),u.forEach(mh);const m=u.filter(ph);tm(),m.forEach(o=>{const r=o.el,g=r.style;Vt(r,p),g.transform=g.webkitTransform=g.transitionDuration="";const c=r[Sa]=h=>{h&&h.target!==r||(!h||/transform$/.test(h.propertyName))&&(r.removeEventListener("transitionend",c),r[Sa]=null,Xt(r,p))};r.addEventListener("transitionend",c)})}),()=>{const p=Re(t),m=Zc(p);let o=p.tag||we;u=d,d=l.default?Ua(l.default()):[];for(let r=0;r<d.length;r++){const g=d[r];g.key!=null&&Si(g,Ki(g,m,s,n))}if(u)for(let r=0;r<u.length;r++){const g=u[r];Si(g,Ki(g,m,s,n)),nm.set(g,g.el.getBoundingClientRect())}return e(o,null,d)}}},dh=t=>delete t.mode;om.props;const rm=om;function ch(t){const l=t.el;l[Sa]&&l[Sa](),l[Go]&&l[Go]()}function mh(t){sm.set(t,t.el.getBoundingClientRect())}function ph(t){const l=nm.get(t),n=sm.get(t),s=l.left-n.left,u=l.top-n.top;if(s||u){const d=t.el.style;return d.transform=d.webkitTransform=`translate(${s}px,${u}px)`,d.transitionDuration="0s",t}}function fh(t,l,n){const s=t.cloneNode(),u=t[Qi];u&&u.forEach(m=>{m.split(/\s+/).forEach(o=>o&&s.classList.remove(o))}),n.split(/\s+/).forEach(m=>m&&s.classList.add(m)),s.style.display="none";const d=l.nodeType===1?l:l.parentNode;d.appendChild(s);const{hasTransform:p}=em(s);return d.removeChild(s),p}const oi=t=>{const l=t.props["onUpdate:modelValue"]||!1;return ce(l)?n=>Li(l,n):l};function gh(t){t.target.composing=!0}function Yo(t){const l=t.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const kt=Symbol("_assign"),Aa={created(t,{modifiers:{lazy:l,trim:n,number:s}},u){t[kt]=oi(u);const d=s||u.props&&u.props.type==="number";Nt(t,l?"change":"input",p=>{if(p.target.composing)return;let m=t.value;n&&(m=m.trim()),d&&(m=El(m)),t[kt](m)}),n&&Nt(t,"change",()=>{t.value=t.value.trim()}),l||(Nt(t,"compositionstart",gh),Nt(t,"compositionend",Yo),Nt(t,"change",Yo))},mounted(t,{value:l}){t.value=l??""},beforeUpdate(t,{value:l,modifiers:{lazy:n,trim:s,number:u}},d){if(t[kt]=oi(d),t.composing)return;const p=u||t.type==="number"?El(t.value):t.value,m=l??"";p!==m&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===m)||(t.value=m))}},Xs={deep:!0,created(t,l,n){t[kt]=oi(n),Nt(t,"change",()=>{const s=t._modelValue,u=Zi(t),d=t.checked,p=t[kt];if(ce(s)){const m=Va(s,u),o=m!==-1;if(d&&!o)p(s.concat(u));else if(!d&&o){const r=[...s];r.splice(m,1),p(r)}}else if($i(s)){const m=new Set(s);d?m.add(u):m.delete(u),p(m)}else p(dm(t,d))})},mounted:Jo,beforeUpdate(t,l,n){t[kt]=oi(n),Jo(t,l,n)}};function Jo(t,{value:l,oldValue:n},s){t._modelValue=l,ce(l)?t.checked=Va(l,s.props.value)>-1:$i(l)?t.checked=l.has(s.props.value):l!==n&&(t.checked=jt(l,dm(t,!0)))}const Qs={created(t,{value:l},n){t.checked=jt(l,n.props.value),t[kt]=oi(n),Nt(t,"change",()=>{t[kt](Zi(t))})},beforeUpdate(t,{value:l,oldValue:n},s){t[kt]=oi(s),l!==n&&(t.checked=jt(l,s.props.value))}},um={deep:!0,created(t,{value:l,modifiers:{number:n}},s){const u=$i(l);Nt(t,"change",()=>{const d=Array.prototype.filter.call(t.options,p=>p.selected).map(p=>n?El(Zi(p)):Zi(p));t[kt](t.multiple?u?new Set(d):d:d[0]),t._assigning=!0,sl(()=>{t._assigning=!1})}),t[kt]=oi(s)},mounted(t,{value:l,oldValue:n,modifiers:{number:s}}){Wo(t,l,n,s)},beforeUpdate(t,l,n){t[kt]=oi(n)},updated(t,{value:l,oldValue:n,modifiers:{number:s}}){t._assigning||Wo(t,l,n,s)}};function Wo(t,l,n,s){const u=t.multiple,d=ce(l);if(!(u&&!d&&!$i(l))&&!(d&&jt(l,n))){for(let p=0,m=t.options.length;p<m;p++){const o=t.options[p],r=Zi(o);if(u)if(d){const g=typeof r;g==="string"||g==="number"?o.selected=l.includes(s?El(r):r):o.selected=Va(l,r)>-1}else o.selected=l.has(r);else if(jt(Zi(o),l)){t.selectedIndex!==p&&(t.selectedIndex=p);return}}!u&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Zi(t){return"_value"in t?t._value:t.value}function dm(t,l){const n=l?"_trueValue":"_falseValue";return n in t?t[n]:l}const cm={created(t,l,n){sa(t,l,n,null,"created")},mounted(t,l,n){sa(t,l,n,null,"mounted")},beforeUpdate(t,l,n,s){sa(t,l,n,s,"beforeUpdate")},updated(t,l,n,s){sa(t,l,n,s,"updated")}};function mm(t,l){switch(t){case"SELECT":return um;case"TEXTAREA":return Aa;default:switch(l){case"checkbox":return Xs;case"radio":return Qs;default:return Aa}}}function sa(t,l,n,s,u){const p=mm(t.tagName,n.props&&n.props.type)[u];p&&p(t,l,n,s)}function hh(){Aa.getSSRProps=({value:t})=>({value:t}),Qs.getSSRProps=({value:t},l)=>{if(l.props&&jt(l.props.value,t))return{checked:!0}},Xs.getSSRProps=({value:t},l)=>{if(ce(t)){if(l.props&&Va(t,l.props.value)>-1)return{checked:!0}}else if($i(t)){if(l.props&&t.has(l.props.value))return{checked:!0}}else if(t)return{checked:!0}},cm.getSSRProps=(t,l)=>{if(typeof l.type!="string")return;const n=mm(l.type.toUpperCase(),l.props&&l.props.type);if(n.getSSRProps)return n.getSSRProps(t,l)}}const _h=["ctrl","shift","alt","meta"],bh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,l)=>_h.some(n=>t[`${n}Key`]&&!l.includes(n))},yt=(t,l)=>{const n=t._withMods||(t._withMods={}),s=l.join(".");return n[s]||(n[s]=(u,...d)=>{for(let p=0;p<l.length;p++){const m=bh[l[p]];if(m&&m(u,l))return}return t(u,...d)})},vh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yh=(t,l)=>{const n=t._withKeys||(t._withKeys={}),s=l.join(".");return n[s]||(n[s]=u=>{if(!("key"in u))return;const d=bt(u.key);if(l.some(p=>p===d||vh[p]===d))return t(u)})},pm=Ge({patchProp:nh},Og);let Bl,Ko=!1;function fm(){return Bl||(Bl=Mc(pm))}function gm(){return Bl=Ko?Bl:Ic(pm),Ko=!0,Bl}const ka=(...t)=>{fm().render(...t)},hm=(...t)=>{gm().hydrate(...t)},_m=(...t)=>{const l=fm().createApp(...t),{mount:n}=l;return l.mount=s=>{const u=vm(s);if(!u)return;const d=l._component;!ve(d)&&!d.render&&!d.template&&(d.template=u.innerHTML),u.innerHTML="";const p=n(u,!1,bm(u));return u instanceof Element&&(u.removeAttribute("v-cloak"),u.setAttribute("data-v-app","")),p},l},Ch=(...t)=>{const l=gm().createApp(...t),{mount:n}=l;return l.mount=s=>{const u=vm(s);if(u)return n(u,!0,bm(u))},l};function bm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vm(t){return Ye(t)?document.querySelector(t):t}let Xo=!1;const wh=()=>{Xo||(Xo=!0,hh(),Gg())};/**
* vue v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sh=()=>{},Ah=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:_c,BaseTransitionPropsValidators:Hs,Comment:st,DeprecationTypes:Fg,EffectScope:ws,ErrorCodes:uf,ErrorTypeStrings:Rg,Fragment:we,KeepAlive:zf,ReactiveEffect:Wi,Static:Ci,Suspense:Sf,Teleport:Wa,Text:Ai,TrackOpTypes:sf,Transition:Qa,TransitionGroup:rm,TriggerOpTypes:of,VueElement:Za,assertNumber:rf,callWithAsyncErrorHandling:vt,callWithErrorHandling:Ot,camelize:rt,capitalize:jl,cloneVNode:zt,compatUtils:Vg,compile:Sh,computed:F,createApp:_m,createBlock:te,createCommentVNode:Js,createElementBlock:re,createElementVNode:C,createHydrationRenderer:Ic,createPropsRestProxy:Wf,createRenderer:Mc,createSSRApp:Ch,createSlots:Mf,createStaticVNode:vg,createTextVNode:a,createVNode:e,customRef:tc,defineAsyncComponent:Rf,defineComponent:E,defineCustomElement:am,defineEmits:Nf,defineExpose:Lf,defineModel:jf,defineOptions:Of,defineProps:Ff,defineSSRCustomElement:oh,defineSlots:Hf,devtools:Pg,effect:Tp,effectScope:Bp,getCurrentInstance:Mt,getCurrentScope:Ss,getTransitionRawChildren:Ua,guardReactiveProps:qc,h:U,handleError:Ei,hasInjectionContext:ag,hydrate:hm,initCustomFormatter:Tg,initDirectivesForSSR:wh,inject:Me,isMemoSame:Kc,isProxy:Ts,isReactive:vi,isReadonly:wi,isRef:it,isRuntimeOnly:Ag,isShallow:Rl,isVNode:Bt,markRaw:xs,mergeDefaults:Yf,mergeModels:Jf,mergeProps:Pi,nextTick:sl,normalizeClass:ql,normalizeProps:wp,normalizeStyle:nl,onActivated:js,onBeforeMount:yc,onBeforeUnmount:Ja,onBeforeUpdate:Cc,onDeactivated:qs,onErrorCaptured:kc,onMounted:ri,onRenderTracked:Ac,onRenderTriggered:Sc,onScopeDispose:Id,onServerPrefetch:wc,onUnmounted:Ri,onUpdated:Ya,openBlock:I,popScopeId:Ms,provide:tt,proxyRefs:Ps,pushScopeId:Ds,queuePostFlushCb:_a,reactive:qt,readonly:$s,ref:H,registerRuntimeCompiler:Sg,render:ka,renderList:Ke,renderSlot:Xi,resolveComponent:_,resolveDirective:qa,resolveDynamicComponent:uc,resolveFilter:Ig,resolveTransitionHooks:Ki,setBlockTracking:qn,setDevtoolsHook:zg,setTransitionHooks:Si,shallowReactive:Xd,shallowReadonly:Wp,shallowRef:Zd,ssrContextKey:mc,ssrUtils:Mg,stop:xp,toDisplayString:Be,toHandlerKey:wl,toHandlers:If,toRaw:Re,toRef:Mn,toRefs:lf,toValue:Zp,transformVNodeArgs:_g,triggerRef:Qp,unref:R,useAttrs:Gf,useCssModule:uh,useCssVars:Yg,useModel:$g,useSSRContext:pc,useSlots:Uf,useTransitionState:Os,vModelCheckbox:Xs,vModelDynamic:cm,vModelRadio:Qs,vModelSelect:um,vModelText:Aa,vShow:im,version:Xc,warn:Eg,watch:nt,watchEffect:Ls,watchPostEffect:fc,watchSyncEffect:gc,withAsyncContext:Kf,withCtx:i,withDefaults:qf,withDirectives:Gl,withKeys:yh,withMemo:xg,withModifiers:yt,withScopeId:hf},Symbol.toStringTag,{value:"Module"})),kh=E({name:"App"}),ge=(t,l)=>{const n=t.__vccOpts||t;for(const[s,u]of l)n[s]=u;return n};function Bh(t,l,n,s,u,d){const p=_("router-view");return I(),te(p)}const $h=ge(kh,[["render",Bh]]);/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const ym=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ol=t=>ym?Symbol(t):"_vr_"+t,Cm=ol("rvlm"),Qo=ol("rvd"),en=ol("r"),Zs=ol("rl"),Zn=ol("rvl"),Ii=typeof window<"u";function Th(t){return t.__esModule||ym&&t[Symbol.toStringTag]==="Module"}const He=Object.assign;function _n(t,l){const n={};for(const s in l){const u=l[s];n[s]=Array.isArray(u)?u.map(t):t(u)}return n}const $l=()=>{},xh=/\/$/,Eh=t=>t.replace(xh,"");function bn(t,l,n="/"){let s,u={},d="",p="";const m=l.indexOf("?"),o=l.indexOf("#",m>-1?m:0);return m>-1&&(s=l.slice(0,m),d=l.slice(m+1,o>-1?o:l.length),u=t(d)),o>-1&&(s=s||l.slice(0,o),p=l.slice(o,l.length)),s=Dh(s??l,n),{fullPath:s+(d&&"?")+d+p,path:s,query:u,hash:p}}function Rh(t,l){const n=l.query?t(l.query):"";return l.path+(n&&"?")+n+(l.hash||"")}function Zo(t,l){return!l||!t.toLowerCase().startsWith(l.toLowerCase())?t:t.slice(l.length)||"/"}function Ph(t,l,n){const s=l.matched.length-1,u=n.matched.length-1;return s>-1&&s===u&&el(l.matched[s],n.matched[u])&&wm(l.params,n.params)&&t(l.query)===t(n.query)&&l.hash===n.hash}function el(t,l){return(t.aliasOf||t)===(l.aliasOf||l)}function wm(t,l){if(Object.keys(t).length!==Object.keys(l).length)return!1;for(const n in t)if(!zh(t[n],l[n]))return!1;return!0}function zh(t,l){return Array.isArray(t)?er(t,l):Array.isArray(l)?er(l,t):t===l}function er(t,l){return Array.isArray(l)?t.length===l.length&&t.every((n,s)=>n===l[s]):t.length===1&&t[0]===l}function Dh(t,l){if(t.startsWith("/"))return t;if(!t)return l;const n=l.split("/"),s=t.split("/");let u=n.length-1,d,p;for(d=0;d<s.length;d++)if(p=s[d],!(u===1||p==="."))if(p==="..")u--;else break;return n.slice(0,u).join("/")+"/"+s.slice(d-(d===s.length?1:0)).join("/")}var Nl;(function(t){t.pop="pop",t.push="push"})(Nl||(Nl={}));var Tl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Tl||(Tl={}));function Mh(t){if(!t)if(Ii){const l=document.querySelector("base");t=l&&l.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Eh(t)}const Ih=/^[^#]+#/;function Vh(t,l){return t.replace(Ih,"#")+l}function Fh(t,l){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:l.behavior,left:s.left-n.left-(l.left||0),top:s.top-n.top-(l.top||0)}}const tn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nh(t){let l;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),u=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!u)return;l=Fh(u,t)}else l=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function tr(t,l){return(history.state?history.state.position-l:-1)+t}const es=new Map;function Lh(t,l){es.set(t,l)}function Oh(t){const l=es.get(t);return es.delete(t),l}let Hh=()=>location.protocol+"//"+location.host;function Sm(t,l){const{pathname:n,search:s,hash:u}=l,d=t.indexOf("#");if(d>-1){let m=u.includes(t.slice(d))?t.slice(d).length:1,o=u.slice(m);return o[0]!=="/"&&(o="/"+o),Zo(o,"")}return Zo(n,t)+s+u}function jh(t,l,n,s){let u=[],d=[],p=null;const m=({state:h})=>{const v=Sm(t,location),f=n.value,y=l.value;let S=0;if(h){if(n.value=v,l.value=h,p&&p===f){p=null;return}S=y?h.position-y.position:0}else s(v);u.forEach(B=>{B(n.value,f,{delta:S,type:Nl.pop,direction:S?S>0?Tl.forward:Tl.back:Tl.unknown})})};function o(){p=n.value}function r(h){u.push(h);const v=()=>{const f=u.indexOf(h);f>-1&&u.splice(f,1)};return d.push(v),v}function g(){const{history:h}=window;h.state&&h.replaceState(He({},h.state,{scroll:tn()}),"")}function c(){for(const h of d)h();d=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",g)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",g),{pauseListeners:o,listen:r,destroy:c}}function ir(t,l,n,s=!1,u=!1){return{back:t,current:l,forward:n,replaced:s,position:window.history.length,scroll:u?tn():null}}function qh(t){const{history:l,location:n}=window,s={value:Sm(t,n)},u={value:l.state};u.value||d(s.value,{back:null,current:s.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function d(o,r,g){const c=t.indexOf("#"),h=c>-1?(n.host&&document.querySelector("base")?t:t.slice(c))+o:Hh()+t+o;try{l[g?"replaceState":"pushState"](r,"",h),u.value=r}catch(v){console.error(v),n[g?"replace":"assign"](h)}}function p(o,r){const g=He({},l.state,ir(u.value.back,o,u.value.forward,!0),r,{position:u.value.position});d(o,g,!0),s.value=o}function m(o,r){const g=He({},u.value,l.state,{forward:o,scroll:tn()});d(g.current,g,!0);const c=He({},ir(s.value,o,null),{position:g.position+1},r);d(o,c,!1),s.value=o}return{location:s,state:u,push:m,replace:p}}function Uh(t){t=Mh(t);const l=qh(t),n=jh(t,l.state,l.location,l.replace);function s(d,p=!0){p||n.pauseListeners(),history.go(d)}const u=He({location:"",base:t,go:s,createHref:Vh.bind(null,t)},l,n);return Object.defineProperty(u,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(u,"state",{enumerable:!0,get:()=>l.state.value}),u}function Gh(t){return typeof t=="string"||t&&typeof t=="object"}function Am(t){return typeof t=="string"||typeof t=="symbol"}const Kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},km=ol("nf");var lr;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lr||(lr={}));function tl(t,l){return He(new Error,{type:t,[km]:!0},l)}function pi(t,l){return t instanceof Error&&km in t&&(l==null||!!(t.type&l))}const ar="[^/]+?",Yh={sensitive:!1,strict:!1,start:!0,end:!0},Jh=/[.+*?^${}()[\]/\\]/g;function Wh(t,l){const n=He({},Yh,l),s=[];let u=n.start?"^":"";const d=[];for(const r of t){const g=r.length?[]:[90];n.strict&&!r.length&&(u+="/");for(let c=0;c<r.length;c++){const h=r[c];let v=40+(n.sensitive?.25:0);if(h.type===0)c||(u+="/"),u+=h.value.replace(Jh,"\\$&"),v+=40;else if(h.type===1){const{value:f,repeatable:y,optional:S,regexp:B}=h;d.push({name:f,repeatable:y,optional:S});const b=B||ar;if(b!==ar){v+=10;try{new RegExp(`(${b})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${f}" (${b}): `+k.message)}}let w=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;c||(w=S&&r.length<2?`(?:/${w})`:"/"+w),S&&(w+="?"),u+=w,v+=20,S&&(v+=-8),y&&(v+=-20),b===".*"&&(v+=-50)}g.push(v)}s.push(g)}if(n.strict&&n.end){const r=s.length-1;s[r][s[r].length-1]+=.7000000000000001}n.strict||(u+="/?"),n.end?u+="$":n.strict&&(u+="(?:/|$)");const p=new RegExp(u,n.sensitive?"":"i");function m(r){const g=r.match(p),c={};if(!g)return null;for(let h=1;h<g.length;h++){const v=g[h]||"",f=d[h-1];c[f.name]=v&&f.repeatable?v.split("/"):v}return c}function o(r){let g="",c=!1;for(const h of t){(!c||!g.endsWith("/"))&&(g+="/"),c=!1;for(const v of h)if(v.type===0)g+=v.value;else if(v.type===1){const{value:f,repeatable:y,optional:S}=v,B=f in r?r[f]:"";if(Array.isArray(B)&&!y)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const b=Array.isArray(B)?B.join("/"):B;if(!b)if(S)h.length<2&&(g.endsWith("/")?g=g.slice(0,-1):c=!0);else throw new Error(`Missing required param "${f}"`);g+=b}}return g}return{re:p,score:s,keys:d,parse:m,stringify:o}}function Kh(t,l){let n=0;for(;n<t.length&&n<l.length;){const s=l[n]-t[n];if(s)return s;n++}return t.length<l.length?t.length===1&&t[0]===80?-1:1:t.length>l.length?l.length===1&&l[0]===80?1:-1:0}function Xh(t,l){let n=0;const s=t.score,u=l.score;for(;n<s.length&&n<u.length;){const d=Kh(s[n],u[n]);if(d)return d;n++}return u.length-s.length}const Qh={type:0,value:""},Zh=/[a-zA-Z0-9_]/;function e_(t){if(!t)return[[]];if(t==="/")return[[Qh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function l(v){throw new Error(`ERR (${n})/"${r}": ${v}`)}let n=0,s=n;const u=[];let d;function p(){d&&u.push(d),d=[]}let m=0,o,r="",g="";function c(){r&&(n===0?d.push({type:0,value:r}):n===1||n===2||n===3?(d.length>1&&(o==="*"||o==="+")&&l(`A repeatable param (${r}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:r,regexp:g,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):l("Invalid state to consume buffer"),r="")}function h(){r+=o}for(;m<t.length;){if(o=t[m++],o==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:o==="/"?(r&&c(),p()):o===":"?(c(),n=1):h();break;case 4:h(),n=s;break;case 1:o==="("?n=2:Zh.test(o)?h():(c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&m--);break;case 2:o===")"?g[g.length-1]=="\\"?g=g.slice(0,-1)+o:n=3:g+=o;break;case 3:c(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&m--,g="";break;default:l("Unknown state");break}}return n===2&&l(`Unfinished custom RegExp for param "${r}"`),c(),p(),u}function t_(t,l,n){const s=Wh(e_(t.path),n),u=He(s,{record:t,parent:l,children:[],alias:[]});return l&&!u.record.aliasOf==!l.record.aliasOf&&l.children.push(u),u}function i_(t,l){const n=[],s=new Map;l=sr({strict:!1,end:!0,sensitive:!1},l);function u(g){return s.get(g)}function d(g,c,h){const v=!h,f=a_(g);f.aliasOf=h&&h.record;const y=sr(l,g),S=[f];if("alias"in g){const w=typeof g.alias=="string"?[g.alias]:g.alias;for(const k of w)S.push(He({},f,{components:h?h.record.components:f.components,path:k,aliasOf:h?h.record:f}))}let B,b;for(const w of S){const{path:k}=w;if(c&&k[0]!=="/"){const $=c.record.path,x=$[$.length-1]==="/"?"":"/";w.path=c.record.path+(k&&x+k)}if(B=t_(w,c,y),h?h.alias.push(B):(b=b||B,b!==B&&b.alias.push(B),v&&g.name&&!nr(B)&&p(g.name)),"children"in f){const $=f.children;for(let x=0;x<$.length;x++)d($[x],B,h&&h.children[x])}h=h||B,o(B)}return b?()=>{p(b)}:$l}function p(g){if(Am(g)){const c=s.get(g);c&&(s.delete(g),n.splice(n.indexOf(c),1),c.children.forEach(p),c.alias.forEach(p))}else{const c=n.indexOf(g);c>-1&&(n.splice(c,1),g.record.name&&s.delete(g.record.name),g.children.forEach(p),g.alias.forEach(p))}}function m(){return n}function o(g){let c=0;for(;c<n.length&&Xh(g,n[c])>=0;)c++;n.splice(c,0,g),g.record.name&&!nr(g)&&s.set(g.record.name,g)}function r(g,c){let h,v={},f,y;if("name"in g&&g.name){if(h=s.get(g.name),!h)throw tl(1,{location:g});y=h.record.name,v=He(l_(c.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),g.params),f=h.stringify(v)}else if("path"in g)f=g.path,h=n.find(b=>b.re.test(f)),h&&(v=h.parse(f),y=h.record.name);else{if(h=c.name?s.get(c.name):n.find(b=>b.re.test(c.path)),!h)throw tl(1,{location:g,currentLocation:c});y=h.record.name,v=He({},c.params,g.params),f=h.stringify(v)}const S=[];let B=h;for(;B;)S.unshift(B.record),B=B.parent;return{name:y,path:f,params:v,matched:S,meta:s_(S)}}return t.forEach(g=>d(g)),{addRoute:d,resolve:r,removeRoute:p,getRoutes:m,getRecordMatcher:u}}function l_(t,l){const n={};for(const s of l)s in t&&(n[s]=t[s]);return n}function a_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:n_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function n_(t){const l={},n=t.props||!1;if("component"in t)l.default=n;else for(const s in t.components)l[s]=typeof n=="boolean"?n:n[s];return l}function nr(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function s_(t){return t.reduce((l,n)=>He(l,n.meta),{})}function sr(t,l){const n={};for(const s in t)n[s]=s in l?l[s]:t[s];return n}const Bm=/#/g,o_=/&/g,r_=/\//g,u_=/=/g,d_=/\?/g,$m=/\+/g,c_=/%5B/g,m_=/%5D/g,Tm=/%5E/g,p_=/%60/g,xm=/%7B/g,f_=/%7C/g,Em=/%7D/g,g_=/%20/g;function eo(t){return encodeURI(""+t).replace(f_,"|").replace(c_,"[").replace(m_,"]")}function h_(t){return eo(t).replace(xm,"{").replace(Em,"}").replace(Tm,"^")}function ts(t){return eo(t).replace($m,"%2B").replace(g_,"+").replace(Bm,"%23").replace(o_,"%26").replace(p_,"`").replace(xm,"{").replace(Em,"}").replace(Tm,"^")}function __(t){return ts(t).replace(u_,"%3D")}function b_(t){return eo(t).replace(Bm,"%23").replace(d_,"%3F")}function v_(t){return t==null?"":b_(t).replace(r_,"%2F")}function Ba(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function y_(t){const l={};if(t===""||t==="?")return l;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let u=0;u<s.length;++u){const d=s[u].replace($m," "),p=d.indexOf("="),m=Ba(p<0?d:d.slice(0,p)),o=p<0?null:Ba(d.slice(p+1));if(m in l){let r=l[m];Array.isArray(r)||(r=l[m]=[r]),r.push(o)}else l[m]=o}return l}function or(t){let l="";for(let n in t){const s=t[n];if(n=__(n),s==null){s!==void 0&&(l+=(l.length?"&":"")+n);continue}(Array.isArray(s)?s.map(d=>d&&ts(d)):[s&&ts(s)]).forEach(d=>{d!==void 0&&(l+=(l.length?"&":"")+n,d!=null&&(l+="="+d))})}return l}function C_(t){const l={};for(const n in t){const s=t[n];s!==void 0&&(l[n]=Array.isArray(s)?s.map(u=>u==null?null:""+u):s==null?s:""+s)}return l}function ml(){let t=[];function l(s){return t.push(s),()=>{const u=t.indexOf(s);u>-1&&t.splice(u,1)}}function n(){t=[]}return{add:l,list:()=>t,reset:n}}function w_(t,l,n){const s=()=>{t[l].delete(n)};Ri(s),qs(s),js(()=>{t[l].add(n)}),t[l].add(n)}function S_(t){const l=Me(Cm,{}).value;l&&w_(l,"updateGuards",t)}function ii(t,l,n,s,u){const d=s&&(s.enterCallbacks[u]=s.enterCallbacks[u]||[]);return()=>new Promise((p,m)=>{const o=c=>{c===!1?m(tl(4,{from:n,to:l})):c instanceof Error?m(c):Gh(c)?m(tl(2,{from:l,to:c})):(d&&s.enterCallbacks[u]===d&&typeof c=="function"&&d.push(c),p())},r=t.call(s&&s.instances[u],l,n,o);let g=Promise.resolve(r);t.length<3&&(g=g.then(o)),g.catch(c=>m(c))})}function vn(t,l,n,s){const u=[];for(const d of t)for(const p in d.components){let m=d.components[p];if(!(l!=="beforeRouteEnter"&&!d.instances[p]))if(A_(m)){const r=(m.__vccOpts||m)[l];r&&u.push(ii(r,n,s,d,p))}else{let o=m();u.push(()=>o.then(r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${d.path}"`));const g=Th(r)?r.default:r;d.components[p]=g;const h=(g.__vccOpts||g)[l];return h&&ii(h,n,s,d,p)()}))}}return u}function A_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function rr(t){const l=Me(en),n=Me(Zs),s=F(()=>l.resolve(R(t.to))),u=F(()=>{const{matched:o}=s.value,{length:r}=o,g=o[r-1],c=n.matched;if(!g||!c.length)return-1;const h=c.findIndex(el.bind(null,g));if(h>-1)return h;const v=ur(o[r-2]);return r>1&&ur(g)===v&&c[c.length-1].path!==v?c.findIndex(el.bind(null,o[r-2])):h}),d=F(()=>u.value>-1&&$_(n.params,s.value.params)),p=F(()=>u.value>-1&&u.value===n.matched.length-1&&wm(n.params,s.value.params));function m(o={}){return B_(o)?l[R(t.replace)?"replace":"push"](R(t.to)).catch($l):Promise.resolve()}return{route:s,href:F(()=>s.value.href),isActive:d,isExactActive:p,navigate:m}}const k_=E({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rr,setup(t,{slots:l}){const n=qt(rr(t)),{options:s}=Me(en),u=F(()=>({[dr(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[dr(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const d=l.default&&l.default(n);return t.custom?d:U("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:u.value},d)}}}),Rm=k_;function B_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const l=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return t.preventDefault&&t.preventDefault(),!0}}function $_(t,l){for(const n in l){const s=l[n],u=t[n];if(typeof s=="string"){if(s!==u)return!1}else if(!Array.isArray(u)||u.length!==s.length||s.some((d,p)=>d!==u[p]))return!1}return!0}function ur(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dr=(t,l,n)=>t??l??n,T_=E({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:l,slots:n}){const s=Me(Zn),u=F(()=>t.route||s.value),d=Me(Qo,0),p=F(()=>u.value.matched[d]);tt(Qo,d+1),tt(Cm,p),tt(Zn,u);const m=H();return nt(()=>[m.value,p.value,t.name],([o,r,g],[c,h,v])=>{r&&(r.instances[g]=o,h&&h!==r&&o&&o===c&&(r.leaveGuards.size||(r.leaveGuards=h.leaveGuards),r.updateGuards.size||(r.updateGuards=h.updateGuards))),o&&r&&(!h||!el(r,h)||!c)&&(r.enterCallbacks[g]||[]).forEach(f=>f(o))},{flush:"post"}),()=>{const o=u.value,r=p.value,g=r&&r.components[t.name],c=t.name;if(!g)return cr(n.default,{Component:g,route:o});const h=r.props[t.name],v=h?h===!0?o.params:typeof h=="function"?h(o):h:null,y=U(g,He({},v,l,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(r.instances[c]=null)},ref:m}));return cr(n.default,{Component:y,route:o})||y}}});function cr(t,l){if(!t)return null;const n=t(l);return n.length===1?n[0]:n}const x_=T_;function E_(t){const l=i_(t.routes,t),n=t.parseQuery||y_,s=t.stringifyQuery||or,u=t.history,d=ml(),p=ml(),m=ml(),o=Zd(Kt);let r=Kt;Ii&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=_n.bind(null,q=>""+q),c=_n.bind(null,v_),h=_n.bind(null,Ba);function v(q,ne){let ae,me;return Am(q)?(ae=l.getRecordMatcher(q),me=ne):me=q,l.addRoute(me,ae)}function f(q){const ne=l.getRecordMatcher(q);ne&&l.removeRoute(ne)}function y(){return l.getRoutes().map(q=>q.record)}function S(q){return!!l.getRecordMatcher(q)}function B(q,ne){if(ne=He({},ne||o.value),typeof q=="string"){const Ae=bn(n,q,ne.path),T=l.resolve({path:Ae.path},ne),P=u.createHref(Ae.fullPath);return He(Ae,T,{params:h(T.params),hash:Ba(Ae.hash),redirectedFrom:void 0,href:P})}let ae;if("path"in q)ae=He({},q,{path:bn(n,q.path,ne.path).path});else{const Ae=He({},q.params);for(const T in Ae)Ae[T]==null&&delete Ae[T];ae=He({},q,{params:c(q.params)}),ne.params=c(ne.params)}const me=l.resolve(ae,ne),Ie=q.hash||"";me.params=g(h(me.params));const Ve=Rh(s,He({},q,{hash:h_(Ie),path:me.path})),Se=u.createHref(Ve);return He({fullPath:Ve,hash:Ie,query:s===or?C_(q.query):q.query||{}},me,{redirectedFrom:void 0,href:Se})}function b(q){return typeof q=="string"?bn(n,q,o.value.path):He({},q)}function w(q,ne){if(r!==q)return tl(8,{from:ne,to:q})}function k(q){return D(q)}function $(q){return k(He(b(q),{replace:!0}))}function x(q){const ne=q.matched[q.matched.length-1];if(ne&&ne.redirect){const{redirect:ae}=ne;let me=typeof ae=="function"?ae(q):ae;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=b(me):{path:me},me.params={}),He({query:q.query,hash:q.hash,params:q.params},me)}}function D(q,ne){const ae=r=B(q),me=o.value,Ie=q.state,Ve=q.force,Se=q.replace===!0,Ae=x(ae);if(Ae)return D(He(b(Ae),{state:Ie,force:Ve,replace:Se}),ne||ae);const T=ae;T.redirectedFrom=ne;let P;return!Ve&&Ph(s,me,ae)&&(P=tl(16,{to:T,from:me}),qe(me,me,!0,!1)),(P?Promise.resolve(P):z(T,me)).catch(N=>pi(N)?N:oe(N,T,me)).then(N=>{if(N){if(pi(N,2))return D(He(b(N.to),{state:Ie,force:Ve,replace:Se}),ne||T)}else N=Y(T,me,!0,Se,Ie);return L(T,me,N),N})}function V(q,ne){const ae=w(q,ne);return ae?Promise.reject(ae):Promise.resolve()}function z(q,ne){let ae;const[me,Ie,Ve]=R_(q,ne);ae=vn(me.reverse(),"beforeRouteLeave",q,ne);for(const Ae of me)Ae.leaveGuards.forEach(T=>{ae.push(ii(T,q,ne))});const Se=V.bind(null,q,ne);return ae.push(Se),Di(ae).then(()=>{ae=[];for(const Ae of d.list())ae.push(ii(Ae,q,ne));return ae.push(Se),Di(ae)}).then(()=>{ae=vn(Ie,"beforeRouteUpdate",q,ne);for(const Ae of Ie)Ae.updateGuards.forEach(T=>{ae.push(ii(T,q,ne))});return ae.push(Se),Di(ae)}).then(()=>{ae=[];for(const Ae of q.matched)if(Ae.beforeEnter&&!ne.matched.includes(Ae))if(Array.isArray(Ae.beforeEnter))for(const T of Ae.beforeEnter)ae.push(ii(T,q,ne));else ae.push(ii(Ae.beforeEnter,q,ne));return ae.push(Se),Di(ae)}).then(()=>(q.matched.forEach(Ae=>Ae.enterCallbacks={}),ae=vn(Ve,"beforeRouteEnter",q,ne),ae.push(Se),Di(ae))).then(()=>{ae=[];for(const Ae of p.list())ae.push(ii(Ae,q,ne));return ae.push(Se),Di(ae)}).catch(Ae=>pi(Ae,8)?Ae:Promise.reject(Ae))}function L(q,ne,ae){for(const me of m.list())me(q,ne,ae)}function Y(q,ne,ae,me,Ie){const Ve=w(q,ne);if(Ve)return Ve;const Se=ne===Kt,Ae=Ii?history.state:{};ae&&(me||Se?u.replace(q.fullPath,He({scroll:Se&&Ae&&Ae.scroll},Ie)):u.push(q.fullPath,Ie)),o.value=q,qe(q,ne,ae,Se),xe()}let j;function de(){j=u.listen((q,ne,ae)=>{const me=B(q),Ie=x(me);if(Ie){D(He(Ie,{replace:!0}),me).catch($l);return}r=me;const Ve=o.value;Ii&&Lh(tr(Ve.fullPath,ae.delta),tn()),z(me,Ve).catch(Se=>pi(Se,12)?Se:pi(Se,2)?(D(Se.to,me).then(Ae=>{pi(Ae,20)&&!ae.delta&&ae.type===Nl.pop&&u.go(-1,!1)}).catch($l),Promise.reject()):(ae.delta&&u.go(-ae.delta,!1),oe(Se,me,Ve))).then(Se=>{Se=Se||Y(me,Ve,!1),Se&&(ae.delta?u.go(-ae.delta,!1):ae.type===Nl.pop&&pi(Se,20)&&u.go(-1,!1)),L(me,Ve,Se)}).catch($l)})}let ke=ml(),O=ml(),G;function oe(q,ne,ae){xe(q);const me=O.list();return me.length?me.forEach(Ie=>Ie(q,ne,ae)):console.error(q),Promise.reject(q)}function Z(){return G&&o.value!==Kt?Promise.resolve():new Promise((q,ne)=>{ke.add([q,ne])})}function xe(q){G||(G=!0,de(),ke.list().forEach(([ne,ae])=>q?ae(q):ne()),ke.reset())}function qe(q,ne,ae,me){const{scrollBehavior:Ie}=t;if(!Ii||!Ie)return Promise.resolve();const Ve=!ae&&Oh(tr(q.fullPath,0))||(me||!ae)&&history.state&&history.state.scroll||null;return sl().then(()=>Ie(q,ne,Ve)).then(Se=>Se&&Nh(Se)).catch(Se=>oe(Se,q,ne))}const Xe=q=>u.go(q);let Oe;const It=new Set;return{currentRoute:o,addRoute:v,removeRoute:f,hasRoute:S,getRoutes:y,resolve:B,options:t,push:k,replace:$,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:d.add,beforeResolve:p.add,afterEach:m.add,onError:O.add,isReady:Z,install(q){const ne=this;q.component("RouterLink",Rm),q.component("RouterView",x_),q.config.globalProperties.$router=ne,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>R(o)}),Ii&&!Oe&&o.value===Kt&&(Oe=!0,k(u.location).catch(Ie=>{}));const ae={};for(const Ie in Kt)ae[Ie]=F(()=>o.value[Ie]);q.provide(en,ne),q.provide(Zs,qt(ae)),q.provide(Zn,o);const me=q.unmount;It.add(q),q.unmount=function(){It.delete(q),It.size<1&&(r=Kt,j&&j(),o.value=Kt,Oe=!1,G=!1),me()}}}}function Di(t){return t.reduce((l,n)=>l.then(()=>n()),Promise.resolve())}function R_(t,l){const n=[],s=[],u=[],d=Math.max(l.matched.length,t.matched.length);for(let p=0;p<d;p++){const m=l.matched[p];m&&(t.matched.find(r=>el(r,m))?s.push(m):n.push(m));const o=t.matched[p];o&&(l.matched.find(r=>el(r,o))||u.push(o))}return[n,s,u]}function Pm(){return Me(en)}function zm(){return Me(Zs)}const P_={__name:"Navbar",props:["onClick"],setup(t){const l=H(),n=Pm();function s(u){return u.charAt(0).toUpperCase()+u.slice(1)}return Ls(()=>{const p=n.currentRoute.value.path.match(/\/([^/]+)$/);p&&(l.value=s(p[1]))}),(u,d)=>{const p=_("SuiIcon"),m=_("SuiMenuItem"),o=_("SuiMenu");return I(),te(o,{id:"navbar",fixed:"",icon:"",inverted:"",size:"big"},{default:i(()=>[e(m,{onClick:t.onClick},{default:i(()=>[e(p,{name:"hamburger"})]),_:1},8,["onClick"]),e(m,null,{default:i(()=>[a(Be(l.value),1)]),_:1})]),_:1})}}},z_=ge(P_,[["__scopeId","data-v-338afb35"]]),D_=E({name:"Sidebar",setup(){const t=zm();return{isActive:p=>t.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),M_=C("strong",null," Fomantic UI Vue ",-1),I_=C("b",null,"Getting Started",-1);function V_(t,l,n,s,u,d){const p=_("sui-menu-item"),m=_("sui-menu-header"),o=_("sui-menu-menu"),r=_("sui-menu");return I(),te(r,{fluid:"",inverted:"",vertical:""},{default:i(()=>[e(p,{as:"div"},{default:i(()=>[M_]),_:1}),e(p,{as:"router-link",to:"/"},{default:i(()=>[I_]),_:1}),e(p,{as:"div"},{default:i(()=>[e(m,{content:"Elements"}),e(o,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.elements,g=>(I(),te(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(p,{as:"div"},{default:i(()=>[e(m,{content:"Collections"}),e(o,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.collections,g=>(I(),te(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(p,{as:"div"},{default:i(()=>[e(m,{content:"Views"}),e(o,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.views,g=>(I(),te(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(p,{as:"div"},{default:i(()=>[e(m,{content:"Modules"}),e(o,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.modules,g=>(I(),te(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const F_=ge(D_,[["render",V_]]),N_={class:"sidemenu"},L_={style:{flex:"1","overflow-y":"scroll"}},O_={__name:"Sidebar",setup(t){return(l,n)=>(I(),re("div",N_,[C("div",L_,[e(F_)])]))}},H_=ge(O_,[["__scopeId","data-v-379ef704"]]),j_=E({name:"Sidebar",setup(){const t=zm();return{isActive:p=>t.path===p,elements:[{name:"Button",path:"/elements/button"},{name:"Container",path:"/elements/container"},{name:"Divider",path:"/elements/divider"},{name:"Emoji",path:"/elements/emoji"},{name:"Flag",path:"/elements/flag"},{name:"Header",path:"/elements/header"},{name:"Icon",path:"/elements/icon"},{name:"Image",path:"/elements/image"},{name:"Input",path:"/elements/input"},{name:"Label",path:"/elements/label"},{name:"List",path:"/elements/list"},{name:"Loader",path:"/elements/loader"},{name:"Rail",path:"/elements/rail"},{name:"Reveal",path:"/elements/reveal"},{name:"Segment",path:"/elements/segment"},{name:"Step",path:"/elements/step"}],collections:[{name:"Breadcrumb",path:"/collections/breadcrumb"},{name:"Form",path:"/collections/form"},{name:"Grid",path:"/collections/grid"},{name:"Menu",path:"/collections/menu"},{name:"Message",path:"/collections/message"},{name:"Table",path:"/collections/table"}],views:[{name:"Advertisement",path:"/views/advertisement"},{name:"Card",path:"/views/card"},{name:"Comment",path:"/views/comment"},{name:"Feed",path:"/views/feed"},{name:"Item",path:"/views/item"},{name:"Statistic",path:"/views/statistic"}],modules:[{name:"Accordion",path:"/modules/accordion"},{name:"Calendar",path:"/modules/calendar"},{name:"Checkbox",path:"/modules/checkbox"},{name:"Dimmer",path:"/modules/dimmer"},{name:"Dropdown",path:"/modules/dropdown"},{name:"Embed",path:"/modules/embed"},{name:"Modal",path:"/modules/modal"},{name:"Popup",path:"/modules/popup"},{name:"Progress",path:"/modules/progress"},{name:"Rating",path:"/modules/rating"},{name:"Sidebar",path:"/modules/sidebar"},{name:"Slider",path:"/modules/slider"},{name:"Tab",path:"/modules/tab"},{name:"Toast",path:"/modules/toast"}]}}}),q_=C("strong",null," Fomantic UI Vue ",-1),U_=C("b",null,"Getting Started",-1);function G_(t,l,n,s,u,d){const p=_("sui-menu-item"),m=_("sui-menu-header"),o=_("sui-menu-menu"),r=_("sui-sidebar");return I(),te(r,{dimmed:"",inverted:"",style:{width:"250px"}},{default:i(()=>[e(p,{as:"div"},{default:i(()=>[q_]),_:1}),e(p,{as:"router-link",to:"/"},{default:i(()=>[U_]),_:1}),e(p,{as:"div"},{default:i(()=>[e(m,{content:"Elements"}),e(o,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.elements,g=>(I(),te(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(p,{as:"div"},{default:i(()=>[e(m,{content:"Collections"}),e(o,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.collections,g=>(I(),te(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(p,{as:"div"},{default:i(()=>[e(m,{content:"Views"}),e(o,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.views,g=>(I(),te(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1}),e(p,{as:"div"},{default:i(()=>[e(m,{content:"Modules"}),e(o,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.modules,g=>(I(),te(p,{key:g.name,name:g.name,to:g.path,active:t.isActive(g.path),as:"router-link"},null,8,["name","to","active"]))),128))]),_:1})]),_:1})]),_:1})}const Y_=ge(j_,[["render",G_]]),J_={class:"pusher",style:{height:"100vh"}},W_={class:"article"},K_={__name:"Home",setup(t){const l=H(!1),n=()=>l.value=!l.value;return S_(()=>{l.value=!1}),(s,u)=>{const d=_("router-view"),p=_("SuiSegment");return I(),te(p,{class:"pushable",style:{border:"none"}},{default:i(()=>[e(Y_,{visible:l.value},null,8,["visible"]),C("div",J_,[e(H_),e(z_,{"on-click":n}),C("div",W_,[e(d)])])]),_:1})}}},X_=ge(K_,[["__scopeId","data-v-f0139217"]]);var mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Q_(t){if(t.__esModule)return t;var l=t.default;if(typeof l=="function"){var n=function s(){return this instanceof s?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};n.prototype=l.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var u=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,u.get?u:{enumerable:!0,get:function(){return t[s]}})}),n}const Z_=Q_(Ah);var Mm={exports:{}};(function(t){var l=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(s){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,p={},m={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function b(w){return w instanceof o?new o(w.type,b(w.content),w.alias):Array.isArray(w)?w.map(b):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++d}),b.__id},clone:function b(w,k){k=k||{};var $,x;switch(m.util.type(w)){case"Object":if(x=m.util.objId(w),k[x])return k[x];$={},k[x]=$;for(var D in w)w.hasOwnProperty(D)&&($[D]=b(w[D],k));return $;case"Array":return x=m.util.objId(w),k[x]?k[x]:($=[],k[x]=$,w.forEach(function(V,z){$[z]=b(V,k)}),$);default:return w}},getLanguage:function(b){for(;b;){var w=u.exec(b.className);if(w)return w[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,w){b.className=b.className.replace(RegExp(u,"gi"),""),b.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch($){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec($.stack)||[])[1];if(b){var w=document.getElementsByTagName("script");for(var k in w)if(w[k].src==b)return w[k]}return null}},isActive:function(b,w,k){for(var $="no-"+w;b;){var x=b.classList;if(x.contains(w))return!0;if(x.contains($))return!1;b=b.parentElement}return!!k}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(b,w){var k=m.util.clone(m.languages[b]);for(var $ in w)k[$]=w[$];return k},insertBefore:function(b,w,k,$){$=$||m.languages;var x=$[b],D={};for(var V in x)if(x.hasOwnProperty(V)){if(V==w)for(var z in k)k.hasOwnProperty(z)&&(D[z]=k[z]);k.hasOwnProperty(V)||(D[V]=x[V])}var L=$[b];return $[b]=D,m.languages.DFS(m.languages,function(Y,j){j===L&&Y!=b&&(this[Y]=D)}),D},DFS:function b(w,k,$,x){x=x||{};var D=m.util.objId;for(var V in w)if(w.hasOwnProperty(V)){k.call(w,V,w[V],$||V);var z=w[V],L=m.util.type(z);L==="Object"&&!x[D(z)]?(x[D(z)]=!0,b(z,k,null,x)):L==="Array"&&!x[D(z)]&&(x[D(z)]=!0,b(z,k,V,x))}}},plugins:{},highlightAll:function(b,w){m.highlightAllUnder(document,b,w)},highlightAllUnder:function(b,w,k){var $={callback:k,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};m.hooks.run("before-highlightall",$),$.elements=Array.prototype.slice.apply($.container.querySelectorAll($.selector)),m.hooks.run("before-all-elements-highlight",$);for(var x=0,D;D=$.elements[x++];)m.highlightElement(D,w===!0,$.callback)},highlightElement:function(b,w,k){var $=m.util.getLanguage(b),x=m.languages[$];m.util.setLanguage(b,$);var D=b.parentElement;D&&D.nodeName.toLowerCase()==="pre"&&m.util.setLanguage(D,$);var V=b.textContent,z={element:b,language:$,grammar:x,code:V};function L(j){z.highlightedCode=j,m.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,m.hooks.run("after-highlight",z),m.hooks.run("complete",z),k&&k.call(z.element)}if(m.hooks.run("before-sanity-check",z),D=z.element.parentElement,D&&D.nodeName.toLowerCase()==="pre"&&!D.hasAttribute("tabindex")&&D.setAttribute("tabindex","0"),!z.code){m.hooks.run("complete",z),k&&k.call(z.element);return}if(m.hooks.run("before-highlight",z),!z.grammar){L(m.util.encode(z.code));return}if(w&&s.Worker){var Y=new Worker(m.filename);Y.onmessage=function(j){L(j.data)},Y.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else L(m.highlight(z.code,z.grammar,z.language))},highlight:function(b,w,k){var $={code:b,grammar:w,language:k};if(m.hooks.run("before-tokenize",$),!$.grammar)throw new Error('The language "'+$.language+'" has no grammar.');return $.tokens=m.tokenize($.code,$.grammar),m.hooks.run("after-tokenize",$),o.stringify(m.util.encode($.tokens),$.language)},tokenize:function(b,w){var k=w.rest;if(k){for(var $ in k)w[$]=k[$];delete w.rest}var x=new c;return h(x,x.head,b),g(b,x,w,x.head,0),f(x)},hooks:{all:{},add:function(b,w){var k=m.hooks.all;k[b]=k[b]||[],k[b].push(w)},run:function(b,w){var k=m.hooks.all[b];if(!(!k||!k.length))for(var $=0,x;x=k[$++];)x(w)}},Token:o};s.Prism=m;function o(b,w,k,$){this.type=b,this.content=w,this.alias=k,this.length=($||"").length|0}o.stringify=function b(w,k){if(typeof w=="string")return w;if(Array.isArray(w)){var $="";return w.forEach(function(L){$+=b(L,k)}),$}var x={type:w.type,content:b(w.content,k),tag:"span",classes:["token",w.type],attributes:{},language:k},D=w.alias;D&&(Array.isArray(D)?Array.prototype.push.apply(x.classes,D):x.classes.push(D)),m.hooks.run("wrap",x);var V="";for(var z in x.attributes)V+=" "+z+'="'+(x.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+V+">"+x.content+"</"+x.tag+">"};function r(b,w,k,$){b.lastIndex=w;var x=b.exec(k);if(x&&$&&x[1]){var D=x[1].length;x.index+=D,x[0]=x[0].slice(D)}return x}function g(b,w,k,$,x,D){for(var V in k)if(!(!k.hasOwnProperty(V)||!k[V])){var z=k[V];z=Array.isArray(z)?z:[z];for(var L=0;L<z.length;++L){if(D&&D.cause==V+","+L)return;var Y=z[L],j=Y.inside,de=!!Y.lookbehind,ke=!!Y.greedy,O=Y.alias;if(ke&&!Y.pattern.global){var G=Y.pattern.toString().match(/[imsuy]*$/)[0];Y.pattern=RegExp(Y.pattern.source,G+"g")}for(var oe=Y.pattern||Y,Z=$.next,xe=x;Z!==w.tail&&!(D&&xe>=D.reach);xe+=Z.value.length,Z=Z.next){var qe=Z.value;if(w.length>b.length)return;if(!(qe instanceof o)){var Xe=1,Oe;if(ke){if(Oe=r(oe,xe,b,de),!Oe||Oe.index>=b.length)break;var ne=Oe.index,It=Oe.index+Oe[0].length,Ct=xe;for(Ct+=Z.value.length;ne>=Ct;)Z=Z.next,Ct+=Z.value.length;if(Ct-=Z.value.length,xe=Ct,Z.value instanceof o)continue;for(var q=Z;q!==w.tail&&(Ct<It||typeof q.value=="string");q=q.next)Xe++,Ct+=q.value.length;Xe--,qe=b.slice(xe,Ct),Oe.index-=xe}else if(Oe=r(oe,0,qe,de),!Oe)continue;var ne=Oe.index,ae=Oe[0],me=qe.slice(0,ne),Ie=qe.slice(ne+ae.length),Ve=xe+qe.length;D&&Ve>D.reach&&(D.reach=Ve);var Se=Z.prev;me&&(Se=h(w,Se,me),xe+=me.length),v(w,Se,Xe);var Ae=new o(V,j?m.tokenize(ae,j):ae,O,ae);if(Z=h(w,Se,Ae),Ie&&h(w,Z,Ie),Xe>1){var T={cause:V+","+L,reach:Ve};g(b,w,k,Z.prev,xe,T),D&&T.reach>D.reach&&(D.reach=T.reach)}}}}}}function c(){var b={value:null,prev:null,next:null},w={value:null,prev:b,next:null};b.next=w,this.head=b,this.tail=w,this.length=0}function h(b,w,k){var $=w.next,x={value:k,prev:w,next:$};return w.next=x,$.prev=x,b.length++,x}function v(b,w,k){for(var $=w.next,x=0;x<k&&$!==b.tail;x++)$=$.next;w.next=$,$.prev=w,b.length-=x}function f(b){for(var w=[],k=b.head.next;k!==b.tail;)w.push(k.value),k=k.next;return w}if(!s.document)return s.addEventListener&&(m.disableWorkerMessageHandler||s.addEventListener("message",function(b){var w=JSON.parse(b.data),k=w.language,$=w.code,x=w.immediateClose;s.postMessage(m.highlight($,m.languages[k],k)),x&&s.close()},!1)),m;var y=m.util.currentScript();y&&(m.filename=y.src,y.hasAttribute("data-manual")&&(m.manual=!0));function S(){m.manual||m.highlightAll()}if(!m.manual){var B=document.readyState;B==="loading"||B==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return m}(l);t.exports&&(t.exports=n),typeof mr<"u"&&(mr.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(u,d){var p={};p["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[d]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var m={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};m["language-"+d]={pattern:/[\s\S]+/,inside:n.languages[d]};var o={};o[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:m},n.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(s,u){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:n.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(s){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var d=s.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",u=function(y,S){return"✖ Error "+y+" while fetching file: "+S},d="✖ Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},m="data-src-status",o="loading",r="loaded",g="failed",c="pre[data-src]:not(["+m+'="'+r+'"]):not(['+m+'="'+o+'"])';function h(y,S,B){var b=new XMLHttpRequest;b.open("GET",y,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?S(b.responseText):b.status>=400?B(u(b.status,b.statusText)):B(d))},b.send(null)}function v(y){var S=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(S){var B=Number(S[1]),b=S[2],w=S[3];return b?w?[B,Number(w)]:[B,void 0]:[B,B]}}n.hooks.add("before-highlightall",function(y){y.selector+=", "+c}),n.hooks.add("before-sanity-check",function(y){var S=y.element;if(S.matches(c)){y.code="",S.setAttribute(m,o);var B=S.appendChild(document.createElement("CODE"));B.textContent=s;var b=S.getAttribute("data-src"),w=y.language;if(w==="none"){var k=(/\.(\w+)$/.exec(b)||[,"none"])[1];w=p[k]||k}n.util.setLanguage(B,w),n.util.setLanguage(S,w);var $=n.plugins.autoloader;$&&$.loadLanguages(w),h(b,function(x){S.setAttribute(m,r);var D=v(S.getAttribute("data-range"));if(D){var V=x.split(/\r\n?|\n/g),z=D[0],L=D[1]==null?V.length:D[1];z<0&&(z+=V.length),z=Math.max(0,Math.min(z-1,V.length)),L<0&&(L+=V.length),L=Math.max(0,Math.min(L,V.length)),x=V.slice(z,L).join(`
`),S.hasAttribute("data-start")||S.setAttribute("data-start",String(z+1))}B.textContent=x,n.highlightElement(B)},function(x){S.setAttribute(m,g),B.textContent=x})}}),n.plugins.fileHighlight={highlight:function(S){for(var B=(S||document).querySelectorAll(c),b=0,w;w=B[b++];)n.highlightElement(w)}};var f=!1;n.fileHighlight=function(){f||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),f=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Mm);var Im=Mm.exports;const eb=Dm(Im);function tb(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var oa=Z_,yn=tb(Im),ib=oa.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function(l,n){var s=n.slots,u=n.attrs,d=s&&s.default&&s.default()||[],p=l.code||d&&d.length?d[0].children:"",m=l.inline,o=l.language,r=yn.languages[o],g="language-".concat(o);return function(){return m?oa.h("code",{class:[g],innerHTML:yn.highlight(p,r)}):oa.h("pre",Object.assign({},u,{class:[u.class,g]}),[oa.h("code",Object.assign({},u,{class:[u.class,g],innerHTML:yn.highlight(p,r)}))])}}}),lb=ib;const Vm=Dm(lb),ab=E({name:"DocPageHeader",props:{title:String,sub:String}}),nb={class:"intro",style:{padding:"2rem"}};function sb(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment");return I(),te(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",nb,[e(m,{as:"h1"},{default:i(()=>[a(Be(t.title)+" ",1),e(p,null,{default:i(()=>[a(Be(t.sub),1)]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1})}const je=ge(ab,[["render",sb]]),ob=E({name:"GettingStarted",components:{Prism:Vm,DocPageHeader:je}}),ln=t=>(Ds("data-v-2f4c2002"),t=t(),Ms(),t),rb=ln(()=>C("p",null," Fomantic-UI Vue provides UI components based on Fomantic-UI. ",-1)),ub=ln(()=>C("p",null," You can import all components as Vue plugin. ",-1)),db=ln(()=>C("br",null,null,-1)),cb=ln(()=>C("p",null," Or pick a component indivisually, add it to your components option. ",-1));function mb(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("prism"),r=_("sui-container");return I(),re("div",null,[e(p,{title:"Getting Started",sub:"Getting up and running with Fomantic-UI Vue"}),e(r,{class:"main"},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[a("Install")]),_:1}),rb,e(m,{as:"h3"},{default:i(()=>[a("via Package Manager")]),_:1}),e(o,{language:"bash"},{default:i(()=>[a(Be(`$ npm install vue-fomantic-ui
$ npm install fomantic-ui-css
# or
$ yarn add vue-fomantic-ui
$ yarn add fomantic-ui-css`))]),_:1}),e(m,{as:"h2"},{default:i(()=>[a("Usage")]),_:1}),ub,e(o,{language:"js"},{default:i(()=>[a(Be(`import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

const app = createApp(App)
app.use(FomanticUI)`),1)]),_:1}),db,cb,e(o,{language:"js"},{default:i(()=>[a(Be(`import { SuiButton } from 'vue-fomantic-ui'

export default {
  components: { SuiButton },
  // ...
}`),1)]),_:1})]),_:1})])}const pb=ge(ob,[["render",mb],["__scopeId","data-v-2f4c2002"]]),fb={__name:"DocSections",props:["docs"],setup(t){const l=t,n=F(()=>[...new Set(l.docs.map(s=>s.category))]);return(s,u)=>{const d=_("SuiHeader");return I(!0),re(we,null,Ke(n.value,(p,m)=>(I(),re(we,{key:p},[e(d,{as:"h2",dividing:"",style:nl({marginTop:m!==0?"5rem":"0",paddingTop:"2rem"})},{default:i(()=>[a(Be(p),1)]),_:2},1032,["style"]),(I(!0),re(we,null,Ke(t.docs.filter(o=>o.category===p),(o,r)=>(I(),te(uc(o.component),{key:o.label+"_"+r,id:o.id,style:{marginTop:"3rem"}},null,8,["id"]))),128))],64))),128)}}},gb={};function hb(t,l){const n=_("SuiRail");return I(),te(n,{id:"table-contents",position:"right",dividing:""})}const _b=ge(gb,[["render",hb],["__scopeId","data-v-c0207a98"]]),bb={class:"intro"},vb={__name:"DocComponent",props:["title","description","componentDocs"],setup(t){return(l,n)=>{const s=_("SuiHeaderSubheader"),u=_("SuiHeader"),d=_("SuiDivider"),p=_("SuiIcon"),m=_("SuiMenuItem"),o=_("SuiMenu"),r=_("SuiContainer"),g=_("SuiSegment");return I(),re("div",null,[e(g,{vertical:""},{default:i(()=>[e(r,{class:"main"},{default:i(()=>[C("div",bb,[e(u,{as:"h1"},{default:i(()=>[a(Be(t.title)+" ",1),e(s,null,{default:i(()=>[a(Be(t.description),1)]),_:1})]),_:1}),e(d,{hidden:""}),e(o,{floated:"right"},{default:i(()=>[e(m,{as:"a",icon:""},{default:i(()=>[e(p,{name:"edit"})]),_:1}),e(m,{as:"a",icon:""},{default:i(()=>[e(p,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(r,{class:"main"},{default:i(()=>[e(g,{basic:"",fitted:""},{default:i(()=>[e(fb,{docs:t.componentDocs},null,8,["docs"]),e(_b)]),_:1})]),_:1})])}}},Fm=ge(vb,[["__scopeId","data-v-901678ff"]]);function Nm(t){var l,n,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t))for(l=0;l<t.length;l++)t[l]&&(n=Nm(t[l]))&&(s&&(s+=" "),s+=n);else for(l in t)t[l]&&(s&&(s+=" "),s+=l);return s}function K(){for(var t,l,n=0,s="";n<arguments.length;)(t=arguments[n++])&&(l=Nm(t))&&(s&&(s+=" "),s+=l);return s}const A=(t,l)=>t?l:"",De=(t,l)=>typeof t=="string"?`${t} ${l}`:"",Pe=(t,l)=>t===!0?l:t==="below"?`${l} ${t}`:typeof t=="string"?`${t} ${l}`:"",rl=t=>t==="justified"?"justified":De(t,"aligned"),Gt=(t,l)=>typeof t=="number"&&l?`${is(t)} ${l}`:typeof t=="number"&&!l?is(t):typeof t=="string"&&t==="equal"?`${t} width`:"",pl=(t,l)=>t?`${is(t)} wide ${l}`:"",is=t=>["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"][t-1],M=E({name:"SuiButton",props:{active:Boolean,animated:[Boolean,String],as:{type:String,default:"button"},attached:String,basic:Boolean,circular:Boolean,color:String,compact:Boolean,disabled:Boolean,facebook:Boolean,floated:String,fluid:Boolean,google:Boolean,labeled:[Boolean,String],labelPosition:String,icon:Boolean,linkedin:Boolean,instagram:Boolean,inverted:Boolean,loading:Boolean,negative:Boolean,positive:Boolean,primary:Boolean,secondary:Boolean,size:String,telegram:Boolean,tertiary:Boolean,toggle:Boolean,twitter:Boolean,vk:Boolean,whatsapp:Boolean,youtube:Boolean},setup(t){return{computedClass:F(()=>K("ui",t.color,t.size,A(t.active,"active"),A(t.basic,"basic"),A(t.circular,"circular"),A(t.compact,"compact"),A(t.disabled,"disabled"),A(t.facebook,"facebook"),A(t.fluid,"fluid"),A(t.google,"google"),A(t.icon,"icon"),A(t.linkedin,"linkedin"),A(t.instagram,"instagram"),A(t.inverted,"inverted"),A(t.loading,"loading"),A(t.negative,"negative"),A(t.positive,"positive"),A(t.primary,"primary"),A(t.secondary,"secondary"),A(t.telegram,"telegram"),A(t.tertiary,"tertiary"),A(t.toggle,"toggle"),A(t.twitter,"twitter"),A(t.vk,"vk"),A(t.whatsapp,"whatsapp"),A(t.youtube,"youtube"),De(t.attached,"attached"),De(t.floated,"floated"),De(t.labelPosition,"labeled"),Pe(t.animated,"animated"),Pe(t.labeled,"labeled"),"button"))}},render(){let t=this.as||"div";return e(t,{class:this.computedClass,role:"button"},{default:()=>{var l,n;return[(n=(l=this.$slots).default)==null?void 0:n.call(l)]}})}}),li=E({name:"SuiButtonContent",props:{hidden:Boolean,visible:Boolean},setup(t){return{computedClass:F(()=>K(A(t.hidden,"hidden"),A(t.visible,"visible"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),lt=E({name:"SuiButtonGroup",props:{attached:String,basic:Boolean,color:String,icon:Boolean,labeled:Boolean,size:String,vertical:Boolean,widths:Number},setup(t){return{computedClass:F(()=>K("ui",t.color,t.size,A(t.basic,"basic"),A(t.icon,"icon"),A(t.labeled,"labeled"),A(t.vertical,"vertical"),De(t.attached,"attached"),Gt(t.widths,""),"buttons"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),yb={install(t){t.component(M.name,M),t.component(li.name,li),t.component(lt.name,lt)}},pr=E({name:"SuiContainer",props:{fluid:Boolean,text:Boolean,textAlign:String},setup(t){return{computedClass:F(()=>K("ui",A(t.fluid,"fluid"),A(t.text,"text"),rl(t.textAlign),"container"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Cb={install(t){t.component(pr.name,pr)}},fr=E({name:"SuiDivider",props:{clearing:Boolean,fitted:Boolean,hidden:Boolean,horizontal:Boolean,inverted:Boolean,section:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:F(()=>K("ui",A(t.clearing,"clearing"),A(t.fitted,"fitted"),A(t.hidden,"hidden"),A(t.horizontal,"horizontal"),A(t.inverted,"inverted"),A(t.section,"section"),A(t.vertical,"vertical"),De(t.textAlign,"aligned"),"divider"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),wb={install(t){t.component(fr.name,fr)}},gr=E({name:"SuiEmoji",props:{disabled:Boolean,link:Boolean,loading:Boolean,name:String,size:String},setup(t){return{computedClass:F(()=>K(t.size,A(t.disabled,"disabled"),A(t.link,"link"),A(t.loading,"loading")))}},render(){return this.computedClass?U("em",{class:this.computedClass,"data-emoji":this.$props.name}):U("em",{"data-emoji":this.$props.name})}}),Sb={install(t){t.component(gr.name,gr)}},hr=E({name:"SuiFlag",props:{name:String},setup(t){return{computedClass:F(()=>K(t.name,"flag"))}},render(){return U("i",{class:this.computedClass})}}),Ab={install(t){t.component(hr.name,hr)}},$a=E({name:"SuiHeaderSubheader",props:{as:String},setup(t){return{elementType:t.as||"div"}},render(){var t,l;return U(this.elementType,{class:"sub header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),_r=E({name:"SuiHeader",components:{HeaderSubheader:$a},props:{as:String,attached:[Boolean,String],block:Boolean,color:String,content:String,disabled:Boolean,dividing:Boolean,floated:String,icon:Boolean,image:Boolean,inverted:Boolean,size:String,sub:Boolean,subheader:String,textAlign:String},setup(t){const l=t.as||"div",n=F(()=>K("ui",t.color,t.size,A(t.block,"block"),A(t.disabled,"disabled"),A(t.dividing,"dividing"),A(t.icon,"icon"),A(t.image,"image"),A(t.inverted,"inverted"),A(t.sub,"sub"),De(t.floated,"floated"),Pe(t.attached,"attached"),rl(t.textAlign),"header"));return{elementType:l,computedClass:n}},render(){var t,l;let n=[];return this.content&&n.push(this.content),this.subheader&&n.push(U($a,{},this.subheader)),n.length>0?U(this.elementType,{class:this.computedClass},n):U(this.elementType,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),br=E({name:"SuiHeaderContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),kb={install(t){t.component(_r.name,_r),t.component(br.name,br),t.component($a.name,$a)}},ut=E({name:"SuiIcon",props:{as:String,bordered:Boolean,circular:Boolean,color:String,corner:[Boolean,String],disabled:Boolean,fitted:Boolean,flipped:String,inverted:Boolean,link:Boolean,loading:Boolean,name:String,rotated:String,size:String},setup(t){return{computedClass:F(()=>K(t.color,t.name,t.size,A(t.bordered,"bordered"),A(t.circular,"circular"),A(t.disabled,"disabled"),A(t.fitted,"fitted"),A(t.inverted,"inverted"),A(t.link,"link"),A(t.loading,"loading"),De(t.flipped,"flipped"),De(t.rotated,"rotated"),Pe(t.corner,"corner"),"icon"))}},render(){let t=this.$props.as||"i";return U(t,{"aria-hidden":!0,class:this.computedClass})}}),vr=E({name:"SuiIconGroup",props:{as:String,size:String},setup(t){return{computedClass:F(()=>K(t.size,"icons"))}},render(){var t,l;let n=this.$props.as||"i";return U(n,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Bb={install(t){t.component(ut.name,ut),t.component(vr.name,vr)}},Lm=["top","middle","bottom"],$b={verticalAlign:{type:String,validator:t=>Lm.includes(t)}};function Tb(t){return{verticalAlignClass:F(()=>t.verticalAlign&&Lm.includes(t.verticalAlign)?`${t.verticalAlign} aligned`:null)}}const xb=["left","right"],Eb={floated:{type:String,validator:t=>xb.includes(t)}};function Rb(t){return{floatedClass:F(()=>t.floated&&(t.floated==="left"||t.floated==="right")?`${t.floated} floated`:null)}}const Ht=E({name:"SuiLabel",props:{as:String,attached:String,basic:Boolean,circular:Boolean,color:String,corner:String,empty:Boolean,floating:Boolean,horizontal:Boolean,icon:String,image:Boolean,inverted:Boolean,pointing:[Boolean,String],prompt:Boolean,ribbon:[Boolean,String],size:String,tag:Boolean},setup(t,{slots:l}){const n=F(()=>K("ui",t.size,t.color,A(t.basic,"basic"),A(t.circular,"circular"),A(t.empty,"empty"),A(t.floating,"floating"),A(t.horizontal,"horizontal"),A(t.image,"image"),A(t.inverted,"inverted"),A(t.prompt,"prompt"),A(t.tag,"tag"),De(t.attached,"attached"),De(t.corner,"corner"),Pe(t.pointing,"pointing"),Pe(t.ribbon,"ribbon"),"label"));let s=t.as||"div";return t.icon?()=>U(s,{class:n.value},U(ut,{name:t.icon})):()=>{var u;return U(s,{class:n.value},(u=l.default)==null?void 0:u.call(l))}}}),yr=E({name:"SuiLabelDetail",render(){var t,l;return e("div",{class:"detail"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Cr=E({name:"SuiLabelGroup",props:{basic:Boolean,circular:Boolean,color:String,size:String,tag:Boolean},setup(t,{slots:l}){const n=F(()=>K("ui",t.color,t.size,A(t.basic,"basic"),A(t.circular,"circular"),A(t.tag,"tag"),"labels"));return()=>{var s;return U("div",{class:n.value},(s=l.default)==null?void 0:s.call(l))}}}),Pb={install(t){t.component(Ht.name,Ht),t.component(yr.name,yr),t.component(Cr.name,Cr)}},Ta=E({name:"SuiImage",props:{as:String,avatar:Boolean,bordered:Boolean,centered:Boolean,circular:Boolean,disabled:Boolean,fluid:Boolean,hidden:Boolean,href:String,inline:Boolean,label:Object,target:String,wrapped:Boolean,rounded:Boolean,size:String,spaced:[Boolean,String],src:String,...$b,...Eb},setup(t,{slots:l}){const{verticalAlignClass:n}=Tb(t),{floatedClass:s}=Rb(t),u=F(()=>K("ui",t.size,n.value,s.value,A(t.avatar,"avatar"),A(t.bordered,"bordered"),A(t.centered,"centered"),A(t.circular,"circular"),A(t.disabled,"disabled"),A(t.fluid,"fluid"),A(t.hidden,"hidden"),A(t.inline,"inline"),A(t.rounded,"rounded"),Pe(t.spaced,"spaced"),"image"));if(t.as==="a"||t.as==="router-link"){let d=t.as;return t.as==="router-link"&&(d=_(t.as)),()=>{var p;return U(d,{class:u.value,href:t.href,target:t.target&&t.target},U("img",{src:t.src},(p=l.default)==null?void 0:p.call(l)))}}return t.wrapped?()=>{var d;return U("div",{class:u.value},U("img",{src:t.src},(d=l.default)==null?void 0:d.call(l)))}:t.label?()=>U("div",{class:u.value},[U("img",{src:t.src}),U(Ht,{...t.label})]):()=>e("img",{class:u.value,src:t.src},null)}}),wr=E({name:"SuiImageGroup",props:{size:String},setup(t,{slots:l}){const n=F(()=>K("ui",t.size,"images"));return()=>{var s;return U("div",{class:n.value},(s=l.default)==null?void 0:s.call(l))}}}),zb={install(t){t.component(Ta.name,Ta),t.component(wr.name,wr)}},Sr=E({name:"SuiInput",emits:["update:modelValue"],props:{action:String,disabled:Boolean,error:Boolean,fluid:Boolean,focus:Boolean,icon:String,iconPosition:String,inverted:Boolean,label:String,labeled:Boolean,loading:Boolean,modelValue:String,placeholder:String,size:String,transparent:Boolean,type:String},setup(t,{emit:l}){const n=F(()=>typeof t.icon=="string"||t.loading),s=F(()=>!!t.label||t.labeled),u=F(()=>K("ui",t.size,t.action&&"action",A(t.disabled,"disabled"),A(t.error,"error"),A(t.fluid,"fluid"),A(t.focus,"focus"),t.iconPosition,A(n.value,"icon"),A(t.inverted,"inverted"),A(t.loading,"loading"),A(t.transparent,"transparent"),A(s.value,"labeled"),"input")),d=p=>l("update:modelValue",p.target.value);return()=>e("div",{class:u.value},[t.label&&e(Ht,null,{default:()=>[t.label]}),e("input",{type:t.type||"text",placeholder:t.placeholder,value:t.modelValue,onInput:p=>d(p)},null),n.value&&e(ut,{name:t.icon||"spinner"},null),t.action&&e(M,null,{default:()=>[t.action]})])}}),Db={install(t){t.component(Sr.name,Sr)}},Ar=E({name:"SuiList",props:{animated:Boolean,as:String,bulleted:Boolean,celled:Boolean,divided:Boolean,floated:String,horizontal:Boolean,inverted:Boolean,ordered:Boolean,relaxed:Boolean,link:Boolean,selection:Boolean,verticalAlign:String},setup(t,{slots:l}){const n=F(()=>K("ui",A(t.animated,"animated"),A(t.bulleted,"bulleted"),A(t.celled,"celled"),A(t.divided,"divided"),A(t.horizontal,"horizontal"),A(t.inverted,"inverted"),A(t.link,"link"),A(t.ordered,"ordered"),A(t.relaxed,"relaxed"),A(t.selection,"selection"),De(t.verticalAlign,"aligned"),De(t.floated,"floated"),"list"));let s=t.as||"div";return()=>{var u;return U(s,{class:n.value},(u=l.default)==null?void 0:u.call(l))}}}),kr=E({name:"SuiListItem",props:{active:Boolean,as:String,disabled:Boolean},setup(t,{slots:l}){let n=t.as||"div";const s=F(()=>K(A(t.active,"active"),A(t.disabled,"disabled"),"item"));return()=>{var u;return U(n,{class:s.value},(u=l.default)==null?void 0:u.call(l))}}}),Br=E({name:"SuiListIcon",components:{Icon:ut},setup(t,{slots:l}){return()=>{var n;return U(_(ut.name),{...t},(n=l.default)==null?void 0:n.call(l))}}}),$r=E({name:"SuiListContent",props:{verticalAlign:String},setup(t){return{computedClass:F(()=>K(De(t.verticalAlign,"aligned"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Tr=E({name:"SuiListHeader",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return U(t.as,{class:"header"},(n=l.default)==null?void 0:n.call(l))}}}),xr=E({name:"SuiListDescription",props:{as:{type:String,default:"div",validator:t=>["div","a"].includes(t)}},setup(t,{slots:l}){return()=>{var n;return U(t.as,{class:"description"},(n=l.default)==null?void 0:n.call(l))}}}),Er=E({name:"SuiListList",render(){var t,l;return e("div",{class:"list"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Mb={install(t){t.component(Ar.name,Ar),t.component(kr.name,kr),t.component(Br.name,Br),t.component($r.name,$r),t.component(Tr.name,Tr),t.component(xr.name,xr),t.component(Er.name,Er)}},Rr=E({name:"SuiLoader",props:{active:Boolean,color:String,disabled:Boolean,fast:Boolean,indeterminate:Boolean,inline:[Boolean,String],inverted:Boolean,size:String,slow:Boolean,text:Boolean},setup(t,{slots:l}){return{computedClass:F(()=>{var n;return K("ui",t.color,t.size,A(t.active,"active"),A(t.disabled,"disabled"),A(t.fast,"fast"),A(t.indeterminate,"indeterminate"),A(t.inverted,"inverted"),A(t.slow,"slow"),A(t.text||!!((n=l.default)!=null&&n.call(l)),"text"),Pe(t.inline,"inline"),"loader")})}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ib={install(t){t.component(Rr.name,Rr)}},Pr=E({name:"SuiRail",props:{attached:Boolean,close:[Boolean,String],dividing:Boolean,internal:Boolean,position:String,size:String},setup(t){return{computedClass:F(()=>K("ui",t.position,t.size,A(t.attached,"attached"),A(t.dividing,"dividing"),A(t.internal,"internal"),Pe(t.close,"close"),"rail"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Vb={install(t){t.component(Pr.name,Pr)}},zr=E({name:"SuiReveal",props:{active:Boolean,animated:String,disabled:Boolean,instant:Boolean},setup(t){return{computedClass:F(()=>K("ui",t.animated,A(t.active,"active"),A(t.disabled,"disabled"),A(t.instant,"instant"),"reveal"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Dr=E({name:"SuiRevealContent",props:{visible:Boolean,hidden:Boolean},setup(t){return{computedClass:F(()=>K("ui",A(t.visible,"visible"),A(t.hidden,"hidden"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Fb={install(t){t.component(zr.name,zr),t.component(Dr.name,Dr)}},il=E({name:"SuiSegment",props:{attached:[Boolean,String],basic:Boolean,circular:Boolean,clearing:Boolean,color:String,compact:Boolean,disabled:Boolean,fitted:[Boolean,String],floated:String,inverted:Boolean,loading:Boolean,padded:[Boolean,String],piled:Boolean,placeholder:Boolean,raised:Boolean,secondary:Boolean,size:String,stacked:Boolean,tertiary:Boolean,textAlign:String,vertical:Boolean},setup(t){return{computedClass:F(()=>K("ui",t.color,t.size,A(t.basic,"basic"),A(t.circular,"circular"),A(t.clearing,"clearing"),A(t.compact,"compact"),A(t.disabled,"disabled"),A(t.inverted,"inverted"),A(t.loading,"loading"),A(t.piled,"piled"),A(t.placeholder,"placeholder"),A(t.raised,"raised"),A(t.secondary,"secondary"),A(t.stacked,"stacked"),A(t.tertiary,"tertiary"),A(t.vertical,"vertical"),De(t.floated,"floated"),De(t.textAlign,"aligned"),Pe(t.attached,"attached"),Pe(t.fitted,"fitted"),Pe(t.padded,"padded"),"segment"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Mr=E({name:"SuiSegmentGroup",props:{compact:Boolean,horizontal:Boolean,piled:Boolean,raised:Boolean,size:String,stacked:Boolean},setup(t){return{computedClass:F(()=>K("ui",t.size,A(t.compact,"compact"),A(t.horizontal,"horizontal"),A(t.piled,"piled"),A(t.raised,"raised"),A(t.stacked,"stacked"),"segments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ir=E({name:"SuiSegmentInline",render(){var t,l;return e("div",{class:"inline"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Nb={install(t){t.component(il.name,il),t.component(Mr.name,Mr),t.component(Ir.name,Ir)}},Vr=E({name:"SuiStep",props:{active:Boolean,completed:Boolean,disabled:Boolean,fluid:Boolean,href:String,link:Boolean,vertical:Boolean},setup(t){return{computedClass:F(()=>K(A(t.active,"active"),A(t.completed,"completed"),A(t.disabled,"disabled"),A(t.fluid,"fluid"),A(t.link,"link"),A(t.vertical,"vertical"),"step"))}},render(){var t,l,n,s;return this.href?e("a",{class:this.computedClass,href:this.href},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("div",{class:this.computedClass},[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Lb=["one","two","three","four","five","six","seven","eight"],Fr=E({name:"SuiStepGroup",props:{attached:String,fluid:Boolean,inverted:Boolean,ordered:Boolean,size:String,stackable:String,unstackable:Boolean,vertical:Boolean,widths:Number},setup(t){const{widths:l}=t;return{computedClass:F(()=>K("ui",l&&Lb[l-1],t.size,A(t.fluid,"fluid"),A(t.inverted,"inverted"),A(t.ordered,"ordered"),A(t.unstackable,"unstackable"),A(t.vertical,"vertical"),De(t.attached,"attached"),De(t.stackable,"stackable"),"steps"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Nr=E({name:"SuiStepContent",render(){var t,l;return e("div",{class:"content"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Lr=E({name:"SuiStepTitle",render(){var t,l;return e("div",{class:"title"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Or=E({name:"SuiStepDescription",render(){var t,l;return e("div",{class:"description"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Ob={install(t){t.component(Vr.name,Vr),t.component(Fr.name,Fr),t.component(Nr.name,Nr),t.component(Lr.name,Lr),t.component(Or.name,Or)}},Hb=Object.freeze(Object.defineProperty({__proto__:null,Button:yb,Container:Cb,Divider:wb,Emoji:Sb,Flag:Ab,Header:kb,Icon:Bb,Image:zb,Input:Db,Label:Pb,List:Mb,Loader:Ib,Rail:Vb,Reveal:Fb,Segment:Nb,Step:Ob},Symbol.toStringTag,{value:"Module"})),ls=E({name:"SuiBreadcrumbDivider",props:{icon:String},setup(t){return{computedClass:F(()=>K(t.icon,"icon","divider"))}},render(){var t,l;return this.icon?e("i",{"aria-hidden":"true",class:this.computedClass},null):e("div",{class:"divider"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),as=E({name:"SuiBreadcrumbSection",props:{active:Boolean,href:String,link:Boolean,to:String},setup(t){const l=F(()=>K(A(t.active,"active"),"section")),n=t.link||!!t.href;return{computedClass:l,isLink:n}},render(){let t="div";this.isLink?t="a":this.to&&(t=_("router-link"));const l={href:this.href,to:this.to};return e(t,Pi({class:this.computedClass},l),{default:()=>{var n,s;return[(s=(n=this.$slots).default)==null?void 0:s.call(n)]}})}}),Hr=E({name:"SuiBreadcrumb",props:{icon:String,inverted:Boolean,sections:{type:Array,default:()=>[]},size:String},setup(t){return{computedClass:F(()=>K("ui",t.size,A(t.inverted,"inverted"),"breadcrumb"))}},render(){var t,l;const n=()=>{var s;return(s=this.sections)==null?void 0:s.map((u,d)=>{const p={active:u.active,href:u.href,link:u.link,to:u.to};return e(we,null,[e(as,p,{default:()=>[u.content]}),this.sections.length!==d+1&&e(ls,{icon:this.icon},{default:()=>[a(" / ")]})])})};return e("div",{class:this.computedClass},[((l=(t=this.$slots).default)==null?void 0:l.call(t))||n()])}}),jb={install(t){t.component(Hr.name,Hr),t.component(ls.name,ls),t.component(as.name,as)}},jr=E({name:"SuiForm",props:{error:Boolean,inverted:Boolean,loading:Boolean,reply:Boolean,success:Boolean,unstackable:Boolean,warning:Boolean,size:String},setup(t){return{computedClass:F(()=>K("ui",t.size,A(t.error,"error"),A(t.inverted,"inverted"),A(t.loading,"loading"),A(t.reply,"reply"),A(t.success,"success"),A(t.unstackable,"unstackable"),A(t.warning,"warning"),"form"))}},render(){var t,l;return e("form",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),qr=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];function qb(t){return{widthClass:F(()=>Number(t.width)>0?`${qr[Number(t.width)-1]} wide`:typeof t.width=="string"||qr.includes(t.width)?`${t.width} wide`:null)}}const Ur=E({name:"SuiFormField",emits:["update:modelValue"],props:{disabled:Boolean,error:Boolean,inline:Boolean,label:String,modelValue:String,placeholder:String,required:Boolean,type:String,width:String||Number},setup(t,{emit:l}){const{widthClass:n}=qb(t),s=F(()=>K(A(t.disabled,"disabled"),A(t.error,"error"),A(t.inline,"inline"),A(t.required,"required"),n.value,"field")),u=t.type||"text";return{computedClass:s,inputType:u,onInput:d=>l("update:modelValue",d.target.value)}},render(){var t,l;return this.label?e("div",{class:this.computedClass},[e("label",null,[this.label]),e("input",{type:this.inputType,placeholder:this.placeholder,value:this.modelValue,onInput:this.onInput},null)]):e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Gr=E({name:"SuiFormGroup",props:{widths:String},setup(t){return{computedClass:F(()=>K(De(t.widths,"width"),"fields"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Yr=E({name:"SuiFormTextarea",props:{label:String,placeholder:String},render(){return this.label&&e("div",{class:"field"},[e("label",null,[this.label]),e("textarea",{placeholder:this.placeholder},null)]),e("div",{class:"field"},[e("textarea",{placeholder:this.placeholder},null)])}}),Ub={install(t){t.component(jr.name,jr),t.component(Ur.name,Ur),t.component(Gr.name,Gr),t.component(Yr.name,Yr)}},Jr=E({name:"SuiGrid",props:{celled:[Boolean,String],centered:Boolean,columns:[Number,String],compact:Boolean,container:Boolean,divided:[Boolean,String],doubling:Boolean,inverted:Boolean,padded:[Boolean,String],relaxed:[Boolean,String],reversed:String,stackable:Boolean,textAlign:String,verticalAlign:String},setup(t){return{computedClass:F(()=>K("ui",t.container&&"container",A(t.centered,"centered"),A(t.compact,"compact"),A(t.doubling,"doubling"),A(t.inverted,"inverted"),A(t.stackable,"stackable"),De(t.reversed,"reversed"),De(t.verticalAlign,"aligned"),Pe(t.celled,"celled"),Pe(t.divided,"divided"),Pe(t.padded,"padded"),Pe(t.relaxed,"relaxed"),rl(t.textAlign),Gt(t.columns,"column"),"grid"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Wr=E({name:"SuiGridColumn",props:{color:String,computer:Number,floated:String,largeScreen:Number,mobile:Number,only:String,tablet:Number,textAlign:String,width:Number,widescreen:Number},setup(t){return{computedClass:F(()=>K(t.color,De(t.floated,"floated"),De(t.only,"only"),rl(t.textAlign),Gt(t.width,"wide"),pl(t.mobile,"mobile"),pl(t.tablet,"tablet"),pl(t.computer,"computer"),pl(t.largeScreen,"large screen"),pl(t.widescreen,"widescreen"),"column"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Kr=E({name:"SuiGridRow",props:{centered:Boolean,color:String,columns:Number,only:String,stretched:Boolean,textAlign:String},setup(t){return{computedClass:F(()=>K(t.color,A(t.centered,"centered"),A(t.stretched,"stretched"),De(t.only,"only"),Gt(t.columns,"column"),rl(t.textAlign),"row"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Gb={install(t){t.component(Jr.name,Jr),t.component(Wr.name,Wr),t.component(Kr.name,Kr)}},Xr=E({name:"SuiMenu",props:{attached:[Boolean,String],borderless:Boolean,color:Boolean,compact:Boolean,fixed:Boolean,floated:[Boolean,String],fluid:Boolean,icon:[Boolean,String],inverted:Boolean,pagination:Boolean,pointing:Boolean,secondary:Boolean,size:String,stackable:Boolean,tabular:[Boolean,String],text:Boolean,vertical:Boolean,widths:Number},setup(t){return{computedClass:F(()=>K("ui",t.color,t.size,A(t.borderless,"borderless"),A(t.compact,"compact"),A(t.fixed,"fixed"),A(t.fluid,"fluid"),A(t.inverted,"inverted"),A(t.pagination,"pagination"),A(t.pointing,"pointing"),A(t.secondary,"secondary"),A(t.stackable,"stackable"),A(t.text,"text"),A(t.vertical,"vertical"),Pe(t.attached,"attached"),Pe(t.floated,"floated"),Pe(t.icon,"icon"),Pe(t.tabular,"tabular"),Gt(t.widths,"item"),"menu"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),Qr=E({name:"SuiMenuHeader",props:{as:String,content:String},setup(t,{slots:l}){let n=t.as||"div";return()=>e(n,{class:"header"},{default:()=>{var s;return[t.content||((s=l.default)==null?void 0:s.call(l))]}})}}),Zr=E({name:"SuiMenuItem",props:{action:Boolean,active:Boolean,as:String,browse:Boolean,color:String,disabled:Boolean,fitted:[Boolean,String],header:Boolean,icon:Boolean,index:Number,link:Boolean,name:String,position:String,stackable:Boolean},setup(t,{slots:l}){let n=t.as||"a";t.header&&(n="div"),t.as==="router-link"&&(n=_(t.as));const s=F(()=>K(t.color,t.position,A(t.action,"action"),A(t.active,"active"),A(t.browse,"browse"),A(t.disabled,"disabled"),A(t.header,"header"),A(t.link,"link"),Pe(t.fitted,"fitted"),"item"));return()=>e(n,{class:s.value},{default:()=>{var u;return[t.name||((u=l.default)==null?void 0:u.call(l))]}})}}),eu=E({name:"SuiMenuMenu",props:{position:String},setup(t){const{position:l}=t;return{computedClass:F(()=>K(l,"menu"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Yb={install(t){t.component(Xr.name,Xr),t.component(Qr.name,Qr),t.component(Zr.name,Zr),t.component(eu.name,eu)}},tu=E({name:"SuiMessage",props:{attached:[Boolean,String],color:String,compact:Boolean,content:String,header:String,error:Boolean,floating:Boolean,hidden:Boolean,icon:Boolean,info:Boolean,negative:Boolean,positive:Boolean,size:String,success:Boolean,visible:Boolean,warning:Boolean},setup(t){return{computedClass:F(()=>K("ui",t.color,t.size,A(t.compact,"compact"),A(t.error,"error"),A(t.floating,"floating"),A(t.hidden,"hidden"),A(t.icon,"icon"),A(t.info,"info"),A(t.negative,"negative"),A(t.positive,"positive"),A(t.success,"success"),A(t.visible,"visible"),A(t.warning,"warning"),Pe(t.attached,"attached"),"message"))}},render(){var t,l;return e("div",{class:this.computedClass},[(this.header||this.content)&&e(ns,null,{default:()=>[e(ss,null,{default:()=>[this.header]}),e("p",null,[this.content])]}),(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ns=E({name:"SuiMessageContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ss=E({name:"SuiMessageHeader",render(){var t,l;return U("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),iu=E({name:"SuiMessageItem",render(){var t,l;return U("li",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),lu=E({name:"SuiMessageList",render(){var t,l;return U("ul",{class:"list"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Jb={install(t){t.component(tu.name,tu),t.component(ns.name,ns),t.component(ss.name,ss),t.component(iu.name,iu),t.component(lu.name,lu)}},au=E({name:"SuiTable",props:{attached:[Boolean,String],basic:[Boolean,String],celled:Boolean,collapsing:Boolean,color:String,columns:Number,compact:[Boolean,String],definition:Boolean,fixed:Boolean,inverted:Boolean,padded:[Boolean,String],selectable:Boolean,singleLine:Boolean,size:String,stackable:Boolean,striped:Boolean,structured:Boolean,unstackable:Boolean},setup(t){return{computedClass:F(()=>K("ui",t.color,t.size,A(t.celled,"celled"),A(t.collapsing,"collapsing"),A(t.definition,"definition"),A(t.fixed,"fixed"),A(t.inverted,"inverted"),A(t.selectable,"selectable"),A(t.singleLine,"single line"),A(t.stackable,"stackable"),A(t.striped,"striped"),A(t.structured,"structured"),A(t.unstackable,"unstackable"),Pe(t.attached,"attached"),Pe(t.basic,"basic"),Pe(t.compact,"compact"),Pe(t.padded,"padded"),Gt(t.columns,"column"),"table"))}},render(){var t,l;return e("table",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),nu=E({name:"SuiTableBody",render(){var t,l;return U("tbody",{},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),su=E({name:"SuiTableCell",props:{active:Boolean,collapsing:Boolean,color:String,disabled:Boolean,error:Boolean,marked:String,negative:Boolean,positive:Boolean,selectable:Boolean,singleLine:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:F(()=>K(t.color,A(t.active,"active"),A(t.collapsing,"collapsing"),A(t.disabled,"disabled"),A(t.error,"error"),A(t.negative,"negative"),A(t.positive,"positive"),A(t.selectable,"selectable"),A(t.singleLine,"single line"),A(t.warning,"warning"),De(t.verticalAlign,"aligned"),De(t.marked,"marked"),rl(t.textAlign)))}},render(){var t,l,n,s;return this.computedClass?e("td",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("td",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),ou=E({name:"SuiTableFooter",props:{fullWidth:Boolean},setup(t){const{fullWidth:l}=t;return{computedClass:F(()=>K(A(l,"full-width")))}},render(){var t,l,n,s;return this.computedClass?U("tfoot",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("tfoot",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),ru=E({name:"SuiTableHeader",props:{fullWidth:Boolean},setup(t){return{computedClass:F(()=>K(A(t.fullWidth,"full-width")))}},render(){var t,l,n,s;return this.computedClass?U("thead",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("thead",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),uu=E({name:"SuiTableHeaderCell",props:{singleLine:Boolean,textAlign:String,width:Number},setup(t){return{computedClass:F(()=>K(A(t.singleLine,"single line"),De(t.textAlign,"aligned"),Gt(t.width,"wide")))}},render(){var t,l,n,s;return this.computedClass?e("th",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("th",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),du=E({name:"SuiTableRow",props:{active:Boolean,color:String,disabled:Boolean,error:Boolean,negative:Boolean,positive:Boolean,textAlign:String,verticalAlign:String,warning:Boolean},setup(t){return{computedClass:F(()=>K(t.color,A(t.active,"active"),A(t.disabled,"disabled"),A(t.error,"error"),A(t.negative,"negative"),A(t.positive,"positive"),A(t.warning,"warning"),De(t.textAlign,"aligned"),De(t.verticalAlign,"aligned")))}},render(){var t,l,n,s;return this.computedClass?e("tr",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]):e("tr",null,[(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Wb={install(t){t.component(au.name,au),t.component(nu.name,nu),t.component(su.name,su),t.component(ou.name,ou),t.component(ru.name,ru),t.component(uu.name,uu),t.component(du.name,du)}},Kb=Object.freeze(Object.defineProperty({__proto__:null,Breadcrumb:jb,Form:Ub,Grid:Gb,Menu:Yb,Message:Jb,Table:Wb},Symbol.toStringTag,{value:"Module"})),cu=E({name:"SuiAdvertisement",props:{centered:Boolean,test:String,unit:String},setup(t){return{computedClass:F(()=>K("ui",t.unit,A(t.centered,"centered"),A(!!t.test,"test"),"ad"))}},render(){var t,l,n,s;return this.$props.test?U("div",{class:this.computedClass,"data-text":this.$props.test},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),Xb={install(t){t.component(cu.name,cu)}},mu=E({name:"SuiCard",props:{centered:Boolean,color:String,fluid:Boolean,horizontal:Boolean,href:String,link:Boolean,raised:Boolean},setup(t){return{computedClass:F(()=>K("ui",t.color,A(t.centered,"centered"),A(t.fluid,"fluid"),A(t.horizontal,"horizontal"),A(t.link,"link"),A(t.raised,"raised"),"card"))}},render(){var t,l,n,s;return this.$props.href||this.$props.link?U("a",{class:this.computedClass,href:this.$slots.href},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("div",{class:this.computedClass},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),pu=E({name:"SuiCardContent",props:{extra:Boolean},setup(t){return{computedClass:F(()=>K(A(t.extra,"extra"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),fu=E({name:"SuiCardDescription",props:{textAlign:String},setup(t){return{computedClass:F(()=>K(De(t.textAlign,"aligned"),"description"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),gu=E({name:"SuiCardGroup",props:{centered:Boolean,doubling:Boolean,inverted:Boolean,itemsPerRow:Number,stackable:Boolean},setup(t){return{computedClass:F(()=>K("ui",A(t.centered,"centered"),A(t.doubling,"doubling"),A(t.inverted,"inverted"),A(t.stackable,"stackable"),Gt(t.itemsPerRow,""),"cards"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),hu=E({name:"SuiCardHeader",props:{textAlign:String},setup(t){return{computedClass:F(()=>K(De(t.textAlign,"aligned"),"header"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),_u=E({name:"SuiCardMeta",render(){var t,l;return U("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Qb={install(t){t.component(mu.name,mu),t.component(pu.name,pu),t.component(fu.name,fu),t.component(gu.name,gu),t.component(hu.name,hu),t.component(_u.name,_u)}},bu=E({name:"SuiComment",render(){var t,l;return U("div",{class:"comment"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),vu=E({name:"SuiCommentAction",props:{active:Boolean},setup(t){const{active:l}=t;return{computedClass:F(()=>K(A(l,"active")))}},render(){var t,l,n,s;return this.computedClass?U("a",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t)):U("a",{},(s=(n=this.$slots).default)==null?void 0:s.call(n))}}),yu=E({name:"SuiCommentActions",render(){var t,l;return U("div",{class:"actions"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Cu=E({name:"SuiCommentAuthor",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return U(n,{class:"author"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),wu=E({name:"SuiCommentAvatar",props:{as:String,src:String},render(){let t=this.$props.as||"div";return U(t,{class:"avatar"},U("img",{src:this.$props.src}))}}),Su=E({name:"SuiCommentContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Au=E({name:"SuiCommentGroup",props:{collapsed:Boolean,inverted:Boolean,minimal:Boolean,size:String,threaded:Boolean},setup(t){return{computedClass:F(()=>K("ui",t.size,A(t.collapsed,"collapsed"),A(t.inverted,"inverted"),A(t.minimal,"minimal"),A(t.threaded,"threaded"),"comments"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ku=E({name:"SuiCommentMetadata",render(){var t,l;return U("div",{class:"metadata"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Bu=E({name:"SuiCommentText",render(){var t,l;return U("div",{class:"text"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Zb={install(t){t.component(bu.name,bu),t.component(vu.name,vu),t.component(yu.name,yu),t.component(Cu.name,Cu),t.component(wu.name,wu),t.component(Su.name,Su),t.component(Au.name,Au),t.component(ku.name,ku),t.component(Bu.name,Bu)}},$u=E({name:"SuiFeed",props:{inverted:Boolean,size:String},setup(t){return{computedClass:F(()=>K("ui",t.size,A(t.inverted,"inverted"),"feed"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Tu=E({name:"SuiFeedContent",render(){var t,l;return U("div",{class:"content"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),xu=E({name:"SuiFeedDate",render(){var t,l;return U("div",{class:"date"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Eu=E({name:"SuiFeedEvent",render(){var t,l;return U("div",{class:"event"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ru=E({name:"SuiFeedExtra",props:{images:Boolean,text:Boolean},setup(t){const{images:l,text:n}=t;return{computedClass:F(()=>K(A(l,"images"),A(n,"text"),"extra"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Pu=E({name:"SuiFeedLabel",render(){var t,l;return U("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),zu=E({name:"SuiFeedLike",render(){var t,l;return U("a",{class:"like"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Du=E({name:"SuiFeedMeta",render(){var t,l;return U("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Mu=E({name:"SuiFeedSummary",render(){var t,l;return U("div",{class:"summary"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Iu=E({name:"SuiFeedUser",render(){var t,l;return U("a",{class:"user"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ev={install(t){t.component($u.name,$u),t.component(Tu.name,Tu),t.component(xu.name,xu),t.component(Eu.name,Eu),t.component(Ru.name,Ru),t.component(Pu.name,Pu),t.component(zu.name,zu),t.component(Du.name,Du),t.component(Mu.name,Mu),t.component(Iu.name,Iu)}},Vu=E({name:"SuiItem",render(){var t,l;return U("div",{class:"item"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Fu=E({name:"SuiItemContent",props:{verticalAlign:String},setup(t){const{verticalAlign:l}=t;return{computedClass:F(()=>K(De(l,"aligned"),"content"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Nu=E({name:"SuiItemDescription",render(){var t,l;return U("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Lu=E({name:"SuiItemExtra",render(){var t,l;return U("div",{class:"extra"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ou=E({name:"SuiItemGroup",props:{divided:Boolean,inverted:Boolean,link:Boolean,relaxed:[Boolean,String],unstackable:Boolean},setup(t){return{computedClass:F(()=>K("ui",A(t.divided,"divided"),A(t.inverted,"inverted"),A(t.link,"link"),A(t.unstackable,"unstackable"),Pe(t.relaxed,"relaxed"),"items"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Hu=E({name:"SuiItemHeader",props:{as:String},render(){var t,l;let n=this.$props.as||"div";return U(n,{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ju=E({name:"SuiItemImage",props:{size:String},setup(t){return{computedClass:F(()=>K(t.size,"image"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),qu=E({name:"SuiItemMeta",render(){var t,l;return U("div",{class:"meta"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),tv={install(t){t.component(Vu.name,Vu),t.component(Fu.name,Fu),t.component(Nu.name,Nu),t.component(Lu.name,Lu),t.component(Ou.name,Ou),t.component(Hu.name,Hu),t.component(ju.name,ju),t.component(qu.name,qu)}},xa=E({name:"SuiStatisticLabel",props:{content:String},render(){var t,l;return this.$props.content?U("div",{class:"label"},this.$props.content):U("div",{class:"label"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Ea=E({name:"SuiStatisticValue",props:{content:String,text:Boolean},setup(t){return{computedClass:F(()=>K(A(t.text,"text"),"value"))}},render(){var t,l;return this.$props.content?U("div",{class:this.computedClass},this.$props.content):U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Uu=E({name:"SuiStatistic",components:{StatisticLabel:xa,StatisticValue:Ea},props:{color:String,floated:[Boolean,String],horizontal:Boolean,inverted:Boolean,label:String,size:String,text:Boolean,value:String},setup(t){const l=Me("ui",!0);return{computedClass:F(()=>K(l&&"ui",t.color,t.size,A(t.horizontal,"horizontal"),A(t.inverted,"inverted"),A(t.text,"text"),Pe(t.floated,"floated"),"statistic"))}},render(){var t,l,n,s,u,d;let p=[];return this.$props.value&&p.push(U(Ea,{content:this.$props.value},(l=(t=this.$slots).default)==null?void 0:l.call(t))),this.$props.label&&p.push(U(xa,{content:this.$props.label},(s=(n=this.$slots).default)==null?void 0:s.call(n))),U("div",{class:this.computedClass},p.length>0?p:(d=(u=this.$slots).default)==null?void 0:d.call(u))}}),Gu=E({name:"SuiStatisticGroup",props:{color:String,horizontal:Boolean,inverted:Boolean,size:String,widths:Number},setup(t){return tt("ui",!1),{computedClass:F(()=>K("ui",t.color,t.size,A(t.horizontal,"horizontal"),A(t.inverted,"inverted"),Gt(t.widths,""),"statistics"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),iv={install(t){t.component(Uu.name,Uu),t.component(Gu.name,Gu),t.component(xa.name,xa),t.component(Ea.name,Ea)}},lv=Object.freeze(Object.defineProperty({__proto__:null,Advertisement:Xb,Card:Qb,Comment:Zb,Feed:ev,Item:tv,Statistic:iv},Symbol.toStringTag,{value:"Module"})),Yu=E({name:"SuiAccordion",props:{fluid:Boolean,inverted:Boolean,multiple:Boolean,styled:Boolean},setup(t){const l=t.multiple?H([]):H(-1),n=u=>t.multiple?l.value.includes(u):l.value===u,s=u=>{const d=n(u);t.multiple?d?l.value=l.value.filter(p=>p!==u):l.value.push(u):l.value=d?-1:u};return tt("isTabActive",n),tt("updateActiveIndex",s),{computedClass:F(()=>K("ui",A(t.fluid,"fluid"),A(t.inverted,"inverted"),A(t.styled,"styled"),"accordion"))}},render(){var t,l;const n=s=>(s.forEach((u,d)=>{u.props.index=d}),s);return e("div",{class:this.computedClass},[n((l=(t=this.$slots).default)==null?void 0:l.call(t))])}}),Ju=E({name:"SuiAccordionAccordion",render(){var t,l;return U("div",{class:"accordion"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),os=E({name:"SuiAccordionContent",props:{active:Boolean},setup(t){return{computedClass:F(()=>K(A(t.active,"active"),"content"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Wu=E({name:"SuiAccordionTab",props:{index:Number,title:String},setup(t){const l=Me("isTabActive"),n=Me("updateActiveIndex"),s=F(()=>K(A(l(t.index),"active"),"title"));return{isTabActive:l,updateActiveIndex:n,titleClass:s}},render(){return e(we,null,[e("div",{class:this.titleClass,onClick:()=>this.updateActiveIndex(this.index)},[e(ut,{name:"dropdown"},null),this.title]),e(os,{active:this.isTabActive(this.index)},{default:()=>{var t,l;return[(l=(t=this.$slots).default)==null?void 0:l.call(t)]}})])}}),Ku=E({name:"SuiAccordionTitle",props:{active:Boolean},setup(t){return{computedClass:F(()=>K(A(t.active,"active"),"title"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),av={install(t){t.component(Yu.name,Yu),t.component(Ju.name,Ju),t.component(os.name,os),t.component(Wu.name,Wu),t.component(Ku.name,Ku)}},nv=(t,l,n)=>{t.clickOutside=s=>{t===s.target||t.contains(s.target)||l.value(s,t)},document.body.addEventListener("click",t.clickOutside)},sv=(t,l,n)=>{document.body.removeEventListener("click",t.clickOutside)},to={mounted:nv,unmounted:sv};function ov(t,l={}){const n=H(t.value?"open":"closed"),s=()=>n.value=t.value?"open":"closed";nt(t,m=>{n.value=m?"opening":"closing"});const u=m=>{m.addEventListener("animationend",s,!0)},d=m=>{m&&m.removeEventListener("animationend",s)},p=F((m="scale")=>{switch(n.value){case"opening":return`animating ${m} in`;case"open":return"visible active";case"closing":return`visible active animating ${m} out`;case"closed":return"hidden"}});return{setupAnimation:u,removeAnimation:d,computeAnimationClass:p}}const rv=E({name:"SuiCalendarDay",emits:["select-day"],props:{active:Boolean,date:null,disabled:Boolean,onSelectDay:Function},setup(t,{emit:l}){const n=H(!1),s=()=>{t.disabled||(n.value=!0)},u=()=>n.value=!1,d=()=>{t.disabled||l("select-day",t.date)},p=()=>{let o=new Date;return o.getFullYear()===t.date.year&&o.getMonth()===t.date.month&&o.getDate()===t.date.day},m=F(()=>K("link",A(n.value,"focus"),A(t.active&&!t.disabled,"active"),A(t.disabled,"adjacent disabled"),A(p(),"today")));return{onMouseEnter:s,onMouseLeave:u,onClick:d,computedClass:m}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:yt(this.onClick,["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),uv=E({name:"SuiCalendarDateTable",setup(){const{calendarDays:t,updateSelectMode:l,set:n,add:s,subtract:u,selectedDate:d,setSelectedDate:p,selectType:m,updateVisible:o,formatDate:r}=Me(ui);return{calendarDays:t,isEqualDay:g=>{if(!d.value)return!1;const c=d.value;return c.getFullYear()===g.year&&c.getMonth()===g.month&&c.getDate()===g.day},onSelectDay:g=>{if(n(g.year,"years"),n(g.month,"months"),n(g.day,"days"),m.value==="date"){let c=new Date(g.year,g.month,g.day);p(c),o(!1);return}l("hour")},updateSelectMode:l,formatDate:r,add:s,subtract:u}},render(){const t=()=>this.calendarDays.map((l,n)=>e("tr",null,[l.map(s=>e(rv,{active:this.isEqualDay(s),date:s,disabled:!s.currentMonth,onSelectDay:this.onSelectDay},{default:()=>[s.day]}))]));return e("table",{class:"ui celled center aligned unstackable table day seven column"},[e("thead",null,[e("tr",null,[e("th",{colspan:7},[e("span",{class:"link",onClick:yt(()=>this.updateSelectMode("month"),["stop"])},[this.formatDate("date")]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"months")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"months")},[e("i",{class:"chevron right icon"},null)])])]),e("tr",null,[e("th",null,[a("S")]),e("th",null,[a("M")]),e("th",null,[a("T")]),e("th",null,[a("W")]),e("th",null,[a("T")]),e("th",null,[a("F")]),e("th",null,[a("S")])])]),e("tbody",null,[t()])])}}),be=E({name:"SuiCalendarTableCell",emits:["click-cell"],props:{active:Boolean,today:Boolean,value:null,onClickCell:Function},setup(t){const l=H(!1),n=()=>l.value=!0,s=()=>l.value=!1,u=F(()=>K("link",A(t.active,"active"),A(t.today,"today"),A(l.value,"focus")));return{onMouseEnter:n,onMouseLeave:s,computedClass:u}},render(){var t,l;return e("td",{class:this.computedClass,onMouseenter:this.onMouseEnter,onMouseleave:this.onMouseLeave,onClick:yt(()=>this.$emit("click-cell",this.value),["stop"])},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),dv=E({name:"SuiCalendarMonthTable",setup(){const{state:t,set:l,add:n,subtract:s,selectedDate:u,updateSelectMode:d}=Me(ui);return{state:t,add:n,subtract:s,updateSelectMode:d,isActive:p=>u.value?t.year===u.value.getFullYear()&&t.month===p:!1,isThisMonth:p=>{let m=new Date;return p===m.getMonth()&&t.year===m.getFullYear()},onClickCell:p=>{l(p,"months"),d("day")}}},render(){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=()=>Array(4).fill(0).map((n,s)=>e("tr",null,[e(be,{value:s*3,active:this.isActive(s*3),today:this.isThisMonth(s*3),onClickCell:this.onClickCell},{default:()=>[t[s*3]]}),e(be,{value:s*3+1,active:this.isActive(s*3+1),today:this.isThisMonth(s*3+1),onClickCell:this.onClickCell},{default:()=>[t[s*3+1]]}),e(be,{value:s*3+2,active:this.isActive(s*3+2),today:this.isThisMonth(s*3+2),onClickCell:this.onClickCell},{default:()=>[t[s*3+2]]})]));return e("table",{class:"ui celled center aligned unstackable table month three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:yt(()=>this.updateSelectMode("year"),["stop"])},[this.state.year]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"years")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"years")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[l()])])}}),cv=E({name:"SuiCalendarYearTable",setup(t){const{state:l,set:n,add:s,subtract:u,selectedDate:d,updateSelectMode:p}=Me(ui),m=()=>s(10,"years"),o=()=>u(10,"years"),r=F(()=>Math.round(l.year/10)*10+1);return{updateSelectMode:p,moveNextTwelveYears:m,movePrevTwelveYears:o,headerStartYear:r,isActive:g=>d.value?g===d.value.getFullYear():!1,isThisYear:g=>g===new Date().getFullYear(),onClickCell:g=>{n(g,"years"),p("day")}}},render(){return e("table",{class:"ui celled center aligned unstackable table year three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:yt(()=>this.updateSelectMode("day"),["stop"])},[this.headerStartYear,a(" - "),this.headerStartYear+11]),e("span",{class:"prev link",onClick:this.movePrevTwelveYears},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.moveNextTwelveYears},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(be,{value:this.headerStartYear,active:this.isActive(this.headerStartYear),today:this.isThisYear(this.headerStartYear),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear]}),e(be,{value:this.headerStartYear+1,active:this.isActive(this.headerStartYear+1),today:this.isThisYear(this.headerStartYear+1),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+1]}),e(be,{value:this.headerStartYear+2,active:this.isActive(this.headerStartYear+2),today:this.isThisYear(this.headerStartYear+2),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+2]})]),e("tr",null,[e(be,{value:this.headerStartYear+3,active:this.isActive(this.headerStartYear+3),today:this.isThisYear(this.headerStartYear+3),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+3]}),e(be,{value:this.headerStartYear+4,active:this.isActive(this.headerStartYear+4),today:this.isThisYear(this.headerStartYear+4),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+4]}),e(be,{value:this.headerStartYear+5,active:this.isActive(this.headerStartYear+5),today:this.isThisYear(this.headerStartYear+5),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+5]})]),e("tr",null,[e(be,{value:this.headerStartYear+6,active:this.isActive(this.headerStartYear+6),today:this.isThisYear(this.headerStartYear+6),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+6]}),e(be,{value:this.headerStartYear+7,active:this.isActive(this.headerStartYear+7),today:this.isThisYear(this.headerStartYear+7),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+7]}),e(be,{value:this.headerStartYear+8,active:this.isActive(this.headerStartYear+8),today:this.isThisYear(this.headerStartYear+8),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+8]})]),e("tr",null,[e(be,{value:this.headerStartYear+9,active:this.isActive(this.headerStartYear+9),today:this.isThisYear(this.headerStartYear+9),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+9]}),e(be,{value:this.headerStartYear+10,active:this.isActive(this.headerStartYear+10),today:this.isThisYear(this.headerStartYear+10),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+10]}),e(be,{value:this.headerStartYear+11,active:this.isActive(this.headerStartYear+11),today:this.isThisYear(this.headerStartYear+11),onClickCell:this.onClickCell},{default:()=>[this.headerStartYear+11]})])])])}}),mv=E({name:"SuiCalendarHourTable",setup(){const{updateSelectMode:t,state:l,set:n,add:s,subtract:u,formatDate:d,selectedDate:p}=Me(ui);return{updateSelectMode:t,formatDate:d,onPrevClick:()=>u(1,"days"),onNextClick:()=>s(1,"days"),onClickCell:m=>{n(m,"hours"),t("minute")},isActive:m=>{if(!p.value)return!1;let o=p.value.getFullYear(),r=p.value.getMonth(),g=p.value.getDate(),c=p.value.getHours();return l.year===o&&l.month===r&&l.day===g&&m===c}}},render(){return e("table",{class:"ui celled center aligned unstackable table hour four column"},[e("thead",null,[e("tr",null,[e("th",{colspan:4},[e("span",{class:"link",onClick:yt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:this.onPrevClick},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:this.onNextClick},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(be,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},{default:()=>[a("12:00 AM")]}),e(be,{active:this.isActive(1),value:1,onClickCell:this.onClickCell},{default:()=>[a("1:00 AM")]}),e(be,{active:this.isActive(2),value:2,onClickCell:this.onClickCell},{default:()=>[a("2:00 AM")]}),e(be,{active:this.isActive(3),value:3,onClickCell:this.onClickCell},{default:()=>[a("3:00 AM")]})]),e("tr",null,[e(be,{active:this.isActive(4),value:4,onClickCell:this.onClickCell},{default:()=>[a("4:00 AM")]}),e(be,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},{default:()=>[a("5:00 AM")]}),e(be,{active:this.isActive(6),value:6,onClickCell:this.onClickCell},{default:()=>[a("6:00 AM")]}),e(be,{active:this.isActive(7),value:7,onClickCell:this.onClickCell},{default:()=>[a("7:00 AM")]})]),e("tr",null,[e(be,{active:this.isActive(8),value:8,onClickCell:this.onClickCell},{default:()=>[a("8:00 AM")]}),e(be,{active:this.isActive(9),value:9,onClickCell:this.onClickCell},{default:()=>[a("9:00 AM")]}),e(be,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},{default:()=>[a("10:00 AM")]}),e(be,{active:this.isActive(11),value:11,onClickCell:this.onClickCell},{default:()=>[a("11:00 AM")]})]),e("tr",null,[e(be,{active:this.isActive(12),value:12,onClickCell:this.onClickCell},{default:()=>[a("12:00 PM")]}),e(be,{active:this.isActive(13),value:13,onClickCell:this.onClickCell},{default:()=>[a("1:00 PM")]}),e(be,{active:this.isActive(14),value:14,onClickCell:this.onClickCell},{default:()=>[a("2:00 PM")]}),e(be,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},{default:()=>[a("3:00 PM")]})]),e("tr",null,[e(be,{active:this.isActive(16),value:16,onClickCell:this.onClickCell},{default:()=>[a("4:00 PM")]}),e(be,{active:this.isActive(17),value:17,onClickCell:this.onClickCell},{default:()=>[a("5:00 PM")]}),e(be,{active:this.isActive(18),value:18,onClickCell:this.onClickCell},{default:()=>[a("6:00 PM")]}),e(be,{active:this.isActive(19),value:19,onClickCell:this.onClickCell},{default:()=>[a("7:00 PM")]})]),e("tr",null,[e(be,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},{default:()=>[a("8:00 PM")]}),e(be,{active:this.isActive(21),value:21,onClickCell:this.onClickCell},{default:()=>[a("9:00 PM")]}),e(be,{active:this.isActive(22),value:22,onClickCell:this.onClickCell},{default:()=>[a("10:00 PM")]}),e(be,{active:this.isActive(23),value:23,onClickCell:this.onClickCell},{default:()=>[a("11:00 PM")]})])])])}});function St(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Bt(t)}const pv=E({name:"SuiCalendarMinuteTable",setup(){const{state:t,set:l,add:n,subtract:s,formatDate:u,updateSelectMode:d,updateVisible:p,selectedDate:m}=Me(ui);return{add:n,subtract:s,formatDate:u,updateSelectMode:d,getTimeLabel:o=>{let r=t.hour%12,g=t.hour>12?"PM":"AM",c=o.toString().padStart(2,"0");return t.hour===0?`12:${c} AM`:t.hour===12?`12:${c} PM`:`${r}:${c} ${g}`},onClickCell:o=>{l(o,"minutes"),m.value=new Date(t.year,t.month,t.day,t.hour,t.minute),p(!1)},isActive:o=>{if(!m.value)return!1;let r=m.value.getFullYear(),g=m.value.getMonth(),c=m.value.getDate(),h=m.value.getHours(),v=m.value.getMinutes();return t.year===r&&t.month===g&&t.day===c&&t.hour===h&&o===v}}},render(){let t,l,n,s,u,d,p,m,o,r,g,c;return e("table",{class:"ui celled center aligned unstackable table minute three column"},[e("thead",null,[e("tr",null,[e("th",{colspan:3},[e("span",{class:"link",onClick:yt(()=>this.updateSelectMode("day"),["stop"])},[this.formatDate()]),e("span",{class:"prev link",onClick:()=>this.subtract(1,"days")},[e("i",{class:"chevron left icon"},null)]),e("span",{class:"next link",onClick:()=>this.add(1,"days")},[e("i",{class:"chevron right icon"},null)])])])]),e("tbody",null,[e("tr",null,[e(be,{active:this.isActive(0),value:0,onClickCell:this.onClickCell},St(t=this.getTimeLabel(0))?t:{default:()=>[t]}),e(be,{active:this.isActive(5),value:5,onClickCell:this.onClickCell},St(l=this.getTimeLabel(5))?l:{default:()=>[l]}),e(be,{active:this.isActive(10),value:10,onClickCell:this.onClickCell},St(n=this.getTimeLabel(10))?n:{default:()=>[n]})]),e("tr",null,[e(be,{active:this.isActive(15),value:15,onClickCell:this.onClickCell},St(s=this.getTimeLabel(15))?s:{default:()=>[s]}),e(be,{active:this.isActive(20),value:20,onClickCell:this.onClickCell},St(u=this.getTimeLabel(20))?u:{default:()=>[u]}),e(be,{active:this.isActive(25),value:25,onClickCell:this.onClickCell},St(d=this.getTimeLabel(25))?d:{default:()=>[d]})]),e("tr",null,[e(be,{active:this.isActive(30),value:30,onClickCell:this.onClickCell},St(p=this.getTimeLabel(30))?p:{default:()=>[p]}),e(be,{active:this.isActive(35),value:35,onClickCell:this.onClickCell},St(m=this.getTimeLabel(35))?m:{default:()=>[m]}),e(be,{active:this.isActive(40),value:40,onClickCell:this.onClickCell},St(o=this.getTimeLabel(40))?o:{default:()=>[o]})]),e("tr",null,[e(be,{active:this.isActive(45),value:45,onClickCell:this.onClickCell},St(r=this.getTimeLabel(45))?r:{default:()=>[r]}),e(be,{active:this.isActive(50),value:50,onClickCell:this.onClickCell},St(g=this.getTimeLabel(50))?g:{default:()=>[g]}),e(be,{active:this.isActive(55),value:55,onClickCell:this.onClickCell},St(c=this.getTimeLabel(55))?c:{default:()=>[c]})])])])}}),fv=E({name:"SuiCalendarBody",setup(){const t=H(null),{visible:l,selectMode:n}=Me(ui),{setupAnimation:s,removeAnimation:u,computeAnimationClass:d}=ov(l);ri(()=>s(t.value)),Ri(()=>u(t.value));const p=F(()=>K("ui popup calendar","bottom left","transition",d.value));return{rootRef:t,computedClass:p,selectMode:n}},render(){const t=()=>{switch(this.selectMode){case"day":return e(uv,null,null);case"month":return e(dv,null,null);case"year":return e(cv,null,null);case"hour":return e(mv,null,null);case"minute":return e(pv,null,null)}};return e("div",{ref:l=>this.rootRef=l,class:this.computedClass,style:"inset: 38px auto auto 0px;"},[t()])}}),gv=E({name:"SuiCalendarInput",props:{placeholder:String,value:null},setup(t){const{visible:l,updateVisible:n,updateSelectMode:s,set:u,state:d,formatCalendarDate:p}=Me(ui);return{visible:l,formatCalendarDate:p,onClick:()=>{l.value||(s("day"),t.value&&(u(t.value.getFullYear(),"years"),u(t.value.getMonth(),"months"))),n(!l.value)}}},render(){return e("input",{type:"text",placeholder:this.placeholder,value:this.formatCalendarDate(this.value),onClick:()=>this.onClick()},null)}}),hv=(t,l)=>{let n=new Date;n.setDate(1),n.setMonth(l),n.setFullYear(t);let s=n.getDay();return s>=7?s-7:s},_v=(t,l)=>{let n,s;return l===0?(n=11,s=t-1):(n=l-1,s=t),32-new Date(s,n,32).getDate()},Cn=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t];function bv(){const t=H(!1),l=(y=!1)=>t.value=y,n=new Date;function s(y){if(!y)return;let S=y.getFullYear(),B=Cn(y.getMonth()),b=y.getDate(),w=y.getHours(),k=y.getMinutes(),$=w>11?"PM":"AM";w=w%12,w===0&&(w=12);let x=k.toString().padStart(2,"0");return`${B} ${b}, ${S} ${w}:${x} ${$}`}const u=H("default"),d=H("day");function p(y){d.value=y}const m=H(null),o=y=>{m.value=y},r=qt({year:n.getFullYear(),month:n.getMonth(),day:n.getDate(),hour:n.getHours(),minute:n.getMinutes()}),g=(y,S)=>{switch(S){case"years":r.year=y;break;case"months":r.month=y;break;case"days":r.day=y;break;case"hours":r.hour=y;break;case"minutes":r.minute=y}},c=(y,S)=>{let B=new Date(r.year,r.month,r.day,r.hour);switch(S){case"years":B.setFullYear(B.getFullYear()+y);break;case"months":B.setMonth(B.getMonth()+y);break;case"days":B.setDate(B.getDate()+y);break;case"hours":B.setHours(B.getHours()+y);break}r.year=B.getFullYear(),r.month=B.getMonth(),r.day=B.getDate(),r.hour=B.getHours()},h=(y,S)=>{let B=new Date(r.year,r.month,r.day,r.hour);switch(S){case"years":B.setFullYear(B.getFullYear()-y);break;case"months":B.setMonth(B.getMonth()-y);break;case"days":B.setDate(B.getDate()-y);break;case"hours":B.setHours(B.getHours()-y);break}r.year=B.getFullYear(),r.month=B.getMonth(),r.day=B.getDate(),r.hour=B.getHours()},v=(y="default")=>y==="date"?`${Cn(r.month)} ${r.year}`:`${Cn(r.month)} ${r.day}, ${r.year}`,f=F(()=>{let y=r.month,S=r.year;y>11&&(y=y%11-1,S+=1);let B=[],b=hv(S,y),w=32-new Date(S,y,32).getDate(),k=_v(S,y),$=1;for(let x=0;x<6;x++){let D=[];if(x===0){for(let z=k-b+1;z<=k;z++){let L=y===0?11:y-1,Y=y===0?S-1:S;D.push({day:z,month:L,year:Y,currentMonth:!1})}let V=7-D.length;for(let z=0;z<V;z++)D.push({day:$,month:y,year:S,currentMonth:!0}),$++}else for(let V=0;V<7;V++){if($>w){let z=y===11?0:y+1,L=y===11?S+1:S;D.push({day:$-w,month:z,year:L,currentMonth:!1})}else D.push({day:$,month:y,year:S,currentMonth:!0});$++}B.push(D)}return B});return{visible:t,updateVisible:l,calendarDays:f,formatCalendarDate:s,selectMode:d,updateSelectMode:p,selectType:u,selectedDate:m,setSelectedDate:o,state:r,set:g,add:c,subtract:h,formatDate:v}}const ui=Symbol("useCalendar"),Xu=E({name:"SuiCalendar",directives:{clickoutside:to},emits:["update:modelValue"],props:{modelValue:null,placeholder:String},setup(t,{emit:l}){const n=bv();tt(ui,n);const{updateVisible:s,selectedDate:u}=n;return nt(u,d=>{l("update:modelValue",d)}),{updateVisible:s}},render(){return Gl(e("div",{class:"ui calendar"},[e("div",{class:"ui input left icon"},[e(fv,null,null),e("i",{class:"calendar icon"},null),e(gv,{placeholder:this.placeholder,value:this.modelValue},null)])]),[[qa("clickoutside"),()=>this.updateVisible(!1)]])}}),vv={install:t=>{t.component(Xu.name,Xu)}},Qu=E({name:"SuiCheckbox",emits:["update:modelValue","change","click"],props:{disabled:Boolean,indeterminate:Boolean,label:String,modelValue:null,radio:Boolean,readOnly:Boolean,slider:Boolean,toggle:Boolean,value:null},setup(t,{emit:l}){const n=F(()=>K("ui",!t.label&&"fitted",A(t.disabled,"disabled"),A(t.indeterminate,"indeterminate"),A(t.radio,"radio"),A(t.readOnly,"read-only"),A(t.slider,"slider"),A(t.toggle,"toggle"),"checkbox")),s=F(()=>Array.isArray(t.modelValue)?t.modelValue.includes(t.value):t.modelValue);return{computedClass:n,checked:s,onClick:u=>{if(t.disabled||t.readOnly)return;let d;t.value?s.value?d=t.modelValue.filter(p=>t.value!==p):d=t.modelValue?[...t.modelValue,t.value]:[t.value]:d=!t.modelValue,l("change",u),l("click",u),l("update:modelValue",d)}}},render(){return e("div",{class:this.computedClass,onClick:this.onClick},[e("input",{type:this.radio?"radio":"checkbox",class:"hidden",checked:this.checked,readonly:!0},null),e("label",null,[this.label])])}}),yv={install(t){t.component(Qu.name,Qu)}},Zu=E({name:"SuiDimmer",props:{active:Boolean,inverted:Boolean,page:Boolean,simple:Boolean,verticalAlign:String},setup(t){return{computedClass:F(()=>K("ui",A(t.active,"active"),A(t.inverted,"inverted"),A(t.page,"page"),A(t.simple,"simple"),De(t.verticalAlign,"aligned"),"dimmer"))}},render(){var t,l;return U("div",{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),ed=E({name:"SuiDimmerDimmable",components:{Segment:il},props:{blurring:Boolean},setup(t){return{computedClass:F(()=>K(A(t.blurring,"blurring"),"dimmable"))}},render(){var t,l;return U(il,{class:this.computedClass},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Cv={install(t){t.component(Zu.name,Zu),t.component(ed.name,ed)}},wv=(t,l)=>t.map(n=>n[l]),Sv=E({name:"SuiDropdownText",emits:["remove"],props:{clearable:Boolean,filtered:Boolean,icon:{type:String,default:"dropdown"},item:[Object,String],placeholder:String,text:String,onRemove:Function},setup(t){return{computedClass:F(()=>K(A(t.filtered,"filtered"),A(!t.text&&!t.item||Array.isArray(t.item)&&t.item.length===0,"default"),"text"))}},render(){var t,l;let n;if(this.item&&!Array.isArray(this.item))if(typeof this.item=="object"){const{flag:d,text:p}=this.item;n=e(we,null,[d&&e("i",{class:`${d} flag`},null),p])}else n=this.item;else n=this.text||this.placeholder;const s=typeof this.item=="object"?(t=this.item)==null?void 0:t.image:null,u=typeof this.item=="object"?(l=this.item)==null?void 0:l.label:null;return e(we,null,[e("div",{class:this.computedClass},[s&&e(Ta,s,null),u&&e(Ht,u,null),n]),e("i",{class:`${this.icon} icon`},null),this.$props.clearable&&e("i",{class:"remove icon",onClick:yt(()=>this.$emit("remove"),["stop"])},null)])}}),Av=t=>{const l=qt({visible:!1,animating:!1,direction:"down",multiple:t.multiple});return nt(()=>l.visible,()=>{l.animating=!0,setTimeout(()=>l.animating=!1,200)}),{state:l,show:()=>!l.animating&&(l.visible=!0),hide:()=>{l.animating||(l.visible=!1)}}};function kv(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Bt(t)}const td=E({name:"SuiDropdown",directives:{clickoutside:to},emits:["update:modelValue"],props:{button:Boolean,clearable:Boolean,compact:Boolean,floating:Boolean,fluid:Boolean,icon:String,inline:Boolean,item:Boolean,labeled:Boolean,modelValue:[Object,String],multiple:Boolean,options:Array,placeholder:String,pointing:[Boolean,String],scrolling:Boolean,selection:Boolean,search:Boolean,searchInMenu:Boolean,simple:Boolean,text:String},setup(t,{emit:l}){const n=Av(t);tt("useDropdown",n);const{state:s,show:u,hide:d}=n,p=F(()=>K("ui",A(t.button,"button"),A(t.clearable,"clearable"),A(t.compact,"compact"),A(t.floating,"floating"),A(t.fluid,"fluid"),A(!!t.icon,"icon"),A(t.inline,"inline"),A(t.item,"item"),A(t.labeled,"labeled"),A(t.multiple,"multiple"),A(t.search,"search"),A(t.scrolling,"scrolling"),A(t.selection,"selection"),A(t.simple,"simple"),Pe(t.pointing,"pointing"),"dropdown",A(s.visible,"active visible"),A(s.direction==="up","upward"))),m=()=>{var S;if(s.visible)return d();(S=h.value)==null||S.focus(),u()},o=()=>{t.search&&h.value&&h.value.focus(),u()},r=()=>d(),g=H(""),c=F(()=>{const S=g.value.toLowerCase();return t.options.filter(B=>{const b=typeof B=="object"?B.text:B,w=b.toLowerCase().includes(S);if(!t.multiple)return w;if(Array.isArray(t.modelValue)){const k=typeof B=="object"?wv(t.modelValue,"text").includes(b):t.modelValue.includes(b);return w&&!k}return w})}),h=H(null),v=S=>g.value=S.target.value,f=S=>{var B;if(g.value="",t.search&&((B=h.value)==null||B.focus()),t.multiple){let b=Array.isArray(t.modelValue)?[...t.modelValue,S]:[S];return l("update:modelValue",b)}return l("update:modelValue",S)},y=S=>{if(Array.isArray(t.modelValue)){const B=t.modelValue.findIndex(b=>b===S);if(B>-1){let b=Object.assign(t.modelValue);b.splice(B,1),l("update:modelValue",b)}}};return tt("selection",t.selection),{computedClass:p,onClick:m,openMenu:o,closeMenu:r,filteredText:g,filteredOptions:c,inputRef:h,onInput:v,onSelect:f,removeItem:y}},render(){var t,l;const n=()=>{if(Array.isArray(this.$props.modelValue))return this.$props.modelValue.map(p=>typeof p=="object"?e("a",{class:"ui label"},[p.flag&&e("i",{class:`${p.flag} flag`},null),p.text,e("i",{class:"delete icon",onClick:yt(()=>this.removeItem(p),["stop"])},null)]):e("a",{class:"ui label"},[p,e("i",{class:"delete icon",onClick:yt(()=>this.removeItem(p),["stop"])},null)]))},s=()=>this.filteredOptions.filter(p=>this.$props.multiple&&Array.isArray(this.$props.modelValue)?!this.$props.modelValue.includes(p):!0).map(p=>e(rs,{item:p,active:this.$props.modelValue&&typeof p=="object"?p.text===this.$props.modelValue.text:p===this.$props.modelValue,text:typeof p=="object"?p.text:p,flag:typeof p=="object"&&Object.keys(p).includes("flag")?p.flag:"",image:p.image,label:p.label,disabled:p.disabled,onSelect:this.onSelect},null)),u=()=>{let p={clearable:this.clearable,filtered:this.filteredText.length>0,icon:this.icon,item:this.modelValue,placeholder:this.placeholder,text:this.text};return e(Sv,Pi(p,{onRemove:()=>this.$emit("update:modelValue",null)}),null)},d=()=>{let p;return e(us,{search:this.$props.searchInMenu,onSearch:this.onInput},kv(p=s())?p:{default:()=>[p]})};return Gl(e("div",{class:this.computedClass,onClick:this.onClick},[this.$props.multiple&&n(),this.search&&e("input",{ref:p=>this.inputRef=p,type:"text",class:"search",autocomplete:"off",tabindex:0,value:this.filteredText,onInput:p=>this.onInput(p)},null),this.search&&this.multiple&&e("span",{class:"sizer"},null),u(),((l=(t=this.$slots).default)==null?void 0:l.call(t))||d()]),[[qa("clickoutside"),this.closeMenu]])}}),rs=E({name:"SuiDropdownItem",emits:["select"],props:{active:Boolean,flag:String,description:String,icon:String,image:Object,item:[Object,String],label:Object,text:String,disabled:Boolean,onSelect:Function},setup(t,{emit:l}){const{state:n,hide:s}=Me("useDropdown");return{computedClass:F(()=>K(A(t.active,"active"),A(t.disabled,"disabled"),"item")),onClick:()=>{n.multiple||s(),l("select",t.item?t.item:t.text)}}},render(){return e("div",{class:this.computedClass,onClick:yt(this.onClick,["stop"])},[this.flag&&e("i",{class:`${this.flag} flag`},null),this.icon&&e("i",{class:`${this.icon} icon`},null),this.image&&e(Ta,this.image,null),this.label&&e(Ht,this.label,null),this.description&&e("span",{class:"description"},[this.description]),this.text])}}),us=E({name:"SuiDropdownMenu",emits:["search"],props:{search:Boolean,onSearch:Function},setup(t,{emit:l,slots:n}){const{state:s}=Me("useDropdown"),u=H(null),d=F(()=>{let m=()=>s.visible?`animating slide ${s.direction} in visible`:`animating slide ${s.direction} out visible`;return K("menu","transition",A(s.visible,"visible"),A(!s.visible&&!s.animating,"hidden"),A(s.animating,m()))});nt(()=>s.visible,m=>{if(!m||!u.value)return;let o=u.value.parentElement;const{top:r,height:g}=o==null?void 0:o.getBoundingClientRect(),c=r-p.value.length*37,h=document.documentElement.clientHeight-r-g-p.value.length*37;s.direction=c>h?"up":"down"});const p=F(()=>{var m;let o=[],r=(m=n.default)==null?void 0:m.call(n);return r&&r.forEach(g=>{g.type.name==="SuiSelectItem"&&o.push(g)}),o});return{container:u,computedClass:d,onSearchInput:m=>l("search",m)}},render(){var t,l,n,s;const u=()=>e(we,null,[e("div",{class:"ui left icon input",onClick:yt(()=>{},["stop"])},[e("input",{type:"text",onInput:d=>this.onSearchInput(d)},null),e("i",{class:"search icon"},null)]),e("div",{class:"ui divider"},null)]);return e("div",{ref:d=>this.container=d,class:this.computedClass},[this.$slots.header&&e("div",{class:"header"},[(l=(t=this.$slots).header)==null?void 0:l.call(t)]),this.$props.search&&u(),(s=(n=this.$slots).default)==null?void 0:s.call(n)])}}),Bv={install(t){t.component(td.name,td),t.component(rs.name,rs),t.component(us.name,us)}},id=E({name:"SuiEmbed",props:{active:Boolean,aspectRatio:Boolean,autoplay:Boolean,id:String,placeholder:String,source:String,url:String},setup(t){const l=H(t.active),n=()=>{l.value=!l.value},s=()=>t.source==="youtube"?[`//www.youtube.com/embed/${t.id}`,"?autohide=true",`&amp;autoplay=${t.autoplay}`,"&amp;jsapi=false"].join(""):t.url,u=F(()=>K("ui",t.aspectRatio,A(l.value,"active"),"embed"));return{active:l,getSrc:s,clickHandler:n,computedClass:u}},render(){let t=[U("i",{class:"video play icon"}),U("img",{class:"placeholder",src:this.placeholder})];return this.active&&t.push(U("div",{class:"embed"},U("iframe",{src:this.getSrc()}))),U("div",{class:this.computedClass,onClick:this.clickHandler},t)}}),$v={install(t){t.component(id.name,id)}};function Tv(t){return Ss()?(Id(t),!0):!1}function Om(t){return typeof t=="function"?t():R(t)}const Hm=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const xv=Object.prototype.toString,Ev=t=>xv.call(t)==="[object Object]",pa=()=>{},Rv=Pv();function Pv(){var t,l;return Hm&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((l=window==null?void 0:window.navigator)==null?void 0:l.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function _l(t){var l;const n=Om(t);return(l=n==null?void 0:n.$el)!=null?l:n}const jm=Hm?window:void 0;function wn(...t){let l,n,s,u;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,u]=t,l=jm):[l,n,s,u]=t,!l)return pa;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const d=[],p=()=>{d.forEach(g=>g()),d.length=0},m=(g,c,h,v)=>(g.addEventListener(c,h,v),()=>g.removeEventListener(c,h,v)),o=nt(()=>[_l(l),Om(u)],([g,c])=>{if(p(),!g)return;const h=Ev(c)?{...c}:c;d.push(...n.flatMap(v=>s.map(f=>m(g,v,f,h))))},{immediate:!0,flush:"post"}),r=()=>{o(),p()};return Tv(r),r}let ld=!1;function zv(t,l,n={}){const{window:s=jm,ignore:u=[],capture:d=!0,detectIframe:p=!1}=n;if(!s)return pa;Rv&&!ld&&(ld=!0,Array.from(s.document.body.children).forEach(g=>g.addEventListener("click",pa)),s.document.documentElement.addEventListener("click",pa));let m=!0;const o=g=>u.some(c=>{if(typeof c=="string")return Array.from(s.document.querySelectorAll(c)).some(h=>h===g.target||g.composedPath().includes(h));{const h=_l(c);return h&&(g.target===h||g.composedPath().includes(h))}}),r=[wn(s,"click",g=>{const c=_l(t);if(!(!c||c===g.target||g.composedPath().includes(c))){if(g.detail===0&&(m=!o(g)),!m){m=!0;return}l(g)}},{passive:!0,capture:d}),wn(s,"pointerdown",g=>{const c=_l(t);m=!o(g)&&!!(c&&!g.composedPath().includes(c))},{passive:!0}),p&&wn(s,"blur",g=>{setTimeout(()=>{var c;const h=_l(t);((c=s.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(h!=null&&h.contains(s.document.activeElement))&&l(g)},0)})].filter(Boolean);return()=>r.forEach(g=>g())}function qm(t,l="scale"){const n=H(t.modelValue?"open":"closed");return nt(()=>t.modelValue,s=>{n.value=s?"opening":"closing"}),{animationClasses:F(()=>{switch(n.value){case"opening":return`animating ${l} in`;case"open":return"visible active";case"closing":return`visible active animating ${l} out`;case"closed":return"hidden"}}),isClosed:F(()=>n.value==="closed"),onAnimationEnd:()=>n.value=t.modelValue?"open":"closed"}}const Dv=E({name:"SuiModalDemmer",props:{blurring:Boolean,inverted:Boolean,modelValue:Boolean},setup(t){const{animationClasses:l,isClosed:n,onAnimationEnd:s}=qm(t,"fade"),u=F(()=>K("ui","page modals dimmer transition",A(t.inverted,"inverted"),l.value)),d=F(()=>({display:n.value?"none !important":"flex !important",animationDuration:"500ms"})),p=F(()=>K("dimmable","dimmed",A(t.blurring,"blurring")));return nt(()=>t.modelValue,m=>{if(m){document.body.classList.add(...p.value.split(" "));return}document.body.classList.remove(...p.value.split(" "))}),{className:u,style:d,onAnimationEnd:s}},render(){var t,l;return e("div",{class:this.className,style:this.style,onAnimationend:this.onAnimationEnd},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),ad=E({name:"SuiModal",props:{basic:Boolean,closeIcon:Boolean,dimmer:String,modelValue:Boolean,size:String,closable:{type:Boolean,default:!0},overlay:Boolean,fullscreen:Boolean},setup(t,{emit:l}){const n=H(),{animationClasses:s,isClosed:u}=qm(t),d=F(()=>K("ui",t.size,A(t.basic,"basic"),A(t.overlay,"overlay"),A(t.fullscreen,"fullscreen"),"modal","transition",s.value)),p=F(()=>({display:u.value?"none !important":"block !important",animationDuration:"500ms"})),m=()=>l("update:modelValue",!1);return zv(n,()=>t.closable&&l("update:modelValue",!1)),{computedClass:d,style:p,close:m,modalRef:n}},render(){return e(Wa,{to:"body"},{default:()=>[e(Dv,{blurring:this.dimmer==="blurring",inverted:this.dimmer==="inverted",modelValue:this.modelValue},{default:()=>{var t,l;return[e("div",{class:this.computedClass,style:this.style,onClick:n=>n.stopPropagation(),ref:n=>this.modalRef=n},[this.closeIcon&&e("i",{"aria-hidden":"true",class:"close icon",onClick:this.close},null),(l=(t=this.$slots).default)==null?void 0:l.call(t)])]}})]})}}),nd=E({name:"SuiModalActions",render(){var t,l;return e("div",{class:"actions"},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),sd=E({name:"SuiModalContent",props:{image:Boolean,scrolling:Boolean},setup(t){return{computedClass:F(()=>K(A(t.image,"image"),A(t.scrolling,"scrolling"),"content"))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),od=E({name:"SuiModalDescription",render(){var t,l;return U("div",{class:"description"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),rd=E({name:"SuiModalHeader",render(){var t,l;return U("div",{class:"header"},(l=(t=this.$slots).default)==null?void 0:l.call(t))}}),Mv={install(t){t.component(ad.name,ad),t.component(nd.name,nd),t.component(sd.name,sd),t.component(od.name,od),t.component(rd.name,rd)}},Iv=t=>{const l=H(!1),n=Mn(t,"position"),s=H(null),u=Mn(t,"trigger"),d=()=>{l.value=!0,sl(()=>m())},p=()=>{l.value=!1},m=()=>{if(!s.value||!u.value)return;let o=0,r=0;const g=s.value,c=u.value.$el;g.style.transform=`translate(${o}px, ${r}px)`;const{top:h,left:v,width:f,height:y}=c.getBoundingClientRect(),S=g.getBoundingClientRect(),{pageXOffset:B,pageYOffset:b}=window;if(n.value.includes("top")?(o=B+v,r=b+h-g.offsetTop-g.offsetHeight):(o=v,r=h+y-S.top),n.value.includes("right")){const w=f-S.width;o=v+w}if(n.value.includes("center")){const w=f/2-S.width/2;o=v+w}n.value==="right center"&&(o=v+f,r=h+y/2-S.top-S.height/2),n.value==="left center"&&(o=v-S.width,r=h+y/2-S.top-S.height/2),g.style.display="flex",g.style.position="absolute",g.style.transform=`translate(${o}px, ${r}px)`};return{show:l,showPopup:d,hidePopup:p,placement:n,popupRef:s,triggerRef:u}},ud=E({name:"SuiPopup",props:{basic:Boolean,content:String,flowing:Boolean,header:String,inverted:Boolean,position:{type:String,default:"top left"},size:String,trigger:Object,wide:[Boolean,String]},setup(t,{slots:l}){const{show:n,showPopup:s,hidePopup:u,popupRef:d,triggerRef:p}=Iv(t);Ls(()=>{var h,v,f;(h=p.value)!=null&&h.$el&&((v=p.value)==null||v.$el.addEventListener("mouseenter",s),(f=p.value)==null||f.$el.addEventListener("mouseleave",u))});const m=H(n.value?"open":"close");F(()=>m.value!=="closed"),nt(()=>n.value,h=>{m.value=h?"opening":"closing"});const o=(h,v="scale")=>{switch(h){case"opening":return`animating ${v} in`;case"open":return"visible active";case"closing":return`visible active animating ${v} out`;case"closed":return"hidden"}},r=()=>m.value=n.value?"open":"closed";ri(()=>{var h;(h=d.value)==null||h.addEventListener("animationend",r,!0)}),Ri(()=>{var h;(h=d.value)==null||h.removeEventListener("animationend",r)});const g={position:"initial",animationDuration:"200ms"},c=F(()=>K("ignored ui",t.position,t.size,A(t.basic,"basic"),A(t.flowing,"flowing"),A(t.inverted,"inverted"),Pe(t.wide,"wide"),"popup transition",o(m.value,"scale")));return()=>e(Wa,{to:"body"},{default:()=>{var h;return[e("div",{ref:d,style:"display: flex; position: absolute; transform: translate(0px, 0px);"},[e("div",{class:c.value,style:g},[t.header&&e("div",{class:"header"},[t.header]),e("div",{class:"content"},[t.content?t.content:(h=l.default)==null?void 0:h.call(l)])])])]}})}}),Vv={install(t){t.component(ud.name,ud)}},Fv=["top","bottom","left"],io=()=>({attached:{type:String,validator:t=>Fv.includes(t)}}),Um=t=>({attachedClasses:F(()=>K(t.attached,{attached:t.attached}))}),Nv=["red","orange","yellow","olive","green","teal","blue","purple","violet","pink","brown","grey","black"],Gm=()=>({color:{type:String,validator:t=>Nv.includes(t)}}),Ym=t=>({colorClasses:F(()=>K(t.inverted&&"inverted",t.color))}),Ra=E({name:"SuiProgress",props:{active:Boolean,disabled:Boolean,error:Boolean,indicating:Boolean,inverted:Boolean,label:String,percent:Number,progress:[Boolean,String],size:String,success:Boolean,warning:Boolean,...io(),...Gm()},setup(t){const{attachedClasses:l}=Um(t),{colorClasses:n}=Ym(t),s=F(()=>K("ui",n.value,t.size,A(t.active||t.indicating,"active"),A(t.disabled,"disabled"),A(t.error,"error"),A(t.indicating,"indicating"),A(t.success,"success"),A(t.warning,"warning"),l.value,"progress")),u=F(()=>K(Pe(t.progress,"progress"))),d=F(()=>t.progress!=="centered"?{}:{right:0});return()=>e("div",{class:s.value,"data-percent":t.percent},[e("div",{class:"bar",style:`width: ${t.percent}%; transition-duration: 300ms;`},[t.progress&&e("div",{class:u.value,style:d.value},[`${t.percent}%`])]),t.label&&e("div",{class:"label"},[t.label])])}}),Lv={install(t){t.component(Ra.name,Ra)}},Ov=E({name:"SuiRatingIcon",props:{icon:String,index:{type:Number,default:0}},setup(t){const l=Me("rating",H(0)),n=Me("updateRating"),s=Me("selectedIndex",H(0)),u=Me("updateSelectedIndex"),d=Me("clearable",!1),p=Me("disabled",!1),m=()=>{if(!p){if(d&&t.index===l.value){n(0),u(0);return}n(t.index)}},o=()=>{p||u(t.index)},r=F(()=>t.index<=l.value),g=F(()=>t.index<=s.value),c=F(()=>K(t.icon,A(r.value,"active"),A(g.value,"selected"),"icon"));return()=>e("i",{class:c.value,onClick:()=>m(),onMouseenter:()=>o()},null)}}),dd=E({name:"SuiRating",props:{clearable:Boolean,color:String,defaultRating:{type:Number,default:0},disabled:Boolean,icon:{type:String,default:"star"},maxRating:{type:Number,default:1},modelValue:Number,size:String},setup(t,{emit:l}){const n=H(t.modelValue||t.defaultRating),s=H(!1),u=H(0),d=g=>{n.value=g,l("update:modelValue",g),l("change",g)},p=g=>u.value=g,m=()=>{t.disabled||(s.value=!0)},o=()=>{t.disabled||(s.value=!1,p(0))},r=F(()=>K("ui",t.color,t.icon,t.size,A(t.disabled,"disabled"),"rating",A(s.value,"selected")));return tt("rating",n),tt("updateRating",d),tt("selectedIndex",u),tt("updateSelectedIndex",p),tt("clearable",t.clearable),tt("disabled",t.disabled),()=>e("div",{class:r.value,onMouseenter:()=>m(),onMouseleave:()=>o()},[[...Array(t.maxRating)].map((g,c)=>e(Ov,{icon:t.icon,index:c+1},null))])}}),Hv={install(t){t.component(dd.name,dd)}},cd=E({name:"SuiSearch",props:{icon:String,placeholder:String},setup(t){return()=>e("div",{class:"ui search"},[e("div",{class:"ui icon input"},[e("input",{type:"text",class:"prompt",placeholder:t.placeholder},null),e("i",{class:"search icon"},null)]),e("div",{class:"results"},null)])}}),jv={install(t){t.component(cd.name,cd)}},md=E({name:"SuiSidebar",directives:{clickoutside:to},emits:["update:visible","show","hide"],props:{animation:{type:String,default:"overlay"},dimmed:Boolean,direction:{type:String,default:"left"},icon:[Boolean,String],inverted:Boolean,visible:Boolean},setup(t,{emit:l}){const n=qt({animating:!1}),s=F(()=>{const u=t.direction==="right"||t.direction==="left";return K("ui","sidebar",t.direction,t.animation,A(t.inverted,"inverted"),A(t.visible,"visible"),A(n.animating,"animating"),A(u,"vertical"),Pe(t.icon,"icon"),"menu")});return nt(()=>t.visible,()=>{if(n.animating=!0,setTimeout(()=>n.animating=!1,500),t.dimmed){const u=document.querySelector(".pusher");u&&u.classList.toggle("dimmed")}}),{computedClass:s,onClickPusher:u=>{const d=u.path||u.composedPath&&u.composedPath();d&&d.find(p=>p.classList&&p.classList.contains("pusher"))&&t.visible&&l("update:visible",!1)}}},render(){var t,l;return Gl(e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)]),[[qa("clickoutside"),this.onClickPusher]])}}),qv={install:t=>{t.component(md.name,md)}};class Sn{static getWindowScrollTop(){let{documentElement:l}=document;return(window.pageYOffset||l.scrollTop)-(l.clientTop||0)}static getWindowScrollLeft(){let{documentElement:l}=document;return(window.pageXOffset||l.scrollLeft)-(l.clientLeft||0)}static hasClass(l,n){return l.classList.contains(n)}}const pd=E({name:"SuiSlider",emits:["change","slideend","update:modelValue"],props:{color:String,disabled:Boolean,inverted:Boolean,labeled:[Boolean,String],labels:Array,max:{type:Number,default:10},min:{type:Number,default:0},modelValue:{type:[Number,Array],default:0},range:Boolean,reversed:Boolean,size:String,step:{type:Number,default:1},vertical:Boolean,verticalHeight:{type:[Number,String],default:200}},setup(t,{emit:l}){const n=F(()=>K("ui",t.color,t.size,A(t.disabled,"disabled"),A(t.inverted,"inverted"),A(t.reversed,"reversed"),A(t.vertical,"vertical"),Pe(t.labeled,"labeled"),"slider")),s=()=>100*(t.modelValue[0]-t.min)/(t.max-t.min),u=()=>100*(t.modelValue[1]-t.min)/(t.max-t.min),d=F(()=>{if(t.range)return t.reversed&&!t.vertical?{right:s()+"%",width:u()-s()+"%"}:t.vertical?t.reversed?{bottom:s()+"%",height:u()-s()+"%"}:{top:s()+"%",height:u()-s()+"%"}:{left:s()+"%",width:u()-s()+"%"};let O=t.modelValue>t.max?t.max:t.modelValue;return t.reversed?t.vertical?{bottom:"0%",top:`${100-(O-t.min)/(t.max-t.min)*100}%`}:{right:"0%",left:`${100-(O-t.min)/(t.max-t.min)*100}%`}:t.vertical?{top:"0%",bottom:`${100-(O-t.min)/(t.max-t.min)*100}%`}:{left:"0%",right:`${100-(O-t.min)/(t.max-t.min)*100}%`}}),p=F(()=>{let O=t.range?t.modelValue[0]:t.modelValue>t.max?t.max:t.modelValue;return!t.reversed&&t.vertical?{top:`calc(${(O-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:t.reversed&&t.vertical?{top:"auto",bottom:`calc(${(O-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.reversed&&!t.vertical?{left:"auto",right:`calc(${(O-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{left:`calc(${(O-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),m=F(()=>{let O=t.modelValue[1]>t.max?t.max:t.modelValue[1];return t.reversed&&!t.vertical?{left:"auto",right:`calc(${(O-t.min)*100/(t.max-t.min)}% - 10.5px)`}:t.vertical?t.reversed?{top:"auto",bottom:`calc(${(O-t.min)*100/(t.max-t.min)}% - 10.5px)`}:{top:`calc(${(O-t.min)*100/(t.max-t.min)}% - 10.5px)`,bottom:"auto"}:{left:`calc(${(O-t.min)*100/(t.max-t.min)}% - 10.5px)`,right:"auto"}}),o=F(()=>t.labels?t.labels:[...Array(t.max-t.min+1)].map((O,G)=>G*t.step+t.min)),r=()=>{var O,G;let oe=1,Z=g(),xe=(t.vertical?(O=h.value)==null?void 0:O.clientHeight:(G=h.value)==null?void 0:G.clientWidth)||0,qe=1;if(xe>0)for(;xe/Z*qe<100;)Z%qe||(oe=qe),qe+=1;return oe},g=()=>Math.round((t.max-t.min)/t.step),c=H(null),h=H(null),v=H(0),f=H(0),y=H(0),S=H(0),B=()=>{if(!c.value)return;let O=c.value.getBoundingClientRect();v.value=O.left+Sn.getWindowScrollLeft(),f.value=O.top+Sn.getWindowScrollTop(),y.value=c.value.offsetWidth,S.value=c.value.offsetHeight},b=H(0),w=O=>{let{pageX:G,pageY:oe}=O.touches?O.touches[0]:O,Z,xe;t.vertical?Z=(f.value+S.value-oe)*100/S.value:Z=(G-v.value)*100/y.value,xe=(t.max-t.min)*(Z/100)+t.min;const qe=t.range?t.modelValue[b.value]:t.modelValue||0;xe=qe+Math.round(xe/t.step-qe/t.step)*t.step,t.reversed&&(xe=t.max-xe+t.min),t.vertical&&(xe=t.max-xe+t.min),k(xe)},k=O=>{let G=O,oe;if(t.range)if(oe=t.modelValue?[...t.modelValue]:[],b.value===0){let Z=t.modelValue?t.modelValue[1]:t.max;G<t.min?G=t.min:G>Z&&(G=Z),oe[0]=G,oe[1]=oe[1]||t.max}else{let Z=t.modelValue?t.modelValue[0]:t.min;G>t.max?G=t.max:G<Z&&(G=Z),oe[0]=oe[0]||t.min,oe[1]=G}else G<t.min&&(G=t.min),G>t.max&&(G=t.max),oe=G;l("update:modelValue",oe),l("change",oe)},$=H(!1),x=O=>$.value=O,D=(O,G=0)=>{x(!0),B(),b.value=G,O.preventDefault()},V=O=>{$.value&&(x(!1),document.removeEventListener("mousemove",z),l("slideend",{event:O,value:t.modelValue}))},z=O=>{$.value&&(w(O),O==null||O.preventDefault())},L=(O,G=0)=>{t.disabled||(D(O,G),document.addEventListener("mousemove",z),document.addEventListener("mouseup",V),O.preventDefault())},Y=(O,G=0)=>{switch(b.value=G,O.code){case"ArrowUp":t.vertical&&(t.reversed?j():de()),O.preventDefault();break;case"ArrowDown":t.vertical&&(t.reversed?de():j()),O.preventDefault();break;case"ArrowRight":t.reversed?de():j(),O.preventDefault();break;case"ArrowLeft":t.reversed?j():de(),O.preventDefault();break}},j=()=>{let O=0;t.range?O=t.modelValue[b.value]+t.step:O=t.modelValue+t.step,k(O)},de=()=>{let O=0;t.range?O=t.modelValue[b.value]-t.step:O=t.modelValue-t.step,k(O)},ke=O=>{if(!t.disabled&&!Sn.hasClass(O.target,"thumb")){if(t.range){let G=(t.vertical?O.offsetY/O.target.clientHeight:O.offsetX/O.target.clientWidth)*100,oe=(s()+u())/2;G<oe?b.value=t.reversed?1:0:b.value=t.reversed?0:1}B(),w(O)}};return()=>e("div",{ref:O=>c.value=O,class:n.value,style:t.vertical?`height: ${t.verticalHeight}px;`:""},[e("div",{class:"inner",onClick:ke},[e("div",{class:"track",ref:O=>h.value=O},null),e("div",{class:"track-fill",style:d.value},null),e("div",{class:"thumb",style:p.value,onMousedown:O=>L(O),onTouchstart:O=>D(O),onTouchmove:O=>z(O),onTouchend:O=>V(O),onKeydown:O=>Y(O),tabindex:0},null),t.range&&e("div",{class:"thumb second",style:m.value,onMousedown:O=>L(O,1),onTouchstart:O=>D(O,1),onTouchmove:O=>z(O),onTouchend:O=>V(O),onKeydown:O=>Y(O,1),tabindex:0},null)]),t.labeled&&e("ul",{class:"auto labels"},[[...Array(g()+1)].map((O,G)=>{let oe=G/g();return G%r()?e("li",{class:"halftick label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${oe} + 7px);`},null):e("li",{class:"label",style:`${t.vertical?t.reversed?"bottom":"top":"left"}: calc(((100% - 7px) - 7px) * ${oe} + 7px);`},[t.reversed&&!t.vertical?t.labels?t.labels[g()-G]:o.value[g()-G]:t.labels?t.labels[G]:o.value[G]])})])])}}),Uv={install(t){t.component(pd.name,pd)}},ds=E({name:"SuiTabPanel",props:{active:Boolean,attached:[Boolean,String],header:String},setup(t){return{computedClass:F(()=>K("ui tab segment",A(t.active,"active"),Pe(t.attached,"attached")))}},render(){var t,l;return e("div",{class:this.computedClass},[(l=(t=this.$slots).default)==null?void 0:l.call(t)])}}),fd=E({name:"SuiTab",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},pointing:Boolean,secondary:Boolean,text:Boolean},setup(t,{emit:l,slots:n}){const s=H(t.activeIndex);nt(()=>t.activeIndex,r=>{s.value=r});const u=(r,g)=>{s.value!==g&&(s.value=g,l("update:activeIndex",g),l("tab-change",{event:r,index:g})),l("tab-click",{event:r,index:g})},d=(r,g)=>{r.key==="Enter"&&u(r,g)},p=F(()=>{var r,g;let c=[];return(r=n.default)!=null&&r.call(n)&&((g=n.default)==null||g.call(n).forEach(h=>{h.type.name==="SuiTabPanel"&&c.push(h)})),c}),m=F(()=>!t.secondary&&!t.pointing&&!t.text),o=F(()=>K("ui menu",A(m.value,"tabular attached"),A(t.pointing,"pointing"),A(t.secondary,"secondary"),A(t.text,"text")));return{onClick:u,onKeyDown:d,tabIndex:s,tabs:p,tabMenuClass:o,isDefaultMenu:m}},render(){const t=()=>this.tabs.map((n,s)=>e("a",{class:`item ${this.tabIndex===s&&"active"}`,onClick:u=>this.onClick(u,s),onKeydown:u=>this.onKeyDown(u,s),tabindex:0},[n.props.header])),l=()=>this.tabs.map((n,s)=>e(ds,Pi(n.props,{active:this.tabIndex===s,attached:this.isDefaultMenu?"bottom":!1}),{default:()=>{var u,d;return[(d=(u=n.children).default)==null?void 0:d.call(u)]}}));return e(we,null,[e("div",{class:this.tabMenuClass},[t()]),l()])}}),Gv={install(t){t.component(fd.name,fd),t.component(ds.name,ds)}};function Yv(t,l){t.indexOf(l)===-1&&t.push(l)}const Jm=(t,l,n)=>Math.min(Math.max(n,t),l),At={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},Pa=t=>typeof t=="number",qi=t=>Array.isArray(t)&&!Pa(t[0]),Jv=(t,l,n)=>{const s=l-t;return((n-t)%s+s)%s+t};function Wv(t,l){return qi(t)?t[Jv(0,t.length,l)]:t}const Wm=(t,l,n)=>-n*t+n*l+t,Km=()=>{},ni=t=>t,lo=(t,l,n)=>l-t===0?1:(n-t)/(l-t);function Xm(t,l){const n=t[t.length-1];for(let s=1;s<=l;s++){const u=lo(0,l,s);t.push(Wm(n,1,u))}}function Kv(t){const l=[0];return Xm(l,t-1),l}function Xv(t,l=Kv(t.length),n=ni){const s=t.length,u=s-l.length;return u>0&&Xm(l,u),d=>{let p=0;for(;p<s-2&&!(d<l[p+1]);p++);let m=Jm(0,1,lo(l[p],l[p+1],d));return m=Wv(n,p)(m),Wm(t[p],t[p+1],m)}}const Qm=t=>Array.isArray(t)&&Pa(t[0]),cs=t=>typeof t=="object"&&!!t.createAnimation,ll=t=>typeof t=="function",Qv=t=>typeof t=="string",xl={ms:t=>t*1e3,s:t=>t/1e3},Zm=(t,l,n)=>(((1-3*n+3*l)*t+(3*n-6*l))*t+3*l)*t,Zv=1e-7,e1=12;function t1(t,l,n,s,u){let d,p,m=0;do p=l+(n-l)/2,d=Zm(p,s,u)-t,d>0?n=p:l=p;while(Math.abs(d)>Zv&&++m<e1);return p}function bl(t,l,n,s){if(t===l&&n===s)return ni;const u=d=>t1(d,0,1,t,n);return d=>d===0||d===1?d:Zm(u(d),l,s)}const i1=(t,l="end")=>n=>{n=l==="end"?Math.min(n,.999):Math.max(n,.001);const s=n*t,u=l==="end"?Math.floor(s):Math.ceil(s);return Jm(0,1,u/t)},gd={ease:bl(.25,.1,.25,1),"ease-in":bl(.42,0,1,1),"ease-in-out":bl(.42,0,.58,1),"ease-out":bl(0,0,.58,1)},l1=/\((.*?)\)/;function hd(t){if(ll(t))return t;if(Qm(t))return bl(...t);if(gd[t])return gd[t];if(t.startsWith("steps")){const l=l1.exec(t);if(l){const n=l[1].split(",");return i1(parseFloat(n[0]),n[1].trim())}}return ni}class ep{constructor(l,n=[0,1],{easing:s,duration:u=At.duration,delay:d=At.delay,endDelay:p=At.endDelay,repeat:m=At.repeat,offset:o,direction:r="normal",autoplay:g=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=ni,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,v)=>{this.resolve=h,this.reject=v}),s=s||At.easing,cs(s)){const h=s.createAnimation(n);s=h.easing,n=h.keyframes||n,u=h.duration||u}this.repeat=m,this.easing=qi(s)?ni:hd(s),this.updateDuration(u);const c=Xv(n,o,qi(s)?s.map(hd):ni);this.tick=h=>{var v;d=d;let f=0;this.pauseTime!==void 0?f=this.pauseTime:f=(h-this.startTime)*this.rate,this.t=f,f/=1e3,f=Math.max(f-d,0),this.playState==="finished"&&this.pauseTime===void 0&&(f=this.totalDuration);const y=f/this.duration;let S=Math.floor(y),B=y%1;!B&&y>=1&&(B=1),B===1&&S--;const b=S%2;(r==="reverse"||r==="alternate"&&b||r==="alternate-reverse"&&!b)&&(B=1-B);const w=f>=this.totalDuration?1:Math.min(B,1),k=c(this.easing(w));l(k),this.pauseTime===void 0&&(this.playState==="finished"||f>=this.totalDuration+p)?(this.playState="finished",(v=this.resolve)===null||v===void 0||v.call(this,k)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},g&&this.play()}play(){const l=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=l-this.pauseTime:this.startTime||(this.startTime=l),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var l;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(l=this.reject)===null||l===void 0||l.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(l){this.duration=l,this.totalDuration=l*(this.repeat+1)}get currentTime(){return this.t}set currentTime(l){this.pauseTime!==void 0||this.rate===0?this.pauseTime=l:this.startTime=performance.now()-l/this.rate}get playbackRate(){return this.rate}set playbackRate(l){this.rate=l}}class a1{setAnimation(l){this.animation=l,l==null||l.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const An=new WeakMap;function tp(t){return An.has(t)||An.set(t,{transforms:[],values:new Map}),An.get(t)}function n1(t,l){return t.has(l)||t.set(l,new a1),t.get(l)}const s1=["","X","Y","Z"],o1=["translate","scale","rotate","skew"],za={x:"translateX",y:"translateY",z:"translateZ"},_d={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},r1={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:_d,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:ni},skew:_d},Ll=new Map,ao=t=>`--motion-${t}`,Da=["x","y","z"];o1.forEach(t=>{s1.forEach(l=>{Da.push(t+l),Ll.set(ao(t+l),r1[t])})});const u1=(t,l)=>Da.indexOf(t)-Da.indexOf(l),d1=new Set(Da),ip=t=>d1.has(t),c1=(t,l)=>{za[l]&&(l=za[l]);const{transforms:n}=tp(t);Yv(n,l),t.style.transform=m1(n)},m1=t=>t.sort(u1).reduce(p1,"").trim(),p1=(t,l)=>`${t} ${l}(var(${ao(l)}))`,ms=t=>t.startsWith("--"),bd=new Set;function f1(t){if(!bd.has(t)){bd.add(t);try{const{syntax:l,initialValue:n}=Ll.has(t)?Ll.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:l,initialValue:n})}catch{}}}const kn=(t,l)=>document.createElement("div").animate(t,l),vd={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{kn({opacity:[1]})}catch{return!1}return!0},finished:()=>!!kn({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{kn({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},Bn={},Vi={};for(const t in vd)Vi[t]=()=>(Bn[t]===void 0&&(Bn[t]=vd[t]()),Bn[t]);const g1=.015,h1=(t,l)=>{let n="";const s=Math.round(l/g1);for(let u=0;u<s;u++)n+=t(lo(0,s-1,u))+", ";return n.substring(0,n.length-2)},yd=(t,l)=>ll(t)?Vi.linearEasing()?`linear(${h1(t,l)})`:At.easing:Qm(t)?_1(t):t,_1=([t,l,n,s])=>`cubic-bezier(${t}, ${l}, ${n}, ${s})`;function b1(t,l){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:l());return t}const v1=t=>Array.isArray(t)?t:[t];function ps(t){return za[t]&&(t=za[t]),ip(t)?ao(t):t}const ra={get:(t,l)=>{l=ps(l);let n=ms(l)?t.style.getPropertyValue(l):getComputedStyle(t)[l];if(!n&&n!==0){const s=Ll.get(l);s&&(n=s.initialValue)}return n},set:(t,l,n)=>{l=ps(l),ms(l)?t.style.setProperty(l,n):t.style[l]=n}};function lp(t,l=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(l&&t.commitStyles(),t.cancel())}catch{}}function y1(t,l){var n;let s=(l==null?void 0:l.toDefaultUnit)||ni;const u=t[t.length-1];if(Qv(u)){const d=((n=u.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";d&&(s=p=>p+d)}return s}function C1(){return window.__MOTION_DEV_TOOLS_RECORD}function w1(t,l,n,s={},u){const d=C1(),p=s.record!==!1&&d;let m,{duration:o=At.duration,delay:r=At.delay,endDelay:g=At.endDelay,repeat:c=At.repeat,easing:h=At.easing,persist:v=!1,direction:f,offset:y,allowWebkitAcceleration:S=!1,autoplay:B=!0}=s;const b=tp(t),w=ip(l);let k=Vi.waapi();w&&c1(t,l);const $=ps(l),x=n1(b.values,$),D=Ll.get($);return lp(x.animation,!(cs(h)&&x.generator)&&s.record!==!1),()=>{const V=()=>{var Y,j;return(j=(Y=ra.get(t,$))!==null&&Y!==void 0?Y:D==null?void 0:D.initialValue)!==null&&j!==void 0?j:0};let z=b1(v1(n),V);const L=y1(z,D);if(cs(h)){const Y=h.createAnimation(z,l!=="opacity",V,$,x);h=Y.easing,z=Y.keyframes||z,o=Y.duration||o}if(ms($)&&(Vi.cssRegisterProperty()?f1($):k=!1),w&&!Vi.linearEasing()&&(ll(h)||qi(h)&&h.some(ll))&&(k=!1),k){D&&(z=z.map(de=>Pa(de)?D.toDefaultUnit(de):de)),z.length===1&&(!Vi.partialKeyframes()||p)&&z.unshift(V());const Y={delay:xl.ms(r),duration:xl.ms(o),endDelay:xl.ms(g),easing:qi(h)?void 0:yd(h,o),direction:f,iterations:c+1,fill:"both"};m=t.animate({[$]:z,offset:y,easing:qi(h)?h.map(de=>yd(de,o)):void 0},Y),m.finished||(m.finished=new Promise((de,ke)=>{m.onfinish=de,m.oncancel=ke}));const j=z[z.length-1];m.finished.then(()=>{v||(ra.set(t,$,j),m.cancel())}).catch(Km),S||(m.playbackRate=1.000001)}else if(u&&w)z=z.map(Y=>typeof Y=="string"?parseFloat(Y):Y),z.length===1&&z.unshift(parseFloat(V())),m=new u(Y=>{ra.set(t,$,L?L(Y):Y)},z,Object.assign(Object.assign({},s),{duration:o,easing:h}));else{const Y=z[z.length-1];ra.set(t,$,D&&Pa(Y)?D.toDefaultUnit(Y):Y)}return p&&d(t,l,z,{duration:o,delay:r,easing:h,repeat:c,offset:y},"motion-one"),x.setAnimation(m),m&&!B&&m.pause(),m}}const S1=(t,l)=>t[l]?Object.assign(Object.assign({},t),t[l]):Object.assign({},t);function A1(t,l){var n;return typeof t=="string"?l?((n=l[t])!==null&&n!==void 0||(l[t]=document.querySelectorAll(t)),t=l[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const k1=t=>t(),ap=(t,l,n=At.duration)=>new Proxy({animations:t.map(k1).filter(Boolean),duration:n,options:l},$1),B1=t=>t.animations[0],$1={get:(t,l)=>{const n=B1(t);switch(l){case"duration":return t.duration;case"currentTime":return xl.s((n==null?void 0:n[l])||0);case"playbackRate":case"playState":return n==null?void 0:n[l];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(T1)).catch(Km)),t.finished;case"stop":return()=>{t.animations.forEach(s=>lp(s))};case"forEachNative":return s=>{t.animations.forEach(u=>s(u,t))};default:return typeof(n==null?void 0:n[l])>"u"?void 0:()=>t.animations.forEach(s=>s[l]())}},set:(t,l,n)=>{switch(l){case"currentTime":n=xl.ms(n);case"playbackRate":for(let s=0;s<t.animations.length;s++)t.animations[s][l]=n;return!0}return!1}},T1=t=>t.finished;function x1(t,l,n){return ll(t)?t(l,n):t}function E1(t){return function(l,n,s={}){l=A1(l);const u=l.length,d=[];for(let p=0;p<u;p++){const m=l[p];for(const o in n){const r=S1(s,o);r.delay=x1(r.delay,p,u);const g=w1(m,o,n[o],r,t);d.push(g)}}return ap(d,s,s.duration)}}const R1=E1(ep);function P1(t,l={}){return ap([()=>{const n=new ep(t,[0,1],l);return n.finished.catch(()=>{}),n}],l,l.duration)}function z1(t,l,n){return(ll(t)?P1:R1)(t,l,n)}const pe=(t,l)=>(n,{duration:s,keyframesOverride:u={}})=>z1(n,{...t,...u},{autoplay:!1,...l,duration:s}),Cd=pe({transform:["scale(0.8) translateZ(0px)","scale(0.8) translateZ(0px)","scale(1.05) translateZ(0px)","scale(1) translateZ(0px)"],opacity:[null,.7,1,null],zIndex:[-1,-1,999,999]},{duration:.5,offset:[0,.1,.8,1]}),D1=pe({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,-1,null,-1]},{duration:.5,offset:[0,.5,.8,1]}),M1=pe({transform:["translateX(0%) rotateY(0deg) rotateX(0deg)","translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px)",null,"translateX(0%) rotateY(0deg) rotateX(0deg) translateZ(-10px)"],opacity:[null,null,1,0],zIndex:[999,1,null,1]},{duration:.5,offset:[0,.5,.8,1]}),I1=pe({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(0)","scale(1)"],opacity:[0,1]},{duration:.4,offset:[0,1]}),V1=pe({transformOrigin:"top center",animationTimingFunction:"cubic-bezier(0.34, 1.61, 0.7, 1)",transform:["scale(1)","scale(0)"],opacity:[1,0]},{duration:.4,offset:[0,1]}),F1=pe({opacity:[0,1]},{duration:.5,offset:[0,1]}),N1=pe({opacity:[0,1],transform:["translateY(10%)","export translateY(0%)"]},{duration:.5,offset:[0,1]}),L1=pe({opacity:[0,1],transform:["translateY(-10%)","translateY(0%)"]},{duration:.5,offset:[0,1]}),O1=pe({opacity:[0,1],transform:["translateX(10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),H1=pe({opacity:[0,1],transform:["translateX(-10%)","translateX(0%)"]},{duration:.5,offset:[0,1]}),j1=pe({opacity:[1,0]},{duration:.5,offset:[0,1]}),q1=pe({opacity:[1,0],transform:["translateY(0%)","texport ranslateY(5%)"]},{duration:.5,offset:[0,1]}),U1=pe({opacity:[1,0],transform:["translateY(0%)","translateY(-5%)"]},{duration:.5,offset:[0,1]}),G1=pe({opacity:[1,0],transform:["translateX(0%)","translateX(5%)"]},{duration:.5,offset:[0,1]}),Y1=pe({opacity:[1,0],transform:["translateX(0%)","translateX(-5%)"]},{duration:.5,offset:[0,1]}),J1=pe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:[0,null,null,1,null,1]},{duration:.6,offset:[0,.2,.4,.6,.8,1]}),W1=pe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, 1500px, 0","translate3d(0, -20px, 0)","translate3d(0, 10px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),K1=pe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(0, -1500px, 0","translate3d(0, 25px, 0)","translate3d(0, -10px, 0)","translate3d(0, 5px, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),X1=pe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(1500px, 0, 0","translate3d(-25px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),Q1=pe({transitionTimingFunction:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",transform:["translate3d(-1500px, 0, 0","translate3d(25px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:[0,1,null,null,null]},{duration:.6,offset:[0,.6,.75,.9,1]}),Z1=pe({transform:["scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.5,.55,1]}),ey=pe({transform:["translate3d(0, 10px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),ty=pe({transform:["translate3d(0, -10px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:[null,1,1,0]},{duration:.6,offset:[.2,.4,.45,1]}),iy=pe({transform:["translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),ly=pe({transform:["translate3d(20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:[1,0]},{duration:.6,offset:[.2,1]}),ay=pe({transform:["perspective(2000px) rotateY(-90deg)","perspective(2000px) rotateY(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),ny=pe({transform:["perspective(2000px) rotateY(0deg)","perspective(2000px) rotateY(90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),sy=pe({transform:["perspective(2000px) rotateX(-90deg)","perspective(2000px) rotateX(0deg)"],opacity:[0,1]},{duration:.6,offset:[0,1]}),oy=pe({transform:["perspective(2000px) rotateX(0deg)","perspective(2000px) rotateX(-90deg)"],opacity:[1,0]},{duration:.6,offset:[0,1]}),ry=pe({transform:["scale(0.8)","scale(1)"],opacity:[0,1]},{duration:.5,offset:[0,1]}),uy=pe({transform:["scale(1)","scale(0.9)"],opacity:[1,0]},{duration:.5,offset:[0,1]}),np={transform:["scaleY(0)","scaleY(1)"],opacity:[0,1]},sp={transform:["scaleX(0)","scaleX(1)"],opacity:[0,1]},op={transform:["scaleY(1)","scaleY(0)"],opacity:[1,0]},dy={transform:["scaleX(1)","scaleX(0)"],opacity:[1,0]},cy=pe({transformOrigin:"top center",...np},{offset:[0,1]}),my=pe({transformOrigin:"bottom center",...np},{offset:[0,1]}),py=pe({transformOrigin:"center right",...sp},{offset:[0,1]}),fy=pe({transformOrigin:"center left",...sp},{offset:[0,1]}),gy=pe({transformOrigin:"top center",...op},{offset:[0,1]}),hy=pe({transformOrigin:"bottom center",...op},{offset:[0,1]}),wd=pe({transformOrigin:"center left",...dy},{offset:[0,1]}),di=.8,Ui={transform:["perspective(1000px) rotateX(90deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(15deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},Gi={transform:["perspective(1000px) rotateY(-90deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-17.5deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(0deg)"],opacity:[0,1,null,null,null],offset:[0,.4,.6,.8,1]},Yi={transform:["perspective(1000px) rotateX(0deg)","perspective(1000px) rotateX(-7.5deg)","perspective(1000px) rotateX(17.5deg)","perspective(1000px) rotateX(-30deg)","perspective(1000px) rotateX(90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},Ji={transform:["perspective(1000px) rotateY(0deg)","perspective(1000px) rotateY(7.5deg)","perspective(1000px) rotateY(-10deg)","perspective(1000px) rotateY(30deg)","perspective(1000px) rotateY(-90deg)"],opacity:[null,null,null,1,0],offset:[0,.4,.6,.8,1]},_y=pe({transformOrigin:"top center",transform:Ui.transform,opacity:Ui.opacity},{duration:di,offset:Ui.offset}),by=pe({transformOrigin:"bottom center",transform:Ui.transform,opacity:Ui.opacity},{duration:di,offset:Ui.offset}),vy=pe({transformOrigin:"center right",transform:Gi.transform,opacity:Gi.opacity},{duration:di,offset:Gi.offset}),yy=pe({transformOrigin:"center left",transform:Gi.transform,opacity:Gi.opacity},{duration:di,offset:Gi.offset}),Cy=pe({transformOrigin:"top center",transform:Yi.transform,opacity:Yi.opacity},{duration:di,offset:Yi.offset}),wy=pe({transformOrigin:"bottom center",transform:Yi.transform,opacity:Yi.opacity},{duration:di,offset:Yi.offset}),Sy=pe({transformOrigin:"center right",transform:Ji.transform,opacity:Ji.opacity},{duration:di,offset:Ji.offset}),Ay=pe({transformOrigin:"center left",transform:Ji.transform,opacity:Ji.opacity},{duration:di,offset:Ji.offset}),ky=pe({transform:["scale(0)","scale(1)"],opacity:[1,1]},{offset:[0,1]}),By=pe({transform:["scale(1)","scale(0)"],opacity:[1,1]},{offset:[0,1]}),$y=pe({transform:["translateY(0)","translateY(0)","translateY(-30px)","translateY(0)","translateY(-15px)","translateY(0)","translateY(0)"]},{offset:[0,.2,.4,.5,.6,.8,1]}),Ty=pe({opacity:[1,0,1,0,1]},{offset:[0,.25,.5,.75,1]}),xy=pe({animationTimingFunction:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",backgroundColor:["#FCFCFD","#FFF6CD","FCFCFD"]},{duration:2,offset:[0,.3,1]}),Ey=pe({transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"]},{duration:.75,offset:[0,.3,.4,.5,.6,.75,1]}),Ry=pe({transform:["scale(1)","scale(0.9)","scale(1)"],opacity:[1,.7,1]},{offset:[0,.5,1]}),Py=pe({transform:["translateX(0)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(10px)","translateX(-10px)","translateX(0)"]}),zy=pe({transform:["scale(1)","scale(0.9) rotate(-3deg)","scale(0.9) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1.1) rotate(-3deg)","scale(1.1) rotate(3deg)","scale(1) rotate(0)"]},{offset:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]}),Dy={browse:[Cd,D1],"browse right":[Cd,M1],drop:[I1,V1],fade:[F1,j1],"fade up":[N1,q1],"fade down":[L1,U1],"fade left":[O1,G1],"fade right":[H1,Y1],fly:[J1,Z1],"fly up":[W1,ey],"fly down":[K1,ty],"fly left":[X1,iy],"fly right":[Q1,ly],"horizontal flip":[ay,ny],"vertical flip":[sy,oy],scale:[ry,uy],"slide up":[my,hy],"slide down":[cy,gy],"slide left":[py,wd],"slide right":[fy,wd],"swing up":[by,wy],"swing down":[_y,Cy],"swing left":[vy,Sy],"swing right":[yy,Ay],zoom:[ky,By]},My={bounce:[$y,void 0],flash:[Ty,void 0],glow:[xy,void 0],jiggle:[Ey,void 0],pulse:[Ry,void 0],shake:[Py,void 0],tada:[zy,void 0]},rp=t=>({...Dy,...My})[t],Iy=t=>{const[l,n]=rp(t.animation),s=F(()=>t.duration?t.duration/1e3:.5),u=F(()=>(p,m)=>{if(!l)return m();const o=l(p,{duration:s.value});o.play(),o.finished.then(m)}),d=F(()=>(p,m)=>{if(!n)return m();const o=n(p,{duration:s.value});o.play(),o.finished.then(m)});return{onEnter:u,onLeave:d}},fs=E({name:"SuiTransition",props:{animation:{type:String,default:"fade"},duration:{type:Number,default:500}},setup(t){const{onEnter:l,onLeave:n}=Iy(t);return{onEnter:l,onLeave:n}},render(){return e(Qa,{onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var t,l;return[(l=(t=this.$slots).default)==null?void 0:l.call(t)]}})}}),gs=E({name:"SuiTransitionGroup",props:{tag:String,animation:{type:String,default:"fade"},enterKeyframes:{type:Function,default:()=>({})},leaveKeyframes:{type:Function,default:()=>({})}},setup(t){const[l,n]=rp(t.animation),s=F(()=>(d,p)=>{if(!l)return p();const m=l(d,{duration:.5,keyframesOverride:t.enterKeyframes(d)});m.play(),m.finished.then(p)}),u=F(()=>(d,p)=>{if(!n)return p();const m=n(d,{duration:.5,keyframesOverride:t.leaveKeyframes(d)});m.play(),m.finished.then(p)});return{onEnter:s,onLeave:u}},render(){return e(rm,{tag:this.tag,onEnter:this.onEnter,onLeave:this.onLeave,css:!1},{default:()=>{var t,l;return[(l=(t=this.$slots).default)==null?void 0:l.call(t)]}})}}),Vy={install(t){t.component(fs.name,fs),t.component(gs.name,gs)}},Fy=Object.freeze(Object.defineProperty({__proto__:null,Accordion:av,Calendar:vv,Checkbox:yv,Dimmer:Cv,Dropdown:Bv,Embed:$v,Modal:Mv,Popup:Vv,Progress:Lv,Rating:Hv,Search:jv,Sidebar:qv,Slider:Uv,Tab:Gv,Transition:Vy},Symbol.toStringTag,{value:"Module"})),$n=E({name:"SuiToastActions",props:{aligned:String,basic:Boolean,vertical:Boolean,...io()},setup(t,{slots:l}){const n=F(()=>K("actions",t.basic&&"basic",t.aligned,t.vertical&&"vertical"));return()=>{var s;return t.attached?e(lt,{attached:t.attached,vertical:t.vertical},{default:()=>{var u;return[(u=l.default)==null?void 0:u.call(l)]}}):e("div",{class:n.value},[(s=l.default)==null?void 0:s.call(l)])}}}),Ny=E({name:"SuiToastBox",props:{unclickable:Boolean,verticalAttached:Boolean},setup(t,{slots:l}){const n=F(()=>K("floating toast-box compact",t.unclickable&&"unclickable"));return()=>{var s,u;return t.verticalAttached?e("div",{class:n.value,style:"display: block !important;"},[e("div",{class:"vertical attached compact right"},[(s=l.default)==null?void 0:s.call(l)])]):e("div",{class:n.value,style:"display: block !important;"},[(u=l.default)==null?void 0:u.call(l)])}}});function Tn(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Bt(t)}const Ly=E({name:"SuiToast",emits:["click","close"],props:{id:Number,displayTime:{type:Number,default:3e3},type:String,title:String,message:{type:String,required:!0},centered:Boolean,messageStyle:Boolean,actions:Function,actionsProps:Object,showProgress:{type:String},showProgressColor:String,showProgressUp:Boolean,inverted:Boolean,...Gm()},setup(t,{emit:l}){const{colorClasses:n}=Ym(t),s=F(()=>{var p,m,o,r,g;return K(t.centered&&"center aligned",t.type||"neutral",n.value,"ui",t.messageStyle?"message":"toast",t.actions&&!((p=t.actionsProps)!=null&&p.vertical)&&"actions",((m=t.actionsProps)==null?void 0:m.attached)==="top"&&"bottom attached",((o=t.actionsProps)==null?void 0:o.attached)==="bottom"&&"top attached",((r=t.actionsProps)==null?void 0:r.attached)==="left"&&"left attached",((g=t.actionsProps)==null?void 0:g.vertical)&&"vertical","compact")}),u=H(t.showProgressUp?0:100),d=()=>{const p=t.displayTime/100;setTimeout(()=>{const m=setInterval(()=>{if(t.showProgressUp){u.value>=100&&clearInterval(m),u.value+=1;return}u.value<=0&&clearInterval(m),u.value-=1},p)},500)};return ri(()=>t.showProgress&&d()),setTimeout(()=>t.displayTime>0&&l("close"),t.displayTime+750),{classes:s,progress:u}},render(){var t;let l,n,s;return e(Ny,{unclickable:!!this.actions,verticalAttached:((t=this.actionsProps)==null?void 0:t.attached)==="left"},{default:()=>{var u,d,p,m;return[this.showProgress==="top"&&e(Ra,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null),this.actions&&(((u=this.actionsProps)==null?void 0:u.attached)==="top"||((d=this.actionsProps)==null?void 0:d.attached)==="left")&&e($n,this.actionsProps,Tn(l=this.actions({close:()=>this.$emit("close")}))?l:{default:()=>[l]}),e("div",{role:"alert",class:this.classes,onClick:()=>!this.actions&&this.$emit("click")},[e("div",{class:"content"},[this.title&&e("div",{class:"ui header"},[this.title]),e("div",{class:"message"},[this.message])]),this.actions&&!((p=this.actionsProps)!=null&&p.attached)&&e($n,this.actionsProps,Tn(n=this.actions({close:()=>this.$emit("close")}))?n:{default:()=>[n]})]),this.actions&&((m=this.actionsProps)==null?void 0:m.attached)==="bottom"&&e($n,this.actionsProps,Tn(s=this.actions({close:()=>this.$emit("close")}))?s:{default:()=>[s]}),this.showProgress==="bottom"&&e(Ra,{inverted:!this.inverted,color:this.showProgressColor||this.color,attached:this.showProgress,percent:this.progress},null)]}})}}),Oy=["top right","top center","top left","bottom right","bottom center","bottom left","centered"],Hy=({defaultValue:t}={})=>({position:{type:String,validator:l=>Oy.includes(l),default:t}}),jy=t=>({positionClasses:F(()=>t.position||"")});function qy(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Bt(t)}const Uy=E({name:"SuiToastContainer",props:{horizontal:Boolean,...io(),...Hy({defaultValue:"top right"})},setup(t){const{items:l,remove:n}=up(),{attachedClasses:s}=Um(t),{positionClasses:u}=jy(t);return{classes:F(()=>K(s.value||u.value,"ui toast-container",t.horizontal&&"horizontal")),items:l,remove:n,enterKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const p=[0,`${d.offsetHeight}px`],m=[0,`${parseInt(getComputedStyle(d).marginBottom,10)}px`];return{height:p,marginBottom:m}},leaveKeyframes:d=>{if(!(d instanceof HTMLElement))return{};const p=[`${d.offsetWidth}px`,0],m=[`${d.offsetHeight}px`,0],o=t.horizontal?{width:p}:{height:m},r=[`${parseInt(getComputedStyle(d).marginBottom,10)}px`,0];return{...o,marginBottom:r}}}},render(){let t;return e(Wa,{to:"body"},{default:()=>[e("div",{class:this.classes},[e(gs,{animation:"scale",enterKeyframes:this.enterKeyframes,leaveKeyframes:this.leaveKeyframes},qy(t=this.items.filter(({position:l,attached:n})=>this.attached?n===this.attached:l===this.position).filter(({horizontal:l})=>this.horizontal===!!l).map(({id:l,...n})=>e(Ly,Pi({key:l},n,{onClick:()=>this.remove(l),onClose:()=>this.remove(l)}),null)))?t:{default:()=>[t]})])]})}}),Gy=H(1),fl=H([]),up=()=>({items:fl,add:t=>{t.position=t.position||"top right",fl.value=[...fl.value,{id:Gy.value++,...t}]},remove:t=>{fl.value=fl.value.filter(l=>l.id!==t)}}),Ze=()=>{var t;const l=(t=Mt())==null?void 0:t.appContext,{add:n}=up();return{toast:s=>{const{position:u,attached:d,horizontal:p}=s;Wy({position:u,attached:d,horizontal:p})||Jy(l,{position:u,attached:d,horizontal:p}),n(s)}}},Yy=(t,{appContext:l,element:n}={})=>{const s=n||document.createElement("div");return l&&(t.appContext=l),ka(t,s),{vNode:t,el:s}},Jy=(t,{position:l="top right",attached:n,horizontal:s=!1}={})=>{const u=U(Uy,{position:l,attached:n,horizontal:s}),{el:d}=Yy(u,{appContext:t});return{vNode:u,el:d}},Wy=({position:t="top right",attached:l,horizontal:n})=>{const s=l?`.ui.toast-container.${l}.attached`:`.ui.toast-container.${t.split(" ").join(".")}${n?".horizontal":":not(.horizontal)"}`;return document.querySelector(s)};function Ky(t){Object.values({...Hb,...Kb,...lv,...Fy}).map(l=>t.use(l))}const Xy={install:Ky},Qy=Object.assign({inheritAttrs:!1},{__name:"DocSectionText",props:["label","onClick"],setup(t){const l=Pm(),n=F(()=>{const u=l.currentRoute.value.path;return u.lastIndexOf("/")===u.length-1?u.slice(0,-1):u}),s=u=>{u.preventDefault();const p=u.target.parentElement.getAttribute("href"),m=p.slice(p.indexOf("#")+1),o=document.getElementById(m);o&&o.scrollIntoView({behavior:"smooth"})};return(u,d)=>{const p=_("SuiHeader"),m=_("SuiGridColumn"),o=_("SuiGridRow");return I(),re(we,null,[e(o,null,{default:i(()=>[e(m,null,{default:i(()=>[e(p,{as:"h3",class:"doc-section-text"},{default:i(()=>[a(Be(t.label)+" ",1),e(R(Rm),{to:`${n.value}#${u.$attrs.id}`,target:"_self",onClick:s},{default:i(()=>[e(R(ut),{name:"linkify",color:"grey",size:"small",link:"",fitted:""})]),_:1},8,["to"])]),_:1})]),_:1}),e(m,{textAlign:"right"},{default:i(()=>[e(R(ut),{name:"code",color:"grey",link:"",onClick:t.onClick},null,8,["onClick"])]),_:1})]),_:1}),C("p",null,[Xi(u.$slots,"default",{},void 0,!0)])],64)}}}),Zy=ge(Qy,[["__scopeId","data-v-a2b78897"]]),eC={mounted(t,l){var u;const n=l.modifiers,s=l.value;n.script||s==="script"?t.className="language-javascript":t.className="language-markup",eb.highlightElement(t.children[0]),(u=t.children[0].parentElement)==null||u.setAttribute("tabindex","-1")}},tC={key:0},iC={__name:"DocSectionCode",props:["code","hideCode"],setup(t){return(l,n)=>{const s=_("SuiGridColumn"),u=_("SuiGridRow");return I(),te(u,null,{default:i(()=>[e(s,{width:16},{default:i(()=>[Xi(l.$slots,"default")]),_:3}),e(s,{width:16},{default:i(()=>[e(R(fs),{animation:"scale"},{default:i(()=>[t.hideCode?Js("",!0):Gl((I(),re("pre",tC,[C("code",null,Be(t.code)+`
`,1)])),[[R(eC)]])]),_:1})]),_:1})]),_:3})}}},he={__name:"DocSection",props:["label","code"],setup(t){const l=H(!0),n=()=>l.value=!l.value;return(s,u)=>{const d=_("SuiGrid");return I(),re("section",null,[e(d,{columns:2},{default:i(()=>[e(Zy,Pi({label:t.label,"on-click":n},s.$attrs),{default:i(()=>[Xi(s.$slots,"description")]),_:3},16,["label"]),e(iC,{code:t.code,"hide-code":l.value},{default:i(()=>[Xi(s.$slots,"example")]),_:3},8,["code","hide-code"])]),_:3})])}}},lC=`<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
</template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`,aC={__name:"ButtonDoc",setup(t){const l=H("Follow"),n=()=>l.value=l.value==="Follow"?"Following":"Follow";return(s,u)=>(I(),te(he,{label:"Button",code:lC},{description:i(()=>[a(" A standard button ")]),example:i(()=>[e(R(M),{onClick:n},{default:i(()=>[a(Be(l.value),1)]),_:1})]),_:1}))}},nC=`<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
</template>`,sC={__name:"EmphasisDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Emphasis",code:nC},{description:i(()=>[a(" A button can be formatted to show different levels of emphasis ")]),example:i(()=>[e(R(M),{primary:""},{default:i(()=>[a("Save")]),_:1}),e(R(M),{secondary:""},{default:i(()=>[a("Okay")]),_:1}),e(R(M),null,{default:i(()=>[a("Cancel")]),_:1})]),_:1}))}},oC=`<template>
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
</template>`,rC={__name:"AnimatedDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Animated",code:oC},{description:i(()=>[a(" A button can animate to show hidden content ")]),example:i(()=>[e(R(M),{animated:""},{default:i(()=>[e(R(li),{visible:""},{default:i(()=>[a("Next")]),_:1}),e(R(li),{hidden:""},{default:i(()=>[e(R(ut),{name:"arrow right"})]),_:1})]),_:1}),e(R(M),{animated:"vertical"},{default:i(()=>[e(R(li),{visible:""},{default:i(()=>[e(R(ut),{name:"shop"})]),_:1}),e(R(li),{hidden:""},{default:i(()=>[a("Shop")]),_:1})]),_:1}),e(R(M),{animated:"fade"},{default:i(()=>[e(R(li),{visible:""},{default:i(()=>[a(" Sign-up for a Pro account ")]),_:1}),e(R(li),{hidden:""},{default:i(()=>[a("$12.99 a month")]),_:1})]),_:1})]),_:1}))}},uC=`<template>
  <SuiButton labelPosition="right" as="div">
    <SuiButton icon="heart" content=" Like" />
    <SuiLabel basic>2,048</SuiLabel>
  </SuiButton>
  <SuiButton labelPosition="left" as="div">
    <SuiLabel basic pointing="right">2,048</SuiLabel>
    <SuiButton icon="heart" content=" Like" />
  </SuiButton>
  <SuiButton labelPosition="left" as="div">
    <SuiLabel basic>1,048</SuiLabel>
    <SuiButton icon="fork" />
  </SuiButton>
</template>`,dC={__name:"LabeledDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Labeled",code:uC},{description:i(()=>[a(" A button can appear alongside a label ")]),example:i(()=>[e(R(M),{labelPosition:"right",as:"div"},{default:i(()=>[e(R(M),{icon:"heart",content:" Like"}),e(R(Ht),{basic:""},{default:i(()=>[a("2,048")]),_:1})]),_:1}),e(R(M),{labelPosition:"left",as:"div"},{default:i(()=>[e(R(Ht),{basic:"",pointing:"right"},{default:i(()=>[a("2,048")]),_:1}),e(R(M),{icon:"heart",content:" Like"})]),_:1}),e(R(M),{labelPosition:"left",as:"div"},{default:i(()=>[e(R(Ht),{basic:""},{default:i(()=>[a("1,048")]),_:1}),e(R(M),{icon:"fork"})]),_:1})]),_:1}))}},cC=`<template>
  <SuiButton icon="cloud" />
</template>`,mC={__name:"IconDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Icon",code:cC},{description:i(()=>[a(" A button can have only an icon ")]),example:i(()=>[e(R(M),{icon:"cloud"})]),_:1}))}},pC=`<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
</template>`,fC={__name:"LabeledIconDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Labeled Icon",code:pC},{description:i(()=>[a(" A button can use an icon as a label ")]),example:i(()=>[e(R(M),{labeled:"",icon:"pause",content:"Pause"}),e(R(M),{labeled:"right",icon:"right arrow",content:"Next"}),e(R(M),{labeled:"",icon:""},{default:i(()=>[e(R(ut),{loading:"",name:"spinner"}),a(" Loading ")]),_:1})]),_:1}))}},gC=`<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
</template>`,hC={__name:"BasicDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Basic",code:gC},{description:i(()=>[a(" A basic button is less pronounced ")]),example:i(()=>[e(R(M),{basic:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(R(M),{basic:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(R(M),{basic:"",positive:""},{default:i(()=>[a("Positive")]),_:1}),e(R(M),{basic:"",negative:""},{default:i(()=>[a("Negative")]),_:1})]),_:1}))}},_C=`<template>
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
</template>`,bC={__name:"TertiaryDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Tertiary",code:_C},{description:i(()=>[a(" An none bordered less important button ")]),example:i(()=>[e(R(M),{tertiary:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(R(M),{tertiary:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(R(M),{tertiary:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(R(M),{tertiary:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(R(M),{tertiary:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(R(M),{tertiary:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(R(M),{tertiary:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(R(M),{tertiary:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(R(M),{tertiary:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(R(M),{tertiary:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(R(M),{tertiary:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(R(M),{tertiary:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(R(M),{tertiary:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(R(M),{tertiary:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(R(M),{tertiary:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1}))}},vC=`<template>
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
</template>`,yC={__name:"InvertedDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Inverted",code:vC},{description:i(()=>[a(" A button can be formatted to appear on dark backgrounds ")]),example:i(()=>[e(R(il),{inverted:""},{default:i(()=>[e(R(M),{inverted:"",primary:""},{default:i(()=>[a("Primary")]),_:1}),e(R(M),{inverted:"",secondary:""},{default:i(()=>[a("Secondary")]),_:1}),e(R(M),{inverted:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(R(M),{inverted:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(R(M),{inverted:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(R(M),{inverted:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(R(M),{inverted:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(R(M),{inverted:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(R(M),{inverted:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(R(M),{inverted:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(R(M),{inverted:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(R(M),{inverted:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(R(M),{inverted:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(R(M),{inverted:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(R(M),{inverted:"",color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1}))}},CC=`<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
</template>`,wC={__name:"ButtonsDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Buttons",code:CC},{description:i(()=>[a(" Buttons can exist together as a group ")]),example:i(()=>[e(R(lt),null,{default:i(()=>[e(R(M),{content:"One"}),e(R(M),{content:"Two"}),e(R(M),{content:"Three"})]),_:1})]),_:1}))}},SC=`<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
</template>`,AC={__name:"IconButtonsDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Icon Buttons",code:SC},{description:i(()=>[a(" Button groups can show groups of icons ")]),example:i(()=>[e(R(lt),{icon:""},{default:i(()=>[e(R(M),{icon:"align left"}),e(R(M),{icon:"align center"}),e(R(M),{icon:"align right"}),e(R(M),{icon:"align justify"})]),_:1})]),_:1}))}},kC=C("div",{class:"or"},null,-1),BC=C("div",{class:"or","data-text":"ou"},null,-1),$C=`<template>
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
</template>`,TC={__name:"ConditionalsDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Conditionals",code:$C},{description:i(()=>[a(" Button groups can contain conditionals ")]),example:i(()=>[e(R(lt),null,{default:i(()=>[e(R(M),{content:"Cancel"}),kC,e(R(M),{content:"Save",positive:""})]),_:1}),e(R(lt),null,{default:i(()=>[e(R(M),{content:"un"}),BC,e(R(M),{content:"deux",positive:""})]),_:1})]),_:1}))}},xC=`<template>
  <SuiButton active icon="user" content=" Follow" />
</template>`,EC={__name:"ActiveDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Active",code:xC},{description:i(()=>[a(" A button can show it is currently the active user selection ")]),example:i(()=>[e(R(M),{active:"",icon:"user",content:" Follow"})]),_:1}))}},RC=`<template>
  <SuiButton disabled icon="user" content=" Followed" />
</template>`,PC={__name:"DisabledDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Disabled",code:RC},{description:i(()=>[a(" A button can show it is currently unable to be interacted with ")]),example:i(()=>[e(R(M),{disabled:"",icon:"user",content:" Followed"})]),_:1}))}},zC=`<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`,DC={__name:"LoadingDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Loading",code:zC},{description:i(()=>[a(" A button can show a loading indicator ")]),example:i(()=>[e(R(M),{loading:"",content:"Loading"}),e(R(M),{loading:"double",primary:"",content:"Loading"}),e(R(M),{loading:"elastic",secondary:"",content:"Loading"})]),_:1}))}},MC=`<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
</template>`,IC={__name:"SocialDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Social",code:MC},{description:i(()=>[a(" A button can be formatted to link to a social website ")]),example:i(()=>[e(R(M),{facebook:"",icon:"facebook",content:" Facebook"}),e(R(M),{twitter:"",icon:"twitter",content:" Twitter"}),e(R(M),{vk:"",icon:"vk",content:"VK"}),e(R(M),{linkedin:"",icon:"linkedin",content:" LinkedIn"}),e(R(M),{instagram:"",icon:"instagram",content:" Instagram"}),e(R(M),{youtube:"",icon:"youtube",content:" YouTube"}),e(R(M),{whatsapp:"",icon:"whatsapp",content:" WhatsApp"}),e(R(M),{telegram:"",icon:"telegram",content:" Telegram"})]),_:1}))}},VC=`<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
</template>`,FC={__name:"SizeDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Size",code:VC},{description:i(()=>[a(" A button can have different sizes ")]),example:i(()=>[e(R(M),{size:"mini",content:"Mini"}),e(R(M),{size:"tiny",content:"Tiny"}),e(R(M),{size:"small",content:"Small"}),e(R(M),{size:"medium",content:"Medium"}),e(R(M),{size:"large",content:"Large"}),e(R(M),{size:"big",content:"Big"}),e(R(M),{size:"huge",content:"Huge"}),e(R(M),{size:"massive",content:"Massive"})]),_:1}))}},NC=`<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
</template>`,LC={__name:"FloatedDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Floated",code:NC},{description:i(()=>[a(" A button can be aligned to the left or right of its container ")]),example:i(()=>[e(R(M),{floated:"left",content:"Left Floated"}),e(R(M),{floated:"right",content:"Right Floated"})]),_:1}))}},OC=`<template>
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
</template>`,HC={__name:"ColoredDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Colored",code:OC},{description:i(()=>[a(" A button can have different colors ")]),example:i(()=>[e(R(M),{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(R(M),{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(R(M),{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(R(M),{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(R(M),{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(R(M),{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(R(M),{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(R(M),{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(R(M),{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(R(M),{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(R(M),{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(R(M),{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(R(M),{color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1}))}},jC=`<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
</template>`,qC={__name:"CompactDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Compact",code:jC},{description:i(()=>[a(" A button can reduce its padding to fit into tighter spaces ")]),example:i(()=>[e(R(M),{compact:"",content:"Hold"}),e(R(M),{compact:"",icon:"pause"}),e(R(M),{compact:"",labeled:"",icon:"pause",content:"Pause"})]),_:1}))}},UC=`<template>
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
<\/script>`,GC={__name:"ToggleDoc",setup(t){const l=H(!1);return(n,s)=>(I(),te(he,{label:"Toggle",code:UC},{description:i(()=>[a(" A button can be formatted to toggle on and off ")]),example:i(()=>[e(R(M),{toggle:"",active:l.value,onClick:()=>l.value=!l.value,content:l.value?"Voted":"Vote",style:{"min-width":"200px"}},null,8,["active","onClick","content"])]),_:1}))}},YC=`<template>
  <SuiButton positive content="Positive Button" />
</template>`,JC={__name:"PositiveDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Positive",code:YC},{description:i(()=>[a(" A button can hint towards a positive consequence ")]),example:i(()=>[e(R(M),{positive:"",content:"Positive Button"})]),_:1}))}},WC=`<template>
  <SuiButton negative content="Negative Button" />
</template>`,KC={__name:"NegativeDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Negative",code:WC},{description:i(()=>[a(" A button can hint towards a negative consequence ")]),example:i(()=>[e(R(M),{negative:"",content:"Negative Button"})]),_:1}))}},XC=`<template>
  <SuiButton fluid content="Fits container" />
</template>`,QC={__name:"FluidDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Fluid",code:XC},{description:i(()=>[a(" A button can take the width of its container ")]),example:i(()=>[e(R(M),{fluid:"",content:"Fits container"})]),_:1}))}},ZC=`<template>
  <SuiButton circular icon="settings" />
</template>`,ew={__name:"CircularDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Circular",code:ZC},{description:i(()=>[a(" A button can be circular ")]),example:i(()=>[e(R(M),{circular:"",icon:"settings"})]),_:1}))}},tw=C("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?",-1),iw=`<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
</template>`,lw={__name:"VerticallyAttachedDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Vertically Attached",code:iw},{description:i(()=>[a(" A button can be attached to the top or bottom of other content ")]),example:i(()=>[e(R(M),{attached:"top",content:"Top"}),e(R(il),{attached:""},{default:i(()=>[tw]),_:1}),e(R(M),{attached:"bottom",content:"Bottom"})]),_:1}))}},aw=`<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
</template>`,nw={__name:"HorizontallyAttachedDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Horizontally Attached",code:aw},{description:i(()=>[a(" A button can be attached to the left or right of other content ")]),example:i(()=>[e(R(M),{attached:"left",content:"Left"}),e(R(M),{attached:"right",content:"Right"})]),_:1}))}},sw=`<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,ow={__name:"VerticalButtonsDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Vertical Buttons",code:sw},{description:i(()=>[a(" Groups can be formatted to appear vertically ")]),example:i(()=>[e(R(lt),{vertical:""},{default:i(()=>[e(R(M),null,{default:i(()=>[a("Feed")]),_:1}),e(R(M),null,{default:i(()=>[a("Messages")]),_:1}),e(R(M),null,{default:i(()=>[a("Events")]),_:1}),e(R(M),null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1}))}},rw=`<template>
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
</template>`,uw={__name:"StackableButtonsDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Stackable Buttons",code:rw},{description:i(()=>[a(" Horizontal groups can automatically be stacked on mobile devices ")]),example:i(()=>[e(R(lt),{stackable:""},{default:i(()=>[e(R(M),null,{default:i(()=>[a("Feed")]),_:1}),e(R(M),null,{default:i(()=>[a("Messages")]),_:1}),e(R(M),null,{default:i(()=>[a("Events")]),_:1}),e(R(M),null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1}))}},dw=`<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
</template>`,cw={__name:"LabeledIconButtonsDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Icon Buttons",code:dw},{description:i(()=>[a(" Groups can be formatted as labeled icons ")]),example:i(()=>[e(R(lt),{vertical:"",labeled:"",icon:""},{default:i(()=>[e(R(M),{icon:"pause",content:"Pause"}),e(R(M),{icon:"play",content:"Play"}),e(R(M),{icon:"shuffle",content:"Shuffle"})]),_:1})]),_:1}))}},mw=`<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
</template>`,pw={__name:"MixedGroupDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Mixed Group",code:mw},{description:i(()=>[a(" Button groups can show groups of icons ")]),example:i(()=>[e(R(lt),null,{default:i(()=>[e(R(M),{labeled:"",icon:"left chevron",content:"Back"}),e(R(M),{icon:"stop",content:"Stop"}),e(R(M),{labeled:"right"},{default:i(()=>[e(R(ut),{name:"right chevron"}),a(" Forward ")]),_:1})]),_:1})]),_:1}))}},fw=`<template>
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
</template>`,gw={__name:"EqualWidthDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Equal Width",code:fw},{description:i(()=>[a(" Groups can have their widths divided evenly ")]),example:i(()=>[e(R(lt),{widths:5},{default:i(()=>[e(R(M),null,{default:i(()=>[a("Overview")]),_:1}),e(R(M),null,{default:i(()=>[a("Specs")]),_:1}),e(R(M),null,{default:i(()=>[a("Warranty")]),_:1}),e(R(M),null,{default:i(()=>[a("Reviews")]),_:1}),e(R(M),null,{default:i(()=>[a("Support")]),_:1})]),_:1}),e(R(lt),{widths:3},{default:i(()=>[e(R(M),null,{default:i(()=>[a("Overview")]),_:1}),e(R(M),null,{default:i(()=>[a("Specs")]),_:1}),e(R(M),null,{default:i(()=>[a("Support")]),_:1})]),_:1})]),_:1}))}},hw=`<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,_w={__name:"ColoredButtonsDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Colored Buttons",code:hw},{description:i(()=>[a(" Groups can have a shared color ")]),example:i(()=>[e(R(lt),{color:"blue"},{default:i(()=>[e(R(M),null,{default:i(()=>[a("One")]),_:1}),e(R(M),null,{default:i(()=>[a("Two")]),_:1}),e(R(M),null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1}))}},bw=`<template>
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
</template>`,vw={__name:"BasicButtonsDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Basic Buttons",code:bw},{description:i(()=>[a(" A button group can be less pronounced ")]),example:i(()=>[e(R(lt),{basic:""},{default:i(()=>[e(R(M),null,{default:i(()=>[a("One")]),_:1}),e(R(M),null,{default:i(()=>[a("Two")]),_:1}),e(R(M),null,{default:i(()=>[a("Three")]),_:1})]),_:1}),e(R(lt),null,{default:i(()=>[e(R(M),{basic:"",color:"red"},{default:i(()=>[a("One")]),_:1}),e(R(M),{basic:"",color:"blue"},{default:i(()=>[a("Two")]),_:1}),e(R(M),{basic:"",color:"green"},{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1}))}},yw=`<template>
  <SuiButtonGroup size="large">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
</template>`,Cw={__name:"GroupSizesDoc",setup(t){return(l,n)=>(I(),te(he,{label:"Group Sizes",code:yw},{description:i(()=>[a(" Groups can have a shared color ")]),example:i(()=>[e(R(lt),{size:"large"},{default:i(()=>[e(R(M),null,{default:i(()=>[a("One")]),_:1}),e(R(M),null,{default:i(()=>[a("Two")]),_:1}),e(R(M),null,{default:i(()=>[a("Three")]),_:1})]),_:1})]),_:1}))}},ww={__name:"Button",setup(t){const l=[{id:"button",label:"Button",category:"Types",component:aC},{id:"emphasis",label:"Emphasis",category:"Types",component:sC},{id:"animated",label:"Animated",category:"Types",component:rC},{id:"labeled",label:"Labeled",category:"Types",component:dC},{id:"icon",label:"Icon",category:"Types",component:mC},{id:"labeled-icon",label:"Labeled Icon",category:"Types",component:fC},{id:"basic",label:"Basic",category:"Types",component:hC},{id:"tertiary",label:"Tertiary",category:"Types",component:bC},{id:"inverted",label:"Inverted",category:"Types",component:yC},{id:"buttons",label:"Buttons",category:"Groups",component:wC},{id:"icon-buttons",label:"Icon Buttons",category:"Groups",component:AC},{id:"content",label:"Content",category:"Content",component:TC},{id:"active",label:"Active",category:"States",component:EC},{id:"disabled",label:"Disabled",category:"States",component:PC},{id:"loading",label:"Loading",category:"States",component:DC},{id:"social",label:"Social",category:"Variations",component:IC},{id:"size",label:"Size",category:"Variations",component:FC},{id:"floated",label:"Floated",category:"Variations",component:LC},{id:"colored",label:"Colored",category:"Variations",component:HC},{id:"compact",label:"Compact",category:"Variations",component:qC},{id:"toggle",label:"Toggle",category:"Variations",component:GC},{id:"positive",label:"Positive",category:"Variations",component:JC},{id:"negative",label:"Negative",category:"Variations",component:KC},{id:"fluid",label:"Fluid",category:"Variations",component:QC},{id:"circular",label:"Circular",category:"Variations",component:ew},{id:"vertically-attached",label:"Vertically Attached",category:"Variations",component:lw},{id:"horizontally-attached",label:"Horizontally Attached",category:"Variations",component:nw},{id:"vertical-buttons",label:"Vertical Buttons",category:"Group Variations",component:ow},{id:"stackable-buttons",label:"Stackable Buttons",category:"Group Variations",component:uw},{id:"labeled-icon-buttons",label:"Labeled Icon Buttons",category:"Group Variations",component:cw},{id:"mixed-group",label:"Mixed Group",category:"Group Variations",component:pw},{id:"equal-width",label:"Equal Width",category:"Group Variations",component:gw},{id:"colored-buttons",label:"Colored Buttons",category:"Group Variations",component:_w},{id:"basic-buttons",label:"Basic Buttons",category:"Group Variations",component:vw},{id:"group-sizes",label:"Group Sizes",category:"Group Variations",component:Cw}];return(n,s)=>(I(),te(Fm,{title:"Button",description:"A button indicates a possible user action","component-docs":l}))}},Sw=E({name:"DocExample",components:{Prism:Vm},props:{title:String,description:String,code:String},setup(){const t=H(!1);return{active:t,toggle:()=>t.value=!t.value}}}),Aw={class:"example"};function kw(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-grid-column"),r=_("sui-icon"),g=_("sui-grid-row"),c=_("prism"),h=_("sui-grid");return I(),re("div",Aw,[e(h,{columns:2},{default:i(()=>[e(g,null,{default:i(()=>[e(o,null,{default:i(()=>[e(m,{as:"h3"},{default:i(()=>[a(Be(t.title)+" ",1),e(p,null,{default:i(()=>[a(Be(t.description),1)]),_:1})]),_:1})]),_:1}),e(o,{textAlign:"right"},{default:i(()=>[e(r,{name:"code",color:"grey",onClick:t.toggle,link:""},null,8,["onClick"])]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(o,{width:16},{default:i(()=>[Xi(t.$slots,"default",{},void 0,!0)]),_:3}),t.active?(I(),te(o,{key:0,width:16},{default:i(()=>[e(c,{language:"markup"},{default:i(()=>[a(Be(t.code),1)]),_:1})]),_:1})):Js("",!0)]),_:3})]),_:3})])}const $e=ge(Sw,[["render",kw],["__scopeId","data-v-fcfb6a67"]]),Bw=E({name:"ContainerDoc",components:{DocExample:$e},setup(){return{containerExample:`<template>
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
</template>`}}}),no=t=>(Ds("data-v-3696fd53"),t=t(),Ms(),t),$w={class:"intro"},Tw=no(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),xw=no(()=>C("p",null," Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ",-1)),Ew=no(()=>C("p",null," Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today. ",-1));function Rw(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("doc-example");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",$w,[e(m,{as:"h1"},{default:i(()=>[a("Container "),e(p,null,{default:i(()=>[a("A container limits content to a maximum width")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(f,{title:"Container",description:"A standard container",code:t.containerExample},{default:i(()=>[e(h,null,{default:i(()=>[Tw]),_:1})]),_:1},8,["code"]),e(f,{title:"Text Container",description:"A container can reduce its maximum width to more naturally accommodate a single column of text",code:t.textContainerExample},{default:i(()=>[e(h,{text:""},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[a("Header")]),_:1}),xw]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(f,{title:"Text Alignment",description:"A container can specify its text alignment",code:t.textAlignmentExample},{default:i(()=>[C("div",null,[e(h,{textAlign:"left"},{default:i(()=>[a("Left Aligned")]),_:1}),e(h,{textAlign:"center"},{default:i(()=>[a("Center Aligned")]),_:1}),e(h,{textAlign:"right"},{default:i(()=>[a("Right Aligned")]),_:1})])]),_:1},8,["code"]),e(f,{title:"Fluid",description:"A fluid container has no maximum width",code:t.fluidExample},{default:i(()=>[e(h,{fluid:""},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[a("Dogs Roles with Humans")]),_:1}),Ew]),_:1})]),_:1},8,["code"])]),_:1})])}const Pw=ge(Bw,[["render",Rw],["__scopeId","data-v-3696fd53"]]),Te="/vue-fomantic-ui/images/wireframe/short-paragraph.png",zw=E({name:"DividerDoc",components:{DocExample:$e},setup(){return{dividerCode:`<div>
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
</sui-segment>`}}}),Dw={class:"intro"};function Mw(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-image"),y=_("doc-example"),S=_("sui-grid-column"),B=_("sui-grid");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Dw,[e(m,{as:"h1"},{default:i(()=>[a("Divider "),e(p,null,{default:i(()=>[a("A divider visually segments content into groups")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Divider",description:"A standard divider",code:t.dividerCode},{default:i(()=>[C("div",null,[e(f,{src:Te}),e(o),e(f,{src:Te})])]),_:1},8,["code"]),e(y,{title:"Vertical Divider",description:"A divider can segment content vertically",code:t.verticalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e(B,{columns:2,relaxed:"very"},{default:i(()=>[e(S,null,{default:i(()=>[e(f,{src:Te})]),_:1}),e(S,null,{default:i(()=>[e(f,{src:Te})]),_:1})]),_:1}),e(o,{vertical:""},{default:i(()=>[a("and")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Divider",description:"A divider can segment content horizontally",code:t.horizontalDividerCode},{default:i(()=>[e(v,null,{default:i(()=>[e(B,{relaxed:"very"},{default:i(()=>[e(S,null,{default:i(()=>[e(f,{src:Te})]),_:1})]),_:1}),e(o,{horizontal:""},{default:i(()=>[a("and")]),_:1}),e(B,{relaxed:"very"},{default:i(()=>[e(S,null,{default:i(()=>[e(f,{src:Te})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Alignment",description:"A horizontal divider can be aligned",code:t.horizontalAlignmentCode},{default:i(()=>[C("div",null,[e(o,{horizontal:"",textAlign:"left"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[e(r,{name:"left align"}),a(" Left Aligned ")]),_:1})]),_:1}),e(o,{horizontal:"",textAlign:"center"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[e(r,{name:"center align"}),a(" Center Aligned ")]),_:1})]),_:1}),e(o,{horizontal:"",textAlign:"right"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[e(r,{name:"right align"}),a(" Right Aligned ")]),_:1})]),_:1})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Inverted",description:"A divider can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(f,{src:Te}),e(o,{inverted:""}),e(f,{src:Te})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fitted",description:"A divider can be fitted, without any space above or below it",code:t.fittedCode},{default:i(()=>[e(v,null,{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. "),e(o,{fitted:""}),a(" Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Hidden",description:"A hidden divider divides content without creating a dividing line",code:t.hiddenCode},{default:i(()=>[C("div",null,[e(m,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(f,{src:Te}),e(o,{hidden:""}),e(m,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(f,{src:Te})])]),_:1},8,["code"]),e(y,{title:"Section",description:"A divider can provide greater margins to divide sections of content",code:t.sectionCode},{default:i(()=>[C("div",null,[e(m,{as:"h3"},{default:i(()=>[a("Section One")]),_:1}),e(f,{src:Te}),e(o,{section:""}),e(m,{as:"h3"},{default:i(()=>[a("Section Two")]),_:1}),e(f,{src:Te})])]),_:1},8,["code"]),e(y,{title:"Clearing",description:"A divider can clear the contents above it",code:t.clearingCode},{default:i(()=>[e(v,null,{default:i(()=>[e(m,{floated:"right"},{default:i(()=>[a("Floated Content")]),_:1}),e(o,{clearing:""}),e(f,{src:Te})]),_:1})]),_:1},8,["code"])]),_:1})])}const Iw=ge(zw,[["render",Mw],["__scopeId","data-v-3a1972e7"]]),Vw=E({name:"EmojiDoc",components:{DocExample:$e},setup(){return{disabledCode:`<sui-segment basic>
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
</sui-segment>`}}}),Fw={class:"intro"},Nw=C("br",null,null,-1),Lw=C("br",null,null,-1),Ow=C("br",null,null,-1),Hw=C("br",null,null,-1),jw=C("br",null,null,-1);function qw(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-emoji"),y=_("doc-example"),S=_("sui-button"),B=_("sui-label");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Fw,[e(m,{as:"h1"},{default:i(()=>[a("Emoji "),e(p,null,{default:i(()=>[a(" An emoji is a glyph used to represent an emotional state ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Disabled",description:"An emoji can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(f,{name:"anguished",disabled:""})]),_:1})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An emoji can be used as a simple loader",code:t.loadingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(f,{name:"angel",loading:""}),e(f,{name:"blush",loading:""}),e(f,{name:"grin",loading:""})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Size",description:"An emoji can vary in size",code:t.sizeCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(f,{name:"relaxed",size:"small"}),a(" Small "),Nw,e(f,{name:"relaxed",size:"medium"}),a(" Medium "),Lw,e(f,{name:"relaxed",size:"large"}),a(" Large "),Ow,e(f,{name:"relaxed",size:"big"}),a(" Big ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Autosizing",description:"If no specific size class is given, all emojis are automatically sized according to the current element font-size",code:t.autosizingCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(m,{size:"small"},{default:i(()=>[a("Within a header "),e(f,{name:"relaxed"})]),_:1}),e(S,{size:"large"},{default:i(()=>[a("Within a button "),e(f,{name:"relaxed"})]),_:1}),Hw,jw,e(B,{size:"massive"},{default:i(()=>[a("Within a label "),e(f,{name:"relaxed"})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link",description:"An emoji can be formatted as a link",code:t.linkCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[e(f,{name:"slight_smile",link:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const Uw=ge(Vw,[["render",qw]]),Gw=E({name:"FlagDoc",components:{DocExample:$e},setup(){return{flagCode:`<div>
  <sui-flag name="ae" />
  <sui-flag name="france" />
  <sui-flag name="myanmar" />
</div>`}}}),Yw={class:"intro"};function Jw(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-flag"),y=_("doc-example");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Yw,[e(m,{as:"h1"},{default:i(()=>[a("Flag "),e(p,null,{default:i(()=>[a(" A flag is used to represent a political state ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(y,{title:"Flag",description:"A flag can use the two digit country code, the full name, or a common alias",code:t.flagCode},{default:i(()=>[C("div",null,[e(f,{name:"ae"}),e(f,{name:"france"}),e(f,{name:"myanmar"})])]),_:1},8,["code"])]),_:1})])}const Ww=ge(Gw,[["render",Jw]]),Kw="/vue-fomantic-ui/images/icons/school.png",Xw=E({name:"HeaderDoc",components:{DocExample:$e},setup(){return{pageHeaderCode:`<div>
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
</sui-segment>`}}}),Qw={class:"intro"},Zw=C("span",null,"$10.99",-1);function eS(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("doc-example"),y=_("sui-header-content"),S=_("sui-image");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",Qw,[e(m,{as:"h1"},{default:i(()=>[a("Header "),e(p,null,{default:i(()=>[a(" A header provides a short summary of content ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(f,{title:"Page Headers",description:"Headers may be oriented to give the hierarchy of a section in the context of the page",code:t.pageHeaderCode},{default:i(()=>[C("div",null,[e(m,{as:"h1"},{default:i(()=>[a("First header")]),_:1}),e(m,{as:"h2"},{default:i(()=>[a("Second header")]),_:1}),e(m,{as:"h3"},{default:i(()=>[a("Third header")]),_:1}),e(m,{as:"h4"},{default:i(()=>[a("Fourth header")]),_:1}),e(m,{as:"h5"},{default:i(()=>[a("Fifth header")]),_:1})])]),_:1},8,["code"]),e(f,{title:"Content Headers",description:"Headers may be oriented to give the importance of a section in the context of the content that surrounds it",code:t.contentHeaderCode},{default:i(()=>[C("div",null,[e(m,{size:"huge"},{default:i(()=>[a("Huge Header")]),_:1}),e(m,{size:"large"},{default:i(()=>[a("Large Header")]),_:1}),e(m,{size:"medium"},{default:i(()=>[a("Medium Header")]),_:1}),e(m,{size:"small"},{default:i(()=>[a("Small Header")]),_:1}),e(m,{size:"tiny"},{default:i(()=>[a("Tiny Header")]),_:1})])]),_:1},8,["code"]),e(f,{title:"Icon Headers",description:"A header can be formatted to emphasize an icon",code:t.iconHeadersCode},{default:i(()=>[e(m,{icon:""},{default:i(()=>[e(r,{name:"settings"}),e(y,null,{default:i(()=>[a(" AccountSettings "),e(p,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Sub Headers",description:"Headers may be formatted to label smaller or de-emphasized content",code:t.subHeadersCode},{default:i(()=>[C("div",null,[e(m,{as:"h2",sub:""},{default:i(()=>[a("Price")]),_:1}),Zw])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(f,{title:"Image",description:"A header may contain an image",code:t.imageCode},{default:i(()=>[e(m,null,{default:i(()=>[e(S,{src:Kw}),e(y,null,{default:i(()=>[a("Learn More")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Icon",description:"A header may contain an icon",code:t.iconCode},{default:i(()=>[e(m,null,{default:i(()=>[e(r,{name:"plug"}),e(y,null,{default:i(()=>[a("Uptime Guarantee")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Subheader",description:"Headers may contain subheaders",code:t.subheaderCode},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[a(" AccountSettings "),e(p,null,{default:i(()=>[a(" Manage your account settings and set e-mail preferences. ")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(f,{title:"Disabled",description:"A header can show that it is inactive",code:t.disabledCode},{default:i(()=>[e(m,{disabled:""},{default:i(()=>[a("Disabled Header")]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(f,{title:"Dividing",description:"A header can be formatted to divide itself from the content below it",code:t.dividingCode},{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[a("Dividing Header")]),_:1})]),_:1},8,["code"]),e(f,{title:"Block",description:"A header can be formatted to appear inside a content block",code:t.blockCode},{default:i(()=>[e(m,{as:"h3",block:""},{default:i(()=>[a("Block Header")]),_:1})]),_:1},8,["code"]),e(f,{title:"Attached",description:"A header can be attached to other content, like a segment",code:t.attachedCode},{default:i(()=>[C("div",null,[e(m,{as:"h2",attached:"top"},{default:i(()=>[a("Attached Header")]),_:1}),e(v,{attached:""},{default:i(()=>[a(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),_:1})])]),_:1},8,["code"]),e(f,{title:"Floating",description:"A header can sit to the left or right of other content",code:t.floatingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(m,{as:"h3",floated:"right"},{default:i(()=>[a("Go Forward")]),_:1}),e(m,{as:"h3",floated:"left"},{default:i(()=>[a("Go Back")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Text Alignment",description:"A header can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[e(v,null,{default:i(()=>[e(m,{as:"h3",textAlign:"right"},{default:i(()=>[a("Right")]),_:1}),e(m,{as:"h3",textAlign:"left"},{default:i(()=>[a("Left")]),_:1}),e(m,{as:"h3",textAlign:"justified"},{default:i(()=>[a(" This should take up the full width even if only one line ")]),_:1}),e(m,{as:"h3",textAlign:"center"},{default:i(()=>[a("Center")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Colored",description:"A header can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(m,{as:"h4",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(m,{as:"h4",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(m,{as:"h4",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(m,{as:"h4",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(m,{as:"h4",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(m,{as:"h4",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(m,{as:"h4",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(m,{as:"h4",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(m,{as:"h4",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(m,{as:"h4",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(m,{as:"h4",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(m,{as:"h4",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(m,{as:"h4",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(m,{as:"h4",color:"grey"},{default:i(()=>[a("Grey")]),_:1})])]),_:1},8,["code"]),e(f,{title:"Inverted",description:"A header can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(m,{as:"h4",color:"red",inverted:""},{default:i(()=>[a("Red")]),_:1}),e(m,{as:"h4",color:"orange",inverted:""},{default:i(()=>[a("Orange")]),_:1}),e(m,{as:"h4",color:"yellow",inverted:""},{default:i(()=>[a("Yellow")]),_:1}),e(m,{as:"h4",color:"olive",inverted:""},{default:i(()=>[a("Olive")]),_:1}),e(m,{as:"h4",color:"green",inverted:""},{default:i(()=>[a("Green")]),_:1}),e(m,{as:"h4",color:"teal",inverted:""},{default:i(()=>[a("Teal")]),_:1}),e(m,{as:"h4",color:"blue",inverted:""},{default:i(()=>[a("Blue")]),_:1}),e(m,{as:"h4",color:"purple",inverted:""},{default:i(()=>[a("Purple")]),_:1}),e(m,{as:"h4",color:"violet",inverted:""},{default:i(()=>[a("Violet")]),_:1}),e(m,{as:"h4",color:"pink",inverted:""},{default:i(()=>[a("Pink")]),_:1}),e(m,{as:"h4",color:"brown",inverted:""},{default:i(()=>[a("Brown")]),_:1}),e(m,{as:"h4",color:"grey",inverted:""},{default:i(()=>[a("Grey")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const tS=ge(Xw,[["render",eS]]),iS=E({name:"IconDoc",components:{DocExample:$e},setup(){return{disabledCode:'<sui-icon name="users" disabled />',loadingCode:`<div>
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
</sui-icon-group>`}}}),lS={class:"intro"},aS=C("br",null,null,-1),nS=C("br",null,null,-1),sS=C("br",null,null,-1),oS=C("br",null,null,-1),rS=C("br",null,null,-1),uS=C("br",null,null,-1);function dS(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("doc-example"),y=_("sui-icon-group");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",lS,[e(m,{as:"h1"},{default:i(()=>[a("Icon "),e(p,null,{default:i(()=>[a(" An icon is a glyph used to represent something else ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(f,{title:"Disabled",description:"An icon can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(r,{name:"users",disabled:""})]),_:1},8,["code"]),e(f,{title:"Loading",description:"An icon can be used as a simple loader",code:t.loadingCode},{default:i(()=>[C("div",null,[e(r,{name:"spinner",loading:""}),e(r,{name:"notched circle",loading:""}),e(r,{name:"asterisk",loading:""})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(f,{title:"Fitted",description:"An icon can be fitted, without any space to the left or right of it",code:t.fittedCode},{default:i(()=>[C("div",null,[a(" This icon "),e(r,{name:"help",fitted:""}),a(" is fitted. "),aS,a(" This icon "),e(r,{name:"help"}),a(" is not. ")])]),_:1},8,["code"]),e(f,{title:"Size",description:"An icon can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(r,{name:"home",size:"mini"}),e(r,{name:"home",size:"tiny"}),e(r,{name:"home",size:"small"}),nS,e(r,{name:"home"}),sS,e(r,{name:"home",size:"large"}),oS,e(r,{name:"home",size:"big"}),rS,e(r,{name:"home",size:"huge"}),uS,e(r,{name:"home",size:"massive"})])]),_:1},8,["code"]),e(f,{title:"Link",description:"An icon can be formatted as a link",code:t.linkCode},{default:i(()=>[C("div",null,[e(r,{name:"close",link:""}),e(r,{name:"help",link:""})])]),_:1},8,["code"]),e(f,{title:"Flipped",description:"An icon can be flipped",code:t.flippedCode},{default:i(()=>[C("div",null,[e(r,{name:"cloud",flipped:"horizontally"}),e(r,{name:"cloud",flipped:"vertically"})])]),_:1},8,["code"]),e(f,{title:"Rotated",description:"An icon can be rotated",code:t.rotatedCode},{default:i(()=>[C("div",null,[e(r,{name:"cloud",rotated:"clockwise"}),e(r,{name:"cloud",rotated:"counterclockwise"})])]),_:1},8,["code"]),e(f,{title:"Circular",description:"An icon can be formatted to appear circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(r,{name:"users",circular:""}),e(r,{name:"users",color:"teal",circular:""}),e(r,{name:"users",inverted:"",circular:""}),e(r,{name:"users",color:"teal",inverted:"",circular:""})])]),_:1},8,["code"]),e(f,{title:"Bordered",description:"An icon can be formatted to appear bordered",code:t.borderedCode},{default:i(()=>[C("div",null,[e(r,{name:"users",bordered:""}),e(r,{name:"users",bordered:"",color:"teal"}),e(r,{name:"users",inverted:"",bordered:"",color:"black"}),e(r,{name:"users",inverted:"",bordered:"",color:"teal"})])]),_:1},8,["code"]),e(f,{title:"Colored",description:"An icon can be formatted with different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(r,{name:"users",color:"primary"}),e(r,{name:"users",color:"secondary"}),e(r,{name:"users",color:"red"}),e(r,{name:"users",color:"orange"}),e(r,{name:"users",color:"yellow"}),e(r,{name:"users",color:"olive"}),e(r,{name:"users",color:"green"}),e(r,{name:"users",color:"teal"}),e(r,{name:"users",color:"blue"}),e(r,{name:"users",color:"violet"}),e(r,{name:"users",color:"purple"}),e(r,{name:"users",color:"pink"}),e(r,{name:"users",color:"brown"}),e(r,{name:"users",color:"grey"}),e(r,{name:"users",color:"black"})])]),_:1},8,["code"]),e(f,{title:"Inverted",description:"An icon can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(r,{name:"users",inverted:""}),e(r,{name:"users",inverted:"",color:"primary"}),e(r,{name:"users",inverted:"",color:"secondary"}),e(r,{name:"users",inverted:"",color:"red"}),e(r,{name:"users",inverted:"",color:"orange"}),e(r,{name:"users",inverted:"",color:"yellow"}),e(r,{name:"users",inverted:"",color:"olive"}),e(r,{name:"users",inverted:"",color:"green"}),e(r,{name:"users",inverted:"",color:"teal"}),e(r,{name:"users",inverted:"",color:"blue"}),e(r,{name:"users",inverted:"",color:"violet"}),e(r,{name:"users",inverted:"",color:"purple"}),e(r,{name:"users",inverted:"",color:"pink"}),e(r,{name:"users",inverted:"",color:"brown"}),e(r,{name:"users",inverted:"",color:"grey"})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(f,{title:"Icons",description:"Several icons can be used together as a group",code:t.iconsCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(r,{name:"circle outline",size:"big"}),e(r,{name:"user"})]),_:1})]),_:1},8,["code"]),e(f,{title:"Corner Icon",description:"A group of icons can display a smaller corner icon",code:t.cornerIconCode},{default:i(()=>[e(y,{size:"huge"},{default:i(()=>[e(r,{name:"puzzle"}),e(r,{name:"add",corner:""})]),_:1})]),_:1},8,["code"])]),_:1})])}const cS=ge(iS,[["render",dS]]),Q="/vue-fomantic-ui/images/wireframe/image.png",ua="/vue-fomantic-ui/images/wireframe/image-text.png",vl="/vue-fomantic-ui/images/wireframe/white-image.png",_t="/vue-fomantic-ui/images/wireframe/square-image.png",mS=E({name:"ImageDoc",components:{DocExample:$e},setup(){return{imageCode:'<sui-image src="/images/image.png" size="small" />',imageLinkCode:`<sui-image
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
</sui-image-group>`}}}),pS={class:"intro"},fS=C("span",null,"Username",-1),gS=C("span",null,"Top Aligned",-1),hS=C("span",null,"Middle Aligned",-1),_S=C("span",null,"Bottom Aligned",-1),bS=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),vS=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),yS=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),CS=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),wS=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),SS=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1);function AS(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-image"),y=_("doc-example"),S=_("sui-image-group");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",pS,[e(m,{as:"h1"},{default:i(()=>[a("Image "),e(p,null,{default:i(()=>[a(" An image is a graphic representation of something ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Image",description:"An image",code:t.imageCode},{default:i(()=>[e(f,{src:Q,size:"small"})]),_:1},8,["code"]),e(y,{title:"Image Link",description:"An image can be formatted to link to other content",code:t.imageLinkCode},{default:i(()=>[e(f,{as:"a",size:"medium",src:ua,href:"https://google.com",target:"_blank"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Hidden",description:"An image can be hidden",code:t.hiddenCode},{default:i(()=>[e(f,{hidden:"",src:Q,size:"small"})]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An image can show that it is disabled and cannot be selected",code:t.disabledCode},{default:i(()=>[e(f,{disabled:"",src:Q,size:"small"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Avatar",description:"An image may be formatted to appear inline with text as an avatar",code:t.avatarCode},{default:i(()=>[C("div",null,[e(f,{avatar:"",src:Q}),fS])]),_:1},8,["code"]),e(y,{title:"Bordered",description:"An image may include a border to emphasize the edges of white or transparent content",code:t.borderedCode},{default:i(()=>[e(f,{bordered:"",size:"medium",src:vl})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An image can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(f,{fluid:"",src:Q})]),_:1},8,["code"]),e(y,{title:"Rounded",description:"An image may appear rounded",code:t.roundedCode},{default:i(()=>[e(f,{rounded:"",size:"medium",src:Q})]),_:1},8,["code"]),e(y,{title:"Circular",description:"An image may appear circular",code:t.circularCode},{default:i(()=>[e(f,{circular:"",size:"medium",src:_t})]),_:1},8,["code"]),e(y,{title:"Vertically Aligned",description:"An image can specify its vertical alignment",code:t.verticallyAlignedCode},{default:i(()=>[C("div",null,[e(f,{verticalAlign:"top",size:"tiny",src:_t}),gS,e(o),e(f,{verticalAlign:"middle",size:"tiny",src:_t}),hS,e(o),e(f,{verticalAlign:"bottom",size:"tiny",src:_t}),_S])]),_:1},8,["code"]),e(y,{title:"Centered",description:"An image can appear centered in a content block",code:t.centeredCode},{default:i(()=>[e(v,null,{default:i(()=>[e(f,{centered:"",size:"medium",src:Q}),bS,vS,e(f,{centered:"",size:"small",src:ua}),yS]),_:1})]),_:1},8,["code"]),e(y,{title:"Spaced",description:"An image can specify that it needs an additional spacing to separate it from nearby content",code:t.spacedCode},{default:i(()=>[e(v,null,{default:i(()=>[C("p",null,[a("Te eum doming eirmod, nominati pertinacia "),e(f,{spaced:"",size:"mini",src:Q}),a(" argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.")])]),_:1})]),_:1},8,["code"]),e(y,{title:"Floated",description:"An image can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(f,{floated:"left",size:"small",src:ua}),CS,e(f,{floated:"right",size:"small",src:ua}),wS,SS]),_:1})]),_:1},8,["code"]),e(y,{title:"Size",description:"An image may appear at different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(f,{size:"mini",src:Q}),e(o,{hidden:""}),e(f,{size:"tiny",src:Q}),e(o,{hidden:""}),e(f,{size:"medium",src:Q}),e(o,{hidden:""}),e(f,{size:"large",src:Q})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Size",description:"A group of images can be formatted to have the same size",code:t.sizeGroupCode},{default:i(()=>[e(S,{size:"tiny"},{default:i(()=>[e(f,{src:Q}),e(f,{src:Q}),e(f,{src:Q}),e(f,{src:Q})]),_:1})]),_:1},8,["code"])]),_:1})])}const kS=ge(mS,[["render",AS]]),BS=E({name:"InputDoc",components:{DocExample:$e},setup(){return{inputCode:'<sui-input placeholder="Search..." />',focusCode:'<sui-input focus placeholder="Search..." />',loadingCode:`<div>
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
</div>`}}}),$S={class:"intro"};function TS(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-input"),y=_("doc-example");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",$S,[e(m,{as:"h1"},{default:i(()=>[a("Input "),e(p,null,{default:i(()=>[a(" An input is a field used to elicit a response from a user ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Input",description:"A standard input",code:t.inputCode},{default:i(()=>[e(f,{placeholder:"Search..."})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(y,{title:"Focus",description:"An input field can show a user is currently interacting with it",code:t.focusCode},{default:i(()=>[e(f,{focus:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Loading",description:"An icon input field can show that it is currently loading data",code:t.loadingCode},{default:i(()=>[C("div",null,[e(f,{loading:"",placeholder:"Search..."}),e(o,{hidden:""}),e(f,{loading:"",iconPosition:"left",placeholder:"Search..."})])]),_:1},8,["code"]),e(y,{title:"Disabled",description:"An input field can show that it is disabled",code:t.disabledCode},{default:i(()=>[e(f,{disabled:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Error",description:"An input field can show the data contains errors",code:t.errorCode},{default:i(()=>[e(f,{error:"",placeholder:"Search..."})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Icon",description:"An input can be formatted with an icon",code:t.iconCode},{default:i(()=>[e(f,{icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Labeled",description:"An input can be formatted with a label",code:t.labeledCode},{default:i(()=>[C("div",null,[e(f,{label:"http://",placeholder:"mysite.com"})])]),_:1},8,["code"]),e(y,{title:"Action",description:"An input can be formatted to alert the user to an action they may perform",code:t.actionCode},{default:i(()=>[e(f,{action:"Search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Transparent",description:"A transparent input has no background",code:t.transparentCode},{default:i(()=>[e(f,{transparent:"",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"An input can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(f,{inverted:"",placeholder:"Search..."}),e(o,{inverted:""}),e(f,{inverted:"",icon:"search",iconPosition:"left",placeholder:"Search..."}),e(o,{inverted:""}),e(f,{inverted:"",transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1},8,["code"]),e(y,{title:"Fluid",description:"An input can take the size of its container",code:t.fluidCode},{default:i(()=>[e(f,{fluid:"",icon:"search",placeholder:"Search..."})]),_:1},8,["code"]),e(y,{title:"Size",description:"An input can vary in size",code:t.sizeCode},{default:i(()=>[C("div",null,[e(f,{size:"mini",icon:"search",placeholder:"Search mini"}),e(o,{hidden:""}),e(f,{size:"small",icon:"search",placeholder:"Search small"}),e(o,{hidden:""}),e(f,{size:"large",icon:"search",placeholder:"Search large"}),e(o,{hidden:""}),e(f,{size:"big",icon:"search",placeholder:"Search big"}),e(o,{hidden:""}),e(f,{size:"huge",icon:"search",placeholder:"Search huge"}),e(o,{hidden:""}),e(f,{size:"massive",icon:"search",placeholder:"Search massive"})])]),_:1},8,["code"])]),_:1})])}const xS=ge(BS,[["render",TS]]),hs="/vue-fomantic-ui/images/avatar/small/joe.jpg",Dt="/vue-fomantic-ui/images/avatar/small/elliot.jpg",Ol="/vue-fomantic-ui/images/avatar/small/stevie.jpg",Ce="/vue-fomantic-ui/images/wireframe/paragraph.png",ES=E({name:"LabelDoc",components:{DocExample:$e},setup(){return{labelCode:`<sui-label>
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
</sui-label-group>`}}}),RS={class:"intro"},PS=C("img",{src:hs},null,-1),zS=C("img",{src:Dt},null,-1),DS=C("img",{src:Ol},null,-1),MS=C("input",{type:"text",placeholder:"First name"},null,-1),IS=C("input",{type:"text",placeholder:"Last name"},null,-1),VS=C("input",{type:"text",placeholder:"Username"},null,-1),FS=C("input",{type:"password",placeholder:"Password"},null,-1),NS=C("span",null,"Account Details",-1),LS=C("span",null,"User Reviews",-1),OS=C("img",{src:Ol},null,-1),HS=C("img",{src:Dt},null,-1);function jS(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-label"),y=_("doc-example"),S=_("sui-form-field"),B=_("sui-form"),b=_("sui-image"),w=_("sui-grid-column"),k=_("sui-grid"),$=_("sui-grid-row"),x=_("sui-list-item"),D=_("sui-list"),V=_("sui-label-detail"),z=_("sui-label-group");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",RS,[e(m,{as:"h1"},{default:i(()=>[a("Label "),e(p,null,{default:i(()=>[a(" A label displays content classification ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Label",description:"A label",code:t.labelCode},{default:i(()=>[e(f,null,{default:i(()=>[e(r,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can be formatted to emphasize an image",code:t.imageCode},{default:i(()=>[C("div",null,[e(f,{as:"a",image:""},{default:i(()=>[PS,a(" Joe ")]),_:1}),e(f,{as:"a",image:""},{default:i(()=>[zS,a(" Elliot ")]),_:1}),e(f,{as:"a",image:""},{default:i(()=>[DS,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Pointing",description:"A label can point to content next to it",code:t.pointingCode},{default:i(()=>[e(B,{fluid:""},{default:i(()=>[e(S,null,{default:i(()=>[MS,e(f,{pointing:""},{default:i(()=>[a("Please enter a value")]),_:1})]),_:1}),e(o),e(S,null,{default:i(()=>[e(f,{pointing:"below"},{default:i(()=>[a("Please enter a value")]),_:1}),IS]),_:1}),e(o),e(S,{inline:""},{default:i(()=>[VS,e(f,{pointing:"left"},{default:i(()=>[a("That name is taken!")]),_:1})]),_:1}),e(o),e(S,{inline:""},{default:i(()=>[e(f,{pointing:"right"},{default:i(()=>[a("Your password must be 6 characters or more")]),_:1}),FS]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Corner",description:"A label can position itself in the corner of an element",code:t.cornerCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(b,{fluid:"",src:Q,label:{corner:"left",icon:"heart"}})]),_:1}),e(w,null,{default:i(()=>[e(b,{fluid:"",src:Q,label:{corner:"right",icon:"save",color:"red"}})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag",description:"A label can appear as a tag",code:t.tagCode},{default:i(()=>[C("div",null,[e(f,{tag:""},{default:i(()=>[a("New")]),_:1}),e(f,{tag:"",color:"red"},{default:i(()=>[a("Upcoming")]),_:1}),e(f,{tag:"",color:"teal"},{default:i(()=>[a("Featured")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Ribbon",description:"A label can appear as a ribbon attaching itself to an element",code:t.ribbonCode},{default:i(()=>[e(k,{columns:2},{default:i(()=>[e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(f,{as:"a",ribbon:"",color:"red"},{default:i(()=>[a("Overview")]),_:1}),NS,e(b,{src:Ce}),e(f,{as:"a",ribbon:"",color:"blue"},{default:i(()=>[a("Community")]),_:1}),LS,e(b,{src:Ce})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{raised:""},{default:i(()=>[e(f,{as:"a",ribbon:"right",color:"orange"},{default:i(()=>[a("Specs")]),_:1}),e(b,{src:Ce}),e(f,{as:"a",ribbon:"right",color:"teal"},{default:i(()=>[a("Reviews")]),_:1}),e(b,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Attached",description:"A label can attach to a content segment",code:t.attachedCode},{default:i(()=>[e(k,{columns:3},{default:i(()=>[e($,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(f,{attached:"top"},{default:i(()=>[a("HTML")]),_:1}),e(b,{src:Ce})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(f,{attached:"bottom"},{default:i(()=>[a("CSS")]),_:1}),e(b,{src:Ce})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(f,{attached:"top right"},{default:i(()=>[a("Code")]),_:1}),e(b,{src:Ce})]),_:1})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(f,{attached:"top left"},{default:i(()=>[a("View")]),_:1}),e(b,{src:Ce})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(f,{attached:"bottom left"},{default:i(()=>[a("User View")]),_:1}),e(b,{src:Ce})]),_:1})]),_:1}),e(w,null,{default:i(()=>[e(v,{padded:""},{default:i(()=>[e(f,{attached:"bottom right"},{default:i(()=>[a("Admin View")]),_:1}),e(b,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal",description:"A horizontal label is formatted to label content along-side it horizontally",code:t.horizontalCode},{default:i(()=>[e(D,{divided:"",selection:""},{default:i(()=>[e(x,null,{default:i(()=>[e(f,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Kumquats ")]),_:1}),e(x,null,{default:i(()=>[e(f,{color:"purple",horizontal:""},{default:i(()=>[a("Candy")]),_:1}),a(" Ice Cream ")]),_:1}),e(x,null,{default:i(()=>[e(f,{color:"red",horizontal:""},{default:i(()=>[a("Fruit")]),_:1}),a(" Orange ")]),_:1}),e(x,null,{default:i(()=>[e(f,{horizontal:""},{default:i(()=>[a("Dog")]),_:1}),a(" Poodle ")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Floating",description:"A label can float above or below another element",code:t.floatingCode},{default:i(()=>[e(c,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,{name:"mail"}),a(" Messages "),e(f,{floating:"",color:"red"},{default:i(()=>[a("22")]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(r,{name:"users"}),a(" Friends "),e(f,{floating:"",color:"teal"},{default:i(()=>[a("22")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Detail",description:"A label can contain a detail",code:t.detailCode},{default:i(()=>[e(f,null,{default:i(()=>[a(" Dogs "),e(V,null,{default:i(()=>[a("214")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Icon",description:"A label can include an icon",code:t.iconCode},{default:i(()=>[C("div",null,[e(f,{as:"a"},{default:i(()=>[e(r,{name:"mail"}),a(" Mail ")]),_:1}),e(f,{as:"a"},{default:i(()=>[a(" Tag "),e(r,{name:"delete"})]),_:1})])]),_:1},8,["code"]),e(y,{title:"Image",description:"A label can include an image",code:t.imageIncludeCode},{default:i(()=>[C("div",null,[e(f,{as:"a"},{default:i(()=>[e(b,{avatar:"",spaced:"right",src:Dt}),a(" Elliot ")]),_:1}),e(f,{as:"a"},{default:i(()=>[OS,a(" Stevie ")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Link",description:"A label can be a link or contain an item that links",code:t.linkCode},{default:i(()=>[e(f,{as:"a",link:""},{default:i(()=>[e(r,{name:"mail"}),a(" 23 ")]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Circular",description:"A label can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(f,{as:"a",circular:"",color:"red"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"orange"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"yellow"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"olive"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"green"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"teal"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"blue"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"violet"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"purple"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"pink"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"brown"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"grey"},{default:i(()=>[a("2")]),_:1}),e(f,{as:"a",circular:"",color:"black"},{default:i(()=>[a("2")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A label can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(f,{basic:"",as:"a"},{default:i(()=>[a("Basic")]),_:1}),e(f,{basic:"",as:"a",pointing:""},{default:i(()=>[a("Pointing")]),_:1}),e(f,{basic:"",as:"a",image:""},{default:i(()=>[HS,a(" Elliot ")]),_:1}),e(f,{basic:"",as:"a",pointing:"",color:"red"},{default:i(()=>[a("Red Pointing")]),_:1}),e(f,{basic:"",as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Colored",description:"A label can have different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(f,{as:"a",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(f,{as:"a",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(f,{as:"a",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(f,{as:"a",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(f,{as:"a",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(f,{as:"a",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(f,{as:"a",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(f,{as:"a",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(f,{as:"a",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(f,{as:"a",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(f,{as:"a",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(f,{as:"a",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(f,{as:"a",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(f,{as:"a",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(f,{as:"a",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Basic Tag",description:"",code:t.basicTagCode},{default:i(()=>[C("div",null,[e(f,{as:"a",basic:"",tag:"",color:"primary"},{default:i(()=>[a("Primary")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"secondary"},{default:i(()=>[a("Secondary")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"green"},{default:i(()=>[a("Green")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(f,{as:"a",basic:"",tag:"",color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(y,{title:"Size",description:"A label can be small or large",code:t.sizeCode},{default:i(()=>[C("div",null,[e(f,{size:"mini"},{default:i(()=>[a("Mini")]),_:1}),e(f,{size:"tiny"},{default:i(()=>[a("Tiny")]),_:1}),e(f,{size:"small"},{default:i(()=>[a("Small")]),_:1}),e(f,null,{default:i(()=>[a("Medium")]),_:1}),e(f,{size:"large"},{default:i(()=>[a("Large")]),_:1}),e(f,{size:"big"},{default:i(()=>[a("Big")]),_:1}),e(f,{size:"huge"},{default:i(()=>[a("Huge")]),_:1}),e(f,{size:"massive"},{default:i(()=>[a("Massive")]),_:1})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(y,{title:"Group Size",description:"Labels can share sizes together",code:t.groupSizeCode},{default:i(()=>[e(z,{size:"huge"},{default:i(()=>[e(f,null,{default:i(()=>[a("Fun")]),_:1}),e(f,null,{default:i(()=>[a("Happy")]),_:1}),e(f,null,{default:i(()=>[a("Smart")]),_:1}),e(f,null,{default:i(()=>[a("Witty")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored Group",description:"Labels can share colors together",code:t.coloredGroupCode},{default:i(()=>[e(z,{color:"blue"},{default:i(()=>[e(f,{as:"a"},{default:i(()=>[a(" Fun "),e(r,{name:"close"})]),_:1}),e(f,{as:"a"},{default:i(()=>[a(" Happy "),e(V,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Basic Group",description:"Labels can share their style together",code:t.basicGroupCode},{default:i(()=>[e(z,{basic:""},{default:i(()=>[e(f,{as:"a"},{default:i(()=>[a(" Fun "),e(r,{name:"close"})]),_:1}),e(f,{as:"a"},{default:i(()=>[a(" Happy "),e(V,null,{default:i(()=>[a("22")]),_:1})]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Smart")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Insane")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Exciting")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Tag Group",description:"Labels can share tag formatting",code:t.tagGroupCode},{default:i(()=>[e(z,{tag:""},{default:i(()=>[e(f,{as:"a"},{default:i(()=>[a("$10.00")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("$19.99")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("$24.99")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("$30.99")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("$10.25")]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"CircularGroup",description:"Labels can share shapes",code:t.circularGroupCode},{default:i(()=>[e(z,{circular:""},{default:i(()=>[e(f,null,{default:i(()=>[a("11")]),_:1}),e(f,null,{default:i(()=>[a("22")]),_:1}),e(f,null,{default:i(()=>[a("33")]),_:1}),e(f,null,{default:i(()=>[a("44")]),_:1}),e(f,null,{default:i(()=>[a("141")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const qS=ge(ES,[["render",jS]]),US="/vue-fomantic-ui/images/avatar/small/rachel.png",GS="/vue-fomantic-ui/images/avatar/small/lindsay.png",YS="/vue-fomantic-ui/images/avatar/small/matthew.png",an="/vue-fomantic-ui/images/avatar/small/jenny.jpg",JS="/vue-fomantic-ui/images/avatar/small/veronika.jpg",WS="/vue-fomantic-ui/images/avatar/small/tom.jpg",da="/vue-fomantic-ui/images/avatar/small/christian.jpg",nn="/vue-fomantic-ui/images/avatar/small/matt.jpg",yl="/vue-fomantic-ui/images/avatar/small/helen.jpg",fi="/vue-fomantic-ui/images/avatar/small/daniel.jpg",KS=E({name:"ListDoc",components:{DocExample:$e},setup(){return{listCode:`<sui-list>
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
</div>`}}}),XS={class:"intro"},QS=C("div",null,"Benefits",-1),ZS={class:"list"},eA=C("a",null,"Languages",-1),tA=C("a",null,[C("b",null,"Arrested Development")],-1),iA=C("a",null,[C("b",null,"Bob's Burgers")],-1),lA=C("a",null,[C("b",null,"The Godfather Part 2")],-1),aA=C("a",null,[C("b",null,"Twin Peaks")],-1),nA=C("a",null,[C("b",null,"Arrested Development")],-1),sA=C("a",null,[C("b",null,"Bob's Burgers")],-1),oA=C("a",null,[C("b",null,"The Godfather Part 2")],-1);function rA(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-list-item"),y=_("sui-list"),S=_("doc-example"),B=_("sui-list-list"),b=_("sui-list-header"),w=_("sui-list-description"),k=_("sui-list-content"),$=_("sui-image");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",XS,[e(m,{as:"h1"},{default:i(()=>[a("List "),e(p,null,{default:i(()=>[a(" A list is used to group related content ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"List",description:"A list groups related content",code:t.listCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[a("Apples")]),_:1}),e(f,null,{default:i(()=>[a("Pears")]),_:1}),e(f,null,{default:i(()=>[a("Oranges")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Bulleted",description:"A list can mark items with a bullet",code:t.bulletedCode},{default:i(()=>[e(y,{bulleted:""},{default:i(()=>[e(f,null,{default:i(()=>[a("Gaining Access")]),_:1}),e(f,null,{default:i(()=>[a("Inviting Friends")]),_:1}),e(f,null,{default:i(()=>[QS,C("div",ZS,[e(f,{as:"a"},{default:i(()=>[a("Link to somewhere")]),_:1}),e(f,null,{default:i(()=>[a("Rebates")]),_:1}),e(f,null,{default:i(()=>[a("Discounts")]),_:1})])]),_:1}),e(f,null,{default:i(()=>[a("Warranty")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Ordered",description:"A list can be ordered numerically",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(f,{as:"a"},{default:i(()=>[a("Getting Started")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Introduction")]),_:1}),e(f,null,{default:i(()=>[eA,e(B,null,{default:i(()=>[e(f,{as:"a"},{default:i(()=>[a("HTML")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Javascript")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("CSS")]),_:1})]),_:1})]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Review")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Link",description:"A list can be specially formatted for navigation links",code:t.linkCode},{default:i(()=>[e(y,{link:""},{default:i(()=>[e(f,{active:""},{default:i(()=>[a("Home")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("About")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Jobs")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Team")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(S,{title:"Item",description:"A list item can contain a set of items",code:t.itemCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[a("1")]),_:1}),e(f,null,{default:i(()=>[a("2")]),_:1}),e(f,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Icon",description:"A list item can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,{as:"a"},{default:i(()=>[e(r,{name:"help"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Floated Icon")]),_:1}),e(w,null,{default:i(()=>[a(" This text will always have a left margin to make sure it sits alongside your icon ")]),_:1})]),_:1})]),_:1}),e(f,{as:"a"},{default:i(()=>[e(r,{name:"right triangle"}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Icon Alignment")]),_:1}),e(w,null,{default:i(()=>[a(" Floated icons are by default top aligned. To have an icon top aligned try this example ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(r,{name:"help"}),a(" Inline Text ")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Image",description:"A list can contain an image",code:t.imageContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e($,{avatar:"",src:US}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Rachel")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),tA,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:GS}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Lindsay")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),iA,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:YS}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matthew")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),lA,a(" yesterday. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:an}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),aA,a(" 3 days ago. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:JS}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(w,null,{default:i(()=>[a(" Has not watched anything recently ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Link",description:"A list can contain links",code:t.linkContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,{as:"a"},{default:i(()=>[a("What is a FAQ?")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Who is our user?")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Where is our office located?")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"header",description:"A list item can contain a header",code:t.headerContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(b,null,{default:i(()=>[a("New York City")]),_:1}),a(" A lovely city ")]),_:1}),e(f,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Chicago")]),_:1}),a(" Also quite a lovely city ")]),_:1}),e(f,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Los Angeles")]),_:1}),a(" Sometimes can be a lovely city ")]),_:1}),e(f,null,{default:i(()=>[e(b,null,{default:i(()=>[a("San Francisco")]),_:1}),a(" What a lovely city ")]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Description",description:"A list item can contain a description",code:t.descriptionContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(r,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Krolewskie Jadlo")]),_:1}),e(w,null,{default:i(()=>[a(" An excellent polish restaurant, quick delivery and hearty, filling meals. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(r,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Xian Famous Foods")]),_:1}),e(w,null,{default:i(()=>[a(" A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(r,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Sapporo Haru")]),_:1}),e(w,null,{default:i(()=>[a(" Greenpoint's best choice for quick and delicious sushi. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(r,{name:"map marker"}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Enid's")]),_:1}),e(w,null,{default:i(()=>[a(" At night a bar, during the day a delicious brunch spot. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(S,{title:"Horizontal",description:"A list can be formatted to have items appear horizontally",code:t.horizontalVarCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(f,null,{default:i(()=>[e($,{avatar:"",src:WS}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Tom")]),_:1}),a(" Top Contributor ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:da}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian Rocha")]),_:1}),a(" Admin ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:nn}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Matt")]),_:1}),a(" Top Rated User ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Inverted",description:"A list can be inverted to appear on a dark background",code:t.invertedVarCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",relaxed:"",divided:""},{default:i(()=>[e(f,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Selection",description:"A selection list formats list items as possible choices",code:t.selectionVarCode},{default:i(()=>[e(y,{selection:"",verticalAlign:"middle"},{default:i(()=>[e(f,null,{default:i(()=>[e($,{avatar:"",src:yl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:da}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:fi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Animated",description:"A list can animate to set the current item apart from the list",code:t.animatedVarCode},{default:i(()=>[e(y,{animated:"",verticalAlign:"middle"},{default:i(()=>[e(f,null,{default:i(()=>[e($,{avatar:"",src:yl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:da}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:fi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Relaxed",description:"A list can relax its padding to provide more negative space",code:t.relaxedVarCode},{default:i(()=>[e(y,{relaxed:""},{default:i(()=>[e(f,null,{default:i(()=>[e($,{avatar:"",src:fi}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),nA,a(" just now. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:Ol}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),sA,a(" 10 hours ago. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:Dt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(w,null,{default:i(()=>[a(" Last seen watching "),oA,a(" yesterday. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Divided",description:"A list can show divisions between content",code:t.dividedVarCode},{default:i(()=>[e(y,{divided:"",verticalAlign:"middle"},{default:i(()=>[e(f,null,{default:i(()=>[e($,{avatar:"",src:fi}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:Ol}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:Dt}),e(k,null,{default:i(()=>[e(b,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Celled",description:"A list can divide its items into cells",code:t.celledVarCode},{default:i(()=>[e(y,{celled:""},{default:i(()=>[e(f,null,{default:i(()=>[e($,{avatar:"",src:yl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Snickerdoodle")]),_:1}),a(" An excellent companion ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:fi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Poodle")]),_:1}),a(" A poodle, its pretty basic ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:fi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Paulo")]),_:1}),a(" He's also a dog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Size",description:"A list can vary in size",code:t.sizeCode},{default:i(()=>[e(y,{horizontal:"",divided:"",size:"mini"},{default:i(()=>[e(f,null,{default:i(()=>[e($,{avatar:"",src:yl}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Helen")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:da}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Christian")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:fi}),e(k,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Daniel")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content Variations")]),_:1}),e(S,{title:"Vertical Aligned",description:"An element inside a list can be vertically aligned",code:t.verticalAlignedCode},{default:i(()=>[e(y,{horizontal:""},{default:i(()=>[e(f,null,{default:i(()=>[e($,{avatar:"",src:_t}),e(k,{verticalAlign:"top"},{default:i(()=>[a(" Top Aligned ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:_t}),e(k,{verticalAlign:"middle"},{default:i(()=>[a(" Middle ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e($,{avatar:"",src:_t}),e(k,{verticalAlign:"bottom"},{default:i(()=>[a(" Bottom ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Floated",description:"An list, or an element inside a list can be floated left or right",code:t.floatedCode},{default:i(()=>[C("div",null,[e(y,{floated:"right",horizontal:""},{default:i(()=>[e(f,{disabled:""},{default:i(()=>[a("© GitHub, Inc.")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Terms")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Privacy")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Contact")]),_:1})]),_:1}),e(y,{horizontal:""},{default:i(()=>[e(f,{as:"a"},{default:i(()=>[a("About Us")]),_:1}),e(f,{as:"a"},{default:i(()=>[a("Jobs")]),_:1})]),_:1})])]),_:1},8,["code"])]),_:1})])}const uA=ge(KS,[["render",rA]]),dA=E({name:"LoaderDoc",components:{DocExample:$e},setup(){return{loaderCode:`<sui-segment>
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
</sui-segment>`}}}),cA={class:"intro"};function mA(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-loader"),y=_("sui-dimmer"),S=_("sui-image"),B=_("doc-example");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",cA,[e(m,{as:"h1"},{default:i(()=>[a("Loader "),e(p,null,{default:i(()=>[a(" A loader alerts a user to wait for an activity to complete ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(B,{title:"Loader",description:"A loader",code:t.loaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(f)]),_:1}),e(S,{src:Te})]),_:1})]),_:1},8,["code"]),e(B,{title:"Text Loader",description:"A loader can contain text",code:t.textLoaderCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(f,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(S,{src:Te})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(B,{title:"Indeterminate",description:"A loader can show it's unsure of how long a task will take",code:t.indeterminateCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(f,{indeterminate:""},{default:i(()=>[a("Preparing Files")]),_:1})]),_:1}),e(S,{src:Te})]),_:1})]),_:1},8,["code"]),e(B,{title:"Active",description:"A loader can be active or visible",code:t.activeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(f,{active:""}),e(S,{src:Te})]),_:1})]),_:1},8,["code"]),e(B,{title:"Diasbled",description:"A loader can be disabled or hidden",code:t.disabledCode},{default:i(()=>[e(v,null,{default:i(()=>[e(f,{disabled:""}),e(S,{src:Te})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(B,{title:"Inline",description:"Loaders can appear inline with content",code:t.inlineCode},{default:i(()=>[e(f,{inline:"",active:""})]),_:1},8,["code"]),e(B,{title:"Inline Center",description:"Loaders can appear inline centered with content",code:t.inlineCenterCode},{default:i(()=>[e(f,{inline:"centered",active:""})]),_:1},8,["code"]),e(B,{title:"Speed",description:"Loaders can appear slow, normal or fast",code:t.speedCode},{default:i(()=>[C("div",null,[e(f,{slow:"",active:"",inline:""}),e(f,{active:"",inline:""}),e(f,{fast:"",active:"",inline:""})])]),_:1},8,["code"]),e(B,{title:"Colors",description:"Loaders can be different colors",code:t.colorsCode},{default:i(()=>[C("div",null,[e(f,{color:"primary",inline:"",active:""}),e(f,{color:"secondary",inline:"",active:""}),e(f,{color:"red",inline:"",active:""}),e(f,{color:"orange",inline:"",active:""}),e(f,{color:"yellow",inline:"",active:""}),e(f,{color:"olive",inline:"",active:""}),e(f,{color:"green",inline:"",active:""}),e(f,{color:"teal",inline:"",active:""}),e(f,{color:"blue",inline:"",active:""}),e(f,{color:"violet",inline:"",active:""}),e(f,{color:"purple",inline:"",active:""}),e(f,{color:"pink",inline:"",active:""}),e(f,{color:"brown",inline:"",active:""}),e(f,{color:"grey",inline:"",active:""}),e(f,{color:"black",inline:"",active:""})])]),_:1},8,["code"]),e(B,{title:"Size",description:"Loaders can have different sizes",code:t.sizeCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:""},{default:i(()=>[e(f,{size:"mini"},{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(S,{src:Te})]),_:1})]),_:1},8,["code"]),e(B,{title:"Inverted",description:"Loaders can have their colors inverted",code:t.invertedCode},{default:i(()=>[e(v,null,{default:i(()=>[e(y,{active:"",inverted:""},{default:i(()=>[e(f,null,{default:i(()=>[a("Loading")]),_:1})]),_:1}),e(S,{src:Te})]),_:1})]),_:1},8,["code"])]),_:1})])}const pA=ge(dA,[["render",mA]]),fA=E({name:"RailDoc",components:{DocExample:$e},setup(){return{railCode:`<sui-grid centered :columns="3">
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
</sui-grid>`}}}),gA={class:"intro"};function hA(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-image"),y=_("sui-rail"),S=_("sui-grid-column"),B=_("sui-grid"),b=_("doc-example");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",gA,[e(m,{as:"h1"},{default:i(()=>[a("Rail "),e(p,null,{default:i(()=>[a(" A rail is used to show accompanying content outside the boundaries of the main view of a site ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Rail",description:"A rail can be presented on the left or right side of a container",code:t.railCode},{default:i(()=>[e(B,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(f,{src:Te}),e(y,{position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Internal",description:"A rail can attach itself to the inside of a container",code:t.internalCode},{default:i(()=>[e(v,{textAlign:"center"},{default:i(()=>[e(f,{src:Te}),e(y,{internal:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a("Left Rail Content")]),_:1})]),_:1}),e(y,{internal:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a("Right Rail Content")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Dividing",description:"A rail can create a division between itself and a container",code:t.dividingCode},{default:i(()=>[e(B,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(f,{src:Te}),e(y,{dividing:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{dividing:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Attached",description:"A rail can appear attached to the main viewport",code:t.attachedCode},{default:i(()=>[e(B,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(f,{src:Te}),e(y,{attached:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{attached:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Close",description:"A rail can appear closer to the main viewport",code:t.closeCode},{default:i(()=>[e(B,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(f,{src:Te}),e(y,{close:"",position:"left"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Left Rail Content ")]),_:1})]),_:1}),e(y,{close:"",position:"right"},{default:i(()=>[e(v,null,{default:i(()=>[a(" Right Rail Content ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Size",description:"A rail can have different sizes",code:t.sizeCode},{default:i(()=>[e(B,{centered:"",columns:3},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[e(f,{src:Te}),e(y,{size:"small",position:"left"},{default:i(()=>[a(" Left Small Rail ")]),_:1}),e(y,{size:"large",position:"right"},{default:i(()=>[a(" Right Large Rail ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _A=ge(fA,[["render",hA]]),bA="/vue-fomantic-ui/images/avatar/large/ade.jpg",Sd="/vue-fomantic-ui/images/avatar/large/chris.jpg",_s="/vue-fomantic-ui/images/avatar/large/stevie.jpg",Ad="/vue-fomantic-ui/images/avatar/large/nan.jpg",vA=E({name:"RevealDoc",components:{DocExample:$e},setup(){return{fadeCode:`<sui-reveal animated="fade">
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
</sui-reveal>`}}}),yA={class:"intro"};function CA(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-image"),y=_("sui-reveal-content"),S=_("sui-reveal"),B=_("doc-example");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",yA,[e(m,{as:"h1"},{default:i(()=>[a("Reveal "),e(p,null,{default:i(()=>[a(" A reveal displays additional content in place of previous content when activated ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(B,{title:"Fade",description:"An element can disappear to reveal content below",code:t.fadeCode},{default:i(()=>[e(S,{animated:"fade"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(f,{size:"small",src:_t})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(f,{size:"small",src:bA})]),_:1})]),_:1})]),_:1},8,["code"]),e(B,{title:"Move",description:"An element can move in a direction to reveal content",code:t.moveCode},{default:i(()=>[e(S,{animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(f,{size:"small",src:_t})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(f,{size:"small",src:Sd})]),_:1})]),_:1})]),_:1},8,["code"]),e(B,{title:"Rotate",description:"An element can rotate to reveal content below",code:t.rotateCode},{default:i(()=>[e(S,{animated:"rotate"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(f,{circular:"",size:"small",src:_t})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(f,{circular:"",size:"small",src:_s})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(B,{title:"Active",description:"An active reveal displays its hidden content",code:t.activeCode},{default:i(()=>[e(S,{active:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(f,{size:"small",src:_t})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(f,{size:"small",src:Ad})]),_:1})]),_:1})]),_:1},8,["code"]),e(B,{title:"Disabled",description:"A disabled reveal will not animate when hovered",code:t.disabledCode},{default:i(()=>[e(S,{disabled:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(f,{size:"small",src:_t})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(f,{size:"small",src:Ad})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(B,{title:"Instant",description:"An element can show its content without delay",code:t.instantCode},{default:i(()=>[e(S,{instant:"",animated:"move"},{default:i(()=>[e(y,{visible:""},{default:i(()=>[e(f,{size:"small",src:_t})]),_:1}),e(y,{hidden:""},{default:i(()=>[e(f,{size:"small",src:Sd})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const wA=ge(vA,[["render",CA]]),SA=E({name:"SegmentDoc",components:{DocExample:$e},setup(){return{segmentCode:"<sui-segment>Pellentesque habitant morbi tristique senectus.</sui-segment>",placeholderCode:`<sui-segment placeholder>
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
</sui-segment>`}}}),AA={class:"intro"},kA=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),BA=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),$A=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1),TA=C("p",null,"Top",-1),xA=C("p",null,"Middle",-1),EA=C("p",null,"Middle",-1),RA=C("p",null,"Middle",-1),PA=C("p",null,"Bottom",-1),zA=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),DA=C("p",null,"This segment is on top",-1),MA=C("p",null,"This segment is attached on both sides",-1),IA=C("p",null,"This segment is on bottom",-1),VA=C("p",null,"Fitted Segment",-1),FA=C("p",null,"Horizontally fitted segment",-1),NA=C("p",null,"Vertically fitted segment",-1),LA=C("p",null,"I'm here to tell you something, and you will probably read me first.",-1),OA=C("p",null,"I am pretty noticeable but you might check out other content before you look at me.",-1),HA=C("p",null,"If you notice me you must be looking very hard.",-1),jA=C("p",null,"This segment will appear to the right",-1),qA=C("p",null,"This segment will appear to the left",-1),UA=C("p",null,"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",-1);function GA(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("doc-example"),y=_("sui-button"),S=_("sui-segment-group");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",AA,[e(m,{as:"h1"},{default:i(()=>[a("Segment "),e(p,null,{default:i(()=>[a(" A segment is used to create a grouping of related content ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(f,{title:"Segment",description:"A segment of content",code:t.segmentCode},{default:i(()=>[e(v,null,{default:i(()=>[a("Pellentesque habitant morbi tristique senectus.")]),_:1})]),_:1},8,["code"]),e(f,{title:"Placeholder Segment",description:"A segment can be used to reserve space for conditionally displayed content",code:t.placeholderCode},{default:i(()=>[e(v,{placeholder:""},{default:i(()=>[e(m,{icon:""},{default:i(()=>[e(r,{name:"file outline"}),a(" No documents are listed for this customer. ")]),_:1}),e(y,{color:"primary"},{default:i(()=>[a("Add Document")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Raised",description:"A segment may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(v,{raised:""},{default:i(()=>[kA]),_:1})]),_:1},8,["code"]),e(f,{title:"Stacked",description:"A segment can be formatted to show it contains multiple pages",code:t.stackedCode},{default:i(()=>[e(v,{stacked:""},{default:i(()=>[BA]),_:1})]),_:1},8,["code"]),e(f,{title:"Piled",description:"A segment can be formatted to look like a pile of pages",code:t.piledCode},{default:i(()=>[e(v,{piled:""},{default:i(()=>[$A]),_:1})]),_:1},8,["code"]),e(f,{title:"Vertical Segment",description:"A vertical segment formats content to be aligned as part of a vertical group",code:t.verticalCode},{default:i(()=>[C("div",null,[e(v,{vertical:""},{default:i(()=>[a(" Te eum doming eirmod, nominati pertinacia argumentum ad his. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Pellentesque habitant morbi tristique senectus. ")]),_:1}),e(v,{vertical:""},{default:i(()=>[a(" Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. ")]),_:1})])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(f,{title:"Segments",description:"A group of segments can be formatted to appear together",code:t.segmentsCode},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[TA]),_:1}),e(v,null,{default:i(()=>[xA]),_:1}),e(v,null,{default:i(()=>[EA]),_:1}),e(v,null,{default:i(()=>[RA]),_:1}),e(v,null,{default:i(()=>[PA]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Nested Segments",description:"A group of segments can be nested in another group of segments",code:t.nestedCode},{default:i(()=>[e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(S,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Nested Top")]),_:1}),e(v,null,{default:i(()=>[a("Nested Middle")]),_:1}),e(v,null,{default:i(()=>[a("Nested Bottom")]),_:1})]),_:1}),e(S,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Horizontal Segments",description:"A segment group can appear horizontally",code:t.horizontalCode},{default:i(()=>[e(S,{horizontal:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Left")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Right")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Raised Segments",description:"A group of segments can be raised",code:t.raisedSegmentsCode},{default:i(()=>[e(S,{raised:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Stacked Segments",description:"A group of segments can be stacked",code:t.stackedSegmentsCode},{default:i(()=>[e(S,{stacked:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Piled Segments",description:"A group of segments can be piled",code:t.piledSegmentsCode},{default:i(()=>[e(S,{piled:""},{default:i(()=>[e(v,null,{default:i(()=>[a("Top")]),_:1}),e(v,null,{default:i(()=>[a("Middle")]),_:1}),e(v,null,{default:i(()=>[a("Bottom")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(f,{title:"Disabled",description:"A segment may show its content is disabled",code:t.disabledCode},{default:i(()=>[e(v,{disabled:""},{default:i(()=>[a("Disabled content")]),_:1})]),_:1},8,["code"]),e(f,{title:"Loading",description:"A segment may show its content is being loaded",code:t.loadingCode},{default:i(()=>[e(v,{loading:""},{default:i(()=>[a("Now Loading...")]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(f,{title:"Inverted",description:"A segment can have its colors inverted for contrast",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[zA]),_:1})]),_:1},8,["code"]),e(f,{title:"Attached",description:"A segment can be attached to other content on a page",code:t.attachedCode},{default:i(()=>[C("div",null,[e(v,{attached:"top"},{default:i(()=>[DA]),_:1}),e(v,{attached:""},{default:i(()=>[MA]),_:1}),e(v,{attached:"bottom"},{default:i(()=>[IA]),_:1})])]),_:1},8,["code"]),e(f,{title:"Padded",description:"A segment can increase its padding",code:t.paddedCode},{default:i(()=>[e(v,{padded:""},{default:i(()=>[a("Padded content")]),_:1})]),_:1},8,["code"]),e(f,{title:"Fitted",description:"A segment can remove its padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[C("div",null,[e(v,{fitted:""},{default:i(()=>[VA]),_:1}),e(v,{fitted:"horizontally"},{default:i(()=>[FA]),_:1}),e(v,{fitted:"vertically"},{default:i(()=>[NA]),_:1})])]),_:1},8,["code"]),e(f,{title:"Compact",description:"A segment may take up only as much space as is necessary",code:t.compactCode},{default:i(()=>[e(v,{compact:""},{default:i(()=>[a("Compact content")]),_:1})]),_:1},8,["code"]),e(f,{title:"Colored",description:"A segment can be colored",code:t.coloredCode},{default:i(()=>[C("div",null,[e(v,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(v,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(v,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(v,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(v,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(v,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(v,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(v,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(v,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(v,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(v,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(v,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(v,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(f,{title:"Emphasis",description:"A segment can be formatted to appear more or less noticeable",code:t.emphasisCode},{default:i(()=>[C("div",null,[e(v,null,{default:i(()=>[LA]),_:1}),e(v,{secondary:""},{default:i(()=>[OA]),_:1}),e(v,{tertiary:""},{default:i(()=>[HA]),_:1})])]),_:1},8,["code"]),e(f,{title:"Circular",description:"A segment can be circular",code:t.circularCode},{default:i(()=>[C("div",null,[e(v,{circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(p,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1}),e(v,{inverted:"",circular:"",style:{width:"175px",height:"175px"}},{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[a(" Buy Now "),e(p,null,{default:i(()=>[a(" $10.99 ")]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(f,{title:"Clearing",description:"A segment can clear floated content",code:t.clearingCode},{default:i(()=>[e(v,{clearing:""},{default:i(()=>[e(y,{floated:"right"},{default:i(()=>[a("Floated")]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Floated",description:"A segment can appear to the left or right of other content",code:t.floatedCode},{default:i(()=>[C("div",null,[e(v,{floated:"right"},{default:i(()=>[jA]),_:1}),e(v,{floated:"left"},{default:i(()=>[qA]),_:1})])]),_:1},8,["code"]),e(f,{title:"Text Alignment",description:"A segment can have its text aligned to a side",code:t.textAlignCode},{default:i(()=>[C("div",null,[e(v,{textAlign:"right"},{default:i(()=>[a(" Right ")]),_:1}),e(v,{textAlign:"left"},{default:i(()=>[a(" Left ")]),_:1}),e(v,{textAlign:"center"},{default:i(()=>[a(" Center ")]),_:1})])]),_:1},8,["code"]),e(f,{title:"Basic",description:"A basic segment has no special formatting",code:t.basicCode},{default:i(()=>[e(v,{basic:""},{default:i(()=>[UA]),_:1})]),_:1},8,["code"])]),_:1})])}const YA=ge(SA,[["render",GA]]),JA=E({name:"StepDoc",components:{DocExample:$e},setup(){return{stepCode:`<sui-step-group>
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
</sui-segment>`}}}),WA={class:"intro"},KA=C("p",null,"The steps take up the entire column width",-1),XA=C("p",null,"Main content",-1);function QA(t,l,n,s,u,d){const p=_("sui-header-subheader"),m=_("sui-header"),o=_("sui-divider"),r=_("sui-icon"),g=_("sui-menu-item"),c=_("sui-menu"),h=_("sui-container"),v=_("sui-segment"),f=_("sui-step"),y=_("sui-step-group"),S=_("doc-example"),B=_("sui-step-title"),b=_("sui-step-description"),w=_("sui-step-content"),k=_("sui-grid-column"),$=_("sui-grid");return I(),re("div",null,[e(v,{vertical:""},{default:i(()=>[e(h,{class:"main"},{default:i(()=>[C("div",WA,[e(m,{as:"h1"},{default:i(()=>[a("Step "),e(p,null,{default:i(()=>[a(" A step shows the completion status of an activity in a series of activities ")]),_:1})]),_:1}),e(o,{hidden:""}),e(c,{floated:"right"},{default:i(()=>[e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"edit"})]),_:1}),e(g,{as:"a",icon:""},{default:i(()=>[e(r,{name:"github"})]),_:1})]),_:1})])]),_:1})]),_:1}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"Step",description:"A single step",code:t.stepCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[a("Shipping")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Groups")]),_:1}),e(S,{title:"Steps",description:"A set of steps",code:t.stepsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(r,{name:"truck"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,{active:""},{default:i(()=>[e(r,{name:"payment"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(f,{disabled:""},{default:i(()=>[e(r,{name:"info"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Ordered",description:"A step can show a ordered sequence of steps",code:t.orderedCode},{default:i(()=>[e(y,{ordered:""},{default:i(()=>[e(f,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,{completed:""},{default:i(()=>[e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(f,{active:""},{default:i(()=>[e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Vertical",description:"A step can be displayed stacked vertically",code:t.verticalCode},{default:i(()=>[e(y,{vertical:""},{default:i(()=>[e(f,{completed:""},{default:i(()=>[e(r,{name:"truck"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,{completed:""},{default:i(()=>[e(r,{name:"credit card"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(f,{active:""},{default:i(()=>[e(r,{name:"info"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(S,{title:"Description",description:"A step can contain a description",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Icon",description:"A step can contain an icon",code:t.iconCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(r,{name:"truck"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Link",description:"A step can link",code:t.linkCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,{link:""},{default:i(()=>[e(r,{name:"truck"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(S,{title:"Active",description:"A step can be highlighted as active",code:t.activeCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,{active:""},{default:i(()=>[e(r,{name:"payment"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Completed",description:"A step can show that a user has completed it",code:t.completedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,{completed:""},{default:i(()=>[e(r,{name:"payment"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Disabled",description:"A step can show that it cannot be selected",code:t.disabledCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,{disabled:""},{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(S,{title:"Stackable",description:"A step can stack vertically only on smaller screens",code:t.stackableCode},{default:i(()=>[e(y,{stackable:"tablet"},{default:i(()=>[e(f,null,{default:i(()=>[e(r,{name:"plane"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,{active:""},{default:i(()=>[e(r,{name:"dollar"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(f,{disabled:""},{default:i(()=>[e(r,{name:"info circle"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Unstackable",description:"A step can prevent itself from stacking on mobile",code:t.unstackableCode},{default:i(()=>[e(y,{unstackable:""},{default:i(()=>[e(f,null,{default:i(()=>[e(r,{name:"plane"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,{active:""},{default:i(()=>[e(r,{name:"dollar"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(f,{disabled:""},{default:i(()=>[e(r,{name:"info circle"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Fluid",description:"A fluid step takes up the width of its container",code:t.fluidCode},{default:i(()=>[e($,{columns:2},{default:i(()=>[e(k,null,{default:i(()=>[e(y,{fluid:"",vertical:""},{default:i(()=>[e(f,{completed:""},{default:i(()=>[e(r,{name:"truck"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,{active:""},{default:i(()=>[e(r,{name:"dollar"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:i(()=>[KA]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Attached",description:"Steps can be attached to other elements",code:t.attachedCode},{default:i(()=>[C("div",null,[e(y,{attached:"top"},{default:i(()=>[e(f,null,{default:i(()=>[e(r,{name:"truck"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,{active:""},{default:i(()=>[e(r,{name:"payment"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{attached:""},{default:i(()=>[XA]),_:1}),e(y,{attached:"bottom"},{default:i(()=>[e(f,null,{default:i(()=>[e(r,{name:"truck"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,{active:""},{default:i(()=>[e(r,{name:"payment"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(S,{title:"Evenly Divided",description:"Steps can be divided evenly inside their parent",code:t.evenlyDividedCode},{default:i(()=>[e(y,{widths:2},{default:i(()=>[e(f,{active:""},{default:i(()=>[e(r,{name:"payment"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(f,{disabled:""},{default:i(()=>[e(r,{name:"info"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Size",description:"Steps can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"mini"},{default:i(()=>[e(f,{active:""},{default:i(()=>[e(r,{name:"payment"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1})]),_:1})]),_:1}),e(f,{disabled:""},{default:i(()=>[e(r,{name:"info"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Confirm Order")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Inverted",description:"A step's color can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(y,{inverted:"",vertical:""},{default:i(()=>[e(f,{completed:""},{default:i(()=>[e(r,{name:"truck"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Shipping")]),_:1}),e(b,null,{default:i(()=>[a(" Choose your shipping options ")]),_:1})]),_:1})]),_:1}),e(f,{completed:""},{default:i(()=>[e(r,{name:"credit card"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Billing")]),_:1}),e(b,null,{default:i(()=>[a(" Enter billing information ")]),_:1})]),_:1})]),_:1}),e(f,{active:""},{default:i(()=>[e(r,{name:"info"}),e(w,null,{default:i(()=>[e(B,null,{default:i(()=>[a("Confirm Order")]),_:1}),e(b,null,{default:i(()=>[a(" Verify order details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const ZA=ge(JA,[["render",QA]]),e0=E({name:"BreadcrumbDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{breadcrumbCode:`<sui-breadcrumb>
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
</sui-breadcrumb>`}}});function t0(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-breadcrumb-section"),r=_("sui-breadcrumb-divider"),g=_("sui-breadcrumb"),c=_("doc-example"),h=_("sui-segment"),v=_("sui-container");return I(),re("div",null,[e(p,{title:"Breadcrumb",sub:"A breadcrumb is used to show hierarchy between content"}),e(v,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Breadcrumb",description:"A standard breadcrumb",code:t.breadcrumbCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(r,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{link:""},{default:i(()=>[a("Store")]),_:1}),e(r,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("T-Shirt")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{description:"You can do the same using shorthands",code:t.breadcrumbCode2},{default:i(()=>[e(g,{sections:[{content:"Home",link:!0},{content:"Store",link:!0},{content:"T-Shirt",active:!0}],icon:"right angle"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(c,{title:"Divider",description:"A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text",code:t.dividerCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(r,{icon:"right chevron"}),e(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(r,{icon:"right arrow"}),e(o,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Section",description:"A breadcrumb can contain sections that can either be formatted as a link or text",code:t.sectionCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Home")]),_:1}),e(r,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Link",description:"A section may be linkable or contain a link",code:t.linkCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(r,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("Search")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(c,{title:"Active",description:"A section can be active",code:t.activeCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Product")]),_:1}),e(r,null,{default:i(()=>[a(" / ")]),_:1}),e(o,{active:""},{default:i(()=>[a("Paper Towels")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Inverted",description:"A breadcrumb can be inverted",code:t.invertedCode},{default:i(()=>[e(h,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(r,{icon:"right chevron"}),e(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(r,{icon:"right chevron"}),e(o,{active:""},{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Size",description:"A breadcrumb can vary in size",code:t.sizeCode},{default:i(()=>[e(g,{size:"mini"},{default:i(()=>[e(o,{link:""},{default:i(()=>[a("Home")]),_:1}),e(r,{icon:"right chevron"}),e(o,{link:""},{default:i(()=>[a("Registration")]),_:1}),e(r,{icon:"right chevron"}),e(o,null,{default:i(()=>[a("Personal Information")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const i0=ge(e0,[["render",t0]]),l0=E({name:"FormDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{formCode:`<sui-form>
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
</sui-form>`}}});function a0(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-form-field"),r=_("sui-checkbox"),g=_("sui-button"),c=_("sui-form"),h=_("doc-example"),v=_("sui-form-group"),f=_("sui-container");return I(),re("div",null,[e(p,{title:"Form",sub:"A form displays a set of related user input fields in a structured way"}),e(f,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Form",description:"A form",code:t.formCode},{default:i(()=>[e(c,null,{default:i(()=>[e(o,{label:"First Name",placeholder:"First Name"}),e(o,{label:"Last Name",placeholder:"Last Name"}),e(o,null,{default:i(()=>[e(r,{label:"I agree to the Terms and Conditions"})]),_:1}),e(g,null,{default:i(()=>[a("Submit")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(h,{title:"Field",description:"A field is a form element containing a label and an input",code:t.fieldCode},{default:i(()=>[e(c,null,{default:i(()=>[e(o,{label:"Enter Password",type:"password"})]),_:1})]),_:1},8,["code"]),e(h,{title:"Fields",description:"A set of fields can appear grouped together",code:t.fieldsCode},{default:i(()=>[e(c,null,{default:i(()=>[e(v,null,{default:i(()=>[e(o,{label:"First name",placeholder:"First Name"}),e(o,{label:"Middle name",placeholder:"Middle Name"}),e(o,{label:"Last name",placeholder:"Last Name"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const n0=ge(l0,[["render",a0]]),Ft="/vue-fomantic-ui/images/wireframe/media-paragraph.png",kd="/vue-fomantic-ui/images/wireframe/centered-paragraph.png",s0=E({name:"GridDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],gridCode:`<sui-grid>
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
</sui-grid>`}}}),o0=C("br",null,null,-1);function r0(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-image"),r=_("sui-grid-column"),g=_("sui-grid"),c=_("doc-example"),h=_("sui-grid-row"),v=_("sui-segment"),f=_("sui-divider"),y=_("sui-menu-item"),S=_("sui-menu"),B=_("sui-container");return I(),re("div",null,[e(p,{title:"Grid",sub:"A grid is used to harmonize negative space in a layout"}),e(B,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Grid",description:"A basic grid",code:t.gridCode},{default:i(()=>[e(g,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.numbers,b=>(I(),te(r,{key:b},{default:i(()=>[e(o,{src:Q})]),_:2},1024))),128))]),_:1})]),_:1},8,["code"]),e(c,{title:"Divided",description:"A grid can have dividers between its columns",code:t.dividedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Ft})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ft})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ft})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Ft})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ft})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ft})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Divided",description:"A grid can have dividers between rows",code:t.verticalDividedCode},{default:i(()=>[e(g,{divided:"vertically"},{default:i(()=>[e(h,{columns:2},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Celled",description:"A grid can have rows divided into cells",code:t.celledCode},{default:i(()=>[e(g,{celled:""},{default:i(()=>[e(h,null,{default:i(()=>[e(r,{width:3},{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,{width:13},{default:i(()=>[e(o,{src:kd})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,{width:3},{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,{width:10},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{width:3},{default:i(()=>[e(o,{src:Q})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Internally Celled",description:"A grid can have rows divisions only between internal rows",code:t.internallyCelledCode},{default:i(()=>[e(g,{celled:"internally"},{default:i(()=>[e(h,null,{default:i(()=>[e(r,{width:3},{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,{width:13},{default:i(()=>[e(o,{src:kd})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,{width:3},{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,{width:10},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{width:3},{default:i(()=>[e(o,{src:Q})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(c,{title:"Rows",description:"A row is a horizontal grouping of columns",code:t.rowsCode},{default:i(()=>[e(g,{columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Columns",description:"Columns each contain gutters giving them equal spacing from other columns",code:t.columnsCode},{default:i(()=>[e(g,null,{default:i(()=>[e(r,{width:8},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{width:8},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{width:8},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{width:8},{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Floated",description:"A column can sit flush against the left or right edge of a row",code:t.floatedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(r,{floated:"left",width:5},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{floated:"right",width:5},{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Width",description:"A column can vary in width taking up more than a single grid column",code:t.columnWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(r,{width:4},{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,{width:9},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{width:3},{default:i(()=>[e(o,{src:Ft})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Column Count",description:"A grid can have a different number of columns per row",code:t.columnCountCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{columns:3},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1})]),_:1}),e(h,{columns:4},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Equal Width",description:"Equal Width",code:t.equalWidthCode},{default:i(()=>[e(g,{columns:"equal"},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(r,{width:8},{default:i(()=>[e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Stretched",description:"A row can stretch its contents to take up the entire column height",code:t.stretchedCode},{default:i(()=>[e(g,{columns:3,divided:""},{default:i(()=>[e(h,{stretched:""},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("1")]),_:1}),e(v,null,{default:i(()=>[a("2")]),_:1}),e(v,null,{default:i(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Padded",description:"A grid can preserve its vertical and horizontal gutters on first and last columns",code:t.paddedCode},{default:i(()=>[C("div",null,[e(f),e(g,{padded:"",columns:2},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1})])]),_:1},8,["code"]),e(c,{title:"Relaxed",description:"A grid can increase its gutters to allow for more negative space",code:t.relaxedCode},{default:i(()=>[e(g,{relaxed:"",columns:4},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Colored",description:"A row or column can be colored",code:t.coloredCode},{default:i(()=>[e(g,{padded:"",columns:5},{default:i(()=>[e(r,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(r,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(r,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(r,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(r,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(r,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(r,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(r,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(r,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(r,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(r,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(r,{color:"grey"},{default:i(()=>[a("Grey")]),_:1}),e(r,{color:"black"},{default:i(()=>[a("Black")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Centered",description:"A grid can have its columns centered",code:t.centeredCode},{default:i(()=>[e(g,{centered:"",columns:2},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(h,{centered:"",columns:4},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Text Alignment",description:"A grid, row, or column can specify its text alignment",code:t.textAlignCode},{default:i(()=>[e(g,{textAlign:"center",columns:3},{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(S,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Cats")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(S,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Dogs")]),_:1}),e(y,null,{default:i(()=>[a("Poodle")]),_:1}),e(y,null,{default:i(()=>[a("Cockerspaniel")]),_:1})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(S,{vertical:"",fluid:""},{default:i(()=>[e(y,{header:""},{default:i(()=>[a("Monkeys")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Vertical Alignment",description:"A grid, row, or column can specify its vertical alignment to have all its columns vertically centered",code:t.verticalAlignCode},{default:i(()=>[e(g,{verticalAlign:"middle",columns:4,centered:""},{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q}),o0,e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Responsive Variations")]),_:1}),e(c,{title:"Doubling",description:"A grid can double its column width on tablet and mobile sizes",code:t.doublingCode},{default:i(()=>[e(g,{doubling:"",columns:5},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(r,null,{default:i(()=>[e(o,{src:Q})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"stackable",description:"A grid can have its columns stack on-top of each other after reaching mobile breakpoints",code:t.stackableCode},{default:i(()=>[e(g,{stackable:"",columns:2},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Reversed",description:"A grid or row can specify that its columns should reverse order at different device sizes",code:t.reversedCode},{default:i(()=>[e(g,{reversed:"computer vertically"},{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Computer Row 3")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Computer Row 2")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Computer Row 1")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Device Visibility",description:"A columns or row can appear only for a specific device, or screen sizes",code:t.deviceVisibilityCode},{default:i(()=>[e(g,null,{default:i(()=>[e(h,{only:"large screen",columns:2},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Large Screen")]),_:1})]),_:1})]),_:1}),e(h,{only:"widescreen",columns:2},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Widescreen")]),_:1})]),_:1})]),_:1}),e(h,{only:"mobile",columns:2},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Mobile")]),_:1})]),_:1})]),_:1}),e(h,{columns:3},{default:i(()=>[e(r,{only:"computer"},{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(r,{only:"mobile"},{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet and Mobile")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("All Sizes")]),_:1})]),_:1})]),_:1}),e(h,{only:"computer",columns:4},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Computer")]),_:1})]),_:1})]),_:1}),e(h,{only:"tablet",columns:3},{default:i(()=>[e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(v,null,{default:i(()=>[a("Tablet")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{title:"Responsive Width",description:"A column can specify a width for a specific device",code:t.responsiveWidthCode},{default:i(()=>[e(g,null,{default:i(()=>[e(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:Ce})]),_:1}),e(r,{mobile:16,tablet:8,computer:4},{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const u0=ge(s0,[["render",r0]]),d0="/vue-fomantic-ui/images/logo.png",c0=E({name:"MenuDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{menuCode:`<sui-menu>
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
</sui-menu>`}}}),m0=C("p",null,"Check out our new promotions",-1),p0=C("p",null,"Check out our collection of coupons",-1),f0=C("p",null,"Visit our rebate forum for information on claiming rebates",-1),g0=C("img",{src:d0},null,-1);function h0(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-menu-item"),r=_("sui-menu"),g=_("doc-example"),c=_("sui-input"),h=_("sui-menu-menu"),v=_("sui-label"),f=_("sui-button"),y=_("sui-dropdown-item"),S=_("sui-dropdown-menu"),B=_("sui-dropdown"),b=_("sui-icon"),w=_("sui-segment"),k=_("sui-container");return I(),re("div",null,[e(p,{title:"Menu",sub:"A menu displays grouped navigation actions"}),e(k,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Menu",description:"A menu",code:t.menuCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Editorials")]),_:1}),e(o,null,{default:i(()=>[a("Reviews")]),_:1}),e(o,null,{default:i(()=>[a("Upcoming Events")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary Menu",description:"A menu can adjust its appearance to de-emphasize its contents",code:t.secondaryMenuCode},{default:i(()=>[e(r,{secondary:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(o,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(o,null,{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(o,null,{default:i(()=>[a("logout")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",description:"A menu can point to show its relationship to nearby content",code:t.pointingCode},{default:i(()=>[e(r,{pointing:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(o,null,{default:i(()=>[a("Friends")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(o,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search..."})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Tabular",description:"A menu can be formatted to show tabs of information",code:t.tabularCode},{default:i(()=>[e(r,{tabular:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Bio")]),_:1}),e(o,null,{default:i(()=>[a("Photos")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",description:"A menu can be formatted for text content",code:t.textCode},{default:i(()=>[e(r,{text:""},{default:i(()=>[e(o,{header:""},{default:i(()=>[a("Sort By")]),_:1}),e(o,{active:""},{default:i(()=>[a("Closest")]),_:1}),e(o,null,{default:i(()=>[a("Most Comments")]),_:1}),e(o,null,{default:i(()=>[a("Most Popular")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Vertical Menu",description:"A vertical menu displays elements vertically",code:t.verticalMenuCode},{default:i(()=>[e(r,{vertical:""},{default:i(()=>[e(o,{active:"",color:"teal"},{default:i(()=>[a(" Inbox "),e(v,{color:"teal",pointing:"left"},{default:i(()=>[a("1")]),_:1})]),_:1}),e(o,null,{default:i(()=>[a(" Spam "),e(v,null,{default:i(()=>[a("51")]),_:1})]),_:1}),e(o,null,{default:i(()=>[a(" Updates "),e(v,null,{default:i(()=>[a("1")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,{transparent:"",icon:"search",placeholder:"Search mail..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pagination",description:"A pagination menu is specially formatted to present links to pages of content",code:t.paginationCode},{default:i(()=>[e(r,{pagination:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("1")]),_:1}),e(o,{disabled:""},{default:i(()=>[a("...")]),_:1}),e(o,null,{default:i(()=>[a("10")]),_:1}),e(o,null,{default:i(()=>[a("11")]),_:1}),e(o,null,{default:i(()=>[a("12")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(g,{title:"Header",description:"A menu item may include a header or may itself be a header",code:t.headerCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{header:""},{default:i(()=>[a("Our Company")]),_:1}),e(o,null,{default:i(()=>[a("About us")]),_:1}),e(o,null,{default:i(()=>[a("Jobs")]),_:1}),e(o,null,{default:i(()=>[a("Locations")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"textContentCode",description:"A vertical menu item can include any type of text content",code:t.textContentCode},{default:i(()=>[e(r,{vertical:""},{default:i(()=>[e(o,null,{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[a("Promotions")]),_:1}),m0]),_:1}),e(o,null,{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[a("Coupons")]),_:1}),p0]),_:1}),e(o,null,{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[a("Rebates")]),_:1}),f0]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Input",description:"A menu item can contain an input inside of it",code:t.inputCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{as:"div"},{default:i(()=>[e(c,{icon:"search",placeholder:"Search..."})]),_:1}),e(o,{position:"right",as:"div"},{default:i(()=>[e(c,{placeholder:"Navigate to ..."})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Button",description:"A menu item can contain a button inside of it",code:t.buttonCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{as:"div"},{default:i(()=>[e(f,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1}),e(o,{as:"div"},{default:i(()=>[e(f,null,{default:i(()=>[a("Log in")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Link Item",description:"A menu may contain a link item, or an item formatted as if it is a link",code:t.linkItemCode},{default:i(()=>[e(r,{vertical:""},{default:i(()=>[e(o,{href:"https://google.com"},{default:i(()=>[a("Visit Google")]),_:1}),e(o,{link:"",as:"div"},{default:i(()=>[a("Javascript Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Dropdown Item",description:"An item may contain a nested menu in a dropdown",code:t.dropdownItemCode},{default:i(()=>[e(r,{vertical:""},{default:i(()=>[e(B,{item:"",text:"Categories"},{default:i(()=>[e(S,null,{default:i(()=>[e(y,{text:"Electoronics"}),e(y,{text:"Automotive"}),e(y,{text:"Home"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Menu",description:"A menu may contain another menu group in the same level as menu items",code:t.menuContentCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Browse")]),_:1}),e(o,null,{default:i(()=>[a("Submit")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(o,null,{default:i(()=>[a("Sign up")]),_:1}),e(o,null,{default:i(()=>[a("Help")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Sub Menu",description:"A menu item may contain another menu nested inside that acts as a grouped sub-menu",code:t.subMenuCode},{default:i(()=>[e(r,{vertical:""},{default:i(()=>[e(o,{as:"div"},{default:i(()=>[e(c,{placeholder:"Search..."})]),_:1}),e(o,{as:"div"},{default:i(()=>[a(" Home "),e(h,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Search")]),_:1}),e(o,null,{default:i(()=>[a("Add")]),_:1}),e(o,null,{default:i(()=>[a("Remove")]),_:1})]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"grid layout"}),a(" Browse ")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(B,{item:"",text:"More"},{default:i(()=>[e(S,null,{default:i(()=>[e(y,{icon:"edit",text:"Edit Profile"}),e(y,{icon:"globe",text:"Choose Language"}),e(y,{icon:"settings",text:"Account Settings"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hover",description:"A menu item can be hovered",code:t.hoverCode},{default:i(()=>[e(r,{compact:""},{default:i(()=>[e(o,null,{default:i(()=>[a("A link")]),_:1}),e(o,{as:"div",link:""},{default:i(()=>[a("div Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Active",description:"A menu item can be active",code:t.activeCode},{default:i(()=>[e(r,{compact:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Link")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Stackable",description:"A menu can stack at mobile resolutions",code:t.stackableCode},{default:i(()=>[e(r,{stackable:""},{default:i(()=>[e(o,{as:"div"},{default:i(()=>[g0]),_:1}),e(o,null,{default:i(()=>[a("Features")]),_:1}),e(o,null,{default:i(()=>[a("Testimonials")]),_:1}),e(o,null,{default:i(()=>[a("Sign in")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"A menu may have its colors inverted to show greater contrast",code:t.invertedCode},{default:i(()=>[e(r,{inverted:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(o,null,{default:i(()=>[a("Friends")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"Additional colors can be specified",code:t.coloredCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{active:"",color:"red"},{default:i(()=>[a("Red")]),_:1}),e(o,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(o,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(o,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(o,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(o,{color:"teal"},{default:i(()=>[a("Teal")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icons",description:"A menu may have just icons",code:t.iconsCode},{default:i(()=>[e(r,{icon:""},{default:i(()=>[e(o,null,{default:i(()=>[e(b,{name:"gamepad"})]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video camera"})]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video play"})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Labeled Icon",description:"A menu may have labeled icons",code:t.labeledIconCode},{default:i(()=>[e(r,{icon:"labeled"},{default:i(()=>[e(o,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fluid",description:"A vertical menu may take the size of its container",code:t.fluidCode},{default:i(()=>[e(r,{fluid:"",vertical:""},{default:i(()=>[e(o,null,{default:i(()=>[a("Run")]),_:1}),e(o,null,{default:i(()=>[a("Walk")]),_:1}),e(o,null,{default:i(()=>[a("Bike")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A menu can take up only the space necessary to fit its content",code:t.compactCode},{default:i(()=>[e(r,{compact:""},{default:i(()=>[e(o,null,{default:i(()=>[e(b,{name:"gamepad"}),a(" Games ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video camera"}),a(" Channels ")]),_:1}),e(o,null,{default:i(()=>[e(b,{name:"video play"}),a(" Videos ")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Evenly Divided",description:"A menu may divide its items evenly",code:t.evenlyDividedCode},{default:i(()=>[e(r,{fluid:"",widths:3},{default:i(()=>[e(o,null,{default:i(()=>[a("Buy")]),_:1}),e(o,null,{default:i(()=>[a("Sell")]),_:1}),e(o,null,{default:i(()=>[a("Rent")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A menu may be attached to other content segments",code:t.attachedCode},{default:i(()=>[C("div",null,[e(r,{attached:"top",tabular:""},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("tab1")]),_:1}),e(o,null,{default:i(()=>[a("tab2")]),_:1})]),_:1}),e(w,{attached:"bottom"},{default:i(()=>[a(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A menu can vary in size",code:t.sizeCode},{default:i(()=>[e(r,{size:"mini"},{default:i(()=>[e(o,{active:""},{default:i(()=>[a("Home")]),_:1}),e(o,null,{default:i(()=>[a("Messages")]),_:1}),e(h,{position:"right"},{default:i(()=>[e(B,{item:"",text:"Language"},{default:i(()=>[e(S,null,{default:i(()=>[e(y,null,{default:i(()=>[a("English")]),_:1}),e(y,null,{default:i(()=>[a("Russian")]),_:1}),e(y,null,{default:i(()=>[a("Spanish")]),_:1})]),_:1})]),_:1}),e(o,{as:"div"},{default:i(()=>[e(f,{color:"primary"},{default:i(()=>[a("Sign up")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Fitted",description:"A menu item or menu can remove element padding, vertically or horizontally",code:t.fittedCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{fitted:""},{default:i(()=>[a("No padding whatsoever")]),_:1}),e(o,{fitted:"horizontally"},{default:i(()=>[a("No horizontal padding")]),_:1}),e(o,{fitted:"vertically"},{default:i(()=>[a("No vertical padding")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Borderless",description:"A menu item or menu can have no borders",code:t.borderlessCode},{default:i(()=>[e(r,{borderless:""},{default:i(()=>[e(o,null,{default:i(()=>[a("1")]),_:1}),e(o,null,{default:i(()=>[a("2")]),_:1}),e(o,null,{default:i(()=>[a("3")]),_:1}),e(o,null,{default:i(()=>[a("4")]),_:1}),e(o,null,{default:i(()=>[a("5")]),_:1}),e(o,null,{default:i(()=>[a("6")]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const _0=ge(c0,[["render",h0]]),b0=E({name:"MessageDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{messageCode:`<sui-message>
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
</div>`}}}),v0=C("p",null,"We just updated our privacy policy here to better service our customers. We recommend reviewing the changes.",-1),y0=C("p",null,"Get the best news in your e-mail every day.",-1),C0=C("p",null,"You can't see me",-1),w0=C("p",null,"You can always see me",-1),S0=C("p",null,"Way to go!",-1),A0=C("p",null,"Get all the best inventions in your e-mail every day. Sign up now!",-1),k0=C("a",{href:"#"},"Login here",-1),B0=C("p",null,[a("Go to your "),C("b",null,"special offers"),a(" page to see now.")],-1),$0=C("p",null,"That offer has expired",-1);function T0(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-message-header"),r=_("sui-message"),g=_("doc-example"),c=_("sui-message-item"),h=_("sui-message-list"),v=_("sui-icon"),f=_("sui-message-content"),y=_("sui-form-field"),S=_("sui-form-group"),B=_("sui-button"),b=_("sui-form"),w=_("sui-container");return I(),re("div",null,[e(p,{title:"Message",sub:"A message displays information that explains nearby content"}),e(w,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Message",description:"A basic message",code:t.messageCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Changes in Service")]),_:1}),v0]),_:1})]),_:1},8,["code"]),e(g,{title:"List Message",description:"A message with a list",code:t.listMessageCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("New Site Features")]),_:1}),e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("You can now have cover images on blog pages")]),_:1}),e(c,null,{default:i(()=>[a("Drafts will now auto-save while writing")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Icon Message",description:"A message can contain an icon",code:t.iconMessageCode},{default:i(()=>[e(r,{icon:""},{default:i(()=>[e(v,{name:"inbox"}),e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[a(" Have you heard about our mailing list? ")]),_:1}),y0]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(g,{title:"Hidden",description:"A message can be hidden",code:t.hiddenCode},{default:i(()=>[e(r,{hidden:""},{default:i(()=>[C0]),_:1})]),_:1},8,["code"]),e(g,{title:"Visible",description:"A message can be set to visible to force itself to be shown",code:t.visibleCode},{default:i(()=>[e(r,{visible:""},{default:i(()=>[w0]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Floating",description:"A message can float above content that it is related to",code:t.floatingCode},{default:i(()=>[e(r,{floating:""},{default:i(()=>[S0]),_:1})]),_:1},8,["code"]),e(g,{title:"Compact",description:"A message can only take up the width of its content",code:t.compactCode},{default:i(()=>[e(r,{compact:""},{default:i(()=>[A0]),_:1})]),_:1},8,["code"]),e(g,{title:"Attached",description:"A message can be formatted to attach itself to other content",code:t.attachedCode},{default:i(()=>[C("div",null,[e(r,{attached:"",header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),e(b,{class:"attached fluid segment"},{default:i(()=>[e(S,{widths:"equal"},{default:i(()=>[e(y,{label:"First Name",placeholder:"First Name"}),e(y,{label:"Last Name",placeholder:"Last Name"})]),_:1}),e(y,{label:"Username",placeholder:"Username"}),e(y,{label:"Password",placeholder:"Password"}),e(B,{color:"primary"},{default:i(()=>[a("Submit")]),_:1})]),_:1}),e(r,{attached:"bottom",warning:""},{default:i(()=>[e(v,{name:"help"}),a(" Already signed up? "),k0,a(" instead. ")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Warning",description:"A message may be formatted to display warning messages",code:t.warningCode},{default:i(()=>[e(r,{warning:""},{default:i(()=>[e(v,{name:"close"}),e(o,null,{default:i(()=>[a(" You must register before you can do that! ")]),_:1}),a(" Visit our registration page, then try again ")]),_:1})]),_:1},8,["code"]),e(g,{title:"Info",description:"A message may be formatted to display information",code:t.infoCode},{default:i(()=>[e(r,{info:""},{default:i(()=>[e(o,null,{default:i(()=>[a("Was this what you wanted?")]),_:1}),e(h,null,{default:i(()=>[a("It's good to see you again.")]),_:1}),e(h,null,{default:i(()=>[a("Did you know it's been a while?")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Positive / Success",description:"A message may be formatted to display a positive message",code:t.positiveSuccessCode},{default:i(()=>[e(r,{positive:""},{default:i(()=>[e(o,null,{default:i(()=>[a("You are eligible for a reward")]),_:1}),B0]),_:1})]),_:1},8,["code"]),e(g,{title:"Negative / Error",description:"A message may be formatted to display a negative message",code:t.negativeErrorCode},{default:i(()=>[e(r,{negative:""},{default:i(()=>[e(v,{name:"close"}),e(o,null,{default:i(()=>[a("We're sorry we can't apply that discount")]),_:1}),$0]),_:1})]),_:1},8,["code"]),e(g,{title:"Colored",description:"A message can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[C("div",null,[e(r,{color:"red"},{default:i(()=>[a("Red")]),_:1}),e(r,{color:"orange"},{default:i(()=>[a("Orange")]),_:1}),e(r,{color:"yellow"},{default:i(()=>[a("Yellow")]),_:1}),e(r,{color:"olive"},{default:i(()=>[a("Olive")]),_:1}),e(r,{color:"green"},{default:i(()=>[a("Green")]),_:1}),e(r,{color:"teal"},{default:i(()=>[a("Teal")]),_:1}),e(r,{color:"blue"},{default:i(()=>[a("Blue")]),_:1}),e(r,{color:"violet"},{default:i(()=>[a("Violet")]),_:1}),e(r,{color:"purple"},{default:i(()=>[a("Purple")]),_:1}),e(r,{color:"pink"},{default:i(()=>[a("Pink")]),_:1}),e(r,{color:"brown"},{default:i(()=>[a("Brown")]),_:1}),e(r,{color:"black"},{default:i(()=>[a("Black")]),_:1})])]),_:1},8,["code"]),e(g,{title:"Size",description:"A message can have different sizes",code:t.sizeCode},{default:i(()=>[C("div",null,[e(r,{size:"mini"},{default:i(()=>[a("This is a mini message.")]),_:1}),e(r,{size:"large"},{default:i(()=>[a("This is a large message.")]),_:1}),e(r,{size:"massive"},{default:i(()=>[a("This is a massive message.")]),_:1})])]),_:1},8,["code"])]),_:1})])}const x0=ge(b0,[["render",T0]]),E0=E({name:"TableDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{tableCode:`<sui-table celled>
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
</sui-table>`}}}),R0=C("a",{href:"#"},"Edit",-1),P0=C("a",{href:"#"},"Edit",-1),z0=C("a",{href:"#"},"Edit",-1),D0=C("br",null,null,-1),M0=C("br",null,null,-1),I0=C("br",null,null,-1),V0=C("br",null,null,-1),F0=C("br",null,null,-1),N0=C("br",null,null,-1),L0=C("br",null,null,-1);function O0(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-table-header-cell"),r=_("sui-table-row"),g=_("sui-table-header"),c=_("sui-table-cell"),h=_("sui-table-body"),v=_("sui-table"),f=_("doc-example"),y=_("sui-icon"),S=_("sui-table-footer"),B=_("sui-container");return I(),re("div",null,[e(p,{title:"Table",sub:"A table displays a collections of data grouped into rows"}),e(B,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(f,{title:"Table",description:"A standard table",code:t.tableCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Age")]),_:1}),e(o,null,{default:i(()=>[a("Job")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("James")]),_:1}),e(c,null,{default:i(()=>[a("24")]),_:1}),e(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("26")]),_:1}),e(c,null,{default:i(()=>[a("Engineer")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Elyse")]),_:1}),e(c,null,{default:i(()=>[a("24")]),_:1}),e(c,null,{default:i(()=>[a("Designer")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Definition",description:"A table may be formatted to emphasize a first column that defines a rows content",code:t.definitionCode},{default:i(()=>[e(v,{definition:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o),e(o,null,{default:i(()=>[a("Arguments")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("reset rating")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1}),e(c,null,{default:i(()=>[a("Resets rating to default value")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("set rating")]),_:1}),e(c,null,{default:i(()=>[a("rating (integer)")]),_:1}),e(c,null,{default:i(()=>[a("Sets the current star rating to specified value")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Structured",description:"A table can be formatted to display complex structured data",code:t.structuredCode},{default:i(()=>[e(v,{structured:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,{rowspan:"2"},{default:i(()=>[a("Name")]),_:1}),e(o,{rowspan:"2"},{default:i(()=>[a("Type")]),_:1}),e(o,{rowspan:"2"},{default:i(()=>[a("Files")]),_:1}),e(o,{colspan:"3"},{default:i(()=>[a("Languages")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Ruby")]),_:1}),e(o,null,{default:i(()=>[a("Javascript")]),_:1}),e(o,null,{default:i(()=>[a("Python")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Alpha Team")]),_:1}),e(c,null,{default:i(()=>[a("Project 1")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("2")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(r,null,{default:i(()=>[e(c,{rowspan:"3"},{default:i(()=>[a("Beta Team")]),_:1}),e(c,null,{default:i(()=>[a("Project 1")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("52")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Project 2")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("12")]),_:1}),e(c),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c)]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Project 3")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("21")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[e(y,{name:"checkmark",color:"green",size:"large"})]),_:1}),e(c),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(f,{title:"Positive / Negative",description:"A cell or row may let a user know whether a value is good or bad",code:t.positiveNegativeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{negative:""},{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,{positive:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"checkmark"}),a(" Approved ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{positive:""},{default:i(()=>[e(y,{name:"close"}),a(" Requires call ")]),_:1})]),_:1}),e(r,{negative:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Error",description:"A cell or row may call attention to an error or a negative value",code:t.errorCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,{error:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Cannot pull data")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{error:""},{default:i(()=>[e(y,{name:"attention"}),a(" Requires call ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Warning",description:"A cell or row may warn a user",code:t.warningCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"attention"}),a(" Requires Action ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{warning:""},{default:i(()=>[e(y,{name:"attention"}),a(" Hostile ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Active",description:"A cell or row can be active or selected by a user",code:t.activeCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,{active:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Selected")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,{active:""},{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Disabled",description:"A cell can be disabled",code:t.disabledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,{disabled:""},{default:i(()=>[e(c,null,{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Selected")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,{disabled:""},{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Colored Cells",description:"A cell can be styled by the central color palette colors",code:t.coloredCellsCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,{color:"orange"},{default:i(()=>[a("No Name Specified")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,{color:"blue"},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{color:"pink"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{color:"green"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Marked",description:"A cell or row can be marked by a colored left or right border",code:t.markedCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,{marked:"right",color:"blue"},{default:i(()=>[a("No Name Specified")]),_:1}),e(c,{marked:"left",color:"red"},{default:i(()=>[a("Unknown")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,{marked:"left",color:"green"},{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[e(y,{name:"microphone"}),a(" Recording session ")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{marked:"left",color:"orange"},{default:i(()=>[e(y,{name:"child"}),a(" Baby Party ")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Unknown")]),_:1}),e(c,{marked:"right",color:"purple"},{default:i(()=>[a("Vacation")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(f,{title:"Single Line",description:"A table can specify that its cell contents should remain on a single line, and not wrap",code:t.singleLineCode},{default:i(()=>[e(v,{"single-line":""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Registration Date")]),_:1}),e(o,null,{default:i(()=>[a("E-mail address")]),_:1}),e(o,null,{default:i(()=>[a("Premium Plan")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John Lilki")]),_:1}),e(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Fixed",description:"A table can use `table-layout: fixed` a special faster form of table rendering that does not resize table cells based on content",code:t.fixedCode},{default:i(()=>[e(v,{fixed:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("John is an interesting boy but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie is a kind girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("Jill is an alright girl but sometimes you don't really have enough room to describe everything you'd like")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Stacking",descirption:"A table can specify how it stacks table content responsively",code:t.stackingCode},{default:i(()=>[e(v,{stackable:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Selectable Row",description:"A table can have its rows appear selectable",code:t.selectableRowCode},{default:i(()=>[e(v,{selectable:"",celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Selectable Cell",description:"A table cell can be selectable",code:t.selectableCellCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,{positive:""},{default:i(()=>[a("Approved")]),_:1}),e(c,{selectable:""},{default:i(()=>[R0]),_:1})]),_:1}),e(r,{warning:""},{default:i(()=>[e(c,null,{default:i(()=>[a("Jimmy")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{selectable:""},{default:i(()=>[P0]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{negative:""},{default:i(()=>[a("Denied")]),_:1}),e(c,{selectable:""},{default:i(()=>[z0]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Verical Alignment",description:"A table header, row, or cell can adjust its vertical alignment",code:t.verticalAlignmentCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,{verticalAlign:"top"},{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{verticalAlign:"top"},{default:i(()=>[a(" Notes "),D0,a(" 1"),M0,a(" 2"),I0]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,{verticalAlign:"bottom"},{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a(" Notes "),V0,a(" 1"),F0,a(" 2"),N0]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Text Alignment",description:"A table header, row, or cell can adjust its text alignment",code:t.textAlignCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,{textAlign:"right"},{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,{textAlign:"center"},{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,{textAlign:"right"},{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Striped",description:"A table can stripe alternate rows of content with a darker color to increase contrast",code:t.stripedCode},{default:i(()=>[e(v,{striped:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Date Joined")]),_:1}),e(o,null,{default:i(()=>[a("E-mail")]),_:1}),e(o,null,{default:i(()=>[a("Called")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John Lilki")]),_:1}),e(c,null,{default:i(()=>[a("September 14, 2013")]),_:1}),e(c,null,{default:i(()=>[a("jhlilk22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("No")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie Harington")]),_:1}),e(c,null,{default:i(()=>[a("January 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jamieharingonton@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill Lewis")]),_:1}),e(c,null,{default:i(()=>[a("May 11, 2014")]),_:1}),e(c,null,{default:i(()=>[a("jilsewris22@yahoo.com")]),_:1}),e(c,null,{default:i(()=>[a("Yes")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Celled",description:"A table may be divided each row into separate cells",code:t.celledCode},{default:i(()=>[e(v,{celled:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("3 People")]),_:1}),e(c,null,{default:i(()=>[a("2 Approved")]),_:1}),e(c)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Basic",description:"A table can reduce its complexity to increase readability",code:t.basicCode},{default:i(()=>[C("div",null,[e(v,{basic:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1}),L0,e(v,{basic:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(f,{title:"Collapsing",description:"A table can be collapsing, taking up only as much space as its rows",code:t.collapsingCode},{default:i(()=>[e(v,{collapsing:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Age")]),_:1}),e(o,null,{default:i(()=>[a("Gender")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("27")]),_:1}),e(c,null,{default:i(()=>[a("Male")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("32")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("22")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("3 People")]),_:1}),e(o,null,{default:i(()=>[a("2 Approved")]),_:1}),e(o),e(o),e(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Collapsing Cell",description:"A cell can be collapsing so that it only uses as much space as required",code:t.collapsingCellCode},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,{collapsing:""},{default:i(()=>[e(y,{name:"folder"}),a(" node_modules ")]),_:1}),e(c,null,{default:i(()=>[a("Initial commit")]),_:1}),e(c,null,{default:i(()=>[a("10 hours ago")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Column Count",description:"A table can specify its column count to divide its content evenly",code:t.columnCountCode},{default:i(()=>[e(v,{columns:5},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Age")]),_:1}),e(o,null,{default:i(()=>[a("Gender")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("27")]),_:1}),e(c,null,{default:i(()=>[a("Male")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("32")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("22")]),_:1}),e(c,null,{default:i(()=>[a("Other")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("3 People")]),_:1}),e(o,null,{default:i(()=>[a("2 Approved")]),_:1}),e(o),e(o),e(o)]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Column Width",description:"Column Width",code:t.columnWidthCode},{default:i(()=>[e(v,null,{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,{width:10},{default:i(()=>[a("Name")]),_:1}),e(o,{width:6},{default:i(()=>[a("Status")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Colored",description:"A table can be given a color to distinguish it from other tables",code:t.coloredCode},{default:i(()=>[e(v,{color:"red"},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Food")]),_:1}),e(o,null,{default:i(()=>[a("Calories")]),_:1}),e(o,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Apples")]),_:1}),e(c,null,{default:i(()=>[a("200")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Orange")]),_:1}),e(c,null,{default:i(()=>[a("310")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Inverted",description:"A table's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(v,{inverted:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Food")]),_:1}),e(o,null,{default:i(()=>[a("Calories")]),_:1}),e(o,null,{default:i(()=>[a("Protein")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Apples")]),_:1}),e(c,null,{default:i(()=>[a("200")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Orange")]),_:1}),e(c,null,{default:i(()=>[a("310")]),_:1}),e(c,null,{default:i(()=>[a("0g")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(f,{title:"Padded",description:"A table may sometimes need to be more padded for legibility",code:t.paddedCode},{default:i(()=>[C("div",null,[e(v,{padded:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{padded:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Jamie was not interested in purchasing our product.")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(f,{title:"Compact",description:"A table may sometimes need to be more compact to make more rows visible at a time",code:t.compactCode},{default:i(()=>[C("div",null,[e(v,{compact:""},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1}),e(v,{compact:"very"},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1},8,["code"]),e(f,{title:"Size",description:"A table can also be small or large",code:t.sizeCode},{default:i(()=>[e(v,{size:"small"},{default:i(()=>[e(g,null,{default:i(()=>[e(r,null,{default:i(()=>[e(o,null,{default:i(()=>[a("Name")]),_:1}),e(o,null,{default:i(()=>[a("Status")]),_:1}),e(o,null,{default:i(()=>[a("Notes")]),_:1})]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("John")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jamie")]),_:1}),e(c,null,{default:i(()=>[a("Approved")]),_:1}),e(c,null,{default:i(()=>[a("Requires call")]),_:1})]),_:1}),e(r,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Jill")]),_:1}),e(c,null,{default:i(()=>[a("Denied")]),_:1}),e(c,null,{default:i(()=>[a("None")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const H0=ge(E0,[["render",O0]]),j0=E({name:"AdvertisementDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{adCode:`<sui-advertisement unit="medium rectangle">
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
</div>`,panoramaCode:'<sui-advertisement unit="panorama" test="Panorama" />',netboardCode:'<sui-advertisement unit="netboard" test="Netboard" />',centeredCode:'<sui-advertisement centered unit="banner" test="Centered" /> ',testCode:'<sui-advertisement unit="medium rectangle" test="Ad Unit 1" />'}}}),q0=C("img",{src:Q},null,-1),U0=C("br",null,null,-1);function G0(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-advertisement"),r=_("doc-example"),g=_("sui-container");return I(),re("div",null,[e(p,{title:"Advertisement",sub:"An ad displays third-party promotional content"}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Ad",description:"A standard ad",code:t.adCode},{default:i(()=>[e(o,{unit:"medium rectangle"},{default:i(()=>[q0]),_:1})]),_:1},8,["code"]),e(r,{title:"Common Units",description:"An advertisement can appear in common ad unit sizes",code:t.commonUnitsCode},{default:i(()=>[C("div",null,[e(o,{unit:"medium rectangle",test:"Medium Rectangle"}),e(o,{unit:"banner",test:"Banner"}),e(o,{unit:"leaderboard",test:"Leaderboard"}),e(o,{unit:"large rectangle",test:"Large Rectangle"}),e(o,{unit:"half page",test:"Half Page"})])]),_:1},8,["code"]),e(r,{title:"Mobile",description:"An ad can use common mobile ad sizes",code:t.mobileCode},{default:i(()=>[C("div",null,[e(o,{unit:"mobile banner",test:"Mobile Banner"}),e(o,{unit:"mobile leaderboard",test:"Mobile Leaderboard"})])]),_:1},8,["code"]),e(r,{title:"Rectangle",description:"An ad can use a common rectangle ad unit size",code:t.rectangleCode},{default:i(()=>[e(o,{unit:"medium rectangle",test:"Medium Rectangle"})]),_:1},8,["code"]),e(r,{title:"Button",description:"An ad can use button ad unit size",code:t.buttonCode},{default:i(()=>[C("div",null,[e(o,{unit:"button",test:"Button"}),e(o,{unit:"square button",test:"Square Button"}),e(o,{unit:"small button",test:"Small Button"})])]),_:1},8,["code"]),e(r,{title:"Skyscraper",description:"An ad can use skyscraper ad unit size",code:t.skyscraperCode},{default:i(()=>[C("div",null,[e(o,{unit:"skyscraper",test:"Skyscraper"}),U0,e(o,{unit:"wide skyscraper",test:"Wide Skyscraper"})])]),_:1},8,["code"]),e(r,{title:"Banner",description:"An ad can use banner ad unit size",code:t.bannerCode},{default:i(()=>[C("div",null,[e(o,{unit:"banner",test:"Banner"}),e(o,{unit:"vertical banner",test:"Vertical Banner"}),e(o,{unit:"top banner",test:"Top Banner"}),e(o,{unit:"half banner",test:"Half Banner"})])]),_:1},8,["code"]),e(r,{title:"Leaderboard",description:"An ad can use leaderboard ad unit size",code:t.leaderboardCode},{default:i(()=>[C("div",null,[e(o,{unit:"leaderboard",test:"Leaderboard"}),e(o,{unit:"large leaderboard",test:"Large Leaderboard"}),e(o,{unit:"billboard",test:"Billboard"})])]),_:1},8,["code"]),e(r,{title:"Panorama",description:"An ad can use panorama ad unit size",code:t.panoramaCode},{default:i(()=>[e(o,{unit:"panorama",test:"Panorama"})]),_:1},8,["code"]),e(r,{title:"Netboard",description:"An ad can use netboard ad unit size",code:t.netboardCode},{default:i(()=>[e(o,{unit:"netboard",test:"Netboard"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Centered",description:"An advertisement can appear centered",code:t.centeredCode},{default:i(()=>[e(o,{centered:"",unit:"banner",test:"Centered"})]),_:1},8,["code"]),e(r,{title:"Test",description:"A advertisement can be formatted to help verify placement",code:t.testCode},{default:i(()=>[e(o,{unit:"medium rectangle",test:"Ad Unit 1"})]),_:1},8,["code"])]),_:1})])}const Y0=ge(j0,[["render",G0]]),Bd="/vue-fomantic-ui/images/avatar/large/kristy.png",J0="/vue-fomantic-ui/images/avatar/large/daniel.jpg",xn="/vue-fomantic-ui/images/avatar/large/helen.jpg",En="/vue-fomantic-ui/images/avatar/large/elliot.jpg",Rn="/vue-fomantic-ui/images/avatar/large/elyse.png",W0="/vue-fomantic-ui/images/avatar/large/matthew.png",K0="/vue-fomantic-ui/images/avatar/large/molly.png",$d="/vue-fomantic-ui/images/avatar/large/jenny.jpg",Td="/vue-fomantic-ui/images/avatar/large/veronika.jpg",xd="/vue-fomantic-ui/images/avatar/large/steve.jpg",X0=E({name:"CardDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{cardCode:`<sui-card>
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
</sui-card-group>`}}}),Q0=C("span",{class:"date"},"Joined in 2013",-1),Z0=C("a",null,"Elliot Fu",-1),ek=C("a",null,"Jenny Hess",-1),tk=C("a",null,"Stevie Feliciano",-1),ik=C("a",null,"Administrator",-1),lk=C("a",null,"Helen Troy",-1),ak=C("span",{class:"date"},"Joined in 2013",-1),nk=C("span",null,"2 days ago",-1),sk=C("a",null,"Animals",-1),ok=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),rk=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),uk=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),dk=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),ck=C("span",{class:"category"},"Animals",-1),mk=C("span",{class:"category"},"Animals",-1),pk=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:nn}),a(" Matt ")],-1),fk=C("span",{class:"category"},"Animals",-1),gk=C("div",{class:"right floated author"},[C("img",{class:"ui avatar image",src:nn}),a(" Matt ")],-1),hk=C("p",null,"Jenny is a student studying Media Management at the New School",-1),_k=C("div",{class:"center aligned author"},[C("img",{class:"ui avatar image",src:an}),a(" Jenny ")],-1),bk=C("a",null,"Friends",-1),vk=C("span",{class:"right floated"}," Joined in 2013 ",-1),yk=C("a",null,[C("i",{class:"user icon"}),a(" 75 Friends ")],-1),Ck=C("a",null,"Coworker",-1),wk=C("span",{class:"right floated"}," Joined in 2011 ",-1),Sk=C("a",null,[C("i",{class:"user icon"}),a(" 35 Friends ")],-1),Ak=C("a",null,"Coworker",-1),kk=C("span",{class:"right floated"}," Joined in 2014 ",-1),Bk=C("a",null,[C("i",{class:"user icon"}),a(" 151 Friends ")],-1);function $k(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-image"),r=_("sui-card-header"),g=_("sui-card-meta"),c=_("sui-card-description"),h=_("sui-card-content"),v=_("sui-icon"),f=_("sui-card"),y=_("doc-example"),S=_("sui-button"),B=_("sui-button-group"),b=_("sui-card-group"),w=_("sui-feed-summary"),k=_("sui-feed-content"),$=_("sui-feed-event"),x=_("sui-feed"),D=_("sui-grid-column"),V=_("sui-grid"),z=_("sui-segment"),L=_("sui-container");return I(),re("div",null,[e(p,{title:"Card",sub:"A card displays site content in a manner similar to a playing card"}),e(L,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Card",description:"A single card",code:t.cardCode},{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:Bd,wrapped:""}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[Q0]),_:1}),e(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Cards",description:"A group of cards",code:t.cardsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(o,{src:Dt,floated:"right",size:"mini"}),e(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friends of Veronika")]),_:1}),e(c,null,{default:i(()=>[a("Elliot requested permission to view your contact details")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(B,{widths:2},{default:i(()=>[e(S,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(S,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(o,{src:an,floated:"right",size:"mini"}),e(r,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("New Member")]),_:1}),e(c,null,{default:i(()=>[a("Jenny wants to add you to the group best friends")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(B,{widths:2},{default:i(()=>[e(S,{basic:"",color:"green"},{default:i(()=>[a("Approve")]),_:1}),e(S,{basic:"",color:"red"},{default:i(()=>[a("Decline")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(y,{title:"Content Block",description:"A card can contain blocks of content",code:t.contentBlockCode},{default:i(()=>[e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Project Timeline")]),_:1})]),_:1}),e(h,null,{default:i(()=>[e(m,{sub:""},{default:i(()=>[a("Activity")]),_:1}),e(x,{size:"small"},{default:i(()=>[e($,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[Z0,a(" added "),ek,a(" to the project ")]),_:1})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[tk,a(" was added as an "),ik]),_:1})]),_:1})]),_:1}),e($,null,{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[lk,a(" added two pictures ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(S,{as:"button"},{default:i(()=>[a("Join Project")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Image",description:"A card can contain an image",code:t.imageCode},{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:Bd,wrapped:""}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Kristy")]),_:1}),e(g,null,{default:i(()=>[ak]),_:1}),e(c,null,{default:i(()=>[a(" Kristy is an art director living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[C("a",null,[e(v,{name:"user"}),a(" 22 Friends ")])]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Header",description:"A card can contain a header",code:t.headerCode},{default:i(()=>[e(b,null,{default:i(()=>[e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[a("Friend")]),_:1}),e(c,null,{default:i(()=>[a(" Jenny is a student studying Media Management at the New School ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Metadata",description:"A card can contain content metadata",code:t.metadataCode},{default:i(()=>[e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[nk,sk]),_:1}),e(c,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Buttons",description:"A card can contain buttons",code:t.buttonsCode},{default:i(()=>[e(b,null,{default:i(()=>[e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(c,null,{default:i(()=>[a(" Elliot Fu is a film-maker from New York. ")]),_:1})]),_:1}),e(S,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Veronika Ossi")]),_:1}),e(c,null,{default:i(()=>[a(" Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying. ")]),_:1})]),_:1}),e(S,{attached:"bottom"},{default:i(()=>[e(v,{name:"add"}),a(" Add Friend ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Description",description:"A card can contain a description with one or more paragraphs",code:t.descriptionCode},{default:i(()=>[e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[ok,rk]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Extra Content",description:"A card can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[uk,dk]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[e(v,{name:"check"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(y,{title:"Fluid Card",description:"A fluid card takes up the width of its container",code:t.fluidCardCode},{default:i(()=>[e(V,{columns:3},{default:i(()=>[e(D,null,{default:i(()=>[e(f,{fluid:""},{default:i(()=>[e(o,{src:J0}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Daniel Louise")]),_:1})]),_:1})]),_:1})]),_:1}),e(D,null,{default:i(()=>[e(f,{fluid:""},{default:i(()=>[e(o,{src:xn}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Helen Troy")]),_:1})]),_:1})]),_:1})]),_:1}),e(D,null,{default:i(()=>[e(f,{fluid:""},{default:i(()=>[e(o,{src:En}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Centered Card",description:"A card can center itself inside its container",code:t.centeredCardCode},{default:i(()=>[e(f,{centered:""},{default:i(()=>[e(o,{src:Rn}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Elyse")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Horizontal Cards",description:"A card can display horizontally",code:t.horizontalCardsCode},{default:i(()=>[e(f,{horizontal:""},{default:i(()=>[e(o,{src:Rn}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[ck]),_:1}),e(c,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Raised Card",description:"A card may be formatted to raise above the page",code:t.raisedCode},{default:i(()=>[e(f,{raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[mk]),_:1}),e(c,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[pk]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Link Card",description:"A card can be formatted so that the entire contents link to another page",code:t.linkCardCode},{default:i(()=>[e(f,{href:"#",raised:""},{default:i(()=>[e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(g,null,{default:i(()=>[fk]),_:1}),e(c,null,{default:i(()=>[e(o,{src:Ce})]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[gk]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Text Alignment",description:"Any element inside a card can have its text alignment specified",code:t.textAlignCode},{default:i(()=>[e(f,null,{default:i(()=>[e(h,null,{default:i(()=>[e(r,{textAlign:"center"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(c,{textAlign:"center"},{default:i(()=>[hk]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[_k]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Inverted",description:"Card's colors can be inverted",code:t.invertedCode},{default:i(()=>[e(z,{inverted:""},{default:i(()=>[e(b,{inverted:""},{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:W0}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Matt Giampietro")]),_:1}),e(g,null,{default:i(()=>[bk]),_:1}),e(c,null,{default:i(()=>[a(" Matthew is an interior designer living in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[vk,yk]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:K0}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Molly")]),_:1}),e(g,null,{default:i(()=>[Ck]),_:1}),e(c,null,{default:i(()=>[a(" Molly is a personal assistant living in Paris. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[wk,Sk]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:Rn}),e(h,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Elyse")]),_:1}),e(g,null,{default:i(()=>[Ak]),_:1}),e(c,null,{default:i(()=>[a(" Elyse is a copywriter working in New York. ")]),_:1})]),_:1}),e(h,{extra:""},{default:i(()=>[kk,Bk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Colored",description:"A card can specify a color",code:t.coloredCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(f,{color:"primary",href:"#"},{default:i(()=>[e(o,{src:vl})]),_:1}),e(f,{color:"secondary",href:"#"},{default:i(()=>[e(o,{src:vl})]),_:1}),e(f,{color:"red",href:"#"},{default:i(()=>[e(o,{src:vl})]),_:1}),e(f,{color:"orange",href:"#"},{default:i(()=>[e(o,{src:vl})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Column Count",description:"A group of cards can set how many cards should exist in a row",code:t.columnCountCode},{default:i(()=>[e(b,{itemsPerRow:4},{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:Q})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:Q})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Stackable",description:"A group of cards can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(b,{itemsPerRow:3,stackable:""},{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:En})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:xn})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:$d})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:Td})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:_s})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:xd})]),_:1})]),_:1})]),_:1},8,["code"]),e(y,{title:"Doubling",description:"A group of cards can double its column width for mobile",code:t.doublingCode},{default:i(()=>[e(b,{itemsPerRow:6,doubling:""},{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:En})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:xn})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:$d})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:Td})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:_s})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:xd})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const Tk=ge(X0,[["render",$k]]),xk=E({name:"CommentDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{commentsCode:`<sui-comment-group>
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
  </sui-segment>`}}}),Ek=C("span",null,"Today at 5:42PM",-1),Rk=C("a",null,"Reply",-1),Pk=C("span",null,"Yesterday at 12:30AM",-1),zk=C("a",null,"Reply",-1),Dk={class:"comments"},Mk=C("span",null,"Just now",-1),Ik=C("a",null,"Reply",-1),Vk=C("span",null,"5 days ago",-1),Fk=C("a",null,"Reply",-1),Nk=C("div",{class:"date"},"2 days ago",-1),Lk=C("div",{class:"rating"},[C("i",{class:"star icon"}),a(" 5 Faves ")],-1),Ok=C("a",null,"Reply",-1),Hk=C("a",null,"Save",-1),jk=C("a",null,"Hide",-1),qk=C("a",null,[C("i",{class:"expand icon"}),a(" Full-screen ")],-1),Uk=C("a",null,"Reply",-1),Gk=C("a",null,"Reply",-1),Yk=C("a",null,"Replay",-1),Jk=C("span",null,"Today at 5:42PM",-1),Wk=C("a",{href:"#"},"Replay",-1),Kk=C("span",null,"Yesterday at 12:30AM",-1),Xk=C("a",{href:"#"},"Replay",-1),Qk=C("span",null,"Just now",-1),Zk=C("a",{href:"#"},"Replay",-1),eB=C("span",null,"5 days ago",-1),tB=C("a",{href:"#"},"Replay",-1),iB=C("span",null,"Today at 5:42PM",-1),lB=C("a",{href:"#"},"Replay",-1),aB=C("span",null,"Yesterday at 12:30AM",-1),nB=C("a",{href:"#"},"Replay",-1),sB=C("span",null,"Just now",-1),oB=C("a",{href:"#"},"Replay",-1),rB=C("span",null,"5 days ago",-1),uB=C("a",{href:"#"},"Replay",-1),dB=C("span",null,"Today at 5:42PM",-1),cB=C("a",{href:"#"},"Replay",-1),mB=C("span",null,"Yesterday at 12:30AM",-1),pB=C("a",{href:"#"},"Replay",-1),fB=C("span",null,"Just now",-1),gB=C("a",{href:"#"},"Replay",-1),hB=C("span",null,"5 days ago",-1),_B=C("a",{href:"#"},"Replay",-1),bB=C("span",null,"Today at 5:42PM",-1),vB=C("a",{href:"#"},"Replay",-1),yB=C("span",null,"Yesterday at 12:30AM",-1),CB=C("a",{href:"#"},"Replay",-1),wB=C("span",null,"Just now",-1),SB=C("a",{href:"#"},"Replay",-1),AB=C("span",null,"5 days ago",-1),kB=C("a",{href:"#"},"Replay",-1);function BB(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-comment-avatar"),r=_("sui-comment-author"),g=_("sui-comment-metadata"),c=_("sui-comment-text"),h=_("sui-comment-actions"),v=_("sui-comment-content"),f=_("sui-comment"),y=_("sui-comment-group"),S=_("doc-example"),B=_("sui-form-textarea"),b=_("sui-icon"),w=_("sui-button"),k=_("sui-form"),$=_("sui-segment"),x=_("sui-container");return I(),re("div",null,[e(p,{title:"Comment",sub:"A comment displays user feedback to site content"}),e(x,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"Comments",description:"A basic list of comments",code:t.commentsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Ek]),_:1}),e(c,null,{default:i(()=>[a("How artistic!")]),_:1}),e(h,null,{default:i(()=>[Rk]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[Pk]),_:1}),e(c,null,{default:i(()=>[a("This has been very useful for my research. Thanks as well!")]),_:1}),e(h,null,{default:i(()=>[zk]),_:1})]),_:1}),C("div",Dk,[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Mk]),_:1}),e(c,null,{default:i(()=>[a("Elliot you are always so right :)")]),_:1}),e(h,null,{default:i(()=>[Ik]),_:1})]),_:1})]),_:1})])]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[Vk]),_:1}),e(c,null,{default:i(()=>[a("Dude, this is awesome. Thanks so much")]),_:1}),e(h,null,{default:i(()=>[Fk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(S,{title:"avatar",description:"A comment can contain an image or avatar",code:t.avatarCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Elliot Fu")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Metadata",description:"A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/stevie.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Stevie Feliciano")]),_:1}),e(g,null,{default:i(()=>[Nk,Lk]),_:1}),e(c,null,{default:i(()=>[a(" Hey guys, I hope this example comment is helping you read this documentation. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Actions",description:"A comment can contain an list of actions a user may perform related to this comment",code:t.actionsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Tom Lukic")]),_:1}),e(c,null,{default:i(()=>[a(" This will be great for business reports. I will definitely download this. ")]),_:1}),e(h,null,{default:i(()=>[Ok,Hk,jk,qk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Reply Form",description:"A comment can contain a form to reply to a comment. This may have arbitrary content",code:t.replyFormCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/steve.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Steve Jobs")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[a("Revolutionary!")]),_:1}),e(h,null,{default:i(()=>[Uk]),_:1}),e(k,{reply:""},{default:i(()=>[e(B),e(w,{color:"primary",icon:"",labelPosition:"left"},{default:i(()=>[e(b,{name:"edit"}),a(" Add Reply ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(S,{title:"Collapsed",description:"Comments can be collapsed, or hidden from view",code:t.collapsedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/christian.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Christian Rocha")]),_:1}),e(g,null,{default:i(()=>[a("2 days ago")]),_:1}),e(c,null,{default:i(()=>[a(" I'm very interested in this motherboard. Do you know if it'd work in a Intel LGA775 CPU socket? ")]),_:1}),e(h,null,{default:i(()=>[Gk]),_:1})]),_:1}),e(y,{collapsed:""},{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[a("1 days ago")]),_:1}),e(c,null,{default:i(()=>[a("No, it wont")]),_:1}),e(h,null,{default:i(()=>[Yk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(S,{title:"Threaded",description:"A comment list can be threaded to showing the relationship between conversations",code:t.threadedCode},{default:i(()=>[e(y,{threaded:""},{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[Jk]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[Wk]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[Kk]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[Xk]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[Qk]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[Zk]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[eB]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[tB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Minimal",description:"Comments can hide extra information unless a user shows intent to interact with a comment",code:t.minimalCode},{default:i(()=>[e(y,{minimal:""},{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[iB]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[lB]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[aB]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[nB]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[sB]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[oB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[rB]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[uB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Size",description:"Comments can have different sizes",code:t.sizeCode},{default:i(()=>[e(y,{size:"small"},{default:i(()=>[e(m,{as:"h3",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[dB]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[cB]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[mB]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[pB]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[fB]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[gB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[hB]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[_B]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Inverted",description:"Comments's colors can be inverted",code:t.invertedCode},{default:i(()=>[e($,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(m,{as:"h3",inverted:"",dividing:""},{default:i(()=>[a("Comments")]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/matt.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Matt")]),_:1}),e(g,null,{default:i(()=>[bB]),_:1}),e(c,null,{default:i(()=>[a(" How artistic! ")]),_:1}),e(h,null,{default:i(()=>[vB]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/elliot.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Elliot Fu")]),_:1}),e(g,null,{default:i(()=>[yB]),_:1}),e(c,null,{default:i(()=>[a(" This has been very useful for my research. Thanks as well! ")]),_:1}),e(h,null,{default:i(()=>[CB]),_:1})]),_:1}),e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/jenny.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Jenny Hess")]),_:1}),e(g,null,{default:i(()=>[wB]),_:1}),e(c,null,{default:i(()=>[a(" Elliot you are always so right :) ")]),_:1}),e(h,null,{default:i(()=>[SB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,{src:"/images/avatar/small/joe.jpg"}),e(v,null,{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Joe Henderson")]),_:1}),e(g,null,{default:i(()=>[AB]),_:1}),e(c,null,{default:i(()=>[a(" Dude, this is awesome. Thanks so much ")]),_:1}),e(h,null,{default:i(()=>[kB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const $B=ge(xk,[["render",BB]]),TB=E({name:"FeedDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{feedCode:`<sui-feed>
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
</sui-feed>`}}}),xB=C("img",{src:Dt},null,-1),EB=C("img",{src:Dt},null,-1),RB=C("a",null,"Coworkers",-1),PB=C("img",{src:an},null,-1),zB=C("a",null,"Jenny Hess",-1),DB=C("a",null,"coworker",-1),MB=C("img",{src:yl},null,-1),IB=C("a",null,"Helen Troy",-1),VB=C("a",null,[C("img",{src:Q})],-1),FB=C("a",null,[C("img",{src:Q})],-1),NB=C("a",null,"Elliot Fu",-1),LB=C("a",null,"Jenny Hess",-1),OB=C("a",null,"Stevie Feliciano",-1),HB=C("a",null,"Elliot Fu",-1),jB=C("a",null,"Helen Troy",-1),qB=C("a",null,"Christian Rocha",-1),UB=C("img",{src:Dt},null,-1),GB=C("div",{class:"date"},"Just now",-1),YB=C("a",{class:"user"},"Elliot Fu",-1);function JB(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-feed-label"),r=_("sui-feed-user"),g=_("sui-feed-date"),c=_("sui-feed-summary"),h=_("sui-icon"),v=_("sui-feed-like"),f=_("sui-feed-meta"),y=_("sui-feed-content"),S=_("sui-feed-event"),B=_("sui-feed"),b=_("doc-example"),w=_("sui-feed-extra"),k=_("sui-segment"),$=_("sui-container");return I(),re("div",null,[e(p,{title:"Feed",sub:"A feed presents user activity chronologically"}),e($,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(b,{title:"Feed",description:"A feed",code:t.feedCode},{default:i(()=>[e(B,null,{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[xB]),_:1}),e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Elliot Fu")]),_:1}),a(" added you as a friend "),e(g,null,{default:i(()=>[a("1 Hour Ago")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,{name:"like"}),a(" 4 Likes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(b,{title:"Label",description:"An event can contain an image or icon label",code:t.labelCode},{default:i(()=>[e(B,null,{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[EB]),_:1}),e(y,null,{default:i(()=>[a(" You added Elliot Fu to the group "),RB]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Date",description:"An event or an event summary can contain a date",code:t.dateCode},{default:i(()=>[e(B,null,{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[PB]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(c,null,{default:i(()=>[a(" You added "),zB,a(" to your "),DB,a(" group. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Additional information",description:"An event can contain additional information like a set of images or text",code:t.additionalInfoCode},{default:i(()=>[e(B,null,{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[MB]),_:1}),e(y,null,{default:i(()=>[e(g,null,{default:i(()=>[a(" 3 days ago ")]),_:1}),e(c,null,{default:i(()=>[IB,a(" added 2 photos ")]),_:1}),e(w,{images:""},{default:i(()=>[VB,FB]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(b,{title:"Size",description:"A feed can have different sizes",code:t.sizeCode},{default:i(()=>[e(B,{size:"small"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[a("Followers Activity")]),_:1}),e(S,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[NB,a(" added "),LB,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[OB,a(" added "),HB,a(" as a friend ")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[e(y,null,{default:i(()=>[e(c,null,{default:i(()=>[jB,a(" added "),qB,a(" as a friend ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(b,{title:"Inverted",description:"A feed's color can be inverted",code:t.invertedCode},{default:i(()=>[e(k,{inverted:""},{default:i(()=>[e(B,{inverted:""},{default:i(()=>[e(S,null,{default:i(()=>[e(o,null,{default:i(()=>[UB]),_:1}),e(y,null,{default:i(()=>[GB,e(c,null,{default:i(()=>[YB,a(" posted on his page ")]),_:1}),e(w,{text:""},{default:i(()=>[a(" Hey there ! ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const WB=ge(TB,[["render",JB]]),KB=E({name:"ItemDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{itemsCode:`<sui-item-group>
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
</sui-item-group>`}}}),XB=C("img",{src:Q},null,-1),QB=C("span",null,"Description",-1),ZB=C("img",{src:Te},null,-1),e$=C("img",{src:Q},null,-1),t$=C("span",null,"Description",-1),i$=C("img",{src:Te},null,-1),l$=C("img",{src:Q},null,-1),a$=C("img",{src:Q},null,-1),n$=C("img",{src:Q},null,-1),s$=C("img",{src:Q},null,-1),o$=C("img",{src:Q},null,-1),r$=C("img",{src:Q},null,-1),u$=C("img",{src:Q},null,-1),d$=C("span",{class:"price"},"$1200",-1),c$=C("span",{class:"stay"},"1 Month",-1),m$=C("img",{src:Te},null,-1),p$=C("span",{class:"price"},"$1000",-1),f$=C("span",{class:"stay"},"2 Weeks",-1),g$=C("img",{src:Te},null,-1),h$=C("p",null,"Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.",-1),_$=C("p",null,"Many people also have their own barometers for what makes a cute dog.",-1),b$=C("img",{src:Te},null,-1),v$=C("img",{src:Q},null,-1),y$=C("span",{class:"cinema"},"Union Square 14",-1),C$=C("img",{src:Te},null,-1),w$=C("img",{src:Q},null,-1),S$=C("span",{class:"cinema"},"IFC Cinema",-1),A$=C("img",{src:Te},null,-1),k$=C("img",{src:Q},null,-1),B$=C("span",{class:"cinema"},"IFC",-1),$$=C("img",{src:Te},null,-1),T$=C("img",{src:Te},null,-1),x$=C("img",{src:Te},null,-1),E$=C("img",{src:Te},null,-1),R$=C("span",{class:"price"},"$1200",-1),P$=C("span",{class:"stay"},"1 Month",-1),z$=C("img",{src:Te},null,-1),D$=C("span",{class:"price"},"$1000",-1),M$=C("span",{class:"stay"},"2 Weeks",-1),I$=C("img",{src:Te},null,-1);function V$(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-item-image"),r=_("sui-item-header"),g=_("sui-item-meta"),c=_("sui-item-description"),h=_("sui-item-extra"),v=_("sui-item-content"),f=_("sui-item"),y=_("sui-item-group"),S=_("doc-example"),B=_("sui-image"),b=_("sui-icon"),w=_("sui-label"),k=_("sui-button"),$=_("sui-segment"),x=_("sui-container");return I(),re("div",null,[e(p,{title:"Item",sub:"An item view presents large collections of site content for display"}),e(x,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"Items",description:"A group of items",code:t.itemsCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[XB]),_:1}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[QB]),_:1}),e(c,null,{default:i(()=>[ZB]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[e$]),_:1}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Header")]),_:1}),e(g,null,{default:i(()=>[t$]),_:1}),e(c,null,{default:i(()=>[i$]),_:1}),e(h,null,{default:i(()=>[a(" Additional Details ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(S,{title:"Image",description:"An item can contain an image",code:t.imageCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[l$]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[a$]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[n$]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Content",description:"An item can contain content",code:t.contentCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[s$]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content A ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[o$]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content B ")]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[r$]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[a(" Content C ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Header",description:"An item can contain a header",code:t.headerCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[u$]),_:1}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Metadata",description:"An item can contain content metadata",code:t.metadataCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[d$,c$]),_:1}),e(c,null,{default:i(()=>[m$]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[p$,f$]),_:1}),e(c,null,{default:i(()=>[g$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Description",description:"An item can contain a description with a single or multiple paragraphs",code:t.descriptionCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(c,null,{default:i(()=>[h$,_$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Extra Content",description:"An item can contain extra content meant to be formatted separately from the main content",code:t.extraContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Cute Dog")]),_:1}),e(c,null,{default:i(()=>[b$]),_:1}),e(h,null,{default:i(()=>[e(b,{name:"check",color:"green"}),a(" 121 Votes ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(S,{title:"Divided",description:"Items can be divided to better distinguish between grouped content",code:t.dividedCode},{default:i(()=>[e(y,{divided:""},{default:i(()=>[e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[v$]),_:1}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("12 Years a Slave")]),_:1}),e(g,null,{default:i(()=>[y$]),_:1}),e(c,null,{default:i(()=>[C$]),_:1}),e(h,null,{default:i(()=>[e(w,null,{default:i(()=>[a("IMAX")]),_:1}),e(w,null,{default:i(()=>[e(b,{name:"globe"}),a(" Additional Languages ")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[w$]),_:1}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(g,null,{default:i(()=>[S$]),_:1}),e(c,null,{default:i(()=>[A$]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1}),e(w,null,{default:i(()=>[a("Limited")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(o,null,{default:i(()=>[k$]),_:1}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Watchmen")]),_:1}),e(g,null,{default:i(()=>[B$]),_:1}),e(c,null,{default:i(()=>[$$]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right",color:"primary"},{default:i(()=>[a(" Buy tickets "),e(b,{name:"right chevron"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Relaxed",description:"A group of items can relax its padding to provide more negative space",code:t.relaxedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(B,{size:"tiny",src:Q}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("12 Years a Slave")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(B,{size:"tiny",src:Q}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("My Neighbor Totoro")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(B,{size:"tiny",src:Q}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(r,{as:"a"},{default:i(()=>[a("Watchmen")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Vertical Alignment",description:"Content can specify its vertical alignment",code:t.verticalAlignCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Top Aligned")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[a("Middle Aligned")]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,{verticalAlign:"bottom"},{default:i(()=>[e(r,null,{default:i(()=>[a("Bottom Aligned")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Floated Content",description:"Any content element can be floated left or right",code:t.floatedContentCode},{default:i(()=>[e(y,null,{default:i(()=>[e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[a("Content A")]),_:1}),e(c,null,{default:i(()=>[T$]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[a("Content B")]),_:1}),e(c,null,{default:i(()=>[x$]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,{verticalAlign:"middle"},{default:i(()=>[e(r,null,{default:i(()=>[a("Content C")]),_:1}),e(c,null,{default:i(()=>[E$]),_:1}),e(h,null,{default:i(()=>[e(k,{floated:"right"},{default:i(()=>[a("Action")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(S,{title:"Inverted",description:"An item can be inverted to appear on a dark background",code:t.invertedCode},{default:i(()=>[e($,{inverted:""},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Arrowhead Valley Camp")]),_:1}),e(g,null,{default:i(()=>[R$,P$]),_:1}),e(c,null,{default:i(()=>[z$]),_:1})]),_:1})]),_:1}),e(f,null,{default:i(()=>[e(B,{size:"small",src:Q}),e(v,null,{default:i(()=>[e(r,null,{default:i(()=>[a("Buck's Homebrew Stayaway")]),_:1}),e(g,null,{default:i(()=>[D$,M$]),_:1}),e(c,null,{default:i(()=>[I$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const F$=ge(KB,[["render",V$]]),N$=E({name:"StatisticDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{statisticCode:'<sui-statistic value="5,550" label="Downloads" />',groupCode:`<sui-statistic-group>
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
<sui-statistic size="huge" value="2,204" label="Views" />`}}}),L$=C("br",null,null,-1),O$=C("br",null,null,-1),H$=C("p",null,"Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.",-1),j$=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1),q$=C("p",null,"Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.",-1),U$=C("p",null,"Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.",-1);function G$(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-statistic"),r=_("doc-example"),g=_("sui-statistic-group"),c=_("sui-statistic-value"),h=_("sui-statistic-label"),v=_("sui-icon"),f=_("sui-image"),y=_("sui-segment"),S=_("sui-container");return I(),re("div",null,[e(p,{title:"Statistic",sub:"A statistic emphasizes the current value of an attribute"}),e(S,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Statistic",description:"A statistic can display a value with a label above or below it",code:t.statisticCode},{default:i(()=>[e(o,{value:"5,550",label:"Downloads"})]),_:1},8,["code"]),e(r,{title:"Statistic Group",description:"A group of statistics",code:t.groupCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{value:"22",label:"Faves"}),e(o,{value:"31,200",label:"Views"}),e(o,{value:"22",label:"Members"})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(r,{title:"Value",description:"A statistic can contain a numeric, icon, image, or text value",code:t.valueCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{value:"22",label:"Faves"}),e(o,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[a(" Three"),L$,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,null,{default:i(()=>[e(f,{circular:"",inline:"",src:hs}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Label",description:"A statistic can contain a label to help provide context for the presented value",code:t.labelCode},{default:i(()=>[e(o,{value:"2,204",label:"Views"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Horizontal Statistic",description:"A statistic can present its measurement horizontally",code:t.horizontalCode},{default:i(()=>[e(o,{horizontal:"",value:"2,204",label:"Views"})]),_:1},8,["code"]),e(r,{title:"Colored",description:"A statistic can be formatted to be different colors",code:t.coloredCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(r,{title:"Inverted",description:"A statistic can be formatted to fit on a dark background",code:t.invertedCode},{default:i(()=>[e(y,{inverted:""},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Stackable",description:"A statistic can automatically stack rows to a single columns on mobile devices",code:t.stackableCode},{default:i(()=>[e(g,{stackable:""},{default:i(()=>[e(o,{color:"red",value:"27",label:"Red"}),e(o,{color:"orange",value:"8",label:"Orange"}),e(o,{color:"yellow",value:"28",label:"Yellow"}),e(o,{color:"olive",value:"7",label:"Olive"}),e(o,{color:"green",value:"14",label:"Green"}),e(o,{color:"teal",value:"82",label:"Teal"}),e(o,{color:"blue",value:"1",label:"Blue"}),e(o,{color:"violet",value:"22",label:"Violet"}),e(o,{color:"purple",value:"23",label:"Purple"}),e(o,{color:"pink",value:"15",label:"Pink"}),e(o,{color:"brown",value:"36",label:"Brown"}),e(o,{color:"grey",value:"49",label:"Grey"})]),_:1})]),_:1},8,["code"]),e(r,{title:"Evenly Divided",description:"A statistic group can have its items divided evenly",code:t.evenlyDividedCode},{default:i(()=>[e(g,{widths:4},{default:i(()=>[e(o,{value:"22",label:"Faves"}),e(o,null,{default:i(()=>[e(c,{text:""},{default:i(()=>[a(" Three"),O$,a(" Thousand ")]),_:1}),e(h,null,{default:i(()=>[a("Signups")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,null,{default:i(()=>[e(v,{name:"plane"}),a(" 5 ")]),_:1}),e(h,null,{default:i(()=>[a("Flights")]),_:1})]),_:1}),e(o,null,{default:i(()=>[e(c,null,{default:i(()=>[e(f,{circular:"",inline:"",src:hs}),a(" 42 ")]),_:1}),e(h,null,{default:i(()=>[a("Team Members")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(r,{title:"Floated",description:"An statistic can sit to the left or right of other content",code:t.floatedCode},{default:i(()=>[e(y,null,{default:i(()=>[e(o,{floated:"right",value:"2,204",label:"Views"}),H$,j$,e(o,{floated:"left",value:"2,204",label:"Views"}),q$,U$]),_:1})]),_:1},8,["code"]),e(r,{title:"Size",description:"A statistic can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{size:"mini",value:"2,204",label:"Views"}),e(o,{size:"tiny",value:"2,204",label:"Views"}),e(o,{size:"small",value:"2,204",label:"Views"}),e(o,{value:"2,204",label:"Views"}),e(o,{size:"large",value:"2,204",label:"Views"}),e(o,{size:"huge",value:"2,204",label:"Views"})]),_:1},8,["code"])]),_:1})])}const Y$=ge(N$,[["render",G$]]),J$=E({name:"AccordionDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{accordionCode:`<sui-accordion>
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
</sui-segment>`}}}),W$=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),K$=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),X$=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),Q$=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),Z$=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),eT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),tT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),iT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),lT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),aT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),nT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),sT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),oT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),rT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),uT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),dT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1),cT=C("p",null," A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. ",-1),mT=C("p",null," There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion. ",-1),pT=C("p",null," Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. ",-1),fT=C("p",null," A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily. ",-1);function gT(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-accordion-tab"),r=_("sui-accordion"),g=_("doc-example"),c=_("sui-segment"),h=_("sui-container");return I(),re("div",null,[e(p,{title:"Accordion",sub:"An accordion allows users to toggle the display of sections of content"}),e(h,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(g,{title:"Accordion",description:"A standard accordion",code:t.accordionCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[W$]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[K$]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[X$,Q$]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Styled",description:"A styled accordion adds basic formatting",code:t.styledCode},{default:i(()=>[e(r,{styled:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[Z$]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[eT]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[tT,iT]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(g,{title:"Fluid",description:"An accordion can take up the width of its container",code:t.fluidCode},{default:i(()=>[e(r,{fluid:"",styled:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[lT]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[aT]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[nT,sT]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Inverted",description:"An accordion can be formatted to appear on dark backgrounds",code:t.invertedCode},{default:i(()=>[e(c,{inverted:""},{default:i(()=>[e(r,{inverted:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[oT]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[rT]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[uT,dT]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Usage")]),_:1}),e(g,{title:"Multiple",description:"An accordion can have multiple panels open at the same time",code:t.multipleCode},{default:i(()=>[e(r,{multiple:""},{default:i(()=>[e(o,{title:"What is a dog?"},{default:i(()=>[cT]),_:1}),e(o,{title:"What kinds of dogs are there?"},{default:i(()=>[mT]),_:1}),e(o,{title:"How do you acquire a dog?"},{default:i(()=>[pT,fT]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const hT=ge(J$,[["render",gT]]),_T=E({name:"CalendarDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{calendar1:H(null),calendarCode:'<sui-calendar v-model="calendar1" placeholder="Date/Time" />'}}});function bT(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-calendar"),r=_("doc-example"),g=_("sui-container");return I(),re("div",null,[e(p,{title:"Calendar",sub:"A calendar allows users to select any date or time"}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Calendar",description:"A standard calendar",code:t.calendarCode},{default:i(()=>[e(o,{modelValue:t.calendar1,"onUpdate:modelValue":l[0]||(l[0]=c=>t.calendar1=c),placeholder:"Date/Time"},null,8,["modelValue"])]),_:1},8,["code"])]),_:1})])}const vT=ge(_T,[["render",bT]]),yT=E({name:"PropertyListTable",props:{properties:Array}});function CT(t,l,n,s,u,d){const p=_("sui-table-header-cell"),m=_("sui-table-row"),o=_("sui-table-header"),r=_("sui-table-cell"),g=_("sui-table-body"),c=_("sui-table");return I(),te(c,{celled:""},{default:i(()=>[e(o,null,{default:i(()=>[e(m,null,{default:i(()=>[e(p,null,{default:i(()=>[a("Name")]),_:1}),e(p,null,{default:i(()=>[a("Type")]),_:1}),e(p,null,{default:i(()=>[a("Default")]),_:1}),e(p,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(g,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.properties,h=>(I(),te(m,{key:h.name},{default:i(()=>[e(r,null,{default:i(()=>[a(Be(h.name),1)]),_:2},1024),e(r,null,{default:i(()=>[a(Be(h.type),1)]),_:2},1024),e(r,null,{default:i(()=>[a(Be(h.default),1)]),_:2},1024),e(r,null,{default:i(()=>[a(Be(h.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}const sn=ge(yT,[["render",CT]]),wT=E({name:"CheckboxDoc",components:{DocPageHeader:je,DocExample:$e,PropertyListTable:sn},setup(){const t=H(!1),l='<sui-checkbox label="Make my profile visible" v-model="checked" />',n=H([]),s=`<sui-checkbox label="Apple" value="Apple" v-model="selected"  />
<sui-checkbox label="Banana" value="Banana" v-model="selected"  />
<sui-checkbox label="Chocolate" value="Chocolate" v-model="selected"  />`,u=H(!1),d='<sui-checkbox toggle v-model="toggle" />',p=H(!1);return{checked:t,checkboxCode:l,selected:n,multipleCode:s,toggle:u,toggleCode:d,slider:p,sliderCode:'<sui-checkbox slider v-model="slider" />',properties:[{name:"label",type:"string",default:"null",description:"Label of the checkbox."},{name:"modelValue",type:"any",default:"null",description:"Value binding of the checkbox."},{name:"value",type:"any",default:"null",description:"Value of the checkbox."}],events:[{name:"change",description:"Callback to invoke when checkbox value is changed."},{name:"click",description:"Callback to invoke when checkbox is clicked."}]}}}),ST={class:"ui form"},AT={class:"grouped fields"},kT={class:"field"},BT={class:"field"},$T={class:"field"};function TT(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-checkbox"),r=_("doc-example"),g=_("property-list-table"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),f=_("sui-table-cell"),y=_("sui-table-body"),S=_("sui-table"),B=_("sui-container");return I(),re("div",null,[e(p,{title:"Checkbox",sub:"A checkbox allows a user to select a value from a small set of options, often binary"}),e(B,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Checkbox",description:"A standard checkbox",code:t.checkboxCode},{default:i(()=>[e(o,{label:"Make my profile visible",modelValue:t.checked,"onUpdate:modelValue":l[0]||(l[0]=b=>t.checked=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(r,{title:"Multiple",description:"Multiple mode is enabled by default, v-model property refers to an array to bind the selected values",code:t.multipleCode},{default:i(()=>[C("div",ST,[C("div",AT,[C("div",kT,[e(o,{label:"Apple",value:"Apple",modelValue:t.selected,"onUpdate:modelValue":l[1]||(l[1]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",BT,[e(o,{label:"Banana",value:"Banana",modelValue:t.selected,"onUpdate:modelValue":l[2]||(l[2]=b=>t.selected=b)},null,8,["modelValue"])]),C("div",$T,[e(o,{label:"Chocolate",value:"Chocolate",modelValue:t.selected,"onUpdate:modelValue":l[3]||(l[3]=b=>t.selected=b)},null,8,["modelValue"])])])]),a(" selected : "+Be(t.selected),1)]),_:1},8,["code"]),e(r,{title:"Toggle",description:"A checkbox can toggle",code:t.toggleCode},{default:i(()=>[e(o,{toggle:"",modelValue:t.toggle,"onUpdate:modelValue":l[4]||(l[4]=b=>t.toggle=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(r,{title:"Slider",description:"A checkbox can look like a slider",code:t.sliderCode},{default:i(()=>[e(o,{slider:"",modelValue:t.slider,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(S,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.events,b=>(I(),te(h,{key:b.name},{default:i(()=>[e(f,null,{default:i(()=>[a(Be(b.name),1)]),_:2},1024),e(f,null,{default:i(()=>[a(Be(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const xT=ge(wT,[["render",TT]]),ET=E({name:"DimmerDoc",components:{DocPageHeader:je,DocExample:$e},setup(){const t=`<sui-dimmer-dimmable>
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
</sui-dimmer-dimmable>`,n=H(!1);return{dimmerCode:t,contentDimmerCode:l,active:n,pageDimmerCode:`<div>
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
</div>`}}});function RT(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-image"),r=_("sui-image-group"),g=_("sui-dimmer"),c=_("sui-dimmer-dimmable"),h=_("doc-example"),v=_("sui-icon"),f=_("sui-button"),y=_("sui-header-subheader"),S=_("sui-container");return I(),re("div",null,[e(p,{title:"Dimmer",sub:"A dimmer hides distractions to focus attention on particular content"}),e(S,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dimmer",description:"A simple dimmer displays no content",code:t.dimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(m,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(r,{size:"small"},{default:i(()=>[e(o,{src:Q}),e(o,{src:Q}),e(o,{src:Q})]),_:1}),e(o,{size:"medium",src:Ft}),e(g,{active:""})]),_:1})]),_:1},8,["code"]),e(h,{title:"Content Dimmer",description:"A dimmer can display content",code:t.contentDimmerCode},{default:i(()=>[e(c,null,{default:i(()=>[e(m,{as:"h3"},{default:i(()=>[a("Overlayable Section")]),_:1}),e(r,{size:"small"},{default:i(()=>[e(o,{src:Q}),e(o,{src:Q}),e(o,{src:Q})]),_:1}),e(o,{size:"medium",src:Ft}),e(g,{active:""},{default:i(()=>[e(m,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! ")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Page Dimmer",description:"A dimmer can be formatted to be fixed to the page",code:t.pageDimmerCode},{default:i(()=>[C("div",null,[e(f,{labeled:"",icon:"",onClick:l[0]||(l[0]=B=>t.active=!0)},{default:i(()=>[e(v,{name:"plus"}),a(" Show ")]),_:1}),e(g,{active:t.active,page:"",onClick:l[1]||(l[1]=B=>t.active=!1)},{default:i(()=>[e(m,{as:"h2",icon:"",inverted:""},{default:i(()=>[e(v,{name:"heart"}),a(" Dimmed Message! "),e(y,null,{default:i(()=>[a("Dimmer sub-header")]),_:1})]),_:1})]),_:1},8,["active"])])]),_:1},8,["code"])]),_:1})])}const PT=ge(ET,[["render",RT]]),zT=E({name:"DropdownDoc",components:{DocPageHeader:je,DocExample:$e},setup(){const t=`<sui-dropdown text="File">
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
</sui-dropdown>`,l=H(null),n=`<sui-dropdown
  selection
  placeholder="Pet"
  v-model="selected1"
  :options="['Cat', 'Dog', 'Bird', 'Rabbit', 'Squirrel', 'Horse']"
/>`,s=H(null),u=[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"},{value:"ad",flag:"ad",text:"Andorra"},{value:"ao",flag:"ao",text:"Angola"},{value:"ai",flag:"ai",text:"Anguilla"},{value:"ag",flag:"ag",text:"Antigua"},{value:"ar",flag:"ar",text:"Argentina"},{value:"am",flag:"am",text:"Armenia"},{value:"aw",flag:"aw",text:"Aruba"},{value:"au",flag:"au",text:"Australia"},{value:"at",flag:"at",text:"Austria"},{value:"az",flag:"az",text:"Azerbaijan"},{value:"bs",flag:"bs",text:"Bahamas"},{value:"bh",flag:"bh",text:"Bahrain"},{value:"bd",flag:"bd",text:"Bangladesh"},{value:"bb",flag:"bb",text:"Barbados"},{value:"by",flag:"by",text:"Belarus"},{value:"be",flag:"be",text:"Belgium"},{value:"bz",flag:"bz",text:"Belize"},{value:"bj",flag:"bj",text:"Benin"}],d=`<sui-dropdown
  search
  selection
  fluid
  v-model="selected2"
  :options="searchSelectionOptions"
  placeholder="Select Country"
/>`,p=H(null),m=["Arabic","Chinese","Danish","Dutch","English","French","German","Greek","Hungarian","Italian","Japanese","Korean","Lithuanian","Persian","Polish","Portuguese","Russian","Spanish","Swedish","Turkish","Vietnamese"],o=`<sui-dropdown
  clearable
  selection
  v-model="selected3"
  :options="clearableSelectionOptions"
  placeholder="Select Language"
/>`,r=H(null),g=`<sui-dropdown
  selection
  multiple
  fluid
  v-model="selected4"
  placeholder="Skills"
  :options="['Angular', 'CSS', 'Ember', 'HTML', 'Javascript', 'NodeJS']"
/>`,c=H(null),h=`<sui-dropdown
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
/>`,v=H(null),f=`<sui-dropdown
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
/>`,y=H(null),S=`<sui-dropdown
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
/>`,B=H({text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}});return{dropdownCode:t,selected1:l,selectionCode:n,selected2:s,searchSelectionOptions:u,searchSelectionCode:d,selected3:p,clearableSelectionOptions:m,clearableSelectionCode:o,selected4:r,multipleCode:g,selected5:c,multipleCode2:h,selected6:v,searchDropdownCode:f,selected7:y,searchInMenuCode:S,selected8:B,inlineCode:`<span>
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
</sui-button-group>`}}});function DT(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-dropdown-item"),r=_("sui-divider"),g=_("sui-dropdown-menu"),c=_("sui-dropdown"),h=_("doc-example"),v=_("sui-button"),f=_("sui-button-group"),y=_("sui-container");return I(),re("div",null,[e(p,{title:"Dropdown",sub:"A dropdown allows a user to select a value from a series of options"}),e(y,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(h,{title:"Dropdown",description:"A dropdown",code:t.dropdownCode},{default:i(()=>[e(c,{text:"File"},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{text:"New"}),e(o,{text:"Open...",description:"ctrl + o"}),e(o,{text:"Save as...",description:"ctrl + s"}),e(o,{text:"Rename",description:"ctrl + r"}),e(o,{text:"Make a copy"}),e(o,{icon:"folder",text:"Move to folder"}),e(o,{icon:"trash",text:"Move to trash"}),e(r),e(o,{text:"Download As..."}),e(o,{text:"Publish To Web"}),e(o,{text:"E-mail Collaborators"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Selection",description:"A dropdown can be used to select between choices in a form",code:t.selectionCode},{default:i(()=>[e(c,{selection:"",placeholder:"Pet",modelValue:t.selected1,"onUpdate:modelValue":l[0]||(l[0]=S=>t.selected1=S),options:["Cat","Dog","Bird","Rabbit","Squirrel","Horse"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Selection",description:"A selection dropdown can allow a user to search through a large list of choices",code:t.searchSelectionCode},{default:i(()=>[e(c,{search:"",selection:"",fluid:"",modelValue:t.selected2,"onUpdate:modelValue":l[1]||(l[1]=S=>t.selected2=S),options:t.searchSelectionOptions,placeholder:"Select Country"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Clearable Selection",description:"A clearable selection dropdown can allow a user to cancel to cancel a previous selection",code:t.clearableSelectionCode},{default:i(()=>[e(c,{clearable:"",selection:"",modelValue:t.selected3,"onUpdate:modelValue":l[2]||(l[2]=S=>t.selected3=S),options:t.clearableSelectionOptions,placeholder:"Select Language"},null,8,["modelValue","options"])]),_:1},8,["code"]),e(h,{title:"Multiple Selection",description:"A selection dropdown can allow multiple selections",code:t.multipleCode},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",modelValue:t.selected4,"onUpdate:modelValue":l[3]||(l[3]=S=>t.selected4=S),placeholder:"Skills",options:["Angular","CSS","Ember","HTML","Javascript","NodeJS"]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{code:t.multipleCode2},{default:i(()=>[e(c,{selection:"",multiple:"",fluid:"",search:"",modelValue:t.selected5,"onUpdate:modelValue":l[4]||(l[4]=S=>t.selected5=S),placeholder:"Skills",options:[{value:"af",flag:"af",text:"Afghanistan"},{value:"ax",flag:"ax",text:"Aland Islands"},{value:"al",flag:"al",text:"Albania"},{value:"dz",flag:"dz",text:"Algeria"},{value:"as",flag:"as",text:"American Samoa"}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search Dropdown",description:"A dropdown can be searchable",code:t.searchDropdownCode},{default:i(()=>[e(c,{button:"",floating:"",labeled:"",search:"",icon:"world",modelValue:t.selected6,"onUpdate:modelValue":l[5]||(l[5]=S=>t.selected6=S),options:[{text:"Arabic",value:"Arabic"},{text:"Chinese",value:"Chinese"},{text:"Danish",value:"Danish"},{text:"Dutch",value:"Dutch"},{text:"English",value:"English"},{text:"French",value:"French"},{text:"German",value:"German"},{text:"Greek",value:"Greek"},{text:"Hungarian",value:"Hungarian"},{text:"Italian",value:"Italian"},{text:"Japanese",value:"Japanese"},{text:"Korean",value:"Korean"},{text:"Lithuanian",value:"Lithuanian"},{text:"Persian",value:"Persian"},{text:"Polish",value:"Polish"},{text:"Portuguese",value:"Portuguese"},{text:"Russian",value:"Russian"},{text:"Spanish",value:"Spanish"},{text:"Swedish",value:"Swedish"},{text:"Turkish",value:"Turkish"},{text:"Vietnamese",value:"Vietnamese"}],text:"Select Language"},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Search In-Menu",description:"A dropdown can include a search prompt inside its menu",code:t.searchInMenuCode},{default:i(()=>[e(c,{text:"Filter Posts",icon:"filter",floating:"",labeled:"",button:"",searchInMenu:"",modelValue:t.selected7,"onUpdate:modelValue":l[6]||(l[6]=S=>t.selected7=S),options:[{text:"Important",value:"Important",label:{color:"red",empty:!0,circular:!0}},{text:"Announcement",value:"Announcement",label:{color:"blue",empty:!0,circular:!0}},{text:"Cannot Fix",value:"Cannot Fix",label:{color:"black",empty:!0,circular:!0}},{text:"News",value:"News",label:{color:"purple",empty:!0,circular:!0}},{text:"Enhancement",value:"Enhancement",label:{color:"orange",empty:!0,circular:!0}},{text:"Change Declined",value:"Change Declined",label:{empty:!0,circular:!0}},{text:"Off Topic",value:"Off Topic",label:{color:"yellow",empty:!0,circular:!0}},{text:"Interesting",value:"Interesting",label:{color:"pink",empty:!0,circular:!0}},{text:"Discussion",value:"Discussion",label:{color:"green",empty:!0,circular:!0}}]},null,8,["modelValue"])]),_:1},8,["code"]),e(h,{title:"Inline",description:"A dropdown can be formatted to appear inline in other content",code:t.inlineCode},{default:i(()=>[C("span",null,[a(" Show me posts by "),e(c,{inline:"",modelValue:t.selected8,"onUpdate:modelValue":l[7]||(l[7]=S=>t.selected8=S),options:[{text:"Jenny Hess",value:"Jenny Hess",image:{avatar:!0,src:"/images/avatar/small/jenny.jpg"}},{text:"Elliot Fu",value:"Elliot Fu",image:{avatar:!0,src:"/images/avatar/small/elliot.jpg"}},{text:"Stevie Feliciano",value:"Stevie Feliciano",image:{avatar:!0,src:"/images/avatar/small/stevie.jpg"}},{text:"Christian",value:"Christian",image:{avatar:!0,src:"/images/avatar/small/christian.jpg"}}]},null,8,["modelValue","options"])])]),_:1},8,["code"]),e(h,{title:"Pointing",description:"A dropdown can be formatted so that its menu is pointing",code:t.pointingCode},{default:i(()=>[e(c,{icon:"wrench",button:"",pointing:"top left"},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{text:"New"}),e(o,{text:"Save As"}),e(o,{text:"Edit"})]),_:1})]),_:1})]),_:1},8,["code"]),e(h,{title:"Floating",description:"A dropdown menu can appear to be floating below an element",code:t.floatingCode},{default:i(()=>[e(f,{color:"teal"},{default:i(()=>[e(v,null,{default:i(()=>[a("Save")]),_:1}),e(c,{floating:"",button:"",icon:"dropdown"},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{text:"Edit Post",icon:"edit"}),e(o,{text:"Remove Post",icon:"delete"}),e(o,{text:"Hide Post",icon:"hide"})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})])}const MT=ge(zT,[["render",DT]]),IT=E({name:"EmbedDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{youtubeCode:`<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`,aspectRatioCode:`<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`}}});function VT(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-embed"),r=_("doc-example"),g=_("sui-container");return I(),re("div",null,[e(p,{title:"Embed",sub:"An embed displays content from other websites like YouTube videos or Google Maps"}),e(g,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"YouTube",description:"An embed can be used to display YouTube Content",code:t.youtubeCode},{default:i(()=>[e(o,{id:"O6Xo21L0ybE",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Aspect Ratio",description:"An embed can specify an alternative aspect ratio",code:t.aspectRatioCode},{default:i(()=>[e(o,{aspectRatio:"4:3",id:"HTZudKi36bo",placeholder:"/images/wireframe/image-16by9.png",source:"youtube"})]),_:1},8,["code"])]),_:1})])}const FT=ge(IT,[["render",VT]]),NT="/vue-fomantic-ui/images/avatar/large/rachel.png",LT=E({name:"ModalDoc",components:{DocPageHeader:je,DocExample:$e},setup(){const t=`<div>
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
</div>`,l=H(!1),n=H(!1);return{modalCode:t,modal1:l,basicModal:n,basicCode:`<div>
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
</div>`}}}),OT=C("p",null," We've found the following gravatar image associated with your e-mail address. ",-1),HT=C("p",null,"Is it okay to use this photo?",-1),jT=C("p",null," Your inbox is getting full, would you like us to enable automatic archiving of old messages? ",-1);function qT(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-button"),r=_("sui-modal-header"),g=_("sui-image"),c=_("sui-modal-description"),h=_("sui-modal-content"),v=_("sui-modal-actions"),f=_("sui-modal"),y=_("doc-example"),S=_("sui-icon"),B=_("sui-container");return I(),re("div",null,[e(p,{title:"Modal",sub:"A modal displays content that temporarily blocks interactions with the main view of a site"}),e(B,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(y,{title:"Modal",description:"A standard modal",code:t.modalCode},{default:i(()=>[C("div",null,[e(o,{onClick:l[0]||(l[0]=b=>t.modal1=!0)},{default:i(()=>[a("Show Modal")]),_:1}),e(f,{modelValue:t.modal1,"onUpdate:modelValue":l[2]||(l[2]=b=>t.modal1=b)},{default:i(()=>[e(r,null,{default:i(()=>[a("Select a Photo")]),_:1}),e(h,{image:""},{default:i(()=>[e(g,{wrapped:"",size:"medium",src:NT}),e(c,null,{default:i(()=>[e(m,null,{default:i(()=>[a("Default Profile Image")]),_:1}),OT,HT]),_:1})]),_:1}),e(v,null,{default:i(()=>[e(o,{positive:"",onClick:l[1]||(l[1]=b=>t.modal1=!1)},{default:i(()=>[a("OK")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e(y,{title:"Basic",description:"A modal can reduce its complexity",code:t.basicCode},{default:i(()=>[C("div",null,[e(o,{onClick:l[3]||(l[3]=b=>t.basicModal=!0)},{default:i(()=>[a("Basic Modal")]),_:1}),e(f,{basic:"",modelValue:t.basicModal,"onUpdate:modelValue":l[5]||(l[5]=b=>t.basicModal=b)},{default:i(()=>[e(r,{icon:""},{default:i(()=>[e(S,{name:"archive"}),a(" Archive Old Messages ")]),_:1}),e(h,null,{default:i(()=>[jT]),_:1}),e(v,null,{default:i(()=>[e(o,{basic:"",color:"red",inverted:"",onClick:l[4]||(l[4]=b=>t.basicModal=!1)},{default:i(()=>[e(S,{name:"remove"}),a(" No ")]),_:1}),e(o,{basic:"",color:"green"},{default:i(()=>[e(S,{name:"checkmark"}),a(" Yes ")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["code"])]),_:1})])}const UT=ge(LT,[["render",qT]]),GT="/vue-fomantic-ui/images/movies/totoro-horizontal.jpg",YT=E({name:"PopupDoc",components:{DocPageHeader:je,DocExample:$e},setup(){const t=H(null),l=`<sui-button icon ref="trigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup :trigger="trigger">
  Add users to your feed
</sui-popup>`,n=H(null),s=H(null),u=H(null),d=`<sui-image avatar src="/images/avatar/small/elliot.jpg" ref="titledTrigger1" />
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
/>`,p=H(null),m=`<sui-card ref="triggerTriger">
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
</sui-popup>`,o=H(null),r=`<sui-button icon ref="basicTrigger">
  <sui-icon name="add" />
</sui-button>
<sui-popup
  :trigger="basicTrigger"
  basic
  content="The default theme's basic popup removes the pointing arrow."
/>`,g=H(null),c=H(null),h=H(null),v=`<sui-icon name="heart" circular ref="wideTrigger1" />
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
</sui-popup>`,f=H(null),y=H(null),S=H(null),B=H(null),b=H(null),w=H(null),k=H(null),$=H(null),x=`<sui-button ref="positionTrigger1">Top Left</sui-button>
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
<sui-popup :trigger="positionTrigger8" position="left center" content="I am positioned to the left center" />`,D=H(null),V=`<sui-button ref="flowingTrigger">Show Flowing Popup</sui-button>
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
</sui-popup>`,z=H(null),L=H(null),Y=H(null),j=H(null),de=H(null),ke=`<sui-icon name="heart" circular link ref="sizeTrigger1" />
<sui-icon name="heart" circular link ref="sizeTrigger2" />
<sui-icon name="heart" circular link ref="sizeTrigger3" />
<sui-icon name="heart" circular link ref="sizeTrigger4" />
<sui-icon name="heart" circular link ref="sizeTrigger5" />

<sui-popup size="mini" content="Hello. This is a mini popup" :trigger="sizeTrigger1" />
<sui-popup size="tiny" content="Hello. This is a tiny popup" :trigger="sizeTrigger2" />
<sui-popup size="small" content="Hello. This is a small popup" :trigger="sizeTrigger3" />
<sui-popup size="large" content="Hello. This is a large popup" :trigger="sizeTrigger4" />
<sui-popup size="huge" content="Hello. This is a huge popup" :trigger="sizeTrigger5" />`,O=H(null),G=H(null);return{popupTrigger:t,popupCode:l,titledTrigger1:n,titledTrigger2:s,titledTrigger3:u,titledCode:d,triggerTriger:p,triggerCode:m,basicTrigger:o,basicCode:r,wideTrigger1:g,wideTrigger2:c,wideTrigger3:h,wideCode:v,positionTrigger1:f,positionTrigger2:y,positionTrigger3:S,positionTrigger4:B,positionTrigger5:b,positionTrigger6:w,positionTrigger7:k,positionTrigger8:$,positionCode:x,flowingTrigger:D,flowingCode:V,sizeTrigger1:z,sizeTrigger2:L,sizeTrigger3:Y,sizeTrigger4:j,sizeTrigger5:de,sizeCode:ke,invertedTrigger1:O,invertedTrigger2:G,invertedCode:`<sui-icon name="heart" circular ref="invertedTrigger1" />
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
/>`}}}),JT=C("p",null,[C("b",null,"2"),a(" projects, $10 a month ")],-1),WT=C("p",null,[C("b",null,"5"),a(" projects, $20 a month ")],-1),KT=C("p",null,[C("b",null,"8"),a(" projects, $25 a month ")],-1);function XT(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-icon"),r=_("sui-button"),g=_("sui-popup"),c=_("doc-example"),h=_("sui-image"),v=_("sui-card-header"),f=_("sui-card-description"),y=_("sui-card-content"),S=_("sui-card"),B=_("sui-rating"),b=_("sui-divider"),w=_("sui-grid-column"),k=_("sui-grid"),$=_("sui-container");return I(),re("div",null,[e(p,{title:"Popup",sub:"A popup displays additional information on top of a page"}),e($,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(c,{title:"Popup",description:"An element can specify popup content to appear",code:t.popupCode},{default:i(()=>[e(r,{icon:"",ref:"popupTrigger"},{default:i(()=>[e(o,{name:"add"})]),_:1},512),e(g,{trigger:t.popupTrigger},{default:i(()=>[a(" Add users to your feed ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Titled",description:"An element can specify popup content with a title",code:t.titledCode},{default:i(()=>[e(h,{avatar:"",src:Dt,ref:"titledTrigger1"},null,512),e(h,{avatar:"",src:Ol,ref:"titledTrigger2"},null,512),e(h,{avatar:"",src:nn,ref:"titledTrigger3"},null,512),e(g,{trigger:t.titledTrigger1,header:"Elliot Fu",content:"Elliot has been a member since July 2012"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger2,header:"Stevie Feliciano",content:"Stevie has been a member since August 2013"},null,8,["trigger"]),e(g,{trigger:t.titledTrigger3,header:"Matt",content:"Matt has been a member since July 2014"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Trigger",description:"A trigger can be complex element",code:t.triggerCode},{default:i(()=>[e(S,{ref:"triggerTriger"},{default:i(()=>[e(h,{src:GT}),e(y,null,{default:i(()=>[e(v,null,{default:i(()=>[a("My Neighbor Totoro")]),_:1}),e(f,null,{default:i(()=>[a(" Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by magical spirits. ")]),_:1})]),_:1})]),_:1},512),e(g,{trigger:t.triggerTriger,header:"User Rating"},{default:i(()=>[e(B,{icon:"star",defaultRating:3,maxRating:4})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(c,{title:"Basic",description:"A popup can provide more basic formatting",code:t.basicCode},{default:i(()=>[e(r,{icon:"",ref:"basicTrigger"},{default:i(()=>[e(o,{name:"add"})]),_:1},512),e(g,{trigger:t.basicTrigger,basic:"",content:"The default theme's basic popup removes the pointing arrow."},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Position",description:"A popup can be position around its trigger",code:t.positionCode},{default:i(()=>[e(r,{ref:"positionTrigger1"},{default:i(()=>[a("Top Left")]),_:1},512),e(r,{ref:"positionTrigger2"},{default:i(()=>[a("Top Center")]),_:1},512),e(r,{ref:"positionTrigger3"},{default:i(()=>[a("Top Right")]),_:1},512),e(b),e(r,{ref:"positionTrigger4"},{default:i(()=>[a("Bottom Left")]),_:1},512),e(r,{ref:"positionTrigger5"},{default:i(()=>[a("Bottom Center")]),_:1},512),e(r,{ref:"positionTrigger6"},{default:i(()=>[a("Bottom Right")]),_:1},512),e(b),e(r,{ref:"positionTrigger7"},{default:i(()=>[a("Right Center")]),_:1},512),e(r,{ref:"positionTrigger8"},{default:i(()=>[a("Left Center")]),_:1},512),e(g,{trigger:t.positionTrigger1,position:"top left",content:"I am positioned to the top left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger2,position:"top center",content:"I am positioned to the top center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger3,position:"top right",content:"I am positioned to the top right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger4,position:"bottom left",content:"I am positioned to the bottom left"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger5,position:"bottom center",content:"I am positioned to the bottom center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger6,position:"bottom right",content:"I am positioned to the bottom right"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger7,position:"right center",content:"I am positioned to the right center"},null,8,["trigger"]),e(g,{trigger:t.positionTrigger8,position:"left center",content:"I am positioned to the left center"},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Flowing",description:"A popup can have no maximum width and continue to flow to fit its content",code:t.flowingCode},{default:i(()=>[e(r,{ref:"flowingTrigger"},{default:i(()=>[a("Show Flowing Popup")]),_:1},512),e(g,{trigger:t.flowingTrigger,flowing:""},{default:i(()=>[e(k,{centered:"",divided:"",columns:3},{default:i(()=>[e(w,{textAlign:"center"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[a("Basic Plan")]),_:1}),JT,e(r,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[a("Business Plan")]),_:1}),WT,e(r,null,{default:i(()=>[a("Choose")]),_:1})]),_:1}),e(w,{textAlign:"center"},{default:i(()=>[e(m,{as:"h4"},{default:i(()=>[a("Premium Plan")]),_:1}),KT,e(r,null,{default:i(()=>[a("Choose")]),_:1})]),_:1})]),_:1})]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Size",description:"A popup can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger1"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger2"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger3"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger4"},null,512),e(o,{name:"heart",circular:"",link:"",ref:"sizeTrigger5"},null,512),e(g,{size:"mini",content:"Hello. This is a mini popup",trigger:t.sizeTrigger1},null,8,["trigger"]),e(g,{size:"tiny",content:"Hello. This is a tiny popup",trigger:t.sizeTrigger2},null,8,["trigger"]),e(g,{size:"small",content:"Hello. This is a small popup",trigger:t.sizeTrigger3},null,8,["trigger"]),e(g,{size:"large",content:"Hello. This is a large popup",trigger:t.sizeTrigger4},null,8,["trigger"]),e(g,{size:"huge",content:"Hello. This is a huge popup",trigger:t.sizeTrigger5},null,8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Wide",description:"A popup can be extra wide to allow for longer content",code:t.wideCode},{default:i(()=>[e(o,{name:"heart",circular:"",ref:"wideTrigger1"},null,512),e(o,{name:"heart",circular:"",ref:"wideTrigger2"},null,512),e(o,{name:"heart",circular:"",ref:"wideTrigger3"},null,512),e(g,{trigger:t.wideTrigger1},{default:i(()=>[a(" Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger2,wide:""},{default:i(()=>[a(" Hello. This is a wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"]),e(g,{trigger:t.wideTrigger3,wide:"very"},{default:i(()=>[a(" Hello. This is a very wide pop-up which allows for lots of content with additional space. You can fit a lot of words here and the paragraphs will be pretty wide. ")]),_:1},8,["trigger"])]),_:1},8,["code"]),e(c,{title:"Inverted",description:"A popup can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(o,{name:"heart",circular:"",ref:"invertedTrigger1"},null,512),e(r,{icon:"",ref:"invertedTrigger2"},{default:i(()=>[e(o,{name:"add"})]),_:1},512),e(g,{trigger:t.invertedTrigger1,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"]),e(g,{trigger:t.invertedTrigger2,content:"Hello. This is an inverted popup",inverted:""},null,8,["trigger"])]),_:1},8,["code"])]),_:1})])}const QT=ge(YT,[["render",XT]]),ZT=E({name:"ProgressDoc",components:{DocPageHeader:je,DocExample:$e},setup(){return{standardCode:'<sui-progress :percent="42" label="Uploading Files" progress />',indicatingCode:'<sui-progress :percent="30" label="30% Founded" indicating active />',barCode:'<sui-progress :percent="33" />',progressCode:'<sui-progress :percent="14" progress />',centeredCode:'<sui-progress :percent="68" progress="centered" />',labelCode:'<sui-progress :percent="37" label="Uploading Files" progress />',activeCode:'<sui-progress :percent="33" label="Uploading Files" progress active />',successCode:'<sui-progress :percent="100" label="Everything worked, your file is all ready." progress success />',warningCode:`<sui-progress :percent="100" label="Your file didn't meet the minimum resolution requirements." progress warning />`,errorCode:'<sui-progress :percent="100" label="There was an error." progress error />',disabledCode:'<sui-progress :percent="25" disabled />',invertedCode:`<sui-segment inverted>
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
<sui-progress :percent="73" color="black" />`}}});function ex(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-progress"),r=_("doc-example"),g=_("sui-segment"),c=_("sui-container");return I(),re("div",null,[e(p,{title:"Progress",sub:"A progress bar shows the progression of a task"}),e(c,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Standard",description:"A standard progress bar",code:t.standardCode},{default:i(()=>[e(o,{percent:42,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(r,{title:"Indicating",description:"An indicating progress bar visually indicates the current level of progress of a task",code:t.indicatingCode},{default:i(()=>[e(o,{percent:30,label:"30% Founded",indicating:"",active:""})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Content")]),_:1}),e(r,{title:"Bar",description:"A progress element can contain a bar visually indicating progress",code:t.barCode},{default:i(()=>[e(o,{percent:33})]),_:1},8,["code"]),e(r,{title:"Progress",description:"A progress bar can contain a text value indicating current progress",code:t.progressCode},{default:i(()=>[e(o,{percent:14,progress:""})]),_:1},8,["code"]),e(r,{title:"Centered Progress Text",description:"The text inside a progress can be centered",code:t.centeredCode},{default:i(()=>[e(o,{percent:68,progress:"centered"})]),_:1},8,["code"]),e(r,{title:"Label",description:"A progress element can contain a label",code:t.labelCode},{default:i(()=>[e(o,{percent:37,label:"Uploading Files",progress:""})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(r,{title:"Active",description:"A progress bar can show activity",code:t.activeCode},{default:i(()=>[e(o,{percent:33,label:"Uploading Files",progress:"",active:""})]),_:1},8,["code"]),e(r,{title:"Success",description:"A progress bar can show a success state",code:t.successCode},{default:i(()=>[e(o,{percent:100,label:"Everything worked, your file is all ready.",progress:"",success:""})]),_:1},8,["code"]),e(r,{title:"Warning",description:"A progress bar can show a warning state",code:t.warningCode},{default:i(()=>[e(o,{percent:100,label:"Your file didn't meet the minimum resolution requirements.",progress:"",warning:""})]),_:1},8,["code"]),e(r,{title:"Error",description:"A progress bar can show an error state",code:t.errorCode},{default:i(()=>[e(o,{percent:100,label:"There was an error.",progress:"",error:""})]),_:1},8,["code"]),e(r,{title:"Disabled",description:"A progress bar can be disabled",code:t.disabledCode},{default:i(()=>[e(o,{percent:25,disabled:""})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Inverted",description:"A progress bar can have its colors inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{inverted:"",percent:41,label:"Uploading Files",progress:""}),e(o,{inverted:"",percent:100,label:"Success",success:"",progress:""}),e(o,{inverted:"",percent:100,label:"Warning",warning:"",progress:""}),e(o,{inverted:"",percent:100,label:"Error",error:"",progress:""})]),_:1})]),_:1},8,["code"]),e(r,{title:"Attached",description:"A progress bar can show progress of an element",code:t.attachedCode},{default:i(()=>[e(g,null,{default:i(()=>[e(o,{percent:47,attached:"top"}),a(" La la la la "),e(o,{percent:26,attached:"bottom"})]),_:1})]),_:1},8,["code"]),e(r,{title:"Size",description:"A progress bar can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{percent:88,size:"tiny",label:"tiny"}),e(o,{percent:100,size:"small",label:"small",success:""}),e(o,{percent:83,label:"standard"}),e(o,{percent:73,size:"large",label:"large"}),e(o,{percent:94,size:"big",label:"big"})]),_:1},8,["code"]),e(r,{title:"Color",description:"A progress bar can have different colors",code:t.colorCode},{default:i(()=>[e(o,{percent:32,color:"red"}),e(o,{percent:53,color:"orange"}),e(o,{percent:13,color:"yellow"}),e(o,{percent:37,color:"olive"}),e(o,{percent:83,color:"green"}),e(o,{percent:24,color:"teal"}),e(o,{percent:88,color:"blue"}),e(o,{percent:41,color:"violet"}),e(o,{percent:47,color:"purple"}),e(o,{percent:30,color:"pink"}),e(o,{percent:68,color:"brown"}),e(o,{percent:35,color:"grey"}),e(o,{percent:73,color:"black"})]),_:1},8,["code"])]),_:1})])}const tx=ge(ZT,[["render",ex]]),ix=E({name:"RatingDoc",components:{DocPageHeader:je,DocExample:$e,PropertyListTable:sn},setup(){return{ratingCode:'<sui-rating v-model="value" />',iconCode:`<sui-rating :defaultRating="2" :maxRating="4" color="yellow" />
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
<sui-rating size="massive" :defaultRating="3" :maxRating="4" color="yellow" />`,properties:[{name:"color",type:"string",default:"",description:"A rating can have different colors"},{name:"defaultRating",type:"number",default:0,description:"The initial value of rating."},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"icon",type:"string",default:"star",description:"A rating can use a set of specified icons."},{name:"maxRating",type:"number",default:1,description:"The total number of icons."},{name:"modelValue",type:"number",default:"null",description:"A value of rating."},{name:"size",type:"string",default:"",description:"A rating can have different sizes."}],events:[{name:"change",description:"Callback to invoke on value change."}]}}}),lx=C("br",null,null,-1),ax=C("br",null,null,-1),nx=C("br",null,null,-1),sx=C("br",null,null,-1),ox=C("br",null,null,-1),rx=C("br",null,null,-1),ux=C("br",null,null,-1),dx=C("br",null,null,-1),cx=C("br",null,null,-1),mx=C("br",null,null,-1),px=C("br",null,null,-1),fx=C("br",null,null,-1),gx=C("br",null,null,-1),hx=C("br",null,null,-1),_x=C("br",null,null,-1),bx=C("br",null,null,-1),vx=C("br",null,null,-1),yx=C("br",null,null,-1),Cx=C("br",null,null,-1),wx=C("br",null,null,-1),Sx=C("br",null,null,-1),Ax=C("br",null,null,-1),kx=C("br",null,null,-1),Bx=C("br",null,null,-1),$x=C("br",null,null,-1),Tx=C("br",null,null,-1),xx=C("br",null,null,-1),Ex=C("br",null,null,-1),Rx=C("br",null,null,-1),Px=C("br",null,null,-1),zx=C("br",null,null,-1),Dx=C("br",null,null,-1),Mx=C("br",null,null,-1),Ix=C("br",null,null,-1),Vx=C("br",null,null,-1),Fx=C("br",null,null,-1),Nx=C("br",null,null,-1),Lx=C("br",null,null,-1),Ox=C("br",null,null,-1),Hx=C("br",null,null,-1),jx=C("br",null,null,-1),qx=C("br",null,null,-1),Ux=C("br",null,null,-1),Gx=C("br",null,null,-1),Yx=C("br",null,null,-1),Jx=C("br",null,null,-1),Wx=C("br",null,null,-1),Kx=C("br",null,null,-1);function Xx(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-rating"),r=_("doc-example"),g=_("property-list-table"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),f=_("sui-table-cell"),y=_("sui-table-body"),S=_("sui-table"),B=_("sui-container");return I(),re("div",null,[e(p,{title:"Rating",sub:"A rating indicates user interest in content"}),e(B,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Rating",description:"A Basic rating",code:t.ratingCode},{default:i(()=>[e(o)]),_:1},8,["code"]),e(r,{title:"Icon",description:"You can use any available icon as rating indicator",code:t.iconCode},{default:i(()=>[e(o,{defaultRating:2,maxRating:4,color:"yellow"}),lx,ax,e(o,{defaultRating:2,maxRating:4,icon:"heart",color:"red"}),nx,sx,e(o,{defaultRating:2,maxRating:4,icon:"female",color:"purple"}),ox,rx,e(o,{defaultRating:2,maxRating:4,icon:"male",color:"blue"}),ux,dx,e(o,{defaultRating:2,maxRating:4,icon:"cloud",color:"grey"}),cx,mx,e(o,{defaultRating:2,maxRating:4,icon:"cat",color:"pink"}),px,fx,e(o,{defaultRating:2,maxRating:4,icon:"circle",color:"orange"})]),_:1},8,["code"]),e(r,{title:"Color",description:"You can specify any color of the FUI color palette",code:t.colorCode},{default:i(()=>[e(o,{defaultRating:1,maxRating:7,color:"red"}),gx,hx,e(o,{defaultRating:2,maxRating:7,color:"orange"}),_x,bx,e(o,{defaultRating:3,maxRating:7,color:"yellow"}),vx,yx,e(o,{defaultRating:4,maxRating:7,color:"olive"}),Cx,wx,e(o,{defaultRating:5,maxRating:7,color:"green"}),Sx,Ax,e(o,{defaultRating:6,maxRating:7,color:"teal"}),kx,Bx,e(o,{defaultRating:6,maxRating:7,color:"blue"}),$x,Tx,e(o,{defaultRating:5,maxRating:7,color:"violet"}),xx,Ex,e(o,{defaultRating:4,maxRating:7,color:"purple"}),Rx,Px,e(o,{defaultRating:3,maxRating:7,color:"pink"}),zx,Dx,e(o,{defaultRating:2,maxRating:7,color:"brown"}),Mx,Ix,e(o,{defaultRating:1,maxRating:7,color:"grey"}),Vx,Fx,e(o,{defaultRating:1,maxRating:7,color:"black"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("States")]),_:1}),e(r,{title:"Disabled",description:"A rating can be started in non-interactive mode by adding a disabled class",code:t.disabledCode},{default:i(()=>[e(o,{disabled:"",defaultRating:3,maxRating:5,color:"yellow"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Size",description:"A rating can vary in size",code:t.sizeCode},{default:i(()=>[e(o,{size:"mini",defaultRating:3,maxRating:4,color:"yellow"}),Nx,Lx,e(o,{size:"tiny",defaultRating:3,maxRating:4,color:"yellow"}),Ox,Hx,e(o,{size:"small",defaultRating:3,maxRating:4,color:"yellow"}),jx,qx,e(o,{defaultRating:3,maxRating:4,color:"yellow"}),Ux,Gx,e(o,{size:"large",defaultRating:3,maxRating:4,color:"yellow"}),Yx,Jx,e(o,{size:"huge",defaultRating:3,maxRating:4,color:"yellow"}),Wx,Kx,e(o,{size:"massive",defaultRating:3,maxRating:4,color:"yellow"})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(g,{properties:t.properties},null,8,["properties"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(S,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.events,b=>(I(),te(h,{key:b.name},{default:i(()=>[e(f,null,{default:i(()=>[a(Be(b.name),1)]),_:2},1024),e(f,null,{default:i(()=>[a(Be(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const Qx=ge(ix,[["render",Xx]]),Zx=E({name:"SidebarDoc",components:{DocPageHeader:je,DocExample:$e,PropertyListTable:sn},setup(){return{visible1:H(!1),sidebarCode:`<sui-grid :columns="1">
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
</sui-grid>`,properties:[{name:"animation",type:"string",default:"overlay",description:"Specifies the animation of the sidebar."},{name:"dimmed",type:"boolean",default:"false",description:"When specified, display the dim inside pusher content."},{name:"direction",type:"string",default:"left",description:"Specifies the direction the sidebar should appear on."},{name:"visible",type:"boolean",default:"false",description:"Specifies the visibility of the sidebar."}],events:[{name:"hide",description:"Callback to invoke when sidebar hide."},{name:"show",description:"Callback to invoke when sidebar show."}]}}}),e2={class:"pusher"};function t2(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-icon"),r=_("sui-button"),g=_("sui-grid-column"),c=_("sui-menu-item"),h=_("sui-sidebar"),v=_("sui-image"),f=_("sui-segment"),y=_("sui-grid"),S=_("doc-example"),B=_("property-list-table"),b=_("sui-table-header-cell"),w=_("sui-table-row"),k=_("sui-table-header"),$=_("sui-table-cell"),x=_("sui-table-body"),D=_("sui-table"),V=_("sui-container");return I(),re("div",null,[e(p,{title:"Sidebar",sub:"A sidebar hides additional content beside a page"}),e(V,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(S,{title:"Sidebar",description:"A sidebar",code:t.sidebarCode},{default:i(()=>[e(y,{columns:1},{default:i(()=>[e(g,null,{default:i(()=>[e(r,{onClick:l[0]||(l[0]=z=>t.visible1=!t.visible1),icon:""},{default:i(()=>[e(o,{name:"arrow right"})]),_:1})]),_:1}),e(g,null,{default:i(()=>[e(f,{class:"pushable"},{default:i(()=>[e(h,{visible:t.visible1,"onUpdate:visible":l[1]||(l[1]=z=>t.visible1=z),dimmed:"",icon:"labeled",inverted:""},{default:i(()=>[e(c,null,{default:i(()=>[e(o,{name:"home"}),a(" Home ")]),_:1}),e(c,null,{default:i(()=>[e(o,{name:"gamepad"}),a(" Games ")]),_:1}),e(c,null,{default:i(()=>[e(o,{name:"camera"}),a(" Channels ")]),_:1})]),_:1},8,["visible"]),C("div",e2,[e(f,null,{default:i(()=>[e(m,{as:"h2"},{default:i(()=>[a("Main Header")]),_:1}),e(v,{src:Ce})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(B,{properties:t.properties},null,8,["properties"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(D,{celled:""},{default:i(()=>[e(k,null,{default:i(()=>[e(w,null,{default:i(()=>[e(b,null,{default:i(()=>[a("Name")]),_:1}),e(b,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(x,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.events,z=>(I(),te(w,{key:z.name},{default:i(()=>[e($,null,{default:i(()=>[a(Be(z.name),1)]),_:2},1024),e($,null,{default:i(()=>[a(Be(z.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const i2=ge(Zx,[["render",t2]]),l2=E({name:"SliderDoc",components:{DocPageHeader:je,DocExample:$e},setup(){const t=H(5),l='<sui-slider v-model="slider1" />',n=H(4),s='<sui-slider labeled v-model="slider2" />',u=H(6),d='<sui-slider labeled="ticked" v-model="slider3" />',p=H(0),m=`<sui-slider
  v-model="slider4"
  labeled="ticked"
  :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
  :max="20"
/>`,o=H(40),r='<sui-slider v-model="slider5" labeled :step="5" :max="120" :min="20" />',g=H([]);g.value.push(20,60);const c='<sui-slider v-model="slider6" range labeled="ticked" :min="5" :max="100" :step="5" />',h=H(7),v='<sui-slider disabled v-model="slider7" />',f=H(8),y=`<sui-segment inverted>
  <sui-slider inverted v-model="slider8" />
</sui-segment>`,S=H(3),B='<sui-slider reversed v-model="slider9" />',b=H(18),w='<sui-slider vertical v-model="slider10" :max="20" />',k=H(5),$=H(5),x=H(5),D=H(5),V=H(5),z=H(5),L=H(5),Y=H(5),j=H(5),de=H(5),ke=H(5),O=H(5),G=H(5),oe=`<sui-slider color="red" v-model="redSlider" />
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
<sui-slider color="black" v-model="blackSlider" />`,Z=`<sui-segment inverted>
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
</sui-segment>`,xe=H(5),qe=H(5),Xe=H(5);return{slider1:t,sliderCode:l,slider2:n,labeledSliderCode:s,slider3:u,labeledTickedCode:d,slider4:p,customLabelsCode:m,slider5:o,stepCode:r,slider6:g,rangeCode:c,slider7:h,disabledCode:v,slider8:f,invertedCode:y,slider9:S,reversedCode:B,slider10:b,verticalCode:w,redSlider:k,orangeSlider:$,yellowSlider:x,oliveSlider:D,greenSlider:V,tealSlider:z,blueSlider:L,violetSlider:Y,purpleSlider:j,pinkSlider:de,brownSlider:ke,greySlider:O,blackSlider:G,coloredCode:oe,invertedColoredCode:Z,smallSlider:xe,largeSlider:qe,bigSlider:Xe,sizeCode:`<sui-slider size="small" color="red" v-model="smallSlider" />
<sui-slider size="large" color="yellow" v-model="largeSlider" />
<sui-slider size="big" color="olive" v-model="bigSlider" />`,properties:[{name:"color",type:"string",default:"",description:"A slider can have different colors"},{name:"disabled",type:"boolean",default:!1,description:"When present, it specifies that the component should be disabled."},{name:"inverted",type:"boolean",default:!1,description:"A slider can be formatted to appear on dark backgrounds."},{name:"labeled",type:"boolean|string",default:!1,description:"A slider can show its labels."},{name:"labels",type:"string[]",default:"",description:"A slider can have a custom label according to the label value."},{name:"max",type:"number",default:10,description:"Maximum boundary value."},{name:"min",type:"number",default:0,description:"Mininum boundary value."},{name:"modelValue",type:"number|number[]",default:0,description:"A value of component."},{name:"range",type:"boolean",default:!1,description:"When specified, allows two boundary values to be picked."},{name:"reversed",type:"boolean",default:!1,description:"A slider can be reversed."},{name:"size",type:"string",default:"",description:"A slider can have different sizes."},{name:"step",type:"number",default:1,description:"Step factor to increment/decrement the value."},{name:"vertical",type:"boolean",default:!1,description:"When specified, orientation of the slider becomes vertical."},{name:"verticalHeight",type:"number|string",default:200,description:"Height of the vertical slider."}],events:[{name:"change",description:"Callback to invoke on value change."},{name:"slideend",description:"Callback to invoke when slide end."}]}}});function a2(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-slider"),r=_("doc-example"),g=_("sui-segment"),c=_("sui-table-header-cell"),h=_("sui-table-row"),v=_("sui-table-header"),f=_("sui-table-cell"),y=_("sui-table-body"),S=_("sui-table"),B=_("sui-container");return I(),re("div",null,[e(p,{title:"Slider",sub:"A slider allows users to select values within a range"}),e(B,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Types")]),_:1}),e(r,{title:"Slider",description:"A standard slider",code:t.sliderCode},{default:i(()=>[e(o,{modelValue:t.slider1,"onUpdate:modelValue":l[0]||(l[0]=b=>t.slider1=b)},null,8,["modelValue"]),a(" "+Be(t.slider1),1)]),_:1},8,["code"]),e(r,{title:"Labeled Slider",description:"A slider that show its labels",code:t.labeledSliderCode},{default:i(()=>[e(o,{labeled:"",modelValue:t.slider2,"onUpdate:modelValue":l[1]||(l[1]=b=>t.slider2=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(r,{title:"Labeled Ticked Slider",description:"A slider that show its labels and ticks",code:t.labeledTickedCode},{default:i(()=>[e(o,{labeled:"ticked",modelValue:t.slider3,"onUpdate:modelValue":l[2]||(l[2]=b=>t.slider3=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(r,{title:"Custom Interpreted Labels",description:"You can provide a function which returns a custom label according to the label value",code:t.customLabelsCode},{default:i(()=>[e(o,{modelValue:t.slider4,"onUpdate:modelValue":l[3]||(l[3]=b=>t.slider4=b),labeled:"ticked",labels:["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ/ς","τ","υ","φ"],max:20},null,8,["modelValue"])]),_:1},8,["code"]),e(r,{title:"Step",description:"A slider can change the default step increment",code:t.stepCode},{default:i(()=>[e(o,{modelValue:t.slider5,"onUpdate:modelValue":l[4]||(l[4]=b=>t.slider5=b),labeled:"",step:5,max:120,min:20},null,8,["modelValue"]),a(" "+Be(t.slider5),1)]),_:1},8,["code"]),e(r,{title:"Range",description:"A range slider which allow you to select a range between two values",code:t.rangeCode},{default:i(()=>[e(o,{modelValue:t.slider6,"onUpdate:modelValue":l[5]||(l[5]=b=>t.slider6=b),range:"",labeled:"ticked",min:5,max:100,step:5},null,8,["modelValue"]),a(" "+Be(t.slider6),1)]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Variations")]),_:1}),e(r,{title:"Disabled",description:"A slider can appear disabled",code:t.disabledCode},{default:i(()=>[e(o,{disabled:"",modelValue:t.slider7,"onUpdate:modelValue":l[6]||(l[6]=b=>t.slider7=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(r,{title:"Inverted",description:"A slider can be inverted",code:t.invertedCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{inverted:"",modelValue:t.slider8,"onUpdate:modelValue":l[7]||(l[7]=b=>t.slider8=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(r,{title:"Reversed",description:"A slider can be reversed",code:t.reversedCode},{default:i(()=>[e(o,{reversed:"",modelValue:t.slider9,"onUpdate:modelValue":l[8]||(l[8]=b=>t.slider9=b)},null,8,["modelValue"]),a(" "+Be(t.slider9),1)]),_:1},8,["code"]),e(r,{title:"Vertical",description:"A slider can be vertical",code:t.verticalCode},{default:i(()=>[e(o,{vertical:"",modelValue:t.slider10,"onUpdate:modelValue":l[9]||(l[9]=b=>t.slider10=b),max:20},null,8,["modelValue"]),a(" "+Be(t.slider10),1)]),_:1},8,["code"]),e(r,{title:"Colored",description:"A slider can be different colors",code:t.coloredCode},{default:i(()=>[e(o,{color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[10]||(l[10]=b=>t.redSlider=b)},null,8,["modelValue"]),e(o,{color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[11]||(l[11]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(o,{color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[12]||(l[12]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(o,{color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[13]||(l[13]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(o,{color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[14]||(l[14]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(o,{color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[15]||(l[15]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(o,{color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[16]||(l[16]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(o,{color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[17]||(l[17]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(o,{color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[18]||(l[18]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(o,{color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[19]||(l[19]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(o,{color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[20]||(l[20]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(o,{color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[21]||(l[21]=b=>t.greySlider=b)},null,8,["modelValue"]),e(o,{color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[22]||(l[22]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(r,{title:"Inverted Colored",description:"A slider can be different colors while inverted",code:t.invertedColoredCode},{default:i(()=>[e(g,{inverted:""},{default:i(()=>[e(o,{inverted:"",color:"red",modelValue:t.redSlider,"onUpdate:modelValue":l[23]||(l[23]=b=>t.redSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"orange",modelValue:t.orangeSlider,"onUpdate:modelValue":l[24]||(l[24]=b=>t.orangeSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"yellow",modelValue:t.yellowSlider,"onUpdate:modelValue":l[25]||(l[25]=b=>t.yellowSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"olive",modelValue:t.oliveSlider,"onUpdate:modelValue":l[26]||(l[26]=b=>t.oliveSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"green",modelValue:t.greenSlider,"onUpdate:modelValue":l[27]||(l[27]=b=>t.greenSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"teal",modelValue:t.tealSlider,"onUpdate:modelValue":l[28]||(l[28]=b=>t.tealSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"blue",modelValue:t.blueSlider,"onUpdate:modelValue":l[29]||(l[29]=b=>t.blueSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"violet",modelValue:t.violetSlider,"onUpdate:modelValue":l[30]||(l[30]=b=>t.violetSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"purple",modelValue:t.purpleSlider,"onUpdate:modelValue":l[31]||(l[31]=b=>t.purpleSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"pink",modelValue:t.pinkSlider,"onUpdate:modelValue":l[32]||(l[32]=b=>t.pinkSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"brown",modelValue:t.brownSlider,"onUpdate:modelValue":l[33]||(l[33]=b=>t.brownSlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"grey",modelValue:t.greySlider,"onUpdate:modelValue":l[34]||(l[34]=b=>t.greySlider=b)},null,8,["modelValue"]),e(o,{inverted:"",color:"black",modelValue:t.blackSlider,"onUpdate:modelValue":l[35]||(l[35]=b=>t.blackSlider=b)},null,8,["modelValue"])]),_:1})]),_:1},8,["code"]),e(r,{title:"Size",description:"A slider can have different sizes",code:t.sizeCode},{default:i(()=>[e(o,{size:"small",color:"red",modelValue:t.smallSlider,"onUpdate:modelValue":l[36]||(l[36]=b=>t.smallSlider=b)},null,8,["modelValue"]),e(o,{size:"large",color:"yellow",modelValue:t.largeSlider,"onUpdate:modelValue":l[37]||(l[37]=b=>t.largeSlider=b)},null,8,["modelValue"]),e(o,{size:"big",color:"olive",modelValue:t.bigSlider,"onUpdate:modelValue":l[38]||(l[38]=b=>t.bigSlider=b)},null,8,["modelValue"])]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(S,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Type")]),_:1}),e(c,null,{default:i(()=>[a("Default")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.properties,b=>(I(),te(h,{key:b.name},{default:i(()=>[e(f,null,{default:i(()=>[a(Be(b.name),1)]),_:2},1024),e(f,null,{default:i(()=>[a(Be(b.type),1)]),_:2},1024),e(f,null,{default:i(()=>[a(Be(b.default),1)]),_:2},1024),e(f,null,{default:i(()=>[a(Be(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(S,{celled:""},{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[e(c,null,{default:i(()=>[a("Name")]),_:1}),e(c,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(y,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.events,b=>(I(),te(h,{key:b.name},{default:i(()=>[e(f,null,{default:i(()=>[a(Be(b.name),1)]),_:2},1024),e(f,null,{default:i(()=>[a(Be(b.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const n2=ge(l2,[["render",a2]]),s2=E({name:"TabDoc",components:{DocPageHeader:je,DocExample:$e,PropertyListTable:sn},setup(){return{basicCode:`<sui-tab>
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
</sui-tab>`,tabProperties:[{name:"activeIndex",type:"string",default:0,description:"Index of the active tab."},{name:"pointing",type:"boolean",default:!1,description:""}],tabPanelProperties:[{name:"header",type:"boolean",default:"null",description:"Orientation of tab headers."}],events:[{name:"tab-change",description:"Callback to invoke when an active tab is changed."},{name:"tab-click",description:"Callback to invoke when an tab is clicked."}]}}});function o2(t,l,n,s,u,d){const p=_("doc-page-header"),m=_("sui-header"),o=_("sui-tab-panel"),r=_("sui-tab"),g=_("doc-example"),c=_("property-list-table"),h=_("sui-table-header-cell"),v=_("sui-table-row"),f=_("sui-table-header"),y=_("sui-table-cell"),S=_("sui-table-body"),B=_("sui-table"),b=_("sui-container");return I(),re("div",null,[e(p,{title:"Tab",sub:"A tab is a hidden section of content activated by a menu"}),e(b,{class:"main"},{default:i(()=>[e(m,{as:"h2",dividing:""},{default:i(()=>[a("Examples")]),_:1}),e(g,{title:"Basic",code:t.basicCode},{default:i(()=>[e(r,null,{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Pointing",code:t.pointingCode},{default:i(()=>[e(r,{pointing:""},{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Secondary",code:t.secondaryCode},{default:i(()=>[e(r,{secondary:""},{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(g,{title:"Text",code:t.textCode},{default:i(()=>[e(r,{text:""},{default:i(()=>[e(o,{header:"First"},{default:i(()=>[a("Content A")]),_:1}),e(o,{header:"Second"},{default:i(()=>[a("Content B")]),_:1}),e(o,{header:"Third"},{default:i(()=>[a("Content C")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Properties")]),_:1}),e(m,{as:"h3"},{default:i(()=>[a("Tab")]),_:1}),e(c,{properties:t.tabProperties},null,8,["properties"]),e(m,{as:"h3"},{default:i(()=>[a("TabPanel")]),_:1}),e(c,{properties:t.tabPanelProperties},null,8,["properties"]),e(m,{as:"h2",dividing:""},{default:i(()=>[a("Events")]),_:1}),e(B,{celled:""},{default:i(()=>[e(f,null,{default:i(()=>[e(v,null,{default:i(()=>[e(h,null,{default:i(()=>[a("Name")]),_:1}),e(h,null,{default:i(()=>[a("Description")]),_:1})]),_:1})]),_:1}),e(S,null,{default:i(()=>[(I(!0),re(we,null,Ke(t.events,w=>(I(),te(v,{key:w.name},{default:i(()=>[e(y,null,{default:i(()=>[a(Be(w.name),1)]),_:2},1024),e(y,null,{default:i(()=>[a(Be(w.description),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}const r2=ge(s2,[["render",o2]]),u2=`<template>
  <SuiButton @click="show">Show</SuiButton>
</template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({ message: 'I am a toast, nice to meet you !' })
}
<\/script>`,d2={__name:"MinimalDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({message:"I am a toast, nice to meet you !"})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Minimal",code:u2},{description:i(()=>[a(" A minimal toast will just display a message. ")]),example:i(()=>[e(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},c2=`<template>
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
<\/script>`,m2={__name:"TitledDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({title:"Better ?",message:"Hey look, I have a title !"})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Titled",code:c2},{description:i(()=>[a(" You can add a title to your toast. ")]),example:i(()=>[e(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},p2=`<template>
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
<\/script>`,f2={__name:"ProgressBarDoc",setup(t){const{toast:l}=Ze(),n=s=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"bottom",showProgressColor:s})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Progress Bar",code:p2},{description:i(()=>[a(" You can attach a progress bar to your toast. ")]),example:i(()=>[e(d,{onClick:n},{default:i(()=>[a("Show")]),_:1}),e(d,{color:"red",onClick:u[0]||(u[0]=p=>n("red"))},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},g2=`<template>
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
<\/script>`,h2={__name:"ToastTypeDoc",setup(t){const{toast:l}=Ze(),n=s=>{l({message:"You're using the good framework !",type:s})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Toast Type",code:g2},{description:i(()=>[a(" A toast can be used to display different types of informations. ")]),example:i(()=>[e(d,{onClick:u[0]||(u[0]=p=>n("success")),positive:""},{default:i(()=>[a("Success")]),_:1}),e(d,{onClick:u[1]||(u[1]=p=>n("error")),negative:""},{default:i(()=>[a("Error")]),_:1}),e(d,{onClick:u[2]||(u[2]=p=>n("warning")),color:"yellow"},{default:i(()=>[a("Warning")]),_:1})]),_:1})}}},_2=`<template>
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
<\/script>`,b2={__name:"PositionDoc",setup(t){const{toast:l}=Ze(),n=s=>{l({position:s,message:"Look, I'm here !"})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Position",code:_2},{description:i(()=>[a(" A toast can appear at different positions on the screen. ")]),example:i(()=>[e(d,{onClick:u[0]||(u[0]=p=>n("top left"))},{default:i(()=>[a("Top Left")]),_:1}),e(d,{onClick:u[1]||(u[1]=p=>n("bottom right"))},{default:i(()=>[a("Bottom Right")]),_:1})]),_:1})}}},v2=C("br",null,null,-1),y2=`<template>
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
<\/script>`,C2={__name:"AttachedPosition",setup(t){const{toast:l}=Ze(),n=s=>{l({attached:s,title:"Watch out!",message:`I am a ${s} attached toast`})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Attached Position",code:y2},{description:i(()=>[a(" A toast can have an attached position which will show the toast over the whole width of the screen."),v2,a(" Just like notifications on mobile devices. ")]),example:i(()=>[e(d,{onClick:u[0]||(u[0]=p=>n("top"))},{default:i(()=>[a("Top")]),_:1}),e(d,{onClick:u[1]||(u[1]=p=>n("bottom"))},{default:i(()=>[a("Bottom")]),_:1})]),_:1})}}},w2=`<template>
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
<\/script>`,S2={__name:"DirectionDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({horizontal:!0,position:"top left",title:"Watch out!",message:"Next one will open to the right"})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Direction",code:w2},{description:i(()=>[a(" Toasts can stack horizontal ")]),example:i(()=>[e(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},A2=`<template>
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
<\/script>`,k2={__name:"CenterAligned",setup(t){const{toast:l}=Ze(),n=()=>{l({centered:!0,title:"Veronika has joined",message:"Welcome to the Fomantic-UI community!"})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Center Aligned",code:A2},{description:i(()=>[a(" The toasts content can be shown center aligned. ")]),example:i(()=>[e(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},B2=`<template>
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
<\/script>`,$2={__name:"DurationDoc",setup(t){const{toast:l}=Ze(),n=s=>{l({displayTime:s,message:s===0?"I'll stay here until you click on me !":"You will see me for 5 seconds."})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Duration",code:B2},{description:i(()=>[a(" You can choose how long a toast should be displayed. ")]),example:i(()=>[e(d,{onClick:u[0]||(u[0]=p=>n(5e3))},{default:i(()=>[a("5 seconds")]),_:1}),e(d,{onClick:u[1]||(u[1]=p=>n(0))},{default:i(()=>[a("Stay")]),_:1})]),_:1})}}},T2=`<template>
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
<\/script>`,x2={__name:"MessageStyleDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({messageStyle:!0,message:"I got my style from the message class",color:"purple"})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Use Message Style",code:T2},{description:i(()=>[a(" You can use all of the styles and colors from the message component. ")]),example:i(()=>[e(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},E2=`<template>
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
<\/script>`,R2={__name:"IncreasingProgressBarDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({title:"LOOK",message:"See, how long i will last",showProgress:"top",showProgressUp:!0})};return(s,u)=>{const d=_("SuiButton");return I(),te(he,{label:"Increasing Progress Bar",code:E2},{description:i(()=>[a(" You can use the progress bar to show the progress of a task. ")]),example:i(()=>[e(d,{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},P2=`<template>
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
<\/script>`,z2={__name:"ColorVariantsDoc",setup(t){const{toast:l}=Ze(),n=H(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],u=()=>{l({color:s[n.value],message:"I am a colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(d,p)=>{const m=_("SuiButton");return I(),te(he,{label:"Color Variants",code:P2},{description:i(()=>[a(" You can use all of the usual color names. ")]),example:i(()=>[e(m,{onClick:u},{default:i(()=>[a("Show")]),_:1})]),_:1})}}},D2={__name:"InvertedColorsDoc",setup(t){const{toast:l}=Ze(),n=H(0),s=["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],u=()=>{l({color:s[n.value],inverted:!0,message:"I am an inverted colorful toast",showProgress:"bottom"}),n.value=(n.value+1)%s.length};return(d,p)=>{const m=_("SuiButton");return I(),te(he,{label:"Inverted Colors",code:d.code},{description:i(()=>[a(" Same as above, just add inverted to the class definition. ")]),example:i(()=>[e(m,{onClick:u},{default:i(()=>[a("Show")]),_:1})]),_:1},8,["code"])}}},M2=`<template>
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
<\/script>`,I2={__name:"ActionGeneralDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(M,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>[U(ut,{name:"check"}),"Yes"]),U(M,{color:"red",icon:!0},()=>[U(ut,{name:"ban"})]),U(M,{color:"blue",onclick:()=>l({message:"Returning false from the click handler avoids closing the toast"})},()=>"?")]})};return(s,u)=>(I(),te(he,{label:"General",code:M2},{description:i(()=>[a(" Define click actions to your toast by providing a text and/or icon, optional class and click handler. ")]),example:i(()=>[e(R(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},V2=`<template>
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
<\/script>`,F2={__name:"ActionBasicDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(M,{color:"yellow",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really")],actionsProps:{basic:!0,aligned:"left"}})};return(s,u)=>(I(),te(he,{label:"Basic",code:V2},{description:i(()=>[a(" The classActions setting provides you a way to adjust the overall appearance of the action buttons. Using basic class does not lighten the actions background. left aligns the buttons to the left. ")]),example:i(()=>[e(R(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},N2=`<template>
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
<\/script>`,L2={__name:"ActionAttachedDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(M,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),U(M,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"top"}})};return(s,u)=>(I(),te(he,{label:"Attached",code:N2},{description:i(()=>[a(" Using attached converts your actions into a Button group. Also add top to display the actions attached to the top of the toast. ")]),example:i(()=>[e(R(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},O2=`<template>
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
<\/script>`,H2={__name:"ActionVerticalDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(M,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),U(M,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{vertical:!0}})};return(s,u)=>(I(),te(he,{label:"Vertical",code:O2},{description:i(()=>[a(" You can use vertical to display your actions to the right of the toast. ")]),example:i(()=>[e(R(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},j2=C("br",null,null,-1),q2=`<template>
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
<\/script>`,U2={__name:"ActionVerticalAttachedDoc",setup(t){const{toast:l}=Ze(),n=()=>{l({message:"Do you really want to star Fomantic-UI?",displayTime:0,color:"black",actions:({close:s})=>[U(M,{color:"green",onclick:()=>{l({message:'You clicked "yes", toast closes by default'}),s()}},()=>"Yes, really"),U(M,{color:"red",onclick:()=>{l({message:'You clicked "maybe", toast closes by default'}),s()}},()=>"Maybe later")],actionsProps:{attached:"left",vertical:!0}})};return(s,u)=>(I(),te(he,{label:"Vertical Attached",code:q2},{description:i(()=>[a(" Vertical actions can also be displayed as button groups using vertical attached."),j2,a(" Vertical attached actions also support left. ")]),example:i(()=>[e(R(M),{onClick:n},{default:i(()=>[a("Show")]),_:1})]),_:1}))}},G2={__name:"Toast",setup(t){const l=[{id:"minimal",label:"Minimal",category:"Types",component:d2},{id:"titled",label:"Titled",category:"Types",component:m2},{id:"progress-bar",label:"Progress Bar",category:"Types",component:f2},{id:"toast-type",label:"Toast Type",category:"Variations",component:h2},{id:"position",label:"Position",category:"Variations",component:b2},{id:"attached-position",label:"Attached Position",category:"Variations",component:C2},{id:"direction",label:"Direction",category:"Variations",component:S2},{id:"center-aligned",label:"Center Aligned",category:"Variations",component:k2},{id:"duration",label:"Duration",category:"Variations",component:$2},{id:"message-style",label:"Use Message Style",category:"Variations",component:x2},{id:"increasing-progress-bar",label:"Increasing Progress Bar",category:"Variations",component:R2},{id:"color-variants",label:"Color Variants",category:"Variations",component:z2},{id:"inverted-colors",label:"Inverted Colors",category:"Variations",component:D2},{id:"general",label:"General",category:"Actions",component:I2},{id:"action-basic",label:"Basic",category:"Actions",component:F2},{id:"action-attached",label:"Attached",category:"Actions",component:L2},{id:"action-vertical",label:"Vertical",category:"Actions",component:H2},{id:"action-vertical-attached",label:"Vertical Attached",category:"Actions",component:U2}];return(n,s)=>(I(),te(Fm,{title:"Toast",description:"A toast allows users to be notified of an event","component-docs":l}))}},Y2=[{path:"/",component:X_,children:[{path:"/",component:pb},{path:"elements/button",component:ww},{path:"elements/container",component:Pw},{path:"elements/divider",component:Iw},{path:"elements/emoji",component:Uw},{path:"elements/flag",component:Ww},{path:"elements/header",component:tS},{path:"elements/icon",component:cS},{path:"elements/image",component:kS},{path:"elements/input",component:xS},{path:"elements/label",component:qS},{path:"elements/list",component:uA},{path:"elements/loader",component:pA},{path:"elements/rail",component:_A},{path:"elements/reveal",component:wA},{path:"elements/segment",component:YA},{path:"elements/step",component:ZA},{path:"collections/breadcrumb",component:i0},{path:"collections/form",component:n0},{path:"collections/grid",component:u0},{path:"collections/menu",component:_0},{path:"collections/message",component:x0},{path:"collections/table",component:H0},{path:"views/advertisement",component:Y0},{path:"views/card",component:Tk},{path:"views/comment",component:$B},{path:"views/feed",component:WB},{path:"views/item",component:F$},{path:"views/statistic",component:Y$},{path:"modules/accordion",component:hT},{path:"modules/calendar",component:vT},{path:"modules/checkbox",component:xT},{path:"modules/dimmer",component:PT},{path:"modules/dropdown",component:MT},{path:"modules/embed",component:FT},{path:"modules/modal",component:UT},{path:"modules/popup",component:QT},{path:"modules/progress",component:tx},{path:"modules/rating",component:Qx},{path:"modules/sidebar",component:i2},{path:"modules/slider",component:n2},{path:"modules/tab",component:r2},{path:"modules/toast",component:G2}]}],J2=E_({history:Uh("/vue-fomantic-ui/"),routes:Y2});(function(t){var l="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},s={bash:n,environment:{pattern:RegExp("\\$"+l),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+l),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+l),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:s},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:s},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:s.entity}}],environment:{pattern:RegExp("\\$?"+l),alias:"constant"},variable:s.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=t.languages.bash;for(var u=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],d=s.variable[1].inside,p=0;p<u.length;p++)d[u[p]]=t.languages.bash[u[p]];t.languages.sh=t.languages.bash,t.languages.shell=t.languages.bash})(Prism);const so=_m($h);so.use(J2);so.use(Xy);so.mount("#app");

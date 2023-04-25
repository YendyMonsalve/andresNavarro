(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function $r(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function zr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?os(r):zr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(J(e))return e}}const rs=/;(?![^(]*\))/g,as=/:([^]+)/,is=/\/\*.*?\*\//gs;function os(e){const t={};return e.replace(is,"").split(rs).forEach(n=>{if(n){const r=n.split(as);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Br(e){let t="";if(ee(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=Br(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ss="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ls=$r(ss);function Si(e){return!!e||e===""}const Ca=e=>ee(e)?e:e==null?"":j(e)||J(e)&&(e.toString===Mi||!L(e.toString))?JSON.stringify(e,Ti,2):String(e),Ti=(e,t)=>t&&t.__v_isRef?Ti(e,t.value):bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ii(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!j(t)&&!Fi(t)?String(t):t,V={},vt=[],Oe=()=>{},fs=()=>!1,cs=/^on[^a-z]/,$n=e=>cs.test(e),Ur=e=>e.startsWith("onUpdate:"),fe=Object.assign,Hr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},us=Object.prototype.hasOwnProperty,z=(e,t)=>us.call(e,t),j=Array.isArray,bt=e=>zn(e)==="[object Map]",Ii=e=>zn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",Yr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Ni=e=>J(e)&&L(e.then)&&L(e.catch),Mi=Object.prototype.toString,zn=e=>Mi.call(e),ds=e=>zn(e).slice(8,-1),Fi=e=>zn(e)==="[object Object]",Wr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_n=$r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ms=/-(\w)/g,At=Bn(e=>e.replace(ms,(t,n)=>n?n.toUpperCase():"")),ps=/\B([A-Z])/g,Ct=Bn(e=>e.replace(ps,"-$1").toLowerCase()),Ri=Bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),rr=Bn(e=>e?`on${Ri(e)}`:""),Tn=(e,t)=>!Object.is(e,t),ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},In=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ji=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Sa;const hs=()=>Sa||(Sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Te;class gs{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!t&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Te;try{return Te=this,t()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function vs(e,t=Te){t&&t.active&&t.effects.push(e)}const Kr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Li=e=>(e.w&Ve)>0,Di=e=>(e.n&Ve)>0,bs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},ys=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Li(a)&&!Di(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},mr=new WeakMap;let Rt=0,Ve=1;const pr=30;let we;const lt=Symbol(""),hr=Symbol("");class qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vs(this,r)}run(){if(!this.active)return this.fn();let t=we,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,qe=!0,Ve=1<<++Rt,Rt<=pr?bs(this):Ta(this),this.fn()}finally{Rt<=pr&&ys(this),Ve=1<<--Rt,we=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const $i=[];function St(){$i.push(qe),qe=!1}function Tt(){const e=$i.pop();qe=e===void 0?!0:e}function pe(e,t,n){if(qe&&we){let r=mr.get(e);r||mr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Kr()),zi(a)}}function zi(e,t){let n=!1;Rt<=pr?Di(e)||(e.n|=Ve,n=!Li(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function De(e,t,n,r,a,i){const o=mr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e)){const l=ji(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?Wr(n)&&s.push(o.get("length")):(s.push(o.get(lt)),bt(e)&&s.push(o.get(hr)));break;case"delete":j(e)||(s.push(o.get(lt)),bt(e)&&s.push(o.get(hr)));break;case"set":bt(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&gr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);gr(Kr(l))}}function gr(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&Ia(r);for(const r of n)r.computed||Ia(r)}function Ia(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const xs=$r("__proto__,__v_isRef,__isVue"),Bi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yr)),ws=Xr(),_s=Xr(!1,!0),ks=Xr(!0),Na=As();function As(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=Y(this)[t].apply(this,n);return Tt(),r}}),e}function Xr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?zs:Ki:t?Wi:Yi).get(r))return r;const o=j(r);if(!e&&o&&z(Na,a))return Reflect.get(Na,a,i);const s=Reflect.get(r,a,i);return(Yr(a)?Bi.has(a):xs(a))||(e||pe(r,"get",a),t)?s:se(s)?o&&Wr(a)?s:s.value:J(s)?e?qi(s):Gr(s):s}}const Os=Ui(),Es=Ui(!0);function Ui(e=!1){return function(n,r,a,i){let o=n[r];if(Ut(o)&&se(o)&&!se(a))return!1;if(!e&&(!vr(a)&&!Ut(a)&&(o=Y(o),a=Y(a)),!j(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=j(n)&&Wr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?Tn(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Ps(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Cs(e,t){const n=Reflect.has(e,t);return(!Yr(t)||!Bi.has(t))&&pe(e,"has",t),n}function Ss(e){return pe(e,"iterate",j(e)?"length":lt),Reflect.ownKeys(e)}const Hi={get:ws,set:Os,deleteProperty:Ps,has:Cs,ownKeys:Ss},Ts={get:ks,set(e,t){return!0},deleteProperty(e,t){return!0}},Is=fe({},Hi,{get:_s,set:Es}),Vr=e=>e,Un=e=>Reflect.getPrototypeOf(e);function sn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:o}=Un(a),s=r?Vr:n?ea:Qr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function ln(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function fn(e,t=!1){return e=e.__v_raw,!t&&pe(Y(e),"iterate",lt),Reflect.get(e,"size",e)}function Ma(e){e=Y(e);const t=Y(this);return Un(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Fa(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=Un(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Tn(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function Ra(e){const t=Y(this),{has:n,get:r}=Un(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function ja(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function cn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?Vr:e?ea:Qr;return!e&&pe(s,"iterate",lt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function un(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=bt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Vr:t?ea:Qr;return!t&&pe(i,"iterate",l?hr:lt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Ns(){const e={get(i){return sn(this,i)},get size(){return fn(this)},has:ln,add:Ma,set:Fa,delete:Ra,clear:ja,forEach:cn(!1,!1)},t={get(i){return sn(this,i,!1,!0)},get size(){return fn(this)},has:ln,add:Ma,set:Fa,delete:Ra,clear:ja,forEach:cn(!1,!0)},n={get(i){return sn(this,i,!0)},get size(){return fn(this,!0)},has(i){return ln.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:cn(!0,!1)},r={get(i){return sn(this,i,!0,!0)},get size(){return fn(this,!0)},has(i){return ln.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:cn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=un(i,!1,!1),n[i]=un(i,!0,!1),t[i]=un(i,!1,!0),r[i]=un(i,!0,!0)}),[e,n,t,r]}const[Ms,Fs,Rs,js]=Ns();function Jr(e,t){const n=t?e?js:Rs:e?Fs:Ms;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Ls={get:Jr(!1,!1)},Ds={get:Jr(!1,!0)},$s={get:Jr(!0,!1)},Yi=new WeakMap,Wi=new WeakMap,Ki=new WeakMap,zs=new WeakMap;function Bs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Us(e){return e.__v_skip||!Object.isExtensible(e)?0:Bs(ds(e))}function Gr(e){return Ut(e)?e:Zr(e,!1,Hi,Ls,Yi)}function Hs(e){return Zr(e,!1,Is,Ds,Wi)}function qi(e){return Zr(e,!0,Ts,$s,Ki)}function Zr(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Us(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function yt(e){return Ut(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function vr(e){return!!(e&&e.__v_isShallow)}function Xi(e){return yt(e)||Ut(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Vi(e){return In(e,"__v_skip",!0),e}const Qr=e=>J(e)?Gr(e):e,ea=e=>J(e)?qi(e):e;function Ys(e){qe&&we&&(e=Y(e),zi(e.dep||(e.dep=Kr())))}function Ws(e,t){e=Y(e),e.dep&&gr(e.dep)}function se(e){return!!(e&&e.__v_isRef===!0)}function Ks(e){return se(e)?e.value:e}const qs={get:(e,t,n)=>Ks(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ji(e){return yt(e)?e:new Proxy(e,qs)}var Gi;class Xs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Gi]=!1,this._dirty=!0,this.effect=new qr(t,()=>{this._dirty||(this._dirty=!0,Ws(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return Ys(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Gi="__v_isReadonly";function Vs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Xs(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Hn(i,t,n)}return a}function Ee(e,t,n,r){if(L(e)){const i=Xe(e,t,n,r);return i&&Ni(i)&&i.catch(o=>{Hn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Hn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}Js(e,n,a,r)}function Js(e,t,n,r=!0){console.error(e)}let Ht=!1,br=!1;const re=[];let Ne=0;const xt=[];let Le=null,at=0;const Zi=Promise.resolve();let ta=null;function Gs(e){const t=ta||Zi;return e?t.then(this?e.bind(this):e):t}function Zs(e){let t=Ne+1,n=re.length;for(;t<n;){const r=t+n>>>1;Yt(re[r])<e?t=r+1:n=r}return t}function na(e){(!re.length||!re.includes(e,Ht&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?re.push(e):re.splice(Zs(e.id),0,e),Qi())}function Qi(){!Ht&&!br&&(br=!0,ta=Zi.then(to))}function Qs(e){const t=re.indexOf(e);t>Ne&&re.splice(t,1)}function el(e){j(e)?xt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?at+1:at))&&xt.push(e),Qi()}function La(e,t=Ht?Ne+1:0){for(;t<re.length;t++){const n=re[t];n&&n.pre&&(re.splice(t,1),t--,n())}}function eo(e){if(xt.length){const t=[...new Set(xt)];if(xt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Yt(n)-Yt(r)),at=0;at<Le.length;at++)Le[at]();Le=null,at=0}}const Yt=e=>e.id==null?1/0:e.id,tl=(e,t)=>{const n=Yt(e)-Yt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function to(e){br=!1,Ht=!0,re.sort(tl);const t=Oe;try{for(Ne=0;Ne<re.length;Ne++){const n=re[Ne];n&&n.active!==!1&&Xe(n,null,14)}}finally{Ne=0,re.length=0,eo(),Ht=!1,ta=null,(re.length||xt.length)&&to()}}function nl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||V;v&&(a=n.map(k=>ee(k)?k.trim():k)),m&&(a=n.map(ji))}let s,l=r[s=rr(t)]||r[s=rr(At(t))];!l&&i&&(l=r[s=rr(Ct(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function no(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=no(c,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(j(i)?i.forEach(l=>o[l]=null):fe(o,i),J(e)&&r.set(e,o),o)}function Yn(e,t){return!e||!$n(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Ct(t))||z(e,t))}let Me=null,Wn=null;function Nn(e){const t=Me;return Me=e,Wn=e&&e.type.__scopeId||null,t}function ro(e){Wn=e}function ao(){Wn=null}function rl(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Wa(-1);const i=Nn(t);let o;try{o=e(...a)}finally{Nn(i),r._d&&Wa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:k,ctx:R,inheritAttrs:M}=e;let B,w;const C=Nn(e);try{if(n.shapeFlag&4){const D=a||r;B=Ie(d.call(D,D,m,i,k,v,R)),w=l}else{const D=t;B=Ie(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),w=t.props?l:al(l)}}catch(D){Dt.length=0,Hn(D,e,1),B=le(Wt)}let E=B;if(w&&M!==!1){const D=Object.keys(w),{shapeFlag:U}=E;D.length&&U&7&&(o&&D.some(Ur)&&(w=il(w,o)),E=Ot(E,w))}return n.dirs&&(E=Ot(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),B=E,Nn(C),B}const al=e=>{let t;for(const n in e)(n==="class"||n==="style"||$n(n))&&((t||(t={}))[n]=e[n]);return t},il=(e,t)=>{const n={};for(const r in e)(!Ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ol(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Da(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Yn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Da(r,o,c):!0:!!o;return!1}function Da(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Yn(n,i))return!0}return!1}function sl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ll=e=>e.__isSuspense;function fl(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):el(e)}function cl(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function kn(e,t,n=!1){const r=ae||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const dn={};function An(e,t,n){return io(e,t,n)}function io(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){const s=ae;let l,c=!1,d=!1;if(se(e)?(l=()=>e.value,c=vr(e)):yt(e)?(l=()=>e,r=!0):j(e)?(d=!0,c=e.some(E=>yt(E)||vr(E)),l=()=>e.map(E=>{if(se(E))return E.value;if(yt(E))return pt(E);if(L(E))return Xe(E,s,2)})):L(e)?t?l=()=>Xe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ee(e,s,3,[v])}:l=Oe,t&&r){const E=l;l=()=>pt(E())}let m,v=E=>{m=w.onStop=()=>{Xe(E,s,4)}},k;if(qt)if(v=Oe,t?n&&Ee(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const E=af();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Oe;let R=d?new Array(e.length).fill(dn):dn;const M=()=>{if(w.active)if(t){const E=w.run();(r||c||(d?E.some((D,U)=>Tn(D,R[U])):Tn(E,R)))&&(m&&m(),Ee(t,s,3,[E,R===dn?void 0:d&&R[0]===dn?[]:R,v]),R=E)}else w.run()};M.allowRecurse=!!t;let B;a==="sync"?B=M:a==="post"?B=()=>de(M,s&&s.suspense):(M.pre=!0,s&&(M.id=s.uid),B=()=>na(M));const w=new qr(l,B);t?n?M():R=w.run():a==="post"?de(w.run.bind(w),s&&s.suspense):w.run();const C=()=>{w.stop(),s&&s.scope&&Hr(s.scope.effects,w)};return k&&k.push(C),C}function ul(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?oo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ae;Et(this);const s=io(a,i.bind(r),n);return o?Et(o):ft(),s}function oo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))pt(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)pt(e[n],t);else if(Ii(e)||bt(e))e.forEach(n=>{pt(n,t)});else if(Fi(e))for(const n in e)pt(e[n],t);return e}function ra(e){return L(e)?{setup:e,name:e.name}:e}const On=e=>!!e.type.__asyncLoader,so=e=>e.type.__isKeepAlive;function dl(e,t){lo(e,"a",t)}function ml(e,t){lo(e,"da",t)}function lo(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Kn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)so(a.parent.vnode)&&pl(r,t,n,a),a=a.parent}}function pl(e,t,n,r){const a=Kn(t,e,r,!0);fo(()=>{Hr(r[t],a)},n)}function Kn(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),Et(n);const s=Ee(t,n,e,o);return ft(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=ae)=>(!qt||e==="sp")&&Kn(e,(...r)=>t(...r),n),hl=Ue("bm"),gl=Ue("m"),vl=Ue("bu"),bl=Ue("u"),yl=Ue("bum"),fo=Ue("um"),xl=Ue("sp"),wl=Ue("rtg"),_l=Ue("rtc");function kl(e,t=ae){Kn("ec",e,t)}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Ee(l,n,8,[e.el,s,e,t]),Tt())}}const Al=Symbol();function Ol(e,t,n,r){let a;const i=n&&n[r];if(j(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const yr=e=>e?wo(e)?sa(e)||e.proxy:yr(e.parent):null,Lt=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>aa(e),$forceUpdate:e=>e.f||(e.f=()=>na(e.update)),$nextTick:e=>e.n||(e.n=Gs.bind(e.proxy)),$watch:e=>ul.bind(e)}),or=(e,t)=>e!==V&&!e.__isScriptSetup&&z(e,t),El={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(or(r,t))return o[t]=1,r[t];if(a!==V&&z(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&z(c,t))return o[t]=3,i[t];if(n!==V&&z(n,t))return o[t]=4,n[t];xr&&(o[t]=0)}}const d=Lt[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&z(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return or(a,t)?(a[t]=n,!0):r!==V&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&z(e,o)||or(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(Lt,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xr=!0;function Pl(e){const t=aa(e),n=e.proxy,r=e.ctx;xr=!1,t.beforeCreate&&$a(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:R,activated:M,deactivated:B,beforeDestroy:w,beforeUnmount:C,destroyed:E,unmounted:D,render:U,renderTracked:ce,renderTriggered:ne,errorCaptured:be,serverPrefetch:ge,expose:Re,inheritAttrs:Nt,components:nn,directives:rn,filters:er}=t;if(c&&Cl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const W=o[G];L(W)&&(r[G]=W.bind(n))}if(a){const G=a.call(n,n);J(G)&&(e.data=Gr(G))}if(xr=!0,i)for(const G in i){const W=i[G],Qe=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Oe,an=!L(W)&&L(W.set)?W.set.bind(n):Oe,et=ve({get:Qe,set:an});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>et.value,set:Pe=>et.value=Pe})}if(s)for(const G in s)co(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(W=>{cl(W,G[W])})}d&&$a(d,e,"c");function ie(G,W){j(W)?W.forEach(Qe=>G(Qe.bind(n))):W&&G(W.bind(n))}if(ie(hl,m),ie(gl,v),ie(vl,k),ie(bl,R),ie(dl,M),ie(ml,B),ie(kl,be),ie(_l,ce),ie(wl,ne),ie(yl,C),ie(fo,D),ie(xl,ge),j(Re))if(Re.length){const G=e.exposed||(e.exposed={});Re.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:Qe=>n[W]=Qe})})}else e.exposed||(e.exposed={});U&&e.render===Oe&&(e.render=U),Nt!=null&&(e.inheritAttrs=Nt),nn&&(e.components=nn),rn&&(e.directives=rn)}function Cl(e,t,n=Oe,r=!1){j(e)&&(e=wr(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=kn(i.from||a,i.default,!0):o=kn(i.from||a):o=kn(i),se(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function $a(e,t,n){Ee(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function co(e,t,n,r){const a=r.includes(".")?oo(n,r):()=>n[r];if(ee(e)){const i=t[e];L(i)&&An(a,i)}else if(L(e))An(a,e.bind(n));else if(J(e))if(j(e))e.forEach(i=>co(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&An(a,i,e)}}function aa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Mn(l,c,o,!0)),Mn(l,t,o)),J(t)&&i.set(t,l),l}function Mn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Mn(e,i,n,!0),a&&a.forEach(o=>Mn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Sl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Sl={data:za,props:rt,emits:rt,methods:rt,computed:rt,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:rt,directives:rt,watch:Il,provide:za,inject:Tl};function za(e,t){return t?e?function(){return fe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Tl(e,t){return rt(wr(e),wr(t))}function wr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function rt(e,t){return e?fe(fe(Object.create(null),e),t):t}function Il(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function Nl(e,t,n,r=!1){const a={},i={};In(i,Xn,1),e.propsDefaults=Object.create(null),uo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Hs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ml(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Yn(e.emitsOptions,v))continue;const k=t[v];if(l)if(z(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const R=At(v);a[R]=_r(l,s,R,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{uo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=Ct(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=_r(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function uo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(_n(l))continue;const c=t[l];let d;a&&z(a,d=At(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Yn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=_r(a,l,m,c[m],e,!z(c,m))}}return o}function _r(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Et(a),r=c[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ct(n))&&(r=!0))}return r}function mo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,k]=mo(m,t,!0);fe(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,vt),vt;if(j(i))for(let d=0;d<i.length;d++){const m=At(i[d]);Ba(m)&&(o[m]=V)}else if(i)for(const d in i){const m=At(d);if(Ba(m)){const v=i[d],k=o[m]=j(v)||L(v)?{type:v}:Object.assign({},v);if(k){const R=Ya(Boolean,k.type),M=Ya(String,k.type);k[0]=R>-1,k[1]=M<0||R<M,(R>-1||z(k,"default"))&&s.push(m)}}}const c=[o,s];return J(e)&&r.set(e,c),c}function Ba(e){return e[0]!=="$"}function Ua(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ha(e,t){return Ua(e)===Ua(t)}function Ya(e,t){return j(t)?t.findIndex(n=>Ha(n,e)):L(t)&&Ha(t,e)?0:-1}const po=e=>e[0]==="_"||e==="$stable",ia=e=>j(e)?e.map(Ie):[Ie(e)],Fl=(e,t,n)=>{if(t._n)return t;const r=rl((...a)=>ia(t(...a)),n);return r._c=!1,r},ho=(e,t,n)=>{const r=e._ctx;for(const a in e){if(po(a))continue;const i=e[a];if(L(i))t[a]=Fl(a,i,r);else if(i!=null){const o=ia(i);t[a]=()=>o}}},go=(e,t)=>{const n=ia(t);e.slots.default=()=>n},Rl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),In(t,"_",n)):ho(t,e.slots={})}else e.slots={},t&&go(e,t);In(e.slots,Xn,1)},jl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ho(t,a)),o=t}else t&&(go(e,t),o={default:1});if(i)for(const s in a)!po(s)&&!(s in o)&&delete a[s]};function vo(){return{app:null,config:{isNativeTag:fs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ll=0;function Dl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=vo(),o=new Set;let s=!1;const l=i.app={_uid:Ll++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:of,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=le(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,sa(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function kr(e,t,n,r,a=!1){if(j(e)){e.forEach((v,k)=>kr(v,t&&(j(t)?t[k]:t),n,r,a));return}if(On(r)&&!a)return;const i=r.shapeFlag&4?sa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ee(c)?(d[c]=null,z(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),L(l))Xe(l,s,12,[o,d]);else{const v=ee(l),k=se(l);if(v||k){const R=()=>{if(e.f){const M=v?z(m,l)?m[l]:d[l]:l.value;a?j(M)&&Hr(M,i):j(M)?M.includes(i)||M.push(i):v?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,z(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,de(R,n)):R()}}}const de=fl;function $l(e){return zl(e)}function zl(e,t){const n=hs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Oe,insertStaticContent:R}=e,M=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ft(f,u)&&(g=on(f),Pe(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:S}=u;switch(b){case qn:B(f,u,p,g);break;case Wt:w(f,u,p,g);break;case En:f==null&&C(u,p,g,A);break;case xe:nn(f,u,p,g,h,x,A,y,_);break;default:S&1?U(f,u,p,g,h,x,A,y,_):S&6?rn(f,u,p,g,h,x,A,y,_):(S&64||S&128)&&b.process(f,u,p,g,h,x,A,y,_,dt)}I!=null&&h&&kr(I,f&&f.ref,x,u||f,!u)},B=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},w=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},C=(f,u,p,g)=>{[f.el,f.anchor]=R(f.children,u,p,g,f.el,f.anchor)},E=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},D=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},U=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?ce(u,p,g,h,x,A,y,_):ge(f,u,h,x,A,y,_)},ce=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:I,props:S,shapeFlag:N,transition:F,dirs:$}=f;if(_=f.el=o(f.type,x,S&&S.is,S),N&8?d(_,f.children):N&16&&be(f.children,_,null,g,h,x&&I!=="foreignObject",A,y),$&&tt(f,null,g,"created"),S){for(const H in S)H!=="value"&&!_n(H)&&i(_,H,null,S[H],x,f.children,g,h,je);"value"in S&&i(_,"value",null,S.value),(b=S.onVnodeBeforeMount)&&Se(b,g,f)}ne(_,f,f.scopeId,A,g),$&&tt(f,null,g,"beforeMount");const K=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;K&&F.beforeEnter(_),r(_,u,p),((b=S&&S.onVnodeMounted)||K||$)&&de(()=>{b&&Se(b,g,f),K&&F.enter(_),$&&tt(f,null,g,"mounted")},h)},ne=(f,u,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ne(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},be=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=y?Ke(f[b]):Ie(f[b]);M(null,I,u,p,g,h,x,A,y)}},ge=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=u;_|=f.patchFlag&16;const S=f.props||V,N=u.props||V;let F;p&&nt(p,!1),(F=N.onVnodeBeforeUpdate)&&Se(F,p,u,f),I&&tt(u,f,p,"beforeUpdate"),p&&nt(p,!0);const $=h&&u.type!=="foreignObject";if(b?Re(f.dynamicChildren,b,y,p,g,$,x):A||W(f,u,y,null,p,g,$,x,!1),_>0){if(_&16)Nt(y,u,S,N,p,g,h);else if(_&2&&S.class!==N.class&&i(y,"class",null,N.class,h),_&4&&i(y,"style",S.style,N.style,h),_&8){const K=u.dynamicProps;for(let H=0;H<K.length;H++){const Q=K[H],ye=S[Q],mt=N[Q];(mt!==ye||Q==="value")&&i(y,Q,ye,mt,h,f.children,p,g,je)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Nt(y,u,S,N,p,g,h);((F=N.onVnodeUpdated)||I)&&de(()=>{F&&Se(F,p,u,f),I&&tt(u,f,p,"updated")},g)},Re=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],I=_.el&&(_.type===xe||!Ft(_,b)||_.shapeFlag&70)?m(_.el):p;M(_,b,I,null,g,h,x,A,!0)}},Nt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==V)for(const y in p)!_n(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,je);for(const y in g){if(_n(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,je)}"value"in g&&i(f,"value",p.value,g.value)}},nn=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,g),r(I,p,g),be(u.children,p,I,h,x,A,y,_)):S>0&&S&64&&N&&f.dynamicChildren?(Re(f.dynamicChildren,N,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&bo(f,u,!0)):W(f,u,p,I,h,x,A,y,_)},rn=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):er(u,p,g,h,x,A,_):_a(f,u,_)},er=(f,u,p,g,h,x,A)=>{const y=f.component=Gl(f,g,h);if(so(f)&&(y.ctx.renderer=dt),Zl(y),y.asyncDep){if(h&&h.registerDep(y,ie),!f.el){const _=y.subTree=le(Wt);w(null,_,u,p)}return}ie(y,f,u,p,h,x,A)},_a=(f,u,p)=>{const g=u.component=f.component;if(ol(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,Qs(g.update),g.update();else u.el=f.el,g.vnode=u},ie=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:S,u:N,parent:F,vnode:$}=f,K=I,H;nt(f,!1),I?(I.el=$.el,G(f,I,A)):I=$,S&&ar(S),(H=I.props&&I.props.onVnodeBeforeUpdate)&&Se(H,F,I,$),nt(f,!0);const Q=ir(f),ye=f.subTree;f.subTree=Q,M(ye,Q,m(ye.el),on(ye),f,h,x),I.el=Q.el,K===null&&sl(f,Q.el),N&&de(N,h),(H=I.props&&I.props.onVnodeUpdated)&&de(()=>Se(H,F,I,$),h)}else{let I;const{el:S,props:N}=u,{bm:F,m:$,parent:K}=f,H=On(u);if(nt(f,!1),F&&ar(F),!H&&(I=N&&N.onVnodeBeforeMount)&&Se(I,K,u),nt(f,!0),S&&nr){const Q=()=>{f.subTree=ir(f),nr(S,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=ir(f);M(null,Q,p,g,f,h,x),u.el=Q.el}if($&&de($,h),!H&&(I=N&&N.onVnodeMounted)){const Q=u;de(()=>Se(I,K,Q),h)}(u.shapeFlag&256||K&&On(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new qr(y,()=>na(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,nt(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Ml(f,u.props,g,p),jl(f,u.children,p),St(),La(),Tt()},W=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,S=u.children,{patchFlag:N,shapeFlag:F}=u;if(N>0){if(N&128){an(b,S,p,g,h,x,A,y,_);return}else if(N&256){Qe(b,S,p,g,h,x,A,y,_);return}}F&8?(I&16&&je(b,h,x),S!==b&&d(p,S)):I&16?F&16?an(b,S,p,g,h,x,A,y,_):je(b,h,x,!0):(I&8&&d(p,""),F&16&&be(S,p,g,h,x,A,y,_))},Qe=(f,u,p,g,h,x,A,y,_)=>{f=f||vt,u=u||vt;const b=f.length,I=u.length,S=Math.min(b,I);let N;for(N=0;N<S;N++){const F=u[N]=_?Ke(u[N]):Ie(u[N]);M(f[N],F,p,null,h,x,A,y,_)}b>I?je(f,h,x,!0,!1,S):be(u,p,g,h,x,A,y,_,S)},an=(f,u,p,g,h,x,A,y,_)=>{let b=0;const I=u.length;let S=f.length-1,N=I-1;for(;b<=S&&b<=N;){const F=f[b],$=u[b]=_?Ke(u[b]):Ie(u[b]);if(Ft(F,$))M(F,$,p,null,h,x,A,y,_);else break;b++}for(;b<=S&&b<=N;){const F=f[S],$=u[N]=_?Ke(u[N]):Ie(u[N]);if(Ft(F,$))M(F,$,p,null,h,x,A,y,_);else break;S--,N--}if(b>S){if(b<=N){const F=N+1,$=F<I?u[F].el:g;for(;b<=N;)M(null,u[b]=_?Ke(u[b]):Ie(u[b]),p,$,h,x,A,y,_),b++}}else if(b>N)for(;b<=S;)Pe(f[b],h,x,!0),b++;else{const F=b,$=b,K=new Map;for(b=$;b<=N;b++){const me=u[b]=_?Ke(u[b]):Ie(u[b]);me.key!=null&&K.set(me.key,b)}let H,Q=0;const ye=N-$+1;let mt=!1,Oa=0;const Mt=new Array(ye);for(b=0;b<ye;b++)Mt[b]=0;for(b=F;b<=S;b++){const me=f[b];if(Q>=ye){Pe(me,h,x,!0);continue}let Ce;if(me.key!=null)Ce=K.get(me.key);else for(H=$;H<=N;H++)if(Mt[H-$]===0&&Ft(me,u[H])){Ce=H;break}Ce===void 0?Pe(me,h,x,!0):(Mt[Ce-$]=b+1,Ce>=Oa?Oa=Ce:mt=!0,M(me,u[Ce],p,null,h,x,A,y,_),Q++)}const Ea=mt?Bl(Mt):vt;for(H=Ea.length-1,b=ye-1;b>=0;b--){const me=$+b,Ce=u[me],Pa=me+1<I?u[me+1].el:g;Mt[b]===0?M(null,Ce,p,Pa,h,x,A,y,_):mt&&(H<0||b!==Ea[H]?et(Ce,p,Pa,2):H--)}}},et=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){et(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,dt);return}if(A===xe){r(x,u,p);for(let S=0;S<_.length;S++)et(_[S],u,p,g);r(f.anchor,u,p);return}if(A===En){E(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),de(()=>y.enter(x),h);else{const{leave:S,delayLeave:N,afterLeave:F}=y,$=()=>r(x,u,p),K=()=>{S(x,()=>{$(),F&&F()})};N?N(x,$,K):K()}else r(x,u,p)},Pe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:S,dirs:N}=f;if(y!=null&&kr(y,null,p,f,!0),I&256){u.ctx.deactivate(f);return}const F=I&1&&N,$=!On(f);let K;if($&&(K=A&&A.onVnodeBeforeUnmount)&&Se(K,u,f),I&6)ns(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}F&&tt(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,p,h,dt,g):b&&(x!==xe||S>0&&S&64)?je(b,u,p,!1,!0):(x===xe&&S&384||!h&&I&16)&&je(_,u,p),g&&ka(f)}($&&(K=A&&A.onVnodeUnmounted)||F)&&de(()=>{K&&Se(K,u,f),F&&tt(f,null,u,"unmounted")},p)},ka=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===xe){ts(p,g);return}if(u===En){D(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},ts=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},ns=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&ar(g),h.stop(),x&&(x.active=!1,Pe(A,f,u,p)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Pe(f[A],u,p,g,h)},on=f=>f.shapeFlag&6?on(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Aa=(f,u,p)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):M(u._vnode||null,f,u,null,null,null,p),La(),eo(),u._vnode=f},dt={p:M,um:Pe,m:et,r:ka,mt:er,mc:be,pc:W,pbc:Re,n:on,o:e};let tr,nr;return t&&([tr,nr]=t(dt)),{render:Aa,hydrate:tr,createApp:Dl(Aa,tr)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function bo(e,t,n=!1){const r=e.children,a=t.children;if(j(r)&&j(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||bo(o,s)),s.type===qn&&(s.el=o.el)}}function Bl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ul=e=>e.__isTeleport,xe=Symbol(void 0),qn=Symbol(void 0),Wt=Symbol(void 0),En=Symbol(void 0),Dt=[];let ke=null;function wt(e=!1){Dt.push(ke=e?null:[])}function Hl(){Dt.pop(),ke=Dt[Dt.length-1]||null}let Kt=1;function Wa(e){Kt+=e}function Yl(e){return e.dynamicChildren=Kt>0?ke||vt:null,Hl(),Kt>0&&ke&&ke.push(e),e}function _t(e,t,n,r,a,i){return Yl(P(e,t,n,r,a,i,!0))}function Ar(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Xn="__vInternal",yo=({key:e})=>e??null,Pn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||se(e)||L(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function P(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yo(t),ref:t&&Pn(t),scopeId:Wn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Me};return s?(oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Kt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const le=Wl;function Wl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Al)&&(e=Wt),Ar(e)){const s=Ot(e,t,!0);return n&&oa(s,n),Kt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(nf(e)&&(e=e.__vccOpts),t){t=Kl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=Br(s)),J(l)&&(Xi(l)&&!j(l)&&(l=fe({},l)),t.style=zr(l))}const o=ee(e)?1:ll(e)?128:Ul(e)?64:J(e)?4:L(e)?2:0;return P(e,t,n,r,a,o,i,!0)}function Kl(e){return e?Xi(e)||Xn in e?fe({},e):e:null}function Ot(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Xl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&yo(s),ref:t&&t.ref?n&&a?j(a)?a.concat(Pn(t)):[a,Pn(t)]:Pn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function ql(e=" ",t=0){return le(qn,null,e,t)}function xo(e,t){const n=le(En,null,e);return n.staticCount=t,n}function Ie(e){return e==null||typeof e=="boolean"?le(Wt):j(e)?le(xe,null,e.slice()):typeof e=="object"?Ke(e):le(qn,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Xn in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[ql(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Br([t.class,r.class]));else if(a==="style")t.style=zr([t.style,r.style]);else if($n(a)){const i=t[a],o=r[a];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ee(e,t,7,[n,r])}const Vl=vo();let Jl=0;function Gl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Vl,i={uid:Jl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new gs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mo(r,a),emitsOptions:no(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=nl.bind(null,i),e.ce&&e.ce(i),i}let ae=null;const Et=e=>{ae=e,e.scope.on()},ft=()=>{ae&&ae.scope.off(),ae=null};function wo(e){return e.vnode.shapeFlag&4}let qt=!1;function Zl(e,t=!1){qt=t;const{props:n,children:r}=e.vnode,a=wo(e);Nl(e,n,a,t),Rl(e,r);const i=a?Ql(e,t):void 0;return qt=!1,i}function Ql(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Vi(new Proxy(e.ctx,El));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?tf(e):null;Et(e),St();const i=Xe(r,e,0,[e.props,a]);if(Tt(),ft(),Ni(i)){if(i.then(ft,ft),t)return i.then(o=>{Ka(e,o,t)}).catch(o=>{Hn(o,e,0)});e.asyncDep=i}else Ka(e,i,t)}else _o(e,t)}function Ka(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Ji(t)),_o(e,n)}let qa;function _o(e,t,n){const r=e.type;if(!e.render){if(!t&&qa&&!r.render){const a=r.template||aa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=qa(a,c)}}e.render=r.render||Oe}Et(e),St(),Pl(e),Tt(),ft()}function ef(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function tf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ef(e))},slots:e.slots,emit:e.emit,expose:t}}function sa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ji(Vi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lt)return Lt[n](e)},has(t,n){return n in t||n in Lt}}))}function nf(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>Vs(e,t,qt);function ko(e,t,n){const r=arguments.length;return r===2?J(t)&&!j(t)?Ar(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ar(n)&&(n=[n]),le(e,t,n))}const rf=Symbol(""),af=()=>kn(rf),of="3.2.45",sf="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,Xa=it&&it.createElement("template"),lf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(sf,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Xa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Xa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ff(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function cf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)Or(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&Or(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Va=/\s*!important$/;function Or(e,t,n){if(j(n))n.forEach(r=>Or(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=uf(e,t);Va.test(n)?e.setProperty(Ct(r),n.replace(Va,""),"important"):e[r]=n}}const Ja=["Webkit","Moz","ms"],sr={};function uf(e,t){const n=sr[t];if(n)return n;let r=At(t);if(r!=="filter"&&r in e)return sr[t]=r;r=Ri(r);for(let a=0;a<Ja.length;a++){const i=Ja[a]+r;if(i in e)return sr[t]=i}return t}const Ga="http://www.w3.org/1999/xlink";function df(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ga,t.slice(6,t.length)):e.setAttributeNS(Ga,t,n);else{const i=ls(t);n==null||i&&!Si(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function mf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Si(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function pf(e,t,n,r){e.addEventListener(t,n,r)}function hf(e,t,n,r){e.removeEventListener(t,n,r)}function gf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=vf(t);if(r){const c=i[t]=xf(r,a);pf(e,s,c,l)}else o&&(hf(e,s,o,l),i[t]=void 0)}}const Za=/(?:Once|Passive|Capture)$/;function vf(e){let t;if(Za.test(e)){t={};let r;for(;r=e.match(Za);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ct(e.slice(2)),t]}let lr=0;const bf=Promise.resolve(),yf=()=>lr||(bf.then(()=>lr=0),lr=Date.now());function xf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(wf(r,n.value),t,5,[r])};return n.value=e,n.attached=yf(),n}function wf(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Qa=/^on[a-z]/,_f=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?ff(e,r,a):t==="style"?cf(e,n,r):$n(t)?Ur(t)||gf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kf(e,t,r,a))?mf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),df(e,t,r,a))};function kf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Qa.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Qa.test(t)&&ee(n)?!1:t in e}const Af=fe({patchProp:_f},lf);let ei;function Of(){return ei||(ei=$l(Af))}const Ef=(...e)=>{const t=Of().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Pf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Pf(e){return ee(e)?document.querySelector(e):e}const Cf="/andresNavarro/imagenes/gradual.jpg",Sf="/andresNavarro/assets/navarrolive-7d8b0ff2.jpg",Tf="/andresNavarro/assets/dlima1-dd7521b1.jpg",ti="/andresNavarro/assets/logo3-e88c0e6d.svg",If=e=>(ro("data-v-c3871e9a"),e=e(),ao(),e),Nf={class:"Banner"},Mf=If(()=>P("div",{class:"d-flex flex-column justify-content-center"},[P("img",{class:"mb-2 m-auto d-lg-block d-none",src:ti,alt:"",style:{width:"600px"}}),P("img",{class:"mb-2 m-auto d-block d-lg-none",src:ti,alt:"",style:{width:"300px"}}),P("p",{class:"text-white text-center"},"Productor, compositor y pianista.")],-1)),Ff=[Mf];function Rf(e,t){return wt(),_t("div",Nf,Ff)}const Vn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},jf={},Lf=Vn(jf,[["render",Rf],["__scopeId","data-v-c3871e9a"]]),Df={class:"mb-5"},$f={class:"nav-bar p-3"};function zf(e,t,n,r,a,i){return wt(),_t("div",Df,[P("div",$f,[P("ul",null,[P("li",{"data-section":"section1",onClick:t[0]||(t[0]=(...o)=>i.scrollToSection&&i.scrollToSection(...o))},"Proyectos"),P("li",{"data-section":"section2",onClick:t[1]||(t[1]=(...o)=>i.scrollToSection&&i.scrollToSection(...o))},"Acerca de"),P("li",{"data-section":"section3",onClick:t[2]||(t[2]=(...o)=>i.scrollToSection&&i.scrollToSection(...o))},"Videos")])])])}const Bf={data(){return{}},methods:{scrollToSection(e){const t=e.target.getAttribute("data-section"),n=document.getElementById(t);n&&n.scrollIntoView({behavior:"smooth"})}}},Uf=Vn(Bf,[["render",zf]]),Hf={class:"p-lg-5 mx-5"},Yf={class:"content-cards row justify-content-center align-items-end"},Wf={class:"tarjeta-album text-white h-100"},Kf=["src"],qf=["src"],Xf={class:"text-center"},Vf={class:"mb-1"},Jf={class:"mb-1 fst-italic"};function Gf(e,t,n,r,a,i){return wt(),_t("div",Hf,[P("div",Yf,[(wt(!0),_t(xe,null,Ol(a.items,(o,s)=>(wt(),_t("div",{class:"col-xl-5",key:s},[P("div",Wf,[P("img",{src:o.imagen},null,8,Kf),P("iframe",{class:"mb-3",style:{"border-radius":"12px"},src:o.iframeSrc,width:"100%",height:"152",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,8,qf),P("div",Xf,[P("p",Vf,Ca(o.rol),1),P("p",Jf,Ca(o.year),1)])])]))),128))])])}const Zf={data(){return{items:[{imagen:"imagenes/elbeso.png",name:"El beso",artist:"Bienmeli ",rol:"Piano y producción (2023)",year:"",iframeSrc:"https://open.spotify.com/embed/track/2acJQ2exvkghll049hoTkJ?utm_source=generator"},{imagen:"imagenes/img3.jpg",name:"Si te vas",artist:"Josele",rol:"Piano y producción  (2022)",year:"",iframeSrc:"https://open.spotify.com/embed/track/3UaDtF2tHgbKfIR9s5ZTUK?utm_source=generator"},{imagen:"imagenes/img2.jpg",name:"Girl",artist:"El Rila ft El Ruido ",rol:"Piano y producción (2022)",year:"",iframeSrc:"https://open.spotify.com/embed/track/3PxuQKMxyHkhCi741aQghV?utm_source=generator",link:""},{imagen:"imagenes/d.jpeg",name:"Cantando nuestras músicas",artist:"Idanis Rueda",rol:"Piano y producción (2022)",year:"",iframeSrc:"https://open.spotify.com/embed/track/5l2TgiVWff74KKHyi1V7TA?utm_source=generator",link:""},{imagen:"imagenes/img5.jpg",name:"Somos y nos tenemos",artist:"El Rila ",rol:"Piano y co-producción (2022)",year:"",iframeSrc:"https://open.spotify.com/embed/track/6gD4ygcw8YRPjjH85fEFS5?utm_source=generator"},{imagen:"imagenes/img4.png",name:"Adictivo",artist:"Bienmeli ",rol:"Piano y co-producción (2022)",year:"",iframeSrc:"https://open.spotify.com/embed/track/2lsSDUOlSVOvhYw3xpYW5T?utm_source=generator"},{imagen:"imagenes/img1.jpg",name:"Entre montaña y cemento",artist:"Ricardo Andres ",rol:"Piano (2022)",year:"",iframeSrc:"https://open.spotify.com/embed/track/4UhCRZoFG3CMbiX6QgQIsm?utm_source=generator"},{imagen:"imagenes/img6.jpg",name:"So High",artist:"Garca ",rol:"Piano y producción (2018)",year:"",iframeSrc:"https://open.spotify.com/embed/track/0z4OkZ8TDNwXwqJnKSalae?utm_source=generator"},{imagen:"imagenes/kuisi.jpg",name:"Tradicion Viva",artist:"Kuisitambo ",rol:"Piano | Nominado Grammy Latino 2016",year:" ",iframeSrc:"https://open.spotify.com/embed/track/3AW3MTth8mZcmPH7c4NvRe?utm_source=generator"},{imagen:"imagenes/forero.jpg",name:"Raices de un corazón",artist:"Andres forero",rol:"Piano (2015)",year:"",iframeSrc:"https://open.spotify.com/embed/track/54ncml9hCscya9x450D5tH?utm_source=generator"},{imagen:"imagenes/neyra.jpg",name:"Cerquita a ti",artist:"Neyra",rol:"Piano (2015)",year:"",iframeSrc:""}]}}},Qf=Vn(Zf,[["render",Gf]]);const Ao=e=>(ro("data-v-18efed28"),e=e(),ao(),e),ec=Ao(()=>P("div",{class:"px-lg-5 mx-5"},[P("div",{class:"row justify-content-center mb-2"},[P("div",{class:"col-xl-3"},[P("div",{class:"tarjeta-album text-white h-100"},[P("img",{src:Cf,alt:""}),P("div",{class:"text-center"},[P("h3",{class:"mb-1"},"Gradualmente (Cortometraje)"),P("h5",{class:"mb-1"},"Camilo Perdomo (2022)"),P("p",{class:"mb-1"},"Producción musical")])])]),P("div",{class:"col-xl-7"},[P("figure",{class:"d-lg-block d-none"},[P("iframe",{width:"860",height:"615",src:"https://www.youtube.com/embed/KvoLOad7S6U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])])])],-1)),tc=xo('<div class="p-lg-5 mx-5" id="section2" data-v-18efed28><div class="row justify-content-center align-items-center mb-1" data-v-18efed28><div class="col-lg-4 mb-lg-0 mb-4" data-v-18efed28><img class="w-100" src="'+Sf+'" alt="" data-v-18efed28></div><div class="col-lg-4" data-v-18efed28><h2 class="text-white mb-4" data-v-18efed28>Interpretes</h2><p class="text-white" data-v-18efed28>Proyecto Musical con énfasis en Música Andina Colombiana. Este formato reúne diferentes Músicos con el fin de interpretar canciones compuestas por Andrés Navarro, acompañado por la producción de una serie de videos publicados en el canal de Youtube Interpretes Andrés Navarro.</p></div></div></div><div class="p-lg-5 mx-5" data-v-18efed28><div class="row justify-content-center align-items-center mb-5" data-v-18efed28><div class="col-lg-4" data-v-18efed28><h2 class="text-white mb-4" data-v-18efed28>D&#39;lima</h2><p class="text-white" data-v-18efed28>Banda colombiana inspirada en el maestro Carlos Acosta D´lima, contrabajista, compositor y docente de la Universidad Autónoma de Bucaramanga, UNAB. El ensamble desarrolla un sonido nuevo y basa sus composiciones en el latin jazz, el funk,la salsa, la música tradicional colombiana, entre otros. D´lima es un referente musical deBucaramanga. Participa en conferencias, conciertos y en festivales de importancia en laregión, como el marco de las ferias de Ulibro y también, en la programación del teatroSantander acompañando a bandas nacionales e internacionales, como la BLAIR BIGBAND de Tennesse.<br data-v-18efed28><br data-v-18efed28>El ensamble ofrece un amplio repertorio trabajado durante cuatro años y plasmado en suprimer trabajo discográfico (EP) con la calidad de músicos profesionales, docentes yestudiantes.</p></div><div class="col-lg-4 mb-lg-0 mb-4" data-v-18efed28><img class="w-100" src="'+Tf+'" alt="" data-v-18efed28></div></div></div><h3 class="text-center text-white mb-4" id="section3" data-v-18efed28>Videos</h3>',3),nc=Ao(()=>P("div",{class:"p-lg-5 mx-5"},[P("div",{class:"row justify-content-center mb-3"},[P("div",{class:"col-lg-3"},[P("figure",null,[P("div",{class:"video"},[P("iframe",{class:"w-100",width:"560",height:"315",src:"https://www.youtube.com/embed/_AARD7ZWTMY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])]),P("div",{class:"col-lg-3"},[P("figure",null,[P("div",{class:"video"},[P("iframe",{class:"w-100",width:"560",height:"315",src:"https://www.youtube.com/embed/FVD4BznVyy0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])]),P("div",{class:"col-lg-3"},[P("figure",null,[P("div",{class:"video"},[P("iframe",{class:"w-100",width:"560",height:"315",src:"https://www.youtube.com/embed/1EaR27Cs_Bk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])])]),P("div",{class:"row justify-content-center mb-5"},[P("div",{class:"col-lg-3"},[P("figure",null,[P("div",{class:"video"},[P("iframe",{class:"w-100",width:"560",height:"315",src:"https://www.youtube.com/embed/McqVawkzLa0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])]),P("div",{class:"col-lg-3"},[P("figure",null,[P("div",{class:"video"},[P("iframe",{class:"w-100",width:"560",height:"315",src:"https://www.youtube.com/embed/zJxuBHUzjc4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])]),P("div",{class:"col-lg-3"},[P("figure",null,[P("div",{class:"video"},[P("iframe",{class:"w-100",width:"560",height:"315",src:"https://www.youtube.com/embed/vzBgwq88n4E",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])])]),P("div",{class:"row justify-content-center mb-5"},[P("div",{class:"col-lg-3"},[P("figure",null,[P("div",{class:"video"},[P("iframe",{class:"w-100",width:"560",height:"315",src:"https://www.youtube.com/embed/g3WBz_UqXT4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})])])])])],-1)),rc=xo('<div class="footer p-4" style="background-color:black;width:100%;" data-v-18efed28><div class="row justify-content-center" data-v-18efed28><div class="col-lg-3" data-v-18efed28><div class="text-white" data-v-18efed28><h3 data-v-18efed28>Contact</h3><p class="mb-0" data-v-18efed28>Addres<br data-v-18efed28>Number<br data-v-18efed28>City</p></div></div><div class="col-lg-3" data-v-18efed28><div class="text-white" data-v-18efed28><p class="mb-0 fst-italic" data-v-18efed28>Mollit commodo sit aliquip ex nostrud cillum incididunt exercitation in aliquip enim ipsum do amet. Id elit est Lorem reprehenderit commodo quis velit veniam commodo ad occaecat proident </p></div></div></div></div>',1),ac={__name:"App",setup(e){return(t,n)=>(wt(),_t(xe,null,[le(Uf),le(Lf),le(Qf,{id:"section1"}),ec,tc,nc,rc],64))}},ic=Vn(ac,[["__scopeId","data-v-18efed28"]]);function ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ni(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ni(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fn(e){return Fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fn(e)}function oc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ri(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sc(e,t,n){return t&&ri(e.prototype,t),n&&ri(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function la(e,t){return fc(e)||uc(e,t)||Oo(e,t)||mc()}function Qt(e){return lc(e)||cc(e)||Oo(e)||dc()}function lc(e){if(Array.isArray(e))return Er(e)}function fc(e){if(Array.isArray(e))return e}function cc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Oo(e,t){if(e){if(typeof e=="string")return Er(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Er(e,t)}}function Er(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ai=function(){},fa={},Eo={},Po=null,Co={mark:ai,measure:ai};try{typeof window<"u"&&(fa=window),typeof document<"u"&&(Eo=document),typeof MutationObserver<"u"&&(Po=MutationObserver),typeof performance<"u"&&(Co=performance)}catch{}var pc=fa.navigator||{},ii=pc.userAgent,oi=ii===void 0?"":ii,Je=fa,X=Eo,si=Po,mn=Co;Je.document;var He=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",So=~oi.indexOf("MSIE")||~oi.indexOf("Trident/"),pn,hn,gn,vn,bn,$e="___FONT_AWESOME___",Pr=16,To="fa",Io="svg-inline--fa",ct="data-fa-i2svg",Cr="data-fa-pseudo-element",hc="data-fa-pseudo-element-pending",ca="data-prefix",ua="data-icon",li="fontawesome-i2svg",gc="async",vc=["HTML","HEAD","STYLE","SCRIPT"],No=function(){try{return!0}catch{return!1}}(),q="classic",Z="sharp",da=[q,Z];function en(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[q]}})}var Xt=en((pn={},te(pn,q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(pn,Z,{fa:"solid",fass:"solid","fa-solid":"solid"}),pn)),Vt=en((hn={},te(hn,q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(hn,Z,{solid:"fass"}),hn)),Jt=en((gn={},te(gn,q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(gn,Z,{fass:"fa-solid"}),gn)),bc=en((vn={},te(vn,q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(vn,Z,{"fa-solid":"fass"}),vn)),yc=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Mo="fa-layers-text",xc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,wc=en((bn={},te(bn,q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(bn,Z,{900:"fass"}),bn)),Fo=[1,2,3,4,5,6,7,8,9,10],_c=Fo.concat([11,12,13,14,15,16,17,18,19,20]),kc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(Vt[q]).map(Gt.add.bind(Gt));Object.keys(Vt[Z]).map(Gt.add.bind(Gt));var Ac=[].concat(da,Qt(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Fo.map(function(e){return"".concat(e,"x")})).concat(_c.map(function(e){return"w-".concat(e)})),$t=Je.FontAwesomeConfig||{};function Oc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ec(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Pc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pc.forEach(function(e){var t=la(e,2),n=t[0],r=t[1],a=Ec(Oc(n));a!=null&&($t[r]=a)})}var Ro={styleDefault:"solid",familyDefault:"classic",cssPrefix:To,replacementClass:Io,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$t.familyPrefix&&($t.cssPrefix=$t.familyPrefix);var Pt=O(O({},Ro),$t);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var T={};Object.keys(Ro).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Pt[e]=n,zt.forEach(function(r){return r(T)})},get:function(){return Pt[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,zt.forEach(function(n){return n(T)})},get:function(){return Pt.cssPrefix}});Je.FontAwesomeConfig=T;var zt=[];function Cc(e){return zt.push(e),function(){zt.splice(zt.indexOf(e),1)}}var We=Pr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sc(e){if(!(!e||!He)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Tc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var e=12,t="";e-- >0;)t+=Tc[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ma(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function jo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ic(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(jo(e[n]),'" ')},"").trim()}function Jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function pa(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function Nc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Mc(e){var t=e.transform,n=e.width,r=n===void 0?Pr:n,a=e.height,i=a===void 0?Pr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&So?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Fc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Lo(){var e=To,t=Io,n=T.cssPrefix,r=T.replacementClass,a=Fc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var fi=!1;function fr(){T.autoAddCss&&!fi&&(Sc(Lo()),fi=!0)}var Rc={mixout:function(){return{dom:{css:Lo,insertCss:fr}}},hooks:function(){return{beforeDOMElementCreation:function(){fr()},beforeI2svg:function(){fr()}}}},ze=Je||{};ze[$e]||(ze[$e]={});ze[$e].styles||(ze[$e].styles={});ze[$e].hooks||(ze[$e].hooks={});ze[$e].shims||(ze[$e].shims=[]);var Ae=ze[$e],Do=[],jc=function e(){X.removeEventListener("DOMContentLoaded",e),Rn=1,Do.map(function(t){return t()})},Rn=!1;He&&(Rn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Rn||X.addEventListener("DOMContentLoaded",jc));function Lc(e){He&&(Rn?setTimeout(e,0):Do.push(e))}function tn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?jo(e):"<".concat(t," ").concat(Ic(r),">").concat(i.map(tn).join(""),"</").concat(t,">")}function ci(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Dc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},cr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Dc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function $c(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Sr(e){var t=$c(e);return t.length===1?t[0].toString(16):null}function zc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ui(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Tr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ui(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,ui(t)):Ae.styles[e]=O(O({},Ae.styles[e]||{}),i),e==="fas"&&Tr("fa",t)}var yn,xn,wn,ht=Ae.styles,Bc=Ae.shims,Uc=(yn={},te(yn,q,Object.values(Jt[q])),te(yn,Z,Object.values(Jt[Z])),yn),ha=null,$o={},zo={},Bo={},Uo={},Ho={},Hc=(xn={},te(xn,q,Object.keys(Xt[q])),te(xn,Z,Object.keys(Xt[Z])),xn);function Yc(e){return~Ac.indexOf(e)}function Wc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Yc(a)?a:null}var Yo=function(){var t=function(i){return cr(ht,function(o,s,l){return o[l]=cr(s,i,{}),o},{})};$o=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),zo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ho=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ht||T.autoFetchSvg,r=cr(Bc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Bo=r.names,Uo=r.unicodes,ha=Gn(T.styleDefault,{family:T.familyDefault})};Cc(function(e){ha=Gn(e.styleDefault,{family:T.familyDefault})});Yo();function ga(e,t){return($o[e]||{})[t]}function Kc(e,t){return(zo[e]||{})[t]}function st(e,t){return(Ho[e]||{})[t]}function Wo(e){return Bo[e]||{prefix:null,iconName:null}}function qc(e){var t=Uo[e],n=ga("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return ha}var va=function(){return{prefix:null,iconName:null,rest:[]}};function Gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?q:n,a=Xt[r][e],i=Vt[r][e]||Vt[r][a],o=e in Ae.styles?e:null;return i||o||null}var di=(wn={},te(wn,q,Object.keys(Jt[q])),te(wn,Z,Object.keys(Jt[Z])),wn);function Zn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,q,"".concat(T.cssPrefix,"-").concat(q)),te(t,Z,"".concat(T.cssPrefix,"-").concat(Z)),t),o=null,s=q;(e.includes(i[q])||e.some(function(c){return di[q].includes(c)}))&&(s=q),(e.includes(i[Z])||e.some(function(c){return di[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=Wc(T.cssPrefix,d);if(ht[d]?(d=Uc[s].includes(d)?bc[s][d]:d,o=d,c.prefix=d):Hc[s].indexOf(d)>-1?(o=d,c.prefix=Gn(d,{family:s})):m?c.iconName=m:d!==T.replacementClass&&d!==i[q]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Wo(c.iconName):{},k=st(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!ht.far&&ht.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},va());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(ht.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ge()||"fas"),l}var Xc=function(){function e(){oc(this,e),this.definitions={}}return sc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Tr(s,o[s]);var l=Jt[q][s];l&&Tr(l,o[s]),Yo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),mi=[],gt={},kt={},Vc=Object.keys(kt);function Jc(e,t){var n=t.mixoutsTo;return mi=e,gt={},Object.keys(kt).forEach(function(r){Vc.indexOf(r)===-1&&delete kt[r]}),mi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Fn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(i[o])})}r.provides&&r.provides(kt)}),n}function Ir(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kt[e]?kt[e].apply(null,t):void 0}function Nr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(t)return t=st(n,t)||t,ci(Ko.definitions,n,t)||ci(Ae.styles,n,t)}var Ko=new Xc,Gc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,ut("noAuto")},Zc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(ut("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Lc(function(){eu({autoReplaceSvgRoot:n}),ut("watch",t)})}},Qc={icon:function(t){if(t===null)return null;if(Fn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Gn(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(yc))){var a=Zn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:st(i,t)||t}}}},he={noAuto:Gc,config:T,dom:Zc,parse:Qc,library:Ko,findIconDefinition:Nr,toHtml:tn},eu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ae.styles).length>0||T.autoFetchSvg)&&He&&T.autoReplaceSvg&&he.dom.i2svg({node:r})};function Qn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return tn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(He){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function tu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(pa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Jn(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function nu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ba(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,R=r.found?r:n,M=R.width,B=R.height,w=a==="fak",C=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(B)})},D=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/B*16*.0625,"em")}:{};k&&(E.attributes[ct]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(d||Zt())},children:[l]}),delete E.attributes.title);var U=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},D),m.styles)}),ce=r.found&&n.found?Be("generateAbstractMask",U)||{children:[],attributes:{}}:Be("generateAbstractIcon",U)||{children:[],attributes:{}},ne=ce.children,be=ce.attributes;return U.children=ne,U.attributes=be,s?nu(U):tu(U)}function pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ct]="");var d=O({},o.styles);pa(a)&&(d.transform=Mc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Jn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function ru(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Jn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ur=Ae.styles;function Mr(e){var t=e[0],n=e[1],r=e.slice(4),a=la(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var au={found:!1,width:512,height:512};function iu(e,t){!No&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Fr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Wo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ur[t]&&ur[t][e]){var o=ur[t][e];return r(Mr(o))}iu(e,t),r(O(O({},au),{},{icon:T.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var hi=function(){},Rr=T.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:hi,measure:hi},jt='FA "6.2.1"',ou=function(t){return Rr.mark("".concat(jt," ").concat(t," begins")),function(){return qo(t)}},qo=function(t){Rr.mark("".concat(jt," ").concat(t," ends")),Rr.measure("".concat(jt," ").concat(t),"".concat(jt," ").concat(t," begins"),"".concat(jt," ").concat(t," ends"))},ya={begin:ou,end:qo},Cn=function(){};function gi(e){var t=e.getAttribute?e.getAttribute(ct):null;return typeof t=="string"}function su(e){var t=e.getAttribute?e.getAttribute(ca):null,n=e.getAttribute?e.getAttribute(ua):null;return t&&n}function lu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function fu(){if(T.autoReplaceSvg===!0)return Sn.replace;var e=Sn[T.autoReplaceSvg];return e||Sn.replace}function cu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function uu(e){return X.createElement(e)}function Xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?cu:uu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Xo(o,{ceFn:r}))}),a}function du(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Xo(a),n)}),n.getAttribute(ct)===null&&T.keepOriginalSource){var r=X.createComment(du(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ma(n).indexOf(T.replacementClass))return Sn.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return tn(s)}).join(`
`);n.setAttribute(ct,""),n.innerHTML=o}};function vi(e){e()}function Vo(e,t){var n=typeof t=="function"?t:Cn;if(e.length===0)n();else{var r=vi;T.mutateApproach===gc&&(r=Je.requestAnimationFrame||vi),r(function(){var a=fu(),i=ya.begin("mutate");e.map(a),i(),n()})}}var xa=!1;function Jo(){xa=!0}function jr(){xa=!1}var jn=null;function bi(e){if(si&&T.observeMutations){var t=e.treeCallback,n=t===void 0?Cn:t,r=e.nodeCallback,a=r===void 0?Cn:r,i=e.pseudoElementsCallback,o=i===void 0?Cn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;jn=new si(function(c){if(!xa){var d=Ge();It(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!gi(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&gi(m.target)&&~kc.indexOf(m.attributeName))if(m.attributeName==="class"&&su(m.target)){var v=Zn(ma(m.target)),k=v.prefix,R=v.iconName;m.target.setAttribute(ca,k||d),R&&m.target.setAttribute(ua,R)}else lu(m.target)&&a(m.target)})}}),He&&jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mu(){jn&&jn.disconnect()}function pu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function hu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Zn(ma(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Kc(a.prefix,e.innerText)||ga(a.prefix,Sr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function gu(e){var t=It(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Zt()):(t["aria-hidden"]="true",t.focusable="false")),t}function vu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hu(e),r=n.iconName,a=n.prefix,i=n.rest,o=gu(e),s=Ir("parseNodeAttributes",{},e),l=t.styleParser?pu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var bu=Ae.styles;function Go(e){var t=T.autoReplaceSvg==="nest"?yi(e,{styleParser:!1}):yi(e);return~t.extra.classes.indexOf(Mo)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var Ze=new Set;da.map(function(e){Ze.add("fa-".concat(e))});Object.keys(Xt[q]).map(Ze.add.bind(Ze));Object.keys(Xt[Z]).map(Ze.add.bind(Ze));Ze=Qt(Ze);function xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(li,"-").concat(m))},a=function(m){return n.remove("".concat(li,"-").concat(m))},i=T.autoFetchSvg?Ze:da.map(function(d){return"fa-".concat(d)}).concat(Object.keys(bu));i.includes("fa")||i.push("fa");var o=[".".concat(Mo,":not([").concat(ct,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=It(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ya.begin("onTree"),c=s.reduce(function(d,m){try{var v=Go(m);v&&d.push(v)}catch(k){No||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Vo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function yu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Go(e).then(function(n){n&&Vo([n],t)})}function xu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Nr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Nr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var wu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,R=k===void 0?null:k,M=n.classes,B=M===void 0?[]:M,w=n.attributes,C=w===void 0?{}:w,E=n.styles,D=E===void 0?{}:E;if(t){var U=t.prefix,ce=t.iconName,ne=t.icon;return Qn(O({type:"icon"},t),function(){return ut("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(v?C["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(R||Zt()):(C["aria-hidden"]="true",C.focusable="false")),ba({icons:{main:Mr(ne),mask:l?Mr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:ce,transform:O(O({},Fe),a),symbol:o,title:v,maskId:d,titleId:R,extra:{attributes:C,styles:D,classes:B}})})}},_u={mixout:function(){return{icon:xu(wu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xi,n.nodeCallback=yu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return xi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,R){Promise.all([Fr(a,s),d.iconName?Fr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var B=la(M,2),w=B[0],C=B[1];k([n,ba({icons:{main:w,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Jn(s);l.length>0&&(a.style=l);var c;return pa(o)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},ku={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Qn({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(Qt(i)).join(" ")},children:o}]})}}}},Au={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Qn({type:"counter",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),ru({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(Qt(s))}})})}}}},Ou={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return Qn({type:"text",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),pi({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(T.cssPrefix,"-layers-text")].concat(Qt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(So){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Eu=new RegExp('"',"ug"),wi=[1105920,1112319];function Pu(e){var t=e.replace(Eu,""),n=zc(t,0),r=n>=wi[0]&&n<=wi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Sr(a?t[0]:t),isSecondary:r||a}}function _i(e,t){var n="".concat(hc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=It(e.children),o=i.filter(function(ne){return ne.getAttribute(Cr)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(xc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:q,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Vt[v][l[2].toLowerCase()]:wc[v][c],R=Pu(m),M=R.value,B=R.isSecondary,w=l[0].startsWith("FontAwesome"),C=ga(k,M),E=C;if(w){var D=qc(M);D.iconName&&D.prefix&&(C=D.iconName,k=D.prefix)}if(C&&!B&&(!o||o.getAttribute(ca)!==k||o.getAttribute(ua)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var U=vu(),ce=U.extra;ce.attributes[Cr]=t,Fr(C,k).then(function(ne){var be=ba(O(O({},U),{},{icons:{main:ne,mask:va()},prefix:k,iconName:E,extra:ce,watchable:!0})),ge=X.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Re){return tn(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Cu(e){return Promise.all([_i(e,"::before"),_i(e,"::after")])}function Su(e){return e.parentNode!==document.head&&!~vc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ki(e){if(He)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(Su).map(Cu),a=ya.begin("searchPseudoElements");Jo(),Promise.all(r).then(function(){a(),jr(),t()}).catch(function(){a(),jr(),n()})})}var Tu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ki,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&ki(a)}}},Ai=!1,Iu={mixout:function(){return{dom:{unwatch:function(){Jo(),Ai=!0}}}},hooks:function(){return{bootstrap:function(){bi(Ir("mutationObserverCallbacks",{}))},noAuto:function(){mu()},watch:function(n){var r=n.observeMutationsRoot;Ai?jr():bi(Ir("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Oi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Nu={mixout:function(){return{parse:{transform:function(n){return Oi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Oi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},dr={x:0,y:0,width:"100%",height:"100%"};function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Mu(e){return e.tag==="g"?e.children:[e]}var Fu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Zn(a.split(" ").map(function(o){return o.trim()})):va();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,k=Nc({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:O(O({},dr),{},{fill:"white"})},M=d.children?{children:d.children.map(Ei)}:{},B={tag:"g",attributes:O({},k.inner),children:[Ei(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},M))]},w={tag:"g",attributes:O({},k.outer),children:[B]},C="mask-".concat(s||Zt()),E="clip-".concat(s||Zt()),D={tag:"mask",attributes:O(O({},dr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,w]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:Mu(v)},D]};return r.push(U,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(C,")")},dr)}),{children:r,attributes:a}}}},Ru={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ju={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Lu=[Rc,_u,ku,Au,Ou,Tu,Iu,Nu,Fu,Ru,ju];Jc(Lu,{mixoutsTo:he});he.noAuto;var Zo=he.config;he.library;he.dom;var Ln=he.parse;he.findIconDefinition;he.toHtml;var Du=he.icon;he.layer;var $u=he.text;he.counter;function Pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pi(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Bu(e,t){if(e==null)return{};var n=zu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Lr(e){return Uu(e)||Hu(e)||Yu(e)||Wu()}function Uu(e){if(Array.isArray(e))return Dr(e)}function Hu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yu(e,t){if(e){if(typeof e=="string")return Dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dr(e,t)}}function Dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Wu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qo={exports:{}};(function(e){(function(t){var n=function(w,C,E){if(!c(C)||m(C)||v(C)||k(C)||l(C))return C;var D,U=0,ce=0;if(d(C))for(D=[],ce=C.length;U<ce;U++)D.push(n(w,C[U],E));else{D={};for(var ne in C)Object.prototype.hasOwnProperty.call(C,ne)&&(D[w(ne,E)]=n(w,C[ne],E))}return D},r=function(w,C){C=C||{};var E=C.separator||"_",D=C.split||/(?=[A-Z])/;return w.split(D).join(E)},a=function(w){return R(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(C,E){return E?E.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var C=a(w);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(w,C){return r(w,C).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},c=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},v=function(w){return s.call(w)=="[object RegExp]"},k=function(w){return s.call(w)=="[object Boolean]"},R=function(w){return w=w-0,w===w},M=function(w,C){var E=C&&"process"in C?C.process:C;return typeof E!="function"?w:function(D,U){return E(D,w,U)}},B={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,C){return n(M(a,C),w)},decamelizeKeys:function(w,C){return n(M(o,C),w,C)},pascalizeKeys:function(w,C){return n(M(i,C),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=B:t.humps=B})(Ku)})(Qo);var qu=Qo.exports,Xu=["class","style"];function Vu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=qu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ju(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return wa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Ju(d);break;case"style":l.style=Vu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Bu(n,Xu);return ko(e.tag,_e(_e(_e({},t),{},{class:a.class,style:_e(_e({},a.style),o)},a.attrs),s),r)}var es=!1;try{es=!0}catch{}function Gu(){if(!es&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Zu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ci(e){if(e&&Dn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ln.icon)return Ln.icon(e);if(e===null)return null;if(Dn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}ra({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Ci(t.icon)}),i=ve(function(){return Bt("classes",Zu(t))}),o=ve(function(){return Bt("transform",typeof t.transform=="string"?Ln.transform(t.transform):t.transform)}),s=ve(function(){return Bt("mask",Ci(t.mask))}),l=ve(function(){return Du(a.value,_e(_e(_e(_e({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});An(l,function(d){if(!d)return Gu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ve(function(){return l.value?wa(l.value.abstract[0],{},r):null});return function(){return c.value}}});ra({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Zo.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Lr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ko("div",{class:i.value},r.default?r.default():[])}}});ra({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Zo.familyPrefix,i=ve(function(){return Bt("classes",[].concat(Lr(t.counter?["".concat(a,"-layers-counter")]:[]),Lr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Bt("transform",typeof t.transform=="string"?Ln.transform(t.transform):t.transform)}),s=ve(function(){var c=$u(t.value.toString(),_e(_e({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return wa(s.value,{},r)});return function(){return l.value}}});Ef(ic).mount("#app");

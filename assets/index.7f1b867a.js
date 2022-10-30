(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();window.observer=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.setAttribute("data-in-view","true"),window.observer.unobserve(t.target))})});window.addEventListener("DOMContentLoaded",()=>{const e=[];e.push(...document.querySelectorAll("[data-animate]")),document.querySelectorAll("[data-animate-container]").forEach(t=>{console.log(t,t.getAttribute("data-animate-delay"));for(let n=0;n<t.children.length;n++){const l=t.children[n],s=(l.getAttribute("data-animate-delay")?parseInt(l.getAttribute("data-animate-delay")):0)+(t.getAttribute("data-animate-delay")?parseInt(t.getAttribute("data-animate-delay")):0);l.style.transitionDelay=`${400*(n+1)+s}ms`}e.push(...t.children)}),e.forEach(t=>{window.observer.observe(t)})});function _(){}function y1(e,t){for(const n in t)e[n]=t[n];return e}function g1(e){return e()}function o1(){return Object.create(null)}function z(e){e.forEach(g1)}function h1(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Y;function c1(e,t){return Y||(Y=document.createElement("a")),Y.href=t,e===Y.href}function b1(e){return Object.keys(e).length===0}function $1(e,t,n,l){if(e){const s=_1(e,t,n,l);return e[0](s)}}function _1(e,t,n,l){return e[1]&&l?y1(n.ctx.slice(),e[1](l(t))):n.ctx}function L1(e,t,n,l){if(e[2]&&l){const s=e[2](l(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const c=[],o=Math.max(t.dirty.length,s.length);for(let u=0;u<o;u+=1)c[u]=t.dirty[u]|s[u];return c}return t.dirty|s}return t.dirty}function x1(e,t,n,l,s,c){if(s){const o=_1(t,n,l,c);e.p(o,s)}}function j1(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}function f(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode.removeChild(e)}function p1(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function k(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function l1(e){return document.createTextNode(e)}function b(){return l1(" ")}function k1(){return l1("")}function r(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M1(e){return Array.from(e.childNodes)}function H1(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function S1(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function K(e,t,n){e.classList[n?"add":"remove"](t)}function a1(e,t){return new e(t)}let O;function P(e){O=e}function A1(){if(!O)throw new Error("Function called outside component initialization");return O}function E1(e){A1().$$.on_mount.push(e)}const N=[],D=[],W=[],u1=[],T1=Promise.resolve();let e1=!1;function B1(){e1||(e1=!0,T1.then(v1))}function n1(e){W.push(e)}const t1=new Set;let G=0;function v1(){const e=O;do{for(;G<N.length;){const t=N[G];G++,P(t),I1(t.$$)}for(P(null),N.length=0,G=0;D.length;)D.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];t1.has(n)||(t1.add(n),n())}W.length=0}while(N.length);for(;u1.length;)u1.pop()();e1=!1,t1.clear(),P(e)}function I1(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(n1)}}const X=new Set;let Z;function s1(){Z={r:0,c:[],p:Z}}function r1(){Z.r||z(Z.c),Z=Z.p}function $(e,t){e&&e.i&&(X.delete(e),e.i(t))}function x(e,t,n,l){if(e&&e.o){if(X.has(e))return;X.add(e),Z.c.push(()=>{X.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function B(e){e&&e.c()}function E(e,t,n,l){const{fragment:s,after_update:c}=e.$$;s&&s.m(t,n),l||n1(()=>{const o=e.$$.on_mount.map(g1).filter(h1);e.$$.on_destroy?e.$$.on_destroy.push(...o):z(o),e.$$.on_mount=[]}),c.forEach(n1)}function T(e,t){const n=e.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function V1(e,t){e.$$.dirty[0]===-1&&(N.push(e),B1(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,n,l,s,c,o,u=[-1]){const i=O;P(e);const d=e.$$={fragment:null,ctx:[],props:c,update:_,not_equal:s,bound:o1(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:o1(),dirty:u,skip_bound:!1,root:t.target||i.$$.root};o&&o(d.root);let a=!1;if(d.ctx=n?n(e,t.props||{},(C,m,...w)=>{const p=w.length?w[0]:m;return d.ctx&&s(d.ctx[C],d.ctx[C]=p)&&(!d.skip_bound&&d.bound[C]&&d.bound[C](p),a&&V1(e,C)),m}):[],d.update(),a=!0,z(d.before_update),d.fragment=l?l(d.ctx):!1,t.target){if(t.hydrate){const C=M1(t.target);d.fragment&&d.fragment.l(C),C.forEach(L)}else d.fragment&&d.fragment.c();t.intro&&$(e.$$.fragment),E(e,t.target,t.anchor,t.customElement),v1()}P(i)}class S{$destroy(){T(this,1),this.$destroy=_}$on(t,n){if(!h1(n))return _;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!b1(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z1(e){let t;return{c(){t=g("div"),r(t,"class","svelte-d2b10p"),K(t,"bottom",e[0]),K(t,"right",e[1])},m(n,l){j(n,t,l)},p(n,[l]){l&1&&K(t,"bottom",n[0]),l&2&&K(t,"right",n[1])},i:_,o:_,d(n){n&&L(t)}}}function q1(e,t,n){let{bottom:l=!1}=t,{right:s=!1}=t;return e.$$set=c=>{"bottom"in c&&n(0,l=c.bottom),"right"in c&&n(1,s=c.right)},[l,s]}class N1 extends S{constructor(t){super(),H(this,t,q1,Z1,M,{bottom:0,right:1})}}function P1(e){let t,n;return{c(){t=k("svg"),n=k("path"),r(n,"d","M9 1.6875C7.55373 1.6875 6.13993 2.11637 4.9374 2.91988C3.73486 3.72339 2.7976 4.86544 2.24413 6.20163C1.69067 7.53781 1.54586 9.00811 1.82801 10.4266C2.11017 11.8451 2.80661 13.148 3.82928 14.1707C4.85196 15.1934 6.15492 15.8898 7.57341 16.172C8.99189 16.4541 10.4622 16.3093 11.7984 15.7559C13.1346 15.2024 14.2766 14.2651 15.0801 13.0626C15.8836 11.8601 16.3125 10.4463 16.3125 9C16.3088 7.06175 15.5372 5.20394 14.1666 3.83339C12.7961 2.46283 10.9383 1.69122 9 1.6875V1.6875ZM9.84375 12.375H9.5625V12.9375C9.5625 13.0867 9.50324 13.2298 9.39775 13.3352C9.29226 13.4407 9.14919 13.5 9 13.5C8.85082 13.5 8.70774 13.4407 8.60226 13.3352C8.49677 13.2298 8.4375 13.0867 8.4375 12.9375V12.375H7.3125C7.16332 12.375 7.02024 12.3157 6.91476 12.2102C6.80927 12.1048 6.75 11.9617 6.75 11.8125C6.75 11.6633 6.80927 11.5202 6.91476 11.4148C7.02024 11.3093 7.16332 11.25 7.3125 11.25H9.84375C10.0675 11.25 10.2821 11.1611 10.4404 11.0029C10.5986 10.8446 10.6875 10.63 10.6875 10.4062C10.6875 10.1825 10.5986 9.96786 10.4404 9.80963C10.2821 9.6514 10.0675 9.5625 9.84375 9.5625H8.15625C7.63411 9.5625 7.13335 9.35508 6.76414 8.98587C6.39492 8.61665 6.1875 8.11589 6.1875 7.59375C6.1875 7.07161 6.39492 6.57085 6.76414 6.20163C7.13335 5.83242 7.63411 5.625 8.15625 5.625H8.4375V5.0625C8.4375 4.91332 8.49677 4.77024 8.60226 4.66475C8.70774 4.55926 8.85082 4.5 9 4.5C9.14919 4.5 9.29226 4.55926 9.39775 4.66475C9.50324 4.77024 9.5625 4.91332 9.5625 5.0625V5.625H10.6875C10.8367 5.625 10.9798 5.68426 11.0853 5.78975C11.1907 5.89524 11.25 6.03832 11.25 6.1875C11.25 6.33668 11.1907 6.47976 11.0853 6.58525C10.9798 6.69074 10.8367 6.75 10.6875 6.75H8.15625C7.93248 6.75 7.71787 6.83889 7.55963 6.99713C7.4014 7.15536 7.3125 7.36997 7.3125 7.59375C7.3125 7.81753 7.4014 8.03214 7.55963 8.19037C7.71787 8.34861 7.93248 8.4375 8.15625 8.4375H9.84375C10.3659 8.4375 10.8667 8.64492 11.2359 9.01413C11.6051 9.38335 11.8125 9.88411 11.8125 10.4062C11.8125 10.9284 11.6051 11.4292 11.2359 11.7984C10.8667 12.1676 10.3659 12.375 9.84375 12.375V12.375Z"),r(n,"fill","white"),r(t,"width","18"),r(t,"height","18"),r(t,"viewBox","0 0 18 18"),r(t,"fill","none"),r(t,"xmlns","http://www.w3.org/2000/svg")},m(l,s){j(l,t,s),f(t,n)},p:_,i:_,o:_,d(l){l&&L(t)}}}class D1 extends S{constructor(t){super(),H(this,t,null,P1,M,{})}}function O1(e){let t,n;return{c(){t=k("svg"),n=k("path"),r(n,"d","M16.5938 6.46875C16.5938 8.62031 15.3492 10.8281 12.8953 13.0359C11.781 14.0377 10.5678 14.9235 9.27422 15.6797C9.19019 15.7258 9.09587 15.75 9 15.75C8.90413 15.75 8.80981 15.7258 8.72578 15.6797C8.42344 15.5109 1.40625 11.5242 1.40625 6.46875C1.40625 5.58331 1.68485 4.72031 2.20257 4.002C2.7203 3.2837 3.45091 2.74649 4.29091 2.46649C5.13092 2.18649 6.03773 2.17789 6.88289 2.4419C7.72806 2.70591 8.46873 3.22915 9 3.9375C9.53127 3.22915 10.2719 2.70591 11.1171 2.4419C11.9623 2.17789 12.8691 2.18649 13.7091 2.46649C14.5491 2.74649 15.2797 3.2837 15.7974 4.002C16.3152 4.72031 16.5938 5.58331 16.5938 6.46875Z"),r(n,"fill","white"),r(t,"width","18"),r(t,"height","18"),r(t,"viewBox","0 0 18 18"),r(t,"fill","none"),r(t,"xmlns","http://www.w3.org/2000/svg")},m(l,s){j(l,t,s),f(t,n)},p:_,i:_,o:_,d(l){l&&L(t)}}}class z1 extends S{constructor(t){super(),H(this,t,null,O1,M,{})}}function F1(e){let t,n,l,s,c,o,u,i,d,a,C,m,w,p,h,y,v,A,V,q,i1,F,R;return h=new D1({}),q=new z1({}),{c(){t=g("section"),n=g("div"),l=g("div"),s=g("h2"),s.textContent="Hello. I'm",c=b(),o=g("h1"),o.textContent="Lynith",u=b(),i=g("p"),i.innerHTML="A full-stack developer, web designer <br/>and Linux enthusiast",d=b(),a=g("div"),a.innerHTML='<span class="svelte-7js8vb"></span>',C=b(),m=g("div"),w=g("div"),p=g("a"),B(h.$$.fragment),y=b(),v=g("span"),v.textContent="Commission",A=b(),V=g("a"),B(q.$$.fragment),i1=b(),F=g("span"),F.textContent="Donate",r(s,"class","svelte-7js8vb"),r(o,"class","svelte-7js8vb"),r(i,"class","svelte-7js8vb"),r(a,"class","circle fade top svelte-7js8vb"),r(a,"data-animate",""),r(a,"data-animate-queue","1"),r(a,"data-animate-delay","0"),r(v,"class","svelte-7js8vb"),r(p,"target","_blank"),r(p,"href","https://ko-fi.com/lynith/commissions"),r(p,"class","svelte-7js8vb"),r(F,"class","svelte-7js8vb"),r(V,"target","_blank"),r(V,"href","https://ko-fi.com/lynith"),r(V,"class","svelte-7js8vb"),r(w,"class","buttons svelte-7js8vb"),r(m,"data-animate",""),r(m,"data-animate-delay","500"),r(m,"class","fade bottom svelte-7js8vb"),r(l,"data-animate-container",""),r(l,"class","fade left svelte-7js8vb"),r(n,"class","svelte-7js8vb"),r(t,"id","home"),r(t,"class","svelte-7js8vb")},m(I,w1){j(I,t,w1),f(t,n),f(n,l),f(l,s),f(l,c),f(l,o),f(l,u),f(l,i),f(l,d),f(l,a),f(l,C),f(l,m),f(m,w),f(w,p),E(h,p,null),f(p,y),f(p,v),f(w,A),f(w,V),E(q,V,null),f(V,i1),f(V,F),R=!0},p:_,i(I){R||($(h.$$.fragment,I),$(q.$$.fragment,I),R=!0)},o(I){x(h.$$.fragment,I),x(q.$$.fragment,I),R=!1},d(I){I&&L(t),T(h),T(q)}}}class R1 extends S{constructor(t){super(),H(this,t,null,F1,M,{})}}function Y1(e){let t,n,l,s,c,o,u,i,d,a,C;return{c(){t=g("nav"),n=g("span"),n.textContent="Lynith",l=b(),s=g("ul"),c=g("li"),c.innerHTML='<a class="active svelte-2dgwdi" href="#home">Home</a>',o=b(),u=g("li"),u.innerHTML='<a href="#projects" class="svelte-2dgwdi">Projects</a>',i=b(),d=g("li"),d.innerHTML='<a data-no-underline="true" target="_blank" href="https://ko-fi.com/lynith/commissions" class="svelte-2dgwdi">Commissions</a>',a=b(),C=g("span"),r(n,"class","svelte-2dgwdi"),r(c,"class","svelte-2dgwdi"),r(u,"class","svelte-2dgwdi"),r(d,"class","svelte-2dgwdi"),r(C,"class","underline svelte-2dgwdi"),r(s,"class","svelte-2dgwdi"),r(t,"class","fade top svelte-2dgwdi"),r(t,"data-animate","")},m(m,w){j(m,t,w),f(t,n),f(t,l),f(t,s),f(s,c),f(s,o),f(s,u),f(s,i),f(s,d),f(s,a),f(s,C),e[3](C),e[4](s),e[5](t)},p:_,i:_,o:_,d(m){m&&L(t),e[3](null),e[4](null),e[5](null)}}}function K1(e,t,n){let l,s,c,o,u=null;const i=(h=!1)=>{const y=()=>{n(0,l.style.left=`${c.getBoundingClientRect().left+c.getBoundingClientRect().width/4}px`,l),n(0,l.style.width=`${c.getBoundingClientRect().width/2}px`,l)};if(h){y();return}u&&clearTimeout(u),u=setTimeout(y,200)},d=h=>{c.classList.remove("active"),h.classList.add("active"),c=h,window.history.replaceState(null,null,`${h.href}`),i()};let a=null;const C=()=>{o.classList[window.scrollY>100?"add":"remove"]("floating"),document.querySelectorAll("section").forEach(h=>{h.getBoundingClientRect().top-window.scrollY<=0&&(a&&clearTimeout(a),a=setTimeout(()=>{switch(h.id){case"projects":d(o.querySelectorAll("a")[1]);break;default:d(o.querySelectorAll("a")[0]);break}},150))})};E1(()=>{c=s.querySelector("a.active"),i(!0),n(0,l.style.transition="0.3s",l),s.querySelectorAll("a").forEach(h=>{h.getAttribute("data-no-underline")!="true"&&h.addEventListener("click",y=>d(y.target))}),window.addEventListener("resize",()=>i()),window.addEventListener("scroll",()=>C())});function m(h){D[h?"unshift":"push"](()=>{l=h,n(0,l)})}function w(h){D[h?"unshift":"push"](()=>{s=h,n(1,s)})}function p(h){D[h?"unshift":"push"](()=>{o=h,n(2,o)})}return[l,s,o,m,w,p]}class G1 extends S{constructor(t){super(),H(this,t,K1,Y1,M,{})}}function J1(e){let t,n;return{c(){t=k("svg"),n=k("path"),r(n,"d","M4.99989 9.00069C4.73722 9.00054 4.4771 9.05217 4.23439 9.15262C3.99169 9.25307 3.77116 9.40038 3.58543 9.58611C3.39969 9.77185 3.25238 9.99237 3.15193 10.2351C3.05148 10.4778 2.99985 10.7379 3 11.0006C3 13.6665 6.99978 13.6665 6.99978 11.0006V9.00069M4.99989 9.00069H6.99978M4.99989 9.00069C4.73722 9.00084 4.4771 8.94883 4.23439 8.84838C3.99169 8.74793 3.77116 8.60062 3.58543 8.41489C3.39969 8.22915 3.25238 8.00863 3.15193 7.76592C3.05148 7.52322 2.99985 7.26309 3 7.00042C2.99985 6.73775 3.05148 6.47725 3.15193 6.23455C3.25238 5.99184 3.39969 5.77132 3.58543 5.58558C3.77116 5.39985 3.99169 5.25254 4.23439 5.15209C4.4771 5.05164 4.73722 5.00001 4.99989 5.00016M6.99978 9.00069L7.00016 5.00053M7.00016 1.00038V5.00053M7.00016 1.00038H9.00005C11.6659 1.00038 11.6659 5.00053 9.00005 5.00053H7.00016M7.00016 1.00038L4.99989 1C4.73722 0.999853 4.4771 1.05148 4.23439 1.15193C3.99169 1.25238 3.77116 1.39969 3.58543 1.58543C3.39969 1.77116 3.25238 1.99169 3.15193 2.23439C3.05148 2.4771 2.99985 2.7376 3 3.00027C2.99985 3.26294 3.05148 3.52306 3.15193 3.76577C3.25238 4.00847 3.39969 4.229 3.58543 4.41473C3.77116 4.60047 3.99169 4.74777 4.23439 4.84823C4.4771 4.94868 4.73722 5.0003 4.99989 5.00016M7.00016 5.00053L4.99989 5.00016M7.00016 7.00042C7.00016 4.33453 11.0003 4.33453 11.0003 7.00042C11.0003 9.66632 7.00016 9.66632 7.00016 7.00042Z"),r(n,"stroke","black"),r(n,"stroke-width","0.7"),r(t,"width","14"),r(t,"height","14"),r(t,"viewBox","0 0 14 14"),r(t,"fill","none"),r(t,"xmlns","http://www.w3.org/2000/svg")},m(l,s){j(l,t,s),f(t,n)},p:_,i:_,o:_,d(l){l&&L(t)}}}class J extends S{constructor(t){super(),H(this,t,null,J1,M,{})}}function Q1(e){let t,n;return{c(){t=k("svg"),n=k("path"),r(n,"d","M12.0632 1.85012C11.4468 0.954563 10.5112 0.328677 9.44821 0.100749C8.3852 -0.127178 7.27527 0.060118 6.34591 0.624248L3.08041 2.70018C2.63909 2.97663 2.26089 3.34286 1.97039 3.77507C1.6799 4.20727 1.48361 4.69577 1.39429 5.20881C1.23558 6.071 1.37296 6.96152 1.7841 7.73581C1.50318 8.15807 1.31445 8.63481 1.23023 9.13493C1.13779 9.65647 1.15003 10.1912 1.26623 10.7079C1.38242 11.2247 1.60025 11.7132 1.90704 12.1449C2.52492 13.0384 3.4595 13.6634 4.52121 13.8931C5.58293 14.1229 6.69229 13.9402 7.62429 13.3822L10.892 11.3041C11.3317 11.0265 11.7084 10.6599 11.9977 10.2278C12.287 9.79569 12.4825 9.30774 12.5715 8.79543C12.7284 7.93597 12.5902 7.04873 12.1795 6.27762C12.604 5.61221 12.8197 4.83505 12.799 4.04606C12.7782 3.25707 12.522 2.49232 12.0632 1.85012ZM6.01998 12.3252C5.50702 12.4586 4.96546 12.4311 4.46862 12.2465C3.97179 12.0619 3.54368 11.7291 3.24229 11.2931C2.86385 10.769 2.72516 10.1219 2.83454 9.47925L2.89841 9.1695L2.95748 8.97787L3.13291 9.09425C3.51715 9.38195 3.94918 9.59952 4.4091 9.73694L4.52766 9.77806L4.5141 9.89443C4.50273 10.0563 4.55041 10.2383 4.64404 10.3774C4.83566 10.6531 5.16816 10.7852 5.48929 10.6986C5.55973 10.6758 5.62841 10.6531 5.68748 10.6163L8.9416 8.54037C9.10566 8.43537 9.21066 8.27831 9.25135 8.0915C9.28538 7.90031 9.24364 7.70338 9.13498 7.54244C9.04179 7.41156 8.91118 7.31193 8.76033 7.25665C8.60947 7.20136 8.44542 7.19301 8.28973 7.23269C8.21929 7.25762 8.14404 7.28519 8.08454 7.3215L6.85385 8.10287C6.29219 8.43682 5.62481 8.5454 4.98626 8.40673C4.3477 8.26806 3.78547 7.89245 3.41291 7.35562C3.22677 7.09604 3.09455 6.80178 3.02407 6.49024C2.95358 6.17869 2.94626 5.85617 3.00254 5.54175C3.05905 5.2304 3.18037 4.93441 3.35861 4.67296C3.53686 4.41151 3.76806 4.19043 4.03723 4.02406L7.28435 1.94812C7.49193 1.82117 7.71579 1.723 7.94979 1.65631C8.46232 1.52335 9.00329 1.55057 9.49989 1.73431C9.99649 1.91804 10.4249 2.24947 10.7275 2.684C10.9433 2.98777 11.0856 3.33748 11.1433 3.7056C11.201 4.07372 11.1725 4.45021 11.06 4.80544L11.0009 4.99925L10.8325 4.88287C10.4437 4.59868 10.0101 4.38146 9.54973 4.24019L9.43335 4.20606L9.44473 4.08968C9.45557 3.9166 9.40997 3.74466 9.31479 3.59968C9.22309 3.46714 9.09262 3.36622 8.94129 3.31076C8.78995 3.25531 8.62517 3.24803 8.46954 3.28993C8.4004 3.30927 8.33386 3.33688 8.27135 3.37218L5.01066 5.46606C4.8466 5.57544 4.7416 5.72812 4.70748 5.91931C4.67335 6.10612 4.71885 6.31131 4.82385 6.46181C5.01066 6.73744 5.35016 6.85381 5.66473 6.77156C5.73579 6.75342 5.80407 6.72575 5.86773 6.68931L7.11198 5.89612C7.31609 5.7631 7.53993 5.66315 7.77523 5.59994C8.28816 5.46543 8.83008 5.49236 9.32715 5.67704C9.82422 5.86173 10.2523 6.1952 10.5529 6.632C10.7389 6.89042 10.8718 7.18322 10.9437 7.49339C11.0157 7.80357 11.0253 8.12495 10.972 8.43887C10.9181 8.74938 10.7994 9.04503 10.6235 9.30654C10.4476 9.56805 10.2186 9.78954 9.95135 9.95656L6.69723 12.0277C6.48556 12.1556 6.25801 12.2552 6.02041 12.3239L6.01998 12.3252Z"),r(n,"fill","#2F2D2D"),r(t,"width","14"),r(t,"height","14"),r(t,"viewBox","0 0 14 14"),r(t,"fill","none"),r(t,"xmlns","http://www.w3.org/2000/svg")},m(l,s){j(l,t,s),f(t,n)},p:_,i:_,o:_,d(l){l&&L(t)}}}class Q extends S{constructor(t){super(),H(this,t,null,Q1,M,{})}}function U1(e){let t,n,l;return{c(){t=k("svg"),n=k("path"),l=k("path"),r(n,"d","M7.02362 3.79542L7.02897 4.50263H4.80099V10.9087H3.22477V4.50263H1V3.80949C1 3.42314 1.00855 3.10227 1.01925 3.09362C1.0278 3.08225 2.38106 3.07684 4.02411 3.07955L7.01507 3.0882L7.02362 3.79542Z"),r(n,"fill","#2F2D2D"),r(l,"d","M11.039 3.07089C11.4492 3.16862 11.822 3.38613 12.111 3.6964C12.2672 3.86522 12.5008 4.17527 12.5206 4.25156C12.5259 4.27429 11.7827 4.77859 11.3315 5.0605C11.3149 5.07186 11.2481 5.00152 11.1754 4.89114C10.9556 4.56702 10.7241 4.42633 10.3707 4.4009C9.85258 4.36681 9.51841 4.64061 9.52108 5.1C9.51836 5.21241 9.54316 5.32375 9.59326 5.42412C9.70768 5.66382 9.92208 5.80721 10.5845 6.09778C11.81 6.63022 12.3335 6.98247 12.6591 7.48136C13.0237 8.03923 13.1045 8.92988 12.8596 9.59488C12.5869 10.3135 11.9127 10.8037 10.9658 10.9644C10.6733 11.018 9.97716 11.0093 9.66223 10.9503C8.97464 10.8264 8.32288 10.4823 7.92187 10.0315C7.76308 9.85678 7.45671 9.39738 7.47649 9.36654C7.48505 9.35518 7.55455 9.31027 7.63262 9.26482L8.26781 8.89254L8.76078 8.60251L8.86397 8.75727C9.00886 8.97966 9.32325 9.2843 9.51306 9.38548C10.059 9.67875 10.808 9.63655 11.1786 9.30107C11.3288 9.17445 11.4128 8.97966 11.4015 8.7827C11.4015 8.58249 11.3764 8.49267 11.2732 8.34279C11.1395 8.15124 10.8695 7.98783 10.098 7.64964C9.21525 7.2633 8.83349 7.02684 8.48863 6.64645C8.27153 6.39608 8.11096 6.10082 8.01811 5.78124C7.95395 5.53612 7.93738 4.92144 7.98764 4.67632C8.16889 3.81111 8.81478 3.21103 9.7419 3.03355C10.0429 2.97457 10.7439 2.9973 11.039 3.07089Z"),r(l,"fill","#2F2D2D"),r(t,"width","14"),r(t,"height","14"),r(t,"viewBox","0 0 14 14"),r(t,"fill","none"),r(t,"xmlns","http://www.w3.org/2000/svg")},m(s,c){j(s,t,c),f(t,n),f(t,l)},p:_,i:_,o:_,d(s){s&&L(t)}}}class U extends S{constructor(t){super(),H(this,t,null,U1,M,{})}}function W1(e){let t,n,l;return{c(){t=k("svg"),n=k("rect"),l=k("path"),r(n,"width","12"),r(n,"height","12"),r(n,"rx","6"),r(n,"fill","white"),r(l,"d","M6 1.125C5.03582 1.125 4.09329 1.41091 3.2916 1.94659C2.48991 2.48226 1.86507 3.24363 1.49609 4.13442C1.12711 5.02521 1.03057 6.00541 1.21867 6.95107C1.40678 7.89672 1.87108 8.76536 2.55286 9.44715C3.23464 10.1289 4.10328 10.5932 5.04894 10.7813C5.99459 10.9694 6.97479 10.8729 7.86558 10.5039C8.75637 10.1349 9.51775 9.51009 10.0534 8.7084C10.5891 7.90671 10.875 6.96418 10.875 6C10.8738 4.70745 10.3597 3.4682 9.44578 2.55423C8.53181 1.64025 7.29255 1.12624 6 1.125ZM6 10.125C5.18415 10.125 4.38663 9.88307 3.70827 9.42981C3.02992 8.97655 2.50121 8.33231 2.189 7.57857C1.87679 6.82482 1.7951 5.99542 1.95426 5.19525C2.11343 4.39508 2.5063 3.66008 3.08319 3.08318C3.66008 2.50629 4.39508 2.11342 5.19525 1.95426C5.99543 1.7951 6.82483 1.87679 7.57857 2.189C8.33232 2.50121 8.97655 3.02992 9.42981 3.70827C9.88307 4.38663 10.125 5.18415 10.125 6C10.1238 7.09364 9.68877 8.14213 8.91545 8.91545C8.14213 9.68876 7.09364 10.1238 6 10.125ZM6.75 8.25C6.75 8.34946 6.71049 8.44484 6.64017 8.51517C6.56984 8.58549 6.47446 8.625 6.375 8.625H6C5.90055 8.625 5.80516 8.58549 5.73484 8.51517C5.66451 8.44484 5.625 8.34946 5.625 8.25V6C5.52555 6 5.43016 5.96049 5.35984 5.89016C5.28951 5.81984 5.25 5.72446 5.25 5.625C5.25 5.52554 5.28951 5.43016 5.35984 5.35984C5.43016 5.28951 5.52555 5.25 5.625 5.25H6C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V7.875C6.47446 7.875 6.56984 7.91451 6.64017 7.98483C6.71049 8.05516 6.75 8.15054 6.75 8.25ZM5.34375 3.9375C5.34375 3.82625 5.37674 3.71749 5.43855 3.62499C5.50036 3.53249 5.58821 3.46039 5.69099 3.41782C5.79378 3.37524 5.90688 3.3641 6.01599 3.38581C6.1251 3.40751 6.22533 3.46109 6.304 3.53975C6.38267 3.61842 6.43624 3.71865 6.45794 3.82776C6.47965 3.93688 6.46851 4.04998 6.42593 4.15276C6.38336 4.25554 6.31126 4.34339 6.21876 4.4052C6.12626 4.46701 6.0175 4.5 5.90625 4.5C5.75707 4.5 5.61399 4.44074 5.5085 4.33525C5.40302 4.22976 5.34375 4.08668 5.34375 3.9375Z"),r(l,"fill","black"),r(t,"width","12"),r(t,"height","12"),r(t,"viewBox","0 0 12 12"),r(t,"fill","none"),r(t,"xmlns","http://www.w3.org/2000/svg")},m(s,c){j(s,t,c),f(t,n),f(t,l)},p:_,i:_,o:_,d(s){s&&L(t)}}}class X1 extends S{constructor(t){super(),H(this,t,null,W1,M,{})}}function tt(e){let t,n,l,s,c,o,u,i,d,a,C,m,w,p;const h=e[4].default,y=$1(h,e,e[3],null);return w=new X1({}),{c(){t=g("div"),n=g("div"),l=g("h3"),s=l1(e[0]),c=b(),o=g("span"),y&&y.c(),u=b(),i=g("a"),d=g("img"),m=b(),B(w.$$.fragment),r(l,"class","svelte-1839e2l"),r(o,"class","svelte-1839e2l"),r(n,"class","svelte-1839e2l"),c1(d.src,a=e[1])||r(d,"src",a),r(d,"alt",C=`Screenshot of ${e[0]}`),r(d,"class","svelte-1839e2l"),r(i,"href",e[2]),r(i,"class","svelte-1839e2l"),r(t,"class","svelte-1839e2l")},m(v,A){j(v,t,A),f(t,n),f(n,l),f(l,s),f(n,c),f(n,o),y&&y.m(o,null),f(t,u),f(t,i),f(i,d),f(i,m),E(w,i,null),p=!0},p(v,[A]){(!p||A&1)&&H1(s,v[0]),y&&y.p&&(!p||A&8)&&x1(y,h,v,v[3],p?L1(h,v[3],A,null):j1(v[3]),null),(!p||A&2&&!c1(d.src,a=v[1]))&&r(d,"src",a),(!p||A&1&&C!==(C=`Screenshot of ${v[0]}`))&&r(d,"alt",C),(!p||A&4)&&r(i,"href",v[2])},i(v){p||($(y,v),$(w.$$.fragment,v),p=!0)},o(v){x(y,v),x(w.$$.fragment,v),p=!1},d(v){v&&L(t),y&&y.d(v),T(w)}}}function et(e,t,n){let{$$slots:l={},$$scope:s}=t,{name:c}=t,{imgSrc:o}=t,{link:u}=t;return e.$$set=i=>{"name"in i&&n(0,c=i.name),"imgSrc"in i&&n(1,o=i.imgSrc),"link"in i&&n(2,u=i.link),"$$scope"in i&&n(3,s=i.$$scope)},[c,o,u,s,l]}class nt extends S{constructor(t){super(),H(this,t,et,tt,M,{name:0,imgSrc:1,link:2})}}function f1(e,t,n){const l=e.slice();return l[1]=t[n],l}function d1(e,t,n){const l=e.slice();return l[4]=t[n],l}function C1(e){let t,n,l;var s=e[4];function c(o){return{}}return s&&(t=a1(s,c())),{c(){t&&B(t.$$.fragment),n=k1()},m(o,u){t&&E(t,o,u),j(o,n,u),l=!0},p(o,u){if(s!==(s=o[4])){if(t){s1();const i=t;x(i.$$.fragment,1,0,()=>{T(i,1)}),r1()}s?(t=a1(s,c()),B(t.$$.fragment),$(t.$$.fragment,1),E(t,n.parentNode,n)):t=null}},i(o){l||(t&&$(t.$$.fragment,o),l=!0)},o(o){t&&x(t.$$.fragment,o),l=!1},d(o){o&&L(n),t&&T(t,o)}}}function lt(e){let t,n,l=e[1].icons,s=[];for(let o=0;o<l.length;o+=1)s[o]=C1(d1(e,l,o));const c=o=>x(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();t=b()},m(o,u){for(let i=0;i<s.length;i+=1)s[i].m(o,u);j(o,t,u),n=!0},p(o,u){if(u&1){l=o[1].icons;let i;for(i=0;i<l.length;i+=1){const d=d1(o,l,i);s[i]?(s[i].p(d,u),$(s[i],1)):(s[i]=C1(d),s[i].c(),$(s[i],1),s[i].m(t.parentNode,t))}for(s1(),i=l.length;i<s.length;i+=1)c(i);r1()}},i(o){if(!n){for(let u=0;u<l.length;u+=1)$(s[u]);n=!0}},o(o){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)x(s[u]);n=!1},d(o){p1(s,o),o&&L(t)}}}function m1(e){let t,n;return t=new nt({props:{name:e[1].name,imgSrc:e[1].image,link:e[1].link,$$slots:{default:[lt]},$$scope:{ctx:e}}}),{c(){B(t.$$.fragment)},m(l,s){E(t,l,s),n=!0},p(l,s){const c={};s&128&&(c.$$scope={dirty:s,ctx:l}),t.$set(c)},i(l){n||($(t.$$.fragment,l),n=!0)},o(l){x(t.$$.fragment,l),n=!1},d(l){T(t,l)}}}function st(e){let t,n,l,s,c,o,u=e[0],i=[];for(let a=0;a<u.length;a+=1)i[a]=m1(f1(e,u,a));const d=a=>x(i[a],1,1,()=>{i[a]=null});return{c(){t=g("section"),n=g("div"),l=g("h2"),l.textContent="Projects",s=b(),c=g("div");for(let a=0;a<i.length;a+=1)i[a].c();r(l,"data-animate",""),r(l,"class","fade left svelte-1g8twtz"),S1(l,"transition-delay","500ms"),r(c,"data-animate-container",""),r(c,"class","fade left svelte-1g8twtz"),r(c,"data-animate-delay","800"),r(n,"class","svelte-1g8twtz"),r(t,"id","projects"),r(t,"class","svelte-1g8twtz")},m(a,C){j(a,t,C),f(t,n),f(n,l),f(n,s),f(n,c);for(let m=0;m<i.length;m+=1)i[m].m(c,null);o=!0},p(a,[C]){if(C&1){u=a[0];let m;for(m=0;m<u.length;m+=1){const w=f1(a,u,m);i[m]?(i[m].p(w,C),$(i[m],1)):(i[m]=m1(w),i[m].c(),$(i[m],1),i[m].m(c,null))}for(s1(),m=u.length;m<i.length;m+=1)d(m);r1()}},i(a){if(!o){for(let C=0;C<u.length;C+=1)$(i[C]);o=!0}},o(a){i=i.filter(Boolean);for(let C=0;C<i.length;C+=1)x(i[C]);o=!1},d(a){a&&L(t),p1(i,a)}}}function rt(e){return[[{name:"This website",icons:[Q,U,J],image:"/img/lynith.png",link:"#"},{name:"This website",icons:[Q,U,J],image:"/img/lynith.png",link:"#"},{name:"This website",icons:[Q,U,J],image:"/img/lynith.png",link:"#"},{name:"This website",icons:[Q,U,J],image:"/img/lynith.png",link:"#"}]]}class it extends S{constructor(t){super(),H(this,t,rt,st,M,{})}}function ot(e){let t,n,l,s,c,o,u,i,d;return t=new G1({}),s=new R1({}),o=new N1({props:{bottom:!0,right:!0}}),i=new it({}),{c(){B(t.$$.fragment),n=b(),l=g("main"),B(s.$$.fragment),c=b(),B(o.$$.fragment),u=b(),B(i.$$.fragment)},m(a,C){E(t,a,C),j(a,n,C),j(a,l,C),E(s,l,null),f(l,c),E(o,l,null),f(l,u),E(i,l,null),d=!0},p:_,i(a){d||($(t.$$.fragment,a),$(s.$$.fragment,a),$(o.$$.fragment,a),$(i.$$.fragment,a),d=!0)},o(a){x(t.$$.fragment,a),x(s.$$.fragment,a),x(o.$$.fragment,a),x(i.$$.fragment,a),d=!1},d(a){T(t,a),a&&L(n),a&&L(l),T(s),T(o),T(i)}}}class ct extends S{constructor(t){super(),H(this,t,null,ot,M,{})}}new ct({target:document.getElementById("app")});
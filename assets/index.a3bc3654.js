(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();window.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.setAttribute("data-in-view","true"),window.observer.unobserve(e.target))})});window.addEventListener("DOMContentLoaded",()=>{const t=[];t.push(...document.querySelectorAll("[data-animate]")),document.querySelectorAll("[data-animate-container]").forEach(e=>{for(let n=0;n<e.children.length;n++){const l=e.children[n],s=(l.getAttribute("data-animate-delay")?parseInt(l.getAttribute("data-animate-delay")):0)+(e.getAttribute("data-animate-delay")?parseInt(e.getAttribute("data-animate-delay")):0);l.style.transitionDelay=`${400*(n+1)+s}ms`}t.push(...e.children)}),t.forEach(e=>{window.observer.observe(e)})});function p(){}function Pe(t,e){for(const n in e)t[n]=e[n];return t}function Ze(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function ke(t){return t()}function he(){return Object.create(null)}function Q(t){t.forEach(ke)}function Ee(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let X;function me(t,e){return X||(X=document.createElement("a")),X.href=e,t===X.href}function Ie(t){return Object.keys(t).length===0}function je(t,e,n,l){if(t){const s=Le(t,e,n,l);return t[0](s)}}function Le(t,e,n,l){return t[1]&&l?Pe(n.ctx.slice(),t[1](l(e))):n.ctx}function Se(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],a=Math.max(e.dirty.length,s.length);for(let o=0;o<a;o+=1)i[o]=e.dirty[o]|s[o];return i}return e.dirty|s}return e.dirty}function Ae(t,e,n,l,s,i){if(s){const a=Le(e,n,l,i);t.p(a,s)}}function Me(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function f(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function He(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function M(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function K(t){return document.createTextNode(t)}function y(){return K(" ")}function ce(){return K("")}function Be(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function r(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Fe(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.data!==e&&(t.data=e)}function Oe(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function ee(t,e,n){t.classList[n?"add":"remove"](e)}class Re{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,l=null){this.e||(this.is_svg?this.e=M(n.nodeName):this.e=m(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(l)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)L(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(j)}}let J;function O(t){J=t}function Te(){if(!J)throw new Error("Function called outside component initialization");return J}function ue(t){Te().$$.on_mount.push(t)}const Y=[],V=[];let G=[];const ge=[],Ve=Promise.resolve();let ae=!1;function De(){ae||(ae=!0,Ve.then(fe))}function oe(t){G.push(t)}const se=new Set;let x=0;function fe(){if(x!==0)return;const t=J;do{try{for(;x<Y.length;){const e=Y[x];x++,O(e),ze(e.$$)}}catch(e){throw Y.length=0,x=0,e}for(O(null),Y.length=0,x=0;V.length;)V.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];se.has(n)||(se.add(n),n())}G.length=0}while(Y.length);for(;ge.length;)ge.pop()();ae=!1,se.clear(),O(t)}function ze(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}function xe(t){const e=[],n=[];G.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),G=e}const te=new Set;let z;function U(){z={r:0,c:[],p:z}}function W(){z.r||Q(z.c),z=z.p}function w(t,e){t&&t.i&&(te.delete(t),t.i(e))}function k(t,e,n,l){if(t&&t.o){if(te.has(t))return;te.add(t),z.c.push(()=>{te.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Ce(t,e){const n=e.token={};function l(s,i,a,o){if(e.token!==n)return;e.resolved=o;let c=e.ctx;a!==void 0&&(c=c.slice(),c[a]=o);const u=s&&(e.current=s)(c);let h=!1;e.block&&(e.blocks?e.blocks.forEach((g,d)=>{d!==i&&g&&(U(),k(g,1,1,()=>{e.blocks[d]===g&&(e.blocks[d]=null)}),W())}):e.block.d(1),u.c(),w(u,1),u.m(e.mount(),e.anchor),h=!0),e.block=u,e.blocks&&(e.blocks[i]=u),h&&fe()}if(Ze(t)){const s=Te();if(t.then(i=>{O(s),l(e.then,1,e.value,i),O(null)},i=>{if(O(s),l(e.catch,2,e.error,i),O(null),!e.hasCatch)throw i}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function Ye(t,e,n){const l=e.slice(),{resolved:s}=t;t.current===t.then&&(l[t.value]=s),t.current===t.catch&&(l[t.error]=s),t.block.p(l,n)}function q(t){t&&t.c()}function H(t,e,n,l){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),l||oe(()=>{const a=t.$$.on_mount.map(ke).filter(Ee);t.$$.on_destroy?t.$$.on_destroy.push(...a):Q(a),t.$$.on_mount=[]}),i.forEach(oe)}function T(t,e){const n=t.$$;n.fragment!==null&&(xe(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(t,e){t.$$.dirty[0]===-1&&(Y.push(t),De(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,n,l,s,i,a,o=[-1]){const c=J;O(t);const u=t.$$={fragment:null,ctx:[],props:i,update:p,not_equal:s,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:he(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};a&&a(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},(g,d,...v)=>{const $=v.length?v[0]:d;return u.ctx&&s(u.ctx[g],u.ctx[g]=$)&&(!u.skip_bound&&u.bound[g]&&u.bound[g]($),h&&Ge(t,g)),d}):[],u.update(),h=!0,Q(u.before_update),u.fragment=l?l(u.ctx):!1,e.target){if(e.hydrate){const g=Fe(e.target);u.fragment&&u.fragment.l(g),g.forEach(j)}else u.fragment&&u.fragment.c();e.intro&&w(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),fe()}O(c)}class B{$destroy(){T(this,1),this.$destroy=p}$on(e,n){if(!Ee(n))return p;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Ie(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ke(t){let e;return{c(){e=m("div"),r(e,"class","svelte-1yqlmi1"),ee(e,"bottom",t[0]),ee(e,"right",t[1])},m(n,l){L(n,e,l)},p(n,[l]){l&1&&ee(e,"bottom",n[0]),l&2&&ee(e,"right",n[1])},i:p,o:p,d(n){n&&j(e)}}}function Je(t,e,n){let{bottom:l=!1}=e,{right:s=!1}=e;return t.$$set=i=>{"bottom"in i&&n(0,l=i.bottom),"right"in i&&n(1,s=i.right)},[l,s]}class Qe extends B{constructor(e){super(),I(this,e,Je,Ke,Z,{bottom:0,right:1})}}function Ue(t){let e,n;return{c(){e=M("svg"),n=M("path"),r(n,"d","M9 1.6875C7.55373 1.6875 6.13993 2.11637 4.9374 2.91988C3.73486 3.72339 2.7976 4.86544 2.24413 6.20163C1.69067 7.53781 1.54586 9.00811 1.82801 10.4266C2.11017 11.8451 2.80661 13.148 3.82928 14.1707C4.85196 15.1934 6.15492 15.8898 7.57341 16.172C8.99189 16.4541 10.4622 16.3093 11.7984 15.7559C13.1346 15.2024 14.2766 14.2651 15.0801 13.0626C15.8836 11.8601 16.3125 10.4463 16.3125 9C16.3088 7.06175 15.5372 5.20394 14.1666 3.83339C12.7961 2.46283 10.9383 1.69122 9 1.6875V1.6875ZM9.84375 12.375H9.5625V12.9375C9.5625 13.0867 9.50324 13.2298 9.39775 13.3352C9.29226 13.4407 9.14919 13.5 9 13.5C8.85082 13.5 8.70774 13.4407 8.60226 13.3352C8.49677 13.2298 8.4375 13.0867 8.4375 12.9375V12.375H7.3125C7.16332 12.375 7.02024 12.3157 6.91476 12.2102C6.80927 12.1048 6.75 11.9617 6.75 11.8125C6.75 11.6633 6.80927 11.5202 6.91476 11.4148C7.02024 11.3093 7.16332 11.25 7.3125 11.25H9.84375C10.0675 11.25 10.2821 11.1611 10.4404 11.0029C10.5986 10.8446 10.6875 10.63 10.6875 10.4062C10.6875 10.1825 10.5986 9.96786 10.4404 9.80963C10.2821 9.6514 10.0675 9.5625 9.84375 9.5625H8.15625C7.63411 9.5625 7.13335 9.35508 6.76414 8.98587C6.39492 8.61665 6.1875 8.11589 6.1875 7.59375C6.1875 7.07161 6.39492 6.57085 6.76414 6.20163C7.13335 5.83242 7.63411 5.625 8.15625 5.625H8.4375V5.0625C8.4375 4.91332 8.49677 4.77024 8.60226 4.66475C8.70774 4.55926 8.85082 4.5 9 4.5C9.14919 4.5 9.29226 4.55926 9.39775 4.66475C9.50324 4.77024 9.5625 4.91332 9.5625 5.0625V5.625H10.6875C10.8367 5.625 10.9798 5.68426 11.0853 5.78975C11.1907 5.89524 11.25 6.03832 11.25 6.1875C11.25 6.33668 11.1907 6.47976 11.0853 6.58525C10.9798 6.69074 10.8367 6.75 10.6875 6.75H8.15625C7.93248 6.75 7.71787 6.83889 7.55963 6.99713C7.4014 7.15536 7.3125 7.36997 7.3125 7.59375C7.3125 7.81753 7.4014 8.03214 7.55963 8.19037C7.71787 8.34861 7.93248 8.4375 8.15625 8.4375H9.84375C10.3659 8.4375 10.8667 8.64492 11.2359 9.01413C11.6051 9.38335 11.8125 9.88411 11.8125 10.4062C11.8125 10.9284 11.6051 11.4292 11.2359 11.7984C10.8667 12.1676 10.3659 12.375 9.84375 12.375V12.375Z"),r(n,"fill","white"),r(e,"width","18"),r(e,"height","18"),r(e,"viewBox","0 0 18 18"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(l,s){L(l,e,s),f(e,n)},p,i:p,o:p,d(l){l&&j(e)}}}class We extends B{constructor(e){super(),I(this,e,null,Ue,Z,{})}}function Xe(t){let e,n;return{c(){e=M("svg"),n=M("path"),r(n,"d","M16.5938 6.46875C16.5938 8.62031 15.3492 10.8281 12.8953 13.0359C11.781 14.0377 10.5678 14.9235 9.27422 15.6797C9.19019 15.7258 9.09587 15.75 9 15.75C8.90413 15.75 8.80981 15.7258 8.72578 15.6797C8.42344 15.5109 1.40625 11.5242 1.40625 6.46875C1.40625 5.58331 1.68485 4.72031 2.20257 4.002C2.7203 3.2837 3.45091 2.74649 4.29091 2.46649C5.13092 2.18649 6.03773 2.17789 6.88289 2.4419C7.72806 2.70591 8.46873 3.22915 9 3.9375C9.53127 3.22915 10.2719 2.70591 11.1171 2.4419C11.9623 2.17789 12.8691 2.18649 13.7091 2.46649C14.5491 2.74649 15.2797 3.2837 15.7974 4.002C16.3152 4.72031 16.5938 5.58331 16.5938 6.46875Z"),r(n,"fill","white"),r(e,"width","18"),r(e,"height","18"),r(e,"viewBox","0 0 18 18"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(l,s){L(l,e,s),f(e,n)},p,i:p,o:p,d(l){l&&j(e)}}}class et extends B{constructor(e){super(),I(this,e,null,Xe,Z,{})}}function tt(t){let e,n,l,s,i,a,o,c,u,h,g,d,v,$,C,N,S,E,_,A,F,R,D;return C=new We({}),A=new et({}),{c(){e=m("section"),n=m("div"),l=m("div"),s=m("h2"),s.textContent="Hello. I'm",i=y(),a=m("h1"),a.textContent="Lynith",o=y(),c=m("p"),c.innerHTML="A full-stack developer, web designer <br/>and Linux enthusiast",u=y(),h=m("div"),h.innerHTML='<span class="svelte-7js8vb"></span>',g=y(),d=m("div"),v=m("div"),$=m("a"),q(C.$$.fragment),N=y(),S=m("span"),S.textContent="Commission",E=y(),_=m("a"),q(A.$$.fragment),F=y(),R=m("span"),R.textContent="Donate",r(s,"class","svelte-7js8vb"),r(a,"class","svelte-7js8vb"),r(c,"class","svelte-7js8vb"),r(h,"class","circle fade top svelte-7js8vb"),r(h,"data-animate",""),r(h,"data-animate-delay","0"),r(S,"class","svelte-7js8vb"),r($,"href","https://ko-fi.com/lynith/commissions"),r($,"class","svelte-7js8vb"),r(R,"class","svelte-7js8vb"),r(_,"href","https://ko-fi.com/lynith"),r(_,"class","svelte-7js8vb"),r(v,"class","buttons svelte-7js8vb"),r(d,"data-animate",""),r(d,"class","fade bottom svelte-7js8vb"),r(l,"data-animate-container",""),r(l,"class","fade left svelte-7js8vb"),r(n,"class","svelte-7js8vb"),r(e,"id","home"),r(e,"class","svelte-7js8vb")},m(b,P){L(b,e,P),f(e,n),f(n,l),f(l,s),f(l,i),f(l,a),f(l,o),f(l,c),f(l,u),f(l,h),f(l,g),f(l,d),f(d,v),f(v,$),H(C,$,null),f($,N),f($,S),f(v,E),f(v,_),H(A,_,null),f(_,F),f(_,R),D=!0},p,i(b){D||(w(C.$$.fragment,b),w(A.$$.fragment,b),D=!0)},o(b){k(C.$$.fragment,b),k(A.$$.fragment,b),D=!1},d(b){b&&j(e),T(C),T(A)}}}class nt extends B{constructor(e){super(),I(this,e,null,tt,Z,{})}}function lt(t){let e,n,l,s,i,a,o,c,u,h,g,d,v;return{c(){e=m("nav"),n=m("span"),n.textContent="Lynith",l=y(),s=m("ul"),i=m("li"),i.innerHTML='<a class="active svelte-1ld032s" href="#home">Home</a>',a=y(),o=m("li"),o.innerHTML='<a href="#projects" class="svelte-1ld032s">Projects</a>',c=y(),u=m("li"),u.innerHTML='<a href="#socials" class="svelte-1ld032s">Socials</a>',h=y(),g=m("li"),g.innerHTML='<a data-no-underline="true" href="https://ko-fi.com/lynith/commissions" class="svelte-1ld032s">Commissions</a>',d=y(),v=m("span"),r(n,"class","svelte-1ld032s"),r(i,"class","mobile_hide svelte-1ld032s"),r(o,"class","svelte-1ld032s"),r(u,"class","svelte-1ld032s"),r(g,"class","svelte-1ld032s"),r(v,"class","underline svelte-1ld032s"),r(s,"class","svelte-1ld032s"),r(e,"class","fade top svelte-1ld032s"),r(e,"data-animate","")},m($,C){L($,e,C),f(e,n),f(e,l),f(e,s),f(s,i),f(s,a),f(s,o),f(s,c),f(s,u),f(s,h),f(s,g),f(s,d),f(s,v),t[3](v),t[4](s),t[5](e)},p,i:p,o:p,d($){$&&j(e),t[3](null),t[4](null),t[5](null)}}}function st(t,e,n){let l,s,i,a,o=null;const c=(C=!1)=>{const N=()=>{n(0,l.style.left=`${i.getBoundingClientRect().left+i.getBoundingClientRect().width/4}px`,l),n(0,l.style.width=`${i.getBoundingClientRect().width/2}px`,l)};if(C){N();return}o&&clearTimeout(o),o=setTimeout(N,200)},u=C=>{i.classList.remove("active"),C.classList.add("active"),i=C,window.history.replaceState(null,null,`${C.href}`),c()};let h=null;const g=()=>{a.classList[window.scrollY>100?"add":"remove"]("floating"),document.querySelectorAll("section").forEach(C=>{C.getBoundingClientRect().top+window.scrollY<window.scrollY+window.innerHeight/2&&(h&&clearTimeout(h),h=setTimeout(()=>{switch(C.id){case"projects":u(a.querySelectorAll("a")[1]);break;case"socials":u(a.querySelectorAll("a")[2]);break;default:u(a.querySelectorAll("a")[0]);break}},150))})};ue(()=>{i=s.querySelector("a.active"),c(!0),n(0,l.style.transition="0.3s",l),s.querySelectorAll("a").forEach(C=>{C.getAttribute("data-no-underline")!="true"&&C.addEventListener("click",N=>u(N.target))}),window.addEventListener("resize",()=>c()),window.addEventListener("scroll",()=>g())});function d(C){V[C?"unshift":"push"](()=>{l=C,n(0,l)})}function v(C){V[C?"unshift":"push"](()=>{s=C,n(1,s)})}function $(C){V[C?"unshift":"push"](()=>{a=C,n(2,a)})}return[l,s,a,d,v,$]}class it extends B{constructor(e){super(),I(this,e,st,lt,Z,{})}}const qe=async()=>new Promise(async(t,e)=>{if(window.metadata){t(window.metadata);return}try{window.metadata=await(await fetch("https://raw.githubusercontent.com/LynithDev/meta-data/master/projects.json")).json(),t(window.metadata)}catch(n){e(n)}});function rt(t){let e,n,l,s,i,a;return{c(){e=M("svg"),n=M("g"),l=M("path"),s=M("defs"),i=M("clipPath"),a=M("rect"),r(l,"d","M7 0.173289C3.13294 0.173289 0 3.30885 0 7.17329C0 10.2677 2.0055 12.8905 4.78494 13.8159C5.13625 13.8819 5.26312 13.6654 5.26312 13.4781C5.26312 13.3119 5.25919 12.8722 5.25656 12.2885C3.30838 12.7103 2.898 11.3475 2.898 11.3475C2.57906 10.5407 2.11881 10.3242 2.11881 10.3242C1.48531 9.89148 2.16913 9.90066 2.16913 9.90066C2.87088 9.94835 3.24013 10.6204 3.24013 10.6204C3.86444 11.6914 4.87813 11.3816 5.27931 11.2014C5.34056 10.7503 5.523 10.4401 5.72163 10.2673C4.16763 10.0919 2.53356 9.49029 2.53356 6.80798C2.53356 6.04191 2.80481 5.41804 3.25325 4.92804C3.17581 4.7526 2.93869 4.03948 3.31494 3.07523C3.31494 3.07523 3.90075 2.88841 5.23994 3.79316C5.8104 3.63801 6.39876 3.55843 6.98994 3.55648C7.58494 3.56041 8.1795 3.63829 8.73994 3.79316C10.0712 2.88841 10.6566 3.07523 10.6566 3.07523C11.0324 4.03948 10.7953 4.75216 10.7271 4.92804C11.1711 5.41804 11.4424 6.04235 11.4424 6.80798C11.4424 9.49641 9.80612 10.0892 8.25037 10.2603C8.49362 10.4699 8.72156 10.9008 8.72156 11.5549C8.72156 12.4911 8.71281 13.2454 8.71281 13.4733C8.71281 13.6553 8.83531 13.874 9.19581 13.8036C11.9958 12.8879 13.9991 10.2629 13.9991 7.17285C13.9991 3.30841 10.8662 0.172852 6.99913 0.172852L7 0.173289Z"),r(l,"fill","#171515"),r(n,"clip-path","url(#clip0_502_245)"),r(a,"width","14"),r(a,"height","14"),r(a,"fill","white"),r(i,"id","clip0_502_245"),r(e,"width","14"),r(e,"height","14"),r(e,"viewBox","0 0 14 14"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(o,c){L(o,e,c),f(e,n),f(n,l),f(e,s),f(s,i),f(i,a)},p,i:p,o:p,d(o){o&&j(e)}}}class Ne extends B{constructor(e){super(),I(this,e,null,rt,Z,{})}}function at(t){let e,n,l;return{c(){e=M("svg"),n=M("rect"),l=M("path"),r(n,"width","12"),r(n,"height","12"),r(n,"rx","6"),r(n,"fill","white"),r(l,"d","M6 1.125C5.03582 1.125 4.09329 1.41091 3.2916 1.94659C2.48991 2.48226 1.86507 3.24363 1.49609 4.13442C1.12711 5.02521 1.03057 6.00541 1.21867 6.95107C1.40678 7.89672 1.87108 8.76536 2.55286 9.44715C3.23464 10.1289 4.10328 10.5932 5.04894 10.7813C5.99459 10.9694 6.97479 10.8729 7.86558 10.5039C8.75637 10.1349 9.51775 9.51009 10.0534 8.7084C10.5891 7.90671 10.875 6.96418 10.875 6C10.8738 4.70745 10.3597 3.4682 9.44578 2.55423C8.53181 1.64025 7.29255 1.12624 6 1.125ZM6 10.125C5.18415 10.125 4.38663 9.88307 3.70827 9.42981C3.02992 8.97655 2.50121 8.33231 2.189 7.57857C1.87679 6.82482 1.7951 5.99542 1.95426 5.19525C2.11343 4.39508 2.5063 3.66008 3.08319 3.08318C3.66008 2.50629 4.39508 2.11342 5.19525 1.95426C5.99543 1.7951 6.82483 1.87679 7.57857 2.189C8.33232 2.50121 8.97655 3.02992 9.42981 3.70827C9.88307 4.38663 10.125 5.18415 10.125 6C10.1238 7.09364 9.68877 8.14213 8.91545 8.91545C8.14213 9.68876 7.09364 10.1238 6 10.125ZM6.75 8.25C6.75 8.34946 6.71049 8.44484 6.64017 8.51517C6.56984 8.58549 6.47446 8.625 6.375 8.625H6C5.90055 8.625 5.80516 8.58549 5.73484 8.51517C5.66451 8.44484 5.625 8.34946 5.625 8.25V6C5.52555 6 5.43016 5.96049 5.35984 5.89016C5.28951 5.81984 5.25 5.72446 5.25 5.625C5.25 5.52554 5.28951 5.43016 5.35984 5.35984C5.43016 5.28951 5.52555 5.25 5.625 5.25H6C6.09946 5.25 6.19484 5.28951 6.26517 5.35984C6.33549 5.43016 6.375 5.52554 6.375 5.625V7.875C6.47446 7.875 6.56984 7.91451 6.64017 7.98483C6.71049 8.05516 6.75 8.15054 6.75 8.25ZM5.34375 3.9375C5.34375 3.82625 5.37674 3.71749 5.43855 3.62499C5.50036 3.53249 5.58821 3.46039 5.69099 3.41782C5.79378 3.37524 5.90688 3.3641 6.01599 3.38581C6.1251 3.40751 6.22533 3.46109 6.304 3.53975C6.38267 3.61842 6.43624 3.71865 6.45794 3.82776C6.47965 3.93688 6.46851 4.04998 6.42593 4.15276C6.38336 4.25554 6.31126 4.34339 6.21876 4.4052C6.12626 4.46701 6.0175 4.5 5.90625 4.5C5.75707 4.5 5.61399 4.44074 5.5085 4.33525C5.40302 4.22976 5.34375 4.08668 5.34375 3.9375Z"),r(l,"fill","black"),r(e,"width","12"),r(e,"height","12"),r(e,"viewBox","0 0 12 12"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(s,i){L(s,e,i),f(e,n),f(e,l)},p,i:p,o:p,d(s){s&&j(e)}}}class ot extends B{constructor(e){super(),I(this,e,null,at,Z,{})}}function _e(t){let e,n,l;return n=new Ne({}),{c(){e=m("a"),q(n.$$.fragment),r(e,"href",t[3]),r(e,"class","svelte-1qvfmvk")},m(s,i){L(s,e,i),H(n,e,null),l=!0},p(s,i){(!l||i&8)&&r(e,"href",s[3])},i(s){l||(w(n.$$.fragment,s),l=!0)},o(s){k(n.$$.fragment,s),l=!1},d(s){s&&j(e),T(n)}}}function ct(t){let e,n,l,s,i,a,o,c,u,h,g,d,v,$,C;const N=t[7].default,S=je(N,t,t[6],null);let E=t[3]&&t[3]!=""&&_e(t);return $=new ot({}),{c(){e=m("div"),n=m("div"),l=m("h3"),s=K(t[0]),i=y(),a=m("span"),S&&S.c(),o=y(),c=m("a"),u=m("img"),d=y(),E&&E.c(),v=y(),q($.$$.fragment),r(l,"class","svelte-1qvfmvk"),r(a,"class","svelte-1qvfmvk"),r(n,"class","svelte-1qvfmvk"),me(u.src,h=t[1])||r(u,"src",h),r(u,"alt",g=`Screenshot of ${t[0]}`),r(u,"class","svelte-1qvfmvk"),r(c,"href",t[2]),r(c,"class","svelte-1qvfmvk"),r(e,"class","svelte-1qvfmvk")},m(_,A){L(_,e,A),f(e,n),f(n,l),f(l,s),f(n,i),f(n,a),S&&S.m(a,null),f(e,o),f(e,c),f(c,u),f(c,d),E&&E.m(c,null),f(c,v),H($,c,null),t[8](e),C=!0},p(_,[A]){(!C||A&1)&&re(s,_[0]),S&&S.p&&(!C||A&64)&&Ae(S,N,_,_[6],C?Se(N,_[6],A,null):Me(_[6]),null),(!C||A&2&&!me(u.src,h=_[1]))&&r(u,"src",h),(!C||A&1&&g!==(g=`Screenshot of ${_[0]}`))&&r(u,"alt",g),_[3]&&_[3]!=""?E?(E.p(_,A),A&8&&w(E,1)):(E=_e(_),E.c(),w(E,1),E.m(c,v)):E&&(U(),k(E,1,1,()=>{E=null}),W()),(!C||A&4)&&r(c,"href",_[2])},i(_){C||(w(S,_),w(E),w($.$$.fragment,_),C=!0)},o(_){k(S,_),k(E),k($.$$.fragment,_),C=!1},d(_){_&&j(e),S&&S.d(_),E&&E.d(),T($),t[8](null)}}}function ut(t,e,n){let{$$slots:l={},$$scope:s}=e,{name:i}=e,{imgSrc:a}=e,{link:o}=e,{github:c=""}=e,{index:u}=e,h;ue(()=>{const d=(h.getAttribute("data-animate-delay")?parseInt(h.getAttribute("data-animate-delay")):0)+(h.parentElement.getAttribute("data-animate-delay")?parseInt(h.parentElement.getAttribute("data-animate-delay")):0);n(4,h.style.transitionDelay=`${400*(u+1)+d}ms`,h),window.observer.observe(h)});function g(d){V[d?"unshift":"push"](()=>{h=d,n(4,h)})}return t.$$set=d=>{"name"in d&&n(0,i=d.name),"imgSrc"in d&&n(1,a=d.imgSrc),"link"in d&&n(2,o=d.link),"github"in d&&n(3,c=d.github),"index"in d&&n(5,u=d.index),"$$scope"in d&&n(6,s=d.$$scope)},[i,a,o,c,h,u,s,l,g]}class ft extends B{constructor(e){super(),I(this,e,ut,ct,Z,{name:0,imgSrc:1,link:2,github:3,index:5})}}function pe(t,e,n){const l=t.slice();return l[2]=e[n],l[4]=n,l}function ve(t,e,n){const l=t.slice();return l[5]=e[n],l}function we(t){let e,n,l=t[0].projects,s=[];for(let a=0;a<l.length;a+=1)s[a]=$e(pe(t,l,a));const i=a=>k(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=ce()},m(a,o){for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(a,o);L(a,e,o),n=!0},p(a,o){if(o&3){l=a[0].projects;let c;for(c=0;c<l.length;c+=1){const u=pe(a,l,c);s[c]?(s[c].p(u,o),w(s[c],1)):(s[c]=$e(u),s[c].c(),w(s[c],1),s[c].m(e.parentNode,e))}for(U(),c=l.length;c<s.length;c+=1)i(c);W()}},i(a){if(!n){for(let o=0;o<l.length;o+=1)w(s[o]);n=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)k(s[o]);n=!1},d(a){He(s,a),a&&j(e)}}}function dt(t){return{c:p,m:p,p,d:p}}function ht(t){let e,n=t[8]+"",l;return{c(){e=new Re(!1),l=ce(),e.a=l},m(s,i){e.m(n,s,i),L(s,l,i)},p(s,i){i&1&&n!==(n=s[8]+"")&&e.p(n)},d(s){s&&j(l),s&&e.d()}}}function mt(t){let e;return{c(){e=M("svg")},m(n,l){L(n,e,l)},p,d(n){n&&j(e)}}}function be(t){let e,n,l={ctx:t,current:null,token:null,hasCatch:!1,pending:mt,then:ht,catch:dt,value:8};return Ce(n=t[1](t[0].icons[t[5]]),l),{c(){e=ce(),l.block.c()},m(s,i){L(s,e,i),l.block.m(s,l.anchor=i),l.mount=()=>e.parentNode,l.anchor=e},p(s,i){t=s,l.ctx=t,i&1&&n!==(n=t[1](t[0].icons[t[5]]))&&Ce(n,l)||Ye(l,t,i)},d(s){s&&j(e),l.block.d(s),l.token=null,l=null}}}function gt(t){let e,n=t[2].icons,l=[];for(let s=0;s<n.length;s+=1)l[s]=be(ve(t,n,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=y()},m(s,i){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(s,i);L(s,e,i)},p(s,i){if(i&3){n=s[2].icons;let a;for(a=0;a<n.length;a+=1){const o=ve(s,n,a);l[a]?l[a].p(o,i):(l[a]=be(o),l[a].c(),l[a].m(e.parentNode,e))}for(;a<l.length;a+=1)l[a].d(1);l.length=n.length}},d(s){He(l,s),s&&j(e)}}}function $e(t){let e,n;return e=new ft({props:{name:t[2].name,imgSrc:t[2].thumbnail,link:t[2].link,index:t[4],github:t[2].repository&&t[2].repository!=""?t[2].repository:"",$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p(l,s){const i={};s&1&&(i.name=l[2].name),s&1&&(i.imgSrc=l[2].thumbnail),s&1&&(i.link=l[2].link),s&1&&(i.github=l[2].repository&&l[2].repository!=""?l[2].repository:""),s&513&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){T(e,l)}}}function Ct(t){let e,n,l,s,i,a,o=t[0]&&we(t);return{c(){e=m("section"),n=m("div"),l=m("h2"),l.textContent="Projects",s=y(),i=m("div"),o&&o.c(),r(l,"data-animate",""),r(l,"class","fade left svelte-1g8twtz"),Oe(l,"transition-delay","500ms"),r(i,"data-animate-container",""),r(i,"class","fade left svelte-1g8twtz"),r(i,"data-animate-delay","800"),r(n,"class","svelte-1g8twtz"),r(e,"id","projects"),r(e,"class","svelte-1g8twtz")},m(c,u){L(c,e,u),f(e,n),f(n,l),f(n,s),f(n,i),o&&o.m(i,null),a=!0},p(c,[u]){c[0]?o?(o.p(c,u),u&1&&w(o,1)):(o=we(c),o.c(),w(o,1),o.m(i,null)):o&&(U(),k(o,1,1,()=>{o=null}),W())},i(c){a||(w(o),a=!0)},o(c){k(o),a=!1},d(c){c&&j(e),o&&o.d()}}}function _t(t,e,n){const l=async i=>(await fetch(i)).text();let s;return ue(async()=>{n(0,s=await qe())}),[s,l]}class pt extends B{constructor(e){super(),I(this,e,_t,Ct,Z,{})}}function vt(t){let e,n,l,s;return{c(){e=M("svg"),n=M("path"),l=M("path"),s=M("path"),r(n,"d","M4.96973 7.30762C4.96973 7.73828 5.2884 8.08841 5.67415 8.08841C6.06732 8.08841 6.3712 7.73828 6.37798 7.30762C6.38477 6.87695 6.06855 6.52383 5.67292 6.52383C5.27734 6.52383 4.96973 6.87695 4.96973 7.30762Z"),r(n,"fill","#5865F2"),r(l,"d","M7.56909 7.30762C7.56909 7.73828 7.88654 8.08841 8.27293 8.08841C8.66605 8.08841 8.96934 7.73828 8.97612 7.30762C8.9829 6.87695 8.66914 6.52383 8.27293 6.52383C7.87671 6.52383 7.56909 6.87695 7.56909 7.30762Z"),r(l,"fill","#5865F2"),r(s,"fill-rule","evenodd"),r(s,"clip-rule","evenodd"),r(s,"d","M7 14C10.866 14 14 10.8659 14 7C14 3.13406 10.866 0 7 0C3.13401 0 0 3.13406 0 7C0 10.8659 3.13401 14 7 14ZM8.07479 4.04688C8.63213 4.14108 9.17463 4.30814 9.68855 4.54333C10.5739 5.83789 11.0138 7.29779 10.8514 8.98221C10.2532 9.42462 9.58318 9.76044 8.87091 9.97534C8.71053 9.76001 8.56874 9.53165 8.44703 9.29239C8.67886 9.20566 8.90263 9.09885 9.11578 8.97302C9.06039 8.93542 9.00565 8.89377 8.95214 8.84998C8.33317 9.14114 7.65753 9.29196 6.97356 9.29196C6.28954 9.29196 5.61391 9.14114 4.99493 8.84998C4.94201 8.89056 4.88727 8.93243 4.8313 8.97302C4.94788 9.04181 5.06767 9.10483 5.19024 9.16229C5.29128 9.2095 5.39425 9.25266 5.49882 9.29175C5.377 9.53101 5.23515 9.7598 5.07494 9.97534C4.36325 9.75958 3.69381 9.42355 3.09572 8.98157C2.95729 7.52914 3.23415 6.05557 4.25542 4.54462C4.76988 4.3092 5.31275 4.14194 5.87041 4.04688C5.94668 4.18317 6.01568 4.32352 6.07715 4.46707C6.67075 4.37756 7.27445 4.37756 7.86811 4.46707C7.92953 4.32352 7.99853 4.18317 8.07479 4.04688Z"),r(s,"fill","#5865F2"),r(e,"width","14"),r(e,"height","14"),r(e,"viewBox","0 0 14 14"),r(e,"fill","none"),r(e,"xmlns","http://www.w3.org/2000/svg")},m(i,a){L(i,e,a),f(e,n),f(e,l),f(e,s)},p,i:p,o:p,d(i){i&&j(e)}}}class wt extends B{constructor(e){super(),I(this,e,null,vt,Z,{})}}function bt(t){let e,n;return{c(){e=M("svg"),n=M("path"),r(n,"d","M 5.5099 8.3536 C 5.3304 8.3546 5.1579 8.2842 5.0303 8.158 C 4.9026 8.0319 4.8303 7.8602 4.8291 7.6807 C 4.8291 7.3036 5.1327 7 5.5099 7 C 5.8818 7 6.1828 7.3036 6.1828 7.6807 C 6.1828 8.0526 5.8791 8.3536 5.5099 8.3536 Z M 14 7 C 13.7812 10.7463 10.7459 13.7812 7 14 C 3.2541 13.7812 0.2188 10.7459 0 7 C 0.2188 3.2537 3.2541 0.2188 7 0 C 10.7459 0.2188 13.7812 3.2541 14 7 Z M 10.1636 5.8734 C 9.9068 5.8734 9.6797 5.9802 9.5126 6.1469 C 8.9001 5.7229 8.0745 5.4495 7.1584 5.4193 L 7.6339 3.2782 L 9.149 3.6199 C 9.149 3.9918 9.4526 4.2927 9.8214 4.2927 C 10.199 4.2927 10.5022 3.9839 10.5022 3.612 C 10.5022 3.2401 10.1986 2.9312 9.8214 2.9312 C 9.5563 2.9312 9.3293 3.0901 9.2172 3.3088 L 7.5438 2.9369 C 7.4616 2.9151 7.3771 2.9754 7.3552 3.0572 L 6.8329 5.4197 C 5.9251 5.4582 5.1074 5.7286 4.4949 6.1526 C 4.4097 6.0638 4.3074 5.9933 4.1941 5.9454 C 4.0808 5.8975 3.959 5.8731 3.836 5.8739 C 2.8818 5.8739 2.5699 7.1562 3.4423 7.5911 C 3.4115 7.7303 3.3959 7.8724 3.3959 8.015 C 3.3959 9.4531 5.0146 10.6181 7.0053 10.6181 C 9.0042 10.6181 10.6229 9.4531 10.6229 8.015 C 10.6229 7.8702 10.6063 7.7197 10.5709 7.5827 C 11.4266 7.1452 11.1121 5.8734 10.1636 5.8734 Z M 8.2797 9.051 C 7.7823 9.5484 6.1989 9.5406 5.7203 9.051 C 5.6895 9.0222 5.6489 9.0062 5.6068 9.0062 C 5.5646 9.0062 5.524 9.0222 5.4932 9.051 C 5.425 9.1192 5.425 9.226 5.4932 9.2864 C 6.1167 9.9098 7.8803 9.9098 8.5068 9.2864 C 8.575 9.226 8.575 9.1197 8.5068 9.051 C 8.476 9.0222 8.4354 9.0062 8.3932 9.0062 C 8.3511 9.0062 8.3105 9.0222 8.2797 9.051 Z M 8.4901 7 C 8.1182 7 7.8172 7.3036 7.8172 7.6807 C 7.8179 7.8147 7.8584 7.9455 7.9334 8.0565 C 8.0084 8.1675 8.1147 8.2538 8.2388 8.3043 C 8.3628 8.3549 8.4991 8.3676 8.6304 8.3407 C 8.7616 8.3138 8.882 8.2486 8.9762 8.1533 C 9.0703 8.058 9.1341 7.937 9.1595 7.8054 C 9.1849 7.6738 9.1706 7.5377 9.1186 7.4142 C 9.0666 7.2908 8.9791 7.1855 8.8672 7.1118 C 8.7553 7.038 8.6241 6.9991 8.4901 7 Z"),r(n,"fill","#FF5700"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox","0 0 14 14")},m(l,s){L(l,e,s),f(e,n)},p,i:p,o:p,d(l){l&&j(e)}}}class $t extends B{constructor(e){super(),I(this,e,null,bt,Z,{})}}function yt(t){let e,n,l,s;const i=t[5].default,a=je(i,t,t[4],null);return{c(){e=m("div"),n=m("a"),a&&a.c(),r(n,"href",t[0]),r(n,"style",l=`color: ${t[2]};`),r(n,"data-name",t[1]),r(n,"class","svelte-a3pp2q"),r(e,"class","svelte-a3pp2q")},m(o,c){L(o,e,c),f(e,n),a&&a.m(n,null),t[6](e),s=!0},p(o,[c]){a&&a.p&&(!s||c&16)&&Ae(a,i,o,o[4],s?Se(i,o[4],c,null):Me(o[4]),null),(!s||c&1)&&r(n,"href",o[0]),(!s||c&4&&l!==(l=`color: ${o[2]};`))&&r(n,"style",l),(!s||c&2)&&r(n,"data-name",o[1])},i(o){s||(w(a,o),s=!0)},o(o){k(a,o),s=!1},d(o){o&&j(e),a&&a.d(o),t[6](null)}}}function kt(t,e,n){let{$$slots:l={},$$scope:s}=e,i,{link:a}=e,{name:o}=e,{color:c}=e;function u(h){V[h?"unshift":"push"](()=>{i=h,n(3,i)})}return t.$$set=h=>{"link"in h&&n(0,a=h.link),"name"in h&&n(1,o=h.name),"color"in h&&n(2,c=h.color),"$$scope"in h&&n(4,s=h.$$scope)},[a,o,c,i,s,l,u]}class ie extends B{constructor(e){super(),I(this,e,kt,yt,Z,{link:0,name:1,color:2})}}function ye(t){let e,n,l,s,i,a,o,c,u,h,g,d,v,$,C=t[1].socials.email.split("@")[0]+"",N,S,E,_=t[1].socials.email.split("@")[1]+"",A,F,R,D;return i=new ie({props:{name:"GitHub",link:`https://github.com/${t[1].socials.github}`,color:"#171515",$$slots:{default:[Et]},$$scope:{ctx:t}}}),o=new ie({props:{name:"Reddit",link:`https://reddit.com/u/${t[1].socials.reddit}`,color:"#FF5700",$$slots:{default:[jt]},$$scope:{ctx:t}}}),u=new ie({props:{name:"Discord",link:"https://discord.gg/Pw9xvu3fwV",color:"#5865F2",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){e=m("div"),n=m("h2"),n.textContent="Socials",l=y(),s=m("div"),q(i.$$.fragment),a=y(),q(o.$$.fragment),c=y(),q(u.$$.fragment),h=y(),g=m("h2"),g.textContent="Contact me",d=y(),v=m("div"),$=m("span"),N=K(C),S=m("span"),S.textContent="@",E=m("span"),A=K(_),r(n,"class","svelte-1a71cyl"),r(s,"class","svelte-1a71cyl"),r(g,"class","svelte-1a71cyl"),r($,"class","svelte-1a71cyl"),r(S,"class","svelte-1a71cyl"),r(E,"class","svelte-1a71cyl"),r(v,"class","email svelte-1a71cyl"),r(e,"data-animate-container",""),r(e,"class","fade top svelte-1a71cyl")},m(b,P){L(b,e,P),f(e,n),f(e,l),f(e,s),H(i,s,null),f(s,a),H(o,s,null),f(s,c),H(u,s,null),f(e,h),f(e,g),f(e,d),f(e,v),f(v,$),f($,N),f(v,S),f(v,E),f(E,A),t[4](e),F=!0,R||(D=Be(v,"click",t[3]),R=!0)},p(b,P){const ne={};P&2&&(ne.link=`https://github.com/${b[1].socials.github}`),P&32&&(ne.$$scope={dirty:P,ctx:b}),i.$set(ne);const le={};P&2&&(le.link=`https://reddit.com/u/${b[1].socials.reddit}`),P&32&&(le.$$scope={dirty:P,ctx:b}),o.$set(le);const de={};P&32&&(de.$$scope={dirty:P,ctx:b}),u.$set(de),(!F||P&2)&&C!==(C=b[1].socials.email.split("@")[0]+"")&&re(N,C),(!F||P&2)&&_!==(_=b[1].socials.email.split("@")[1]+"")&&re(A,_)},i(b){F||(w(i.$$.fragment,b),w(o.$$.fragment,b),w(u.$$.fragment,b),F=!0)},o(b){k(i.$$.fragment,b),k(o.$$.fragment,b),k(u.$$.fragment,b),F=!1},d(b){b&&j(e),T(i),T(o),T(u),t[4](null),R=!1,D()}}}function Et(t){let e,n;return e=new Ne({}),{c(){q(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){T(e,l)}}}function jt(t){let e,n;return e=new $t({}),{c(){q(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){T(e,l)}}}function Lt(t){let e,n;return e=new wt({}),{c(){q(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},i(l){n||(w(e.$$.fragment,l),n=!0)},o(l){k(e.$$.fragment,l),n=!1},d(l){T(e,l)}}}function St(t){let e,n,l,s=t[1]&&ye(t);return{c(){e=m("section"),n=m("div"),s&&s.c(),r(n,"class","svelte-1a71cyl"),r(e,"id","socials"),r(e,"class","svelte-1a71cyl")},m(i,a){L(i,e,a),f(e,n),s&&s.m(n,null),l=!0},p(i,[a]){i[1]?s?(s.p(i,a),a&2&&w(s,1)):(s=ye(i),s.c(),w(s,1),s.m(n,null)):s&&(U(),k(s,1,1,()=>{s=null}),W())},i(i){l||(w(s),l=!0)},o(i){k(s),l=!1},d(i){i&&j(e),s&&s.d()}}}function At(t,e,n){let l,s;const i=c=>{const h=c.currentTarget.children,g=document.createRange();g.selectNodeContents(h[0]),g.setEnd(h[2],1);const d=window.getSelection();d==null||d.removeAllRanges(),d==null||d.addRange(g)},a=c=>i(c);function o(c){V[c?"unshift":"push"](()=>{s=c,n(0,s)})}return t.$$.update=()=>{t.$$.dirty&1&&qe().then(c=>{try{n(1,l=c);for(let u=0;u<s.children.length;u++){const h=s.children[u],g=(h.getAttribute("data-animate-delay")?parseInt(h.getAttribute("data-animate-delay")):0)+(s.getAttribute("data-animate-delay")?parseInt(s.getAttribute("data-animate-delay")):0);h.style.transitionDelay=`${400*(u+1)+g}ms`,window.observer.observe(h)}}catch{}})},[s,l,i,a,o]}class Mt extends B{constructor(e){super(),I(this,e,At,St,Z,{})}}function Ht(t){let e,n,l,s,i,a,o,c,u,h,g;return e=new it({}),s=new nt({}),a=new Qe({props:{bottom:!0,right:!0}}),c=new pt({}),h=new Mt({}),{c(){q(e.$$.fragment),n=y(),l=m("main"),q(s.$$.fragment),i=y(),q(a.$$.fragment),o=y(),q(c.$$.fragment),u=y(),q(h.$$.fragment)},m(d,v){H(e,d,v),L(d,n,v),L(d,l,v),H(s,l,null),f(l,i),H(a,l,null),f(l,o),H(c,l,null),f(l,u),H(h,l,null),g=!0},p,i(d){g||(w(e.$$.fragment,d),w(s.$$.fragment,d),w(a.$$.fragment,d),w(c.$$.fragment,d),w(h.$$.fragment,d),g=!0)},o(d){k(e.$$.fragment,d),k(s.$$.fragment,d),k(a.$$.fragment,d),k(c.$$.fragment,d),k(h.$$.fragment,d),g=!1},d(d){T(e,d),d&&j(n),d&&j(l),T(s),T(a),T(c),T(h)}}}class Tt extends B{constructor(e){super(),I(this,e,null,Ht,Z,{})}}new Tt({target:document.getElementById("app")});
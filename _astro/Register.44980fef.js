import{S as Ve,i as He,s as Ae,B as Ce,l as _,u as Be,C as Re,d as m,m as x,v as je,g as a,f as te,w as Se,x as qe,y as Pe,z as Ne,h as Ue,j as ze,o as Oe,k as Fe,e as i,c,a as w,q as Ge,b as e,n as Le,t as De,A as P,p as Ie,D as z,E as Y,F as We,r as Me,G as Ke}from"./index.62c63a4e.js";import{c as Ye}from"./appwrite.910d59a0.js";import{h as Ze,a as Je,n as K,l as Qe,b as Xe}from"./storage.1a47b7b4.js";import{W as $e}from"./WidgetWrapper.dd4a4674.js";import"./_commonjsHelpers.725317a4.js";function Ee(n){let r,t;return{c(){r=i("script"),this.h()},l(s){r=c(s,"SCRIPT",{src:!0});var p=w(r);p.forEach(m),this.h()},h(){Ge(r.src,t=n[8])||e(r,"src",t),r.async=!0,r.defer=!0},m(s,p){te(s,r,p)},p:Le,d(s){s&&m(r)}}}function et(n){let r,t="Register your KBVE Account!";return{c(){r=i("h1"),r.textContent=t,this.h()},l(s){r=c(s,"H1",{class:!0,"data-svelte-h":!0}),P(r)!=="svelte-1rn4tp3"&&(r.textContent=t),this.h()},h(){e(r,"class","text-xl font-bold leading-tight tracking-tight gradient-text md:text-2xl")},m(s,p){te(s,r,p)},p:Le,d(s){s&&m(r)}}}function tt(n){let r,t,s,p='<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"></path></svg> <span class="sr-only">Fire icon</span>',u,l,f,y,b,d='<span class="sr-only">Close</span> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg>',C,v;return{c(){r=i("h1"),t=i("div"),s=i("div"),s.innerHTML=p,u=_(),l=i("div"),f=De(n[6]),y=_(),b=i("button"),b.innerHTML=d,this.h()},l(R){r=c(R,"H1",{});var M=w(r);t=c(M,"DIV",{id:!0,class:!0,role:!0});var h=w(t);s=c(h,"DIV",{class:!0,"data-svelte-h":!0}),P(s)!=="svelte-5am7pi"&&(s.innerHTML=p),u=x(h),l=c(h,"DIV",{class:!0});var T=w(l);f=Ie(T,n[6]),T.forEach(m),y=x(h),b=c(h,"BUTTON",{type:!0,class:!0,"data-dismiss-target":!0,"aria-label":!0,"data-svelte-h":!0}),P(b)!=="svelte-1gk004k"&&(b.innerHTML=d),h.forEach(m),M.forEach(m),this.h()},h(){e(s,"class","inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200"),e(l,"class","ml-3 text-sm font-normal capitalize"),e(b,"type","button"),e(b,"class","ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"),e(b,"data-dismiss-target","#toast-default"),e(b,"aria-label","Close"),e(t,"id","toast-default"),e(t,"class","flex items-center w-full max-w-xs p-4 bg-offset rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"),e(t,"role","alert")},m(R,M){te(R,r,M),a(r,t),a(t,s),a(t,u),a(t,l),a(l,f),a(t,y),a(t,b),C||(v=Y(b,"click",n[9]),C=!0)},p(R,M){M[0]&64&&Me(f,R[6])},d(R){R&&m(r),C=!1,v()}}}function rt(n){let r,t,s,p="Rent",u,l,f,y,b,d,C,v,R="Your email",M,h,T,V,H,re="Your Username",Z,E,O,I,A,F="Password",S,L,J,N,q,ae="Confirm Password",Q,D,X,o,fe,G,ge='<div class="flex items-start"></div> <a href="/account/recovery" class="text-sm font-medium text-secondary hover:underline dark:text-primary-500">Forgot password?</a>',he,U,$,ee=n[1]?"Loading":"Login",se,me,W,be='Have an account yet? <a href="/account/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login!</a>',pe,ye;function ve(g,B){return g[6]?tt:et}let le=ve(n),j=le(n);return{c(){r=i("section"),t=i("div"),s=i("a"),s.textContent=p,u=_(),l=i("div"),f=i("div"),y=i("div"),j.c(),b=_(),d=i("form"),C=i("div"),v=i("label"),v.textContent=R,M=_(),h=i("input"),T=_(),V=i("div"),H=i("label"),H.textContent=re,Z=_(),E=i("input"),O=_(),I=i("div"),A=i("label"),A.textContent=F,S=_(),L=i("input"),J=_(),N=i("div"),q=i("label"),q.textContent=ae,Q=_(),D=i("input"),X=_(),o=i("div"),fe=_(),G=i("div"),G.innerHTML=ge,he=_(),U=i("button"),$=i("span"),se=De(ee),me=_(),W=i("p"),W.innerHTML=be,this.h()},l(g){r=c(g,"SECTION",{class:!0});var B=w(r);t=c(B,"DIV",{class:!0});var ne=w(t);s=c(ne,"A",{href:!0,class:!0,"data-svelte-h":!0}),P(s)!=="svelte-1ngxtgs"&&(s.textContent=p),u=x(ne),l=c(ne,"DIV",{class:!0});var we=w(l);f=c(we,"DIV",{class:!0});var oe=w(f);y=c(oe,"DIV",{class:!0});var ke=w(y);j.l(ke),ke.forEach(m),b=x(oe),d=c(oe,"FORM",{class:!0,action:!0});var k=w(d);C=c(k,"DIV",{});var ie=w(C);v=c(ie,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),P(v)!=="svelte-1avffmu"&&(v.textContent=R),M=x(ie),h=c(ie,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),ie.forEach(m),T=x(k),V=c(k,"DIV",{});var ce=w(V);H=c(ce,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),P(H)!=="svelte-15wap3a"&&(H.textContent=re),Z=x(ce),E=c(ce,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),ce.forEach(m),O=x(k),I=c(k,"DIV",{});var de=w(I);A=c(de,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),P(A)!=="svelte-1jjewb5"&&(A.textContent=F),S=x(de),L=c(de,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,class:!0}),de.forEach(m),J=x(k),N=c(k,"DIV",{});var ue=w(N);q=c(ue,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),P(q)!=="svelte-1hztx1h"&&(q.textContent=ae),Q=x(ue),D=c(ue,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,class:!0}),ue.forEach(m),X=x(k),o=c(k,"DIV",{id:!0,class:!0}),w(o).forEach(m),fe=x(k),G=c(k,"DIV",{class:!0,"data-svelte-h":!0}),P(G)!=="svelte-16lot9q"&&(G.innerHTML=ge),he=x(k),U=c(k,"BUTTON",{type:!0,class:!0});var _e=w(U);$=c(_e,"SPAN",{});var xe=w($);se=Ie(xe,ee),xe.forEach(m),_e.forEach(m),me=x(k),W=c(k,"P",{class:!0,"data-svelte-h":!0}),P(W)!=="svelte-154mv0h"&&(W.innerHTML=be),k.forEach(m),oe.forEach(m),we.forEach(m),ne.forEach(m),B.forEach(m),this.h()},h(){e(s,"href","/#"),e(s,"class","flex items-center mb-6"),e(y,"class","min-h-[100px]"),e(v,"for","email"),e(v,"class","block mb-2 text-sm font-medium"),e(h,"type","email"),e(h,"name","email"),e(h,"id","email"),e(h,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),e(h,"placeholder","name@company.com"),h.required=!0,e(H,"for","username"),e(H,"class","block mb-2 text-sm font-medium"),e(E,"type","text"),e(E,"name","username"),e(E,"id","username"),e(E,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),e(E,"placeholder","Username-chan"),E.required=!0,e(A,"for","password"),e(A,"class","block mb-2 text-sm font-medium"),e(L,"type","password"),e(L,"name","password"),e(L,"id","password"),e(L,"placeholder","••••••••"),e(L,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),L.required=!0,e(q,"for","password"),e(q,"class","block mb-2 text-sm font-medium"),e(D,"type","password"),e(D,"name","confirm"),e(D,"id","confirm"),e(D,"placeholder","••••••••"),e(D,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"),D.required=!0,e(o,"id","h-captcha-"+n[7]),e(o,"class","flex justify-center"),e(G,"class","flex items-center justify-between"),e(U,"type","submit"),e(U,"class","w-full bg-secondary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"),U.disabled=n[1],e(W,"class","text-sm font-light text-primary"),e(d,"class","space-y-4 md:space-y-6"),e(d,"action","#"),e(f,"class","p-6 space-y-4 md:space-y-6 sm:p-8"),e(l,"class","w-full bg-transparent rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"),e(t,"class","flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"),e(r,"class","")},m(g,B){te(g,r,B),a(r,t),a(t,s),a(t,u),a(t,l),a(l,f),a(f,y),j.m(y,null),a(f,b),a(f,d),a(d,C),a(C,v),a(C,M),a(C,h),z(h,n[3]),a(d,T),a(d,V),a(V,H),a(V,Z),a(V,E),z(E,n[2]),a(d,O),a(d,I),a(I,A),a(I,S),a(I,L),z(L,n[5]),a(d,J),a(d,N),a(N,q),a(N,Q),a(N,D),z(D,n[4]),a(d,X),a(d,o),a(d,fe),a(d,G),a(d,he),a(d,U),a(U,$),a($,se),a(d,me),a(d,W),pe||(ye=[Y(h,"input",n[22]),Y(E,"input",n[23]),Y(L,"input",n[24]),Y(D,"input",n[25]),Y(d,"submit",We(n[10]))],pe=!0)},p(g,B){le===(le=ve(g))&&j?j.p(g,B):(j.d(1),j=le(g),j&&(j.c(),j.m(y,null))),B[0]&8&&h.value!==g[3]&&z(h,g[3]),B[0]&4&&E.value!==g[2]&&z(E,g[2]),B[0]&32&&L.value!==g[5]&&z(L,g[5]),B[0]&16&&D.value!==g[4]&&z(D,g[4]),B[0]&2&&ee!==(ee=g[1]?"Loading":"Login")&&Me(se,ee),B[0]&2&&(U.disabled=g[1])},d(g){g&&m(r),j.d(),pe=!1,Ke(ye)}}}function at(n){let r,t,s,p,u=n[0]&&!window?.hcaptcha&&Ee(n);return s=new $e({props:{background:"https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",$$slots:{default:[rt]},$$scope:{ctx:n}}}),{c(){u&&u.c(),r=Ce(),t=_(),Be(s.$$.fragment)},l(l){const f=Re("svelte-1fvsnp3",document.head);u&&u.l(f),r=Ce(),f.forEach(m),t=x(l),je(s.$$.fragment,l)},m(l,f){u&&u.m(document.head,null),a(document.head,r),te(l,t,f),Se(s,l,f),p=!0},p(l,f){l[0]&&!window?.hcaptcha?u?u.p(l,f):(u=Ee(l),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null);const y={};f[0]&126|f[1]&8&&(y.$$scope={dirty:f,ctx:l}),s.$set(y)},i(l){p||(qe(s.$$.fragment,l),p=!0)},o(l){Pe(s.$$.fragment,l),p=!1},d(l){l&&m(t),u&&u.d(l),m(r),Ne(s,l)}}}var Te=(n=>(n.DARK="dark",n.LIGHT="light",n))(Te||{});function st(n,r,t){let s;Ue(n,Xe,o=>t(6,s=o));const p=ze();let{redirect:u=!1}=r,{sitekey:l=Ze}=r,{apihost:f=Je}=r,{hl:y=""}=r,{reCaptchaCompat:b=!1}=r,{theme:d=Te.DARK}=r,{size:C="compact"}=r;const v=()=>{h&&T&&V&&hcaptcha.reset(V)},R=o=>{if(h&&T&&V)return hcaptcha.execute(V,o)},M=Math.floor(Math.random()*100);let h=!1,T=!1,V,H;const re=new URLSearchParams({recaptchacompat:b?"on":"off",onload:"hcaptchaOnLoad",render:"explicit"}),Z=`${f}?${re.toString()}`;Oe(()=>{l||t(11,l=window.sitekey),window.hcaptchaOnLoad=()=>{p("load"),t(20,T=!0)},window.onSuccess=o=>{p("success",{token:o})},window.onError=()=>{p("error")},window.onClose=()=>{p("close")},window.onExpired=()=>{p("expired"),v()},p("mount"),t(0,h=!0)}),Fe(()=>{window.hcaptchaOnLoad=null,window.onSuccess=null,T&&(hcaptcha=null)});let E=new RegExp(/^[a-z0-9]+$/i),O=!1,I="",A="",F="",S="";const L=async()=>{K("")},J=()=>I.length<8?(K("username has to be 8 or more characters"),v(),!1):E.test(I)?F!=S?(K("passwords do not match"),v(),!1):S.length<8?(K("password has to be at least 8 characters or stronger "),v(),!1):!0:(K("username has to be alpha-numeric a-Z and 0-9 only "),v(),!1),N=async()=>{J()&&q()},q=async()=>{try{t(1,O=!0),await Ye(A,S,I),u&&location.assign("/account/login")}catch(o){o instanceof Error&&(Qe(o.message),K(o.message))}finally{t(1,O=!1)}};function ae(){A=this.value,t(3,A)}function Q(){I=this.value,t(2,I)}function D(){S=this.value,t(5,S)}function X(){F=this.value,t(4,F)}return n.$$set=o=>{"redirect"in o&&t(12,u=o.redirect),"sitekey"in o&&t(11,l=o.sitekey),"apihost"in o&&t(13,f=o.apihost),"hl"in o&&t(14,y=o.hl),"reCaptchaCompat"in o&&t(15,b=o.reCaptchaCompat),"theme"in o&&t(16,d=o.theme),"size"in o&&t(17,C=o.size)},n.$$.update=()=>{n.$$.dirty[0]&3360769&&h&&T&&(V=hcaptcha.render(`h-captcha-${M}`,{sitekey:l,hl:y,theme:d,callback:"onSuccess","error-callback":"onError","close-callback":"onClose","expired-callback":"onExpired",size:C}),t(21,H=window.document.getElementById("skeleton")),H&&H.remove())},[h,O,I,A,F,S,s,M,Z,L,N,l,u,f,y,b,d,C,v,R,T,H,ae,Q,D,X]}class dt extends Ve{constructor(r){super(),He(this,r,st,at,Ae,{redirect:12,sitekey:11,apihost:13,hl:14,reCaptchaCompat:15,theme:16,size:17,reset:18,execute:19},null,[-1,-1])}get reset(){return this.$$.ctx[18]}get execute(){return this.$$.ctx[19]}}export{dt as default};

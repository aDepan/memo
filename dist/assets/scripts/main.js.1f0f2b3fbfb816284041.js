!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/assets/scripts/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r=0,l=0,o=0,s=[];function d(e){let t=e.getAttribute("id");if(!e.classList.contains("confirmed")){if(L[t-1].classList.add(g[t-1]+"-card"),L[t-1].classList.remove("backside"),s.push(L[t-1]),2===s.length){r++;let e=document.getElementById(s[0].id),t=document.getElementById(s[1].id);s[0].classList.value===s[1].classList.value?s[0].id!==s[1].id?(e.classList.add("confirmed"),t.classList.add("confirmed"),s=[],l++):s.pop():(s=[],setTimeout(()=>{e.className="card backside",t.className="card backside"},800))}l===E&&(o=r,f("win"),l=0,r=0)}}const i=document.getElementById("backdrop"),c=document.getElementById("rules-window"),a=document.getElementById("helper");function u(){const e=document.querySelector("#rules-window button");i.style.display="block",c.style.display="block",i.addEventListener("click",m),e.addEventListener("click",m)}const m=()=>{i.style.display="none",c.style.display="none"};function f(e){let t=document.getElementById("memo-helper-text");switch(e){case"rules":t.textContent="Do you know how to play? \n No? Click me!",a.addEventListener("click",u);break;case"win":a.removeEventListener("click",u),t.textContent=`Congrats! You've found all pairs! \n It took ${o} steps for you.`,a.style.display="none",setTimeout(()=>{a.style.display="block"},5);break;case"again":t.textContent="You can do it!";break;case"designerMode":t.textContent="Find all green cards!";break;default:t.textContent="Hi! I'm mr.Memo. Let's play!"}}const y=["red","yellow","blue","pink","green","lightblue","brown","darkgreen","purple","lime"],p=["green0","green1","green2","green3","green4","green5","green6","green7","green8","green9"],g=[];const b=document.getElementById("cards"),k=document.getElementById("greet"),v=document.getElementById("helper"),h=document.getElementById("levels");let E,L;document.getElementById("selected-levels").addEventListener("click",(function(){L=null,f("rules"),k.style.display="none",v.style.display="block",b.firstChild&&(f("again"),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(b));const e=function(e){let t,n="basic";switch(e){case"easy":t=4;break;case"medium":t=6;break;case"hard":t=10;break;case"designer":t=10,n="design";break;default:t=4}return[t,n]}(h.value);E=e[0];let t=function(e){let t;return"design"===e?(t=p,f("designerMode")):t=y,t}(e[1]);b.style.gridTemplateColumns=E>8?"repeat(5, 130px)":"repeat(4, 130px)";for(let e=1;e<=2*E;e++){const t=document.createElement("div");t.classList.add("card","backside"),t.classList.add("card"),t.setAttribute("id",e),b.appendChild(t)}L=document.querySelectorAll(".card"),L.forEach(e=>e.addEventListener("click",d.bind(null,e))),function(e){let t;for(g.length=0;g.length<2*E;){let n=Math.random()*(E-1);n=n.toFixed(0),t=e[n],g.filter(e=>e==t).length<2&&g.push(t)}}(t)}))}]);
//# sourceMappingURL=main.js.1f0f2b3fbfb816284041.js.map
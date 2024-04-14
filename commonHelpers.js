import{S as m,N as f,a as p,A as v,i as y}from"./assets/vendor-7cbc7288.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();new m(".about-swiper",{loop:!0,loopSlides:6,spaceBetween:0,keyboard:{enabled:!0},mousewheel:{invert:!0},modules:[f],navigation:{nextEl:".about__swiper-button-next"},breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});async function E(){const r="https://portfolio-js.b.goit.study/api/reviews";return(await p.get(r)).data}async function h(e){const s="https://portfolio-js.b.goit.study/api/requests";return(await p.post(s,e)).data}const g=document.querySelector(".content"),d=document.querySelectorAll(".marquee__line");function L(e){return e.getBoundingClientRect().y<0}window.addEventListener("scroll",e=>{L(g)?d.forEach(t=>t.classList.add("animate-block")):d.forEach(t=>t.classList.remove("animate-block"))});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-accordion").forEach(t=>{t.addEventListener("click",function(){const r=this.querySelector(".faq-arrow"),s=this.nextElementSibling;r.classList.toggle("rotate"),s.classList.toggle("visually-hidden")})}),new v(".faq-section",{duration:400,showFirstItem:!1})});const w=document.querySelector(".reviews-main-list"),b=document.querySelector(".swiper");function S({avatar_url:e,author:t,review:r}){return`<li class="reviews-item swiper-slide">
            
              <img class="reviews-avatar" src="${e}" alt="" width="48" height="48" />
              <h3 class="reviews-item-title">${t}</h3>
              <p class="reviews-item-text">
                ${r}
              </p>
           
          </li>`}function q(e){return e.map(S).join("")}function B(){const e=document.createElement("li"),t=document.createElement("span");e.classList.add("reviews-item-error"),t.textContent="Not found",t.classList.add("reviews-text-error"),e.appendChild(t),w.appendChild(e)}document.addEventListener("DOMContentLoaded",I);async function I(){try{const e=await E(),t=q(e);w.insertAdjacentHTML("beforeend",t)}catch(e){console.error("Error occurred while fetching reviews:",e),B(),y.info({close:!1,position:"topRight",message:"Sorry, an error occurred while fetching reviews. Please try later!"})}}new m(b,{modules:[f],slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2,spaceBetween:18},1440:{slidesPerView:4,spaceBetween:16}},direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},disabledClass:"swiper-button-disabled"});const a=document.querySelector(".footer-modal"),i=document.getElementById("cooperation-comment-form"),P=document.getElementById("email"),N=document.getElementById("comment");i.addEventListener("submit",async function(e){if(e.preventDefault(),_(P.value)&&N.value.trim()!==""){const t=i.elements.email.value,r=i.elements.comment.value;await h({email:t,comment:r});try{x(),i.reset()}catch{console.log(err)}}});function _(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function x(){a.classList.remove("visually-hidden"),setTimeout(()=>a.classList.add("visually-hidden"),5e3)}const A=document.querySelector(".footer-close-btn"),u=document.querySelector(".footer-modal");A.addEventListener("click",l);u.addEventListener("click",function(e){e.target===u&&l()});document.addEventListener("keydown",function(e){e.key==="Escape"&&l()});function l(){a.classList.add("visually-hidde")}
//# sourceMappingURL=commonHelpers.js.map

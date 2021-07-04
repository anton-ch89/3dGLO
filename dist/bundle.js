(()=>{"use strict";const e=function(){var e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn");e.style.display="block",e.style.left="-".concat(e.clientWidth,"px"),t.style.left="-".concat(t.clientWidth,"px");var o=0,c=function n(){o+=40;var c=requestAnimationFrame(n),r=document.documentElement.clientWidth;o<=r/2&&r>768?(e.style.left="0px",t.style.left=o-t.clientWidth/2+50+"px"):(e.style.left="0px",t.style.left=r/2-t.clientWidth/2+50+"px",cancelAnimationFrame(c))},r=function n(){o-=15;var c=requestAnimationFrame(n),r=document.documentElement.clientWidth;o>=-t.clientWidth/2&&r>768?(t.style.left=o-t.clientWidth/2+50+"px",e.style.left="-".concat(e.clientWidth,"px")):(t.style.left="-".concat(t.clientWidth,"px"),e.style.left="-".concat(e.clientWidth,"px"),cancelAnimationFrame(c))};n.forEach((function(t){t.addEventListener("click",(function(){c()})),e.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?r():(t=t.closest(".popup-content"))||r()}))}))};var t,n,o,c,r,a,i,l,u,s,d,f,m,v,p,h,y,g;p=document.querySelector("#timer-hours"),h=document.querySelector("#timer-minutes"),y=document.querySelector("#timer-seconds"),g=setInterval((function(){var e,t,n,o,c=(e=(new Date("28 june 2021 10:08:30").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),(o=Math.floor(e/60/60))<0&&n<0&&t<0&&(t="00",n="00",o="00"),(o<10||n<10||t<10)&&(t=("0"+t).slice(-2),n=("0"+n).slice(-2),o=("0"+o).slice(-2)),{timeRemaining:e,hours:o,minutes:n,seconds:t});c.timeRemaining>0?(p.textContent=c.hours,h.textContent=c.minutes,y.textContent=c.seconds):clearInterval(g)}),1e3),d=document.querySelector("menu"),f=document.querySelector("body"),m=0,v=function e(){m+=40;var t=requestAnimationFrame(e),n=document.documentElement.clientWidth;m<=n&&n>768?d.style.left=m+"px":(d.style.left=n+"px",cancelAnimationFrame(t))},f.addEventListener("click",(function(e){var t=e.target;t.classList.contains("close-btn")||t.closest("ul>li>a")?(e.preventDefault(),d.style.left="-".concat(d.clientWidth,"px"),m=0):t.closest(".menu")?v():(t=t.closest("menu"))||(d.style.left="-".concat(d.clientWidth,"px"),m=0)})),e(),l=document.querySelectorAll("ul>li>a"),u=document.querySelector("main>a"),s=function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth"})}))},l.forEach((function(e){s(e)})),s(u),r=document.querySelector(".service-header"),a=r.querySelectorAll(".service-header-tab"),i=document.querySelectorAll(".service-tab"),r.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&a.forEach((function(e,n){e===t&&function(e){for(var t=0;t<i.length;t++)e===t?(a[t].classList.add("active"),i[t].classList.remove("d-none")):(a[t].classList.remove("active"),i[t].classList.add("d-none"))}(n)}))})),function(){var e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content")),n=document.querySelector(".portfolio-dots");!function(){n.insertAdjacentHTML("afterbegin",'<li class="dot dot-active"></li>');for(var t=0;t<e.length-1;t++)n.insertAdjacentHTML("beforeend",'<li class="dot"></li>')}();var o,c=document.querySelectorAll(".dot"),r=0,a=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)},l=function(){a(e,r,"portfolio-item-active"),a(c,r,"dot-active"),++r>=e.length&&(r=0),i(e,r,"portfolio-item-active"),i(c,r,"dot-active")},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;o=setInterval(l,e)};t.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".portfolio-btn, .dot")&&(a(e,r,"portfolio-item-active"),a(c,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&c.forEach((function(e,t){e===n&&(r=t)})),r>=e.length&&(r=0),r<0&&(r=e.length-1),i(e,r,"portfolio-item-active"),i(c,r,"dot-active"))})),t.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(o)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(3e3)}(),document.querySelectorAll(".command__photo").forEach((function(e){e.addEventListener("mouseenter",(function(e){e.target.src=e.target.dataset.img}))})),document.querySelectorAll("input.calc-item").forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/\D/g,"")}))})),t=document.querySelectorAll("#form1-name, #form2-name, #form3-name"),n=document.querySelectorAll("#form1-email, #form2-email, #form3-email"),o=document.querySelectorAll("#form1-phone, #form2-phone, #form3-phone"),c=document.querySelector("#form2-message"),t.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-я\s]{2,}/i,""),e.addEventListener("blur",(function(){e.value=e.value.replace(/[^а-я\s]{2,}/gi,"").replace(/^[ \s]+|[ \s]+$/g,"").replace(/^[-]+|[-]+$/g,"").replace(/\s+/g," ").replace(/-+/g,"-").split(" ").map((function(e){if(e)return e[0].toUpperCase()+e.slice(1).toLowerCase()})).join(" ")}))}))})),n.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^a-z@_.!`*-~']|[0-9]/gi,""),e.addEventListener("blur",(function(){e.value=e.value.replace(/[^a-z@_.!`*-~']|[0-9]/gi,"").replace(/^[ \s]+|[ \s]+$/g,"").replace(/^[-]+|[-]+$/g,"").replace(/\s+/g," ").replace(/-+/g,"-")}))}))})),o.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^0-9\+]{7,11}/,""),e.addEventListener("blur",(function(){e.value=e.value.replace(/[^0-9\+]{7,11}/g,"")}))}))})),c.addEventListener("input",(function(){c.value=c.value.replace(/[^а-я\s-,:;!\?\.0-9]/i,""),c.addEventListener("blur",(function(){c.value=c.value.replace(/[^а-я\s-,:;!\?\.0-9]/gi,"").replace(/^[ \s]+|[ \s]+$/g,"").replace(/^[-]+|[-]+$/g,"").replace(/\s+/g," ").replace(/-+/g,"-")}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),c=document.querySelector(".calc-day"),r=document.querySelector(".calc-count"),a=document.querySelector("#total");a.innerHTML=0;var i=function(){var t=0,i=1,l=1,u=n.value,s=+o.value;r.value>1&&(i+=(+r.value-1)/10),c.value&&c.value<5?l*=2:c.value&&c.value<10&&(l*=1.5),u&&s&&(t=e*u*s*i*l),a.textContent=t};t.addEventListener("change",(function(e){var t=e.target;(t.matches("input")||t.matches("select"))&&i()}))}(100),function(){var t="Что-то пошло не так",n="Загрузка...",o="Спасибо! Мы скоро с Вами свяжемся",c=document.querySelector("#form1"),r=document.querySelector("#form2"),a=document.querySelector("#form3"),i=document.createElement("div");i.style.cssText="font-size: 2rem;",c.addEventListener("submit",(function(e){e.preventDefault(),c.append(i),i.textContent=n;var r=new FormData(c),a={};r.forEach((function(e,t){a[t]=e})),l(a).then((function(e){if(200!==e.status)throw new Error("status network is not 200");i.textContent=o,setTimeout((function(){i.remove()}),3e3)})).catch((function(e){i.textContent=t,setTimeout((function(){i.remove()}),3e3),console.error(e)})),c.reset()})),r.addEventListener("submit",(function(e){e.preventDefault(),r.insertAdjacentElement("afterend",i),i.textContent=n;var c=new FormData(r),a={};c.forEach((function(e,t){a[t]=e})),l(a).then((function(e){if(200!==e.status)throw new Error("status network is not 200");i.textContent=o,setTimeout((function(){i.remove()}),3e3)})).catch((function(e){i.textContent=t,setTimeout((function(){i.remove()}),3e3),console.error(e)})),r.reset()})),a.addEventListener("submit",(function(c){c.preventDefault(),i.style.cssText="font-size: 2rem; color: #fff;",a.insertAdjacentElement("afterend",i),i.textContent=n;var r=new FormData(a),u={};r.forEach((function(e,t){u[t]=e})),l(u).then((function(t){if(200!==t.status)throw new Error("status network is not 200");i.textContent=o,setTimeout((function(){i.remove(),e()}),2e3)})).catch((function(n){i.textContent=t,setTimeout((function(){i.remove(),e()}),3e3),console.error(n)})),a.reset()}));var l=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}}()})();
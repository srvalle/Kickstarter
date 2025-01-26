const e=document.querySelector(".features__nav__buttons--prev"),t=document.querySelector(".features__nav__buttons--next");e.addEventListener("click",()=>{s(n+=-1)}),t.addEventListener("click",()=>{s(n+=1)});let n=1;function s(e){let t=document.getElementsByClassName("features__slides"),s=document.querySelector(".features__nav__numbers");document.querySelector(".features__nav__numbers__container").remove(),e>t.length&&(n=1),e<1&&(n=t.length);for(let e=0;e<t.length;e++)t[e].style.display="none";t[n-1].style.display="block",s.insertAdjacentHTML("beforeend",`
      <div class="features__nav__numbers__container">
        <span class="features__nav__numbers--active">0${n}</span> / 0${t.length}
      </div>
  `)}
//# sourceMappingURL=index.0a8854e8.js.map

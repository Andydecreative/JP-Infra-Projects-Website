document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }
});

// JP INFRA service carousel (progressively enhanced; accessible controls)
(() => {
 const slider=document.querySelector('[data-services-slider]'); if(!slider)return;
 const slides=[...slider.querySelectorAll('.service-slide')], dots=[...slider.querySelectorAll('[data-go-slide]')], current=slider.querySelector('[data-current-slide]');
 let index=0, timer; const set=(n)=>{index=(n+slides.length)%slides.length;slides.forEach((s,i)=>{s.classList.toggle('active',i===index);s.setAttribute('aria-hidden',i===index?'false':'true')});dots.forEach((d,i)=>{d.classList.toggle('active',i===index);d.setAttribute('aria-current',i===index?'true':'false')});if(current)current.textContent=String(index+1).padStart(2,'0');};
 slider.querySelector('.service-prev')?.addEventListener('click',()=>set(index-1));slider.querySelector('.service-next')?.addEventListener('click',()=>set(index+1));dots.forEach(d=>d.addEventListener('click',()=>set(Number(d.dataset.goSlide))));
 const start=()=>{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(()=>set(index+1),7000)};const stop=()=>clearInterval(timer);slider.addEventListener('mouseenter',stop);slider.addEventListener('mouseleave',start);slider.addEventListener('focusin',stop);slider.addEventListener('focusout',start);start();
 let touchX=0;slider.addEventListener('touchstart',e=>touchX=e.changedTouches[0].screenX,{passive:true});slider.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchX;if(Math.abs(dx)>50)set(index+(dx<0?1:-1)},{passive:true});
})();

(() => {
 const header=document.querySelector('.site-header');
 const menu=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.nav');
 const setScroll=()=>header?.classList.toggle('scrolled',window.scrollY>24);
 setScroll();window.addEventListener('scroll',setScroll,{passive:true});
 menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.classList.toggle('active',open);menu.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.classList.remove('active');menu?.setAttribute('aria-expanded','false');document.body.style.overflow='';}));
 const items=document.querySelectorAll('.reveal');
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -30px 0px'});items.forEach(el=>observer.observe(el));}else items.forEach(el=>el.classList.add('visible'));
 document.querySelectorAll('img').forEach(img=>{if(!img.hasAttribute('loading')&&!img.closest('.hero'))img.setAttribute('loading','lazy')});
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
})();

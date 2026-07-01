const navToggle=document.querySelector('.nav-toggle');const navLinks=document.querySelector('.nav-links');const links=[...document.querySelectorAll('.nav-links a')];navToggle?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});links.forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');navToggle?.setAttribute('aria-expanded','false');}));
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}})},{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const sections=[...document.querySelectorAll('main section[id]')];const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${entry.target.id}`));}})},{rootMargin:'-45% 0px -50% 0px'});sections.forEach(section=>sectionObserver.observe(section));
const topButton=document.querySelector('.back-to-top');window.addEventListener('scroll',()=>{topButton.classList.toggle('show',window.scrollY>700);});topButton?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', event => {
    if (event.target.closest('a')) return;
    const url = card.dataset.url;
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  });
});

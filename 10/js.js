const bg=document.querySelector('.bg');

window.addEventListener('scroll',()=>{
bg.style.opacity=1-window.scrollY/600;
});
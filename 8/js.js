const btn=document.querySelector('.btn');
const sidebar=document.querySelector('.side-bar');

btn.addEventListener('click',()=>{
sidebar.classList.toggle('active');
btn.classList.toggle('active');
});
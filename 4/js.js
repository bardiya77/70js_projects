const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

// btn.addEventListener('click',function(){
// search.classList.toggle('active');
// input.focus();
// });

btn.addEventListener('click', active = () => {
    search.classList.toggle('active');
    input.focus();
});


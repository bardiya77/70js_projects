const totop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        totop.classList.add('active');
    } else {
        totop.classList.remove('active');
    }
});
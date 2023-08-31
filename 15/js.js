const imgbox=document.querySelector('.imgbox');
const slides =imgbox.getElementsByTagName('img');
let i=0;

function prevslide(){
    slides[i].classList.remove('active');
    i=(i+1)%slides.length;
    slides[i].classList.add('active');
}

function nextslide(){
    slides[i].classList.remove('active');
    i=(i-1+slides.length)%slides.length;
    slides[i].classList.add('active');
}
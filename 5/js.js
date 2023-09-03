const fullPageMenu=document.querySelector('.fullPageMenu');
const menuIcon=document.querySelector('.menuIcon');

const li1=document.querySelector('#li1');
const li2=document.querySelector('#li2');
const li3=document.querySelector('#li3');
const li4=document.querySelector('#li4');
const li5=document.querySelector('#li5');


menuIcon.addEventListener('click', active = () => {
    fullPageMenu.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

// ---------------------------------------------
li1.addEventListener('mousemove', change = () => {
    document.querySelector('#img').src="../asset/images/1.jpg"
});

li2.addEventListener('mousemove', change = () => {
    document.querySelector('#img').src="../asset/images/2.jpg"
});

li3.addEventListener('mousemove', change = () => {
    document.querySelector('#img').src="../asset/images/3.jpg"
});

li4.addEventListener('mousemove', change = () => {
    document.querySelector('#img').src="../asset/images/4.jpg"
});

li5.addEventListener('mousemove', change = () => {
    document.querySelector('#img').src="../asset/images/5.jpg"
});
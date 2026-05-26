const menu = document.getElementById('menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click',()=>{
    menu.classList.toggle('open');
})
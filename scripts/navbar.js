const btn = document.querySelector('.menu-responsivo'); // menu responsivo DOM
const menu = document.querySelector('.navbar-nav'); // menu navegaçao


// Ativar e desativar menu
btn.addEventListener('click', () => {
    menu.classList.add('nav-responsivo');
})

menu.addEventListener('click', () => {
    menu.classList.remove('nav-responsivo');  
})
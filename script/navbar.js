var hamburguer = document.querySelector(".hamburguer");
var navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener('click', () => {
    
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');

});
const burgerMenu = document.querySelector('.burger-menu');
const crossIcon = document.querySelector('cross-menu');
const sectionsLinks = document.querySelectorAll('mobile-menu-item');
const burgerImg = document.querySelector('burger-menu-img');
function toggleMenu() {
    burgerImg.classList.toggle('burger-menu-toggle');
}
burgerMenu.addEventListener('click', toggleMenu);

let burgerMenuToggle = document.querySelector('.burger-menu-toggle');
let burgerMenu = document.querySelector('.burger-menu');
let crossMenu = document.querySelector('.cross-menu');
  
    burgerMenuToggle.addEventListener('click', function () {
      burgerMenu.style.left = '0';
    });
  
    crossMenu.addEventListener('click', function () {
      burgerMenu.style.left = '100%';
    });

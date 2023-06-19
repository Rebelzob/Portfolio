<<<<<<< HEAD
=======
document.addEventListener('DOMContentLoaded', function () {
    var burgerMenuToggle = document.querySelector('.burger-menu-toggle');
    var burgerMenu = document.querySelector('.burger-menu');
    var crossMenu = document.querySelector('.cross-menu');
  
    burgerMenuToggle.addEventListener('click', function () {
      burgerMenu.style.left = '0';
    });
  
    crossMenu.addEventListener('click', function () {
      burgerMenu.style.left = '100%';
    });
  });
  
>>>>>>> f4007350a4266321a880bc5a3d3846765bceac91

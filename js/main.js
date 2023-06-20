const burgerMenuToggle = document.querySelector('.burger-menu-toggle');
const burgerMenu = document.querySelector('.burger-menu');
const crossMenu = document.querySelector('.cross-menu');
const mobileItems = document.querySelectorAll('.mobile-menu-item');

// toggle burger menu
burgerMenuToggle.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu-hidden');
});

// hide burger menu
crossMenu.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu-hidden');
});

// links to sections
mobileItems.forEach((item) => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      burgerMenu.classList.add('burger-menu-hidden');
    }
  });
});

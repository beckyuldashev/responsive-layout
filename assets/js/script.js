const menuOpenBtn = document.getElementById('open-menu');
const menu = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav__link');


menuOpenBtn.addEventListener('click', () => {
  menu.classList.toggle('nav--visible');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('nav--visible');
  });
});
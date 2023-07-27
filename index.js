const burgerButton = document.querySelector('.burger-btn');
const menu = document.querySelector('.burger-container');
const closeButton = document.querySelector('.burger-container__close-btn');
const body = document.querySelector('body');


burgerButton.addEventListener('click', function () {
    menu.classList.add('burger-container_opened');
    body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', function () {
    menu.classList.remove('burger-container_opened');
    body.style.overflow = 'auto';
});


const menuLinks = document.querySelectorAll('.burger-menu__link');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('burger-container_opened');
        body.style.overflow = 'auto';
    });
});





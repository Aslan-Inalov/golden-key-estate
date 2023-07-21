const burgerButton = document.querySelector('.burger-btn');
const menu = document.querySelector('.burger-container');
const closeButton = document.querySelector('.burger-container__close-btn');

burgerButton.addEventListener('click', function () {
    menu.classList.add('burger-container_opened');
});

closeButton.addEventListener('click', function () {
    menu.classList.remove('burger-container_opened');
    menu.scrollTop = 0;
});


const menuLinks = document.querySelectorAll('.burger-menu__link');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('burger-container_opened');
    });
});





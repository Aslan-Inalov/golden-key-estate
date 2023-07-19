const burgerButton = document.querySelector('.burger-btn');
const menu = document.querySelector('.burger-container');
const closeButton = document.querySelector('.burger-container__close-btn');
const overlay = document.querySelector('.burger-overlay');

burgerButton.addEventListener('click', function () {
    menu.classList.add('burger-container_opened');
    overlay.classList.toggle('active');
});

closeButton.addEventListener('click', function () {
    menu.classList.remove('burger-container_opened');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', function () {
    menu.classList.remove('burger-container_opened');
    overlay.classList.remove('active');
});



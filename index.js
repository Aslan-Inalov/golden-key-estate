const burgerButton = document.querySelector('.burger-btn');
const headerButton = document.querySelector('.header__button');
const previewButton = document.querySelector('.preview__button');
const advantageButton = document.querySelector('.advantage-button');
const catalogButton = document.querySelector('.more-button');
const askButton = document.querySelector('.footer__ask-btn');
const menu = document.querySelector('.burger-container');
const consultation = document.querySelector('.popup__consultation');
const catalog = document.querySelector('.popup__catalog');
const ask = document.querySelector('.popup__ask');
const more = document.querySelector('.popup__more');
const closeBurger = document.querySelector('.burger-container__close-btn');
const popupCloseElem = document.querySelectorAll('.popup__close-button');
const moreButton = document.querySelectorAll('.more');
const body = document.querySelector('body');

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    body.style.overflow = 'auto';
}

burgerButton.addEventListener('click', function () {
    menu.classList.add('burger-container_opened');
    body.style.overflow = 'hidden';
});

headerButton.addEventListener('click', function () {
    consultation.classList.add('popup_opened');
    body.style.overflow = 'hidden';
});

previewButton.addEventListener('click', function () {
    consultation.classList.add('popup_opened');
    body.style.overflow = 'hidden';
});

advantageButton.addEventListener('click', function () {
    consultation.classList.add('popup_opened');
    body.style.overflow = 'hidden';
});

catalogButton.addEventListener('click', function () {
    catalog.classList.add('popup_opened');
    body.style.overflow = 'hidden';
});

askButton.addEventListener('click', function () {
    ask.classList.add('popup_opened');
    body.style.overflow = 'hidden';
});

moreButton.forEach(button => {
    button.addEventListener('click', () => {
        more.classList.add('popup_opened');
        body.style.overflow = 'hidden';
    });
});



closeBurger.addEventListener('click', function () {
    menu.classList.remove('burger-container_opened');
    body.style.overflow = 'auto';
});

popupCloseElem.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

function handlePopupClose(event) {
    const currentOpenedPopup = document.querySelector('.popup_opened');
    if (event.type === 'keydown' && event.key === 'Escape' && currentOpenedPopup) {
        closePopup(currentOpenedPopup);
    } else if (event.type === 'click' && event.target.classList.contains('popup')) {
        closePopup(currentOpenedPopup);
    }
}

document.addEventListener('keydown', handlePopupClose);
document.addEventListener('click', handlePopupClose);

const menuLinks = document.querySelectorAll('.burger-menu__link');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('burger-container_opened');
        body.style.overflow = 'auto';
    });
});




document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})

document.getElementById("video-thumbnail").addEventListener("click", function() {
    // Создайте элемент iframe для вставки видео
    var videoFrame = document.createElement("iframe");
    videoFrame.src = "https://www.youtube.com/embed/qq2FVXf_rmY";
    videoFrame.width = "100%";
    videoFrame.height = "90%";
    // videoFrame.frameborder = "none";
    videoFrame.allowfullscreen = true;
    // Замените изображение и кнопку на iframe с видео
    var videoContainer = document.getElementsByClassName("video")[0];
    videoContainer.innerHTML = "";
    videoContainer.appendChild(videoFrame);
});


var currentImage = 1; // текущее изображение
var totalImages = 5; // общее количество изображений
function showPrev() {
  var prevImage = currentImage - 1;
  if (prevImage < 1) {
    prevImage = totalImages;
  }
  hideImage(currentImage);
  showImage(prevImage);
  currentImage = prevImage;
}
function showNext() {
  var nextImage = currentImage + 1;
  if (nextImage > totalImages) {
    nextImage = 1;
  }
  hideImage(currentImage);
  showImage(nextImage);
  currentImage = nextImage;
}
function hideImage(imageNumber) {
  var image = document.getElementById('img-' + imageNumber);
  image.classList.remove('visible');
  image.classList.add('hidden');
}
function showImage(imageNumber) {
  var image = document.getElementById('img-' + imageNumber);
  image.classList.remove('hidden');
  image.classList.add('visible');
}

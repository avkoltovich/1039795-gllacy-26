// Модальное окно

var buttonFeedback = document.querySelector('.contacts__button--feed');
var popupWrap = document.querySelector('.modal-wrapper');
var popupModal = popupWrap.querySelector('.contacts__feedback');

var closeButton = popupModal.querySelector('.contacts__button--close');
var formFeedback = popupModal.querySelector('.feedback__form');
var userName = popupModal.querySelector('.feedback__name');
var userEmail = popupModal.querySelector('.feedback__email');
var userText = popupModal.querySelector('.feedback__text');


buttonFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupWrap.classList.add('modal-show');
  userName.focus();
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrap.classList.remove('modal-show');
  popupModal.classList.remove('modal-error');
});

formFeedback.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    popupModal.classList.remove("modal-error");
    popupModal.offsetWidth = popupModal.offsetWidth;
    popupModal.classList.add("modal-error");
  } else {
    userName.focus();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWrap.classList.contains("modal-show")) {
      popupWrap.classList.remove("modal-show");
      popupModal.classList.remove("modal-error");
    }
  }
});

// Yandex карта

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938631, 30.323055],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Gllacy Shop',
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/pointer.svg',
          iconImageSize: [80, 140],
          iconImageOffset: [-40, -140]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
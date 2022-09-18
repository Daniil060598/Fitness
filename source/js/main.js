// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  const buttonVideoPlayElement = document.querySelector('.about-gym__video-play');
  const videoCoverElement = document.querySelector('.about-gym__video-cover');

  buttonVideoPlayElement.addEventListener('click', () => {
    videoCoverElement.style.display = 'none';
    player.playVideo();
  });

  // Tabs
  document.querySelector('.subscription__tabs-triggers').classList.remove('subscription__tabs-triggers_no-js');
  document.querySelector('.tabs__content-list').classList.remove('tabs__content-list_no-js');
  document.querySelectorAll('.tabs__content-item-title').forEach((item) => item.classList.remove('tabs__content-item-title_no-js'));

  const toggleTabs = (evt) => {
    evt.preventDefault();
    const id = evt.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs__triggers-item').forEach(
        (child) => child.classList.remove('tabs__triggers-item_active')
    );

    document.querySelectorAll('.tabs__content-item').forEach(
        (child) => child.classList.remove('tabs__content-item_active')
    );

    evt.target.classList.add('tabs__triggers-item_active');
    document.getElementById(id).classList.add('tabs__content-item_active');
  };

  document.querySelectorAll('.tabs__triggers-item').forEach((item) => {
    item.addEventListener('click', toggleTabs);
  });

  document.querySelector('.tabs__triggers-item').click();

  // Swiper 7.4.1

  const swiper = new Swiper('.trainers__slider', {
  // Optional parameters
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,

    breakpoints: {
      // when window width is >= 768px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.trainers__slider-wrapper .slider-nav_next',
      prevEl: '.trainers__slider-wrapper .slider-nav_prev',
    },
  });

  const swiper2 = new Swiper('.reviews__slider', {
    // Optional parameters
    spaceBetween: 200,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__slider .slider-nav_next',
      prevEl: '.reviews__slider .slider-nav_prev',
    },
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

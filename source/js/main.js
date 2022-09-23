// ---------------------------------
window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  const videoWrapperElement = document.querySelector('.about-gym__video');
  const buttonVideoPlayElement = document.querySelector('.about-gym__video-play');

  videoWrapperElement.classList.remove('about-gym__video_no-js');

  buttonVideoPlayElement.addEventListener('click', () => {
    videoWrapperElement.classList.add('about-gym__video_active');
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

  // Trainers slider

  document.querySelector('.trainers__slider_no-js').classList.remove('trainers__slider_no-js');

  const swiper = new Swiper('.trainers__slider', {
  // Optional parameters
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

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

  // Reviews сarousel

  document.querySelector('.reviews__slider_no-js').classList.remove('reviews__slider_no-js');

  const swiper2 = new Swiper('.reviews__slider', {
    // Optional parameters
    spaceBetween: 200,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__slider .slider-nav_next',
      prevEl: '.reviews__slider .slider-nav_prev',
    },
  });

  // Local Storage

  document.querySelectorAll('.form').forEach((item) => {
    item.addEventListener('submit', () => {
      const inputName = item.querySelector('[data-input-name]');
      const inputTel = item.querySelector('[data-input-tel]');
      localStorage.setItem('name', inputName.value);
      localStorage.setItem('tel', inputTel.value);
    });
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

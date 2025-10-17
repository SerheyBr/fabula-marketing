document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".belive-tabs__trigger");
  const contents = document.querySelectorAll(".belive-tab-content");

  if (!triggers.length || !contents.length) return;

  function setActiveTab(tabId) {
    // Кнопки
    triggers.forEach((btn) => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add("active");
        // Скролл к активной кнопке (для мобильных)
        btn.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      } else {
        btn.classList.remove("active");
      }
    });

    // Контент
    contents.forEach((content) => {
      if (content.dataset.tab === tabId) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  }

  // Инициализация — показываем первый таб по умолчанию
  const firstTab = triggers[0].dataset.tab;
  setActiveTab(firstTab);

  // Клики по кнопкам
  triggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      setActiveTab(tabId);
    });
  });
});

// faq
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-accordeon-item");

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-accordeon-item__trigger");

    trigger.addEventListener("click", () => {
      // Если элемент уже активен — просто закрываем его
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        return;
      }

      // Закрываем все остальные
      faqItems.forEach((el) => el.classList.remove("active"));

      // Открываем текущий
      item.classList.add("active");
    });
  });
});

// проценты в belive
document
  .querySelectorAll(".belive-tab-content-procents-element")
  .forEach((el) => {
    const grayPercent = el.dataset.gray;
    const greenPercent = el.dataset.green;

    const grayImg = el.querySelector(".gray");
    const greenImg = el.querySelector(".green");

    if (grayImg) grayImg.style.clipPath = `inset( ${100 - grayPercent}% 0 0 0)`;
    if (greenImg)
      greenImg.style.clipPath = `inset( ${100 - greenPercent}% 0 0 0)`;
  });

//   фиксированая кнопка в хедере
function updateWhatsAppButton() {
  const wrapper = document.querySelector(".header__wrapper");
  const btn = document.querySelector(".header__btn");

  if (!wrapper || !btn) return;

  const rect = wrapper.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Фиксируем кнопку на том же уровне, что wrapper
  btn.style.top = `${rect.top + scrollTop}px`;

  // Кнопка приклеена к правому краю wrapper
  btn.style.right = `${window.innerWidth - (rect.left + rect.width)}px`;
}

// При загрузке и ресайзе
window.addEventListener("DOMContentLoaded", updateWhatsAppButton);
window.addEventListener("resize", updateWhatsAppButton);
// window.addEventListener("scroll", updateWhatsAppButton); // если нужно

gsap.registerPlugin(ScrollTrigger);

// Собираем нужные элементы в массив
const rings = [
  document.querySelector(".hero-bg__wrapper-small"),
  document.querySelector(".hero-bg__wrapper-big"),
];

// Можем указать разные значения для каждого кольца
const scales = [1.3, 1.6];

rings.forEach((ring, i) => {
  if (!ring) return; // защита, если элемента нет
  gsap.fromTo(
    ring,
    { scale: 1 },
    {
      scale: scales[i], // берем масштаб из массива
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    }
  );
});

// вращение шестеренок секция belive
// Находим оба элемента
const leftRing = document.querySelector(".belive__decore-left--dinamic");
const rightRing = document.querySelector(".belive__decore-right--dinamic");

// Проверяем, что элементы существуют
if (leftRing && rightRing) {
  // Левое кольцо — вращаем против часовой стрелки
  gsap.to(leftRing, {
    rotation: -360, // против часовой
    ease: "none",
    scrollTrigger: {
      trigger: ".belive", // секция, где происходит эффект
      start: "top bottom", // когда секция появляется
      end: "bottom top", // пока не проскроллим
      scrub: true, // плавная синхронизация со скроллом
    },
  });

  // Правое кольцо — вращаем по часовой стрелке
  gsap.to(rightRing, {
    rotation: 360, // по часовой
    ease: "none",
    scrollTrigger: {
      trigger: ".belive",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

// вращение трех шестерень

// Конфигурация шестерёнок
const gears = [
  {
    selector: ".additions__decore--img1", // средняя
    rotation: 720, // угол поворота (можно регулировать)
    speedFactor: 1, // базовая скорость
  },
  {
    selector: ".additions__decore--img2", // большая
    rotation: -360, // против часовой
    speedFactor: 0.6, // медленнее (чем больше, тем медленнее)
  },
  {
    selector: ".additions__decore--img3", // маленькая
    rotation: 1080, // быстрее вращается
    speedFactor: 1.4, // быстрее (чем меньше, тем быстрее)
  },
];

// Анимация с учётом скорости
gears.forEach(({ selector, rotation, speedFactor }) => {
  const el = document.querySelector(selector);

  if (el) {
    gsap.to(el, {
      rotation,
      ease: "none",
      scrollTrigger: {
        trigger: ".additions", // секция, где происходит анимация
        start: "top bottom",
        end: "bottom top",
        scrub: true * speedFactor, // "scrub" можно масштабировать для скорости
      },
    });
  }
});

// круги guranties
ScrollTrigger.matchMedia({
  // Для экранов шире 768px
  "(min-width: 767px)": function () {
    gsap.set(".guarantees-item--1", { x: "100%" });
    gsap.set(".guarantees-item--3", { x: "-100%" });

    gsap.to(".guarantees-item--1", {
      x: "0%",
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".guarantees",
        start: "center 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".guarantees-item--3", {
      x: "0%",
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".guarantees",
        start: "center 80%",
        toggleActions: "play none none reverse",
      },
    });
  },

  // Для экранов уже 768px — ничего не делаем (опционально)
  "(max-width: 768px)": function () {
    // Можно сбросить позиции, если нужно
    gsap.set(".guarantees-item--1, .guarantees-item--3", { clearProps: "all" });
  },
});

const PATH = "assets/images/lottie/";

const heroBg = lottie.loadAnimation({
  container: document.querySelector(".hero-bg__wrapper-main"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "hero.json", // путь к твоему JSON-файлу
});

const mvpCardLottie1 = lottie.loadAnimation({
  container: document.querySelector(".mvp-card__img-lottie-1"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "mvp/1.json", // путь к твоему JSON-файлу
});
const mvpCardLottie2 = lottie.loadAnimation({
  container: document.querySelector(".mvp-card__img-lottie-2"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "mvp/2.json", // путь к твоему JSON-файлу
});
const mvpCardLottie3 = lottie.loadAnimation({
  container: document.querySelector(".mvp-card__img-lottie-3"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "mvp/3.json", // путь к твоему JSON-файлу
});

const guaranteesLottie1 = lottie.loadAnimation({
  container: document.querySelector(".guarantees-item__img-lottie-1"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "guarantees/1.json", // путь к твоему JSON-файлу
});
const guaranteesLottie2 = lottie.loadAnimation({
  container: document.querySelector(".guarantees-item__img-lottie-2"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "guarantees/2.json", // путь к твоему JSON-файлу
});
const guaranteesLottie3 = lottie.loadAnimation({
  container: document.querySelector(".guarantees-item__img-lottie-3"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "guarantees/3.json", // путь к твоему JSON-файлу
});

const pricingLottie1 = lottie.loadAnimation({
  container: document.querySelector(".pricing-item__header-img-lottie-1"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "pricing/1.json", // путь к твоему JSON-файлу
});
const pricingLottie2 = lottie.loadAnimation({
  container: document.querySelector(".pricing-item__header-img-lottie-2"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "pricing/2.json", // путь к твоему JSON-файлу
});
const pricingLottie3 = lottie.loadAnimation({
  container: document.querySelector(".pricing-item__header-img-lottie-3"), // контейнер для анимации
  renderer: "svg", // или 'canvas'
  loop: true,
  autoplay: true,
  path: PATH + "pricing/3.json", // путь к твоему JSON-файлу
});
{
  /* <div class="pricing-item__header-img pricing-item__header-img-lottie-1"></div> */
}

const swiper = new Swiper(".my-slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".my-slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".my-slider__button-next",
    prevEl: ".my-slider__button-prev",
  },
});

// 11111111111111111111111111111111111111111111111111111111111111111111111111
/**
 * Инициализация Swiper слайдера
 *
 * Базовые настройки:
 */
// const swiper = new Swiper(".swiper", {
//   // Основные параметры
//   direction: "horizontal", // Ориентация слайдера ('horizontal' или 'vertical')
//   loop: true, // Бесконечная прокрутка
//   slidesPerView: "auto", // Количество видимых слайдов ('auto' или число)
//   spaceBetween: 20, // Отступ между слайдами (в px)
//   centeredSlides: true, // Центрирование активного слайда
//   speed: 500, // Скорость анимации перехода (мс)

//   // Настройки пагинации (точки)
//   pagination: {
//     el: ".swiper-pagination", // Селектор контейнера для пагинации
//     clickable: true, // Кликабельность точек
//     dynamicBullets: false, // Динамические точки (меняют размер)
//     type: "bullets", // Тип пагинации ('bullets', 'fraction', 'progressbar')
//   },

//   // Настройки навигации (стрелки)
//   navigation: {
//     nextEl: ".swiper-button-next", // Селектор кнопки "Вперед"
//     prevEl: ".swiper-button-prev", // Селектор кнопки "Назад"
//     disabledClass: "swiper-button-disabled", // Класс для неактивных кнопок
//   },

//   // Адаптивность
//   breakpoints: {
//     // Настройки для экранов >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     // Настройки для экранов >= 768px
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     // Настройки для экранов >= 1024px
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },

/**

 *  HTML-структура:
 *    <div class="swiper">
 *      <div class="swiper-wrapper">
 *        <div class="swiper-slide">Слайд 1</div>
 *        <div class="swiper-slide">Слайд 2</div>
 *      </div>
 *      <!-- Пагинация -->
 *      <div class="swiper-pagination"></div>
 *      <!-- Навигация -->
 *      <div class="swiper-button-prev"></div>
 *      <div class="swiper-button-next"></div>
 *    </div>
 *
 */

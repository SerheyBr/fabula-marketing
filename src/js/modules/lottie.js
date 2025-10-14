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

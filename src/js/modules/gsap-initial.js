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

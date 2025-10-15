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

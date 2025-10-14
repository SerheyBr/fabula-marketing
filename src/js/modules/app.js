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

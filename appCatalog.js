// Универсальный обработчик модальных окон
document.addEventListener("DOMContentLoaded", () => {
  // Инициализируем группы кнопок‑модалок для префиксов A и B
  ["A", "B"].forEach(initModalGroup);

  // Модалки, не подпадающие под шаблон
  initIndividualModals();

  // Маска телефона для всех полей с id, начинающимся с phone_mask
  initPhoneMasks();
});

// /
//  * Привязывает обработчики кликов для группы кнопок с одинаковым литерным префиксом
// @param {"A"|"B"} 

function initModalGroup(prefix) {
  // Находим все кнопки вроде myBtnAOne / myBtnBTwo
  const buttons = document.querySelectorAll(`[id^='myBtn${prefix}']`);

  buttons.forEach((btn) => {
    // Получаем общую часть идентификаторов (AOne, BTwo …)
    const idSuffix = btn.id.replace("myBtn", "");

    const modalId = `myModal${idSuffix}`; // → myModalAOne / myModalBTwo
    const closeId = `close${idSuffix}`;   // → closeAOne   / closeBTwo

    const modal = document.getElementById(modalId);
    const close = document.getElementById(closeId);

    if (!modal || !close) {
      console.warn("Пропущены элементы:", modalId, closeId);
      return;
    }

    // Открыть модалку
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });

    // Закрыть по крестику
    close.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Закрыть по клику мимо контента
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
}

// Индивидуальные модалки, не подпадающие под общий шаблон */
function initIndividualModals() {
  const otherModals = [
    { btn: "myBtnConsult", modal: "myModalConsult", close: "closeConsult" },
    { btn: "myBtnViber", modal: "myModalViber", close: "closeViber" },
    { btn: "myBtnFooter", modal: "myModalFooter", close: "closeFooter" },
    { btn: "myBtn", modal: "myModal", close: "close" },
  ];

  otherModals.forEach(({ btn, modal, close }) => {
    const btnEl = document.getElementById(btn);
    const modalEl = document.getElementById(modal);
    const closeEl = document.getElementsByClassName(close)[0] || document.getElementById(close);

    if (btnEl && modalEl && closeEl) {
      btnEl.addEventListener("click", (e) => {
        e.preventDefault();
        modalEl.style.display = "block";
      });

      closeEl.addEventListener("click", () => {
        modalEl.style.display = "none";
      });

      window.addEventListener("click", (e) => {
        if (e.target === modalEl) {
          modalEl.style.display = "none";
        }
      });
    }
  });
}

// Маска телефона — шаблонно по id, начинающимся с 'phone_mask'
document.addEventListener("DOMContentLoaded", function () {
  const phoneInputs = document.querySelectorAll("[id^='phone_mask']");

  phoneInputs.forEach((input) => {
    IMask(input, { mask: "+{375}(00)000-00-00" });
  });
});

// СКРОЛЛ ШАПКИ
const headerEl = document.getElementById("header");
const headerInfo = document.getElementById("header__info");
const modalConsult = document.getElementById("modalConsult");
const headerLogo = document.getElementById("header__logo");

window.addEventListener("scroll", function() {
    // Если экран меньше или равен 1000px, ничего не делаем
    if (window.innerWidth <= 1000) return;

    const scrollPos = window.scrollY;

    if (scrollPos > 10) {
        headerEl.style.boxShadow = "4px 2px 15px 2px rgba(108, 108, 108, 0.27)";
        headerInfo.style.display = "none";
        headerLogo.style.width = "200px";
    } else {
        headerInfo.style.display = "flex";
        headerLogo.style.width = "";
    }
});



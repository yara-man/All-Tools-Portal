/* =========================================
   1. Массив AI сервисов
   Здесь добавляются новые инструменты сайта
========================================= */

const tools = [

  {
    name: "Claude",
    description: "Мощная AI модель для работы и творчества",
    url: "https://claude.ai",
    icon: "https://cdn.simpleicons.org/anthropic/ffffff",
    alt: "Claude"
  },

  {
    name: "ChatGPT",
    description: "Универсальный AI помощник",
    url: "https://chat.openai.com",
    icon: "img/ai-icon.svg",
    alt: "ChatGPT"
  },

  {
    name: "Gemini",
    description: "Нейросеть Google",
    url: "https://gemini.google.com",
    icon: "https://cdn.simpleicons.org/google/ffffff",
    alt: "Gemini"
  },

  {
    name: "Perplexity",
    description: "AI поиск нового поколения",
    url: "https://www.perplexity.ai",
    icon: "https://cdn.simpleicons.org/perplexity/ffffff",
    alt: "Perplexity"
  },

  {
    name: "Leonardo AI",
    description: "Генерация изображений",
    url: "https://leonardo.ai",
    icon: "img/ai-icon.svg",
    alt: "Leonardo AI"
  },

  {
    name: "Runway",
    description: "Видео генерация AI",
    url: "https://runwayml.com",
    icon: "img/ai-icon.svg",
    alt: "Runway"
  },

  {
    name: "Poe",
    description: "Доступ к разным моделям",
    url: "https://poe.com",
    icon: "https://cdn.simpleicons.org/quora/ffffff",
    alt: "Poe"
  },

  {
    name: "HuggingFace",
    description: "Открытые AI модели",
    url: "https://huggingface.co",
    icon: "https://cdn.simpleicons.org/huggingface/ffffff",
    alt: "HuggingFace"
  },

  {
    name: "Canva AI",
    description: "Дизайн и генерация",
    url: "https://www.canva.com",
    icon: "img/ai-icon.svg",
    alt: "Canva AI"
  },

  {
    name: "Notion AI",
    description: "AI заметки и планирование",
    url: "https://notion.so",
    icon: "https://cdn.simpleicons.org/notion/ffffff",
    alt: "Notion AI"
  },

  {
    name: "DeepSeek",
    description: "Мощная open AI модель",
    url: "https://deepseek.com",
    icon: "img/ai-icon.svg",
    alt: "DeepSeek"
  },

  {
    name: "Krea AI",
    description: "Генерация изображений и видео",
    url: "https://krea.ai",
    icon: "img/ai-icon.svg",
    alt: "Krea AI"
  },

  {
    name: "Midjourney",
    description: "Генерация изображений высокого уровня",
    url: "https://www.midjourney.com",
    icon: "img/ai-icon.svg",
    alt: "Midjourney"
  }

];


/* =========================================
   2. Массив контактов
   Карточки нижнего блока "Контакты"
========================================= */

const contacts = [

  {
    name: "Telegram",
    description: "Связь и быстрые обновления",
    url: "https://t.me/your_link",
    icon: "https://cdn.simpleicons.org/telegram/ffffff",
    alt: "Telegram"
  },

  {
    name: "Discord",
    description: "Сообщество и общение",
    url: "https://discord.com/invite/your_link",
    icon: "https://cdn.simpleicons.org/discord/ffffff",
    alt: "Discord"
  },

  {
    name: "TikTok",
    description: "Короткие видео и контент",
    url: "https://www.tiktok.com/@your_link",
    icon: "https://cdn.simpleicons.org/tiktok/ffffff",
    alt: "TikTok"
  },

  {
    name: "YouTube",
    description: "Видео и полезные материалы",
    url: "https://www.youtube.com/@your_link",
    icon: "https://cdn.simpleicons.org/youtube/ffffff",
    alt: "YouTube"
  },

  {
    name: "GitHub",
    description: "Репозиторий проекта",
    url: "https://github.com/your_link",
    icon: "https://cdn.simpleicons.org/github/ffffff",
    alt: "GitHub"
  }

];


/* =========================================
   3. Генерация карточек AI сервисов
   Карточки создаются автоматически из массива
========================================= */

function renderTools() {

  const grid = document.getElementById("grid");

  if (!grid) return;

  grid.innerHTML = tools.map(tool => `
    <div class="card">
      <a href="${tool.url}" target="_blank" rel="noopener noreferrer">
        <img src="${tool.icon}" alt="${tool.alt}">
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
      </a>
    </div>
  `).join("");

}


/* =========================================
   4. Генерация карточек контактов
========================================= */

function renderContacts() {

  const contactsGrid = document.getElementById("contactsGrid");

  if (!contactsGrid) return;

  contactsGrid.innerHTML = contacts.map(contact => `
    <div class="card">
      <a href="${contact.url}" target="_blank" rel="noopener noreferrer">
        <img src="${contact.icon}" alt="${contact.alt}">
        <h3>${contact.name}</h3>
        <p>${contact.description}</p>
      </a>
    </div>
  `).join("");

}


/* =========================================
   5. Запуск генерации карточек
========================================= */

renderTools();
renderContacts();



/* =========================================
   6. Бургер меню
   Открытие мобильного меню
========================================= */

function toggleMenu(el) {

  el.classList.toggle("active");

  document
    .getElementById("mobileMenu")
    .classList.toggle("open");

}


/* =========================================
   7. Автоматическое закрытие меню
   при переходе на десктоп
========================================= */

window.addEventListener("resize", function () {

  if (window.innerWidth > 700) {

    document
      .getElementById("mobileMenu")
      .classList.remove("open");

    document
      .querySelector(".burger")
      .classList.remove("active");

  }

});


/* =========================================
   8. Закрытие меню после клика по ссылке
========================================= */

document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      document
        .getElementById("mobileMenu")
        .classList.remove("open");

      document
        .querySelector(".burger")
        .classList.remove("active");

    });

});


/* =========================================
   9. Бегущая строка сервисов (ticker)
   Плавная бесконечная лента AI сервисов
========================================= */

const tickerWrap = document.getElementById("tickerWrap");
const tickerTrack = document.getElementById("tickerTrack");

if (tickerWrap && tickerTrack) {
  const originalItems = Array.from(tickerTrack.children);
  const gap = 14;

  originalItems.forEach(item => {
    tickerTrack.appendChild(item.cloneNode(true));
  });

  let currentX = 0;
  let itemSetWidth = 0;

  let isDragging = false;
  let startX = 0;
  let dragStartX = 0;

  let pausedUntil = 0;
  let autoSpeed = 0.35;

  let velocityX = 0;
  let lastPointerX = 0;
  let lastPointerTime = 0;

  function measureWidth() {
    itemSetWidth = 0;

    for (let i = 0; i < originalItems.length; i++) {
      itemSetWidth += originalItems[i].offsetWidth;
    }

    itemSetWidth += gap * originalItems.length;
  }

  function setPosition() {
    tickerTrack.style.transform = `translate3d(${currentX}px, 0, 0)`;
  }

  function normalizeLoop() {
    if (Math.abs(currentX) >= itemSetWidth) {
      currentX += itemSetWidth;
    }

    if (currentX > 0) {
      currentX -= itemSetWidth;
    }
  }

  function pauseThenResume(delay = 1000) {
    pausedUntil = Date.now() + delay;
  }

  function startDrag(clientX) {
    isDragging = true;
    tickerWrap.classList.add("dragging");

    startX = clientX;
    dragStartX = currentX;

    lastPointerX = clientX;
    lastPointerTime = performance.now();
    velocityX = 0;

    pausedUntil = Infinity;
  }

  function moveDrag(clientX) {
    if (!isDragging) return;

    const dx = clientX - startX;
    currentX = dragStartX + dx;

    const now = performance.now();
    const deltaX = clientX - lastPointerX;
    const deltaTime = now - lastPointerTime;

    if (deltaTime > 0) {
      velocityX = deltaX / deltaTime;
    }

    lastPointerX = clientX;
    lastPointerTime = now;

    normalizeLoop();
    setPosition();
  }

  function endDrag() {
    if (!isDragging) return;

    isDragging = false;
    tickerWrap.classList.remove("dragging");

    pauseThenResume(1000);
  }

  function animate() {
    if (isDragging) {
      requestAnimationFrame(animate);
      return;
    }

    const now = Date.now();

    if (Math.abs(velocityX) > 0.01) {
      currentX += velocityX * 16;
      velocityX *= 0.95;

      normalizeLoop();
      setPosition();
    } else if (now >= pausedUntil) {
      currentX -= autoSpeed;

      normalizeLoop();
      setPosition();
    }

    requestAnimationFrame(animate);
  }

  measureWidth();
  setPosition();
  requestAnimationFrame(animate);

  window.addEventListener("resize", () => {
    measureWidth();
    normalizeLoop();
    setPosition();
  });

  tickerWrap.addEventListener("mouseenter", () => {
    pausedUntil = Infinity;
  });

  tickerWrap.addEventListener("mouseleave", () => {
    pauseThenResume(1000);
  });

  tickerWrap.addEventListener("pointerdown", (e) => {
    startDrag(e.clientX);
  });

  window.addEventListener("pointermove", (e) => {
    moveDrag(e.clientX);
  });

  window.addEventListener("pointerup", () => {
    endDrag();
  });

  window.addEventListener("pointercancel", () => {
    endDrag();
  });
}

if (tickerWrap && tickerTrack) {

  const originalItems = Array.from(tickerTrack.children);
  const gap = 14;

  // дублируем элементы для бесконечной прокрутки
  originalItems.forEach(item => {
    tickerTrack.appendChild(item.cloneNode(true));
  });

  let currentX = 0;
  let itemSetWidth = 0;
  let isDragging = false;
  let startX = 0;
  let dragStartX = 0;
  let pausedUntil = 0;

  const speed = 0.35; // скорость движения

  function measureWidth() {

    itemSetWidth = 0;

    for (let i = 0; i < originalItems.length; i++) {
      itemSetWidth += originalItems[i].offsetWidth;
    }

    itemSetWidth += gap * originalItems.length;

  }

  function setPosition() {

    tickerTrack.style.transform =
      `translate3d(${currentX}px,0,0)`;

  }

  function normalizeLoop() {

    if (Math.abs(currentX) >= itemSetWidth) {
      currentX += itemSetWidth;
    }

    if (currentX > 0) {
      currentX -= itemSetWidth;
    }

  }

  function animate() {

    const now = Date.now();

    if (!isDragging && now >= pausedUntil) {

      currentX -= speed;

      normalizeLoop();

      setPosition();

    }

    requestAnimationFrame(animate);

  }


  window.addEventListener("load", () => {

    measureWidth();
    setPosition();

    requestAnimationFrame(animate);

  });


  window.addEventListener("resize", () => {

    measureWidth();
    normalizeLoop();
    setPosition();

  });


  /* остановка при наведении */

  tickerWrap.addEventListener("mouseenter", () => {
    pausedUntil = Infinity;
  });


  /* запуск через 2 секунды */

  tickerWrap.addEventListener("mouseleave", () => {
    pausedUntil = Date.now() + 1000;
  });


  /* drag мышкой */

  tickerWrap.addEventListener("mousedown", (e) => {

    isDragging = true;

    tickerWrap.classList.add("dragging");

    startX = e.clientX;

    dragStartX = currentX;

    pausedUntil = Infinity;

  });


  window.addEventListener("mousemove", (e) => {

    if (!isDragging) return;

    const dx = e.clientX - startX;

    currentX = dragStartX + dx;

    normalizeLoop();

    setPosition();

  });


  window.addEventListener("mouseup", () => {

    if (!isDragging) return;

    isDragging = false;

    tickerWrap.classList.remove("dragging");

    pausedUntil = Date.now() + 1000;

  });


  /* свайп на телефоне */

  tickerWrap.addEventListener("touchstart", (e) => {

    isDragging = true;

    startX = e.touches[0].clientX;

    dragStartX = currentX;

    pausedUntil = Infinity;

  }, { passive:true });


  tickerWrap.addEventListener("touchmove", (e) => {

    if (!isDragging) return;

    const dx = e.touches[0].clientX - startX;

    currentX = dragStartX + dx;

    normalizeLoop();

    setPosition();

  }, { passive:true });


  tickerWrap.addEventListener("touchend", () => {

    isDragging = false;

    pausedUntil = Date.now() + 1000;

  });

}
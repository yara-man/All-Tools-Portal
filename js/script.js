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
========================================= */

const contacts = [
  {
    name: "Telegram",
    description: "Связь и быстрые обновления",
    url: "https://t.me",
    icon: "https://cdn.simpleicons.org/telegram/ffffff",
    alt: "Telegram"
  },
  {
    name: "Discord",
    description: "Сообщество и общение",
    url: "https://discord.com",
    icon: "https://cdn.simpleicons.org/discord/ffffff",
    alt: "Discord"
  },
  {
    name: "TikTok",
    description: "Короткие видео и контент",
    url: "https://www.tiktok.com",
    icon: "https://cdn.simpleicons.org/tiktok/ffffff",
    alt: "TikTok"
  },
  {
    name: "YouTube",
    description: "Видео и полезные материалы",
    url: "https://www.youtube.com",
    icon: "https://cdn.simpleicons.org/youtube/ffffff",
    alt: "YouTube"
  },
  {
    name: "GitHub",
    description: "Репозиторий проекта",
    url: "https://github.com",
    icon: "https://cdn.simpleicons.org/github/ffffff",
    alt: "GitHub"
  },
  {
  name: "Steam",
  description: "Игры и профиль",
  url: "https://steamcommunity.com",
  icon: "https://cdn.simpleicons.org/steam/ffffff",
  alt: "Steam"
  },
  {
  name: "Battle.net",
  description: "Blizzard лаунчер и аккаунт",
  url: "https://account.battle.net",
  icon: "img/ai-icon.svg",
  alt: "Battle.net"
  }
];


/* =========================================
   2.1 Массив переводчиков
========================================= */

const translators = [
  {
    name: "ENG → RUS",
    description: "Перевод с английского на русский",
    url: "https://translate.google.com/?sl=en&tl=ru&op=translate",
    icon: "https://cdn.simpleicons.org/googletranslate/ffffff",
    alt: "Google Translate"
  },
  {
    name: "ENG → UKR",
    description: "Перевод с английского на украинский",
    url: "https://translate.google.com/?sl=en&tl=uk&op=translate",
    icon: "https://cdn.simpleicons.org/googletranslate/ffffff",
    alt: "Google Translate"
  },
  {
    name: "UKR → RUS",
    description: "Перевод с украинского на русский",
    url: "https://translate.google.com/?sl=uk&tl=ru&op=translate",
    icon: "https://cdn.simpleicons.org/googletranslate/ffffff",
    alt: "Google Translate"
  },
  {
    name: "RUS → ENG",
    description: "Перевод с русского на английский",
    url: "https://translate.google.com/?sl=ru&tl=en&op=translate",
    icon: "https://cdn.simpleicons.org/googletranslate/ffffff",
    alt: "Google Translate"
  }
];


/* =========================================
   3. Массив бегущей строки
========================================= */

const tickerItems = [
  {
    name: "Claude",
    url: "https://claude.ai",
    icon: "https://cdn.simpleicons.org/anthropic/ffffff",
    alt: "Claude"
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com",
    icon: "img/ai-icon.svg",
    alt: "ChatGPT"
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com",
    icon: "https://cdn.simpleicons.org/google/ffffff",
    alt: "Gemini"
  },
  {
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    icon: "https://cdn.simpleicons.org/perplexity/ffffff",
    alt: "Perplexity"
  },
  {
    name: "Leonardo AI",
    url: "https://leonardo.ai",
    icon: "img/ai-icon.svg",
    alt: "Leonardo AI"
  },
  {
    name: "Runway",
    url: "https://runwayml.com",
    icon: "img/ai-icon.svg",
    alt: "Runway"
  },
  {
    name: "Poe",
    url: "https://poe.com",
    icon: "https://cdn.simpleicons.org/quora/ffffff",
    alt: "Poe"
  },
  {
    name: "HuggingFace",
    url: "https://huggingface.co",
    icon: "https://cdn.simpleicons.org/huggingface/ffffff",
    alt: "HuggingFace"
  },
  {
    name: "Canva AI",
    url: "https://www.canva.com",
    icon: "img/ai-icon.svg",
    alt: "Canva AI"
  },
  {
    name: "Notion AI",
    url: "https://notion.so",
    icon: "https://cdn.simpleicons.org/notion/ffffff",
    alt: "Notion AI"
  },
  {
    name: "DeepSeek",
    url: "https://deepseek.com",
    icon: "img/ai-icon.svg",
    alt: "DeepSeek"
  },
  {
    name: "Krea AI",
    url: "https://krea.ai",
    icon: "img/ai-icon.svg",
    alt: "Krea AI"
  }
];


/* =========================================
   4. Темы сайта
========================================= */

const themes = {
  dark: {
    label: "Dark",
    bg: "#0b0b0f",
    bgSoft: "#16161f",
    bgImage: "img/bg-dark.jpg",
    card: "#121218",
    cardBorder: "#1c1c24",
    accent: "#ff4fa3",
    text: "#e8e8f0",
    muted: "#9aa0aa",
    footerText: "#8d93a0",
    headerBg: "rgba(11,11,15,0.55)",
    menuBg: "rgba(17,17,23,0.40)",
    menuLinkBg: "rgba(255,255,255,0.06)",
    menuLinkBgActive: "rgba(255,255,255,0.10)",
    white: "#ffffff",
    glow: "rgba(255,79,163,.35)",
    preview: "linear-gradient(135deg, #0b0b0f 0%, #ff4fa3 100%)"
    
  },

  light: {
    label: "Light",
    bg: "#f3f5fb",
    bgSoft: "#ffffff",
    bgImage: "img/bg-light.jpg",
    card: "rgba(255,255,255,0.72)",
    cardBorder: "#d6dceb",
    accent: "#4f7cff",
    text: "#171b26",
    muted: "#5e6574",
    footerText: "#6f7685",
    headerBg: "rgba(255,255,255,0.62)",
    menuBg: "rgba(255,255,255,0.75)",
    menuLinkBg: "rgba(23,27,38,0.05)",
    menuLinkBgActive: "rgba(23,27,38,0.10)",
    white: "#171b26",
    glow: "rgba(79,124,255,.28)",
    preview: "linear-gradient(135deg, #ffffff 0%, #4f7cff 100%)"
  },

  violet: {
    label: "Violet",
    bg: "#0d0a18",
    bgSoft: "#1a1230",
    bgImage: "img/bg-violet.jpg",
    card: "rgba(23,18,40,0.82)",
    cardBorder: "#34275f",
    accent: "#8b5cf6",
    text: "#efeaff",
    muted: "#b0a7cb",
    footerText: "#958db3",
    headerBg: "rgba(13,10,24,0.58)",
    menuBg: "rgba(22,16,38,0.58)",
    menuLinkBg: "rgba(255,255,255,0.06)",
    menuLinkBgActive: "rgba(255,255,255,0.10)",
    white: "#ffffff",
    glow: "rgba(139,92,246,.35)",
    preview: "linear-gradient(135deg, #0d0a18 0%, #8b5cf6 100%)"
  },

  cyan: {
    label: "Cyan",
    bg: "#07131a",
    bgSoft: "#0d2330",
    bgImage: "img/bg-cyan.jpg",
    card: "rgba(10,24,32,0.82)",
    cardBorder: "#1f4b5a",
    accent: "#22d3ee",
    text: "#e9fbff",
    muted: "#9fc4cc",
    footerText: "#88aeb7",
    headerBg: "rgba(7,19,26,0.58)",
    menuBg: "rgba(10,22,30,0.58)",
    menuLinkBg: "rgba(255,255,255,0.06)",
    menuLinkBgActive: "rgba(255,255,255,0.10)",
    white: "#ffffff",
    glow: "rgba(34,211,238,.35)",
    preview: "linear-gradient(135deg, #07131a 0%, #22d3ee 100%)"
  }
};


/* =========================================
   5. Генерация карточек AI сервисов
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
   6. Генерация карточек контактов
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
   Рендер переводчиков
========================================= */

function renderTranslators() {
  const grid = document.getElementById("translateGrid");
  if (!grid) return;

  grid.innerHTML = translators.map(item => `
    <div class="card">
      <a href="${item.url}" target="_blank" rel="noopener noreferrer">
        <img src="${item.icon}" alt="${item.alt}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </a>
    </div>
  `).join("");
}


/* =========================================
   7. Генерация бегущей строки
========================================= */

function renderTicker() {
  const tickerTrack = document.getElementById("tickerTrack");
  if (!tickerTrack) return;

  tickerTrack.innerHTML = tickerItems.map(item => `
    <a class="ticker-item" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <img src="${item.icon}" alt="${item.alt}">
      <span>${item.name}</span>
    </a>
  `).join("");
}


/* =========================================
   8. Вставка блока выбора тем в footer
========================================= */

function renderThemeSelector() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="theme-picker">
      <div class="theme-picker-title">Выбор тем</div>
      <div class="theme-buttons" id="themeButtons"></div>
      <div class="footer-caption">Минималистичный портал AI инструментов</div>
    </div>
  `;

  const buttonsWrap = document.getElementById("themeButtons");
  if (!buttonsWrap) return;

  buttonsWrap.innerHTML = Object.entries(themes).map(([key, theme]) => `
    <button
      class="theme-btn"
      type="button"
      data-theme="${key}"
      aria-label="Тема ${theme.label}"
      title="${theme.label}"
      style="background:${theme.preview};"
    ></button>
  `).join("");

  buttonsWrap.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyTheme(btn.dataset.theme);
    });
  });
}


/* =========================================
   9. Применение темы
========================================= */

function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;

  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector("header");
  const mobileMenu = document.getElementById("mobileMenu");

  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--bg-soft", theme.bgSoft);
  root.style.setProperty("--card", theme.card);
  root.style.setProperty("--card-border", theme.cardBorder);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--text", theme.text);
  root.style.setProperty("--muted", theme.muted);
  root.style.setProperty("--footer-text", theme.footerText);
  root.style.setProperty("--header-bg", theme.headerBg);
  root.style.setProperty("--menu-bg", theme.menuBg);
  root.style.setProperty("--menu-link-bg", theme.menuLinkBg);
  root.style.setProperty("--menu-link-bg-active", theme.menuLinkBgActive);
  root.style.setProperty("--white", theme.white);
  root.style.setProperty("--glow", theme.glow);
  root.style.setProperty("--ticker-fade-start", theme.bg);

  document.documentElement.style.background = theme.bg;
  body.style.background = `
linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),
url(${theme.bgImage}) center / cover no-repeat fixed
`;

  if (header) {
    header.style.background = theme.headerBg;
  }

  if (mobileMenu) {
    mobileMenu.style.background = theme.menuBg;
  }

  document.querySelectorAll(".card").forEach(card => {
    card.style.borderColor = theme.cardBorder;
  });

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.style.color = theme.text;
  });

  document.querySelectorAll(".theme-btn").forEach(btn => {
    const isActive = btn.dataset.theme === themeName;

    btn.classList.toggle("active", isActive);
    btn.style.borderColor = isActive
      ? theme.text
      : "rgba(255,255,255,.35)";
  });

  const fallbackIcons = document.querySelectorAll('img[src*="ai-icon.svg"]');
  const simpleIcons = document.querySelectorAll('img[src*="cdn.simpleicons.org"]');
  const refreshIcon = document.querySelector(".refresh-btn img");

  if (themeName === "light") {
    fallbackIcons.forEach(icon => {
      icon.style.filter = "brightness(0)";
    });

    simpleIcons.forEach(icon => {
      icon.style.filter = "brightness(0)";
    });

    if (refreshIcon) {
      refreshIcon.style.filter = "brightness(0)";
    }
  } else {
    fallbackIcons.forEach(icon => {
      icon.style.filter = "brightness(0) invert(1)";
    });

    simpleIcons.forEach(icon => {
      icon.style.filter = "none";
    });

    if (refreshIcon) {
      refreshIcon.style.filter = "invert(1)";
    }
  }

  localStorage.setItem("site-theme", themeName);
}


/* =========================================
   10. Бургер меню
========================================= */

function toggleMenu(el) {
  el.classList.toggle("active");

  document
    .getElementById("mobileMenu")
    .classList.toggle("open");
}


/* =========================================
   11. Автоматическое закрытие меню
========================================= */

window.addEventListener("resize", function () {
  if (window.innerWidth > 700) {
    document
      .getElementById("mobileMenu")
      ?.classList.remove("open");

    document
      .querySelector(".burger")
      ?.classList.remove("active");
  }
});


/* =========================================
   12. Закрытие меню после клика по ссылке
========================================= */

function bindMobileMenuLinks() {
  document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {
      link.addEventListener("click", () => {
        document
          .getElementById("mobileMenu")
          ?.classList.remove("open");

        document
          .querySelector(".burger")
          ?.classList.remove("active");
      });
    });
}


/* =========================================
   13. Бегущая строка сервисов
========================================= */

function initTicker() {
  const tickerWrap = document.getElementById("tickerWrap");
  const tickerTrack = document.getElementById("tickerTrack");

  if (!tickerWrap || !tickerTrack) return;

  const gap = 14;
  const originalItems = Array.from(tickerTrack.children);

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


/* =========================================
   14. Локальные стили для темы
   Чтобы кнопки тем заработали сразу
========================================= */

function injectThemeStyles() {
  const style = document.createElement("style");

  style.innerHTML = `
    .theme-picker{
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:8px;
    }

    .theme-picker-title{
      font-size:12px;
      font-weight:500;
      letter-spacing:.3px;
      color:var(--text);
      opacity:.82;
      line-height:1.2;
    }

    .theme-buttons{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      flex-wrap:wrap;
    }

    .theme-btn{
      width:18px;
      height:18px;
      border-radius:50%;
      border:1px solid rgba(255,255,255,.35);
      cursor:pointer;
      transition:
        transform .15s ease,
        opacity .15s ease,
        border-color .15s ease;
      opacity:.95;
      padding:0;
      outline:none;
      box-shadow:none;
      appearance:none;
      -webkit-appearance:none;
      background-clip:padding-box;
    }

    .theme-btn:hover{
      transform:scale(1.06);
      opacity:1;
      box-shadow:none;
    }

    .theme-btn:active{
      transform:scale(.96);
      box-shadow:none;
    }

    .theme-btn:focus,
    .theme-btn:focus-visible{
      outline:none;
      box-shadow:none;
    }

    .footer-caption{
      margin-top:2px;
      font-size:12px;
      color:var(--footer-text);
      letter-spacing:.3px;
      line-height:1.2;
    }

    footer{
      margin-top:60px;
      padding:30px 20px;
      text-align:center;
      color:var(--footer-text);
      font-size:12px;
    }
  `;

  document.head.appendChild(style);
}


/* =========================================
   15. Первый запуск
========================================= */

renderTools();
renderContacts();
renderTicker();
renderTranslators();
injectThemeStyles();
bindMobileMenuLinks();
initTicker();

document.querySelectorAll(".theme-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    applyTheme(btn.dataset.theme);
  });
});

const savedTheme = localStorage.getItem("site-theme") || "dark";
applyTheme(savedTheme);


/* =========================================
   Предзагрузка фоновых изображений
========================================= */

const backgrounds = [
  "img/bg-dark.jpg",
  "img/bg-light.jpg",
  "img/bg-purple.jpg",
  "img/bg-neon.jpg"
];

backgrounds.forEach(src => {
  const img = new Image();
  img.src = src;
});
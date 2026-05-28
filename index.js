const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor('#0a0a0f');
  tg.setBackgroundColor('#0a0a0f');
}

const services = [
  {
    id: 1,
    category: "smm",
    price: "от 45 000 ₽",
    title: "Продвижение в социальных сетях (SMM)",
    duration: "от 1 месяца",
    clients: "150+ клиентов",
    badge: "popular",
    badgeText: "Популярное",
    imgClass: "svc-smm",
    icon: "📱",
    tags: ["Instagram", "VK", "Telegram", "TikTok", "Контент-план"],
    desc: "Комплексное ведение социальных сетей: создание контент-стратегии, ежедневные публикации, сторис, Reels, работа с блогерами, таргетированная реклама. Увеличим вашу аудиторию и вовлечённость.",
    basePrice: 45000,
    pricePerMonth: 35000
  },
  {
    id: 2,
    category: "seo",
    price: "от 60 000 ₽",
    title: "SEO-продвижение сайтов",
    duration: "от 3 месяцев",
    clients: "80+ проектов",
    badge: "best",
    badgeText: "Лучшее",
    imgClass: "svc-seo",
    icon: "🔍",
    tags: ["Аудит", "Техническое SEO", "Контент", "Ссылки", "Аналитика"],
    desc: "Выведем ваш сайт в ТОП-10 Яндекса и Google. Технический аудит, оптимизация скорости, семантическое ядро, написание SEO-текстов, link-building, ежемесячная отчётность.",
    basePrice: 60000,
    pricePerMonth: 25000
  },
  {
    id: 3,
    category: "ads",
    price: "от 30 000 ₽",
    title: "Контекстная и таргетированная реклама",
    duration: "от 2 недель",
    clients: "200+ кампаний",
    badge: "hot",
    badgeText: "Горячее",
    imgClass: "svc-ads",
    icon: "🎯",
    tags: ["Яндекс.Директ", "Google Ads", "VK Ads", "MyTarget", "ROI до 400%"],
    desc: "Настройка и ведение рекламных кампаний с гарантией результата. А/Б тестирование, ретаргетинг, аналитика воронки продаж. Средний ROI наших клиентов — 320%.",
    basePrice: 30000,
    pricePerMonth: 15000
  },
  {
    id: 4,
    category: "design",
    price: "от 25 000 ₽",
    title: "Фирменный стиль и дизайн",
    duration: "от 2 недель",
    clients: "120+ брендов",
    badge: "new",
    badgeText: "Новое",
    imgClass: "svc-design",
    icon: "🎨",
    tags: ["Логотип", "Брендбук", "UI/UX", "Презентации", "Моушн-дизайн"],
    desc: "Создадим узнаваемый визуальный образ вашего бренда. Разработка логотипа, фирменного стиля, дизайна сайтов и приложений, анимационные ролики для соцсетей.",
    basePrice: 25000,
    pricePerMonth: 0
  },
  {
    id: 5,
    category: "strategy",
    price: "от 80 000 ₽",
    title: "Маркетинговая стратегия",
    duration: "от 1 месяца",
    clients: "50+ стратегий",
    badge: "popular",
    badgeText: "Популярное",
    imgClass: "svc-strategy",
    icon: "📊",
    tags: ["Анализ рынка", "Конкуренты", "CJM", "KPI", "Дорожная карта"],
    desc: "Разработаем детальную стратегию роста вашего бизнеса. Анализ рынка и конкурентов, Customer Journey Map, прогнозирование ROMI, пошаговый план на 12 месяцев.",
    basePrice: 80000,
    pricePerMonth: 0
  },
  {
    id: 6,
    category: "design",
    price: "от 55 000 ₽",
    title: "Разработка сайтов и лендингов",
    duration: "от 2 недель",
    clients: "90+ сайтов",
    badge: "best",
    badgeText: "Лучшее",
    imgClass: "svc-brand",
    icon: "💻",
    tags: ["Tilda", "WordPress", "React", "Адаптив", "CMS"],
    desc: "Создаём продающие сайты и лендинги, которые конвертируют посетителей в клиентов. Адаптивный дизайн, SEO-оптимизация, интеграция с CRM, аналитика.",
    basePrice: 55000,
    pricePerMonth: 5000
  },
];

let currentFilter = "all";
let currentSearch = "";
let selectedService = null;

const grid = document.getElementById("serviceGrid");
const overlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const searchInput = document.getElementById("searchInput");
const callbackOverlay = document.getElementById("callbackOverlay");
const callbackClose = document.getElementById("callbackClose");

function getFiltered() {
  return services.filter(s => {
    const matchFilter = currentFilter === "all" || s.category === currentFilter;
    const matchSearch = !currentSearch
      || s.title.toLowerCase().includes(currentSearch)
      || s.tags.some(t => t.toLowerCase().includes(currentSearch));
    return matchFilter && matchSearch;
  });
}

function renderGrid() {
  const list = getFiltered();
  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `<div class="empty">Ничего не найдено 🔍</div>`;
    return;
  }

  list.forEach((svc, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="card-img ${svc.imgClass}">
        ${svc.badge ? `<div class="card-badge ${svc.badge}">${svc.badgeText}</div>` : ""}
        <div class="card-icon">${svc.icon}</div>
      </div>
      <div class="card-body">
        <div class="card-price">${svc.price} <span>/ мес</span></div>
        <div class="card-title">${svc.title}</div>
        <div class="card-meta">
          <div class="card-meta-item">⏱ ${svc.duration}</div>
          <div class="card-meta-item">👥 ${svc.clients}</div>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(svc));
    grid.appendChild(card);
  });
}

function openModal(svc) {
  selectedService = svc;
  document.getElementById("modalImg").className = `modal-img ${svc.imgClass}`;
  document.getElementById("modalBadge").textContent = svc.badgeText;
  document.getElementById("modalBadge").className = `modal-badge ${svc.badge || ""}`;
  if (!svc.badge) document.getElementById("modalBadge").style.display = "none";
  else document.getElementById("modalBadge").style.display = "";

  document.getElementById("modalPrice").textContent = svc.price;
  document.getElementById("modalTitle").textContent = svc.title;
  document.getElementById("modalMeta").innerHTML = `
    <span>⏱ ${svc.duration}</span>
    <span>👥 ${svc.clients}</span>
  `;
  document.getElementById("modalTags").innerHTML =
    svc.tags.map(t => `<span class="tag">${t}</span>`).join("");
  document.getElementById("modalDesc").textContent = svc.desc;

  // Reset calculator
  document.getElementById("budgetRange").value = 50000;
  document.getElementById("budgetValue").textContent = "50 000 ₽";
  document.getElementById("durationRange").value = 3;
  document.getElementById("durationValue").textContent = "3 мес";
  updateCalc();

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  selectedService = null;
}

function openCallback() {
  callbackOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCallback() {
  callbackOverlay.classList.remove("open");
  if (!overlay.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

// Calculator
function updateCalc() {
  if (!selectedService) return;
  const budget = parseInt(document.getElementById("budgetRange").value);
  const duration = parseInt(document.getElementById("durationRange").value);

  const agencyFee = selectedService.basePrice;
  const monthlyFee = selectedService.pricePerMonth * duration;
  const total = agencyFee + monthlyFee + budget;

  const reach = Math.floor(budget * 0.15 * duration);
  const leads = Math.floor(reach * 0.03);

  document.getElementById("calcResult").innerHTML = `
    <div style="margin-bottom:8px; font-weight:600; color: var(--accent2);">
      💰 Итоговая стоимость: ${total.toLocaleString('ru-RU')} ₽
    </div>
    <div style="color: var(--muted); font-size: 12px;">
      Агентское вознаграждение: ${agencyFee.toLocaleString('ru-RU')} ₽<br>
      Бюджет на рекламу: ${budget.toLocaleString('ru-RU')} ₽ × ${duration} мес<br>
      📈 Охват: ~${reach.toLocaleString('ru-RU')} человек<br>
      🎯 Прогноз лидов: ~${leads} заявок
    </div>
  `;
}

document.getElementById("budgetRange").addEventListener("input", (e) => {
  document.getElementById("budgetValue").textContent = 
    parseInt(e.target.value).toLocaleString('ru-RU') + " ₽";
  updateCalc();
});

document.getElementById("durationRange").addEventListener("input", (e) => {
  document.getElementById("durationValue").textContent = e.target.value + " мес";
  updateCalc();
});

// Order button
document.getElementById("orderBtn").addEventListener("click", () => {
  if (!selectedService) return;
  const name = document.getElementById("orderName").value.trim();
  const phone = document.getElementById("orderPhone").value.trim();

  if (!name || !phone) {
    tg?.showPopup?.({ title: "Ошибка", message: "Заполните имя и телефон" });
    return;
  }

  const data = JSON.stringify({
    action: "contact",
    service: selectedService.title,
    name: name,
    phone: phone,
    contact: tg?.initDataUnsafe?.user?.username || "Не указан"
  });

  if (tg) {
    tg.sendData(data);
    tg.close();
  } else {
    alert(`Заявка отправлена!\nУслуга: ${selectedService.title}\nИмя: ${name}\nТелефон: ${phone}`);
  }
});

// Callback button
document.getElementById("callbackBtn").addEventListener("click", openCallback);

document.getElementById("callbackSubmit").addEventListener("click", () => {
  const name = document.getElementById("callbackName").value.trim();
  const phone = document.getElementById("callbackPhone").value.trim();

  if (!name || !phone) {
    tg?.showPopup?.({ title: "Ошибка", message: "Заполните имя и телефон" });
    return;
  }

  const data = JSON.stringify({
    action: "callback",
    name: name,
    phone: phone
  });

  if (tg) {
    tg.sendData(data);
    tg.close();
  } else {
    alert(`Запрос на звонок!\nИмя: ${name}\nТелефон: ${phone}`);
  }
});

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
callbackClose.addEventListener("click", closeCallback);
callbackOverlay.addEventListener("click", e => { if (e.target === callbackOverlay) closeCallback(); });

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderGrid();
  });
});

searchInput.addEventListener("input", e => {
  currentSearch = e.target.value.toLowerCase().trim();
  renderGrid();
});

renderGrid();

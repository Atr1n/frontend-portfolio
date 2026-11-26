"use strict";

const cases = {
  credit: {
    type: "FinTech",
    title: "Кредитный конвейер",
    sections: [
      ["Задача", "Сотрудник обрабатывает кредитную заявку и должен видеть, на каком этапе она находится и какой шаг доступен дальше."],
      ["Мой вклад", "Разрабатывал клиентскую часть финтех-приложений и интегрировал рабочие экраны с API. В таких задачах связываю состояние формы и доступные действия со статусом заявки, который вернул сервер."],
      ["Условный кейс", "При проверке заявки API отклоняет одно из полей. Интерфейс сохраняет уже введённые данные, показывает ошибку рядом с полем и возвращает фокус к нему. Пока запрос выполняется, кнопку отправки блокирую."],
      ["Как бы проверил", "Прошёл бы сценарий от первого сохранения до повторной отправки после ошибки. Отдельно проверил бы, что двойной клик не отправляет форму дважды, а следующий этап открывается только после подтверждения от API."],
    ],
  },
  crm: {
    type: "CRM",
    title: "Внутренняя CRM",
    sections: [
      ["Задача", "Дать сотрудникам рабочее место для поиска записей, просмотра карточек и обновления данных."],
      ["Мой вклад", "Разрабатывал интерфейсы CRM в команде, подключал API и работал над поведением экранов при загрузке, пустой выдаче и ошибках."],
      ["Условный кейс", "Менеджер быстро меняет фильтр, а ответы API приходят в обратном порядке. Предыдущий запрос отменяю через AbortController, а таблицу обновляю только данными для текущего фильтра. Параметры поиска можно хранить в URL, чтобы кнопка «Назад» возвращала менеджера к нужной выборке."],
      ["Как бы проверил", "Замедлил бы первый запрос, быстро сменил фильтр и убедился, что старый ответ не заменяет новую выдачу. Затем открыл бы карточку и вернулся к списку с теми же параметрами."],
    ],
  },
  agents: {
    type: "AI / MCP",
    title: "Собственные AI-агенты",
    sections: [
      ["Мой вклад", "Писал собственных AI-агентов и подключал инструменты через Model Context Protocol (MCP). Работал с LangChain, LangGraph и Vercel AI SDK. Для разработки использую Claude, ChatGPT и GitHub Copilot."],
      ["Пример на учебных данных", "Агент готовит черновик для ответа на входящую заявку, а менеджер решает, что отправить клиенту. Перед показом черновика проверяю, что API вернул непустой текст. При таймауте или пустом ответе интерфейс очищает старый черновик и предлагает ручной разбор."],
      ["Что можно проверить в демо", "Сначала получите черновик, затем нажмите «Проверить сбой». Черновик исчезнет, а исходная заявка останется на экране для ручной обработки."],
    ],
    demo: true,
  },
  hr: {
    type: "HR Tech",
    title: "Внутренняя HR-платформа",
    sections: [
      ["Задача", "Перенести внутренние HR-процессы в веб-приложение для сотрудников и HR-команд."],
      ["Мой вклад", "Разрабатывал клиентскую часть внутренних HR-инструментов в команде. При проектировании рабочих экранов учитываю, какие данные и действия нужны сотруднику, а какие доступны HR."],
      ["Условный кейс", "В системе заявок на отпуск сотрудник создаёт заявку и видит её статус, а HR работает со списком на согласование. Общие компоненты формы и статусов можно переиспользовать. Действия на экране зависят от прав, а операции проверяются на сервере."],
      ["Как бы проверил", "Открыл бы одну и ту же заявку под разными ролями. Проверил бы сценарии создания и просмотра, обработку ответа API об отсутствии доступа и обновление статуса после решения HR."],
    ],
  },
  docs: {
    type: "Корпоративные системы",
    title: "Электронный документооборот",
    sections: [
      ["Задача", "Дать сотрудникам рабочий интерфейс для просмотра документов и действий на разных этапах согласования."],
      ["Мой вклад", "Участвовал в разработке клиентской части сервиса в команде. В таких интерфейсах уделяю внимание статусам, доступным действиям и обработке ошибок API."],
      ["Условный кейс", "Два сотрудника открыли документ, и один успел согласовать его раньше. Если сервер сообщает, что версия устарела, интерфейс обновляет статус и показывает актуальные действия. Комментарий второго сотрудника при этом сохраняется в форме."],
      ["Как бы проверил", "Открыл бы документ в двух сессиях, провёл согласование в одной и повторил действие в другой. Проверил бы, что интерфейс не показывает ложный успех, обновляет карточку и сохраняет введённый комментарий."],
    ],
  },
  games: {
    type: "Web Games",
    title: "Браузерные игры",
    sections: [
      ["Задача", "Собрать игровой интерфейс, который запускается в браузере и реагирует на управление на компьютере и телефоне."],
      ["Мой вклад", "Работал над frontend браузерных игр и интерактивных веб-приложений. В таких задачах проверяю реакцию интерфейса на ввод и поведение элементов на разных размерах экрана."],
      ["Условный кейс", "На телефоне во время перетаскивания элемента проседает частота кадров. Через профиль производительности можно найти лишнюю работу в обработчике ввода и обновлять положение элемента через requestAnimationFrame один раз за кадр."],
      ["Как бы проверил", "Сравнил бы профиль до и после, затем проверил быстрые движения, отмену жеста и управление мышью. Отдельно посмотрел бы, остаются ли кнопки доступными на узких экранах."],
    ],
  },
};

const visual = document.querySelector(".hero-visual");
const heroImage = visual.querySelector("img");
function showHeroImage() {
  if (heroImage.naturalWidth) {
    visual.classList.add("has-image");
  } else {
    heroImage.hidden = true;
  }
}
if (heroImage.complete) {
  showHeroImage();
} else {
  heroImage.addEventListener("load", showHeroImage, { once: true });
  heroImage.addEventListener("error", showHeroImage, { once: true });
}

const header = document.querySelector(".site-header");
const menuToggle = header.querySelector(".menu-toggle");
const navigation = header.querySelector(".navigation");
const mobile = matchMedia("(max-width: 640px)");
header.classList.add("menu-ready");

function setMenuOpen(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") === "false");
});
navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !mobile.matches) return;
  setMenuOpen(false);
  const section = document.getElementById(link.hash.slice(1));
  section.tabIndex = -1;
  section.focus({ preventScroll: true });
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !navigation.classList.contains("is-open")) return;
  setMenuOpen(false);
  menuToggle.focus();
});
document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) setMenuOpen(false);
});
mobile.addEventListener("change", () => setMenuOpen(false));

const filters = document.querySelector(".filters");
const cards = [...document.querySelectorAll(".project")];
const filterStatus = document.getElementById("filter-status");
filters.hidden = false;
filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  for (const option of filters.querySelectorAll("[data-filter]")) {
    option.setAttribute("aria-pressed", String(option === button));
  }

  const filter = button.dataset.filter;
  let visible = 0;
  for (const card of cards) {
    card.hidden = filter !== "all" && filter !== card.dataset.category;
    if (!card.hidden) visible += 1;
  }
  filterStatus.textContent = "Проектов в выборе: " + visible;
});

const dialog = document.querySelector(".case-dialog");
const caseType = document.getElementById("case-type");
const caseTitle = document.getElementById("case-title");
const caseContent = document.getElementById("case-content");
const closeDialog = dialog.querySelector(".close-dialog");

function makeTextElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

function openCase(id) {
  const project = cases[id];
  caseType.textContent = project.type;
  caseTitle.textContent = project.title;
  caseContent.replaceChildren();
  for (const [title, description] of project.sections) {
    caseContent.append(makeTextElement("h3", title), makeTextElement("p", description));
  }
  if (project.demo) {
    const link = makeTextElement("a", "Посмотреть демонстрацию");
    link.href = "#agents";
    link.addEventListener("click", () => {
      dialog.close();
      const section = document.getElementById("agents");
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
    });
    caseContent.append(link);
  }
  dialog.showModal();
  closeDialog.focus();
}

for (const button of document.querySelectorAll("[data-case]")) {
  const title = button.closest(".project").querySelector("h3").textContent;
  button.setAttribute("aria-label", "О проекте «" + title + "»");
  button.setAttribute("aria-haspopup", "dialog");
  button.hidden = false;
  button.addEventListener("click", () => openCase(button.dataset.case));
}

const demoActions = document.querySelector(".demo-actions");
const demoResult = document.querySelector(".demo-result");
const resultTitle = demoResult.querySelector("strong");
const resultText = demoResult.querySelector("p");
const responses = {
  success: [
    "Черновик готов",
    "Здравствуйте! Подскажите, пожалуйста, какие материалы нужны, в каком объёме и к какому сроку. По этим данным подготовим расчёт.",
  ],
  failure: [
    "Нужен ручной разбор",
    "Агент не вернул ответ. Предыдущий черновик очищен. Заявка доступна для ручной обработки.",
  ],
};
let responseTimer;
demoActions.hidden = false;
demoActions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-scenario]");
  if (!button) return;

  clearTimeout(responseTimer);
  const scenario = button.dataset.scenario;
  demoResult.dataset.state = "loading";
  resultTitle.textContent = "Обрабатываем заявку";
  resultText.textContent = "";
  responseTimer = setTimeout(() => {
    const [title, text] = responses[scenario];
    demoResult.dataset.state = scenario;
    resultTitle.textContent = title;
    resultText.textContent = text;
  }, 450);
});

"use client";

import React from "react";

// =====================
//       TYPES
// =====================

type EraSide = {
  title: string;
  period: string;
  tagline: string;
  summary: string;
  facts: string[];
};

type EraRow = {
  id: string;
  label: string;
  schoolPeriod: string;
  ukraine: EraSide;
  world: EraSide;
};

// =====================
//      TIMELINE DATA
// =====================

const timeline: EraRow[] = [
  {
    id: "prehistory",
    label: "ПЕРЕДІСТОРІЯ",
    schoolPeriod: "5 клас / вступ до історії",
    ukraine: {
      title: "Передісторія та давні землероби",
      period: "до І тис. до н. е.",
      tagline: "Перші люди на території України",
      summary:
        "На українських землях зʼявляються стоянки первісних людей, мисливські стоянки, пізніше — землеробські культури, зокрема трипільська.",
      facts: [
        "Стоянки біля Королевого, Мізина, Кирилівки — важливі археологічні памʼятки.",
        "Трипільська культура — великі поселення, розписаний посуд.",
        "Перехід до землеробства та скотарства — базова тема шкільної програми.",
      ],
    },
    world: {
      title: "Первісне суспільство",
      period: "камʼяний вік — бронзовий вік",
      tagline: "Походження людини та перші цивілізації",
      summary:
        "Еволюція людини, поява знарядь праці, неолітична революція та перші осілі громади.",
      facts: [
        "Австралопітеки, неандертальці, кроманьйонці — ключові етапи розвитку.",
        "Неолітична революція — перехід до осілого способу життя.",
        "Перші цивілізації Месопотамії, Єгипту, Індії та Китаю.",
      ],
    },
  },
  {
    id: "kyivan-rus",
    label: "КИЇВСЬКА РУСЬ",
    schoolPeriod: "6–7 класи",
    ukraine: {
      title: "Київська Русь",
      period: "ІХ–ХІІІ ст.",
      tagline: "Перша велика держава на українських землях",
      summary:
        "Формування Київської держави, християнізація, розвиток міст, права та культури.",
      facts: [
        "Князі Олег, Ігор, Святослав, Володимир, Ярослав Мудрий.",
        "Хрещення Русі у 988 році.",
        "«Руська правда», літописання, Софія Київська.",
      ],
    },
    world: {
      title: "Середньовічна Європа",
      period: "V–XV ст.",
      tagline: "Феодалізм, церква, міста",
      summary:
        "Королівства, становий лад, посилення церкви, зростання ролі міст та ремесел.",
      facts: [
        "Феодальна ієрархія: сеньйори, васали, селяни.",
        "Хрестові походи та контакти з мусульманським світом.",
        "Зародження університетів і міської культури.",
      ],
    },
  },
  {
    id: "independence",
    label: "НЕЗАЛЕЖНІСТЬ",
    schoolPeriod: "старша школа / сучасна історія",
    ukraine: {
      title: "Незалежна Україна",
      period: "з 1991 р.",
      tagline: "Становлення сучасної держави",
      summary:
        "Проголошення незалежності, Конституція, революції, російсько-українська війна та курс на ЄС і НАТО.",
      facts: [
        "Акт проголошення незалежності 24 серпня 1991 року.",
        "Конституція України 1996 року.",
        "Помаранчева революція, Революція Гідності, повномасштабне вторгнення 2022 року.",
      ],
    },
    world: {
      title: "Світ після 1991 року",
      period: "кінець XX — початок XXI ст.",
      tagline: "Глобалізація та нові виклики",
      summary:
        "Розпад СРСР, розвиток ЄС, інформаційна революція, нові безпекові та гуманітарні виклики.",
      facts: [
        "Розширення ЄС і НАТО, формування нових союзів.",
        "Глобалізація, цифрові технології, інтернет.",
        "Кліматичні зміни, тероризм, міграційні кризи.",
      ],
    },
  },
];
// =====================
//      UI HELPERS
// =====================

function EraBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-[13px] leading-relaxed text-slate-700">
      <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500 shadow-[0_0_0_4px_rgba(56,189,248,0.25)]" />
      <span>{children}</span>
    </li>
  );
}

const sections = [
  { id: "top", label: "Таймлайн" },
  { id: "about", label: "Про платформу" },
];

function TimelinePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ХЕДЕР З ХВИЛЕЮ */}
      <header className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-transparent">
        {/* абстрактні блюри */}
        <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="pointer-events-none absolute right-[-40px] top-0 h-80 w-80 rounded-full bg-violet-300/40 blur-3xl" />

        {/* хвиля внизу хедера */}
        <div className="absolute inset-x-0 bottom-0 h-24 overflow-hidden">
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#0ea5e9"
              fillOpacity="0.7"
              d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,170.7C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Топ-навігація */}
        <nav className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-4 pt-6 pb-8">
          {/* Лого + випадаюче меню */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-sm backdrop-blur hover:bg-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-600 text-[11px] font-bold text-white shadow-md">
                UH
              </span>
              <span>Ukrainian History Hub</span>
              <span className="text-[10px] text-slate-500">
                {menuOpen ? "▲" : "▼"}
              </span>
            </button>

            {menuOpen && (
              <div className="absolute mt-2 w-56 rounded-xl border border-slate-100 bg-white/95 p-2 text-sm shadow-lg backdrop-blur">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => scrollToSection(s.id)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-slate-700 hover:bg-slate-50"
                  >
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Праворуч — кнопка входу в кабінет */}
          <button
            type="button"
            onClick={() => alert("Тут потім буде вхід у кабінет 😊")}
            className="rounded-full bg-slate-900/90 px-4 py-2 text-xs font-medium text-slate-50 shadow-sm hover:bg-slate-900"
          >
            Кабінет
          </button>
        </nav>

        {/* Заголовок / hero-блок */}
        <div
          id="top"
          className="relative z-10 mx-auto max-w-5xl px-4 pb-14 text-center"
        >
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.24em] text-sky-700">
            Таймлайн історії
          </p>
          <h1 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Україна &nbsp;/&nbsp; Світ
          </h1>
          <p className="mx-auto max-w-2xl text-[13px] leading-relaxed text-slate-600">
            Скроль униз: зліва —{" "}
            <span className="font-semibold">історія України</span>, справа —{" "}
            <span className="font-semibold">всесвітня історія</span>. Кожен блок
            відповідає шкільній програмі та рівню складності.
          </p>
        </div>
      </header>

      {/* MAIN — таймлайн + опис платформи */}
      <main className="relative mx-auto max-w-5xl px-4 pb-24">
        {/* Вертикальна лінія по центру */}
        <div className="pointer-events-none absolute left-1/2 top-0 -ml-px h-full border-l border-sky-200/70" />

        {/* ТАЙМЛАЙН */}
        <section className="space-y-12 pt-8">
          {timeline.map((era, index) => (
            <article
              key={era.id}
              className="relative grid gap-8 rounded-3xl bg-white/85 p-6 shadow-sm ring-1 ring-slate-100 backdrop-blur-sm sm:grid-cols-2 sm:p-8"
            >
              {/* маркер на осі */}
              <div className="pointer-events-none absolute left-1/2 top-6 -ml-2 flex h-4 w-4 items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-sky-400 to-violet-500 shadow-[0_0_0_6px_rgba(59,130,246,0.18)]" />
              </div>

              {/* загальний заголовок блоку */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sky-900/90 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-50 shadow-sm">
                Блок {index + 1}: {era.label}
              </div>

              {/* Україна */}
              <div className="pr-4">
                <p className="mb-1 text-[11px] font-medium tracking-[0.2em] text-sky-600 uppercase">
                  Історія України
                </p>
                <p className="mb-2 text-[11px] font-medium text-slate-400 uppercase tracking-[0.18em]">
                  {era.schoolPeriod}
                </p>
                <h2 className="mb-1 text-[16px] font-semibold text-slate-900">
                  {era.ukraine.title}
                </h2>
                <p className="mb-2 text-[12px] font-medium text-sky-700">
                  {era.ukraine.period}
                </p>
                <p className="mb-2 text-[13px] font-medium text-slate-800">
                  {era.ukraine.tagline}
                </p>
                <p className="mb-3 text-[13px] leading-relaxed text-slate-700">
                  {era.ukraine.summary}
                </p>
                <ul className="space-y-1.5">
                  {era.ukraine.facts.map((fact, i) => (
                    <EraBullet key={i}>{fact}</EraBullet>
                  ))}
                </ul>
              </div>

              {/* Світ */}
              <div className="pl-4">
                <p className="mb-1 text-[11px] font-medium tracking-[0.2em] text-violet-600 uppercase">
                  Всесвітня історія
                </p>
                <p className="mb-2 text-[11px] font-medium text-slate-400 uppercase tracking-[0.18em]">
                  {era.world.period}
                </p>
                <h2 className="mb-1 text-[16px] font-semibold text-slate-900">
                  {era.world.title}
                </h2>
                <p className="mb-2 text-[13px] font-medium text-slate-800">
                  {era.world.tagline}
                </p>
                <p className="mb-3 text-[13px] leading-relaxed text-slate-700">
                  {era.world.summary}
                </p>
                <ul className="space-y-1.5">
                  {era.world.facts.map((fact, i) => (
                    <EraBullet key={i}>{fact}</EraBullet>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* ПРО ПЛАТФОРМУ */}
        <section
          id="about"
          className="mt-16 rounded-3xl border border-dashed border-sky-200 bg-sky-50/60 p-6 text-[13px] text-slate-700 sm:p-8"
        >
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Про платформу
          </h2>
          <p className="mb-2">
            Ukrainian History Hub — це навчальна платформа з{" "}
            <span className="font-semibold">
              курсами, тестами, інтерактивними картами
            </span>{" "}
            та особистим кабінетом для школярів.
          </p>
          <p className="mb-2">
            Зараз ти бачиш демо-таймлайн. Далі тут зʼявляться:
          </p>
          <ul className="mb-2 list-disc pl-5">
            <li>структуровані уроки за програмою;</li>
            <li>модулі для підготовки до НМТ / ДПА;</li>
            <li>гейміфікація, досягнення та магазин подарунків;</li>
            <li>кабінет учня з прогресом та оцінками.</li>
          </ul>
          <p className="text-[12px] text-slate-500">
            Цей блок — просто текстовий опис. Потім ми перетворимо його на
            окрему сторінку &quot;Про платформу&quot;.
          </p>
        </section>
      </main>
    </div>
  );
}

// ОБОВʼЯЗКОВИЙ DEFAULT EXPORT ДЛЯ NEXT.JS
export default TimelinePage;

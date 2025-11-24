"use client";

import React from "react";

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

const timeline: EraRow[] = [
  {
    id: "prehistory",
    label: "Блок 1 · Передісторія",
    schoolPeriod: "5 клас / вступ до історії",
    ukraine: {
      title: "Передісторія та давні землероби",
      period: "до I тис. до н. е.",
      tagline: "Перші люди на території України",
      summary:
        "На українських землях з’являються стоянки первісних людей, мисливські стоянки, пізніше — землеробські культури.",
      facts: [
        "Стоянки біля Королевого, Мізина, Кирилівки — археологічні пам’ятки.",
        "Трипільська культура — великі поселення, розписаний посуд.",
        "Побут, вірування та перехід до землеробства — базові теми шкільної програми.",
      ],
    },
    world: {
      title: "Первісне суспільство",
      period: "кам’яний вік — бронзовий вік",
      tagline: "Походження людини та перші цивілізації",
      summary:
        "Від еволюції людини та перших знарядь праці до переходу до землеробства та появи ранніх цивілізацій.",
      facts: [
        "Австралопітеки, неандертальці, кроманьйонці — ключові види.",
        "Неолітична революція — перехід до осілого способу життя.",
        "Перші цивілізації Месопотамії, Єгипту, Індії та Китаю.",
      ],
    },
  },
  {
    id: "kyiv-rus",
    label: "Блок 2 · Київська Русь",
    schoolPeriod: "6–7 класи",
    ukraine: {
      title: "Київська Русь",
      period: "IX–XIII ст.",
      tagline: "Перша велика держава на українських землях",
      summary:
        "Формування та розквіт Київської Русі, князі, християнізація, культурний розвиток.",
      facts: [
        "Князі Олег, Ігор, Святослав, Володимир Великий, Ярослав Мудрий.",
        "«Руська правда», розвиток міст, торгівлі та ремесел.",
        "Хрещення Русі та поширення писемності.",
      ],
    },
    world: {
      title: "Середньовічна Європа",
      period: "V–XV ст.",
      tagline: "Феодалізм, церква, міста",
      summary:
        "Європа від падіння Західної Римської імперії до початку Нового часу.",
      facts: [
        "Феодальний устрій, сеньйори та васали.",
        "Хрестові походи та їхній вплив на Європу.",
        "Формування міст і зародження університетів.",
      ],
    },
  },
  // Далі можна додати ще блоки (козацтво, ХІХ ст., ХХ ст., Незалежність тощо)
];

function HeroWave() {
  return (
    <section className="relative overflow-hidden bg-sky-50 pb-28 pt-10 hero-container">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-0">
        <div className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-soft backdrop-blur">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
            UH
          </div>
          <div className="text-xs leading-tight text-slate-600">
            <div className="font-semibold tracking-[0.15em] text-slate-500">
              UKRAINIAN HISTORY HUB
            </div>
            <div className="text-[11px] text-slate-500">
              Таймлайн історії: Україна & Світ
            </div>
          </div>
        </div>

        <button className="hidden rounded-full bg-slate-900 px-5 py-2 text-xs font-medium text-white shadow-soft sm:inline-flex">
          Кабінет
        </button>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-6 px-4 sm:px-6 lg:px-0">
        <div className="inline-flex gap-2 rounded-full bg-slate-900 text-[11px] font-medium text-slate-100 shadow-soft">
          <span className="rounded-full bg-white px-4 py-1 text-slate-900">
            Таймлайн
          </span>
          <span className="px-4 py-1 text-slate-200/80">Про платформу</span>
        </div>

        <div>
          <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Таймлайн історії:{" "}
            <span className="text-sky-600">Україна / Світ</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
            Скроль униз: зліва —{" "}
            <span className="font-semibold">історія України</span>, справа —{" "}
            <span className="font-semibold">всесвітня історія</span>. Кожен блок
            відповідає шкільній програмі та рівню складності.
          </p>
        </div>
      </div>

      {/* SVG-хвиля внизу hero */}
      <div className="wave-wrapper">
        <svg
          className="wave-svg"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
        >
          <path
            className="wave-path"
            d="M0,160 C240,220 480,140 720,160 C960,180 1200,120 1440,160 L1440,260 L0,260 Z"
          />
        </svg>
      </div>
    </section>
  );
}

function EraCard({ side, sideLabel }: { side: EraSide; sideLabel: string }) {
  return (
    <article className="flex flex-col gap-3 rounded-3xl bg-white/90 p-6 shadow-deep backdrop-blur-sm">
      <div className="text-[11px] font-semibold tracking-[0.18em] text-sky-500">
        {sideLabel.toUpperCase()}
      </div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
        {side.period}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{side.title}</h3>
      <p className="text-xs font-medium text-sky-600">{side.tagline}</p>
      <p className="mt-1 text-sm text-slate-600">{side.summary}</p>
      <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
        {side.facts.map((fact, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function TimelineSection() {
  return (
    <section className="ocean-section">
      <div className="ocean-gradient" />
      <div className="ocean-particles" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 sm:px-6 lg:px-0">
        {timeline.map((era) => (
          <div
            key={era.id}
            className="relative grid gap-8 rounded-[32px] bg-white/5 p-6 shadow-none ring-1 ring-white/10 backdrop-blur-sm sm:p-8 lg:grid-cols-2"
          >
            {/* маркер на вертикальній лінії */}
            <div className="timeline-marker" />

            <div className="lg:col-span-2 mb-4 flex items-center justify-center gap-3 text-xs font-medium text-slate-100">
              <div className="rounded-full bg-sky-500/90 px-4 py-1 shadow-soft">
                {era.label.toUpperCase()}
              </div>
              <span className="text-slate-200/80">{era.schoolPeriod}</span>
            </div>

            <EraCard side={era.ukraine} sideLabel="Історія України" />
            <EraCard side={era.world} sideLabel="Всесвітня історія" />
          </div>
        ))}

        <div className="mt-8 text-center text-[11px] uppercase tracking-[0.25em] text-slate-300">
          Ukrainian History Hub · прототип навчальної платформи
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      <HeroWave />
      <TimelineSection />
    </main>
  );
}
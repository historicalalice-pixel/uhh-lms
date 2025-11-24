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
    label: "Блок 1: Передісторія",
    schoolPeriod: "5 клас / Вступ до історії",
    ukraine: {
      title: "Передісторія та давні землероби",
      period: "до І тис. до н. е.",
      tagline: "Перші люди на території України",
      summary:
        "На українських землях з’являються стоянки первісних людей, мисливські стоянки, пізніше — землеробські культури (зокрема трипільська).",
      facts: [
        "Стоянки біля Королевого, Мізина, Кирилівки — археологічні пам’ятки.",
        "Трипільська культура — великі поселення, розписаний посуд.",
        "Побут, вірування та перехід до землеробства — базові теми шкільної програми."
      ]
    },
    world: {
      title: "Первісне суспільство",
      period: "кам’яний вік — бронзовий вік",
      tagline: "Походження людини та перші цивілізації",
      summary:
        "Учні вивчають еволюцію людини, перші знаряддя праці, перехід до землеробства та виникнення ранніх цивілізацій.",
      facts: [
        "Австралопітеки, неандертальці, кроманьйонці — ключові види.",
        "Неолітична революція — перехід до осілого життя.",
        "Перші цивілізації Месопотамії та Єгипту — вступ до історії Стародавнього Сходу."
      ]
    }
  },
  {
    id: "kyivan-rus",
    label: "Блок 2: Київська Русь",
    schoolPeriod: "6–7 класи",
    ukraine: {
      title: "Київська Русь",
      period: "ІХ–ХІІІ ст.",
      tagline: "Рання держава на українських землях",
      summary:
        "Формується держава з центром у Києві, розвивається християнство, культура та міжнародні зв’язки.",
      facts: [
        "Князі Олег, Ігор, Ольга, Святослав, Володимир Великий, Ярослав Мудрий.",
        "Прийняття християнства 988 року — ключова подія для всієї Східної Європи.",
        "«Руська правда», літописи, Софія Київська та інші пам’ятки культури."
      ]
    },
    world: {
      title: "Середньовічна Європа",
      period: "V–XV ст.",
      tagline: "Феодалізм, церква, міста",
      summary:
        "Європа розвивається через становий лад, посилення ролі церкви, а згодом — через розвиток міст і торгівлі.",
      facts: [
        "Феодальна піраміда, лицарство, васалітет.",
        "Хрестові походи, зіткнення християнського й мусульманського світів.",
        "Зростання міст і ремесел — зародження майбутніх буржуазних відносин."
      ]
    }
  },
  {
    id: "cossack-era",
    label: "Блок 3: Козацька доба",
    schoolPeriod: "8 клас",
    ukraine: {
      title: "Козацька Україна та Гетьманщина",
      period: "XVI–XVIII ст.",
      tagline: "Запорозька Січ та визвольна боротьба",
      summary:
        "Козацтво стає військовою та політичною силою, формується Гетьманщина, розгортається національно-визвольна війна.",
      facts: [
        "Запорозька Січ — військово-політичний центр козацтва.",
        "Богдан Хмельницький та національно-визвольна війна 1648–1657 рр.",
        "Гетьманщина, поділи України між сусідніми державами."
      ]
    },
    world: {
      title: "Ранній Новий час",
      period: "XVI–XVIII ст.",
      tagline: "Великі географічні відкриття та абсолютизм",
      summary:
        "Формується світова колоніальна система, посилюється влада монархів, зароджуються ідеї Просвітництва.",
      facts: [
        "Колоніальні імперії Іспанії, Португалії, Франції, Англії.",
        "Абсолютизм Людовика XIV — «держава це я».",
        "Просвітництво, наукова революція, перші енциклопедії."
      ]
    }
  },
  {
    id: "xix-century",
    label: "Блок 4: XIX століття",
    schoolPeriod: "9 клас",
    ukraine: {
      title: "Українські землі в XIX ст.",
      period: "ХІХ ст.",
      tagline: "Національне відродження",
      summary:
        "Українські землі поділені між Російською та Австрійською імперіями, формується модерна українська нація.",
      facts: [
        "Кирило-Мефодіївське братство, Тарас Шевченко та українська література.",
        "Розвиток промисловості: Донбас, Кривбас, залізниці.",
        "Громади, «Руська трійця», культурні товариства у Львові та Києві."
      ]
    },
    world: {
      title: "Європа XIX століття",
      period: "ХІХ ст.",
      tagline: "Революції, нації, індустріалізація",
      summary:
        "Європу охоплюють революційні рухи, формуються національні держави, триває промислова революція.",
      facts: [
        "Наполеонівські війни та Віденський конгрес.",
        "Весна народів 1848 року та об’єднання Німеччини й Італії.",
        "Друга промислова революція: сталь, електрика, транспорт."
      ]
    }
  },
  {
    id: "xx-century",
    label: "Блок 5: XX століття",
    schoolPeriod: "10 клас",
    ukraine: {
      title: "Україна у ХХ ст.",
      period: "1914–1991",
      tagline: "Війни, тоталітаризм, шлях до незалежності",
      summary:
        "Перші визвольні змагання, міжвоєнний період, Друга світова війна, радянська доба та розпад СРСР.",
      facts: [
        "Українська Народна Республіка та ЗУНР, Акт Злуки 22 січня 1919 р.",
        "Голодомор 1932–1933 рр. як геноцид українського народу.",
        "Україна у Другій світовій війні та післявоєнна відбудова.",
        "Чорнобильська катастрофа 1986 р., Рух, референдум 1991 року."
      ]
    },
    world: {
      title: "Світ у ХХ ст.",
      period: "1914–1991",
      tagline: "Світові війни та Холодна війна",
      summary:
        "Дві світові війни, тоталітарні режими, деколонізація та глобальне протистояння двох блоків.",
      facts: [
        "Перша та Друга світові війни — зміна політичної карти світу.",
        "Фашизм, нацизм, сталінізм — досвід тоталітаризму.",
        "ООН, Холодна війна, ядерне стримування.",
        "Розпад колоніальних імперій, поява десятків нових держав."
      ]
    }
  },
  {
    id: "independence",
    label: "Блок 6: Незалежна Україна",
    schoolPeriod: "11 клас",
    ukraine: {
      title: "Незалежна Україна",
      period: "з 1991 р.",
      tagline: "Розбудова держави та сучасні виклики",
      summary:
        "Формування політичної системи, економічні трансформації, Революції 2004 та 2014 років, російсько-українська війна.",
      facts: [
        "Акт проголошення незалежності України та референдум 1 грудня 1991 р.",
        "Конституція України 1996 року.",
        "Помаранчева революція та Революція Гідності.",
        "Російсько-українська війна, починаючи з 2014 року, повномасштабне вторгнення 2022 р."
      ]
    },
    world: {
      title: "Світ після 1991 року",
      period: "кінець ХХ — початок ХХІ ст.",
      tagline: "Глобалізація та нові виклики",
      summary:
        "Поширення демократії, інформаційна революція, нові конфлікти та безпекові загрози.",
      facts: [
        "Розширення ЄС та НАТО, падіння багатьох авторитарних режимів.",
        "Інтернет, цифрова революція, соціальні мережі.",
        "Глобальні проблеми: зміна клімату, тероризм, міграційні кризи."
      ]
    }
  }
];

function EraCard({ era, index }: { era: EraRow; index: number }) {
  return (
    <section className="relative mb-16 last:mb-0">
      {/* маркер на центральній лінії */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2">
        <div className="h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_0_8px_rgba(34,211,238,0.35)]" />
      </div>

      {/* чіп зверху */}
      <div className="relative z-10 mb-6 flex justify-center">
        <div className="inline-flex flex-wrap items-center gap-3 rounded-full bg-slate-900/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-100 shadow-lg shadow-slate-900/40">
          <span className="text-cyan-300">Блок {index + 1}</span>
          <span className="h-3 w-px bg-cyan-400/40" />
          <span>{era.label.replace(/Блок \d+:\s*/, "")}</span>
        </div>
      </div>

      {/* картка з двома колонками */}
      <div className="relative z-10 mx-auto max-w-6xl rounded-3xl bg-white/80 p-8 shadow-2xl shadow-sky-900/30 backdrop-blur lg:p-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>Історія України</span>
          </div>
          <div className="text-slate-400">|</div>
          <div className="flex items-center gap-2 text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>Всесвітня історія</span>
          </div>
          <div className="ml-auto text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
            {era.schoolPeriod}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Україна */}
          <article>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              Історія України
            </p>
            <h3 className="mb-1 text-xl font-bold text-slate-900 sm:text-2xl">
              {era.ukraine.title}
            </h3>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {era.ukraine.period}
            </p>
            <p className="mb-4 text-sm font-semibold text-sky-700">
              {era.ukraine.tagline}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-700">
              {era.ukraine.summary}
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {era.ukraine.facts.map((fact, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-400" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Світ */}
          <article>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Всесвітня історія
            </p>
            <h3 className="mb-1 text-xl font-bold text-slate-900 sm:text-2xl">
              {era.world.title}
            </h3>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {era.world.period}
            </p>
            <p className="mb-4 text-sm font-semibold text-indigo-700">
              {era.world.tagline}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-700">
              {era.world.summary}
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              {era.world.facts.map((fact, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      {/* Підводний фон */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-sky-50 via-sky-100 to-sky-900">
        <div className="absolute inset-x-0 top-32 h-[480px] bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_0,rgba(129,140,248,0.4),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(15,118,110,0.8),rgba(15,23,42,1))]" />
      </div>

      {/* верхній блок з хвилею */}
      <header className="relative overflow-hidden pb-20 pt-10 sm:pt-12">
        {/* хвиля */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-0">
          <svg
            className="h-32 w-full text-sky-800/90"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0f172a" stopOpacity="0.0" />
                <stop offset="40%" stopColor="#0f172a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#020617" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g className="wave-path">
              <path
                fill="url(#waveGradient)"
                d="M0,224L48,208C96,192,192,160,288,149.3C384,139,480,149,576,149.3C672,149,768,139,864,133.3C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </g>
          </svg>
        </div>

        {/* бульбашки */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="bubble bubble-slow left-[10%]" />
          <div className="bubble bubble-fast left-[35%]" />
          <div className="bubble bubble-slow left-[60%]" />
          <div className="bubble bubble-fast left-[80%]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          {/* топ-навігація */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-md shadow-slate-300/60 backdrop-blur">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                UH
              </div>
              <div className="text-[11px]">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Ukrainian History Hub
                </div>
                <div className="text-xs font-medium text-slate-700">
                  Таймлайн історії: Україна & Світ
                </div>
              </div>
            </div>

            <button className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-slate-50 shadow-lg shadow-slate-900/40">
              Кабінет
            </button>
          </div>

          {/* таби */}
          <div className="mt-2 inline-flex max-w-xl flex-wrap items-stretch rounded-3xl bg-white/80 p-1 shadow-lg shadow-slate-300/60 backdrop-blur">
            <button className="flex-1 rounded-3xl bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-50">
              Таймлайн
            </button>
            <button className="flex-1 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Про платформу
            </button>
          </div>

          {/* заголовок та опис */}
          <div className="mt-4 max-w-3xl space-y-3">
            <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Таймлайн історії:{" "}
              <span className="text-sky-700">Україна</span> /{" "}
              <span className="text-indigo-700">Світ</span>
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              Скроль униз: зліва — <span className="font-semibold">історія України</span>, справа —{" "}
              <span className="font-semibold">всесвітня історія</span>. Кожен
              блок відповідає шкільній програмі та рівню складності.
            </p>
          </div>
        </div>
      </header>

      {/* основний таймлайн */}
      <section className="relative pb-24 pt-6">
        {/* центральна лінія */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
          <div className="h-full w-px bg-cyan-200/40" />
        </div>

        <div className="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
          {timeline.map((era, index) => (
            <EraCard key={era.id} era={era} index={index} />
          ))}
        </div>

        <footer className="mt-8 text-center text-xs text-slate-400">
          Ukrainian History Hub · {new Date().getFullYear()}
        </footer>
      </section>

      {/* глобальні стилі для анімацій */}
      <style jsx global>{`
        .wave-path {
          animation: waveMove 18s linear infinite;
          transform-origin: center;
        }

        @keyframes waveMove {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .bubble {
          position: absolute;
          bottom: 0;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: rgba(191, 219, 254, 0.6);
          box-shadow: 0 0 20px rgba(191, 219, 254, 0.9);
        }

        .bubble-slow {
          animation: bubbleUp 18s ease-in-out infinite;
        }

        .bubble-fast {
          animation: bubbleUp 12s ease-in-out infinite;
        }

        @keyframes bubbleUp {
          0% {
            transform: translateY(20px) scale(0.6);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateY(-420px) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
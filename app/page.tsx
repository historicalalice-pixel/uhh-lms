// app/page.tsx
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
    label: "Передісторія",
    schoolPeriod: "5 клас / вступ до історії",
    ukraine: {
      title: "Передісторія та давні землероби",
      period: "до I тис. до н. е.",
      tagline: "Перші люди на території України",
      summary:
        "На українських землях з’являються стоянки первісних людей, мисливські стоянки, пізніше — землеробські культури (зокрема трипільська).",
      facts: [
        "Стоянки біля Королевого, Мізина, Кирилівки — ключові археологічні пам’ятки.",
        "Трипільська культура — великі поселення, розписаний посуд і землеробство.",
        "Побут, вірування та перехід до землеробства — базові теми шкільної програми.",
      ],
    },
    world: {
      title: "Первісне суспільство",
      period: "кам’яний вік — бронзовий вік",
      tagline: "Походження людини та перші цивілізації",
      summary:
        "Учні вивчають еволюцію людини, перші знаряддя праці, перехід до землеробства та виникнення ранніх цивілізацій.",
      facts: [
        "Австралопітеки, неандертальці, кроманьйонці — основні етапи розвитку людини.",
        "Неолітична революція — перехід до осілого життя та землеробства.",
        "Перші цивілізації Месопотамії та Єгипту — вступ до історії Стародавнього світу.",
      ],
    },
  },
  {
    id: "antiquity",
    label: "Античність і ранні держави",
    schoolPeriod: "6 клас / Історія стародавнього світу",
    ukraine: {
      title: "Скіфи, античні міста та ранні держави",
      period: "I тис. до н. е. — I тис. н. е.",
      tagline: "Зустріч степу та античної цивілізації",
      summary:
        "На території України існують скіфські та сарматські об’єднання, виникають грецькі міста-колонії та перші ранньодержавні утворення.",
      facts: [
        "Скіфські кургани та золото — візитівка археології степової України.",
        "Ольвія, Херсонес, Тіра — античні поліси на чорноморському узбережжі.",
        "Підготовка до вивчення Київської Русі та середньовічних держав.",
      ],
    },
    world: {
      title: "Антична Греція та Рим",
      period: "VIII ст. до н. е. — V ст. н. е.",
      tagline: "Демократія, республіка та імперія",
      summary:
        "Учні знайомляться з полісами Греції, античною культурою, становленням Римської республіки та її перетворенням на імперію.",
      facts: [
        "Афіни, Спарта, Олімпійські ігри, громадянство та участь у політиці.",
        "Римська республіка, завоювання та Римська імперія.",
        "Спадок античності: право, архітектура, філософія та література.",
      ],
    },
  },
  // далі будуть наступні епохи за тим самим шаблоном
];

function EraColumn({
  side,
  align,
}: {
  side: EraSide;
  align: "left" | "right";
}) {
  return (
    <div
      className={
        align === "left"
          ? "md:pr-8 text-left"
          : "md:pl-8 text-left md:text-right"
      }
    >
      <div className="mb-2 text-[0.7rem] tracking-[0.25em] uppercase text-slate-500">
        {side.period}
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-1">
        {side.title}
      </h3>
      <p className="text-sm font-medium text-sky-700 mb-3">
        {side.tagline}
      </p>
      <p className="text-sm text-slate-800 mb-3">{side.summary}</p>
      <ul className="space-y-1.5 text-sm text-slate-700">
        {side.facts.map((fact, i) => (
          <li key={i} className="flex gap-2 text-left">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 text-slate-900">
      {/* ШАПКА З ВИПАДАЮЧИМ МЕНЮ */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-xs tracking-[0.35em] uppercase text-slate-500">
            Ukrainian History Hub
          </div>

          <nav className="flex items-center gap-4 text-sm text-slate-700">
            <a href="#timeline" className="hover:text-sky-700">
              Таймлайн
            </a>
            <a href="#courses" className="hidden sm:inline hover:text-sky-700">
              Курси
            </a>
            <a href="#blog" className="hidden sm:inline hover:text-sky-700">
              Блог
            </a>

            {/* Дропдаун «Розділи» */}
            <div className="relative">
              <button className="flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-sky-400 hover:text-sky-700">
                Розділи
                <span className="text-[0.6rem]">▾</span>
              </button>
              <div className="absolute right-0 mt-1 w-44 rounded-xl border border-slate-200 bg-white/95 p-2 text-xs text-slate-700 shadow-lg backdrop-blur hidden group-hover:block md:group-hover:block peer-hover:block">
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#timeline"
                      className="block rounded-lg px-2 py-1 hover:bg-slate-100"
                    >
                      Таймлайн: Україна & Світ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#courses"
                      className="block rounded-lg px-2 py-1 hover:bg-slate-100"
                    >
                      Навчальні курси
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blog"
                      className="block rounded-lg px-2 py-1 hover:bg-slate-100"
                    >
                      Статті та конспекти
                    </a>
                  </li>
                  <li>
                    <a
                      href="#profile"
                      className="block rounded-lg px-2 py-1 hover:bg-slate-100"
                    >
                      Кабінет учня
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* КОНТЕНТ */}
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10" id="timeline">
        {/* Хедер сторінки */}
        <section className="mb-14 text-center">
          <p className="mb-2 text-xs tracking-[0.35em] uppercase text-slate-500">
            Ukrainian History Hub
          </p>
          <h1 className="mb-3 text-3xl sm:text-4xl font-semibold">
            Таймлайн історії: Україна &amp; Світ
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-700">
            Скролюй униз: зліва —{" "}
            <span className="font-medium text-sky-700">
              історія України
            </span>
            , справа —{" "}
            <span className="font-medium text-violet-700">
              всесвітня історія
            </span>{" "}
            у межах шкільної програми. Мінімум рамок, максимум змісту —
            як у вертикальній подорожі, але по історії.
          </p>
        </section>

        {/* ВЕРТИКАЛЬНИЙ ТАЙМЛАЙН БЕЗ ПЛИТОК */}
        <section className="relative">
          {/* центральна вісь */}
          <div className="pointer-events-none absolute left-1/2 top-0 -ml-px h-full w-px bg-gradient-to-b from-sky-300 via-slate-300 to-violet-300" />

          <div className="space-y-28">
            {timeline.map((era) => (
             <section
  key={era.id}
  id={era.id}
  className="relative min-h-[60vh] scroll-mt-24 pt-10"
>

              >
                {/* маркер на осі */}
                <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-slate-100 shadow-[0_0_0_4px_rgba(148,163,184,0.8)]" />
                  <div className="relative -mt-[10px] h-5 w-5 rounded-full bg-gradient-to-br from-sky-400 to-violet-400 opacity-90 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
                </div>

                {/* заголовок епохи */}
                <div className="mb-8 flex flex-col items-center gap-2 text-center">
                  <span className="text-[0.7rem] tracking-[0.3em] uppercase text-slate-500">
                    {era.label}
                  </span>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-[0.7rem] text-slate-600 border border-slate-200">
                    {era.schoolPeriod}
                  </span>
                </div>

                {/* два текстові стовпці */}
                <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
                  <div>
                    <div className="mb-1 text-[0.65rem] tracking-[0.25em] uppercase text-slate-500">
                      Історія України
                    </div>
                    <EraColumn side={era.ukraine} align="left" />
                  </div>

                  <div>
                    <div className="mb-1 text-[0.65rem] tracking-[0.25em] uppercase text-slate-500 text-left md:text-right">
                      Всесвітня історія
                    </div>
                    <EraColumn side={era.world} align="right" />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Заглушки під інші розділи (щоб було куди вести меню) */}
        <section
          id="courses"
          className="mt-24 border-t border-slate-200 pt-10 text-sm text-slate-700"
        >
          <h2 className="mb-2 text-lg font-semibold">
            Курси (буде далі)
          </h2>
          <p>
            Тут з’являться структуровані онлайн-курси з історії України та
            всесвітньої історії з уроками, тестами й прогресом учня.
          </p>
        </section>

        <section
          id="blog"
          className="mt-16 border-t border-slate-200 pt-10 text-sm text-slate-700"
        >
          <h2 className="mb-2 text-lg font-semibold">
            Статті та конспектиІ
          </h2>
          <p>
            Блог і база знань з короткими конспектами до тем, підбірками
            джерел, картами та додатковими матеріалами для вчителів.
          </p>
        </section>

        <section
          id="profile"
          className="mt-16 border-t border-slate-200 pt-10 text-sm text-slate-700"
        >
          <h2 className="mb-2 text-lg font-semibold">
            Кабінет учня (прототип)
          </h2>
          <p>
            Тут планується кабінет з прогресом за темами, списком
            пройдених уроків і досягненнями. Технічно це буде окремий
            розділ LMS із авторизацією.
          </p>
        </section>
      </main>
    </div>
  );
}

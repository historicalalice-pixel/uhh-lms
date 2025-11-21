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
      period: "до І тис. до н. е.",
      tagline: "Перші люди на території України",
      summary:
        "На українських землях зʼявляються стоянки первісних людей, мисливські стоянки, пізніше — землеробські культури (зокрема трипільська).",
      facts: [
        "Стоянки біля Королевого, Мізина, Кирилівки — археологічні памʼятки.",
        "Трипільська культура — великі поселення, розписаний посуд.",
        "Побут, вірування та перехід до землеробства — базові теми шкільної програми.",
      ],
    },
    world: {
      title: "Первісне суспільство",
      period: "камʼяний вік – бронзовий вік",
      tagline: "Походження людини та перші цивілізації",
      summary:
        "Учні вивчають еволюцію людини, перші знаряддя праці, перехід до землеробства та виникнення ранніх цивілізацій.",
      facts: [
        "Австралопітеки, неандертальці, кроманьйонці — ключові види.",
        "Неолітична революція — перехід до осілого життя.",
        "Перші цивілізації Месопотамії та Єгипту — вступ до історії Стародавнього світу.",
      ],
    },
  },
  {
    id: "antiquity",
    label: "Античність і ранні держави",
    schoolPeriod: "6 клас",
    ukraine: {
      title: "Скіфи, грецькі міста та ранні держави",
      period: "І тис. до н. е. – ІХ ст.",
      tagline: "Степи, кочівники та античні поліси",
      summary:
        "На території України існують скіфські й сарматські племена, виникають грецькі міста-колонії на узбережжі Чорного моря.",
      facts: [
        "Скіфські кургани — важливі археологічні джерела.",
        "Ольвія, Херсонес, Тіра — грецькі поліси на території України.",
        "Формуються торгові шляхи й культурні контакти з античним світом.",
      ],
    },
    world: {
      title: "Стародавній світ",
      period: "Єгипет, Месопотамія, Греція, Рим",
      tagline: "Цивілізації, міфи, демократія",
      summary:
        "Учні знайомляться з основними цивілізаціями Стародавнього світу: суспільство, влада, релігія, культура, перші закони.",
      facts: [
        "Кодекс Хаммурапі, піраміди Єгипту, Олімпійські ігри.",
        "Афінська демократія та Римська республіка / імперія.",
        "Початок християнства та падіння Західної Римської імперії.",
      ],
    },
  },
  {
    id: "kyivan-rus",
    label: "Середньовіччя",
    schoolPeriod: "7 клас",
    ukraine: {
      title: "Київська Русь",
      period: "ІХ – початок XIII ст.",
      tagline: "Держава з центром у Києві",
      summary:
        "Формується Київська Русь, відбувається хрещення Русі, розвиваються міста, культура, правові норми («Руська правда»).",
      facts: [
        "Князі Олег, Ігор, Ольга, Святослав, Володимир, Ярослав Мудрий.",
        "988 рік — хрещення Русі Володимиром.",
        "Київ — один із найбільших центрів Європи свого часу.",
      ],
    },
    world: {
      title: "Європейське Середньовіччя",
      period: "V – XV ст.",
      tagline: "Феодалізм, замки, церкви, хрестові походи",
      summary:
        "Учні вивчають феодальні відносини, роль церкви, міста, ремесла, хрестові походи та формування європейських королівств.",
      facts: [
        "Лен, васалітет, станове суспільство.",
        "Хрестові походи та зіткнення християнського і мусульманського світів.",
        "Становлення Англії, Франції, Священної Римської імперії.",
      ],
    },
  },
  {
    id: "cossack",
    label: "Ранній Новий час",
    schoolPeriod: "8 клас",
    ukraine: {
      title: "Козацька доба та Гетьманщина",
      period: "XVI – XVIII ст.",
      tagline: "Запорозька Січ та боротьба за автономію",
      summary:
        "Козацтво стає військовою силою й символом свободи, вибухає Національно-визвольна війна під проводом Богдана Хмельницького.",
      facts: [
        "Запорозька Січ — військово-політичний центр козаків.",
        "1648–1657 — Національно-визвольна війна.",
        "Гетьманщина зі своєю адміністрацією, правом та військом.",
      ],
    },
    world: {
      title: "Великі географічні відкриття та абсолютизм",
      period: "XVI – XVIII ст.",
      tagline: "Колоніальні імперії та зміна карти світу",
      summary:
        "Епоха відкриттів, формування колоніальних імперій, абсолютні монархії, наукова революція та перші просвітницькі ідеї.",
      facts: [
        "Колумб, Магеллан, да Ґама — відкриття нових шляхів.",
        "Франція Людовіка XIV як приклад абсолютизму.",
        "Формування Атлантичної торгівлі та колоніальної системи.",
      ],
    },
  },
  {
    id: "xix",
    label: "XIX століття",
    schoolPeriod: "9 клас",
    ukraine: {
      title: "Українські землі у складі імперій",
      period: "кінець XVIII – початок XX ст.",
      tagline: "Національне відродження та модернізація",
      summary:
        "Українські території входять до Російської та Австрійської імперій, формується модерна українська нація.",
      facts: [
        "Кирило-Мефодіївське братство та інші гуртки.",
        "Тарас Шевченко, Пантелеймон Куліш, Іван Франко, Леся Українка.",
        "Заборони української мови (Валуєвський циркуляр, Емський указ).",
      ],
    },
    world: {
      title: "XIX століття у світі",
      period: "індустріальна доба та національні рухи",
      tagline: "Пар, фабрики, революції",
      summary:
        "Учні вивчають промислову революцію, формування націй, революції 1848 року, обʼєднання Італії та Німеччини.",
      facts: [
        "Парові машини, фабрики, розвиток міст.",
        "Революції та боротьба за права й конституції.",
        "Колоніальний поділ Африки, посилення імперій.",
      ],
    },
  },
  {
    id: "xx",
    label: "XX століття",
    schoolPeriod: "10 клас",
    ukraine: {
      title: "Україна у XX столітті",
      period: "1914 – 1991",
      tagline: "Війни, УНР, СРСР, репресії, відновлення незалежності",
      summary:
        "Українці переживають дві світові війни, Голодомор, репресії, створення та ліквідацію УНР, післявоєнну відбудову й шлях до Незалежності.",
      facts: [
        "1917–1921 — Українська революція та боротьба за державність.",
        "1932–1933 — Голодомор.",
        "Чорнобильська катастрофа та дисидентський рух.",
      ],
    },
    world: {
      title: "Світ у XX столітті",
      period: "1914 – 1991",
      tagline: "Світові війни, тоталітаризми, холодна війна",
      summary:
        "Шкільна програма охоплює Першу й Другу світові, нацизм і сталінізм, ООН, деколонізацію та холодну війну.",
      facts: [
        "Перша світова війна та Версальська система.",
        "Друга світова війна, Голокост, Нюрнберзький процес.",
        "Протистояння США та СРСР, гонка озброєнь.",
      ],
    },
  },
  {
    id: "independence",
    label: "Сучасність",
    schoolPeriod: "11 клас",
    ukraine: {
      title: "Незалежна Україна",
      period: "з 1991 року",
      tagline: "Незалежність, революції, війна з росією",
      summary:
        "Україна проголошує незалежність, проходить через економічні кризи, революції та повномасштабну війну, виборюючи місце в Європі.",
      facts: [
        "24 серпня 1991 року — Акт проголошення незалежності.",
        "2004 та 2013–2014 — Помаранчева революція й Революція Гідності.",
        "З 2014 року — російсько-українська війна, повномасштабне вторгнення в 2022.",
      ],
    },
    world: {
      title: "Світ після 1991 року",
      period: "кінець XX – початок XXI ст.",
      tagline: "Глобалізація, технології, нові виклики",
      summary:
        "Учні вивчають глобалізацію, розвиток ЄС, інформаційні технології, тероризм, екологічні проблеми та нові міжнародні конфлікти.",
      facts: [
        "Падіння Берлінського муру та розпад СРСР.",
        "Розвиток Європейського Союзу та розширення НАТО.",
        "Інтернет, соціальні мережі, ІТ-революція.",
      ],
    },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      {/* Шапка */}
      <header className="fixed inset-x-0 top-0 z-20 flex flex-col items-center gap-2 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent pb-6 pt-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Ukrainian History Hub
        </p>
        <h1 className="text-center text-2xl font-semibold md:text-4xl">
          Таймлайн історії: Україна &amp; Світ
        </h1>
        <p className="max-w-2xl text-center text-sm text-slate-400 md:text-base">
          Скролюй униз: зліва —{" "}
          <span className="text-sky-300">історія України</span>, справа —{" "}
          <span className="text-violet-300">всесвітня історія</span> у рамках
          шкільної програми.
        </p>
        <p className="text-[0.7rem] text-slate-500">
          Далі тут будуть уроки, тести, карти та відео для кожного блоку.
        </p>
      </header>

      {/* Основний таймлайн */}
      <div className="relative mx-auto max-w-6xl px-4 pb-32 pt-40">
        {/* Вертикальна вісь по центру */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-sky-400/50 via-slate-700/60 to-violet-400/50"
          aria-hidden="true"
        />

        <div className="space-y-28 md:space-y-36">
          {timeline.map((row, index) => (
            <section
              key={row.id}
              className="relative grid min-h-[60vh] items-stretch gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
            >
              {/* Точка на осі */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.9)]" />
              </div>

              {/* Лейбл періоду */}
              <div className="pointer-events-none absolute left-1/2 top-3 flex -translate-x-1/2 flex-col items-center text-center text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
                <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
                  {row.label}
                </span>
                <span className="mt-1 text-[0.65rem] text-slate-500">
                  {row.schoolPeriod}
                </span>
              </div>

              {/* Ліва колонка — Україна */}
              <div className="flex items-center md:pr-10">
                <EraCard
                  side="ukraine"
                  accent="sky"
                  data={row.ukraine}
                  align="right"
                  index={index}
                />
              </div>

              {/* Права колонка — Світ */}
              <div className="flex items-center md:pl-10">
                <EraCard
                  side="world"
                  accent="violet"
                  data={row.world}
                  align="left"
                  index={index}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

function EraCard({
  side,
  accent,
  data,
  align,
  index,
}: {
  side: "ukraine" | "world";
  accent: "sky" | "violet";
  data: EraSide;
  align: "left" | "right";
  index: number;
}) {
  const accentBg =
    accent === "sky"
      ? "from-sky-500/15 via-slate-900/80 to-slate-900/90"
      : "from-violet-500/15 via-slate-900/80 to-slate-900/90";

  const accentBorder =
    accent === "sky" ? "border-sky-500/40" : "border-violet-500/40";

  const accentDot =
    accent === "sky" ? "bg-sky-400" : "bg-violet-400";

  const label =
    side === "ukraine" ? "Історія України" : "Всесвітня історія";

  return (
    <article
      className={`relative w-full max-w-xl rounded-3xl border bg-gradient-to-br px-6 py-6 shadow-[0_25px_80px_rgba(0,0,0,0.75)] backdrop-blur md:px-8 md:py-8 ${accentBg} ${accentBorder} ${
        align === "right" ? "ml-auto" : "mr-auto"
      }`}
    >
      {/* Наклейка зверху */}
      <div className="mb-3 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${accentDot}`} />
          <span>{label}</span>
        </div>
        <span className="text-[0.65rem] text-slate-500">
          Блок #{index + 1}
        </span>
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          {data.period}
        </p>
        <h2 className="text-lg font-semibold md:text-2xl">{data.title}</h2>
        <p
          className={`text-sm md:text-base ${
            accent === "sky" ? "text-sky-300" : "text-violet-300"
          }`}
        >
          {data.tagline}
        </p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-200/95 md:text-base">
        {data.summary}
      </p>

      <ul className="mt-3 space-y-1.5 text-sm text-slate-300/90">
        {data.facts.map((fact, i) => (
          <li key={i} className="flex gap-2">
            <span
              className={`mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${accentDot}`}
            />
            <span>{fact}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between text-[0.7rem] text-slate-500">
        <span>Скроль далі ↓</span>
        <span>Надалі тут будуть уроки та тести</span>
      </div>
    </article>
  );
}

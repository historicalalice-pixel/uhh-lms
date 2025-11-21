"use client";

// app/page.tsx
import React from "react";

type EraSide = {
  title: string;
  period: string;
  tagline?: string;
  summary?: string;
  points: string[];
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
        "На українських землях з'являються стоянки первісних людей, мисливські стоянки, пізніше — землеробські культури (зокрема трипільська).",
      points: [
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
      points: [
        "Австралопітеки, неандертальці, кроманьйонці — ключові види.",
        "Неолітична революція — перехід до осілого життя.",
        "Перші цивілізації Месопотамії, Єгипту, Індії та Китаю."
      ]
    }
  },
  {
    id: "antiquity",
    label: "Античність",
    schoolPeriod: "5–6 класи",
    ukraine: {
      title: "Українські землі в добу античності",
      period: "І тис. до н. е. — І тис. н. е.",
      tagline: "Грецькі колонії та скіфський світ",
      summary:
        "Північне Причорномор’я стає частиною античної ойкумени, з’являються міста-поліси та кочові об’єднання.",
      points: [
        "Ольвія, Херсонес, Тіра — грецькі колонії на узбережжі Чорного моря.",
        "Скіфи та сармати — кочові народи степу.",
        "Розвинена торгівля між степом і античним світом."
      ]
    },
    world: {
      title: "Античний світ",
      period: "І тис. до н. е. — V ст. н. е.",
      tagline: "Греція та Рим",
      summary:
        "Формування принципів демократії, права та міської культури, які потім вплинули на всю європейську історію.",
      points: [
        "Афіни та Спарта — моделі політичного устрою.",
        "Римська республіка → Римська імперія.",
        "Велике переселення народів і падіння Західної Римської імперії."
      ]
    }
  },
  {
    id: "kyivan-rus",
    label: "Київська Русь",
    schoolPeriod: "6–7 класи",
    ukraine: {
      title: "Київська Русь та Русь-Україна",
      period: "ІХ–ХІІІ ст.",
      tagline: "Формування державності на українських землях",
      summary:
        "Київ стає центром потужної середньовічної держави, яка інтегрована в європейський політичний простір.",
      points: [
        "Князі Олег, Ігор, Ольга, Святослав, Володимир та Ярослав.",
        "Прийняття християнства 988 року — ключова культурна подія.",
        "Руські міста, літописи, розвиток ремесел і торгівлі."
      ]
    },
    world: {
      title: "Середньовічна Європа",
      period: "V–XV ст.",
      tagline: "Феодалізм, християнство, хрестові походи",
      summary:
        "Європа поступово виходить із раннього Середньовіччя, формуються королівства, церкви та міські комуни.",
      points: [
        "Формування феодальних відносин та станового суспільства.",
        "Роль католицької церкви й папства.",
        "Хрестові походи, формування міст і цехів."
      ]
    }
  },
  {
    id: "lithuanian-polish",
    label: "Литовсько-польська доба",
    schoolPeriod: "7 клас",
    ukraine: {
      title: "Українські землі у складі Литви та Польщі",
      period: "ХІV–XVI ст.",
      tagline: "Між двома державами",
      summary:
        "Українські землі опиняються в складі Великого князівства Литовського, а потім Речі Посполитої.",
      points: [
        "Кревська та Люблінська унії — зміна політичної мапи.",
        "Магдебурзьке право та розвиток міст.",
        "Посилення кріпацтва та полонізація української шляхти."
      ]
    },
    world: {
      title: "Пізнє Середньовіччя та Ранній Новий час",
      period: "ХV–XVI ст.",
      tagline: "Великі географічні відкриття",
      summary:
        "Формується світова торгівля, посилюються монархії, починається Реформація.",
      points: [
        "Плавання Колумба, Магеллана та інших мореплавців.",
        "Реформація і Контрреформація в Європі.",
        "Становлення абсолютизму у Франції, Іспанії, Англії."
      ]
    }
  },
  {
    id: "cossack-age",
    label: "Козацька доба",
    schoolPeriod: "8 клас",
    ukraine: {
      title: "Козацька держава",
      period: "XVI–XVIII ст.",
      tagline: "Від Запорозької Січі до Гетьманщини",
      summary:
        "Козацтво стає військово-політичним чинником і створює власну державу — Гетьманщину.",
      points: [
        "Запорозька Січ як центр козацької демократії.",
        "Національно-визвольна війна під проводом Богдана Хмельницького.",
        "Гетьманщина, поділи українських земель між сусідніми державами."
      ]
    },
    world: {
      title: "Ранній Новий час у світі",
      period: "XVI–XVIII ст.",
      tagline: "Монархії, реформації, революції",
      summary:
        "Європейські держави конкурують за колонії, формується міжнародна система балансів.",
      points: [
        "Тридцятилітня війна та Вестфальський мир.",
        "Англійська революція та становлення парламентаризму.",
        "Початок Просвітництва та наукової революції."
      ]
    }
  },
  {
    id: "xix-century",
    label: "XIX століття",
    schoolPeriod: "8–9 класи",
    ukraine: {
      title: "Українські землі в XIX ст.",
      period: "кінець XVIII — початок ХХ ст.",
      tagline: "Національне відродження",
      summary:
        "На тлі індустріалізації та змін імперій формується модерна українська нація.",
      points: [
        "Ліквідація козацтва й автономії, кріпосне право та його скасування.",
        "Кирило-Мефодіївське братство, «Руська трійця», громадівський рух.",
        "Розвиток української літератури, науки, політичних партій."
      ]
    },
    world: {
      title: "XIX століття у світі",
      period: "1789–1914 рр.",
      tagline: "Революції та індустріалізація",
      summary:
        "Перехід до індустріального суспільства, національні рухи й імперські проєкти.",
      points: [
        "Французька революція та наполеонівські війни.",
        "Промислова революція, залізниці, урбанізація.",
        "Об’єднання Німеччини та Італії, колоніальний поділ світу."
      ]
    }
  },
  {
    id: "xx-century",
    label: "XX століття",
    schoolPeriod: "9–11 класи",
    ukraine: {
      title: "Україна у ХХ ст.",
      period: "1914–1991 рр.",
      tagline: "Війни, тоталітаризм і шлях до незалежності",
      summary:
        "Українці переживають дві світові війни, тоталітарні режими та формування власної державності.",
      points: [
        "Перша світова війна та Українська революція 1917–1921 рр.",
        "Голодомор, сталінські репресії, Друга світова війна.",
        "Утворення УРСР, дисидентський рух, Чорнобиль."
      ]
    },
    world: {
      title: "Світ у ХХ ст.",
      period: "1914–1991 рр.",
      tagline: "Світові війни та холодна війна",
      summary:
        "Людство стикається з глобальними конфліктами, тоталітаризмом і технологічними проривами.",
      points: [
        "Перша та Друга світові війни.",
        "Фашизм, нацизм, комуністичні режими.",
        "Холодна війна, створення ООН, ядерна зброя."
      ]
    }
  },
  {
    id: "independence",
    label: "Незалежність",
    schoolPeriod: "старша школа",
    ukraine: {
      title: "Незалежна Україна",
      period: "з 1991 р.",
      tagline: "Держава в сучасному світі",
      summary:
        "Україна стає суб’єктом міжнародної політики й проходить складний шлях трансформацій.",
      points: [
        "Акт проголошення незалежності та референдум 1991 року.",
        "Конституція 1996 року, політичні кризи та реформи.",
        "Революція Гідності, російсько-українська війна, європейський курс."
      ]
    },
    world: {
      title: "Сучасний світ",
      period: "кінець ХХ — початок ХХІ ст.",
      tagline: "Глобалізація та цифрова епоха",
      summary:
        "Планета стає дедалі більш взаємопов’язаною, а виклики — глобальними.",
      points: [
        "Розпад СРСР і поява нових незалежних держав.",
        "Інтернет, цифрові технології, інформаційне суспільство.",
        "Глобальні виклики: клімат, міграції, безпека."
      ]
    }
  }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e6f4ff] via-[#eaf2ff] to-[#dde8ff] text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col px-4 pb-24 pt-10">
        {/* Header */}
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white shadow-md">
              UH
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-slate-900">
                Ukrainian History Hub
              </h1>
              <p className="text-xs text-slate-500">
                Таймлайн історії: Україна &amp; Світ
              </p>
            </div>
          </div>

          {/* місце для майбутнього випадаючого меню з логотипу */}
        </header>

        {/* Intro */}
        <section className="mb-10 max-w-3xl">
          <p className="text-sm text-slate-600">
            Скроль униз: зліва — <span className="font-semibold">історія України</span>,
            справа — <span className="font-semibold">всесвітня історія</span> у межах шкільної програми.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Кожен блок відповідає приблизному шкільному періоду (класу). Це база для майбутніх уроків,
            тестів та інтерактивних карт.
          </p>
        </section>

        {/* Vertical line як на deep-sea */}
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-indigo-300/40 via-indigo-400/70 to-indigo-300/40" />

          <div className="space-y-14">
            {timeline.map((era, index) => (
              <section
                key={era.id}
                className="relative grid gap-8 rounded-3xl bg-white/70 px-8 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/60 backdrop-blur-sm md:grid-cols-2"
              >
                {/* маркер на лінії */}
                <div className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2">
                  <div className="relative h-4 w-4">
                    <span className="absolute inset-0 animate-ping rounded-full bg-indigo-300/60" />
                    <span className="absolute inset-1 rounded-full bg-indigo-500 shadow-md" />
                  </div>
                </div>

                {/* Ліва частина — Україна */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Історія України
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    {era.schoolPeriod.toLowerCase()}
                  </p>

                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">
                    {era.label}
                  </h2>

                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-indigo-500">
                    {era.ukraine.period}
                  </p>

                  <h3 className="mt-3 text-sm font-semibold text-slate-900">
                    {era.ukraine.title}
                  </h3>

                  {era.ukraine.tagline && (
                    <p className="mt-1 text-sm text-indigo-600">
                      {era.ukraine.tagline}
                    </p>
                  )}

                  {era.ukraine.summary && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {era.ukraine.summary}
                    </p>
                  )}

                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {era.ukraine.points.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Права частина — Світ */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Всесвітня історія
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    {era.world.period}
                  </p>

                  <h3 className="mt-3 text-sm font-semibold text-slate-900">
                    {era.world.title}
                  </h3>

                  {era.world.tagline && (
                    <p className="mt-1 text-sm text-indigo-600">
                      {era.world.tagline}
                    </p>
                  )}

                  {era.world.summary && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {era.world.summary}
                    </p>
                  )}

                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {era.world.points.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Підпис внизу для орієнтиру */}
                  <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    Блок #{index + 1}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </div>

        <footer className="mt-10 text-center text-[11px] text-slate-400">
          Ukrainian History Hub © {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}

"use client";
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
    schoolPeriod: "6 клас / історія стародавнього світу",
    ukraine: {
      title: "Скіфи, античні поліси та ранні держави",
      period: "I тис. до н. е. — I тис. н. е.",
      tagline: "Степ, кочовики та античне узбережжя",
      summary:
        "На території України існують скіфські та сарматські об’єднання, виникають грецькі міста-колонії та перші ранньодержавні утворення.",
      facts: [
        "Скіфські кургани та золото — візитівка археології степової України.",
        "Ольвія, Херсонес, Тіра — античні поліси на чорноморському узбережжі.",
        "Передумови формування середньовічних держав на українських землях.",
      ],
    },
    world: {
      title: "Антична Греція та Рим",
      period: "VIII ст. до н. е. — V ст. н. е.",
      tagline: "Демократія, республіка, імперія",
      summary:
        "Античні поліси, Римська республіка та імперія формують політичні моделі й культурний спадок Європи.",
      facts: [
        "Афіни й Спарта: поліси, громадянство, участь у політиці.",
        "Римська республіка, завоювання, перетворення на імперію.",
        "Антична спадщина: право, архітектура, філософія, театр.",
      ],
    },
  },
  {
    id: "kyivan-rus",
    label: "Середньовіччя",
    schoolPeriod: "7 клас / Київська Русь та середньовічна Європа",
    ukraine: {
      title: "Київська Русь та князівства",
      period: "IX–XIV ст.",
      tagline: "Формування ранньої української державності",
      summary:
        "Виникнення та розквіт Київської Русі, християнізація, подальший поділ на князівства та боротьба з зовнішніми загрозами.",
      facts: [
        "Київ — центр великої держави, князі Володимир, Ярослав.",
        "Запровадження християнства і поява писемності.",
        "Роздробленість, Галицько-Волинська держава, монгольська навала.",
      ],
    },
    world: {
      title: "Середньовічна Європа",
      period: "V–XV ст.",
      tagline: "Феодалізм, церква, міста",
      summary:
        "Формується феодальний лад, посилюється роль церкви, розвиваються міста, ремесла й торгівля.",
      facts: [
        "Феодальна ієрархія, сеньйор і васал, кріпацтво.",
        "Католицька церква, хрестові походи, монастирі.",
        "Середньовічні міста, цехи, університети, рицарська культура.",
      ],
    },
  },
  {
    id: "cossacks",
    label: "Нова доба",
    schoolPeriod: "8 клас / Козацька держава та ранньомодерний світ",
    ukraine: {
      title: "Козацтво та Гетьманщина",
      period: "XVI–XVIII ст.",
      tagline: "Запорозька Січ і боротьба за автономію",
      summary:
        "Постання козацтва, Визвольна війна під проводом Богдана Хмельницького, формування Гетьманщини та її подальша доля.",
      facts: [
        "Запорозька Січ як військово-політичний центр українців.",
        "1648–1657 рр. — Національно-визвольна війна, постання Гетьманщини.",
        "Поділи Гетьманщини, Руїна, поступова ліквідація автономії Російською імперією.",
      ],
    },
    world: {
      title: "Ранньомодерна Європа",
      period: "XVI–XVIII ст.",
      tagline: "Реформація, абсолютизм, революції",
      summary:
        "Європа переживає Реформацію, релігійні війни, становлення абсолютних монархій та перші буржуазні революції.",
      facts: [
        "Реформація та Контрреформація, розкол західного християнства.",
        "Абсолютизм у Франції, Іспанії, інших державах.",
        "Англійська революція, перші парламенти та конституційні монархії.",
      ],
    },
  },
  {
    id: "xix-century",
    label: "XIX століття",
    schoolPeriod: "9 клас / Українські землі в імперіях",
    ukraine: {
      title: "Українські землі у складі імперій",
      period: "XIX ст.",
      tagline: "Національне відродження та модернізація",
      summary:
        "Українці живуть у Російській та Австрійській імперіях, формується нова українська еліта, розвивається культура та ідея незалежності.",
      facts: [
        "Кирило-Мефодіївське братство, діячі національного руху.",
        "Тарас Шевченко та інші культурні постаті.",
        "Скасування кріпацтва, індустріалізація, міграції населення.",
      ],
    },
    world: {
      title: "Світ у XIX столітті",
      period: "XIX ст.",
      tagline: "Індустріальна революція та імперіалізм",
      summary:
        "Індустріалізація, формування національних держав, колоніальна політика великих імперій.",
      facts: [
        "Парові машини, фабрики, урбанізація, залізниці.",
        "Об’єднання Німеччини й Італії, посилення націоналізму.",
        "Колоніальні імперії в Азії та Африці, світова торгівля.",
      ],
    },
  },
  {
    id: "xx-century",
    label: "XX століття",
    schoolPeriod: "10 клас / Україна та світ у XX ст.",
    ukraine: {
      title: "Україна у війнах та тоталітарних режимах",
      period: "1914–1991 рр.",
      tagline: "Війни, репресії, шлях до незалежності",
      summary:
        "Перша світова, визвольні змагання, Голодомор, Друга світова, радянський період і проголошення незалежності України.",
      facts: [
        "Українська революція 1917–1921 рр., спроби створення держави.",
        "Голодомор 1932–1933 рр., масові репресії, Друга світова війна.",
        "Дисидентський рух, Чорнобиль, проголошення незалежності 1991 р.",
      ],
    },
    world: {
      title: "Світові війни та «холодна війна»",
      period: "1914–1991 рр.",
      tagline: "Глобальні конфлікти та протистояння систем",
      summary:
        "Дві світові війни радикально змінюють карту світу, формується двополярний світ і відбувається протистояння між блоками.",
      facts: [
        "Перша світова війна, Версальська система, Ліга Націй.",
        "Друга світова війна, Голокост, ООН та післявоєнний устрій.",
        "Холодна війна, гонка озброєнь, деколонізація.",
      ],
    },
  },
  {
    id: "independence",
    label: "Незалежна Україна та сучасність",
    schoolPeriod: "11 клас / новітня історія",
    ukraine: {
      title: "Незалежна Україна",
      period: "з 1991 р.",
      tagline: "Становлення держави та боротьба за свободу",
      summary:
        "Формування політичної системи, економічні трансформації, Революція на граніті, Помаранчева революція, Революція Гідності та сучасна російсько-українська війна.",
      facts: [
        "Конституція України, багатопартійність, перші вибори.",
        "Помаранчева революція та Революція Гідності.",
        "Російсько-українська війна з 2014 року, повномасштабне вторгнення з 2022 року.",
      ],
    },
    world: {
      title: "Сучасний світ",
      period: "кін. XX — поч. XXI ст.",
      tagline: "Глобалізація, технології, нові виклики",
      summary:
        "Інтеграційні процеси, розвиток цифрових технологій, глобальні кризи та безпекові виклики.",
      facts: [
        "ЄС, НАТО, інші наддержавні об’єднання.",
        "Інтернет, інформаційне суспільство, технологічні революції.",
        "Глобальні виклики: клімат, міграції, безпека, пандемії.",
      ],
    },
  },
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
      {/* ШАПКА З ДРОПДАУНОМ З ЛОГОТИПУ */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Лого + дропдаун */}
          <div className="relative group">
            <button className="text-xs tracking-[0.35em] uppercase text-slate-600 hover:text-sky-700">
              Ukrainian History Hub
            </button>
            <div className="absolute left-0 mt-2 hidden w-52 rounded-xl border border-slate-200 bg-white/95 p-2 text-xs text-slate-700 shadow-lg backdrop-blur group-hover:block">
              <ul className="space-y-1">
                <li>
                  <a
                    href="#timeline"
                    className="block rounded-lg px-2 py-1 hover:bg-slate-100"
                  >
                    Таймлайн: Україна &amp; Світ
                  </a>
                </li>
                <li>
                  <a
                    href="#eras-gallery"
                    className="block rounded-lg px-2 py-1 hover:bg-slate-100"
                  >
                    Галерея епох
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="block rounded-lg px-2 py-1 hover:bg-slate-100"
                  >
                    Навчальні курси (LMS)
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

          {/* Справа — прості посилання */}
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
          </nav>
        </div>
      </header>

      {/* КОНТЕНТ */}
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10">
        {/* Хедер сторінки */}
        <section className="mb-10 text-center">
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
            у межах шкільної програми — від первісних людей до сучасності.
          </p>
        </section>

        {/* ГАЛЕРЕЯ ЕПОХ З КАРТИНКАМИ */}
        <section
          id="eras-gallery"
          className="mb-16 rounded-3xl bg-white/70 border border-slate-200 px-4 py-5"
        >
          <div className="mb-4 text-center text-sm font-medium text-slate-700">
            Візуальна стрічка епох
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {[
              { id: "prehistory", label: "Передісторія" },
              { id: "antiquity", label: "Античність" },
              { id: "kyivan-rus", label: "Київська Русь" },
              { id: "cossacks", label: "Козацька доба" },
              { id: "xix-century", label: "XIX століття" },
              { id: "xx-century", label: "XX століття" },
              { id: "independence", label: "Незалежність" },
            ].map((era) => (
              <a
                key={era.id}
                href={`#${era.id}`}
                className="group flex flex-col items-center gap-2"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                  {/* 
                    Сюди можна покласти реальні картинки.
                    Наприклад: /public/eras/prehistory.jpg і т.д.
                  */}
                  <img
                    src={`/eras/${era.id}.jpg`}
                    alt={era.label}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // простий fallback, якщо зображення ще немає
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="flex h-full w-full items-center justify-center text-xs text-slate-500 group-hover:text-sky-700">
                    {/* Текст-фолбек, якщо картинки ще немає */}
                    <span className="px-2 text-center">
                      {era.label}
                    </span>
                  </div>
                </div>
                <span className="text-[0.7rem] font-medium text-slate-600 group-hover:text-sky-700">
                  {era.label}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ВЕРТИКАЛЬНИЙ ТАЙМЛАЙН */}
        <section id="timeline" className="relative">
          {/* центральна вісь */}
          <div className="pointer-events-none absolute left-1/2 top-0 -ml-px h-full w-px bg-gradient-to-b from-sky-300 via-slate-300 to-violet-300" />

          <div className="space-y-28">
            {timeline.map((era) => (
              <section
                key={era.id}
                id={era.id}
                className="relative min-h-[60vh] scroll-mt-24 pt-10"
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

        {/* Заглушки під інші розділи */}
        <section
          id="courses"
          className="mt-24 border-t border-slate-200 pt-10 text-sm text-slate-700"
        >
          <h2 className="mb-2 text-lg font-semibold">
            Курси (LMS — буде далі)
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
            Статті та конспекти
          </h2>
          <p>
            Блог і база знань з короткими конспектами до тем, підбірками
            джерел, картами та додатковими матеріалами для вчителів і учнів.
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
            розділ LMS із авторизацією та прив’язкою до курсів.
          </p>
        </section>
      </main>
    </div>
  );
}

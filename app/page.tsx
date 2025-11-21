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

type EraGalleryItem = {
  id: string;
  title: string;
  caption: string;
  image: string;
};

// ----------------------------
// Галерея епох — Україна
// ----------------------------
const eraGalleryUkraine: EraGalleryItem[] = [
  { id: "ua-prehistory", title: "Передісторія", caption: "Передісторія", image: "/epochs/ua-prehistory.jpg" },
  { id: "ua-antiquity", title: "Античність", caption: "Античність", image: "/epochs/ua-antiquity.jpg" },
  { id: "ua-kyivanrus", title: "Київська Русь", caption: "Київська Русь", image: "/epochs/ua-kyivan-rus.jpg" },
  { id: "ua-cossacks", title: "Козацька доба", caption: "Козацька доба", image: "/epochs/ua-cossack-age.jpg" },
  { id: "ua-xix", title: "XIX століття", caption: "XIX століття", image: "/epochs/ua-19c.jpg" },
  { id: "ua-xx", title: "XX століття", caption: "XX століття", image: "/epochs/ua-20c.jpg" },
  { id: "ua-independence", title: "Незалежність", caption: "Незалежність", image: "/epochs/ua-independence.jpg" }
];

// ----------------------------
// Галерея епох — Світ
// ----------------------------
const eraGalleryWorld: EraGalleryItem[] = [
  { id: "world-prehistory", title: "Первісність", caption: "Передісторія", image: "/epochs/world-prehistory.jpg" },
  { id: "world-antiquity", title: "Античність", caption: "Античність", image: "/epochs/world-antiquity.jpg" },
  { id: "world-middleages", title: "Середньовіччя", caption: "Середньовіччя", image: "/epochs/world-middle-ages.jpg" },
  { id: "world-modern", title: "Новий час", caption: "Новий час", image: "/epochs/world-new-time.jpg" },
  { id: "world-xix", title: "XIX століття", caption: "XIX століття", image: "/epochs/world-19c.jpg" },
  { id: "world-xx", title: "XX століття", caption: "XX століття", image: "/epochs/world-20c.jpg" },
  { id: "world-xxi", title: "XXI століття", caption: "XXI століття", image: "/epochs/world-21c.jpg" }
];

// ----------------------------
// Таймлайн — контент Україна + Світ
// ----------------------------
const timeline: EraRow[] = [
  {
    id: "prehistory",
    label: "Передісторія",
    schoolPeriod: "5 клас / вступ до історії",
    ukraine: {
      title: "Передісторія та давні землероби",
      period: "до І тис. до н. е.",
      tagline: "Перші люди на території України",
      summary: "На українських землях з’являються стоянки первісних людей...",
      facts: [
        "Стоянки біля Королевого, Мізина, Кирилівки — археологічні памʼятки.",
        "Трипільська культура — великі поселення, розписаний посуд.",
        "Побут, вірування та перехід до землеробства — базові теми шкільної програми."
      ]
    },

    world: {
      title: "Первісне суспільство",
      period: "каменний вік — бронзовий вік",
      tagline: "Походження людини та перші цивілізації",
      summary: "Учні вивчають еволюцію людини, розвиток знарядь праці...",
      facts: [
        "Астралопітеки, неандертальці, кроманьйонці — ключові види.",
        "Неолітична революція — перехід до осілого життя.",
        "Перші цивілізації Месопотамії та Єгипту."
      ]
    }
  }
];

// ----------------------------
// Компонент картки з галереї
// ----------------------------
function EraGalleryCard({ item }: { item: EraGalleryItem }) {
  return (
    <div className="flex w-[120px] flex-col items-center gap-2">
      <div className="flex h-[96px] w-full items-center justify-center overflow-hidden rounded-3xl bg-white shadow-[0_12px_35px_rgba(15,23,42,0.13)]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="text-center text-[11px] text-slate-600">{item.caption}</div>
    </div>
  );
}

// ----------------------------
// Компонент секції з таймлайном
// ----------------------------
function EraCard({ row }: { row: EraRow }) {
  return (
    <article className="relative mx-auto mt-20 max-w-6xl rounded-3xl bg-white/70 p-10 shadow-[0_18px_70px_rgba(15,23,42,0.12)] backdrop-blur">
      <div className="grid grid-cols-1 gap-10 border-l border-r border-slate-300 md:grid-cols-2">
        {/* Україна */}
        <div className="pr-6">
          <div className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
            Історія України
          </div>
          <div className="text-xs text-slate-400">{row.ukraine.period}</div>
          <h3 className="mt-3 text-xl font-bold text-slate-800">{row.ukraine.title}</h3>
          <p className="mt-1 text-sm text-blue-600">{row.ukraine.tagline}</p>
          <p className="mt-3 text-sm text-slate-600">{row.ukraine.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {row.ukraine.facts.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span>•</span> {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Світ */}
        <div className="pl-6">
          <div className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
            Всесвітня історія
          </div>
          <div className="text-xs text-slate-400">{row.world.period}</div>
          <h3 className="mt-3 text-xl font-bold text-slate-800">{row.world.title}</h3>
          <p className="mt-1 text-sm text-purple-600">{row.world.tagline}</p>
          <p className="mt-3 text-sm text-slate-600">{row.world.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {row.world.facts.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span>•</span> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(30,60,200,0.6)]"></div>
    </article>
  );
}

// ----------------------------
// Головна сторінка
// ----------------------------
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#eef3f8] text-slate-900">
      
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white/40 px-6 py-4 backdrop-blur shadow">
        <div className="text-lg font-bold cursor-pointer">
          UHH
        </div>
        <div className="text-sm text-slate-700 cursor-pointer">
          Меню ▼
        </div>
      </header>

      <div className="pt-24 pb-10">
        
        {/* Hero title */}
        <h1 className="text-center text-3xl font-extrabold tracking-wide text-slate-800">
          Таймлайн історії України & Світу
        </h1>
        <p className="mt-2 text-center text-sm text-slate-500">
          Прокручуй вниз: зліва — історія України, справа — всесвітня історія.
        </p>

        {/* Gallery section */}
        <section className="mx-auto mb-20 mt-10 max-w-5xl rounded-3xl bg-white/70 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.15)] backdrop-blur">
          <h2 className="text-center text-sm font-semibold tracking-[0.28em] text-slate-500 uppercase">
            Візуальна стрічка епох
          </h2>

          {/* Україна */}
          <div className="mt-6">
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Історія України
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {eraGalleryUkraine.map((item) => (
                <EraGalleryCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Світ */}
          <div className="mt-10">
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Всесвітня історія
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {eraGalleryWorld.map((item) => (
                <EraGalleryCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        {timeline.map((row) => (
          <EraCard key={row.id} row={row} />
        ))}

        <div className="mt-20 pb-20 text-center text-xs text-slate-400">
          Ukrainian History Hub © 2025
        </div>
      </div>
    </main>
  );
}

"use client";

import React from "react";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020922] text-slate-50">
      {/* Підводний фон */}
      <UnderwaterBackground />

      {/* Хедер з хвилею */}
      <WaveHeader />

      {/* Контент таймлайну поверх води */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 pt-8 md:px-6 lg:px-8">
        {/* 🔽 СЮДИ ВСТАВ/ЗАЛИШ СВІЙ ІСНУЮЧИЙ ТАЙМЛАЙН-КОНТЕНТ
            - заголовок "Таймлайн історії: Україна & Світ"
            - опис "Скроль униз: зліва — історія України..."
            - усі блоки з України/Світ (карти, список фактів тощо)
        */}

        {/* приклад місця, де має бути твій контент */}
        {/* <YourTimelineComponent /> */}
      </section>
    </main>
  );
}

/* ---------------------- ПІДВОДНИЙ ФОН ---------------------- */

function UnderwaterBackground() {
  const bubbles = Array.from({ length: 14 });

  return (
    <>
      {/* Градієнт неба → поверхня → глибина */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,#dff4ff_0,#8fd8ff_26%,#0ea5e9_48%,#022b4a_72%,#020617_100%)]" />

      {/* Світлові промені зверху */}
      <div className="pointer-events-none absolute -top-72 left-1/2 h-[720px] w-[900px] -translate-x-1/2 opacity-55 mix-blend-screen light-rays" />

      {/* Бульбашки, що повільно піднімаються */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {bubbles.map((_, i) => (
          <span
            key={i}
            className="bubble absolute rounded-full bg-cyan-200/35"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${6 + Math.random() * 14}px`,
              height: `${6 + Math.random() * 14}px`,
              animationDuration: `${18 + Math.random() * 16}s`,
              animationDelay: `${-Math.random() * 24}s`,
              bottom: "-80px",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .light-rays {
          background: conic-gradient(
            from 200deg at 50% 0%,
            rgba(255, 255, 255, 0.13),
            transparent 40deg,
            transparent 80deg,
            rgba(255, 255, 255, 0.18),
            transparent 140deg,
            transparent 220deg,
            rgba(255, 255, 255, 0.1),
            transparent 320deg
          );
          filter: blur(40px);
        }

        @keyframes bubbleFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(0.9);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translate3d(-20px, -120vh, 0) scale(1.15);
            opacity: 0;
          }
        }

        .bubble {
          animation-name: bubbleFloat;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
}

/* ---------------------- ХВИЛЯ + ХЕДЕР ---------------------- */

function WaveHeader() {
  return (
    <header className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pt-6 md:px-6 lg:px-8">
      {/* Верхня панель: логотип + меню + "Кабінет" */}
      <div className="flex items-center justify-between gap-4">
        {/* Логотип-хаб */}
        <div className="flex items-center gap-3 rounded-full bg-white/85 px-4 py-2 shadow-lg shadow-sky-900/40 backdrop-blur-md">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">
            UH
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-medium tracking-[0.18em] text-sky-600">
              UKRAINIAN HISTORY
            </span>
            <span className="text-xs font-semibold tracking-[0.18em] text-slate-900">
              HUB
            </span>
          </div>
        </div>

        {/* Кнопка кабінету */}
        <button className="rounded-full bg-slate-900/80 px-5 py-2 text-sm font-semibold text-slate-50 shadow-lg shadow-sky-950/60 backdrop-blur-md hover:bg-slate-900/95">
          Кабінет
        </button>
      </div>

      {/* Карта-вкладки + заголовок сторінки */}
      <div className="mt-4 max-w-xl rounded-3xl bg-white/92 p-5 shadow-xl shadow-sky-900/40 backdrop-blur-md">
        <div className="mb-3 flex gap-3 text-[11px] font-medium tracking-[0.25em] text-slate-400">
          <span className="text-slate-500">ТАЙМЛАЙН</span>
          <span className="text-sky-500">ІСТОРІЇ</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Україна / Світ
        </h1>
        <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-500">
          Скроль униз: зліва — <span className="font-semibold">історія України</span>, справа —
          <span className="font-semibold"> всесвітня історія</span>. Кожен блок відповідає
          шкільній програмі та рівню складності.
        </p>
      </div>

      {/* SVG-хвиля, яка закриває перехід від неба до води */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-[120px]">
        <svg
          className="wave-svg h-full w-[200%] -translate-x-1/4"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className="wave-path"
            fill="#0ea5e9"
            fillOpacity="0.9"
            d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,181.3C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <style jsx>{`
        .wave-svg {
          animation: waveDrift 28s linear infinite;
        }

        .wave-path {
          filter: drop-shadow(0 -10px 25px rgba(15, 118, 178, 0.6));
        }

        @keyframes waveDrift {
          0% {
            transform: translateX(-25%);
          }
          50% {
            transform: translateX(-15%);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </header>
  );
}

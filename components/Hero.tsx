import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_30%)]" />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-8">
          <div className="inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 shadow-2xl shadow-blue-950/20 backdrop-blur">
            MVP для салонов, автосервисов и частных мастеров
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                ИИ-Администратор
              </span>{" "}
              для вашего бизнеса
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Автоматическая запись клиентов, ответы на вопросы 24/7 и дожим до оплаты
              в Telegram и WhatsApp. Заменяет администратора за 15 минут.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 text-center font-medium text-white shadow-lg shadow-blue-950/40 transition-colors hover:bg-blue-500"
            >
              Запустить бесплатно
            </a>
            <a
              href="#demo"
              className="rounded-xl border border-slate-700 px-8 py-4 text-center font-medium text-slate-300 transition-colors hover:bg-slate-900"
            >
              Смотреть демо
            </a>
          </div>

          <div className="grid max-w-3xl gap-3 pt-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-2xl font-semibold text-white">24/7</div>
              <div className="mt-1 text-sm text-slate-400">обработка заявок</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-2xl font-semibold text-white">15 мин</div>
              <div className="mt-1 text-sm text-slate-400">до первого запуска</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="text-2xl font-semibold text-white">+20%</div>
              <div className="mt-1 text-sm text-slate-400">потенциал выручки</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

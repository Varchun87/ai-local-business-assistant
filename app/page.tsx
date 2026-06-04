import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";

const features = [
  "Отвечает на типовые вопросы строго по прайсу",
  "Квалифицирует клиента и собирает контактные данные",
  "Подбирает свободное время и создает запись",
  "Передает сложные диалоги живому администратору"
];

const segments = [
  "Салоны красоты и барбершопы",
  "Автосервисы и шиномонтаж",
  "Частные мастера: бьюти, ремонт, обучение"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />

      <section id="demo" className="border-y border-slate-800 bg-slate-900/40 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Как работает MVP
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ассистент ведет клиента от первого сообщения до записи
            </h2>
            <div className="mt-8 grid gap-4">
              {features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-slate-300">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-blue-950/20">
            <div className="space-y-4 text-sm">
              <div className="max-w-[82%] rounded-2xl bg-slate-800 px-4 py-3 text-slate-200">
                Добрый вечер! Сколько стоит мужская стрижка и есть ли время завтра?
              </div>
              <div className="ml-auto max-w-[88%] rounded-2xl bg-blue-600 px-4 py-3 text-white">
                Здравствуйте! Мужская стрижка стоит 1 500 руб. Завтра свободно в 12:30 и 17:00. Какое время вам удобнее?
              </div>
              <div className="max-w-[78%] rounded-2xl bg-slate-800 px-4 py-3 text-slate-200">
                Давайте в 17:00.
              </div>
              <div className="ml-auto max-w-[88%] rounded-2xl bg-emerald-600 px-4 py-3 text-white">
                Отлично, записал вас на завтра в 17:00. Пришлю напоминание за 2 часа до визита.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Фокус-сегменты</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {segments.map((segment) => (
              <div key={segment} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-slate-300">
                {segment}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Запустите тест на 3 дня</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Подключим один канал, загрузим прайс и проверим, сколько заявок ассистент сможет обработать без администратора.
          </p>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}

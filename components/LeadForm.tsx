"use client";

import { FormEvent, useState } from "react";
import { leadSegments, type LeadSegment } from "@/lib/leads";

const segmentLabels: Record<LeadSegment, string> = {
  beauty: "Салон красоты / барбершоп",
  auto: "Автосервис / шиномонтаж",
  "private-master": "Частный мастер",
  clinic: "Клиника / медицинский центр",
  "support-service": "Сервис поддержки",
  other: "Другое"
};

type FormState = {
  name: string;
  contact: string;
  segment: LeadSegment;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  contact: "",
  segment: "beauty",
  message: "",
  consent: false
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        const firstError = result?.errors ? Object.values(result.errors)[0] : null;
        throw new Error(typeof firstError === "string" ? firstError : "Не удалось отправить заявку.");
      }

      setForm(initialState);
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Не удалось отправить заявку.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Имя
          <input
            required
            minLength={2}
            maxLength={120}
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-400"
            placeholder="Анна"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-200">
          Telegram, WhatsApp или email
          <input
            required
            minLength={4}
            maxLength={160}
            value={form.contact}
            onChange={(event) => setForm((current) => ({ ...current, contact: event.target.value }))}
            className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-400"
            placeholder="@username или +7..."
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Сегмент бизнеса
        <select
          value={form.segment}
          onChange={(event) => setForm((current) => ({ ...current, segment: event.target.value as LeadSegment }))}
          className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors focus:border-blue-400"
        >
          {leadSegments.map((segment) => (
            <option key={segment} value={segment}>
              {segmentLabels[segment]}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Что хотите автоматизировать?
        <textarea
          maxLength={1000}
          rows={4}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-400"
          placeholder="Например: запись клиентов ночью, ответы по прайсу, напоминания"
        />
      </label>

      <label className="flex gap-3 text-sm leading-6 text-slate-400">
        <input
          required
          type="checkbox"
          checked={form.consent}
          onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
          className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950"
        />
        <span>
          Я согласен на обработку отправленных контактных данных для связи по заявке.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-xl bg-emerald-500 px-8 py-4 font-medium text-slate-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Отправляем..." : "Оставить заявку"}
      </button>

      {status === "success" ? (
        <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Заявка отправлена. Мы свяжемся с вами для настройки тестового запуска.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}
    </form>
  );
}

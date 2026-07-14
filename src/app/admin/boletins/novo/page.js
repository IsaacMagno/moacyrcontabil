"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function todayIso() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function NovoBoletimPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [publishedAt, setPublishedAt] = useState(todayIso());
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("published_at", publishedAt);
    if (file) formData.append("file", file);

    try {
      const res = await fetch("/api/admin/boletins", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || "Não foi possível publicar o boletim.");
        setLoading(false);
        return;
      }

      router.push("/admin/boletins");
      router.refresh();
    } catch {
      setError("Não foi possível publicar o boletim. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      <Link
        href="/admin/boletins"
        className="mb-4 inline-block text-sm font-medium text-brand-dark hover:text-brand-yellow"
      >
        ← Voltar para lista
      </Link>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-300/80 sm:p-8"
      >
        <h1 className="mb-6 text-xl font-semibold text-brand-dark">Novo boletim</h1>

        {error ? (
          <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-200">
            {error}
          </p>
        ) : null}

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="title" className="mb-1 block text-sm font-medium text-brand-dark">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Título do boletim"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border-0 bg-white px-2 py-2 text-xs text-zinc-900 outline-none ring-1 ring-zinc-400/30 focus:ring-2 focus:ring-brand-yellow sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="published_at"
              className="mb-1 block text-sm font-medium text-brand-dark"
            >
              Data de publicação
            </label>
            <input
              type="date"
              id="published_at"
              name="published_at"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
              className="w-full rounded-lg border-0 bg-white px-2 py-2 text-xs text-zinc-900 outline-none ring-1 ring-zinc-400/30 focus:ring-2 focus:ring-brand-yellow sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="pdf" className="mb-1 block text-sm font-medium text-brand-dark">
              Arquivo PDF
            </label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              accept=".pdf,application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="w-full text-sm text-zinc-700 file:mr-3 file:rounded-lg file:border-0 file:bg-brand-yellow file:px-3 file:py-2 file:text-sm file:font-semibold file:text-gray-900"
            />
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex cursor-pointer items-center justify-center rounded-3xl border border-transparent bg-[#F6BE25] px-4 py-2 text-sm font-semibold text-gray-900 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Publicando…" : "Publicar"}
            </button>
            <Link
              href="/admin/boletins"
              className="inline-flex items-center rounded-3xl px-4 py-2 text-sm font-semibold text-brand-dark hover:text-brand-yellow"
            >
              Cancelar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

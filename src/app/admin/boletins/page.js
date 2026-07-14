"use client";

import { useCallback, useEffect, useState } from "react";
import LinkButton from "@/components/layout/LinkButton";
import Button from "@/components/layout/Button";
import { formatBoletimDate } from "@/helpers/boletins";

export default function AdminBoletinsPage() {
  const [boletins, setBoletins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadBoletins = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/boletins/list", { credentials: "include" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erro ao carregar boletins.");
      }
      const data = await res.json();
      setBoletins(data.boletins ?? []);
    } catch (err) {
      setError(err.message);
      setBoletins([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBoletins();
  }, [loadBoletins]);

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Excluir o boletim "${title}"?`)) return;

    const res = await fetch(`/api/admin/boletins/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data.error || "Não foi possível excluir.");
      return;
    }

    setBoletins((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-brand-dark">Boletins</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Gerencie os boletins exibidos na home do site.
          </p>
        </div>
        <LinkButton name="Novo boletim" href="/admin/boletins/novo" />
      </div>

      {error ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-200">
          {error}
        </p>
      ) : null}

      {loading ? (
        <p className="text-sm text-zinc-600">Carregando boletins…</p>
      ) : boletins.length === 0 ? (
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-300/80">
          <p className="text-brand-dark">Nenhum boletim publicado ainda.</p>
          <div className="mt-4">
            <LinkButton name="Publicar primeiro boletim" href="/admin/boletins/novo" />
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-300/80">
          <ul className="divide-y divide-gray-200">
            {boletins.map((boletim) => (
              <li
                key={boletim.id}
                className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-zinc-500">
                    {formatBoletimDate(boletim.published_at)}
                  </p>
                  <p className="mt-1 text-sm font-medium text-brand-dark sm:text-base">
                    {boletim.title}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-3">
                  <a
                    href={boletim.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-dark underline-offset-2 hover:text-brand-yellow hover:underline"
                  >
                    Ver PDF
                  </a>
                  <Button
                    name="Excluir"
                    onClick={() => handleDelete(boletim.id, boletim.title)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

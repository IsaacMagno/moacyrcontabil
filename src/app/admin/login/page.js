"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/layout/Input";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Preencha e-mail e senha.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (authError) {
        setError("E-mail ou senha inválidos.");
        return;
      }

      router.replace("/admin/boletins");
      router.refresh();
    } catch (err) {
      setError(
        err?.message?.includes("Supabase")
          ? err.message
          : "Não foi possível entrar. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.12)] ring-1 ring-gray-300/80 sm:p-8"
      >
        <h1 className="mb-2 text-xl font-semibold text-brand-dark">Entrar no painel</h1>
        <p className="mb-6 text-sm text-zinc-600">
          Acesso restrito para publicação de boletins.
        </p>

        {error ? (
          <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 ring-1 ring-red-200">
            {error}
          </p>
        ) : null}

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-dark">
              E-mail
            </label>
            <Input
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-brand-dark">
              Senha
            </label>
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-3xl border border-transparent bg-[#F6BE25] px-4 py-2 text-sm font-semibold text-gray-900 transition-all duration-200 hover:scale-[1.03] hover:brightness-110 disabled:opacity-60"
          >
            {loading ? "Entrando…" : "Entrar"}
          </button>
        </div>
      </form>
    </div>
  );
}

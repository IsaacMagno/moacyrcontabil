import Link from "next/link";
import AdminLogoutButton from "./AdminLogoutButton";

export const metadata = {
  title: "Painel — Moacyr Contábil",
  robots: "noindex, nofollow",
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#E9E9E9]">
      <header className="border-b border-gray-300/80 bg-brand-dark px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white sm:text-base">
            Moacyr Contábil — Painel
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/inicio"
              className="text-sm font-medium text-gray-200 transition-colors hover:text-brand-yellow"
            >
              Voltar ao site
            </Link>
            <AdminLogoutButton />
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</div>
    </div>
  );
}

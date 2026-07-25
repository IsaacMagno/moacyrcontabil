import Link from "next/link";
import { redirect } from "next/navigation";
import {
  countPublishedBoletins,
  getPublishedBoletins,
} from "@/lib/boletins/queries";
import BoletinsList from "@/components/boletins/BoletinsList";
import { metadataBoletins } from "@/helpers/metadata";

export const metadata = metadataBoletins;

export const dynamic = "force-dynamic";

const ARCHIVE_MIN = 6;

export default async function BoletinsPage() {
  let total = 0;

  try {
    total = await countPublishedBoletins();
  } catch {
    redirect("/inicio#boletins");
  }

  if (total < ARCHIVE_MIN) {
    redirect("/inicio#boletins");
  }

  let boletins = [];

  try {
    boletins = await getPublishedBoletins();
  } catch {
    redirect("/inicio#boletins");
  }

  return (
    <main className="border-t border-gray-200/60 bg-[#E9E9E9] py-8 sm:py-10 lg:py-12">
      <div className="site-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-600">Arquivo completo</p>
            <h1 className="text-2xl font-bold text-brand-dark sm:text-3xl">
              Boletins
            </h1>
          </div>
          <Link
            href="/inicio#boletins"
            className="text-sm font-semibold text-brand-dark underline-offset-4 transition-colors hover:text-brand-yellow hover:underline"
          >
            Voltar para a página inicial
          </Link>
        </div>

        <BoletinsList boletins={boletins} />
      </div>
    </main>
  );
}

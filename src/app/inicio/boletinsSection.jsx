import Link from "next/link";
import {
  countPublishedBoletins,
  getPublishedBoletins,
} from "@/lib/boletins/queries";
import BoletinsList from "@/components/boletins/BoletinsList";

const HOME_LIMIT = 5;

const BoletinsSection = async () => {
  let boletins = [];
  let total = 0;

  try {
    [boletins, total] = await Promise.all([
      getPublishedBoletins(HOME_LIMIT),
      countPublishedBoletins(),
    ]);
  } catch {
    boletins = [];
    total = 0;
  }

  if (boletins.length === 0) {
    return null;
  }

  const showArchiveLink = total > HOME_LIMIT;

  return (
    <section
      id="boletins"
      aria-label="Boletins informativos"
      className="scroll-mt-24 w-full py-6 sm:py-8 lg:py-10"
    >
      <BoletinsList
        boletins={boletins}
        footer={
          showArchiveLink ? (
            <div className="border-t border-gray-200/80 px-4 py-4 text-center sm:px-6">
              <Link
                href="/boletins"
                className="text-sm font-semibold text-brand-dark underline-offset-4 transition-colors hover:text-brand-yellow hover:underline sm:text-base"
              >
                Ver todos os boletins
              </Link>
            </div>
          ) : null
        }
      />
    </section>
  );
};

export default BoletinsSection;

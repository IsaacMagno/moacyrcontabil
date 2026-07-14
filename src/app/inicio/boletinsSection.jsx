import { Bookmark } from "lucide-react";
import { getPublishedBoletins } from "@/lib/boletins/queries";
import { formatBoletimDate } from "@/helpers/boletins";

const BoletinsSection = async () => {
  let boletins = [];

  try {
    boletins = await getPublishedBoletins(10);
  } catch {
    boletins = [];
  }

  if (boletins.length === 0) {
    return null;
  }

  return (
    <section
      id="boletins"
      aria-label="Boletins informativos"
      className="scroll-mt-24 w-full py-6 sm:py-8 lg:py-10"
    >
      <article className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_28px_rgba(0,0,0,0.12)] ring-1 ring-gray-300/80">
        <header className="flex items-center gap-3 bg-brand-dark px-5 py-4 sm:px-6">
          <Bookmark
            className="h-6 w-6 shrink-0 text-brand-yellow"
            aria-hidden
            strokeWidth={1.75}
          />
          <h2 className="text-lg font-semibold text-white sm:text-xl">Boletins</h2>
        </header>

        <ul className="divide-y divide-gray-200/80 px-4 py-2 sm:px-6 sm:py-3">
          {boletins.map((boletim) => {
            const formattedDate = formatBoletimDate(boletim.published_at);
            return (
              <li key={boletim.id} className="py-3 sm:py-3.5">
                <a
                  href={boletim.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block text-sm leading-relaxed text-brand-dark transition-colors hover:text-brand-yellow sm:text-base"
                >
                  <span className="font-semibold text-brand-dark group-hover:text-brand-yellow">
                    {formattedDate}
                  </span>
                  <span className="text-brand-dark group-hover:text-brand-yellow">
                    {" "}
                    — {boletim.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default BoletinsSection;

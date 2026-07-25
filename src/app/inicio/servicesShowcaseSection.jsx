import Image from "next/image";
import Link from "next/link";
import { Calculator, PiggyBank, ShieldCheck } from "lucide-react";
import PreventionImage from "@/../../public/jovem-afro.png";
import PlanningImage from "@/../../public/planejamento_tributario.jpg";
import LinkButton from "@/components/layout/LinkButton";
import { LogoIcon, WhatsappIcon } from "@/components/svgs";

const WHATSAPP_URL =
  "https://wa.me/551938932236?text=" +
  encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da contabilidade"
  );

const cards = [
  {
    title: "Prevenção do Risco de Fiscalização",
    description:
      "Sua empresa sempre bem informada sobre sua real situação fiscal.",
    Icon: ShieldCheck,
    image: PreventionImage,
    imageAlt: "Homem sorrindo representando prevenção de riscos",
  },
  {
    title: "Organização Financeira",
    kind: "finance",
  },
  {
    title: "Planejamento Tributário",
    description:
      "Nosso compromisso é proporcionar a você a tranquilidade de saber que sua empresa está aproveitando ao máximo os benefícios fiscais disponíveis, garantindo uma gestão financeira mais eficiente e estratégica!",
    Icon: Calculator,
    image: PlanningImage,
    imageAlt: "Imagem representando planejamento tributário",
  },
];

const financeBullets = [
  "Sua empresa está apresentando lucro?",
  "Analisamos suas contas e indicamos correções",
  "Tudo feito a distância, sem plano de fidelidade",
];

const cardShell =
  "group flex min-h-[35rem] flex-col overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.22)] ring-1 ring-gray-300/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] hover:ring-gray-400 sm:min-h-[33rem] lg:min-h-[35rem]";

const cardHeader =
  "flex h-[8.75rem] shrink-0 flex-col items-center justify-center gap-2.5 bg-[#3C3C3C] px-5 text-center sm:h-[9.5rem] sm:gap-3";

const FinanceCard = () => {
  return (
    <article className={`bg-[#F3EEE4] ${cardShell}`}>
      <div className={cardHeader}>
        <PiggyBank
          className="h-11 w-11 shrink-0 text-white transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14"
          aria-hidden
          strokeWidth={1.75}
        />
        <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
          Organização Financeira
        </h3>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-5 py-6 sm:gap-7 sm:px-6">
        <div className="flex w-full flex-col items-center gap-5 sm:gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-brand-yellow shadow-md sm:h-28 sm:w-28">
            <PiggyBank
              className="h-14 w-14 text-brand-dark sm:h-16 sm:w-16"
              aria-hidden
              strokeWidth={1.5}
            />
          </div>

          <ul className="w-full space-y-3 text-left text-sm leading-snug text-[#4A5568] sm:text-base">
            {financeBullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B6B7C]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-3 border-t border-black/5 px-4 py-4 sm:px-5">
        <LogoIcon className="h-auto w-28 shrink-0 text-brand-dark sm:w-32" />
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-end text-right transition-opacity hover:opacity-80"
        >
          <span className="text-xs font-medium text-[#4A5568] sm:text-sm">
            Consulte para saber mais
          </span>
          <span className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark sm:text-base">
            (19) 3893-2236
            <WhatsappIcon className="h-4 w-4 text-[#25D366]" />
          </span>
        </Link>
      </div>
    </article>
  );
};

const ServicesShowcaseSection = () => {
  return (
    <section
      id="servicos"
      aria-labelledby="nossos-diferenciais-heading"
      className="scroll-mt-24 w-full bg-[#E9E9E9] py-10 sm:py-12 lg:py-14"
    >
      <div className="w-full">
        <h2
          id="nossos-diferenciais-heading"
          className="mb-6 text-center text-xl font-bold text-brand-dark sm:mb-8 sm:text-2xl"
        >
          Nossos Diferenciais
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {cards.map((card) => {
            if (card.kind === "finance") {
              return <FinanceCard key={card.title} />;
            }

            const { title, description, Icon, image, imageAlt } = card;
            return (
              <article key={title} className={cardShell}>
                <div className={cardHeader}>
                  <Icon
                    className="h-11 w-11 shrink-0 text-white transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14"
                    aria-hidden
                    strokeWidth={1.75}
                  />
                  <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
                    {title}
                  </h3>
                </div>
                <div className="flex shrink-0 flex-col justify-center bg-[#E6E6E6] px-5 py-5 text-center md:py-6">
                  <p className="text-sm leading-relaxed text-zinc-900 md:text-base">
                    {description}
                  </p>
                </div>
                <div className="relative min-h-0 flex-1 overflow-hidden bg-[#E6E6E6]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-6 flex justify-center lg:hidden">
          <LinkButton
            href={WHATSAPP_URL}
            target="_blank"
            name="Solicite um orçamento"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcaseSection;

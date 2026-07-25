import Image from "next/image";
import { Calculator, ShieldCheck } from "lucide-react";
import PreventionImage from "@/../../public/jovem-afro.png";
import FinanceImage from "@/../../public/organizacao_financeira.png";
import PlanningImage from "@/../../public/planejamento_tributario.jpg";
import LinkButton from "@/components/layout/LinkButton";

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
    imageOnly: true,
    image: FinanceImage,
    imageAlt: "Organização Financeira — Moacyr Nelson Gasparini Contabilidade",
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

const cardShell =
  "group min-h-[35rem] overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.22)] ring-1 ring-gray-300/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] hover:ring-gray-400 sm:min-h-[33rem] lg:min-h-[35rem]";

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
            if (card.imageOnly) {
              return (
                <article key={card.title} className={`relative bg-[#E8E2D6] ${cardShell}`}>
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </article>
              );
            }

            const { title, description, Icon, image, imageAlt } = card;
            return (
              <article
                key={title}
                className={`grid grid-rows-[0.7fr_0.6fr_2.6fr] sm:grid-rows-[0.8fr_0.7fr_2.1fr] ${cardShell}`}
              >
                <div className="flex flex-col items-center justify-center gap-3 bg-[#3C3C3C] px-5 py-6 text-center">
                  <Icon
                    className="h-11 w-11 shrink-0 text-white transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14"
                    aria-hidden
                    strokeWidth={1.75}
                  />
                  <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
                    {title}
                  </h3>
                </div>
                <div className="flex flex-col justify-center bg-[#E6E6E6] px-5 py-5 text-center md:py-6">
                  <p className="text-sm leading-relaxed text-zinc-900 md:text-base">
                    {description}
                  </p>
                </div>
                <div className="relative overflow-hidden bg-[#E6E6E6]">
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
            href="https://api.whatsapp.com/send?phone=551938932236&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20contabilidade."
            target="_blank"
            name="Solicite um orçamento"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcaseSection;

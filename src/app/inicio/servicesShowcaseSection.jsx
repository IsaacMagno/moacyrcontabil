import {
  BadgeCheck,
  Calculator,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    title: "Prevenção do Risco de Fiscalização",
    description:
      "Sua empresa sempre bem informada sobre sua real situação fiscal.",
    Icon: ShieldCheck,
  },
  {
    title: "Certificação Digital",
    description:
      "Credenciais digitais com acompanhamento da equipe: validade, renovação e uso correto nos portais, para sua empresa operar com segurança e conformidade.",
    Icon: BadgeCheck,
  },
  {
    title: "Planejamento Tributário",
    description:
      "Nosso compromisso é proporcionar a você a tranquilidade de saber que sua empresa está aproveitando ao máximo os benefícios fiscais disponíveis, garantindo uma gestão financeira mais eficiente e estratégica!",
    Icon: Calculator,
  },
];

const ServicesShowcaseSection = () => {
  return (
    <section
      id="servicos"
      aria-label="Serviços essenciais"
      className="scroll-mt-24 w-full bg-[#E9E9E9] py-10 sm:py-12 lg:py-14"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
          {cards.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group grid min-h-[15rem] grid-rows-2 overflow-hidden rounded-2xl shadow-md shadow-black/15 ring-1 ring-gray-200/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-gray-300 sm:min-h-[16rem]"
            >
              <div className="flex flex-col items-center justify-center gap-2.5 bg-[#3C3C3C] px-4 py-5 text-center">
                <Icon
                  className="h-10 w-10 shrink-0 text-white transition-transform duration-300 group-hover:scale-105 md:h-12 md:w-12"
                  aria-hidden
                  strokeWidth={1.75}
                />
                <h3 className="text-base font-bold leading-snug text-white md:text-lg">
                  {title}
                </h3>
              </div>
              <div className="flex flex-col justify-center bg-brand-yellow px-4 py-4 md:py-5">
                <p className="text-xs leading-relaxed text-zinc-900 md:text-sm">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcaseSection;

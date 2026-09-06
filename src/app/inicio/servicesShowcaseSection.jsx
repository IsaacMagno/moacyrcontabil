import Image from "next/image";
import { Calculator, PiggyBank, ShieldCheck } from "lucide-react";
import PreventionImage from "@/../../public/jovem-afro.png";
import FinanceImage from "@/../../public/organizacao_financeira.jpg";
import PlanningImage from "@/../../public/planejamento_tributario.jpg";
import LinkButton from "@/components/layout/LinkButton";

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
    title: "Controle Financeiro",
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

const financeParagraphs = [
  "Um bom controle financeiro deve identificar situações que podem colocar sua empresa em risco.",
  "Nós ajudamos você a simplificar essa tarefa e tornar sua gestão mais tranquila e eficiente.",
  "Conte Conosco!",
];

const cardShell =
  "group flex min-h-[36rem] flex-col overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.22)] ring-1 ring-gray-300/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] hover:ring-gray-400 sm:min-h-[36rem] lg:min-h-[38rem]";

const cardHeader =
  "flex min-h-[11rem] shrink-0 flex-col items-center justify-center gap-2.5 bg-[#3C3C3C] px-4 py-5 text-center sm:min-h-[12rem] sm:gap-3 sm:px-5 sm:py-6";

const cardTitle =
  "text-xl font-extrabold leading-tight text-white sm:text-2xl lg:text-[1.65rem]";

const cardHeaderIcon =
  "h-10 w-10 shrink-0 text-white transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12";

const cardBodyText =
  "text-sm font-normal leading-relaxed text-zinc-900 md:text-base";

const FinanceCard = () => {
  return (
    <article className={cardShell}>
      <div className={cardHeader}>
        <PiggyBank
          className={cardHeaderIcon}
          aria-hidden
          strokeWidth={1.75}
        />
        <h3 className={cardTitle}>
          Controle
          <br />
          Financeiro
        </h3>
      </div>

      <div className="flex shrink-0 flex-col justify-center gap-2 bg-[#E6E6E6] px-5 py-4 text-center sm:py-5 md:py-6">
        {financeParagraphs.map((item) => (
          <p key={item} className={`mx-auto w-full max-w-sm ${cardBodyText}`}>
            {item}
          </p>
        ))}
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden bg-[#E6E6E6]">
        <Image
          src={FinanceImage}
          alt="Controle Financeiro — Moacyr Nelson Gasparini Contabilidade"
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
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
          className="mb-8 text-center text-3xl font-extrabold tracking-tight text-brand-dark sm:mb-10 sm:text-4xl lg:mb-12 lg:text-5xl xl:text-6xl"
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
                    className={cardHeaderIcon}
                    aria-hidden
                    strokeWidth={1.75}
                  />
                  <h3 className={cardTitle}>{title}</h3>
                </div>
                <div className="flex shrink-0 flex-col justify-center bg-[#E6E6E6] px-5 py-4 text-center sm:py-5 md:py-6">
                  <p className={cardBodyText}>{description}</p>
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

import Image from "next/image";
import PeopleOnCelphone from "@/../../public/services/business-people-office.jpg";
import BusinessMan from "/public/services/business man.png";
import { descText } from "@/helpers/budgetTexts";

const ControlSection = () => {
  return (
    <section className="flex flex-col w-full px-4 py-6 items-center gap-6 lg:flex-row lg:justify-between lg:px-20 lg:py-16 lmd:py-32  xlg:px-32 h-full bg-[#E9E9E9]">
      <div className="relative w-full h-[25vh] lg:hidden">
        <Image
          src={BusinessMan}
          alt="Senhor sentado numa mesa de escritório"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
        />
      </div>

      <div className="relative hidden lg:block lg:w-[45vw] lmd:w-[45vw] xlg:w-[45vw] lg:h-[110vh] lmd:h-[140vh]">
        <Image
          src={PeopleOnCelphone}
          alt="Pessoas numa mesa de escritório"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
          className="rounded"
        />
      </div>
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <h1 className="lg:text-3xl lmd:text-5xl">
          CONTROLE FINANCEIRO E ANÁLISE DE RESULTADOS
        </h1>
        <h2>Sem tempo para controlar suas contas?</h2>
        <h2>Vamos até sua empresa e fazemos para você!</h2>
        <ul className="flex flex-col gap-4">
          {descText.map((desc) => (
            <li>
              <p>- {desc.title}</p>
              {/* <p>{desc.text}</p> */}
            </li>
          ))}
        </ul>
        <h2>
          Invista no seu futuro financeiro com nosso serviço de Controle
          Financeiro e Análise de Resultados, e dê um passo à frente na
          realização dos seus objetivos empresariais!
        </h2>
      </article>
    </section>
  );
};

export default ControlSection;

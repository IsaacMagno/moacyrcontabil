import Image from "next/image";
import AfroManWorking from "@/../../public/afro man working.png";
import Topic from "@/components/layout/Topic";
import { ClipboardPlusIcon, LightbulbIcon } from "@/components/svgs";

const ReasonsSection = () => {
  return (
    <section className="flex flex-col w-full pt-6 items-center gap-6 bg-[#E9E9E9] lg:flex-row-reverse lg:justify-between lg:pr-20 lg:pt-0 xlg:pr-32 h-full">
      <article className="flex flex-col w-[20.5rem] items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <section>
          <strong className="text-[#323231]">Motivos para escolher </strong>
          <h1 className="text-[#323231]">nossa contabilidade!</h1>
        </section>
        <p className="text-[#323231]">
          Não perca a oportunidade de impulsionar seu sucesso contábil e
          financeiro. Entre em contato agora e explore as soluções
          personalizadas que temos para oferecer.
        </p>
        <section className="flex flex-col items-start gap-6">
          <Topic
            icon={<LightbulbIcon />}
            title="Atendimento Personalizado e Acolhedor:"
            text="Nossa equipe de contadores, comprometida com o crescimento da sua empresa, oferece um serviço atencioso e sob medida para suas necessidades."
          />
          <Topic
            icon={<ClipboardPlusIcon />}
            title="Relatórios para Estratégias Inteligentes:"
            text="Fornecemos análises e relatórios precisos, essenciais para embasar suas decisões estratégicas e conduzir seu negócio ao sucesso."
          />
        </section>
      </article>
      <div className="relative w-full h-[21.75rem] lg:w-[32rem] lg:h-[31rem] lmd:w-[45rem] lmd:h-[43rem] xlg:w-[60rem] xlg:h-[57rem]">
        <Image
          src={AfroManWorking}
          alt="Rapaz sorrindo com tablet na mão"
          placeholder="blur"
          sizes="(max-width: 360px) 384px, (max-width: 1024px) 512px, (max-width: 1440px) 768px, (max-width: 1920px) 1024px"
          fill
        />
      </div>
    </section>
  );
};

export default ReasonsSection;

import Image from "next/image";
import PeopleOnCelphone from "@/../../public/planejamento_tributario.jpg";

const PlanningSection = () => {
  return (
    <section className="flex flex-col-reverse w-full px-4 py-6 items-center gap-6 lg:flex-row lg:justify-between lg:px-20 lg:py-16 lmd:py-32  xlg:px-32 h-full bg-[#E9E9E9]">
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <h1 className="lg:text-3xl lmd:text-5xl">Planejamento Tributário</h1>
        <h2 className="">Buscando economia para você e sua empresa!</h2>
        <p className="">
          Na busca por proporcionar o melhor suporte para o crescimento contínuo
          de sua empresa, temos o prazer de informar que anualmente realizamos
          uma detalhada verificação do “Enquadramento Tributário” de seu
          negócio.
        </p>
        <p>
          Nosso objetivo é garantir que sua empresa esteja no regime tributário
          mais vantajoso, seja no Simples Nacional, Lucro Presumido, ou Lucro
          Real. Esta análise minuciosa faz parte dos serviços inclusos em seu
          contrato!
        </p>
        <p>
          <span>
            A escolha do regime tributário ideal pode gerar economias
            significativas
          </span>{" "}
          para o seu negócio. Entendemos que a legislação fiscal está em
          constante evolução e, por isso, é fundamental estar sempre atualizado
          para otimizar os seus resultados financeiros.
        </p>
        <p>
          Nosso compromisso é proporcionar a você a tranquilidade de saber que
          sua empresa está aproveitando ao máximo os benefícios fiscais
          disponíveis, garantindo uma gestão financeira mais eficiente e
          estratégica!
        </p>
      </article>
      <div className="relative w-[18.5rem] h-[18rem] lmd:w-[28rem] lmd:h-[28rem] xlg:w-[35rem] xlg:h-[35rem]">
        <Image
          src={PeopleOnCelphone}
          alt="Pessoas no celular"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
          className=" rounded-full"
        />
      </div>
    </section>
  );
};

export default PlanningSection;

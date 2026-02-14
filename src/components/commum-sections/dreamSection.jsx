import Image from "next/image";
import HappyPeople from "@/../../public/happy people.png";

//  xlg:pl-[16rem]

const DreamSection = () => {
  return (
    <section className="flex flex-col w-full pt-6 items-center gap-6 bg-[#323231] lg:flex-row lg:justify-between  lg:pt-0  h-full">
      <article className="flex flex-col w-[20.5rem] items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem] lg:pl-20 py-[8vh]">
        <section>
          <strong className="text-[#F6BE25] lg:text-3xl lmd:text-5xl">
            Liberte-se da CLT e realize{" "}
          </strong>
          <h1 className="text-[#F6BE25] lg:text-3xl lmd:text-5xl">
            o sonho de ser empresário.
          </h1>
        </section>
        <p className="text-white">
          O sonho de abrir uma empresa é um grande passo na vida de qualquer
          empreendedor. É a realização de um desejo de ser seu próprio chefe,
          ter autonomia e liberdade para fazer suas próprias escolhas, além de
          contribuir para a economia do país e gerar empregos.
        </p>
      </article>
      <div className="relative w-full h-full lg:w-[32rem] lmd:w-[45rem] xlg:w-[60rem] flex ">
        <Image
          src={HappyPeople}
          alt="Grupo de pessoas felizes."
          placeholder="blur"
          sizes="(max-width: 360px) 384px, (max-width: 1024px) 512px, (max-width: 1440px) 768px, (max-width: 1920px) 1024px"
        />
      </div>
    </section>
  );
};

export default DreamSection;

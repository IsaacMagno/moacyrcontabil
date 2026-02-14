import Image from "next/image";
import PeopleOnCelphone from "@/../../public/people on cellphone.png";

const ServiceSection = () => {
  return (
    <section className="flex flex-col w-full px-4 py-6 items-center gap-6 bg-[#323231] lg:flex-row lg:justify-between lg:px-20 lg:py-16 lmd:py-32 xlg:px-32 xlg:py-[11.5rem] h-full">
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <h1 className="text-[#F6BE25] lg:text-3xl lmd:text-5xl">
          Atendimento Digital ou Presencial
        </h1>
        <p className="text-white">
          Está com alguma dúvida sobre legislação? Conosco você tem{" "}
          <span className="text-white">GRATUITAMENTE</span> a vantagem de
          agendar uma visita presencial com um de nossos profissionais em sua
          empresa!
        </p>
        <h2 className="text-white">
          Nossos canais digitais estão diariamente disponíveis para ajudar você
          cliente.
        </h2>
      </article>
      <div className="relative w-[18.5rem] h-[18rem] lmd:w-[28rem] lmd:h-[28rem] xlg:w-[35rem] xlg:h-[35rem]">
        <Image
          src={PeopleOnCelphone}
          alt="Pessoas no celular"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
        />
      </div>
    </section>
  );
};

export default ServiceSection;

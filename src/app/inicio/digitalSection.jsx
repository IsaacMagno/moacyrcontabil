import Image from "next/image";
import PeopleOnCelphone from "@/../../public/certificado_digital.png";

const DigitalSection = () => {
  return (
    <section className="flex flex-col-reverse w-full py-6 items-center gap-6 lg:flex-row lg:justify-between lg:py-16 lmd:py-3 xlg:py-[11.5rem] h-full">
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <h1 className="lg:text-3xl lmd:text-5xl">
          Oferecemos a você e à sua equipe a facilidade do Certificado Digital
        </h1>
        <p className="">
          Além disso, nossa equipe está atenta a todos os detalhes, inclusive ao
          prazo de vencimento do seu certificado digital. Realizamos a
          verificação e, anualmente, cuidamos da renovação, para que você nunca
          se veja em situações de interrupção de serviços por falta de
          atualização!
        </p>
        <h2 className="">
          Com mais esse benefício por ser nosso cliente você ganha eficiência e
          mantém sua empresa sempre à frente, livre de contratempos
          desnecessários!
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

export default DigitalSection;

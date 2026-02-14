import Image from "next/image";
import RemoteWork from "@/../../public/contabilidade_digital.jpg";
import Topic from "@/components/layout/Topic";
import { PhoneIcon, LocationIcon } from "@/components/svgs";

const RemoteAccountingSolutionsSection = () => {
  return (
    <section className="flex flex-col w-full pt-6 items-center gap-6 bg-[#E9E9E9] lg:flex-row lg:justify-between lg:pl-20 lg:pt-0 xlg:pl-32 h-full">
      <article className="flex flex-col w-[20.5rem] items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <section>
          <h1 className="text-[#323231]">
            Conecte-se com nossos especialistas de qualquer lugar!
          </h1>
        </section>
        <p className="text-[#323231]">
          Aproveite a conveniência e a eficiência das nossas soluções de
          contabilidade à distância. Entre em contato conosco e descubra como
          podemos ajudar sua empresa a crescer, independentemente da sua
          localização.
        </p>
        <section className="flex flex-col items-start gap-6">
          <Topic
            icon={<LocationIcon />}
            title="Acesso Global:"
            text="Nossos serviços de contabilidade estão disponíveis para você, onde quer que esteja. Conecte-se com nossos especialistas de qualquer lugar do mundo."
          />
          <Topic
            icon={<PhoneIcon />}
            title="Suporte Remoto:"
            text="Oferecemos suporte remoto eficiente e personalizado, garantindo que suas necessidades contábeis sejam atendidas com rapidez e precisão."
          />
        </section>
      </article>
      <div className="relative w-full h-[21.75rem] lg:w-[32rem] lg:h-[31rem] lmd:w-[45rem] lmd:h-[43rem] xlg:w-[60rem] xlg:h-[57rem]">
        <Image
          src={RemoteWork}
          alt="Pessoa trabalhando remotamente"
          placeholder="blur"
          sizes="(max-width: 360px) 384px, (max-width: 1024px) 512px, (max-width: 1440px) 768px, (max-width: 1920px) 1024px"
          fill
        />
      </div>
    </section>
  );
};

export default RemoteAccountingSolutionsSection;

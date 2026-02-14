import Image from "next/image";
import Office from "@/../../public/office.png";

const StorySection = () => {
  return (
    <section className="flex flex-col w-full px-4 py-6 items-center gap-6 bg-[#E9E9E9] lg:flex-row-reverse lg:justify-between lg:px-20 lg:py-16 lg:gap-32 lmd:py-32 lmd:gap-[11rem] xlg:px-[16rem] xlg:py-[11.5rem] xlg:gap-[11.5rem] h-full">
      <div className="relative w-[18rem] h-[18rem] lmd:w-[31rem] lmd:h-[31rem]">
        <Image
          src={Office}
          alt="Fachada do escritório"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
        />
      </div>
      <section className="flex flex-col gap-6 lg:items-start">
        <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
          <section>
            <strong>Desde 1966</strong>
            <h1>
              Há mais de 50 anos entregando soluções contábeis personalizadas e
              eficazes para nossos clientes.
            </h1>
          </section>
          <p>
            Fundada em 1966, a Gasparini Contabilidade é uma referência no setor
            contábil, com mais de meio século dedicado a entregar soluções
            contábeis personalizadas e eficazes. A empresa tem se destacado por
            sua capacidade de adaptar-se às mudanças do mercado e às
            necessidades específicas de cada cliente, oferecendo um leque de
            serviços que inclui gestão contábil, fiscal, trabalhista e
            consultoria para abertura e encerramento de empresas. Com um
            compromisso sólido com a inovação e a eficiência, a Gasparini
            Contabilidade une tradição e modernidade para ajudar seus clientes a
            alcançarem o sucesso.
          </p>
        </article>
      </section>
    </section>
  );
};

export default StorySection;

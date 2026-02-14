import BlackMan from "@/../../public/jovem-afro.png";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const PreventionSection = () => {
  return (
    <section className="flex flex-col w-full items-center gap-6 lg:flex-row lg:justify-between ">
      <div className="relative w-[18.5rem] h-[18rem] lmd:w-[28rem] lmd:h-[28rem] xlg:w-[35rem] xlg:h-[35rem]">
        <Image
          src={BlackMan}
          alt="Homem negro apontando com o dedo"
          placeholder="blur"
          sizes="(max-width: 1024px) 384px, (max-width: 1440px) 640px"
          fill
        />
      </div>
      <article className="flex flex-col items-center justify-center gap-6 lg:w-[23rem] lmd:w-[38rem] xlg:w-[46rem]">
        <div className="mt-5 h-full flex justify-center items-center gap-4 mb-12 bg-[#F6BE25] p-2 lmd:p-3 rounded-2xl mx-auto max-w-fit">
          <h1 className="font-[1000] text-black">NOSSOS DIFERENCIAIS</h1>
          <ArrowDown className="h-5 w-5 lmd:h-8 lmd:w-8   stroke-[3]" />
        </div>
        <h1 className="lg:text-3xl lmd:text-5xl ">
          Prevenção de risco empresarial
        </h1>
        <div className="flex flex-col gap-4">
          <p>
            Imagine estar um passo à frente dos problemas e dos riscos de
            fiscalização em sua empresa?!
          </p>
          <p>
            Isso também é parte de nossa entrega: nós não apenas verificamos
            periodicamente as informações da sua empresa, mas também mantemos
            uma guarda constante contra os riscos de fiscalização. Porque sua
            tranquilidade é o nosso foco!
          </p>
        </div>
      </article>
    </section>
  );
};

export default PreventionSection;

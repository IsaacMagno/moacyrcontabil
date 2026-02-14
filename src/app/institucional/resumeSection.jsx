import Image from "next/image";
import Meeting from "@/../../public/meeting.png";
import ResumeForm from "@/components/layout/ResumeForm";

const ResumeSection = () => {
  return (
    <section className="flex flex-col w-full px-4 py-6 items-start gap-6 bg-[#323231] lg:px-20 lg:py-16 lg:gap-32 lmd:flex-row lmd:items-end lmd:py-32 lmd:gap-[5rem] xlg:px-[16rem] xlg:py-[11.5rem] xlg:gap-[6rem] h-full">
      <article className="flex flex-col items-start gap-6 lg:w-[23rem] lmd:w-full">
        <section>
          <strong className="text-[#F6BE25]">
            Faça parte da nossa história!
          </strong>
          <h1 className="text-[#F6BE25]">
            Envie seu currículo e trabalhe conosco.
          </h1>
        </section>
        <ResumeForm />
      </article>
      <div className="hidden lmd:block relative rounded-xl w-[45rem] h-[60rem] overflow-hidden">
        <Image
          src={Meeting}
          alt="Quatro pessoas pegando na mão uma da outra fazendo um quadrado"
          placeholder="blur"
          sizes="640px"
          fill
        />
      </div>
    </section>
  );
};

export default ResumeSection;

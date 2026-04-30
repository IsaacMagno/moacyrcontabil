import ResumeForm from "@/components/layout/ResumeForm";

const ResumeSection = () => {
  return (
    <section className="h-full w-full bg-[#323231] py-6 lg:py-16 lmd:py-32 xlg:py-[11.5rem]">
      <div className="site-wrap flex flex-col items-center gap-6 lg:items-start">
        <article className="flex w-full min-w-0 flex-col items-center gap-6 lg:items-start">
          <section className="text-center lg:text-left">
            <h1 className="text-base font-semibold leading-relaxed text-[#F6BE25] md:text-lg lg:text-xl">
              Envie seu currículo e trabalhe conosco.
            </h1>
          </section>
          <ResumeForm />
        </article>
      </div>
    </section>
  );
};

export default ResumeSection;

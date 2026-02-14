const BannerServicesSection = () => {
  return (
    <section className="bg-banner-mobile bg-cover bg-no-repeat flex items-center justify-center py-12 lg:bg-banner-service lg:items-start lg:justify-normal lg:px-[11.75rem] lg:py-24 lmd:px-60 lmd:py-32 xlg:px-[22.5rem] xlg:py-[10.25rem] ">
      <div className="flex flex-col w-[18rem] justify-start gap-2 lg:w-[25rem]">
        <mark className="text-white lmd:w-[42rem]">
          Braço direito do empreendedor!
        </mark>
        <strong className="text-white lg:w-72 lmd:w-[30rem]">
          Contabilidade moderna{" "}
          <mark className="text-white">para sua empresa.</mark>
        </strong>
      </div>
    </section>
  );
};

export default BannerServicesSection;

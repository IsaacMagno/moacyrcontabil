const BannerServicesSection = () => {
  return (
    <section className="bg-banner-mobile bg-cover bg-center bg-no-repeat py-12 lg:bg-banner-service lg:py-24 lmd:py-32 xlg:py-[10.25rem]">
      <div className="site-wrap flex items-center justify-center lg:items-start lg:justify-normal">
        <div className="flex w-full max-w-lg flex-col justify-start gap-2 lg:max-w-2xl">
          <mark className="text-white lmd:max-w-[42rem]">
            Braço direito do empreendedor!
          </mark>
          <strong className="text-white lg:max-w-sm lmd:max-w-[30rem]">
            Contabilidade moderna{" "}
            <mark className="text-white">para sua empresa.</mark>
          </strong>
        </div>
      </div>
    </section>
  );
};

export default BannerServicesSection;

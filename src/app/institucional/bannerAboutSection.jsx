const BannerAboutSection = () => {
  return (
    <section className="bg-banner-mobile bg-cover bg-no-repeat flex items-center justify-center py-12 lg:bg-banner-about lg:items-start lg:justify-normal lg:px-[11.75rem] lg:py-24 lmd:px-60 lmd:py-32 xlg:px-[22.5rem] xlg:py-[10.25rem]">
      <div className="flex flex-col w-[20rem] justify-start gap-2 lmd:w-[32.5rem]">
        <mark className="text-white w-full">Gasparini Contabilidade</mark>
        <strong className="text-white lg:w-72 lmd:w-[30rem]">
          Faça parte da nossa{" "}
          <mark className="text-white">história você também!</mark>
        </strong>
      </div>
    </section>
  );
};

export default BannerAboutSection;

const BannerContactSection = () => {
  return (
    <section className="bg-banner-mobile bg-cover bg-no-repeat flex items-center justify-center py-12 lg:bg-banner-contact lg:items-start lg:justify-normal lg:px-[11.75rem] lg:py-24 lmd:px-60 lmd:py-32 xlg:px-[22.5rem] xlg:py-[10.25rem]">
      <div className="flex flex-col w-[14.1rem] justify-start gap-2 lmd:w-[23.5rem]">
        <mark className="text-white">Alguma Dúvida?</mark>
        <strong className="text-white">
          Fale com nossos <mark className="text-white">especialistas!</mark>
        </strong>
      </div>
    </section>
  );
};

export default BannerContactSection;

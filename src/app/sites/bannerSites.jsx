const BannerSites = () => {
  return (
    <section className="bg-banner-mobile bg-cover bg-no-repeat flex items-center justify-center py-12 lg:bg-banner-sites lg:items-start lg:justify-normal lg:px-[11.75rem] lg:py-24 lmd:px-60 lmd:py-32 xlg:px-[22.5rem] xlg:py-[10.25rem]">
      <div className="flex flex-col w-[17rem] justify-start gap-2 lmd:w-[28rem]">
        <mark className="text-white">Sites úteis</mark>
        <strong className="text-white">
          Administração{" "}
          <mark className="text-white">contábil e financeira!</mark>
        </strong>
      </div>
    </section>
  );
};

export default BannerSites;

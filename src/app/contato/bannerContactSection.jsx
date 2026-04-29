const BannerContactSection = () => {
  return (
    <section className="relative flex min-h-[13rem] items-center overflow-hidden bg-banner-mobile bg-cover bg-top bg-no-repeat py-10 lg:min-h-[240px] lg:bg-banner-contact lg:bg-[position:right_8%] lg:bg-cover lg:bg-no-repeat lg:py-12 xlg:min-h-[252px] xlg:py-14">
      <div className="relative z-10 flex w-full min-w-0 items-center">
        <div className="site-wrap flex w-full min-w-0 items-center justify-start">
          <h2 className="max-w-4xl text-balance text-left text-3xl font-bold leading-tight tracking-tight text-brand-yellow drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-5xl">
            Entre em contato conosco
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BannerContactSection;

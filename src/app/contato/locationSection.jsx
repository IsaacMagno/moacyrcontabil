import { LocationIcon, PhoneIcon, ClockIcon } from "@/components/svgs";

const LocationSection = () => {
  const location =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.338460768553!2d-46.898004!3d-22.7436757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8dea17d4ac493%3A0x1d5e7860955bf9aa!2sGasparini%20Contabilidade%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1709588448952!5m2!1spt-BR!2sbr";
  return (
    <section className="h-full w-full bg-[#E9E9E9] py-10 lg:py-14 xl:py-16">
      <div className="site-wrap">
        <section className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xlg:gap-14">
          <section className="flex w-full flex-col gap-4 lg:max-w-md">
            <div className="flex flex-col gap-1.5 text-zinc-700">
              <p className="text-base leading-relaxed md:text-lg lg:text-xl">
                Explore soluções contábeis personalizadas para o seu negócio!
              </p>
              <p className="text-base font-semibold leading-relaxed md:text-lg lg:text-xl">
                Conheça nosso escritório!
              </p>
            </div>

            <section className="flex items-center gap-2">
              <span className="w-5 shrink-0 text-zinc-700 lmd:w-8">
                <LocationIcon />
              </span>
              <div className="flex min-w-0 flex-col items-start">
                <div>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg">
                    Rua Cezira de Queiroz, 474 - Centro
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg">
                    Pedreira - São Paulo
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg">
                    CEP 13920-000
                  </p>
                </div>
              </div>
            </section>

            <p className="flex gap-2 text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg">
              <span className="w-5 shrink-0 text-zinc-700 lmd:w-8">
                <PhoneIcon />
              </span>
              (19) 3893 2236
            </p>

            <p className="flex gap-2 text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg">
              <span className="w-5 shrink-0 text-zinc-700 lmd:w-8">
                <ClockIcon />
              </span>
              Segunda à Sexta das 7:00 ás 17:00
            </p>
          </section>
          <section className="relative mx-auto h-[16.5rem] w-full max-w-[18.5rem] shrink-0 overflow-hidden rounded-lg lg:mx-0 lmd:h-[33.5rem] lmd:w-[38rem] lmd:max-w-none xlg:h-[41.5rem] xlg:w-[47rem]">
            <iframe
              className="h-full w-full rounded-lg lmd:rounded-3xl"
              title="Mapa com localização do escritório"
              src={location}
            ></iframe>
          </section>
        </section>
      </div>
    </section>
  );
};

export default LocationSection;

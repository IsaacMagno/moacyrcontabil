import { LocationIcon, PhoneIcon, ClockIcon } from "@/components/svgs";

const LocationSection = () => {
  const location =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.338460768553!2d-46.898004!3d-22.7436757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8dea17d4ac493%3A0x1d5e7860955bf9aa!2sGasparini%20Contabilidade%20Ltda!5e0!3m2!1spt-BR!2sbr!4v1709588448952!5m2!1spt-BR!2sbr";
  return (
    <section className="flex flex-col w-full px-4 py-6 items-start gap-6 bg-[#323231] lg:px-20 lg:py-16 lg:gap-6 lmd:py-32 lmd:gap-10 xlg:px-32 xlg:py-[11.5rem] h-full">
      <section>
        <strong className="text-[#F6BE25]">
          Explore soluções contábeis personalizadas para o seu negócio!
        </strong>
        <h1 className="text-[#F6BE25]">Conheça nosso escritório!</h1>
      </section>

      <section className="flex flex-col gap-6 lg:flex-row items-center self-center lg:gap-32 xlg:gap-72">
        <section className="flex flex-col gap-4">
          <section className="flex items-center gap-2">
            <span className="w-5 lmd:w-8 text-white">
              <LocationIcon />
            </span>
            <div className="flex flex-col items-start">
              <div>
                <p className="text-white">
                  Rua Cezira de Queiroz, 474 - Centro
                </p>
                <p className="text-white">Pedreira - São Paulo</p>
                <p className="text-white">CEP 13920-000</p>
              </div>
            </div>
          </section>

          <p className="flex gap-2 text-white">
            <span className="w-5 lmd:w-8 text-white">
              <PhoneIcon />
            </span>
            (19) 3893 2236
          </p>

          <p className="flex gap-2 text-white">
            <span className="w-5 lmd:w-8 text-white">
              <ClockIcon />
            </span>
            Segunda à Sexta das 7:00 ás 17:00
          </p>
        </section>
        <section className="w-[18.5rem] h-[16.5rem] lmd:w-[38rem] lmd:h-[33.5rem] xlg:w-[47rem] xlg:h-[41.5rem]">
          <iframe
            className="w-full h-full rounded-lg lmd:rounded-3xl"
            title="Mapa com localização do escritório"
            src={location}
          ></iframe>
        </section>
      </section>
    </section>
  );
};

export default LocationSection;

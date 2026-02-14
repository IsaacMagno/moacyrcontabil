import InfoCard from "@/components/layout/InfoCard";
import { serviceSectionText as info } from "@/helpers/servicesSectionText";

const InfoSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 lg:gap-6 lmd:gap-20 xlg:flex-row xlg:gap-4 my-10 lg:my-14 xlg:my-32 ">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-32  lmd:gap-40 xlg:gap-4">
        <InfoCard title={info[0].title} list={info[0].list} />
        <InfoCard title={info[1].title} list={info[1].list} />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-32  lmd:gap-40 xlg:gap-4">
        <InfoCard title={info[2].title} list={info[2].list} />
        <InfoCard title={info[3].title} list={info[3].list} />
      </div>
    </section>
  );
};

export default InfoSection;

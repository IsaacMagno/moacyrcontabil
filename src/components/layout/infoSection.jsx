import InfoCard from "@/components/layout/InfoCard";
import { serviceSectionText as info } from "@/helpers/servicesSectionText";

const InfoSection = () => {
  return (
    <section className="w-full my-10 lg:my-14 xlg:my-32">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-5 lmd:gap-6">
        {info.map(({ title, list }) => (
          <InfoCard key={title} title={title} list={list} />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

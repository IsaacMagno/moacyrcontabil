import HeroSection from "./heroSection";
import MainSection from "./mainSection";
import ServicesShowcaseSection from "./servicesShowcaseSection";
import ContactDoubtSection from "../contato/contactDoubtSection";
import LocationSection from "../contato/locationSection";
import ResumeSection from "../curriculos/resumeSection";
import InfoSection from "../../components/layout/infoSection";
import { metadataInicial } from "@/helpers/metadata";

export const metadata = metadataInicial;

export default function Inicio() {
  return (
    <div>
      <HeroSection />
      <MainSection>
        <ServicesShowcaseSection />
        <InfoSection />
      </MainSection>

      <section id="contato" className="scroll-mt-24">
        <ContactDoubtSection />
        <LocationSection />
      </section>

      <section id="curriculos" className="scroll-mt-24">
        <ResumeSection />
      </section>
    </div>
  );
}

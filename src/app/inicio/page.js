import HeroSection from "./heroSection";
import MainSection from "./mainSection";
import ServicesShowcaseSection from "./servicesShowcaseSection";
import ContactDoubtSection from "../contato/contactDoubtSection";
import LocationSection from "../contato/locationSection";
import ResumeSection from "../curriculos/resumeSection";
import InfoSection from "../../components/layout/infoSection";
import BoletinsSection from "./boletinsSection";
import { metadataInicial } from "@/helpers/metadata";

export const metadata = metadataInicial;

export const dynamic = "force-dynamic";

export default function Inicio() {
  return (
    <div>
      <HeroSection />
      <MainSection>
        <BoletinsSection />
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

import ServiceSection from "./serviceSection";
import ContactSection from "../../components/commum-sections/contactSection";
import DreamSection from "../../components/commum-sections/dreamSection";
import AboutSection from "./aboutSection";
import HeroSection from "./heroSection";
import MainSection from "./mainSection";
import PreventionSection from "./preventionSection";
// import InfoSection from "../../components/layout/infoSection";
import { metadataInicial } from "@/helpers/metadata";
import DigitalSection from "./digitalSection";
import CertificateSection from "./certificateSection";
import PlanningSection from "./planningSection";
import ControlSection from "./controlSection";

export const metadata = metadataInicial;

export default function Inicio() {
  return (
    <div>
      <MainSection>
        <HeroSection />
        {/* <InfoSection /> */}
        <PreventionSection />
        <DigitalSection />
      </MainSection>
      <CertificateSection />
      <PlanningSection />
      <ControlSection />
      <ServiceSection />
      <ContactSection />
      <AboutSection />
      <DreamSection />
    </div>
  );
}

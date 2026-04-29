import BannerServicesSection from "./bannerServicesSection";
import DreamSection from "@/components/commum-sections/dreamSection";
import ReasonsSection from "./reasonsSection";
import { metadataServices } from "../../helpers/metadata";
import InfoSection from "@/components/layout/infoSection";

export const metadata = metadataServices;

export default function Servicos() {
  return (
    <main className="h-full bg-[#E9E9E9]">
      <BannerServicesSection />
      <InfoSection />
      <DreamSection />
      <ReasonsSection />
    </main>
  );
}

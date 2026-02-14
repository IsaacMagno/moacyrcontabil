import BannerContactSection from "./bannerContactSection";
import ContactDoubtSection from "./contactDoubtSection";
import LocationSection from "./locationSection";
import { metadataContact } from "../../helpers/metadata";

export const metadata = metadataContact;
export default function Contato() {
  return (
    <main className="h-full">
      <BannerContactSection />
      <ContactDoubtSection />
      <LocationSection />
    </main>
  );
}

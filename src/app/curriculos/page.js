import ResumeSection from "./resumeSection";
import { metadataCurriculos } from "../../helpers/metadata";

export const metadata = metadataCurriculos;

export default function Curriculos() {
  return (
    <main className="h-full">
      <ResumeSection />
    </main>
  );
}

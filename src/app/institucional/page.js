import BannerAboutSection from "./bannerAboutSection";
import ResumeSection from "./resumeSection";
import StorySection from "./storySection";
import { metadataInstitutional } from "../../helpers/metadata";

export const metadata = metadataInstitutional;

export default function Institucional() {
  return (
    <main className="h-full">
      <BannerAboutSection />
      <StorySection />
      <ResumeSection />
    </main>
  );
}

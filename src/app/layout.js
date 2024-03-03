import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LinkButton from "@/components/layout/LinkButton";
import { WhatsappIcon } from "@/components/svgs";
import { Attach } from "@/components/svgs";
import ContactBar from "@/components/layout/ContactBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Moacyr Contabilidade",
  description: "Contabilidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="hidden lg:block">
          <ContactBar />
        </div>
        <Navbar />
        {children}
        {/* <LinkButton name="Testando um dois tres" />
        <LinkButton
          icon={<WhatsappIcon />}
          wppButton
          name="Testando um dois tres"
        />
        <LinkButton icon={<Attach />} name="Testando um dois tres" /> */}
        <Footer />
      </body>
    </html>
  );
}

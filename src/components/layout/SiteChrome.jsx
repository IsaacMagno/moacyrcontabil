"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/whatsapp-button";

const SiteChrome = ({ children }) => {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return children;
  }

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">{children}</main>
      <WhatsAppButton
        phoneNumber="+551938932236"
        message="Olá! Gostaria de saber mais sobre os serviços da contabilidade"
        position="right"
        size="lg"
        offset={24}
      />
      <Footer />
    </>
  );
};

export default SiteChrome;

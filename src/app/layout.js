import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactBar from "@/components/layout/ContactBar";
import WhatsAppButton from "@/components/whatsapp-button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="banner mobile.png" as="image" />
      </head>
      <body className={montserrat.className}>
        <div className="hidden lg:block">
          <ContactBar />
        </div>
        <Navbar />
        <main className="relative min-h-screen">
          {children}
          <WhatsAppButton
            phoneNumber="+551938932236"
            message="Olá! Gostaria de saber mais sobre os serviços da contabilidade"
            position="right"
            size="lg"
            offset={24}
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}

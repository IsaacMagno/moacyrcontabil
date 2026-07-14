import { Montserrat } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href="/banner%20mobile.png" as="image" />
      </head>
      <body className={montserrat.className}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

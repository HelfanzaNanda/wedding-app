import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/config/wedding";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: weddingConfig.meta.title,
  description: weddingConfig.meta.description,
  openGraph: {
    title: weddingConfig.meta.title,
    description: weddingConfig.meta.description,
    images: [weddingConfig.meta.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${bodoniModa.variable} ${montserrat.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9F6F0] text-[#453D35] selection:bg-[#B89B72]/20 selection:text-[#453D35] font-sans font-light">
        {children}
      </body>
    </html>
  );
}

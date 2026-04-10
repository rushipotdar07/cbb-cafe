import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cold Brew Bliss | The Art of the Perfect Chill",
  description: "Experience untamed flavor in high definition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-zinc-800">
        <SmoothScroll>
          <NavBar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

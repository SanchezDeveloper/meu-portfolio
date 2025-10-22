"use client";

import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Import dinâmico dos componentes mais pesados
const FisrtSection = dynamic(() => import("@/components/home-section"), { ssr: false });
const AboutSection = dynamic(() => import("@/components/about-section"), { ssr: false });
const PortfolioShowcase = dynamic(() => import("@/components/portfolio-showcase"), { ssr: false });
const StackSection = dynamic(() => import("@/components/stack-section"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/contact-section"), { ssr: false });

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-gray-800 to-gray-950 ">
      <Header />
      <main className="">
        <article>
          <FisrtSection />
          <AboutSection />
          <StackSection />
          <PortfolioShowcase />
          <ContactSection />
        </article>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import ExperienceIntro from "@/components/sections/experience-intro";
import FeaturedWork from "@/components/sections/featured-work";
import WhoWeAre from "@/components/sections/who-we-are";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import TeamSection from "@/components/sections/team";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceIntro />
        <FeaturedWork />
        <WhoWeAre />
        <Services />
        <Testimonials />
        <FAQSection />
        <TeamSection />
      </main>
      <CtaSection />
      <Footer />
    </>
  );
}

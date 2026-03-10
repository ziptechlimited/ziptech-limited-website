import React from "react";

export const metadata = {
  title: "Privacy Policy | Ziptech Limited",
  description: "Read Ziptech Limited’s Privacy Policy covering data collection, usage, and protection.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#111] text-[#f0ebe3]">
      <section className="px-[5vw] py-[12vh] max-w-[1200px] mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-none font-medium uppercase tracking-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-lg text-white/70 leading-relaxed mb-6">
          Ziptech Limited respects your privacy. We collect only necessary information to provide and improve our services. We do not sell personal data.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Information We Collect</h2>
        <p className="text-white/70 leading-relaxed">
          Contact details, usage data, and cookies used to enhance site performance and security.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">How We Use Information</h2>
        <p className="text-white/70 leading-relaxed">
          Service delivery, analytics, security, and communication related to our offerings.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="text-white/70 leading-relaxed">
          For questions, email info@ziptechlimited.com.
        </p>
      </section>
    </main>
  );
}

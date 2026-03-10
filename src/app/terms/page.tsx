import React from "react";

export const metadata = {
  title: "Terms of Service | Ziptech Limited",
  description: "Read Ziptech Limited’s Terms of Service governing use of our website and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#111] text-[#f0ebe3]">
      <section className="px-[5vw] py-[12vh] max-w-[1200px] mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-none font-medium uppercase tracking-tight mb-8">
          Terms of Service
        </h1>
        <p className="text-lg text-white/70 leading-relaxed mb-6">
          By using this website, you agree to abide by these terms. Ziptech Limited provides content and services subject to applicable laws and fair use.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Use of Services</h2>
        <p className="text-white/70 leading-relaxed">
          You agree not to misuse the site or attempt to disrupt service operations.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Intellectual Property</h2>
        <p className="text-white/70 leading-relaxed">
          All content is owned by Ziptech Limited or its licensors and may not be reproduced without permission.
        </p>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="text-white/70 leading-relaxed">
          For inquiries, email info@ziptechlimited.com.
        </p>
      </section>
    </main>
  );
}

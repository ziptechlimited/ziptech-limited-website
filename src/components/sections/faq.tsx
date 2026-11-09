"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-t border-border group last:border-b">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-[3.5rem] text-left transition-colors duration-300 hover:text-accent focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.2] tracking-tight">
          {question}
        </h3>
        <div
          className={cn(
            "ml-4 flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isOpen ? "rotate-45" : "rotate-0"
          )}
        >
          <Plus className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "max-h-[500px] pb-[3.5rem]" : "max-h-0"
        )}
      >
        <p className="max-w-[800px] text-[1.125rem] md:text-[1.25rem] leading-[1.6] text-muted-foreground font-sans">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer:
        "We build custom software, websites, web apps and mobile apps, and support businesses with digital growth, business development advisory and venture incubation. Whether you need a new product built from scratch or help scaling an existing one, we adapt to fit your business goals.",
    },
    {
      question: "Which industries do you work with?",
      answer:
        "We’ve delivered products for clients in fintech, health, social platforms and legal services. We are an agile team and our skills adapt to most industries, bringing a fresh, human-centric perspective to every project.",
    },
    {
      question: "How does your pricing work?",
      answer:
        "We offer both project-based pricing and ongoing retainers, billed at a flat hourly rate. Once we scope your project, you’ll receive a clear estimate before we begin. If the scope shifts, we’ll flag it early so there are no surprises.",
    },
    {
      question: "Do you handle development too?",
      answer:
        "Yes. Development is at the core of what we do: our in-house engineers design, build and launch your product end to end. If you already have a dev team, we’ll work hand-in-hand with them to ensure a smooth handover and seamless build.",
    },
    {
      question: "What is your process like?",
      answer:
        "Every project moves through four stages. Discovery: we dig into your goals, audience and requirements. Design: iterative sprints on user experience and visual design. Develop: clean, well-tested code with continuous integration. Deliver: a smooth launch and post-launch support. We work transparently and keep you involved at every stage.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines depend on scope. A website typically takes a few weeks, while a custom web or mobile app usually runs a few months from kickoff to launch. We’ll always share a timeline upfront to ensure clarity and structure.",
    },
  ];

  return (
    <section className="bg-background py-[100px] md:py-[150px]" data-theme="dark">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column - Heading */}
          <div className="lg:w-1/3">
            <h2 className="text-[3.5rem] md:text-[5.5rem] font-medium leading-[1.1] tracking-tight sticky top-[100px]">
              FAQs
            </h2>
          </div>

          {/* Right Column - Accordions */}
          <div className="lg:w-2/3">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
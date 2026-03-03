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
        "We specialise in branding and UX/UI design for websites and apps, but our approach is versatile. Whether it’s a full brand identity, a design system build, or ongoing design support, we adapt to fit your business goals.",
    },
    {
      question: "Which industries do you work with?",
      answer:
        "Our core expertise is in fintech and e-commerce, but we’ve partnered with clients across hospitality, law, accounting, packaging, edtech and many more. We are an agile team and our skills can adapt to most verticals, bringing a fresh, human-centric perspective to any industry.",
    },
    {
      question: "How does your pricing work?",
      answer:
        "We offer both project-based pricing and ongoing retainers, billed at a flat hourly rate. Once we scope your project, you’ll receive a clear estimate before we begin. If the scope shifts, we’ll flag it early so there are no surprises.",
    },
    {
      question: "Do you handle development too?",
      answer:
        "We focus on what we do best: design. For development, we collaborate with trusted partners we believe are the best of the best. If you already have a dev team, we’ll work hand-in-hand with them to ensure a smooth handover and seamless build.",
    },
    {
      question: "What is your design process like?",
      answer:
        "Every project begins with a discovery session to align on your goals. From there, we move through two key phases: UX Discovery & Design, where we focus on research, user flows, and wireframes to create an intuitive experience, and UI Discovery & Design, where we bring your brand to life through polished, visually engaging interfaces. We work transparently, keep you involved at every stage, and iterate throughout the process to ensure the final product meets your vision.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines depend on scope, but most branding projects take roughly 6 to 8 weeks, and websites or apps typically run 8 to 12 weeks from kickoff to development handover. We’ll always share a timeline upfront to ensure clarity and structure.",
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
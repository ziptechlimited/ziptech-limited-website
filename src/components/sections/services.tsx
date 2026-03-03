import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, MonitorSmartphone, PenTool, Rocket, Globe, ShoppingCart, LayoutTemplate, Sparkles, BrainCircuit, Database, Cpu, Eye, GitMerge, MessageSquare, LineChart, Network, Cloud, Server, ShieldCheck, Container } from 'lucide-react';

const chapters = [
  {
    num: "01",
    title: "App Development",
    items: [
      { id: "1.1", title: "NATIVE iOS & ANDROID", description: "High-performance applications built specifically for their target platforms.", icon: Smartphone },
      { id: "1.2", title: "CROSS-PLATFORM", description: "Efficient React Native & Flutter solutions that share a single codebase.", icon: MonitorSmartphone },
      { id: "1.3", title: "UI/UX PROTOTYPING", description: "Interactive wireframes and user flow mapping before writing a line of code.", icon: PenTool },
      { id: "1.4", title: "APP STORE DEPLOYMENT", description: "Navigating compliance, testing, and full lifecycle release management.", icon: Rocket }
    ]
  },
  {
    num: "02",
    title: "Website Development",
    items: [
      { id: "2.1", title: "MODERN WEB APPS", description: "Scalable SPAs and server-rendered applications using Next.js & React.", icon: Globe },
      { id: "2.2", title: "E-COMMERCE", description: "High-conversion storefronts utilizing Shopify, Stripe, and headless commerce.", icon: ShoppingCart },
      { id: "2.3", title: "CUSTOM CMS", description: "Tailored content management systems for ultimate editorial control.", icon: LayoutTemplate },
      { id: "2.4", title: "WEB ANIMATIONS", description: "Award-winning WebGL, Three.js, and Framer Motion immersive digital experiences.", icon: Sparkles }
    ]
  },
  {
    num: "03",
    title: "AI Integration",
    items: [
      { id: "3.1", title: "LLM INTEGRATION", description: "Embedding massive language capabilities directly into your existing software.", icon: BrainCircuit },
      { id: "3.2", title: "RAG SYSTEMS", description: "Retrieval-Augmented Generation that allows AI to converse with your proprietary data privately.", icon: Database },
      { id: "3.3", title: "AI AGENTS", description: "Autonomous digital workers capable of multi-step reasoning and API execution.", icon: Cpu },
      { id: "3.4", title: "COMPUTER VISION", description: "Real-time image analysis, object detection, and visual processing pipelines.", icon: Eye }
    ]
  },
  {
    num: "04",
    title: "AI Automation",
    items: [
      { id: "4.1", title: "WORKFLOW AUTOMATION", description: "Replacing tedious manual processes with intelligent, self-healing automated logic.", icon: GitMerge },
      { id: "4.2", title: "CUSTOMER SUPPORT", description: "Tier-1 intelligent routing and instant-response conversational AI chatbots.", icon: MessageSquare },
      { id: "4.3", title: "DATA EXTRACTION", description: "Unstructured data parsing, web scraping, and automated database population.", icon: Database },
      { id: "4.4", title: "PREDICTIVE ANALYTICS", description: "Machine learning models designed to forecast trends from historical business data.", icon: LineChart }
    ]
  },
  {
    num: "05",
    title: "Cloud Architecture",
    items: [
      { id: "5.1", title: "SERVERLESS", description: "Infinitely scalable Lambda and Edge Function infrastructures with zero maintenance.", icon: Network },
      { id: "5.2", title: "DATABASE DESIGN", description: "Robust relational (PostgreSQL) and flexible NoSQL (MongoDB/Redis) data architecture.", icon: Server },
      { id: "5.3", title: "CI/CD PIPELINES", description: "Automated testing and zero-downtime continuous deployment workflows.", icon: ShieldCheck },
      { id: "5.4", title: "INFRASTRUCTURE AS CODE", description: "Terraform and Docker containerization ensuring identical development and production environments.", icon: Container }
    ]
  }
];

const StackedCard = ({ chapter, index, totalCards, scrollYProgress }: { chapter: any, index: number, totalCards: number, scrollYProgress: any }) => {
  const numTransitions = totalCards > 1 ? totalCards - 1 : 1;
  const startEntry = (index - 1) / numTransitions;
  const endEntry = index / numTransitions;

  const y = useTransform(
    scrollYProgress,
    [startEntry, endEntry],
    ['100vh', '0vh']
  );

  const startShrink = index / numTransitions;
  const endShrink = (index + 1) / numTransitions;

  const scale = useTransform(
    scrollYProgress,
    [startShrink, endShrink],
    [1, 0.95]
  );

  const shadowOpacity = useTransform(
    scrollYProgress,
    [startShrink, endShrink],
    [0, 0.15]
  );
  
  const topOffset = `calc(${index * 40}px + 6vh)`;

  return (
    <motion.div
      style={{
        scale,
        y: index === 0 ? '0vh' : y,
        top: topOffset, 
        bottom: '0vh', // Anchors the card perfectly to the viewport bottom
      }}
      className="absolute left-[2vw] right-[2vw] bg-[#EBEBEB] text-[#111111] overflow-hidden flex flex-col justify-between pt-10 pb-[8vh] px-[5vw] rounded-t-3xl border-t border-black/10 origin-top shadow-[0_-10px_40px_rgba(0,0,0,0.05)]"
    >
      {/* Dark overlay for simulated depth/shadow as the card shrinks backward without making the card itself transparent */}
      <motion.div 
        style={{ opacity: shadowOpacity }} 
        className="absolute inset-0 bg-black pointer-events-none z-0" 
      />
      {/* Top Header Row */}
      <div className="flex justify-between items-start w-full">
        <h2 className="text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.04em] font-medium max-w-[60%]">
          {chapter.title}
        </h2>
        
        <div className="text-right">
          <div className="flex gap-4 items-baseline justify-end border-t border-black/20 pt-2 w-[150px] md:w-[200px]">
             <span className="text-[0.6rem] uppercase tracking-widest font-semibold">SERVICE AREA:</span>
          </div>
          <span className="text-[clamp(5rem,12vw,14rem)] leading-[0.8] tracking-[-0.05em] font-medium inline-block relative -right-[2vw]">
            {chapter.num}
          </span>
        </div>
      </div>

      {/* Bottom Chapters List */}
      <div className="w-full mt-auto">
        <h3 className="text-[1.2rem] md:text-[1.5rem] font-semibold tracking-[-0.02em] mb-8">
          CAPABILITIES
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-black/20 pt-4">
          {chapter.items.map((item: any, i: number) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col py-6 border-b border-black/10">
                <div className="flex items-center gap-4 mb-3 text-[0.7rem] md:text-[0.8rem] font-mono tracking-wider">
                  <span className="opacity-60">{item.id}</span>
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4 opacity-80" strokeWidth={2.5} />}
                    <span className="uppercase font-semibold">{item.title}</span>
                  </div>
                </div>
                <p className="text-[0.95rem] md:text-[1.05rem] leading-[1.6] opacity-75 max-w-[90%]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef}
      className="bg-[#EBEBEB] relative" 
      // Add extra padding at the end so the final card isn't immediately cut off
      style={{ height: `${(chapters.length > 1 ? chapters.length - 1 : 1) * 100 + 200}vh` }}
      data-theme="light"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col pt-[5vh] items-center justify-start overflow-hidden">
        
        <div className="w-full h-full relative">
          {chapters.map((chapter, index) => (
            <StackedCard 
              key={index} 
              chapter={chapter} 
              index={index} 
              totalCards={chapters.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
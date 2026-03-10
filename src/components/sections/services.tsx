import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, MonitorSmartphone, PenTool, Rocket, Globe, ShoppingCart, LayoutTemplate, Sparkles, BrainCircuit, Database, Cpu, Eye, GitMerge, MessageSquare, LineChart, Network, Cloud, Server, ShieldCheck, Container } from 'lucide-react';

const chapters = [
  {
    num: "01",
    title: "Technology Solutions",
    items: [
      { id: "1.1", title: "CUSTOM SOFTWARE", description: "Bespoke technology solutions that digitize operations and improve efficiency.", icon: MonitorSmartphone },
      { id: "1.2", title: "WEB APPS", description: "Scalable SPAs and server-rendered applications using modern frameworks.", icon: Globe },
      { id: "1.3", title: "MOBILE APPS", description: "High-performance applications built specifically for global platforms.", icon: Smartphone },
      { id: "1.4", title: "API INTEGRATIONS", description: "Connecting systems and organizing product architecture for seamless data flow.", icon: Database }
    ]
  },
  {
    num: "02",
    title: "Digital Growth",
    items: [
      { id: "2.1", title: "SOCIAL MEDIA", description: "Strategic social media management and proactive digital marketing.", icon: MessageSquare },
      { id: "2.2", title: "CONTENT CREATION", description: "Brand positioning through compelling storytelling and content development.", icon: PenTool },
      { id: "2.3", title: "DIGITAL CAMPAIGNS", description: "Targeted strategies designed to expand audience reach and engagement.", icon: Sparkles },
      { id: "2.4", title: "ANALYTICS", description: "Data-driven insights and forecasting to optimize digital footprints.", icon: LineChart }
    ]
  },
  {
    num: "03",
    title: "Business Development",
    items: [
      { id: "3.1", title: "STRATEGIC ADVISORY", description: "Guidance for startups and organizations to ensure sustainable business growth.", icon: BrainCircuit },
      { id: "3.2", title: "BUSINESS MODELS", description: "Developing resilient revenue architectures and operational structures.", icon: LayoutTemplate },
      { id: "3.3", title: "MARKET RESEARCH", description: "In-depth product-market fit analysis and competitive landscape evaluation.", icon: Network },
      { id: "3.4", title: "PITCH DECKS", description: "Preparation of investor-ready materials and comprehensive growth strategies.", icon: Cpu }
    ]
  },
  {
    num: "04",
    title: "Venture Incubation",
    items: [
      { id: "4.1", title: "MENTORSHIP", description: "Ziptech Labs offers dedicated support for early-stage founders.", icon: ShieldCheck },
      { id: "4.2", title: "PRODUCT DEVELOPMENT", description: "Technical architecture and guidance from concept to launch.", icon: GitMerge },
      { id: "4.3", title: "TALENT SOURCING", description: "Connecting startups with top-tier personnel and accountability frameworks.", icon: Eye },
      { id: "4.4", title: "EQUITY COLLABORATION", description: "Strategic partnerships and investments with select high-potential startups.", icon: Rocket }
    ]
  },
  {
    num: "05",
    title: "Tech Education",
    items: [
      { id: "5.1", title: "WORKSHOPS", description: "Future Ziptech Academy initiatives designed to build core practical skills.", icon: Container },
      { id: "5.2", title: "TRAINING PROGRAMS", description: "Comprehensive courses addressing the technical demands of the modern workplace.", icon: Cloud },
      { id: "5.3", title: "INTERNSHIPS", description: "Hands-on experience providing exposure to real-world technological challenges.", icon: Cpu },
      { id: "5.4", title: "MENTORSHIP", description: "Direct guidance for aspiring technology professionals by seasoned experts.", icon: Server }
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
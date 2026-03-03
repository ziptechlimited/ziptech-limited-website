export type ProjectData = {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  heroImage: string;
  overview: string;
  client: string;
  role: string;
  timeline: string;
  challenge: string;
  solution: string;
  impact: string;
  detailImages: string[];
  nextProjectSlug: string | null;
  nextProjectTitle: string | null;
  liveUrl?: string;
};

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: "area-hood",
    title: "Area Hood",
    category: "An App Redesign Built for Discovery",
    tags: ["UI Design", "UX Design"],
    heroImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1600&auto=format&fit=crop",
    overview: "We partnered with Area Hood to reimagine how users discover local events and connect with their surrounding community. The goal was to build an intuitive, visually engaging app that felt less like a directory and more like a curated neighborhood guide.",
    client: "Area Hood Inc.",
    role: "Lead Product Design",
    timeline: "3 Months",
    challenge: "The existing platform suffered from information overload. Users felt overwhelmed by cluttered map interfaces and dense lists, leading to high drop-off rates during the discovery phase of their journey.",
    solution: "We introduced a bold, card-based UI that prioritizes high-quality imagery and clear typography. By streamlining the filtering process and implementing smooth micro-interactions, we created a browsing experience that feels effortless and inviting.",
    impact: "+45% increase in daily active users and a 60% reduction in time-to-first-conversion.",
    detailImages: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    ],
    nextProjectSlug: "sarinmota",
    nextProjectTitle: "Sarinmota",
    liveUrl: "https://areahood.com"
  },
  {
    id: 2,
    slug: "sarinmota",
    title: "Sarinmota",
    category: "A Packaging Website with Purpose",
    tags: ["Brand Design", "UX Design"],
    heroImage: "/sarinmota.png",
    overview: "Sarinmota approached us to create a digital home for their sustainable packaging solutions. They needed a platform that communicated their eco-friendly ethos while remaining highly functional for B2B procurement.",
    client: "Sarinmota Packaging",
    role: "Brand & Digital Strategy",
    timeline: "4 Months",
    challenge: "B2B packaging websites are notoriously dry and difficult to navigate. The challenge was to inject personality and storytelling into a commoditized industry without sacrificing the quick-order functionality enterprise clients expect.",
    solution: "We developed a serene, nature-inspired visual language paired with a highly structured product catalog. Cinematic scroll sequences highlight the materials' lifecycle, while a persistent, frictionless cart system ensures ease of use.",
    impact: "Secured 3 major enterprise contracts within the first month of launch.",
    detailImages: [
      "https://images.unsplash.com/photo-1605608027727-4a1622f98126?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744094-24638ea0b46c?q=80&w=2070&auto=format&fit=crop"
    ],
    nextProjectSlug: "helpguide",
    nextProjectTitle: "Helpguide",
    liveUrl: "https://sarkinmota.ng"
  },
  {
    id: 3,
    slug: "helpguide",
    title: "Helpguide",
    category: "A Digital Revamp for Mental Wellbeing",
    tags: ["Brand Design", "UI Design"],
    heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop",
    overview: "Helpguide required a complete digital transformation to better serve millions seeking mental health resources. The platform needed to feel institutional yet deeply empathetic.",
    client: "Helpguide Org",
    role: "Design System & UI",
    timeline: "6 Months",
    challenge: "The legacy site was difficult to navigate, especially for neurodivergent users or those in distress. Accessibility was paramount, but the visual execution needed to feel modern, uplifting, and completely devoid of clinical coldness.",
    solution: "We engineered a WCAG AAA compliant design system featuring soft, warm color palettes and highly legible typography. Information architecture was completely overhauled to prioritize immediate access to crisis resources and guided reading paths.",
    impact: "Served over 2 million users in the first quarter with a 30% increase in resource downloads.",
    detailImages: [
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    ],
    nextProjectSlug: "payjustnow",
    nextProjectTitle: "PayJustNow",
    liveUrl: "https://www.helpguide.org"
  },
  {
    id: 4,
    slug: "payjustnow",
    title: "PayJustNow",
    category: "PayJustNow's Website Reimagined",
    tags: ["UI Design", "UX Design"],
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    overview: "As a leading \"Buy Now, Pay Later\" platform, PayJustNow needed a consumer-facing website that matched the speed, security, and vibrant energy of their fintech product.",
    client: "PayJustNow",
    role: "Web Design & Motion",
    timeline: "2.5 Months",
    challenge: "Fintech products often struggle to build trust while maintaining a fresh, appealing brand. We had to balance communicating complex financial terms clearly while keeping the user excited about the purchasing power the app provides.",
    solution: "We leaned heavily into dynamic motion and bright, confident brand colors. Complex data points were visualized through interactive 3D elements, and the onboarding flow was gamified to increase registration completion rates.",
    impact: "Conversion rate optimization led to a 120% YoY increase in merchant sign-ups.",
    detailImages: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    ],
    nextProjectSlug: "area-hood",
    nextProjectTitle: "Area Hood",
    liveUrl: "https://payjustnow.com"
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}

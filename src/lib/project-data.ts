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
    category: "Social",
    tags: [
      "Product Design",
      "Web Development",
      "Mobile App Development",
      "UX Strategy",
    ],
    heroImage:
      "https://res.cloudinary.com/dgxl5swen/image/upload/q_auto/f_auto/v1775814690/areahood.png",
    overview:
      "Area Hood is a community-driven platform designed to help people discover events, businesses, and opportunities within their local neighborhoods. Ziptech partnered with the team to design and build both the web platform and mobile application, creating a seamless experience for users to explore and engage with their community from anywhere.",
    client: "Area Hood",
    role: "Product Design, Web Development & Mobile App Development",
    timeline: "3 Months",
    challenge:
      "The project required building a platform that makes discovering local opportunities simple while remaining engaging and scalable. Many community platforms become cluttered and difficult to navigate as content grows, so the challenge was designing a system that keeps discovery intuitive across both web and mobile devices.",
    solution:
      "Ziptech designed a modern, mobile-first experience supported by a scalable backend. The platform features streamlined navigation, visually rich listings, and responsive performance across devices. The mobile application was built to allow users to easily explore nearby activities, stay updated with community events, and connect with their local environment in real time.",
    impact:
      "The result is a fully integrated digital platform that enables local discovery across web and mobile, giving communities a modern space to connect while providing businesses and event organizers a stronger digital presence.",
    // technologies: ["React", "Next.js", "Node.js", "Mobile App", "REST APIs"],
    detailImages: [],
    nextProjectSlug: "sarinmota",
    nextProjectTitle: "Sarinmota",
    liveUrl: "https://areahood.com",
  },
  {
    id: 2,
    slug: "sarinmota",
    title: "Sarinmota",
    category: "Fintech",
    tags: ["Brand Design", "UX Design"],
    heroImage: "/sarinmota.png",
    overview:
      "Sarinmota approached us to create a digital home for their sustainable packaging solutions. They needed a platform that communicated their eco-friendly ethos while remaining highly functional for B2B procurement.",
    client: "Sarinmota Packaging",
    role: "Brand & Digital Strategy",
    timeline: "4 Months",
    challenge:
      "B2B packaging websites are notoriously dry and difficult to navigate. The challenge was to inject personality and storytelling into a commoditized industry without sacrificing the quick-order functionality enterprise clients expect.",
    solution:
      "We developed a serene, nature-inspired visual language paired with a highly structured product catalog. Cinematic scroll sequences highlight the materials' lifecycle, while a persistent, frictionless cart system ensures ease of use.",
    impact:
      "Secured 3 major enterprise contracts within the first month of launch.",
    detailImages: [],
    nextProjectSlug: "helpguide",
    nextProjectTitle: "Helpguide",
    liveUrl: "https://sarkinmota.ng",
  },
  {
    id: 3,
    slug: "helpguide",
    title: "Helpguide",
    category: "Health",
    tags: ["Brand Design", "UI Design"],
    heroImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop",
    overview:
      "Helpguide required a complete digital transformation to better serve millions seeking mental health resources. The platform needed to feel institutional yet deeply empathetic.",
    client: "Helpguide Org",
    role: "Design System & UI",
    timeline: "6 Months",
    challenge:
      "The legacy site was difficult to navigate, especially for neurodivergent users or those in distress. Accessibility was paramount, but the visual execution needed to feel modern, uplifting, and completely devoid of clinical coldness.",
    solution:
      "We engineered a WCAG AAA compliant design system featuring soft, warm color palettes and highly legible typography. Information architecture was completely overhauled to prioritize immediate access to crisis resources and guided reading paths.",
    impact:
      "Served over 2 million users in the first quarter with a 30% increase in resource downloads.",
    detailImages: [],
    nextProjectSlug: "payjustnow",
    nextProjectTitle: "PayJustNow",
    liveUrl: "https://www.helpguide.org",
  },
  {
    id: 4,
    slug: "payjustnow",
    title: "PayJustNow",
    category: "Fintech",
    tags: ["UI Design", "UX Design"],
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    overview:
      'As a leading "Buy Now, Pay Later" platform, PayJustNow needed a consumer-facing website that matched the speed, security, and vibrant energy of their fintech product.',
    client: "PayJustNow",
    role: "Web Design & Motion",
    timeline: "2.5 Months",
    challenge:
      "Fintech products often struggle to build trust while maintaining a fresh, appealing brand. We had to balance communicating complex financial terms clearly while keeping the user excited about the purchasing power the app provides.",
    solution:
      "We leaned heavily into dynamic motion and bright, confident brand colors. Complex data points were visualized through interactive 3D elements, and the onboarding flow was gamified to increase registration completion rates.",
    impact:
      "Conversion rate optimization led to a 120% YoY increase in merchant sign-ups.",
    detailImages: [],
    nextProjectSlug: "oakolawoleandco",
    nextProjectTitle: "O.A. Kolawole and Co",
    liveUrl: "https://payjustnow.com",
  },
  {
    id: 5,
    slug: "oakolawoleandco",
    title: "O.A. Kolawole & Co",
    category: "Legal Services",
    tags: ["Website Design", "SEO", "Corporate Website"],
    heroImage:
      "https://res.cloudinary.com/dgxl5swen/image/upload/q_auto/f_auto/v1775814690/oakolawoleandco.png",
    overview:
      "O.A. Kolawole & Co is a Nigerian law firm providing legal practice and consultancy services. The firm needed a modern website to establish credibility online, showcase its legal expertise, and make it easier for potential clients to learn about its services and get in touch.",
    client: "O.A. Kolawole & Co",
    role: "Web Design, Development & SEO",
    timeline: "1 Month",
    challenge:
      "Law firms rely heavily on credibility and clarity. The challenge was creating a professional digital presence that communicates trust, expertise, and authority while keeping the design simple and accessible for clients seeking legal assistance.",
    solution:
      "We designed a clean and professional website structure focused on clear service presentation, easy navigation, and strong credibility signals. The site includes well-structured service pages, optimized SEO content, and a streamlined contact experience to help potential clients reach the firm quickly.",
    impact:
      "The new website provides the firm with a credible online presence, improves discoverability through SEO, and creates a central hub where prospective clients can easily learn about their legal services.",
    detailImages: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2015&auto=format&fit=crop",
    ],
    nextProjectSlug: "area-hood",
    nextProjectTitle: "Area Hood",
    liveUrl: "https://www.oakolawoleandco.com/",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find((project) => project.slug === slug);
}

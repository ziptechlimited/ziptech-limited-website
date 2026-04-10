import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

import SmoothScroll from "@/components/providers/smooth-scroll";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com",
  ),

  applicationName: "Ziptech Limited",

  authors: [
    {
      name: "Ziptech Limited",
      url: "https://ziptechlimited.com",
    },
    {
      name: "Obinna David Okeke",
      url: "https://github.com/o-david",
    },
  ],

  title: {
    default:
      "Ziptech Limited — Technology, Business Development & Digital Venture Studio",
    template: "%s | Ziptech Limited",
  },

  description:
    "Ziptech Limited is a technology and venture studio based in Abuja, Nigeria. We design and build scalable digital products while helping startups and businesses grow through software engineering, digital strategy, and business development advisory.",

  keywords: [
    "Ziptech Limited",
    "Ziptech Labs",
    "software development Nigeria",
    "web development Abuja",
    "mobile app development Nigeria",
    "Next.js development",
    "MERN stack development",
    "digital product studio",
    "venture studio Nigeria",
    "startup business development",
    "product strategy",
    "startup incubation Nigeria",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com",
    siteName: "Ziptech Limited",
    title:
      "Ziptech Limited — Technology, Business Development & Digital Venture Studio",
    description:
      "Ziptech Limited helps startups and businesses transform ideas into scalable digital ventures through technology solutions, digital growth strategies, and business development advisory.",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Ziptech Limited — Technology and Venture Studio",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ziptech Limited — Technology, Business Development & Venture Studio",
    description:
      "Building scalable software, digital platforms, and growth strategies for startups and businesses worldwide.",
    images: ["/hero-bg.png"],
    creator: "@ziptech",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com";
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ziptech Limited",
    url: siteUrl,
    logo: `${siteUrl}/bLogo.jpg`,
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ziptech Limited",
    url: siteUrl,
  };
  return (
    <html lang="en">
      <body className="antialiased">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <Script
          id="jsonld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(orgJsonLd)}
        </Script>
        <Script
          id="jsonld-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteJsonLd)}
        </Script>
        <ErrorReporter />
        <SmoothScroll>{children}</SmoothScroll>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

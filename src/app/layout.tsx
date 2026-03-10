import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

import SmoothScroll from "@/components/providers/smooth-scroll";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com"),
  title: {
    default: "Ziptech Limited — A People First Digital Studio",
    template: "%s | Ziptech Limited",
  },
  description: "Ziptech Limited is a global branding and digital design agency rooted in Vienna and Cape Town.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com",
    siteName: "Ziptech Limited",
    title: "Ziptech Limited — A People First Digital Studio",
    description: "Ziptech Limited is a global branding and digital design agency rooted in Vienna and Cape Town.",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Ziptech Limited",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziptech Limited — A People First Digital Studio",
    description: "Ziptech Limited is a global branding and digital design agency rooted in Vienna and Cape Town.",
    images: ["/hero-bg.png"],
    creator: "@ziptech",
  },
  robots: {
    index: true,
    follow: true,
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com";
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
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
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
        <Script id="jsonld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(orgJsonLd)}
        </Script>
        <Script id="jsonld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
        <ErrorReporter />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

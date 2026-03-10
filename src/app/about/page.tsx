import React from "react";
import AboutClient from "./about-client";

export const metadata = {
  title: "About | Ziptech Limited",
  description: "Learn about Ziptech Limited—technology solutions, venture building, and digital growth across Africa.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

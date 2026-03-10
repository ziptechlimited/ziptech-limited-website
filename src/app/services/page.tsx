import React from "react";
import ServicesClient from "./services-client";

export const metadata = {
  title: "Services | Ziptech Limited",
  description: "Technology solutions, digital growth, business development, venture incubation, and tech education.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

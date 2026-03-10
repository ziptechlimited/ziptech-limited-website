import React from "react";
import WorkIndexClient from "./work-index-client";
import { projectsData } from "@/lib/project-data";

export const metadata = {
  title: "Work | Ziptech Limited",
  description: "Explore Ziptech’s portfolio of high-impact digital products across fintech, health, and more.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return <WorkIndexClient projects={projectsData} />;
}

import React from "react";
import WorkIndexClient from "./work-index-client";
import { projectsData } from "@/lib/project-data";

export const metadata = {
  title: "Our Work | Antigravity Design Studio",
  description: "Explore our portfolio of award-winning digital experiences, from fintech solutions to healthcare platforms.",
};

export default function WorkPage() {
  return <WorkIndexClient projects={projectsData} />;
}

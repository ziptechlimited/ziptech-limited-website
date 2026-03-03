import { getProjectBySlug, projectsData } from "@/lib/project-data";
import { notFound } from "next/navigation";
import ClientProjectDetails from "./client-page";

// Next.js standard way to handle async params in dynamic routes
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ClientProjectDetails project={project} />;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

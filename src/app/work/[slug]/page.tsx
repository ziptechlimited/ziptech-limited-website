import { getProjectBySlug, projectsData } from "@/lib/project-data";
import { notFound } from "next/navigation";
import ClientProjectDetails from "./client-page";
import type { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ziptechlimited.com";
  if (!project) {
    return {
      title: "Project | Ziptech Limited",
      description: "Explore Ziptech Limited projects.",
      alternates: { canonical: `/work/${slug}` },
    };
  }
  return {
    title: `${project.title} | Ziptech Limited`,
    description: project.overview,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}/work/${slug}`,
      siteName: "Ziptech Limited",
      title: project.title,
      description: project.overview,
      images: [
        {
          url: project.heroImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.overview,
      images: [project.heroImage],
    },
  };
}

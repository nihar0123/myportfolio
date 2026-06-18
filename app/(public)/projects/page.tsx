import { ProjectsPageContent } from "@/components/public/projects/projects-page-content";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore AI/ML projects including DevPilot AI, Weapon Detection System using YOLO, and more. Computer Vision and Deep Learning experiments.",
  keywords: ["AI projects", "Machine Learning", "YOLO", "Computer Vision", "Deep Learning", "Python"],
  openGraph: {
    title: "Projects — NB Portfolio",
    description: "Explore AI/ML projects including DevPilot AI, Weapon Detection System using YOLO, and more.",
    url: `${SITE_URL}/projects`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image-projects.png`,
        width: 1200,
        height: 630,
        alt: "NB Portfolio Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — NB Portfolio",
    description: "Explore AI/ML projects including DevPilot AI, Weapon Detection System using YOLO, and more.",
    images: [`${SITE_URL}/og-image-projects.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsPageContent />
    </div>
  );
}

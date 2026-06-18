import { WorkbenchPageContent } from "@/components/public/workbench/workbench-page-content";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workbench",
  description: "Active AI/ML projects and experiments. Currently building DevPilot AI - an AI-powered developer assistant SaaS.",
  keywords: ["AI projects", "Machine Learning", "DevPilot AI", "work in progress", "LLM", "SaaS"],
  openGraph: {
    title: "Workbench — NB Portfolio",
    description: "Active AI/ML projects and experiments. Currently building DevPilot AI.",
    url: `${SITE_URL}/workbench`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image-workbench.png`,
        width: 1200,
        height: 630,
        alt: "NB Workbench",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workbench — NB Portfolio",
    description: "Active AI/ML projects and experiments. Currently building DevPilot AI.",
    images: [`${SITE_URL}/og-image-workbench.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/workbench`,
  },
};

export default function WorkbenchPage() {
  return (
    <div className="pt-24">
      <WorkbenchPageContent />
    </div>
  );
}

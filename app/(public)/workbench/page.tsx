import { WorkbenchPageContent } from "@/components/public/workbench/workbench-page-content";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nb-portfolio.vercel.app';

export const metadata: Metadata = {
  title: "Workbench",
  description: "Active AI/ML projects and experiments. Currently building DevPilot AI - an AI-powered developer assistant SaaS.",
  keywords: ["AI projects", "Machine Learning", "DevPilot AI", "work in progress", "LLM", "SaaS"],
  openGraph: {
    title: "Workbench — NB Portfolio",
    description: "Active AI/ML projects and experiments. Currently building DevPilot AI.",
    url: `${baseUrl}/workbench`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image-workbench.png`,
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
    images: [`${baseUrl}/og-image-workbench.png`],
  },
  alternates: {
    canonical: `${baseUrl}/workbench`,
  },
};

export default function WorkbenchPage() {
  return (
    <div className="pt-24">
      <WorkbenchPageContent />
    </div>
  );
}

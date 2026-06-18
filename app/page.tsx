import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { Workbench } from "@/components/workbench"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { SITE_URL } from "@/lib/site"
import { generateWebsiteStructuredData, generatePersonStructuredData } from "@/lib/structured-data"

export default function Home() {
  const websiteStructuredData = generateWebsiteStructuredData(SITE_URL)
  const personStructuredData = generatePersonStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <main className="relative min-h-screen overflow-hidden scanlines">
        <CursorGlow />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <ProjectsGrid />
          <Workbench />
          <Footer />
        </div>
      </main>
    </>
  )
}

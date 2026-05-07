import { Mail, Linkedin, Github, MapPin, FileText } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                Get In Touch
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Contact{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  Nihar Bhatt
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-xl sm:text-2xl font-semibold text-primary">
                AI/ML Engineer
              </p>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Open to Work
              </span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Pune, India</span>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              I'm always interested in new opportunities and collaborations in AI/ML engineering.
              Feel free to reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="mailto:niharbhatt000@gmail.com"
              className="group flex items-center gap-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">niharbhatt000@gmail.com</p>
              </div>
            </Link>

            <Link
              href="/nihar-bhatt-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Resume</h3>
                <p className="text-sm text-muted-foreground">Download my CV</p>
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/nihar-bhatt-22762b256"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Connect professionally</p>
              </div>
            </Link>

            <Link
              href="https://github.com/nihar0123"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm text-muted-foreground">Check out my code and projects</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
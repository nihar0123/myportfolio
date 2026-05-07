import { Brain, Eye, Database, Code2, GraduationCap, Briefcase } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                About Me
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Nihar Bhatt{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  AI/ML Engineer
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Computer Engineering undergraduate with hands-on experience in Machine Learning and Computer Vision. 
              Built real-time object detection systems using YOLO and developed data-driven automation tools using Python. 
              Strong interest in AI, deep learning, and solving real-world problems using scalable ML solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                Background
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Education & Experience
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">MIT Academy of Engineering, Pune</h3>
                  <p className="text-sm text-muted-foreground">B.Tech. - Computer Engineering | 2022 - 2026 | CGPA: 6.70/10</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">SkillsCraft - Web Developer Intern</h3>
                  <p className="text-sm text-muted-foreground">July 2025 | Developed responsive web interfaces using HTML, CSS, and JavaScript</p>
                </div>
              </div>

              <p>
                Based in Pune, Maharashtra, I&apos;m passionate about building intelligent systems that solve 
                real-world problems. My focus areas include computer vision, deep learning, and developing 
                AI-powered applications that make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              Technical Skills
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Key Expertise
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description:
                  "Building and training ML models for real-world applications. Experience with supervised and unsupervised learning algorithms.",
              },
              {
                icon: Eye,
                title: "Computer Vision",
                description:
                  "Developing real-time object detection systems using YOLO. Image processing and video stream analysis with OpenCV.",
              },
              {
                icon: Database,
                title: "Data Processing",
                description:
                  "Data manipulation and analysis using Pandas and NumPy. Building data pipelines for ML model training.",
              },
              {
                icon: Code2,
                title: "Python Development",
                description:
                  "Primary programming language for ML/AI development. Building automation tools and data-driven applications.",
              },
              {
                icon: Brain,
                title: "Deep Learning",
                description:
                  "Neural network architectures for complex pattern recognition. Experience with model fine-tuning and optimization.",
              },
              {
                icon: Briefcase,
                title: "Web Development",
                description:
                  "Frontend development with HTML, CSS, and JavaScript. Building responsive interfaces and interactive applications.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Open to Opportunities
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m actively looking for opportunities in AI/ML Engineering, Computer Vision, and Deep Learning. 
            Let&apos;s connect and discuss how I can contribute to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:niharbhatt000@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              niharbhatt000@gmail.com
            </a>
            <a
              href="https://github.com/nihar0123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nihar-bhatt-22762b256"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

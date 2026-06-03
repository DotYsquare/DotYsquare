import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LeadForm } from "@/components/lead-form"
import {
  Code,
  Cloud,
  Shield,
  Users,
  Smartphone,
  Database,
  Settings,
  Zap,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Palette,
  GitBranch,
  Headphones,
  LineChart,
  Layers,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const mainServices = [
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and experience.",
    features: ["React & Next.js Applications", "E-commerce Platforms", "Progressive Web Apps", "API & Backend Development"],
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business results.",
    features: ["iOS & Android Apps", "React Native & Flutter", "App Store Optimization", "Push & Real-time Features"],
  },
  {
    id: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your IT operations.",
    features: ["AWS, Azure & GCP", "Cloud Architecture", "Migration & Modernization", "Cost Optimization"],
  },
  {
    id: "ai-data",
    icon: Cpu,
    title: "AI & Data Engineering",
    description: "Turn your data into a competitive advantage with analytics, pipelines and AI-powered automation.",
    features: ["Data Pipelines & Warehousing", "Business Intelligence", "Machine Learning Models", "LLM & GenAI Integration"],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security and compliance solutions to protect your business and your customers.",
    features: ["Security Audits & Pen Testing", "Compliance (ISO, SOC 2)", "Identity & Access Management", "Threat Monitoring"],
  },
  {
    id: "it-support",
    icon: Headphones,
    title: "IT Support & Managed Services",
    description: "Reliable 24/7 IT support and managed services to keep your business running smoothly.",
    features: ["24/7 Technical Support", "Network Management", "Data Backup & Recovery", "Endpoint Management"],
  },
]

const additionalServices = [
  { icon: Palette, title: "UI/UX Design", desc: "Human-centered design that delights users and converts." },
  { icon: GitBranch, title: "DevOps & Automation", desc: "CI/CD, IaC and automation for faster, safer releases." },
  { icon: Database, title: "Database Management", desc: "Optimize, scale and secure your data infrastructure." },
  { icon: Settings, title: "System Integration", desc: "Connect your tools and streamline workflows." },
  { icon: Zap, title: "Performance Optimization", desc: "Boost speed and efficiency of existing systems." },
  { icon: Users, title: "Technology Consulting", desc: "Strategic guidance for digital transformation." },
]

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "AWS", "Azure", "Docker",
  "Kubernetes", "PostgreSQL", "MongoDB", "React Native", "Flutter", "TensorFlow",
]

const process = [
  { step: "01", title: "Discovery", desc: "We analyze your needs and define clear project requirements." },
  { step: "02", title: "Planning", desc: "Create a detailed roadmap and technical specifications." },
  { step: "03", title: "Development", desc: "Build and test your solution with regular updates." },
  { step: "04", title: "Launch & Support", desc: "Deploy your project and provide ongoing maintenance." },
]

const engagementModels = [
  { icon: Layers, title: "Fixed Scope", desc: "Defined deliverables, timeline and budget — ideal for well-scoped projects." },
  { icon: Users, title: "Dedicated Team", desc: "A hand-picked team that works as an extension of yours, month to month." },
  { icon: LineChart, title: "Staff Augmentation", desc: "Scale your team with vetted specialists exactly when you need them." },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1322] via-[#0c1c33] to-[#0a1322] text-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-72 bg-brand/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20 lg:py-28">
          <Badge className="bg-brand/15 text-brand border border-brand/30 mb-6">Our Expertise</Badge>
          <h1 className="font-heading font-black text-4xl lg:text-6xl mb-6">
            What we do <span className="gradient-text">best</span>
            <span className="text-accent2">.</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation —
            from strategy to launch and beyond.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">Core Services</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Everything you need to build & scale</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A full-service technology partner across the entire product lifecycle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                id={service.id}
                className="group border-border hover:border-brand/40 transition-all duration-500 hover-lift scroll-mt-24"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center group-hover:bg-brand transition-colors duration-300">
                      <service.icon className="h-7 w-7 text-brand group-hover:text-brand-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <Button variant="ghost" className="px-0 text-brand hover:text-brand-dark hover:bg-transparent group/btn">
                      Discuss your project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">Specialized Services</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Specialized solutions for unique needs</h2>
            <p className="text-lg text-muted-foreground">Targeted expertise to complement your core initiatives.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group border-border hover:border-brand/40 transition-all duration-300 hover-lift">
                <CardContent className="p-7">
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                    <service.icon className="h-6 w-6 text-brand group-hover:text-brand-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">Our Toolkit</Badge>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Technologies we master</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            We choose the right tools for the job, drawing on a deep, modern technology stack.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground/80 hover:border-brand hover:text-brand transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">How We Work</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Our process</h2>
            <p className="text-lg text-muted-foreground">A transparent process that delivers results, every time.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="relative text-center">
                <div className="w-16 h-16 bg-brand text-brand-foreground rounded-2xl flex items-center justify-center mx-auto mb-5 font-heading font-bold text-lg brand-glow">
                  {phase.step}
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.desc}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-5 -right-4 h-5 w-5 text-brand/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">Flexible Engagement</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Ways to work with us</h2>
            <p className="text-lg text-muted-foreground">Choose the engagement model that fits your goals and budget.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <Card key={index} className="group border-border hover:border-brand/40 transition-all duration-300 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-brand transition-colors">
                    <model.icon className="h-7 w-7 text-brand group-hover:text-brand-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{model.title}</h3>
                  <p className="text-muted-foreground text-sm">{model.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-gradient-to-br from-[#0a1322] to-[#0c1c33] text-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-brand/15 text-brand border border-brand/30 mb-4">Free Quote</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Get a free project quote</h2>
            <p className="text-lg text-slate-300">
              Tell us about your project and we'll send a detailed proposal within 24 hours.
            </p>
          </div>
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <LeadForm variant="quote" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Why choose DotYsquare?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "8+", label: "Years of Experience", desc: "A proven track record delivering successful technology solutions." },
              { num: "250+", label: "Projects Completed", desc: "Successfully delivered across a wide range of industries." },
              { num: "24/7", label: "Support Available", desc: "Round-the-clock support to keep your systems running smoothly." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-heading font-black text-5xl gradient-text mb-2">{item.num}</div>
                <div className="font-semibold text-lg mb-2">{item.label}</div>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

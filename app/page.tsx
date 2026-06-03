import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Cloud,
  Shield,
  Users,
  Star,
  Smartphone,
  Database,
  Cpu,
  CheckCircle2,
  Activity,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  { icon: Code, title: "Web Development", desc: "Custom web apps built with React, Next.js & modern stacks." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native & cross-platform apps that users love." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure, migration & DevOps." },
  { icon: Cpu, title: "AI & Data", desc: "Data engineering, analytics and AI-powered automation." },
  { icon: Shield, title: "Cybersecurity", desc: "Security audits, compliance & threat protection." },
  { icon: Users, title: "IT Consulting", desc: "Strategic technology guidance for business growth." },
]

const stats = [
  { number: "8+", label: "Years in Business" },
  { number: "120+", label: "Happy Clients" },
  { number: "250+", label: "Projects Delivered" },
  { number: "24/7", label: "Support Available" },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "DotYsquare transformed our entire infrastructure. Their expertise in cloud solutions is unmatched.",
  },
  {
    name: "Michael Chen",
    role: "Founder, StartupXYZ",
    content: "The team delivered our web application ahead of schedule and exceeded all expectations.",
  },
  {
    name: "Emily Davis",
    role: "IT Director, Enterprise Inc",
    content: "Outstanding support and innovative solutions. They truly understand our business needs.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1322] via-[#0c1c33] to-[#0a1322] text-white">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-10 -left-20 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-24 right-0 w-[28rem] h-[28rem] bg-brand/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="bg-brand/15 text-brand border border-brand/30 mb-6 hover:bg-brand/20">
                ● Innovation-driven IT consultancy
              </Badge>
              <h1 className="font-heading font-black text-4xl lg:text-6xl leading-[1.1] mb-6">
                Innovative solutions for a{" "}
                <span className="gradient-text">digital future</span>
                <span className="text-accent2">.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                Your partner in software, cloud, and IT solutions. At DotYsquare, we harness the power of technology to
                deliver tailored solutions that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-brand text-brand-foreground hover:bg-brand-dark font-semibold group brand-glow w-full sm:w-auto"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> ISO 27001 Certified
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> AWS Partner
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> 24/7 Support
                </span>
              </div>
            </div>

            {/* Hero graphic — glass dashboard mockup */}
            <div className="relative animate-slide-in-right hidden lg:block">
              <div className="float-animation relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 brand-glow-strong">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent2" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-brand" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">dotysquare.app</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { icon: Activity, label: "Uptime", value: "99.9%" },
                    { icon: TrendingUp, label: "Growth", value: "+48%" },
                    { icon: Users, label: "Users", value: "12.4k" },
                  ].map((m, i) => (
                    <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-3">
                      <m.icon className="h-4 w-4 text-brand mb-2" />
                      <div className="text-lg font-bold text-white">{m.value}</div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-brand/40 to-brand"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 w-16 h-16 bg-brand rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: "0.5s" }}>
                <Code className="h-8 w-8 text-brand-foreground" />
              </div>
              <div className="absolute -bottom-5 -left-5 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: "1.2s" }}>
                <Cloud className="h-7 w-7 text-brand" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted by ambitious teams and enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-70">
            {["TechCorp", "StartupXYZ", "Enterprise Inc", "CloudNine", "DataFlow", "NovaLabs"].map((brand) => (
              <span key={brand} className="font-heading font-bold text-lg text-muted-foreground">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">Why DotYsquare</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Built to move your business forward</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how we elevate your business with cutting-edge technology solutions designed for modern
              enterprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Reliable & Secure", desc: "Enterprise-grade security and reliability you can trust for critical business operations." },
              { icon: Code, title: "Expert Development", desc: "Our skilled engineers build custom solutions tailored to your exact business needs." },
              { icon: Users, title: "24/7 Support", desc: "Round-the-clock support to ensure your systems run smoothly and efficiently." },
            ].map((item, i) => (
              <Card key={i} className="group border-border hover:border-brand/40 transition-all duration-500 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-8 w-8 text-brand group-hover:text-brand-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">Our Services</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">End-to-end technology services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From idea to launch and beyond — software, cloud, data, security and IT support for modern enterprises.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group border-border hover:border-brand/40 transition-all duration-500 hover-lift">
                <CardContent className="p-7">
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-brand group-hover:text-brand-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand-dark font-semibold group">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1322] to-[#0c1c33] text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-heading font-black text-4xl lg:text-5xl gradient-text mb-2">{stat.number}</div>
                <div className="text-slate-300 text-base lg:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">Recent Work</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Outcomes we're proud of</h2>
            <p className="text-lg text-muted-foreground">See how we've helped businesses transform with technology.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Platform", category: "Web Development", icon: Code },
              { title: "Cloud Migration", category: "Cloud Solutions", icon: Cloud },
              { title: "Mobile Banking App", category: "App Development", icon: Smartphone },
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden border-border hover:border-brand/40 transition-all duration-500 hover-lift">
                <div className="aspect-video relative bg-gradient-to-br from-brand/15 via-brand/5 to-transparent flex items-center justify-center overflow-hidden">
                  <project.icon className="h-16 w-16 text-brand/40 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-brand/10 text-brand border-brand/20 mb-3">{project.category}</Badge>
                  <h3 className="font-heading font-bold text-lg group-hover:text-brand transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand" />
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-brand text-brand hover:bg-brand hover:text-brand-foreground font-semibold">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">Testimonials</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:border-brand/40 transition-all duration-500 hover-lift">
                <CardContent className="p-7">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-brand">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-darker text-brand-foreground px-8 py-14 lg:px-16 lg:py-20 text-center">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-16 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Ready to transform your business?</h2>
              <p className="text-lg lg:text-xl mb-8 text-brand-foreground/80 max-w-2xl mx-auto">
                Let's discuss how DotYsquare can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 font-semibold w-full sm:w-auto">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-brand-foreground/30 text-brand-foreground hover:bg-brand-foreground/10 bg-transparent w-full sm:w-auto"
                  >
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Users } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const portfolioItems = [
  {
    id: 1,
    title: "TechCorp E-commerce Platform",
    category: "Web Development",
    industry: "E-commerce",
    technology: "React",
    image: "modern ecommerce platform dashboard with analytics",
    description: "Complete e-commerce solution with advanced analytics and inventory management",
    year: "2024",
    client: "TechCorp Inc.",
    results: ["300% increase in online sales", "50% reduction in cart abandonment", "99.9% uptime achieved"],
  },
  {
    id: 2,
    title: "HealthCare Mobile App",
    category: "Mobile Development",
    industry: "Healthcare",
    technology: "React Native",
    image: "healthcare mobile app interface patient dashboard",
    description: "Patient management app with telemedicine capabilities and secure messaging",
    year: "2024",
    client: "MedCenter Solutions",
    results: ["10,000+ active users", "95% patient satisfaction", "40% reduction in no-shows"],
  },
  {
    id: 3,
    title: "FinanceFlow Cloud Migration",
    category: "Cloud Solutions",
    industry: "Finance",
    technology: "AWS",
    image: "cloud infrastructure diagram financial services",
    description: "Complete cloud migration with enhanced security and compliance features",
    year: "2023",
    client: "FinanceFlow Ltd.",
    results: ["60% cost reduction", "99.99% availability", "SOC 2 compliance achieved"],
  },
  {
    id: 4,
    title: "EduTech Learning Platform",
    category: "Web Development",
    industry: "Education",
    technology: "Next.js",
    image: "online learning platform student dashboard",
    description: "Interactive learning platform with video streaming and progress tracking",
    year: "2023",
    client: "EduTech Academy",
    results: ["50,000+ students enrolled", "85% course completion rate", "4.8/5 user rating"],
  },
  {
    id: 5,
    title: "RetailMax Inventory System",
    category: "Web Development",
    industry: "Retail",
    technology: "Vue.js",
    image: "retail inventory management system dashboard",
    description: "Real-time inventory management with predictive analytics and automated ordering",
    year: "2023",
    client: "RetailMax Chain",
    results: ["25% inventory cost reduction", "Real-time tracking", "Automated reordering"],
  },
  {
    id: 6,
    title: "SecureBank IT Infrastructure",
    category: "IT Support",
    industry: "Banking",
    technology: "Security",
    image: "banking security monitoring dashboard",
    description: "Complete IT security overhaul with 24/7 monitoring and threat detection",
    year: "2022",
    client: "SecureBank Corp",
    results: ["Zero security incidents", "24/7 monitoring", "Compliance certification"],
  },
]

const categories = ["All", "Web Development", "Mobile Development", "Cloud Solutions", "IT Support"]
const industries = ["All", "E-commerce", "Healthcare", "Finance", "Education", "Retail", "Banking"]
const technologies = ["All", "React", "React Native", "Next.js", "Vue.js", "AWS", "Security"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [selectedTechnology, setSelectedTechnology] = useState("All")

  const filteredItems = portfolioItems.filter((item) => {
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      (selectedIndustry === "All" || item.industry === selectedIndustry) &&
      (selectedTechnology === "All" || item.technology === selectedTechnology)
    )
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0a1322] via-[#0c1c33] to-[#0a1322] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-brand/15 text-brand border border-brand/30 mb-6">Our Work</Badge>
          <h1 className="font-heading font-black text-4xl lg:text-6xl mb-6">
            Portfolio & <span className="text-brand">Case Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve their technology goals with innovative
            solutions and measurable results.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground/80 mb-2">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-brand hover:bg-brand-dark text-brand-foreground"
                        : "border-border text-foreground/80 hover:border-brand hover:text-brand"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground/80 mb-2">Industry</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedIndustry(industry)}
                    className={
                      selectedIndustry === industry
                        ? "bg-brand hover:bg-brand-dark text-brand-foreground"
                        : "border-border text-foreground/80 hover:border-brand hover:text-brand"
                    }
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground/80 mb-2">Technology</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <Button
                    key={technology}
                    variant={selectedTechnology === technology ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTechnology(technology)}
                    className={
                      selectedTechnology === technology
                        ? "bg-brand hover:bg-brand-dark text-brand-foreground"
                        : "border-border text-foreground/80 hover:border-brand hover:text-brand"
                    }
                  >
                    {technology}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredItems.length} of {portfolioItems.length} projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-border hover:border-brand/40 transition-all hover-lift">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=500&query=${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-brand/10 text-brand border-brand/20">{item.category}</Badge>
                    <Badge variant="outline" className="border-border text-muted-foreground">
                      {item.industry}
                    </Badge>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {item.client}
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {item.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">
                        • {result}
                      </div>
                    ))}
                  </div>
                  <Link href={`/portfolio/${item.id}`}>
                    <Button className="w-full bg-brand hover:bg-brand-dark text-brand-foreground group">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand to-brand-darker text-brand-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-brand-foreground/80">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              Get Free Consultation
            </Button>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-brand-foreground/30 text-brand-foreground hover:bg-brand-foreground/10 bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

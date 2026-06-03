import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Users, Award, Calendar, Heart, Lightbulb } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0a1322] via-[#0c1c33] to-[#0a1322] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-brand/15 text-brand border border-brand/30 mb-6">Our Story</Badge>
          <h1 className="font-heading font-black text-4xl lg:text-6xl mb-6">
            About <span className="text-brand">DOTYSQUARE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to bridge the gap between innovative technology and business success, DOTYSQUARE has
            been at the forefront of digital transformation for over 5 years.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                DOTYSQUARE was born from a simple yet powerful idea: technology should empower businesses, not
                complicate them. Our founders, seasoned technology professionals, recognized the growing gap between
                rapidly evolving tech solutions and the practical needs of businesses.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                What started as a small consulting firm has grown into a comprehensive technology partner, serving
                clients across various industries with innovative software solutions, cloud services, and IT support
                that drives real business results.
              </p>
              <Button className="bg-brand hover:bg-brand-dark text-brand-foreground group">
                Learn About Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="DOTYSQUARE team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core principles guide everything we do, from client relationships to technical excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-border hover:border-brand/40 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-brand" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">Innovation First</h3>
                <p className="text-muted-foreground">
                  We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a
                  competitive advantage.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-brand/40 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-brand" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">Client Success</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We build long-term partnerships based on trust, transparency, and
                  results.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border hover:border-brand/40 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-brand" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in code quality, security, and performance in every project we
                  deliver.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-b from-[#0a1322] via-[#0c1c33] to-[#0a1322] text-white rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-6">Our Mission</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "To empower businesses with innovative technology solutions that drive growth, efficiency, and success in
              an increasingly digital world. We believe that the right technology, implemented thoughtfully, can
              transform any business."
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The talented professionals behind DOTYSQUARE's success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Rodriguez", role: "CEO & Founder", image: "professional headshot CEO technology leader" },
              { name: "Sarah Kim", role: "CTO", image: "professional headshot female CTO technology" },
              {
                name: "Michael Chen",
                role: "Lead Developer",
                image: "professional headshot male developer programmer",
              },
              { name: "Emily Johnson", role: "Project Manager", image: "professional headshot female project manager" },
            ].map((member, index) => (
              <Card key={index} className="border-border hover:border-brand/40 shadow-lg text-center group hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=150&width=150&query=${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{member.name}</h3>
                  <p className="text-brand font-semibold mb-2">{member.role}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-brand text-brand hover:bg-brand hover:text-brand-foreground bg-transparent"
                  >
                    LinkedIn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Our Growth Journey</h2>
            <p className="text-xl text-muted-foreground">Key milestones in DOTYSQUARE's evolution</p>
          </div>
          <div className="space-y-8">
            {[
              {
                year: "2019",
                title: "Company Founded",
                desc: "Started as a small consulting firm with 3 team members",
              },
              {
                year: "2020",
                title: "First Major Client",
                desc: "Secured our first enterprise client and expanded services",
              },
              { year: "2021", title: "Cloud Specialization", desc: "Became certified cloud solution providers" },
              { year: "2022", title: "Team Expansion", desc: "Grew to 15+ professionals across multiple disciplines" },
              { year: "2023", title: "100+ Projects", desc: "Completed over 100 successful projects" },
              { year: "2024", title: "Innovation Lab", desc: "Launched R&D division for emerging technologies" },
            ].map((milestone, index) => (
              <div key={index} className="flex items-center gap-8">
                <div className="flex-shrink-0 w-24 h-24 bg-brand rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-brand-foreground" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <Badge className="bg-black text-white">{milestone.year}</Badge>
                    <h3 className="font-heading font-bold text-xl">{milestone.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Philosophy */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="DOTYSQUARE company culture"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">Our Culture</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At DOTYSQUARE, we believe that great technology comes from great people. Our culture is built on
                collaboration, continuous learning, and the shared goal of making technology accessible and impactful.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-brand" />
                  <span className="text-foreground/80">Continuous innovation and learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-brand" />
                  <span className="text-foreground/80">Collaborative and inclusive environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-brand" />
                  <span className="text-foreground/80">Recognition for excellence and creativity</span>
                </div>
              </div>
              <Button className="bg-brand hover:bg-brand-dark text-brand-foreground">Join Our Team</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand to-brand-darker text-brand-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-brand-foreground/80">
            Let's discuss how DOTYSQUARE can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
              Start Your Project
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

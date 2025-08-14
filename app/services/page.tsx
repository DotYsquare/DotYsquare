import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Cloud, Shield, Users, Smartphone, Database, Settings, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-red-600 text-white mb-6">Our Expertise</Badge>
          <h1 className="font-heading font-black text-4xl lg:text-6xl mb-6">
            What We Do <span className="text-red-600">Best</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {[
              {
                icon: Code,
                title: "Web Development",
                description:
                  "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
                features: [
                  "React & Next.js Applications",
                  "E-commerce Platforms",
                  "Progressive Web Apps",
                  "API Development",
                ],
                image: "modern web development coding workspace",
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                description:
                  "Native and cross-platform mobile applications that engage users and drive business results.",
                features: ["iOS & Android Apps", "React Native Development", "UI/UX Design", "App Store Optimization"],
                image: "mobile app development design mockups",
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services to modernize your IT operations.",
                features: ["AWS & Azure Migration", "Cloud Architecture", "DevOps Implementation", "Cost Optimization"],
                image: "cloud infrastructure servers data center",
              },
              {
                icon: Shield,
                title: "IT Support & Security",
                description:
                  "Comprehensive IT support and cybersecurity solutions to keep your business running smoothly.",
                features: ["24/7 Technical Support", "Security Audits", "Data Backup Solutions", "Network Management"],
                image: "IT security monitoring dashboard",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={`/placeholder.svg?height=300&width=500&query=${service.image}`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-red-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized solutions to meet your unique business needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, title: "Database Management", desc: "Optimize and secure your data infrastructure" },
              { icon: Settings, title: "System Integration", desc: "Connect your tools and streamline workflows" },
              { icon: Zap, title: "Performance Optimization", desc: "Boost speed and efficiency of existing systems" },
              { icon: Users, title: "Technology Consulting", desc: "Strategic guidance for digital transformation" },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results for every project</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your needs and define project requirements" },
              { step: "02", title: "Planning", desc: "Create detailed roadmap and technical specifications" },
              { step: "03", title: "Development", desc: "Build and test your solution with regular updates" },
              { step: "04", title: "Launch & Support", desc: "Deploy your project and provide ongoing maintenance" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-lg">
                  {phase.step}
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Get a Free Quote</h2>
            <p className="text-xl text-gray-300">
              Tell us about your project and we'll provide a detailed proposal within 24 hours.
            </p>
          </div>
          <Card className="border-0 bg-white">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <Input placeholder="Your full name" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                    <Input placeholder="Your company name" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <Input placeholder="Your phone number" className="border-gray-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                    <option>Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Cloud Solutions</option>
                    <option>IT Support & Security</option>
                    <option>Technology Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                  <Textarea
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                    className="border-gray-300 min-h-[120px]"
                  />
                </div>
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Get Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">Why Choose DOTYSQUARE?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-heading font-black text-4xl text-red-600 mb-2">5+</div>
              <div className="text-gray-600 mb-4">Years of Experience</div>
              <p className="text-sm text-gray-500">Proven track record in delivering successful technology solutions</p>
            </div>
            <div className="text-center">
              <div className="font-heading font-black text-4xl text-red-600 mb-2">100+</div>
              <div className="text-gray-600 mb-4">Projects Completed</div>
              <p className="text-sm text-gray-500">Successfully delivered projects across various industries</p>
            </div>
            <div className="text-center">
              <div className="font-heading font-black text-4xl text-red-600 mb-2">24/7</div>
              <div className="text-gray-600 mb-4">Support Available</div>
              <p className="text-sm text-gray-500">Round-the-clock support to keep your systems running smoothly</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Cloud, Shield, Users, Star } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="bg-red-600 text-white mb-6 animate-scale-in animate-delay-200">Innovation Driven</Badge>
              <h1 className="font-heading font-black text-4xl lg:text-6xl leading-tight mb-6 animate-fade-in-up animate-delay-300">
                Innovative Solutions for a <span className="gradient-text">Digital Future</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up animate-delay-400">
                Your partner in software, cloud, and IT solutions. At DOTYSQUARE, we harness the power of technology to
                deliver tailored solutions that drive success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-500">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white group pulse-on-hover hover-lift">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent hover-lift"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="float-animation">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Technology workspace"
                  className="rounded-lg shadow-2xl cursor-magnetic"
                />
              </div>
              <div
                className="absolute -top-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <Code className="h-8 w-8 text-white" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDelay: "2s" }}
              >
                <Cloud className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4 animate-fade-in-up">
              Why Choose DotYsquare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Discover how we can elevate your business with cutting-edge technology solutions designed for modern
              enterprises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift stagger-animation stagger-1 cursor-magnetic">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">Reliable & Secure</h3>
                <p className="text-gray-600">
                  Enterprise-grade security and reliability you can trust for your critical business operations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift stagger-animation stagger-2 cursor-magnetic">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">Expert Development</h3>
                <p className="text-gray-600">
                  Our skilled developers create custom solutions tailored to your specific business needs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift stagger-animation stagger-3 cursor-magnetic">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock support to ensure your systems run smoothly and efficiently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4 animate-fade-in-up">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Explore our cutting-edge software, cloud solutions, and IT support designed for modern enterprises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Web Development", desc: "Custom web applications built with modern technologies" },
              { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure and migration services" },
              { icon: Shield, title: "IT Support", desc: "Comprehensive IT support and maintenance services" },
              { icon: Users, title: "Consulting", desc: "Strategic technology consulting for business growth" },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover-lift cursor-magnetic stagger-animation stagger-${index + 1}`}
              >
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-red-600 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 mx-auto" />
                  <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc2626' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5+", label: "Years in Business" },
              { number: "100+", label: "Happy Clients" },
              { number: "200+", label: "Projects Completed" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className={`animate-count-up animate-delay-${(index + 1) * 100}`}>
                <div className="font-heading font-black text-4xl lg:text-5xl gradient-text mb-2 hover:scale-110 transition-transform duration-300 cursor-default">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4 animate-fade-in-up">
              Recent Work
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up animate-delay-200">
              See how we've helped businesses transform with technology
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                category: "Web Development",
                image: "modern ecommerce dashboard with analytics",
              },
              {
                title: "Cloud Migration",
                category: "Cloud Solutions",
                image: "cloud infrastructure diagram with servers",
              },
              { title: "Mobile App", category: "App Development", image: "mobile app interface design mockup" },
            ].map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift cursor-magnetic stagger-animation stagger-${index + 1}`}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={`/placeholder.svg?height=300&width=400&query=${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 h-8 w-8" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-red-100 text-red-600 mb-2 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    {project.category}
                  </Badge>
                  <h3 className="font-heading font-bold text-lg group-hover:text-red-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4 animate-fade-in-up">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
                content:
                  "DOTYSQUARE transformed our entire infrastructure. Their expertise in cloud solutions is unmatched.",
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
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift cursor-magnetic stagger-animation stagger-${index + 1}`}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-red-600 text-red-600 hover:scale-125 transition-transform duration-200"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-sm text-red-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-700 to-red-500"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full opacity-5 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4 animate-fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-red-100 animate-fade-in-up animate-delay-200">
            Let's discuss how DOTYSQUARE can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 hover-lift pulse-on-hover">
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent hover-lift"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

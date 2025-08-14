import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Twitter, Linkedin, Github, Instagram } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@dotysquare.com", "support@dotysquare.com"],
    description: "Send us an email and we'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    description: "Speak directly with our team during business hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Tech Street", "San Francisco, CA 94105"],
    description: "Schedule a meeting at our headquarters",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM PST", "Sat: 10:00 AM - 2:00 PM PST"],
    description: "We're here when you need us most",
  },
]

const socialLinks = [
  { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" },
  { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-600" },
  { icon: Github, name: "GitHub", url: "#", color: "hover:text-gray-800" },
  { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-600" },
]

const officeLocations = [
  {
    city: "San Francisco",
    address: "123 Tech Street, San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@dotysquare.com",
    image: "modern office building San Francisco tech district",
  },
  {
    city: "New York",
    address: "456 Innovation Ave, New York, NY 10001",
    phone: "+1 (555) 987-6543",
    email: "ny@dotysquare.com",
    image: "modern office building New York tech hub",
  },
  {
    city: "Austin",
    address: "789 Startup Blvd, Austin, TX 78701",
    phone: "+1 (555) 456-7890",
    email: "austin@dotysquare.com",
    image: "modern office building Austin tech center",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-red-600 text-white mb-6">Get In Touch</Badge>
          <h1 className="font-heading font-black text-4xl lg:text-6xl mb-6">
            Let's Start a <span className="text-red-600">Conversation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology solutions? We'd love to hear about your project
            and discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-black mb-6">Send Us a Message</h2>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                        <Input placeholder="John" className="border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                        <Input placeholder="Doe" className="border-gray-300" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <Input type="email" placeholder="john@company.com" className="border-gray-300" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <Input placeholder="+1 (555) 123-4567" className="border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                        <Input placeholder="Your Company" className="border-gray-300" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
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
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Project Budget</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                        <option>Select budget range</option>
                        <option>Under $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000 - $100,000</option>
                        <option>$100,000+</option>
                        <option>Let's discuss</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <Textarea
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        className="border-gray-300 min-h-[120px]"
                      />
                    </div>
                    <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-black mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg mb-2">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-800 font-medium">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-heading font-bold text-xl mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-colors ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg bg-red-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-6 w-6" />
                    <h3 className="font-heading font-bold text-lg">Need Immediate Help?</h3>
                  </div>
                  <p className="mb-4 text-red-100">
                    For urgent matters or immediate assistance, call us directly or send an email.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-white text-red-600 hover:bg-gray-100">Call Now</Button>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                    >
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Visit us at any of our offices or schedule a virtual meeting</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=250&width=400&query=${office.image}`}
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-4">{office.city}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{office.email}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">Get Directions</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-3xl text-black mb-4">Find Us</h2>
            <p className="text-gray-600">Our headquarters in San Francisco</p>
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=500&width=1200"
              alt="Office location map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-red-100">
            Let's discuss your project and explore how DOTYSQUARE can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Schedule a Call
            </Button>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
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

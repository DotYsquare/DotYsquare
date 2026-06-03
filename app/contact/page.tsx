import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/lead-form"
import { MapPin, Phone, Mail, Clock, MessageSquare, Twitter, Linkedin, Github, Instagram } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["dotysquare@gmail.com"],
    description: "Send us an email and we'll respond within 24 hours.",
    href: "mailto:dotysquare@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 83020 30832", "+91 97856 47182"],
    description: "Speak directly with our team during business hours.",
    href: "tel:+918302030832",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Damodar Building, JNU", "New Delhi, India"],
    description: "Schedule a meeting at our office.",
    href: "#map",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon – Fri: 9:00 AM – 6:00 PM IST", "Sat: 10:00 AM – 2:00 PM IST"],
    description: "We're here when you need us most.",
    href: "#",
  },
]

const socialLinks = [
  { icon: Twitter, name: "Twitter", url: "#" },
  { icon: Linkedin, name: "LinkedIn", url: "#" },
  { icon: Github, name: "GitHub", url: "#" },
  { icon: Instagram, name: "Instagram", url: "#" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1322] via-[#0c1c33] to-[#0a1322] text-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-72 bg-brand/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20 lg:py-28">
          <Badge className="bg-brand/15 text-brand border border-brand/30 mb-6">Get In Touch</Badge>
          <h1 className="font-heading font-black text-4xl lg:text-6xl mb-6">
            Let's start a <span className="gradient-text">conversation</span>
            <span className="text-accent2">.</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology? We'd love to hear about your project and
            discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-6">Fields marked with * are required.</p>
              <Card className="border-border shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <LeadForm variant="contact" />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-heading font-bold text-3xl mb-6">Get in touch</h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border hover:border-brand/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                        <info.icon className="h-6 w-6 text-brand" />
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2">{info.title}</h3>
                      <div className="space-y-0.5 mb-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-foreground/80 font-medium text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-heading font-bold text-xl mb-4">Follow us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.name}
                      className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:bg-brand hover:text-brand-foreground transition-colors"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="border-0 bg-gradient-to-br from-brand to-brand-darker text-brand-foreground overflow-hidden relative">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/15 rounded-full blur-2xl" />
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="h-6 w-6" />
                    <h3 className="font-heading font-bold text-lg">Need immediate help?</h3>
                  </div>
                  <p className="mb-4 text-brand-foreground/80 text-sm">
                    For urgent matters, call us directly or send an email — we respond fast.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+918302030832">
                      <Button className="bg-slate-900 text-white hover:bg-slate-800 w-full">Call Now</Button>
                    </a>
                    <a href="mailto:dotysquare@gmail.com">
                      <Button
                        variant="outline"
                        className="border-brand-foreground/30 text-brand-foreground hover:bg-brand-foreground/10 bg-transparent w-full"
                      >
                        Send Email
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section id="map" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="bg-brand/10 text-brand border-brand/20 mb-4">Our Office</Badge>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Find us in New Delhi</h2>
            <p className="text-muted-foreground">Damodar Building, JNU, New Delhi, India</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              title="DotYsquare office location"
              src="https://www.google.com/maps?q=Jawaharlal+Nehru+University+New+Delhi&output=embed"
              className="w-full h-[420px] grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

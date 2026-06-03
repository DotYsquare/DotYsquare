import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Mobile Apps", href: "/services#mobile-app-development" },
    { label: "Cloud Solutions", href: "/services#cloud-solutions" },
    { label: "Cybersecurity", href: "/services#cybersecurity" },
    { label: "IT Support", href: "/services#it-support" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Tech Insights", href: "/blog?category=Tech%20Insights" },
    { label: "Tutorials", href: "/blog?category=Tutorials" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Security", href: "/security" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

const contactInfo = [
  { icon: Mail, text: "dotysquare@gmail.com", href: "mailto:dotysquare@gmail.com" },
  { icon: Phone, text: "+91 83020 30832 · +91 97856 47182", href: "tel:+918302030832" },
  { icon: MapPin, text: "Damodar Building, JNU, New Delhi, India", href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a1322] text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="border-0 bg-gradient-to-br from-brand to-brand-darker text-brand-foreground overflow-hidden relative">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/15 blur-2xl" />
            <CardContent className="p-8 lg:p-12 relative">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4">Stay ahead with DotYsquare</h3>
                  <p className="text-brand-foreground/80 text-lg">
                    Get the latest tech insights, company updates, and exclusive content delivered to your inbox.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 bg-white text-slate-900 border-0 placeholder:text-slate-500 h-11"
                    />
                    <Button className="bg-slate-900 text-white hover:bg-slate-800 h-11 group">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <p className="text-brand-foreground/70 text-sm mt-2">Join 500+ subscribers. No spam, unsubscribe anytime.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center rounded-xl bg-white p-1">
                <Image src="/DotYsquare_logo.png" alt="DotYsquare" width={32} height={32} />
              </span>
              <span className="font-heading font-black text-2xl text-white">DotYsquare</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              A technology consultancy empowering businesses with innovative digital solutions. We transform ideas into
              reality through expert development, cloud services, and strategic consulting.
            </p>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors">
                  <item.icon className="h-4 w-4 text-brand flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Certifications */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4 text-white">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-400 hover:text-brand-foreground hover:bg-brand transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h4 className="font-heading font-bold text-lg mb-4 text-white">Certifications</h4>
              <div className="flex gap-6 items-center">
                <div className="text-xs text-slate-400">
                  <div className="font-semibold text-slate-200">AWS Advanced</div>
                  <div>Consulting Partner</div>
                </div>
                <div className="text-xs text-slate-400">
                  <div className="font-semibold text-slate-200">ISO 27001</div>
                  <div>Certified</div>
                </div>
                <div className="text-xs text-slate-400">
                  <div className="font-semibold text-slate-200">SOC 2</div>
                  <div>Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} DotYsquare. All rights reserved.</span>
          <span>Crafted with precision in New Delhi, India.</span>
        </div>
      </div>
    </footer>
  )
}

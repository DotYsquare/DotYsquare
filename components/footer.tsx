import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowRight } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "Cloud Solutions", href: "/services#cloud" },
    { label: "IT Support", href: "/services#support" },
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
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-800" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
]

const contactInfo = [
  { icon: Mail, text: "dotysquare@gmail.com" },
  { icon: Phone, text: "+91 8302030832 , +91 9785647182" },
  { icon: MapPin, text: "Damodar Building JNU, New Delhi" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="border-0 bg-red-600 text-white">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4">Stay Updated with DotYsquare</h3>
                  <p className="text-red-100 text-lg">
                    Get the latest tech insights, company updates, and exclusive content delivered to your inbox.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      placeholder="Enter your email address"
                      className="flex-1 bg-white text-black border-white placeholder:text-gray-500"
                    />
                    <Button className="bg-black text-white hover:bg-gray-800 group">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <p className="text-red-200 text-sm mt-2">Join 500+ subscribers. No spam, unsubscribe anytime.</p>
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
            <Link href="/" className="inline-block mb-6">
              <div className="font-heading font-black text-3xl text-white">DotYsquare</div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with innovative technology solutions. We transform ideas into digital reality
              through expert development, cloud services, and strategic consulting.
            </p>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <item.icon className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-red-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Awards */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h4 className="font-heading font-bold text-lg mb-4">Certifications</h4>
              <div className="flex gap-4 items-center">
                <div className="text-xs text-gray-400">
                  <div className="font-semibold">AWS Advanced</div>
                  <div>Consulting Partner</div>
                </div>
                <div className="text-xs text-gray-400">
                  <div className="font-semibold">ISO 27001</div>
                  <div>Certified</div>
                </div>
                <div className="text-xs text-gray-400">
                  <div className="font-semibold">SOC 2</div>
                  <div>Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
            <div className="items-center text-center gap-4 text-sm text-gray-400">© {new Date().getFullYear()} DotYsquare. All rights reserved.</div>
          </div>
    </footer>
  )
}

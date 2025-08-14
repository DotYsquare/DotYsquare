import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Clock, Users, Heart, Lightbulb, Award, Coffee, Laptop, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const openPositions = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Join our frontend team to build cutting-edge web applications using React, TypeScript, and modern development practices.",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "Modern CSS frameworks",
      "Testing experience",
    ],
    benefits: ["Competitive salary", "Health insurance", "Remote work", "Learning budget"],
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "San Francisco / Remote",
    type: "Full-time",
    experience: "7+ years",
    description:
      "Design and implement scalable cloud architectures for enterprise clients using AWS, Azure, and modern DevOps practices.",
    requirements: [
      "AWS/Azure certifications",
      "Kubernetes experience",
      "Infrastructure as Code",
      "Enterprise architecture",
    ],
    benefits: ["Senior-level compensation", "Stock options", "Conference budget", "Flexible hours"],
  },
  {
    id: 3,
    title: "Mobile App Developer",
    department: "Mobile",
    location: "Austin / Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Develop cross-platform mobile applications using React Native and native technologies for iOS and Android.",
    requirements: ["React Native expertise", "iOS/Android development", "App Store deployment", "Mobile UI/UX"],
    benefits: ["Competitive package", "Health & dental", "Work from anywhere", "Tech allowance"],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability and security.",
    requirements: ["Docker/Kubernetes", "CI/CD pipelines", "Cloud platforms", "Monitoring tools"],
    benefits: ["Remote-first", "Equipment provided", "Professional development", "Flexible PTO"],
  },
]

const internshipPositions = [
  {
    title: "Software Development Intern",
    duration: "3-6 months",
    location: "Remote / On-site",
    description: "Work alongside senior developers on real projects using modern web technologies.",
  },
  {
    title: "Cloud Engineering Intern",
    duration: "3-6 months",
    location: "Remote / On-site",
    description: "Learn cloud technologies and DevOps practices while contributing to client projects.",
  },
  {
    title: "UI/UX Design Intern",
    duration: "3-6 months",
    location: "Remote / On-site",
    description: "Design user interfaces and experiences for web and mobile applications.",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family.",
  },
  {
    icon: Laptop,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and modern equipment provided.",
  },
  {
    icon: Lightbulb,
    title: "Learning & Growth",
    description: "Annual learning budget, conference attendance, and mentorship programs.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Unlimited PTO, flexible schedules, and team building activities.",
  },
  {
    icon: Award,
    title: "Competitive Compensation",
    description: "Market-rate salaries, performance bonuses, and equity opportunities.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with talented professionals in a supportive, inclusive culture.",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-red-600 text-white mb-6">Join Our Team</Badge>
          <h1 className="font-heading font-black text-4xl lg:text-6xl mb-6">
            Build the <span className="text-red-600">Future</span> with Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join a team of passionate technologists who are shaping the future of digital innovation. We're always
            looking for talented individuals to help us deliver exceptional solutions.
          </p>
        </div>
      </section>

      {/* Why Work at DOTYSQUARE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">Why Work at DOTYSQUARE?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe great technology comes from great people. Join our culture of innovation, collaboration, and
              continuous growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Join our growing team and make an impact from day one</p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="font-heading font-bold text-2xl">{position.title}</h3>
                        <Badge className="bg-red-100 text-red-600">{position.department}</Badge>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {position.experience}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {position.requirements.map((req, idx) => (
                              <li key={idx}>• {req}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700 mb-2">Benefits:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {position.benefits.map((benefit, idx) => (
                              <li key={idx}>• {benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Button className="bg-red-600 hover:bg-red-700 text-white mb-4 group">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">Internship Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your career with hands-on experience working on real projects alongside industry professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {internshipPositions.map((internship, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl mb-4">{internship.title}</h3>
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-1">
                      <Clock className="h-4 w-4" />
                      {internship.duration}
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {internship.location}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{internship.description}</p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full">Apply for Internship</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Don't See the Right Role?</h2>
            <p className="text-xl text-gray-300">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <Input placeholder="Your phone number" className="border-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Position of Interest</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                      <option>Select a position</option>
                      <option>Senior React Developer</option>
                      <option>Cloud Solutions Architect</option>
                      <option>Mobile App Developer</option>
                      <option>DevOps Engineer</option>
                      <option>Internship</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Letter</label>
                  <Textarea
                    placeholder="Tell us about yourself, your experience, and why you'd like to join DOTYSQUARE..."
                    className="border-gray-300 min-h-[120px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Resume</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <p className="text-gray-600">Drop your resume here or click to upload</p>
                    <Button variant="outline" className="mt-2 border-gray-300 text-gray-700 bg-transparent">
                      Choose File
                    </Button>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

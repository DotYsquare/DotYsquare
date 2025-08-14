import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, CheckCircle, TrendingUp, Target, Zap } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const caseStudies = {
  "1": {
    title: "TechCorp E-commerce Platform",
    client: "TechCorp Inc.",
    category: "Web Development",
    industry: "E-commerce",
    year: "2024",
    duration: "6 months",
    team: "8 developers",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    heroImage: "modern ecommerce platform dashboard with analytics and charts",
    challenge: {
      title: "The Challenge",
      description:
        "TechCorp was struggling with an outdated e-commerce platform that couldn't handle their growing customer base. The existing system had frequent downtime, slow loading times, and limited analytics capabilities, resulting in lost sales and poor customer experience.",
      problems: [
        "Legacy system with 60% uptime",
        "Average page load time of 8 seconds",
        "No real-time inventory tracking",
        "Limited payment options",
        "Poor mobile experience",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We designed and built a modern, scalable e-commerce platform using React and Node.js, with advanced analytics, real-time inventory management, and seamless payment processing.",
      approach: [
        "Conducted comprehensive system audit and requirements analysis",
        "Designed scalable microservices architecture",
        "Implemented progressive web app for mobile optimization",
        "Integrated advanced analytics and reporting dashboard",
        "Set up automated testing and CI/CD pipeline",
      ],
      features: [
        "Real-time inventory management",
        "Advanced product search and filtering",
        "Multi-payment gateway integration",
        "Comprehensive admin dashboard",
        "Mobile-first responsive design",
        "SEO optimization",
      ],
    },
    results: {
      title: "The Results",
      description:
        "The new platform exceeded all expectations, delivering significant improvements in performance, user experience, and business metrics.",
      metrics: [
        { label: "Online Sales Increase", value: "300%", icon: TrendingUp },
        { label: "Cart Abandonment Reduction", value: "50%", icon: Target },
        { label: "Page Load Time", value: "1.2s", icon: Zap },
        { label: "System Uptime", value: "99.9%", icon: CheckCircle },
      ],
      outcomes: [
        "Increased conversion rate from 2.1% to 6.8%",
        "Reduced customer support tickets by 40%",
        "Improved mobile sales by 250%",
        "Enhanced SEO ranking for key product categories",
      ],
    },
    testimonial: {
      quote:
        "DOTYSQUARE transformed our entire online presence. The new platform not only looks amazing but has tripled our online sales. Their team's expertise and dedication were exceptional throughout the project.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp Inc.",
      image: "professional headshot female CEO technology company",
    },
    gallery: [
      "ecommerce homepage modern design with featured products",
      "product detail page with reviews and recommendations",
      "shopping cart and checkout process interface",
      "admin dashboard with sales analytics and inventory",
    ],
  },
  "2": {
    title: "HealthCare Mobile App",
    client: "MedCenter Solutions",
    category: "Mobile Development",
    industry: "Healthcare",
    year: "2024",
    duration: "8 months",
    team: "6 developers",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "WebRTC"],
    heroImage: "healthcare mobile app interface with patient dashboard and appointments",
    challenge: {
      title: "The Challenge",
      description:
        "MedCenter needed a comprehensive mobile solution to improve patient engagement and streamline healthcare delivery. They wanted to reduce no-shows, enable telemedicine, and provide patients with easy access to their health information.",
      problems: [
        "40% patient no-show rate",
        "Limited patient engagement",
        "No telemedicine capabilities",
        "Paper-based appointment scheduling",
        "Poor communication between patients and providers",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We developed a comprehensive mobile health app with telemedicine capabilities, appointment scheduling, secure messaging, and health record management.",
      approach: [
        "Conducted user research with patients and healthcare providers",
        "Designed HIPAA-compliant architecture",
        "Implemented secure video calling for telemedicine",
        "Created intuitive patient and provider interfaces",
        "Integrated with existing hospital management systems",
      ],
      features: [
        "Secure video consultations",
        "Appointment scheduling and reminders",
        "Electronic health records access",
        "Prescription management",
        "Secure messaging with providers",
        "Health tracking and monitoring",
      ],
    },
    results: {
      title: "The Results",
      description:
        "The app significantly improved patient engagement and healthcare delivery efficiency while maintaining the highest security standards.",
      metrics: [
        { label: "Active Users", value: "10,000+", icon: Users },
        { label: "Patient Satisfaction", value: "95%", icon: CheckCircle },
        { label: "No-Show Reduction", value: "40%", icon: Target },
        { label: "Consultation Time Saved", value: "30%", icon: Zap },
      ],
      outcomes: [
        "Increased patient engagement by 200%",
        "Reduced administrative workload by 35%",
        "Improved medication adherence by 60%",
        "Enhanced patient-provider communication",
      ],
    },
    testimonial: {
      quote:
        "The mobile app has revolutionized how we deliver healthcare. Our patients love the convenience, and we've seen dramatic improvements in engagement and outcomes.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer, MedCenter Solutions",
      image: "professional headshot male doctor healthcare",
    },
    gallery: [
      "mobile app login and patient dashboard interface",
      "telemedicine video call interface with doctor",
      "appointment scheduling calendar view",
      "health records and prescription management screen",
    ],
  },
  "3": {
    title: "FinTech Banking Dashboard",
    client: "SecureBank Pro",
    category: "Web Development",
    industry: "Financial Services",
    year: "2024",
    duration: "10 months",
    team: "12 developers",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    heroImage: "modern banking dashboard with financial charts and transaction analytics",
    challenge: {
      title: "The Challenge",
      description:
        "SecureBank Pro needed a comprehensive digital banking platform that could handle millions of transactions while maintaining the highest security standards. Their legacy system was outdated, slow, and couldn't meet modern compliance requirements.",
      problems: [
        "Legacy system processing only 1000 transactions/hour",
        "No real-time fraud detection",
        "Poor user experience on mobile devices",
        "Compliance issues with new regulations",
        "Limited analytics and reporting capabilities",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We built a modern, secure banking platform with real-time transaction processing, advanced fraud detection, and comprehensive analytics dashboard for both customers and administrators.",
      approach: [
        "Implemented microservices architecture for scalability",
        "Integrated AI-powered fraud detection system",
        "Built responsive web application with PWA capabilities",
        "Implemented multi-factor authentication and encryption",
        "Created comprehensive admin dashboard with real-time analytics",
      ],
      features: [
        "Real-time transaction processing",
        "AI-powered fraud detection",
        "Multi-factor authentication",
        "Comprehensive reporting dashboard",
        "Mobile-first responsive design",
        "Regulatory compliance tools",
      ],
    },
    results: {
      title: "The Results",
      description:
        "The new platform revolutionized SecureBank Pro's operations, dramatically improving performance, security, and customer satisfaction.",
      metrics: [
        { label: "Transaction Processing", value: "50,000/hr", icon: Zap },
        { label: "Fraud Reduction", value: "85%", icon: CheckCircle },
        { label: "Customer Satisfaction", value: "98%", icon: Users },
        { label: "Mobile Usage Increase", value: "400%", icon: TrendingUp },
      ],
      outcomes: [
        "Increased transaction processing speed by 5000%",
        "Reduced fraud incidents by 85%",
        "Improved customer satisfaction scores to 98%",
        "Achieved full regulatory compliance",
      ],
    },
    testimonial: {
      quote:
        "DOTYSQUARE delivered a world-class banking platform that exceeded our expectations. The security, performance, and user experience are outstanding.",
      author: "Robert Martinez",
      role: "CTO, SecureBank Pro",
      image: "professional headshot male executive banking finance",
    },
    gallery: [
      "banking dashboard with account overview and recent transactions",
      "mobile banking app interface with quick actions",
      "admin panel with fraud detection alerts and analytics",
      "transaction history with advanced filtering and search",
    ],
  },
  "4": {
    title: "AI-Powered Learning Platform",
    client: "EduTech Solutions",
    category: "AI Development",
    industry: "Education Technology",
    year: "2024",
    duration: "12 months",
    team: "15 developers",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "AWS"],
    heroImage: "AI learning platform with personalized study dashboard and progress tracking",
    challenge: {
      title: "The Challenge",
      description:
        "EduTech Solutions wanted to create a revolutionary learning platform that could adapt to each student's learning style and pace. Traditional e-learning platforms had low engagement rates and poor learning outcomes.",
      problems: [
        "Generic learning paths for all students",
        "Low student engagement (30% completion rate)",
        "No personalized feedback or recommendations",
        "Limited progress tracking and analytics",
        "High dropout rates in online courses",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We developed an AI-powered learning platform that creates personalized learning paths, provides intelligent tutoring, and adapts content based on individual student performance and learning preferences.",
      approach: [
        "Implemented machine learning algorithms for personalization",
        "Built adaptive content delivery system",
        "Created intelligent assessment and feedback system",
        "Developed comprehensive analytics dashboard",
        "Integrated gamification elements to boost engagement",
      ],
      features: [
        "AI-powered personalized learning paths",
        "Intelligent tutoring system",
        "Adaptive content recommendations",
        "Real-time progress tracking",
        "Gamification and achievement system",
        "Advanced analytics for educators",
      ],
    },
    results: {
      title: "The Results",
      description:
        "The AI-powered platform transformed online learning, achieving unprecedented engagement rates and learning outcomes for students across all age groups.",
      metrics: [
        { label: "Course Completion Rate", value: "85%", icon: CheckCircle },
        { label: "Student Engagement", value: "300%", icon: TrendingUp },
        { label: "Learning Speed Improvement", value: "40%", icon: Zap },
        { label: "Active Users", value: "50,000+", icon: Users },
      ],
      outcomes: [
        "Increased course completion rates from 30% to 85%",
        "Improved learning outcomes by 40%",
        "Reduced time to competency by 35%",
        "Achieved 95% student satisfaction rating",
      ],
    },
    testimonial: {
      quote:
        "The AI-powered platform has completely transformed how our students learn. The personalization and engagement levels are beyond anything we've seen before.",
      author: "Dr. Emily Watson",
      role: "Head of Digital Learning, EduTech Solutions",
      image: "professional headshot female educator technology",
    },
    gallery: [
      "personalized learning dashboard with AI recommendations",
      "interactive lesson interface with adaptive content",
      "progress tracking with detailed analytics and insights",
      "gamification elements with achievements and leaderboards",
    ],
  },
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies[params.id as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/portfolio">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-red-600 text-white">{caseStudy.category}</Badge>
                <Badge variant="outline" className="border-white text-white">
                  {caseStudy.industry}
                </Badge>
              </div>
              <h1 className="font-heading font-black text-4xl lg:text-5xl mb-6">{caseStudy.title}</h1>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-gray-400 mb-1">Client</div>
                  <div className="text-white">{caseStudy.client}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Year</div>
                  <div className="text-white">{caseStudy.year}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Duration</div>
                  <div className="text-white">{caseStudy.duration}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Team Size</div>
                  <div className="text-white">{caseStudy.team}</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={`/placeholder.svg?height=500&width=700&query=${caseStudy.heroImage}`}
                alt={caseStudy.title}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-semibold text-gray-700 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {caseStudy.technologies.map((tech) => (
                <Badge key={tech} className="bg-white text-gray-700 border border-gray-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl text-black mb-6">{caseStudy.challenge.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{caseStudy.challenge.description}</p>
              <div className="space-y-3">
                {caseStudy.challenge.problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-xl mb-4">Key Challenges</h3>
                  <div className="space-y-4">
                    {caseStudy.challenge.problems.slice(0, 3).map((problem, index) => (
                      <div key={index} className="p-4 bg-red-50 rounded-lg">
                        <p className="text-red-800 font-medium">{problem}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">{caseStudy.solution.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{caseStudy.solution.description}</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Our Approach</h3>
                <div className="space-y-4">
                  {caseStudy.solution.approach.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Key Features</h3>
                <div className="space-y-3">
                  {caseStudy.solution.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-black mb-4">{caseStudy.results.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{caseStudy.results.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {caseStudy.results.metrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <metric.icon className="h-8 w-8 text-red-600 mx-auto mb-4" />
                  <div className="font-heading font-black text-3xl text-red-600 mb-2">{metric.value}</div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.results.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center text-black mb-12">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.gallery.map((image, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`/placeholder.svg?height=400&width=600&query=${image}`}
                  alt={`${caseStudy.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src={`/placeholder.svg?height=100&width=100&query=${caseStudy.testimonial.image}`}
              alt={caseStudy.testimonial.author}
              className="w-20 h-20 rounded-full mx-auto mb-6"
            />
            <blockquote className="text-2xl font-medium text-gray-300 mb-6 leading-relaxed">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div>
              <div className="font-heading font-bold text-xl">{caseStudy.testimonial.author}</div>
              <div className="text-red-400">{caseStudy.testimonial.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Ready for Similar Results?</h2>
          <p className="text-xl mb-8 text-red-100">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Start Your Project
            </Button>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                View More Cases
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Cloud Computing: Trends to Watch in 2024",
    slug: "future-cloud-computing-trends-2024",
    excerpt:
      "Explore the latest trends shaping cloud computing, from edge computing to serverless architectures and their impact on business transformation.",
    content: "Full article content here...",
    category: "Tech Insights",
    author: "Alex Rodriguez",
    authorRole: "CEO & Founder",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "cloud computing servers data center future technology",
    featured: true,
    tags: ["Cloud Computing", "AWS", "Technology Trends"],
  },
  {
    id: 2,
    title: "DOTYSQUARE Expands Team with 5 New Developers",
    slug: "dotysquare-expands-team-new-developers",
    excerpt:
      "We're excited to announce the addition of five talented developers to our growing team, strengthening our capabilities in web and mobile development.",
    content: "Full article content here...",
    category: "Company Updates",
    author: "Sarah Kim",
    authorRole: "CTO",
    publishDate: "2024-01-10",
    readTime: "3 min read",
    image: "team meeting new developers joining company",
    featured: false,
    tags: ["Team Growth", "Hiring", "Company News"],
  },
  {
    id: 3,
    title: "Building Scalable React Applications: Best Practices Guide",
    slug: "building-scalable-react-applications-guide",
    excerpt:
      "Learn essential patterns and practices for building maintainable and scalable React applications that can grow with your business needs.",
    content: "Full article content here...",
    category: "Tutorials",
    author: "Michael Chen",
    authorRole: "Lead Developer",
    publishDate: "2024-01-08",
    readTime: "12 min read",
    image: "react code development best practices tutorial",
    featured: true,
    tags: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 4,
    title: "Cybersecurity in 2024: Protecting Your Business",
    slug: "cybersecurity-2024-protecting-business",
    excerpt:
      "Essential cybersecurity strategies every business needs to implement to protect against evolving threats in the digital landscape.",
    content: "Full article content here...",
    category: "Tech Insights",
    author: "Emily Johnson",
    authorRole: "Security Specialist",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    image: "cybersecurity protection business data security",
    featured: false,
    tags: ["Cybersecurity", "Business Security", "Data Protection"],
  },
  {
    id: 5,
    title: "Mobile App Development: Native vs Cross-Platform",
    slug: "mobile-app-development-native-vs-cross-platform",
    excerpt:
      "Compare native and cross-platform mobile development approaches to help you choose the right strategy for your next mobile project.",
    content: "Full article content here...",
    category: "Tutorials",
    author: "David Park",
    authorRole: "Mobile Developer",
    publishDate: "2024-01-03",
    readTime: "7 min read",
    image: "mobile app development comparison native cross platform",
    featured: false,
    tags: ["Mobile Development", "React Native", "iOS", "Android"],
  },
  {
    id: 6,
    title: "DOTYSQUARE Achieves AWS Advanced Consulting Partner Status",
    slug: "dotysquare-aws-advanced-consulting-partner",
    excerpt:
      "We're proud to announce our achievement of AWS Advanced Consulting Partner status, demonstrating our expertise in cloud solutions.",
    content: "Full article content here...",
    category: "Company Updates",
    author: "Alex Rodriguez",
    authorRole: "CEO & Founder",
    publishDate: "2024-01-01",
    readTime: "4 min read",
    image: "AWS partnership certification cloud consulting",
    featured: false,
    tags: ["AWS", "Partnership", "Cloud Consulting"],
  },
]

const categories = ["All", "Company Updates", "Tech Insights", "Tutorials"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-red-600 text-white mb-6">Insights & Updates</Badge>
          <h1 className="font-heading font-black text-4xl lg:text-6xl mb-6">
            Blog & <span className="text-red-600">News</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest technology insights, company news, and expert tutorials from the DOTYSQUARE
            team.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gray-300"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 bg-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-6 w-6 text-red-600" />
              <h2 className="font-heading font-bold text-2xl text-black">Featured Articles</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=300&width=500&query=${post.image}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="bg-red-100 text-red-600 mb-3">{post.category}</Badge>
                    <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button className="bg-red-600 hover:bg-red-700 text-white group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-bold text-2xl text-black">
              {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
            </h2>
            <p className="text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=250&width=400&query=${post.image}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-red-100 text-red-600 mb-3">{post.category}</Badge>
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-gray-300 text-gray-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                    >
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-gray-300">
            Subscribe to our newsletter for the latest tech insights and company updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1 bg-white text-black border-white" />
            <Button className="bg-red-600 hover:bg-red-700 text-white">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin, Facebook, LinkIcon } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const blogPosts = {
  "future-cloud-computing-trends-2024": {
    title: "The Future of Cloud Computing: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping cloud computing, from edge computing to serverless architectures and their impact on business transformation.",
    category: "Tech Insights",
    author: "Alex Rodriguez",
    authorRole: "CEO & Founder",
    authorImage: "professional headshot CEO technology leader",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "cloud computing servers data center future technology",
    tags: ["Cloud Computing", "AWS", "Technology Trends"],
    content: `
      <p>Cloud computing has revolutionized how businesses operate, and 2024 promises to bring even more transformative changes. As we navigate through this digital transformation era, understanding emerging trends is crucial for staying competitive.</p>
      
      <h2>Edge Computing Takes Center Stage</h2>
      <p>Edge computing is moving from a nice-to-have to a necessity. With the proliferation of IoT devices and the need for real-time processing, businesses are bringing computation closer to data sources. This trend reduces latency, improves performance, and enables new use cases that weren't possible with traditional cloud architectures.</p>
      
      <h2>Serverless Architecture Maturation</h2>
      <p>Serverless computing is reaching maturity, with major cloud providers expanding their offerings. This architecture allows developers to focus on code rather than infrastructure management, leading to faster development cycles and reduced operational overhead.</p>
      
      <h2>Multi-Cloud and Hybrid Strategies</h2>
      <p>Organizations are increasingly adopting multi-cloud strategies to avoid vendor lock-in and optimize costs. Hybrid cloud solutions that seamlessly integrate on-premises and cloud resources are becoming the norm rather than the exception.</p>
      
      <h2>AI and Machine Learning Integration</h2>
      <p>Cloud platforms are integrating AI and ML capabilities at unprecedented levels. From automated resource optimization to intelligent security monitoring, AI is becoming an integral part of cloud infrastructure.</p>
      
      <h2>Sustainability and Green Computing</h2>
      <p>Environmental consciousness is driving cloud providers to invest heavily in renewable energy and efficient data centers. Businesses are increasingly considering the carbon footprint of their cloud operations.</p>
      
      <h2>Conclusion</h2>
      <p>The cloud computing landscape in 2024 will be defined by edge computing, serverless maturation, multi-cloud strategies, AI integration, and sustainability. Organizations that embrace these trends will be better positioned for success in the digital economy.</p>
    `,
  },
  "building-scalable-react-applications-guide": {
    title: "Building Scalable React Applications: Best Practices Guide",
    excerpt:
      "Learn essential patterns and practices for building maintainable and scalable React applications that can grow with your business needs.",
    category: "Tutorials",
    author: "Michael Chen",
    authorRole: "Lead Developer",
    authorImage: "professional headshot male developer programmer",
    publishDate: "2024-01-08",
    readTime: "12 min read",
    image: "react code development best practices tutorial",
    tags: ["React", "JavaScript", "Web Development"],
    content: `
      <p>Building scalable React applications requires careful planning, proper architecture, and adherence to best practices. This comprehensive guide will walk you through the essential patterns and techniques for creating maintainable React applications.</p>
      
      <h2>Project Structure and Organization</h2>
      <p>A well-organized project structure is the foundation of scalable applications. We recommend a feature-based folder structure that groups related components, hooks, and utilities together.</p>
      
      <pre><code>src/
  components/
    common/
    ui/
  features/
    auth/
    dashboard/
    profile/
  hooks/
  utils/
  services/</code></pre>
      
      <h2>Component Design Patterns</h2>
      <p>Effective component design is crucial for scalability. Follow these patterns:</p>
      <ul>
        <li><strong>Single Responsibility Principle:</strong> Each component should have one clear purpose</li>
        <li><strong>Composition over Inheritance:</strong> Use composition to build complex UIs</li>
        <li><strong>Props Interface Design:</strong> Design clear, minimal prop interfaces</li>
      </ul>
      
      <h2>State Management Strategies</h2>
      <p>Choose the right state management solution based on your application's complexity:</p>
      <ul>
        <li><strong>Local State:</strong> Use useState for component-specific state</li>
        <li><strong>Context API:</strong> For sharing state across component trees</li>
        <li><strong>External Libraries:</strong> Redux, Zustand, or Jotai for complex global state</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Implement these performance optimization techniques:</p>
      <ul>
        <li>React.memo for preventing unnecessary re-renders</li>
        <li>useMemo and useCallback for expensive computations</li>
        <li>Code splitting with React.lazy and Suspense</li>
        <li>Virtual scrolling for large lists</li>
      </ul>
      
      <h2>Testing Strategies</h2>
      <p>Comprehensive testing ensures application reliability:</p>
      <ul>
        <li>Unit tests for individual components</li>
        <li>Integration tests for feature workflows</li>
        <li>End-to-end tests for critical user journeys</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable React applications requires attention to architecture, performance, and maintainability. By following these best practices, you'll create applications that can grow with your business needs while remaining maintainable and performant.</p>
    `,
  },
}

const relatedPosts = [
  {
    title: "Cybersecurity in 2024: Protecting Your Business",
    slug: "cybersecurity-2024-protecting-business",
    category: "Tech Insights",
    image: "cybersecurity protection business data security",
  },
  {
    title: "Mobile App Development: Native vs Cross-Platform",
    slug: "mobile-app-development-native-vs-cross-platform",
    category: "Tutorials",
    image: "mobile app development comparison native cross platform",
  },
  {
    title: "DOTYSQUARE Achieves AWS Advanced Consulting Partner Status",
    slug: "dotysquare-aws-advanced-consulting-partner",
    category: "Company Updates",
    image: "AWS partnership certification cloud consulting",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/blog">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 bg-transparent"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <Badge className="bg-red-100 text-red-600 mb-4">{post.category}</Badge>
          <h1 className="font-heading font-black text-3xl lg:text-5xl text-black mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

          <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center gap-4">
              <img
                src={`/placeholder.svg?height=60&width=60&query=${post.authorImage}`}
                alt={post.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold text-black">{post.author}</div>
                <div className="text-sm text-gray-600">{post.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
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
        </header>

        {/* Featured Image */}
        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img
            src={`/placeholder.svg?height=500&width=800&query=${post.image}`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-gray-300 text-gray-600">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="border-t border-gray-200 pt-8 mb-12">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700">Share this article:</span>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-500 bg-transparent"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 bg-transparent"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700 bg-transparent"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-500 bg-transparent"
              >
                <LinkIcon className="h-4 w-4 mr-2" />
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-black mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=250&width=400&query=${relatedPost.image}`}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-red-100 text-red-600 mb-3">{relatedPost.category}</Badge>
                  <h3 className="font-heading font-bold text-lg mb-4 group-hover:text-red-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                    >
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">Stay Informed</h2>
          <p className="text-xl mb-8 text-red-100">
            Subscribe to our newsletter for more insights like this delivered to your inbox.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Subscribe Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

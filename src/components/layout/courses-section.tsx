"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, CheckCircle2, TrendingUp } from "lucide-react"
import { GSAPButton } from "../ui/gsap-button"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const courses = [
  {
    id: 1,
    title: "Organic Dropshipping",
    description: "Master the art of building a sustainable dropshipping business through organic marketing strategies.",
    image: "/course.webp",
    price: 297,
    originalPrice: 497,
    features: [
      "Organic traffic strategies",
      "Product research mastery",
      "Brand building techniques",
      "Social media optimization"
    ],
    tag: "Most Popular",
    discount: "40% OFF"
  },
  {
    id: 2,
    title: "Dropshipping TikTok/FB Ads",
    description: "Learn to create viral ads and scale your dropshipping business using social media platforms.",
    image: "/course.webp",
    price: 397,
    originalPrice: 597,
    features: [
      "Ad creation mastery",
      "Targeting strategies",
      "Performance optimization",
      "Scaling techniques"
    ],
    tag: "Trending",
    discount: "33% OFF"
  },
  {
    id: 3,
    title: "Affiliation Mastery",
    description: "Build passive income streams through strategic affiliate marketing partnerships.",
    image: "/course.webp",
    price: 247,
    originalPrice: 397,
    features: [
      "Partner selection",
      "Commission optimization",
      "Traffic generation",
      "Conversion strategies"
    ],
    discount: "38% OFF"
  },
  {
    id: 4,
    title: "Professional Networking",
    description: "Develop powerful networking skills to grow your business and career opportunities.",
    image: "/course.webp",
    price: 197,
    originalPrice: 297,
    features: [
      "Relationship building",
      "Digital networking",
      "Event strategies",
      "Personal branding"
    ],
    discount: "33% OFF"
  },
  {
    id: 5,
    title: "Trading Fundamentals",
    description: "Master the basics of trading and develop a winning strategy in the financial markets.",
    image: "/course.webp",
    price: 497,
    originalPrice: 797,
    features: [
      "Technical analysis",
      "Risk management",
      "Market psychology",
      "Portfolio strategy"
    ],
    tag: "Advanced",
    discount: "38% OFF"
  },
  {
    id: 6,
    title: "Business & Finance",
    description: "Learn to manage your business finances and make informed financial decisions.",
    image: "/course.webp",
    price: 347,
    originalPrice: 547,
    features: [
      "Financial planning",
      "Cash flow management",
      "Investment strategy",
      "Tax optimization"
    ],
    discount: "37% OFF"
  }
]

export function CoursesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for course cards
      gsap.from(".course-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".courses-grid",
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none none",
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" /> */}
      {/* <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl" 
        style={{ filter: 'blur(320px)' }}
      /> */}

      <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className="">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-custom"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Premium Courses for Premium Results
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Choose your path to success with our expertly crafted courses
            </motion.p>
          </div>

          {/* Courses Grid */}
          <div className="courses-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="course-card group">
                <div className="relative bg-background/50 border border-primary/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  {/* Course Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image 
                      src={course.image} 
                      alt={course.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" /> */}
                    
                    {/* Tags Container */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                      {course.tag && (
                        <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-lg">
                          {course.tag}
                        </div>
                      )}
                      {course.discount && (
                        <div className="px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg">
                          {course.discount}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="px-6 py-5 space-y-5">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-primary/80">⭐</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price and CTA */}
                    <div className="pt-5 flex items-center justify-between border-t border-primary/10">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Investment</p>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-semibold">${course.price}</p>
                          {course.originalPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                              ${course.originalPrice}
                            </p>
                          )}
                        </div>
                      </div>
                      <GSAPButton variant="primary" className="shadow-lg shadow-primary/10">
                        Enroll Now <ArrowRight className="w-4 h-4" />
                      </GSAPButton>
                    </div>
                  </div>

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
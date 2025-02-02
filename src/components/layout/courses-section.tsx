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
    title: "Packages 01",
    description: "One time payment for all the courses and resources.",
    image: "/course.webp",
    price: "2500",
    originalPrice: "4000",
    features: [
      "Organic Dropshipping Course",
      "Dropshipping tiktok/fb ads course",
      "Access to a closed Discord group with people similar to you",
      "lifetime access to the course"
    ],
    tag: "Most Popular",

    discount: "40% OFF"
  },
  {
    id: 2,
    title: "Packages 02",
    description: "One time payment for all the courses and resources.",
    image: "/course.webp",
    price: "5000",
    originalPrice: "10000",
    features: [
      "Organic Dropshipping",
      "Dropshipping tiktok/fb ads",
      "Affiliation",
      "Networking",
      "Trading",
      "Lifetime access to signal group",
      "Business and your finances",
    ],
    tag: "Recommended",
    discount: "50% OFF"
  },
  {
    id: 3,
    title: "Packages 03",
    description: "One time payment for all the courses and resources.",
    image: "/course.webp",
    price: 2500,
    originalPrice: 4000,
    features: [
      "Trading course",
      "Business and your finances",
      "Access to a closed Discord group with people similar to you",
      "lifetime access to the course"
    ],
    tag: "Trending",
    discount: "40% OFF"
  },
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
    <section id="courses" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" /> */}
      {/* <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl" 
        style={{ filter: 'blur(320px)' }}
      /> */}

      <div className="max-w-[2350px] mx-auto px-4 lg:px-12">
        <div className="">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
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
                    <div className="absolute top-4 left-4 flex gap-2 z-20">
                      {course.tag && (
                        <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-lg border border-border">
                          {course.tag}
                        </div>
                      )}

                      {course.discount && (
                        <div className="px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg bg-red-500 border border-border">
                          {course.discount}
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="px-6 py-5 space-y-2">
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
                      <p className="text-base font-semibold text-foreground/90">Features</p>
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
                        {/* <p className="text-sm text-muted-foreground">Investment</p> */}
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-semibold">{course.price}zł</p>
                          {course.originalPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                              {course.originalPrice}zł
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
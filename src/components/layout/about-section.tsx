"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { ArrowUpRight, Code2, Lightbulb, Users2 } from "lucide-react"
import { GSAPButton } from "../ui/gsap-button"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Code2,
    title: "Expert-Led Learning",
    description: "Learn from industry veterans who've shaped the digital landscape. Our instructors don't just teach—they inspire."
  },
  {
    icon: Users2,
    title: "Community Driven",
    description: "Join a vibrant community of learners. Share insights, collaborate on projects, and grow together."
  },
  {
    icon: Lightbulb,
    title: "Project-Based Growth",
    description: "Theory meets practice. Build real-world projects that matter and add them to your portfolio."
  }
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state for cards
      gsap.set(".feature-card", {
        opacity: 0,
        y: 60
      })

      // Improved card animations
      features.forEach((_, index) => {
        gsap.to(`.feature-card:nth-child(${index + 1})`, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top bottom-=150",
            end: "top center",
            toggleActions: "play none none none",
            once: true
          }
        })
      })

      // Improved text reveal animations
      const textElements = gsap.utils.toArray<HTMLElement>('.reveal-text')
      textElements.forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none none",
            once: true
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" 
        style={{ filter: 'blur(500px)' }}
      />

      <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className="max-w-[2350px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="about-content space-y-8">
              <div className="space-y-6">
                <h2 
                  className="reveal-text text-sm uppercase tracking-wider text-primary/60"
                >
                  About Us
                </h2>
                <h3 
                  className="reveal-text text-4xl md:text-5xl font-custom leading-tight"
                >
                  Crafting Digital Excellence Through Education
                </h3>
                <p 
                  className="reveal-text text-lg text-muted-foreground"
                >
                  We're not just another online learning platform. We're a community of passionate educators and lifelong learners, dedicated to mastering the digital craft through practical, hands-on experience.
                </p>
              </div>

              <div className="reveal-text">
                <GSAPButton variant="mainPrimary">
                  Join Our Community <ArrowUpRight className="ml-2" />
                </GSAPButton>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div ref={cardsRef} className="relative">
              <div className="grid gap-5">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="feature-card group opacity-0"
                  >
                    <div className="relative p-5 rounded-xl border border-primary/10 bg-background/80 backdrop-blur-sm hover:border-primary/20 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] to-primary/[0.02] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                            <feature.icon className="w-6 h-6 text-primary/60 group-hover:text-primary/80 transition-colors duration-500" />
                          </div>
                        </div>
                        <div className="space-y-1.5 pt-0.5">
                          <h4 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-500">
                            {feature.title}
                          </h4>
                          <p className="text-muted-foreground text-[14px] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
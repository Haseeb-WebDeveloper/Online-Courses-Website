"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion, useScroll, useTransform } from "framer-motion"
import { Quote, Star, Trophy, Users } from "lucide-react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Digital Entrepreneur",
    image: "/avatar/avatar-1.jpg",
    content: "The organic dropshipping course completely transformed my business. I went from struggling to make sales to generating consistent 6-figure months.",
    course: "Organic Dropshipping",
    rating: 5,
    achievement: "$127K/month"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "E-commerce Expert",
    image: "/avatar/avatar-2.jpg",
    content: "The TikTok ads strategies I learned here helped me scale my store from zero to $50K in just two months. The ROI has been incredible.",
    course: "Dropshipping TikTok/FB Ads",
    rating: 5,
    achievement: "850% ROAS"
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Digital Entrepreneur",
    image: "/avatar/avatar-1.jpg",
    content: "The organic dropshipping course completely transformed my business. I went from struggling to make sales to generating consistent 6-figure months.",
    course: "Organic Dropshipping",
    rating: 5,
    achievement: "$127K/month"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "E-commerce Expert",
    image: "/avatar/avatar-2.jpg",
    content: "The TikTok ads strategies I learned here helped me scale my store from zero to $50K in just two months. The ROI has been incredible.",
    course: "Dropshipping TikTok/FB Ads",
    rating: 5,
    achievement: "850% ROAS"
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Digital Entrepreneur",
    image: "/avatar/avatar-1.jpg",
    content: "The organic dropshipping course completely transformed my business. I went from struggling to make sales to generating consistent 6-figure months.",
    course: "Organic Dropshipping",
    rating: 5,
    achievement: "$127K/month"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "E-commerce Expert",
    image: "/avatar/avatar-2.jpg",
    content: "The TikTok ads strategies I learned here helped me scale my store from zero to $50K in just two months. The ROI has been incredible.",
    course: "Dropshipping TikTok/FB Ads",
    rating: 5,
    achievement: "850% ROAS"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Affiliate Marketer",
    image: "/avatar/avatar-3.jpg",
    content: "I was skeptical at first, but the affiliate marketing course provided exactly what I needed. Now I'm earning passive income while I sleep.",
    course: "Affiliation Mastery",
    rating: 5,
    achievement: "$43K Passive Income"
  },
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Digital Entrepreneur",
    image: "/avatar/avatar-1.jpg",
    content: "The organic dropshipping course completely transformed my business. I went from struggling to make sales to generating consistent 6-figure months.",
    course: "Organic Dropshipping",
    rating: 5,
    achievement: "$127K/month"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "E-commerce Expert",
    image: "/avatar/avatar-2.jpg",
    content: "The TikTok ads strategies I learned here helped me scale my store from zero to $50K in just two months. The ROI has been incredible.",
    course: "Dropshipping TikTok/FB Ads",
    rating: 5,
    achievement: "850% ROAS"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Affiliate Marketer",
    image: "/avatar/avatar-3.jpg",
    content: "I was skeptical at first, but the affiliate marketing course provided exactly what I needed. Now I'm earning passive income while I sleep.",
    course: "Affiliation Mastery",
    rating: 5,
    achievement: "$43K Passive Income"
  }
]

export function SuccessStories() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smoother parallax values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smoother horizontal scroll for testimonials
      const testimonialCards = gsap.utils.toArray('.testimonial-card')
      
      gsap.to(scrollRef.current, {
        x: () => -(scrollRef.current!.scrollWidth - window.innerWidth + 48),
        ease: "none",
        scrollTrigger: {
          trigger: ".testimonials-container",
          start: "top top+=150",
          end: "+=2500",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      })

      gsap.from(".metric-item", {
        y: 60,
        rotateX: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".metrics-container",
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none none",
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative pt-16 overflow-hidden bg-foreground/5">
      <div className="hidden lg:block">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50" 
        />
      </div>

      <div ref={containerRef} className="max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 relative z-10">
            <motion.h2 
              className="text-4xl md:text-6xl font-custom"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Success Stories
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Real results from real students who took action
            </motion.p>
          </div>

          {/* Desktop Version - Horizontal Scroll */}
          <div className="hidden lg:block">
            <div className="testimonials-container relative min-h-[80vh]">
              <div 
                ref={scrollRef} 
                className="flex gap-8 testimonials-wrapper absolute left-6 lg:left-12 w-fit"
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={`desktop-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    index={index}
                    isDesktop={true}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Version - Simple Grid */}
          <div className="lg:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <TestimonialCard 
                  key={`mobile-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index}
                  isDesktop={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Separate TestimonialCard component for better organization
interface TestimonialCardProps {
  testimonial: typeof testimonials[0]
  index: number
  isDesktop: boolean
}

function TestimonialCard({ testimonial, index, isDesktop }: TestimonialCardProps) {
  const cardContent = (
    <div className="relative p-8 rounded-2xl border border-primary/10 bg-background/80 backdrop-blur-sm hover:border-primary/20 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/5">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Quote Icon */}
      <motion.div 
        className="absolute -top-4 -left-4"
        whileHover={isDesktop ? { scale: 1.2, rotate: 180 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Quote className="w-5 h-5 text-primary" />
        </div>
      </motion.div>

      <div className="relative space-y-6">
        {/* Content */}
        <p className="text-lg text-muted-foreground leading-relaxed">
          "{testimonial.content}"
        </p>

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        {/* Achievement */}
        <div className="bg-primary/5 rounded-lg px-6 py-3 text-base backdrop-blur-sm">
          <span className="text-primary font-semibold">Achievement: </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            {testimonial.achievement}
          </span>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            <p className="text-sm text-primary mt-1">{testimonial.course}</p>
          </div>
        </div>
      </div>
    </div>
  )

  if (isDesktop) {
    return (
      <motion.div 
        className="testimonial-card flex-shrink-0 w-[400px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        {cardContent}
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
    >
      {cardContent}
    </motion.div>
  )
} 
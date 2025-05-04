"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { GSAPButton } from "../ui/gsap-button"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

gsap.registerPlugin(ScrollTrigger)
const courses = [
  {
    id: 1,
    title: "Sh0 Elite Club - eCommerce",
    description: "Jednorazowa płatność za wszystkie kursy i materiały.",
    image: "/ecommerce.png",
    originalPrice:"2500",
    price:"1249",
    features: [
      "Dropshipping organiczny od podstaw",
      "Dropshipping Przez Meta / Tiktok ADS",
      "Tworzenie Viralowych Tiktoków",
      "Budowa idealnego sklepu na Shopify",
      "Codziennie Spotkania na voice chacie",
      "Dostep do zamkniętej grupy ludzi takich jak ty!",
      "Dożywotni dostęp do naszej platformy",
      "Pomoc 24/7"
    ],
    tag: "Najpopularniejszy",
    link: [
      {
        name: "Ecommerce",
        originalPrice:"2500",
        price:"1249",
        stripeLink:"https://buy.stripe.com/5kA3gf5bs0jociA3cL"
      }
    ],
    discount: "50% ZNIŻKI"
  },
  {
    id: 3,
    title: "Sh0 Elite Club - MasterClass",
    description: "Jednorazowa płatność za wszystkie kursy i materiały.",
    image: "/masterclass.png",
    originalPrice:"5000 zł",
    price:"1999 zł",
    features: [
      "Dropshipping organiczny od podstaw",
      "Dropshipping Przez Meta / Tiktok ADS",
      "Tworzenie Viralowych Tiktoków",
      "Budowa idealnego sklepu na Shopify",
      "Codziennie Spotkania na voice chacie",
      "Kompletna strategia SMC + Wyckoff",
      "Kompletna strategia MSNR",
      "Kompletna strategia Liquidity + Price Action",
      "Psychologia w tradingu",
      "Najlepsze aplikacje firmy i brokerzy",
      "Trading journal - śledź swoje trade'y",
      "Networking",
      "Afiliacja",
      "Mindset i zarządzanie pieniędzmi",
      "Pomoc 24/7",
      "Dostep do zamkniętej grupy ludzi takich jak ty!",
      "Dożywotni dostęp do naszej platformy"
    ],
    tag: "Na czasie",
    link: [
      {
        name: "Masterclass",
        originalPrice:"5000 zł",
        price:"1999 zł",
        stripeLink:"https://buy.stripe.com/6oE2cb7jAfeiaas9Bd"
      }
    ],
    discount: "50% ZNIŻKI"
  },
  {
    id: 2,
    title: "Sh0 Elite Club - Trading",
    description: "Jednorazowa płatność za wszystkie kursy i materiały.",
    image: "/trading.png",
    originalPrice:"2500 zł",
    price:"1249 zł",
    features: [
      "Kompletna strategia ALCHEMIST MSNR + WYCKOFF",
      "Kompletna strategia Liquidity + Price Action",
      "Psychologia w tradingu",
      "Najlepsze aplikacje firmy i brokerzy",
      "Trading journal - śledź swoje trade'y",
      "Codziennie Spotkania na voice chacie",
      "Dostep do zamkniętej grupy ludzi takich jak ty!",
      "Dożywotni dostęp do naszej platformy",
      "Pomoc 24/7"
    ],
    tag: "Polecany",
    link: [
      {
        name: "Trading",
        originalPrice:"2500 zł",
        price:"1249 zł",
        stripeLink:"https://buy.stripe.com/4gw5on7jAc260zS3cN"
      }
    ],
    discount: "50% ZNIŻKI"
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
    <section id="courses" className="relative py-16 md:py-24 overflow-hidden">
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
              Premium Kursy dla Premium Wyników
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Wybierz swoją drogę do sukcesu z naszymi profesjonalnie stworzonymi kursami
            </motion.p>
          </div>

          {/* Courses Grid */}
          <div className="courses-grid flex flex-col-reverse md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="course-card group">
                <div className="relative bg-background/50 border border-primary/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  {/* Course Image */}
                  <div className="relative aspect-video overflow-hidden bg-red-500">
                    <Image 
                      src={course.image} 
                      alt={course.title}
                      width={400}
                      height={300}
                      className="object-cover aspect-video object-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Tags Container */}
                    <div className="absolute top-4 left-4 flex gap-2 z-20">
                      {course.tag && (
                        <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-lg border border-border">
                          {course.tag}
                        </div>
                      )}

                      {/* {course.discount && (
                        <div className="px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg bg-red-500 border border-border">
                          {course.discount}
                        </div>
                      )} */}
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
                      <p className="text-xl font-semibold text-primary/90 leading-relaxed flex items-center gap-2">
                        <span className="line-through text-muted-foreground"> {course.originalPrice}</span>  {course.price}
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
                      <div className="flex gap-2 w-full justify-between">
                        {course.link.map((linkItem, index) => (
                            <Link key={index}  target="_blank"
                            rel="noopener noreferrer" href={linkItem.stripeLink} className="w-full h-full py-2 px-2 rounded-full text-center flex items-center justify-center gap-2 bg-primary text-primary-foreground before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset]">
                              <span className="">dołącz do {linkItem.name}</span> <ArrowRight className="w-4 h-4" />
                            </Link>
                        ))}
                      </div>
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
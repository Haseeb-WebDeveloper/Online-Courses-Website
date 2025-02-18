"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "@GrindAndShine",
    role: "Cyfrowa Przedsiębiorczyni",
    image: "/avatar/avatar-1.jpg",
    content: "Kurs dropshippingu organicznego całkowicie zmienił moje podejście do biznesu. Zamiast zmagać się z niską sprzedażą, teraz regularnie generuję sześciocyfrowe przychody każdego miesiąca. Zdecydowanie polecam każdemu, kto chce osiągnąć sukces w e-commerce.",
    course: "Dropshipping Organiczny",
    rating: 5,
    achievement: "$127K/miesiąc"
  },
  {
    id: 2,
    name: "@MoneyMovesX",
    role: "Ekspert E-commerce",
    image: "/avatar/avatar-2.jpg",
    content: "Strategie TikTok Ads, które poznałem na tym kursie, pozwoliły mi rozwinąć sklep od zera do $50K w zaledwie dwa miesiące. To, czego się nauczyłem, było przełomowe, a zwrot z inwestycji przekroczył moje oczekiwania. Gorąco polecam ten kurs.",
    course: "Dropshipping TikTok/FB Ads",
    rating: 5,
    achievement: "850% ROAS"
  },
  {
    id: 3,
    name: "@HustleGoddess",
    role: "Marketingowiec Afiliacyjny",
    image: "/avatar/avatar-3.jpg",
    content: "Początkowo podchodziłam do tego kursu z rezerwą, ale szybko okazało się, że zawiera wszystko, czego potrzebowałam do sukcesu. Teraz zarabiam pasywnie każdego dnia, nawet gdy śpię. To najlepsza inwestycja w moją karierę, jaką kiedykolwiek zrobiłam.",
    course: "Mistrzostwo Afiliacji",
    rating: 5,
    achievement: "$43K Dochodu Pasywnego"
  },
  {
    id: 4,
    name: "@SavageGrind_",
    role: "Specjalistka od Marketingu",
    image: "/avatar/avatar-4.jpg",
    content: "Kurs dostarczył mi narzędzi i wiedzy, które pomogły mi stworzyć skuteczną strategię marketingową. Moje kampanie są teraz znacznie bardziej efektywne, a wyniki przerosły moje oczekiwania. Gorąco polecam wszystkim profesjonalistom.",
    course: "Strategie Marketingowe",
    rating: 5,
    achievement: "$78K/miesiąc"
  },
  {
    id: 5,
    name: "@NoSleepGrind",
    role: "Przedsiębiorca",
    image: "/avatar/avatar-5.jpg",
    content: "Nigdy wcześniej nie miałem tak kompleksowego podejścia do biznesu online. Kurs otworzył mi oczy na możliwości, jakie daje e-commerce, i teraz moje przychody są stabilne i przewidywalne. Polecam każdemu, kto zaczyna swoją przygodę.",
    course: "E-commerce od Podstaw",
    rating: 5,
    achievement: "$65K/miesiąc"
  },
  {
    id: 6,
    name: "@nosleep",
    role: "Marketingowiec",
    image: "/avatar/avatar-7.jpg",
    content: "Kurs marketingu cyfrowego był dla mnie przełomowy. Dzięki niemu nauczyłam się skutecznych strategii, które pozwoliły mi zwiększyć zasięg moich kampanii i osiągnąć imponujące wyniki. Teraz generuję stabilne przychody i mam pewność, że moje działania przynoszą realne efekty.",
    course: "Marketing Cyfrowy",
    rating: 5,
    achievement: "$100K/miesiąc"
  }
];

export function SuccessStories() {
  return (
    <section id="stories" className="relative py-16 md:py-20 overflow-hidden bg-foreground/5">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 relative z-10">
            <motion.h2 
              className="text-4xl md:text-6xl font-custom"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Historie sukcesów
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Realne wyniki od rzeczywistych studentów, którzy podjęli działanie
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: typeof testimonials[0]
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full p-6 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-500">
        {/* Quote Icon */}
        <div className="mb-6">
          <Quote className="w-10 h-10 text-primary/60" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-base text-foreground/90 leading-relaxed">
            {testimonial.content}
          </p>

          {/* Rating */}
          <div className="flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>

          {/* Achievement */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            {testimonial.achievement}
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-primary/10">
          {/* <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div> */}
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            <p className="text-sm text-primary mt-1">{testimonial.course}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 
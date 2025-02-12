"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const achievements = [
  { id: 1, image: "/achievements/01.jpg" },
  { id: 2, image: "/achievements/02.jpg" },
  { id: 3, image: "/achievements/03.jpg" },
  { id: 4, image: "/achievements/04.jpg" },
  { id: 5, image: "/achievements/05.jpg" },
  { id: 6, image: "/achievements/06.jpg" },
  { id: 7, image: "/achievements/07.jpg" },
  { id: 8, image: "/achievements/08.jpg" },
  { id: 9, image: "/achievements/09.jpg" },
  { id: 10, image: "/achievements/10.jpg" },
  { id: 11, image: "/achievements/11.jpg" },
  { id: 12, image: "/achievements/12.jpg" },
  { id: 13, image: "/achievements/13.jpg" },
  { id: 14, image: "/achievements/14.jpg" },
  { id: 15, image: "/achievements/15.jpg" },
  { id: 16, image: "/achievements/16.jpg" },
  { id: 17, image: "/achievements/17.jpg" },
  { id: 18, image: "/achievements/18.jpg" },
  { id: 19, image: "/achievements/19.jpg" },
  { id: 20, image: "/achievements/20.jpg" },
  { id: 21, image: "/achievements/21.jpg" },
]

export function AchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 3 // Number of items to show at once

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsToShow >= achievements.length ? 0 : prevIndex + itemsToShow
    )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsToShow < 0 ? achievements.length - itemsToShow : prevIndex - itemsToShow
    )
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full" 
          style={{ filter: 'blur(180px)' }}
        />
      </div>

      <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-custom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Osiągnięcia Naszych Studentów
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Realne wyniki od rzeczywistych studentów, którzy zastosowali nasze strategie
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/10 opacity-0 group-hover:opacity-100 hover:bg-background/90 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/10 opacity-0 group-hover:opacity-100 hover:bg-background/90 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Images Container */}
          <div className="overflow-hidden">
            <div className="flex justify-center gap-6">
              <AnimatePresence mode="wait">
                {achievements.slice(currentIndex, currentIndex + itemsToShow).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative w-full max-h-[300px] aspect-[3/4] rounded-xl overflow-hidden border border-border bg-foreground/5"
                  >
                    <Image
                      src={item.image}
                      alt={`Achievement ${item.id}`}
                      fill
                      className="object-contain object-center transition-all duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: Math.ceil(achievements.length / itemsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsToShow)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === Math.floor(currentIndex / itemsToShow)
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
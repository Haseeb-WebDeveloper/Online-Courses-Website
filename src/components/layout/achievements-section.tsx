"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const achievements = [
  { id: 1, image: "/achievements/01.jpg", height: "h-[300px]" },
  { id: 2, image: "/achievements/02.jpg", height: "h-[400px]" },
  { id: 3, image: "/achievements/03.jpg", height: "h-[350px]" },
  { id: 4, image: "/achievements/04.jpg", height: "h-[450px]" },
  { id: 5, image: "/achievements/05.jpg", height: "h-[300px]" },
  { id: 6, image: "/achievements/06.jpg", height: "h-[400px]" },
  { id: 7, image: "/achievements/07.jpg", height: "h-[350px]" },
  { id: 8, image: "/achievements/08.jpg", height: "h-[300px]" },
  { id: 9, image: "/achievements/09.jpg", height: "h-[450px]" },
  { id: 10, image: "/achievements/10.jpg", height: "h-[350px]" },
  { id: 11, image: "/achievements/11.jpg", height: "h-[400px]" },
  { id: 12, image: "/achievements/12.jpg", height: "h-[300px]" },
  { id: 13, image: "/achievements/13.jpg", height: "h-[350px]" },
  { id: 14, image: "/achievements/14.jpg", height: "h-[300px]" },
  { id: 15, image: "/achievements/15.jpg", height: "h-[450px]" },
  { id: 16, image: "/achievements/16.jpg", height: "h-[350px]" },
  { id: 17, image: "/achievements/17.jpg", height: "h-[400px]" },
  { id: 18, image: "/achievements/18.jpg", height: "h-[300px]" },
  { id: 19, image: "/achievements/19.jpg", height: "h-[300px]" },
  { id: 20, image: "/achievements/20.jpg", height: "h-[450px]" },
  { id: 21, image: "/achievements/21.jpg", height: "h-[350px]" },
  { id: 22, image: "/achievements/22.jpg", height: "h-[400px]" },
  { id: 23, image: "/achievements/23.jpg", height: "h-[300px]" },
  { id: 24, image: "/achievements/24.jpg", height: "h-[450px]" },
  { id: 25, image: "/achievements/25.jpg", height: "h-[350px]" },
  { id: 26, image: "/achievements/26.jpg", height: "h-[400px]" },
  { id: 27, image: "/achievements/27.jpg", height: "h-[300px]" },
  { id: 28, image: "/achievements/28.jpg", height: "h-[300px]" },
  { id: 29, image: "/achievements/29.jpg", height: "h-[300px]" },  
]

export function AchievementsSection() {
  // Split achievements into 3 columns for desktop
  const column1 = achievements.filter((_, index) => index % 3 === 0)
  const column2 = achievements.filter((_, index) => index % 3 === 1)
  const column3 = achievements.filter((_, index) => index % 3 === 2)

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

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            {column1.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative ${item.height} rounded-2xl overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={`Achievement ${item.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {column2.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1 }}
                className="group"
              >
                <div className={`relative ${item.height} rounded-2xl overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={`Achievement ${item.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {column3.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="group"
              >
                <div className={`relative ${item.height} rounded-2xl overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={`Achievement ${item.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import { motion } from "framer-motion"
import { Briefcase, BarChart2, Building2, Wallet } from "lucide-react"
import Image from "next/image"

const targetAudience = [
  {
    title: "Aspiring entrepreneurs who want to escape the 9-5 grind",
    description: "Break free from traditional employment and build your own empire",
    icon: Briefcase
  },
  {
    title: "Those struggling with dropshipping or trading and need a proven system",
    description: "Stop wasting time with trial and error - follow a proven blueprint",
    icon: BarChart2
  },
  {
    title: "Business owners looking to scale and multiply their income streams",
    description: "Take your existing business to new heights with advanced strategies",
    icon: Building2
  },
  {
    title: "Anyone serious about financial freedom and building wealth",
    description: "Transform your financial future with actionable knowledge",
    icon: Wallet
  }
]

export function WhoThisIsForSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-custom">
                Who This Is For
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of successful students who have transformed their lives through our program
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6 rounded-xl border border-primary/10 bg-background/50 flex flex-col gap-2 w-full h-full hover:bg-primary/5 hover:border-primary/20 transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />

                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-base font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:h-[600px]"
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src="/team.avif" // Add this image to your public folder
                alt="Who this is for"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
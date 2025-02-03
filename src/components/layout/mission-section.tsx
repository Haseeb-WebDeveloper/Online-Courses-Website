"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { GSAPButton } from "../ui/gsap-button"

export function MissionSection() {
  return (
    <section className="relative py-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/profile-2.jpg" // Make sure to add this image to your public folder
                alt="Mission"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/50 to-transparent" />
            </div>
            
            {/* Stats overlay */}
            {/* <div className="absolute bottom-8 left-8 right-8">
              <div className="grid grid-cols-2 gap-4 font-custom">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-primary/10">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Success Stories</div>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-xl border border-primary/10">
                  <div className="text-3xl font-bold text-primary">97%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-custom">
                Your Success Is My Mission
              </h2>
              
              <p className="text-lg text-muted-foreground">
                I don't just teach theory—I give you my exact blueprint to success. If you're willing to put in the effort, I will show you the fastest way to build a highly profitable online business.
              </p>

              <div className="space-y-4">
                {[
                  "No prior experience needed – Just follow the steps",
                  "Proven results – My students are making real money",
                  "Lifetime access – Learn at your own pace"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-lg">📌</span>
                    <span className="text-base">{point}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <GSAPButton variant="mainPrimary" href="#courses" className="w-full sm:w-auto">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </GSAPButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
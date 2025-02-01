"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { GSAPButton } from "../ui/gsap-button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-32 bg-background">

      <div className="relative max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className=" text-center space-y-8 bg-primary/5 rounded-3xl  py-32 w-full">
          {/* Main Content */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-custom"
            >
              Start Your Journey Today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              This is NOT just another online course – It's a roadmap to financial success. You get lifetime access – One-time payment, unlimited learning
            </motion.p>
          </div>

          {/* Single CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GSAPButton variant="mainPrimary" className="min-w-[200px]">
              Get Started <ArrowRight className="w-4 h-4" />
            </GSAPButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
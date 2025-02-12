"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { GSAPButton } from "../ui/gsap-button"

export function MissionSection() {
  return (
    <section className="relative py-6 md:py-24 overflow-hidden">
      {/* Background Elements */}
    

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
                Twój Sukces Jest Moją Misją
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Nie uczę tylko teorii – Daję Ci dokładny plan działania. Jeśli jesteś gotów włożyć wysiłek, pokażę Ci najszybszą drogę do zbudowania dochodowego biznesu online.
              </p>

              <div className="space-y-4">
                {[
                  "Brak doświadczenia wymagany – Postępuj krok po kroku",
                  "Dowiedziony wyniki – Moi studenci generują prawdziwe pieniądze",
                  "Dostęp na całe życie – Naucz własnym tempem"
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
                  Rozpocznij swoją Podróż <ArrowRight className="w-4 h-4" />
                </GSAPButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
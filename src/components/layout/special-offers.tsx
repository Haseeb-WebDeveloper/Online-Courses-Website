"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Check } from "lucide-react"
import { GSAPButton } from "../ui/gsap-button"
import { Button } from "../ui/button"
import Link from "next/link"

const offers = [
  {
    id: 1,
    title: "Pakiet 2 Kursów",
    description: "Wybierz dowolne 2 kursy z naszej premium kolekcji",
    originalPrice: "2500zł",
    discountedPrice: "1249zł",
    savings: "Oszczędź 50%",
    features: [
      "Wybierz jeden z dwóch Kursów",
      "Dożywotni dostęp do wybranego kursu",
      "Dostęp do zamkniętej grupy",
      "Pomoc 24/7",
    ],
    highlight: "Najbardziej Elastyczny",
    link: {
      "Trading 1249zł": "https://buy.stripe.com/4gwcPx7Do5cg69W6ow",
      "Ecommerce 1249zł": "https://buy.stripe.com/8wMg1JbTEdIM8i48wD"
    }
  },
  {
    id: 2,
    title: "Pełny Pakiet Masterclass",
    description: "Wszystkie kursy premium w jednym",
    originalPrice: "5000zł",
    discountedPrice: "1999zł",
    savings: "Oszczędź 67%",
    features: [
      "Dostep do wszystkich kursów",
      "Priorytetowa Pomoc 24/7",
      "Godzinna pomoc raz w miesiącu od Eksperta",
      "Dożywotni dostęp z aktualizacjami",
    ],
    highlight: "Najlepsza Wartość",
    link: {
      "Zapisz się teraz 1999zł": "https://buy.stripe.com/14kcPx8HsgUYfKw7sx",
    }
  }
]

export function SpecialOffers() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full" 
          style={{ filter: 'blur(180px)' }}
        />
      </div>

      <div className="max-w-[2350px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Czas ograniczony</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-custom"
          >
            Specjalne Pakiet Oferty
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Oszczędzaj dużo z naszych ekskluzywnych pakietów i przyspiesz swoje sukcesy
          </motion.p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative p-8 rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-500">
                {/* Highlight Badge */}
                <div className="absolute -top-3 left-6">
                  <div className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {offer.highlight}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">{offer.title}</h3>
                    <p className="text-muted-foreground">{offer.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{offer.discountedPrice}</span>
                      <span className="text-lg text-muted-foreground line-through">{offer.originalPrice}</span>
                    </div>
                    <div className="text-primary font-medium">{offer.savings}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {offer.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex flex-col md:flex-row items-center gap-2 w-full justify-center">
                    {Object.entries(offer.link).map(([label, url]) => (
                      <Button 
                        key={label}
                        variant="default" 
                        className="w-full rounded-full"
                        asChild
                      >
                        <Link href={url}>
                          {label} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          ⚡ Oferta ważna tylko na ograniczony czas. Nie przegap!
        </motion.p>
      </div>
    </section>
  )
} 
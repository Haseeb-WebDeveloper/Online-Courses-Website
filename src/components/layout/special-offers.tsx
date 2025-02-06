"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Check } from "lucide-react"
import { GSAPButton } from "../ui/gsap-button"

const offers = [
  {
    id: 1,
    title: "2 Course Bundle",
    description: "Choose any 2 courses from our premium collection",
    originalPrice: "2000zł",
    discountedPrice: "750zł",
    savings: "Save 50%",
    features: [
      "Wybierz jeden z dwóch Kursów",
      "Dożywotni dostęp do wybranego kursu",
      "Dostęp do zamkniętej grupy",
      "Pomoc 24/7",
    ],
    highlight: "Most Flexible",
    link: {
      "Ecommerce": "https://buy.stripe.com/8wMg1JbTEdIM8i48wD",
      "Trading": "https://buy.stripe.com/4gwcPx7Do5cg69W6ow"
    }
  },
  {
    id: 2,
    title: "Masterclass all in bundle",
    description: "Get unlimited access to all our premium courses",
    originalPrice: "5000zł",
    discountedPrice: "3000zł > 900zł",
    savings: "Save 67%",

    features: [
      "Dostep do wszystkich kursów",
      "Priorytetowa Pomoc 24/7",
      "Godzinna pomoc raz w miesiącu od Eksperta",
      "Dożywotni dostęp z aktualizacjami",
    ],
    highlight: "Best Value",
    link: {
      "Enroll Now": "https://buy.stripe.com/14kcPx8HsgUYfKw7sx",
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
            <span>Limited Time Offer</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-custom"
          >
            Special Bundle Deals
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Save big with our exclusive bundle offers and fast-track your success
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
                  <div className="flex items-center gap-2 w-full justify-center">
                    {Object.entries(offer.link).map(([label, url]) => (
                      <GSAPButton 
                        key={label}
                        variant="mainPrimary" 
                        className="w-full"
                        href={url}
                      >
                        {label} <ArrowRight className="w-4 h-4" />
                      </GSAPButton>
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
          ⚡ Offer valid for a limited time only. Don't miss out!
        </motion.p>
      </div>
    </section>
  )
} 
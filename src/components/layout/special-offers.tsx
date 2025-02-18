"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { GSAPButton } from "../ui/gsap-button";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const offers = [
  {
    id: 1,
    title: "Pakiet Powitalny",
    description: "Wybierz jeden z dwóch kursów i zaoszczędź",
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
      "Trading 1249zł": "https://buy.stripe.com/4gw5on7jAc260zS3cN",
      "Ecommerce 1249zł": "https://buy.stripe.com/5kA3gf5bs0jociA3cL",
    },
  },
  {
    id: 2,
    title: "Sho Elite Club - Masterclass PROMO",
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
      "Dołącz teraz za 1999zł": "https://buy.stripe.com/6oE2cb7jAfeiaas9Bd",
    },
  },
];

function getNextMidnight() {
  // Create a date object in Pakistan timezone
  const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" });
  const pakistanDate = new Date(now);
  
  // Set the time to next midnight
  const tomorrow = new Date(pakistanDate);
  tomorrow.setHours(24, 0, 0, 0);
  
  return tomorrow;
}

function calculateTimeLeft(endTime: Date): TimeLeft {
  const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" });
  const currentTime = new Date(now);
  const difference = endTime.getTime() - currentTime.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function SpecialOffers() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [endTime, setEndTime] = useState(getNextMidnight());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(endTime);
      
      if (newTimeLeft.days === 0 && 
          newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && 
          newTimeLeft.seconds === 0) {
        // Reset to next midnight when timer reaches zero
        setEndTime(getNextMidnight());
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full"
          style={{ filter: "blur(180px)" }}
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
            Oferty Pakiet Specjalny
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Oszczędzaj dużo z naszych ekskluzywnych pakietów i przyspiesz swoje
            sukcesy
          </motion.p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 justify-center gap-8 max-w-5xl mx-auto">
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
                  <div className="px-4 py-1 rounded-full bg-foreground/90 text-background text-sm font-medium">
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
                      <span className="text-3xl font-bold">
                        {offer.discountedPrice}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {offer.originalPrice}
                      </span>
                    </div>
                    <div className="text-primary font-medium">
                      {offer.savings}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {offer.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
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

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mt-12"
        >
          <div className="text-lg font-medium text-primary">
            Oferta kończy się za:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4 text-center">
            <div className="bg-primary/5 rounded-lg px-4 py-2 min-w-[80px]">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-sm text-muted-foreground">Dni</div>
            </div>
            <div className="bg-primary/5 rounded-lg px-4 py-2 min-w-[80px]">
              <div className="text-2xl font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground">Godzin</div>
            </div>
            <div className="bg-primary/5 rounded-lg px-4 py-2 min-w-[80px]">
              <div className="text-2xl font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground">Minut</div>
            </div>
            <div className="bg-primary/5 rounded-lg px-4 py-2 min-w-[80px]">
              <div className="text-2xl font-bold">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground">Sekund</div>
            </div>
          </div>
        </motion.div>

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
  );
}

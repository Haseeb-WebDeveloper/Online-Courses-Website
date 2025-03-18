"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/sho.tradez?igsh=MXFqbzE5a3JzaDZyeQ==",
    followers: "7.5K+",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@sh0kingg",
    followers: "2.5K+",
  },
];

export function AboutSection() {
  return (
    <section className="relative py-8 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      <div className="max-w-[2350px] mx-auto px-4 lg:px-12 relative">
        {/* Header with overlap effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-8"
        >
          <span className="inline-block text-primary font-medium text-sm tracking-wider mb-2">
            O Mnie
          </span>
          <h2 className="text-5xl sm:text-6xl font-custom mb-2">
            Cześć, jestem Sho
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 lg:gap-12 gap-4 items-start">
          {/* Left Column - Image and Social */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full w-full"
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            
            {/* Main image container */}
            <div className="relative rounded-md overflow-hidden h-[350px] lg:h-full w-full mb-8">
              <Image
                src="/profile-2.jpg"
                alt="Sho"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 h-full w-full"
              />
                 {/* Social links with modern design */}
            <div className="absolute bottom-4 left-0 grid grid-cols-2 gap-4 w-full px-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-xl p-4 hover:bg-primary/5 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <social.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{social.label}</span>
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {social.followers}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            </div>

           
          </motion.div>

          {/* Right Column - Content with Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Timeline entries */}
            <div className="relative border-l-2 border-primary/20 pl-8 space-y-12">
              <div className="relative">
                <div className="absolute -left-[2.1rem] top-0 w-4 h-4 rounded-full bg-primary/20">
                  <div className="absolute inset-1 rounded-full bg-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Początki E-commerce</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Moja przygoda z e-commerce rozpoczęła się w 2020 roku, kiedy,
                  mając zaledwie 16 lat, postanowiłem zainwestować w rozwój
                  swojego biznesu online. Początkowo skupiłem się na
                  dropshippingu, gdzie dzięki ciężkiej pracy i eksperymentowaniu z
                  różnymi strategiami, zbudowałem skuteczną markę.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[2.1rem] top-0 w-4 h-4 rounded-full bg-primary/20">
                  <div className="absolute inset-1 rounded-full bg-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trading Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Równolegle, w 2022 roku, rozpocząłem swoją drogę w tradingu,
                  szczególnie w day tradingu. Poświęciłem wiele godzin na naukę
                  analizy rynkowej, strategii handlowych oraz zarządzania ryzykiem.
                  Dziś skutecznie analizuję rynki finansowe i osiągam stabilne wyniki.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[2.1rem] top-0 w-4 h-4 rounded-full bg-primary/20">
                  <div className="absolute inset-1 rounded-full bg-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Osiągnięcia</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dzięki konsekwencji i wytrwałości, w wieku 18 lat osiągnąłem
                  pierwszy milion złotych przychodu z e-commerce, a także znaczące
                  wyniki w tradingu. Moje kursy oparte są na sprawdzonych metodach,
                  które przyniosły mi sukces w obu dziedzinach.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
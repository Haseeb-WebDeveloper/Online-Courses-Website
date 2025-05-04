"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSAPButton } from "@/components/ui/gsap-button";
import {
  Users,
  Star,
  TrendingUp,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import HeroVideoDialog from "../magicui/hero-video-dialog";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    label: "Aktywnych Studentów",
    value: "300+",
    icon: Users,
    description: "Uczy się i rozwija",
  },
  {
    label: "Ocena Kursu",
    value: "4.9",
    icon: Star,
    description: "Wysoko oceniane treści",
  },
  {
    label: "Skuteczność Kursu",
    value: "94%",
    icon: TrendingUp,
    description: "Sukces",
  },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state of stats
      gsap.set(".stat-item", {
        opacity: 0,
        y: 40,
      });

      // Stagger animation for stats with better trigger settings
      const statsAnimation = gsap.to(".stat-item", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none none",
          once: true, // Only play once
          markers: false, // Set to true for debugging
        },
      });

      return () => {
        statsAnimation.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-12 pb-24 md:py-20 overflow-hidden"
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" /> */}
      {/* <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] overflow-hidden bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" /> */}

      {/* Content Container */}
      <div className="max-w-[2350px] mx-auto px-6">
        <div className=" text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-4xl md:text-6xl font-custom max-w-6xl mx-auto leading-normal ">
              <span className="">
              Osiągnij wymarzoną wolność finansowa dzięki sprawdzonym strategiom
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto"
            >
              Bez zbędnych informacji, samo mięso. Tylko sprawdzone strategie przetestowane przez setki ludzi
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto"
            >
              Sprawdź Kursy Zrób Wpływ
            </motion.p>
          </div>

          {/* video dialog */}
          <div className="relative max-w-6xl mx-auto">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/aGadsVOWCAQ"
              thumbnailSrc="/thumbnail.jpg"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/aGadsVOWCAQ"
              thumbnailSrc="/thumbnail.jpg"
              thumbnailAlt="Hero Video"
            />
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <GSAPButton
              variant="mainPrimary"
              href="https://t.me/sh0trading"
              className="text-base py-4 px-6 flex items-center gap-2"
            >
              Join Telegram <Send className="h-5 w-5" />
            </GSAPButton>
            <GSAPButton
              variant="mainPrimary"
              href="https://discord.com/invite/jBJ7W4NTta"
              className="text-base py-4 px-6 flex items-center gap-2"
            >
              Join Discord <FaDiscord className="h-5 w-5" />
            </GSAPButton>
          </motion.div>

          {/* Stats */}
          <div className="relative z-10 pt-6 font-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col lg:flex-row justify-center gap-x-12 gap-y-8 md:gap-x-20"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center space-y-2">
                  <div className="relative">
                    <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

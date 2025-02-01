"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Instagram, Youtube, Users2, Trophy, Target } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "#",
    followers: "7.5K+"
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "#",
    followers: "2.5K+"
  }
]

const achievements = [
  {
    icon: Users2,
    title: "Community",
    description: "Join an exclusive network of successful entrepreneurs"
  },
  {
    icon: Trophy,
    title: "Track Record",
    description: "Students consistently achieving 6-figure results"
  },
  {
    icon: Target,
    title: "Clear Path",
    description: "Step-by-step roadmap to online success"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.span 
                variants={itemVariants}
                className="block text-sm uppercase tracking-wider text-primary/60"
              >
                About Me
              </motion.span>
              
              <motion.h2 
                variants={itemVariants}
                className="block text-4xl md:text-5xl font-custom"
              >
                Hi, I'm Sho B
              </motion.h2>

              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  An entrepreneur who has built multiple profitable online businesses. Through years of experience, I've cracked the code to success in dropshipping, trading, and high-income online businesses.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I know what works—and more importantly, what doesn't work. My courses are designed to cut out the noise and give you a clear, step-by-step roadmap to success.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {socialLinks.map((social) => (
                  <Link 
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{social.label}</span>
                    <span className="text-sm font-bold text-primary">{social.followers}</span>
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {achievements.map((achievement) => (
              <motion.div 
                key={achievement.title}
                variants={itemVariants}
              >
                <div className="relative p-6 rounded-xl border border-primary/10 bg-background/80 backdrop-blur-sm hover:border-primary/20 transition-all duration-500 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] to-primary/[0.02] rounded-xl" />
                  <div className="relative flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                        <achievement.icon className="w-6 h-6 text-primary/60 group-hover:text-primary/80 transition-colors duration-500" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-500">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
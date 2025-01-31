"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GSAPButton } from "@/components/ui/gsap-button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight, Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [hoveredPath, setHoveredPath] = React.useState("/")
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative"
      >
        {/* Gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        {/* Navbar Content */}
        <nav className="max-w-[2350px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative flex items-center gap-2 font-custom text-xl"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
              <span className="relative bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Course
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/50 backdrop-blur-lg border border-primary/5 p-1 rounded-full">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseOver={() => setHoveredPath(item.href)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm transition-colors",
                  "text-muted-foreground hover:text-primary"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover Effect */}
                {hoveredPath === item.href && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-primary/[0.05] rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <GSAPButton
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </GSAPButton>

            {/* CTA Button */}
            <GSAPButton 
              variant="primary" 
              className="hidden sm:inline-flex"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </GSAPButton>

            {/* Mobile Menu Button */}
            <GSAPButton 
              variant="ghost"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </GSAPButton>
          </div>
        </nav>
      </motion.div>
    </header>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { GSAPButton } from "@/components/ui/gsap-button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Courses", href: "courses" },
  { name: "Stories", href: "stories" },
]

export function Navbar() {
  const [hoveredPath, setHoveredPath] = React.useState("/")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  
  // Close mobile menu when clicking a link
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust this value based on your needs
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="relative w-full z-50">
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
        {/* <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" /> */}
        
        {/* Navbar Content */}
        <nav className="max-w-[2350px] mx-auto px-6 lg:px-12 pt-5 pb-2 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative flex items-center gap-2 font-custom text-xl"
          >
            <div className="relative">
             <Image src="/logo.png" alt="logo" width={100} height={100} className="w-16 h-16" />
             </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/50 backdrop-blur-lg border border-primary/5 p-1 rounded-full">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                  "px-4 py-2 text-sm transition-colors hover:text-primary rounded-full",
                  hoveredPath === `#${item.href}`
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
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
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </GSAPButton>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                onClick={handleMobileNavClick}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed right-0 top-0 bottom-0 w-full bg-secondary/50 backdrop-blur-xl border-l border-primary/10 z-50"
              >
                {/* Close Button */}
                <button
                  onClick={handleMobileNavClick}
                  className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col h-[100vh] bg-background">
                  {/* Mobile Navigation Links */}
                  <div className="flex-1 px-8 pt-24 pb-8 space-y-2 bg-background">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={`#${item.href}`}
                        onClick={(e) => handleScroll(e, item.href)}
                        className={cn(
                          "block px-4 py-4 text-lg font-medium rounded-lg hover:bg-primary/5 transition-colors"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="p-8 bg-background">
                    <GSAPButton variant="mainPrimary" className="w-full py-6 text-lg">
                      Get Started <ArrowRight className="w-5 h-5" />
                    </GSAPButton>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}

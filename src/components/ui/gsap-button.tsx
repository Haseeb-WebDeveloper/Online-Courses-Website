"use client"

import * as React from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface GSAPButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "mainPrimary" | "ghost"
  href?: string
}

export const GSAPButton = React.forwardRef<HTMLButtonElement, GSAPButtonProps>(
  ({ children, className, variant = "primary", href, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const rippleRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const button = buttonRef.current
      const ripple = rippleRef.current
      
      if (!button || !ripple) return
      
      // Initially hide the ripple
      gsap.set(ripple, { scale: 0, opacity: 0 })
      
      const ctx = gsap.context(() => {
        // Hover animation
        const hoverAnimation = gsap.to(button, {
          scale: 1.02,
          duration: 0.2,
          ease: "power2.out",
          paused: true
        })

        // Click animation
        const createRipple = (e: MouseEvent) => {
          const rect = button.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          
          // Reset ripple position and make it visible
          gsap.set(ripple, {
            x: x,
            y: y,
            scale: 0,
            opacity: 0.5,
          })

          // Animate the click effect
          gsap.timeline()
            .to(button, {
              scale: 0.97,
              duration: 0.15,
              ease: "power2.out",
            })
            .to(ripple, {
              scale: 4,
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => {
                // Hide ripple after animation
                gsap.set(ripple, { scale: 0, opacity: 0 })
              }
            }, "<")
            .to(button, {
              scale: 1,
              duration: 0.2,
              ease: "elastic.out(1, 0.5)",
            }, "-=0.3")
        }

        button.addEventListener("mouseenter", () => hoverAnimation.play())
        button.addEventListener("mouseleave", () => hoverAnimation.reverse())
        button.addEventListener("mousedown", createRipple)

        return () => {
          button.removeEventListener("mouseenter", () => hoverAnimation.play())
          button.removeEventListener("mouseleave", () => hoverAnimation.reverse())
          button.removeEventListener("mousedown", createRipple)
          hoverAnimation.kill()
        }
      })

      return () => ctx.revert()
    }, [variant])

    const ButtonWrapper = href ? Link : 'div'

    return (
      <Link href={href || ""}>
        <button
          ref={buttonRef}
          className={cn(
            "relative inline-flex items-center justify-center overflow-hidden transition-colors",
            variant === "primary" && 
              "bg-primary text-primary-foreground h-10 px-6 rounded-full font-medium hover:bg-primary/90",
            variant === "mainPrimary" && 
              "bg-primary text-primary-foreground h-12 px-6 rounded-full font-medium hover:bg-primary/90",
            variant === "ghost" && 
              "text-primary hover:bg-primary/5 h-10 w-10 rounded-full flex items-center justify-center",
            className
          )}
          {...props}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {children}
          </span>
          <div
            ref={rippleRef}
            className={cn(
              "absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none opacity-0",
              variant === "primary" ? "bg-white/30" : "bg-primary/20"
            )}
          />
        </button>
      </Link>
    )
  }
)

GSAPButton.displayName = "GSAPButton"
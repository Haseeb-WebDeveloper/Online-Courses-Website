"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  Home, 
  GraduationCap, 
  Users, 
  BookOpen, 
  MessageCircle,
  ArrowRight,
  Menu,
  X
} from "lucide-react"
import { useState } from "react"
import { GSAPButton } from "../ui/gsap-button"

const menuItems = [
  {
    name: "Home",
    icon: Home,
    href: "/",
  },
  {
    name: "About",
    icon: Users,
    href: "#about",
  },
  {
    name: "Courses",
    icon: GraduationCap,
    href: "#courses",
  },
  {
    name: "Success Stories",
    icon: BookOpen,
    href: "#testimonials",
  },
  {
    name: "Community",
    icon: MessageCircle,
    href: "#community",
  },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 top-6 z-50 rounded-full p-3 bg-primary/5 hover:bg-primary/10 transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 20 }}
        className={cn(
          "fixed left-0 top-0 bottom-0 z-50 w-[300px]",
          "bg-secondary/50 backdrop-blur-xl border-r border-primary/10",
          "flex flex-col"
        )}
      >
        <div className="flex flex-col flex-1 gap-2 px-6 pt-24">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 px-4 py-4 rounded-xl transition-colors",
                  "hover:bg-primary/5 group",
                  isActive && "bg-primary/5 text-primary"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )} />
                <span className={cn(
                  "text-base font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                )}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="p-6 border-t border-primary/10">
          <GSAPButton variant="mainPrimary" className="w-full">
          Rozpocznij <ArrowRight className="w-5 h-5" />
          </GSAPButton>
        </div>
      </motion.div>
    </>
  )
} 
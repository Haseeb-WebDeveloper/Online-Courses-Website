"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Community", href: "#" },
      { label: "Contact", href: "#" },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ]
  }
]

const socialLinks = [
  { icon: Github, href: "#", label: "Github" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground/[0.01]">
      <div className="relative max-w-[2350px] mx-auto px-6 lg:px-4">
        <div className="py-8">
        <h1 className="text-[8vw] font-custom text-center">We are diffrent</h1>
        </div>
        {/* Bottom Bar */}
        <div className=" py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
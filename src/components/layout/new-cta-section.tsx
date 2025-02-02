"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MessageSquare, User } from "lucide-react"
import { GSAPButton } from "../ui/gsap-button"
import { cn } from "@/lib/utils"

export function NewCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to send message")

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-32 bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-[2350px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-custom">
                Secure Your Spot Now – Limited Availability
              </h2>
              <p className="text-lg text-muted-foreground">
                This is NOT a typical online course. This is an exclusive mentorship opportunity, 
                and I only take on a limited number of students to ensure maximum results.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-2 text-sm"
            >
              {[
                "Payment is 100% Secure via STRIPE - Your investment is safe",
                "Instant Access - Start learning as soon as you enroll",
                "No Risk, Just Results - The only way to fail is to not take action",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 rounded-xl"
                >
                  <span className="text-md">🔒</span>
                  <span className="text-muted-foreground text-base">{feature}</span>
                </div>

              ))}
            </motion.div>

            {/* Call to Action Text */}
           
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl border border-primary/10 bg-background/80 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-2">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-lg bg-secondary/50",
                        "border border-primary/10 focus:border-primary/20",
                        "text-foreground placeholder:text-muted-foreground",
                        "transition-colors pl-11"
                      )}
                      placeholder="Enter your name"
                    />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-lg bg-secondary/50",
                        "border border-primary/10 focus:border-primary/20",
                        "text-foreground placeholder:text-muted-foreground",
                        "transition-colors pl-11"
                      )}
                      placeholder="Enter your email"
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={cn(
                        "w-full px-4 py-3 rounded-lg bg-secondary/50",
                        "border border-primary/10 focus:border-primary/20",
                        "text-foreground placeholder:text-muted-foreground",
                        "transition-colors pl-11 resize-none"
                      )}
                      placeholder="Your message"
                    />
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Submit Button */}
                <GSAPButton
                  type="submit"
                  variant="mainPrimary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </GSAPButton>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "text-sm text-center",
                      submitStatus.type === "success"
                        ? "text-green-500"
                        : "text-red-500"
                    )}
                  >
                    {submitStatus.message}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
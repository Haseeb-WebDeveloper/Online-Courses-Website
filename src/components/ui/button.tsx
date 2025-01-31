import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset]",
        
        glow: 
          "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 overflow-hidden",
        
        outline:
          "border-2 border-primary/10 hover:border-primary/20 bg-primary/[0.02] hover:bg-primary/[0.05] text-foreground shadow-[inset_0_0_0_0_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_40px_0_rgba(255,255,255,0.05)]",
        
        ghost: 
          "text-foreground hover:bg-accent/20 before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        
        soft:
          "bg-primary/10 text-primary hover:bg-primary/20 backdrop-blur-sm",
        
        glass:
          "bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/20 shadow-[0_0_1px_rgba(255,255,255,0.5)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition",
        
        neon: 
          "bg-transparent border-2 border-primary text-primary shadow-[0_0_20px_rgba(var(--primary),0.3),inset_0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_25px_rgba(var(--primary),0.5),inset_0_0_35px_rgba(var(--primary),0.5)] hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-lg",
        sm: "h-9 px-4 text-xs rounded-md",
        lg: "h-12 px-8 text-base rounded-xl",
        xl: "h-14 px-10 text-lg rounded-2xl",
        icon: "h-11 w-11 rounded-lg",
        pill: "h-11 px-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

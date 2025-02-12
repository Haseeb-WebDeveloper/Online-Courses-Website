"use client"

import { useState } from "react"
import { AchievementsSection } from "./achievements-section"
import { AchievementsCarousel } from "./achievements-carousel"
import { Button } from "../ui/button"
import { Grid2X2, SlidersHorizontal } from "lucide-react"

export function AchievementsWrapper() {
  const [view, setView] = useState<"grid" | "carousel">("grid")

  return (
    <div className="relative">
      {/* View Toggle */}
      <div className="absolute top-8 right-8 z-10 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setView("grid")}
          className={view === "grid" ? "bg-primary/10" : ""}
        >
          <Grid2X2 className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setView("carousel")}
          className={view === "carousel" ? "bg-primary/10" : ""}
        >
          <SlidersHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Content */}
      {view === "grid" ? <AchievementsSection /> : <AchievementsCarousel />}
    </div>
  )
} 
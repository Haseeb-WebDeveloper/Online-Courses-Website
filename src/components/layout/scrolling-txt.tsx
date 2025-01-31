"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import React from "react";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="w-full pb-36 pt-4">
      <div className="">
        <div className="w-full mx-auto">
          <div
            className={cn(
              "rounded-xl w-full ",
              "",
              "",
              "flex items-center justify-center"
            )}
          >
            <VelocityScroll
              text="Haseeb Ahmed Raza Khan"
              default_velocity={5}
              className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] pointer-events-auto"
            />
          </div>
        </div>
      </div>

      <div className="" aria-hidden="true" />
    </div>
  );
}

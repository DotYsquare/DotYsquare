"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative rounded-full text-foreground/70 hover:text-brand hover:bg-brand/10 ${className ?? ""}`}
    >
      {/* Avoid hydration mismatch: render a neutral icon until mounted */}
      {mounted ? (
        isDark ? (
          <Sun className="h-5 w-5 transition-transform duration-300" />
        ) : (
          <Moon className="h-5 w-5 transition-transform duration-300" />
        )
      ) : (
        <Sun className="h-5 w-5 opacity-0" />
      )}
    </Button>
  )
}

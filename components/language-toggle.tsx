"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-1">
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "አማርኛ" : "English"}</span>
    </Button>
  )
}


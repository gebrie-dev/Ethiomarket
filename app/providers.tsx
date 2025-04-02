"use client"

import type React from "react"

import { LanguageProvider } from "@/hooks/use-language"
import { CartProvider } from "@/hooks/use-cart"
import { Toaster } from "@/components/ui/toaster"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>
        {children}
        <Toaster />
      </CartProvider>
    </LanguageProvider>
  )
}


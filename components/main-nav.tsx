"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";
import { Cart } from "@/components/cart";
import { useLanguage } from "@/hooks/use-language";
import { Logo } from "@/components/logo";

export function MainNav() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto text-blue-600" />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {language === "en" ? "Home" : "መነሻ"}
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {language === "en" ? "Dashboard" : "ዳሽቦርድ"}
            </Link>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5 mr-1" />
              <span>{language === "en" ? "Cart" : "ጋሪ"}</span>
            </Button>
            <LanguageToggle />
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="mr-2"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === "en" ? "Home" : "መነሻ"}
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {language === "en" ? "Dashboard" : "ዳሽቦርድ"}
              </Link>
              <div className="px-2 py-1">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </header>
  );
}

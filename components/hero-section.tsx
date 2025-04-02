"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {language === "en" ? "Discover Ethiopian Products Online" : "የኢትዮጵያ ምርቶችን በመስመር ላይ ይግዙ"}
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            {language === "en"
              ? "Shop directly from local Ethiopian vendors, artisans and farmers"
              : "ከአካባቢያዊ ኢትዮጵያዊ ነጋዴዎች፣ አርቲስቶች እና አርሶ አደሮች በቀጥታ ይግዙ"}
          </p>

          <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto mb-8">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder={language === "en" ? "Search for products..." : "ምርቶችን ይፈልጉ..."}
                className="pl-10 h-12 w-full bg-white text-gray-800 rounded-l-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" className="h-12 px-6 rounded-l-none bg-orange-500 hover:bg-orange-600">
              {language === "en" ? "Search" : "ፈልግ"}
            </Button>
          </form>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button className="bg-green-600 hover:bg-green-700">
                {language === "en" ? "Become a Vendor" : "ሻጭ ይሁኑ"}
              </Button>
            </Link>
            <Link href="#featured-stores">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                {language === "en" ? "Explore Stores" : "መደብሮችን ይመልከቱ"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


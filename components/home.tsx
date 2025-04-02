"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/hooks/use-language"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCategories } from "@/components/featured-categories"
import { FeaturedStores } from "@/components/featured-stores"

// Sample data for stores
const stores = [
  {
    id: "1",
    name: "Abebe's Coffee",
    description: "Fresh Ethiopian coffee directly from farmers",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    name: "Tigist's Spices",
    description: "Traditional Ethiopian spices and herbs",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    name: "Bekele's Crafts",
    description: "Handmade Ethiopian crafts and souvenirs",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    name: "Meron's Textiles",
    description: "Traditional Ethiopian textiles and clothing",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    name: "Dawit's Electronics",
    description: "Quality electronics at affordable prices",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    name: "Selam's Bakery",
    description: "Fresh bread and traditional Ethiopian pastries",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const { language } = useLanguage()

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <MainNav />
      <HeroSection />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <FeaturedCategories />
        <FeaturedStores />

        <div id="all-stores" className="py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{language === "en" ? "All Stores" : "ሁሉም መደብሮች"}</h2>

          <div className="relative max-w-lg mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder={language === "en" ? "Search stores..." : "መደብሮችን ይፈልጉ..."}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
              <div key={store.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="h-48 relative">
                  <Image src={store.image || "/placeholder.svg"} alt={store.name} fill className="object-cover" />
                </div>
                <div className="p-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">{store.name}</h2>
                  <p className="text-gray-600 mt-2">{store.description}</p>
                </div>
                <Link href={`/store/${store.id}`} className="mt-auto">
                  <Button className="w-full rounded-t-none bg-blue-600 hover:bg-blue-700">
                    {language === "en" ? "Visit Store" : "መደብር ይጎብኙ"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


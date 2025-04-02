"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"

type FeaturedStore = {
  id: string
  name: string
  description: string
  image: string
  rating: number
  products: number
}

const featuredStores: FeaturedStore[] = [
  {
    id: "1",
    name: "Abebe's Coffee",
    description: "Premium coffee directly from Ethiopian farmers",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    products: 12,
  },
  {
    id: "2",
    name: "Tigist's Spices",
    description: "Traditional Ethiopian spices and herbs",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    products: 24,
  },
  {
    id: "3",
    name: "Habesha Crafts",
    description: "Handmade Ethiopian crafts and souvenirs",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    products: 18,
  },
  {
    id: "4",
    name: "Addis Textiles",
    description: "Traditional Ethiopian textiles and clothing",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    products: 30,
  },
]

export function FeaturedStores() {
  const { language } = useLanguage()

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {language === "en" ? "Featured Stores" : "ተለይተው የቀረቡ መደብሮች"}
        </h2>
        <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <span className="text-sm font-medium">{language === "en" ? "View All" : "ሁሉንም ይመልከቱ"}</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredStores.map((store) => (
          <div key={store.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="h-40 relative">
              <Image src={store.image || "/placeholder.svg"} alt={store.name} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white font-semibold">{store.name}</h3>
              </div>
            </div>
            <div className="p-4 flex-1">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-700">{store.rating}</span>
                </div>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-gray-600">
                  {store.products} {language === "en" ? "products" : "ምርቶች"}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{store.description}</p>
              <Link href={`/store/${store.id}`} className="mt-auto">
                <Button variant="outline" className="w-full">
                  {language === "en" ? "Visit Store" : "መደብር ይጎብኙ"}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { useCart } from "@/hooks/use-cart"
import { Footer } from "@/components/footer"

// Sample stores data
const stores = [
  {
    id: "1",
    name: "Abebe's Coffee",
    description: "Fresh Ethiopian coffee directly from farmers",
    products: [
      {
        id: "101",
        name: "Yirgacheffe Coffee",
        price: 120,
        description: "Premium coffee from Yirgacheffe region",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "102",
        name: "Sidamo Coffee",
        price: 110,
        description: "Rich and aromatic coffee from Sidamo",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "103",
        name: "Harar Coffee",
        price: 130,
        description: "Bold and distinctive coffee from Harar",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "2",
    name: "Tigist's Spices",
    description: "Traditional Ethiopian spices and herbs",
    products: [
      {
        id: "201",
        name: "Berbere",
        price: 85,
        description: "Traditional Ethiopian spice blend",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "202",
        name: "Mitmita",
        price: 75,
        description: "Spicy Ethiopian chili powder",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "203",
        name: "Korerima",
        price: 60,
        description: "Ethiopian cardamom",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
]

export function Store({ id }: { id: string }) {
  const { language } = useLanguage()
  const { addToCart } = useCart()
  const [store, setStore] = useState<(typeof stores)[0] | null>(null)

  useEffect(() => {
    // Find the store by ID from our sample data
    const foundStore = stores.find((s) => s.id === id)
    if (foundStore) {
      setStore(foundStore)
    }
  }, [id])

  if (!store) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <MainNav />
        <main className="container mx-auto px-4 py-6 flex-grow">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {language === "en" ? "Store not found" : "መደብር አልተገኘም"}
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <MainNav />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">{store.name}</h1>
          <p className="text-gray-600">{store.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {store.products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-48 relative">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-4 flex-1">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-green-600 font-medium mt-1">{product.price} ETB</p>
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
              </div>
              <Button
                className="mt-auto w-full rounded-t-none bg-orange-500 hover:bg-orange-600"
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    storeId: store.id,
                    storeName: store.name,
                  })
                }
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {language === "en" ? "Add to Cart" : "ወደ ጋሪ ያክሉ"}
              </Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}


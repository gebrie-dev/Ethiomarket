"use client"

import type React from "react"
import Link from "next/link"
import { ChevronRight, Coffee, ShoppingBag, Utensils, Brush, ShoppingBasket, Leaf } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { Badge } from "@/components/ui/badge"

type Category = {
  id: string
  name: string
  nameAm: string
  icon: React.ElementType
  count: number
}

const categories: Category[] = [
  {
    id: "coffee",
    name: "Coffee & Tea",
    nameAm: "ቡና እና ሻይ",
    icon: Coffee,
    count: 24,
  },
  {
    id: "spices",
    name: "Spices & Herbs",
    nameAm: "ቅመማ ቅመሞች እና አረቦች",
    icon: Utensils,
    count: 18,
  },
  {
    id: "crafts",
    name: "Handicrafts",
    nameAm: "የእጅ ስራዎች",
    icon: Brush,
    count: 15,
  },
  {
    id: "textiles",
    name: "Textiles",
    nameAm: "ጨርቃጨርቅ",
    icon: ShoppingBasket,
    count: 12,
  },
  {
    id: "produce",
    name: "Fresh Produce",
    nameAm: "ትኩስ ምርቶች",
    icon: Leaf,
    count: 10,
  },
  {
    id: "other",
    name: "Other Items",
    nameAm: "ሌሎች ዕቃዎች",
    icon: ShoppingBag,
    count: 30,
  },
]

export function FeaturedCategories() {
  const { language } = useLanguage()

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{language === "en" ? "Categories" : "ምድቦች"}</h2>
        <Link href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <span className="text-sm font-medium">{language === "en" ? "View All" : "ሁሉንም ይመልከቱ"}</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-3 bg-blue-100 rounded-full mb-2">
              <category.icon className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-gray-800 text-center font-medium mb-1">
              {language === "en" ? category.name : category.nameAm}
            </span>
            <Badge variant="outline" className="bg-gray-100">
              {category.count}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check, Upload } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/hooks/use-language"
import { Footer } from "@/components/footer"

export function AddProduct() {
  const router = useRouter()
  const { language } = useLanguage()
  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setPhoto(file)
      setPhotoPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the product creation logic
    console.log({ productName, price, description, photo })
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <MainNav />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <Button
          variant="ghost"
          className="mb-4 text-gray-600 hover:text-blue-600"
          onClick={() => router.push("/dashboard")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === "en" ? "Back to Dashboard" : "ወደ ዳሽቦርድ ተመለስ"}
        </Button>

        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
            {language === "en" ? "Add Product" : "ምርት ያክሉ"}
          </h1>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="productName">{language === "en" ? "Product Name" : "የምርት ስም"}</Label>
                <Input
                  id="productName"
                  type="text"
                  placeholder={language === "en" ? "e.g., Coffee" : "ለምሳሌ፣ ቡና"}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="price">{language === "en" ? "Price (ETB)" : "ዋጋ (ብር)"}</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="100"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">{language === "en" ? "Description" : "መግለጫ"}</Label>
                <Textarea
                  id="description"
                  placeholder={language === "en" ? "e.g., Fresh Ethiopian coffee" : "ለምሳሌ፣ ትኩስ የኢትዮጵያ ቡና"}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-24"
                />
              </div>

              <div>
                <Label htmlFor="photo">{language === "en" ? "Product Photo" : "የምርት ፎቶ"}</Label>
                <div className="mt-1 flex items-center">
                  {photoPreview ? (
                    <div className="relative w-full h-40 mb-4">
                      <img
                        src={photoPreview || "/placeholder.svg"}
                        alt="Product preview"
                        className="object-cover w-full h-full rounded-md"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setPhoto(null)
                          setPhotoPreview(null)
                        }}
                      >
                        {language === "en" ? "Remove" : "አስወግድ"}
                      </Button>
                    </div>
                  ) : (
                    <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-md shadow-sm border border-gray-300 cursor-pointer hover:bg-gray-50">
                      <Upload className="h-8 w-8 mb-2" />
                      <span className="text-sm font-medium">
                        {language === "en" ? "Click to upload a photo" : "ፎቶ ለመጫን ይጫኑ"}
                      </span>
                      <input id="photo" type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                    </label>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Check className="h-4 w-4 mr-2" />
                {language === "en" ? "Save Product" : "ምርት ያስቀምጡ"}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


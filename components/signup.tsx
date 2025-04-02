"use client"

import type React from "react"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/hooks/use-language"
import { Footer } from "@/components/footer"

export function Signup() {
  const [isLogin, setIsLogin] = useState(false)
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [storeName, setStoreName] = useState("")
  const [storeDescription, setStoreDescription] = useState("")
  const { language } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the signup/login logic
    console.log({ phone, name, storeName, storeDescription })
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <MainNav />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
            {isLogin
              ? language === "en"
                ? "EthioMarket - Login"
                : "ኢትዮማርኬት - ይግቡ"
              : language === "en"
                ? "EthioMarket - Join Us"
                : "ኢትዮማርኬት - ይቀላቀሉን"}
          </h1>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="phone">{language === "en" ? "Phone Number" : "ስልክ ቁጥር"}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="09xx-xxx-xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {!isLogin && (
                <>
                  <div>
                    <Label htmlFor="name">{language === "en" ? "Your Name" : "ስምዎ"}</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={language === "en" ? "e.g., Abebe" : "ለምሳሌ፣ አበበ"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="storeName">{language === "en" ? "Store Name" : "የመደብር ስም"}</Label>
                    <Input
                      id="storeName"
                      type="text"
                      placeholder={language === "en" ? "e.g., Abebe's Coffee" : "ለምሳሌ፣ የአበበ ቡና"}
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="storeDescription">{language === "en" ? "Store Description" : "የመደብር መግለጫ"}</Label>
                    <Input
                      id="storeDescription"
                      type="text"
                      placeholder={language === "en" ? "Describe your store" : "መደብርዎን ይግለጹ"}
                      value={storeDescription}
                      onChange={(e) => setStoreDescription(e.target.value)}
                    />
                  </div>
                </>
              )}

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {isLogin ? (language === "en" ? "Log In" : "ይግቡ") : language === "en" ? "Sign Up" : "ይመዝገቡ"}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:underline">
                {isLogin
                  ? language === "en"
                    ? "Need an account? Sign Up"
                    : "አካውንት ያስፈልግዎታል? ይመዝገቡ"
                  : language === "en"
                    ? "Already have an account? Log In"
                    : "አካውንት አለዎት? ይግቡ"}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


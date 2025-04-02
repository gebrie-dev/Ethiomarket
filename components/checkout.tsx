"use client"

import type React from "react"

import { useState } from "react"
import { Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/hooks/use-language"
import { useToast } from "@/hooks/use-toast"

interface CheckoutProps {
  onClose: () => void
  onComplete: () => void
  totalPrice: number
}

export function Checkout({ onClose, onComplete, totalPrice }: CheckoutProps) {
  const { language } = useLanguage()
  const { toast } = useToast()
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: language === "en" ? "Order Placed Successfully" : "ትዕዛዝ በተሳካ ሁኔታ ተደርጓል",
        description:
          language === "en"
            ? "Your order has been placed. You will receive an SMS confirmation."
            : "ትዕዛዝዎ ተቀምጧል። የኤስኤምኤስ ማረጋገጫ ይደርስዎታል።",
      })
      onComplete()
    }, 1500)
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-xl font-bold text-blue-600">{language === "en" ? "Checkout" : "መክፈያ"}</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-4">
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

            <div>
              <Label htmlFor="address">{language === "en" ? "Delivery Address" : "የመላኪያ አድራሻ"}</Label>
              <Input
                id="address"
                type="text"
                placeholder={language === "en" ? "e.g., Bole, Addis Ababa" : "ለምሳሌ፣ ቦሌ፣ አዲስ አበባ"}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="py-2 border-t border-b">
              <div className="flex justify-between items-center">
                <span className="font-medium">{language === "en" ? "Total:" : "ጠቅላላ:"}</span>
                <span className="text-xl font-bold text-green-600">{totalPrice} ETB</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {language === "en" ? "Payment: Cash on Delivery" : "ክፍያ: በእጅ ለእጅ ክፍያ"}
              </p>
            </div>

            <div className="space-y-2">
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {language === "en" ? "Processing..." : "በሂደት ላይ..."}
                  </span>
                ) : (
                  <>
                    <Phone className="h-4 w-4 mr-2" />
                    {language === "en" ? "Confirm Order" : "ትዕዛዝ ያረጋግጡ"}
                  </>
                )}
              </Button>

              <Button type="button" variant="outline" className="w-full" onClick={onClose} disabled={isSubmitting}>
                {language === "en" ? "Cancel" : "ይቅር"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


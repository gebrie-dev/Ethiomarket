"use client"

import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { useCart } from "@/hooks/use-cart"

export function Cart({ onClose }: { onClose: () => void }) {
  const { language } = useLanguage()
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart()

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            {language === "en" ? "Your Cart" : "የእርስዎ ጋሪ"} ({totalItems})
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <ShoppingBag className="h-12 w-12 mx-auto mb-3 opacity-20" />
              <p>{language === "en" ? "Your cart is empty" : "ጋሪዎ ባዶ ነው"}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border rounded-md p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.storeName}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        disabled={(item.quantity || 1) <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity || 1}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-none"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="font-medium">{item.price * (item.quantity || 1)} ETB</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between font-medium">
              <span>{language === "en" ? "Total" : "ጠቅላላ"}</span>
              <span>{totalPrice} ETB</span>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">{language === "en" ? "Checkout" : "ይክፈሉ"}</Button>
          </div>
        )}
      </div>
    </div>
  )
}


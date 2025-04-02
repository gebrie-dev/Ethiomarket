"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Pencil, Trash2, ShoppingBag, Package, Settings } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { Footer } from "@/components/footer"

// Sample data
const products = [
  { id: "1", name: "Coffee", price: 100, status: "Available" },
  { id: "2", name: "Spices Mix", price: 75, status: "Available" },
  { id: "3", name: "Traditional Hat", price: 250, status: "Low Stock" },
  { id: "4", name: "Handmade Basket", price: 180, status: "Available" },
  { id: "5", name: "Ethiopian Tea", price: 60, status: "Out of Stock" },
]

const orders = [
  { id: "101", product: "Coffee", buyerPhone: "0912-345-678", status: "Pending" },
  { id: "102", product: "Spices Mix", buyerPhone: "0911-222-333", status: "Delivered" },
  { id: "103", product: "Traditional Hat", buyerPhone: "0910-555-777", status: "Processing" },
  { id: "104", product: "Coffee", buyerPhone: "0913-888-999", status: "Pending" },
  { id: "105", product: "Ethiopian Tea", buyerPhone: "0914-123-456", status: "Cancelled" },
]

export function Dashboard() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("products")

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "available":
        return "bg-green-100 text-green-800"
      case "low stock":
        return "bg-yellow-100 text-yellow-800"
      case "out of stock":
        return "bg-red-100 text-red-800"
      case "pending":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-purple-100 text-purple-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <MainNav />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
            {language === "en" ? "EthioMarket - Vendor Dashboard" : "ኢትዮማርኬት - የሻጭ ዳሽቦርድ"}
          </h1>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/add-product">
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                {language === "en" ? "Add Product" : "ምርት ያክሉ"}
              </Button>
            </Link>
            <Button variant="outline" className="w-full sm:w-auto">
              <Settings className="h-4 w-4 mr-2" />
              {language === "en" ? "Edit Store" : "መደብር ያስተካክሉ"}
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="products" className="flex items-center">
              <Package className="h-4 w-4 mr-2" />
              {language === "en" ? "Products" : "ምርቶች"}
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center">
              <ShoppingBag className="h-4 w-4 mr-2" />
              {language === "en" ? "Orders" : "ትዕዛዞች"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{language === "en" ? "Product Name" : "የምርት ስም"}</TableHead>
                      <TableHead>{language === "en" ? "Price (ETB)" : "ዋጋ (ብር)"}</TableHead>
                      <TableHead>{language === "en" ? "Status" : "ሁኔታ"}</TableHead>
                      <TableHead className="text-right">{language === "en" ? "Actions" : "ድርጊቶች"}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusColor(product.status)}>
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Link href={`/edit-product/${product.id}`}>
                              <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                                <Pencil className="h-4 w-4" />
                                <span className="sr-only">Edit</span>
                              </Button>
                            </Link>
                            <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-500 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{language === "en" ? "Order ID" : "የትዕዛዝ መታወቂያ"}</TableHead>
                      <TableHead>{language === "en" ? "Product" : "ምርት"}</TableHead>
                      <TableHead>{language === "en" ? "Buyer Phone" : "የገዢ ስልክ"}</TableHead>
                      <TableHead>{language === "en" ? "Status" : "ሁኔታ"}</TableHead>
                      <TableHead className="text-right">{language === "en" ? "Actions" : "ድርጊቶች"}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">#{order.id}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell>{order.buyerPhone}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            {language === "en" ? "Update Status" : "ሁኔታ ያዘምኑ"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}


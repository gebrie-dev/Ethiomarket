"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/use-language";
import { Logo } from "@/components/logo";

export function Footer() {
  const { language } = useLanguage();

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo className="h-10 w-10 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">
                EthioMarket
              </span>
            </div>
            <p className="text-gray-400">
              {language === "en"
                ? "Empowering Ethiopian vendors to sell online and reach more customers."
                : "የኢትዮጵያ ነጋዴዎችን በመስመር ላይ እንዲሸጡ እና ተጨማሪ ደንበኞችን እንዲያገኙ ማብቃት።"}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {language === "en" ? "Quick Links" : "ፈጣን ማገናኛዎች"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {language === "en" ? "Home" : "መነሻ"}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {language === "en" ? "About Us" : "ስለ እኛ"}
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {language === "en" ? "Become a Vendor" : "ሻጭ ይሁኑ"}
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {language === "en" ? "Help Center" : "የእርዳታ ማዕከል"}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {language === "en" ? "Terms & Conditions" : "ውሎች እና ሁኔታዎች"}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {language === "en" ? "Privacy Policy" : "የግላዊነት ፖሊሲ"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {language === "en" ? "Contact Us" : "ያግኙን"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  {language === "en"
                    ? "Bole Road, Addis Ababa, Ethiopia"
                    : "ቦሌ መንገድ፣ አዲስ አበባ፣ ኢትዮጵያ"}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400">+251 911 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400">info@ethiomarket.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {language === "en" ? "Newsletter" : "ዜና መጽሔት"}
            </h3>
            <p className="text-gray-400 mb-4">
              {language === "en"
                ? "Subscribe to receive updates and promotions."
                : "ዝማኔዎችን እና ማስታወቂያዎችን ለመቀበል ይመዝገቡ።"}
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder={language === "en" ? "Your email" : "ኢሜይልዎ"}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                {language === "en" ? "Subscribe" : "ይመዝገቡ"}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {year} EthioMarket.{" "}
            {language === "en" ? "All rights reserved." : "መብቱ በህግ የተጠበቀ ነው።"}
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm">
              {language === "en" ? "Payment Methods:" : "የክፍያ ዘዴዎች:"}
            </span>
            <div className="flex space-x-2">
              <div className="h-6 w-10 bg-gray-700 rounded flex items-center justify-center text-xs text-white">
                COD
              </div>
              <div className="h-6 w-10 bg-gray-700 rounded flex items-center justify-center text-xs text-white">
                CBE
              </div>
              <div className="h-6 w-10 bg-gray-700 rounded flex items-center justify-center text-xs text-white">
                telebirr
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

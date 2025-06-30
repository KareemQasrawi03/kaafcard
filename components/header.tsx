"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: " الرئيسية" },
    { href: "/about", label: "من نحن" },
    { href: "/partners", label: "شركاؤنا" },
    { href: "/services", label: "خدماتنا" },
    { href: "/register", label: "تسجيل" },
    // { href: "/purchase", label: "شراء" },
    // { href: "/verify", label: "التحقق" },
    { href: "/contact", label: "تواصل معنا" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+966 XX XXX XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@kaafcard.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>خصم 50% غير محدود على الخدمات الطبية</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="KAAFCARD Logo"
              width={200} 
              height={80}
              className="h-16 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            dir="rtl"
            className="hidden lg:flex items-center space-x-8 space-x-reverse"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
              <Link href="/corporate">شراكة مؤسسية</Link>
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/purchase">احصل على البطاقة</Link>
            </Button> */}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Button className="w-full mb-2 bg-blue-600 hover:bg-blue-700">
                    <Link href="/corporate">شراكة مؤسسية</Link>
                  </Button>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Link href="/purchase">احصل على البطاقة</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

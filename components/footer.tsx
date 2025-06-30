"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, MessageCircle, Send, Phone, Mail, MapPin, CreditCard } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h3>
          <p className="mb-6 opacity-90">احصل على آخر الأخبار والعروض الخاصة</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="البريد الإلكتروني" className="bg-white text-gray-900" />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              <Send className="w-4 h-4 ml-2" />
              اشتراك
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Image
                src="/logo.png"
                alt="KAAFCARD Logo"
                width={150}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-4 leading-relaxed">
                بطاقة خصم تجاري تمنح حاملها خصم 50٪ غير محدود عند زيارة شركائنا من الأطباء والمراكز والمستشفيات.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-600">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-pink-600">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-green-600">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-500">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                {[
                  { href: "/about", label: "من نحن" },
                  { href: "/services", label: "خدماتنا" },
                  { href: "/partners", label: "شركاؤنا" },
                  { href: "/register", label: "تسجيل" },
                  // { href: "/purchase", label: "شراء البطاقة" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2">
                {[
                  "إصدار بطاقات الخصم",
                  "التحقق من الاشتراك",
                  "الشراكات المؤسسية",
                  "دعم الجمعيات الخيرية",
                  "الدعم الفني",
                ].map((service) => (
                  <li key={service} className="text-gray-400 flex items-center">
                    <CreditCard className="w-4 h-4 ml-2 text-orange-500" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 ml-3 text-blue-500" />
                  <span>+966 XX XXX XXXX</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 ml-3 text-orange-500" />
                  <span>info@kaafcard.com</span>
                </div>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-5 h-5 ml-3 mt-1 text-green-500" />
                  <span>المملكة العربية السعودية</span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-medium mb-2">ساعات العمل</h5>
                <p className="text-gray-400 text-sm">
                  الأحد - الخميس: 8:00 ص - 6:00 م<br />
                  الجمعة - السبت: 10:00 ص - 4:00 م
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 KAAFCARD - مؤسسة أصيل خليل للوساطة التجارية. جميع الحقوق محفوظة.
            </p>
            {/* <div className="flex space-x-6 space-x-reverse text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                الشروط والأحكام
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-white transition-colors duration-200">
                الدعم الفني
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

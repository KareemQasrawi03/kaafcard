"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search, CheckCircle, XCircle, User, CreditCard, Calendar, Shield } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function VerifyPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState("nationalId")
  const [searchResult, setSearchResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Sample data - in real app this would come from database
  const sampleSubscriber = {
    name: "أحمد محمد العلي",
    nationalId: "1234567890",
    subscriptionNumber: "KAF-2024-001",
    photo: "/placeholder.svg?height=150&width=150",
    status: "active",
    expiryDate: "2024-12-31",
    joinDate: "2024-01-15",
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // In real app, this would be an actual API call
      if (searchQuery === "1234567890" || searchQuery === "KAF-2024-001") {
        setSearchResult(sampleSubscriber)
      } else {
        setSearchResult(null)
      }
      setIsLoading(false)
    }, 1500)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-600 bg-green-100"
      case "expired":
        return "text-red-600 bg-red-100"
      case "suspended":
        return "text-yellow-600 bg-yellow-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "نشط"
      case "expired":
        return "منتهي الصلاحية"
      case "suspended":
        return "معلق"
      default:
        return "غير معروف"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">التحقق من الاشتراك</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">تحقق من صلاحية الاشتراك</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              للشركاء والأطباء: تحقق من صلاحية اشتراك المريض قبل تطبيق الخصم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                    <Shield className="w-6 h-6 text-blue-600" />
                    بوابة التحقق الآمنة
                  </CardTitle>
                  <p className="text-gray-600 text-center">
                    أدخل الرقم الوطني أو رقم الاشتراك للتحقق من صلاحية العضوية
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSearch} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="search-query">الرقم الوطني أو رقم الاشتراك</Label>
                      <div className="relative">
                        <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="search-query"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="أدخل الرقم الوطني (1234567890) أو رقم الاشتراك (KAF-2024-001)"
                          className="pr-10"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          جاري البحث...
                        </div>
                      ) : (
                        <>
                          <Search className="w-4 h-4 ml-2" />
                          تحقق من الاشتراك
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Demo Instructions */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">للتجربة:</h4>
                    <p className="text-blue-800 text-sm">
                      استخدم الرقم الوطني: <code className="bg-blue-200 px-1 rounded">1234567890</code> أو رقم الاشتراك:{" "}
                      <code className="bg-blue-200 px-1 rounded">KAF-2024-001</code>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Search Results */}
            {searchResult && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-6 h-6" />
                      <CardTitle className="text-xl">تم العثور على المشترك</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Photo */}
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-200">
                          <Image
                            src={searchResult.photo || "/placeholder.svg"}
                            alt="صورة المشترك"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Badge className={`${getStatusColor(searchResult.status)} px-3 py-1`}>
                          {getStatusText(searchResult.status)}
                        </Badge>
                      </div>

                      {/* Details */}
                      <div className="md:col-span-2 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <User className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">اسم المشترك</p>
                              <p className="font-semibold">{searchResult.name}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">رقم الاشتراك</p>
                              <p className="font-semibold">{searchResult.subscriptionNumber}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">تاريخ الانتهاء</p>
                              <p className="font-semibold">{searchResult.expiryDate}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">تاريخ الانضمام</p>
                              <p className="font-semibold">{searchResult.joinDate}</p>
                            </div>
                          </div>
                        </div>

                        {searchResult.status === "active" && (
                          <Alert className="border-green-200 bg-green-50">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                              <strong>الاشتراك نشط!</strong> يحق للمشترك الحصول على خصم 50% على الخدمات الطبية.
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* No Results */}
            {searchResult === null && searchQuery && !isLoading && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6 text-center">
                    <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-red-700 mb-2">لم يتم العثور على المشترك</h3>
                    <p className="text-red-600 mb-4">
                      الرقم الوطني أو رقم الاشتراك المدخل غير صحيح أو غير مسجل في النظام
                    </p>
                    <Alert className="border-red-200 bg-red-50">
                      <XCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        تأكد من صحة البيانات المدخلة أو تواصل مع إدارة KAAFCARD للمساعدة.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">تعليمات للشركاء</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">كيفية التحقق</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                        1
                      </span>
                      اطلب من المريض الرقم الوطني أو رقم الاشتراك
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                        2
                      </span>
                      أدخل الرقم في حقل البحث أعلاه
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                        3
                      </span>
                      تحقق من صحة البيانات والصورة
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                        4
                      </span>
                      طبق الخصم 50% إذا كان الاشتراك نشط
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">ملاحظات مهمة</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      تأكد من مطابقة الصورة مع هوية المريض
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      الخصم 50% يطبق فقط على الاشتراكات النشطة
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      لا توجد قائمة علنية، فقط تحقق فردي
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      تواصل معنا في حالة وجود مشاكل تقنية
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

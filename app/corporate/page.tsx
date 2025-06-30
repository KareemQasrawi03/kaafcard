"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Users, TrendingUp, Shield, CheckCircle, Star, Phone, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function CorporatePage() {
  const [corporateForm, setCorporateForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    employeeCount: "",
    industry: "",
    address: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Corporate partnership form:", corporateForm)
    alert("تم إرسال طلب الشراكة بنجاح! سنتواصل معك خلال 24 ساعة.")
    setCorporateForm({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      employeeCount: "",
      industry: "",
      address: "",
      message: "",
    })
  }

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "توفير في التكاليف",
      description: "خفض تكاليف الرعاية الصحية للموظفين بنسبة تصل إلى 50%",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "رعاية شاملة للموظفين",
      description: "تغطية جميع الموظفين وعائلاتهم بخدمات طبية متميزة",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "إدارة مركزية",
      description: "نظام إدارة موحد لمتابعة استخدام البطاقات والتقارير",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "خدمة مخصصة",
      description: "مدير حساب مخصص وخدمة عملاء متاحة على مدار الساعة",
    },
  ]

  const packages = [
    {
      name: "الباقة الأساسية",
      employees: "10-50 موظف",
      discount: "45%",
      features: ["خصم 45% على الخدمات الطبية", "بطاقات رقمية وفيزيائية", "تقارير شهرية", "دعم فني أساسي"],
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "الباقة المتقدمة",
      employees: "51-200 موظف",
      discount: "50%",
      features: [
        "خصم 50% على الخدمات الطبية",
        "بطاقات متعددة للعائلات",
        "تقارير مفصلة أسبوعية",
        "مدير حساب مخصص",
        "فحوصات دورية مخفضة",
      ],
      color: "from-green-500 to-green-600",
      popular: true,
    },
    {
      name: "الباقة المؤسسية",
      employees: "200+ موظف",
      discount: "55%",
      features: [
        "خصم 55% على الخدمات الطبية",
        "تغطية شاملة للعائلات",
        "تقارير يومية ولوحة تحكم",
        "فريق دعم مخصص",
        "برامج صحية وقائية",
        "استشارات طبية مجانية",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ]

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
            <Badge className="mb-4 bg-blue-100 text-blue-800">شراكة مؤسسية</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">شراكات مؤسسية متميزة</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              انضم إلى شبكة الشركات والمؤسسات التي تهتم بصحة موظفيها وتوفر لهم أفضل رعاية طبية بأسعار مخفضة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              لماذا الشراكة مع KAAFCARD؟
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم حلول شاملة للشركات والمؤسسات لرعاية صحة الموظفين
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              باقات الشراكة المؤسسية
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              اختر الباقة المناسبة لحجم مؤسستك واحتياجاتك
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`relative h-full ${pkg.popular ? "border-blue-500 shadow-lg" : ""}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-4 py-1">
                        <Star className="w-3 h-3 ml-1" />
                        الأكثر طلباً
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center text-white`}
                    >
                      <Building2 className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-gray-900 mb-2">خصم {pkg.discount}</div>
                    <p className="text-gray-600">{pkg.employees}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">ابدأ شراكتك معنا</h2>
              <p className="text-xl text-gray-600">املأ النموذج وسنتواصل معك لمناقشة أفضل الحلول لمؤسستك</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">طلب شراكة مؤسسية</CardTitle>
                    <p className="text-gray-600">املأ البيانات وسنتواصل معك خلال 24 ساعة</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">اسم الشركة/المؤسسة *</Label>
                          <Input
                            id="companyName"
                            value={corporateForm.companyName}
                            onChange={(e) => setCorporateForm({ ...corporateForm, companyName: e.target.value })}
                            placeholder="اسم الشركة أو المؤسسة"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactPerson">الشخص المسؤول *</Label>
                          <Input
                            id="contactPerson"
                            value={corporateForm.contactPerson}
                            onChange={(e) => setCorporateForm({ ...corporateForm, contactPerson: e.target.value })}
                            placeholder="اسم الشخص المسؤول"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">البريد الإلكتروني *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={corporateForm.email}
                            onChange={(e) => setCorporateForm({ ...corporateForm, email: e.target.value })}
                            placeholder="example@company.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">رقم الهاتف *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={corporateForm.phone}
                            onChange={(e) => setCorporateForm({ ...corporateForm, phone: e.target.value })}
                            placeholder="+966 XX XXX XXXX"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="employeeCount">عدد الموظفين *</Label>
                          <Select
                            onValueChange={(value) => setCorporateForm({ ...corporateForm, employeeCount: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="اختر عدد الموظفين" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10-50">10-50 موظف</SelectItem>
                              <SelectItem value="51-100">51-100 موظف</SelectItem>
                              <SelectItem value="101-200">101-200 موظف</SelectItem>
                              <SelectItem value="201-500">201-500 موظف</SelectItem>
                              <SelectItem value="500+">أكثر من 500 موظف</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">القطاع *</Label>
                          <Select onValueChange={(value) => setCorporateForm({ ...corporateForm, industry: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="اختر القطاع" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="education">التعليم</SelectItem>
                              <SelectItem value="healthcare">الرعاية الصحية</SelectItem>
                              <SelectItem value="technology">التكنولوجيا</SelectItem>
                              <SelectItem value="finance">المالية والمصرفية</SelectItem>
                              <SelectItem value="manufacturing">التصنيع</SelectItem>
                              <SelectItem value="retail">التجارة والبيع بالتجزئة</SelectItem>
                              <SelectItem value="government">القطاع الحكومي</SelectItem>
                              <SelectItem value="other">أخرى</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">العنوان *</Label>
                        <Input
                          id="address"
                          value={corporateForm.address}
                          onChange={(e) => setCorporateForm({ ...corporateForm, address: e.target.value })}
                          placeholder="عنوان الشركة أو المؤسسة"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">رسالة إضافية</Label>
                        <Textarea
                          id="message"
                          value={corporateForm.message}
                          onChange={(e) => setCorporateForm({ ...corporateForm, message: e.target.value })}
                          placeholder="أخبرنا عن احتياجاتك الخاصة أو أي متطلبات إضافية..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        إرسال طلب الشراكة
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">تواصل مباشر</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">هاتف الشراكات المؤسسية</p>
                        <p className="text-gray-600">+966 XX XXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">البريد الإلكتروني</p>
                        <p className="text-gray-600">partners@kaafcard.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">مميزات خاصة للشراكات المؤسسية</h3>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        خصومات تدريجية حسب عدد الموظفين
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        تقارير مفصلة عن الاستخدام
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        مدير حساب مخصص
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        برامج صحية وقائية
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        دعم فني متقدم
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">عملية الشراكة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          1
                        </div>
                        <div>
                          <p className="font-medium">إرسال الطلب</p>
                          <p className="text-gray-600 text-sm">املأ النموذج وأرسل طلب الشراكة</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          2
                        </div>
                        <div>
                          <p className="font-medium">المراجعة والتواصل</p>
                          <p className="text-gray-600 text-sm">سنراجع طلبك ونتواصل معك خلال 24 ساعة</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          3
                        </div>
                        <div>
                          <p className="font-medium">تخصيص الحل</p>
                          <p className="text-gray-600 text-sm">نصمم حل مخصص يناسب احتياجاتك</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          4
                        </div>
                        <div>
                          <p className="font-medium">التنفيذ والتدريب</p>
                          <p className="text-gray-600 text-sm">نبدأ التنفيذ ونقدم التدريب اللازم</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

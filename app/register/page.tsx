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
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, User, Stethoscope, Camera } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("partner")
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    phone: "",
    specialty: "",
    address: "",
    email: "",
  })
  const [beneficiaryForm, setBeneficiaryForm] = useState({
    fullName: "",
    nationalId: "",
    subscriptionNumber: "",
    mobile: "",
    address: "",
    photo: null,
    privacyAccepted: false,
  })

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Partner registration:", partnerForm)
    // Handle partner registration
  }

  const handleBeneficiarySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Beneficiary registration:", beneficiaryForm)
    // Handle beneficiary registration
  }

  const specialties = [
    "طب الأسرة",
    "طب الأطفال",
    "طب النساء والولادة",
    "طب القلب",
    "طب العيون",
    "طب الأسنان",
    "طب الجلدية",
    "طب العظام",
    "طب الأنف والأذن والحنجرة",
    "طب الأعصاب",
    "الطب النفسي",
    "طب الطوارئ",
    "الأشعة التشخيصية",
    "المختبرات الطبية",
    "العلاج الطبيعي",
    "أخرى",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">التسجيل</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              انضم إلى عائلة KAAFCARD
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              سجل الآن كشريك طبي أو كمنتفع للاستفادة من خدماتنا المتميزة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Forms */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger
                  value="partner"
                  className="flex items-center gap-2"
                >
                  <Stethoscope className="w-4 h-4" />
                  تسجيل شريك
                </TabsTrigger>
                <TabsTrigger
                  value="beneficiary"
                  className="flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  تسجيل منتفع
                </TabsTrigger>
              </TabsList>

              {/* Partner Registration */}
              <TabsContent value="partner">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      تسجيل شريك طبي
                    </CardTitle>
                    <p className="text-gray-600 text-center">
                      للأطباء والمراكز الطبية والمستشفيات الراغبة في الانضمام
                      لشبكة KAAFCARD
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form
                      action="https://formsubmit.co/kareemalqasrawi@gmail.com"
                      method="POST"
                      className="space-y-6"
                    >
                      <input type="hidden" name="_captcha" value="false" />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="partner-name">الاسم *</Label>
                          <Input
                            id="partner-name"
                            name="name" // إضافة خاصية name
                            value={partnerForm.name}
                            onChange={(e) =>
                              setPartnerForm({
                                ...partnerForm,
                                name: e.target.value,
                              })
                            }
                            placeholder="اسم الطبيب أو المركز الطبي"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="partner-phone">رقم الهاتف *</Label>
                          <Input
                            id="partner-phone"
                            name="phone" // إضافة خاصية name
                            type="tel"
                            value={partnerForm.phone}
                            onChange={(e) =>
                              setPartnerForm({
                                ...partnerForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+966 XX XXX XXXX"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-specialty">التخصص *</Label>
                        <Select
                          name="specialty" // إضافة خاصية name
                          onValueChange={(value) =>
                            setPartnerForm({ ...partnerForm, specialty: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="اختر التخصص" />
                          </SelectTrigger>
                          <SelectContent>
                            {specialties.map((specialty) => (
                              <SelectItem key={specialty} value={specialty}>
                                {specialty}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-address">العنوان *</Label>
                        <Textarea
                          id="partner-address"
                          name="address" // إضافة خاصية name
                          value={partnerForm.address}
                          onChange={(e) =>
                            setPartnerForm({
                              ...partnerForm,
                              address: e.target.value,
                            })
                          }
                          placeholder="العنوان التفصيلي للعيادة أو المركز"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="partner-email">
                          البريد الإلكتروني (اختياري)
                        </Label>
                        <Input
                          id="partner-email"
                          name="email" // إضافة خاصية name
                          type="email"
                          value={partnerForm.email}
                          onChange={(e) =>
                            setPartnerForm({
                              ...partnerForm,
                              email: e.target.value,
                            })
                          }
                          placeholder="example@email.com"
                        />
                      </div>

                      <div className="pt-6">
                        <Button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          إرسال طلب الشراكة
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Beneficiary Registration */}
              <TabsContent value="beneficiary">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      تسجيل منتفع
                    </CardTitle>
                    <p className="text-gray-600 text-center">
                      للأفراد الراغبين في الحصول على بطاقة KAAFCARD والاستفادة
                      من الخصومات
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form
                      action="https://formsubmit.co/kareemalqasrawi@gmail.com"
                      method="POST"
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="beneficiary-name">
                            الاسم الكامل *
                          </Label>
                          <Input
                            id="beneficiary-name"
                            name="fullName" // إضافة خاصية name
                            value={beneficiaryForm.fullName}
                            onChange={(e) =>
                              setBeneficiaryForm({
                                ...beneficiaryForm,
                                fullName: e.target.value,
                              })
                            }
                            placeholder="الاسم الكامل كما هو في الهوية"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="beneficiary-id">الرقم الوطني *</Label>
                          <Input
                            id="beneficiary-id"
                            name="nationalId" // إضافة خاصية name
                            value={beneficiaryForm.nationalId}
                            onChange={(e) =>
                              setBeneficiaryForm({
                                ...beneficiaryForm,
                                nationalId: e.target.value,
                              })
                            }
                            placeholder="1234567890"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="subscription-number">
                            رقم الاشتراك *
                          </Label>
                          <Input
                            id="subscription-number"
                            name="subscriptionNumber" // إضافة خاصية name
                            value={beneficiaryForm.subscriptionNumber}
                            onChange={(e) =>
                              setBeneficiaryForm({
                                ...beneficiaryForm,
                                subscriptionNumber: e.target.value,
                              })
                            }
                            placeholder="رقم الاشتراك الخاص بك"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="beneficiary-mobile">
                            رقم الموبايل *
                          </Label>
                          <Input
                            id="beneficiary-mobile"
                            name="mobile" // إضافة خاصية name
                            type="tel"
                            value={beneficiaryForm.mobile}
                            onChange={(e) =>
                              setBeneficiaryForm({
                                ...beneficiaryForm,
                                mobile: e.target.value,
                              })
                            }
                            placeholder="+966 XX XXX XXXX"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="beneficiary-address">العنوان *</Label>
                        <Textarea
                          id="beneficiary-address"
                          name="address" // إضافة خاصية name
                          value={beneficiaryForm.address}
                          onChange={(e) =>
                            setBeneficiaryForm({
                              ...beneficiaryForm,
                              address: e.target.value,
                            })
                          }
                          placeholder="العنوان التفصيلي"
                          required
                        />
                      </div>

                      {/* <div className="space-y-2">
                        <Label htmlFor="beneficiary-photo">
                          الصورة الشخصية *
                        </Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                          <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2">
                            اضغط لرفع الصورة الشخصية
                          </p>
                          <p className="text-sm text-gray-500">
                            PNG, JPG حتى 5MB
                          </p>
                          <Input
                            id="beneficiary-photo"
                            name="photo" // إضافة خاصية name
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              setBeneficiaryForm({
                                ...beneficiaryForm,
                                photo: e.target.files?.[0] || null,
                              })
                            }
                          />
                          <Button
                            type="button"
                            variant="outline"
                            className="mt-4 bg-transparent"
                            onClick={() =>
                              document
                                .getElementById("beneficiary-photo")
                                ?.click()
                            }
                          >
                            <Upload className="w-4 h-4 ml-2" />
                            اختر الصورة
                          </Button>
                        </div>
                      </div> */}

                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Checkbox
                          id="privacy-policy"
                          name="privacyAccepted" // إضافة خاصية name
                          checked={beneficiaryForm.privacyAccepted}
                          onCheckedChange={(checked) =>
                            setBeneficiaryForm({
                              ...beneficiaryForm,
                              privacyAccepted: checked as boolean,
                            })
                          }
                        />
                        <Label htmlFor="privacy-policy" className="text-sm">
                          أوافق على{" "}
                          <a
                            href="/privacy"
                            className="text-blue-600 hover:underline"
                          >
                            سياسة الخصوصية
                          </a>{" "}
                          وشروط الاستخدام *
                        </Label>
                      </div>

                      <div className="pt-6">
                        <Button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                          disabled={!beneficiaryForm.privacyAccepted}
                        >
                          إرسال طلب التسجيل
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Shield, CheckCircle, Star, Users, Gift, Zap } from "lucide-react"
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

export default function PurchasePage() {
  const [selectedPlan, setSelectedPlan] = useState("individual")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [purchaseForm, setPurchaseForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationalId: "",
    address: "",
    agreeToTerms: false,
  })

  const plans = [
    {
      id: "individual",
      name: "فردي",
      price: "299",
      duration: "سنة واحدة",
      features: [
        "خصم 50% على جميع الخدمات الطبية",
        "صالح لجميع الشركاء",
        "دعم فني على مدار الساعة",
        "تجديد سنوي",
        "بطاقة رقمية وفيزيائية",
      ],
      popular: true,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "family",
      name: "عائلي",
      price: "799",
      duration: "سنة واحدة",
      features: [
        "خصم 50% لجميع أفراد العائلة (حتى 6 أفراد)",
        "صالح لجميع الشركاء",
        "دعم فني مخصص",
        "تجديد سنوي",
        "بطاقات متعددة",
        "تقارير استخدام شهرية",
      ],
      popular: false,
      color: "from-green-500 to-green-600",
    },
    {
      id: "premium",
      name: "مميز",
      price: "1299",
      duration: "سنة واحدة",
      features: [
        "خصم 60% على جميع الخدمات الطبية",
        "أولوية في المواعيد",
        "استشارات طبية مجانية",
        "فحوصات دورية مخفضة",
        "مدير حساب مخصص",
        "تغطية طوارئ 24/7",
      ],
      popular: false,
      color: "from-purple-500 to-purple-600",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Purchase form:", { ...purchaseForm, selectedPlan, paymentMethod })
    // Handle purchase logic - integrate with payment gateway
    alert("سيتم توجيهك إلى بوابة الدفع الآمنة...")
  }

  const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan)

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
            <Badge className="mb-4 bg-blue-100 text-blue-800">شراء البطاقة</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">احصل على بطاقة KAAFCARD</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اختر الخطة المناسبة لك واستمتع بخصم 50% على جميع الخدمات الطبية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Selection */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-4">
              اختر خطتك
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              خطط مرنة تناسب احتياجاتك وميزانيتك
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {plans.map((plan, index) => (
              <motion.div key={plan.id} variants={fadeInUp}>
                <Card
                  className={`relative h-full cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedPlan === plan.id ? "ring-2 ring-blue-500 shadow-lg" : ""
                  } ${plan.popular ? "border-blue-500" : ""}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-4 py-1">
                        <Star className="w-3 h-3 ml-1" />
                        الأكثر شعبية
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center text-white`}
                    >
                      {plan.id === "individual" && <CreditCard className="w-8 h-8" />}
                      {plan.id === "family" && <Users className="w-8 h-8" />}
                      {plan.id === "premium" && <Gift className="w-8 h-8" />}
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-gray-900">
                      {plan.price} <span className="text-lg font-normal text-gray-600">ريال</span>
                    </div>
                    <p className="text-gray-600">{plan.duration}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <RadioGroupItem value={plan.id} id={plan.id} />
                          <Label htmlFor={plan.id} className="cursor-pointer">
                            اختيار هذه الخطة
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Purchase Form */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">معلومات الشراء</CardTitle>
                    <p className="text-gray-600">املأ البيانات المطلوبة لإتمام عملية الشراء</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">الاسم الكامل *</Label>
                          <Input
                            id="fullName"
                            value={purchaseForm.fullName}
                            onChange={(e) => setPurchaseForm({ ...purchaseForm, fullName: e.target.value })}
                            placeholder="الاسم كما هو في الهوية"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nationalId">الرقم الوطني *</Label>
                          <Input
                            id="nationalId"
                            value={purchaseForm.nationalId}
                            onChange={(e) => setPurchaseForm({ ...purchaseForm, nationalId: e.target.value })}
                            placeholder="1234567890"
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
                            value={purchaseForm.email}
                            onChange={(e) => setPurchaseForm({ ...purchaseForm, email: e.target.value })}
                            placeholder="example@email.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">رقم الهاتف *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={purchaseForm.phone}
                            onChange={(e) => setPurchaseForm({ ...purchaseForm, phone: e.target.value })}
                            placeholder="+966 XX XXX XXXX"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">العنوان *</Label>
                        <Input
                          id="address"
                          value={purchaseForm.address}
                          onChange={(e) => setPurchaseForm({ ...purchaseForm, address: e.target.value })}
                          placeholder="العنوان التفصيلي"
                          required
                        />
                      </div>

                      {/* Payment Method */}
                      <div className="space-y-4">
                        <Label>طريقة الدفع</Label>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                          <div className="flex items-center space-x-2 space-x-reverse p-3 border rounded-lg">
                            <RadioGroupItem value="credit-card" id="credit-card" />
                            <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
                              <CreditCard className="w-4 h-4" />
                              بطاقة ائتمان / مدى
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse p-3 border rounded-lg">
                            <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                            <Label htmlFor="bank-transfer" className="flex items-center gap-2 cursor-pointer">
                              <Shield className="w-4 h-4" />
                              تحويل بنكي
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Checkbox
                          id="terms"
                          checked={purchaseForm.agreeToTerms}
                          onCheckedChange={(checked) =>
                            setPurchaseForm({ ...purchaseForm, agreeToTerms: checked as boolean })
                          }
                        />
                        <Label htmlFor="terms" className="text-sm">
                          أوافق على{" "}
                          <a href="/terms" className="text-blue-600 hover:underline">
                            الشروط والأحكام
                          </a>{" "}
                          و{" "}
                          <a href="/privacy" className="text-blue-600 hover:underline">
                            سياسة الخصوصية
                          </a>{" "}
                          *
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={!purchaseForm.agreeToTerms}
                      >
                        <Zap className="w-4 h-4 ml-2" />
                        إتمام الشراء - {selectedPlanDetails?.price} ريال
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">ملخص الطلب</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedPlanDetails && (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">الخطة المختارة:</span>
                          <span>{selectedPlanDetails.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">المدة:</span>
                          <span>{selectedPlanDetails.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">السعر:</span>
                          <span className="text-2xl font-bold">{selectedPlanDetails.price} ريال</span>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center text-lg font-bold">
                            <span>المجموع:</span>
                            <span className="text-blue-600">{selectedPlanDetails.price} ريال</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Security Notice */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-green-700 mb-2">
                      <Shield className="w-5 h-5" />
                      <span className="font-semibold">دفع آمن ومشفر</span>
                    </div>
                    <p className="text-green-600 text-sm">
                      جميع المعاملات محمية بتشفير SSL وتتم معالجتها عبر بوابات دفع آمنة ومعتمدة
                    </p>
                  </CardContent>
                </Card>

                {/* Benefits Reminder */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">ما ستحصل عليه</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        خصم فوري 50% على الخدمات الطبية
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        بطاقة رقمية فورية
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        بطاقة فيزيائية تصلك خلال 3-5 أيام
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        دعم فني على مدار الساعة
                      </li>
                    </ul>
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

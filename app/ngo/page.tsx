"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Users, HandHeart, Shield, CheckCircle, Phone, Mail, Building2 } from "lucide-react"
import Link from "next/link"
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

export default function NGOPage() {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "خدمة المجتمع",
      description: "نساهم في تحسين الرعاية الصحية للأسر المحتاجة والمستفيدين من الجمعيات الخيرية",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "تغطية شاملة",
      description: "نوفر بطاقات خصم لجميع المستفيدين المسجلين لدى الجمعيات والمنظمات الشريكة",
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "شراكة مجتمعية",
      description: "نبني شراكات طويلة الأمد مع المنظمات الخيرية لخدمة أكبر عدد من المحتاجين",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ضمان الجودة",
      description: "نضمن حصول المستفيدين على نفس مستوى الخدمة والجودة في الرعاية الطبية",
    },
  ]

  const services = [
    {
      title: "توزيع البطاقات",
      description: "نقوم بتوزيع بطاقات KAAFCARD على المستفيدين المسجلين لدى الجمعيات الشريكة",
      features: ["توزيع مجاني", "تدريب على الاستخدام", "دعم فني مستمر"],
    },
    {
      title: "برامج صحية وقائية",
      description: "نقدم برامج توعية صحية وفحوصات دورية مخفضة للمستفيدين",
      features: ["فحوصات دورية", "برامج توعية", "استشارات طبية"],
    },
    {
      title: "تقارير وإحصائيات",
      description: "نوفر تقارير مفصلة عن استخدام البطاقات وتأثيرها على المستفيدين",
      features: ["تقارير شهرية", "إحصائيات مفصلة", "قياس الأثر"],
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
            <Badge className="mb-4 bg-red-100 text-red-800">المنظمات والجمعيات</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">شراكة من أجل المجتمع</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نتعاون مع الجمعيات الخيرية والمنظمات غير الربحية لتوفير رعاية صحية ميسورة للأسر المحتاجة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
              <CardContent className="p-8 text-center">
                <Heart className="w-16 h-16 mx-auto mb-6 text-white" />
                <h2 className="text-3xl font-bold mb-4">رسالتنا الاجتماعية</h2>
                <p className="text-xl leading-relaxed">
                  نؤمن بأن الرعاية الصحية حق للجميع. لذلك نتعاون مع الجمعيات الخيرية والمنظمات غير الربحية لتوزيع بطاقات
                  KAAFCARD على المستفيدين التابعين لها، مما يضمن حصولهم على خدمات طبية متميزة بأسعار مخفضة تصل إلى 50%.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              فوائد الشراكة
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              كيف تستفيد الجمعيات والمنظمات من الشراكة مع KAAFCARD
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
                    <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              خدماتنا للمنظمات
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المصممة خصيصاً للجمعيات والمنظمات الخيرية
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-600">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{feature}</span>
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

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">كيف تعمل الشراكة؟</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">للجمعيات والمنظمات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">التواصل والتقديم</p>
                        <p className="text-gray-600 text-sm">تواصل معنا لمناقشة إمكانية الشراكة</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">تقديم قائمة المستفيدين</p>
                        <p className="text-gray-600 text-sm">تزويدنا بقائمة المستفيدين المؤهلين</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">إصدار البطاقات</p>
                        <p className="text-gray-600 text-sm">نقوم بإصدار البطاقات وتسليمها للجمعية</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">التوزيع والمتابعة</p>
                        <p className="text-gray-600 text-sm">توزيع البطاقات ومتابعة الاستخدام</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">للمستفيدين</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">استلام البطاقة</p>
                        <p className="text-gray-600 text-sm">الحصول على البطاقة من الجمعية</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">التدريب والتوجيه</p>
                        <p className="text-gray-600 text-sm">تعلم كيفية استخدام البطاقة</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">زيارة الشركاء</p>
                        <p className="text-gray-600 text-sm">زيارة أي من الشركاء المعتمدين</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">الحصول على الخصم</p>
                        <p className="text-gray-600 text-sm">الاستفادة من خصم 50% فوري</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">ابدأ شراكتك معنا اليوم</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              انضم إلى شبكة الجمعيات والمنظمات الشريكة واجعل الرعاية الصحية في متناول المحتاجين
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">اتصل بنا</h3>
                <p className="opacity-90">+966 XX XXX XXXX</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">راسلنا</h3>
                <p className="opacity-90">ngo@kaafcard.com</p>
              </div>
              <div className="text-center">
                <Building2 className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">زرنا</h3>
                <p className="opacity-90">مكتب الشراكات المجتمعية</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/contact">تواصل معنا الآن</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                <Link href="/about">تعرف على المزيد</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

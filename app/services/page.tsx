"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, CheckCircle, Building2, Heart, Stethoscope, Phone, Users, Shield, Globe, Zap } from "lucide-react"
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

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "إصدار بطاقات الخصم",
      description: "نقوم بإصدار بطاقات خصم للمشتركين بسهولة وسرعة، مع ضمان الحصول على خصم 50% فوري",
      features: ["إصدار فوري", "خصم 50% مضمون", "صالحة لجميع الشركاء", "تجديد سنوي"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "بوابة التحقق من الاشتراك",
      description: "نوفر بوابة تحقق سريعة وآمنة من صلاحية الاشتراك للشركاء والأطباء",
      features: ["تحقق فوري", "واجهة سهلة الاستخدام", "أمان عالي", "متاح 24/7"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "الشراكات المؤسسية",
      description: "نقدم حلول شراكة مخصصة للمدارس والشركات والمؤسسات الكبيرة",
      features: ["خطط مخصصة", "خصومات جماعية", "إدارة مركزية", "تقارير مفصلة"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "دعم المنظمات الخيرية",
      description: "نتعاون مع الجمعيات الخيرية والمنظمات لتوزيع البطاقات على المنتفعين",
      features: ["شراكة مجتمعية", "دعم الأسر المحتاجة", "برامج خيرية", "تأثير اجتماعي"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "شبكة طبية متكاملة",
      description: "ربط إلكتروني مع أفضل المراكز الطبية والمستشفيات في المملكة",
      features: ["شبكة واسعة", "أطباء معتمدون", "تخصصات متنوعة", "جودة مضمونة"],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "دعم فني متواصل",
      description: "فريق دعم فني متخصص متاح على مدار الساعة لخدمة العملاء والشركاء",
      features: ["دعم 24/7", "فريق متخصص", "استجابة سريعة", "حلول فعالة"],
      color: "from-orange-500 to-orange-600",
    },
  ]

  const additionalFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "أمان وحماية",
      description: "نضمن حماية بياناتك الشخصية والطبية بأعلى معايير الأمان",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "سرعة في الخدمة",
      description: "معالجة فورية للطلبات والتحقق السريع من الاشتراكات",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "تغطية شاملة",
      description: "خدماتنا متاحة في جميع أنحاء المملكة العربية السعودية",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "خدمة عملاء متميزة",
      description: "فريق خدمة عملاء مدرب لتقديم أفضل تجربة للمستخدمين",
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
            <Badge className="mb-4 bg-blue-100 text-blue-800">خدماتنا</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">خدمات شاملة ومتطورة</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من الخدمات المتطورة لضمان حصولك على أفضل رعاية صحية بأسعار مخفضة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {mainServices.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white mb-4`}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Features */}
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
              مميزات إضافية
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              نحرص على تقديم قيمة مضافة من خلال مجموعة من المميزات الإضافية
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              خدمات مستقبلية
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              نعمل على تطوير خدمات جديدة لتوسيع نطاق الفوائد التي نقدمها
            </motion.p>

            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              <Card className="p-8">
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-right">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">ربط إلكتروني للدفع</h3>
                      <p className="text-gray-600 mb-4">
                        نعمل على تطوير نظام دفع إلكتروني متكامل لتسهيل عمليات الدفع والتحقق
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                          دفع آمن ومشفر
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                          تحقق فوري من الدفع
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                          تقارير مالية مفصلة
                        </li>
                      </ul>
                    </div>

                    <div className="text-right">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">توسع في المجالات</h3>
                      <p className="text-gray-600 mb-4">نخطط للتوسع لتشمل مجالات أخرى مثل التعليم والتسوق والترفيه</p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                          خدمات تعليمية
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                          خصومات تسوق
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                          أنشطة ترفيهية
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">ابدأ الاستفادة من خدماتنا اليوم</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              انضم إلى آلاف المستفيدين من خدمات KAAFCARD واحصل على خصم 50% فوري
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100"> */}
                {/* <Link href="/purchase">اشتري البطاقة الآن</Link> */}
              {/* </Button>  */}
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/register">سجل كشريك</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

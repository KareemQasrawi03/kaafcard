"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Heart, Shield, Users, Stethoscope, Building2, Phone, CheckCircle } from "lucide-react"
import Image from "next/image"
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

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "خصم 50% غير محدود",
      subtitle: "على جميع الخدمات الطبية",
      description: "بطاقة KAAFCARD تمنحك خصم 50% لا محدود عند زيارة شركائنا من الأطباء والمراكز الطبية والمستشفيات",
    },
    {
      title: "شبكة واسعة من الشركاء",
      subtitle: "أطباء ومراكز طبية معتمدة",
      description: "نتعاون مع أفضل الأطباء والمراكز الطبية لنوفر لك أفضل الخدمات الصحية بأسعار مخفضة",
    },
    {
      title: "خدمة شاملة ومتطورة",
      subtitle: "نحو مستقبل صحي أفضل",
      description: "نسعى للتوسع لتشمل كافة مجالات الحياة بالتعاون مع مؤسسات وشركات مختلفة",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-600/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-right"
            >
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {heroSlides[currentSlide].subtitle}
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">{heroSlides[currentSlide].description}</p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Link href="/register">احصل على بطاقتك الآن</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 bg-transparent"
                >
                  <Link href="/partners">تصفح الشركاء</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl p-8 shadow-2xl"
                >
                  <div className="text-white text-center">
                    <Image
                      src="/logo.png"
                      alt="KAAFCARD Logo"
                      width={200}
                      height={80}
                      className="mx-auto mb-4 brightness-0 invert"
                    />
                    <div className="text-2xl font-bold mb-2">KAAFCARD</div>
                    <div className="text-sm opacity-90">بطاقة الخصم الطبي</div>
                    <div className="mt-6 text-3xl font-bold">50%</div>
                    <div className="text-sm">خصم على جميع الخدمات</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
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
              لماذا KAAFCARD؟
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              نوفر لك أفضل الخدمات الطبية بأسعار مخفضة من خلال شبكة واسعة من الشركاء المعتمدين
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "خصم 50%",
                description: "خصم ثابت وغير محدود على جميع الخدمات الطبية",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "ضمان الجودة",
                description: "شركاء معتمدون ومراكز طبية موثوقة",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "شبكة واسعة",
                description: "مئات الأطباء والمراكز الطبية في خدمتك",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "رعاية شاملة",
                description: "تغطية جميع التخصصات الطبية",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
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
              خدماتنا
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات لضمان حصولك على أفضل رعاية صحية
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <CreditCard className="w-12 h-12" />,
                title: "إصدار البطاقات",
                description: "إصدار بطاقات خصم للمشتركين بسهولة وسرعة",
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "التحقق من الاشتراك",
                description: "بوابة تحقق سريعة من صلاحية الاشتراك للشركاء",
              },
              {
                icon: <Building2 className="w-12 h-12" />,
                title: "الشراكات المؤسسية",
                description: "شراكات مع المدارس والشركات والمؤسسات الكبيرة",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "دعم الجمعيات الخيرية",
                description: "تعاون مع المنظمات الخيرية لخدمة المجتمع",
              },
              {
                icon: <Stethoscope className="w-12 h-12" />,
                title: "شبكة طبية متكاملة",
                description: "ربط مع أفضل المراكز الطبية والمستشفيات",
              },
              {
                icon: <Phone className="w-12 h-12" />,
                title: "دعم فني متواصل",
                description: "فريق دعم متاح على مدار الساعة لخدمتك",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "500+", label: "شريك طبي" },
              { number: "10,000+", label: "مشترك راضي" },
              { number: "50%", label: "نسبة الخصم" },
              { number: "24/7", label: "دعم فني" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              ابدأ رحلتك الصحية معنا اليوم
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              احصل على بطاقة KAAFCARD واستمتع بخصم 50% على جميع الخدمات الطبية
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"> */}
                {/* <Link href="/purchase">اشتري البطاقة الآن</Link> */}
              {/* </Button> */}
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 bg-transparent"
              >
                <Link href="/contact">تواصل معنا</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

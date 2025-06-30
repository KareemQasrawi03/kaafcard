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
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle, Send } from "lucide-react"
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

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", contactForm)
    // Handle form submission
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.")
    setContactForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      contactType: "",
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "الهاتف",
      details: ["+966 XX XXX XXXX", "+966 XX XXX XXXX"],
      color: "text-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "البريد الإلكتروني",
      details: ["info@kaafcard.com", "support@kaafcard.com"],
      color: "text-green-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "العنوان",
      details: ["المملكة العربية السعودية", "مؤسسة أصيل خليل للوساطة التجارية"],
      color: "text-orange-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 8:00 ص - 6:00 م", "الجمعة - السبت: 10:00 ص - 4:00 م"],
      color: "text-purple-600",
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, name: "Facebook", color: "bg-blue-600" },
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", color: "bg-pink-600" },
    { icon: <MessageCircle className="w-6 h-6" />, name: "WhatsApp", color: "bg-green-600" },
    { icon: <Send className="w-6 h-6" />, name: "Telegram", color: "bg-blue-500" },
  ]

  const emailAddresses = [
    {
      category: "إدارة عامة",
      emails: [
        "info@kaafcard.com",
        "admin@kaafcard.com",
        "support@kaafcard.com",
        "ceo@kaafcard.com",
        "office@kaafcard.com",
      ],
    },
    {
      category: "مبيعات وتسويق",
      emails: [
        "sales@kaafcard.com",
        "marketing@kaafcard.com",
        "partners@kaafcard.com",
        "outreach@kaafcard.com",
        "offers@kaafcard.com",
      ],
    },
    {
      category: "للشركاء والقطاع الطبي",
      emails: ["doctors@kaafcard.com", "centers@kaafcard.com", "medical@kaafcard.com", "verify@kaafcard.com"],
    },
    {
      category: "للاشتراكات والتسجيل",
      emails: ["registration@kaafcard.com", "forms@kaafcard.com", "members@kaafcard.com"],
    },
    { category: "إيميلات شخصية / شراكات", emails: ["aseel@kaafcard.com", "rahma@kaafcard.com", "ngo@kaafcard.com"] },
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
            <Badge className="mb-4 bg-blue-100 text-blue-800">تواصل معنا</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              نحن هنا لخدمتك
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              تواصل معنا في أي وقت، فريقنا جاهز للإجابة على استفساراتك ومساعدتك
              في الحصول على أفضل خدمة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
                  <p className="text-gray-600">
                    املأ النموذج وسنتواصل معك في أقرب وقت
                  </p>
                </CardHeader>
                <CardContent>
                  <form
                    action="https://formsubmit.co/kareemalqasrawi@gmail.com"
                    method="POST"
                    className="space-y-6"
                  >
                    {/* <input
                      type="hidden"
                      name="_next"
                      value="https://yourdomain.com/thank-you"
                    />
                    <input type="hidden" name="_captcha" value="false" /> */}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">الاسم *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="اسمك الكامل"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="+966 XX XXX XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-type">نوع الاستفسار *</Label>
                        <Select
                          name="contactType" // خاصية name لإرسال القيمة
                          required // لجعل الحقل مطلوبًا
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="اختر نوع الاستفسار" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">استفسار عام</SelectItem>
                            <SelectItem value="partnership">
                              شراكة طبية
                            </SelectItem>
                            <SelectItem value="subscription">
                              اشتراك البطاقة
                            </SelectItem>
                            <SelectItem value="technical">دعم فني</SelectItem>
                            <SelectItem value="corporate">
                              شراكة مؤسسية
                            </SelectItem>
                            <SelectItem value="ngo">منظمات خيرية</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">الموضوع *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="موضوع الرسالة"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">الرسالة *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="اكتب رسالتك هنا..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${info.color}`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>تابعنا على وسائل التواصل</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        size="icon"
                        className={`${social.color} hover:opacity-90 text-white`}
                      >
                        {social.icon}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Email Directory */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              دليل البريد الإلكتروني
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              تواصل معنا مباشرة عبر البريد الإلكتروني المخصص لاستفسارك
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {emailAddresses.map((category, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.emails.map((email, emailIndex) => (
                        <a
                          key={emailIndex}
                          href={`mailto:${email}`}
                          className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

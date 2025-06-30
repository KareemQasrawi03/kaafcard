"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Heart, Building2, Globe } from "lucide-react"
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

export default function AboutPage() {
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
            <Badge className="mb-4 bg-blue-100 text-blue-800">من نحن</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">مؤسسة أصيل خليل للوساطة التجارية</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نحن مؤسسة رائدة في مجال الوساطة التجارية، نسعى لتقديم أفضل الخدمات الطبية بأسعار مخفضة من خلال بطاقة
              KAAFCARD
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">رؤيتنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    بطاقة خصم تجاري تمنح حاملها خصم 50٪ غير محدود عند زيارة شركائنا من الأطباء والمراكز والمستشفيات.
                    ونسعى للتوسّع لاحقًا لتشمل كافة مجالات الحياة بالتعاون مع شركات ومؤسسات مختلفة.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl">مهمتنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    نهدف إلى جعل الرعاية الصحية في متناول الجميع من خلال توفير خصومات حقيقية وشراكات موثوقة مع أفضل
                    مقدمي الخدمات الطبية، مع التزامنا بأعلى معايير الجودة والمصداقية.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
              قيمنا ومبادئنا
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتحدد هويتنا
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
                icon: <Award className="w-8 h-8" />,
                title: "الجودة والتميز",
                description: "نلتزم بتقديم أعلى مستويات الجودة في جميع خدماتنا",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "خدمة العملاء",
                description: "نضع عملاءنا في المقدمة ونسعى لتحقيق رضاهم التام",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "المسؤولية الاجتماعية",
                description: "نساهم في خدمة المجتمع من خلال دعم الجمعيات الخيرية",
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "الشراكة الموثوقة",
                description: "نبني شراكات طويلة الأمد مع أفضل مقدمي الخدمات",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "التوسع والنمو",
                description: "نسعى للتوسع وتطوير خدماتنا لتشمل مجالات أوسع",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "الشفافية والمصداقية",
                description: "نتعامل بشفافية كاملة ومصداقية في جميع معاملاتنا",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-8">
              معلومات التواصل
            </motion.h2>

            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">مؤسسة أصيل خليل للوساطة التجارية</h3>
                      <p className="text-gray-600">مؤسسة مرخصة ومعتمدة لتقديم خدمات الوساطة التجارية في المجال الطبي</p>
                    </div>

                    <div className="border-t pt-6">
                      <div className="text-lg font-medium text-blue-600 mb-2">البريد الإلكتروني الرسمي</div>
                      <a
                        href="mailto:info@kaafcard.com"
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        info@kaafcard.com
                      </a>
                    </div>

                    <div className="border-t pt-6">
                      <div className="text-lg font-medium text-orange-600 mb-2">الموقع الإلكتروني</div>
                      <a href="https://kaafcard.com" className="text-gray-900 hover:text-orange-600 transition-colors">
                        kaafcard.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

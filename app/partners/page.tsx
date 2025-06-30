"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createClient, Entry } from "contentful";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Stethoscope,
  Building2,
  Phone,
  MapPin,
  Search,
  Filter,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const client = createClient({
  space: "p7yijtuj5g5f",
  environment: "master",
  accessToken: "e4VmalMtyr1gCz6tXoCa1psIYcCtjMG5lty6he8rM1Y",
});

// الحركات للظهور
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface Partner {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  address: string;
  type: string;
}

const samplePartners: Partner[] = [
  {
    id: "1",
    name: "د. أحمد محمد العلي",
    specialty: "طب الأسرة",
    phone: "+966 XX XXX XXXX",
    address: "الرياض، حي النخيل",
    type: "doctor",
  },
  {
    id: "2",
    name: "مركز الشفاء الطبي",
    specialty: "مركز طبي شامل",
    phone: "+966 XX XXX XXXX",
    address: "جدة، حي الصفا",
    type: "center",
  },
  {
    id: "3",
    name: "مستشفى الملك فهد",
    specialty: "مستشفى عام",
    phone: "+966 XX XXX XXXX",
    address: "الدمام، حي الشاطئ",
    type: "hospital",
  },
];

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>(samplePartners);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // هنا نستخدم getEntries لجلب كل الإدخالات من Contentful حسب content_type
    client
      .getEntries({
        content_type: "kaafcard", // غيرها الى معرف المحتوى الصحيح عندك
        order: "-sys.createdAt", // ترتيب من الأحدث للأقدم (اختياري)
        limit: 100, // الحد الأقصى للإدخالات (يمكن تعديله)
      })
      .then((response) => {
        // response.items هي مصفوفة الإدخالات
        if (response.items.length > 0) {
          // تحويل بيانات Contentful لشكل مناسب
          const newPartners = response.items.map((entry: Entry<any>) => ({
            id: entry.sys.id,
            name: entry.fields.name ?? "غير معروف",
            specialty: entry.fields.specialty ?? "غير محدد",
            phone: entry.fields.phone ?? "غير متوفر",
            address: entry.fields.address ?? "غير متوفر",
            type: entry.fields.type ?? "doctor",
          }));
          setPartners(newPartners);
        } else {
          // لا توجد بيانات
          setPartners([]);
        }
      })
      .catch((err) => {
        console.error("خطأ في جلب بيانات Contentful:", err);
        setError("فشل في جلب بيانات الشركاء من Contentful.");
        setPartners([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredPartners = partners.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || partner.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getPartnerIcon = (type: string) => {
    switch (type) {
      case "doctor":
        return <Stethoscope className="w-6 h-6" />;
      case "center":
        return <Building2 className="w-6 h-6" />;
      case "hospital":
        return <Building2 className="w-6 h-6" />;
      default:
        return <Stethoscope className="w-6 h-6" />;
    }
  };

  const getPartnerBadgeColor = (type: string) => {
    switch (type) {
      case "doctor":
        return "bg-blue-100 text-blue-800";
      case "center":
        return "bg-green-100 text-green-800";
      case "hospital":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

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
            <Badge className="mb-4 bg-blue-100 text-blue-800">شركاؤنا</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              شبكة شركائنا الطبيين
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نتعاون مع أفضل الأطباء والمراكز الطبية والمستشفيات لنوفر لك خدمات
              طبية متميزة بخصم 50%
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="البحث عن طبيب أو مركز طبي..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="w-4 h-4 ml-2" />
                  <SelectValue placeholder="تصفية حسب النوع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الشركاء</SelectItem>
                  <SelectItem value="doctor">أطباء</SelectItem>
                  <SelectItem value="center">مراكز طبية</SelectItem>
                  <SelectItem value="hospital">مستشفيات</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20 text-gray-600">
              جارٍ تحميل البيانات من Contentful...
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-600">{error}</div>
          ) : filteredPartners.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                لا توجد نتائج
              </h3>
              <p className="text-gray-600 mb-8">
                {searchTerm || filterType !== "all"
                  ? "لم نجد شركاء يطابقون معايير البحث الخاصة بك"
                  : "سيتم إضافة الشركاء قريباً"}
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setFilterType("all");
                }}
              >
                مسح الفلاتر
              </Button>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPartners.map((partner) => (
                <motion.div key={partner.id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            {getPartnerIcon(partner.type)}
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {partner.name}
                            </CardTitle>
                            <Badge
                              className={`mt-1 ${getPartnerBadgeColor(
                                partner.type
                              )}`}
                            >
                              {partner.specialty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-4 h-4 ml-2" />
                          <span className="text-sm">{partner.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 ml-2" />
                          <span className="text-sm">{partner.address}</span>
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full mt-4 bg-transparent"
                            variant="outline"
                          >
                            عرض التفاصيل
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle className="text-right">
                              {partner.name}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 text-right">
                            <div>
                              <h4 className="font-semibold mb-1">التخصص</h4>
                              <p>{partner.specialty}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">رقم الهاتف</h4>
                              <p>{partner.phone}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">العنوان</h4>
                              <p>{partner.address}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">النوع</h4>
                              <p>{partner.type}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

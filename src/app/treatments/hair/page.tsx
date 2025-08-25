"use client";

import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Sparkles, Zap, Target, Activity, Heart, Scissors } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const hairTreatments = [
  {
    name: "PRP Hair Restoration",
    description: "Platelet-rich plasma therapy for hair growth",
    duration: "60-90 min",
    sessions: "3-6 sessions",
    results: "3-6 months",
    icon: Heart,
    color: "from-red-400 to-pink-400",
    concerns: ["Hair loss", "Thinning", "Receding hairline", "Alopecia"]
  },
  {
    name: "Hair Transplant",
    description: "Advanced FUE technique for permanent results",
    duration: "4-8 hours",
    sessions: "1 session",
    results: "6-12 months",
    icon: Scissors,
    color: "from-green-400 to-emerald-400",
    concerns: ["Bald patches", "Receding hairline", "Permanent hair loss", "Scarring"]
  },
  {
    name: "Scalp Micropigmentation",
    description: "Tattoo technique for hair follicle simulation",
    duration: "2-4 hours",
    sessions: "2-3 sessions",
    results: "Immediate",
    icon: Target,
    color: "from-blue-400 to-cyan-400",
    concerns: ["Bald spots", "Thinning crown", "Hair density", "Natural look"]
  },
  {
    name: "Hair Growth Therapy",
    description: "Comprehensive hair loss treatment program",
    duration: "30-60 min",
    sessions: "6-12 sessions",
    results: "4-8 months",
    icon: Activity,
    color: "from-purple-400 to-pink-400",
    concerns: ["Hair thinning", "Slow growth", "Breakage", "Dull hair"]
  }
];

const benefits = [
  "Natural hair growth stimulation",
  "Permanent and long-lasting results",
  "Minimal downtime and discomfort",
  "Suitable for all hair types",
  "Advanced technology and techniques",
  "Personalized treatment plans"
];

const aftercare = [
  "Keep scalp clean and dry for 24-48 hours",
  "Avoid sun exposure for 1-2 weeks",
  "Use recommended hair care products",
  "Avoid swimming for 1 week",
  "Follow up with your provider",
  "Maintain healthy diet and lifestyle"
];

const faqs = [
  {
    question: "What causes hair loss and when should I seek treatment?",
    answer: "Hair loss can be caused by genetics, hormonal changes, stress, medical conditions, or lifestyle factors. Seek treatment when you notice excessive shedding, thinning, or bald patches. Early intervention often yields better results."
  },
  {
    question: "How long do hair treatment results last?",
    answer: "Results vary by treatment type. PRP therapy results can last 1-2 years, hair transplants are permanent, and scalp micropigmentation lasts 3-5 years. Maintenance treatments may be recommended for optimal results."
  },
  {
    question: "Are hair treatments painful?",
    answer: "Most hair treatments involve minimal discomfort. We use local anesthesia for procedures like transplants and numbing creams for other treatments. Most patients describe it as a mild sensation that's well-tolerated."
  },
  {
    question: "When will I see results from hair treatments?",
    answer: "Results timeline varies: PRP shows improvement in 3-6 months, transplants show growth in 6-12 months, and micropigmentation is immediate. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "Who is a good candidate for hair treatments?",
    answer: "Good candidates are adults with realistic expectations and stable hair loss. We assess your medical history, current medications, and hair loss pattern to recommend the most suitable treatment option."
  }
];

export default function HairTreatmentsPage() {
  const [selectedTreatment, setSelectedTreatment] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section ref={containerRef} className="relative py-20 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-pastel-pink/10 text-pastel-pink rounded-full text-sm font-medium"
              >
                <Scissors className="w-4 h-4" />
                <span>Advanced Hair Restoration</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                Hair
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-emerald-500">
                  Treatments
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Restore your confidence with advanced hair restoration. 
                From PRP therapy to hair transplants, discover the perfect 
                solution for your hair loss concerns.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>30 min - 8 hours</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (300+ reviews)</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="#treatments"
                  className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-300"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-3xl p-8 aspect-square">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-pastel-pink/20 rounded-2xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-2 border-emerald-400/20 rounded-xl"
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center space-y-6">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(16, 185, 129, 0.4)",
                          "0 0 0 20px rgba(16, 185, 129, 0)",
                          "0 0 0 0 rgba(16, 185, 129, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-40 h-40 bg-gradient-to-br from-pastel-pink to-emerald-500 rounded-full flex items-center justify-center mx-auto"
                    >
                      <Scissors className="w-16 h-16 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-gray-600 font-medium">Treatment Image</p>
                      <p className="text-sm text-gray-500">Hair Treatments</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Facts with Animation */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Clock, label: "Duration", value: "30 min - 8h", color: "bg-pastel-green" },
              { icon: AlertTriangle, label: "Downtime", value: "1-7 days", color: "bg-pastel-pink" },
              { icon: Calendar, label: "Results", value: "3-12 months", color: "bg-pastel-green" },
              { icon: CheckCircle, label: "Permanent", value: "Yes", color: "bg-pastel-pink" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.label}</h3>
                <p className="text-gray-600">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hair Treatments with Interactive Cards */}
      <section id="treatments" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Hair Treatments
              </h2>
              <p className="text-xl text-gray-600">
                Advanced solutions for all hair loss concerns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hairTreatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className={`relative cursor-pointer group ${
                    selectedTreatment === index ? 'ring-2 ring-pastel-pink' : ''
                  }`}
                  onClick={() => setSelectedTreatment(index)}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 bg-gradient-to-r ${treatment.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <treatment.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 text-center">
                      {treatment.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">{treatment.description}</p>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium">{treatment.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Sessions:</span>
                          <span className="font-medium">{treatment.sessions}</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="font-medium text-gray-800 mb-2">Treats:</h4>
                        <div className="flex flex-wrap gap-2">
                          {treatment.concerns.map((concern, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {concern}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits with Animated Icons */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Benefits of Hair Treatments
              </h2>
              <p className="text-xl text-gray-600">
                Why choose professional hair restoration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-8 h-8 bg-gradient-to-r from-pastel-green to-pastel-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-gray-800 transition-colors">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aftercare with Interactive List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Aftercare Instructions
              </h2>
              <p className="text-xl text-gray-600">
                Follow these guidelines for optimal results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aftercare.map((instruction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 bg-gradient-to-r from-pastel-pink to-emerald-500 rounded-full mt-2 flex-shrink-0"
                  />
                  <span className="text-gray-700 group-hover:text-gray-800 transition-colors">{instruction}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs with Smooth Animations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about hair treatments
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-pastel-pink" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Parallax */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border-2 border-pastel-pink/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-24 h-24 border-2 border-pastel-green/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-emerald-400/20 rounded-full"
        />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Restore Your Hair?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your hair consultation with Dr. Jaishree and discover 
              the perfect solution for your hair loss concerns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Book Consultation</span>
              </Link>
              
              <Link
                href="/treatments"
                className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-300"
              >
                <span>View All Treatments</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}


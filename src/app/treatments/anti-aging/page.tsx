"use client";

import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Sparkles, Zap, Target, Activity, Heart, Scissors } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const antiAgingTreatments = [
  {
    name: "Neck Bands Treatment",
    description: "Reduce vertical neck bands for a smoother, more youthful neck",
    duration: "30-45 min",
    sessions: "1-2 sessions",
    results: "2-4 weeks",
    icon: Target,
    color: "from-blue-400 to-cyan-400",
    concerns: ["Neck bands", "Vertical lines", "Turkey neck", "Neck aging"]
  },
  {
    name: "Thread Lifts",
    description: "Non-surgical face and neck lifting using dissolvable threads",
    duration: "60-90 min",
    sessions: "1 session",
    results: "Immediate to 3 months",
    icon: Activity,
    color: "from-purple-400 to-pink-400",
    concerns: ["Sagging skin", "Face lift", "Neck lift", "Skin tightening"]
  },
  {
    name: "Pigmentation Treatments",
    description: "Advanced treatments for melasma, sun spots, and uneven skin tone",
    duration: "30-60 min",
    sessions: "4-8 sessions",
    results: "2-4 months",
    icon: Sparkles,
    color: "from-green-400 to-emerald-400",
    concerns: ["Melasma", "Sun spots", "Age spots", "Uneven skin tone"]
  },
  {
    name: "Acne Scars Management",
    description: "Comprehensive treatment for all types of acne scars",
    duration: "45-90 min",
    sessions: "6-12 sessions",
    results: "3-6 months",
    icon: Scissors,
    color: "from-orange-400 to-red-400",
    concerns: ["Acne scars", "Pitted scars", "Rolling scars", "Ice pick scars"]
  }
];

const benefits = [
  "Comprehensive anti-aging solutions",
  "Non-surgical rejuvenation options",
  "Long-lasting results",
  "Minimal downtime and discomfort",
  "Personalized treatment plans",
  "Advanced technology and techniques"
];

const aftercare = [
  "Keep treated areas clean and protected",
  "Avoid sun exposure for 1-2 weeks",
  "Use recommended skincare products",
  "Follow up with your provider",
  "Maintain results with healthy lifestyle",
  "Schedule maintenance treatments as needed"
];

const faqs = [
  {
    question: "What anti-aging treatments are available?",
    answer: "We offer comprehensive anti-aging treatments including neck bands treatment, thread lifts, pigmentation treatments, and acne scars management. Each treatment is customized to address your specific aging concerns and skin condition."
  },
  {
    question: "How long do anti-aging treatment results last?",
    answer: "Results vary by treatment type. Thread lifts last 1-2 years, pigmentation treatments can be permanent with maintenance, and acne scar treatments show progressive improvement over 3-6 months. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "Are anti-aging treatments painful?",
    answer: "Most treatments involve minimal discomfort. We use topical numbing creams, local anesthesia, and advanced techniques to ensure comfort. Most patients describe it as a mild sensation that's well-tolerated."
  },
  {
    question: "When will I see results from anti-aging treatments?",
    answer: "Results timeline varies: thread lifts show immediate lifting, pigmentation treatments show improvement in 2-4 weeks, and acne scar treatments show progressive improvement over 3-6 months. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "Who is a good candidate for anti-aging treatments?",
    answer: "Good candidates are adults with realistic expectations and specific aging concerns. We assess your skin condition, medical history, and goals to recommend the most suitable treatment plan for your anti-aging needs."
  }
];

export default function AntiAgingPage() {
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
                <Sparkles className="w-4 h-4" />
                <span>Youthful Transformation</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                Anti-Aging &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-purple-500">
                  Rejuvenation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Turn back the clock with advanced anti-aging treatments. 
                From neck bands to thread lifts, discover comprehensive 
                solutions for a more youthful appearance.
              </motion.p>

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
              {/* Main Hero Image */}
              <div className="relative bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-3xl p-8 aspect-square overflow-hidden mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-pastel-pink/20 rounded-2xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-2 border-purple-400/20 rounded-xl"
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/antiaging/1.webp"
                    alt="Anti-Aging Treatments - Dr. Jaishree Sharad"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/antiaging/2.webp"
                    alt="Anti-Aging Before/After - Wrinkle Reduction Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/antiaging/3.webp"
                    alt="Anti-Aging Before/After - Skin Firming Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/antiaging/4.webp"
                    alt="Anti-Aging Treatment Process"
                    className="w-full h-full object-cover"
                  />
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
              { icon: Clock, label: "Duration", value: "30-90 min", color: "bg-pastel-green" },
              { icon: AlertTriangle, label: "Downtime", value: "1-7 days", color: "bg-pastel-pink" },
              { icon: Calendar, label: "Results", value: "2 weeks - 6 months", color: "bg-pastel-green" },
              { icon: CheckCircle, label: "Non-Surgical", value: "Yes", color: "bg-pastel-pink" }
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

      {/* Anti-Aging Treatments with Interactive Cards */}
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
                Our Anti-Aging Treatments
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions for youthful transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {antiAgingTreatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  
                  onClick={() => setSelectedTreatment(index)}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-full h-40 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-6 overflow-hidden">
                      <img 
                        src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/antiaging/treatments/${treatment.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
                        alt={`${treatment.name} anti-aging treatment`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-40 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                              <div class="text-center">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  class="w-16 h-16 bg-gradient-to-r ${treatment.color} rounded-full flex items-center justify-center mx-auto mb-2"
                                >
                                  <treatment.icon class="w-8 h-8 text-white" />
                                </motion.div>
                                <p class="text-gray-600 font-medium text-sm">${treatment.name}</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    
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
                Benefits of Anti-Aging Treatments
              </h2>
              <p className="text-xl text-gray-600">
                Why choose our rejuvenation solutions
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
                    className="w-3 h-3 bg-gradient-to-r from-pastel-pink to-purple-500 rounded-full mt-2 flex-shrink-0"
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
                Common questions about anti-aging treatments
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-purple-400/20 rounded-full"
        />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Turn Back Time?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your anti-aging consultation with Dr. Jaishree and discover 
              how we can help you achieve a more youthful, radiant appearance.
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


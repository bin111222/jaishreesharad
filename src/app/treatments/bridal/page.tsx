"use client";

import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, Calendar, Crown, Sparkles, Zap, Heart, Shield, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const bridalTreatments = [
  {
    name: "Fruit Peels & Whitening Peels",
    description: "Remove blemishes and superficial acne scars while giving an even skin tone. Stimulates collagen to reduce and prevent fine lines & wrinkles.",
    duration: "30-45 min",
    sessions: "4-6 sessions",
    icon: Sparkles,
    color: "from-orange-400 to-yellow-400",
    benefits: ["Even skin tone", "Blemish removal", "Anti-aging", "Collagen stimulation"]
  },
  {
    name: "Skin Polishing (Microdermabrasion)",
    description: "Safe, quick, and proven effective for all skin colors and types. Gives brighter, smoother appearance to face, neck, hands, back, legs and chest.",
    duration: "45-60 min",
    sessions: "6-8 sessions",
    icon: Zap,
    color: "from-blue-400 to-purple-400",
    benefits: ["Exfoliation", "Brighter skin", "Smoother texture", "All skin types"]
  },
  {
    name: "Vitamin Mesoglow Therapy",
    description: "Micro-injection of vitamins, amino acids, and medications in the dermis for skin rejuvenation, dark circles, fine lines and wrinkles or party glow.",
    duration: "30-45 min",
    sessions: "3-5 sessions",
    icon: Heart,
    color: "from-pink-100 to-rose-400",
    benefits: ["Skin rejuvenation", "Dark circle treatment", "Fine line reduction", "Instant glow"]
  },
  {
    name: "Photofacial",
    description: "Nd Yag laser for instant glow, skin tightening and closing of open pores. Perfect for immediate results before functions or marriage.",
    duration: "20-30 min",
    sessions: "2-3 sessions",
    icon: Sun,
    color: "from-yellow-400 to-orange-400",
    benefits: ["Instant glow", "Skin tightening", "Pore reduction", "Quick results"]
  },
  {
    name: "Laser Hair Removal",
    description: "Get smooth radiant skin by removing unwanted hair & ingrowths. Long Pulsed Diode or Long Pulsed Nd Yag laser safe for Indian skin.",
    duration: "15-60 min",
    sessions: "6-8 sessions",
    icon: Shield,
    color: "from-green-400 to-teal-400",
    benefits: ["Permanent reduction", "Smooth skin", "No ingrowths", "Safe for Indian skin"]
  },
  {
    name: "Botox for Jaw Contouring",
    description: "Achieve a chiselled jaw like the new Kareena look. Not painful, results take 4-6 weeks to show. Take well in advance before wedding.",
    duration: "15-30 min",
    sessions: "1-2 sessions",
    icon: Crown,
    color: "from-purple-400 to-pink-100",
    benefits: ["Jaw contouring", "Non-surgical", "Natural results", "Long-lasting"]
  }
];

const bridalTips = [
  {
    title: "When to Start",
    description: "Begin at least 3 months in advance, or 6 months if skin is pigmented or has acne, before the big day.",
    icon: Calendar,
    color: "from-green-400 to-blue-400"
  },
  {
    title: "Diet & Lifestyle",
    description: "Healthy low salt, low calorie, protein rich diet. 6-8 hours of sleep everyday. Avoid sun exposure.",
    icon: Heart,
    color: "from-pink-100 to-rose-400"
  },
  {
    title: "Sun Protection",
    description: "Use oil free sunscreen with SPF 30 about 20 mins before stepping out. Reapply if out for more than 3 hours.",
    icon: Sun,
    color: "from-yellow-400 to-orange-400"
  },
  {
    title: "Last Minute Care",
    description: "Go for mild alpha hydroxy peels once in a fortnight. One or two sessions of skin polishing will clear dead skin and remove tan.",
    icon: Sparkles,
    color: "from-purple-400 to-pink-100"
  }
];

const thingsToAvoid = [
  "Oily/Acne prone skin: Avoid facials and massage",
  "Bleaching: Avoid just before wedding, trial 8 weeks prior",
  "Waxing/Threading: Avoid if prone to ingrowths",
  "Salt, chocolates, caffeine, sweets, fried food",
  "Sun exposure: Shopping after 5 pm preferred",
  "Makeup products older than 6 months",
  "Crash dieting: Can cause hair fall and dull skin"
];

export default function BridalCarePage() {
  const [selectedTreatment, setSelectedTreatment] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <Layout>
      {/* Hero Section */}
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
                <Crown className="w-4 h-4" />
                <span>Bridal Skin Care</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                Bridal
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-gold-500">
                  Skin Care
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Treatments that make your skin glow before D-Day. Our comprehensive bridal care program includes specialized treatments designed to give you the perfect bridal glow, from skin brightening to advanced rejuvenation therapies.
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
                  <span>View Treatments</span>
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
              <div className="relative bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-3xl p-8 aspect-square mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-pastel-pink/20 rounded-2xl"
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridal/1.webp"
                    alt="Bridal Skin Care - Dr. Jaishree Sharad"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridal/2.webp"
                    alt="Bridal Skin Care - Dr. Jaishree Sharad"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridal/3.webp"
                    alt="Bridal Treatments"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridal/4.webp"
                    alt="Bridal Results"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Timeline</h3>
              <p className="text-gray-600">3-6 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Treatments</h3>
              <p className="text-gray-600">6+ sessions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Results</h3>
              <p className="text-gray-600">Bridal Glow</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Customized</h3>
              <p className="text-gray-600">Personalized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Treatments */}
      <section id="treatments" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Bridal Care Treatments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive range of treatments designed specifically for brides to achieve 
                the perfect glow for their special day
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bridalTreatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-6 overflow-hidden">
                    <img 
                      src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridal/treatments/${treatment.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}.webp`}
                      alt={`${treatment.name} treatment`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-48 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-16 h-16 bg-gradient-to-r ${treatment.color} rounded-full flex items-center justify-center mx-auto mb-3">
                                <${treatment.icon.name} class="w-8 h-8 text-white" />
                              </div>
                              <p class="text-gray-600 font-medium">${treatment.name}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-center text-lg">{treatment.name}</h3>
                  <p className="text-gray-600 mb-4 text-center leading-relaxed">{treatment.description}</p>
                  
                  <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-4 border border-pastel-green/20 mb-4">
                    <div className="flex justify-between text-sm text-gray-600 font-medium mb-2">
                      <span>Duration: {treatment.duration}</span>
                      <span>Sessions: {treatment.sessions}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800 text-sm">Benefits:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {treatment.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bridal Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Essential Bridal Tips
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert advice to help you achieve the perfect bridal glow and prepare for your special day
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bridalTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tip.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <tip.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-center text-xl">{tip.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Things to Avoid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Things to Avoid Before Your Wedding
              </h2>
              <p className="text-xl text-gray-600">
                Important precautions to ensure your skin looks its best on your special day
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {thingsToAvoid.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pastel-pink rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready for Your Bridal Transformation?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your bridal consultation with Dr. Jaishree and start 
              your journey to becoming the most beautiful bride.
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

"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentAreas = [
  {
    area: "Acne Scars",
    description: "Effectively treats various types of acne scars",
    result: "Smoother, more even skin"
  },
  {
    area: "Pigmentation",
    description: "Reduces hyperpigmentation and dark spots",
    result: "More even, uniform skin tone"
  },
  {
    area: "Fine Lines & Wrinkles",
    description: "Reduces fine lines and wrinkles",
    result: "More youthful appearance"
  },
  {
    area: "Skin Texture",
    description: "Improves overall skin texture and smoothness",
    result: "Refined, silky-smooth skin"
  },
  {
    area: "Pore Size",
    description: "Minimizes pore appearance",
    result: "Tighter, more refined pores"
  },
  {
    area: "Skin Rejuvenation",
    description: "Overall skin quality improvement",
    result: "Radiant, refreshed complexion"
  }
];

const faqs = [
  {
    question: "What is Fractional Pico Laser and how does it work?",
    answer: "Fractional Pico Laser combines picosecond laser technology with fractional delivery to treat acne scars, pigmentation, and skin texture issues. The ultra-short picosecond pulses create controlled micro-injuries that stimulate collagen production and skin remodeling, while the fractional approach ensures faster healing and minimal downtime. The picosecond pulses are faster than traditional nanosecond pulses, creating a more efficient photoacoustic effect with less heat generation, reducing the risk of side effects while providing superior results."
  },
  {
    question: "How long do Fractional Pico Laser results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Fractional Pico Laser treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Fractional Pico Laser?",
    answer: "Ideal candidates are adults with acne scars, hyperpigmentation, fine lines, wrinkles, or uneven skin texture. Fractional Pico Laser is suitable for all skin types and can address multiple concerns simultaneously. It's particularly effective for those seeking scar reduction with minimal downtime. We'll evaluate your skin during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients require 3-6 sessions, spaced 4-6 weeks apart, for optimal results. The exact number depends on the severity of concerns, skin condition, and individual response. Maintenance treatments can be done every 6-12 months."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice initial improvement in skin texture within 2-4 weeks. Full results develop over 2-3 months as new collagen forms. Results continue to improve for up to 6 months post-treatment. The fractional approach allows for progressive improvement with each session."
  },
  {
    question: "Is Fractional Pico Laser painful?",
    answer: "Most patients experience mild to moderate discomfort during treatment. We apply numbing cream before the procedure to ensure your comfort. The sensation is generally described as a warm, snapping feeling. The treatment is well-tolerated with proper numbing."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include redness, swelling, and slight sensitivity that typically resolve within 24-48 hours. Some patients may experience minor bruising or pinpoint bleeding. The skin may feel like a mild sunburn for a day or two. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "How does Fractional Pico differ from other lasers?",
    answer: "Fractional Pico uses picosecond pulses (faster than nanosecond pulses) combined with fractional delivery. This creates less thermal damage, faster healing, and minimal downtime compared to traditional lasers. The fractional approach treats only a portion of the skin, allowing faster recovery while maintaining effectiveness."
  },
  {
    question: "Can Fractional Pico Laser be combined with other treatments?",
    answer: "Yes, Fractional Pico Laser can be combined with other treatments like fillers, PRP, or regenerative treatments for comprehensive facial rejuvenation. However, treatments should be spaced appropriately. We'll create a personalized treatment plan during your consultation."
  },
  {
    question: "How long do results last?",
    answer: "Results can last 12-18 months or longer, depending on individual factors, age, and lifestyle. The new collagen that forms is your body's own tissue, so results are natural and long-lasting. Maintenance treatments every 6-12 months can help prolong and enhance results."
  }
];

const benefits = [
  "Advanced picosecond technology for superior results",
  "Fractional approach for faster healing",
  "Effectively treats scars and pigmentation",
  "Stimulates collagen production",
  "Minimal downtime compared to traditional lasers",
  "Less thermal damage and side effects",
  "Suitable for all skin types with proper settings",
  "Can address multiple concerns simultaneously"
];

const aftercare = [
  "Apply gentle, hydrating moisturizer as recommended",
  "Avoid sun exposure and use SPF 50+ daily (critical!)",
  "No makeup for 24-48 hours",
  "Avoid harsh skincare products for 5-7 days",
  "Stay hydrated and maintain a healthy diet",
  "Avoid saunas, steam rooms, and intense exercise for 48 hours",
  "Do not pick or scratch treated areas",
  "Attend all scheduled follow-up sessions",
  "Contact us if you experience any unusual reactions"
];

export default function FractionalPicoLaserPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <section className="relative py-20 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                Fractional Pico Laser
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fractional Pico Laser combines picosecond laser technology with fractional delivery to treat acne scars, pigmentation, and skin texture issues. The ultra-short picosecond pulses create controlled micro-injuries that stimulate collagen production and skin remodeling, while the fractional approach ensures faster healing and minimal downtime compared to traditional laser treatments.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>30-60 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (50+ reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="#faqs"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-4xl">✨</span>
                  </div>
                  <p className="text-gray-600 font-medium">Fractional Pico Laser</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Duration</h3>
              <p className="text-gray-600">30-60 min</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Downtime</h3>
              <p className="text-gray-600">Minimal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Results</h3>
              <p className="text-gray-600">Varies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Safe</h3>
              <p className="text-gray-600">Yes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                Treatment Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fractional Pico Laser effectively addresses multiple skin concerns for comprehensive rejuvenation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentAreas.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-800 mb-3">
                    {treatment.area}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {treatment.description}
                  </p>
                  <div className="flex items-center space-x-2 text-pastel-green">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{treatment.result}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-6">
                How Fractional Pico Laser Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the picosecond fractional approach
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Fractional Pattern Creation</h3>
                <p className="text-gray-700">
                  The laser creates a pattern of microscopic columns in the skin, treating only a 
                  fraction of the skin surface. Each column receives picosecond laser energy, creating 
                  controlled micro-injuries while leaving surrounding tissue completely intact for 
                  faster healing.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Picosecond Pulse Delivery</h3>
                <p className="text-gray-700">
                  Ultra-short picosecond pulses (trillionths of a second) are delivered to each column. 
                  These pulses are faster than traditional nanosecond pulses, creating a more efficient 
                  photoacoustic effect with less heat generation. This reduces thermal damage to 
                  surrounding tissue while effectively treating scars and pigmentation.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Collagen Stimulation</h3>
                <p className="text-gray-700">
                  The controlled micro-injuries trigger the body's natural healing response, activating 
                  fibroblasts to produce new collagen and elastin. The photoacoustic effect also helps 
                  break down scar tissue and pigmentation, while the minimal heat reduces the risk of 
                  side effects.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Progressive Improvement</h3>
                <p className="text-gray-700">
                  Over the following weeks and months, new collagen forms, scars improve, and 
                  pigmentation fades. The fractional approach allows for faster healing while the 
                  picosecond technology provides effective treatment with minimal downtime. With 
                  multiple sessions, the cumulative effect provides significant, long-lasting results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
                Benefits of Fractional Pico Laser
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-pastel-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-gray-800" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aftercare */}
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
                Aftercare Instructions
              </h2>
              <p className="text-xl text-gray-600">
                Follow these guidelines for optimal results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aftercare.map((instruction, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-pastel-pink rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{instruction}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-gray-50">
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
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <ArrowRight 
                      className={`w-5 h-5 text-pastel-pink transition-transform ${
                        openFaq === index ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your Fractional Pico Laser consultation with Dr. Jaishree today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
              
              <Link
                href="/treatments"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
              >
                <span>View All Treatments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

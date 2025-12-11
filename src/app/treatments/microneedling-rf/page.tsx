"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentAreas = [
  {
    area: "Acne Scars",
    description: "Reduces the appearance of acne scars and improves skin texture",
    benefit: "Smoother, more even skin"
  },
  {
    area: "Fine Lines & Wrinkles",
    description: "Reduces fine lines and wrinkles through collagen stimulation",
    benefit: "More youthful appearance"
  },
  {
    area: "Skin Texture",
    description: "Improves overall skin texture and smoothness",
    benefit: "Refined, silky-smooth skin"
  },
  {
    area: "Pore Size",
    description: "Minimizes pore appearance",
    benefit: "Tighter, more refined pores"
  },
  {
    area: "Skin Tightening",
    description: "Tightens and lifts sagging skin",
    benefit: "Firmer, more lifted skin"
  },
  {
    area: "Stretch Marks",
    description: "Improves the appearance of stretch marks",
    benefit: "Smoother, more even skin"
  }
];

const faqs = [
  {
    question: "What is Microneedling RF and how does it work?",
    answer: "Microneedling RF combines traditional microneedling with radiofrequency energy. Fine insulated needles create micro-channels in the skin while simultaneously delivering RF energy deep into the dermis. The microneedles create controlled micro-injuries that trigger collagen production, while the RF energy heats the deep dermal layers, causing immediate collagen contraction and stimulating additional collagen production. This dual-action approach provides superior results compared to microneedling alone."
  },
  {
    question: "How long do Microneedling RF results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Microneedling RF treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Microneedling RF?",
    answer: "Ideal candidates are adults with acne scars, fine lines, wrinkles, uneven skin texture, or sagging skin. Microneedling RF is suitable for all skin types and can be used on the face, neck, and body. It's particularly effective for those seeking to improve skin texture and reduce scars. We'll assess your skin condition during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients see optimal results with 3-6 sessions, spaced 4-6 weeks apart. The exact number depends on the severity of concerns, treatment area, and individual response. Maintenance treatments can be done every 6-12 months."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice immediate skin tightening right after treatment. Full results develop over 2-3 months as new collagen forms. Results continue to improve for up to 6 months post-treatment. The combination of immediate and progressive results provides both instant gratification and long-term benefits."
  },
  {
    question: "Is Microneedling RF painful?",
    answer: "Most patients experience mild to moderate discomfort during treatment. We apply numbing cream before the procedure to ensure your comfort. The sensation is generally described as a warm, prickling feeling. The treatment is well-tolerated by most patients."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include redness, swelling, and slight sensitivity that typically resolve within 24-48 hours. Some patients may experience minor bruising or pinpoint bleeding. The skin may feel like a mild sunburn for a day or two. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "How does Microneedling RF differ from regular microneedling?",
    answer: "Microneedling RF adds radiofrequency energy to traditional microneedling. The RF energy provides immediate skin tightening and stimulates additional collagen production through thermal effects. This dual-action approach makes it more effective than microneedling alone, especially for skin tightening and scar reduction."
  },
  {
    question: "Can Microneedling RF be combined with other treatments?",
    answer: "Yes, Microneedling RF can be combined with other treatments like fillers, Botox, or laser treatments for comprehensive facial rejuvenation. However, treatments should be spaced appropriately. We'll create a personalized treatment plan during your consultation."
  },
  {
    question: "How long do results last?",
    answer: "Results can last 12-18 months or longer, depending on individual factors, age, and lifestyle. The new collagen that forms is your body's own tissue, so results are natural and long-lasting. Maintenance treatments every 6-12 months can help prolong and enhance results."
  }
];

const benefits = [
  "Dual-action treatment combining microneedling and RF",
  "More effective than microneedling alone",
  "Stimulates natural collagen production",
  "Immediate skin tightening effects",
  "Reduces acne scars and improves texture",
  "Minimal downtime - return to activities within 24-48 hours",
  "Suitable for all skin types",
  "Can be used on face, neck, and body"
];

const aftercare = [
  "Apply gentle, hydrating moisturizer as recommended",
  "Avoid sun exposure and use SPF 50+ daily",
  "No makeup for 24-48 hours",
  "Avoid harsh skincare products (retinoids, acids) for 5-7 days",
  "Stay hydrated and maintain a healthy diet",
  "Avoid saunas, steam rooms, and intense exercise for 48 hours",
  "Do not pick or scratch treated areas",
  "Attend all scheduled follow-up sessions",
  "Contact us if you experience any unusual reactions"
];

export default function MicroneedlingRFPage() {
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
                Microneedling RF
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Microneedling RF combines the benefits of traditional microneedling with radiofrequency energy. Fine needles create micro-channels in the skin while simultaneously delivering RF energy deep into the dermis. This dual-action approach stimulates collagen production, tightens skin, and improves texture more effectively than microneedling alone.
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
                  <p className="text-gray-600 font-medium">Microneedling RF</p>
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
                Microneedling RF effectively addresses multiple skin concerns for comprehensive rejuvenation.
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
                    <span className="text-sm font-medium">{treatment.benefit}</span>
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
                How Microneedling RF Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the dual-action approach to skin rejuvenation
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Micro-Channel Creation</h3>
                <p className="text-gray-700">
                  Fine insulated needles penetrate the skin, creating thousands of microscopic channels. These 
                  micro-injuries trigger the body's natural healing response, activating fibroblasts (cells that 
                  produce collagen) and initiating the wound healing cascade.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Radiofrequency Energy Delivery</h3>
                <p className="text-gray-700">
                  Simultaneously, radiofrequency energy is delivered through the insulated needles deep into 
                  the dermis. The RF energy heats the deep dermal layers to optimal temperatures (typically 
                  60-70°C), causing immediate collagen contraction and creating controlled thermal injury.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Dual Collagen Stimulation</h3>
                <p className="text-gray-700">
                  The combination of microneedling (mechanical injury) and RF (thermal injury) creates a dual 
                  stimulus for collagen production. The micro-channels allow for better penetration of growth 
                  factors, while the RF energy provides immediate tightening and additional long-term collagen 
                  stimulation.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Progressive Results</h3>
                <p className="text-gray-700">
                  Over the following weeks and months, new collagen forms in response to both the mechanical 
                  and thermal injuries. This dual stimulation leads to more significant improvements in skin 
                  texture, firmness, and appearance compared to microneedling alone. Results continue to improve 
                  for up to 6 months.
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
                Benefits of Microneedling RF
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
              Book your Microneedling RF consultation with Dr. Jaishree today.
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

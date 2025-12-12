"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is Forma RF and how does it work?",
    answer: "Forma RF is a radiofrequency treatment that uses advanced technology to heat the deep layers of the skin, stimulating collagen production and causing immediate tissue contraction. This results in skin tightening, lifting, and overall rejuvenation."
  },
  {
    question: "What areas can be treated with Forma RF?",
    answer: "Forma RF can be used on the face, neck, décolletage, and body. It's effective for skin tightening, wrinkle reduction, and improving overall skin texture and tone."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients see optimal results with 3-6 sessions, spaced 2-4 weeks apart. The exact number depends on your skin condition and treatment goals."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice immediate tightening, with full results developing over 2-3 months as new collagen forms. Results continue to improve for up to 6 months."
  },
  {
    question: "Is Forma RF painful?",
    answer: "Forma RF is comfortable with only mild warmth or tingling sensations. The treatment uses advanced cooling technology to ensure patient comfort throughout the procedure. Most patients find it relaxing and can read or watch videos during treatment."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild redness and slight swelling that typically resolve within a few hours. Some patients may experience temporary skin sensitivity. Serious side effects are very rare when performed by an experienced provider. The treatment is very safe with minimal downtime."
  },
  {
    question: "How long do results last?",
    answer: "Results can last 12-18 months or longer, depending on individual factors and maintenance. The new collagen that forms is your body's own tissue, so results are natural and long-lasting. Maintenance treatments every 6-12 months can help prolong results."
  },
  {
    question: "Can Forma RF be combined with other treatments?",
    answer: "Yes, Forma RF can be combined with other treatments like fillers, Botox, or laser treatments for enhanced results. We'll create a personalized treatment plan during your consultation to address all your concerns effectively."
  }
];

const benefits = [
  "Non-invasive skin tightening",
  "Stimulates natural collagen production",
  "Improves skin texture and tone",
  "Reduces fine lines and wrinkles",
  "Suitable for all skin types",
  "No downtime required"
];

const aftercare = [
  "No special aftercare required",
  "You can resume normal activities immediately",
  "Avoid sun exposure for 24-48 hours",
  "Stay hydrated to support collagen production",
  "Use sunscreen daily to protect results",
  "Follow up with your provider as recommended"
];

export default function FormaRFPage() {
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
                Forma RF
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Radiofrequency treatment for skin rejuvenation and tightening. Forma RF uses advanced RF technology to stimulate collagen production and provide natural-looking skin tightening results.
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
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/forma-rf/forma-rf.webp"
                  alt="Forma RF treatment"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-white text-4xl">⚡</span>
                          </div>
                          <p class="text-gray-600 font-medium">Forma RF</p>
                        </div>
                      </div>
                    `;
                  }}
                />
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
              <p className="text-gray-600">None</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Sessions</h3>
              <p className="text-gray-600">3-6 sessions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Non-Invasive</h3>
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
                Forma RF can be used on multiple areas of the face and body to achieve comprehensive skin tightening 
                and rejuvenation results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { area: "Face", description: "Tightens and lifts facial skin, reduces fine lines and wrinkles", benefit: "Firmer, more youthful face" },
                { area: "Neck", description: "Improves neck contour and reduces sagging skin", benefit: "Smoother, tighter neck" },
                { area: "Décolletage", description: "Rejuvenates chest area and reduces fine lines", benefit: "Radiant, smooth décolletage" },
                { area: "Jawline", description: "Defines and tightens the jawline for better contour", benefit: "Sharper, more defined jawline" },
                { area: "Forehead", description: "Smooths forehead lines and tightens skin", benefit: "Smoother, lifted forehead" },
                { area: "Body", description: "Tightens loose skin on arms, abdomen, and thighs", benefit: "Firmer, more toned body"
              }].map((treatment, index) => (
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
                How Forma RF Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the science behind radiofrequency skin tightening
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Radiofrequency Energy Delivery</h3>
                <p className="text-gray-700">
                  Forma RF uses advanced radiofrequency technology to deliver controlled heat energy deep into the dermal 
                  layers of the skin. The device uses a unique applicator that ensures even distribution of RF energy 
                  across the treatment area.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Immediate Tissue Contraction</h3>
                <p className="text-gray-700">
                  As the RF energy heats the collagen fibers in the dermis, they contract immediately. This creates an 
                  instant tightening effect that patients may notice right after treatment. The heat also causes water 
                  molecules in the skin to reorganize, contributing to the tightening effect.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Collagen Remodeling</h3>
                <p className="text-gray-700">
                  The controlled heat creates micro-injuries in the collagen structure, triggering the body's natural 
                  healing response. Over the following weeks and months, fibroblasts produce new, stronger collagen fibers 
                  to replace the damaged ones, resulting in improved skin firmness and elasticity.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Progressive Results</h3>
                <p className="text-gray-700">
                  Results continue to improve over 2-6 months as new collagen forms. The combination of immediate 
                  tightening and long-term collagen production provides both instant gratification and lasting results. 
                  Multiple sessions enhance and maintain these improvements.
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
                Benefits of Forma RF
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
              Ready to Experience Forma RF?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree to discuss how Forma RF can rejuvenate your skin.
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


"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentBenefits = [
  {
    benefit: "Tightening",
    description: "Tightens and firms intimate areas",
    result: "Improved tightness and firmness"
  },
  {
    benefit: "Elasticity Improvement",
    description: "Improves skin elasticity",
    result: "More resilient, youthful tissue"
  },
  {
    benefit: "Laxity Reduction",
    description: "Reduces skin laxity and sagging",
    result: "Firmer, more toned appearance"
  },
  {
    benefit: "Collagen Production",
    description: "Stimulates natural collagen production",
    result: "Long-term tissue improvement"
  },
  {
    benefit: "Aesthetic Enhancement",
    description: "Improves overall aesthetic appearance",
    result: "Enhanced confidence and comfort"
  },
  {
    benefit: "Non-Invasive",
    description: "Safe, non-surgical treatment",
    result: "Comfortable treatment experience"
  }
];

const faqs = [
  {
    question: "What is Intimate Laser Tightening and how does it work?",
    answer: "Intimate Laser Tightening uses specialized laser technology designed for intimate area treatment. The laser energy penetrates deep into tissue, stimulating collagen production and causing tissue remodeling, resulting in improved tightness, elasticity, and rejuvenation of intimate areas. The laser creates controlled micro-injuries that trigger the body's natural healing response, leading to new collagen formation and tissue tightening. This non-invasive treatment provides effective results with minimal discomfort."
  },
  {
    question: "How long do Intimate Laser Tightening results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Intimate Laser Tightening treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Intimate Laser Tightening?",
    answer: "Ideal candidates are adults experiencing laxity, reduced tightness, or seeking to improve elasticity in intimate areas. This treatment is suitable for all skin types and can address various concerns related to intimate area appearance and function. We'll assess your condition during a private, confidential consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients require 3-6 sessions, spaced 4-6 weeks apart, for optimal results. The exact number depends on the degree of laxity, individual response, and treatment goals. Maintenance treatments may be needed every 6-12 months."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice initial tightening within a few weeks. Full results develop over 2-3 months as new collagen forms. Results continue to improve for up to 6 months post-treatment. The combination of immediate and progressive results provides both instant gratification and long-term benefits."
  },
  {
    question: "Is Intimate Laser Tightening painful?",
    answer: "Most patients experience mild to moderate discomfort during treatment. We use specialized techniques and can apply numbing cream to ensure your comfort. The laser may cause a warm, prickling sensation, but the treatment is designed to be as comfortable as possible for sensitive areas."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild redness, swelling, or slight sensitivity that typically resolve within 24-48 hours. Some patients may experience temporary warmth or tingling. Serious side effects are rare when performed by an experienced provider with specialized techniques for intimate areas."
  },
  {
    question: "How long do results last?",
    answer: "Results can last 12-18 months or longer, depending on individual factors, age, and lifestyle. The new collagen that forms is your body's own tissue, so results are natural and long-lasting. Maintenance treatments every 6-12 months can help prolong and enhance results."
  },
  {
    question: "Is the treatment safe for intimate areas?",
    answer: "Yes, Intimate Laser Tightening uses specialized techniques and settings specifically designed for sensitive intimate areas. The treatment is performed by experienced professionals who understand the unique requirements of intimate area treatments. Safety and comfort are our top priorities."
  }
];

const benefits = [
  "Specialized laser treatment for intimate areas",
  "Safe and effective for sensitive skin",
  "Tightens and firms intimate areas",
  "Improves elasticity and reduces laxity",
  "Stimulates natural collagen production",
  "Minimal downtime - return to activities within 24-48 hours",
  "Professional, discreet treatment",
  "Long-lasting results with proper care"
];

const aftercare = [
  "Use gentle, fragrance-free products as recommended",
  "Avoid tight clothing for 24-48 hours",
  "Avoid sun exposure to treated areas",
  "No sexual activity for 24-48 hours",
  "Keep the area clean and dry",
  "Avoid harsh soaps or products",
  "Wear loose, breathable clothing",
  "Attend all scheduled follow-up sessions",
  "Contact us if you experience any unusual reactions"
];

export default function IntimateLaserTighteningPage() {
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
                Intimate Laser Tightening
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Intimate Laser Tightening uses specialized laser technology designed for intimate area treatment. The laser energy penetrates deep into tissue, stimulating collagen production and causing tissue remodeling, resulting in improved tightness, elasticity, and rejuvenation of intimate areas. This non-invasive treatment provides effective results with minimal discomfort.
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/intimate-laser-tightening/intimate-laser-tightening.webp"
                  alt="Tan Removal Medifacial Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-center">
                        <div class="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                          <span class="text-white text-4xl">✨</span>
                        </div>
                        <p class="text-gray-600 font-medium">Tan Removal Medifacial</p>
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

      {/* Treatment Benefits */}
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
                Treatment Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Intimate Laser Tightening provides comprehensive benefits for intimate area tightening and rejuvenation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentBenefits.map((treatment, index) => (
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
                    {treatment.benefit}
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
                How Intimate Laser Tightening Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the laser approach to intimate area tightening
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Laser Energy Delivery</h3>
                <p className="text-gray-700">
                  Specialized laser energy is delivered to the intimate area using applicators 
                  designed for sensitive areas. The laser energy penetrates deep into the tissue 
                  layers, creating controlled micro-injuries that trigger the body's natural 
                  healing response without damaging the surface skin.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Tissue Remodeling</h3>
                <p className="text-gray-700">
                  The laser energy causes controlled thermal injury in the deep dermal layers, 
                  stimulating fibroblasts to produce new collagen and elastin. This process 
                  remodels the tissue structure, improving tightness and elasticity while 
                  maintaining the health and function of intimate tissues.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Collagen Production</h3>
                <p className="text-gray-700">
                  Over the following weeks and months, the stimulated fibroblasts produce new 
                  collagen and elastin fibers. This new tissue provides structural support, 
                  improving tightness, firmness, and overall tissue quality. The laser's precise 
                  targeting ensures effective results while preserving tissue health.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Progressive Improvement</h3>
                <p className="text-gray-700">
                  With regular treatments, the intimate area becomes progressively tighter and more 
                  elastic. The cumulative effect of multiple sessions leads to significant 
                  improvement in tightness, firmness, and overall appearance. Results continue to 
                  improve for up to 6 months post-treatment as new collagen continues to form.
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
                Benefits of Intimate Laser Tightening
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
              Book your Intimate Laser Tightening consultation with Dr. Jaishree today.
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

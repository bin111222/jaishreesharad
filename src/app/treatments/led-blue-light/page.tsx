"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentBenefits = [
  {
    benefit: "Active Acne",
    description: "Effectively treats active acne breakouts",
    result: "Clearer, healthier skin"
  },
  {
    benefit: "Bacteria Elimination",
    description: "Kills Propionibacterium acnes bacteria",
    result: "Reduced breakouts"
  },
  {
    benefit: "Acne Prevention",
    description: "Prevents future acne formation",
    result: "Long-term clear skin"
  },
  {
    benefit: "Inflammation Reduction",
    description: "Reduces inflammation and redness",
    result: "Calmer, less irritated skin"
  },
  {
    benefit: "Healing Promotion",
    description: "Promotes faster healing of acne lesions",
    result: "Reduced scarring risk"
  },
  {
    benefit: "Non-Invasive",
    description: "Gentle, painless treatment",
    result: "Comfortable treatment experience"
  }
];

const faqs = [
  {
    question: "What is LED Blue Light and how does it work?",
    answer: "LED Blue Light Therapy is a non-invasive treatment that uses specific wavelengths of blue light (typically 415nm) to target and destroy Propionibacterium acnes (P. acnes) bacteria, the primary cause of acne. The blue light penetrates the skin and is absorbed by porphyrins (compounds produced by P. acnes bacteria), creating a chemical reaction that produces free radicals. These free radicals destroy the bacteria, reducing active breakouts and preventing new acne formation without damaging surrounding skin or causing side effects."
  },
  {
    question: "How long do LED Blue Light results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is LED Blue Light treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for LED Blue Light?",
    answer: "Ideal candidates are individuals with active acne, inflammatory acne, or those seeking to prevent breakouts. LED Blue Light is suitable for all skin types and can be used on various areas including face, chest, and back. It's particularly effective for those with mild to moderate acne and can be used as a maintenance treatment. We'll assess your skin condition during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients benefit from 2-3 sessions per week for 4-8 weeks initially, then maintenance sessions 1-2 times per week. The exact frequency depends on the severity of acne and individual response. Some patients may need more frequent sessions initially."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice improvement in inflammation and redness within a few days. Visible reduction in active acne typically occurs within 1-2 weeks, with full results appearing after 4-6 weeks of regular treatments. Results continue to improve with consistent sessions."
  },
  {
    question: "Is LED Blue Light painful?",
    answer: "No, LED Blue Light is completely painless and comfortable. You'll feel no sensation during treatment - just the gentle light on your skin. Many patients find it relaxing. There's no discomfort, burning, or pain associated with this treatment."
  },
  {
    question: "Are there any side effects?",
    answer: "LED Blue Light has no known side effects when used properly. It's completely safe and non-invasive. Unlike some acne treatments, it doesn't cause dryness, irritation, or sensitivity. It's one of the safest acne treatments available."
  },
  {
    question: "How long do results last?",
    answer: "Results can be maintained with regular treatments. Since LED Blue Light works by killing bacteria, consistent sessions help maintain clear skin. Many patients incorporate it into their regular skincare routine for ongoing acne prevention."
  },
  {
    question: "Can LED Blue Light be combined with other treatments?",
    answer: "Yes, LED Blue Light can be combined with other acne treatments like chemical peels, CO2 cryotherapy, or topical medications for comprehensive acne management. It can also be combined with red light therapy for enhanced healing. We'll create a personalized treatment plan during your consultation."
  }
];

const benefits = [
  "Non-invasive, painless treatment",
  "Effectively kills acne-causing bacteria",
  "Reduces active breakouts",
  "Prevents future acne formation",
  "No downtime - return to activities immediately",
  "Safe for all skin types",
  "Can be used on face, chest, and back",
  "Can be combined with other acne treatments"
];

const aftercare = [
  "Use gentle, non-comedogenic skincare products",
  "Avoid sun exposure and use SPF 50+ daily",
  "No special aftercare required",
  "Continue with your regular skincare routine",
  "Stay hydrated and maintain a healthy diet",
  "Attend regular sessions for optimal results",
  "Can be used as maintenance treatment",
  "Contact us if you experience any unusual reactions"
];

export default function LEDBlueLightPage() {
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
                LED Blue Light
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                LED Blue Light Therapy is a non-invasive treatment that uses specific wavelengths of blue light (typically 415nm) to target and destroy Propionibacterium acnes (P. acnes) bacteria, the primary cause of acne. This photodynamic therapy reduces active breakouts, prevents new acne formation, and promotes healing without damaging surrounding skin or causing side effects.
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
                  <p className="text-gray-600 font-medium">LED Blue Light</p>
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
                LED Blue Light provides comprehensive benefits for active acne treatment.
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
                How LED Blue Light Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the photodynamic approach to acne treatment
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Light Application</h3>
                <p className="text-gray-700">
                  Blue light at a specific wavelength (typically 415nm) is applied to the skin using 
                  LED panels. The light penetrates the skin to reach the sebaceous glands and hair 
                  follicles where acne-causing bacteria reside, without causing damage to surrounding 
                  healthy tissue.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Porphyrin Activation</h3>
                <p className="text-gray-700">
                  Propionibacterium acnes (P. acnes) bacteria naturally produce compounds called 
                  porphyrins. When blue light is absorbed by these porphyrins, it creates a 
                  photodynamic reaction that produces singlet oxygen - a highly reactive form of 
                  oxygen that is toxic to the bacteria.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Bacterial Destruction</h3>
                <p className="text-gray-700">
                  The singlet oxygen produced by the photodynamic reaction destroys the P. acnes 
                  bacteria, effectively killing them. This reduces the bacterial load in the skin, 
                  which in turn reduces active breakouts and prevents new acne from forming. The 
                  treatment is selective - it only affects bacteria that produce porphyrins.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Progressive Improvement</h3>
                <p className="text-gray-700">
                  With regular treatments, the bacterial load continues to decrease, leading to fewer 
                  breakouts and clearer skin. The treatment also helps reduce inflammation and promotes 
                  healing of existing acne lesions. Over time, consistent LED Blue Light therapy 
                  provides significant improvement in acne control and skin clarity.
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
                Benefits of LED Blue Light
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
              Book your LED Blue Light consultation with Dr. Jaishree today.
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

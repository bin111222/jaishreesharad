"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentIndications = [
  {
    indication: "Melasma",
    description: "Effectively treats melasma and hormonal pigmentation",
    result: "Clearer, more even skin tone"
  },
  {
    indication: "Post-Inflammatory Hyperpigmentation",
    description: "Reduces dark spots from acne or injuries",
    result: "Smoother, more even skin"
  },
  {
    indication: "Sun Spots",
    description: "Lightens sun-induced age spots",
    result: "Brighter, more uniform complexion"
  },
  {
    indication: "Uneven Skin Tone",
    description: "Even out overall skin tone",
    result: "More uniform, balanced complexion"
  },
  {
    indication: "Acne Scars",
    description: "Improves texture while reducing pigmentation",
    result: "Smoother, clearer skin"
  },
  {
    indication: "Skin Rejuvenation",
    description: "Overall skin brightening and improvement",
    result: "Radiant, refreshed complexion"
  }
];

const faqs = [
  {
    question: "What is Microneedling with Tranexamic Acid and how does it work?",
    answer: "Microneedling with Tranexamic Acid combines the collagen-stimulating benefits of microneedling with the powerful depigmenting effects of tranexamic acid. Fine needles create micro-channels in the skin, allowing tranexamic acid to penetrate deeply into the dermis. Tranexamic acid works by inhibiting the enzyme plasmin, which plays a role in melanin production, effectively reducing hyperpigmentation while microneedling simultaneously improves skin texture and stimulates collagen production."
  },
  {
    question: "How long do Microneedling with Tranexamic Acid results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Microneedling with Tranexamic Acid treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Microneedling with Tranexamic Acid?",
    answer: "Ideal candidates are adults with hyperpigmentation concerns such as melasma, post-inflammatory hyperpigmentation, sun spots, or uneven skin tone. This treatment is particularly effective for melasma, which can be challenging to treat. It's suitable for all skin types. We'll assess your skin condition during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients require 4-6 sessions, spaced 4-6 weeks apart, for optimal results. The exact number depends on the severity of pigmentation, type of hyperpigmentation, and individual response. Melasma may require more sessions and maintenance treatments."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice improvement in skin texture within 2-4 weeks. Visible lightening of pigmentation typically occurs within 4-8 weeks, with full results appearing after 3-4 months as tranexamic acid works to reduce melanin production and microneedling improves skin quality."
  },
  {
    question: "Is Microneedling with Tranexamic Acid painful?",
    answer: "Most patients experience mild to moderate discomfort during treatment. We apply numbing cream before the procedure to ensure your comfort. The sensation is generally described as a warm, prickling feeling. The treatment is well-tolerated by most patients."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include redness, swelling, and slight sensitivity that typically resolve within 24-48 hours. Some patients may experience minor bruising or pinpoint bleeding. The skin may feel like a mild sunburn for a day or two. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "How does this differ from regular microneedling?",
    answer: "This treatment adds tranexamic acid, which specifically targets pigmentation by inhibiting plasmin and reducing melanin production. While regular microneedling improves texture and stimulates collagen, this combination provides both texture improvement and significant pigmentation reduction, making it ideal for those with hyperpigmentation concerns."
  },
  {
    question: "Can this be combined with other treatments?",
    answer: "Yes, Microneedling with Tranexamic Acid can be combined with other treatments like laser therapy or chemical peels for comprehensive pigmentation treatment. However, treatments should be spaced appropriately. We'll create a personalized treatment plan during your consultation."
  },
  {
    question: "How long do results last?",
    answer: "Results can last 6-12 months or longer, depending on individual factors, sun exposure, and maintenance. It's crucial to use broad-spectrum SPF 50+ daily and avoid excessive sun exposure to maintain results. Maintenance treatments may be needed periodically, especially for melasma."
  }
];

const benefits = [
  "Dual-action treatment combining microneedling and depigmentation",
  "Effective for melasma and various hyperpigmentation types",
  "Deep penetration of tranexamic acid for better results",
  "Stimulates collagen production while reducing pigmentation",
  "Improves skin texture and tone simultaneously",
  "Minimal downtime - return to activities within 24-48 hours",
  "Suitable for all skin types",
  "Can be combined with other treatments for enhanced results"
];

const aftercare = [
  "Apply gentle, hydrating moisturizer as recommended",
  "Avoid sun exposure and use SPF 50+ daily (critical!)",
  "No makeup for 24-48 hours",
  "Avoid harsh skincare products (retinoids, acids) for 5-7 days",
  "Stay hydrated and maintain a healthy diet",
  "Avoid saunas, steam rooms, and intense exercise for 48 hours",
  "Do not pick or scratch treated areas",
  "Attend all scheduled follow-up sessions",
  "Contact us if you experience any unusual reactions"
];

export default function MicroneedlingwithTranexamicAcidPage() {
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
                Microneedling with Tranexamic Acid
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Microneedling with Tranexamic Acid combines the collagen-stimulating benefits of microneedling with the powerful depigmenting effects of tranexamic acid. This dual-action treatment creates micro-channels in the skin that allow tranexamic acid to penetrate deeply, effectively targeting and reducing hyperpigmentation, melasma, and dark spots while simultaneously improving skin texture and firmness.
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
                  <p className="text-gray-600 font-medium">Microneedling with Tranexamic Acid</p>
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

      {/* Treatment Indications */}
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
                What Microneedling with Tranexamic Acid Treats
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                This treatment effectively addresses various types of hyperpigmentation while improving skin texture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentIndications.map((treatment, index) => (
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
                    {treatment.indication}
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
                How Microneedling with Tranexamic Acid Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the dual-action approach to pigmentation reduction
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Micro-Channel Creation</h3>
                <p className="text-gray-700">
                  Fine needles penetrate the skin, creating thousands of microscopic channels. These 
                  micro-injuries trigger the body's natural healing response, activating fibroblasts 
                  (cells that produce collagen) and initiating the wound healing cascade.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Tranexamic Acid Infusion</h3>
                <p className="text-gray-700">
                  Tranexamic acid is applied to the skin and penetrates through the micro-channels deep 
                  into the dermis. This allows the active ingredient to reach the cells responsible for 
                  melanin production, where it can work most effectively.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Pigmentation Inhibition</h3>
                <p className="text-gray-700">
                  Tranexamic acid works by inhibiting the enzyme plasmin, which plays a key role in 
                  activating melanocytes (pigment-producing cells). By blocking this pathway, tranexamic 
                  acid reduces melanin production at the source, preventing new pigmentation and allowing 
                  existing pigmentation to fade.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Dual Benefits</h3>
                <p className="text-gray-700">
                  While tranexamic acid works to reduce pigmentation, microneedling simultaneously 
                  stimulates collagen production, improving skin texture, firmness, and overall quality. 
                  Over weeks and months, this dual action leads to visible improvements in both 
                  pigmentation and skin texture, providing comprehensive skin rejuvenation.
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
                Benefits of Microneedling with Tranexamic Acid
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
              Book your Microneedling with Tranexamic Acid consultation with Dr. Jaishree today.
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

"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentBenefits = [
  {
    benefit: "Fine Lines & Wrinkles",
    description: "Reduces the appearance of fine lines and wrinkles through active ingredients",
    result: "Smoother, more youthful skin"
  },
  {
    benefit: "Skin Texture",
    description: "Improves overall skin texture and smoothness",
    result: "Refined, silky-smooth skin"
  },
  {
    benefit: "Skin Radiance",
    description: "Enhances skin brightness and glow",
    result: "Radiant, luminous complexion"
  },
  {
    benefit: "Skin Firmness",
    description: "Stimulates collagen production for firmer skin",
    result: "Tighter, more elastic skin"
  },
  {
    benefit: "Hydration",
    description: "Deeply hydrates and plumps the skin",
    result: "Plumper, more supple skin"
  },
  {
    benefit: "Skin Tone",
    description: "Even out skin tone and reduce discoloration",
    result: "More uniform, balanced complexion"
  }
];

const faqs = [
  {
    question: "What are Anti-ageing Medi-facials and how do they work?",
    answer: "Anti-ageing Medi-facials are medical-grade facial treatments that use professional-strength active ingredients like peptides, growth factors, antioxidants, retinoids, and exfoliants. These ingredients penetrate deeper into the skin than regular facials, stimulating collagen production, improving cell turnover, and addressing multiple signs of ageing simultaneously. The treatment typically includes deep cleansing, exfoliation, extraction, active ingredient application, and specialized masks."
  },
  {
    question: "How long do Anti-ageing Medi-facials results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Anti-ageing Medi-facials treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Anti-ageing Medi-facials?",
    answer: "Ideal candidates are adults experiencing signs of ageing such as fine lines, dull skin, loss of elasticity, or uneven skin tone. These facials are suitable for all skin types and can be customized to address specific concerns. They're excellent for both preventive care in younger patients and rejuvenation in mature skin. We'll assess your skin condition during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "For optimal results, most patients benefit from a series of 4-6 sessions, spaced 2-4 weeks apart. Maintenance treatments can be done monthly or every 6-8 weeks. The exact frequency depends on your skin condition, age, and treatment goals."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice immediate improvement in skin brightness and hydration. Full results develop over 4-8 weeks as collagen production increases and skin texture improves. Results continue to improve with each session and regular maintenance treatments."
  },
  {
    question: "Are Anti-ageing Medi-facials painful?",
    answer: "No, these facials are generally very comfortable and relaxing. Some patients may experience mild tingling when active ingredients are applied, but this is temporary and well-tolerated. The treatment is designed to be pleasant and therapeutic."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild redness and slight skin sensitivity that typically resolve within a few hours. Some patients may experience temporary dryness or flaking, especially with stronger active ingredients. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "How long do results last?",
    answer: "Results can last 4-8 weeks, depending on the active ingredients used and individual factors. Regular maintenance treatments help maintain and enhance results. The cumulative benefits of multiple sessions provide longer-lasting improvements."
  },
  {
    question: "Can Anti-ageing Medi-facials be combined with other treatments?",
    answer: "Yes, these facials can be combined with other treatments like laser therapy, microneedling, or injectables for comprehensive facial rejuvenation. We'll create a personalized treatment plan during your consultation to address all your concerns effectively."
  }
];

const benefits = [
  "Medical-grade active ingredients for deeper penetration",
  "Stimulates natural collagen production",
  "Improves skin texture, tone, and radiance",
  "Reduces fine lines and wrinkles",
  "Deep hydration and skin plumping",
  "Minimal downtime - return to activities immediately",
  "Suitable for all skin types",
  "Can be customized to your specific skin concerns"
];

const aftercare = [
  "Use gentle, hydrating skincare products for 24-48 hours",
  "Avoid sun exposure and use SPF 50+ daily",
  "Avoid harsh skincare products (retinoids, acids) for 2-3 days",
  "Stay hydrated and maintain a healthy diet",
  "Avoid saunas, steam rooms, and intense exercise for 24 hours",
  "No makeup for 6-12 hours if skin is sensitive",
  "Use recommended serums and moisturizers",
  "Attend regular sessions for optimal results",
  "Contact us if you experience any unusual reactions"
];

export default function AntiageingMedifacialsPage() {
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
                Anti-ageing Medi-facials
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Anti-ageing Medi-facials are advanced, medical-grade facial treatments that combine professional-grade products, advanced techniques, and therapeutic ingredients to combat signs of ageing. These comprehensive facials go beyond traditional spa treatments, using active ingredients like peptides, growth factors, antioxidants, and exfoliants to stimulate collagen production, improve skin texture, and restore youthful radiance.
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
                  <p className="text-gray-600 font-medium">Anti-ageing Medi-facials</p>
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
                Anti-ageing Medi-facials address multiple signs of ageing through professional-grade 
                active ingredients and advanced techniques.
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
                How Anti-ageing Medi-facials Work
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the comprehensive approach to skin rejuvenation
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Deep Cleansing & Preparation</h3>
                <p className="text-gray-700">
                  The treatment begins with thorough cleansing and gentle exfoliation to remove dead skin cells, 
                  unclog pores, and prepare the skin for optimal absorption of active ingredients. This step ensures 
                  that the therapeutic products can penetrate deeply into the skin.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Active Ingredient Application</h3>
                <p className="text-gray-700">
                  Professional-grade active ingredients such as peptides, growth factors, antioxidants, retinoids, 
                  or vitamin C are applied to the skin. These ingredients penetrate deeper than regular skincare 
                  products, targeting cellular processes that affect ageing at the source.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Stimulation & Enhancement</h3>
                <p className="text-gray-700">
                  Techniques like massage, specialized masks, or light therapy may be used to enhance product 
                  penetration and stimulate circulation. This increases oxygen and nutrient delivery to skin cells, 
                  promoting cellular repair and regeneration.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Long-Term Benefits</h3>
                <p className="text-gray-700">
                  With regular treatments, the active ingredients stimulate collagen production, improve cell turnover, 
                  and enhance skin's natural repair processes. Over time, this leads to visible improvements in skin 
                  texture, firmness, radiance, and overall youthfulness.
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
                Benefits of Anti-ageing Medi-facials
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
              Book your Anti-ageing Medi-facials consultation with Dr. Jaishree today.
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

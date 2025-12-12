"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentBenefits = [
  {
    benefit: "Exfoliation",
    description: "Removes dead skin cells and unclogs pores",
    result: "Smoother, brighter skin"
  },
  {
    benefit: "Oxygenation",
    description: "Increases oxygen delivery to skin cells",
    result: "Radiant, glowing complexion"
  },
  {
    benefit: "Infusion",
    description: "Delivers active ingredients deep into the skin",
    result: "Enhanced skin health and appearance"
  },
  {
    benefit: "Hydration",
    description: "Deeply hydrates and plumps the skin",
    result: "Plumper, more supple skin"
  },
  {
    benefit: "Skin Clarity",
    description: "Improves skin texture and clarity",
    result: "Clearer, more refined complexion"
  },
  {
    benefit: "Anti-Ageing",
    description: "Stimulates collagen and reduces fine lines",
    result: "More youthful, rejuvenated skin"
  }
];

const faqs = [
  {
    question: "What is Oxygeneo 3-in-1 Facial and how does it work?",
    answer: "Oxygeneo 3-in-1 Facial combines three powerful therapies in one treatment: exfoliation, oxygenation, and infusion. The treatment uses a unique gel that creates a natural CO2 effect when applied to the skin. This triggers increased blood flow and oxygen delivery to skin cells while simultaneously exfoliating dead skin cells and infusing active ingredients deep into the skin. The three-in-one approach provides immediate and long-term skin improvements."
  },
  {
    question: "How long do Oxygeneo 3-in-1 Facial results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Oxygeneo 3-in-1 Facial treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Oxygeneo 3-in-1 Facial?",
    answer: "Ideal candidates are adults seeking skin rejuvenation, improved radiance, or addressing concerns like dull skin, fine lines, or uneven texture. Oxygeneo is suitable for all skin types and can be customized to address specific concerns. It's excellent for both preventive care and rejuvenation. We'll assess your skin during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "For optimal results, most patients benefit from a series of 4-6 sessions, spaced 2-4 weeks apart. Maintenance treatments can be done monthly or every 6-8 weeks. The exact frequency depends on your skin condition and treatment goals."
  },
  {
    question: "When will I see results?",
    answer: "Results are often visible immediately after treatment - skin looks brighter, more radiant, and glowing. Full results develop over 4-8 weeks with regular treatments as skin health improves. The cumulative benefits of multiple sessions provide longer-lasting improvements."
  },
  {
    question: "Is Oxygeneo 3-in-1 Facial painful?",
    answer: "No, the treatment is generally very comfortable and relaxing. Some patients may experience mild tingling or warmth from the CO2 effect, but this is temporary and well-tolerated. The treatment is designed to be pleasant and therapeutic."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild redness and slight skin sensitivity that typically resolve within a few hours. Some patients may experience temporary warmth or tingling. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "How long do results last?",
    answer: "Immediate results (glowing, radiant skin) are visible right away. The benefits can last 2-4 weeks, depending on your skin type, lifestyle, and skincare routine. Regular maintenance treatments help maintain and enhance results."
  },
  {
    question: "Can Oxygeneo be combined with other treatments?",
    answer: "Yes, Oxygeneo can be combined with other treatments like laser therapy, microneedling, or injectables for comprehensive facial rejuvenation. We'll create a personalized treatment plan during your consultation to address all your concerns effectively."
  }
];

const benefits = [
  "Three-in-one treatment for comprehensive results",
  "Natural CO2 effect for increased oxygenation",
  "Deep exfoliation and pore cleansing",
  "Active ingredient infusion for enhanced benefits",
  "Immediate visible results - glowing, radiant skin",
  "No downtime - return to activities immediately",
  "Suitable for all skin types",
  "Can be customized with different serums"
];

const aftercare = [
  "Use gentle, hydrating skincare products",
  "Avoid sun exposure and use SPF 50+ daily",
  "No makeup for 6-12 hours if skin is sensitive",
  "Avoid harsh skincare products for 24-48 hours",
  "Stay hydrated and maintain a healthy diet",
  "Avoid saunas and steam rooms for 24 hours",
  "Use recommended serums and moisturizers",
  "Attend regular sessions for optimal results",
  "Contact us if you experience any unusual reactions"
];

export default function Oxygeneo3in1FacialPage() {
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
                Oxygeneo 3-in-1 Facial
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Oxygeneo 3-in-1 Facial is a revolutionary treatment that combines three powerful therapies in one session: exfoliation, oxygenation, and infusion. This advanced facial uses a unique gel that creates a natural CO2 effect, triggering increased blood flow and oxygen delivery to the skin while infusing active ingredients for immediate and long-term skin improvement.
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/oxygeneo-facial/oxygeneo-facial.webp"
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
                Oxygeneo 3-in-1 Facial provides three powerful benefits in one comprehensive treatment.
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
                How Oxygeneo 3-in-1 Facial Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the three-in-one treatment process
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Exfoliation Phase</h3>
                <p className="text-gray-700">
                  A unique gel is applied to the skin that contains ingredients that create a natural CO2 effect. 
                  This gentle exfoliation removes dead skin cells, unclogs pores, and prepares the skin for 
                  optimal absorption of active ingredients.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Oxygenation Phase</h3>
                <p className="text-gray-700">
                  The CO2 effect triggers a natural response in the body - it increases blood flow and oxygen 
                  delivery to the skin cells. This enhanced oxygenation promotes cellular function, improves 
                  circulation, and gives the skin an immediate healthy, radiant glow.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Infusion Phase</h3>
                <p className="text-gray-700">
                  While the skin is oxygenated and pores are open, active ingredients are infused deep into 
                  the skin. The combination of increased blood flow and open pores allows for superior penetration 
                  of serums, vitamins, and other therapeutic ingredients, maximizing their effectiveness.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Immediate & Long-Term Results</h3>
                <p className="text-gray-700">
                  The three-in-one approach provides immediate visible results - skin looks brighter, more 
                  radiant, and glowing right after treatment. With regular sessions, the cumulative benefits 
                  of exfoliation, oxygenation, and active ingredient infusion lead to improved skin texture, 
                  reduced fine lines, and enhanced overall skin health.
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
                Benefits of Oxygeneo 3-in-1 Facial
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
              Book your Oxygeneo 3-in-1 Facial consultation with Dr. Jaishree today.
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

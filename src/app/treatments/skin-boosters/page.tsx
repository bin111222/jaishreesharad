"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What are skin boosters and how do they work?",
    answer: "Skin boosters are advanced injectable treatments that deliver hyaluronic acid and other active ingredients directly into the skin to improve hydration, texture, and overall skin quality. They work by stimulating collagen production, improving skin elasticity, and providing deep hydration from within."
  },
  {
    question: "What skin concerns can skin boosters address?",
    answer: "Skin boosters can address fine lines, wrinkles, skin dehydration, uneven texture, loss of elasticity, and overall skin rejuvenation. They're particularly effective for improving skin quality, reducing the appearance of pores, and creating a more youthful, radiant complexion."
  },
  {
    question: "How long does the procedure take?",
    answer: "A skin booster treatment typically takes 30-45 minutes. The procedure involves multiple micro-injections across the treatment area. Most patients can return to normal activities immediately after treatment, though some may experience mild redness or swelling for a few hours."
  },
  {
    question: "When will I see results?",
    answer: "Initial results may be visible within 1-2 weeks, with continued improvement over 2-3 months as collagen production increases. The full effects typically develop over 3-6 months. Results can last 6-12 months depending on the product used and individual factors."
  },
  {
    question: "Is the treatment painful?",
    answer: "Most patients experience minimal discomfort during the procedure. We use topical numbing cream and very fine needles to minimize discomfort. You may feel slight pinching sensations during the injections, but the procedure is generally well-tolerated."
  },
  {
    question: "How many treatments are needed?",
    answer: "Most patients benefit from a series of 2-3 treatments spaced 2-4 weeks apart for optimal results. Maintenance treatments can be done every 6-12 months to maintain the effects. The treatment plan is customized based on your skin concerns and goals."
  }
];

const benefits = [
  "Deep skin hydration and moisture retention",
  "Improved skin texture and elasticity",
  "Reduced appearance of fine lines and wrinkles",
  "Enhanced skin radiance and glow",
  "Stimulates natural collagen production",
  "Minimal downtime and recovery",
  "Suitable for all skin types",
  "Long-lasting results with maintenance"
];

const aftercare = [
  "Avoid touching or massaging treated areas for 24 hours",
  "Apply ice packs if needed for swelling",
  "Avoid sun exposure and use sunscreen",
  "Stay hydrated to support skin healing",
  "Avoid strenuous exercise for 24 hours",
  "Follow up with your provider as recommended"
];

const treatmentAreas = [
  {
    area: "Face",
    description: "Comprehensive facial rejuvenation and hydration",
    benefit: "More youthful, radiant complexion"
  },
  {
    area: "Neck & Décolletage",
    description: "Improves skin quality and reduces signs of aging",
    benefit: "Smoother, more youthful neck and chest"
  },
  {
    area: "Under Eyes",
    description: "Reduces fine lines and improves skin texture",
    benefit: "Brighter, more refreshed eye area"
  },
  {
    area: "Hands",
    description: "Rejuvenates aging hands and improves texture",
    benefit: "More youthful, smooth hand appearance"
  }
];

const boosterTypes = [
  {
    type: "Hyaluronic Acid Boosters",
    description: "Pure hyaluronic acid for deep hydration and skin plumping",
    bestFor: "Dehydrated skin, fine lines, texture improvement",
    duration: "6-12 months"
  },
  {
    type: "Collagen Stimulating Boosters",
    description: "Advanced formulations that trigger natural collagen production",
    bestFor: "Wrinkles, loss of elasticity, skin firming",
    duration: "8-12 months"
  },
  {
    type: "Multi-Ingredient Boosters",
    description: "Combination of vitamins, minerals, and amino acids",
    bestFor: "Overall skin rejuvenation, radiance, texture",
    duration: "6-10 months"
  },
  {
    type: "Antioxidant Boosters",
    description: "Rich in antioxidants to protect and repair skin",
    bestFor: "Environmental damage, aging prevention, glow",
    duration: "6-9 months"
  }
];

export default function SkinBoostersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
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
                Skin Boosters
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced injectable treatments that deliver deep hydration and rejuvenation directly into the skin. Achieve a more radiant, youthful complexion with improved texture, elasticity, and natural glow.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>30-45 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (200+ reviews)</span>
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
              <div className="bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600">Treatment Image</p>
                    <p className="text-sm text-gray-500">Skin Boosters Treatment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Treatment Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Before/After Image 1 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-500 text-xs font-medium">Before/After</span>
                    <p className="text-gray-400 text-xs mt-1">Hydration</p>
                  </div>
                </div>
              </div>
              
              {/* Before/After Image 2 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-500 text-xs font-medium">Before/After</span>
                    <p className="text-gray-400 text-xs mt-1">Glow</p>
                  </div>
                </div>
              </div>
              
              {/* Treatment Process Image 1 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-500 text-xs font-medium">Treatment</span>
                    <p className="text-gray-400 text-xs mt-1">Process</p>
                  </div>
                </div>
              </div>
              
              {/* Treatment Process Image 2 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <span className="text-gray-500 text-xs font-medium">Results</span>
                    <p className="text-gray-400 text-xs mt-1">Radiant Skin</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Duration</h3>
              <p className="text-gray-600">30-45 min</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Downtime</h3>
              <p className="text-gray-600">1-2 days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Results</h3>
              <p className="text-gray-600">3-6 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Sessions</h3>
              <p className="text-gray-600">2-3 sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booster Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Types of Skin Boosters
              </h2>
              <p className="text-xl text-gray-600">
                Advanced formulations tailored to your specific skin needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boosterTypes.map((booster, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 text-center">
                    {booster.type}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">{booster.description}</p>

                  <div className="space-y-4">
                    <div className="bg-pastel-green/10 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">Best For</div>
                      <div className="text-pastel-green font-medium">{booster.bestFor}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-800">{booster.duration}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What it Treats */}
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
                What Skin Boosters Can Treat
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive skin rejuvenation solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatmentAreas.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-center">{treatment.area}</h3>
                  <p className="text-gray-600 text-sm mb-3">{treatment.description}</p>
                  <div className="bg-pastel-green/10 rounded-lg p-3">
                    <p className="text-pastel-pink font-medium text-sm">{treatment.benefit}</p>
                  </div>
                </motion.div>
              ))}
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
                Benefits of Skin Boosters
              </h2>
              <p className="text-xl text-gray-600">
                Why choose skin boosters for your skin rejuvenation
              </p>
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

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-white">
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
                Common questions about skin booster treatments
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-50 rounded-lg border border-gray-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <ArrowRight
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pastel-green to-pastel-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Boost Your Skin's Radiance?
            </h2>
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree to discuss your personalized skin booster treatment plan
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Consultation</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

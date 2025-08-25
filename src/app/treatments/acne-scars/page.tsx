"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Target } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What types of acne scars can be treated?",
    answer: "We can treat various types of acne scars including ice pick scars (deep, narrow scars), rolling scars (broad depressions with sloping edges), boxcar scars (sharp, well-defined edges), and hypertrophic scars (raised scars). Each type requires a different approach for optimal results."
  },
  {
    question: "How long does acne scar treatment take?",
    answer: "Acne scar treatment requires patience and a series of treatments over 6-12 months for optimal results. However, even after a couple of sessions, patients often notice smoother skin and a big confidence boost. The exact timeline depends on the severity and type of scars."
  },
  {
    question: "What treatments are available for acne scars?",
    answer: "We offer multiple treatment options including microneedling, laser treatments (Q-Switched Nd:YAG, pico-second lasers), chemical peels, subcision for tethered scars, PRP therapy, dermal fillers for rolling scars, and topical treatments with retinol/retinoids, vitamin C, and peptides."
  },
  {
    question: "Is acne scar treatment painful?",
    answer: "Most treatments are well-tolerated with minimal discomfort. We use topical numbing creams and local anesthesia when needed. Some patients may experience mild redness, swelling, or sensitivity for a few days after treatment."
  },
  {
    question: "When will I see results?",
    answer: "Results vary depending on the treatment method and scar severity. Some patients see improvement within weeks, while others may take several months. Full results typically develop over 6-12 months as collagen remodeling occurs."
  },
  {
    question: "Can all acne scars be completely removed?",
    answer: "While we can significantly improve the appearance of acne scars, complete removal may not always be possible. Our goal is to make scars much less noticeable and improve skin texture. The results depend on scar type, depth, and individual healing response."
  }
];

const benefits = [
  "Improves skin texture and smoothness",
  "Reduces scar visibility and depth",
  "Boosts confidence and self-esteem",
  "Multiple treatment options available",
  "Suitable for all skin types",
  "Long-lasting results with proper care",
  "Minimal downtime for most treatments",
  "Personalized treatment plans"
];

const aftercare = [
  "Keep treated areas clean and protected",
  "Avoid sun exposure and use sunscreen daily",
  "Follow prescribed skincare routine",
  "Avoid picking or scratching treated areas",
  "Stay hydrated to support healing",
  "Attend follow-up appointments as scheduled"
];

const treatmentMethods = [
  {
    method: "Microneedling",
    description: "Creates controlled micro-injuries to stimulate collagen production and skin remodeling",
    bestFor: "All scar types, especially rolling scars",
    sessions: "3-6 sessions",
    results: "3-6 months"
  },
  {
    method: "Laser Treatments",
    description: "Q-Switched Nd:YAG and pico-second lasers target scar tissue and stimulate healing",
    bestFor: "Ice pick scars, pigmentation",
    sessions: "4-8 sessions",
    results: "2-4 months"
  },
  {
    method: "Chemical Peels",
    description: "Exfoliate damaged skin layers and promote new cell growth",
    bestFor: "Superficial scars, texture issues",
    sessions: "4-6 sessions",
    results: "2-3 months"
  },
  {
    method: "Subcision",
    description: "Manually release tethered scar tissue to allow area to elevate",
    bestFor: "Tethered scars, rolling scars",
    sessions: "1-3 sessions",
    results: "3-6 months"
  },
  {
    method: "PRP Therapy",
    description: "Uses your own growth factors to boost healing and collagen production",
    bestFor: "All scar types, enhances other treatments",
    sessions: "3-6 sessions",
    results: "4-8 months"
  },
  {
    method: "Dermal Fillers",
    description: "Immediately lifts depressed scars and provides volume support",
    bestFor: "Rolling scars, deep depressions",
    sessions: "1-2 sessions",
    results: "6-18 months"
  }
];

export default function AcneScarsPage() {
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
                Acne Scar Treatment
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive treatment for all types of acne scars including ice pick, rolling, boxcar, and hypertrophic scars. We offer multiple advanced techniques to improve skin texture and restore confidence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>30-90 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (300+ reviews)</span>
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
                      <Target className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600">Treatment Image</p>
                    <p className="text-sm text-gray-500">Acne Scar Treatment</p>
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
                    <p className="text-gray-400 text-xs mt-1">Ice Pick Scars</p>
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
                    <p className="text-gray-400 text-xs mt-1">Boxcar Scars</p>
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
                    <p className="text-gray-400 text-xs mt-1">Smooth Skin</p>
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
              <p className="text-gray-600">30-90 min</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Downtime</h3>
              <p className="text-gray-600">1-7 days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Results</h3>
              <p className="text-gray-600">6-12 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Sessions</h3>
              <p className="text-gray-600">3-8 sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
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
                Treatment Methods
              </h2>
              <p className="text-xl text-gray-600">
                Advanced techniques tailored to your specific scar type
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 text-center">
                    {method.method}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">{method.description}</p>

                  <div className="space-y-4">
                    <div className="bg-pastel-green/10 rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">Best For</div>
                      <div className="text-pastel-green font-medium">{method.bestFor}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-sm text-gray-500">Sessions</div>
                        <div className="font-semibold text-gray-800">{method.sessions}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Results</div>
                        <div className="font-semibold text-gray-800">{method.results}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
                Benefits of Acne Scar Treatment
              </h2>
              <p className="text-xl text-gray-600">
                Why choose professional acne scar treatment
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
              <p className="text-xl text-gray-600">
                Common questions about acne scar treatments
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-lg border border-gray-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
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
              Ready to Transform Your Skin?
            </h2>
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree to discuss your personalized acne scar treatment plan
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

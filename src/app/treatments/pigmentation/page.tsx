"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What causes skin pigmentation issues?",
    answer: "Pigmentation issues can be caused by sun exposure, hormonal changes (melasma), post-inflammatory hyperpigmentation from acne or injuries, aging, and genetic factors. Common types include melasma, sun spots, age spots, and post-acne marks. These conditions affect people of all skin types but are more common in darker skin tones."
  },
  {
    question: "What treatments are available for pigmentation?",
    answer: "We offer multiple treatment options including Q-Switched Nd:YAG lasers, pico-second lasers, chemical peels, microneedling with PRP, topical treatments with hydroquinone, vitamin C, and retinoids, and combination therapies. The treatment plan is customized based on the type and severity of pigmentation."
  },
  {
    question: "How long does pigmentation treatment take?",
    answer: "Treatment duration varies depending on the method used. Laser treatments typically take 15-30 minutes, chemical peels take 30-45 minutes, and microneedling sessions take 60-90 minutes. Most patients require a series of 4-8 treatments spaced 2-4 weeks apart for optimal results."
  },
  {
    question: "When will I see results?",
    answer: "Results vary depending on the treatment method and pigmentation severity. Some patients see improvement within 2-4 weeks, while others may take 2-3 months. Full results typically develop over 3-6 months. Consistent sun protection is crucial for maintaining results."
  },
  {
    question: "Is pigmentation treatment safe for all skin types?",
    answer: "Yes, we have treatments suitable for all skin types. However, darker skin requires special care to avoid complications like post-inflammatory hyperpigmentation. We use advanced technology and techniques specifically designed for different skin types to ensure safe and effective treatment."
  },
  {
    question: "How can I prevent pigmentation from returning?",
    answer: "Sun protection is crucial - use broad-spectrum sunscreen daily, wear protective clothing, and avoid peak sun hours. Maintain a consistent skincare routine with vitamin C, retinoids, and other brightening agents. Regular maintenance treatments can help prevent recurrence."
  }
];

const benefits = [
  "Reduces appearance of dark spots and patches",
  "Improves overall skin tone and brightness",
  "Safe for all skin types with proper protocols",
  "Multiple treatment options available",
  "Long-lasting results with proper maintenance",
  "Minimal downtime for most treatments",
  "Addresses various pigmentation causes",
  "Professional-grade technology and expertise"
];

const aftercare = [
  "Use broad-spectrum sunscreen daily (SPF 30+)",
  "Avoid sun exposure and wear protective clothing",
  "Follow prescribed skincare routine",
  "Avoid picking or scratching treated areas",
  "Stay hydrated and maintain healthy diet",
  "Attend follow-up appointments as scheduled"
];

const treatmentMethods = [
  {
    method: "Q-Switched Nd YAG Laser",
    description: "Advanced laser technology that targets melanin to break down pigmentation",
    bestFor: "Sun spots, age spots, freckles",
    sessions: "4-8 sessions",
    results: "2-4 months"
  },
  {
    method: "Pico-Second Laser",
    description: "Ultra-fast laser pulses that shatter pigment particles for removal",
    bestFor: "Stubborn pigmentation, melasma",
    sessions: "6-10 sessions",
    results: "3-6 months"
  },
  {
    method: "Chemical Peels",
    description: "Exfoliate damaged skin layers to reveal brighter, more even skin",
    bestFor: "Superficial pigmentation, texture issues",
    sessions: "4-6 sessions",
    results: "2-3 months"
  },
  {
    method: "Microneedling with PRP",
    description: "Stimulates collagen production and skin renewal for natural brightening",
    bestFor: "Post-acne marks, overall skin tone",
    sessions: "3-6 sessions",
    results: "3-6 months"
  },
  {
    method: "Topical Treatments",
    description: "Prescription and over-the-counter products for gradual improvement",
    bestFor: "Maintenance, mild pigmentation",
    sessions: "Ongoing",
    results: "2-6 months"
  },
  {
    method: "Combination Therapy",
    description: "Multiple treatments combined for comprehensive pigmentation management",
    bestFor: "Severe or multiple types of pigmentation",
    sessions: "Customized",
    results: "3-8 months"
  }
];

export default function PigmentationPage() {
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
                Pigmentation Treatment
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced treatments for melasma, sun spots, age spots, and post-acne marks. We offer multiple solutions including lasers, peels, and topical treatments to achieve brighter, more even skin tone.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>15-90 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (280+ reviews)</span>
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
              {/* Main Hero Image */}
              <div className="bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden mb-6">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/pigmentation/1.webp"
                  alt="Pigmentation Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/pigmentation/2.webp"
                    alt="Pigmentation Before/After - Melasma Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/pigmentation/3.webp"
                    alt="Pigmentation Before/After - Sun Spots Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/pigmentation/4.webp"
                    alt="Pigmentation Treatment Process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
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
              <p className="text-gray-600">15-90 min</p>
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
              <p className="text-gray-600">2-6 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Sessions</h3>
              <p className="text-gray-600">4-10 sessions</p>
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
                Advanced techniques tailored to your specific pigmentation type
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
                  <div className="w-full h-32 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-6 overflow-hidden">
                    <img 
                      src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/pigmentation/treatment-methods/${method.method.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}.webp`}
                      alt={`${method.method} treatment`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-32 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-16 h-16 bg-gradient-to-r from-pastel-pink to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                <Sparkles class="w-8 h-8 text-white" />
                              </div>
                              <p class="text-gray-600 font-medium text-sm">${method.method}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-pastel-pink to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
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
                Benefits of Pigmentation Treatment
              </h2>
              <p className="text-xl text-gray-600">
                Why choose professional pigmentation treatment
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
                Common questions about pigmentation treatments
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
      <section className="py-16 bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Achieve Brighter, More Even Skin?
            </h2>
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree to discuss your personalized pigmentation treatment plan
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

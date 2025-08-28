"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is Botox and how does it work?",
    answer: "Botox is a purified protein that temporarily relaxes facial muscles to reduce the appearance of fine lines and wrinkles. It works by blocking nerve signals to the muscles, preventing them from contracting and forming wrinkles."
  },
  {
    question: "How long does Botox last?",
    answer: "Botox results typically last 3-6 months. The duration varies depending on individual factors such as metabolism, muscle strength, and the amount of product used. Regular maintenance treatments can help prolong results."
  },
  {
    question: "Is Botox treatment painful?",
    answer: "Most patients describe Botox injections as a mild discomfort, similar to a small pinch. We use very fine needles and can apply a topical numbing cream if needed. The procedure is quick and well-tolerated."
  },
  {
    question: "When will I see results?",
    answer: "You may begin to see results within 24-48 hours, with full effects appearing within 7-14 days. The gradual onset ensures natural-looking results that develop over time."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild bruising, swelling, or redness at the injection site, which typically resolve within a few days. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "Who is a good candidate for Botox?",
    answer: "Good candidates are adults with dynamic wrinkles (lines that appear when you make facial expressions) who are in good health. We'll assess your specific concerns during a consultation to determine if Botox is right for you."
  }
];

const benefits = [
  "Reduces fine lines and wrinkles",
  "Prevents new wrinkles from forming",
  "Natural-looking results",
  "Quick, minimally invasive procedure",
  "No downtime required",
  "Long-lasting effects",
  "Treats multiple areas: forehead, frown lines, crow's feet",
  "Can be used for medical conditions like excessive sweating",
  "Safe with 20+ year track record",
  "Immediate return to normal activities"
];

const aftercare = [
  "Avoid touching or massaging the treated area for 24 hours",
  "Stay upright for 4 hours after treatment",
  "Avoid strenuous exercise for 24 hours",
  "Avoid facials and saunas for 24 hours",
  "Apply ice packs if needed for swelling",
  "Follow up with your provider if you have concerns"
];

const treatmentAreas = [
  {
    area: "Frown Lines (Glabellar Lines)",
    description: "Vertical lines between the eyebrows that appear when you frown or concentrate – often making the number '11'",
    benefit: "Creates a more relaxed, approachable appearance"
  },
  {
    area: "Crow's Feet",
    description: "Fine lines radiating from the outer corners of the eyes, often the first wrinkles to appear",
    benefit: "Softens eye area for a more youthful look"
  },
  {
    area: "Forehead Lines",
    description: "Horizontal lines on the forehead that develop from years of raising the eyebrows",
    benefit: "Smooths forehead for a more serene appearance"
  },
  {
    area: "Square Jaw Treatment",
    description: "Reduces enlarged masseter muscles to create a softer, more oval face shape",
    benefit: "Achieves a slimmer, more feminine jawline"
  },
  {
    area: "Neck Bands (Platysmal Bands)",
    description: "Vertical cords that appear on the neck, often visible when speaking",
    benefit: "Smooths neck contour and provides subtle lift"
  },
  {
    area: "Excessive Sweating (Hyperhidrosis)",
    description: "Reduces overactive sweat glands in underarms, palms, or soles",
    benefit: "Provides relief from excessive sweating"
  }
];

export default function BotoxPage() {
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
                Botox Treatment
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Botox refers to Botulinum Toxin Type A – a purified protein used to relax wrinkle-causing muscles. It is one of the world's most popular and effective treatments for dynamic wrinkles. By gently reducing muscle activity, Botox softens lines and gives a smoother, rejuvenated appearance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>15-30 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (500+ reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-100"
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/1.webp"
                  alt="Botox Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/2.webp"
                    alt="Botox Treatment - Dr. Jaishree Sharad"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/3.webp"
                    alt="Botox Before/After - Frown Lines Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/4.webp"
                    alt="Botox Before/After - Crow's Feet Results"
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
              <p className="text-gray-600">15-30 min</p>
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
              <p className="text-gray-600">3-6 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">FDA Approved</h3>
              <p className="text-gray-600">Yes</p>
            </div>
          </div>
        </div>
      </section>

      {/* What it Treats */}
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
                What Botox Treats
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Botox is most effective for dynamic wrinkles that appear when you make facial expressions. 
                Our expert treatments target specific areas for natural, rejuvenated results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentAreas.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-100"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-6 overflow-hidden">
                    <img 
                      src={(() => {
                        // Map treatment areas to correct image filenames
                        const imageMap: { [key: string]: string } = {
                          "Frown Lines (Glabellar Lines)": "frown-lines-glabellar-lines.webp",
                          "Crow's Feet": "crows-feet.webp",
                          "Forehead Lines": "forehead-lines.webp",
                          "Square Jaw Treatment": "square-jaw-treatment.webp",
                          "Neck Bands (Platysmal Bands)": "neck-bands-platysmal-bands.webp",
                          "Excessive Sweating (Hyperhidrosis)": "excessive-sweating-hyperhidrosis.webp"
                        };
                        return `https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/treatment-areas/${imageMap[treatment.area] || 'default.webp'}`;
                      })()}
                      alt={`${treatment.area} treatment`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-48 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-white font-bold text-xl">${index + 1}</span>
                              </div>
                              <p class="text-gray-600 font-medium">${treatment.area}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-center text-lg">{treatment.area}</h3>
                  <p className="text-gray-600 mb-4 text-center leading-relaxed">{treatment.description}</p>
                  <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-4 border border-pastel-green/20">
                    <p className="text-pastel-pink font-semibold text-center">{treatment.benefit}</p>
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
                Benefits of Botox
              </h2>
              <p className="text-xl text-gray-600">
                Why choose Botox for your anti-aging treatment
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

      {/* Procedure */}
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
                The Procedure
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What to expect during your Botox treatment - a simple, three-step process 
                designed for your comfort and optimal results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="text-center group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-100 border border-gray-100">
                  <div className="relative mb-8">
                    <img 
                      src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/process-consultation.webp"
                      alt="Botox consultation"
                      className="w-full h-56 object-cover rounded-2xl mb-6 group-hover:scale-100 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-56 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl mb-6 flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-20 h-20 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-white text-2xl font-bold">1</span>
                              </div>
                              <p class="text-gray-600 font-semibold text-lg">Consultation</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                                         <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                       <div className="w-14 h-14 bg-gradient-to-r from-pastel-pink to-pastel-green rounded-full flex items-center justify-center shadow-lg border-3 border-white">
                         <span className="text-white font-bold text-lg">1</span>
                       </div>
                     </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-xl">Consultation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We'll assess your concerns, discuss goals, and create a personalized treatment plan tailored to your unique needs
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="text-center group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-100 border border-gray-100">
                  <div className="relative mb-8">
                    <img 
                      src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/process-treatment.webp"
                      alt="Botox treatment"
                      className="w-full h-56 object-cover rounded-2xl mb-6 group-hover:scale-100 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-56 bg-gradient-to-br from-pastel-pink/30 to-pastel-green/30 rounded-2xl mb-6 flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-20 h-20 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-white text-2xl font-bold">2</span>
                              </div>
                              <p class="text-gray-600 font-semibold text-lg">Treatment</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                                         <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                       <div className="w-14 h-14 bg-gradient-to-r from-pastel-green to-pastel-pink rounded-full flex items-center justify-center shadow-lg border-3 border-white">
                         <span className="text-white font-bold text-lg">2</span>
                       </div>
                     </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-xl">Treatment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Precise injections using fine needles for maximum comfort. The procedure takes just 15-30 minutes with minimal discomfort
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="text-center group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-100 border border-gray-100">
                  <div className="relative mb-8">
                    <img 
                      src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/process-results.webp"
                      alt="Botox results"
                      className="w-full h-56 object-cover rounded-2xl mb-6 group-hover:scale-100 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-56 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl mb-6 flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-20 h-20 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-white text-2xl font-bold">3</span>
                              </div>
                              <p class="text-gray-600 font-semibold text-lg">Results</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                                         <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                       <div className="w-14 h-14 bg-gradient-to-r from-pastel-pink to-pastel-green rounded-full flex items-center justify-center shadow-lg border-3 border-white">
                         <span className="text-white font-bold text-lg">3</span>
                       </div>
                     </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-xl">Results</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gradual improvement over 7-14 days with natural-looking results. Effects last 3-6 months with proper maintenance
                  </p>
                </div>
              </motion.div>
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
              <p className="text-xl text-gray-600">
                Common questions about Botox treatment
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Refresh Your Look?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your Botox consultation with Dr. Jaishree and take the first step 
              towards smoother, more youthful skin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-100"
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

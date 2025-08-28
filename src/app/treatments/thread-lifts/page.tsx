"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Activity } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What are thread lifts and how do they work?",
    answer: "Thread lifting is a minimally invasive procedure to lift sagging skin using absorbable threads. We use threads made of materials like PDO or PLLA that are inserted under the skin to physically lift and anchor droopy areas. These threads have tiny cones or barbs that grasp tissue and stimulate collagen production."
  },
  {
    question: "What areas can be treated with thread lifts?",
    answer: "Thread lifts can treat sagging cheeks, jowls, brows, and neck. They're perfect for restoring youthful midface contour, defining the jawline, raising brows slightly, and tightening mild neck sagging."
  },
  {
    question: "How long does the procedure take?",
    answer: "The procedure typically takes 30-45 minutes. After local anesthesia, threads are inserted via a fine needle or cannula. The number of threads depends on the areas being treated, usually 2-3 per side of face."
  },
  {
    question: "What is the recovery like?",
    answer: "Recovery is quick with mild swelling or bruising for a few days. You might feel tightness or slight discomfort when making big facial movements for a week. We advise sleeping with an elevated head and avoiding vigorous rubbing of face."
  },
  {
    question: "When will I see results?",
    answer: "You'll see an instant subtle lift, and it improves over 2-3 months as collagen builds. The lift effect lasts about 12-18 months on average. It's perfect for those with mild to moderate sagging who aren't ready for surgery."
  }
];

const benefits = [
  "Minimally invasive procedure",
  "No surgical scars or extensive downtime",
  "Instant subtle lift with gradual improvement",
  "Stimulates natural collagen production",
  "Suitable for mild to moderate sagging",
  "Can be combined with other treatments"
];

const aftercare = [
  "Sleep with head elevated for the first few nights",
  "Avoid vigorous rubbing or massaging of face",
  "Avoid strenuous exercise for 24-48 hours",
  "Apply ice packs if needed for swelling",
  "Avoid facials and saunas for 1 week"
];

const treatmentAreas = [
  {
    area: "Sagging Cheeks",
    description: "Restores youthful midface contour by lifting droopy cheeks",
    benefit: "Enhanced facial structure and youthful appearance"
  },
  {
    area: "Jawline Definition",
    description: "Lifts jowls to create a more defined, sculpted jawline",
    benefit: "Sharper, more youthful jawline contour"
  },
  {
    area: "Brow Lift",
    description: "Raises brows slightly for a more alert, youthful expression",
    benefit: "More open, refreshed eye area"
  },
  {
    area: "Neck Tightening",
    description: "Improves mild neck sagging when combined with other treatments",
    benefit: "Smoother, more toned neck appearance"
  }
];

export default function ThreadLiftsPage() {
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
                Thread Lifts
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Thread lifting is a minimally invasive procedure to lift sagging skin using absorbable threads. Often called a "lunchtime lift", it's perfect for those with mild to moderate sagging who want natural-looking results without surgery.
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
              {/* Main Hero Image */}
              <div className="bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden mb-6">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/threadlifts/1.webp"
                  alt="Thread Lift Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/threadlifts/2.webp"
                    alt="Thread Lift Before/After - Face Lift Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/threadlifts/3.webp"
                    alt="Thread Lift Treatment Process"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/threadlifts/4.webp"
                    alt="Thread Lift Results - Natural Lift Effect"
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
              <p className="text-gray-600">12-18 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Non-Surgical</h3>
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
                What Thread Lifts Can Treat
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive lifting solutions for various facial areas, providing natural-looking results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {treatmentAreas.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-6 overflow-hidden">
                    <img 
                      src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/threadlifts/treatment-areas/${treatment.area.toLowerCase().replace(/\s+/g, '-')}.webp`}
                      alt={`${treatment.area} thread lift treatment`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-48 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-3">
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
                Benefits of Thread Lifts
              </h2>
              <p className="text-xl text-gray-600">
                Why choose thread lifts for your facial rejuvenation
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
                Common questions about thread lift treatments
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
              Ready to Experience the Thread Lift Difference?
            </h2>
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree to discuss how thread lifts can restore your youthful appearance
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

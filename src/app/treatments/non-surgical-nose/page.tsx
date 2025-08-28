"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is a non-surgical nose job?",
    answer: "A non-surgical nose job uses dermal fillers to reshape and enhance the nose without surgery. Fillers can straighten or sharpen a flat nose, achieve a nose lift, correct minor humps, and enhance bridge definition. This procedure is perfect for those who want to improve their nose shape without the downtime and risks of surgery."
  },
  {
    question: "What can a non-surgical nose job fix?",
    answer: "Non-surgical nose jobs can address flat noses, minor humps, droopy tips, asymmetry, and enhance bridge definition. They can also lift the nose tip and create more defined contours. However, they cannot reduce nose size or fix major structural issues that require surgical correction."
  },
  {
    question: "How long does the procedure take?",
    answer: "A non-surgical nose job typically takes 30-45 minutes. The procedure involves precise filler placement using very fine needles. Most patients can return to normal activities immediately after treatment, though some may experience mild swelling for a few days."
  },
  {
    question: "When will I see results?",
    answer: "You'll see immediate results after the procedure, though there may be some initial swelling that subsides within a few days. The final results are typically visible within 1-2 weeks. Results last 12-18 months, depending on the type of filler used."
  },
  {
    question: "Is a non-surgical nose job painful?",
    answer: "Most patients experience minimal discomfort during the procedure. We use topical numbing cream and some fillers contain lidocaine for additional comfort. You may feel slight pressure or a mild pinching sensation during the injections."
  },
  {
    question: "How long do the results last?",
    answer: "Results typically last 12-18 months, depending on the type of filler used and individual factors. Hyaluronic acid fillers are commonly used and provide natural-looking results. Maintenance treatments can be done to prolong the effects."
  }
];

const benefits = [
  "No surgery or general anesthesia required",
  "Immediate results with minimal downtime",
  "Reversible and adjustable",
  "Natural-looking enhancement",
  "Minimal risk compared to surgery",
  "Can address multiple concerns in one session",
  "Quick procedure with fast recovery",
  "Cost-effective alternative to surgery"
];

const aftercare = [
  "Avoid touching or massaging the treated area for 24 hours",
  "Apply ice packs if needed for swelling",
  "Sleep with your head elevated for the first night",
  "Avoid strenuous exercise for 24-48 hours",
  "Avoid facials and saunas for 1 week",
  "Follow up with your provider if you have concerns"
];

const treatmentAreas = [
  {
    area: "Bridge Enhancement",
    description: "Adds definition and height to a flat or low nasal bridge",
    benefit: "More defined, prominent nose bridge"
  },
  {
    area: "Hump Correction",
    description: "Fills depressions around minor humps to create a smoother profile",
    benefit: "Smoother, more balanced nose profile"
  },
  {
    area: "Tip Lift",
    description: "Lifts a droopy nose tip for a more youthful appearance",
    benefit: "More elevated, refined nose tip"
  },
  {
    area: "Symmetry Correction",
    description: "Corrects minor asymmetry and balances nose proportions",
    benefit: "More balanced, symmetrical nose"
  }
];

export default function NonSurgicalNosePage() {
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
                Non-Surgical Nose Job
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your nose shape without surgery using advanced dermal fillers. Achieve a more defined bridge, correct minor humps, lift the tip, and enhance symmetry with immediate, natural-looking results.
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
                  <span>5.0 (160+ reviews)</span>
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/nonsurgicalnosejob/1.webp"
                  alt="Non-Surgical Nose Job - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/nonsurgicalnosejob/2.webp"
                    alt="Non-Surgical Nose Before/After - Bridge Enhancement Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/nonsurgicalnosejob/3.webp"
                    alt="Non-Surgical Nose Before/After - Tip Refinement Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/nonsurgicalnosejob/4.webp"
                    alt="Non-Surgical Nose Treatment Process"
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
                What Non-Surgical Nose Jobs Can Treat
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive nose reshaping solutions without surgery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatmentAreas.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-full h-32 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-4 overflow-hidden">
                    <img 
                      src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/nonsurgicalnosejob/treatment-areas/${treatment.area.toLowerCase().replace(/\s+/g, '-')}.webp`}
                      alt={`${treatment.area} non-surgical nose treatment`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-32 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                                <span class="text-white font-bold">${index + 1}</span>
                              </div>
                              <p class="text-gray-600 font-medium text-sm">${treatment.area}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
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
                Benefits of Non-Surgical Nose Jobs
              </h2>
              <p className="text-xl text-gray-600">
                Why choose non-surgical nose reshaping
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
                Common questions about non-surgical nose jobs
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
              Ready to Transform Your Nose Without Surgery?
            </h2>
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree to discuss how a non-surgical nose job can enhance your facial harmony
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

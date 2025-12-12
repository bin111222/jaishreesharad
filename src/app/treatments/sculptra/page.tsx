"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentAreas = [
  {
    area: "Cheeks",
    description: "Restores volume to sunken or hollow cheeks for a more youthful appearance",
    benefit: "Fuller, more defined cheekbones"
  },
  {
    area: "Temples",
    description: "Fills hollow temples to restore facial balance and youthfulness",
    benefit: "More balanced, youthful face shape"
  },
  {
    area: "Jawline",
    description: "Enhances jawline definition and reduces jowling",
    benefit: "Sharper, more defined jawline"
  },
  {
    area: "Chin",
    description: "Improves chin projection and definition",
    benefit: "Better facial profile and balance"
  },
  {
    area: "Nasolabial Folds",
    description: "Softens deep lines from nose to mouth",
    benefit: "Smoother, more youthful mid-face"
  },
  {
    area: "Hands",
    description: "Restores volume to aging hands for a more youthful appearance",
    benefit: "Fuller, more youthful-looking hands"
  }
];

const faqs = [
  {
    question: "What is Sculptra and how does it work?",
    answer: "Sculptra Aesthetic contains poly-L-lactic acid (PLLA), a biocompatible, biodegradable synthetic polymer. Unlike immediate fillers, Sculptra works gradually by stimulating your body's own collagen production. When injected, it creates a scaffold that triggers fibroblasts to produce new collagen over several months. This results in natural-looking, long-lasting volume restoration that develops progressively, making it ideal for those who prefer subtle, gradual improvements."
  },
  {
    question: "How long do Sculptra results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Sculptra treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Sculptra?",
    answer: "Ideal candidates are adults experiencing volume loss in the face, particularly in the cheeks, temples, or hands. Sculptra is excellent for those who prefer gradual, natural-looking results over immediate dramatic changes. It's suitable for all skin types and can be used as a standalone treatment or combined with other procedures. We'll assess your concerns during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients require 2-3 sessions, spaced 4-6 weeks apart, to achieve optimal results. The exact number depends on the degree of volume loss and desired outcome. Some patients may need touch-up sessions after the initial series. Maintenance treatments can be done every 12-24 months."
  },
  {
    question: "When will I see results?",
    answer: "Sculptra works gradually - you may notice subtle improvements within a few weeks, but full results develop over 2-3 months as collagen production increases. Results continue to improve for up to 6 months after your last session. This gradual approach ensures natural-looking results."
  },
  {
    question: "Is Sculptra painful?",
    answer: "Most patients experience mild to moderate discomfort during injection, similar to other injectable treatments. We can apply numbing cream or use a local anesthetic to ensure your comfort. The injection technique and dilution can be adjusted to minimize discomfort."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include injection site reactions such as redness, swelling, bruising, and tenderness that typically resolve within a few days. Small bumps or nodules may rarely occur but usually resolve on their own. Following the 5x5 massage protocol helps prevent complications. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "How long do results last?",
    answer: "Sculptra results can last 2 years or longer, making it one of the longest-lasting injectable treatments. Since it stimulates your body's own collagen production, the results are more natural and sustainable than temporary fillers. Maintenance treatments can help prolong results."
  }
];

const benefits = [
  "Gradual, natural-looking volume restoration",
  "Stimulates your body's own collagen production",
  "Long-lasting results (up to 2 years or more)",
  "FDA-approved for facial volume loss",
  "Can be used on face and hands",
  "Minimal downtime - return to activities immediately",
  "Biocompatible and biodegradable material",
  "Ideal for those who prefer subtle, progressive results"
];

const aftercare = [
  "Massage the treated area 5 times a day for 5 days (5x5 rule) as instructed",
  "Avoid touching or applying pressure to treated areas for 24 hours",
  "Avoid sun exposure and use SPF 50+ daily",
  "Stay hydrated and maintain a healthy diet",
  "Avoid strenuous exercise for 24-48 hours",
  "Avoid facials, massages, or other facial treatments for 2 weeks",
  "Use gentle, hydrating skincare products",
  "Attend all scheduled follow-up sessions",
  "Contact us if you experience any unusual reactions"
];

export default function SculptraPage() {
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
                Sculptra
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sculptra Aesthetic (poly-L-lactic acid) is a unique collagen stimulator that works gradually to restore facial volume and improve skin quality. Unlike immediate fillers, Sculptra stimulates your body's own collagen production over time, providing natural-looking, long-lasting results that develop progressively.
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/sculptra/sculptra.webp"
                  alt="Sculptra treatment"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-white text-4xl">✨</span>
                          </div>
                          <p class="text-gray-600 font-medium">Sculptra</p>
                        </div>
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

      {/* Treatment Areas */}
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
                Treatment Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sculptra is FDA-approved for facial volume loss and can effectively restore volume to multiple 
                areas of the face and hands.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentAreas.map((treatment, index) => (
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
                    {treatment.area}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {treatment.description}
                  </p>
                  <div className="flex items-center space-x-2 text-pastel-green">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{treatment.benefit}</span>
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
                How Sculptra Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the science behind collagen-stimulating volume restoration
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Injection & Scaffold Formation</h3>
                <p className="text-gray-700">
                  Poly-L-lactic acid (PLLA) particles are injected into the deep dermis where volume loss has occurred. 
                  These particles create a temporary scaffold that provides structure and signals to surrounding cells 
                  that repair is needed in the area.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Collagen Stimulation</h3>
                <p className="text-gray-700">
                  The PLLA particles trigger a controlled inflammatory response that activates fibroblasts (cells that 
                  produce collagen). These cells recognize the scaffold as a signal to begin producing new collagen 
                  fibers to replace lost volume and restore facial structure.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Gradual Volume Restoration</h3>
                <p className="text-gray-700">
                  Over the following weeks and months, new collagen forms around the PLLA particles, gradually restoring 
                  volume. This process happens naturally and progressively, ensuring results look natural and develop 
                  subtly over time rather than appearing suddenly.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Long-Lasting Results</h3>
                <p className="text-gray-700">
                  As the PLLA particles gradually break down (over 18-24 months), the new collagen that has formed 
                  remains, providing long-lasting volume restoration. Since this is your body's own collagen, the 
                  results are natural and can last 2 years or longer with proper maintenance.
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
                Benefits of Sculptra
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
              Book your Sculptra consultation with Dr. Jaishree today.
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

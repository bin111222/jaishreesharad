"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentBenefits = [
  {
    benefit: "Collagen Production",
    description: "Stimulates fibroblasts to produce new collagen and elastin",
    result: "Firmer, more elastic skin"
  },
  {
    benefit: "Skin Rejuvenation",
    description: "Improves skin texture, tone, and overall appearance",
    result: "Brighter, more radiant complexion"
  },
  {
    benefit: "Wound Healing",
    description: "Accelerates healing process and reduces inflammation",
    result: "Faster recovery and reduced scarring"
  },
  {
    benefit: "Fine Lines & Wrinkles",
    description: "Reduces the appearance of fine lines and wrinkles",
    result: "Smoother, more youthful skin"
  },
  {
    benefit: "Acne Treatment",
    description: "Reduces inflammation and promotes healing of acne lesions",
    result: "Clearer, healthier skin"
  },
  {
    benefit: "Hair Growth",
    description: "Stimulates hair follicles for improved hair growth",
    result: "Thicker, healthier hair"
  }
];

const faqs = [
  {
    question: "What is Red Light Therapy and how does it work?",
    answer: "Red Light Therapy (also called photobiomodulation) uses specific wavelengths of red and near-infrared light (typically 630-850nm) that penetrate deep into the skin. These wavelengths are absorbed by mitochondria (the energy powerhouses of cells), stimulating them to produce more ATP (cellular energy). This increased energy production enhances cellular function, promotes collagen synthesis, reduces inflammation, and accelerates healing processes throughout the body."
  },
  {
    question: "How long do Red Light Therapy results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Red Light Therapy treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Red Light Therapy?",
    answer: "Red Light Therapy is suitable for almost everyone! It's ideal for those seeking skin rejuvenation, anti-ageing benefits, wound healing, or hair growth. It's safe for all skin types, including sensitive skin, and can be used by people of all ages. It's particularly beneficial for those who want a gentle, non-invasive treatment with no downtime."
  },
  {
    question: "How many sessions are needed?",
    answer: "For optimal results, most patients benefit from 2-3 sessions per week for 4-8 weeks initially, then maintenance sessions 1-2 times per week. For hair growth, daily or near-daily treatments may be recommended. The exact frequency depends on your specific concerns and treatment goals."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice improvements in skin texture and radiance after just a few sessions. Full results develop over 4-8 weeks as collagen production increases. For hair growth, results typically appear after 8-12 weeks. Results continue to improve with regular treatments."
  },
  {
    question: "Is Red Light Therapy painful?",
    answer: "No, Red Light Therapy is completely painless and comfortable. You'll feel a gentle warmth from the LED lights, but there's no discomfort, burning, or pain. Many patients find it relaxing and can read or listen to music during treatment."
  },
  {
    question: "Are there any side effects?",
    answer: "Red Light Therapy has no known side effects when used properly. It's completely safe and non-invasive. Unlike lasers or other light therapies, it doesn't cause burns, irritation, or damage to the skin. It's one of the safest aesthetic treatments available."
  },
  {
    question: "How long do results last?",
    answer: "Results can be maintained with regular maintenance sessions. Since Red Light Therapy stimulates your body's natural processes, the benefits continue as long as you maintain treatments. Many patients incorporate it into their regular skincare routine for ongoing benefits."
  }
];

const benefits = [
  "Non-invasive, painless treatment with no downtime",
  "Stimulates natural collagen and elastin production",
  "Safe for all skin types and sensitive skin",
  "Can be used on face, body, and scalp",
  "No side effects or recovery time required",
  "Can be combined with other treatments",
  "Suitable for regular maintenance treatments",
  "Backed by scientific research and clinical studies"
];

const aftercare = [
  "No special aftercare required - return to normal activities immediately",
  "Continue with your regular skincare routine",
  "Use sunscreen daily to protect your skin",
  "Stay hydrated to support cellular function",
  "Attend regular sessions for optimal results",
  "Maintain a healthy diet rich in antioxidants",
  "Avoid excessive sun exposure between treatments",
  "Follow up with your provider as recommended"
];

export default function RedLightTherapyPage() {
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
                Red Light Therapy
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Red Light Therapy uses specific wavelengths of red and near-infrared light to penetrate deep into the skin, stimulating cellular energy production and collagen synthesis. This non-invasive, painless treatment promotes natural healing, reduces inflammation, and improves overall skin health and appearance.
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
                  <p className="text-gray-600 font-medium">Red Light Therapy</p>
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
                Red Light Therapy offers multiple benefits for skin, hair, and overall cellular health, 
                making it a versatile and effective treatment option.
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
                How Red Light Therapy Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the science behind photobiomodulation
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Light Penetration</h3>
                <p className="text-gray-700">
                  Red and near-infrared light (630-850nm wavelengths) penetrate through the skin layers and reach 
                  deep into tissues. Unlike UV light, these wavelengths don't cause damage but instead provide 
                  beneficial energy to cells.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Mitochondrial Activation</h3>
                <p className="text-gray-700">
                  The light energy is absorbed by mitochondria (cellular powerhouses) through a molecule called 
                  cytochrome c oxidase. This absorption stimulates the mitochondria to produce more ATP (adenosine 
                  triphosphate), which is the primary energy currency of cells.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Enhanced Cellular Function</h3>
                <p className="text-gray-700">
                  With increased ATP production, cells have more energy to perform their functions more efficiently. 
                  This enhanced cellular activity leads to increased collagen and elastin production by fibroblasts, 
                  improved blood circulation, reduced inflammation, and accelerated healing processes.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Cumulative Benefits</h3>
                <p className="text-gray-700">
                  With regular treatments, the benefits accumulate over time. Increased collagen production improves 
                  skin firmness and reduces wrinkles, enhanced circulation brings more nutrients to cells, and reduced 
                  inflammation promotes healing. These effects work together to create visible improvements in skin 
                  quality, appearance, and overall health.
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
                Benefits of Red Light Therapy
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
              Book your Red Light Therapy consultation with Dr. Jaishree today.
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

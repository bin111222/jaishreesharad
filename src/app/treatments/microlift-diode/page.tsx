"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentAreas = [
  {
    area: "Acne Scars",
    description: "Effectively treats various types of acne scars",
    result: "Smoother, more even skin"
  },
  {
    area: "Skin Tightening",
    description: "Tightens and lifts sagging skin",
    result: "Firmer, more lifted skin"
  },
  {
    area: "Fine Lines & Wrinkles",
    description: "Reduces fine lines and wrinkles",
    result: "More youthful appearance"
  },
  {
    area: "Skin Texture",
    description: "Improves overall skin texture and smoothness",
    result: "Refined, silky-smooth skin"
  },
  {
    area: "Pore Size",
    description: "Minimizes pore appearance",
    result: "Tighter, more refined pores"
  },
  {
    area: "Skin Rejuvenation",
    description: "Overall skin quality improvement",
    result: "Radiant, refreshed complexion"
  }
];

const faqs = [
  {
    question: "What is MicroLift Diode and how does it work?",
    answer: "MicroLift Diode is a specialized diode laser treatment that uses 1470nm wavelength technology to effectively treat acne scars while simultaneously providing skin tightening benefits. The 1470nm wavelength is highly absorbed by water in the skin, allowing for precise targeting of scar tissue and deep dermal heating. This dual-action approach targets scar tissue, stimulates collagen remodeling, and tightens surrounding skin, providing comprehensive improvement in both scar appearance and skin laxity."
  },
  {
    question: "How long do MicroLift Diode results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is MicroLift Diode treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for MicroLift Diode?",
    answer: "Ideal candidates are adults with acne scars, sagging skin, fine lines, wrinkles, or uneven skin texture. MicroLift Diode is suitable for all skin types and can be used on the face, neck, and body. It's particularly effective for those seeking both scar reduction and skin tightening. We'll evaluate your skin during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients require 3-6 sessions, spaced 4-6 weeks apart, for optimal results. The exact number depends on the severity of scars, degree of skin laxity, and individual response. Maintenance treatments can be done every 6-12 months."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice initial tightening within a few weeks. Full results develop over 2-3 months as new collagen forms. Results continue to improve for up to 6 months post-treatment. The combination of immediate tightening and progressive scar improvement provides both instant gratification and long-term benefits."
  },
  {
    question: "Is MicroLift Diode painful?",
    answer: "Most patients experience mild to moderate discomfort during treatment. We apply numbing cream before the procedure to ensure your comfort. The sensation is generally described as a warm, prickling feeling. The treatment is well-tolerated by most patients."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include redness, swelling, and slight sensitivity that typically resolve within 24-48 hours. Some patients may experience minor bruising. The skin may feel like a mild sunburn for a day or two. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "How does MicroLift Diode differ from other lasers?",
    answer: "MicroLift Diode uses a specific 1470nm wavelength that is highly absorbed by water, allowing for precise targeting with minimal thermal spread. This wavelength is particularly effective for both scar treatment and skin tightening, providing dual benefits in one treatment. It's less aggressive than CO₂ laser but more effective than some other diode treatments."
  },
  {
    question: "Can MicroLift Diode be combined with other treatments?",
    answer: "Yes, MicroLift Diode can be combined with other treatments like fillers, PRP, or regenerative treatments for comprehensive facial rejuvenation. However, treatments should be spaced appropriately. We'll create a personalized treatment plan during your consultation."
  },
  {
    question: "How long do results last?",
    answer: "Results can last 12-18 months or longer, depending on individual factors, age, and lifestyle. The new collagen that forms is your body's own tissue, so results are natural and long-lasting. Maintenance treatments every 6-12 months can help prolong and enhance results."
  }
];

const benefits = [
  "Dual-action treatment for scars and tightening",
  "1470nm wavelength for precise targeting",
  "Effectively treats acne scars",
  "Simultaneous skin tightening",
  "Stimulates collagen production",
  "Minimal downtime - return to activities within 24-48 hours",
  "Suitable for all skin types",
  "Can be used on face, neck, and body"
];

const aftercare = [
  "Apply gentle, hydrating moisturizer as recommended",
  "Avoid sun exposure and use SPF 50+ daily",
  "No makeup for 24-48 hours",
  "Avoid harsh skincare products for 5-7 days",
  "Stay hydrated and maintain a healthy diet",
  "Avoid saunas, steam rooms, and intense exercise for 48 hours",
  "Do not pick or scratch treated areas",
  "Attend all scheduled follow-up sessions",
  "Contact us if you experience any unusual reactions"
];

export default function MicroLiftDiodePage() {
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
                MicroLift Diode
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                MicroLift Diode is a specialized diode laser treatment that uses 1470nm wavelength technology to effectively treat acne scars while simultaneously providing skin tightening benefits. This dual-action approach targets scar tissue, stimulates collagen remodeling, and tightens surrounding skin, providing comprehensive improvement in both scar appearance and skin laxity.
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/microlift-diode/microlift-diode.webp"
                  alt="MicroLift Diode Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-center">
                        <div class="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                          <span class="text-white text-4xl">✨</span>
                        </div>
                        <p class="text-gray-600 font-medium">MicroLift Diode</p>
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
                MicroLift Diode effectively addresses multiple skin concerns for comprehensive rejuvenation.
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
                How MicroLift Diode Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the dual-action approach to scar reduction and skin tightening
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Laser Energy Delivery</h3>
                <p className="text-gray-700">
                  The 1470nm diode laser energy is delivered to the skin, where it is highly absorbed 
                  by water in the tissue. This wavelength allows for precise targeting of scar tissue 
                  and deep dermal heating while minimizing damage to surrounding healthy tissue.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Scar Tissue Targeting</h3>
                <p className="text-gray-700">
                  The laser energy specifically targets scar tissue, breaking down abnormal collagen 
                  fibers and stimulating the body's natural healing response. This process helps 
                  remodel scar tissue, making it less visible and improving skin texture.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Collagen Remodeling & Tightening</h3>
                <p className="text-gray-700">
                  Simultaneously, the deep dermal heating causes immediate collagen contraction, 
                  providing instant skin tightening. The thermal injury also stimulates fibroblasts 
                  to produce new collagen and elastin, leading to long-term tightening and 
                  improvement in skin laxity.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Progressive Improvement</h3>
                <p className="text-gray-700">
                  Over the following weeks and months, new collagen forms, scars continue to improve, 
                  and skin becomes progressively tighter. The combination of immediate tightening and 
                  long-term collagen production provides both instant gratification and progressive 
                  improvement, resulting in smoother, firmer, more youthful-looking skin.
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
                Benefits of MicroLift Diode
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
              Book your MicroLift Diode consultation with Dr. Jaishree today.
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

"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentIndications = [
  {
    indication: "Melasma",
    description: "Effectively treats melasma and hormonal pigmentation",
    benefit: "Clearer, more even skin tone"
  },
  {
    indication: "Sun Spots",
    description: "Removes sun-induced age spots and freckles",
    benefit: "Brighter, more uniform complexion"
  },
  {
    indication: "Post-Inflammatory Hyperpigmentation",
    description: "Reduces dark spots from acne or injuries",
    benefit: "Smoother, more even skin"
  },
  {
    indication: "Age Spots",
    description: "Eliminates age-related pigmentation",
    benefit: "More youthful appearance"
  },
  {
    indication: "Freckles",
    description: "Lightens or removes unwanted freckles",
    benefit: "More uniform skin tone"
  },
  {
    indication: "Dark Circles",
    description: "Reduces pigmentation under the eyes",
    benefit: "Brighter, more refreshed eyes"
  }
];

const faqs = [
  {
    question: "What is Q-switch Toning and how does it work?",
    answer: "Q-switch Toning uses Q-switched laser technology that delivers ultra-short, high-energy pulses (nanoseconds) to target melanin in pigmented lesions. The rapid pulses create a photoacoustic effect that shatters pigment particles into tiny fragments. These fragments are then naturally eliminated by the body's immune system, resulting in gradual lightening and removal of pigmentation."
  },
  {
    question: "How long do Q-switch Toning results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Q-switch Toning treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Q-switch Toning?",
    answer: "Ideal candidates are adults with hyperpigmentation concerns such as melasma, sun spots, age spots, or post-inflammatory hyperpigmentation. Q-switch Toning is suitable for most skin types, though darker skin types require careful assessment and specialized settings to avoid complications. We'll evaluate your skin during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients require 3-6 sessions, spaced 3-4 weeks apart, for optimal results. The exact number depends on the type and depth of pigmentation, skin type, and individual response. Some pigmentation, especially melasma, may require more sessions and combination treatments."
  },
  {
    question: "When will I see results?",
    answer: "Pigmentation may initially appear darker before it begins to fade - this is normal. Visible lightening typically occurs within 2-4 weeks, with full results appearing after 4-8 weeks as the body eliminates the treated pigment. Multiple sessions may be needed for complete clearance."
  },
  {
    question: "Is Q-switch Toning painful?",
    answer: "Most patients describe the sensation as mild snapping or stinging, similar to a rubber band. The treatment is generally well-tolerated, and we can adjust settings for your comfort. Numbing cream can be applied if needed, especially for more sensitive areas."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild redness and slight swelling that typically resolve within a few hours. Temporary darkening of treated areas may occur before they fade. Rare side effects include minor bruising, blistering, or changes in skin texture. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "Can I use Q-switch Toning if I have melasma?",
    answer: "Yes, Q-switch Toning can be effective for melasma, though it may require multiple sessions and combination with other treatments like topical creams or chemical peels. Melasma can be challenging to treat and may recur, especially with sun exposure. We'll discuss a comprehensive treatment plan during consultation."
  },
  {
    question: "How long do results last?",
    answer: "Results can be long-lasting with proper sun protection. However, new pigmentation can form with sun exposure. It's crucial to use broad-spectrum SPF 50+ daily and avoid excessive sun exposure to maintain results. Maintenance treatments may be needed periodically, especially for melasma."
  }
];

const benefits = [
  "Effective pigmentation removal and skin lightening",
  "Precise targeting of pigmented lesions",
  "Suitable for various types of hyperpigmentation",
  "Minimal downtime - return to activities immediately",
  "Safe for most skin types with proper settings",
  "Can be used on face, neck, décolletage, and body",
  "Non-invasive treatment",
  "Long-lasting results with proper sun protection"
];

const aftercare = [
  "Apply gentle, hydrating moisturizer as recommended",
  "Avoid sun exposure and use SPF 50+ daily (critical!)",
  "No makeup for 24 hours if skin is sensitive",
  "Avoid harsh skincare products for 3-5 days",
  "Stay hydrated and maintain a healthy diet",
  "Avoid picking or scratching treated areas",
  "Pigmentation may initially appear darker before fading",
  "Attend all scheduled follow-up sessions",
  "Contact us if you experience any unusual reactions"
];

export default function QswitchToningPage() {
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
                Q-switch Toning
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Q-switch Toning uses advanced Q-switched laser technology that delivers high-energy pulses in nanoseconds to target and break down pigmentation. This precise laser treatment effectively treats melasma, sun spots, age spots, and other forms of hyperpigmentation, resulting in a more even, radiant skin tone.
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/q-switch-toning/q-switch-toning.webp"
                  alt="Q-switch Toning treatment"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-white text-4xl">✨</span>
                          </div>
                          <p class="text-gray-600 font-medium">Q-switch Toning</p>
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

      {/* Treatment Indications */}
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
                What Q-switch Toning Treats
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Q-switch Toning effectively addresses various types of hyperpigmentation, providing 
                comprehensive solutions for uneven skin tone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentIndications.map((treatment, index) => (
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
                    {treatment.indication}
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
                How Q-switch Toning Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the science behind Q-switched laser pigmentation removal
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Targeted Energy Delivery</h3>
                <p className="text-gray-700">
                  The Q-switched laser delivers ultra-short, high-energy pulses (nanoseconds) that specifically 
                  target melanin (pigment) in the skin. The laser wavelength is chosen to be optimally absorbed 
                  by melanin while sparing surrounding tissue.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Photoacoustic Effect</h3>
                <p className="text-gray-700">
                  The rapid, high-energy pulses create a photoacoustic effect - a combination of light and sound 
                  waves. This effect generates shockwaves that shatter pigment particles into extremely tiny 
                  fragments without generating excessive heat that could damage surrounding tissue.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Natural Elimination</h3>
                <p className="text-gray-700">
                  The fragmented pigment particles are so small that the body's immune system can easily recognize 
                  and eliminate them naturally. Macrophages (immune cells) engulf and remove the pigment fragments, 
                  gradually lightening the treated area.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Progressive Lightening</h3>
                <p className="text-gray-700">
                  Pigmentation fades gradually over 2-8 weeks as the body eliminates the treated pigment. The 
                  process is natural and progressive, ensuring results look natural. Multiple sessions may be 
                  needed for complete clearance, especially for deeper or more extensive pigmentation.
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
                Benefits of Q-switch Toning
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
              Book your Q-switch Toning consultation with Dr. Jaishree today.
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

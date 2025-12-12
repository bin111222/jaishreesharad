"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentBenefits = [
  {
    benefit: "Dark Lip Pigmentation",
    description: "Lightens dark or discolored lips",
    result: "Natural pink lip color"
  },
  {
    benefit: "Lip Hyperpigmentation",
    description: "Reduces excessive pigmentation on lips",
    result: "More even, uniform lip tone"
  },
  {
    benefit: "Smoker's Lips",
    description: "Treats darkening caused by smoking",
    result: "Restored natural lip color"
  },
  {
    benefit: "Sun-Damaged Lips",
    description: "Reverses sun-induced lip darkening",
    result: "Brighter, healthier-looking lips"
  },
  {
    benefit: "Uneven Lip Color",
    description: "Even out lip tone and color",
    result: "More uniform, attractive lips"
  },
  {
    benefit: "Lip Rejuvenation",
    description: "Overall lip health and appearance improvement",
    result: "Youthful, vibrant lips"
  }
];

const faqs = [
  {
    question: "What is Lip Peel and Laser and how does it work?",
    answer: "Lip Peel and Laser is a specialized combination treatment designed to lighten dark lips and reduce lip pigmentation. The treatment combines chemical peels to exfoliate pigmented cells on the lip surface with laser therapy to target deeper pigmentation. The peel removes surface pigmentation while the laser breaks down deeper melanin deposits, providing comprehensive and long-lasting results for dark or discolored lips."
  },
  {
    question: "How long do Lip Peel and Laser results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Lip Peel and Laser treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Lip Peel and Laser?",
    answer: "Ideal candidates are adults with dark lips, lip pigmentation, or discoloration from various causes including genetics, sun exposure, smoking, or hormonal changes. This treatment is suitable for all skin types and can address different types of lip darkening. We'll assess your lip condition during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients require 3-6 sessions, spaced 3-4 weeks apart, for optimal results. The exact number depends on the degree of pigmentation, cause of darkening, and individual response. Some patients may need maintenance sessions every 6-12 months."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice improvement after the first session. Visible lightening typically occurs within 2-4 weeks, with full results appearing after 4-8 weeks as the peel and laser work to reduce pigmentation. Multiple sessions provide cumulative benefits for better results."
  },
  {
    question: "Is Lip Peel and Laser painful?",
    answer: "Most patients experience mild to moderate discomfort during treatment. The chemical peel may cause slight stinging, and the laser may feel like mild snapping. We apply numbing cream before treatment to ensure your comfort. Any discomfort is temporary and well-tolerated."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild redness, swelling, and slight sensitivity that typically resolve within 24-48 hours. Some patients may experience temporary dryness, flaking, or darkening before lightening occurs. Serious side effects are rare when performed by an experienced provider."
  },
  {
    question: "How long do results last?",
    answer: "Results can last 6-12 months or longer, depending on individual factors, lifestyle, and sun exposure. It's crucial to use SPF lip balm daily and avoid smoking to maintain results. Maintenance treatments may be needed periodically."
  },
  {
    question: "Can I wear lipstick after treatment?",
    answer: "You should avoid lipstick and other lip products for 24-48 hours after treatment. Once the initial healing is complete, you can resume wearing lipstick. We recommend using gentle, hydrating lip products and SPF lip balm to protect and maintain results."
  }
];

const benefits = [
  "Dual-action treatment combining peel and laser",
  "Effective for various causes of dark lips",
  "Targets both surface and deep pigmentation",
  "Restores natural pink lip color",
  "Long-lasting results with proper care",
  "Minimal downtime - return to activities within 24-48 hours",
  "Safe for sensitive lip area",
  "Can be customized to your specific lip concerns"
];

const aftercare = [
  "Apply recommended lip balm or ointment frequently",
  "Avoid sun exposure to lips and use SPF lip balm daily",
  "Avoid picking or peeling flaking skin",
  "No lipstick or lip products for 24-48 hours",
  "Stay hydrated and avoid smoking",
  "Avoid spicy or acidic foods for 24-48 hours",
  "Use gentle, hydrating lip care products",
  "Attend all scheduled follow-up sessions",
  "Contact us if you experience any unusual reactions"
];

export default function LipPeelandLaserPage() {
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
                Lip Peel and Laser
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Lip Peel and Laser is a specialized combination treatment designed to lighten dark lips, reduce lip pigmentation, and restore a natural pink lip color. This comprehensive approach combines chemical peels to exfoliate pigmented cells with laser therapy to target deeper pigmentation, providing effective and long-lasting results for dark or discolored lips.
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/lip-peel-laser/lip-peel-laser.webp"
                  alt="Lip Peel and Laser Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-center">
                        <div class="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                          <span class="text-white text-4xl">✨</span>
                        </div>
                        <p class="text-gray-600 font-medium">Lip Peel and Laser</p>
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
                What Lip Peel and Laser Treats
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Lip Peel and Laser effectively addresses various causes of dark lips and lip pigmentation.
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
                How Lip Peel and Laser Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the dual-action approach to lip lightening
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Chemical Peel Application</h3>
                <p className="text-gray-700">
                  A specialized chemical peel is applied to the lips, containing depigmenting agents like 
                  kojic acid, arbutin, or other brightening ingredients. The peel exfoliates the surface 
                  layer of pigmented cells, removing dark, dead skin cells and preparing the lips for 
                  deeper treatment.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Laser Treatment</h3>
                <p className="text-gray-700">
                  After the peel, laser therapy is applied to target deeper pigmentation. The laser energy 
                  penetrates into the lip tissue, breaking down melanin deposits that are too deep for the 
                  peel to reach. The laser creates controlled micro-injuries that also stimulate collagen 
                  production for healthier lips.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Pigment Breakdown</h3>
                <p className="text-gray-700">
                  The combination of chemical exfoliation and laser energy breaks down melanin at multiple 
                  levels - both surface and deep. The body's natural healing processes then eliminate the 
                  fragmented pigment particles, gradually lightening the lips over the following weeks.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Progressive Lightening</h3>
                <p className="text-gray-700">
                  Over the following weeks, the lips gradually lighten as the body eliminates treated 
                  pigment and new, less pigmented cells replace the old ones. With multiple sessions, 
                  the cumulative effect leads to significant lightening and restoration of natural pink 
                  lip color. Proper aftercare and sun protection help maintain results.
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
                Benefits of Lip Peel and Laser
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
              Book your Lip Peel and Laser consultation with Dr. Jaishree today.
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

"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentApplications = [
  {
    application: "Skin Rejuvenation",
    description: "Stimulates collagen production and improves skin texture, elasticity, and radiance",
    benefit: "Firmer, more youthful-looking skin"
  },
  {
    application: "Hair Restoration",
    description: "Promotes hair follicle regeneration and stimulates new hair growth",
    benefit: "Thicker, healthier hair"
  },
  {
    application: "Wound Healing",
    description: "Accelerates healing process and reduces inflammation",
    benefit: "Faster recovery and reduced scarring"
  },
  {
    application: "Anti-Ageing",
    description: "Reduces fine lines, wrinkles, and improves overall skin quality",
    benefit: "More youthful, radiant appearance"
  },
  {
    application: "Acne Scar Treatment",
    description: "Helps remodel scar tissue and improve skin texture",
    benefit: "Smoother, more even skin surface"
  },
  {
    application: "Hair Loss",
    description: "Addresses various types of hair loss including androgenetic alopecia",
    benefit: "Improved hair density and coverage"
  }
];

const faqs = [
  {
    question: "What are Exosomes and how do they work?",
    answer: "Exosomes are nano-sized extracellular vesicles released by stem cells that contain proteins, growth factors, mRNA, and other bioactive molecules. When applied to the skin or injected into the scalp, exosomes deliver these regenerative signals directly to cells, stimulating them to repair, regenerate, and produce new collagen and hair follicles. They essentially act as messengers that tell your cells to 'heal and rejuvenate'."
  },
  {
    question: "How long do Exosomes results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is Exosomes treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for Exosomes?",
    answer: "Ideal candidates include those seeking skin rejuvenation, hair restoration, or accelerated healing. It's suitable for all skin types and can benefit patients with fine lines, wrinkles, acne scars, hair loss, or those wanting to enhance their natural healing process. We'll assess your specific concerns during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "For skin rejuvenation, typically 2-4 sessions spaced 2-4 weeks apart. For hair restoration, 3-6 sessions may be needed, spaced 4-6 weeks apart. Maintenance treatments can be done every 3-6 months. The exact number depends on your specific concerns and treatment goals."
  },
  {
    question: "When will I see results?",
    answer: "Initial improvements in skin texture and radiance may be visible within 2-4 weeks. Full results develop over 2-3 months as collagen production increases. For hair restoration, new growth typically appears after 8-12 weeks. Results continue to improve over time."
  },
  {
    question: "Are there any side effects?",
    answer: "Exosomes are generally very safe with minimal side effects. Some patients may experience mild redness, slight swelling, or tiny injection marks that resolve within 24-48 hours. Since exosomes are derived from stem cells (not live cells), there's no risk of rejection or allergic reactions."
  },
  {
    question: "How long do results last?",
    answer: "Results can last 6-12 months or longer, depending on the treatment area and individual factors. Since exosomes stimulate your body's natural regenerative processes, the improvements are more sustainable than temporary fillers. Maintenance treatments help prolong results."
  }
];

const benefits = [
  "Cutting-edge regenerative therapy using stem cell-derived exosomes",
  "Stimulates natural cellular repair and regeneration",
  "Promotes collagen and elastin production",
  "Accelerates wound healing and reduces inflammation",
  "Effective for both skin rejuvenation and hair restoration",
  "Minimal downtime and side effects",
  "Natural, non-surgical approach",
  "Can be combined with other treatments for enhanced results"
];

const aftercare = [
  "Avoid touching or washing the treated area for 6-8 hours",
  "No makeup for 12 hours post-treatment",
  "Avoid sun exposure and use SPF 50+ daily",
  "Stay hydrated and maintain a healthy diet rich in antioxidants",
  "Avoid saunas, steam rooms, and intense exercise for 24-48 hours",
  "Use gentle, hydrating skincare products as recommended",
  "Avoid harsh chemicals or exfoliants for 1 week",
  "Attend all scheduled follow-up sessions for optimal results",
  "Contact us if you experience any unusual reactions"
];

export default function ExosomesPage() {
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
                Exosomes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Exosomes are tiny extracellular vesicles derived from stem cells that contain growth factors, proteins, and genetic material. This cutting-edge regenerative therapy harnesses the power of exosomes to stimulate cellular repair, promote collagen production, and accelerate healing for both skin rejuvenation and hair restoration.
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
                  <p className="text-gray-600 font-medium">Exosomes</p>
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

      {/* Treatment Applications */}
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
                Treatment Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exosomes offer versatile regenerative benefits for both skin and hair, making them an ideal 
                treatment for multiple aesthetic and therapeutic concerns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentApplications.map((treatment, index) => (
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
                    {treatment.application}
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
                How Exosomes Work
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the science behind regenerative exosome therapy
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Exosome Delivery</h3>
                <p className="text-gray-700">
                  Exosomes are applied topically or injected into the target area (skin or scalp). These nano-sized 
                  vesicles are small enough to penetrate cell membranes and deliver their regenerative cargo directly 
                  to cells that need repair and rejuvenation.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Cellular Communication</h3>
                <p className="text-gray-700">
                  Once inside cells, exosomes release growth factors, proteins, and genetic material (mRNA) that 
                  act as signals. These signals 'tell' cells to activate repair mechanisms, increase collagen production, 
                  and stimulate regeneration processes.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Tissue Regeneration</h3>
                <p className="text-gray-700">
                  The bioactive molecules in exosomes stimulate fibroblasts to produce new collagen and elastin. 
                  For hair restoration, they activate hair follicle stem cells to enter the growth phase. This 
                  leads to improved skin quality, reduced wrinkles, and new hair growth.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Long-Term Benefits</h3>
                <p className="text-gray-700">
                  Unlike temporary treatments, exosomes create lasting changes by stimulating your body's own 
                  regenerative processes. The improvements continue to develop over weeks and months, providing 
                  natural, sustainable results that enhance your body's ability to heal and rejuvenate itself.
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
                Benefits of Exosomes
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

      <section id="faqs" className="py-16 bg-white">
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
              Book your Exosomes consultation with Dr. Jaishree today.
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

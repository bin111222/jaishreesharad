"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const treatmentIndications = [
  {
    indication: "Fine Lines & Wrinkles",
    description: "Reduces the appearance of fine lines and wrinkles by stimulating collagen production",
    benefit: "Smoother, more youthful-looking skin"
  },
  {
    indication: "Skin Hydration",
    description: "Deeply hydrates the skin with hyaluronic acid and active ingredients",
    benefit: "Plumper, more radiant complexion"
  },
  {
    indication: "Dull Skin",
    description: "Revitalizes tired, dull skin with essential nutrients and vitamins",
    benefit: "Brighter, more glowing skin tone"
  },
  {
    indication: "Skin Texture",
    description: "Improves overall skin texture and smoothness",
    benefit: "Refined, silky-smooth skin surface"
  },
  {
    indication: "Under-Eye Concerns",
    description: "Targets dark circles, fine lines, and puffiness around the eyes",
    benefit: "Brighter, more refreshed eye area"
  },
  {
    indication: "Neck & Décolletage",
    description: "Rejuvenates the neck and décolletage area",
    benefit: "Firmer, more youthful-looking neckline"
  }
];

const faqs = [
  {
    question: "What is NCTF 135HA and how does it work?",
    answer: "NCTF 135HA is a comprehensive mesotherapy solution containing 55 active ingredients including hyaluronic acid, vitamins (B, C, E), minerals, amino acids, and coenzymes. When injected into the skin, these ingredients work synergistically to stimulate cellular regeneration, boost collagen production, improve hydration, and enhance overall skin quality. The treatment delivers nutrients directly to the dermal layer where they're most needed."
  },
  {
    question: "How long do NCTF 135HA results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is NCTF 135HA treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for NCTF 135HA?",
    answer: "Ideal candidates are adults experiencing signs of ageing such as fine lines, dull skin, or loss of skin elasticity. It's suitable for all skin types and can be used as a preventive treatment for younger patients or as a rejuvenation treatment for mature skin. We'll assess your skin condition and concerns during consultation."
  },
  {
    question: "How many sessions are needed?",
    answer: "Most patients see optimal results with 3-6 sessions, spaced 2-4 weeks apart. For maintenance, treatments can be done every 3-6 months. The exact number depends on your skin condition, age, and treatment goals."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice immediate improvement in skin hydration and radiance. Full results develop over 2-3 months as collagen production increases. Results continue to improve with each session and can last 6-12 months with proper maintenance."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild redness, slight swelling, and tiny injection marks that typically resolve within 24-48 hours. Bruising may occur but is usually minimal. Serious side effects are rare when performed by an experienced provider."
  }
];

const benefits = [
  "55 active ingredients for comprehensive skin rejuvenation",
  "Stimulates natural collagen production",
  "Deep skin hydration with hyaluronic acid",
  "Improves skin texture and radiance",
  "Minimal downtime - return to activities immediately",
  "Suitable for all skin types",
  "Can be combined with other treatments",
  "Natural-looking, gradual results"
];

const aftercare = [
  "Avoid touching the treated area for 6-8 hours",
  "No makeup for 12 hours post-treatment",
  "Avoid sun exposure and use SPF 50+ daily",
  "Stay hydrated and maintain a healthy diet",
  "Avoid saunas, steam rooms, and intense exercise for 24 hours",
  "Use gentle, hydrating skincare products",
  "Attend all scheduled follow-up sessions",
  "Contact us if you experience any unusual reactions"
];

export default function NCTF135HAPage() {
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
                NCTF 135HA
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                NCTF 135HA (New Cellular Treatment Factor) is a premium mesotherapy solution containing 55 active ingredients including hyaluronic acid, vitamins, minerals, amino acids, and coenzymes. This advanced cocktail is injected into the skin to stimulate cellular regeneration, improve skin texture, and combat signs of ageing from within.
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/nctf-135ha/nctf-135ha.webp"
                  alt="NCTF 135HA treatment"
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-white text-4xl">✨</span>
                          </div>
                          <p class="text-gray-600 font-medium">NCTF 135HA</p>
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
                What NCTF 135HA Treats
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                NCTF 135HA addresses multiple skin concerns through its comprehensive blend of active ingredients, 
                making it an ideal treatment for overall skin rejuvenation and anti-ageing.
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
                How NCTF 135HA Works
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the science behind mesotherapy skin rejuvenation
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">1. Direct Nutrient Delivery</h3>
                <p className="text-gray-700">
                  The solution is injected directly into the dermal layer using fine needles, bypassing the skin barrier 
                  to deliver 55 active ingredients exactly where they're needed. This ensures maximum absorption and effectiveness.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">2. Cellular Stimulation</h3>
                <p className="text-gray-700">
                  The combination of vitamins, minerals, and coenzymes stimulates cellular metabolism and regeneration. 
                  This activates fibroblasts (cells that produce collagen) and improves overall cellular function.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">3. Collagen Production</h3>
                <p className="text-gray-700">
                  Hyaluronic acid and amino acids work together to boost natural collagen and elastin production. 
                  This improves skin firmness, elasticity, and reduces the appearance of fine lines and wrinkles.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">4. Hydration & Radiance</h3>
                <p className="text-gray-700">
                  The hyaluronic acid component provides deep hydration, while vitamins C and E brighten the skin 
                  and protect against oxidative damage. This results in a more radiant, glowing complexion.
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
                Benefits of NCTF 135HA
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
              Book your NCTF 135HA consultation with Dr. Jaishree today.
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

"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is Exilis and how does it work?",
    answer: "Exilis is an advanced non-invasive body contouring and skin tightening treatment that uses radiofrequency (RF) energy and ultrasound technology. It delivers controlled heat to target fat cells and stimulate collagen production, resulting in fat reduction and skin tightening. The treatment is highly controlled and can heat deep tissue while monitoring skin surface temperature."
  },
  {
    question: "What areas can be treated with Exilis?",
    answer: "Exilis is effective for treating the face, jawline, under chin, arms, abdomen, and thighs. It's great for moms with slight tummy looseness or anyone after weight loss with minor residual fat pockets. The treatment can address both fat reduction and skin tightening in one session."
  },
  {
    question: "How long does the procedure take?",
    answer: "A typical Exilis treatment session takes about 45-90 minutes depending on the areas being treated. The procedure is comfortable with most patients feeling a warm sensation. You can return to normal activities immediately after treatment."
  },
  {
    question: "When will I see results?",
    answer: "Some tightening is often felt soon after treatment, but maximum results are seen about 3 months after the last session as collagen builds. Fat reduction results also become noticeable in a few months as the body clears fat. Studies show results persist at least a year post-treatment."
  },
  {
    question: "Is Exilis painful?",
    answer: "Most patients describe Exilis as comfortable with only a warm sensation. The device's ability to focus energy makes it very effective while maintaining patient comfort. After a session, you might have slight redness for 15-30 minutes, but no significant side effects."
  },
  {
    question: "How many treatments are needed?",
    answer: "Typically 4 to 6 sessions are recommended, one every 1-2 weeks. The exact number depends on your treatment goals and individual response. Maintenance treatments annually can prolong results. It's great for ages 25-65 who have areas of mild to moderate skin laxity or small fat bulges."
  }
];

const benefits = [
  "Non-invasive fat reduction and skin tightening",
  "Dual technology: RF energy and ultrasound",
  "No downtime or recovery period",
  "Suitable for face and body areas",
  "Safe and FDA-cleared technology",
  "Immediate return to normal activities",
  "Long-lasting results with maintenance",
  "Comfortable treatment experience"
];

const aftercare = [
  "No special aftercare required",
  "You can resume normal activities immediately",
  "Drink plenty of water after body treatments",
  "Light exercise after treatment helps flush out released fat",
  "Avoid sun exposure for 24-48 hours",
  "Follow up with your provider as recommended"
];

const treatmentAreas = [
  {
    area: "Face & Jawline",
    description: "Tightens loose skin and reduces fat under the chin and along the jawline",
    benefit: "More defined, youthful facial contour"
  },
  {
    area: "Arms",
    description: "Reduces fat and tightens loose skin on upper arms",
    benefit: "Smoother, more toned arm appearance"
  },
  {
    area: "Abdomen",
    description: "Reduces stubborn fat and tightens loose skin on the stomach",
    benefit: "Flatter, more toned abdominal area"
  },
  {
    area: "Thighs",
    description: "Contours thighs and reduces cellulite appearance",
    benefit: "Smoother, more sculpted leg contour"
  }
];

export default function ExilisPage() {
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
                Exilis Treatment
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Exilis is an advanced non-invasive body contouring and skin tightening treatment that combines radiofrequency energy and ultrasound technology. It delivers controlled heat to reduce fat and stimulate collagen production for natural, long-lasting results.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>45-90 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (180+ reviews)</span>
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
              <div className="bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/exilis/1.webp"
                  alt="Exilis Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Treatment Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Before/After Image 1 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/exilis/2.webp"
                  alt="Exilis Before/After - Fat Reduction Results"
                  className="w-full h-full object-cover"
                />

              </div>
              
              {/* Before/After Image 2 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/exilis/3.webp"
                  alt="Exilis Before/After - Skin Tightening Results"
                  className="w-full h-full object-cover"
                />

              </div>
              
              {/* Treatment Process Image 1 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/exilis/4.webp"
                  alt="Exilis Treatment Process"
                  className="w-full h-full object-cover"
                />

              </div>
              
              {/* Treatment Process Image 2 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-sm font-bold">+</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              <p className="text-gray-600">45-90 min</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Downtime</h3>
              <p className="text-gray-600">None</p>
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
              <h3 className="font-semibold text-gray-800 mb-1">Sessions</h3>
              <p className="text-gray-600">4-6 sessions</p>
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
                What Exilis Can Treat
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive body contouring and skin tightening solutions
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
                Benefits of Exilis
              </h2>
              <p className="text-xl text-gray-600">
                Why choose Exilis for your body contouring needs
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
                Common questions about Exilis treatments
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
      <section className="py-16 bg-gradient-to-r from-pastel-green to-pastel-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Transform Your Body with Exilis?
            </h2>
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree to discuss how Exilis can naturally contour and tighten your body
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

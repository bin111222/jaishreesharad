"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Snowflake } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is Cryolipolysis and how does it work?",
    answer: "Cryolipolysis (CoolSculpting) is a non-invasive fat reduction treatment that uses controlled cooling to freeze and eliminate stubborn fat cells. The treatment targets fat cells without damaging surrounding tissue. Over time, the frozen fat cells are naturally eliminated by the body, resulting in a more sculpted appearance."
  },
  {
    question: "What areas can be treated with Cryolipolysis?",
    answer: "Cryolipolysis is effective for treating stubborn fat deposits on the abdomen, flanks (love handles), thighs, upper arms, chin, and back. It's ideal for areas that don't respond well to diet and exercise. The treatment can target multiple areas in one session."
  },
  {
    question: "How long does the procedure take?",
    answer: "A typical Cryolipolysis treatment session takes about 35-60 minutes per area. The procedure is comfortable and most patients can read, work on their phone, or relax during treatment. You can return to normal activities immediately afterward."
  },
  {
    question: "When will I see results?",
    answer: "Initial results may be visible as early as 3 weeks after treatment, with the most dramatic results appearing 2-3 months after treatment. The body continues to eliminate fat cells for up to 6 months. Results are permanent as the treated fat cells are eliminated."
  },
  {
    question: "Is Cryolipolysis painful?",
    answer: "Most patients experience minimal discomfort during treatment. You may feel intense cold initially, followed by numbness. Some patients report mild tingling or pulling sensations. The treatment is generally well-tolerated and doesn't require anesthesia."
  },
  {
    question: "How many treatments are needed?",
    answer: "Most patients achieve optimal results with 1-2 treatments per area. Additional treatments may be recommended for larger areas or if you want more dramatic results. The treatment plan is customized based on your specific goals and body contour."
  }
];

const benefits = [
  "Non-invasive fat reduction without surgery",
  "Permanent elimination of fat cells",
  "No downtime or recovery period",
  "Suitable for multiple body areas",
  "Safe and FDA-cleared technology",
  "Natural-looking results",
  "No anesthesia required",
  "Immediate return to normal activities"
];

const aftercare = [
  "No special aftercare required",
  "You can resume normal activities immediately",
  "Maintain a healthy diet and exercise routine",
  "Stay hydrated to support the body's natural processes",
  "Avoid sun exposure to treated areas for 24-48 hours",
  "Follow up with your provider as recommended"
];

const treatmentAreas = [
  {
    area: "Abdomen",
    description: "Reduces stubborn belly fat and creates a flatter, more toned appearance",
    benefit: "Slimmer, more defined waistline"
  },
  {
    area: "Flanks (Love Handles)",
    description: "Eliminates fat deposits on the sides of the waist",
    benefit: "More sculpted, hourglass figure"
  },
  {
    area: "Thighs",
    description: "Reduces inner and outer thigh fat for better leg contour",
    benefit: "Slimmer, more toned legs"
  },
  {
    area: "Chin & Neck",
    description: "Reduces double chin and submental fat",
    benefit: "More defined jawline and neck"
  },
  {
    area: "Upper Arms",
    description: "Reduces fat on the back of the arms (bat wings)",
    benefit: "Smoother, more toned arm appearance"
  },
  {
    area: "Back",
    description: "Reduces fat deposits on the upper and lower back",
    benefit: "Smoother back contour"
  }
];

export default function CryolipolysisPage() {
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
                Cryolipolysis
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Cryolipolysis (CoolSculpting) is a revolutionary non-invasive fat reduction treatment that uses controlled cooling to freeze and eliminate stubborn fat cells. Achieve a more sculpted body without surgery or downtime.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>35-60 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (220+ reviews)</span>
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/cryolipolysis/1.webp"
                  alt="Cryolipolysis Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/cryolipolysis/2.webp"
                    alt="Cryolipolysis Before/After - Fat Reduction Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/cryolipolysis/3.webp"
                    alt="Cryolipolysis Before/After - Body Contouring Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/cryolipolysis/4.webp"
                    alt="Cryolipolysis Treatment Process"
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
              <p className="text-gray-600">35-60 min</p>
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
              <p className="text-gray-600">2-3 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Sessions</h3>
              <p className="text-gray-600">1-2 sessions</p>
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
                What Cryolipolysis Can Treat
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive fat reduction solutions for various body areas, providing natural-looking results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/cryolipolysis/treatment-areas/${treatment.area.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/&/g, 'and')}.webp`}
                      alt={`${treatment.area} cryolipolysis treatment`}
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
                Benefits of Cryolipolysis
              </h2>
              <p className="text-xl text-gray-600">
                Why choose Cryolipolysis for your fat reduction needs
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
                Common questions about Cryolipolysis treatments
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
              Ready to Sculpt Your Body with Cryolipolysis?
            </h2>
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree to discuss how Cryolipolysis can naturally reduce stubborn fat
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

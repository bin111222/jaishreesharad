"use client";

import Layout from "@/components/Layout";
import TreatmentVideo from "@/components/ui/treatment-video";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is HIFU and how does it work?",
    answer: "HIFU (High-Intensity Focused Ultrasound) is a non-invasive procedure for skin tightening and lifting. It uses focused ultrasound waves to heat targeted layers under the skin, including the SMAS layer that surgeons tighten in a facelift. This stimulates new collagen production and causes contraction of existing collagen fibers."
  },
  {
    question: "What areas can be treated with HIFU?",
    answer: "HIFU is most effective for treating the lower face and neck areas including jowls, jawline, and under the chin. It can also be used for brow lifting and treating the upper chest area. The treatment is highly targeted and can address specific areas of concern."
  },
  {
    question: "How long does the procedure take?",
    answer: "A typical HIFU treatment session takes about 30-60 minutes depending on the areas being treated. The procedure is comfortable and most patients can return to their normal activities immediately afterward."
  },
  {
    question: "When will I see results?",
    answer: "Some patients notice initial tightening within a few weeks, but the full results develop over 2-3 months as new collagen forms. The results continue to improve for up to 6 months after treatment and can last 1-2 years with proper maintenance."
  },
  {
    question: "Is HIFU painful?",
    answer: "Most patients describe HIFU as comfortable with only mild discomfort. The treatment uses focused ultrasound energy that targets deep tissue while protecting the skin surface. Some patients may feel a warm sensation or slight prickling during treatment."
  },
  {
    question: "How many treatments are needed?",
    answer: "Most patients achieve optimal results with just one HIFU treatment. However, some patients may benefit from a second treatment 6-12 months later for maintenance or to enhance results. The treatment plan is customized based on individual needs and goals."
  }
];

const benefits = [
  "Non-invasive skin tightening and lifting",
  "No downtime or recovery period",
  "Stimulates natural collagen production",
  "Targets the same layer as surgical facelifts",
  "Long-lasting results (1-2 years)",
  "Suitable for all skin types",
  "No anesthesia required",
  "Immediate return to normal activities"
];

const aftercare = [
  "No special aftercare required",
  "You can resume normal activities immediately",
  "Avoid sun exposure for 24-48 hours",
  "Stay hydrated to support collagen production",
  "Use sunscreen daily to protect results",
  "Follow up with your provider as recommended"
];

const treatmentAreas = [
  {
    area: "Lower Face & Jowls",
    description: "Tightens sagging skin along the jawline and reduces jowls",
    benefit: "More defined jawline and youthful contour"
  },
  {
    area: "Neck & Under Chin",
    description: "Reduces neck bands and tightens loose skin under the chin",
    benefit: "Smoother, more toned neck appearance"
  },
  {
    area: "Brow Lift",
    description: "Lifts drooping brows for a more alert, youthful expression",
    benefit: "More open, refreshed eye area"
  },
  {
    area: "Upper Chest",
    description: "Tightens loose skin on the décolletage area",
    benefit: "Smoother, more youthful chest appearance"
  }
];

export default function HIFUPage() {
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
                HIFU Treatment
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                HIFU (High-Intensity Focused Ultrasound) is a non-invasive procedure for skin tightening and lifting. It uses focused ultrasound waves to heat targeted layers under the skin, stimulating collagen production for natural, long-lasting results.
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
                  <span>5.0 (150+ reviews)</span>
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/hifutreatment/1.webp"
                  alt="HIFU Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/hifutreatment/2.webp"
                    alt="HIFU Before/After - Skin Tightening Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/hifutreatment/3.webp"
                    alt="HIFU Before/After - Lifting Effect Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/hifutreatment/4.webp"
                    alt="HIFU Treatment Process"
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
              <p className="text-gray-600">30-60 min</p>
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
              <p className="text-gray-600">1-2 years</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Non-Invasive</h3>
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
                What HIFU Can Treat
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive skin tightening solutions for various facial areas
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
                      src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/hifutreatment/treatment-areas/${treatment.area.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}.webp`}
                      alt={`${treatment.area} hifu treatment`}
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
                Benefits of HIFU
              </h2>
              <p className="text-xl text-gray-600">
                Why choose HIFU for your skin tightening needs
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
                Common questions about HIFU treatments
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

      {/* Treatment Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                HIFU Treatment Videos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch our HIFU skin tightening procedures and see the lifting results. 
                Our focused ultrasound technology provides non-invasive skin tightening.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="max-w-md">
                <TreatmentVideo
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/videos/Nisha_HIFU_Procedure.mp4"
                  title="HIFU Skin Tightening Procedure"
                  description="Watch Dr. Jaishree perform HIFU treatment, demonstrating focused ultrasound technology for non-invasive skin tightening and lifting."
                  aspectRatio="portrait"
                />
              </div>
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
              Ready to Experience HIFU Skin Tightening?
            </h2>
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree to discuss how HIFU can naturally tighten and lift your skin
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

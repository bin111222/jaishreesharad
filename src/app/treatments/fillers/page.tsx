"use client";

import Layout from "@/components/Layout";
import TreatmentVideo from "@/components/ui/treatment-video";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What are dermal fillers and how do they work?",
    answer: "Dermal fillers are gel-like substances injected beneath the skin to restore lost volume, smooth lines, or enhance facial contours. Most fillers contain hyaluronic acid, a naturally occurring substance in your skin that helps maintain volume and hydration."
  },
  {
    question: "How long do dermal fillers last?",
    answer: "The longevity of dermal fillers varies depending on the type used and the area treated. Most hyaluronic acid fillers last 6-18 months. Lip fillers typically last 6-12 months, while cheek and jawline fillers can last 12-18 months."
  },
  {
    question: "Are dermal fillers painful?",
    answer: "Most patients experience minimal discomfort during filler injections. We use very fine needles and can apply topical numbing cream. Some fillers also contain lidocaine for additional comfort during the procedure."
  },
  {
    question: "When will I see results?",
    answer: "You'll see immediate results after dermal filler treatment. However, there may be some initial swelling that subsides within a few days, revealing the final results. Full results are typically visible within 1-2 weeks."
  },
  {
    question: "What areas can be treated with fillers?",
    answer: "Dermal fillers can treat multiple areas including lips, cheeks, under-eye hollows, nasolabial folds, marionette lines, jawline, chin, and temples. We'll customize the treatment plan based on your specific concerns."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include temporary swelling, bruising, and redness at the injection site. These typically resolve within a few days. Serious complications are rare when performed by an experienced provider."
  }
];

const benefits = [
  "Restores lost facial volume",
  "Smooths fine lines and wrinkles",
  "Enhances facial contours",
  "Natural-looking results",
  "Immediate visible improvement",
  "Minimal downtime"
];

const aftercare = [
  "Apply ice packs to reduce swelling for the first 24 hours",
  "Avoid touching or massaging the treated area for 24 hours",
  "Sleep with your head elevated for the first night",
  "Avoid strenuous exercise for 24-48 hours",
  "Avoid facials and saunas for 1 week",
  "Follow up with your provider if you have concerns"
];

const treatmentAreas = [
  {
    name: "Lip Augmentation",
    description: "Thin lips can be given a sexy pout with fillers. When injected precisely along the lip margins and body, the lips become plumper yet natural. Results last ~8–10 months.",
    duration: "30-45 min",
    results: "8-10 months",
    benefit: "Natural-looking fuller lips"
  },
  {
    name: "Cheek Enhancement",
    description: "Adding high cheekbones with fillers can create a prominent, glamorous contour. Restores lost volume and provides a natural lift to the midface.",
    duration: "45-60 min",
    results: "12-18 months",
    benefit: "Enhanced facial structure"
  },
  {
    name: "Tear Trough (Under-Eye)",
    description: "Sunken under-eyes (tear troughs), puffiness or dark circles can be treated with soft fillers to lift the sunken area and reduce shadows.",
    duration: "30-45 min",
    results: "9-12 months",
    benefit: "Reduced dark circles and tired appearance"
  },
  {
    name: "Nasolabial Folds",
    description: "Deep laugh lines (nasolabial folds) can be smoothed with strategic filler placement to restore volume and reduce the appearance of lines.",
    duration: "30-45 min",
    results: "12-18 months",
    benefit: "Smoother smile lines"
  },
  {
    name: "Non-Surgical Nose Job",
    description: "Fillers can straighten or sharpen a flat nose, achieving a nose lift without surgery. Can correct minor humps and enhance bridge definition.",
    duration: "30-45 min",
    results: "12-18 months",
    benefit: "Improved nose shape without surgery"
  },
  {
    name: "Chin & Jaw Contouring",
    description: "Chin augmentation and jaw contouring can enhance facial proportions and create a more defined jawline for a balanced appearance.",
    duration: "45-60 min",
    results: "12-18 months",
    benefit: "Better facial proportions"
  }
];

export default function FillersPage() {
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
                Dermal Fillers
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dermal fillers (typically made of Hyaluronic Acid) are used to instantly restore volume, smooth wrinkles, and enhance facial contours. Modern HA fillers are safe and U.S. FDA approved, providing natural-looking correction of lines and wrinkles.
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
                  <span>5.0 (400+ reviews)</span>
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/dermalfillers/1.webp"
                  alt="Dermal Fillers Treatment - Dr. Jaishree Sharad"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/dermalfillers/2.webp"
                    alt="Dermal Fillers Treatment - Dr. Jaishree Sharad"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/dermalfillers/3.webp"
                    alt="Dermal Fillers Before/After - Lip Enhancement Results"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/dermalfillers/4.webp"
                    alt="Dermal Fillers Before/After - Cheek Volume Results"
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
              <p className="text-gray-600">1-2 days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Results</h3>
              <p className="text-gray-600">6-18 months</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">FDA Approved</h3>
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
                Dermal fillers can enhance and restore volume in multiple facial areas. 
                Our expert treatments target specific areas for natural, rejuvenated results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-6 overflow-hidden">
                    <img 
                      src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/dermalfillers/treatment-areas/${area.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}.webp`}
                      alt={`${area.name} filler treatment`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-48 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-white font-bold text-xl">${index + 1}</span>
                              </div>
                              <p class="text-gray-600 font-medium">${area.name}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-4 text-center text-lg">{area.name}</h3>
                  <p className="text-gray-600 text-center mb-4 leading-relaxed">{area.description}</p>
                  <div className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 rounded-xl p-3 border border-pastel-green/20">
                    <div className="flex justify-between text-sm text-gray-600 font-medium">
                      <span>Duration: {area.duration}</span>
                      <span>Results: {area.results}</span>
                    </div>
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
                Benefits of Dermal Fillers
              </h2>
              <p className="text-xl text-gray-600">
                Why choose dermal fillers for volume restoration
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

      {/* Procedure */}
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
                The Procedure
              </h2>
              <p className="text-xl text-gray-600">
                What to expect during your dermal filler treatment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">
                  We'll assess your concerns, discuss goals, and create a personalized treatment plan
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Treatment</h3>
                <p className="text-gray-600 text-sm">
                  Precise injections using fine needles. The procedure takes 30-60 minutes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Results</h3>
                <p className="text-gray-600 text-sm">
                  Immediate improvement with final results visible within 1-2 weeks
                </p>
              </div>
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
              <p className="text-xl text-gray-600">
                Common questions about dermal filler treatment
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden">
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
                Dermal Filler Treatment Videos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch our dermal filler procedures and see the natural, beautiful results. 
                Our expert techniques ensure precise, safe injections for optimal outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TreatmentVideo
                src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/videos/Aanam%20_Chin%20filler_reel.mp4"
                title="Chin Filler Augmentation"
                description="Watch Dr. Jaishree perform chin filler augmentation, demonstrating precise injection techniques for enhanced jawline definition."
                aspectRatio="portrait"
              />
              
              <TreatmentVideo
                src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/videos/Lip%20filler_reel.mp4"
                title="Lip Filler Enhancement"
                description="See the lip filler procedure in action, showing how to achieve natural-looking lip enhancement with expert techniques."
                aspectRatio="portrait"
              />
              
              <TreatmentVideo
                src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/videos/Natasha_Undereye%20filler.mp4"
                title="Under-Eye Filler Treatment"
                description="Watch the under-eye filler treatment process, demonstrating how to address tear troughs and under-eye hollows safely."
                aspectRatio="portrait"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Restore Your Volume?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your dermal filler consultation with Dr. Jaishree and discover 
              how fillers can enhance your natural beauty.
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

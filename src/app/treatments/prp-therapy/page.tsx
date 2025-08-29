"use client";

import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Droplets, Heart, Zap, Activity } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const prpApplications = [
  {
    name: "Hair Restoration",
    description: "Stimulate hair growth and prevent hair loss",
    duration: "60-90 min",
    sessions: "3-6 sessions",
    icon: Heart,
    color: "from-red-400 to-pink-100"
  },
  {
    name: "Skin Rejuvenation",
    description: "Natural skin regeneration and anti-aging",
    duration: "45-60 min",
    sessions: "3-4 sessions",
    icon: Activity,
    color: "from-purple-400 to-pink-100"
  },
  {
    name: "Acne Scar Treatment",
    description: "Reduce appearance of acne scars",
    duration: "30-45 min",
    sessions: "4-6 sessions",
    icon: Droplets,
    color: "from-blue-400 to-cyan-400"
  }
];

const benefits = [
  "Natural treatment using your own blood",
  "Stimulates natural healing and regeneration",
  "Minimal risk of allergic reactions",
  "Long-lasting results",
  "No synthetic chemicals or fillers",
  "Suitable for all skin types"
];

const aftercare = [
  "Keep treated area clean and dry for 24 hours",
  "Avoid sun exposure for 1-2 weeks",
  "Apply sunscreen SPF 30+ daily",
  "Avoid strenuous exercise for 48 hours",
  "Stay hydrated and maintain healthy diet",
  "Follow up with your provider"
];

const faqs = [
  {
    question: "What is PRP therapy and how does it work?",
    answer: "PRP (Platelet-Rich Plasma) therapy uses your own blood's healing factors to stimulate natural regeneration. Blood is drawn, processed to concentrate platelets, then injected into treatment areas to promote healing and growth."
  },
  {
    question: "How long do PRP results last?",
    answer: "PRP results are long-lasting and can continue to improve over 6-12 months. Hair restoration results may last 1-2 years, while skin rejuvenation effects can last 12-18 months with proper maintenance."
  },
  {
    question: "Is PRP therapy painful?",
    answer: "PRP therapy involves minimal discomfort. We use topical numbing cream and very fine needles. Most patients describe it as a mild pinching sensation that's well-tolerated."
  },
  {
    question: "When will I see results?",
    answer: "Results vary by treatment type. Hair growth may be visible in 3-6 months, skin improvements in 4-8 weeks, and pain relief can be felt within days to weeks after treatment."
  },
  {
    question: "Who is a good candidate for PRP therapy?",
    answer: "Good candidates are adults in good health with realistic expectations. We'll assess your medical history and current medications during consultation to ensure PRP is safe and appropriate for you."
  }
];

export default function PRPTherapyPage() {
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section ref={containerRef} className="relative py-20 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-pastel-pink/10 text-pastel-pink rounded-full text-sm font-medium"
              >
                <Droplets className="w-4 h-4" />
                <span>Natural Healing Therapy</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                PRP
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-red-500">
                  Therapy
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Platelet-Rich Plasma (PRP) therapy uses your body's own growth factors to stimulate collagen production and tissue regeneration. Applied or injected after microneedling/laser, PRP can boost healing and results for skin rejuvenation and hair restoration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>30-90 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (250+ reviews)</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="#applications"
                  className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-300"
                >
                  <span>Explore Applications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-3xl p-8 aspect-square overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-pastel-pink/20 rounded-2xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-2 border-red-400/20 rounded-xl"
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/prptherapy/1.webp"
                    alt="PRP Therapy Treatment - Dr. Jaishree Sharad"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Treatment Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Before/After Image 1 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/prptherapy/2.webp"
                  alt="PRP Therapy Before/After - Hair Growth Results"
                  className="w-full h-full object-cover"
                />

              </div>
              
              {/* Before/After Image 2 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/prptherapy/3.webp"
                  alt="PRP Therapy Before/After - Skin Rejuvenation Results"
                  className="w-full h-full object-cover"
                />

              </div>
              
              {/* Treatment Process Image 1 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/prptherapy/4.webp"
                  alt="PRP Therapy Treatment Process"
                  className="w-full h-full object-cover"
                />

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts with Animation */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Clock, label: "Duration", value: "30-90 min", color: "bg-pastel-green" },
              { icon: AlertTriangle, label: "Downtime", value: "Minimal", color: "bg-pastel-pink" },
              { icon: Calendar, label: "Results", value: "6-12 months", color: "bg-pastel-green" },
              { icon: CheckCircle, label: "Natural", value: "Your own blood", color: "bg-pastel-pink" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.label}</h3>
                <p className="text-gray-600">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRP Applications with Interactive Cards */}
      <section id="applications" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                PRP Applications
              </h2>
              <p className="text-xl text-gray-600">
                Versatile treatment for multiple concerns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prpApplications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-full h-40 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-6 overflow-hidden">
                      <img 
                        src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/prptherapy/applications/${app.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
                        alt={`${app.name} PRP treatment`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-40 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                              <div class="text-center">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  class="w-16 h-16 bg-gradient-to-r ${app.color} rounded-full flex items-center justify-center mx-auto mb-2"
                                >
                                  <app.icon class="w-8 h-8 text-white" />
                                </motion.div>
                                <p class="text-gray-600 font-medium text-sm">${app.name}</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <app.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 text-center">
                      {app.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">{app.description}</p>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-medium">{app.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Sessions:</span>
                        <span className="font-medium">{app.sessions}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits with Animated Icons */}
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
                Benefits of PRP Therapy
              </h2>
              <p className="text-xl text-gray-600">
                Why choose natural healing with PRP
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-8 h-8 bg-gradient-to-r from-pastel-green to-pastel-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-gray-700 group-hover:text-gray-800 transition-colors">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Procedure Steps with Animation */}
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
                The PRP Process
              </h2>
              <p className="text-xl text-gray-600">
                Simple, safe, and effective treatment process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Blood Draw",
                  description: "Small blood sample collected from your arm"
                },
                {
                  step: "2",
                  title: "Processing",
                  description: "Blood is processed to concentrate platelets"
                },
                {
                  step: "3",
                  title: "Injection",
                  description: "PRP is injected into treatment areas"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gradient-to-r from-pastel-pink to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </motion.div>
                  <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aftercare with Interactive List */}
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 bg-gradient-to-r from-pastel-pink to-red-500 rounded-full mt-2 flex-shrink-0"
                  />
                  <span className="text-gray-700 group-hover:text-gray-800 transition-colors">{instruction}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs with Smooth Animations */}
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about PRP therapy
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5 text-pastel-pink" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Parallax */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 border-2 border-pastel-pink/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-24 h-24 border-2 border-pastel-green/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-red-400/20 rounded-full"
        />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready for Natural Healing?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your PRP consultation with Dr. Jaishree and discover 
              the power of your body's natural healing factors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Book Consultation</span>
              </Link>
              
              <Link
                href="/treatments"
                className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-300"
              >
                <span>View All Treatments</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

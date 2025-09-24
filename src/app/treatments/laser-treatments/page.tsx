"use client";

import Layout from "@/components/Layout";
import TreatmentVideo from "@/components/ui/treatment-video";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar, Zap, Target, Eye, Heart, Shield } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const laserTypes = [
  {
    name: "Laser Hair Removal",
    description: "Permanent reduction of unwanted hair",
    duration: "15-60 min",
    sessions: "6-8 sessions",
    results: "Permanent reduction",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    concerns: ["Facial hair", "Body hair", "Bikini area", "Underarms"]
  },
  {
    name: "Laser Skin Rejuvenation",
    description: "Improve skin texture and tone",
    duration: "30-45 min",
    sessions: "3-6 sessions",
    results: "Improved texture",
    icon: Eye,
    color: "from-purple-500 to-pink-100",
    concerns: ["Fine lines", "Uneven texture", "Sun damage", "Age spots"]
  },
  {
    name: "Laser Tattoo Removal",
    description: "Safe and effective tattoo removal",
    duration: "15-30 min",
    sessions: "6-12 sessions",
    results: "Complete removal",
    icon: Target,
    color: "from-orange-500 to-red-500",
    concerns: ["Unwanted tattoos", "Tattoo fading", "Color correction"]
  },
  {
    name: "Laser Pigmentation",
    description: "Treat hyperpigmentation and melasma",
    duration: "20-40 min",
    sessions: "4-8 sessions",
    results: "Even skin tone",
    icon: Heart,
    color: "from-green-500 to-emerald-500",
    concerns: ["Dark spots", "Melasma", "Sun spots", "Post-acne marks"]
  }
];

const benefits = [
  "Precise and targeted treatment",
  "Minimal downtime and discomfort",
  "Long-lasting results",
  "Safe for all skin types",
  "Advanced technology",
  "Customizable treatment plans"
];

const aftercare = [
  "Avoid sun exposure for 2-4 weeks",
  "Apply sunscreen SPF 30+ daily",
  "Keep treated area clean and dry",
  "Avoid hot showers and saunas",
  "Don't pick or scratch treated areas",
  "Follow up with your provider"
];

const faqs = [
  {
    question: "How do laser treatments work?",
    answer: "Laser treatments use concentrated light energy to target specific skin concerns. The laser energy is absorbed by the target tissue (hair follicles, pigment, or blood vessels) while leaving surrounding skin unharmed."
  },
  {
    question: "Are laser treatments painful?",
    answer: "Most patients describe laser treatments as a mild snapping sensation, similar to a rubber band. We use cooling systems and can apply numbing cream for sensitive areas to ensure comfort."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies by treatment type and individual factors. Hair removal typically requires 6-8 sessions, while skin rejuvenation may need 3-6 sessions for optimal results."
  },
  {
    question: "When will I see results?",
    answer: "Results vary by treatment. Hair removal shows gradual reduction over sessions, while skin treatments may show improvement within 1-2 weeks. Full results develop over several weeks to months."
  },
  {
    question: "Who is a good candidate for laser treatments?",
    answer: "Good candidates are adults in good health with realistic expectations. We'll assess your skin type, hair color, and concerns during consultation to determine the best treatment approach."
  }
];

export default function LaserTreatmentsPage() {
  const [selectedLaser, setSelectedLaser] = useState(0);
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
              transition={{ duration: 0.1 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.15 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-pastel-pink/10 text-pastel-pink rounded-full text-sm font-medium"
              >
                <Zap className="w-4 h-4" />
                <span>Advanced Laser Technology</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.1 }}
                className="font-display text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                Laser
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-blue-500">
                  Treatments
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.15 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Advanced laser treatments for skin rejuvenation, pigmentation, and hair removal. Q-Switched Nd:YAG lasers and pico-second lasers effectively target excess melanin and can treat issues like freckles, sun spots, or post-acne marks with minimal downtime.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.15 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>15-60 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (400+ reviews)</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.15 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-150 hover:scale-105"
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="#laser-types"
                  className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-150"
                >
                  <span>Explore Lasers</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.1 }}
              className="relative"
            >
              {/* Main Hero Image */}
              <div className="relative bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-3xl p-8 aspect-square mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-pastel-pink/20 rounded-2xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-2 border-blue-400/20 rounded-xl"
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/laser-treatments/laser-types/1.webp?updatedAt=1756376529456"
                    alt="Laser Treatments - Dr. Jaishree Sharad"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/laser-treatments/laser-types/2.webp"
                    alt="Laser Treatments - Dr. Jaishree Sharad"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/laser-treatments/laser-types/5.webp"
                    alt="Laser Hair Removal Treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/laser-treatments/laser-types/4.webp"
                    alt="Laser Skin Rejuvenation Treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Facts with Animation */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Clock, label: "Duration", value: "15-60 min", color: "bg-pastel-green" },
              { icon: AlertTriangle, label: "Downtime", value: "Minimal", color: "bg-pastel-pink" },
              { icon: Calendar, label: "Sessions", value: "3-12 sessions", color: "bg-pastel-green" },
              { icon: CheckCircle, label: "FDA Approved", value: "Yes", color: "bg-pastel-pink" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.15 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-150`}
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

      {/* Laser Types with Interactive Cards */}
      <section id="laser-types" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Our Laser Treatments
              </h2>
              <p className="text-xl text-gray-600">
                Advanced technology for precise, effective results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {laserTypes.map((laser, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.15 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-150">
                    <div className="w-full h-48 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-4 overflow-hidden">
                      <img 
                        src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/laser-treatments/laser-types/${laser.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
                        alt={`${laser.name} laser treatment`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-48 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                              <div class="text-center">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  class="w-12 h-12 bg-gradient-to-r ${laser.color} rounded-full flex items-center justify-center mx-auto mb-2"
                                >
                                  <laser.icon class="w-6 h-6 text-white" />
                                </motion.div>
                                <p class="text-gray-600 font-medium text-sm">${laser.name}</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 bg-gradient-to-r ${laser.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <laser.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="font-display text-xl font-semibold text-gray-800 mb-2 text-center">
                      {laser.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-4">{laser.description}</p>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium">{laser.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Sessions:</span>
                          <span className="font-medium">{laser.sessions}</span>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-gray-100">
                        <h4 className="font-medium text-gray-800 mb-2">Treats:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {laser.concerns.map((concern, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {concern}
                            </span>
                          ))}
                        </div>
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
            transition={{ duration: 0.1 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Benefits of Laser Treatments
              </h2>
              <p className="text-xl text-gray-600">
                Why choose laser technology for your skin concerns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.15 }}
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

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Advanced Technology
              </h2>
              <p className="text-xl text-gray-600">
                State-of-the-art lasers for optimal results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Safety First",
                  description: "Advanced cooling systems and safety protocols ensure comfortable, safe treatments"
                },
                {
                  icon: Target,
                  title: "Precise Targeting",
                  description: "Selective targeting means only the treatment area is affected, leaving surrounding skin unharmed"
                },
                {
                  icon: Zap,
                  title: "Advanced Lasers",
                  description: "Latest generation lasers provide optimal results with minimal discomfort and downtime"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.15 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gradient-to-r from-pastel-pink to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-150"
                  >
                    <tech.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-800 mb-2">{tech.title}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
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
            transition={{ duration: 0.1 }}
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
                  transition={{ delay: index * 0.05, duration: 0.15 }}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 bg-gradient-to-r from-pastel-pink to-blue-500 rounded-full mt-2 flex-shrink-0"
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
            transition={{ duration: 0.1 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about laser treatments
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.15 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 90 : 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <ArrowRight className="w-5 h-5 text-pastel-pink" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.15 }}
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
                Laser Treatment Videos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch our advanced laser procedures and see the precise results. 
                Our state-of-the-art laser technology ensures safe, effective treatments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TreatmentVideo
                src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/videos/Laser%20hair%20removal%20reel.mp4"
                title="Laser Hair Removal Procedure"
                description="Watch our laser hair removal treatment in action, demonstrating safe and effective permanent hair reduction techniques."
                aspectRatio="portrait"
              />
              
              <TreatmentVideo
                src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/videos/Pico%20laser_Sonaakshi_Reel.mp4"
                title="Pico Laser Treatment"
                description="See the pico laser procedure, showing advanced laser technology for skin rejuvenation and pigmentation treatment."
                aspectRatio="portrait"
              />
              
              <TreatmentVideo
                src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/videos/Resurfx_yogita_Reel.mp4"
                title="Resurfx Laser Treatment"
                description="Watch the Resurfx laser procedure, demonstrating fractional laser technology for skin resurfacing and rejuvenation."
                aspectRatio="portrait"
              />
              
              <TreatmentVideo
                src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/videos/Resurfx%20video_Roshmi.mp4"
                title="Resurfx Treatment Results"
                description="See the Resurfx treatment results, showing the skin improvement and rejuvenation achieved with this advanced laser technology."
                aspectRatio="portrait"
              />
              
              <TreatmentVideo
                src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/videos/Sonam%20PhotoFacial.mp4?updatedAt=1758696058261"
                title="PhotoFacial Laser Treatment"
                description="Watch the PhotoFacial procedure, demonstrating IPL laser technology for skin rejuvenation and pigmentation correction."
                aspectRatio="portrait"
              />
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-blue-400/20 rounded-full"
        />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready for Laser Precision?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your laser consultation with Dr. Jaishree and experience 
              the power of advanced laser technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-150 hover:scale-105"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Book Consultation</span>
              </Link>
              
              <Link
                href="/treatments"
                className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-150"
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

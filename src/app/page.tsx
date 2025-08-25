"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Award, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import SocialMediaFeed from "@/components/SocialMediaFeed";

// Real data from content bible
const featuredTreatments = [
  {
    id: 1,
    title: "Botox",
    description: "Relax facial lines (crow's feet, frown lines, forehead) for a natural, refreshed look",
    duration: "15-30 min",
    downtime: "Minimal",
    image: "/treatments/botox.jpg",
    href: "/treatments/botox"
  },
  {
    id: 2,
    title: "Dermal Fillers",
    description: "Restore volume, contour the face, reduce wrinkles with safe hyaluronic acid-based solutions",
    duration: "30-60 min",
    downtime: "1-2 days",
    image: "/treatments/fillers.jpg",
    href: "/treatments/fillers"
  },
  {
    id: 3,
    title: "Liquid Facelift",
    description: "Combination approach using fillers + botox for non-surgical rejuvenation",
    duration: "60-90 min",
    downtime: "2-3 days",
    image: "/treatments/liquid-facelift.jpg",
    href: "/treatments/liquid-facelift"
  }
];

const testimonials = [
  {
    id: 1,
    quote: "She's the only person I trust with my skin.",
    name: "Bollywood Actor",
    treatment: "Celebrity Client",
    rating: 5
  },
  {
    id: 2,
    quote: "Dr. Jaishree understands beauty and science in equal measure.",
    name: "Fashion Icon",
    treatment: "Celebrity Client",
    rating: 5
  },
  {
    id: 3,
    quote: "Professional, caring, and amazing results. Highly recommend!",
    name: "Patient",
    treatment: "Liquid Facelift",
    rating: 5
  }
];

const stats = [
  { number: "26+", label: "Years Experience", icon: Award },
  { number: "20,000+", label: "Happy Patients", icon: Users },
  { number: "4", label: "Published Books", icon: BookOpen },
  { number: "500+", label: "Global Lectures", icon: Star }
];

const mediaHighlights = [
  {
    title: "Vogue India",
    type: "Magazine",
    year: "2023"
  },
  {
    title: "NDTV",
    type: "TV Network",
    year: "2025"
  },
  {
    title: "Forbes India",
    type: "Magazine",
    year: "Featured"
  },
  {
    title: "India Today",
    type: "Magazine",
    year: "2023"
  }
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-screen flex items-center bg-white px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Science.
                <span className="block text-gray-800">Skin.</span>
                <span className="block text-pastel-pink">Sophistication.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Welcome to Skinfinitii – where advanced skincare meets personal excellence. Led by Dr. Jaishree Sharad, we bring you the latest in aesthetic treatments with unwavering dedication to safety and results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-pastel-pink text-white font-semibold rounded-full hover:bg-pastel-pink/90 transition-all duration-200 text-sm sm:text-base shadow-md"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/treatments"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-200 text-sm sm:text-base"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Gallery Placeholder - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <span className="text-gray-500 text-xs sm:text-sm font-medium px-2 text-center">Gallery Image 1</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <span className="text-gray-500 text-xs sm:text-sm font-medium px-2 text-center">Gallery Image 2</span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
                  <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <span className="text-gray-500 text-xs sm:text-sm font-medium px-2 text-center">Gallery Image 3</span>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <span className="text-gray-500 text-xs sm:text-sm font-medium px-2 text-center">Gallery Image 4</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Bar - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Featured on</h2>
            <p className="text-gray-600 text-base sm:text-lg">Featured on leading TV channels and publications</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
            {mediaHighlights.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="h-12 sm:h-16 bg-gray-100 rounded-lg mb-2 sm:mb-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <span className="text-gray-700 font-semibold text-xs sm:text-sm px-2">{media.title}</span>
                </div>
                <p className="text-xs text-gray-500">{media.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Treatments */}
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
                Featured Treatments
              </h2>
              <p className="text-xl text-gray-600">
                Transform your appearance with our most popular procedures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTreatments.map((treatment, index) => (
                <motion.div
                  key={treatment.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link href={treatment.href}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-20 h-20 bg-gradient-to-br from-pastel-pink to-purple-500 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-white font-display font-bold text-2xl">
                              {treatment.title.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-600 font-medium">Treatment Image</p>
                            <p className="text-sm text-gray-500">{treatment.title}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="font-display text-xl font-semibold text-gray-800 mb-3">
                          {treatment.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {treatment.description}
                        </p>
                        
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                          <span>Duration: {treatment.duration}</span>
                          <span>Downtime: {treatment.downtime}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-pastel-pink font-semibold group-hover:text-pastel-pink/80 transition-colors">
                            Learn More
                          </span>
                          <ArrowRight className="w-4 h-4 text-pastel-pink group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Feed */}
      <SocialMediaFeed maxPosts={6} showHeader={true} />

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold text-gray-800 mb-4">
                What Our Patients Say
              </h2>
              <p className="text-xl text-gray-600">
                Real stories from celebrities and patients who trust Dr. Jaishree
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.treatment}</div>
                  </div>
                </motion.div>
              ))}
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
              Ready to Transform Your Skin?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your consultation with Dr. Jaishree and start your journey to beautiful, healthy skin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/quiz"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
              >
                <span>Take Skin Quiz</span>
              </Link>
            </div>
          </motion.div>
    </div>
      </section>
    </Layout>
  );
}

"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Award, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import SocialMediaFeed from "@/components/SocialMediaFeed";
import { FeaturedMediaMarquee } from "@/components/FeaturedMediaMarquee";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

// Real data from content bible
const featuredTreatments = [
  {
    id: 1,
    title: "Botox",
    description: "Relax facial lines (crow's feet, frown lines, forehead) for a natural, refreshed look",
    duration: "15-30 min",
    downtime: "Minimal",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/1.webp",
    href: "/treatments/botox"
  },
  {
    id: 2,
    title: "Dermal Fillers",
    description: "Restore volume, contour the face, reduce wrinkles with safe hyaluronic acid-based solutions",
    duration: "30-60 min",
    downtime: "1-2 days",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/dermalfillers/1.webp",
    href: "/treatments/fillers"
  },
  {
    id: 3,
    title: "Liquid Facelift",
    description: "Combination approach using fillers + botox for non-surgical rejuvenation",
    duration: "60-90 min",
    downtime: "2-3 days",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/liquidfacelift/1.webp",
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

const circularTestimonials = [
  {
    quote: "Dr. Jaishree is the only person I trust with my skin. Her expertise and attention to detail are unmatched. The results I've seen are incredible!",
    name: "Shamita Shetty",
    designation: "Bollywood Actress",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Dr. Jaishree understands beauty and science in equal measure. Her treatments are not just about looking good, but feeling confident from within.",
    name: "Neha Dhupia",
    designation: "Actress & Model",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
  },
  {
    quote: "Professional, caring, and amazing results. Dr. Jaishree's liquid facelift treatment gave me the natural rejuvenation I was looking for. Highly recommend!",
    name: "Priya Sharma",
    designation: "Business Executive",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
  },
  {
    quote: "After struggling with acne scars for years, Dr. Jaishree's treatments completely transformed my skin. I finally feel confident in my own skin!",
    name: "Anjali Patel",
    designation: "Software Engineer",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
  },
  {
    quote: "Dr. Jaishree's botox treatment was so natural, no one could tell I had anything done. She truly is an artist with injectables!",
    name: "Riya Kapoor",
    designation: "Marketing Director",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
  },
  {
    quote: "The PRP therapy for my hair loss was a game-changer. Dr. Jaishree's expertise in regenerative treatments is outstanding.",
    name: "Arjun Singh",
    designation: "Entrepreneur",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
  },
  {
    quote: "Dr. Jaishree's chemical peel treatment gave me the radiant skin I always wanted. Her attention to detail is remarkable.",
    name: "Meera Reddy",
    designation: "Fashion Designer",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
  },
  {
    quote: "The thread lift procedure was exactly what I needed. Dr. Jaishree's non-surgical approach gave me natural-looking results.",
    name: "Kavya Iyer",
    designation: "Corporate Lawyer",
    src: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
  },
  {
    quote: "Dr. Jaishree's laser treatments for pigmentation worked wonders. She truly understands Indian skin and its unique needs.",
    name: "Sneha Gupta",
    designation: "Doctor",
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
  },
  {
    quote: "The bridal package at Skinfinitii was perfect for my wedding. Dr. Jaishree made sure I looked my absolute best on my special day!",
    name: "Zara Khan",
    designation: "Bride",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D"
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
      {/* Hero Section - Clean Design with Higher Text */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-8 lg:pt-12">
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
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-pastel-green text-black font-semibold rounded-full hover:bg-pastel-pink/90 transition-all duration-200 text-sm sm:text-base shadow-md"
                >
                  <span>About Dr. Jaishree</span>
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

            {/* Optimized Image Gallery - Better Proportions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-6 lg:mt-0"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Featured Image - Smaller */}
                <div className="col-span-2 aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/%201.webp" 
                    alt="Dr. Jaishree Sharad - Featured Image" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Two Medium Images - Smaller */}
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/%202.webp" 
                    alt="Dr. Jaishree Sharad - Clinic Interior" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/%204.webp" 
                    alt="Dr. Jaishree Sharad - Treatment Results" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Bottom Row - Smaller Images */}
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/%205.webp" 
                    alt="Dr. Jaishree Sharad - Treatment Session" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/%206.webp" 
                    alt="Dr. Jaishree Sharad - Medical Team" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Media Marquee */}
      <FeaturedMediaMarquee />

      {/* Stats Section - Enhanced with Animations */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #f472b6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #86efac 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.8, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pastel-pink to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                  animate={{ 
                    y: [0, -5, 0],
                    transition: { 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                >
                  {stat.number}
                </motion.div>
                
                <motion.div 
                  className="text-sm sm:text-base text-gray-600 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.6 }}
                >
                  {stat.label}
                </motion.div>
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={treatment.image}
                          alt={`${treatment.title} - Dr. Jaishree Sharad`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-display text-2xl font-bold text-white drop-shadow-xl leading-tight">
                            {treatment.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
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
            
            {/* View All Treatments Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center pt-8"
            >
              <Link
                href="/treatments"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-pink to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
              >
                <span>View All Treatments</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
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
            
            <div className="flex justify-center">
              <CircularTestimonials
                testimonials={circularTestimonials}
                autoplay={true}
                colors={{
                  name: "#1f2937",
                  designation: "#6b7280",
                  testimony: "#374151",
                  arrowBackground: "#f472b6",
                  arrowForeground: "#ffffff",
                  arrowHoverBackground: "#ec4899",
                }}
                fontSizes={{
                  name: "1.75rem",
                  designation: "1rem",
                  quote: "1.125rem",
                }}
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

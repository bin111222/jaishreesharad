"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Award, Users, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import SocialMediaFeed from "@/components/SocialMediaFeed";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import AwardsSection from "@/components/AwardsSection";
import { useState, useEffect } from "react";

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



const featuredVideos = [
  {
    id: 1,
    title: "Stop Wasting Money on Skincare! Do THIS Instead",
    description: "Expert advice on smart skincare spending",
    thumbnail: "https://img.youtube.com/vi/iVmnobqE3G8/maxresdefault.jpg",
    videoId: "iVmnobqE3G8",
    category: "Skincare Tips",
    duration: "8:45"
  },
  {
    id: 2,
    title: "The Changing Paradigms of Skincare in India",
    description: "Dr. Jaishree discusses evolving skincare trends",
    thumbnail: "https://img.youtube.com/vi/Xj5VJNHrSCc/maxresdefault.jpg",
    videoId: "Xj5VJNHrSCc",
    category: "Expert Talk",
    duration: "12:30"
  },
  {
    id: 3,
    title: "TEDx – The Mind–Skin Connection: Healing from Within",
    description: "Groundbreaking TEDx talk on mind-skin relationship",
    thumbnail: "https://img.youtube.com/vi/1BCr1LNA10U/maxresdefault.jpg",
    videoId: "1BCr1LNA10U",
    category: "TEDx Talk",
    duration: "18:22"
  },
  {
    id: 4,
    title: "Don't Do This With Your Skin!",
    description: "Common skincare mistakes to avoid",
    thumbnail: "https://img.youtube.com/vi/SMaSfrrBGc8/maxresdefault.jpg",
    videoId: "SMaSfrrBGc8",
    category: "What's Your Mantra?",
    duration: "6:15"
  },
  {
    id: 5,
    title: "Bollywood Celebrity Skin Care Secrets",
    description: "Exclusive insights into celebrity skincare routines",
    thumbnail: "https://img.youtube.com/vi/DCofgfHdBUI/maxresdefault.jpg",
    videoId: "DCofgfHdBUI",
    category: "Celebrity Secrets",
    duration: "10:45"
  },
  {
    id: 6,
    title: "Figuring Out Podcast – Skin Care Secrets, Fillers, Botox, Acne & Sunscreen",
    description: "Comprehensive discussion on popular treatments",
    thumbnail: "https://img.youtube.com/vi/g93IhHW600U/maxresdefault.jpg",
    videoId: "g93IhHW600U",
    category: "Podcast",
    duration: "45:20"
  }
];

const whyChooseUs = [
  {
    icon: "👩‍⚕️",
    title: "26+ Years Experience",
    description: "Dr. Jaishree Sharad brings over two decades of expertise in aesthetic dermatology, making her one of India's most trusted skin specialists."
  },
  {
    icon: "🔬",
    title: "Latest Technology",
    description: "State-of-the-art equipment and cutting-edge treatments ensure the best possible results with maximum safety and minimal downtime."
  },
  {
    icon: "🎯",
    title: "Personalized Care",
    description: "Every treatment plan is customized to your unique skin type, concerns, and goals for optimal, natural-looking results."
  },
  {
    icon: "🏆",
    title: "Celebrity Trusted",
    description: "Trusted by leading Bollywood celebrities and public figures who demand the highest standards of care and discretion."
  },
  {
    icon: "🛡️",
    title: "Safety First",
    description: "Rigorous safety protocols, certified products, and sterile environments ensure your well-being is our top priority."
  },
  {
    icon: "💎",
    title: "Premium Experience",
    description: "Luxurious clinic environment with personalized attention, ensuring your comfort and satisfaction throughout your journey."
  }
];

const heroSlideshow = [
  {
    id: 1,
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/%201.webp",
    testimonial: "Dr. Jaishree is a pioneer in the field of aesthetic dermatology, her expertise and dedication to patient care are truly remarkable.",
    author: "Amitabh Bachchan",
    rating: "4.9"
  },
  {
    id: 2,
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/8.webp",
    testimonial: "She's the only person I trust with my skin. Her attention to detail and results are unmatched.",
    author: "Shamita Shetty",
    rating: "4.9"
  },
  {
    id: 3,
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/%203.webp",
    testimonial: "Dr. Jaishree understands beauty and science in equal measure. Her treatments are transformative.",
    author: "Neha Dhupia",
    rating: "4.9"
  },
  {
    id: 4,
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/%204.webp",
    testimonial: "Professional, caring, and amazing results. Dr. Jaishree's expertise is truly world-class.",
    author: "Celebrity Client",
    rating: "4.9"
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlideshow.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlideshow.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlideshow.length) % heroSlideshow.length);
  };

  return (
    <Layout>
      {/* Hero Section - Redesigned for Maximum Impact */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-pastel-pink/5 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pastel-pink/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pastel-green/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pastel-pink/5 to-pastel-green/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - Enhanced Typography & Layout */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 border border-pastel-pink/20 px-4 py-2 rounded-full"
              >
                <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">India's Premier Aesthetic Dermatologist</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9]">
                  <span className="block text-gray-800">Science.</span>
                  <span className="block text-gray-800">Skin.</span>
                  <span className="block bg-gradient-to-r from-pastel-pink via-pink-500 to-pastel-green bg-clip-text text-transparent">
                    Confidence.
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Experience the perfect blend of <span className="font-semibold text-gray-800">medical expertise</span> and <span className="font-semibold text-pastel-pink">artistic vision</span> with Dr. Jaishree Sharad's revolutionary approach to aesthetic dermatology.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-8 pt-4"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">26+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">50K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800">15+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-pastel-pink to-pink-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  href="/treatments"
                  className="group inline-flex items-center justify-center space-x-3 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-pastel-pink hover:text-pastel-pink hover:bg-pastel-pink/5 transition-all duration-300 text-lg"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex items-center space-x-6 pt-8"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-pastel-green rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-600">Celebrity Trusted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-pastel-pink rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-600">Award Winning</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative">
                {/* Main Hero Image Slideshow */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  {heroSlideshow.map((slide, index) => (
                    <motion.img
                      key={slide.id}
                      src={slide.image}
                      alt={`Dr. Jaishree Sharad - ${slide.author}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === currentSlide ? 1 : 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  ))}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-200 shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-200 shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlideshow.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Testimonial Card */}
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-xs"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pastel-pink to-pink-400 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 font-medium">"{heroSlideshow[currentSlide].testimonial}"</p>
                      <p className="text-xs text-gray-500 mt-1">- {heroSlideshow[currentSlide].author}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-pastel-green to-green-400 text-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">{heroSlideshow[currentSlide].rating}</div>
                    <div className="text-xs opacity-90">Patient Rating</div>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <AwardsSection />

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

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Videos
              </h2>
              <p className="text-xl text-gray-600">
                Watch Dr. Jaishree's expert insights on TEDx, podcasts, and media features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-pastel-pink group-hover:scale-110 transition-all duration-300">
                          <Play className="w-8 h-8 text-gray-800 group-hover:text-white ml-1" />
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                        {video.duration}
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-pastel-pink text-white px-3 py-1 rounded-full text-xs font-medium">
                          {video.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold text-gray-800 mb-2 group-hover:text-pastel-pink transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
            
            {/* View More Videos Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center pt-8"
            >
              <Link
                href="/media"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-pink to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg"
              >
                <span>View More Videos</span>
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

      {/* Why Choose Skinfinitii Section */}
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
                Why Choose Skinfinitii?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the perfect blend of medical expertise, cutting-edge technology, and personalized care that sets us apart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className="text-center space-y-4">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      
                      <h3 className="font-display text-xl font-semibold text-gray-800 group-hover:text-pastel-pink transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/5 to-pastel-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional CTA */}
            <div className="text-center pt-8">
              <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of satisfied patients who have transformed their skin and confidence with Dr. Jaishree's expertise
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-pink to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-102 transition-all duration-150 text-lg"
                  >
                    <span>Book Your Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/quiz"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-150 text-lg"
                  >
                    <span>Take Skin Quiz</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


    </Layout>
  );
}

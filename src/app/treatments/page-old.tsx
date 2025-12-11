"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight, Clock, User, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Comprehensive treatment data based on available pages
const allTreatments = [
  {
    id: 1,
    title: "Botox Treatment",
    category: "Injectables",
    concern: "Wrinkles",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Reduce fine lines and wrinkles with FDA-approved Botox for natural, refreshed results",
    duration: "15-30 min",
    downtime: "Minimal",
    benefits: ["Reduces fine lines", "Prevents wrinkles", "Natural results"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/1.webp",
    href: "/treatments/botox"
  },
  {
    id: 2,
    title: "Dermal Fillers",
    category: "Injectables",
    concern: "Volume Loss",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Restore volume and enhance facial contours with hyaluronic acid-based fillers",
    duration: "30-60 min",
    downtime: "1-2 days",
    benefits: ["Restores volume", "Enhances contours", "Natural look"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/dermalfillers/1.webp",
    href: "/treatments/fillers"
  },
  {
    id: 3,
    title: "Liquid Facelift",
    category: "Injectables",
    concern: "Aging",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Non-surgical facelift using advanced injectable techniques for comprehensive rejuvenation",
    duration: "60-90 min",
    downtime: "2-3 days",
    benefits: ["Lifts sagging skin", "Restores youth", "No surgery"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/liquidfacelift/1.webp",
    href: "/treatments/liquid-facelift"
  },
  {
    id: 4,
    title: "Chemical Peels",
    category: "Skin",
    concern: "Acne & Pigmentation",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Exfoliate and rejuvenate skin with advanced chemical solutions for radiant complexion",
    duration: "30-45 min",
    downtime: "3-7 days",
    benefits: ["Improves texture", "Reduces acne", "Brightens skin"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/chemicalpeels/1.webp",
    href: "/treatments/chemical-peels"
  },
  {
    id: 5,
    title: "Laser Treatments",
    category: "Skin",
    concern: "Various",
    area: "Face & Body",
    provider: "Dr. Jaishree",
    description: "Advanced laser technology for skin rejuvenation, hair removal, and pigmentation treatment",
    duration: "15-60 min",
    downtime: "Minimal to 1 week",
    benefits: ["Precise treatment", "Effective results", "Minimal downtime"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/chemicalpeels/3.webp",
    href: "/treatments/laser-treatments"
  },
  {
    id: 6,
    title: "PRP Therapy",
    category: "Skin & Hair",
    concern: "Hair Loss & Skin Rejuvenation",
    area: "Face & Scalp",
    provider: "Dr. Jaishree",
    description: "Platelet-rich plasma therapy for natural hair restoration and skin rejuvenation",
    duration: "45-60 min",
    downtime: "1-2 days",
    benefits: ["Natural treatment", "Stimulates growth", "No side effects"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/prptherapy/1.webp",
    href: "/treatments/prp-therapy"
  },
  {
    id: 7,
    title: "Thread Lifts",
    category: "Lifting",
    concern: "Sagging Skin",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Non-surgical lifting using dissolvable threads for immediate and long-term results",
    duration: "45-60 min",
    downtime: "2-3 days",
    benefits: ["Immediate lift", "Natural results", "Minimal invasion"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/threadlifts/1.webp",
    href: "/treatments/thread-lifts"
  },
  {
    id: 8,
    title: "HIFU Treatment",
    category: "Lifting",
    concern: "Skin Tightening",
    area: "Face & Body",
    provider: "Dr. Jaishree",
    description: "High-intensity focused ultrasound for non-surgical skin tightening and lifting",
    duration: "30-90 min",
    downtime: "Minimal",
    benefits: ["Deep tissue tightening", "No surgery", "Long-lasting results"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/hifutreatment/1.webp",
    href: "/treatments/hifu"
  },
  {
    id: 9,
    title: "Acne Scar Treatment",
    category: "Skin",
    concern: "Acne Scars",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Advanced treatments to reduce and eliminate acne scars for smooth, clear skin",
    duration: "30-60 min",
    downtime: "3-7 days",
    benefits: ["Reduces scars", "Improves texture", "Boosts confidence"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/acnescars/1.webp",
    href: "/treatments/acne-scars"
  },
  {
    id: 10,
    title: "EndyMed",
    category: "Skin Tightening",
    concern: "Skin Laxity",
    area: "Face & Body",
    provider: "Dr. Jaishree",
    description: "Radiofrequency treatment for skin tightening and collagen stimulation",
    duration: "30-45 min",
    downtime: "Minimal",
    benefits: ["Tightens skin", "Stimulates collagen", "No downtime"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/endymed/1.webp",
    href: "/treatments/endymed"
  },
  {
    id: 11,
    title: "Exilis",
    category: "Body Contouring",
    concern: "Fat Reduction",
    area: "Body",
    provider: "Dr. Jaishree",
    description: "Advanced body contouring treatment for fat reduction and skin tightening",
    duration: "30-60 min",
    downtime: "Minimal",
    benefits: ["Reduces fat", "Tightens skin", "No surgery"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/exilis/1.webp",
    href: "/treatments/exilis"
  },
  {
    id: 12,
    title: "Cryolipolysis",
    category: "Body Contouring",
    concern: "Fat Reduction",
    area: "Body",
    provider: "Dr. Jaishree",
    description: "CoolSculpting technology for targeted fat reduction without surgery",
    duration: "35-60 min",
    downtime: "Minimal",
    benefits: ["Targeted fat reduction", "No surgery", "Permanent results"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/cryolipolysis/1.webp",
    href: "/treatments/cryolipolysis"
  },
  {
    id: 13,
    title: "Pigmentation Treatment",
    category: "Skin",
    concern: "Pigmentation",
    area: "Face & Body",
    provider: "Dr. Jaishree",
    description: "Comprehensive treatment for melasma, sun spots, and uneven skin tone",
    duration: "30-45 min",
    downtime: "3-5 days",
    benefits: ["Even skin tone", "Reduces dark spots", "Brightens complexion"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/pigmentation/1.webp",
    href: "/treatments/pigmentation"
  },
  {
    id: 14,
    title: "Non-Surgical Nose Job",
    category: "Injectables",
    concern: "Nose Shape",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Rhinoplasty without surgery using dermal fillers for nose reshaping",
    duration: "30-45 min",
    downtime: "1-2 days",
    benefits: ["No surgery", "Immediate results", "Reversible"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/nonsurgicalnosejob/1.webp",
    href: "/treatments/non-surgical-nose"
  },
  {
    id: 15,
    title: "Skin Boosters",
    category: "Injectables",
    concern: "Skin Quality",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Hydrating injections to improve skin texture, tone, and overall quality",
    duration: "30-45 min",
    downtime: "1-2 days",
    benefits: ["Improves texture", "Hydrates skin", "Natural glow"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/skinboosters/1.webp",
    href: "/treatments/skin-boosters"
  },
  {
    id: 16,
    title: "Microdermabrasion",
    category: "Skin",
    concern: "Skin Texture",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Gentle exfoliation treatment to improve skin texture and reveal fresh skin",
    duration: "30-45 min",
    downtime: "Minimal",
    benefits: ["Improves texture", "Removes dead skin", "Brightens complexion"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/microdermabrasion/1.webp",
    href: "/treatments/microdermabrasion"
  },
  {
    id: 17,
    title: "Facial Contouring",
    category: "Injectables",
    concern: "Facial Shape",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Strategic use of fillers and botox to enhance facial features and proportions",
    duration: "45-90 min",
    downtime: "1-3 days",
    benefits: ["Enhances features", "Balances proportions", "Natural results"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/facialcontouring/1.webp",
    href: "/treatments/facial-contouring"
  },
  {
    id: 18,
    title: "Anti-Aging & Rejuvenation",
    category: "Comprehensive",
    concern: "Aging",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Comprehensive anti-aging treatments combining multiple modalities for optimal results",
    duration: "60-120 min",
    downtime: "3-7 days",
    benefits: ["Comprehensive results", "Long-lasting effects", "Natural rejuvenation"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/antiaging/1.webp",
    href: "/treatments/anti-aging"
  },
  {
    id: 19,
    title: "Skin Treatments",
    category: "Skin",
    concern: "Various Skin Issues",
    area: "Face & Body",
    provider: "Dr. Jaishree",
    description: "Specialized treatments for acne, rosacea, eczema, and other skin conditions",
    duration: "30-60 min",
    downtime: "Varies",
    benefits: ["Targeted treatment", "Improves condition", "Long-term results"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/skintreatments/skintreatments.webp",
    href: "/treatments/skin"
  },
  {
    id: 21,
    title: "Body Treatments",
    category: "Body",
    concern: "Body Concerns",
    area: "Body",
    provider: "Dr. Jaishree",
    description: "Comprehensive body treatments for cellulite, stretch marks, and skin tightening",
    duration: "45-90 min",
    downtime: "1-3 days",
    benefits: ["Improves texture", "Reduces cellulite", "Tightens skin"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bodytreatments/bodytreatments.webp",
    href: "/treatments/body"
  },
  {
    id: 22,
    title: "Bridal Care",
    category: "Bridal",
    concern: "Special Occasions",
    area: "Face & Body",
    provider: "Dr. Jaishree",
    description: "Comprehensive bridal care for radiant skin and confidence on your special day",
    duration: "Varies",
    downtime: "Varies",
    benefits: ["Comprehensive care", "Radiant glow", "Confidence boost"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridalpackages/1.webp",
    href: "/treatments/bridal"
  }
];

const categories = ["All", "Injectables", "Skin", "Body", "Lifting", "Comprehensive", "Bridal"];
const concerns = ["All", "Wrinkles", "Volume Loss", "Aging", "Acne", "Unwanted Hair", "Fat Reduction", "Pigmentation", "Hair Loss", "Skin Tightening", "Acne Scars", "Skin Laxity", "Nose Shape", "Skin Quality", "Skin Texture", "Facial Shape", "Various Skin Issues", "Scalp Issues", "Body Concerns", "Special Occasions"];
const areas = ["All", "Face", "Body", "Face & Body", "Face & Scalp", "Scalp"];
const providers = ["All", "Dr. Jaishree", "Associates", "Therapists"];

export default function TreatmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTreatments = allTreatments.filter(treatment => {
    const matchesSearch = treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || treatment.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });



  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
          <img 
            src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/treatments/hero-bg.webp"
            alt="Dr. Jaishree performing treatment"
            className="w-full h-full object-cover opacity-10"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pastel-green/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pastel-pink/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-6"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                Our Treatments
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our comprehensive range of dermatological and aesthetic treatments 
                designed to enhance your natural beauty and boost your confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-8 h-8 bg-pastel-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span>FDA Approved Treatments</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-8 h-8 bg-pastel-pink rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span>Expert Care</span>
                </div>
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/treatments/hero-treatment.webp"
                  alt="Advanced dermatological treatments"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="text-center">
                        <div class="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                          <span class="text-white text-2xl">✨</span>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Advanced Treatments</h3>
                        <p class="text-gray-600">State-of-the-art dermatological care</p>
                      </div>
                    `;
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent text-sm"
              />
            </div>

            {/* Simple Category Filter */}
            <div className="flex items-center gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent text-sm bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <span className="text-sm text-gray-500">
                {filteredTreatments.length} treatment{filteredTreatments.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </section>



      {/* All Treatments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm !== "" || selectedCategory !== "All" ? (
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Search Results
              </h2>
              <p className="text-xl text-gray-600">
                {filteredTreatments.length} treatment{filteredTreatments.length !== 1 ? 's' : ''} found
              </p>
            </div>
          ) : (
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                All Treatments
              </h2>
              <p className="text-xl text-gray-600">
                Explore our complete range of dermatological and aesthetic procedures
              </p>
            </div>
          )}
          
          {filteredTreatments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment, index) => (
                <motion.div
                  key={treatment.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.03 }}
                  className="group"
                >
                  <Link href={treatment.href}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group-hover:scale-102 border border-gray-100">
                      <div className="h-48 relative overflow-hidden">
                        <img 
                          src={treatment.image}
                          alt={`${treatment.title} - Dr. Jaishree Sharad`}
                          className="w-full h-full object-cover opacity-80"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-display text-2xl font-bold text-white drop-shadow-xl leading-tight">
                            {treatment.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-pastel-pink bg-pastel-pink/10 px-3 py-1 rounded-full">
                            {treatment.category}
                          </span>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <User className="w-4 h-4" />
                            <span>{treatment.provider}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{treatment.description}</p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{treatment.duration}</span>
                            </span>
                            <span>Downtime: {treatment.downtime}</span>
                          </div>
                          
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Benefits:</span>
                            <ul className="mt-1 space-y-1">
                              {treatment.benefits.slice(0, 2).map((benefit, i) => (
                                <li key={i} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-pastel-pink rounded-full" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-pastel-pink font-semibold">Learn More</span>
                          <ArrowRight className="w-4 h-4 text-pastel-pink group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-gray-800 mb-2">
                No treatments found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-pastel-pink text-white font-semibold rounded-full hover:bg-pastel-pink/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Clinic Environment */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              State-of-the-Art Clinic
            </h2>
            <p className="text-xl text-gray-600">
              Experience world-class dermatological care in our modern, comfortable environment
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/treatment-room.webp"
                  alt="Modern treatment room"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-48 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-4 flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                            <span class="text-white text-xl">🏥</span>
                          </div>
                          <p class="text-gray-600 font-medium">Treatment Room</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <h3 className="font-semibold text-gray-800 mb-2">Modern Treatment Rooms</h3>
                <p className="text-gray-600 text-sm">Equipped with the latest technology for optimal results</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/treatments/hero-treatment.webp"
                  alt="Advanced medical equipment"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-48 bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl mb-4 flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                            <span class="text-white text-xl">⚡</span>
                          </div>
                          <p class="text-gray-600 font-medium">Advanced Equipment</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <h3 className="font-semibold text-gray-800 mb-2">Advanced Equipment</h3>
                <p className="text-gray-600 text-sm">Latest FDA-approved devices for safe, effective treatments</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/8.webp"
                  alt="Patient consultation"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-48 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-4 flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                            <span class="text-white text-xl">👩‍⚕️</span>
                          </div>
                          <p class="text-gray-600 font-medium">Expert Consultation</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <h3 className="font-semibold text-gray-800 mb-2">Expert Consultation</h3>
                <p className="text-gray-600 text-sm">Personalized care from Dr. Jaishree and her experienced team</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Not Sure Which Treatment is Right for You?
            </h2>
            
            <p className="text-xl text-gray-600">
              Take our personalized skin quiz or book a consultation to get expert advice 
              tailored to your unique needs and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-150"
              >
                <span>Book Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

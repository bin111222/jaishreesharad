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
    image: "/treatments/botox.jpg",
    href: "/treatments/botox",
    featured: true
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
    image: "/treatments/fillers.jpg",
    href: "/treatments/fillers",
    featured: true
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
    image: "/treatments/liquid-facelift.jpg",
    href: "/treatments/liquid-facelift",
    featured: true
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
    image: "/treatments/chemical-peels.jpg",
    href: "/treatments/chemical-peels",
    featured: false
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
    image: "/treatments/laser-treatments.jpg",
    href: "/treatments/laser-treatments",
    featured: false
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
    image: "/treatments/prp-therapy.jpg",
    href: "/treatments/prp-therapy",
    featured: false
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
    image: "/treatments/thread-lifts.jpg",
    href: "/treatments/thread-lifts",
    featured: false
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
    image: "/treatments/hifu.jpg",
    href: "/treatments/hifu",
    featured: false
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
    image: "/treatments/acne-scars.jpg",
    href: "/treatments/acne-scars",
    featured: false
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
    image: "/treatments/endymed.jpg",
    href: "/treatments/endymed",
    featured: false
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
    image: "/treatments/exilis.jpg",
    href: "/treatments/exilis",
    featured: false
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
    image: "/treatments/cryolipolysis.jpg",
    href: "/treatments/cryolipolysis",
    featured: false
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
    image: "/treatments/pigmentation.jpg",
    href: "/treatments/pigmentation",
    featured: false
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
    image: "/treatments/non-surgical-nose.jpg",
    href: "/treatments/non-surgical-nose",
    featured: false
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
    image: "/treatments/skin-boosters.jpg",
    href: "/treatments/skin-boosters",
    featured: false
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
    image: "/treatments/microdermabrasion.jpg",
    href: "/treatments/microdermabrasion",
    featured: false
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
    image: "/treatments/facial-contouring.jpg",
    href: "/treatments/facial-contouring",
    featured: false
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
    image: "/treatments/anti-aging.jpg",
    href: "/treatments/anti-aging",
    featured: false
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
    image: "/treatments/skin.jpg",
    href: "/treatments/skin",
    featured: false
  },
  {
    id: 20,
    title: "Hair Treatments",
    category: "Hair",
    concern: "Hair Loss & Scalp Issues",
    area: "Scalp",
    provider: "Dr. Jaishree",
    description: "Advanced treatments for hair loss, thinning, and scalp conditions",
    duration: "30-90 min",
    downtime: "Minimal",
    benefits: ["Stimulates growth", "Improves scalp health", "Thicker hair"],
    image: "/treatments/hair.jpg",
    href: "/treatments/hair",
    featured: false
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
    image: "/treatments/body.jpg",
    href: "/treatments/body",
    featured: false
  },
  {
    id: 22,
    title: "Bridal Packages",
    category: "Packages",
    concern: "Special Occasions",
    area: "Face & Body",
    provider: "Dr. Jaishree",
    description: "Comprehensive bridal packages for radiant skin and confidence on your special day",
    duration: "Varies",
    downtime: "Varies",
    benefits: ["Comprehensive care", "Radiant glow", "Confidence boost"],
    image: "/treatments/bridal.jpg",
    href: "/treatments/bridal",
    featured: false
  }
];

const categories = ["All", "Injectables", "Skin", "Hair", "Body", "Lifting", "Comprehensive", "Packages"];
const concerns = ["All", "Wrinkles", "Volume Loss", "Aging", "Acne", "Unwanted Hair", "Fat Reduction", "Pigmentation", "Hair Loss", "Skin Tightening", "Acne Scars", "Skin Laxity", "Nose Shape", "Skin Quality", "Skin Texture", "Facial Shape", "Various Skin Issues", "Scalp Issues", "Body Concerns", "Special Occasions"];
const areas = ["All", "Face", "Body", "Face & Body", "Face & Scalp", "Scalp"];
const providers = ["All", "Dr. Jaishree", "Associates", "Therapists"];

export default function TreatmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedConcern, setSelectedConcern] = useState("All");
  const [selectedArea, setSelectedArea] = useState("All");
  const [selectedProvider, setSelectedProvider] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTreatments = allTreatments.filter(treatment => {
    const matchesSearch = treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || treatment.category === selectedCategory;
    const matchesConcern = selectedConcern === "All" || treatment.concern === selectedConcern;
    const matchesArea = selectedArea === "All" || treatment.area === selectedArea;
    const matchesProvider = selectedProvider === "All" || treatment.provider === selectedProvider;

    return matchesSearch && matchesCategory && matchesConcern && matchesArea && matchesProvider;
  });

  const featuredTreatments = allTreatments.filter(t => t.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
              Our Treatments
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of dermatological and aesthetic treatments 
              designed to enhance your natural beauty and boost your confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search treatments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-pastel-pink transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              
              <p className="text-sm text-gray-500">
                {filteredTreatments.length} treatment{filteredTreatments.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Concern</label>
                  <select
                    value={selectedConcern}
                    onChange={(e) => setSelectedConcern(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  >
                    {concerns.map(concern => (
                      <option key={concern} value={concern}>{concern}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  >
                    {areas.map(area => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Provider</label>
                  <select
                    value={selectedProvider}
                    onChange={(e) => setSelectedProvider(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                  >
                    {providers.map(provider => (
                      <option key={provider} value={provider}>{provider}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      {searchTerm === "" && selectedCategory === "All" && selectedConcern === "All" && selectedArea === "All" && selectedProvider === "All" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Featured Treatments
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and highly-rated procedures
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredTreatments.map((treatment, index) => (
                <motion.div
                  key={treatment.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="group"
                >
                  <Link href={treatment.href}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group-hover:scale-102">
                      <div className="h-48 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 flex items-center justify-center relative">
                        <div className="absolute top-4 left-4 bg-pastel-pink text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-display font-bold text-xl">
                              {treatment.title.split(' ')[0][0]}
                            </span>
                          </div>
                          <h3 className="font-display text-xl font-semibold text-gray-800">
                            {treatment.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">{treatment.description}</p>
                        
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{treatment.duration}</span>
                          </span>
                          <span>Downtime: {treatment.downtime}</span>
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
          </div>
        </section>
      )}

      {/* All Treatments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm !== "" || selectedCategory !== "All" || selectedConcern !== "All" || selectedArea !== "All" || selectedProvider !== "All" ? (
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
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="group"
                >
                  <Link href={treatment.href}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group-hover:scale-102 border border-gray-100">
                      <div className="h-48 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 flex items-center justify-center relative">
                        {treatment.featured && (
                          <div className="absolute top-4 left-4 bg-pastel-pink text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </div>
                        )}
                        <div className="text-center">
                          <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-display font-bold text-xl">
                              {treatment.title.split(' ')[0][0]}
                            </span>
                          </div>
                          <h3 className="font-display text-xl font-semibold text-gray-800">
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
                  setSelectedConcern("All");
                  setSelectedArea("All");
                  setSelectedProvider("All");
                }}
                className="px-6 py-3 bg-pastel-pink text-white font-semibold rounded-full hover:bg-pastel-pink/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
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
                href="/quiz"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-150 hover:scale-102"
              >
                <span>Take Skin Quiz</span>
              </Link>
              
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

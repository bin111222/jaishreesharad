"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight, Clock, User, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock data - will be replaced with Sanity CMS data
const allTreatments = [
  {
    id: 1,
    title: "Botox Treatment",
    category: "Injectables",
    concern: "Wrinkles",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Reduce fine lines and wrinkles with FDA-approved Botox",
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
    description: "Restore volume and enhance facial contours",
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
    description: "Non-surgical facelift using advanced techniques",
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
    concern: "Acne",
    area: "Face",
    provider: "Dr. Jaishree",
    description: "Exfoliate and rejuvenate skin with chemical solutions",
    duration: "30-45 min",
    downtime: "3-7 days",
    benefits: ["Improves texture", "Reduces acne", "Brightens skin"],
    image: "/treatments/chemical-peels.jpg",
    href: "/treatments/chemical-peels",
    featured: false
  },
  {
    id: 5,
    title: "Laser Hair Removal",
    category: "Hair",
    concern: "Unwanted Hair",
    area: "Body",
    provider: "Dr. Jaishree",
    description: "Permanent hair reduction with advanced laser technology",
    duration: "15-60 min",
    downtime: "Minimal",
    benefits: ["Permanent reduction", "Smooth skin", "No ingrown hairs"],
    image: "/treatments/laser-hair-removal.jpg",
    href: "/treatments/laser-hair-removal",
    featured: false
  },
  {
    id: 6,
    title: "Body Contouring",
    category: "Body",
    concern: "Fat Reduction",
    area: "Body",
    provider: "Dr. Jaishree",
    description: "Non-surgical fat reduction and body sculpting",
    duration: "45-90 min",
    downtime: "1-2 days",
    benefits: ["Reduces fat", "Sculpts body", "No surgery"],
    image: "/treatments/body-contouring.jpg",
    href: "/treatments/body-contouring",
    featured: false
  }
];

const categories = ["All", "Injectables", "Skin", "Hair", "Body"];
const concerns = ["All", "Wrinkles", "Volume Loss", "Aging", "Acne", "Unwanted Hair", "Fat Reduction"];
const areas = ["All", "Face", "Body"];
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                transition={{ duration: 0.3 }}
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={treatment.href}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
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
                          <ArrowRight className="w-4 h-4 text-pastel-pink group-hover:translate-x-1 transition-transform" />
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={treatment.href}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105 border border-gray-100">
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
                          <ArrowRight className="w-4 h-4 text-pastel-pink group-hover:translate-x-1 transition-transform" />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <span>Take Skin Quiz</span>
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
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

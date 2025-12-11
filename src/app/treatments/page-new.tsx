"use client";

import Layout from "@/components/Layout";
import TreatmentCategoryModal from "@/components/ui/treatment-category-modal";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { treatmentCategories, surgicalTreatments, TreatmentCategory } from "@/data/treatments-structure";

export default function TreatmentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<TreatmentCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category: TreatmentCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

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
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-800">
              Our Treatments
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of dermatological and aesthetic treatments 
              designed to enhance your natural beauty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Treatment Categories
            </h2>
            <p className="text-xl text-gray-600">
              Click on any category to explore available treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-pastel-pink h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Sparkles className="w-16 h-16 text-pastel-pink" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-2xl font-bold text-gray-800 mb-3 group-hover:text-pastel-pink transition-colors">
                      {category.title}
                    </h3>
                    {category.description && (
                      <p className="text-gray-600 mb-4 flex-1">
                        {category.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                      <span className="text-pastel-pink font-semibold">
                        {category.subCategories 
                          ? `${category.subCategories.length} Subcategories`
                          : category.treatments 
                          ? `${category.treatments.length} Treatments`
                          : 'View Details'}
                      </span>
                      <ArrowRight className="w-5 h-5 text-pastel-pink group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgical Treatments Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Surgical Treatments
            </h2>
            <p className="text-xl text-gray-600">
              Minor surgical procedures for various skin conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {surgicalTreatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 bg-white rounded-xl border border-gray-200 hover:border-pastel-pink hover:shadow-md transition-all duration-200"
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {treatment.name}
                </h4>
                {treatment.description && (
                  <p className="text-sm text-gray-600">
                    {treatment.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600">
              Book a consultation with Dr. Jaishree to discuss which treatment is right for you
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <TreatmentCategoryModal
        category={selectedCategory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Layout>
  );
}


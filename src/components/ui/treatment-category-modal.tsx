"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { TreatmentCategory, SubCategory } from "@/data/treatments-structure";

interface TreatmentCategoryModalProps {
  category: TreatmentCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TreatmentCategoryModal({
  category,
  isOpen,
  onClose
}: TreatmentCategoryModalProps) {
  if (!category) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-pastel-green/20 to-pastel-pink/20 p-6 border-b border-gray-200">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="pr-12">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="text-lg text-gray-600">
                      {category.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {category.subCategories ? (
                  // Has subcategories
                  <div className="space-y-8">
                    {category.subCategories.map((subCategory, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-4"
                      >
                        <h3 className="font-display text-2xl font-bold text-gray-800 border-b-2 border-pastel-pink pb-2">
                          {subCategory.title}
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {subCategory.treatments.map((treatment, treatmentIndex) => (
                            <motion.div
                              key={treatmentIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + treatmentIndex * 0.05 }}
                              className="group"
                            >
                              {treatment.href ? (
                                <Link
                                  href={treatment.href}
                                  onClick={onClose}
                                  className="block p-4 bg-gray-50 rounded-xl hover:bg-pastel-green/10 transition-all duration-200 border border-gray-200 hover:border-pastel-pink hover:shadow-md"
                                >
                                  <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-pastel-pink transition-colors">
                                    {treatment.name}
                                  </h4>
                                  {treatment.description && (
                                    <p className="text-sm text-gray-600">
                                      {treatment.description}
                                    </p>
                                  )}
                                </Link>
                              ) : (
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                                  <h4 className="font-semibold text-gray-800 mb-2">
                                    {treatment.name}
                                  </h4>
                                  {treatment.description && (
                                    <p className="text-sm text-gray-600">
                                      {treatment.description}
                                    </p>
                                  )}
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // No subcategories - direct treatments
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.treatments?.map((treatment, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group"
                      >
                        {treatment.href ? (
                          <Link
                            href={treatment.href}
                            onClick={onClose}
                            className="block p-4 bg-gray-50 rounded-xl hover:bg-pastel-green/10 transition-all duration-200 border border-gray-200 hover:border-pastel-pink hover:shadow-md"
                          >
                            <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-pastel-pink transition-colors">
                              {treatment.name}
                            </h4>
                            {treatment.description && (
                              <p className="text-sm text-gray-600">
                                {treatment.description}
                              </p>
                            )}
                          </Link>
                        ) : (
                          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              {treatment.name}
                            </h4>
                            {treatment.description && (
                              <p className="text-sm text-gray-600">
                                {treatment.description}
                              </p>
                            )}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-pastel-pink text-white font-semibold rounded-full hover:bg-pastel-pink/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Sparkles } from "lucide-react";
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
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl max-w-6xl w-full max-h-[85vh] overflow-hidden flex flex-col border border-white/20 ring-1 ring-black/5">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-pastel-green/10 via-white to-pastel-pink/10 p-8 border-b border-gray-100">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 group z-10"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors" />
                </button>
                
                <div className="pr-12">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white rounded-xl shadow-sm">
                      <Sparkles className="w-5 h-5 text-pastel-pink" />
                    </div>
                    <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Treatment Category</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                {category.subCategories ? (
                  // Has subcategories
                  <div className="space-y-10">
                    {category.subCategories.map((subCategory, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-6"
                      >
                        <h3 className="font-display text-2xl font-bold text-gray-800 flex items-center gap-3">
                          <span className="w-2 h-8 bg-gradient-to-b from-pastel-green to-pastel-pink rounded-full block" />
                          {subCategory.title}
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                          {subCategory.treatments.map((treatment, treatmentIndex) => (
                            <motion.div
                              key={treatmentIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + treatmentIndex * 0.05 }}
                            >
                              {treatment.href ? (
                                <Link
                                  href={treatment.href}
                                  onClick={onClose}
                                  className="group relative h-full block p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-pastel-pink/30 transition-all duration-300 overflow-hidden"
                                >
                                  <div className="absolute inset-0 bg-gradient-to-br from-pastel-green/5 via-transparent to-pastel-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                  
                                  <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-3">
                                      <h4 className="font-display text-lg font-bold text-gray-800 group-hover:text-pastel-pink transition-colors pr-4">
                                        {treatment.name}
                                      </h4>
                                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-pastel-pink group-hover:text-white transition-all duration-300 transform group-hover:rotate-45 group-hover:scale-110">
                                        <ArrowUpRight className="w-4 h-4" />
                                      </div>
                                    </div>
                                    
                                    {treatment.description && (
                                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors leading-relaxed">
                                        {treatment.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              ) : (
                                <div className="h-full p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                                  <h4 className="font-display text-lg font-semibold text-gray-700 mb-2">
                                    {treatment.name}
                                  </h4>
                                  {treatment.description && (
                                    <p className="text-sm text-gray-500 leading-relaxed">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.treatments?.map((treatment, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {treatment.href ? (
                          <Link
                            href={treatment.href}
                            onClick={onClose}
                            className="group relative h-full block p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-pastel-pink/30 transition-all duration-300 overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-pastel-green/5 via-transparent to-pastel-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="font-display text-lg font-bold text-gray-800 group-hover:text-pastel-pink transition-colors pr-4">
                                  {treatment.name}
                                </h4>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-pastel-pink group-hover:text-white transition-all duration-300 transform group-hover:rotate-45 group-hover:scale-110">
                                  <ArrowUpRight className="w-4 h-4" />
                                </div>
                              </div>
                              
                              {treatment.description && (
                                <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors leading-relaxed">
                                  {treatment.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ) : (
                          <div className="h-full p-6 bg-gray-50/50 rounded-2xl border border-gray-100">
                            <h4 className="font-display text-lg font-semibold text-gray-700 mb-2">
                              {treatment.name}
                            </h4>
                            {treatment.description && (
                              <p className="text-sm text-gray-500 leading-relaxed">
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
              <div className="p-6 bg-white border-t border-gray-100 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-gray-100 text-gray-600 font-semibold rounded-full hover:bg-gray-200 transition-colors mr-3"
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





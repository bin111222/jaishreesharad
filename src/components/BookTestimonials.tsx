"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Quote, Heart, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
}

interface BookTestimonialsProps {
  bookTitle: string;
  testimonials: Testimonial[];
  isOpen: boolean;
  onClose: () => void;
}

const BookTestimonials = ({ bookTitle, testimonials, isOpen, onClose }: BookTestimonialsProps) => {
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Enhanced Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-md z-50"
            onClick={onClose}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pastel-pink/10 via-transparent to-pastel-green/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1.1, 1, 1.1]
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pastel-green/10 via-transparent to-pastel-pink/10 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
          
          {/* Enhanced Modal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-12 xl:inset-16 z-50 overflow-hidden"
          >
            <div className="w-full h-full bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative border border-white/20">
              {/* Enhanced Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative bg-gradient-to-r from-pastel-pink via-pink-100 to-pastel-green p-4 sm:p-6 md:p-8 overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink/20 to-pastel-green/20" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg"
                    >
                      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <div>
                      <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-1 sm:mb-2"
                      >
                        Praise for {bookTitle}
                      </motion.h2>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
                      >
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                          <span className="text-black text-xs sm:text-sm font-medium">
                            {testimonials.length} testimonials
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                          <span className="text-black text-xs sm:text-sm font-medium">
                            From icons & readers
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onClose}
                      className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 text-black"
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Content - Grid Only with Proper Scrolling */}
              <div className="h-full overflow-y-auto">
                {/* Scrollable Content Container */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="max-w-7xl mx-auto">
                    {/* Scroll Indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-center mb-4 sm:mb-6 md:mb-8"
                    >
                      <div className="inline-flex items-center space-x-2 text-gray-500 text-xs sm:text-sm">
                        <motion.div
                          animate={{ y: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-1 h-1 bg-pastel-pink rounded-full"
                        />
                        <span>Scroll to explore all testimonials</span>
                        <motion.div
                          animate={{ y: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                          className="w-1 h-1 bg-pastel-pink rounded-full"
                        />
                      </div>
                    </motion.div>
                    
                    {/* Grid Header */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-center mb-6 sm:mb-8 md:mb-12"
                    >
                      <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/20 mb-4 sm:mb-6">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pastel-pink" />
                        <span className="text-gray-700 font-medium text-sm sm:text-base">
                          {testimonials.length} Amazing Testimonials
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
                        Discover what celebrities, industry experts, and readers have to say about {bookTitle}
                      </p>
                    </motion.div>

                    {/* Enhanced Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                      {testimonials.map((testimonial, index) => (
                        <motion.div
                          key={testimonial.id}
                          variants={gridItemVariants}
                          whileHover={{ 
                            scale: 1.03, 
                            y: -8,
                            transition: { duration: 0.3 }
                          }}
                          className="group bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-white/30 transition-all duration-300 hover:shadow-2xl hover:border-pastel-pink/30"
                        >
                          {/* Quote Icon with Animation */}
                          <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-pastel-pink to-pastel-green rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                          >
                            <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                          </motion.div>

                          {/* Author Info */}
                          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-pastel-pink/20 to-pastel-green/20 rounded-full flex items-center justify-center"
                            >
                              <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-pastel-pink" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-800 text-lg sm:text-xl mb-1 group-hover:text-pastel-pink transition-colors duration-300">
                                {testimonial.author}
                              </h3>
                              {testimonial.role && (
                                <p className="text-pastel-pink text-xs sm:text-sm font-medium">
                                  {testimonial.role}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Quote */}
                          <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-4 sm:mb-6 relative">
                            <span className="text-2xl sm:text-3xl md:text-4xl text-pastel-pink/30 absolute -top-1 sm:-top-2 -left-1 sm:-left-2">"</span>
                            {testimonial.quote}
                            <span className="text-2xl sm:text-3xl md:text-4xl text-pastel-pink/30 absolute -bottom-2 sm:-bottom-4 -right-1 sm:-right-2">"</span>
                          </blockquote>

                          {/* Footer */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                                >
                                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current drop-shadow-sm" />
                                </motion.div>
                              ))}
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                #{index + 1}
                              </div>
                            </div>
                          </div>

                          {/* Hover Effect Overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-r from-pastel-pink/5 to-pastel-green/5 rounded-2xl sm:rounded-3xl pointer-events-none"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Spacer for Better Scrolling */}
                    <div className="h-20" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookTestimonials;
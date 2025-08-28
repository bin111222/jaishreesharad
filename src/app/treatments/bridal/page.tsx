"use client";

import Layout from "@/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, Calendar, Crown } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const bridalPackages = [
  {
    name: "Essential Bride",
    description: "Perfect for the minimalist bride",
    duration: "3-4 months",
    sessions: "6-8 sessions",
    price: "₹25,000",
    icon: Crown,
    color: "from-pink-400 to-rose-400",
    treatments: ["Skin brightening", "Hair care", "Basic facial", "Makeup consultation"]
  },
  {
    name: "Classic Bride",
    description: "Comprehensive bridal transformation",
    duration: "4-6 months",
    sessions: "8-12 sessions",
    price: "₹45,000",
    icon: Crown,
    color: "from-purple-400 to-pink-400",
    treatments: ["Advanced skin treatments", "Hair restoration", "Body contouring", "Full bridal prep"]
  },
  {
    name: "Luxury Bride",
    description: "Ultimate bridal experience",
    duration: "6-8 months",
    sessions: "12-16 sessions",
    price: "₹75,000",
    icon: Crown,
    color: "from-gold-400 to-yellow-400",
    treatments: ["Complete transformation", "PRP therapy", "Advanced treatments", "VIP experience"]
  }
];

export default function BridalPackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={containerRef} className="relative py-20 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-pastel-pink/10 text-pastel-pink rounded-full text-sm font-medium"
              >
                <Crown className="w-4 h-4" />
                <span>Bridal Transformation</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
              >
                Bridal
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink to-gold-500">
                  Packages
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Every bride (and groom!) wants to look radiant on their big day. Our Bridal Skin Care program is a comprehensive, customized regimen designed to get your skin in its best shape for the wedding festivities. It's not just a single treatment, but a curated timeline of treatments and home care leading up to the wedding day.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="#packages"
                  className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-300"
                >
                  <span>View Packages</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-3xl p-8 aspect-square">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-2 border-pastel-pink/20 rounded-2xl"
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridalpackages/1.webp"
                    alt="Bridal Packages - Dr. Jaishree Sharad"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Treatment Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Before/After Image 1 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridalpackages/2.webp"
                  alt="Bridal Packages Before/After - Bridal Glow Results"
                  className="w-full h-full object-cover"
                />

              </div>
              
              {/* Before/After Image 2 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridalpackages/3.webp"
                  alt="Bridal Packages Before/After - Skin Perfection Results"
                  className="w-full h-full object-cover"
                />

              </div>
              
              {/* Treatment Process Image 1 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridalpackages/4.webp"
                  alt="Bridal Packages Treatment Process"
                  className="w-full h-full object-cover"
                />

              </div>
              
              {/* Treatment Process Image 2 */}
              <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-sm font-bold">+</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bridal Packages */}
      <section id="packages" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Bridal Packages
              </h2>
              <p className="text-xl text-gray-600">
                Choose the perfect package for your special day
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bridalPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl mb-6 overflow-hidden">
                    <img 
                      src={`https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bridal/packages/${pkg.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
                      alt={`${pkg.name} bridal package`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-40 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-xl flex items-center justify-center">
                            <div class="text-center">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                class="w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-2"
                              >
                                <pkg.icon class="w-8 h-8 text-white" />
                              </motion.div>
                              <p class="text-gray-600 font-medium text-sm">${pkg.name}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <pkg.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 text-center">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">{pkg.description}</p>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-800 mb-2">{pkg.price}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-medium">{pkg.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Sessions:</span>
                        <span className="font-medium">{pkg.sessions}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-800 mb-2">Includes:</h4>
                      <div className="space-y-2">
                        {pkg.treatments.map((treatment, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-pastel-green" />
                            <span className="text-sm text-gray-700">{treatment}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
              Ready to Be a Beautiful Bride?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your bridal consultation with Dr. Jaishree and start 
              your journey to becoming the most beautiful bride.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Book Consultation</span>
              </Link>
              
              <Link
                href="/treatments"
                className="group inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-300"
              >
                <span>View All Treatments</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

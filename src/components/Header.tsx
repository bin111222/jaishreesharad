"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Treatments", 
    href: "/treatments",
    submenu: [
      { name: "All Treatments", href: "/treatments" },
      { name: "Botox", href: "/treatments/botox" },
      { name: "Dermal Fillers", href: "/treatments/fillers" },
      { name: "Liquid Facelift", href: "/treatments/liquid-facelift" },
      { name: "Chemical Peels", href: "/treatments/chemical-peels" },
      { name: "Laser Treatments", href: "/treatments/laser-treatments" },
      { name: "Microdermabrasion", href: "/treatments/microdermabrasion" },
      { name: "PRP Therapy", href: "/treatments/prp-therapy" },
      { name: "Thread Lifts", href: "/treatments/thread-lifts" },
      { name: "HIFU Treatment", href: "/treatments/hifu" },
      { name: "EndyMed", href: "/treatments/endymed" },
      { name: "Exilis", href: "/treatments/exilis" },
      { name: "Cryolipolysis", href: "/treatments/cryolipolysis" },
      { name: "Pigmentation Treatment", href: "/treatments/pigmentation" },
      { name: "Non-Surgical Nose Job", href: "/treatments/non-surgical-nose" },
      { name: "Skin Boosters", href: "/treatments/skin-boosters" },
      { name: "Acne Scar Treatment", href: "/treatments/acne-scars" },
      { name: "Skin Treatments", href: "/treatments/skin" },
      { name: "Hair Treatments", href: "/treatments/hair" },
      { name: "Body Treatments", href: "/treatments/body" },
      { name: "Facial Contouring", href: "/treatments/facial-contouring" },
      { name: "Anti-Aging & Rejuvenation", href: "/treatments/anti-aging" },
      { name: "Bridal Packages", href: "/treatments/bridal" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Media", href: "/media" },
  { name: "Books", href: "/books" },
  { name: "Skin Quiz", href: "/quiz" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-white/90 backdrop-blur-sm")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-18 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center transition-shadow duration-300">
              <img 
                src="/Translogo.png" 
                alt="Skinfinitii - Aesthetic Skin & Laser Clinic" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative"
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-pastel-pink transition-colors duration-200 font-medium py-2">
                      <span>{item.name}</span>
                      <svg className="w-3 h-3 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200/50 py-3 backdrop-blur-sm"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:text-pastel-pink hover:bg-gradient-to-r hover:from-pastel-pink/5 hover:to-pastel-green/5 transition-all duration-200 rounded-lg mx-2"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-pastel-pink transition-colors duration-200 font-medium py-2 px-1"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pastel-pink to-pastel-pink/90 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-pastel-pink transition-colors duration-200 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-pastel-pink transition-colors duration-200 font-medium py-2"
                      >
                        <span>{item.name}</span>
                        <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2 mt-2"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200 py-1"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-700 hover:text-pastel-pink transition-colors duration-200 font-medium py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-pastel-pink to-pastel-pink/90 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 text-sm w-full justify-center shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

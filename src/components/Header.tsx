"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SkinfinitiiNavigationMenu } from "./SkinfinitiiNavigationMenu";

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
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-150 bg-white shadow-lg border-b border-gray-200/50")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-24 h-16 sm:w-30 sm:h-20 lg:w-36 lg:h-24 flex items-center justify-center transition-shadow duration-150">
              <img 
                src="/Translogo.png" 
                alt="Skinfinitii - Aesthetic Skin & Laser Clinic" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <SkinfinitiiNavigationMenu />
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-150 text-sm shadow-md"
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
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 z-[9999] bg-black/50"
          >
            <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[10000]">
              {/* Profile Section */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-full flex items-center justify-center">
                    <img 
                      src="/favicon.ico" 
                      alt="Skinfinitii" 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Skinfinitii</h3>
                    <p className="text-gray-500 text-sm">Aesthetic skin and laser Clinic</p>
                  </div>
                </div>
              </div>

              {/* Scrollable Navigation */}
              <div className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)]">
                <div className="p-4 space-y-2">
                  {/* Main Navigation */}
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="font-medium">Home</span>
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">About</span>
                  </Link>

                  <Link
                    href="/team"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <span className="font-medium">Team</span>
                  </Link>

                  <Link
                    href="/testimonials"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="font-medium">Testimonials</span>
                  </Link>

                  <Link
                    href="/media"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Media</span>
                  </Link>

                  <Link
                    href="/books"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="font-medium">Books</span>
                  </Link>

                  <Link
                    href="/quiz"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Skin Quiz</span>
                  </Link>

                  {/* Treatments Section */}
                  <div className="pt-4">
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Treatments</h3>
                    </div>
                    
                    {/* Treatment Categories */}
                    <div className="space-y-1">
                      {/* Injectables */}
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === 'Injectables' ? null : 'Injectables')}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                            </svg>
                            <span className="font-medium">Injectables</span>
                          </div>
                          <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'Injectables' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === 'Injectables' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.1 }}
                              className="pl-12 space-y-1"
                            >
                                                             {[
                                 { name: 'Botox', href: '/treatments/botox' },
                                 { name: 'Dermal Fillers', href: '/treatments/fillers' },
                                 { name: 'Liquid Facelift', href: '/treatments/liquid-facelift' },
                                 { name: 'Thread Lifts', href: '/treatments/thread-lifts' },
                                 { name: 'Non-Surgical Nose', href: '/treatments/non-surgical-nose' },
                                 { name: 'Skin Boosters', href: '/treatments/skin-boosters' },
                                 { name: 'Facial Contouring', href: '/treatments/facial-contouring' }
                               ].map((treatment) => (
                                 <Link
                                   key={treatment.name}
                                   href={treatment.href}
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="block px-4 py-2 text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200"
                                 >
                                   {treatment.name}
                                 </Link>
                               ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Skin Treatments */}
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === 'Skin' ? null : 'Skin')}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                            </svg>
                            <span className="font-medium">Skin Treatments</span>
                          </div>
                          <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'Skin' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === 'Skin' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.1 }}
                              className="pl-12 space-y-1"
                            >
                                                             {[
                                 { name: 'Chemical Peels', href: '/treatments/chemical-peels' },
                                 { name: 'Microdermabrasion', href: '/treatments/microdermabrasion' },
                                 { name: 'Pigmentation', href: '/treatments/pigmentation' },
                                 { name: 'Acne Scars', href: '/treatments/acne-scars' },
                                 { name: 'Laser Treatments', href: '/treatments/laser-treatments' },
                                 { name: 'Anti-Aging', href: '/treatments/anti-aging' }
                               ].map((treatment) => (
                                 <Link
                                   key={treatment.name}
                                   href={treatment.href}
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="block px-4 py-2 text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200"
                                 >
                                   {treatment.name}
                                 </Link>
                               ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Body Contouring */}
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === 'Body' ? null : 'Body')}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="font-medium">Body Contouring</span>
                          </div>
                          <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'Body' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === 'Body' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.1 }}
                              className="pl-12 space-y-1"
                            >
                                                             {[
                                 { name: 'Cryolipolysis', href: '/treatments/cryolipolysis' },
                                 { name: 'Exilis', href: '/treatments/exilis' },
                                 { name: 'EndyMed', href: '/treatments/endymed' },
                                 { name: 'HIFU', href: '/treatments/hifu' }
                               ].map((treatment) => (
                                 <Link
                                   key={treatment.name}
                                   href={treatment.href}
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="block px-4 py-2 text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200"
                                 >
                                   {treatment.name}
                                 </Link>
                               ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Specialized */}
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === 'Specialized' ? null : 'Specialized')}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <span className="font-medium">Specialized</span>
                          </div>
                          <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'Specialized' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === 'Specialized' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.1 }}
                              className="pl-12 space-y-1"
                            >
                                                             {[
                                 { name: 'PRP Therapy', href: '/treatments/prp-therapy' },
                                 { name: 'Bridal Packages', href: '/treatments/bridal' }
                               ].map((treatment) => (
                                 <Link
                                   key={treatment.name}
                                   href={treatment.href}
                                   onClick={() => setIsMobileMenuOpen(false)}
                                   className="block px-4 py-2 text-sm text-gray-600 hover:text-pastel-pink transition-colors duration-200"
                                 >
                                   {treatment.name}
                                 </Link>
                               ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* View All Treatments */}
                      <Link
                        href="/treatments"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-pastel-pink hover:bg-pastel-pink/10 rounded-lg transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="font-medium">View All Treatments</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-150 text-sm w-full shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>

            {/* Backdrop */}
            <div 
              className="absolute inset-0 -z-10" 
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

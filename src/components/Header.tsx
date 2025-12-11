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
      { name: "Thread Lifts", href: "/treatments/thread-lifts" },
      { name: "Non-Surgical Nose Job", href: "/treatments/non-surgical-nose" },
      { name: "Skin Boosters", href: "/treatments/skin-boosters" },
      { name: "Facial Contouring", href: "/treatments/facial-contouring" },
      { name: "Chemical Peels", href: "/treatments/chemical-peels" },
      { name: "Microdermabrasion", href: "/treatments/microdermabrasion" },
      { name: "Pigmentation Treatment", href: "/treatments/pigmentation" },
      { name: "Acne Scar Treatment", href: "/treatments/acne-scars" },
      { name: "Laser Treatments", href: "/treatments/laser-treatments" },
      { name: "Anti-Aging & Rejuvenation", href: "/treatments/anti-aging" },
      { name: "Skin Treatments", href: "/treatments/skin" },
      { name: "Cryolipolysis", href: "/treatments/cryolipolysis" },
      { name: "Exilis", href: "/treatments/exilis" },
      { name: "EndyMed", href: "/treatments/endymed" },
      { name: "HIFU Treatment", href: "/treatments/hifu" },
      { name: "Body Treatments", href: "/treatments/body" },
      { name: "PRP Therapy", href: "/treatments/prp-therapy" },
      { name: "Bridal Care", href: "/treatments/bridal" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Media", href: "/media" },
  { name: "Books", href: "/books" },
  { name: "Training", href: "/training" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 10);
      
      // Header visibility logic for desktop only
      if (window.innerWidth >= 1280) { // xl breakpoint
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide header
          setIsHeaderVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show header
          setIsHeaderVisible(true);
        }
      } else {
        // On mobile/tablet, always show header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header 
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-150 bg-white shadow-lg border-b border-gray-200/50")}
      animate={{
        y: isHeaderVisible ? 0 : -100,
        opacity: isHeaderVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24 w-full">
          {/* Logo Group */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 group flex-shrink-0">
            <div className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-1.5 lg:space-x-2 transition-shadow duration-150">
              {/* Logo 1 - Symbol */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                <img 
                  src="/logo1.png" 
                  alt="Skinfinitii Logo Symbol" 
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Logo 2 - Text */}
              <div className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-40 lg:h-20 flex items-center justify-center">
                <img 
                  src="/logo2.png" 
                  alt="Skinfinitii Logo Text" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Only show on very large screens */}
          <nav className="hidden xl:flex items-center flex-1 justify-center">
            <SkinfinitiiNavigationMenu />
          </nav>

          {/* Mobile/Tablet Menu Button - Show on all screens except very large */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-gray-700 hover:text-pastel-pink transition-colors duration-200 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="xl:hidden fixed inset-0 z-[9999] bg-black/50"
          >
            <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[10000]">
              {/* Profile Section */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    {/* Logo 1 - Symbol */}
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img 
                        src="/logo1.png" 
                        alt="Skinfinitii Logo Symbol" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Logo 2 - Text */}
                    <div className="w-36 h-18 flex items-center justify-center">
                      <img 
                        src="/logo2.png" 
                        alt="Skinfinitii Logo Text" 
                        className="w-full h-full object-contain"
                      />
                    </div>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h15c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
                    href="/training"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <span className="font-medium">Training</span>
                  </Link>



                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Contact</span>
                  </Link>

                  {/* Treatments Section */}
                  <div className="pt-4">
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Treatments</h3>
                    </div>
                    
                    {/* Treatment Categories */}
                    <div className="space-y-1">
                      {[
                        { name: 'Anti-Ageing', href: '/treatments?category=anti-ageing' },
                        { name: 'Acne & Acne Scars', href: '/treatments?category=acne-acne-scars' },
                        { name: 'Pigmentation', href: '/treatments?category=pigmentation' },
                        { name: 'Skin & Glow Treatments', href: '/treatments?category=skin-glow-treatments' },
                        { name: 'Hair Treatments', href: '/treatments?category=hair-treatments' },
                        { name: 'Intimate Area Treatments', href: '/treatments?category=intimate-area-treatments' },
                        { name: 'Body Contouring', href: '/treatments?category=body-contouring' }
                      ].map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-pastel-pink hover:bg-gray-50 rounded-lg transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="font-medium">{category.name}</span>
                        </Link>
                      ))}

                      {/* View All Treatments */}
                      <Link
                        href="/treatments"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-pastel-pink hover:bg-pastel-pink/10 rounded-lg transition-colors duration-200 border-t border-gray-200 mt-2 pt-3"
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
                  className="inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-150 text-sm w-full shadow-md whitespace-nowrap"
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
    </motion.header>
  );
}

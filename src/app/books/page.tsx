"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { BookOpen, Star, ExternalLink, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const books = [
  {
    id: 1,
    title: "Skin Talks",
    subtitle: "A Lifestyle Guide to Skincare",
    cover: "/books/skin-talks.jpg",
    description: "A lifestyle guide on skincare that became a bestseller. The foreword was written by legendary actor Amitabh Bachchan, who praised Dr. Sharad's ability to make skincare approachable.",
    keyTakeaways: [
      "Lifestyle-focused skincare approach",
      "Practical daily routines",
      "Product recommendations",
      "Common skin concerns addressed",
      "Easy-to-follow advice"
    ],
    endorsements: [
      "Amitabh Bachchan - 'Dr. Sharad's ability to make skincare approachable is remarkable'",
      "Bestseller in India - Penguin Random House",
      "A comprehensive lifestyle guide for healthy skin - Reader Reviews"
    ],
    buyLinks: [
      { label: "Amazon India", url: "https://amazon.in/skin-talks" },
      { label: "Flipkart", url: "https://flipkart.com/skin-talks" }
    ],
    mediaKit: "/books/skin-talks-media-kit.pdf",
    featured: false,
    year: "2014",
    publisher: "Penguin Random House India"
  },
  {
    id: 2,
    title: "Skin Rules",
    subtitle: "Your 6-Week Plan to Radiant Skin",
    cover: "/books/skin-rules.jpg",
    description: "Launched on 24th October 2018 by Amitabh Bachchan and Shweta Bachchan Nanda in a grand event, this book distills Dr. Jaishree's advice into a six-week routine for healthy skin. Winner of the popular award in the Health & Fitness category at the Crossword Book Awards 2020.",
    keyTakeaways: [
      "6-week structured skincare plan",
      "Product recommendations for different skin types",
      "Lifestyle tips for better skin",
      "Common skin problems and solutions",
      "Before and after case studies"
    ],
    endorsements: [
      "Crossword Popular Book Award Winner (Health & Fitness category) - 2020",
      "Amitabh Bachchan - 'This gem of a book is a comprehensive compilation'",
      "Proceeds support girl child education (Nargis Dutt Foundation)",
      "Top-selling skincare book in India"
    ],
    buyLinks: [
      { label: "Amazon India", url: "https://amazon.in/skin-rules" },
      { label: "Flipkart", url: "https://flipkart.com/skin-rules" }
    ],
    mediaKit: "/books/skin-rules-media-kit.pdf",
    featured: true,
    year: "2018",
    publisher: "Penguin Random House"
  },
  {
    id: 3,
    title: "The Skincare Answer Book",
    subtitle: "Everything You Need to Know About Skin, Hair & Nails",
    cover: "/books/skincare-answer-book.jpg",
    description: "Dr. Jaishree's latest book is an extensive Q&A compendium addressing the most frequently asked questions on skin, hair, and nail care. It was launched on 28th April 2023 by Bollywood actor Ranbir Kapoor and veteran actress Neetu Kapoor at a high-profile event in Mumbai, and has been hailed as a 'beauty bible'.",
    keyTakeaways: [
      "Q&A format for easy reference",
      "Covers skin, hair, and nail concerns",
      "Evidence-based advice",
      "Product recommendations",
      "Troubleshooting guides",
      "Real patient questions answered"
    ],
    endorsements: [
      "Launched by Ranbir Kapoor and Neetu Kapoor - April 28, 2023",
      "Hailed as a 'beauty bible' - Lifestyle Asia",
      "Answers real questions from patients and followers",
      "Comprehensive Q&A format for easy reference"
    ],
    buyLinks: [
      { label: "Amazon India", url: "https://amazon.in/skincare-answer-book" },
      { label: "Flipkart", url: "https://flipkart.com/skincare-answer-book" }
    ],
    mediaKit: "/books/skincare-answer-book-media-kit.pdf",
    featured: false,
    year: "2023",
    publisher: "Penguin Random House"
  }
];

const upcomingBook = {
  title: "Coming Soon",
  subtitle: "Advanced Anti-Aging Techniques",
  description: "Dr. Jaishree's latest book on advanced anti-aging techniques and treatments. Pre-order available soon.",
  expectedDate: "2025"
};

export default function BooksPage() {
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
              Books & Publications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jaishree's expertise in cosmetic dermatology and skincare, 
              shared through her published books to help readers achieve beautiful, healthy skin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Featured Book
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Jaishree's comprehensive guide to skin health
            </p>
          </div>
          
          {books.filter(book => book.featured).map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Book Cover */}
              <div className="relative">
                <div className="bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-24 h-24 text-pastel-pink mx-auto mb-6" />
                    <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">
                      {book.title}
                    </h3>
                    <p className="text-gray-600">{book.subtitle}</p>
                    <p className="text-sm text-gray-500 mt-4">Book Cover Image</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-pastel-pink text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              
              {/* Book Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-3xl font-bold text-gray-800 mb-2">
                    {book.title}
                  </h3>
                  <p className="text-xl text-pastel-pink font-semibold mb-4">
                    {book.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {book.description}
                  </p>
                </div>
                
                {/* Key Takeaways */}
                <div>
                  <h4 className="font-display text-lg font-semibold text-gray-800 mb-3">
                    Key Takeaways
                  </h4>
                  <ul className="space-y-2">
                    {book.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pastel-pink rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Endorsements */}
                <div>
                  <h4 className="font-display text-lg font-semibold text-gray-800 mb-3">
                    What Readers Say
                  </h4>
                  <div className="space-y-3">
                    {book.endorsements.map((endorsement, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 italic">"{endorsement}"</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Buy Links */}
                <div>
                  <h4 className="font-display text-lg font-semibold text-gray-800 mb-3">
                    Get Your Copy
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {book.buyLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-pastel-green text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Media Kit */}
                <div>
                  <a
                    href={book.mediaKit}
                    className="inline-flex items-center space-x-2 text-pastel-pink hover:text-pastel-pink/80 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Media Kit</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Books */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              All Publications
            </h2>
            <p className="text-xl text-gray-600">
              Explore Dr. Jaishree's complete collection of books
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-24 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-8 h-8 text-pastel-pink" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-gray-800 mb-1">
                        {book.title}
                      </h3>
                      <p className="text-pastel-pink font-medium mb-3">
                        {book.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {book.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {book.buyLinks.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 px-3 py-1 bg-pastel-green/20 text-gray-700 text-sm rounded-full hover:bg-pastel-green/30 transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="font-display text-3xl font-bold text-gray-800">
              Coming Soon
            </h2>
            
            <div className="bg-gradient-to-r from-pastel-green/20 to-pastel-pink/20 rounded-2xl p-8">
              <div className="w-24 h-32 bg-white/50 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-12 h-12 text-pastel-pink" />
              </div>
              
              <h3 className="font-display text-2xl font-semibold text-gray-800 mb-2">
                {upcomingBook.title}
              </h3>
              <p className="text-pastel-pink font-medium mb-4">
                {upcomingBook.subtitle}
              </p>
              <p className="text-gray-600 mb-4">
                {upcomingBook.description}
              </p>
              <p className="text-sm text-gray-500">
                Expected: {upcomingBook.expectedDate}
              </p>
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
              Ready to Transform Your Skin?
            </h2>
            
            <p className="text-xl text-gray-600">
              Get personalized advice from Dr. Jaishree and start your journey to beautiful, healthy skin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/treatments"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
              >
                <span>View Treatments</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

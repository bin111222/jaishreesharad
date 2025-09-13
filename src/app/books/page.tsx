"use client";

import Layout from "@/components/Layout";
import BookTestimonials from "@/components/BookTestimonials";
import { motion, useInView } from "framer-motion";
import { BookOpen, Star, ExternalLink, Download, ArrowRight, MessageCircle, Heart } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { getTestimonialsByBook } from "@/data/testimonials";

const books = [
  {
    id: 1,
    title: "Skin Talks",
    subtitle: "A Lifestyle Guide to Skincare",
    cover: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/books/skintalks.webp",
    description: "A lifestyle guide on skincare that became a bestseller. The foreword was written by legendary actor Amitabh Bachchan, who praised Dr. Sharad's ability to make skincare approachable.",
    keyTakeaways: [
      "Lifestyle-focused skincare approach",
      "Practical daily routines",
      "Product recommendations",
      "Common skin concerns addressed",
      "Easy-to-follow advice"
    ],
    endorsements: [
      "Salman Khan - 'I have saved Dr Jaishree's phone number in my phone as Jaishree Face. If I ever have any skin problems, the only dermatologist I would trust is Dr J.'",
      "Ranbir Kapoor - 'Skin is an important part of our body and I think it is important for both men and women to take care of their skin... taking care of your skin is not just about beautification, it is about having blemish-free, acne-free, radiant skin.'",
      "Neetu Kapoor - 'I believe in a healthy diet and daily exercise... One thing I never forget is my nighttime skincare routine... If in doubt, I always call Jaishree for expert advice.'"
    ],
    buyLinks: [
      { label: "Buy Now", url: "https://www.amazon.in/Skin-Talks-Secrets-Glowing-Women/dp/8184005202/ref=sr_1_4?s=books&sr=1-4" }
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
    cover: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/books/skinrules.webp",
    description: "Launched on 24th October 2018 by Amitabh Bachchan and Shweta Bachchan Nanda in a grand event, this book distills Dr. Jaishree's advice into a six-week routine for healthy skin. Winner of the popular award in the Health & Fitness category at the Crossword Book Awards 2020.",
    keyTakeaways: [
      "6-week structured skincare plan",
      "Product recommendations for different skin types",
      "Lifestyle tips for better skin",
      "Common skin problems and solutions",
      "Before and after case studies"
    ],
    endorsements: [
      "Amitabh Bachchan - 'This gem of a book is a comprehensive compilation that will take you from the essentials of self-preservation to the most complex layered technology services available, and everything in between.'",
      "Karan Johar - 'Your skin at times can be your arch-nemesis... When someone like Jaishree enters your life, you feel like you have won the skin battle! She makes the cure painless and immediately effective—it's an ageless bond and your skin's BFF for life.'",
      "Ranbir Kapoor - 'I get dark circles when I don't sleep... I realized great skin doesn't happen by chance, it happens by appointment. Dr Jaishree is my one-stop shop. Forget the camera, she's the reason I look into the mirror!'"
    ],
    buyLinks: [
      { label: "Buy Now", url: "https://www.amazon.in/Skin-Rules-Your-6-week-Radiant/dp/0143444727/ref=sr_1_2?s=books&sr=1-2" }
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
    cover: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/books/skincareanswerbook.webp",
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
      "Alia Bhatt - 'Your skin is the largest organ in your body... Doc has been a one-point contact whenever my skin is under any kind of stress. And for that I am super grateful.'",
      "Sanjay Dutt - 'Dear Jaishree, congratulations for your new book. I bet it's gonna be great. All the best. You are one of the best skin doctors in the country.'",
      "Malaika Arora - 'Well, here's wishing Jaishree all the very best and congratulations for her third book. I'm sure this will be a bestseller!'"
    ],
    buyLinks: [
      { label: "Buy Now", url: "https://www.amazon.in/Skincare-Answer-Book-Frequently-Questions/dp/014346194X/ref=sr_1_1?s=books&sr=1-1" }
    ],
    mediaKit: "/books/skincare-answer-book-media-kit.pdf",
    featured: false,
    year: "2023",
    publisher: "Penguin Random House"
  },
  {
    id: 4,
    title: "Aesthetic Dermatology",
    subtitle: "Advanced Techniques and Clinical Practice",
    cover: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/books/aestheticdermatology.webp",
    description: "Dr. Jaishree's comprehensive guide to aesthetic dermatology, covering advanced techniques, clinical practices, and the latest innovations in cosmetic dermatology. This book serves as an essential reference for medical professionals and students in the field.",
    keyTakeaways: [
      "Advanced aesthetic techniques",
      "Clinical practice guidelines",
      "Latest innovations in cosmetic dermatology",
      "Case studies and treatment protocols",
      "Professional reference material"
    ],
    endorsements: [
      "Essential reference for medical professionals",
      "Comprehensive coverage of aesthetic dermatology",
      "Latest techniques and clinical practices",
      "Highly recommended for dermatology students"
    ],
    buyLinks: [
      { label: "Buy Now", url: "https://www.amazon.in/Aesthetic-Dermatology-Perspectives-Jaishree-Sharad/dp/9352703472/ref=sr_1_5?s=books&sr=1-5" }
    ],
    mediaKit: "/books/aesthetic-dermatology-media-kit.pdf",
    featured: false,
    year: "2018",
    publisher: "Medical Publications"
  }
];


export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const handleShowTestimonials = (bookTitle: string) => {
    setSelectedBook(bookTitle);
  };

  const handleCloseTestimonials = () => {
    setSelectedBook(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Book Cover */}
              <div className="relative">
                <div className="relative aspect-[3/5] rounded-2xl overflow-hidden shadow-2xl">
                                          <img 
                          src={book.cover}
                          alt={`${book.title} - ${book.subtitle}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
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
                
                {/* Buy Links & Testimonials */}
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
                    
                    {/* Testimonials Button - Only for books with testimonials */}
                    {getTestimonialsByBook(book.title).length > 0 && (
                      <button
                        onClick={() => handleShowTestimonials(book.title)}
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pastel-pink to-pink-100 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>View Testimonials ({getTestimonialsByBook(book.title).length})</span>
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Media Kit */}
               
              </div>
            </motion.div>
          ))}
        </div>
      </section>

            {/* All Books - Optimized Performance */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-pastel-pink/5 relative overflow-hidden">
        {/* Simplified Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-pastel-pink/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-pastel-green/10 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pastel-pink/20 to-pastel-green/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-pastel-pink" />
              <span className="text-sm font-medium text-gray-700">Complete Collection</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              All Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Dr. Jaishree's complete collection of bestselling books that have transformed skincare knowledge worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {books.map((book, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-50px" });
              
              return (
                <motion.div
                  ref={ref}
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative"
                >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden border border-gray-100">
                  {/* Book Cover Section - Vertical Layout */}
                  <div className="flex items-start space-x-6 p-8">
                    {/* Book Cover - Vertical */}
                    <div className="relative flex-shrink-0">
                      <div className="w-32 h-48 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-200">
                        <img 
                          src={book.cover}
                          alt={`${book.title} - ${book.subtitle}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute -top-2 -right-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 bg-pastel-pink rounded-full"></div>
                          <span className="text-xs font-semibold text-gray-800">{book.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title & Subtitle */}
                      <div className="mb-4">
                        <h3 className="font-display text-2xl font-bold text-gray-800 mb-2 group-hover:text-pastel-pink transition-colors duration-200">
                          {book.title}
                        </h3>
                        <p className="text-lg text-pastel-pink font-semibold mb-2">
                          {book.subtitle}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pastel-pink/20 to-pastel-green/20 rounded-full">
                          <span className="text-xs font-medium text-gray-700">{book.publisher}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {book.description}
                      </p>
                      
                      {/* Key Takeaways */}
                      <div className="mb-6">
                        <h4 className="font-display text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                          Key Highlights
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {book.keyTakeaways.slice(0, 3).map((takeaway, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-pastel-pink rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-600">{takeaway}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Buy Links & Testimonials */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {book.buyLinks.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-200 text-sm border border-gray-200"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-200" />
                          </a>
                        ))}
                        
                        {/* Testimonials Button - Only for books with testimonials */}
                        {getTestimonialsByBook(book.title).length > 0 && (
                          <button
                            onClick={() => handleShowTestimonials(book.title)}
                            className="group/testimonial inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pastel-pink/20 to-pastel-green/20 text-pastel-pink font-medium rounded-full hover:from-pastel-pink/30 hover:to-pastel-green/30 hover:scale-105 transition-all duration-200 text-sm border border-pastel-pink/30"
                          >
                            <MessageCircle className="w-3 h-3 group-hover/testimonial:scale-110 transition-transform duration-200" />
                            <span>View Testimonials ({getTestimonialsByBook(book.title).length})</span>
                          </button>
                        )}
                      </div>
                      
                      {/* Endorsements */}
                      {book.endorsements.length > 0 && (
                        <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-4">
                          <p className="text-sm text-gray-700 font-medium italic">
                            "{book.endorsements[0].split(' - ')[0]}"
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            — {book.endorsements[0].split(' - ')[1]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  

                </div>
              </motion.div>
            );
            })}
          </div>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-2xl p-8 border border-pastel-pink/20">
              <h3 className="font-display text-2xl font-semibold text-gray-800 mb-4">
                Transform Your Skincare Knowledge
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of readers who have discovered the secrets to beautiful, healthy skin through Dr. Jaishree's expert guidance.
              </p>
                              <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-pink to-pink-100 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                <span>Get Personalized Advice</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
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

      {/* Testimonials Modal */}
      {selectedBook && (
        <BookTestimonials
          bookTitle={selectedBook}
          testimonials={getTestimonialsByBook(selectedBook)}
          isOpen={!!selectedBook}
          onClose={handleCloseTestimonials}
        />
      )}
    </Layout>
  );
}

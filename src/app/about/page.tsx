"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Award, GraduationCap, Users, BookOpen, Play, Star } from "lucide-react";
import Link from "next/link";

const credentials = [
  {
    title: "MBBS, MD (Dermatology)",
    institution: "Mumbai",
    year: "Completed"
  },
  {
    title: "Fellowship in Dermatologic Laser Surgery",
    institution: "Ramathibodi Hospital, Bangkok",
    year: "Completed"
  },
  {
    title: "Fellowship in Cosmetic Dermatology",
    institution: "Baumann Cosmetic & Research Institute, Miami, USA",
    year: "Completed"
  },
  {
    title: "International Trainer",
    institution: "Fillers and Botox",
    year: "Current"
  },
  {
    title: "Board Member",
    institution: "International Society of Dermatologic and Aesthetic Surgery (ISDS)",
    year: "Current"
  },
  {
    title: "International Mentor",
    institution: "American Society of Dermatologic Surgery (ASDS)",
    year: "Current"
  }
];

const awards = [
  {
    title: "Best Celebrity Cosmetic Dermatologist in India",
    organization: "Industry Recognition",
    year: "2021"
  },
  {
    title: "Crossword Popular Book Award",
    organization: "Health & Fitness Category - Skin Rules",
    year: "2020"
  },
  {
    title: "Vogue Beauty Award",
    organization: "Best Skin Expert",
    year: "2016"
  },
  {
    title: "Elle Beauty Award",
    organization: "Best Skin Expert",
    year: "2016"
  },
  {
    title: "50 Outstanding Women in Healthcare",
    organization: "World Health & Wellness Congress",
    year: "2017"
  },
  {
    title: "Rising Star Award",
    organization: "World Congress of Dermatology, Vancouver",
    year: "2015"
  }
];

const memberships = [
  "Board of Directors Member - International Society of Dermatologic and Aesthetic Surgery (ISDS)",
  "International Mentor - American Society of Dermatologic Surgery (ASDS)",
  "Associate Editor - Journal of Cosmetic Dermatology (Wiley)",
  "Joint Secretary - Association of Cutaneous Surgeons of India (ACSI)",
  "Past Vice-President - Cosmetic Dermatology Society of India (CDSI)",
  "Editorial Board - Journal of Cutaneous and Aesthetic Surgery",
  "Editorial Board - Dermatologic Therapy",
  "Editorial Board - European Medical Journal",
  "Editorial Board - Annals of Dermatology"
];

const mediaHighlights = [
  {
    title: "Free Press Journal (Jun 30, 2025)",
    outlet: "Explained risks of unregulated anti-ageing injections",
    type: "News Article",
    date: "2025"
  },
  {
    title: "Tira Beauty (Feb 14, 2023)",
    outlet: "Baby Talk: A Tira Guide to Buying Skincare Products for Your Baby",
    type: "Expert Article",
    date: "2023"
  },
  {
    title: "NDTV Swirlster (Nov 2022)",
    outlet: "Celebrity Dermatologist Dr. Jaishree Sharad on the popular Vampire Facial skincare trend",
    type: "TV Interview",
    date: "2022"
  },
  {
    title: "Femina India (Dec 8, 2022)",
    outlet: "Celebrity dermatologist Dr. Jaishree Sharad talks about her beauty regimen and more!",
    type: "Instagram Live",
    date: "2022"
  },
  {
    title: "Second Opinion Podcast (Oct 2022)",
    outlet: "Dermatologist Dr. Jaishree Sharad Busts Biggest Skincare Myths – Acne, Botox, Fillers",
    type: "Podcast",
    date: "2022"
  }
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                Meet Dr. Jaishree Sharad
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A globally renowned <strong>cosmetic dermatologist</strong>, medical director of <strong>Skinfinitii Aesthetic Skin & Laser Clinic (Mumbai)</strong>, and a sought-after <strong>international speaker</strong>. Known as the dermatologist to Bollywood and business elites.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-700 font-semibold">5.0</span>
                  <span className="text-gray-500">(thousands of reviews)</span>
                </div>
                <div className="w-px h-6 bg-gray-300" />
                <div className="text-gray-700">
                  <span className="font-semibold">20+</span> years experience
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-display font-bold text-4xl">JS</span>
                  </div>
                  <p className="text-gray-600">Portrait Image</p>
                  <p className="text-sm text-gray-500">Dr. Jaishree Sharad</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Philosophy of Care
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed">
                Dr. Jaishree's work combines cutting-edge dermatology with a warm, patient-first approach. 
                She has authored three bestselling books including <em>Skin Rules</em>, <em>Skin Talks</em>, and <em>The Skincare Answer Book</em>, 
                sharing her expertise with readers worldwide.
              </p>
              
              <p className="text-lg leading-relaxed mt-6">
                Her philosophy centers on authenticity and balance in beauty: <strong>"Perfection is not beauty, and looking like someone else is not beauty. We all are unique… enhancing our own features to be a slightly younger version of ourselves is what we should aim for, because beauty lies in uniqueness, not perfection."</strong>
              </p>
              
              <p className="text-lg leading-relaxed mt-6">
                Her practice is built on three core principles: <strong>Safety First</strong>, 
                <strong> Natural Results</strong>, and <strong>Patient Education</strong>. 
                She ensures every treatment is performed with the highest standards of medical care, 
                using only FDA-approved products and the latest techniques.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Education & Credentials
            </h2>
            <p className="text-xl text-gray-600">
              Extensive training and qualifications in dermatology and aesthetic medicine
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                  {credential.title}
                </h3>
                <p className="text-gray-600 mb-2">{credential.institution}</p>
                <p className="text-pastel-pink font-semibold">{credential.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Recognized for excellence in dermatology and aesthetic medicine
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-1">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 mb-1">{award.organization}</p>
                  <p className="text-pastel-pink font-semibold">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Memberships
            </h2>
            <p className="text-xl text-gray-600">
              Active member of leading dermatological and aesthetic medicine organizations
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {memberships.map((membership, index) => (
              <motion.div
                key={membership}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="w-3 h-3 bg-pastel-pink rounded-full flex-shrink-0" />
                <span className="text-gray-700">{membership}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recent Media Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Featured in leading media outlets for expertise in dermatology and aesthetic medicine
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Play className="w-5 h-5 text-pastel-pink" />
                    <span className="text-sm font-semibold text-pastel-pink uppercase tracking-wide">
                      {highlight.type}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{highlight.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.outlet}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/media"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
            >
              <span>View All Media Coverage</span>
              <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Published Author
            </h2>
            
            <p className="text-xl text-gray-600">
              Dr. Jaishree has authored multiple books including <em>Skin Rules</em> and <em>The Skincare Answer Book</em>, 
              sharing her expertise with readers worldwide.
            </p>
            
            <Link
              href="/books"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>View Books</span>
              <BookOpen className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Meet Dr. Jaishree?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Book your consultation and experience the expertise of a leading dermatologist 
            who has transformed thousands of lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>Book Appointment</span>
            </Link>
            
            <Link
              href="/treatments"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
            >
              <span>View Treatments</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

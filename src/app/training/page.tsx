"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { GraduationCap, Users, Clock, Star, Award, BookOpen, Play, Calendar, MapPin, ArrowRight, CheckCircle, Building2, Microscope, Zap, Shield, Globe, Target } from "lucide-react";
import Link from "next/link";

// Short-Term Online Masterclasses (2-4 hours each)
const shortTermMasterclasses = [
  {
    title: "Botulinum Toxin Mastery",
    duration: "2-4 Hours",
    level: "All Levels",
    description: "Master the art of botulinum toxin injections with evidence-based techniques and patient-centric artistry.",
    features: ["Upper & lower face techniques", "Neck treatments", "Hyperhidrosis management", "Complication prevention", "Live demonstrations"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/botox-masterclass.webp",
    category: "Online Masterclass"
  },
  {
    title: "Filler Artistry Masterclass",
    duration: "3-4 Hours",
    level: "Intermediate to Advanced",
    description: "Advanced filler techniques for cheeks, jawline, and lips with focus on natural-looking results.",
    features: ["Cheek contouring", "Jawline definition", "Lip enhancement", "Tear trough correction", "Nose reshaping"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/filler-artistry.webp",
    category: "Online Masterclass"
  },
  {
    title: "Skin Boosters & Bioremodellers",
    duration: "2-3 Hours",
    level: "All Levels",
    description: "Comprehensive training on skin boosters including Profhilo, Restylane Vital, and SkinVive.",
    features: ["Profhilo techniques", "Restylane Vital protocols", "SkinVive applications", "Patient selection", "Results optimization"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/skin-boosters.webp",
    category: "Online Masterclass"
  },
  {
    title: "Combination Treatments Masterclass",
    duration: "3-4 Hours",
    level: "Advanced",
    description: "Learn to combine lasers with injectables for optimal aesthetic outcomes and patient satisfaction.",
    features: ["Laser + injectable protocols", "Treatment sequencing", "Safety considerations", "Case studies", "Results optimization"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/combination-treatments.webp",
    category: "Online Masterclass"
  },
  {
    title: "Managing Complications in Aesthetic Medicine",
    duration: "2-3 Hours",
    level: "All Levels",
    description: "Essential training on preventing and managing complications in aesthetic procedures.",
    features: ["Complication prevention", "Early recognition", "Management protocols", "Emergency procedures", "Case discussions"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/complications-management.webp",
    category: "Online Masterclass"
  },
  {
    title: "Business & Branding in Aesthetics",
    duration: "2-3 Hours",
    level: "All Levels",
    description: "Learn the business aspects of aesthetic medicine including marketing, pricing, and practice growth.",
    features: ["Practice branding", "Marketing strategies", "Pricing models", "Patient retention", "Practice growth"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/business-branding.webp",
    category: "Online Masterclass"
  }
];

// Certificate Programmes (4-6 weeks, Online + Optional Hands-on)
const certificatePrograms = [
  {
    title: "Certificate in Botox & Fillers",
    duration: "4-6 Weeks",
    level: "Intermediate",
    description: "Comprehensive certificate program covering all aspects of botulinum toxin and dermal filler treatments.",
    features: ["Blended learning approach", "Recorded modules", "Live Q&A sessions", "Case discussions", "Optional hands-on training"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/cert-botox-fillers.webp",
    category: "Certificate Programme"
  },
  {
    title: "Certificate in Energy-Based Devices",
    duration: "4-6 Weeks",
    level: "Intermediate",
    description: "Complete training on lasers, RF, and HIFU devices for various aesthetic treatments.",
    features: ["Laser physics & safety", "RF technology", "HIFU applications", "Treatment protocols", "Hands-on practice"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/cert-energy-devices.webp",
    category: "Certificate Programme"
  },
  {
    title: "Certificate in Skin Rejuvenation",
    duration: "4-6 Weeks",
    level: "All Levels",
    description: "Comprehensive program covering peels, microneedling, exosomes, PRP, and biostimulators.",
    features: ["Chemical peels", "Microneedling techniques", "Exosome therapy", "PRP protocols", "Biostimulator applications"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/cert-skin-rejuvenation.webp",
    category: "Certificate Programme"
  },
  {
    title: "Certificate in Body Contouring & Hair Restoration",
    duration: "4-6 Weeks",
    level: "Intermediate",
    description: "Specialized training in body contouring techniques and hair restoration procedures.",
    features: ["Body contouring protocols", "Hair restoration techniques", "Patient assessment", "Treatment planning", "Results optimization"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/cert-body-hair.webp",
    category: "Certificate Programme"
  }
];

// Fellowships (3-6 months, Hybrid or In-clinic)
const fellowshipPrograms = [
  {
    title: "Fellowship in Advanced Injectable Aesthetics",
    duration: "3-6 Months",
    level: "Advanced",
    description: "Intensive hands-on fellowship program for dermatologists seeking mastery in injectable aesthetics.",
    features: ["Intensive hands-on training", "Live patient demonstrations", "Supervised practice", "Case-based learning", "International certification"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/fellowship-injectables.webp",
    category: "Fellowship Program"
  },
  {
    title: "Fellowship in Laser & Energy Devices",
    duration: "3-6 Months",
    level: "Advanced",
    description: "Comprehensive fellowship covering all aspects of laser and energy-based device treatments.",
    features: ["Advanced laser training", "Energy device mastery", "Safety protocols", "Research opportunities", "International exposure"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/fellowship-laser.webp",
    category: "Fellowship Program"
  },
  {
    title: "Fellowship in Regenerative Aesthetics",
    duration: "3-6 Months",
    level: "Advanced",
    description: "Specialized fellowship in PRP, PRF, exosomes, and biostimulators for regenerative medicine.",
    features: ["PRP & PRF techniques", "Exosome therapy", "Biostimulator applications", "Research projects", "Clinical trials"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/fellowship-regenerative.webp",
    category: "Fellowship Program"
  },
  {
    title: "Fellowship in Comprehensive Aesthetic Dermatology",
    duration: "6 Months",
    level: "Advanced",
    description: "Complete fellowship program covering all aspects of aesthetic dermatology for comprehensive training.",
    features: ["Full-spectrum training", "All treatment modalities", "Business development", "Research opportunities", "International certification"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/fellowship-comprehensive.webp",
    category: "Fellowship Program"
  }
];

const academyTestimonials = [
  {
    name: "Dr. Priya Sharma",
    location: "Mumbai",
    rating: 5,
    program: "Certificate in Botox & Fillers Graduate",
    text: "DAAE's Certificate program transformed my practice completely. The blended learning approach with hands-on training gave me the confidence to offer advanced injectable treatments with excellent results.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/testimonial-1-placeholder.webp"
  },
  {
    name: "Dr. Amit Patel",
    location: "Delhi",
    rating: 5,
    program: "Fellowship in Advanced Injectable Aesthetics",
    text: "The 6-month fellowship at DAAE was exceptional. Dr. Jaishree's mentorship, international guest faculty, and comprehensive hands-on training prepared me to become a leading aesthetic dermatologist.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/testimonial-2-placeholder.webp"
  },
  {
    name: "Dr. Sneha Reddy",
    location: "Bangalore",
    rating: 5,
    program: "Online Masterclass Graduate",
    text: "The online masterclasses are perfect for busy dermatologists. The combination of recorded modules and live Q&A sessions provided excellent learning flexibility while maintaining high-quality education.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/testimonial-3-placeholder.webp"
  }
];

const upcomingEvents = [
  {
    title: "Master's Program in Aesthetic Dermatology",
    date: "March 15-20, 2025",
    location: "Mumbai",
    seats: "Limited seats available",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/upcoming-event-1-placeholder.webp"
  },
  {
    title: "Advanced Injection Techniques Workshop",
    date: "April 5-9, 2025",
    location: "Mumbai",
    seats: "Registration open",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/upcoming-event-2-placeholder.webp"
  },
  {
    title: "International Fellowship Program",
    date: "May 10-15, 2025",
    location: "Mumbai",
    seats: "Early bird registration",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/upcoming-event-3-placeholder.webp"
  }
];

export default function TrainingPage() {
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
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-pastel-pink/20 text-pastel-pink rounded-full text-sm font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Professional Training Academy</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                Dr. Jaishree's Academy of Aesthetic Excellence (DAAE)
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                To train dermatologists in evidence-based, ethical, and cutting-edge aesthetic medicine with a blend of theory, hands-on skills, and patient-centric artistry.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-pastel-pink" />
                  <span className="text-gray-700 font-semibold">500+</span>
                  <span className="text-gray-500">Graduates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-700 font-semibold">4.9/5</span>
                  <span className="text-gray-500">Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-pastel-green" />
                  <span className="text-gray-700 font-semibold">15+</span>
                  <span className="text-gray-500">Years Experience</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#courses"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <span>View Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
                >
                  <span>Contact Academy</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/hero-academy-placeholder.webp" 
                  alt="Dr. Jaishree's Academy of Aesthetic Excellence" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Next Workshop</p>
                    <p className="font-semibold text-gray-800">March 15-17, 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Academy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Academy?
            </h2>
            <p className="text-xl text-gray-600">
              Experience world-class training with India's leading aesthetic dermatologist
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Expert Faculty",
                description: "Learn directly from Dr. Jaishree Sharad and her team of internationally recognized professionals"
              },
              {
                icon: Users,
                title: "Small Batch Size",
                description: "Personalized attention with limited participants for maximum learning and mentorship"
              },
              {
                icon: Award,
                title: "International Certification",
                description: "Globally recognized certificates and fellowship programs upon successful completion"
              },
              {
                icon: Clock,
                title: "Hands-on Training",
                description: "Extensive practical sessions with real patients under expert supervision"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-pastel-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-pastel-pink" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Types Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              DAAE Program Types
            </h2>
            <p className="text-xl text-gray-600">
              Three comprehensive program types designed to meet every dermatologist's training needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-pastel-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-pastel-pink" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                Short-Term Online Masterclasses
              </h3>
              <p className="text-gray-600 mb-4">2-4 hours each</p>
              <p className="text-gray-600 mb-6">For dermatologists who want updates, new techniques, or pearls in specific areas.</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>• Botulinum Toxin Mastery</p>
                <p>• Filler Artistry</p>
                <p>• Skin Boosters & Bioremodellers</p>
                <p>• Combination Treatments</p>
                <p>• Complication Management</p>
                <p>• Business & Branding</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-pastel-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-pastel-green" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                Certificate Programmes
              </h3>
              <p className="text-gray-600 mb-4">4-6 weeks</p>
              <p className="text-gray-600 mb-6">Blended learning with recorded modules, live Q&A, and case discussions.</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>• Certificate in Botox & Fillers</p>
                <p>• Certificate in Energy-Based Devices</p>
                <p>• Certificate in Skin Rejuvenation</p>
                <p>• Certificate in Body Contouring & Hair</p>
                <p>• Online + Optional Hands-on</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-pastel-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-pastel-pink" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                Fellowships
              </h3>
              <p className="text-gray-600 mb-4">3-6 months</p>
              <p className="text-gray-600 mb-6">Intensive hands-on programmes for dermatologists seeking advanced training.</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>• Fellowship in Advanced Injectable Aesthetics</p>
                <p>• Fellowship in Laser & Energy Devices</p>
                <p>• Fellowship in Regenerative Aesthetics</p>
                <p>• Fellowship in Comprehensive Aesthetic Dermatology</p>
                <p>• Hybrid or In-clinic</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Short-Term Online Masterclasses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Short-Term Online Masterclasses
            </h2>
            <p className="text-xl text-gray-600">
              Quick, focused training sessions for dermatologists seeking specific skill updates
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shortTermMasterclasses.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-pastel-pink bg-pastel-pink/10 px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{program.level}</span>
                    </div>
                  </div>
                  <div className="space-y-1 mb-6">
                    {program.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-pastel-green" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-lg hover:shadow-lg transition-all duration-200 text-sm"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Programmes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Certificate Programmes
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive 4-6 week programs with blended learning approach
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificatePrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-pastel-green bg-pastel-green/10 px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{program.level}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-pastel-green" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    Enroll Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fellowship Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fellowship Programs
            </h2>
            <p className="text-xl text-gray-600">
              Intensive hands-on programs for dermatologists seeking advanced training
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fellowshipPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-pastel-pink bg-pastel-pink/10 px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{program.level}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-pastel-green" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Module Breakdown
            </h2>
            <p className="text-xl text-gray-600">
              Each course and fellowship follows our structured 6-module curriculum
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                module: "Module 1: Fundamentals",
                icon: BookOpen,
                topics: [
                  "Patient selection & counseling",
                  "Anatomy relevant to aesthetics",
                  "Photography & documentation"
                ]
              },
              {
                module: "Module 2: Injectables",
                icon: Microscope,
                topics: [
                  "Botox (upper, lower face, neck, hyperhidrosis)",
                  "Fillers (contouring, rejuvenation, lips, tear trough, nose)",
                  "Skin Boosters (Profhilo, Restylane Vital, SkinVive)",
                  "Complications & management"
                ]
              },
              {
                module: "Module 3: Energy Devices",
                icon: Zap,
                topics: [
                  "Lasers (pigment, scars, toning, tattoo removal)",
                  "Fractional resurfacing (erbium, diode)",
                  "RF / HIFU for tightening",
                  "Combination protocols"
                ]
              },
              {
                module: "Module 4: Regenerative Medicine",
                icon: Shield,
                topics: [
                  "PRP, PRF, ACP for skin & hair",
                  "Exosomes",
                  "PDRN / Salmon DNA",
                  "Future innovations"
                ]
              },
              {
                module: "Module 5: Aesthetic Dermatology Practice Building",
                icon: Building2,
                topics: [
                  "Treatment planning (mixing injectables, lasers, skincare)",
                  "Pricing, packages & patient retention",
                  "Branding, social media & personal positioning",
                  "Ethical practice & medico-legal aspects"
                ]
              },
              {
                module: "Module 6: Hands-on / Observership",
                icon: Users,
                topics: [
                  "Live demonstrations",
                  "Supervised hands-on training",
                  "Case-based discussions"
                ]
              }
            ].map((module, index) => (
              <motion.div
                key={module.module}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-pastel-pink/20 rounded-full flex items-center justify-center">
                    <module.icon className="w-6 h-6 text-pastel-pink" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800">
                    {module.module}
                  </h3>
                </div>
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-pastel-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Formats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Program Formats
            </h2>
            <p className="text-xl text-gray-600">
              Flexible learning options to suit your schedule and learning preferences
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-pastel-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-pastel-pink" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                Online (Global Access)
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">Recorded + Live Zoom classes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">Downloadable notes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">Interactive quizzes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">International certification</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-pastel-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-pastel-green" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                Offline (Mumbai)
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">Weekend workshops</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">Short observerships</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">1–6 month fellowships</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">At Dr. Jaishree's clinic</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-pastel-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-pastel-pink" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                Hybrid
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">Online theory modules</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">Offline hands-on training</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">Flexible scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-pastel-green" />
                  <span className="text-sm text-gray-600">Best of both worlds</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value-Add Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Value-Add Features
            </h2>
            <p className="text-xl text-gray-600">
              Exclusive benefits that set DAAE apart from other training programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "International Guest Faculty Lectures",
                description: "Learn from renowned international experts in aesthetic medicine through exclusive guest lectures and workshops."
              },
              {
                icon: BookOpen,
                title: "Digital Library of Protocols",
                description: "Access comprehensive digital library with treatment protocols, before-after cases, and research papers."
              },
              {
                icon: Users,
                title: "Alumni Network & Mentorship",
                description: "Join our exclusive alumni network and benefit from ongoing mentorship and professional development opportunities."
              },
              {
                icon: Award,
                title: "University-Endorsed Certification",
                description: "Receive certification endorsed by DAAE with potential university partnerships for added professional weight."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-pastel-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-pastel-pink" />
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss our upcoming training sessions and workshops
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-pastel-pink">{event.seats}</span>
                    <Link
                      href="#contact"
                      className="inline-flex items-center space-x-1 text-sm font-semibold text-gray-800 hover:text-pastel-pink transition-colors"
                    >
                      <span>Register</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Graduates Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from medical professionals who have transformed their practice
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academyTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-pastel-pink font-medium">{testimonial.program}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DAAE Facilities & Learning Environment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              DAAE Learning Environment
            </h2>
            <p className="text-xl text-gray-600">
              State-of-the-art facilities designed for comprehensive aesthetic dermatology training
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/facility-1-placeholder.webp" 
                    alt="DAAE Training Room" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/facility-2-placeholder.webp" 
                    alt="Advanced Aesthetic Equipment" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/facility-3-placeholder.webp" 
                    alt="Hands-on Practice Area" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/facility-4-placeholder.webp" 
                    alt="DAAE Consultation Room" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {[
                  "Fully equipped DAAE training rooms with latest aesthetic equipment and technology",
                  "Dedicated hands-on practice areas with live patient demonstrations",
                  "High-definition cameras and live streaming for online masterclasses and hybrid programs",
                  "International standard accommodation for fellowship and offline program participants",
                  "Wi-Fi enabled classrooms with multimedia facilities for blended learning",
                  "Digital library access with treatment protocols and before-after case studies",
                  "International guest faculty collaboration and exchange programs",
                  "Research and development facilities for advanced aesthetic studies and clinical trials"
                ].map((facility, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pastel-green flex-shrink-0" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Join DAAE?
            </h2>
            
            <p className="text-xl text-gray-600">
              Join hundreds of dermatologists who have transformed their practice with evidence-based, ethical, and cutting-edge aesthetic medicine training through Dr. Jaishree's Academy of Aesthetic Excellence.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                    DAAE Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-pastel-pink" />
                      <span className="text-gray-600">Mumbai, Maharashtra, India</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-pastel-pink" />
                      <span className="text-gray-600">Flexible scheduling for all program types</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-pastel-pink" />
                      <span className="text-gray-600">Online, Offline & Hybrid Programs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-pastel-pink" />
                      <span className="text-gray-600">Global access with international faculty</span>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                    Join DAAE
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Contact us to learn more about our masterclasses, certificate programs, fellowships, and admission requirements. Choose from online, offline, or hybrid learning formats.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <span>Contact DAAE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}




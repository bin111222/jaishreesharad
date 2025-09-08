"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { GraduationCap, Users, Clock, Star, Award, BookOpen, Play, Calendar, MapPin, ArrowRight, CheckCircle, Building2, Microscope, Zap, Shield, Globe, Target } from "lucide-react";
import Link from "next/link";

const academyPrograms = [
  {
    title: "Master's Program in Aesthetic Dermatology",
    duration: "6 Months",
    level: "Advanced",
    description: "Comprehensive program covering all aspects of aesthetic dermatology with hands-on training and mentorship.",
    features: ["Live patient demonstrations", "Hands-on practice", "Case studies", "International certification", "Mentorship program"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/masters-program-placeholder.webp",
    category: "Comprehensive Training"
  },
  {
    title: "Advanced Injection Techniques Workshop",
    duration: "5 Days",
    level: "Intermediate to Advanced",
    description: "Intensive workshop focusing on advanced botox, fillers, and thread lift techniques with live demonstrations.",
    features: ["Live demonstrations", "Hands-on practice", "Complication management", "Certificate of completion"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/injection-workshop-placeholder.webp",
    category: "Specialized Workshop"
  },
  {
    title: "Laser & Energy-Based Devices Certification",
    duration: "4 Days",
    level: "Advanced",
    description: "Comprehensive training on various laser technologies and energy-based devices for aesthetic treatments.",
    features: ["Laser physics", "Treatment protocols", "Safety measures", "Equipment handling", "Certification"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/laser-certification-placeholder.webp",
    category: "Technology Training"
  },
  {
    title: "Chemical Peels & Skin Resurfacing Masterclass",
    duration: "3 Days",
    level: "Beginner to Advanced",
    description: "Master the art of chemical peels and skin resurfacing techniques for various skin concerns and conditions.",
    features: ["Theory sessions", "Practical training", "Safety protocols", "Product knowledge", "Certification"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/chemical-peels-placeholder.webp",
    category: "Skin Treatments"
  },
  {
    title: "Business of Aesthetic Medicine",
    duration: "2 Days",
    level: "All Levels",
    description: "Learn the business aspects of running a successful aesthetic practice including marketing, pricing, and patient management.",
    features: ["Business planning", "Marketing strategies", "Pricing models", "Patient management", "Practice growth"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/business-course-placeholder.webp",
    category: "Business Development"
  },
  {
    title: "International Fellowship Program",
    duration: "1 Year",
    level: "Advanced",
    description: "Exclusive fellowship program with international exposure and advanced training in aesthetic dermatology.",
    features: ["International exposure", "Advanced training", "Research opportunities", "Global certification", "Mentorship"],
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/fellowship-placeholder.webp",
    category: "Fellowship Program"
  }
];

const academyTestimonials = [
  {
    name: "Dr. Priya Sharma",
    location: "Mumbai",
    rating: 5,
    program: "Master's Program Graduate",
    text: "The Academy of Aesthetic Excellence transformed my practice completely. Dr. Jaishree's mentorship and the comprehensive curriculum gave me the confidence to offer advanced aesthetic treatments.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/testimonial-1-placeholder.webp"
  },
  {
    name: "Dr. Amit Patel",
    location: "Delhi",
    rating: 5,
    program: "Fellowship Program Graduate",
    text: "Outstanding academy with world-class facilities and international exposure. The hands-on training and personalized attention made all the difference in my learning experience.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/testimonial-2-placeholder.webp"
  },
  {
    name: "Dr. Sneha Reddy",
    location: "Bangalore",
    rating: 5,
    program: "Advanced Workshop Graduate",
    text: "The academy provides comprehensive training that combines theory with extensive practical experience. Highly recommended for any dermatologist looking to enhance their skills.",
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
                Dr. Jaishree's Academy of Aesthetic Excellence
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your practice with world-class training in aesthetic dermatology. Learn from India's leading cosmetic dermatologist through comprehensive hands-on programs designed for medical professionals seeking excellence in aesthetic medicine.
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

      {/* Course Offerings */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academy Programs
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive training programs designed for medical professionals seeking excellence in aesthetic dermatology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academyPrograms.map((program, index) => (
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
                    Enroll Now
                  </Link>
                </div>
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

      {/* Academy Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academy Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Learn in a world-class environment with the latest equipment and cutting-edge technology
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
                    alt="Academy Training Room" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/facility-2-placeholder.webp" 
                    alt="Advanced Equipment" 
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
                    alt="Academy Consultation Room" 
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
                  "Fully equipped academy training rooms with latest aesthetic equipment",
                  "Dedicated practice areas for hands-on training with live patients",
                  "High-definition cameras and live streaming for procedure demonstrations",
                  "International standard accommodation for outstation participants",
                  "Wi-Fi enabled classrooms with multimedia facilities and virtual learning",
                  "Academy library with extensive reference materials and research papers",
                  "International collaboration and exchange programs",
                  "Research and development facilities for advanced studies"
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
              Ready to Join the Academy of Excellence?
            </h2>
            
            <p className="text-xl text-gray-600">
              Join hundreds of medical professionals who have transformed their practice and achieved excellence in aesthetic dermatology through our comprehensive academy programs.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                    Academy Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-pastel-pink" />
                      <span className="text-gray-600">Mumbai, Maharashtra, India</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-pastel-pink" />
                      <span className="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-pastel-pink" />
                      <span className="text-gray-600">International Certification Programs</span>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                    Join the Academy
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Contact us to learn more about our academy programs, upcoming sessions, and admission requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <span>Contact Academy</span>
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




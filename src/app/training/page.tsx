"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { GraduationCap, Users, Clock, Star, Award, BookOpen, Play, Calendar, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "Advanced Botox & Dermal Fillers",
    duration: "3 Days",
    level: "Intermediate to Advanced",
    price: "₹45,000",
    description: "Comprehensive hands-on training in advanced injection techniques for facial rejuvenation and contouring.",
    features: ["Live demonstrations", "Hands-on practice", "Case studies", "Certificate of completion"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    title: "Chemical Peels & Skin Resurfacing",
    duration: "2 Days",
    level: "Beginner to Intermediate",
    price: "₹35,000",
    description: "Master the art of chemical peels and skin resurfacing techniques for various skin concerns.",
    features: ["Theory sessions", "Practical training", "Safety protocols", "Product knowledge"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    title: "Laser Treatments & Technology",
    duration: "4 Days",
    level: "Advanced",
    price: "₹55,000",
    description: "Comprehensive training on various laser technologies and their applications in aesthetic medicine.",
    features: ["Laser physics", "Treatment protocols", "Safety measures", "Equipment handling"],
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=300&fit=crop"
  },
  {
    title: "Thread Lifts & Non-Surgical Facelifts",
    duration: "2 Days",
    level: "Intermediate",
    price: "₹40,000",
    description: "Learn advanced thread lift techniques and non-surgical facelift procedures.",
    features: ["Thread selection", "Placement techniques", "Complication management", "Results optimization"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  }
];

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The training program exceeded my expectations. Dr. Jaishree's expertise and teaching methods are exceptional. I feel confident to implement these techniques in my practice.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Dr. Amit Patel",
    location: "Delhi",
    rating: 5,
    text: "Outstanding academy with world-class facilities. The hands-on training and personalized attention made all the difference in my learning experience.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Dr. Sneha Reddy",
    location: "Bangalore",
    rating: 5,
    text: "The academy provides comprehensive training that combines theory with extensive practical experience. Highly recommended for any dermatologist looking to enhance their skills.",
    image: "https://images.unsplash.com/photo-1594824475545-9d0c7c4951c5?w=100&h=100&fit=crop&crop=face"
  }
];

const upcomingEvents = [
  {
    title: "Advanced Botox Workshop",
    date: "March 15-17, 2024",
    location: "Mumbai",
    seats: "Limited seats available",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  },
  {
    title: "Chemical Peels Certification",
    date: "April 5-6, 2024",
    location: "Mumbai",
    seats: "Registration open",
    image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=250&fit=crop"
  },
  {
    title: "Laser Technology Summit",
    date: "May 10-13, 2024",
    location: "Mumbai",
    seats: "Early bird registration",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
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
                Dr. Jaishree's Aesthetic Academy
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your practice with world-class training in aesthetic dermatology. Learn from India's leading cosmetic dermatologist through comprehensive hands-on programs designed for medical professionals.
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
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=600&fit=crop" 
                  alt="Dr. Jaishree's Aesthetic Academy Training Session" 
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
                description: "Learn directly from Dr. Jaishree Sharad and her team of experienced professionals"
              },
              {
                icon: Users,
                title: "Small Batch Size",
                description: "Personalized attention with limited participants for maximum learning"
              },
              {
                icon: Award,
                title: "Certification",
                description: "Internationally recognized certificates upon successful completion"
              },
              {
                icon: Clock,
                title: "Hands-on Training",
                description: "Extensive practical sessions with real patients under supervision"
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
              Course Offerings
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive training programs designed for medical professionals
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-pastel-pink bg-pastel-pink/10 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-2xl font-bold text-gray-800">{course.price}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
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
            {testimonials.map((testimonial, index) => (
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
              State-of-the-Art Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Learn in a world-class environment with the latest equipment and technology
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
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop" 
                    alt="Training Room" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=400&fit=crop" 
                    alt="Equipment" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop" 
                    alt="Practice Area" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop" 
                    alt="Consultation Room" 
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
                  "Fully equipped training rooms with latest aesthetic equipment",
                  "Dedicated practice areas for hands-on training",
                  "High-definition cameras for procedure demonstrations",
                  "Comfortable accommodation for outstation participants",
                  "Wi-Fi enabled classrooms with multimedia facilities",
                  "Library with extensive reference materials"
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
              Ready to Transform Your Practice?
            </h2>
            
            <p className="text-xl text-gray-600">
              Join hundreds of medical professionals who have enhanced their skills and expanded their practice through our comprehensive training programs.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                    Contact Information
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
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                    Get Started
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Contact us to learn more about our training programs and upcoming sessions.
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

"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Clock,
  Star,
  Award,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  ShieldAlert,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

type TrainingProgram = {
  id: string;
  title: string;
  badge: string;
  duration: string;
  format: string;
  location?: string;
  eligibility?: string;
  batchSize?: string;
  certification?: string;
  image: string;
  description: string;
  highlights: string[];
  note?: string;
};

const trainingPrograms: TrainingProgram[] = [
  {
    id: "fellowship",
    title: "Fellowship in Aesthetic Dermatology",
    badge: "Fellowship",
    duration: "1 Year",
    format: "In-clinic (structured)",
    location: "Mumbai (Vashi, Navi Mumbai)",
    eligibility: "Dermatologists with MD / DNB / DVD / DDV in Dermatology",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/fellowship-comprehensive.webp",
    description:
      "A one-year structured fellowship designed to provide comprehensive clinical exposure and hands-on training in modern aesthetic dermatology procedures.",
    highlights: [
      "High-volume, real-patient exposure—not simulated learning",
      "Training aligned with what actually works in aesthetic practice",
      "Strong foundation in clinical judgment, safety, and results",
      "Selective enrolment for doctors serious about long-term aesthetics",
      "Hands-on training progression from observation/assisting to supervised performance",
      "Injectables and thread lifts taught in the final three months via dedicated lectures and live hands-on workshops",
    ],
    note:
      "During the first 1–2 months, fellows will primarily observe and assist. From the third month onwards, fellows begin hands-on training and independently perform aesthetic procedures (except injectables and thread lifts).",
  },
  {
    id: "basic-injectables",
    title: "Certificate Programme in Basic Injectables",
    badge: "Certificate Programme",
    duration: "3 Months",
    format: "Hybrid (online + in-clinic)",
    location: "Mumbai",
    eligibility: "Dermatologists with MD / DNB / DVD / DDV in Dermatology",
    batchSize: "Maximum 6 participants (minimum 4 per batch)",
    certification: "Certificate in Basic Injectable Training",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/cert-botox-fillers.webp",
    description:
      "A focused training program designed for dermatologists and aesthetic physicians who wish start injecting botulinum toxin, dermal fillers, and skin boosters.",
    highlights: [
      "8 online academic lectures (once a week), 45 minutes per session + Q&A discussion",
      "Lectures include facial anatomy, product selection, injection technique, and complication prevention",
      "Lecture coverage: botulinum basics + fillers (mid and lower face)",
      "Live demo and hands-on training (1.5 days) conducted at the clinic",
      "Live demonstrations: Botox (upper face), fillers (mid and lower face), and skin booster injections",
    ],
  },
  {
    id: "advanced-injectables",
    title: "Certificate Programme in Advanced Injectables",
    badge: "Certificate Programme",
    duration: "3 Months",
    format: "Hybrid (online + in-clinic)",
    location: "Mumbai",
    eligibility: "Dermatologists with MD / DNB / DVD / DDV in Dermatology",
    batchSize: "Maximum 6 participants (minimum 4 per batch)",
    certification: "Certificate in Advanced Injectable Techniques",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/filler-artistry.webp",
    description:
      "A focused training program designed for dermatologists and aesthetic physicians who wish to advance their expertise in botulinum toxin, dermal fillers, and biostimulators.",
    highlights: [
      "10 online academic lectures (once a week), 45 minutes per session + Q&A discussion",
      "Curriculum: advanced botulinum toxin, fillers (upper face, tear trough, lips, hands) and biostimulators",
      "Live demo and supervised hands-on training (1.5 days) conducted at the clinic",
    ],
  },
  {
    id: "observership",
    title: "Observership",
    badge: "Observership",
    duration: "1 Month (extendable up to 3 months)",
    format: "In-clinic (observational)",
    location: "Mumbai",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/facility-3-placeholder.webp",
    description:
      "We offer a one-month observership program. The observership may be extended on a month-to-month basis for a maximum period of three months, subject to availability.",
    highlights: [
      "Observers will be able to watch clinical consultations and procedures",
      "No lectures are included in this program",
      "No hands-on training is included in this program",
    ],
    note:
      "Please note that the observership is purely observational. Observers will be able to watch clinical consultations and procedures but no lectures or hands-on training are included in this program.",
  },
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
                <span>Professional Training</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                Training Programmes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fellowship, certificate programmes, and observership opportunities designed for dermatologists and aesthetic physicians seeking ethical, evidence-based learning.
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
                  href="#programs"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <span>View Programmes</span>
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
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/academy/hero-academy-placeholder.png" 
                  alt="Training programmes" 
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
                    <p className="font-semibold text-gray-800">Dates Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Training Offerings
            </h2>
            <p className="text-xl text-gray-600">
              Fellowship, certificate programmes, and an observership pathway.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
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
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-sm font-semibold text-pastel-pink bg-pastel-pink/10 px-3 py-1 rounded-full">
                      {program.badge}
                    </span>
                    {program.location ? (
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {program.location}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-5">{program.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 mb-5">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span><span className="font-semibold text-gray-800">Duration:</span> {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <span><span className="font-semibold text-gray-800">Format:</span> {program.format}</span>
                    </div>
                    {program.eligibility ? (
                      <div className="flex items-start gap-2 sm:col-span-2">
                        <Award className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span><span className="font-semibold text-gray-800">Eligibility:</span> {program.eligibility}</span>
                      </div>
                    ) : null}
                    {program.batchSize ? (
                      <div className="flex items-start gap-2 sm:col-span-2">
                        <Users className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span><span className="font-semibold text-gray-800">Batch size:</span> {program.batchSize}</span>
                      </div>
                    ) : null}
                    {program.certification ? (
                      <div className="flex items-start gap-2 sm:col-span-2">
                        <GraduationCap className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span><span className="font-semibold text-gray-800">Certification:</span> {program.certification}</span>
                      </div>
                    ) : null}
                  </div>

                  <div className="space-y-2 mb-6">
                    {program.highlights.map((item) => (
                      <div key={item} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-pastel-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  {program.note ? (
                    <div className="rounded-xl border border-pastel-pink/30 bg-white p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-pastel-pink mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700 leading-relaxed">{program.note}</p>
                      </div>
                    </div>
                  ) : null}

                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Learning Approach
            </h2>
            <p className="text-xl text-gray-600">
              Built around fundamentals, safety, and real-world clinical exposure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Academic Foundation",
                points: ["Weekly sessions (programme-specific)", "Anatomy + product selection focus", "Q&A and case discussion"],
              },
              {
                icon: Briefcase,
                title: "Clinical Exposure",
                points: ["Live demonstrations at the clinic", "Supervised hands-on (where applicable)", "Small batches for mentoring"],
              },
              {
                icon: ShieldAlert,
                title: "Safety & Ethics",
                points: ["Complication prevention emphasis", "Protocol-driven practice", "Patient selection and counselling"],
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-16 h-16 bg-pastel-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <card.icon className="w-8 h-8 text-pastel-pink" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-4 text-center">
                  {card.title}
                </h3>
                <div className="space-y-3">
                  {card.points.map((p) => (
                    <div key={p} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-pastel-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{p}</span>
                    </div>
                  ))}
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




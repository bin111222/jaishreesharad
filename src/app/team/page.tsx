"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Users, Award, Heart, Star, GraduationCap, Activity } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Jaishree Sharad",
    role: "Founder & Medical Director",
    credentials: "MBBS, MD (Dermatology), International Fellowships",
    expertise: "Cosmetic Dermatology, Anti-aging, Celebrity Care",
    experience: "23+ years",
    image: "/team/dr-jaishree.jpg",
    description: "India's leading celebrity cosmetic dermatologist with international training and recognition. Board Member of ISDS, International Mentor for ASDS, and author of four bestselling books."
  },
  {
    name: "Dr. Poonam Semlani",
    role: "Senior Associate Dermatologist",
    credentials: "MBBS, MD (Dermatology)",
    expertise: "Aesthetic Procedures, Patient Care",
    experience: "15+ years",
    image: "/team/dr-poonam.jpg",
    description: "A skilled dermatologist who has been with Skinfinitii for years, Dr. Semlani specializes in aesthetic procedures and tailors treatments to individual needs. Patients appreciate her gentle approach and detailed consultations."
  },

  {
    name: "Dr. Shikha Shah",
    role: "Associate Dermatologist",
    credentials: "MBBS, MD (Dermatology)",
    expertise: "Acne, Pigmentation, Hair Concerns",
    experience: "8+ years",
    image: "/team/dr-shikha.jpg",
    description: "Dr. Shah is known for her friendly demeanor and expertise in treating acne, pigmentation, and hair concerns. She often manages the follow-up care and makes sure each patient's skincare regimen is optimized for results."
  },
  {
    name: "Dr. Fauzia Sheikh",
    role: "Assistant Doctor",
    credentials: "MBBS, MD (Dermatology)",
    expertise: "Clinical Dermatology, Skin Analysis",
    experience: "5+ years",
    image: "/team/dr-fauzia.jpg",
    description: "Working closely under Dr. Jaishree's mentorship, Dr. Sheikh assists in procedures and conducts skin analyses for new patients. Her background in clinical dermatology ensures even routine treatments are done with precision."
  },
  {
    name: "Dr. Aishwarya Bhatia",
    role: "Assistant Doctor",
    credentials: "MBBS, MD (Dermatology)",
    expertise: "Patient Care, Pre & Post-treatment",
    experience: "3+ years",
    image: "/team/dr-aishwarya.jpg",
    description: "Dr. Bhatia's enthusiasm and up-to-date knowledge make her a valuable team member. She often handles pre-treatment prep and post-treatment care instructions, making patients feel at ease."
  }
];

const supportStaff = [
  {
    name: "Certified Therapists & Nurses",
    role: "Treatment Support Team",
    expertise: "Supportive Therapies, Laser Safety, Hygiene Standards",
    experience: "Trained by Dr. Jaishree"
  },
  {
    name: "Clinic Managers & Support Staff",
    role: "Administrative Team",
    expertise: "Appointments, Queries, Follow-ups, Patient Coordination",
    experience: "Patient-first approach"
  },
  {
    name: "Front Desk Team",
    role: "Patient Care Coordinators",
    expertise: "Reception, Scheduling, Patient Experience",
    experience: "Warm and welcoming service"
  }
];

const clinicValues = [
  {
    icon: Heart,
    title: "Patient-First Approach",
    description: "Every treatment plan is personalized to your unique needs and goals."
  },
  {
    icon: Award,
    title: "Excellence in Care",
    description: "Combining cutting-edge technology with proven medical expertise."
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description: "Collaborative approach ensuring comprehensive care and optimal results."
  },
  {
    icon: Star,
    title: "Celebrity-Grade Standards",
    description: "The same high standards we apply to our celebrity clients for everyone."
  }
];

export default function TeamPage() {
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
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-800">
              Team Skinfinitii
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A multidisciplinary team of dermatologists, aesthetic physicians, therapists, and nurses 
              supporting Dr. Jaishree to deliver premium care.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-600">
              <Users className="w-6 h-6" />
              <span className="text-lg">Expert Team</span>
              <span>•</span>
              <Award className="w-6 h-6" />
              <span className="text-lg">Premium Care</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Medical Team
              </h2>
              <p className="text-xl text-gray-600">
                Experienced professionals dedicated to your skin health
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-pastel-pink to-pastel-green rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-1">
                            <span className="text-white text-xs font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <span className="text-gray-500 text-xs font-medium">Photo</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-pastel-pink font-medium">{member.role}</p>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><strong>Credentials:</strong> {member.credentials}</p>
                        <p><strong>Expertise:</strong> {member.expertise}</p>
                        <p><strong>Experience:</strong> {member.experience}</p>
                      </div>
                      <p className="text-gray-700">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Team Images */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Team Working Image 1 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Team Working</span>
                    </div>
                  </div>
                </div>
                
                {/* Team Working Image 2 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Consultation</span>
                    </div>
                  </div>
                </div>
                
                {/* Team Working Image 3 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Treatment</span>
                    </div>
                  </div>
                </div>
                
                {/* Team Working Image 4 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Care</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Support Team
              </h2>
              <p className="text-xl text-gray-600">
                Dedicated professionals ensuring exceptional patient care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportStaff.map((staff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pastel-green to-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{staff.name}</h3>
                  <p className="text-pastel-pink text-sm font-medium mb-2">{staff.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{staff.expertise}</p>
                  <p className="text-xs text-gray-500">{staff.experience}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clinic Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide our approach to patient care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clinicValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pastel-pink to-pastel-green rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
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
              Experience Premium Care
            </h2>
            
            <p className="text-xl text-gray-600">
              Meet our team and discover why Skinfinitii is trusted by celebrities and patients worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span>Book Consultation</span>
              </a>
              
              <a
                href="/treatments"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-300"
              >
                <span>View Treatments</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

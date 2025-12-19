"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Users, Award, Heart, Star, GraduationCap, Activity } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Jaishree Sharad",
    role: "Founder & Medical Director",
    credentials: "MBBS, DDV, IFAAD, International Society for Dermatologic and Aesthetic Surgery, Fellowship in Cosmetic Dermatology (USA), Fellowship in Lasers (Bangkok)",
    expertise: "Cosmetic Dermatology, Anti-aging, Aesthetic Dermatology",
    experience: "25+ years",
    branch: "Khar and Vashi Branch",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/team/jaishree.webp",
    description: "Internationally renowned cosmetic dermatologist of India with international training and recognition. Board Member of ISDS, International Mentor for ASDS, and author of four bestselling books."
  },
  {
    name: "Dr. Saujanya Sagar",
    role: "Associate Dermatologist",
    credentials: "MBBS, MD (Dermatology)",
    expertise: "Aesthetic Procedures, Patient Care",
    experience: "7+ years",
    branch: "Vashi Branch",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/team/saujanya.webp",
    description: "Dr. Saujanya leads the Vashi branch with expertise in aesthetic procedures and is committed to delivering exceptional patient care."
  },
  {
    name: "Dr. Fauzia Siddique",
    role: "Cosmetologist",

    expertise: "Patient Care, Pre & Post-treatment",
    experience: "10+ years",
    branch: "Khar Branch",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/5.webp",
    description: "Dr. Siddique works closely with the team to ensure optimal patient care and manages pre and post-treatment protocols with precision."
  },
  {
    name: "Dr. Drishti Rajdeh",
    role: "Assistant Dermatologist",
    credentials: "MBBS, MD (Dermatology)",
    expertise: "Aesthetic Procedures, Patient Care",
    branch: "Khar Branch",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/team/drishti.webp",
    description: "Dr. Rajdeh brings extensive experience in dermatology and is known for her meticulous approach to patient care and treatment planning."
  },
  {
    name: "Dr. Chethan Shetty",
    role: "Assistant Dermatologist",
    credentials: "MBBS, MD (Dermatology)",
    expertise: "Clinical Dermatology, Skin Analysis",
    branch: "Khar Branch and KEM Hospital",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/5.webp",
    description: "Dr. Shetty specializes in clinical dermatology and provides comprehensive skin analysis and treatment recommendations for patients."
  }
];

const supportStaff = [
  {
    name: "Rubina",
    role: "Therapist",
    expertise: "Laser Treatments, Skin Care Procedures",
    experience: "Khar Branch",
    branch: "Khar",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/5.webp"
  },
  {
    name: "Maheen",
    role: "Therapist",
    expertise: "Aesthetic Treatments, Patient Care",
    experience: "Khar Branch",
    branch: "Khar",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/5.webp"
  },
  {
    name: "Pooja Gurav",
    role: "Senior Therapist",
    expertise: "Laser Safety, Treatment Protocols",
    experience: "Vashi Branch",
    branch: "Vashi",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/pooja.webp"
  },
  {
    name: "Snehal Gole",
    role: "Therapist",
    expertise: "Skin Care, Patient Support",
    experience: "Vashi Branch",
    branch: "Vashi",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/snehal.webp"
  },
  {
    name: "Nageshwari Wanga",
    role: "Therapist",
    expertise: "Treatment Support, Hygiene Standards",
    experience: "Vashi Branch",
    branch: "Vashi",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/nageshwari.webp"
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
    title: "Premium Standards",
    description: "The same high standards we apply to our premium clients for everyone."
  }
];

export default function TeamPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/5.webp")' }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white">
              Team Skinfinitii
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              A multidisciplinary team of dermatologists, aesthetic physicians, therapists, and nurses 
              supporting Dr. Jaishree to deliver premium care.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-200">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-3xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pastel-pink/20 group"
                >
                  {/* Large Image Section */}
                  <div className="relative mb-6">
                    <div className="w-full h-64 bg-gradient-to-br from-pastel-pink/10 to-pastel-green/10 rounded-2xl overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 flex items-center justify-center">
                              <div class="text-center">
                                <div class="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span class="text-white text-lg font-bold">${member.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <span class="text-gray-600 text-sm font-medium">Professional Photo</span>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    {/* Branch Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                        {member.branch}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-pastel-pink font-semibold text-sm">{member.role}</p>
                    </div>

                    <div className="space-y-3 text-sm">
                      {member.credentials && (
                        <div className="bg-gray-50 rounded-xl p-3">
                          <p className="text-gray-600 mb-1"><strong className="text-gray-800">Credentials:</strong></p>
                          <p className="text-gray-700 text-xs leading-relaxed">{member.credentials}</p>
                        </div>
                      )}
                      
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-gray-600 mb-1"><strong className="text-gray-800">Expertise:</strong></p>
                        <p className="text-gray-700 text-xs">{member.expertise}</p>
                      </div>

                      {member.experience && (
                        <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-xl p-3">
                          <p className="text-gray-600 mb-1"><strong className="text-gray-800">Experience:</strong></p>
                          <p className="text-gray-700 text-xs font-semibold">{member.experience}</p>
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <p className="text-gray-600 text-sm leading-relaxed text-center">{member.description}</p>
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
                <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/team/1.webp"
                    alt="Team treatment"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                              <span class="text-white text-sm font-bold">3</span>
                            </div>
                            <span class="text-gray-500 text-xs font-medium">Treatment</span>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Team Working Image 2 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/2.webp"
                    alt="Team consultation"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                              <span class="text-white text-sm font-bold">2</span>
                            </div>
                            <span class="text-gray-500 text-xs font-medium">Consultation</span>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Team Working Image 3 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/5.webp"
                    alt="Team treatment"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                              <span class="text-white text-sm font-bold">3</span>
                            </div>
                            <span class="text-gray-500 text-xs font-medium">Treatment</span>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Team Working Image 4 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/staff/4.webp"
                    alt="Team care"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-12 h-12 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                              <span class="text-white text-sm font-bold">4</span>
                            </div>
                            <span class="text-gray-500 text-xs font-medium">Care</span>
                          </div>
                        </div>
                      `;
                    }}
                  />
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
                  <div className="w-36 h-36 bg-gradient-to-br from-pastel-green to-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <img 
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-pastel-green to-pastel-pink rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{staff.name}</h3>
                  <p className="text-pastel-pink text-sm font-medium mb-1">{staff.role}</p>
                  <p className="text-blue-600 text-xs font-medium mb-2">{staff.branch} Branch</p>
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

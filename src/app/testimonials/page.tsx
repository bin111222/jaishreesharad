"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Star, Quote, Users, Award, Heart } from "lucide-react";
import { TestimonialsColumn, testimonials } from "@/components/ui/testimonials-columns-1";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const celebrityTestimonialsData = [
  {
    quote: "When someone like Jaishree enters your life, you feel like you have won the skin battle! … your skin's BFF for life.",
    name: "Karan Johar",
    designation: "Director",
    src: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/karan.webp"
  },
  {
    quote: "Great skin doesn't happen by chance, it happens by appointment . she's the reason I look into the mirror!",
    name: "Ranbir Kapoor",
    designation: "Actor",
    src: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/ranbir.webp"
  },
  {
    quote: "There is no one I trust more to take care of my skin … I always go to her for the best and the right advice.",
    name: "Sonam Kapoor",
    designation: "Actor",
    src: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/sonam.webp"
  },
  {
    quote: "Jaishree is my instant cure for any skin problem … she is 'Dr Solve It' for me.",
    name: "Varun Dhawan",
    designation: "Actor",
    src: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/varun.webp"
  },
  {
    quote: "The oxygen facials at Dr J's Skinfiniti … my skin looks naturally moisturized.",
    name: "Jacqueline Fernandez",
    designation: "Actor",
    src: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/jacqueline.webp"
  },
  {
    quote: "Jaishree is so knowledgeable … there is no one better than her to write a book on skincare.",
    name: "Farah Khan",
    designation: "Director",
    src: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/farah.webp"
  },
  {
    quote: "Jaishree taught me the importance of loving my skin and nourishing it—that less is always more.",
    name: "Athiya Shetty",
    designation: "Actor",
    src: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/athiya.webp"
  }
];

const patientTestimonials = [
  {
    id: 1,
    quote: "The peels she has done on my skin have worked wonders … stem cell PRP helped my hair loss issues.",
    name: "Amyra Dastur",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 2,
    quote: "From the word go she made me comfortable and confident in my own skin … always leave the clinic revitalized.",
    name: "Aadar Jain",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 3,
    quote: "Jaishree will always be available and ready to help … she's just a call away.",
    name: "Elli Avram",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 4,
    quote: "You're the best doc, thank you for helping me out with my skin.",
    name: "Karan Kapadia",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 5,
    quote: "She simplified skincare for me … I deeply admire her positive energy and warmth.",
    name: "Sobhita Dhulipala",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 6,
    quote: "Healthy and glowing skin is very important … Skin tips from Dr J and basic peels changed the way my skin looks.",
    name: "Priya Banerjee",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 7,
    quote: "Love J! She is the best.",
    name: "Shekhar Ravjiani",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 8,
    quote: "I switched make-up brands … with regular clean-ups, my skin has been better. She never pushes products.",
    name: "Kalyani Priyadarshan",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 9,
    quote: "She doesn't force treatments … my face has never looked better thanks to her.",
    name: "Yasmin Karachiwala",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 10,
    quote: "Fantastic dermatologist, amazing person and my best friend.",
    name: "Namrata Dutt Kumar",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 11,
    quote: "She is one person I can truly trust with closed eyes … thank you for always putting up with me.",
    name: "Riddhima Kapoor",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 12,
    quote: "Such a warm and positive person … her smile and kindness make you feel good before treatment.",
    name: "Iulia Vantur",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 13,
    quote: "Whether hydration, diet, or oxygen facials … Jaishree knows best.",
    name: "Jitesh Pillai",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 14,
    quote: "She heals her patients not just physically but instills confidence … a real-life heroine.",
    name: "Shalini Sharma",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 15,
    quote: "My skin is in its best form today and it's only because of her! My skin saviour.",
    name: "Palak Muchhal",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 16,
    quote: "Your expertise and knowledge are always up to the mark … staff is as sweet and nice as you are.",
    name: "Gaurie Pandit Dwivedi",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 17,
    quote: "Expert hands with a human touch … she takes care of my worries perfectly.",
    name: "Prithvi Hatte",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 18,
    quote: "I took my husband to Dr J … now he looks younger than me!",
    name: "Anupama Kapoor",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 19,
    quote: "Instead of pimples, now I smile with dimples … she did her magic.",
    name: "Amit Sadh",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  },
  {
    id: 20,
    quote: "She is quick and accurate with her diagnosis … I make it a point to see her twice a month.",
    name: "Harshvardhan Kapoor",
    treatment: "Patient",
    rating: 5,
    category: "patient"
  }
];

const stats = [
  { number: "5", label: "Rating", icon: Star },
  { number: "20,000+", label: "Happy Patients", icon: Users },
  { number: "25+", label: "Years Experience", icon: Award },
  { number: "99%", label: "Happiness Rate", icon: Heart }
];

export default function TestimonialsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-4 sm:space-y-6"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-800">
              Patient Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real stories from celebrities and patients who trust Dr. Jaishree with their skin
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-600">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="text-lg">5.0 Average Rating</span>
              <span>•</span>
              <Users className="w-6 h-6" />
              <span className="text-lg">1000+ Happy Patients</span>
            </div>
            
            {/* Celebrity Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-8 sm:mt-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {/* Amitabh */}
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden group relative transition-all duration-300">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/actors/amitabh.webp?updatedAt=1756230224403"
                    alt="Amitabh"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-medium drop-shadow-lg">Amitabh</span>
                  </div>
                </div>
                
                {/* Karan */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden group relative transition-all duration-300">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/actors/karan.webp?updatedAt=1756230224403"
                    alt="Karan"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-medium drop-shadow-lg">Karan</span>
                  </div>
                </div>
                
                {/* Ranbir */}
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden group relative transition-all duration-300">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/actors/ranbir.webp?updatedAt=1756230224403"
                    alt="Ranbir"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-medium drop-shadow-lg">Ranbir</span>
                  </div>
                </div>
                
                {/* Salman */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden group relative transition-all duration-300">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/actors/salman.webp?updatedAt=1756230224403"
                    alt="Salman"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-medium drop-shadow-lg">Salman</span>
                  </div>
                </div>
                
                {/* Sonam */}
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden group relative transition-all duration-300">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/actors/sonam.webp?updatedAt=1756230224403"
                    alt="Sonam"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-medium drop-shadow-lg">Sonam</span>
                  </div>
                </div>
                
                {/* Varun */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden group relative transition-all duration-300">
                  <img 
                    src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/actors/varun.webp?updatedAt=1756230224403"
                    alt="Varun"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-medium drop-shadow-lg">Varun</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pastel-pink to-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Testimonial
              </h2>
              <p className="text-xl text-gray-600">
                A special story from one of our celebrity clients
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pastel-pink to-pastel-green rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
                  "Dr. Jaishree is not just a dermatologist; she's an artist who understands the science of beauty. Her treatments are so natural that people always compliment my skin but can never tell I've had work done. She's the secret behind many red carpet looks in Bollywood."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div>
                  <div className="font-semibold text-lg text-gray-800">Bollywood Actor</div>
                  <div className="text-pastel-pink font-medium">Celebrity Client</div>
                  <div className="text-sm text-gray-600 mt-1">Trusted Dr. Jaishree for over 5 years</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Celebrity Testimonials */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Celebrity Testimonials
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by Bollywood and business elites
              </p>
            </div>

            <div className="flex justify-center">
              <CircularTestimonials
                testimonials={celebrityTestimonialsData}
                autoplay={true}
                colors={{
                  name: "#1f2937",
                  designation: "#6b7280",
                  testimony: "#374151",
                  arrowBackground: "#f472b6",
                  arrowForeground: "#ffffff",
                  arrowHoverBackground: "#ec4899",
                }}
                fontSizes={{
                  name: "1.75rem",
                  designation: "1rem",
                  quote: "1.125rem",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patient Stories - New Scrolling Testimonials */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Patient Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real experiences from our valued patients
              </p>
            </div>

            <div className="flex justify-center gap-6 mt-6 sm:mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
              <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} />
              <TestimonialsColumn testimonials={testimonials.slice(3, 6)} className="hidden md:block" duration={19} />
              <TestimonialsColumn testimonials={testimonials.slice(6, 9)} className="hidden lg:block" duration={17} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pastel-pink to-pastel-green rounded-full flex items-center justify-center mx-auto">
              <Quote className="w-10 h-10 text-white" />
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-gray-800 italic leading-relaxed">
              "Dr. Jaishree's expertise in cosmetic dermatology is unmatched. Her approach combines 
              medical precision with artistic vision, delivering results that are both natural and 
              transformative. She's the only person I trust with my skin."
            </blockquote>
            
            <div>
              <div className="font-semibold text-xl text-gray-800">Bollywood Actor</div>
              <div className="text-pastel-pink">Celebrity Client</div>
            </div>
            
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Join Our Happy Patients
            </h2>
            
            <p className="text-xl text-gray-600">
              Experience the same level of care and expertise that has earned us 
              a 5.0 rating from thousands of satisfied patients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
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

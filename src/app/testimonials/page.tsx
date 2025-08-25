"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Star, Quote, Users, Award, Heart } from "lucide-react";

const celebrityTestimonials = [
  {
    id: 1,
    quote: "She will do only what is necessary and knows when to stop… I feel completely safe in her hands. I have very sensitive skin, so I do not like doing too much to it, but her mesotherapy treatment once a month is a must for me.",
    name: "Shamita Shetty",
    treatment: "Celebrity Client",
    rating: 5,
    category: "celebrity"
  },
  {
    id: 2,
    quote: "Dr. Jaishree is my skin savior. Before every shoot, I consult her on the best possible skin routine to follow depending on the weather conditions I am shooting in. I have sensitive skin and it reacts a lot to changes in weather and diet. Thanks to her, my skincare routine has become really easy!",
    name: "Huma Qureshi",
    treatment: "Celebrity Client",
    rating: 5,
    category: "celebrity"
  },
  {
    id: 3,
    quote: "I am an old man but I look more presentable and younger than I did twenty years ago! The complete credit goes to none other than my darling Dr. Jaishree Sharad! She believes in care and cure and not commercial viability, and that makes her one in a million.",
    name: "Annu Kapoor",
    treatment: "Celebrity Client",
    rating: 5,
    category: "celebrity"
  },
  {
    id: 4,
    quote: "I've been visiting Dr. J's clinic for several years now… and there's no one else I trust with my skin. She doesn't believe in extreme and radical treatments. She is so quick and accurate with her diagnosis. I have sensitive skin and face various issues. I make it a point to see her twice a month.",
    name: "Harshvardhan Kapoor",
    treatment: "Celebrity Client",
    rating: 5,
    category: "celebrity"
  },
  {
    id: 5,
    quote: "I have always taken my skin for granted and treated it like an outward part of my body. Jaishree taught me the importance of loving my skin and nourishing it — that less is always more. She is my go-to person in times of panic because she can cure with immediate effect and calm my nerves too.",
    name: "Athiya Shetty",
    treatment: "Celebrity Client",
    rating: 5,
    category: "celebrity"
  },
  {
    id: 6,
    quote: "I've been Dr. J's patient since 2015. I used to suffer from pimples and dull skin. Today my skin glows and is pimple-free thanks to Jaishree and her easy procedures. The peels she has done on my skin have worked wonders. More importantly, the stem cell PRP hair treatment has really helped me battle my hair loss issues.",
    name: "Amyra Dastur",
    treatment: "Celebrity Client",
    rating: 5,
    category: "celebrity"
  }
];

const patientTestimonials = [
  {
    id: 7,
    quote: "Dr. Jaishree's botox treatment was so natural. My friends couldn't believe I had anything done - they just said I looked well-rested!",
    name: "Priya M.",
    treatment: "Botox Treatment",
    rating: 5,
    category: "patient"
  },
  {
    id: 8,
    quote: "After struggling with acne scars for years, Dr. Jaishree's laser treatments completely transformed my skin. I finally have the confidence I always wanted.",
    name: "Anita S.",
    treatment: "Laser Treatments",
    rating: 5,
    category: "patient"
  },
  {
    id: 9,
    quote: "The PRP therapy for my hair loss was incredible. I can see new hair growth and my confidence is back. Dr. Jaishree is truly a miracle worker.",
    name: "Rahul K.",
    treatment: "PRP Hair Therapy",
    rating: 5,
    category: "patient"
  },
  {
    id: 10,
    quote: "Dr. Jaishree's chemical peel treatment was exactly what my pigmented skin needed. The results are beyond my expectations.",
    name: "Meera P.",
    treatment: "Chemical Peels",
    rating: 5,
    category: "patient"
  },
  {
    id: 11,
    quote: "Her dermal filler treatment for my lips was perfect - natural, not overdone, and exactly what I wanted. Dr. Jaishree really listens to her patients.",
    name: "Sonia R.",
    treatment: "Dermal Fillers",
    rating: 5,
    category: "patient"
  },
  {
    id: 12,
    quote: "The bridal package was worth every penny. My skin was glowing on my wedding day, and the team made me feel like a princess throughout the process.",
    name: "Aisha M.",
    treatment: "Bridal Package",
    rating: 5,
    category: "patient"
  },
  {
    id: 13,
    quote: "Dr. Jaishree's thread lift procedure gave me the perfect lift without any surgery. I look 10 years younger and feel amazing.",
    name: "Kavita D.",
    treatment: "Thread Lifts",
    rating: 5,
    category: "patient"
  },
  {
    id: 14,
    quote: "After years of dealing with melasma, Dr. Jaishree's pigmentation treatment finally gave me clear, even skin. I'm so grateful for her expertise.",
    name: "Neha S.",
    treatment: "Pigmentation Treatment",
    rating: 5,
    category: "patient"
  },
  {
    id: 15,
    quote: "The microdermabrasion treatment was so gentle yet effective. My skin texture improved dramatically, and the glow is incredible.",
    name: "Pooja K.",
    treatment: "Microdermabrasion",
    rating: 5,
    category: "patient"
  },
  {
    id: 16,
    quote: "Dr. Jaishree's neck bands treatment was a game-changer. I no longer feel self-conscious about my neck, and the results are so natural.",
    name: "Rekha M.",
    treatment: "Neck Bands Treatment",
    rating: 5,
    category: "patient"
  }
];

const stats = [
  { number: "5.0", label: "Average Rating", icon: Star },
  { number: "10,000+", label: "Happy Patients", icon: Users },
  { number: "20+", label: "Years Experience", icon: Award },
  { number: "99%", label: "Satisfaction Rate", icon: Heart }
];

export default function TestimonialsPage() {
  const allTestimonials = [...celebrityTestimonials, ...patientTestimonials];

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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                {/* Celebrity 1 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xs font-bold">SS</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Shamita</span>
                    </div>
                  </div>
                </div>
                
                {/* Celebrity 2 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xs font-bold">HQ</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Huma</span>
                    </div>
                  </div>
                </div>
                
                {/* Celebrity 3 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xs font-bold">AK</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Annu</span>
                    </div>
                  </div>
                </div>
                
                {/* Celebrity 4 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xs font-bold">HK</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Harsh</span>
                    </div>
                  </div>
                </div>
                
                {/* Celebrity 5 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xs font-bold">AS</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Athiya</span>
                    </div>
                  </div>
                </div>
                
                {/* Celebrity 6 */}
                <div className="aspect-square bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xs font-bold">AD</span>
                      </div>
                      <span className="text-gray-500 text-xs font-medium">Amyra</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
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
      <section className="py-16 bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Testimonial
              </h2>
              <p className="text-xl text-gray-600">
                A special story from one of our celebrity clients
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pastel-pink to-pastel-green rounded-full flex items-center justify-center">
                    <Quote className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <blockquote className="text-2xl md:text-3xl text-gray-800 italic leading-relaxed font-medium">
                  "Dr. Jaishree is not just a dermatologist; she's an artist who understands the science of beauty. Her treatments are so natural that people always compliment my skin but can never tell I've had work done. She's the secret behind many red carpet looks in Bollywood."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div>
                  <div className="font-semibold text-xl text-gray-800">Bollywood Actor</div>
                  <div className="text-pastel-pink font-medium">Celebrity Client</div>
                  <div className="text-sm text-gray-600 mt-2">Trusted Dr. Jaishree for over 5 years</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Celebrity Testimonials */}
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
                Celebrity Testimonials
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by Bollywood and business elites
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {celebrityTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pastel-pink to-pastel-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="font-semibold text-gray-800">{testimonial.name}</div>
                        <div className="text-sm text-pastel-pink">{testimonial.treatment}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patient Testimonials */}
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
                Patient Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real experiences from our valued patients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patientTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-pastel-pink">{testimonial.treatment}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
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

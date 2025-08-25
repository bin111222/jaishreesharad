"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Play, Mic, Newspaper, Tv, Instagram, Youtube } from "lucide-react";

const mediaCoverage = [
  // 2025 Highlights
  {
    year: "2025",
    items: [
      {
        title: "NDTV - Daily-use products that cause hyperpigmentation",
        outlet: "NDTV",
        type: "TV Interview",
        date: "April 7, 2025",
        description: "Expert commentary on common products that can cause skin pigmentation issues",
        icon: Tv,
        link: "#"
      },
      {
        title: "Free Press Journal - Risks of unregulated anti-ageing injections",
        outlet: "Free Press Journal",
        type: "News Article",
        date: "June 30, 2025",
        description: "Important safety information about unregulated cosmetic procedures",
        icon: Newspaper,
        link: "#"
      }
    ]
  },
  // 2024 Highlights
  {
    year: "2024",
    items: [
      {
        title: "Unstoppable Women with Shailja Podcast",
        outlet: "Spotify",
        type: "Podcast",
        date: "September 26, 2024",
        description: "From Challenges to Champion: Dr. Jaishree Sharad's Inspiring Story - Personal journey from growing up in a middle-class family to becoming a prominent figure in dermatology",
        icon: Mic,
        link: "#"
      },
      {
        title: "Meet Our Sheroes - India's Leading Celebrity Cosmetic Dermatologist",
        outlet: "Meet Our Sheroes Blog",
        type: "Profile Feature",
        date: "December 17, 2024",
        description: "Comprehensive profile celebrating Dr. Jaishree's career and pioneering efforts in cosmetic procedures",
        icon: Newspaper,
        link: "#"
      },
      {
        title: "Tira Beauty - Instagram's viral skincare ingredients",
        outlet: "Tira Beauty",
        type: "Expert Article",
        date: "September 5, 2024",
        description: "Scientific take on trending ingredients - which are effective and which are overhyped",
        icon: Newspaper,
        link: "#"
      },
      {
        title: "Grazia India - Decodes Skincare Myths And Facts",
        outlet: "Grazia India",
        type: "Magazine Feature",
        date: "April 1, 2024",
        description: "Addressing the overload of skincare information online and setting the record straight",
        icon: Newspaper,
        link: "#"
      },
      {
        title: "ELLE Impact 2025 - Social media awareness panel",
        outlet: "ELLE India",
        type: "Conference Speaker",
        date: "2024",
        description: "Addressing stigma of cosmetic procedures and ageism in the beauty industry",
        icon: Tv,
        link: "#"
      }
    ]
  },
  // 2023 Highlights
  {
    year: "2023",
    items: [
      {
        title: "The Skincare Answer Book Launch",
        outlet: "Multiple Outlets",
        type: "Book Launch Event",
        date: "April 28, 2023",
        description: "Book launch with Ranbir Kapoor and Neetu Kapoor, hailed as a 'beauty bible'",
        icon: Newspaper,
        link: "#"
      },
      {
        title: "NDTV - Holi 2023: Skincare And Diet Tips",
        outlet: "NDTV",
        type: "TV Interview",
        date: "March 8, 2023",
        description: "Tips to protect skin and hair during Holi festival with nutritionist collaboration",
        icon: Tv,
        link: "#"
      },
      {
        title: "Tira Beauty - Baby skincare products guide",
        outlet: "Tira Beauty",
        type: "Expert Article",
        date: "February 14, 2023",
        description: "Comprehensive guide on safe baby skincare products and ingredients to avoid",
        icon: Newspaper,
        link: "#"
      },
      {
        title: "NDTV Swirlster - Exosome Therapy trend",
        outlet: "NDTV",
        type: "TV Interview",
        date: "June 2023",
        description: "Expert commentary on emerging exosome therapy trend and its effectiveness",
        icon: Tv,
        link: "#"
      }
    ]
  },
  // 2022 Highlights
  {
    year: "2022",
    items: [
      {
        title: "NDTV Swirlster - Vampire Facial skincare trend",
        outlet: "NDTV",
        type: "TV Interview",
        date: "November 2022",
        description: "Explaining PRP facial benefits and emphasizing the importance of qualified doctors",
        icon: Tv,
        link: "#"
      },
      {
        title: "Femina India Instagram Live",
        outlet: "Femina",
        type: "Instagram Live",
        date: "December 8, 2022",
        description: "Celebrity dermatologist talks about her beauty regimen and skincare tips",
        icon: Instagram,
        link: "#"
      },
      {
        title: "Second Opinion with Dr. Yuvraj Podcast",
        outlet: "YouTube",
        type: "Podcast",
        date: "October 2022",
        description: "Busting biggest skincare myths about acne, Botox, and fillers",
        icon: Youtube,
        link: "#"
      }
    ]
  }
];

const socialMediaPresence = [
  {
    platform: "Instagram",
    handle: "@drjaishreesharad",
    followers: "100K+",
    content: "Daily Q&As, myth-busting reels, educational content",
    icon: Instagram
  },
  {
    platform: "YouTube",
    handle: "Dr. Jaishree Sharad",
    followers: "50K+",
    content: "Educational videos, webinar recordings, skincare tutorials",
    icon: Youtube
  },
  {
    platform: "Twitter/X",
    handle: "@JaishreeSharad",
    followers: "25K+",
    content: "Quick tips, conference updates, industry insights",
    icon: ExternalLink
  }
];

export default function MediaPage() {
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
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
              Media Coverage & Press
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jaishree Sharad's expertise has been featured across leading media outlets, 
              from television interviews to magazine features, podcasts, and social media. 
              Her commitment to educating the public about skincare has made her a trusted voice in the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Presence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Social Media Presence
            </h2>
            <p className="text-lg text-gray-600">
              Follow Dr. Jaishree for daily skincare tips and educational content
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMediaPresence.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {platform.platform}
                </h3>
                <p className="text-pastel-pink font-medium mb-2">{platform.handle}</p>
                <p className="text-sm text-gray-600 mb-3">{platform.followers} followers</p>
                <p className="text-sm text-gray-500">{platform.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage by Year */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Media Coverage (2022-2025)
            </h2>
            <p className="text-lg text-gray-600">
              Featured appearances across television, print, digital media, and podcasts
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {mediaCoverage.map((yearGroup, yearIndex) => (
              <motion.div
                key={yearGroup.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: yearIndex * 0.2 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">
                    {yearGroup.year}
                  </h3>
                  <div className="w-24 h-1 bg-pastel-pink mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {yearGroup.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-pastel-green/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-pastel-green" />
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-sm font-medium text-pastel-pink">
                          {item.outlet}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {item.type}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {item.type}
                        </span>
                        <button className="text-pastel-pink hover:text-pastel-pink/80 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Media Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Key Media Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Notable appearances and recognition in leading publications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Official Skin Expert",
                outlet: "Femina Magazine",
                description: "Regular skincare columnist and go-to expert"
              },
              {
                title: "Celebrity Skin Expert",
                outlet: "NDTV Good Times",
                description: "Featured on 'Band Baajaa Bride' and lifestyle programs"
              },
              {
                title: "TEDx Speaker",
                outlet: "TEDx",
                description: "Delivered popular TEDx talk on skincare"
              },
              {
                title: "Author & Educator",
                outlet: "Penguin Random House",
                description: "Three bestselling books on skincare"
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-pastel-pink font-medium mb-2">
                  {highlight.outlet}
                </p>
                <p className="text-sm text-gray-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

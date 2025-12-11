"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Play, Mic, Newspaper, Tv, Instagram, Youtube } from "lucide-react";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import Image from "next/image";

const mediaCoverage = [
  // 2025 Highlights
  {
    year: "2025",
    items: [
      {
        title: "NDTV Health — Dermatologist busts the myth of natural sugars being good for skin",
        outlet: "NDTV Health",
        type: "News Article",
        date: "January 27, 2025",
        description: "Dr. Jaishree explains why ‘natural’ sugars can still age the skin and trigger breakouts.",
        icon: Newspaper,
        link: "https://www.ndtv.com/health/dermatologist-busts-the-myth-of-natural-sugars-being-good-for-skin-7569441"
      },
     
      {
        title: "ELLE Impact 2025 — How women are shaping what the future looks like (panel)",
        outlet: "ELLE India",
        type: "Conference Speaker",
        date: "March 28, 2025",
        description: "Panelist discussing evidence-based skincare and inside-out beauty trends.",
        icon: Tv,
        link: "https://elle.in/fashion/trailblazers-changemakers-and-visionaries-what-went-down-at-elle-impact-8899138"
      },
      {
        title: "Tira Beauty — What Dr. Jaishree Sharad actually does to look younger",
        outlet: "Tira Beauty",
        type: "Expert Article",
        date: "June 19, 2025",
        description: "Her personal routine, trusted ingredients, and pragmatic anti-ageing philosophy.",
        icon: Newspaper,
        link: "https://www.tirabeauty.com/article/articles/dr-jaishree-sharad-shares-what-she-actually-does-to-look-younger"
      },
      {
        title: "Hindustan Times — Chewing gum gives you a sharper jawline? Dermat calls it a myth and shares what actually works",
        outlet: "Hindustan Times",
        type: "News Article",
        date: "August 29, 2025",
        description: "Dr. Jaishree Sharad debunks the chewing gum jawline myth and reveals that gargling can actually help tone facial muscles.",
        icon: Newspaper,
        link: "https://www.hindustantimes.com/lifestyle/health/chewing-gum-gives-you-a-sharper-jawline-dermat-calls-it-a-myth-and-shares-what-actually-works-101756457127176.html"
      },
      {
        title: "Vogue India — Is 'lazy luxe' a skinimalism reset or just another beauty trend in 2025?",
        outlet: "Vogue India",
        type: "Magazine Feature",
        date: "September 5, 2025",
        description: "Dr. Jaishree discusses the rise of skinimalism and the shift from extensive skincare routines to mindful, condensed beauty rituals.",
        icon: Newspaper,
        link: "https://www.vogue.in/content/is-lazy-luxe-a-skinimalism-reset-or-just-another-beauty-trend-in-2025"
      }
    ]
  },

  // 2024 Highlights
  {
    year: "2024",
    items: [
      {
        title: "NDTV Health — Bring on the party glow: try this 4-step skincare",
        outlet: "NDTV Health",
        type: "News Article",
        date: "December 16, 2024",
        description: "Dermatologist-backed routine to get quick, safe radiance for events.",
        icon: Newspaper,
        link: "https://www.ndtv.com/health/how-to-get-glowing-skin-before-a-party-cosmetologists-4-step-skincare-process-revealed-7258888"
      },
      {
        title: "Grazia India — Dr. Jaishree Sharad decodes skincare myths and facts",
        outlet: "Grazia India",
        type: "Magazine Feature",
        date: "April 1, 2024",
        description: "Cuts through misinformation with clear, research-led guidance.",
        icon: Newspaper,
        link: "https://www.grazia.co.in/beauty/celeb-dermat-dr-jaishree-sharad-decodes-skincare-myths-and-facts-12334.html"
      },
      {
        title: "HealthShots — Has your cooling mask become a heatwave essential? Experts weigh in",
        outlet: "HealthShots",
        type: "Expert Quote",
        date: "May 1, 2024",
        description: "What cooling masks can and can’t do in sweltering weather.",
        icon: Newspaper,
        link: "https://www.healthshots.com/beauty/natural-cures/heatwave-in-india-diy-cooling-face-masks-to-beat-the-heat/"
      }
    ]
  },

  // 2023 Highlights
  {
    year: "2023",
    items: [
      {
        title: "NDTV Health — Holi 2023: Skincare and diet tips for a happy, healthy Holi",
        outlet: "NDTV Health",
        type: "News Article",
        date: "March 8, 2023",
        description: "Festival-safe skin & hair care tips with dermatologist-nutritionist guidance.",
        icon: Newspaper,
        link: "https://www.ndtv.com/health/holi-2023-follow-these-skincare-and-diet-tips-for-a-happy-and-healthy-holi-3843173"
      },
      {
        title: "NDTV Swirlster — Vampire Facial: benefits and how-to (video interview)",
        outlet: "NDTV Swirlster",
        type: "TV/Video Interview",
        date: "February 23, 2023",
        description: "Pros, cons, and safety of PRP facials with a step-by-step demo.",
        icon: Tv,
        link: "https://www.ndtv.com/video/celebrity-dermatologist-dr-jaishree-sharad-on-the-popular-vampire-facial-skincare-trend-684167"
      },
      
      {
        title: "Lifestyle Asia — How to build a minimal skincare routine (interview)",
        outlet: "Lifestyle Asia India",
        type: "Interview",
        date: "May 1, 2023",
        description: "Practical, minimal routines that still deliver results.",
        icon: Newspaper,
        link: "https://www.lifestyleasia.com/ind/beauty-grooming/dr-jaishree-sharad/"
      },
      {
        title: "Times of India — Not too late to turn beautiful: why skin thinning causes wrinkles",
        outlet: "The Times of India",
        type: "News Article",
        date: "December 17, 2023",
        description: "Explainer on age-related skin thinning and prevention pointers.",
        icon: Newspaper,
        link: "https://timesofindia.indiatimes.com/life-style/beauty/dont-wait-till-you-get-wrinkles-heres-when-you-should-start-your-anti-ageing-treatment/articleshow/85269671.cms"
      },
      {
        title: "Penguin — The Skincare Answer Book (book launch & coverage)",
        outlet: "Penguin Random House India",
        type: "Book Launch",
        date: "March 2023",
        description: "Her bestselling Q&A guide to skincare; widely covered across media.",
        icon: Newspaper,
        link: "https://www.penguin.co.in/book/the-skincare-answer-book/"
      }
    ]
  },

  // 2022 Highlights
  {
    year: "2018-2022",
    items: [
      {
        title: "Vogue India — What really causes cellulite? Dermatologists explain",
        outlet: "Vogue India",
        type: "Magazine Feature",
        date: "December 5, 2022",
        description: "Evidence-based take on cellulite causes and realistic treatments.",
        icon: Newspaper,
        link: "https://www.vogue.in/beauty/content/experts-weigh-in-on-whether-you-can-really-get-rid-of-cellulite"
      },
      {
        title: "Doctor NDTV — For Holi, follow these skincare tips by Dr. Jaishree Sharad",
        outlet: "Doctor NDTV",
        type: "News Article",
        date: "March 18, 2022",
        description: "Pre- and post-Holi routines; what to avoid and what actually helps.",
        icon: Newspaper,
        link: "https://doctor.ndtv.com/living-healthy/for-holi-follow-these-skincare-tips-by-dr-jaishree-sharad-2828555"
      },
      {
        title: "NDTV Health — Hyperpigmentation on the forehead: causes & solutions",
        outlet: "NDTV Health",
        type: "News Article",
        date: "January 12, 2022",
        description: "Common triggers like sun exposure, friction, and product allergies.",
        icon: Newspaper,
        link: "https://www.ndtv.com/health/hyperpigmentation-on-the-forehead-know-the-causes-and-the-solution-2703124"
      },
      {
        title: "Femina India — Instagram Live: celebrity dermatologist on beauty regimen",
        outlet: "Femina",
        type: "Instagram Live",
        date: "December 8, 2022",
        description: "Candid chat on daily routines and practical skincare tips.",
        icon: Instagram,
        link: "https://www.instagram.com/reel/Cl6GuvLJ-zj/"
      },
      {
        title: "Times of India — Delay ageing with cosmetic procedures",
        outlet: "Times of India",
        type: "Feature Article",
        date: "March 2021",
        description: "Explains how minimally invasive procedures can postpone visible signs of ageing.",
        icon: Newspaper,
        link: "https://timesofindia.indiatimes.com/blogs/voices/delay-aging-with-cosmetic-procedures/"
      },
      {
        title: "Vogue India — 15 skincare myths this celebrity dermatologist wants you to stop believing",
        outlet: "Vogue India",
        type: "Magazine Feature",
        date: "January 2021",
        description: "Covers popular myths vs. facts in daily skincare routines.",
        icon: Newspaper,
        link: "https://www.vogue.in/content/15-skincare-myths-this-celebrity-dermatologist-wants-you-to-stop-believing"
      },
      {
        title: "ZeeZest — Skincare routine for dry and pigmented skin",
        outlet: "ZeeZest",
        type: "Expert Article",
        date: "November 2020",
        description: "Offers practical routines for common Indian skin concerns.",
        icon: Newspaper,
        link: "https://zeezest.com/style-beauty/celebrity-dermatologist-dr-jaishree-sharad-s-skincare-routine-for-dry-and-pigmented-skin-4030"
      },
     
      {
        title: "HerZindagi — 8 Skincare essentials by Dr. Jaishree Sharad",
        outlet: "HerZindagi",
        type: "Beauty Feature",
        date: "2020",
        description: "Essential home products for Indian skin.",
        icon: Newspaper,
        link: "https://www.herzindagi.com/beauty/skincare-secrets-celebrities-flawless-glowing-skin-celebrity-dermatologist-article-224013"
      },
      {
        title: "Brides Today — An expert-approved AM to PM skincare routine",
        outlet: "Brides Today",
        type: "Feature",
        date: "2019",
        description: "Simple yet effective daily routine endorsed by Dr. Sharad.",
        icon: Newspaper,
        link: "https://www.bridestoday.in/beauty-grooming/story/an-expert-approved-am-to-pm-skincare-routine-for-glowing-skin-575937-2020-05-25"
      },
      {
        title: "Grazia India — The A to Z of Skincare: Cutting through the clutter",
        outlet: "Grazia",
        type: "Feature Article",
        date: "2019",
        description: "Her professional breakdown of complex skincare marketing jargon.",
        icon: Newspaper,
        link: "https://www.grazia.co.in/beauty-and-health/a-to-z-of-skincare-an-expert-shares-how-to-cut-through-the-skincare-noise-10952.html"
      },
      {
        title: "NDTV Health — For Holi, follow these skincare tips",
        outlet: "NDTV Health",
        type: "Festival Feature",
        date: "March 18, 2019",
        description: "Skin-safe ways to celebrate Holi without long-term damage.",
        icon: Newspaper,
        link: "https://doctor.ndtv.com/living-healthy/for-holi-follow-these-skincare-tips-by-dr-jaishree-sharad-2828555"
      },
      {
        title: "Vogue India — Teenage skincare routines: what’s really needed",
        outlet: "Vogue India",
        type: "Expert Article",
        date: "2019",
        description: "Advises teens on safe product use, acne care, and minimalism.",
        icon: Newspaper,
        link: "https://www.vogue.in/content/a-dermatologist-recommends-what-your-teenage-skincare-routine-should-really-look-like"
      }
      
    ]
  }
];



const socialMediaPresence = [
  {
    platform: "Instagram",
    handle: "@drjaishreesharad",
    followers: "230K+",
    content: "Daily Q&As, myth-busting reels, educational content",
    icon: Instagram,
    link: "https://www.instagram.com/drjaishreesharad/"
  },
  {
    platform: "YouTube",
    handle: "Dr. Jaishree Sharad",
    followers: "50K+",
    content: "Educational videos, webinar recordings, skincare tutorials",
    icon: Youtube,
    link: "https://www.youtube.com/@drjaishreesharadskin"
  }
];

const featuredVideos = [
  {
    id: 1,
    title: "Masoom Minawala - Why Your Pigmentation Never Goes Away",
    description: "Watch Dr. Jaishree's latest insights and expertise",
    thumbnail: "https://img.youtube.com/vi/CIMz59wF4Mk/maxresdefault.jpg",
    videoId: "CIMz59wF4Mk",
    category: "Featured",
    duration: "1:00:00"
  },
  {
    id: 2,
    title: "Figuring Out Podcast – Skin Care Secrets, Fillers, Botox, Acne & Sunscreen",
    description: "Comprehensive discussion on popular treatments",
    thumbnail: "https://img.youtube.com/vi/g93IhHW600U/maxresdefault.jpg",
    videoId: "g93IhHW600U",
    category: "Podcast",
    duration: "45:20"
  },
  {
    id: 3,
    title: "Dr. Jaishree Sharad - Expert Insights",
    description: "Watch Dr. Jaishree's expert insights and expertise",
    thumbnail: "https://img.youtube.com/vi/SUVB4uTtP1Q/maxresdefault.jpg",
    videoId: "SUVB4uTtP1Q",
    category: "Featured",
    duration: "0:00"
  },
  {
    id: 4,
    title: "Stop Wasting Money on Skincare! Do THIS Instead",
    description: "Expert advice on smart skincare spending",
    thumbnail: "https://img.youtube.com/vi/iVmnobqE3G8/maxresdefault.jpg",
    videoId: "iVmnobqE3G8",
    category: "Skincare Tips",
    duration: "8:45"
  },
  {
    id: 5,
    title: "The Changing Paradigms of Skincare in India",
    description: "Dr. Jaishree discusses evolving skincare trends",
    thumbnail: "https://img.youtube.com/vi/Xj5VJNHrSCc/maxresdefault.jpg",
    videoId: "Xj5VJNHrSCc",
    category: "Expert Talk",
    duration: "12:30"
  },
  {
    id: 6,
    title: "TEDx – The Mind–Skin Connection: Healing from Within",
    description: "Groundbreaking TEDx talk on mind-skin relationship",
    thumbnail: "https://img.youtube.com/vi/1BCr1LNA10U/maxresdefault.jpg",
    videoId: "1BCr1LNA10U",
    category: "TEDx Talk",
    duration: "18:22"
  },
  {
    id: 7,
    title: "Don't Do This With Your Skin!",
    description: "Common skincare mistakes to avoid",
    thumbnail: "https://img.youtube.com/vi/SMaSfrrBGc8/maxresdefault.jpg",
    videoId: "SMaSfrrBGc8",
    category: "What's Your Mantra?",
    duration: "6:15"
  },
  {
    id: 8,
    title: "Bollywood Celebrity Skin Care Secrets",
    description: "Exclusive insights into celebrity skincare routines",
    thumbnail: "https://img.youtube.com/vi/DCofgfHdBUI/maxresdefault.jpg",
    videoId: "DCofgfHdBUI",
    category: "Celebrity Secrets",
    duration: "10:45"
  },
  {
    id: 9,
    title: "Skincare का सबसे बड़ा SCAM | Chehre Ke Daag Dhabbe | Dr. Jaishree",
    description: "Biggest scams in skincare and how to avoid them",
    thumbnail: "https://img.youtube.com/vi/-nLWeu2K0lE/maxresdefault.jpg",
    videoId: "-nLWeu2K0lE",
    category: "Expert Talk",
    duration: "19:09"
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
            transition={{ duration: 0.2 }}
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

      {/* Media Appearances Gallery */}
      <ImageAutoSlider />

      {/* Key Media Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
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
                description: "Regular skincare columnist and go-to expert",
                image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/femina.webp",
                link: "https://www.femina.in/beauty/skin"
              },
              {
                title: "Celebrity Skin Expert",
                outlet: "NDTV Good Times",
                description: "Featured on 'Band Baajaa Bride' and lifestyle programs",
                image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/ndtv.webp",
                link: "https://www.primevideo.com/detail/Band-Baajaa-Bride/0TVOI2DU2U24U8XBSN4CW84WPX"
              },
              {
                title: "TEDx Speaker",
                outlet: "TEDx",
                description: "Delivered popular TEDx talk on skincare",
                image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/tedx.webp",
                link: "https://www.youtube.com/watch?v=1BCr1LNA10U"
              },
              {
                title: "Author & Educator",
                outlet: "Penguin Random House",
                description: "Four bestselling books on skincare",
                image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/penguin.webp",
                link: "https://www.penguin.co.in/book_author/dr-jaishree-sharad/"
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src={highlight.image}
                    alt={highlight.outlet}
                    className="w-14 h-14 object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{highlight.outlet.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-pastel-pink font-medium mb-2">
                  {highlight.outlet}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {highlight.description}
                </p>
                <a
                  href={highlight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-pastel-pink text-white text-sm font-medium rounded-lg hover:bg-pastel-pink/90 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Link
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Presence */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-2xl font-bold text-gray-800 mb-2">
              Social Media Presence
            </h2>
            <p className="text-sm text-gray-600">
              Follow Dr. Jaishree for daily skincare tips and educational content
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {socialMediaPresence.map((platform, index) => (
              <motion.a
                key={platform.platform}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-pastel-pink/30 flex-1 max-w-xs"
              >
                {/* Platform-specific gradient overlay */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  platform.platform === 'Instagram' 
                    ? 'bg-gradient-to-br from-purple-400 via-pink-100 to-orange-500' 
                    : 'bg-gradient-to-br from-red-500 to-red-600'
                }`}></div>
                
                <div className="relative z-10 flex items-center space-x-3">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    platform.platform === 'Instagram' 
                      ? 'bg-gradient-to-br from-purple-400 via-pink-100 to-orange-500' 
                      : 'bg-gradient-to-br from-red-500 to-red-600'
                  }`}>
                    <platform.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-sm text-gray-800 group-hover:text-white transition-colors duration-300">
                      {platform.platform}
                    </h3>
                    <p className="text-xs text-pastel-pink font-medium group-hover:text-white/90 transition-colors duration-300">
                      {platform.handle}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                      {platform.followers} • {platform.content.split(',')[0]}
                    </p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.a>
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
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Selected Media Coverage (2018-2025)
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
                transition={{ duration: 0.4, delay: yearIndex * 0.2 }}
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
                      transition={{ duration: 0.2, delay: itemIndex * 0.1 }}
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
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pastel-pink hover:text-pastel-pink/80 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Featured Videos
              </h2>
              <p className="text-xl text-gray-600">
                Watch Dr. Jaishree's expert insights on TEDx, podcasts, and media features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <Play className="w-8 h-8 text-white ml-1 drop-shadow-lg" />
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                        {video.duration}
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-pastel-pink text-white px-3 py-1 rounded-full text-xs font-medium">
                          {video.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold text-gray-800 mb-2 group-hover:text-pastel-pink transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}

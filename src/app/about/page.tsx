"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Award, GraduationCap, Users, BookOpen, Play, Star, Building2, UserCheck, Edit3, Target, Trophy, Medal, Zap, Microscope, Crown } from "lucide-react";
import Link from "next/link";
import AwardsSection from "@/components/AwardsSection";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

const credentials = [
  {
    title: "MBBS, DDV",
    institution: "Mahatma Gandhi Institute of Medical Sciences, Sevagram",
    year: "1990-1995",
    note: "MCI Registration: 79805"
  },
  {
    title: "Residency in General Medicine",
    institution: "Dr. Balabhai Nanavati Hospital & Medical Research Centre, Mumbai",
    year: "1996-1997"
  },
  {
    title: "Postgraduate Diploma in Dermatology (DDV)",
    institution: "Dr. Balabhai Nanavati Hospital & Medical Research Centre, Mumbai",
    year: "1997-1999"
  },
  {
    title: "Fellowship in Lasers",
    institution: "Ramathibodi University, Bangkok",
    year: "2004"
  },
  {
    title: "Fellowship in Cosmetic Dermatology",
    institution: "Baumann Institute, Miami, USA",
    year: "2011"
  }
];

const currentPositions = [
  {
    title: "Director",
    organization: "Skinfinitii Aesthetic Skin & Laser Center, Mumbai",
    type: "Current",
    icon: Building2,
    iconColor: "bg-pastel-pink",
    iconBg: "text-white"
  },
  {
    title: "International Mentor",
    organization: "International Mentorship Program - American Society for Dermatologic Surgery (ASDS)",
    type: "Current",
    icon: UserCheck,
    iconColor: "bg-pastel-green",
    iconBg: "text-gray-800"
  },
  {
    title: "Associate Editor",
    organization: "Journal of Cosmetic Dermatology",
    type: "Current",
    icon: Edit3,
    iconColor: "bg-blue-500",
    iconBg: "text-white"
  },
  {
    title: "Task Force Member",
    organization: "European Society of Cosmetic and Aesthetic Dermatology (ESCAD)",
    type: "Current",
    icon: Target,
    iconColor: "bg-purple-500",
    iconBg: "text-white"
  }
];

const books = [
  {
    title: "The Skincare Answer Book",
    publisher: "Penguin, India",
    year: "April 2023",
    coverImage: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/books/skincareanswerbook.webp",
    alt: "The Skincare Answer Book Cover"
  },
  {
    title: "Skin Rules",
    publisher: "Penguin Random House",
    year: "2018",
    note: "Award-winning bestseller",
    coverImage: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/books/skinrules.webp",
    alt: "Skin Rules Book Cover"
  },
  {
    title: "Skin Talks",
    publisher: "Penguin",
    year: "2015",
    note: "Bestseller",
    coverImage: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/books/skintalks.webp",
    alt: "Skin Talks Book Cover"
  },
  {
    title: "Aesthetic Dermatology, Current perspectives",
    publisher: "Jaypee Brothers Medical Publishers",
    year: "2018",
    note: "Editor in Chief",
    coverImage: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/books/aestheticdermatology.webp",
    alt: "Aesthetic Dermatology Book Cover"
  }
];

const tedxTalks = [
  {
    title: "TEDx IIIT Bangalore",
    date: "September 10, 2022",
    location: "Bangalore",
    videoTitle: "The Changing Paradigms of Skincare in India",
    videoId: "Xj5VJNHrSCc",
    thumbnail: "https://img.youtube.com/vi/Xj5VJNHrSCc/maxresdefault.jpg",
    link: "https://youtu.be/Xj5VJNHrSCc?si=tNFTdAdkLsxwBGtY"
  },
  {
    title: "TEDx JMC, New Delhi",
    date: "April 8, 2023",
    location: "New Delhi",
    videoTitle: "Unfolding the Layers of Expectations",
    videoId: "EM2iRMT19GA", // Keeping this as it was confirmed earlier
    thumbnail: "https://img.youtube.com/vi/EM2iRMT19GA/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=EM2iRMT19GA"
  },
  {
    title: "TEDx Rajdhani College, University of Delhi",
    date: "February 7, 2025",
    location: "Delhi",
    videoTitle: "Embracing Authentic Beauty",
    videoId: "1BCr1LNA10U",
    thumbnail: "https://img.youtube.com/vi/1BCr1LNA10U/maxresdefault.jpg",
    link: "https://youtu.be/1BCr1LNA10U?si=p5bk0tgiCHgM6pMP"
  }
];

const academicHonors = [
  {
    title: "Rising Star Award",
    organization: "World Congress of Dermatology, Vancouver",
    year: "2015",
    description: "Received at two scientific sessions",
    icon: Star,
    iconColor: "bg-yellow-400",
    iconBg: "text-white"
  },
  {
    title: "Scholarship Awardee",
    organization: "Winter Academy of Dermatology, St. Moritz, Switzerland",
    year: "2010",
    description: "For research paper on microneedling in acne scars",
    icon: GraduationCap,
    iconColor: "bg-blue-500",
    iconBg: "text-white"
  },
  {
    title: "Dr. C.K. Jagavkar Award",
    organization: "Annual Conference of IADVL Maharashtra",
    year: "2001",
    description: "Best paper presentation on radiofrequency surgery by a practicing dermatologist",
    icon: Trophy,
    iconColor: "bg-pastel-pink",
    iconBg: "text-white"
  },
  {
    title: "Best Scientific Paper Award",
    organization: "Biennial Conference of the Association of Cutaneous Surgeons of India (ACSI)",
    year: "2006",
    description: "For non-ablative skin tightening at the award session",
    icon: Microscope,
    iconColor: "bg-green-500",
    iconBg: "text-white"
  },
  {
    title: "Pioneer in India",
    organization: "Aesthetic Dermatology",
    year: "2000s",
    description: "Among the first to introduce Radiofrequency Skin Tightening and Microneedling",
    icon: Crown,
    iconColor: "bg-purple-500",
    iconBg: "text-white"
  }
];


const memberships = [
  {
    name: "American Academy of Dermatology",
    number: "#354519",
    fullForm: "AAD"
  },
  {
    name: "American Society for Dermatologic Surgery",
    number: "#54847",
    fullForm: "ASDS"
  },
  {
    name: "International Society of Dermatologic Surgery",
    number: "#ISDS 36892",
    fullForm: "ISDS"
  },
  {
    name: "International Society of Dermatology",
    number: "#31805",
    fullForm: "ISD"
  },
  {
    name: "International Peeling Society",
    number: "#250",
    fullForm: "IPS"
  },
  {
    name: "Women's Dermatology Society",
    number: "",
    fullForm: "WDS"
  },
  {
    name: "Indian Association of Dermatology, Venereology, Leprology",
    number: "LM / M / 4226",
    fullForm: "IADVL"
  },
  {
    name: "Association of Cutaneous Surgeons of India",
    number: "MH/ACSI/403",
    fullForm: "ACSI"
  },
  {
    name: "Cosmetic Dermatology Society of India",
    number: "SJ-8",
    fullForm: "CDSI"
  }
];

const editorialBoard = [
  "Journal of Cutaneous and Aesthetic Surgery",
  "Dermatologic Therapy",
  "Annals of Dermatology",
  "Journal of Applied Cosmetology"
];

const pastPositions = [
  {
    title: "Board of Director",
    organization: "International Society of Dermatologic Surgery",
    period: "2017-2022"
  },
  {
    title: "Executive board director",
    organization: "European Society of Cosmetic and Aesthetic Dermatology",
    period: "2009-2013"
  },
  {
    title: "Secretary General",
    organization: "Cosmetic Dermatology Society of India",
    period: "2007-March 2011"
  },
  {
    title: "Vice President",
    organization: "Cosmetic Dermatology Society of India",
    period: "April 2011-March 2018"
  },
  {
    title: "Joint Secretary",
    organization: "Association of Cutaneous Surgeons (India)",
    period: "2021-2023"
  }
];


const mediaHighlights = [
  {
    title: "Vogue India — Is 'lazy luxe' a skinimalism reset or just another beauty trend in 2025?",
    outlet: "Vogue India",
    type: "Magazine Feature",
    date: "September 5, 2025",
    link: "https://www.vogue.in/content/is-lazy-luxe-a-skinimalism-reset-or-just-another-beauty-trend-in-2025"
  },
  {
    title: "Hindustan Times — Chewing gum gives you a sharper jawline? Dermat calls it a myth and shares what actually works",
    outlet: "Hindustan Times",
    type: "News Article",
    date: "August 29, 2025",
    link: "https://www.hindustantimes.com/lifestyle/health/chewing-gum-gives-you-a-sharper-jawline-dermat-calls-it-a-myth-and-shares-what-actually-works-101756457127176.html"
  },
  {
    title: "NDTV Health — Dermatologist busts the myth of natural sugars being good for skin",
    outlet: "NDTV Health",
    type: "News Article",
    date: "January 27, 2025",
    link: "https://www.ndtv.com/health/dermatologist-busts-the-myth-of-natural-sugars-being-good-for-skin-7569441"
  },
  {
    title: "ELLE Impact 2025 — How women are shaping what the future looks like (panel)",
    outlet: "ELLE India",
    type: "Conference Speaker",
    date: "March 28, 2025",
    link: "https://elle.in/fashion/trailblazers-changemakers-and-visionaries-what-went-down-at-elle-impact-8899138"
  },
  {
    title: "Tira Beauty — What Dr. Jaishree Sharad actually does to look younger",
    outlet: "Tira Beauty",
    type: "Expert Article",
    date: "June 19, 2025",
    link: "https://www.tirabeauty.com/article/articles/dr-jaishree-sharad-shares-what-she-actually-does-to-look-younger"
  },
  {
    title: "NDTV Health — Bring on the party glow: try this 4-step skincare",
    outlet: "NDTV Health",
    type: "News Article",
    date: "December 16, 2024",
    link: "https://www.ndtv.com/health/how-to-get-glowing-skin-before-a-party-cosmetologists-4-step-skincare-process-revealed-7258888"
  }
];

export default function AboutPage() {
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
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                Meet Dr. Jaishree Sharad
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A globally renowned <strong>cosmetic dermatologist</strong>, medical director of <strong>Skinfinitii Aesthetic Skin & Laser Clinic (Mumbai)</strong>, and a sought-after <strong>international speaker</strong>. Known as the dermatologist to Bollywood and business elites.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-700 font-semibold">5.0</span>
                  <span className="text-gray-500">(thousands of reviews)</span>
                </div>
                <div className="w-px h-6 bg-gray-300" />
                <div className="text-gray-700">
                  <span className="font-semibold">25+</span> years experience
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/10.webp" 
                  alt="Dr. Jaishree Sharad - Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Philosophy of Care
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/%201.webp" 
                  alt="Dr. Jaishree Sharad - Patient Consultation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              
              {/* Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/8.webp" 
                  alt="Dr. Jaishree Sharad - Clinic Interior" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              
              {/* Image 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance9.webp" 
                  alt="Dr. Jaishree Sharad - Professional Portrait" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed">
                Dr. Jaishree's work combines cutting-edge dermatology with a warm, patient-first approach. 
                She has authored four bestselling books including <em>Skin Rules</em>, <em>Skin Talks</em>, <em>The Skincare Answer Book</em>, and <em>Aesthetic Dermatology</em>, 
                sharing her expertise with readers worldwide.
              </p>
              
              <p className="text-lg leading-relaxed mt-6">
                Her philosophy centers on authenticity and balance in beauty: <strong>"Perfection is not beauty, and looking like someone else is not beauty. We all are unique… enhancing our own features to be a slightly younger version of ourselves is what we should aim for, because beauty lies in uniqueness, not perfection."</strong>
              </p>
              
              <p className="text-lg leading-relaxed mt-6">
                Her practice is built on three core principles: <strong>Safety First</strong>, 
                <strong> Natural Results</strong>, and <strong>Patient Education</strong>. 
                She ensures every treatment is performed with the highest standards of medical care, 
                using only FDA-approved products and the latest techniques.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Education & Credentials
            </h2>
            <p className="text-xl text-gray-600">
              Extensive training and qualifications in dermatology and aesthetic medicine
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                  {credential.title}
                </h3>
                <p className="text-gray-600 mb-2">{credential.institution}</p>
                <p className="text-pastel-pink font-semibold mb-2">{credential.year}</p>
                {credential.note && (
                  <p className="text-gray-500 text-sm">{credential.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Current Positions Held
            </h2>
            <p className="text-xl text-gray-600">
              Leadership roles in prestigious dermatological organizations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${position.iconColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <position.icon className={`w-6 h-6 ${position.iconBg}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{position.organization}</p>
                    <span className="inline-block px-3 py-1 bg-pastel-green text-gray-800 text-sm font-medium rounded-full">
                      {position.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEDx Speaker Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              TEDx Speaker
            </h2>
            <p className="text-xl text-gray-600">
              Sharing expertise and insights on global platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tedxTalks.map((talk, index) => (
              <motion.div
                key={talk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <a
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={talk.thumbnail}
                      alt={talk.videoTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <Play className="w-8 h-8 text-white ml-1 drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-gray-800 mb-2 group-hover:text-pastel-pink transition-colors">
                      {talk.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{talk.videoTitle}</p>
                    <p className="text-gray-500 text-xs mb-2">{talk.location}</p>
                    <p className="text-pastel-pink font-semibold text-sm">{talk.date}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Behind the Scenes
              </h2>
              <p className="text-xl text-gray-600">
                A glimpse into Dr. Jaishree's world of expertise and innovation
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full">
          <ImageAutoSlider />
        </div>
      </section>

      {/* Awards Section */}
      <AwardsSection />

      {/* Academic Honors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic & Scientific Honors
            </h2>
            <p className="text-xl text-gray-600">
              Recognition for excellence in dermatological research and practice
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicHonors.map((honor, index) => (
              <motion.div
                key={honor.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg"
              >
                <div className={`w-12 h-12 ${honor.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <honor.icon className={`w-6 h-6 ${honor.iconBg}`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-800 mb-2 text-center">
                  {honor.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{honor.organization}</p>
                <p className="text-pastel-pink font-semibold text-sm text-center mb-2">{honor.year}</p>
                {honor.description && (
                  <p className="text-gray-500 text-xs text-center">{honor.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Memberships Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Memberships
            </h2>
            <p className="text-xl text-gray-600">
              Active member of leading dermatological and aesthetic medicine organizations
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {memberships.map((membership, index) => (
              <motion.div
                key={membership.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="w-3 h-3 bg-pastel-pink rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-700 font-medium">{membership.name}</span>
                    <span className="text-pastel-pink font-semibold text-sm">({membership.fullForm})</span>
                  </div>
                  {membership.number && (
                    <span className="text-gray-500 text-sm">Membership: {membership.number}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Past Leadership Positions
            </h2>
            <p className="text-xl text-gray-600">
              Previous leadership roles in prestigious dermatological organizations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pastel-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{position.organization}</p>
                    <span className="inline-block px-3 py-1 bg-pastel-green text-gray-800 text-sm font-medium rounded-full">
                      {position.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Board Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Editorial Board Positions
            </h2>
            <p className="text-xl text-gray-600">
              Contributing to leading dermatological journals and publications
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {editorialBoard.map((journal, index) => (
              <motion.div
                key={journal}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="w-3 h-3 bg-pastel-pink rounded-full flex-shrink-0" />
                <span className="text-gray-700">{journal}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Media Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recent Media Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Featured in leading media outlets for expertise in dermatology and aesthetic medicine
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Play className="w-5 h-5 text-pastel-pink" />
                    <span className="text-sm font-semibold text-pastel-pink uppercase tracking-wide">
                      {highlight.type}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{highlight.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 mb-4">{highlight.outlet}</p>
                {highlight.link && (
                  <a
                    href={highlight.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-pastel-pink hover:text-pastel-pink/80 transition-colors text-sm font-medium"
                  >
                    <span>Read Article</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/media"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
            >
              <span>View All Media Coverage</span>
              <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Published Author
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Jaishree has authored four bestselling books, sharing her expertise with readers worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={book.coverImage}
                      alt={book.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-800 mb-2 group-hover:text-pastel-pink transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{book.publisher}</p>
                  <p className="text-pastel-pink font-semibold text-sm mb-2">{book.year}</p>
                  {book.note && (
                    <p className="text-gray-500 text-xs italic">{book.note}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/books"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-pastel-pink text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>View All Books</span>
              <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Meet Dr. Jaishree?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Book your consultation and experience the expertise of a leading dermatologist 
            who has transformed thousands of lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>Book Appointment</span>
            </Link>
            
            <Link
              href="/treatments"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
            >
              <span>View Treatments</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

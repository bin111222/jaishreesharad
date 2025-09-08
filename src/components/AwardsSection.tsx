import { motion } from "framer-motion";
import { Trophy, Star, Medal, Heart, Microscope, Crown, Award, Calendar } from "lucide-react";
import Link from "next/link";

const awardsData = [
  {
    id: 1,
    title: "Best Dermatologist",
    organization: "Vogue Beauty Awards",
    year: "2023",
    description: "Recognized for excellence in aesthetic dermatology",
    imagePlaceholder: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/brandlogos/vogue.webp?updatedAt=1756187069841",
    category: "Excellence",
    color: "from-amber-400 to-yellow-500"
  },
  {
    id: 2,
    title: "Best Skin Expert",
    organization: "Elle Beauty Awards",
    year: "2016",
    description: "Best aesthetic dermatologist",
    imagePlaceholder: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/brandlogos/elle.webp",
    category: "Leadership",
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: 3,
    title: "Excellence in Aesthetics",
    organization: "India Today Healthcare",
    year: "2022",
    description: "Awarded for outstanding contributions to aesthetic medicine",
    imagePlaceholder: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/brandlogos/indiatoday.webp",
    category: "Innovation",
    color: "from-red-400 to-pink-500"
  },
  {
    id: 4,
    title: "Best Author",
    organization: "Crossword Book Awards",
    year: "2019",
    description: "For Skin Rules: Your 6-Week Plan to Radiant Skin",
    imagePlaceholder: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/brandlogos/crossword.webp",
    category: "Trust",
    color: "from-rose-400 to-red-500"
  },
  {
    id: 5,
    title: "Innovation in Dermatology",
    organization: "Dermatology Society",
    year: "2022",
    description: "Pioneering new treatment approaches and technologies",
    imagePlaceholder: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/brandlogos/cdsi.webp",
    category: "Research",
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: 6,
    title: "Celebrity Dermatologist",
    organization: "Bollywood Awards",
    year: "2023",
    description: "Trusted by leading celebrities and public figures",
    imagePlaceholder: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/brandlogos/jaishree.webp",
    category: "Prestige",
    color: "from-purple-400 to-violet-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

export default function AwardsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-pastel-pink/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-pastel-green/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pastel-pink/20 to-pastel-green/20 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-pastel-pink" />
            <span className="text-sm font-medium text-gray-700">Recognition & Excellence</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Awards & Recognition
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Celebrating Dr. Jaishree's excellence in aesthetic dermatology and her commitment to advancing the field
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Full Image of Dr. Jaishree */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="relative group">
              {/* Full Image of Dr. Jaishree */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/9.webp"
                  alt="Dr. Jaishree Sharad - Award Ceremony"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">15+</div>
                        <div className="text-xs opacity-90">Awards Won</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">26+</div>
                        <div className="text-xs opacity-90">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pastel-green to-green-400 text-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">2023</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Awards Grid with Image Placeholders */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awardsData.map((award, index) => (
                <motion.div
                  key={award.id}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4, 
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 relative overflow-hidden min-h-[180px]">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4">
                        {/* Image Placeholder */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-200">
                          <img 
                            src={award.imagePlaceholder}
                            alt={`${award.title} - ${award.organization}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        
                        {/* Text content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col space-y-2 mb-2">
                            <h3 className="font-display text-lg font-semibold text-gray-900 leading-tight">
                              {award.title}
                            </h3>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700 w-fit">
                              {award.category}
                            </span>
                          </div>
                          
                          <p className="text-sm font-medium text-pastel-pink/90 mb-2">
                            {award.organization}
                          </p>
                          
                          <p className="text-sm text-gray-700 mb-3 leading-relaxed line-clamp-2">
                            {award.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center space-x-1 bg-pastel-green/20 text-pastel-green px-3 py-1 rounded-full text-xs font-medium">
                              <Calendar className="w-3 h-3" />
                              <span>{award.year}</span>
                            </span>
                            
                            {/* Hover effect indicator */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <div className="w-2 h-2 bg-gradient-to-r from-pastel-pink to-pastel-green rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${award.color} opacity-10 rounded-bl-2xl`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-2xl p-8 border border-pastel-pink/20">
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
              Trusted by Thousands
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join the thousands of patients who have experienced Dr. Jaishree's expertise and commitment to excellence in aesthetic dermatology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pastel-pink to-pink-400 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-150 hover:scale-102"
              >
                <span>Book Consultation</span>
                <Award className="w-4 h-4" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-pastel-pink hover:text-pastel-pink transition-all duration-150 hover:scale-102"
              >
                <span>All Recognition</span>
                <Star className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

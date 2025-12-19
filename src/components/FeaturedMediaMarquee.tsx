"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { Play, ExternalLink } from "lucide-react";
import Image from "next/image";

const featuredMedia = [
  {
    id: 1,
    title: "Vogue Beauty Award Winner",
    type: "Award",
    year: "2016",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/vogue-award.webp"
  },
  {
    id: 2,
    title: "Elle Beauty Award Winner", 
    type: "Award",
    year: "2016",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/elle-award.webp"
  },
  {
    id: 3,
    title: "NDTV Swirlster Interview",
    type: "TV Interview",
    year: "2022",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/ndtv-interview.webp"
  },
  {
    id: 4,
    title: "Femina India Feature",
    type: "Magazine",
    year: "2022",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/femina-feature.webp"
  },
  {
    id: 5,
    title: "Second Opinion Podcast",
    type: "Podcast",
    year: "2022",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/podcast.webp"
  },
  {
    id: 6,
    title: "Crossword Book Award",
    type: "Book Award",
    year: "2020",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/book-award.webp"
  },
  {
    id: 7,
    title: "Free Press Journal",
    type: "News Article",
    year: "2025",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/news-article.webp"
  },
  {
    id: 8,
    title: "Tira Beauty Guide",
    type: "Expert Article",
    year: "2023",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/tira-guide.webp"
  }
];

export function FeaturedMediaMarquee() {
  return (
    <section className="py-16 bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured in Media
          </h2>
          <p className="text-xl text-gray-600">
            Recognized by leading publications and media outlets worldwide
          </p>
        </motion.div>
        
        <Marquee speed={8} pauseOnHover>
          {featuredMedia.map((media, index) => (
            <motion.div
              key={media.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: index * 0.02 }}
              className="flex-shrink-0 mx-4 group relative"
            >
              <div className="w-64 h-48 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-150 hover:scale-105 relative">
                <div className="relative h-32 bg-gray-100">
                  <Image
                    src={media.image}
                    alt={media.title}
                    fill
                    sizes="256px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/20 to-pastel-green/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 text-pastel-pink fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 bg-white/90 backdrop-blur-md text-gray-800 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm border border-gray-100">
                      {media.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-display text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                    {media.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{media.year}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pastel-pink transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
        
        <div className="text-center mt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            <p className="text-gray-600 mb-4">
              Dr. Jaishree has been featured in over 100+ media outlets
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>•</span>
              <span>International Recognition</span>
              <span>•</span>
              <span>Expert Commentary</span>
              <span>•</span>
              <span>Award-Winning Expertise</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



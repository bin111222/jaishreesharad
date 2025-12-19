"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink, Calendar, Play } from "lucide-react";
import { useState } from "react";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  timestamp: string;
  like_count: number;
  comments_count: number;
}

interface CustomInstagramFeedProps {
  maxPosts?: number;
  showHeader?: boolean;
}

// Manual Instagram posts data - Easy to update!
const manualInstagramPosts: InstagramPost[] = [
  {
    id: "post1",
    media_url: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/jaishree/3.webp",
    permalink: "https://www.instagram.com/p/DFJ4pGqT4eM/",
    caption: "Here’s a fact: Skincare isn’t just for women. Men have skin too! 😉 And just like women, men deal with acne, pigmentation, sun damage, and aging. A simple routine—cleanser, moisturizer, and sunscreen—can make a huge difference. Don’t ignore your skin, gentlemen! 🧴✨ #MenSkincare #SkincareForAll #HealthySkin #DrJaishreeSharad",
    media_type: "VIDEO",
    timestamp: "2025-01-23T10:30:00Z",
    like_count: 3241,
    comments_count: 189
  },
  {
    id: "post2",
    media_url: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/dermalfillers/1.webp",
    permalink: "https://www.instagram.com/p/DFHQJ8fz1vK/",
    caption: "Is your skin looking dull despite doing everything right? It might be 'Glycation'. Sugar molecules attach to collagen, making it stiff and prone to breakage. This leads to wrinkles and loss of elasticity. Cut down on refined sugar for a youthful glow! 🍬🚫 #SugarFace #AntiAging #Glycation #HealthySkin",
    media_type: "IMAGE",
    timestamp: "2025-01-21T15:45:00Z",
    like_count: 2156,
    comments_count: 134
  },
  {
    id: "post3",
    media_url: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/botox/1.webp",
    permalink: "https://www.instagram.com/p/DFEw5Yfz8jL/",
    caption: "Let's talk about dark circles. They aren't always caused by lack of sleep! Genetics, allergies, and thinning skin play a huge role. While eye creams help hydrate, treatments like fillers or lasers might be needed for structural hollowing. Consult your derm! 👁️✨ #DarkCircles #UnderEyeCare #Dermatology #Skinfinitii",
    media_type: "VIDEO",
    timestamp: "2025-01-19T12:20:00Z",
    like_count: 4532,
    comments_count: 267
  }
];

export default function CustomInstagramFeed({ maxPosts = 3, showHeader = true }: CustomInstagramFeedProps) {
  const [posts] = useState<InstagramPost[]>(manualInstagramPosts.slice(0, maxPosts));

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const truncateCaption = (caption: string, maxLength: number = 100) => {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + '...';
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <a
              href="https://www.instagram.com/drjaishreesharad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-6 h-6 text-pink-800" />
              <span className="text-pink-800 font-semibold">@drjaishreesharad</span>
            </a>
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Follow Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Latest updates and transformations from our clinic
            </p>
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              onClick={() => window.open("https://www.instagram.com/drjaishreesharad", "_blank")}
            >
              <div className="relative aspect-square overflow-hidden">
                {/* Instagram Post Image */}
                <img
                  src={post.media_url}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                
                {/* Placeholder for when image fails to load */}
                <div className="hidden w-full h-full bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                      <Instagram className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Instagram Post</p>
                      <p className="text-sm text-gray-500">@drjaishreesharad</p>
                    </div>
                  </div>
                </div>
                
                {/* Video Play Button */}
                {post.media_type === 'VIDEO' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-pastel-pink group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 text-gray-800 group-hover:text-white ml-1" />
                    </div>
                  </div>
                )}
                
                {/* Video Badge */}
                {post.media_type === 'VIDEO' && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    VIDEO
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{post.media_type === 'VIDEO' ? 'Watch Video' : 'View Post'}</span>
                  </a>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {truncateCaption(post.caption)}
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{post.like_count.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments_count.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.timestamp)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/drjaishreesharad"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/90 text-gray-800 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 border border-pastel-green/20 shadow-lg"
          >
            <div className="relative">
              <Instagram className="w-6 h-6 text-gray-700 group-hover:text-pastel-pink transition-colors duration-300" />
              <div className="absolute inset-0 bg-pastel-pink/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span className="text-gray-700 group-hover:text-pastel-pink transition-colors duration-300">Follow on Instagram</span>
            <div className="w-2 h-2 bg-pastel-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

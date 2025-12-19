"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink, Calendar, Play } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

interface SocialMediaFeedProps {
  maxPosts?: number;
  showHeader?: boolean;
}

export default function SocialMediaFeed({ maxPosts = 3, showHeader = true }: SocialMediaFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // Fetch from our API route
        const response = await fetch('/api/instagram-posts');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setPosts(data.slice(0, maxPosts));
        setError(null);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load social media posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [maxPosts]);

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

  if (loading) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {showHeader && (
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 mb-4"
              >
                <Instagram className="w-6 h-6 text-pink-100" />
                <span className="text-pink-800 font-semibold">@drjaishreesharad</span>
              </motion.div>
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Follow Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                Latest updates and transformations from our clinic
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-gray-200 animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <Instagram className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Unable to Load Posts</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <a
              href="https://www.instagram.com/drjaishreesharad"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pastel-green to-pastel-green/90 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 border border-pastel-green/20 shadow-md"
            >
              <div className="relative">
                <Instagram className="w-5 h-5 text-gray-700 group-hover:text-pastel-pink transition-colors duration-300" />
                <div className="absolute inset-0 bg-pastel-pink/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <span className="text-gray-700 group-hover:text-pastel-pink transition-colors duration-300">Visit Instagram</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

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
            <div className="inline-flex items-center space-x-2 mb-4">
              <Instagram className="w-6 h-6 text-pink-100" />
              <span className="text-pink-800 font-semibold">@drjaishreesharad</span>
            </div>
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
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                {/* Try to load actual image, fallback to placeholder */}
                {post.media_url && post.media_url.startsWith('http') ? (
                  <Image
                    src={post.media_url}
                    alt={post.caption || "Instagram post"}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized // Instagram CDN domains vary, so we skip optimization to avoid config errors
                  />
                ) : null}
                
                {/* Placeholder for when image is not available or fails to load */}
                <div className={`w-full h-full bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 flex items-center justify-center ${post.media_url && post.media_url.startsWith('http') ? 'hidden' : ''}`}>
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
                      <span>{post.like_count?.toLocaleString() || '0'}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-3 h-3" />
                      <span>{post.comments_count?.toLocaleString() || '0'}</span>
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

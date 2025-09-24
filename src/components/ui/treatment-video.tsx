"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface TreatmentVideoProps {
  src: string;
  title: string;
  description?: string;
  className?: string;
}

export default function TreatmentVideo({ 
  src, 
  title, 
  description, 
  className = "" 
}: TreatmentVideoProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, which is expected in some browsers
        console.log('Autoplay prevented by browser');
      });
    }
  };

  const handleVideoPlay = () => {
    setIsLoading(false);
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, which is expected in some browsers
        console.log('Autoplay prevented by browser');
      });
    }
    
    // Fallback: hide loader after 3 seconds regardless of video state
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [src]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative group ${className}`}
    >
      <div className="relative bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Video Container */}
        <div className="relative aspect-video w-full">
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover relative z-10"
            muted={isMuted}
            loop
            autoPlay
            playsInline
            onLoadedData={handleVideoLoad}
            onPlay={handleVideoPlay}
            onEnded={handleVideoEnd}
            poster=""
          />
          
          {isLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 flex items-center justify-center z-0">
              <div className="w-16 h-16 border-4 border-pastel-pink border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-gray-800 ml-1" />
              ) : (
                <Play className="w-6 h-6 text-gray-800 ml-1" />
              )}
            </motion.button>
          </div>

          {/* Volume Control */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          {/* Play/Pause indicator */}
          {isPlaying && (
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
              Playing
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="p-6">
          <h3 className="font-semibold text-gray-800 text-lg mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

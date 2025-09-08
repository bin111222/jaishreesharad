"use client";

import React, { useState } from 'react';

export const ImageAutoSlider = () => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Images for the infinite scroll - using ImageKit URLs for Dr. Jaishree's media appearances
  const images = [
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance1.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance2.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance3.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance4.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance5.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance6.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance7.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance8.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance9.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance10.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance11.webp",
    "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/media/appearance12.webp"
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full py-16 bg-gradient-to-br from-pastel-green/10 via-white to-pastel-pink/10 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent z-0" />
        
        {/* Scrolling images container */}
        <div className="relative z-10 w-full">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-4 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-xl overflow-hidden shadow-2xl"
                >
                  {imageErrors.has(index) ? (
                    <div className="w-full h-full bg-gradient-to-br from-pastel-pink to-pastel-green flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        Media {(index % images.length) + 1}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={image}
                      alt={`Media appearance ${(index % images.length) + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={() => handleImageError(index)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Top and bottom gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-pastel-green/10 to-transparent z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-pastel-pink/10 to-transparent z-20" />
      </div>
    </>
  );
};

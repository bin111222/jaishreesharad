"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Dr. Jaishree's botox treatment was so natural. My friends couldn't believe I had anything done - they just said I looked well-rested!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Priya M.",
    role: "Botox Treatment",
  },
  {
    text: "After struggling with acne scars for years, Dr. Jaishree's laser treatments completely transformed my skin. I finally have the confidence I always wanted.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Anita S.",
    role: "Laser Treatments",
  },
  {
    text: "The PRP therapy for my hair loss was incredible. I can see new hair growth and my confidence is back. Dr. Jaishree is truly a miracle worker.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Rahul K.",
    role: "PRP Hair Therapy",
  },
  {
    text: "Dr. Jaishree's chemical peel treatment was exactly what my pigmented skin needed. The results are beyond my expectations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Meera P.",
    role: "Chemical Peels",
  },
  {
    text: "Her dermal filler treatment for my lips was perfect - natural, not overdone, and exactly what I wanted. Dr. Jaishree really listens to her patients.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Sonia R.",
    role: "Dermal Fillers",
  },
  {
    text: "The bridal package was worth every penny. My skin was glowing on my wedding day, and the team made me feel like a princess throughout the process.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Aisha M.",
    role: "Bridal Package",
  },
  {
    text: "Dr. Jaishree's thread lift procedure gave me the perfect lift without any surgery. I look 10 years younger and feel amazing.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Kavita D.",
    role: "Thread Lifts",
  },
  {
    text: "After years of dealing with melasma, Dr. Jaishree's pigmentation treatment finally gave me clear, even skin. I'm so grateful for her expertise.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    name: "Neha S.",
    role: "Pigmentation Treatment",
  },
  {
    text: "The microdermabrasion treatment was so gentle yet effective. My skin texture improved dramatically, and the glow is incredible.",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face",
    name: "Pooja K.",
    role: "Microdermabrasion",
  },
];

export { testimonials };

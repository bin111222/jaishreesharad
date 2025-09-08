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
        className="flex flex-col gap-3 sm:gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 sm:p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
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
    text: "Dr. Jaishree is absolutely amazing! Her expertise in cosmetic dermatology is unmatched. I've been coming to her for 3 years and my skin has never looked better. The staff is also very professional and friendly.",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Priya Sharma",
    role: "Google Review",
  },
  {
    text: "Best dermatologist in Mumbai! Dr. Jaishree's treatments are so natural and effective. She never pushes unnecessary procedures and always gives honest advice. Highly recommended!",
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Rajesh Kumar",
    role: "Google Review",
  },
  {
    text: "I was struggling with acne for years until I found Dr. Jaishree. Her personalized treatment plan worked wonders. The clinic is clean, modern, and the staff is very caring.",
    image: "https://ui-avatars.com/api/?name=Anita+Patel&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Anita Patel",
    role: "Google Review",
  },
  {
    text: "Dr. Jaishree is a miracle worker! Her anti-aging treatments have given me back my confidence. She's patient, knowledgeable, and truly cares about her patients. 5 stars!",
    image: "https://ui-avatars.com/api/?name=Sunita+Mehta&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Sunita Mehta",
    role: "Google Review",
  },
  {
    text: "Excellent service and results! Dr. Jaishree's laser treatments for pigmentation worked better than I expected. The clinic is well-equipped and the doctor is very approachable.",
    image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Vikram Singh",
    role: "Google Review",
  },
  {
    text: "I've been to many dermatologists but Dr. Jaishree is the best! Her PRP therapy for hair loss has given me amazing results. She's thorough, professional, and genuinely cares.",
    image: "https://ui-avatars.com/api/?name=Deepak+Agarwal&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Deepak Agarwal",
    role: "Google Review",
  },
  {
    text: "Dr. Jaishree's chemical peels transformed my skin completely. She explained everything clearly and the results are outstanding. The clinic has a very welcoming atmosphere.",
    image: "https://ui-avatars.com/api/?name=Meera+Joshi&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Meera Joshi",
    role: "Google Review",
  },
  {
    text: "Outstanding dermatologist! Dr. Jaishree's Botox treatments are so natural-looking. She's skilled, honest, and never over-treats. I trust her completely with my skin.",
    image: "https://ui-avatars.com/api/?name=Rohit+Malhotra&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Rohit Malhotra",
    role: "Google Review",
  },
  {
    text: "Dr. Jaishree is simply the best! Her dermal fillers look so natural and last long. She's patient, explains everything, and the clinic staff is very professional.",
    image: "https://ui-avatars.com/api/?name=Kavita+Reddy&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Kavita Reddy",
    role: "Google Review",
  },
  {
    text: "Amazing results with Dr. Jaishree's thread lift procedure! She's incredibly skilled and the recovery was much easier than expected. Highly recommend her services.",
    image: "https://ui-avatars.com/api/?name=Arjun+Nair&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Arjun Nair",
    role: "Google Review",
  },
  {
    text: "Dr. Jaishree's expertise in treating acne scars is remarkable. After years of trying different treatments, her approach finally worked. She's a true professional.",
    image: "https://ui-avatars.com/api/?name=Sneha+Iyer&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Sneha Iyer",
    role: "Google Review",
  },
  {
    text: "Excellent dermatologist with a gentle touch! Dr. Jaishree's microdermabrasion treatments have improved my skin texture significantly. The clinic is very clean and modern.",
    image: "https://ui-avatars.com/api/?name=Manish+Gupta&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Manish Gupta",
    role: "Google Review",
  },
  {
    text: "Dr. Jaishree's HIFU treatment exceeded my expectations! The results are natural and long-lasting. She's knowledgeable, caring, and the clinic staff is wonderful.",
    image: "https://ui-avatars.com/api/?name=Pooja+Shah&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Pooja Shah",
    role: "Google Review",
  },
  {
    text: "Best dermatologist in Mumbai! Dr. Jaishree's skin booster treatments have given me the glow I always wanted. She's honest, skilled, and truly cares about her patients.",
    image: "https://ui-avatars.com/api/?name=Amit+Desai&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Amit Desai",
    role: "Google Review",
  },
  {
    text: "Dr. Jaishree is a miracle worker! Her liquid facelift procedure has made me look 10 years younger. The results are so natural that no one can tell I had anything done.",
    image: "https://ui-avatars.com/api/?name=Rekha+Verma&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Rekha Verma",
    role: "Google Review",
  },
  {
    text: "Outstanding service and results! Dr. Jaishree's non-surgical nose job gave me the perfect nose I always wanted. She's incredibly skilled and the clinic is top-notch.",
    image: "https://ui-avatars.com/api/?name=Suresh+Rao&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Suresh Rao",
    role: "Google Review",
  },
  {
    text: "Dr. Jaishree's cryolipolysis treatment worked wonders for my body contouring! She's professional, explains everything clearly, and the results are amazing.",
    image: "https://ui-avatars.com/api/?name=Neha+Kapoor&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Neha Kapoor",
    role: "Google Review",
  },
  {
    text: "Excellent dermatologist with amazing results! Dr. Jaishree's EndyMed treatments have tightened my skin beautifully. She's patient, knowledgeable, and very caring.",
    image: "https://ui-avatars.com/api/?name=Ravi+Tiwari&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Ravi Tiwari",
    role: "Google Review",
  },
  {
    text: "Dr. Jaishree is the best! Her Exilis treatments have given me the body I always wanted. She's honest, skilled, and the clinic staff is very professional and friendly.",
    image: "https://ui-avatars.com/api/?name=Shilpa+Agarwal&background=D7A7A0&color=fff&size=200&bold=true",
    name: "Shilpa Agarwal",
    role: "Google Review",
  },
  {
    text: "Amazing dermatologist! Dr. Jaishree's facial contouring treatments have enhanced my features naturally. She's incredibly skilled and truly cares about her patients' satisfaction.",
    image: "https://ui-avatars.com/api/?name=Vikash+Kumar&background=A8D5BA&color=fff&size=200&bold=true",
    name: "Vikash Kumar",
    role: "Google Review",
  },
];

export { testimonials };


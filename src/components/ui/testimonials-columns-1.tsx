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
    text: "The peels she has done on my skin have worked wonders … stem cell PRP helped my hair loss issues.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/amyra.webp",
    name: "Amyra Dastur",
    role: "Patient",
  },
  {
    text: "From the word go she made me comfortable and confident in my own skin … always leave the clinic revitalized.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/aadar.webp",
    name: "Aadar Jain",
    role: "Patient",
  },
  {
    text: "Jaishree will always be available and ready to help … she's just a call away.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/elli.webp",
    name: "Elli AvrRam",
    role: "Patient",
  },
  {
    text: "You're the best doc, thank you for helping me out with my skin.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/karankapadia.webp",
    name: "Karan Kapadia",
    role: "Patient",
  },
  {
    text: "She simplified skincare for me … I deeply admire her positive energy and warmth.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/shobhita.webp",
    name: "Sobhita Dhulipala",
    role: "Patient",
  },
  {
    text: "Healthy and glowing skin is very important … Skin tips from Dr J and basic peels changed the way my skin looks.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/priya.webp",
    name: "Priya Banerjee",
    role: "Patient",
  },
  {
    text: "Love J! She is the best.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/shekhar.webp",
    name: "Shekhar Ravjiani",
    role: "Patient",
  },
  {
    text: "I switched make-up brands … with regular clean-ups, my skin has been better. She never pushes products.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/kalyani.webp",
    name: "Kalyani Priyadarshan",
    role: "Patient",
  },
  {
    text: "She doesn't force treatments … my face has never looked better thanks to her.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/yasmin.webp",
    name: "Yasmin Karachiwala",
    role: "Patient",
  },
  {
    text: "Fantastic dermatologist, amazing person and my best friend.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/namrata.webp",
    name: "Namrata Dutt Kumar",
    role: "Patient",
  },
  {
    text: "She is one person I can truly trust with closed eyes … thank you for always putting up with me.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/riddhima.webp",
    name: "Riddhima Kapoor",
    role: "Patient",
  },
  {
    text: "Such a warm and positive person … her smile and kindness make you feel good before treatment.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/iulia.webp",
    name: "Iulia Vantur",
    role: "Patient",
  },
  {
    text: "Whether hydration, diet, or oxygen facials … Jaishree knows best.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/jitesh.webp",
    name: "Jitesh Pillai",
    role: "Patient",
  },
  {
    text: "She heals her patients not just physically but instills confidence … a real-life heroine.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/shalini.webp",
    name: "Shalini Sharma",
    role: "Patient",
  },
  {
    text: "My skin is in its best form today and it's only because of her! My skin saviour.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/palak.webp",
    name: "Palak Muchhal",
    role: "Patient",
  },
  {
    text: "Your expertise and knowledge are always up to the mark … staff is as sweet and nice as you are.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/gaurie.webp",
    name: "Gaurie Pandit Dwivedi",
    role: "Patient",
  },
  {
    text: "Expert hands with a human touch … she takes care of my worries perfectly.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/prithvi.webp",
    name: "Prithvi Hatte",
    role: "Patient",
  },
  {
    text: "I took my husband to Dr J … now he looks younger than me!",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/anupama.webp",
    name: "Anupama Kapoor",
    role: "Patient",
  },
  {
    text: "Instead of pimples, now I smile with dimples … she did her magic.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/amit.webp",
    name: "Amit Sadh",
    role: "Patient",
  },
  {
    text: "She is quick and accurate with her diagnosis … I make it a point to see her twice a month.",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/testimonials/harshvardhan.webp",
    name: "Harshvardhan Kapoor",
    role: "Patient",
  },
];

export { testimonials };


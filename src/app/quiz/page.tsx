"use client";

import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle, Download, Mail, Star } from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  text: string;
  type: "multiple-choice" | "slider" | "image-choice" | "yes-no";
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  images?: { src: string; alt: string; value: string }[];
}

interface QuizState {
  currentQuestion: number;
  answers: Record<number, any>;
  isComplete: boolean;
  skinProfile: string;
  recommendations: string[];
  email: string;
  showEmailForm: boolean;
}

const questions: Question[] = [
  {
    id: 1,
    text: "What's your primary skin concern?",
    type: "multiple-choice",
    options: [
      "Fine lines and wrinkles",
      "Acne and breakouts",
      "Hyperpigmentation and dark spots",
      "Dryness and dehydration",
      "Oiliness and enlarged pores",
      "Sensitivity and redness"
    ]
  },
  {
    id: 2,
    text: "How would you describe your skin type?",
    type: "multiple-choice",
    options: [
      "Very dry",
      "Dry",
      "Normal",
      "Combination",
      "Oily",
      "Sensitive"
    ]
  },
  {
    id: 3,
    text: "How much oil does your skin produce?",
    type: "slider",
    min: 1,
    max: 10,
    step: 1
  },
  {
    id: 4,
    text: "Do you experience skin sensitivity or reactions to products?",
    type: "yes-no",
    options: ["Yes", "No"]
  },
  {
    id: 5,
    text: "What's your main goal?",
    type: "multiple-choice",
    options: [
      "Anti-aging and prevention",
      "Clear acne and blemishes",
      "Even skin tone",
      "Hydration and moisture",
      "Reduce pore size",
      "Calm sensitive skin"
    ]
  },
  {
    id: 6,
    text: "How much time can you dedicate to skincare daily?",
    type: "multiple-choice",
    options: [
      "5 minutes or less",
      "5-10 minutes",
      "10-15 minutes",
      "15+ minutes"
    ]
  }
];

const skinProfiles = {
  "Balanced": {
    description: "Your skin is well-balanced with minimal concerns. Focus on maintenance and prevention.",
    recommendations: [
      "Gentle daily cleanser",
      "Broad-spectrum sunscreen SPF 30+",
      "Lightweight moisturizer",
      "Weekly exfoliation"
    ],
    treatments: ["Chemical peels", "Microdermabrasion", "Facial treatments"]
  },
  "Oily": {
    description: "Your skin produces excess oil. Focus on oil control and pore refinement.",
    recommendations: [
      "Oil-free cleanser",
      "Salicylic acid toner",
      "Oil-free moisturizer",
      "Clay masks 2-3 times weekly"
    ],
    treatments: ["Chemical peels", "Laser treatments", "Botox for oil control"]
  },
  "Dry": {
    description: "Your skin lacks moisture and may feel tight. Focus on hydration and barrier repair.",
    recommendations: [
      "Cream-based cleanser",
      "Hyaluronic acid serum",
      "Rich moisturizer",
      "Overnight masks"
    ],
    treatments: ["Hydrafacial", "Dermal fillers", "PRP therapy"]
  },
  "Sensitive": {
    description: "Your skin is easily irritated. Focus on gentle, soothing ingredients.",
    recommendations: [
      "Fragrance-free cleanser",
      "Centella asiatica serum",
      "Barrier repair cream",
      "Mineral sunscreen"
    ],
    treatments: ["Gentle facials", "LED therapy", "Consultation for custom plan"]
  },
  "Combination": {
    description: "Your skin has both oily and dry areas. Focus on targeted treatment for each zone.",
    recommendations: [
      "Gel cleanser",
      "Different moisturizers for T-zone and cheeks",
      "Targeted treatments",
      "Weekly clay masks on T-zone"
    ],
    treatments: ["Customized facials", "Chemical peels", "Laser treatments"]
  }
};

export default function QuizPage() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    isComplete: false,
    skinProfile: "",
    recommendations: [],
    email: "",
    showEmailForm: false
  });

  const handleAnswer = (answer: any) => {
    const newAnswers = { ...quizState.answers, [questions[quizState.currentQuestion].id]: answer };
    
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState({
        ...quizState,
        answers: newAnswers,
        currentQuestion: quizState.currentQuestion + 1
      });
    } else {
      // Quiz complete - calculate results
      const profile = calculateSkinProfile(newAnswers);
      const recommendations = skinProfiles[profile as keyof typeof skinProfiles].recommendations;
      
      setQuizState({
        ...quizState,
        answers: newAnswers,
        isComplete: true,
        skinProfile: profile,
        recommendations
      });
    }
  };

  const calculateSkinProfile = (answers: Record<number, any>): string => {
    // Simple logic - in real app, this would be more sophisticated
    const skinType = answers[2];
    const sensitivity = answers[4];
    
    if (sensitivity === "Yes") return "Sensitive";
    if (skinType === "Oily") return "Oily";
    if (skinType === "Dry" || skinType === "Very dry") return "Dry";
    if (skinType === "Combination") return "Combination";
    return "Balanced";
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", quizState.email);
    setQuizState({ ...quizState, showEmailForm: false });
  };

  const currentQuestion = questions[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / questions.length) * 100;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
              Discover Your Perfect Skin Routine
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take our personalized skin quiz and get customized recommendations 
              for your unique skin concerns and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Container */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {!quizState.isComplete ? (
            <motion.div
              key={quizState.currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Question {quizState.currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-pastel-green to-pastel-pink h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="text-center space-y-6">
                <h2 className="font-display text-2xl font-semibold text-gray-800">
                  {currentQuestion.text}
                </h2>

                {/* Answer Options */}
                <div className="space-y-4">
                  {currentQuestion.type === "multiple-choice" && currentQuestion.options && (
                    <div className="grid gap-3">
                      {currentQuestion.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(option)}
                          className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-pastel-pink hover:bg-pastel-pink/5 transition-all duration-200"
                        >
                          <span className="font-medium text-gray-800">{option}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {currentQuestion.type === "yes-no" && currentQuestion.options && (
                    <div className="flex gap-4 justify-center">
                      {currentQuestion.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(option)}
                          className="px-8 py-4 border-2 border-gray-200 rounded-xl hover:border-pastel-pink hover:bg-pastel-pink/5 transition-all duration-200"
                        >
                          <span className="font-medium text-gray-800">{option}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {currentQuestion.type === "slider" && (
                    <div className="space-y-4">
                      <input
                        type="range"
                        min={currentQuestion.min}
                        max={currentQuestion.max}
                        step={currentQuestion.step}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        onChange={(e) => handleAnswer(parseInt(e.target.value))}
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Very Dry</span>
                        <span>Very Oily</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Results */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Results Header */}
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-pastel-pink rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="font-display text-3xl font-bold text-gray-800">
                  Your Skin Profile: {quizState.skinProfile}
                </h2>
                <p className="text-gray-600">
                  {skinProfiles[quizState.skinProfile as keyof typeof skinProfiles]?.description}
                </p>
              </div>

              {/* Recommendations */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-6">
                  Your Personalized Recommendations
                </h3>
                <div className="space-y-4">
                  {quizState.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pastel-pink rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Treatments */}
              <div className="bg-gradient-to-r from-pastel-green/20 to-pastel-pink/20 rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-6">
                  Recommended Treatments
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skinProfiles[quizState.skinProfile as keyof typeof skinProfiles]?.treatments.map((treatment, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center">
                      <span className="font-medium text-gray-800">{treatment}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Form */}
              {quizState.showEmailForm ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="bg-white border-2 border-pastel-pink rounded-2xl p-8"
                >
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-4">
                    Get Your Complete Skin Report
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Enter your email to receive a detailed PDF report with your personalized recommendations.
                  </p>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={quizState.email}
                      onChange={(e) => setQuizState({ ...quizState, email: e.target.value })}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-pastel-pink text-white font-semibold rounded-lg hover:bg-pastel-pink/90 transition-colors"
                    >
                      Send Report
                    </button>
                  </form>
                </motion.div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setQuizState({ ...quizState, showEmailForm: true })}
                    className="flex-1 px-6 py-4 bg-pastel-pink text-white font-semibold rounded-lg hover:bg-pastel-pink/90 transition-colors"
                  >
                    <Mail className="w-5 h-5 inline mr-2" />
                    Get PDF Report
                  </button>
                  <Link
                    href="/contact"
                    className="flex-1 px-6 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-lg hover:bg-pastel-pink hover:text-white transition-colors text-center"
                  >
                    Book Consultation
                  </Link>
                </div>
              )}

              {/* Restart Quiz */}
              <div className="text-center">
                <button
                  onClick={() => setQuizState({
                    currentQuestion: 0,
                    answers: {},
                    isComplete: false,
                    skinProfile: "",
                    recommendations: [],
                    email: "",
                    showEmailForm: false
                  })}
                  className="text-pastel-pink hover:text-pastel-pink/80 transition-colors"
                >
                  Take Quiz Again
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Transform Your Skin?
            </h2>
            
            <p className="text-xl text-gray-600">
              Get personalized advice from Dr. Jaishree and start your journey to beautiful, healthy skin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/treatments"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
              >
                <span>View Treatments</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

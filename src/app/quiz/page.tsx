"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Award, 
  Star, 
  Heart, 
  Microscope, 
  Calendar,
  Clock,
  User,
  Shield,
  Sparkles,
  Sun,
  Moon,
  Zap,
  BookOpen,
  Phone,
  Mail,
  Download,
  Share2,
  RefreshCcw
} from "lucide-react";
import Link from "next/link";

// Types
interface Question {
  id: string;
  text: string;
  subtitle?: string;
  type: "single" | "multi" | "slider" | "yesno" | "image-choice";
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
}

interface QuizState {
  index: number;
  answers: Record<string, any>;
  done: boolean;
}

interface SkinProfile {
  type: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  recommendations: {
    morning: string[];
    evening: string[];
    avoid: string[];
    treatments: string[];
  };
  priority: string[];
}

// Professional Questions for Dermatology Assessment
const QUESTIONS: Question[] = [
  {
    id: "primary_concern",
    text: "What is your primary skin concern?",
    subtitle: "Select the most important issue you'd like to address",
    type: "single",
    options: [
      "Acne and breakouts",
      "Hyperpigmentation and dark spots",
      "Fine lines and wrinkles",
      "Dryness and dehydration",
      "Oiliness and enlarged pores",
      "Sensitivity and redness",
      "Uneven skin texture",
      "Anti-aging and prevention"
    ],
    required: true
  },
  {
    id: "skin_type",
    text: "How would you describe your skin type?",
    subtitle: "This helps determine the right products and treatments",
    type: "single",
    options: [
      "Very dry - feels tight and flaky",
      "Dry - needs regular moisturizing",
      "Normal - balanced, rarely problematic",
      "Combination - oily T-zone, dry elsewhere",
      "Oily - shiny throughout the day",
      "Sensitive - easily irritated and reactive"
    ],
    required: true
  },
  {
    id: "sensitivity_level",
    text: "How sensitive is your skin to new products?",
    subtitle: "This affects treatment recommendations",
    type: "single",
    options: [
      "Not sensitive - can try most products",
      "Mildly sensitive - occasional reactions",
      "Moderately sensitive - careful introduction needed",
      "Very sensitive - reactions to many products"
    ]
  },
  {
    id: "sun_exposure",
    text: "What's your typical sun exposure?",
    subtitle: "Important for treatment planning and sun protection",
    type: "single",
    options: [
      "Minimal - mostly indoors",
      "Moderate - some outdoor activities",
      "High - outdoor work or sports",
      "Very high - extensive outdoor time"
    ]
  },
  {
    id: "current_routine",
    text: "What's your current skincare routine?",
    subtitle: "Select all that apply",
    type: "multi",
    options: [
      "Basic cleanser and moisturizer",
      "Sunscreen (SPF 30+)",
      "Vitamin C serum",
      "Retinol or retinoid",
      "Chemical exfoliants (AHA/BHA)",
      "Hyaluronic acid",
      "Niacinamide",
      "No regular routine"
    ]
  },
  {
    id: "lifestyle_factors",
    text: "Which lifestyle factors affect your skin?",
    subtitle: "These can influence treatment recommendations",
    type: "multi",
    options: [
      "Stress and lack of sleep",
      "Hormonal changes (pregnancy, PCOS)",
      "Dietary factors",
      "Environmental pollution",
      "Exercise and sweating",
      "Smoking or alcohol",
      "Medications",
      "None of the above"
    ]
  },
  {
    id: "treatment_goals",
    text: "What are your treatment goals?",
    subtitle: "Select your priorities",
    type: "multi",
    options: [
      "Clear, blemish-free skin",
      "Even skin tone and texture",
      "Firm, youthful appearance",
      "Hydrated, plump skin",
      "Reduced pore size",
      "Calm, soothed skin",
      "Prevention and maintenance",
      "Professional treatment guidance"
    ]
  },
  {
    id: "commitment_level",
    text: "How committed are you to a skincare routine?",
    subtitle: "This helps tailor recommendations to your lifestyle",
    type: "single",
    options: [
      "Minimal - 2-3 steps maximum",
      "Moderate - 4-5 steps daily",
      "Comprehensive - 6+ steps daily",
      "Professional - willing to try advanced treatments"
    ]
  }
];

// Professional Skin Profiles
const SKIN_PROFILES: Record<string, SkinProfile> = {
  acne_prone: {
    type: "Acne-Prone Skin",
    title: "The Clarifying Protocol",
    description: "Your skin needs gentle yet effective acne management with a focus on preventing breakouts and minimizing post-inflammatory hyperpigmentation.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-blue-500 to-purple-600",
    recommendations: {
      morning: [
        "Gentle gel cleanser with salicylic acid",
        "Niacinamide serum (4-5% concentration)",
        "Light, non-comedogenic moisturizer",
        "Broad-spectrum SPF 30+ (matte finish)"
      ],
      evening: [
        "Double cleanse with oil-based cleanser",
        "Salicylic acid toner (2% concentration)",
        "Azelaic acid serum (10-15%)",
        "Light moisturizer with ceramides"
      ],
      avoid: [
        "Heavy, occlusive moisturizers",
        "Fragranced products",
        "Harsh physical scrubs",
        "Over-washing (more than 2x daily)"
      ],
      treatments: [
        "Chemical peels (salicylic/glycolic)",
        "LED blue light therapy",
        "Hydrafacial with acne protocol",
        "Professional extractions"
      ]
    },
    priority: [
      "Consistent cleansing routine",
      "Non-comedogenic products",
      "Regular SPF application",
      "Professional consultation for severe cases"
    ]
  },
  hyperpigmentation: {
    type: "Hyperpigmentation-Prone Skin",
    title: "The Brightening Protocol",
    description: "Your skin requires a comprehensive approach to address dark spots, uneven tone, and prevent future pigmentation issues.",
    icon: <Star className="w-8 h-8" />,
    color: "from-amber-500 to-orange-600",
    recommendations: {
      morning: [
        "Gentle foaming cleanser",
        "Vitamin C serum (15-20% L-ascorbic acid)",
        "Niacinamide serum (5-10%)",
        "Broad-spectrum SPF 50+ (reapply every 2 hours)"
      ],
      evening: [
        "Double cleanse",
        "Tranexamic acid serum",
        "Retinoid (start with 0.025% tretinoin)",
        "Rich moisturizer with ceramides"
      ],
      avoid: [
        "Direct sun exposure without SPF",
        "Harsh scrubs or peels",
        "Picking at spots or scabs",
        "Inconsistent SPF application"
      ],
      treatments: [
        "Chemical peels (glycolic/mandelic)",
        "Laser toning treatments",
        "Microneedling with PRP",
        "Professional brightening facials"
      ]
    },
    priority: [
      "Daily SPF application",
      "Consistent brightening actives",
      "Sun protection measures",
      "Patience with treatment timeline"
    ]
  },
  anti_aging: {
    type: "Anti-Aging Focus",
    title: "The Youth Preservation Protocol",
    description: "Your skin benefits from a comprehensive anti-aging approach that addresses fine lines, texture, and overall skin health.",
    icon: <Heart className="w-8 h-8" />,
    color: "from-pink-500 to-rose-600",
    recommendations: {
      morning: [
        "Gentle cream cleanser",
        "Vitamin C serum with ferulic acid",
        "Peptide serum",
        "Rich moisturizer with hyaluronic acid",
        "Broad-spectrum SPF 30+"
      ],
      evening: [
        "Double cleanse",
        "Retinoid (0.025-0.05% tretinoin)",
        "Peptide-rich moisturizer",
        "Overnight mask 2-3 times weekly"
      ],
      avoid: [
        "Skipping sunscreen",
        "Over-exfoliation",
        "Harsh, drying products",
        "Inconsistent routine"
      ],
      treatments: [
        "Chemical peels (glycolic/lactic)",
        "Botox and dermal fillers",
        "Radiofrequency treatments",
        "LED light therapy"
      ]
    },
    priority: [
      "Daily SPF protection",
      "Consistent retinoid use",
      "Adequate hydration",
      "Professional anti-aging treatments"
    ]
  },
  sensitive: {
    type: "Sensitive Skin",
    title: "The Soothing Protocol",
    description: "Your skin requires gentle, calming care that strengthens the skin barrier and reduces reactivity to environmental factors.",
    icon: <Shield className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    recommendations: {
      morning: [
        "Cream-based cleanser",
        "Centella asiatica serum",
        "Ceramide-rich moisturizer",
        "Mineral SPF 30+ (zinc oxide/titanium dioxide)"
      ],
      evening: [
        "Gentle oil cleanser",
        "Barrier repair serum",
        "Rich moisturizer with ceramides",
        "Occlusive balm if needed"
      ],
      avoid: [
        "Fragranced products",
        "Strong acids and retinoids",
        "Hot water and harsh scrubs",
        "Frequent product changes"
      ],
      treatments: [
        "Gentle LED red light therapy",
        "Soothing facials",
        "Barrier repair treatments",
        "Professional sensitivity testing"
      ]
    },
    priority: [
      "Barrier repair and maintenance",
      "Gentle, fragrance-free products",
      "Consistent routine",
      "Professional guidance for treatments"
    ]
  }
};

// Scoring Algorithm
function determineSkinProfile(answers: Record<string, any>): string {
  let scores = {
    acne_prone: 0,
    hyperpigmentation: 0,
    anti_aging: 0,
    sensitive: 0
  };

  // Primary concern scoring
  switch (answers.primary_concern) {
    case "Acne and breakouts":
      scores.acne_prone += 5;
      break;
    case "Hyperpigmentation and dark spots":
      scores.hyperpigmentation += 5;
      break;
    case "Fine lines and wrinkles":
    case "Anti-aging and prevention":
      scores.anti_aging += 5;
      break;
    case "Sensitivity and redness":
      scores.sensitive += 5;
      break;
  }

  // Skin type scoring
  switch (answers.skin_type) {
    case "Oily":
      scores.acne_prone += 3;
      break;
    case "Sensitive - easily irritated and reactive":
      scores.sensitive += 4;
      break;
    case "Very dry - feels tight and flaky":
      scores.anti_aging += 2;
      break;
  }

  // Sensitivity level
  if (answers.sensitivity_level?.includes("Very sensitive")) {
    scores.sensitive += 4;
  }

  // Sun exposure
  if (answers.sun_exposure?.includes("High") || answers.sun_exposure?.includes("Very high")) {
    scores.hyperpigmentation += 3;
    scores.anti_aging += 2;
  }

  // Treatment goals
  if (answers.treatment_goals?.includes("Clear, blemish-free skin")) {
    scores.acne_prone += 3;
  }
  if (answers.treatment_goals?.includes("Even skin tone and texture")) {
    scores.hyperpigmentation += 3;
  }
  if (answers.treatment_goals?.includes("Firm, youthful appearance")) {
    scores.anti_aging += 3;
  }

  // Find the highest score
  const maxScore = Math.max(...Object.values(scores));
  const profile = Object.keys(scores).find(key => scores[key as keyof typeof scores] === maxScore);
  
  return profile || "anti_aging";
}

// Main Component
export default function SkinQuiz() {
  const [state, setState] = useState<QuizState>({ 
    index: 0, 
    answers: {}, 
    done: false 
  });

  const currentQuestion = QUESTIONS[state.index];
  const progress = Math.round(((state.index) / QUESTIONS.length) * 100);
  const skinProfile = useMemo(() => 
    state.done ? SKIN_PROFILES[determineSkinProfile(state.answers)] : null, 
    [state.done, state.answers]
  );

  const setAnswer = (value: any) => {
    const newAnswers = { ...state.answers, [currentQuestion.id]: value };
    const nextIndex = state.index + 1;
    
    if (nextIndex < QUESTIONS.length) {
      setState({ index: nextIndex, answers: newAnswers, done: false });
    } else {
      setState({ index: nextIndex, answers: newAnswers, done: true });
    }
  };

  const goBack = () => {
    setState(prev => ({ 
      ...prev, 
      index: Math.max(0, prev.index - 1) 
    }));
  };

  const resetQuiz = () => {
    setState({ index: 0, answers: {}, done: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-pastel-pink transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-pastel-pink" />
              <span className="font-semibold text-gray-800">Skin Assessment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        {!state.done && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pastel-pink/20 to-pastel-green/20 px-4 py-2 rounded-full mb-6">
              <Microscope className="w-5 h-5 text-pastel-pink" />
              <span className="text-sm font-medium text-gray-700">Professional Skin Assessment</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your Personalized Skin Profile
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answer a few questions to receive a customized skincare protocol designed by Dr. Jaishree's expertise
            </p>
          </motion.div>
        )}

        {/* Progress Bar */}
        {!state.done && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {state.index + 1} of {QUESTIONS.length}</span>
              <span>{progress}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-pastel-pink to-pastel-green h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        )}

        {/* Question or Results */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <AnimatePresence mode="wait">
            {!state.done ? (
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Question */}
                <div className="text-center">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
                    {currentQuestion.text}
                  </h2>
                  {currentQuestion.subtitle && (
                    <p className="text-gray-600 text-lg">
                      {currentQuestion.subtitle}
                    </p>
                  )}
                </div>

                {/* Options */}
                <div className="space-y-4">
                  {currentQuestion.type === "single" && (
                    <div className="grid gap-3">
                      {currentQuestion.options?.map((option) => (
                        <button
                          key={option}
                          onClick={() => setAnswer(option)}
                          className="w-full text-left p-4 border-2 border-gray-200 rounded-xl hover:border-pastel-pink hover:bg-pastel-pink/5 transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-gray-800 group-hover:text-pastel-pink transition-colors">
                              {option}
                            </span>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pastel-pink transition-colors" />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                                     {currentQuestion.type === "multi" && (
                     <MultiSelect
                       options={currentQuestion.options || []}
                       value={state.answers[currentQuestion.id] || []}
                       onChange={(value) => {
                         setState(prev => ({
                           ...prev,
                           answers: { ...prev.answers, [currentQuestion.id]: value }
                         }));
                       }}
                       onContinue={() => setAnswer(state.answers[currentQuestion.id] || [])}
                     />
                   )}

                  {currentQuestion.type === "yesno" && (
                    <div className="grid grid-cols-2 gap-4">
                      {["Yes", "No"].map((option) => (
                        <button
                          key={option}
                          onClick={() => setAnswer(option)}
                          className="p-6 border-2 border-gray-200 rounded-xl hover:border-pastel-pink hover:bg-pastel-pink/5 transition-all duration-200 text-center"
                        >
                          <span className="text-lg font-medium text-gray-800">{option}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <button
                    onClick={goBack}
                    disabled={state.index === 0}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      state.index === 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-600 hover:text-pastel-pink"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  
                  <div className="text-sm text-gray-500">
                    {currentQuestion.type === "multi" ? "Select all that apply" : "Choose one option"}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Results */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {skinProfile && (
                  <>
                    {/* Profile Header */}
                    <div className="text-center">
                      <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${skinProfile.color} flex items-center justify-center mb-6`}>
                        <div className="text-white">
                          {skinProfile.icon}
                        </div>
                      </div>
                      
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        {skinProfile.title}
                      </h2>
                      
                      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {skinProfile.description}
                      </p>
                    </div>

                    {/* Recommendations Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <RecommendationCard
                        title="Morning Routine"
                        icon={<Sun className="w-5 h-5" />}
                        items={skinProfile.recommendations.morning}
                        color="from-yellow-400 to-orange-500"
                      />
                      
                      <RecommendationCard
                        title="Evening Routine"
                        icon={<Moon className="w-5 h-5" />}
                        items={skinProfile.recommendations.evening}
                        color="from-blue-400 to-purple-500"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <RecommendationCard
                        title="Avoid These"
                        icon={<Shield className="w-5 h-5" />}
                        items={skinProfile.recommendations.avoid}
                        color="from-red-400 to-pink-500"
                      />
                      
                      <RecommendationCard
                        title="Professional Treatments"
                        icon={<Award className="w-5 h-5" />}
                        items={skinProfile.recommendations.treatments}
                        color="from-emerald-400 to-teal-500"
                      />
                    </div>

                    {/* Priority Actions */}
                    <div className="bg-gradient-to-r from-pastel-pink/10 to-pastel-green/10 rounded-2xl p-6 border border-pastel-pink/20">
                      <h3 className="font-display text-xl font-semibold text-gray-800 mb-4 text-center">
                        Priority Actions
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {skinProfile.priority.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-pastel-pink rounded-full"></div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact"
                        className="flex-1 inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-pink to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Book Consultation</span>
                      </Link>
                      
                      <button
                        onClick={resetQuiz}
                        className="flex-1 inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-pastel-pink hover:text-pastel-pink transition-all duration-200"
                      >
                        <RefreshCcw className="w-5 h-5" />
                        <span>Retake Assessment</span>
                      </button>
                    </div>

                    {/* Disclaimer */}
                    <div className="text-center text-sm text-gray-500 bg-gray-50 rounded-xl p-4">
                      <p>
                        This assessment provides general guidance based on your responses. For personalized treatment plans, 
                        please consult with Dr. Jaishree for a comprehensive skin evaluation.
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Subcomponents
function MultiSelect({ 
  options, 
  value, 
  onChange,
  onContinue
}: { 
  options: string[]; 
  value: string[]; 
  onChange: (value: string[]) => void;
  onContinue: () => void;
}) {
  const toggleOption = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option];
    onChange(newValue);
  };

  return (
    <div className="space-y-3">
      <div className="grid gap-3">
        {options.map((option) => (
          <label
            key={option}
            className={`flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
              value.includes(option)
                ? "border-pastel-pink bg-pastel-pink/5"
                : "border-gray-200 hover:border-pastel-pink"
            }`}
          >
            <input
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => toggleOption(option)}
              className="w-5 h-5 text-pastel-pink border-gray-300 rounded focus:ring-pastel-pink"
            />
            <span className="text-gray-800">{option}</span>
          </label>
        ))}
      </div>
      
      <div className="flex justify-end pt-4">
        <button
          onClick={onContinue}
          disabled={value.length === 0}
          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
            value.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-pastel-pink to-pink-500 text-white hover:shadow-lg"
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function RecommendationCard({ 
  title, 
  icon, 
  items, 
  color 
}: { 
  title: string; 
  icon: React.ReactNode; 
  items: string[]; 
  color: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="font-display text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-pastel-pink rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

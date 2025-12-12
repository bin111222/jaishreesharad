import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const treatments = [
  { name: "MicroLift", slug: "microlift", desc: "Diode laser technology (1470 nm) for skin tightening and lifting" },
  { name: "NCTF 135HA", slug: "nctf-135ha", desc: "Mesotherapy solution for skin rejuvenation and anti-ageing" },
  { name: "Exosomes", slug: "exosomes", desc: "Advanced regenerative therapy using exosomes for skin and hair restoration" },
  { name: "PDRN", slug: "pdrn", desc: "Polydeoxyribonucleotide for tissue regeneration and skin rejuvenation" },
  { name: "HarmonyCa", slug: "harmonyca", desc: "Calcium hydroxyapatite for volume restoration and skin enhancement" },
  { name: "Sculptra", slug: "sculptra", desc: "Poly-L-lactic acid for gradual volume restoration and collagen stimulation" },
  { name: "Pico Glow", slug: "pico-glow", desc: "Picosecond laser for skin brightening and texture improvement" },
  { name: "Q-switch Toning", slug: "q-switch-toning", desc: "Q-switched laser for even skin tone and pigmentation reduction" },
  { name: "Red Light Therapy", slug: "red-light-therapy", desc: "LED red light therapy for collagen stimulation and skin rejuvenation" },
  { name: "AccuScan Tightening", slug: "accuscan-tightening", desc: "Precise scanning technology for targeted skin tightening" },
  { name: "Skin Deep Cleansing", slug: "skin-deep-cleansing", desc: "Deep pore cleansing treatment for acne prevention and skin health" },
  { name: "Comedone Extraction", slug: "comedone-extraction", desc: "Professional extraction of blackheads and whiteheads" },
  { name: "CO2 Cryotherapy", slug: "co2-cryotherapy", desc: "Carbon dioxide cryotherapy for acne treatment" },
  { name: "LED Blue Light", slug: "led-blue-light", desc: "Blue light therapy to kill acne-causing bacteria" },
  { name: "Microneedling RF", slug: "microneedling-rf", desc: "Radiofrequency microneedling for scar reduction and skin rejuvenation" },
  { name: "Fractional CO₂ Laser", slug: "fractional-co2-laser", desc: "CO2 laser resurfacing for deep scars and skin rejuvenation" },
  { name: "Fractional Pico Laser", slug: "fractional-pico-laser", desc: "Picosecond laser for scar treatment and skin improvement" },
  { name: "Fractional Erbium Laser", slug: "fractional-erbium-laser", desc: "Erbium laser for precise scar removal and skin resurfacing" },
  { name: "MicroLift Diode", slug: "microlift-diode", desc: "Diode laser for scar reduction and skin tightening" },
  { name: "Smart Pico Laser", slug: "smart-pico-laser", desc: "Advanced picosecond laser for pigmentation removal" },
  { name: "Microneedling with Tranexamic Acid", slug: "microneedling-tranexamic-acid", desc: "Microneedling combined with tranexamic acid for pigmentation reduction" },
  { name: "Microneedling with PDRN/Exosomes/NCTF", slug: "microneedling-pdrn", desc: "Regenerative microneedling for skin brightening and rejuvenation" },
  { name: "Tan Removal Medifacial", slug: "tan-removal-medifacial", desc: "Medical facial for tan removal and skin brightening" },
  { name: "Lip Peel and Laser", slug: "lip-peel-laser", desc: "Specialized treatment for lip pigmentation and dark lips" },
  { name: "Under Eye Treatments", slug: "under-eye-treatments", desc: "Comprehensive under-eye treatment for dark circles and fine lines" },
  { name: "Oxygeneo 3-in-1 Facial", slug: "oxygeneo-facial", desc: "Three-in-one facial treatment for glowing, radiant skin" },
  { name: "Brightening MediFacials", slug: "brightening-medifacials", desc: "Medical facials for skin brightening and even tone" },
  { name: "Hydration MediFacials", slug: "hydration-medifacials", desc: "Intensive hydration facials for plump, glowing skin" },
  { name: "Sensitive Skin Facial", slug: "sensitive-skin-facial", desc: "Gentle facial treatment designed for sensitive skin types" },
  { name: "ACP", slug: "acp", desc: "Autologous Conditioned Plasma for hair growth and restoration" },
  { name: "Exosomes Hair", slug: "exosomes-hair", desc: "Exosome therapy for hair regeneration and growth" },
  { name: "Intimate Pigmentation", slug: "intimate-pigmentation", desc: "Specialized treatment for intimate area pigmentation" },
  { name: "Intimate RF Tightening", slug: "intimate-rf-tightening", desc: "Radiofrequency for intimate area tightening" },
  { name: "Intimate Laser Tightening", slug: "intimate-laser-tightening", desc: "Laser treatment for intimate area tightening" },
  { name: "Intimate PRP", slug: "intimate-prp", desc: "PRP therapy for intimate area rejuvenation" },
  { name: "Intimate Hyaluronic Acid", slug: "intimate-hyaluronic-acid", desc: "Hyaluronic acid fillers for intimate area enhancement" },
  { name: "Anti-ageing Medi-facials", slug: "anti-ageing-medifacials", desc: "Medical-grade facials for skin rejuvenation and anti-ageing" }
];

function createPageContent(name, slug, desc) {
  const funcName = name.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '');
  
  return `"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Star, CheckCircle, AlertTriangle, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is ${name} and how does it work?",
    answer: "${desc}"
  },
  {
    question: "How long do ${name} results last?",
    answer: "Results vary depending on individual factors and treatment area. We'll discuss expected duration during your consultation."
  },
  {
    question: "Is ${name} treatment painful?",
    answer: "Most patients experience minimal discomfort. We use advanced techniques and can apply numbing agents if needed to ensure your comfort throughout the procedure."
  },
  {
    question: "When will I see results?",
    answer: "Results may be visible immediately or develop gradually over several weeks, depending on the treatment type. We'll provide a personalized timeline during consultation."
  },
  {
    question: "Who is a good candidate for ${name}?",
    answer: "Good candidates are adults in good health with realistic expectations. We'll assess your specific concerns during consultation to determine if this treatment is right for you."
  }
];

const benefits = [
  "Effective and proven results",
  "Minimal downtime",
  "Safe treatment protocols",
  "Expert care from Dr. Jaishree",
  "Personalized treatment plans",
  "Natural-looking outcomes"
];

const aftercare = [
  "Follow post-treatment instructions carefully",
  "Avoid sun exposure as recommended",
  "Use recommended skincare products",
  "Attend follow-up appointments",
  "Contact us with any concerns"
];

export default function ${funcName}Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <section className="relative py-20 bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800">
                ${name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                ${desc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>30-60 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="w-5 h-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>5.0 (50+ reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pastel-green to-pastel-green/80 text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="#faqs"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-4xl">✨</span>
                  </div>
                  <p className="text-gray-600 font-medium">${name}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Duration</h3>
              <p className="text-gray-600">30-60 min</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Downtime</h3>
              <p className="text-gray-600">Minimal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Results</h3>
              <p className="text-gray-600">Varies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Safe</h3>
              <p className="text-gray-600">Yes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Benefits of ${name}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-pastel-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-gray-800" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="faqs" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    <ArrowRight 
                      className={\`w-5 h-5 text-pastel-pink transition-transform \${
                        openFaq === index ? 'rotate-90' : ''
                      }\`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-pastel-green/30 to-pastel-pink/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-gray-600">
              Book your ${name} consultation with Dr. Jaishree today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
              
              <Link
                href="/treatments"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-pastel-pink text-pastel-pink font-semibold rounded-full hover:bg-pastel-pink hover:text-white transition-all duration-200"
              >
                <span>View All Treatments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
`;
}

const baseDir = path.join(__dirname, '../src/app/treatments');

treatments.forEach(treatment => {
  const dirPath = path.join(baseDir, treatment.slug);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Write the page file
  const content = createPageContent(treatment.name, treatment.slug, treatment.desc);
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${treatment.slug}/page.tsx`);
});

console.log(`\n🎉 Successfully created ${treatments.length} treatment pages!`);




export interface TreatmentItem {
  name: string;
  description?: string;
  image?: string;
  href?: string;
}

export interface SubCategory {
  title: string;
  treatments: TreatmentItem[];
}

export interface TreatmentCategory {
  id: string;
  title: string;
  description?: string;
  image?: string;
  subCategories?: SubCategory[];
  treatments?: TreatmentItem[]; // For categories without subcategories
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "anti-ageing",
    title: "Anti-Ageing",
    description: "Comprehensive anti-ageing solutions for youthful, radiant skin",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/antiaging/1.webp",
    subCategories: [
      {
        title: "A. Injectables",
        treatments: [
          { name: "Neuromodulators (Botox, Dysport)", description: "Reduce fine lines and wrinkles with FDA-approved neuromodulators", href: "/treatments/botox" },
          { name: "Fillers", description: "Restore volume and enhance facial contours", href: "/treatments/fillers" },
          { name: "Skin Boosters (Profhilo / Restylane Vital / SkinVive)", description: "Hydrating injections for improved skin texture and glow", href: "/treatments/skin-boosters" },
          { name: "Injection lipolysis", description: "Targeted fat reduction through injectable treatments", href: "/treatments/injection-lipolysis" },
          { name: "Thread lift", description: "Non-surgical lifting using dissolvable threads", href: "/treatments/thread-lifts" }
        ]
      },
      {
        title: "B. Non-Surgical Lifting & Tightening",
        treatments: [
          { name: "HIFU", description: "High-intensity focused ultrasound for skin tightening", href: "/treatments/hifu" },
          { name: "EndyMed 3DEEP RF", description: "Advanced radiofrequency for comprehensive skin tightening", href: "/treatments/endymed" },
          { name: "Forma RF", description: "Radiofrequency treatment for skin rejuvenation", href: "/treatments/forma-rf" },
          { name: "MicroLift (1470 nm diode laser)", description: "Diode laser technology for skin tightening", href: "/treatments/microlift" },
          { name: "AccuScan Tightening", description: "Precise scanning technology for targeted tightening", href: "/treatments/accuscan-tightening" }
        ]
      },
      {
        title: "C. Regenerative Anti-Ageing",
        treatments: [
          { name: "NCTF 135HA", description: "Mesotherapy solution for skin rejuvenation", href: "/treatments/nctf-135ha" },
          { name: "Exosomes", description: "Advanced regenerative therapy using exosomes", href: "/treatments/exosomes" },
          { name: "PDRN", description: "Polydeoxyribonucleotide for tissue regeneration", href: "/treatments/pdrn" },
          { name: "PRP / PRF", description: "Platelet-rich plasma/fibrin for natural healing", href: "/treatments/prp-therapy" },
          { name: "HarmonyCa", description: "Calcium hydroxyapatite for volume restoration", href: "/treatments/harmonyca" },
          { name: "Sculptra", description: "Poly-L-lactic acid for gradual volume restoration", href: "/treatments/sculptra" }
        ]
      },
      {
        title: "D. Skin Quality & Texture",
        treatments: [
          { name: "Pico Glow", description: "Picosecond laser for skin brightening and texture improvement", href: "/treatments/pico-glow" },
          { name: "Q-switch Toning", description: "Q-switched laser for even skin tone", href: "/treatments/q-switch-toning" },
          { name: "Anti-ageing peels", description: "Chemical peels designed for anti-ageing", href: "/treatments/chemical-peels" },
          { name: "Red Light Therapy", description: "LED red light for collagen stimulation", href: "/treatments/red-light-therapy" },
          { name: "Anti-ageing medi-facials", description: "Medical-grade facials for skin rejuvenation", href: "/treatments/anti-ageing-medifacials" }
        ]
      }
    ]
  },
  {
    id: "acne-acne-scars",
    title: "Acne & Acne Scars",
    description: "Effective treatments for active acne and scar reduction",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/acnescars/1.webp",
    subCategories: [
      {
        title: "A. Active Acne",
        treatments: [
          { name: "Acne Control Peels", description: "Chemical peels specifically for acne treatment", href: "/treatments/chemical-peels" },
          { name: "Skin deep cleansing", description: "Deep pore cleansing for acne prevention", href: "/treatments/skin-deep-cleansing" },
          { name: "Comedone extraction", description: "Professional extraction of blackheads and whiteheads", href: "/treatments/comedone-extraction" },
          { name: "Co2 cryotherapy", description: "Carbon dioxide cryotherapy for acne treatment", href: "/treatments/co2-cryotherapy" },
          { name: "LED Blue Light", description: "Blue light therapy to kill acne-causing bacteria", href: "/treatments/led-blue-light" }
        ]
      },
      {
        title: "B. Acne Scars",
        treatments: [
          { name: "Subcision", description: "Surgical technique to release scar tissue", href: "/treatments/acne-scars" },
          { name: "Microneedling RF", description: "Radiofrequency microneedling for scar reduction", href: "/treatments/microneedling-rf" },
          { name: "Fractional CO₂ laser", description: "CO2 laser resurfacing for deep scars", href: "/treatments/fractional-co2-laser" },
          { name: "Fractional Pico laser", description: "Picosecond laser for scar treatment", href: "/treatments/fractional-pico-laser" },
          { name: "Fractional erbium laser", description: "Erbium laser for precise scar removal", href: "/treatments/fractional-erbium-laser" },
          { name: "Chemical peels", description: "Deep peels for scar improvement", href: "/treatments/chemical-peels" },
          { name: "MicroLift Diode", description: "Diode laser for scar reduction", href: "/treatments/microlift-diode" }
        ]
      }
    ]
  },
  {
    id: "pigmentation",
    title: "Pigmentation",
    description: "Advanced solutions for uneven skin tone and dark spots",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/pigmentation/1.webp",
    treatments: [
      { name: "Smart Pico laser", description: "Advanced picosecond laser for pigmentation removal", href: "/treatments/smart-pico-laser" },
      { name: "Q-switch Nd Yag Laser", description: "Q-switched laser for deep pigmentation", href: "/treatments/laser-treatments" },
      { name: "Chemical Peels", description: "Peels designed for pigmentation reduction", href: "/treatments/chemical-peels" },
      { name: "Microneedling with Tranexamic Acid", description: "Microneedling combined with tranexamic acid for pigmentation", href: "/treatments/microneedling-tranexamic-acid" },
      { name: "Microneedling with PDRN / Exosomes / NCTF", description: "Regenerative microneedling for skin brightening", href: "/treatments/microneedling-pdrn" },
      { name: "Tan removal medifacial", description: "Medical facial for tan removal", href: "/treatments/tan-removal-medifacial" },
      { name: "Lip peel and laser for dark lips", description: "Specialized treatment for lip pigmentation", href: "/treatments/lip-peel-laser" },
      { name: "Under eye treatments for dark circles and fine lines", description: "Comprehensive under-eye treatment", href: "/treatments/under-eye-treatments" },
      { name: "Smart Pico laser (Under-eye)", description: "Picosecond laser for under-eye pigmentation", href: "/treatments/smart-pico-laser" },
      { name: "Q-switch Nd Yag laser (Under-eye)", description: "Q-switched laser for under-eye dark circles", href: "/treatments/q-switch-toning" },
      { name: "Under-eye peels", description: "Gentle peels for under-eye area", href: "/treatments/chemical-peels" },
      { name: "PDRN (Under-eye)", description: "PDRN injections for under-eye rejuvenation", href: "/treatments/pdrn" },
      { name: "PRP (Under-eye)", description: "PRP therapy for under-eye concerns", href: "/treatments/prp-therapy" },
      { name: "NCTF (Under-eye)", description: "NCTF mesotherapy for under-eye area", href: "/treatments/nctf-135ha" },
      { name: "Fillers (Under-eye)", description: "Under-eye filler for volume restoration", href: "/treatments/fillers" },
      { name: "Skin boosters (Under-eye)", description: "Hydrating injections for under-eye area", href: "/treatments/skin-boosters" }
    ]
  },
  {
    id: "skin-glow-treatments",
    title: "Skin & Glow Treatments",
    description: "Treatments for radiant, glowing skin",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/skintreatments/skintreatments.webp",
    treatments: [
      { name: "Oxygeneo 3-in-1 Facial", description: "Three-in-one facial treatment for glowing skin", href: "/treatments/oxygeneo-facial" },
      { name: "Brightening MediFacials", description: "Medical facials for skin brightening", href: "/treatments/brightening-medifacials" },
      { name: "Hydration MediFacials", description: "Intensive hydration facials", href: "/treatments/hydration-medifacials" },
      { name: "Bride and groom Facials", description: "Special bridal facial packages", href: "/treatments/bridal" },
      { name: "Sensitive-Skin Facial", description: "Gentle facial for sensitive skin types", href: "/treatments/sensitive-skin-facial" },
      { name: "Chemical Peels", description: "Various chemical peels for skin improvement", href: "/treatments/chemical-peels" },
      { name: "Pico Glow", description: "Picosecond laser for skin glow", href: "/treatments/pico-glow" },
      { name: "Q-switch Toning", description: "Q-switched laser for even skin tone", href: "/treatments/q-switch-toning" },
      { name: "Red Light Therapy", description: "LED red light for skin rejuvenation", href: "/treatments/red-light-therapy" }
    ]
  },
  {
    id: "hair-treatments",
    title: "Hair Treatments",
    description: "Comprehensive solutions for hair restoration and removal",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/prptherapy/1.webp",
    treatments: [
      { name: "ACP", description: "Autologous Conditioned Plasma for hair growth", href: "/treatments/acp" },
      { name: "PRP", description: "Platelet-rich plasma for hair restoration", href: "/treatments/prp-therapy" },
      { name: "Exosomes", description: "Exosome therapy for hair regeneration", href: "/treatments/exosomes-hair" },
      { name: "Laser hair removal", description: "Permanent hair reduction with advanced lasers", href: "/treatments/laser-treatments" }
    ]
  },
  {
    id: "intimate-area-treatments",
    title: "Intimate Area Treatments",
    description: "Specialized treatments for intimate areas",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/bodytreatments/bodytreatments.webp",
    subCategories: [
      {
        title: "A. Intimate Pigmentation",
        treatments: [
          { name: "Pigmentation Treatment", description: "Specialized treatment for intimate area pigmentation", href: "/treatments/intimate-pigmentation" }
        ]
      },
      {
        title: "B. Intimate Tightening",
        treatments: [
          { name: "RF Tightening", description: "Radiofrequency for intimate area tightening", href: "/treatments/intimate-rf-tightening" },
          { name: "Laser Tightening", description: "Laser treatment for intimate area tightening", href: "/treatments/intimate-laser-tightening" }
        ]
      },
      {
        title: "C. Intimate Rejuvenation",
        treatments: [
          { name: "PRP Rejuvenation", description: "PRP therapy for intimate area rejuvenation", href: "/treatments/intimate-prp" },
          { name: "Hyaluronic Acid Fillers", description: "Fillers for intimate area enhancement", href: "/treatments/intimate-hyaluronic-acid" }
        ]
      }
    ]
  },
  {
    id: "body-contouring",
    title: "Body Contouring",
    description: "Non-surgical body shaping and fat reduction",
    image: "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/cryolipolysis/1.webp",
    treatments: [
      { name: "CoolSculpting", description: "Cryolipolysis for targeted fat reduction", href: "/treatments/cryolipolysis" },
      { name: "HIFU Body", description: "High-intensity focused ultrasound for body tightening", href: "/treatments/hifu" },
      { name: "RF Body Tightening", description: "Radiofrequency for body skin tightening", href: "/treatments/exilis" }
    ]
  }
];

// Surgical treatments (separate section)
export const surgicalTreatments: TreatmentItem[] = [
  { name: "Sebaceous cyst removal", description: "Surgical removal of sebaceous cysts" },
  { name: "Xanthelasma removal", description: "Surgical removal of xanthelasma" },
  { name: "Ear lobe repair", description: "Surgical repair of torn or stretched ear lobes" },
  { name: "Wart removal", description: "Surgical removal of warts" },
  { name: "Skin tag removal", description: "Surgical removal of skin tags" },
  { name: "DPN removal", description: "Removal of Dermatosis Papulosa Nigra" },
  { name: "Lipoma removal", description: "Surgical removal of lipomas" }
];


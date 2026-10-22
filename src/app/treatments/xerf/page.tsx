"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Layers,
  SlidersHorizontal,
  Snowflake,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const IMAGE_BASE = "https://ik.imagekit.io/jaishreeskinfinitii/websiteimages/xerf";

const heroImages = [
  {
    src: `${IMAGE_BASE}/1.webp`,
    alt: "XERF treatment at The Jaishree Sharad Clinic",
    label: "XERF",
  },
  {
    src: `${IMAGE_BASE}/2.webp`,
    alt: "XERF device and handpiece",
    label: "Device",
  },
  {
    src: `${IMAGE_BASE}/3.webp`,
    alt: "XERF treatment along the jawline",
    label: "Jawline",
  },
  {
    src: `${IMAGE_BASE}/4.webp`,
    alt: "XERF treatment with surface cooling",
    label: "Cooling",
  },
];

const howItWorks = [
  {
    icon: Layers,
    title: "Two frequencies, one session",
    text: "XERF delivers 6.78 MHz and 2 MHz together. Older devices reach a single depth. These two frequencies are used so treatment can address the shallow, middle, and deeper layers in the same visit.",
  },
  {
    icon: SlidersHorizontal,
    title: "Heat where collagen is rebuilt",
    text: "Controlled thermal energy heats the deep tissue and fibrous septa. That starts neocollagenesis — new collagen and elastin — which develops over 2 to 6 months.",
  },
  {
    icon: Snowflake,
    title: "The surface stays cool",
    text: "A built-in cryogen cools the skin surface during treatment, so the heat is directed into the tissue being treated and the surface is protected from a burn.",
  },
];

const depths = [
  { layer: "Shallow", detail: "Upper skin, where texture and early crepiness show" },
  { layer: "Middle", detail: "The dermis, where collagen and elastin are rebuilt" },
  { layer: "Deep, including SMAS", detail: "The deeper support layer targeted in a surgical lift" },
];

const treatmentAreas = [
  {
    area: "Jawline & jowls",
    description: "Early softening along the jaw and mild jowl laxity.",
  },
  {
    area: "Cheeks",
    description: "Laxity through the mid-face, treated to your skin thickness.",
  },
  {
    area: "Brows",
    description: "Mild descent of the brow, where a nonsurgical lift is realistic.",
  },
  {
    area: "Under the chin",
    description: "Laxity under the chin and along the upper neck.",
  },
  {
    area: "Abdomen",
    description: "Loose skin on the abdomen, with settings chosen for that area.",
  },
  {
    area: "Upper arms",
    description: "Crepey or lax skin on the upper arms.",
  },
];

const suitedFor = [
  "Mild to moderate skin laxity",
  "Early jawline softening",
  "Crepey skin on the face, neck, abdomen, or upper arms",
  "A preference for gradual change over a surgical lift",
  "Willingness to accept what nonsurgical tightening can realistically do",
];

const benefits = [
  "Non-invasive, medical-grade tightening and lifting",
  "6.78 MHz and 2 MHz delivered in the same session",
  "Shallow, middle, and deeper layers, including the SMAS",
  "New collagen and elastin over 2 to 6 months",
  "Built-in cryogen cooling for the skin surface",
  "Face, neck, abdomen, and upper arms",
  "No downtime — daily activity the same day",
  "Depth and intensity set for your skin, not a fixed protocol",
];

const faqs = [
  {
    question: "What is XERF?",
    answer:
      "XERF stands for Extended Energy Radio Frequency. It is a non-invasive, medical-grade treatment for skin tightening and lifting. It is a dual-frequency monopolar radiofrequency system that delivers 6.78 MHz and 2 MHz together in a single session.",
  },
  {
    question: "How is XERF different from older radiofrequency devices?",
    answer:
      "Older devices typically reach one depth. XERF uses two frequencies at once so treatment can address the shallow, middle, and deeper layers of the skin, including the SMAS layer. A built-in cryogen cools the surface while the deeper tissue is heated.",
  },
  {
    question: "Will the settings be the same for everyone?",
    answer:
      "No. Depth and intensity have to be set for the person in the chair. Skin thickness varies, and a rigid protocol — or parameters generated without examining your skin — is not how this treatment is done. Your doctor adjusts multiple settings after assessing your skin.",
  },
  {
    question: "Who is XERF for?",
    answer:
      "It suits someone with mild to moderate skin laxity, early jawline softening, or crepey skin, who wants gradual, modest improvement and accepts the limits of nonsurgical tightening. It is not the right choice for everyone. Candidacy is decided in consultation.",
  },
  {
    question: "Which areas can be treated?",
    answer:
      "XERF is commonly used on the face and neck — jawline, jowls, cheeks, brows, and under-chin laxity — and on body areas such as the abdomen and upper arms.",
  },
  {
    question: "How long is a session, and is there downtime?",
    answer:
      "A session is typically 45 minutes to an hour. There is no downtime. You can return to normal daily activities immediately afterward.",
  },
  {
    question: "When will I see a change?",
    answer:
      "Collagen and elastin rebuild over 2 to 6 months. The change is gradual and modest. It is a nonsurgical tightening, and the result should be judged on that scale.",
  },
  {
    question: "Does the treatment burn the skin?",
    answer:
      "The device has a built-in cryogen that cools the skin surface during treatment, so the surface is protected while deeper tissue is heated. You may feel warmth. Your doctor controls depth and intensity for your skin thickness.",
  },
];

function ClinicImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-pastel-green/40 to-pastel-pink/40">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-pastel-pink">
            <span className="text-2xl text-white">✦</span>
          </div>
          <p className="font-medium text-gray-700">XERF</p>
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export default function XerfPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <Layout>
      <section className="relative bg-gradient-to-br from-pastel-green/20 via-white to-pastel-pink/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pastel-pink">
                Extended Energy Radio Frequency
              </p>
              <h1 className="font-display text-4xl font-bold text-gray-800 md:text-5xl">
                XERF
              </h1>
              <p className="text-xl leading-relaxed text-gray-600">
                A non-invasive, medical-grade treatment for skin tightening and lifting.
                XERF is the world&apos;s first dual-frequency monopolar radiofrequency
                system, delivering 6.78 MHz and 2 MHz together in a single session.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>45–60 minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="h-5 w-5" />
                  <span>Dr. Jaishree</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="h-5 w-5" />
                  <span>No downtime</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-pastel-green to-pastel-green/80 px-8 py-4 font-semibold text-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center space-x-2 rounded-full border-2 border-pastel-pink px-8 py-4 font-semibold text-pastel-pink transition-all duration-200 hover:bg-pastel-pink hover:text-white"
                >
                  <span>How XERF works</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-pastel-green/30 to-pastel-pink/30 p-3">
                <div className="h-full overflow-hidden rounded-xl">
                  <ClinicImage
                    src={heroImages[activeImage].src}
                    alt={heroImages[activeImage].alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {heroImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show ${image.label} image`}
                    className={`aspect-square overflow-hidden rounded-xl transition-transform duration-200 hover:scale-105 ${
                      activeImage === index ? "ring-2 ring-pastel-pink" : ""
                    }`}
                  >
                    <ClinicImage
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { label: "Duration", value: "45–60 min" },
              { label: "Downtime", value: "None" },
              { label: "Collagen rebuilds", value: "2–6 months" },
              { label: "Settings", value: "Customised" },
            ].map((fact, index) => (
              <div key={fact.label} className="text-center">
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                    index % 2 === 0 ? "bg-pastel-green" : "bg-pastel-pink"
                  }`}
                >
                  <span className={`text-sm font-bold ${index % 2 === 0 ? "text-gray-800" : "text-white"}`}>
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mb-1 font-semibold text-gray-800">{fact.label}</h2>
                <p className="text-gray-600">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-gray-800">
                How XERF works
              </h2>
              <p className="text-xl text-gray-600">
                Two frequencies, delivered together, so treatment is not limited to a single depth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {howItWorks.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pastel-green">
                    <item.icon className="h-6 w-6 text-gray-800" />
                  </div>
                  <h3 className="mb-3 font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {depths.map((depth, index) => (
                <div
                  key={depth.layer}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-pastel-pink">
                    Layer {index + 1}
                  </p>
                  <h3 className="mb-2 font-semibold text-gray-800">{depth.layer}</h3>
                  <p className="text-sm text-gray-600">{depth.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-gradient-to-br from-pastel-green/20 to-pastel-pink/20 p-8 md:p-12"
          >
            <h2 className="mb-4 font-display text-3xl font-bold text-gray-800">
              Settings are chosen for your skin
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                XERF has multiple depth and intensity settings. They have to be adjusted
                accurately for the thickness of your skin. That judgement is made by your
                doctor, not from a rigid protocol.
              </p>
              <p>
                A cookie-cutter plan, or parameters generated without examining you, will
                not work. Two people with a similar concern can need different depths and
                intensities. The treatment is planned for the skin in front of the doctor.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-gray-800">
                Areas treated
              </h2>
              <p className="text-xl text-gray-600">
                Face and neck, and selected areas of the body.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {treatmentAreas.map((treatment, index) => (
                <div key={treatment.area} className="rounded-xl bg-white p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pastel-pink">
                    <span className="font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-800">{treatment.area}</h3>
                  <p className="text-sm text-gray-600">{treatment.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold text-gray-800">
                Who it is for
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                XERF is for someone who wants a gradual, modest improvement and accepts
                the limits of nonsurgical tightening. It is not a facelift, and it is not
                for everybody.
              </p>
              <ul className="space-y-3">
                {suitedFor.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pastel-green">
                      <CheckCircle className="h-4 w-4 text-gray-800" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold text-gray-800">
                What to expect
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start space-x-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pastel-green">
                      <CheckCircle className="h-4 w-4 text-gray-800" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-gray-800">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Straight answers about XERF at the clinic.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-lg border border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <ArrowRight
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pastel-green/10 to-pastel-pink/10 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-display text-3xl font-bold text-gray-800 md:text-4xl">
            Find out if XERF is right for your skin
          </h2>
          <p className="mb-8 text-xl text-gray-600">
            Book a consultation with Dr. Jaishree. Depth and intensity are planned after
            your skin is assessed — not from a standard chart.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-full bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <Calendar className="h-5 w-5" />
            <span>Book Consultation</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

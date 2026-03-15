"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Plus, Minus, Phone } from "lucide-react";

const faqCategories = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        q: "What is Aura Wellness?",
        a: "Aura Wellness is a health and wellness clinic serving Tampa Bay and surrounding areas. We offer Medical Weight Loss, CoolSculpting® body contouring, Telehealth services, and have Hormone Replacement Therapy launching soon. Our Board-Certified Nurse Practitioner, Algery Al-Hafi APRN-BC, leads all care.",
      },
      {
        q: "How do I schedule an appointment?",
        a: "You can call us at (813) 755-4461 or fill out the appointment request form on our Contact Us page. We'll get back to you quickly to get you scheduled.",
      },
      {
        q: "Do you offer telehealth appointments?",
        a: "Yes! We offer telehealth services so you can access expert guidance for weight loss, hormone optimization, anti-aging, and hair growth from the comfort of your home. Call us to schedule a virtual appointment.",
      },
    ],
  },
  {
    id: "weight-loss",
    label: "Medical Weight Loss",
    questions: [
      {
        q: "What does your Medical Weight Loss program include?",
        a: "Our Medical Weight Loss program takes a comprehensive, personalized approach. We offer appetite suppressants, vitamin injections, hormone optimization, craving management strategies, and individualized treatment plans — all guided by our Board-Certified Nurse Practitioner.",
      },
      {
        q: "Is Medical Weight Loss safe?",
        a: "Yes. All treatments are medically supervised by our Board-Certified Nurse Practitioner, Algery Al-Hafi APRN-BC. Our treatments have garnered support from multiple research studies and are tailored to each individual's health profile.",
      },
      {
        q: "How soon will I see results from the weight loss program?",
        a: "Results vary based on the individual, their starting point, and the specific treatments used. Many clients begin noticing changes within a few weeks. Your practitioner will set realistic expectations during your initial consultation.",
      },
      {
        q: "What conditions does the weight loss program help with?",
        a: "Our program can help with fatigue, irritability, inflammation, joint pain, low energy, low libido, anxiety, mood swings, cravings, overeating, abdominal fat, and PMS — in addition to helping you reach your weight loss goals.",
      },
    ],
  },
  {
    id: "coolsculpting",
    label: "CoolSculpting®",
    questions: [
      {
        q: "What is CoolSculpting®?",
        a: "CoolSculpting® is the world's #1 non-invasive fat-reduction treatment. It uses FDA-cleared cryolipolysis technology to freeze and naturally eliminate stubborn fat cells — no surgery, no needles, no downtime.",
      },
      {
        q: "Which areas can CoolSculpting® treat?",
        a: "CoolSculpting® can target the lower abdomen, love handles (flanks), inner and outer thighs, double chin, bra bulge and back fat, upper arms, and banana roll (under the buttocks).",
      },
      {
        q: "How many treatments will I need?",
        a: "The number of treatments depends on your goals and the areas being treated. During your free consultation, we'll create a personalized treatment plan. We currently offer a special promotion: Buy 3 cycles, get 1 FREE.",
      },
      {
        q: "When will I see results from CoolSculpting®?",
        a: "You may start seeing a visible reduction in fat in as little as 3 weeks, with full results typically appearing within 2 to 3 months as your body naturally eliminates the treated fat cells.",
      },
      {
        q: "Is CoolSculpting® painful?",
        a: "Most clients experience minimal discomfort. During treatment, you may feel intense cold, tingling, or temporary numbness. Side effects like minor redness or numbness usually resolve quickly after the session.",
      },
    ],
  },
  {
    id: "telehealth",
    label: "Telehealth",
    questions: [
      {
        q: "How does a telehealth appointment work?",
        a: "Call us at (813) 755-4461 to schedule a virtual appointment, or fill out the form on our Telehealth services page. We'll reach out within 24 hours to confirm your appointment and provide instructions for joining the call.",
      },
      {
        q: "What services are available via telehealth?",
        a: "Through telehealth, you can access expert guidance for hormone optimization, anti-aging, hair growth, and weight-loss management — all from the comfort of your home.",
      },
      {
        q: "Do I need special equipment for a telehealth visit?",
        a: "No special equipment is needed. Any smartphone, tablet, or computer with a camera and internet connection will work. We use a simple, secure video platform.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-forest-800/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-2"
      >
        <span className="font-cormorant text-xl text-forest-900 group-hover:text-forest-700 transition-colors leading-snug">
          {question}
        </span>
        <span className="flex-shrink-0 mt-1 w-6 h-6 flex items-center justify-center text-gold-600 transition-transform duration-300">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-forest-700/65 font-dm leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");

  return (
    <>
      {/* ─── HERO BANNER (YELLOW) ───────────────────────────────────── */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "#C2C980" }}
      >
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute right-8 bottom-0 font-cormorant text-[12vw] text-forest-800/5 leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          FAQ
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-forest-700/60 text-xs tracking-widest uppercase font-dm mb-4">Support &amp; Answers</p>
              <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-forest-900 leading-[0.95]">
                Wellness
                <br />
                <em className="italic">Support</em>
              </h1>
              <div className="mt-5 w-12 h-px bg-forest-800/30" />
              <p className="mt-5 text-forest-800/65 font-dm leading-relaxed max-w-md">
                Everything you need to know about Aura Wellness — our services,
                treatments, telehealth process, and more. Can&apos;t find your answer?
                Call us directly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="lg:text-right"
            >
              <h2 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-forest-900 leading-[0.95]">
                Comprehensive
                <br />
                <em className="italic text-forest-700/60">&amp; Clear</em>
              </h2>
              <p className="mt-5 text-forest-700/50 text-sm font-dm">
                {faqCategories.reduce((acc, cat) => acc + cat.questions.length, 0)} questions answered across{" "}
                {faqCategories.length} categories
              </p>
              <a
                href="tel:+18137554461"
                className="mt-6 inline-flex items-center gap-2 bg-forest-800 text-cream-100 px-7 py-3 text-xs tracking-widest uppercase font-dm font-medium hover:bg-forest-900 transition-colors duration-200"
              >
                <Phone size={13} /> (813) 755-4461
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ BODY ──────────────────────────────────────────────── */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Category sidebar */}
            <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:w-56 flex-shrink-0"
            >
              <p className="text-xs uppercase tracking-widest text-forest-700/40 font-dm mb-4">Categories</p>
              <ul className="flex lg:flex-col gap-2 flex-wrap">
                {faqCategories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-sm font-dm px-4 py-2 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold-500 ${
                        activeCategory === cat.id
                          ? "bg-forest-800 text-cream-100"
                          : "text-forest-700/60 hover:text-forest-900"
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Questions panel */}
            <div className="flex-1 min-w-0">
              {faqCategories.map((cat) => (
                <AnimatePresence key={cat.id} mode="wait">
                  {activeCategory === cat.id && (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <h2 className="font-cormorant text-3xl lg:text-4xl text-forest-900 mb-8">
                        {cat.label}
                      </h2>
                      <div
                        className="bg-white p-6 lg:p-8"
                        style={{ boxShadow: "0 2px 8px rgba(8,26,16,0.06), 0 8px 32px rgba(8,26,16,0.05)" }}
                      >
                        {cat.questions.map((item) => (
                          <FAQItem key={item.q} question={item.q} answer={item.a} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STILL HAVE QUESTIONS (YELLOW) ────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "#C2C980" }}
      >
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-forest-700/60 text-xs tracking-widest uppercase font-dm mb-4">Still have questions?</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-forest-900 mb-5">
              Your Care,{" "}
              <em className="italic">Our Priority</em>
            </h2>
            <p className="text-forest-800/60 font-dm leading-relaxed mb-8 max-w-md mx-auto">
              Ready to start your journey to a healthier you? Reach out to us today —
              we&apos;re here to help you achieve your wellness and weight loss goals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-forest-800 text-cream-100 px-7 py-3 text-xs tracking-widest uppercase font-dm font-medium hover:bg-forest-900 transition-colors duration-200"
              >
                Request Appointment <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+18137554461"
                className="inline-flex items-center gap-2 border border-forest-800/30 text-forest-800 px-7 py-3 text-xs tracking-widest uppercase font-dm font-medium hover:bg-forest-800/10 transition-colors duration-200"
              >
                <Phone size={13} /> (813) 755-4461
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

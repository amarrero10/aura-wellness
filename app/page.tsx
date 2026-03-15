"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Star, Phone } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BlurIn } from "@/components/ui/blur-in";

/* ─── Animation helpers ──────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ─── Data ───────────────────────────────────────────────────────── */
const symptoms = [
  "Fatigue",
  "Irritability",
  "Inflammation",
  "Joint pain",
  "Low energy",
  "Low libido",
  "Anxiety",
  "Mood swings",
  "Cravings",
  "Overeating",
  "Abdominal fat",
  "PMS",
];

const services = [
  {
    label: "Medical Weight Loss",
    description:
      "We harness the power of weight-loss treatments with a personalized approach to help every client achieve their ideal weight and health goals.",
    href: "/services/medical-weight-loss",
    icon: "⚖️",
  },
  {
    label: "Telehealth",
    description:
      "Access expert guidance for hormone optimization, anti-aging, hair growth, and weight-loss needs from anywhere.",
    href: "/services/telehealth",
    icon: "💻",
  },
  {
    label: "CoolSculpting®",
    description:
      "Cutting-edge technology to freeze and eliminate stubborn fat — no surgery, no downtime. Personalized to target the areas that matter most.",
    href: "/services/coolsculpting",
    icon: "❄️",
  },
  {
    label: "Coming Soon",
    description:
      "Our comprehensive services in Hormone Replacement Therapy are transforming lives — launching soon.",
    href: "/services/coming-soon",
    icon: "✨",
  },
];

const testimonials = [
  {
    title: "Transformed My Life",
    quote:
      "Thanks to the incredible team, my life has been completely transformed. Their guidance and expertise are unmatched. I'm grateful for the fantastic support I received, and I've achieved my weight loss goals.",
    name: "Monique D.",
    initials: "MD",
  },
  {
    title: "Exceptional Aesthetic Care",
    quote:
      "I received exceptional aesthetic care. The team provided me with personalized treatments, and I couldn't be happier with the results. Their aesthetic excellence is second to none.",
    name: "Lydia S.",
    initials: "LS",
  },
  {
    title: "Incredibly Positive Experience",
    quote:
      "My experience has been incredibly positive. They offer transformative aesthetic treatments that have taken years off my appearance. Highly recommended!",
    name: "Maria K.",
    initials: "MK",
  },
  {
    title: "Life-Changing Support and Care",
    quote:
      "I found the life-changing support and care I needed. The entire staff went above and beyond to help me with weight loss and boost my self-esteem.",
    name: "Will L.",
    initials: "WL",
  },
  {
    title: "Unmatched Expertise",
    quote:
      "The expertise is unmatched. Their team provided me with personalized advice and treatments that yielded fantastic results. I feel healthier and more confident than ever.",
    name: "Sarah M.",
    initials: "SM",
  },
  {
    title: "Efficient Weight Loss Programs",
    quote:
      "The guidance I received was instrumental in helping me achieve my weight loss goals. Their weight loss programs are efficient and tailored.",
    name: "Michael P.",
    initials: "MP",
  },
];

/* ─── Component ──────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(4, 14, 8)"
            gradientBackgroundEnd="rgb(8, 26, 16)"
            firstColor="45, 107, 67"
            secondColor="201, 162, 96"
            thirdColor="15, 44, 27"
            fourthColor="184, 134, 58"
            fifthColor="22, 61, 37"
            pointerColor="201, 162, 96"
            blendingValue="hard-light"
            size="75%"
            containerClassName="absolute inset-0 h-full w-full"
            interactive={true}
          />
        </div>

        {/* Darkening overlay for text legibility */}
        <div className="absolute inset-0 bg-forest-950/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/50 to-transparent z-[1]" />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-[2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p variants={fadeUp} custom={0} className="section-label text-gold-300 mb-5">
              Tampa Bay&apos;s Wellness Destination
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={0.08}
              className="font-cormorant text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-cream-100 leading-[0.95] tracking-[-0.02em] max-w-3xl"
            >
              Start Your{" "}
              <BlurIn
                word="Wellness Journey"
                as="em"
                className="italic text-gradient-gold"
                duration={1.2}
                delay={0.3}
              />{" "}
              with Aura Today.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.16}
              className="mt-6 text-cream-200/75 text-base lg:text-lg leading-relaxed max-w-md font-dm"
            >
              Optimize your health with weight management, hormone optimization, anti-aging, and
              hair health treatments — personalized to meet your goals.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={0.24}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link href="/contact" className="btn-gold">
                Request Appointment <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+18137554461"
                className="btn-outline text-cream-100 border-cream-100/30 hover:bg-cream-100/10 text-[11px] inline-flex items-center gap-2"
              >
                <Phone size={14} /> (813) 755-4461
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-cream-200/40 text-[10px] tracking-widest uppercase font-dm">
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={18} className="text-gold-400/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SYMPTOMS BANNER ──────────────────────────────────────── */}
      <section className="bg-forest-900 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-cream-200/50 text-xs uppercase tracking-widest font-dm mb-7"
          >
            Our personalized treatments help improve
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {symptoms.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="px-4 py-1.5 border border-gold-500/20 text-gold-400/80 text-xs tracking-wider font-dm uppercase"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT INTRO ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/algery-green5.jpg"
                  alt="Algery Al-Hafi, APRN-BC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gold-500/8 mix-blend-multiply" />
              </div>
              {/* Credential card */}
              <div
                className="absolute -bottom-6 -right-6 bg-white p-5"
                style={{ boxShadow: "0 20px 60px rgba(8,26,16,0.15)" }}
              >
                <div className="font-cormorant text-lg text-forest-800 leading-tight">
                  Algery Al-Hafi
                </div>
                <div className="text-xs uppercase tracking-widest text-gold-600 font-dm mt-0.5">
                  APRN-BC · Board Certified
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label mb-4">About Us</p>
              <h2 className="font-cormorant text-4xl lg:text-5xl text-forest-900 mb-6 leading-tight">
                Your partners in health <em className="italic text-gradient-gold">&amp; beauty</em>
              </h2>
              <p className="text-forest-700/70 leading-relaxed mb-5 font-dm">
                At Aura Wellness, we are your partners in the pursuit of health and beauty. Meet our
                dedicated Nurse Practitioner Algery Al-Hafi and learn more about our mission to
                empower your journey towards total body health and wellness.
              </p>
              <p className="text-forest-700/70 leading-relaxed mb-8 font-dm">
                Our expert providers are here to guide you in achieving your overall health goals by
                optimizing your hormones, hair health, anti-aging, and weight loss goals. Take your
                health to the next level and transform your life.{" "}
                <strong className="text-forest-800">Get back to YOU.</strong>
              </p>
              <Link href="/about" className="btn-primary">
                More Information <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-label mb-3"
              >
                What We Offer
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="font-cormorant text-4xl lg:text-5xl xl:text-6xl text-forest-900 max-w-xl"
              >
                Services designed <em className="italic text-gradient-gold">for you</em>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/services" className="btn-primary">
                All Services <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Link
                  href={svc.href}
                  className="group flex flex-col gap-4 p-7 bg-white border border-forest-100 hover:shadow-lg transition-all duration-300 card-elevated h-full"
                >
                  <span className="text-3xl" role="img" aria-hidden="true">
                    {svc.icon}
                  </span>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-cormorant text-2xl text-forest-800 group-hover:text-forest-600 transition-colors">
                      {svc.label}
                    </h3>
                    <ArrowRight
                      size={16}
                      className="text-gold-500 mt-1.5 opacity-0 group-hover:opacity-100 flex-shrink-0 transition-opacity duration-200"
                    />
                  </div>
                  <p className="text-sm text-forest-700/60 font-dm leading-relaxed">
                    {svc.description}
                  </p>
                  <span className="text-xs text-gold-600 hover:text-gold-500 uppercase tracking-widest font-dm font-medium mt-auto flex items-center gap-1">
                    Learn More <ArrowRight size={11} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ TEASER (YELLOW) ────────────────────────────────────── */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{ backgroundColor: "#C2C980" }}
      >
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-forest-700/60 text-xs tracking-widest uppercase font-dm mb-4">
                Support &amp; Answers
              </p>
              <h2 className="font-cormorant text-5xl lg:text-6xl xl:text-7xl text-forest-900 leading-[0.95]">
                Wellness
                <br />
                <em className="italic">Support</em>
              </h2>
              <div className="mt-6 w-12 h-px bg-forest-800/30" />
              <p className="mt-6 text-forest-800/70 leading-relaxed font-dm max-w-md">
                Have questions about our programs, telehealth process, or what to expect? We&apos;ve
                answered the most common ones — and our team is always a call away.
              </p>
              <Link
                href="/faq"
                className="mt-8 inline-flex items-center gap-2 bg-forest-800 text-cream-100 px-7 py-3 text-xs tracking-widest uppercase font-dm font-medium hover:bg-forest-900 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-forest-900"
              >
                View All FAQs <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="space-y-3"
            >
              {[
                {
                  q: "What services does Aura Wellness offer?",
                  a: "We offer Medical Weight Loss, CoolSculpting® body contouring, Telehealth consultations, and have Hormone Replacement Therapy coming soon.",
                },
                {
                  q: "Do you offer telehealth appointments?",
                  a: "Yes! We offer telehealth services so you can access expert guidance for weight loss, hormone optimization, and anti-aging from anywhere.",
                },
                {
                  q: "How do I get started?",
                  a: "Simply call us at (813) 755-4461 or fill out our appointment request form online. We'll get you scheduled quickly.",
                },
                {
                  q: "Is CoolSculpting® right for me?",
                  a: "CoolSculpting® is ideal for targeting stubborn fat that doesn't respond to diet and exercise. Book a free consultation and we'll evaluate your goals.",
                },
              ].map((item, i) => (
                <FAQItemPreview key={i} question={item.q} answer={item.a} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-forest-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="section-label text-gold-400 mb-3">Testimonials</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl xl:text-6xl text-cream-100">
              Don&apos;t just take <em className="italic text-gradient-gold">our word for it</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                className="bg-forest-800 p-7 flex flex-col hover:bg-forest-700 transition-colors duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} fill="#C9A260" className="text-gold-500" />
                  ))}
                </div>
                <h4 className="font-cormorant text-lg text-gold-400 mb-3">{t.title}</h4>
                <blockquote className="font-dm text-sm text-cream-200/70 leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <span className="text-gold-400 text-xs font-dm font-medium">{t.initials}</span>
                  </div>
                  <span className="text-sm text-cream-200/60 font-dm">— {t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Review CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 p-8 border border-cream-200/10"
          >
            <p className="font-cormorant text-2xl text-cream-200/80 mb-2">
              We Value Your Feedback!
            </p>
            <p className="text-sm text-cream-200/45 font-dm mb-5">
              Let us know how we&apos;re doing — your feedback helps us serve you better.
            </p>
            <a href="#" className="btn-gold inline-flex">
              Leave a Google Review <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream-200 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(201,162,96,0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(28,52,40,0.3) 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-4">Ready to Begin?</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl xl:text-6xl text-forest-900 mb-6">
              Start your journey to a <em className="italic text-gradient-gold">healthier you</em>
            </h2>
            <p className="text-forest-700/65 mb-10 leading-relaxed font-dm">
              Reach out to us today. We&apos;re here to help you achieve your wellness and weight
              loss goals. Take the first step towards a better you!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold">
                Request Appointment <ArrowRight size={14} />
              </Link>
              <a href="tel:+18137554461" className="btn-primary inline-flex items-center gap-2">
                <Phone size={14} /> (813) 755-4461
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ─── Sub-component: FAQ item preview ───────────────────────────── */
function FAQItemPreview({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-forest-800/20 bg-white/60 backdrop-blur-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-forest-800 group"
      >
        <span className="font-cormorant text-lg text-forest-900 group-hover:text-forest-700 transition-colors">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-forest-800/20 flex items-center justify-center transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-forest-700" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-sm text-forest-700/70 font-dm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

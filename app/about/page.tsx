"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 bg-forest-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(201,162,96,0.08) 0%, transparent 50%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label text-gold-400 mb-4">About Us</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-cream-100 max-w-3xl leading-[0.95]">
              Merging science with a{" "}
              <em className="italic text-gradient-gold">holistic approach</em>{" "}
              to wellness.
            </h1>
            <p className="mt-6 text-cream-200/60 max-w-xl leading-relaxed font-dm">
              Our mission is to merge cutting-edge, evidence-based science with a
              comprehensive and holistic approach to deliver exceptional treatments
              that guide you in your weight-loss and wellness journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── OUR PROMISE ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label mb-4">Our Promise</p>
              <h2 className="font-cormorant text-4xl lg:text-5xl text-forest-900 mb-6 leading-tight">
                Your weight-loss goals are{" "}
                <em className="italic text-gradient-gold">our priority</em>
              </h2>
              <div className="space-y-5 text-forest-700/70 font-dm leading-relaxed">
                <p>
                  Our dedicated team of professional, knowledgeable, and compassionate
                  experts are here to support and empower you in achieving your
                  weight-loss goals. We are devoted to helping you not only shed pounds
                  but also enhance your overall well-being, both inside and out.
                </p>
                <div className="border-l-2 border-gold-500 pl-5 py-1">
                  <p className="font-cormorant text-xl text-forest-800 italic">
                    &ldquo;Patients are at the heart of it all.&rdquo;
                  </p>
                </div>
                <p>
                  We understand that every individual is unique. That is why we take
                  pride in offering personalized treatment plans, thorough consultations,
                  and dedicated follow-up services to provide you with optimal weight
                  loss solutions.
                </p>
                <p>
                  Our approach isn&apos;t just about achieving results — it&apos;s about
                  ensuring your comfort and confidence throughout your journey with us.
                  Your health, happiness, and satisfaction are at the heart of
                  everything we do.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/our-promise.jpg"
                  alt="Our Promise — Aura Wellness"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gold-500/8 mix-blend-multiply" />
              </div>
              {/* Decorative offset boxes */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gold-500/30 pointer-events-none" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-forest-800/5 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MEET THE PRACTITIONER ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-forest-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-[3/4] relative overflow-hidden max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/algery-green3.jpg"
                  alt="Algery Al-Hafi APRN-BC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-cormorant text-2xl text-cream-100">Algery Al-Hafi</div>
                  <div className="text-xs uppercase tracking-widest text-gold-400 font-dm mt-1">APRN-BC · Board Certified Nurse Practitioner</div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label text-gold-400 mb-4">Meet Your Provider</p>
              <h2 className="font-cormorant text-4xl lg:text-5xl text-cream-100 mb-6 leading-tight">
                Algery Al-Hafi,{" "}
                <span className="text-gold-400">APRN-BC</span>
              </h2>
              <p className="text-cream-200/65 leading-relaxed mb-5 font-dm">
                Meet Algery Al-Hafi, APRN-BC — our Board-Certified Nurse Practitioner.
                With her extensive experience and expertise, Algery is dedicated to
                guiding you on your journey to a healthier and happier you.
              </p>
              <p className="text-cream-200/65 leading-relaxed mb-8 font-dm">
                She combines medical precision with a caring touch, ensuring you receive
                the highest level of care in your weight-loss and aesthetic goals. Trust
                Algery Al-Hafi to lead you towards your wellness aspirations.
              </p>
              <Link href="/contact" className="btn-gold">
                Request Appointment <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── OUR SERVICES ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="section-label mb-3">What We Offer</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-forest-900">
              Our <em className="italic text-gradient-gold">Services</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Medical Weight Loss",
                desc: "Advanced, expert-led treatments in our personalized approach to help every client achieve their ideal weight and live a healthier, happier life.",
                href: "/services/medical-weight-loss",
                icon: "⚖️",
              },
              {
                title: "CoolSculpting®",
                desc: "Cutting-edge technology to freeze and eliminate stubborn fat — no surgery, no downtime. Target the areas that matter most.",
                href: "/services/coolsculpting",
                icon: "❄️",
              },
              {
                title: "Telehealth",
                desc: "Access expert guidance from the comfort of your own home for weight loss, hormone optimization, and anti-aging.",
                href: "/services/telehealth",
                icon: "💻",
              },
              {
                title: "Coming Soon",
                desc: "Our comprehensive services in Hormone Replacement Therapy and Anti-aging & Regenerative Medicine are transforming lives and redefining wellness.",
                href: "/services/coming-soon",
                icon: "✨",
              },
            ].map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link
                  href={svc.href}
                  className="group flex flex-col gap-3 bg-white p-6 card-elevated hover:shadow-xl transition-all duration-300 h-full"
                >
                  <span className="text-2xl">{svc.icon}</span>
                  <h3 className="font-cormorant text-xl text-forest-800 group-hover:text-forest-600 transition-colors">{svc.title}</h3>
                  <p className="text-sm text-forest-700/60 font-dm leading-relaxed flex-1">{svc.desc}</p>
                  <span className="text-xs text-gold-600 uppercase tracking-widest font-dm font-medium flex items-center gap-1 mt-2">
                    Learn More <ArrowRight size={11} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Ready to Start?</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl text-forest-900 mb-6">
            Your path to a <em className="italic text-gradient-gold">better you</em> starts here
          </h2>
          <p className="text-forest-700/60 font-dm mb-8">
            Ready to start your journey to a healthier you? We&apos;re here to help you
            achieve your weight loss goals. Contact us now!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              Contact Us <ArrowRight size={14} />
            </Link>
            <a href="tel:+18137554461" className="btn-primary inline-flex items-center gap-2">
              <Phone size={14} /> (813) 755-4461
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

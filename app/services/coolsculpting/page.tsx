"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone, Check } from "lucide-react";

const targetAreas = [
  'Lower abdomen ("belly fat")',
  "Love handles (flanks)",
  "Inner & outer thighs",
  "Double chin",
  "Bra bulge & back fat",
  "Upper arms",
  "Banana roll (under the buttocks)",
];

const whyChoose = [
  "FDA-cleared technology & medically supervised care",
  "Safe, non-invasive fat reduction with no downtime",
  "Quick in-office treatment — many areas done in under an hour",
  "Personalized treatment plans tailored to your body & goals",
  "Discreet, comfortable, and professional environment",
];

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We evaluate your goals and determine if CoolSculpting® is right for you.",
  },
  {
    num: "02",
    title: "Treatment",
    desc: "A cooling applicator is placed on the target area. You'll relax, read, or even nap during your session.",
  },
  {
    num: "03",
    title: "Aftercare",
    desc: "Minimal side effects like numbness or redness may occur but usually resolve quickly.",
  },
  {
    num: "04",
    title: "Results",
    desc: "See a visible reduction in fat in as little as 3 weeks, with full results in 2 to 3 months.",
  },
];

export default function CoolSculptingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-forest-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label text-gold-400 mb-4">Services</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-cream-100 max-w-3xl leading-[0.95]">
              CoolSculpting®{" "}
              <em className="italic text-gradient-gold">Fat-Freezing</em>{" "}
              Treatment
            </h1>
            <p className="mt-4 font-cormorant text-2xl text-gold-300 italic">
              Sculpt Your Body. No Surgery. No Downtime.
            </p>
            <p className="mt-4 text-cream-200/60 max-w-xl leading-relaxed font-dm">
              Tired of stubborn fat that refuses to budge — no matter how clean you eat
              or how often you work out? At Aura Wellness, we offer CoolSculpting®,
              the world&apos;s #1 non-invasive fat-reduction treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is CoolSculpting */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label mb-3">What is CoolSculpting®?</p>
              <h2 className="font-cormorant text-4xl text-forest-900 mb-5 leading-tight">
                Freeze away fat — <em className="italic text-gradient-gold">naturally</em>
              </h2>
              <p className="text-forest-700/70 font-dm leading-relaxed mb-5">
                CoolSculpting® uses advanced cryolipolysis technology to target and
                freeze fat cells beneath the skin, safely and effectively. Once frozen,
                the treated fat cells are naturally eliminated by your body over time —
                leaving you with a smoother, more sculpted silhouette.
              </p>
              <p className="text-forest-700/70 font-dm leading-relaxed mb-6">
                This FDA-cleared treatment is perfect for those looking to reduce fat in
                areas that don&apos;t respond to diet and exercise.
              </p>

              <p className="section-label mb-4">CoolSculpting® Targets Areas Like:</p>
              <ul className="grid grid-cols-1 gap-2">
                {targetAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-sm text-forest-700/70 font-dm">
                    <Check size={14} className="text-gold-500 flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="bg-forest-800 p-8 mb-6">
                <h3 className="font-cormorant text-2xl text-cream-100 mb-5">
                  Why Choose Aura Wellness for CoolSculpting® in Tampa Bay?
                </h3>
                <ul className="space-y-3">
                  {whyChoose.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-cream-200/70 font-dm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special offer */}
              <div
                className="p-6 border-2 border-gold-500/50"
                style={{ backgroundColor: "#E8F56A" }}
              >
                <p className="font-cormorant text-2xl text-forest-900 mb-1">Special Offer</p>
                <p className="text-forest-800 font-dm font-medium">
                  Buy 3 CoolSculpting® cycles, get 1 FREE
                </p>
                <p className="text-forest-700/60 text-xs font-dm mt-1">Limited-time offer. Contact us to redeem.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="section-label mb-3">The Process</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-forest-900">
              What to Expect During Your{" "}
              <em className="italic text-gradient-gold">CoolSculpting® Experience</em>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className="bg-white p-6"
                style={{ boxShadow: "0 2px 8px rgba(8,26,16,0.06), 0 8px 32px rgba(8,26,16,0.06)" }}
              >
                <span className="font-cormorant text-4xl text-gold-500/40">{step.num}</span>
                <h3 className="font-cormorant text-xl text-forest-800 mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-forest-700/60 font-dm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Bay */}
      <section className="py-16 bg-forest-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-cormorant text-3xl lg:text-4xl text-cream-100 mb-4">
              Now Serving Tampa Bay &amp; Surrounding Areas
            </h2>
            <p className="text-cream-200/60 font-dm mb-6">
              Located in Tampa, Aura Wellness proudly welcomes clients from
              St. Petersburg, Clearwater, Wesley Chapel, Brandon, and surrounding communities.
            </p>
            <p className="font-cormorant text-xl text-gold-400 italic mb-8">
              &ldquo;Let&apos;s sculpt the best version of you — naturally.&rdquo;
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-gold">
                Book FREE Consultation <ArrowRight size={14} />
              </Link>
              <a href="tel:+18137554461" className="btn-outline text-cream-100 border-cream-100/30 hover:bg-cream-100/10 inline-flex items-center gap-2 text-[11px]">
                <Phone size={14} /> (813) 755-4461
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

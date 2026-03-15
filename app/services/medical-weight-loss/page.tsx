"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";

export default function MedicalWeightLossPage() {
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
              Medical{" "}
              <em className="italic text-gradient-gold">Weight Loss</em>
            </h1>
            <p className="mt-6 text-cream-200/60 max-w-xl leading-relaxed font-dm">
              At Aura Wellness, we are here to support you on your journey to better
              health and well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-8"
              style={{ boxShadow: "0 2px 8px rgba(8,26,16,0.06), 0 12px 40px rgba(8,26,16,0.06)" }}
            >
              <h2 className="font-cormorant text-3xl text-forest-900 mb-5">
                Achieve Your Weight Loss Goals!
              </h2>
              <p className="text-forest-700/70 font-dm leading-relaxed mb-5">
                When it comes to managing your weight, discovering an effective solution
                can be quite a journey. If you&apos;re on the lookout for a safe and proven
                method to reach your weight loss goals, consider a tailored,
                expert-guided approach.
              </p>
              <p className="text-forest-700/70 font-dm leading-relaxed mb-6">
                Our treatments include a viable approach for addressing obesity and have
                garnered support from multiple research studies.
              </p>
              <Link href="/contact" className="btn-primary inline-flex">
                Contact Us! <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-forest-800 p-8"
            >
              <h2 className="font-cormorant text-3xl text-cream-100 mb-5">
                Start Living Your Healthiest and Happiest Life!
              </h2>
              <p className="text-cream-200/65 font-dm leading-relaxed mb-5 text-sm">
                As a part of our comprehensive approach, we offer a range of medical
                tools and interventions. These recognized medical aids encompass:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Appetite suppressants",
                  "Vitamin injections",
                  "Hormone optimization",
                  "Craving management",
                  "Body fat reduction",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-cream-200/70 font-dm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-gold inline-flex">
                Contact Us! <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl lg:text-4xl text-forest-900 mb-5">
            Ready to transform your <em className="italic text-gradient-gold">life?</em>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              Request Appointment <ArrowRight size={14} />
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

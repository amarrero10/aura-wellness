"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <>
      <section className="min-h-screen pt-40 bg-forest-900 relative overflow-hidden flex items-center">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(201,162,96,0.08) 0%, transparent 60%)`,
          }}
        />
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-5xl mb-8 block" role="img" aria-hidden="true">✨</span>
            <p className="section-label text-gold-400 mb-4">Services</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-cream-100 leading-[0.95] mb-6">
              Coming <em className="italic text-gradient-gold">Soon!</em>
            </h1>
            <h2 className="font-cormorant text-3xl text-gold-300 mb-6 italic">
              Hormone Replacement Therapy
            </h2>
            <p className="text-cream-200/60 font-dm leading-relaxed mb-4 max-w-xl mx-auto">
              We&apos;re excited to announce that our comprehensive services in hormone
              replacement therapy will be launching soon.
            </p>
            <p className="text-cream-200/50 font-dm leading-relaxed mb-10 max-w-xl mx-auto">
              Our Anti-aging and Regenerative Medicine services are transforming lives
              and redefining wellness. Stay tuned for more updates!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/services" className="btn-gold">
                View Current Services <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-outline text-cream-100 border-cream-100/30 hover:bg-cream-100/10 text-[11px]">
                Get Notified
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

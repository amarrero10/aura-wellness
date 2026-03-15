"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, Eye } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────── */}
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
            backgroundImage: `radial-gradient(ellipse at 80% 50%, rgba(201,162,96,0.07) 0%, transparent 50%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label text-gold-400 mb-4">Legal</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-cream-100 max-w-2xl leading-[0.95]">
              Accessibility <em className="italic text-gradient-gold">Notice</em>
            </h1>
            <p className="mt-6 text-cream-200/55 max-w-xl leading-relaxed font-dm">
              Aura Wellness is committed to diversity, inclusion, and meeting the needs of all of
              our customers — including those with disabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTENT ───────────────────────────────────────────────── */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">

          {/* Commitment block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white p-8 border-l-4 border-gold-500 mb-10"
            style={{ boxShadow: "0 2px 8px rgba(8,26,16,0.05), 0 8px 32px rgba(8,26,16,0.05)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye size={18} className="text-gold-500 flex-shrink-0" />
              <h2 className="font-cormorant text-2xl text-forest-900">Our Commitment</h2>
            </div>
            <p className="text-sm text-forest-700/70 font-dm leading-relaxed">
              Aura Wellness strives to make our website accessible to everyone. We are committed to
              diversity, inclusion, and meeting the needs of all of our customers, including those
              with disabilities.
            </p>
          </motion.div>

          {/* WCAG block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="font-cormorant text-2xl lg:text-3xl text-forest-900 mb-5">
              WCAG 2.0 AA Compliance
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-forest-700/70 font-dm leading-relaxed">
                We are continually improving our website to comply with the accessibility guidelines
                outlined in WCAG 2.0 AA (Web Content Accessibility Guidelines). Further
                accessibility efforts are under way and we continue to update our website to improve
                the experience for all users.
              </p>
              <p className="text-sm text-forest-700/70 font-dm leading-relaxed">
                In the meantime, if the format of any material on our web pages interferes with your
                ability to access the information, please contact us to request assistance. We are
                happy to provide information in an alternative format upon request.
              </p>
            </div>
          </motion.div>

          <div className="h-px bg-forest-800/8 mb-10" />

          {/* Contact block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-forest-800 p-8 lg:p-10"
          >
            <h2 className="font-cormorant text-3xl text-cream-100 mb-2">
              Need Assistance?
            </h2>
            <p className="text-cream-200/55 font-dm text-sm mb-7">
              If you have questions or comments about our website&apos;s accessibility, please don&apos;t
              hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              <a
                href="tel:+18137554461"
                className="flex items-center gap-3 text-cream-200/70 hover:text-gold-400 transition-colors duration-200 font-dm text-sm"
              >
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                (813) 755-4461
              </a>
              <a
                href="mailto:ask@theaurawellness.com"
                className="flex items-center gap-3 text-cream-200/70 hover:text-gold-400 transition-colors duration-200 font-dm text-sm"
              >
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                ask@theaurawellness.com
              </a>
            </div>
            <div className="pt-6 border-t border-cream-200/10">
              <Link href="/contact" className="btn-gold inline-flex">
                Submit an Inquiry <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

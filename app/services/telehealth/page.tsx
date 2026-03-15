"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";

export default function TelehealthPage() {
  const [formState, setFormState] = useState({
    name: "", email: "", message: "", phone: "", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Telehealth —{" "}
              <em className="italic text-gradient-gold">care from anywhere</em>
            </h1>
            <p className="mt-6 text-cream-200/60 max-w-xl leading-relaxed font-dm">
              We are proud to offer the convenience of telehealth services, allowing you
              to access expert guidance and support for your hormone optimization,
              anti-aging, hair growth, and weight-loss needs from anywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Step 1 + Form */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="font-cormorant text-4xl text-gold-500/50">Step 1</span>
              <div>
                <h2 className="font-cormorant text-3xl text-forest-900 mb-2">Make An Appointment</h2>
                <p className="text-forest-700/65 font-dm">
                  Call us at{" "}
                  <a href="tel:+18137554461" className="text-gold-600 hover:text-gold-500 font-medium">
                    (813) 755-4461
                  </a>{" "}
                  and ask for a virtual telehealth appointment, and one will be
                  scheduled for you. Or fill out the form below and we will reach out to
                  you within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {submitted ? (
            <div className="bg-forest-800 p-10 text-center">
              <p className="font-cormorant text-3xl text-cream-100 mb-3">Message Received!</p>
              <p className="text-cream-200/60 font-dm mb-6">We&apos;ll reach out to you within 24 hours to schedule your telehealth appointment.</p>
              <button onClick={() => setSubmitted(false)} className="btn-gold">Send Another</button>
            </div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 space-y-5"
              style={{ boxShadow: "0 2px 8px rgba(8,26,16,0.06), 0 12px 40px rgba(8,26,16,0.07)" }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">Name *</label>
                  <input
                    type="text" required value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full border border-forest-200 px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">Phone Number *</label>
                  <input
                    type="tel" required value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full border border-forest-200 px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="(813) 555-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">Email *</label>
                <input
                  type="email" required value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full border border-forest-200 px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">Message</label>
                <textarea
                  rows={4} value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full border border-forest-200 px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  placeholder="Tell us what you'd like help with..."
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox" required checked={formState.consent}
                  onChange={(e) => setFormState({ ...formState, consent: e.target.checked })}
                  className="mt-1 accent-forest-700"
                />
                <span className="text-xs text-forest-700/50 font-dm leading-relaxed">
                  Check this box to consent to receive SMS text messages from Aura Wellness.
                  Message frequency varies. Standard message and data rates may apply. Text
                  STOP to opt out at any time. See our{" "}
                  <Link href="/privacy" className="underline hover:text-forest-700">Privacy Policy</Link>.
                </span>
              </label>
              <button type="submit" className="btn-primary w-full justify-center inline-flex">
                Submit <ArrowRight size={14} />
              </button>
            </motion.form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-cream-200">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl lg:text-4xl text-forest-900 mb-5">
            Prefer to <em className="italic text-gradient-gold">call us directly?</em>
          </h2>
          <a href="tel:+18137554461" className="btn-gold inline-flex items-center gap-2">
            <Phone size={14} /> (813) 755-4461
          </a>
        </div>
      </section>
    </>
  );
}

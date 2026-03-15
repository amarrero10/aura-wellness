"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";

const services = [
  {
    id: "medical-weight-loss",
    title: "Medical Weight Loss",
    tagline: "Achieve your ideal weight",
    icon: "⚖️",
    description:
      "Embark on your journey to a healthier, happier you with our expert weight loss services. Our dedicated team is committed to helping you reach your weight loss goals and improve your overall well-being. At our clinic, we cater to the individual.",
    detail:
      "We harness the power of advanced, expert-led treatments in our personalized approach to help every client achieve their ideal weight and live a healthier, happier life. Our tools include appetite suppressants, vitamin injections, and hormone optimization.",
    href: "/services/medical-weight-loss",
    image: "https://placehold.co/600x400/1C3428/2d6b43?text=.",
    color: "bg-forest-800",
  },
  {
    id: "coolsculpting",
    title: "CoolSculpting®",
    tagline: "Sculpt your body — no surgery, no downtime",
    icon: "❄️",
    description:
      "At Aura Wellness, we offer CoolSculpting® as a non-invasive solution to help you reduce stubborn fat and contour your body — without surgery or downtime. Experience a personalized approach tailored to your goals.",
    detail:
      "CoolSculpting® uses advanced cryolipolysis technology to target and freeze fat cells beneath the skin, safely and effectively. Once frozen, the treated fat cells are naturally eliminated by your body over time — leaving you with a smoother, more sculpted silhouette.",
    href: "/services/coolsculpting",
    image: "https://placehold.co/600x400/1C3428/2d6b43?text=.",
    color: "bg-forest-700",
  },
  {
    id: "telehealth",
    title: "Telehealth",
    tagline: "Care from the comfort of your home",
    icon: "💻",
    description:
      "At Aura Wellness, we understand that your health and well-being are a top priority. That's why we offer telehealth services, providing you with a convenient and secure way to access healthcare from the comfort of your home or office.",
    detail:
      "We are proud to offer the convenience of telehealth services, allowing you to access expert guidance and support for your hormone optimization, anti-aging, hair growth, and weight-loss needs from anywhere.",
    href: "/services/telehealth",
    image: "https://placehold.co/600x400/1C3428/2d6b43?text=.",
    color: "bg-forest-800",
  },
  {
    id: "coming-soon",
    title: "Hormone Replacement Therapy",
    tagline: "Coming Soon",
    icon: "✨",
    description:
      "We're excited to announce that our comprehensive services in hormone replacement therapy and aesthetic medicine will be launching soon. Stay tuned for more updates!",
    detail:
      "Our comprehensive services in Hormone Replacement Therapy and Anti-aging & Regenerative Medicine are transforming lives and redefining wellness.",
    href: "/services/coming-soon",
    image: "https://placehold.co/600x400/1C3428/2d6b43?text=.",
    color: "bg-forest-700",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-40 pb-20 bg-cream-200 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at 80% 50%, rgba(201,162,96,0.12) 0%, transparent 50%)`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-4">What We Offer</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-forest-900 max-w-3xl leading-[0.95]">
              Our{" "}
              <em className="italic text-gradient-gold">Services</em>
            </h1>
            <p className="mt-6 text-forest-700/65 max-w-xl leading-relaxed font-dm">
              Every program is evidence-based, led by our Board-Certified Nurse
              Practitioner, and personalized to your unique goals. Serving Tampa Bay
              and surrounding areas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Appointment <ArrowRight size={14} />
              </Link>
              <a href="tel:+18137554461" className="btn-outline text-forest-800 border-forest-300 hover:bg-forest-800/5 inline-flex items-center gap-2 text-[11px]">
                <Phone size={14} /> (813) 755-4461
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES LIST ─────────────────────────────────────────── */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.05 }}
              className={`grid lg:grid-cols-2 overflow-hidden ${
                i % 2 === 0 ? "" : "lg:[direction:rtl]"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover lg:[direction:ltr]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-950/30 to-transparent" />
                <div className="absolute inset-0 bg-gold-500/8 mix-blend-multiply" />
              </div>

              {/* Content */}
              <div className={`${svc.color} p-8 lg:p-12 flex flex-col justify-center lg:[direction:ltr]`}>
                <span className="text-3xl mb-4" role="img" aria-hidden="true">{svc.icon}</span>
                <p className="section-label text-gold-400 mb-2">{svc.tagline}</p>
                <h2 className="font-cormorant text-3xl lg:text-4xl text-cream-100 mb-4">{svc.title}</h2>
                <p className="text-cream-200/65 text-sm leading-relaxed mb-4 font-dm">{svc.description}</p>
                <p className="text-cream-200/50 text-sm leading-relaxed mb-8 font-dm">{svc.detail}</p>
                <div className="flex flex-wrap gap-3">
                  <Link href={svc.href} className="btn-gold">
                    More Information <ArrowRight size={14} />
                  </Link>
                  <Link href="/contact" className="btn-outline text-cream-100 border-cream-100/30 hover:bg-cream-100/10 text-[11px]">
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT FORM SECTION ──────────────────────────────────── */}
      <section className="py-24 bg-cream-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <p className="section-label mb-3">Get Started</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-forest-900">
              Ready to <em className="italic text-gradient-gold">get started?</em>
            </h2>
            <p className="mt-4 text-forest-700/60 font-dm">
              Fill out the form below and we will be happy to connect with you!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <Link href="/contact" className="btn-gold inline-flex">
              Go to Contact Form <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

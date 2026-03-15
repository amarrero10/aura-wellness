"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin, Clock, Check } from "lucide-react";

const contactCards = [
  {
    title: "Call Us",
    description: "(813) 755-4461",
    icon: Phone,
    href: "tel:+18137554461",
    action: "Call Now",
  },
  {
    title: "Email Us",
    description: "ask@theaurawellness.com",
    icon: Mail,
    href: "mailto:ask@theaurawellness.com",
    action: "Send Email",
  },
  {
    title: "Office Hours",
    description: "Mon – Fri\nBy Appointment",
    icon: Clock,
    href: null,
    action: null,
  },
  {
    title: "Location",
    description: "3690 W Gandy Blvd APT 405\nTampa, FL 33611",
    icon: MapPin,
    href: "https://maps.google.com/?q=3690+W+Gandy+Blvd+APT+405+Tampa+FL+33611",
    action: "Get Directions",
  },
];

type FormFields = "name" | "email" | "phone" | "message" | "consent";
type FieldErrors = Partial<Record<FormFields, string>>;

function validate(fields: {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}): FieldErrors {
  const errors: FieldErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required.";
  } else if (fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (fields.phone.trim() && !/^[\d\s\-().+]{7,20}$/.test(fields.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  if (fields.phone.trim() && !fields.consent) {
    errors.consent = "Please consent to SMS communications since you provided a phone number.";
  }

  return errors;
}

export default function ContactUsPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBlur = (field: FormFields) => {
    const errors = validate(formState);
    setFieldErrors((prev) => ({
      ...prev,
      [field]: errors[field],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate(formState);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6b36a527-ca1e-4d6b-a58b-5b0b2a3d2307",
          subject: "New Appointment Request — Aura Wellness",
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
          sms_consent: formState.consent ? "Yes — consented to SMS" : "No",
          from_name: "Aura Wellness Website",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", phone: "", message: "", consent: false });
      } else {
        setError("Something went wrong. Please try again or call us at (813) 755-4461.");
      }
    } catch {
      setError("Unable to send message. Please call us at (813) 755-4461.");
    } finally {
      setIsLoading(false);
    }
  };

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
            <p className="section-label text-gold-400 mb-4">Get in Touch</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-cream-100 max-w-3xl leading-[0.95]">
              Contact <em className="italic text-gradient-gold">Us</em>
            </h1>
            <p className="mt-6 text-cream-200/55 max-w-xl leading-relaxed font-dm">
              Ready to start your journey to a healthier you? Reach out to us today.
              We&apos;re here to help you achieve your wellness and weight loss goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT CARDS ─────────────────────────────────────────── */}
      <section className="py-14 bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="bg-white p-6 card-elevated"
              >
                <card.icon size={20} className="text-gold-500 mb-3" />
                <h3 className="font-cormorant text-xl text-forest-800 mb-1">{card.title}</h3>
                <p className="text-sm text-forest-700/55 font-dm leading-relaxed whitespace-pre-line mb-4">
                  {card.description}
                </p>
                {card.action && card.href && (
                  <a
                    href={card.href}
                    target={card.href.startsWith("https://maps") ? "_blank" : undefined}
                    rel={card.href.startsWith("https://maps") ? "noopener noreferrer" : undefined}
                    className="text-xs text-gold-600 hover:text-gold-500 uppercase tracking-widest font-dm font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    {card.action} <ArrowRight size={11} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <p className="section-label mb-3">Send Us A Message</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-forest-900">
              Fill out the form below to{" "}
              <em className="italic text-gradient-gold">schedule your consultation</em>
            </h2>
            <p className="mt-3 text-forest-700/55 font-dm">
              Fill out the form below and we will be happy to connect with you!
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-forest-800 p-10 flex flex-col items-center justify-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mb-5">
                <Check size={24} className="text-gold-400" />
              </div>
              <h3 className="font-cormorant text-3xl text-cream-100 mb-3">Message Received!</h3>
              <p className="text-cream-200/60 font-dm mb-7 max-w-sm">
                Thank you for reaching out. We&apos;ll be in touch soon to help you start
                your wellness journey.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-gold">
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 lg:p-10 space-y-5"
              style={{ boxShadow: "0 2px 8px rgba(8,26,16,0.06), 0 12px 40px rgba(8,26,16,0.07)" }}
            >
              <div>
                <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onBlur={() => handleBlur("name")}
                  className={`w-full border px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none transition-colors placeholder:text-forest-700/25 ${
                    fieldErrors.name ? "border-red-400 bg-red-50/40 focus:border-red-400" : "border-forest-200 focus:border-gold-500"
                  }`}
                  placeholder="Your full name"
                />
                {fieldErrors.name && (
                  <p className="mt-1.5 text-xs text-red-500 font-dm">{fieldErrors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onBlur={() => handleBlur("email")}
                  className={`w-full border px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none transition-colors placeholder:text-forest-700/25 ${
                    fieldErrors.email ? "border-red-400 bg-red-50/40 focus:border-red-400" : "border-forest-200 focus:border-gold-500"
                  }`}
                  placeholder="your@email.com"
                />
                {fieldErrors.email && (
                  <p className="mt-1.5 text-xs text-red-500 font-dm">{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  onBlur={() => handleBlur("phone")}
                  className={`w-full border px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none transition-colors placeholder:text-forest-700/25 ${
                    fieldErrors.phone ? "border-red-400 bg-red-50/40 focus:border-red-400" : "border-forest-200 focus:border-gold-500"
                  }`}
                  placeholder="(813) 555-0000"
                />
                {fieldErrors.phone && (
                  <p className="mt-1.5 text-xs text-red-500 font-dm">{fieldErrors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                  Message *
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onBlur={() => handleBlur("message")}
                  className={`w-full border px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none transition-colors resize-none placeholder:text-forest-700/25 ${
                    fieldErrors.message ? "border-red-400 bg-red-50/40 focus:border-red-400" : "border-forest-200 focus:border-gold-500"
                  }`}
                  placeholder="Tell us how we can help you..."
                />
                {fieldErrors.message && (
                  <p className="mt-1.5 text-xs text-red-500 font-dm">{fieldErrors.message}</p>
                )}
              </div>

              {/* SMS Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formState.consent}
                    onChange={(e) => {
                      setFormState({ ...formState, consent: e.target.checked });
                      setFieldErrors((prev) => ({ ...prev, consent: undefined }));
                    }}
                    className="mt-1 accent-forest-700"
                  />
                  <span className="text-xs text-forest-700/50 font-dm leading-relaxed">
                    (Optional) Check this box to consent to receive SMS text messages from Aura Wellness.
                    Message frequency varies. Standard message and data rates may apply. Text{" "}
                    <strong>STOP</strong> to opt out at any time. See our{" "}
                    <Link href="/privacy" className="underline hover:text-forest-700 transition-colors">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {fieldErrors.consent && (
                  <p className="mt-1.5 text-xs text-red-500 font-dm">{fieldErrors.consent}</p>
                )}
              </div>

              {error && (
                <p className="text-sm text-red-600 font-dm bg-red-50 border border-red-200 px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full justify-center inline-flex disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Submit <ArrowRight size={14} /></>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}

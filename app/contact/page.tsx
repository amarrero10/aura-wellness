"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, Clock, MapPin, Check } from "lucide-react";

const contactOptions = [
  {
    title: "Call Us",
    description: "(813) 755-4461",
    icon: Phone,
    action: "Call Now",
    href: "tel:+18137554461",
  },
  {
    title: "Email Us",
    description: "ask@theaurawellness.com",
    icon: Mail,
    action: "Send Email",
    href: "mailto:ask@theaurawellness.com",
  },
  {
    title: "Office Hours",
    description: "Mon – Fri\nBy Appointment",
    icon: Clock,
    action: null,
    href: null,
  },
  {
    title: "Location",
    description: "3690 W Gandy Blvd APT 405\nTampa, FL 33611",
    icon: MapPin,
    action: "Get Directions",
    href: "https://maps.google.com/?q=3690+W+Gandy+Blvd+APT+405+Tampa+FL+33611",
  },
];

const services = [
  "Medical Weight Loss",
  "CoolSculpting®",
  "Telehealth Services",
  "Hormone Replacement Therapy",
  "Not sure yet — help me decide",
];

type FormFields = "firstName" | "lastName" | "email" | "phone" | "service" | "message" | "consent";
type FieldErrors = Partial<Record<FormFields, string>>;

function validate(fields: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}): FieldErrors {
  const errors: FieldErrors = {};

  if (!fields.firstName.trim()) {
    errors.firstName = "First name is required.";
  } else if (fields.firstName.trim().length < 2) {
    errors.firstName = "First name must be at least 2 characters.";
  }

  if (!fields.lastName.trim()) {
    errors.lastName = "Last name is required.";
  } else if (fields.lastName.trim().length < 2) {
    errors.lastName = "Last name must be at least 2 characters.";
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

  return errors;
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          name: `${formState.firstName} ${formState.lastName}`,
          email: formState.email,
          phone: formState.phone,
          service_interest: formState.service || "Not specified",
          message: formState.message,
          sms_consent: formState.consent ? "Yes — consented to SMS" : "No",
          from_name: "Aura Wellness Website",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          consent: false,
        });
      } else {
        setError("Something went wrong. Please try again or call us at (813) 755-4461.");
      }
    } catch {
      setError("Unable to send message. Please call us at (813) 755-4461.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = (field: FormFields) =>
    `w-full border px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none transition-colors duration-200 placeholder:text-forest-700/25 ${
      fieldErrors[field]
        ? "border-red-400 bg-red-50/40 focus:border-red-400"
        : "border-forest-200 bg-cream-50 focus:border-gold-500"
    }`;

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
              Ready to start your journey to a healthier you? Reach out to us today. We&apos;re here
              to help you achieve your wellness and weight loss goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT OPTIONS ───────────────────────────────────────── */}
      <section className="py-14 bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactOptions.map((opt, i) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="bg-white p-6 card-elevated"
              >
                <opt.icon size={20} className="text-gold-500 mb-3" />
                <h3 className="font-cormorant text-xl text-forest-800 mb-1">{opt.title}</h3>
                <p className="text-sm text-forest-700/55 font-dm leading-relaxed whitespace-pre-line mb-4">
                  {opt.description}
                </p>
                {opt.action && opt.href && (
                  <a
                    href={opt.href}
                    target={opt.href.startsWith("https://maps") ? "_blank" : undefined}
                    rel={opt.href.startsWith("https://maps") ? "noopener noreferrer" : undefined}
                    className="text-xs text-gold-600 hover:text-gold-500 uppercase tracking-widest font-dm font-medium transition-colors duration-200 flex items-center gap-1"
                  >
                    {opt.action} <ArrowRight size={11} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM SECTION ──────────────────────────────────────────── */}
      <section id="form" className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Left: what to expect */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
            >
              <p className="section-label mb-4">What Happens Next</p>
              <h2 className="font-cormorant text-3xl lg:text-4xl text-forest-900 mb-6">
                What to expect when you reach out
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "We review your request",
                    desc: "Our team carefully reviews every message before getting back to you — no generic responses.",
                  },
                  {
                    step: "02",
                    title: "We reach out promptly",
                    desc: "A member of our team will contact you to discuss your goals and answer any questions.",
                  },
                  {
                    step: "03",
                    title: "Free consultation",
                    desc: "We'll schedule a consultation to review your needs and recommend the right services.",
                  },
                  {
                    step: "04",
                    title: "Start your wellness journey",
                    desc: "Begin your personalized treatment plan guided by our Board-Certified Nurse Practitioner.",
                  },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="font-cormorant text-3xl text-gold-500/40 leading-none w-10 flex-shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-dm font-medium text-forest-800 text-sm mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-forest-700/55 font-dm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-forest-800 p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center mb-5">
                    <Check size={24} className="text-gold-400" />
                  </div>
                  <h3 className="font-cormorant text-3xl text-cream-100 mb-3">Message Received!</h3>
                  <p className="text-cream-200/60 font-dm mb-7 max-w-sm">
                    Thank you for reaching out. We&apos;ll be in touch soon to help you start your
                    wellness journey.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-gold">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-8 lg:p-10"
                  style={{
                    boxShadow: "0 2px 8px rgba(8,26,16,0.06), 0 12px 40px rgba(8,26,16,0.07)",
                  }}
                >
                  <h3 className="font-cormorant text-2xl text-forest-900 mb-7">
                    Schedule Your Free Consultation
                  </h3>
                  <div className="space-y-5">
                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formState.firstName}
                          onChange={(e) =>
                            setFormState({ ...formState, firstName: e.target.value })
                          }
                          onBlur={() => handleBlur("firstName")}
                          className={inputClass("firstName")}
                          placeholder="Jane"
                        />
                        {fieldErrors.firstName && (
                          <p className="mt-1.5 text-xs text-red-500 font-dm">
                            {fieldErrors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formState.lastName}
                          onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                          onBlur={() => handleBlur("lastName")}
                          className={inputClass("lastName")}
                          placeholder="Smith"
                        />
                        {fieldErrors.lastName && (
                          <p className="mt-1.5 text-xs text-red-500 font-dm">
                            {fieldErrors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onBlur={() => handleBlur("email")}
                        className={inputClass("email")}
                        placeholder="jane@example.com"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1.5 text-xs text-red-500 font-dm">{fieldErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        onBlur={() => handleBlur("phone")}
                        className={inputClass("phone")}
                        placeholder="(813) 555-0000"
                      />
                      {fieldErrors.phone && (
                        <p className="mt-1.5 text-xs text-red-500 font-dm">{fieldErrors.phone}</p>
                      )}
                    </div>

                    {/* Service interest */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                        I&apos;m Interested In
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full border border-forest-200 bg-cream-50 px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none focus:border-gold-500 transition-colors duration-200 appearance-none"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-forest-700/50 font-dm mb-1.5">
                        Tell Us About Your Goals *
                      </label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        onBlur={() => handleBlur("message")}
                        className={`w-full border px-4 py-3 text-sm text-forest-900 font-dm focus:outline-none transition-colors duration-200 resize-none placeholder:text-forest-700/25 ${
                          fieldErrors.message
                            ? "border-red-400 bg-red-50/40 focus:border-red-400"
                            : "border-forest-200 bg-cream-50 focus:border-gold-500"
                        }`}
                        placeholder="Tell us what brings you to Aura Wellness and what you're hoping to achieve..."
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
                          (Optional) Check this box to consent to receive SMS text messages from
                          Aura Wellness. Message frequency varies. Standard message and data rates
                          may apply. Text <strong>STOP</strong> to opt out at any time. See our{" "}
                          <Link
                            href="/privacy"
                            className="underline hover:text-forest-700 transition-colors"
                          >
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
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Request <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

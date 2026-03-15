"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services/medical-weight-loss", label: "Medical Weight Loss" },
    { href: "/services/coolsculpting", label: "CoolSculpting®" },
    { href: "/services/telehealth", label: "Telehealth" },
    { href: "/services/coming-soon", label: "Coming Soon" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/accessibility", label: "Accessibility" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-200 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 focus-visible:outline-2 focus-visible:outline-gold-500">
              <Image
                src="/logo.png"
                alt="Aura Wellness"
                width={72}
                height={72}
                className="w-auto h-16 object-contain"
              />
            </Link>
            <p className="text-cream-400/70 text-sm leading-relaxed mb-6 font-dm">
              Your partner in health and beauty. Personalized medical weight loss,
              CoolSculpting®, hormone optimization, and anti-aging therapies in the
              Tampa Bay area.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-cream-200/20 flex items-center justify-center text-cream-200/50 hover:text-gold-400 hover:border-gold-400/50 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold-500"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold-400 font-dm font-medium mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-200/60 hover:text-cream-200 transition-colors duration-200 font-dm focus-visible:outline-2 focus-visible:outline-gold-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold-400 font-dm font-medium mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-200/60 hover:text-cream-200 transition-colors duration-200 font-dm focus-visible:outline-2 focus-visible:outline-gold-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold-400 font-dm font-medium mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ask@theaurawellness.com"
                  className="flex items-start gap-3 text-sm text-cream-200/60 hover:text-cream-200 transition-colors duration-200 font-dm focus-visible:outline-2 focus-visible:outline-gold-500"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-gold-500/70" />
                  ask@theaurawellness.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18137554461"
                  className="flex items-start gap-3 text-sm text-cream-200/60 hover:text-cream-200 transition-colors duration-200 font-dm focus-visible:outline-2 focus-visible:outline-gold-500"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-gold-500/70" />
                  (813) 755-4461
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-cream-200/60 font-dm">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-gold-500/70" />
                  3690 W Gandy Blvd APT 405<br />Tampa, FL 33611
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-gold inline-flex text-[11px]"
              >
                Request Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-cream-200/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-200/30 font-dm">
            © {new Date().getFullYear()} Aura Wellness. All Rights Reserved.
          </p>
          <p className="text-xs text-cream-200/20 font-dm">
            Not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

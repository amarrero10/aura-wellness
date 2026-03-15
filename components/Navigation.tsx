"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const hasDarkHero = pathname !== "/faq" && pathname !== "/services";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-100/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-4"
            >
              <Image
                src="/logo.png"
                alt="Aura Wellness"
                width={52}
                height={52}
                className="w-auto h-12 object-contain"
              />
              <span className="sr-only">Aura Wellness</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link pb-0.5 ${!scrolled && hasDarkHero ? "!text-cream-100 hover:!text-gold-300" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary text-[11px]"
              >
                Request Appointment
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold-500 ${!scrolled && hasDarkHero && !mobileOpen ? "text-cream-100" : "text-forest-800"}`}
                aria-label="Toggle menu"
              >
                <span className="flex flex-col justify-center items-center w-[22px] h-[22px] gap-0">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="block h-[1.5px] w-full bg-current origin-center"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="block h-[1.5px] w-full bg-current mt-[5px]"
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="block h-[1.5px] w-full bg-current mt-[5px] origin-center"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream-100 transition-transform duration-500 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-12">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-cormorant text-4xl text-forest-800 hover:text-gold-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary inline-flex"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

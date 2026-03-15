"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Phone, MapPin, Shield, Database, Lock, RefreshCw } from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Collection of Your Personal Information",
    paragraphs: [
      "Aura Wellness collects personally identifiable information, such as your name, e-mail address, and telephone number when you voluntarily submit it through our website. There is also information about your computer hardware and software that is automatically collected. This information can include your IP address, browser type, domain names, access times, and referring website addresses.",
      "This information is used for the operation of our services, to maintain quality of the service, and to provide general statistics regarding use of this website. Please keep in mind that if you directly disclose personally identifiable information or personally sensitive data through public message boards, this information may be collected and used by others.",
      "Aura Wellness encourages you to review the privacy statements of websites you choose to link to from our website so that you can understand how those websites collect, use, and share your information. Aura Wellness is not responsible for the privacy statements or other content on any other websites.",
    ],
  },
  {
    icon: Shield,
    title: "Use of Cookies",
    paragraphs: [
      "This website uses \"cookies\" to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.",
      "You may choose to decline cookies if your browser permits, but doing so may affect your ability to access or use certain features of this website.",
    ],
  },
  {
    icon: Lock,
    title: "Security of Your Personal Information",
    paragraphs: [
      "Aura Wellness secures your personal information from unauthorized access, use, or disclosure. We store personally identifiable information on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure.",
      "When personal information is transmitted to other websites, it is protected through the use of encryption, such as the Secure Socket Layer (SSL) protocol.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Changes to This Statement",
    paragraphs: [
      "Aura Wellness will occasionally update this Privacy Policy to reflect company and customer feedback. We encourage you to periodically review this page to be informed of how we are protecting your information. Continued use of this website following the posting of changes constitutes your acceptance of those changes.",
    ],
  },
];

export default function PrivacyPage() {
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
              Privacy <em className="italic text-gradient-gold">Policy</em>
            </h1>
            <p className="mt-6 text-cream-200/55 max-w-xl leading-relaxed font-dm">
              We are committed to protecting your privacy and developing technology that gives you
              the most powerful and safe online experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white p-8 border-l-4 border-gold-500"
            style={{ boxShadow: "0 2px 8px rgba(8,26,16,0.05), 0 8px 32px rgba(8,26,16,0.05)" }}
          >
            <p className="text-forest-700/80 font-dm leading-relaxed">
              This Statement of Privacy applies to the Aura Wellness website and governs data
              collection and usage. By using this website, you consent to the data practices
              described in this statement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTIONS ──────────────────────────────────────────────── */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <section.icon size={18} className="text-gold-500 flex-shrink-0" />
                <h2 className="font-cormorant text-2xl lg:text-3xl text-forest-900">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 pl-7">
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-sm text-forest-700/70 font-dm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              {i < sections.length - 1 && (
                <div className="mt-10 h-px bg-forest-800/8" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────────── */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-forest-800 p-8 lg:p-10"
          >
            <h2 className="font-cormorant text-3xl text-cream-100 mb-2">
              Contact Information
            </h2>
            <p className="text-cream-200/55 font-dm text-sm mb-7">
              If you have questions or concerns about this Privacy Policy, please reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="tel:+18137554461"
                className="flex items-center gap-3 text-cream-200/70 hover:text-gold-400 transition-colors duration-200 font-dm text-sm"
              >
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                (813) 755-4461
              </a>
              <a
                href="https://maps.google.com/?q=3690+W+Gandy+Blvd+APT+405+Tampa+FL+33611"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream-200/70 hover:text-gold-400 transition-colors duration-200 font-dm text-sm"
              >
                <MapPin size={15} className="text-gold-500 flex-shrink-0" />
                3690 W Gandy Blvd APT 405, Tampa, FL 33611
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-cream-200/10">
              <Link href="/contact" className="btn-gold inline-flex">
                Send Us a Message <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

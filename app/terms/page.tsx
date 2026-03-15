"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, FileText, Link2, ShieldOff, MessageSquare, AlertTriangle, Copyright } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Modification of These Terms of Use",
    content: [
      "Aura Wellness reserves the right to change the terms, conditions, and notices under which this website is offered, including but not limited to the charges associated with the use of this website. Your continued use of this website following the posting of any changes constitutes your acceptance of those changes.",
    ],
  },
  {
    icon: Link2,
    title: "Links to Third Party Sites",
    content: [
      "This website may contain links to other websites (\"Linked Sites\"). The Linked Sites are not under the control of Aura Wellness and we are not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site.",
      "Aura Wellness is not responsible for webcasting or any other form of transmission received from any Linked Site. These links are provided to you only as a convenience, and the inclusion of any link does not imply endorsement by Aura Wellness of the site or any association with its operators.",
    ],
  },
  {
    icon: ShieldOff,
    title: "No Unlawful or Prohibited Use",
    content: [
      "As a condition of your use of this website, you warrant to Aura Wellness that you will not use this website for any purpose that is unlawful or prohibited by these terms, conditions, and notices.",
      "You may not use this website in any manner which could damage, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of it. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through this website.",
    ],
  },
  {
    icon: MessageSquare,
    title: "Use of Communication Services",
    content: [
      "This website may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, \"Communication Services\"). You agree to use the Communication Services only to post, send, and receive messages and material that are proper and related to the particular Communication Service.",
      "By way of example, and not as a limitation, you agree that when using a Communication Service, you will not:",
    ],
    list: [
      "Defame, abuse, harass, stalk, threaten, or otherwise violate the legal rights of others.",
      "Publish, post, upload, distribute, or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent, or unlawful material or information.",
      "Upload files that contain software or other material protected by intellectual property laws unless you own or control the rights or have received all necessary consents.",
      "Upload files that contain viruses, corrupted files, or any other software or programs that may damage the operation of another's computer.",
      "Advertise or offer to sell or buy any goods or services for any business purpose, unless the Communication Service specifically allows such messages.",
      "Conduct or forward surveys, contests, pyramid schemes, or chain letters.",
      "Download any file posted by another user that you know, or reasonably should know, cannot be legally distributed in such manner.",
      "Falsify or delete any author attributions, legal notices, or proprietary designations of the origin or source of software or other material.",
      "Restrict or inhibit any other user from using and enjoying the Communication Services.",
      "Violate any code of conduct or other guidelines applicable to any particular Communication Service.",
      "Harvest or otherwise collect information about others, including e-mail addresses, without their consent.",
      "Violate any applicable laws or regulations.",
    ],
    afterList: "Aura Wellness has no obligation to monitor the Communication Services. However, we reserve the right to review materials posted to a Communication Service and to remove any materials in our sole discretion. Aura Wellness reserves the right to terminate your access to any or all Communication Services at any time without notice for any reason whatsoever. Materials uploaded to a Communication Service may be subject to posted limitations on usage, reproduction, and/or dissemination, and you are responsible for adhering to such limitations.",
  },
  {
    icon: AlertTriangle,
    title: "Liability Disclaimer",
    uppercase: true,
    content: [
      "The information, software, products, and services included in or available through this website may include inaccuracies or typographical errors. Changes are periodically added to the information herein. Aura Wellness and/or its suppliers may make improvements and/or changes to this website at any time.",
      "Advice received via this website should not be relied upon for personal, medical, legal, or financial decisions. You should consult an appropriate professional for specific advice tailored to your situation.",
      "Aura Wellness and/or its suppliers make no representations about the suitability, reliability, availability, timeliness, and accuracy of the information, software, products, services, and related graphics contained on this website for any purpose. To the maximum extent permitted by applicable law, all such information, software, products, services, and related graphics are provided \"as is\" without warranty or condition of any kind. Aura Wellness hereby disclaims all warranties and conditions with regard to this information, including all implied warranties or conditions of merchantability, fitness for a particular purpose, title, and non-infringement.",
      "To the maximum extent permitted by applicable law, in no event shall Aura Wellness and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use or performance of this website, whether based on contract, tort, negligence, strict liability, or otherwise, even if Aura Wellness has been advised of the possibility of damages.",
      "If you are dissatisfied with any portion of this website, or with any of these terms of use, your sole and exclusive remedy is to discontinue using this website.",
    ],
  },
  {
    icon: Copyright,
    title: "Copyright, Trademarks & Notices",
    content: [
      "All contents of this website are COPYRIGHT © 2026 Aura Wellness. All Rights Reserved. All logos are trademarks and service marks of Aura Wellness. All other trademarks, service marks, and logos used in this website are the property of their respective owners.",
      "The names of actual companies and products mentioned herein may be the trademarks of their respective owners. Any rights not expressly granted herein are reserved.",
    ],
  },
];

export default function TermsPage() {
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
              Terms &amp; <em className="italic text-gradient-gold">Conditions</em>
            </h1>
            <p className="mt-6 text-cream-200/55 max-w-xl leading-relaxed font-dm">
              Please read these terms carefully before using the Aura Wellness website.
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
              This website is offered to you conditioned on your acceptance without modification of
              the terms, conditions, and notices contained herein. Your use of the Aura Wellness
              website constitutes your agreement to all such terms, conditions, and notices.
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
              transition={{ duration: 0.6, delay: i * 0.04 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <section.icon size={18} className="text-gold-500 flex-shrink-0" />
                <h2 className="font-cormorant text-2xl lg:text-3xl text-forest-900">
                  {section.title}
                </h2>
              </div>
              <div className={`space-y-4 pl-7 ${section.uppercase ? "uppercase-legal" : ""}`}>
                {section.content.map((para, j) => (
                  <p
                    key={j}
                    className={`font-dm leading-relaxed ${section.uppercase ? "text-xs text-forest-700/60" : "text-sm text-forest-700/70"}`}
                  >
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-2 mt-3">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-2 text-sm text-forest-700/70 font-dm">
                        <span className="mt-2 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.afterList && (
                  <p className="text-sm text-forest-700/70 font-dm leading-relaxed mt-4">
                    {section.afterList}
                  </p>
                )}
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
            <h2 className="font-cormorant text-3xl text-cream-100 mb-2">Notices</h2>
            <p className="text-cream-200/55 font-dm text-sm mb-7">
              If you have questions or concerns about these Terms &amp; Conditions, please contact us.
            </p>
            <div className="flex flex-col gap-4 mb-8">
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
            <div className="pt-6 border-t border-cream-200/10">
              <Link href="/contact" className="btn-gold inline-flex">
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

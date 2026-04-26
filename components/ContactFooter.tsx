"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_LINK } from "./constants";

export default function ContactFooter() {
  return (
    <footer id="contact" className="px-5 pb-8 pt-14 md:px-6 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl rounded-3xl glass p-8 text-center md:p-12"
      >
        <h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight md:text-6xl">
          Ready to dominate your market? Let&apos;s talk business.
        </h2>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-8 inline-flex animate-float items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-300 to-emerald-400 px-7 py-4 text-base font-black text-black shadow-neon hover:shadow-[0_0_40px_rgba(0,245,212,.55)]"
        >
          <MessageCircle size={22} />
          Chat on WhatsApp
        </a>

        <p className="mt-4 text-lg font-semibold text-zinc-100">+91 9718751208</p>
      </motion.div>

      <p className="mt-8 text-center text-xs text-zinc-400">
        © 2024 zarvis.tech | Engineered by Harsh Kardam.
      </p>
    </footer>
  );
}

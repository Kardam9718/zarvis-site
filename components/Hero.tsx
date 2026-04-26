"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WA_LINK } from "./constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-28 md:px-6 md:pb-20 md:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300/80"
        >
          Elite Website Designer &amp; Digital Architect
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hero-title max-w-5xl text-4xl font-extrabold leading-tight text-zinc-50 md:text-7xl"
        >
          I Don&apos;t Just Build Websites. I Build Digital Empires.
        </motion.h1>

        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-xl"
        >
          Hi, I&apos;m Harsh Kardam. The brain behind zarvis.tech. I design zero-friction,
          high-converting digital experiences that make your users dependent on your
          product.
        </motion.p>

        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="animate-pulseSoft inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-emerald-400 px-6 py-3 text-sm font-bold text-black shadow-neon transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500"
          >
            View My Arsenal
          </a>
        </motion.div>
      </div>
    </section>
  );
}

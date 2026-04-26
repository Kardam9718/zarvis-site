"use client";

import { motion } from "framer-motion";

const projects = [
  "SaaS Analytics Dashboard",
  "AI Product Landing Experience",
  "Fintech Mobile-First Interface",
  "Agency Command Center"
];

export default function WorkShowcase() {
  return (
    <section id="work" className="px-5 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold md:text-4xl">Portfolio / Work Showcase</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((title, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl glass glow-border p-4"
            >
              <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-4">
                <div className="mb-3 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <div className="space-y-2">
                  <div className="h-6 w-2/3 rounded bg-zinc-700/60" />
                  <div className="h-4 w-full rounded bg-zinc-800/80" />
                  <div className="h-24 rounded border border-zinc-700/50 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 rounded bg-zinc-800/80" />
                    <div className="h-12 rounded bg-zinc-800/80" />
                    <div className="h-12 rounded bg-zinc-800/80" />
                  </div>
                </div>

                <p className="mt-4 text-sm text-zinc-300">{title}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

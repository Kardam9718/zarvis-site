"use client";

import { motion } from "framer-motion";
import { Activity, BrainCircuit, Sparkles } from "lucide-react";

const features = [
  {
    title: "Silicon Valley Standard Design",
    description:
      "Aesthetics and systems that feel premium, world-class, and instantly trustworthy.",
    icon: Sparkles,
    layout: "md:col-span-4"
  },
  {
    title: "Zero-Friction UX",
    description:
      "Interfaces engineered for mental ease and physical comfort on every interaction.",
    icon: BrainCircuit,
    layout: "md:col-span-2"
  },
  {
    title: "Extreme Conversions",
    description:
      "Strategic user journeys that turn traffic into loyal users and revenue momentum.",
    icon: Activity,
    layout: "md:col-span-6"
  }
];

export default function AdvantageBento() {
  return (
    <section id="advantage" className="px-5 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold md:text-4xl">The Zarvis Advantage</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {features.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`${item.layout} rounded-2xl glass glow-border p-6`}
              >
                <Icon className="mb-4 text-emerald-300" size={22} />
                <h3 className="text-xl font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

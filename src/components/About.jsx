import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
        >
          <div className="md:col-span-5">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/40 dark:to-rose-700/30 shadow-inner ring-1 ring-black/5" />
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">About Me</h2>
            <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I’m a frontend-focused developer who enjoys crafting crisp interfaces and interactions. My work balances usability with delightful details — micro-animations, refined typography, and accessible design systems.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="rounded-lg bg-white/80 dark:bg-neutral-900/60 backdrop-blur px-4 py-3 shadow ring-1 ring-black/5">React & TypeScript</li>
              <li className="rounded-lg bg-white/80 dark:bg-neutral-900/60 backdrop-blur px-4 py-3 shadow ring-1 ring-black/5">Tailwind CSS</li>
              <li className="rounded-lg bg-white/80 dark:bg-neutral-900/60 backdrop-blur px-4 py-3 shadow ring-1 ring-black/5">Framer Motion</li>
              <li className="rounded-lg bg-white/80 dark:bg-neutral-900/60 backdrop-blur px-4 py-3 shadow ring-1 ring-black/5">Accessibility</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

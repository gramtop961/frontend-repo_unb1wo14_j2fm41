import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-rose-500 to-rose-600 text-white p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Let’s build something great</h2>
          <p className="mt-2 text-white/90 max-w-2xl">
            Have a project in mind or just want to say hi? My inbox is always open. I’ll get back to you soon.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-rose-700 px-5 py-3 text-sm font-semibold shadow hover:bg-white/90 transition-colors"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold shadow hover:bg-white/15 transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold shadow hover:bg-white/15 transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
}

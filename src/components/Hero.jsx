import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {/* Spline scene as full-bleed background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft top-to-bottom gradient overlay to improve text contrast (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/30 dark:to-neutral-950/80" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 shadow-sm ring-1 ring-black/5">
            <span className="inline-block h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            Available for freelance projects
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Hi, I’m <span className="text-rose-600">Your Name</span>
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-700/90 dark:text-neutral-300">
            I design and build thoughtful digital experiences. Focused on clean interfaces, smooth animations, and products that feel great to use.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-rose-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-rose-500 transition-colors"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white/80 dark:bg-neutral-900/80 backdrop-blur text-neutral-900 dark:text-white px-5 py-3 text-sm font-semibold shadow ring-1 ring-black/5 hover:bg-white dark:hover:bg-neutral-900 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 selection:bg-rose-200 selection:text-neutral-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white">YN</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
            <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

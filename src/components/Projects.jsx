import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Minimal UI Kit',
    desc: 'A clean design system with components, tokens, and motion guidelines.',
    tag: 'Design System',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Interactions Lab',
    desc: 'A playground of micro-interactions built with Framer Motion.',
    tag: 'Animations',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1551281044-8af86e11fbb2?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Case Study — SaaS',
    desc: 'Improved onboarding completion by 34% with streamlined flows.',
    tag: 'Case Study',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1470&auto=format&fit=crop',
  },
];

function Card({ title, desc, tag, link, image }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 ring-1 ring-black/5 shadow hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
        <span className="absolute left-3 top-3 rounded-full bg-white/80 dark:bg-neutral-900/70 backdrop-blur px-2.5 py-1 text-xs font-medium text-neutral-800 dark:text-neutral-200 ring-1 ring-black/5">
          {tag}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
          <ExternalLink className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 transition-colors" />
        </div>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Featured Work</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">A selection of projects that blend clarity, performance, and polish.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold hover:opacity-90">
            Start a project
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

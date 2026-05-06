import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(0,212,255,0.04)_0%,transparent_100%)]" />

      <div className="max-w-3xl mx-auto text-center relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">Let's Connect</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text mb-6 leading-tight">
            Ready to build something{' '}
            <span className="text-gradient">remarkable</span>?
          </h2>
          <p className="font-body text-text-dim text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            I'm actively looking for internship and entry-level opportunities in software engineering,
            AI systems, and secure web development. Let's talk.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:sadmanriyanzisan@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-bg font-display font-bold text-sm tracking-wide rounded hover:shadow-[0_0_40px_rgba(0,212,255,0.35)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>sadmanriyanzisan@gmail.com</span>
            <span>↗</span>
          </a>

          {/* Links */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="https://github.com/sadmanriyanzisan"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-text-dim hover:text-accent transition-colors duration-200 font-body text-sm"
            >
              <span>GitHub</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-text-dim hover:text-accent transition-colors duration-200 font-body text-sm"
            >
              <span>LinkedIn</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </a>
            <span className="w-px h-4 bg-border" />
            <span className="text-text-dim font-mono text-sm">+880-1880415184</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © 2025 Sadman Ryian. Built with React + Tailwind.
        </p>
        <p className="font-mono text-xs text-muted">
          East West University · Dhaka, Bangladesh
        </p>
      </div>
    </section>
  );
}

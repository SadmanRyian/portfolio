import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: 'AI', label: 'Specialization' },
  { value: '2026', label: 'Graduating' },
  { value: 'EWU', label: 'University' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">About</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight mb-6">
              Engineering at the intersection of{' '}
              <span className="text-gradient">AI and Security</span>
            </h2>
            <div className="space-y-4 text-text-dim font-body leading-relaxed">
              <p>
                I'm a Computer Science student at East West University (Bangladesh) building
                production-grade systems that combine deep learning, modern web development,
                and a security-first mindset.
              </p>
              <p>
                My flagship project, <span className="text-text font-medium">UltrasoundNet</span>,
                uses a hybrid CNN-Transformer architecture with Grad-CAM explainability to classify
                breast tumors from ultrasound images — targeting real clinical impact.
              </p>
              <p>
                Beyond AI, I architect cloud-based web applications and network simulation tools,
                with a growing focus on <span className="text-text font-medium">cloud security</span> and
                secure system design as I move toward professional engineering.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['Python', 'React', 'Deep Learning', 'Node.js', 'Firebase', 'C/C++'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-subtle border border-border text-text-dim font-mono text-xs rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors duration-300"
              >
                <p className="font-display font-bold text-3xl text-accent mb-1">{s.value}</p>
                <p className="font-body text-sm text-text-dim">{s.label}</p>
              </motion.div>
            ))}

            {/* Coursework card spans full width */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="col-span-2 bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition-colors duration-300"
            >
              <p className="font-mono text-xs text-accent/70 tracking-widest uppercase mb-3">Coursework</p>
              <div className="flex flex-wrap gap-2">
                {['DSA', 'OS', 'OOP', 'DBMS', 'Software Engineering'].map((c) => (
                  <span key={c} className="text-text-dim font-body text-sm">{c}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

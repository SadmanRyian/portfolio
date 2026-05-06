import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const sorted = [...projects].sort((a, b) => b.featured - a.featured);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Work</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text">Projects</h2>
          </div>
          <p className="font-body text-sm text-text-dim max-w-xs">
            From AI diagnostics to network simulation — each project solves a real problem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {sorted.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

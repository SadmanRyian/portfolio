import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { projects } from '../data/projects';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-4 flex items-center gap-3">
      <span className="w-6 h-px bg-accent/50" />
      {title}
    </h3>
    {children}
  </div>
);

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-display text-2xl text-text">Project not found</p>
        <Link to="/" className="text-accent hover:underline font-body">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-28">
      {/* Background */}
      <div className="fixed inset-0 bg-grid bg-grid opacity-100 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,212,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-dim hover:text-accent transition-colors duration-200 font-body text-sm mb-10 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.featured && (
              <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] tracking-widest uppercase rounded">
                Featured Project
              </span>
            )}
            {project.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-subtle border border-border text-text-dim font-mono text-[10px] rounded">
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-display font-bold text-4xl md:text-6xl text-text mb-3 leading-tight">
            {project.title}
          </h1>
          <p className="font-body text-text-dim text-xl">{project.subtitle}</p>

          {/* Divider with links */}
          <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-3">
            <a
              href={project.github}
              target="https://github.com/SadmanRyian/portfolio"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-card border border-border hover:border-accent/40 text-text-dim hover:text-text font-display font-semibold text-sm rounded transition-all duration-200"
            >
              GitHub ↗
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="https://github.com/SadmanRyian/portfolio"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-accent text-bg font-display font-semibold text-sm rounded hover:bg-accent-dim transition-colors duration-200"
              >
                Live Demo ↗
              </a>
            ) : (
              <span className="px-5 py-2.5 bg-card border border-border text-muted font-display font-semibold text-sm rounded cursor-not-allowed">
                Demo Coming Soon
              </span>
            )}
          </div>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Main content */}
          <div className="md:col-span-2 space-y-0">
            <Section title="Overview">
              <p className="font-body text-text-dim leading-relaxed">{project.overview}</p>
            </Section>

            <Section title="Problem">
              <div className="border-l-2 border-accent/30 pl-5">
                <p className="font-body text-text-dim leading-relaxed">{project.problem}</p>
              </div>
            </Section>

            <Section title="Solution & Approach">
              <p className="font-body text-text-dim leading-relaxed">{project.solution}</p>
            </Section>

            <Section title="Key Features">
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-accent mt-1 shrink-0 font-mono">›</span>
                    <span className="font-body text-text-dim">{f}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Challenges Faced">
              <ul className="space-y-3">
                {project.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1 shrink-0 font-mono">!</span>
                    <span className="font-body text-text-dim">{c}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Future Improvements">
              <ul className="space-y-3">
                {project.future.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1 shrink-0 font-mono">+</span>
                    <span className="font-body text-text-dim">{f}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Tech stack */}
            <div className="bg-card border border-border rounded-xl p-5 sticky top-24">
              <p className="font-mono text-xs text-accent/70 tracking-widest uppercase mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-bg border border-border text-text-dim font-mono text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-mono text-xs text-accent/70 tracking-widest uppercase mb-3">Domain</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-accent/5 border border-accent/20 text-accent font-mono text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Other projects */}
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="font-mono text-xs text-accent/70 tracking-widest uppercase mb-4">Other Projects</p>
              <ul className="space-y-2">
                {projects
                  .filter((p) => p.id !== project.id)
                  .map((p) => (
                    <li key={p.id}>
                      <Link
                        to={`/projects/${p.id}`}
                        className="flex items-center gap-2 text-text-dim hover:text-accent font-body text-sm transition-colors duration-200 group"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">›</span>
                        {p.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

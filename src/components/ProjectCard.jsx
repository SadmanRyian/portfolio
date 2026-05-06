import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-xl border bg-card overflow-hidden card-hover ${
        project.featured ? 'border-accent/30 md:col-span-2' : 'border-border'
      }`}
    >
      {project.featured && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      )}

      <div className={`p-7 ${project.featured ? 'md:flex md:gap-10 md:items-start' : ''}`}>
        {/* Header */}
        <div className={project.featured ? 'md:flex-1' : ''}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                {project.featured && (
                  <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 text-accent font-mono text-[10px] tracking-widest uppercase rounded">
                    Featured
                  </span>
                )}
                {project.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-subtle border border-border text-text-dim font-mono text-[10px] rounded">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-display font-bold text-xl text-text group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>
              <p className="font-body text-sm text-text-dim mt-0.5">{project.subtitle}</p>
            </div>
          </div>

          <p className="font-body text-text-dim leading-relaxed text-sm mb-5">
            {project.shortDesc}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 bg-bg border border-border text-text-dim font-mono text-xs rounded">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Featured — extra feature list */}
        {project.featured && (
          <div className="md:w-64 shrink-0 mb-6 md:mb-0">
            <p className="font-mono text-xs text-accent/70 tracking-widest uppercase mb-3">Key Features</p>
            <ul className="space-y-2">
              {project.features.slice(0, 4).map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-dim font-body">
                  <span className="text-accent mt-0.5 shrink-0">›</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="px-7 pb-7 flex items-center gap-3">
        <Link
          to={`/projects/${project.id}`}
          className="px-4 py-2 bg-accent text-bg font-display font-semibold text-xs tracking-wide rounded hover:bg-accent-dim transition-colors duration-200"
        >
          View Details →
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-border hover:border-accent/40 text-text-dim hover:text-text font-display font-semibold text-xs tracking-wide rounded transition-all duration-200"
        >
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-border hover:border-accent/40 text-text-dim hover:text-text font-display font-semibold text-xs tracking-wide rounded transition-all duration-200"
          >
            Live Demo ↗
          </a>
        )}
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(0,212,255,0.05)_0%,transparent_100%)]" />
    </motion.div>
  );
}

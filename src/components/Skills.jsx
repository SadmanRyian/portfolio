import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    category: 'AI / ML',
    icon: '⬡',
    color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20',
    accentColor: 'text-cyan-400',
    skills: ['Python', 'PyTorch', 'DenseNet121', 'Transformer Attention', 'Grad-CAM', 'Explainable AI', 'OpenCV', 'Scikit-learn'],
  },
  {
    category: 'Web Development',
    icon: '◈',
    color: 'from-violet-500/10 to-purple-500/10 border-violet-500/20',
    accentColor: 'text-violet-400',
    skills: ['React.js', 'JavaScript', 'HTML + CSS', 'Node.js', 'Bootstrap', 'Tailwind CSS', 'WordPress'],
  },
  {
    category: 'Systems & Networking',
    icon: '◎',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
    accentColor: 'text-emerald-400',
    skills: ['C / C++', 'DTN Architecture', 'CCN Protocols', 'IoV Simulation', 'Store-Carry-Forward', 'Operating Systems'],
  },
  {
    category: 'Tools & Cloud',
    icon: '▣',
    color: 'from-orange-500/10 to-amber-500/10 border-orange-500/20',
    accentColor: 'text-orange-400',
    skills: ['Git', 'GitHub', 'Firebase', 'MongoDB', 'MySQL', 'VS Code', 'Vercel'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(0,212,255,0.03)_0%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 + 0.2 }}
              className={`relative rounded-xl border bg-gradient-to-br p-6 ${group.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xl ${group.accentColor}`}>{group.icon}</span>
                <h3 className={`font-display font-semibold text-sm tracking-wider uppercase ${group.accentColor}`}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-bg/60 border border-white/5 text-text-dim font-mono text-xs rounded hover:text-text transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interest strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-5 rounded-xl border border-border bg-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase shrink-0">→ Currently exploring</span>
          <div className="flex flex-wrap gap-2">
            {['Cloud Security', 'Penetration Testing', 'Secure API Design', 'Zero Trust Architecture'].map((t) => (
              <span key={t} className="px-3 py-1 bg-accent/5 border border-accent/20 text-accent font-mono text-xs rounded">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

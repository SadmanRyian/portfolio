import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let animId;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.opacity})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid bg-grid opacity-100" />

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,212,255,0.06)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent font-mono text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none"
          >
            Sadman{' '}
            <span className="text-gradient">Ryian</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="font-mono text-sm md:text-base text-accent/70 tracking-widest uppercase"
          >
            Software Engineer · AI Systems · Secure Web Applications
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="font-body text-lg md:text-xl text-text-dim max-w-xl leading-relaxed"
          >
            I build <span className="text-text font-medium">intelligent</span>,{' '}
            <span className="text-text font-medium">scalable</span>, and{' '}
            <span className="text-text font-medium">secure</span> software systems.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 justify-center mt-2">
            <button
              onClick={scrollToProjects}
              className="group relative px-6 py-3 bg-accent text-bg font-display font-semibold text-sm tracking-wide rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
            </button>
            <a
              href="https://github.com/SadmanRyian"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border hover:border-accent/40 text-text-dim hover:text-text font-display font-semibold text-sm tracking-wide rounded transition-all duration-300"
            >
              GitHub ↗
            </a>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 border border-border hover:border-accent/40 text-text-dim hover:text-text font-display font-semibold text-sm tracking-wide rounded transition-all duration-300"
            >
              Contact
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={item}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-muted tracking-widest"></span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-muted to-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

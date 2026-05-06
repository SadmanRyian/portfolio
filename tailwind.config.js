/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#080c12',
        surface: '#0d1421',
        card: '#111827',
        border: '#1e2d40',
        accent: '#00d4ff',
        'accent-dim': '#0099bb',
        muted: '#4a6280',
        subtle: '#1a2840',
        text: '#e2eaf5',
        'text-dim': '#7a95b0',
      },
      backgroundImage: {
        'grid': "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}

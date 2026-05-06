# Sadman Ryian — Portfolio

A modern, production-ready personal portfolio built with React + Tailwind CSS + Framer Motion.

## Stack

- **React 18** — functional components + hooks
- **React Router v6** — client-side routing
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations & transitions
- **Vite** — fast dev server & build

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky navbar with scroll behavior
│   ├── Hero.jsx         # Animated hero with particle canvas
│   ├── About.jsx        # About + stats section
│   ├── Projects.jsx     # Project grid
│   ├── ProjectCard.jsx  # Individual project card
│   ├── Skills.jsx       # Skills grouped by domain
│   └── Contact.jsx      # Contact + footer
├── pages/
│   ├── Home.jsx         # Main page (/ route)
│   └── ProjectDetail.jsx # Case study page (/projects/:id)
├── data/
│   └── projects.js      # Centralized project data
├── App.jsx              # Router + page transitions
├── main.jsx             # Entry point
└── index.css            # Global styles + Tailwind
```

## Customization

- **Add/edit projects**: Update `src/data/projects.js`
- **Theme colors**: Edit `tailwind.config.js`
- **Fonts**: Change the Google Fonts import in `index.html`

## Deployment

Deploy instantly to Vercel or Netlify:

```bash
npm run build
# Upload the `dist/` folder
```

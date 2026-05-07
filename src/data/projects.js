export const projects = [
  {
    id: "ultrasoundnet",
    title: "UltrasoundNet",
    subtitle: "Deep Learning for Breast Tumor Classification",
    shortDesc: "A self-supervised deep learning system that classifies breast tumors from ultrasound images with explainable AI outputs.",
    featured: true,
    tags: ["AI/ML", "Deep Learning", "Healthcare"],
    tech: ["DenseNet121", "Transformer Attention", "Grad-CAM", "XAI", "Python", "PyTorch"],
    github: "https://github.com/sadmanriyanzisan",
    live: null,
    overview:
      "UltrasoundNet is a web-based breast tumor classification system that leverages a hybrid deep learning architecture combining convolutional kernels with transformer attention mechanisms. It enables clinicians and researchers to evaluate ultrasound images even under low image quality conditions.",
    problem:
      "Breast cancer diagnosis via ultrasound imaging is often hindered by low image quality, operator variability, and the black-box nature of AI models — making radiologists hesitant to trust automated predictions without understanding the reasoning behind them.",
    solution:
      "The system uses a hybrid CNN-Transformer architecture (DenseNet121 backbone + attention layers) for robust feature extraction across both local texture and global context. Explainable AI via Grad-CAM generates visual heatmaps that highlight the tumor regions influencing each prediction, building clinical trust.",
    features: [
      "Hybrid convolutional-transformer architecture for high accuracy",
      "Grad-CAM visualizations for explainable predictions",
      "Handles low-quality ultrasound images via preprocessing pipeline",
      "Web interface for uploading images and viewing results in real-time",
      "Self-supervised pretraining reduces dependency on large labeled datasets",
      "Live detection techniques with high-order security controls",
    ],
    challenges: [
      "Achieving robust performance on degraded or low-resolution ultrasound images",
      "Integrating explainability without sacrificing model performance",
      "Balancing sensitivity and specificity in a clinical context",
      "Designing a self-supervised pretraining strategy with limited labeled data",
    ],
    future: [
      "Expand to multi-class classification (benign, malignant, cystic)",
      "Add DICOM format support for clinical integration",
      "Deploy as a HIPAA-compliant cloud service",
      "Incorporate 3D ultrasound volume analysis",
    ],
  },
  {
    id: "ccn-simulator",
    title: "CCN + ONE Simulator",
    subtitle: "Content-Centric Network in Opportunistic Environments",
    shortDesc: "A React-based simulation platform for Content-Centric Networking using DTN architecture in IoV opportunistic environments.",
    featured: false,
    tags: ["Networking", "Simulation", "Web"],
    tech: ["React.js", "Firebase", "Bootstrap", "DTN Architecture", "JavaScript"],
    github: "https://github.com/sadmanriyanzisan",
    live: null,
    overview:
      "A web application that simulates Content-Centric Network (CCN) behavior within the ONE (Opportunistic Network Environment) Simulator framework, targeting Internet of Vehicles (IoV) scenarios where connectivity is intermittent and unreliable.",
    problem:
      "Traditional IP-based networking fails in opportunistic environments like vehicle-to-vehicle communication where nodes are frequently disconnected. Simulating CCN behavior in these conditions requires a flexible, interactive tool that researchers and students can use without deep systems expertise.",
    solution:
      "Built a React-based frontend that interfaces with the ONE Simulator backend, implementing DTN (Delay-Tolerant Networking) principles with a store-carry-forward mechanism. Firebase handles real-time state synchronization across simulation nodes.",
    features: [
      "Interactive simulation of CCN node behavior",
      "DTN-based store-carry-forward message delivery",
      "IoV scenario modeling with vehicle mobility patterns",
      "Real-time visualization of network topology and message flows",
      "Firebase-powered live state updates",
      "Configurable simulation parameters via UI",
    ],
    challenges: [
      "Modeling realistic vehicle mobility and disconnection patterns",
      "Syncing simulation state in real-time with Firebase without performance bottlenecks",
      "Translating complex networking concepts into an intuitive UI",
    ],
    future: [
      "Integrate with actual ONE Simulator Java backend via REST API",
      "Add ML-based routing prediction",
      "Export simulation results as CSV/JSON reports",
    ],
  },
  {
    id: "libraryos",
    title: "LibraryOS",
    subtitle: "Cloud-Based Institutional Library Management",
    shortDesc: "A cloud-based library management system designed for institutions in South Asia, handling books, members, and automated fines.",
    featured: false,
    tags: ["Web", "Cloud", "SaaS"],
    tech: ["HTML", "CSS", "WordPress", "Cloud Hosting", "MySQL"],
    github: "https://github.com/sadmanriyanzisan",
    live: "https://lm-sos-vk9o.vercel.app/",
    overview:
      "LibraryOS is a cloud-based library management system specifically designed for educational institutions in South Asia, with a focus on Bangladesh. It streamlines book inventory, member management, issue/return workflows, and automated fine calculation.",
    problem:
      "Many South Asian institutions still rely on paper-based or outdated desktop library systems, leading to lost records, manual errors, and operational inefficiency. Smaller institutions can't afford enterprise-level LMS solutions.",
    solution:
      "A lightweight, cloud-hosted system built on WordPress with custom plugins for library-specific workflows. The system is accessible from any device and requires no local installation, making it ideal for resource-constrained institutions.",
    features: [
      "Book catalog with search, filter, and availability tracking",
      "Member management with borrower profiles and history",
      "Issue and return workflow with due date tracking",
      "Automated fine calculation and notification",
      "Admin dashboard with usage analytics",
      "Multi-branch support for larger institutions",
    ],
    challenges: [
      "Customizing WordPress to handle relational library data without bloated plugins",
      "Designing for users with limited technical literacy",
      "Optimizing performance on low-bandwidth connections common in the region",
    ],
    future: [
      "Mobile app for students to check availability and renew books",
      "Barcode/QR scanner integration",
      "SMS notifications for due date reminders",
    ],
  },
  {
    id: "glosswear",
    title: "GlossWear",
    subtitle: "High-Converting E-Commerce Landing Page",
    shortDesc: "A polished, conversion-optimized landing webpage for a beauty & fashion brand, built with HTML, CSS, and WordPress.",
    featured: false,
    tags: ["Web", "E-Commerce", "UI/UX"],
    tech: ["HTML", "CSS", "WordPress", "Responsive Design"],
    github: "https://github.com/sadmanriyanzisan",
    live: "https://gloss-wear.vercel.app/",
    overview:
      "GlossWear is a high-converting product landing page for a beauty and fashion brand. The design focuses on visual hierarchy, persuasive copy placement, and a clean aesthetic that drives user engagement and conversion.",
    problem:
      "Small e-commerce brands often struggle to create landing pages that balance visual appeal with conversion optimization. Generic templates don't reflect brand identity and fail to convert visitors effectively.",
    solution:
      "Designed and developed a custom WordPress-based landing page with strong visual identity, strategic CTA placement, and mobile-first responsive design. Performance was optimized for fast load times to minimize bounce rates.",
    features: [
      "Pixel-perfect responsive design across all device sizes",
      "Optimized conversion funnel with strategic CTA placement",
      "Product showcase section with hover effects",
      "Testimonials and social proof section",
      "Fast load times via optimized assets",
      "Brand-consistent color palette and typography",
    ],
    challenges: [
      "Achieving pixel-level design fidelity without a custom theme framework",
      "Balancing rich visuals with performance requirements",
      "Implementing smooth CSS animations without JavaScript overhead",
    ],
    future: [
      "Integrate with WooCommerce for direct checkout",
      "Add A/B testing for CTA variants",
      "Implement analytics tracking for conversion funnel analysis",
    ],
  },
];

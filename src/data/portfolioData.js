// Portfolio data - easily customizable
export const personalInfo = {
  name: "Alex Developer",
  title: "Full-Stack Developer & 3D Designer",
  subtitle: "Crafting digital experiences with code and creativity",
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications and immersive 3D experiences. I love turning complex problems into simple, beautiful solutions.",
  location: "San Francisco, CA",
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  availability: "Available for new opportunities"
}

export const socialLinks = {
  github: "https://github.com/alexdev",
  linkedin: "https://linkedin.com/in/alexdev",
  twitter: "https://twitter.com/alexdev",
  dribbble: "https://dribbble.com/alexdev",
  instagram: "https://instagram.com/alexdev"
}

export const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "Next.js", level: 88, icon: "▲" },
      { name: "Three.js", level: 85, icon: "🎮" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Framer Motion", level: 87, icon: "✨" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 92, icon: "🟢" },
      { name: "Python", level: 88, icon: "🐍" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "MongoDB", level: 83, icon: "🍃" },
      { name: "Redis", level: 80, icon: "🔴" },
      { name: "GraphQL", level: 85, icon: "📊" }
    ]
  },
  {
    category: "Tools & DevOps",
    technologies: [
      { name: "Docker", level: 88, icon: "🐳" },
      { name: "AWS", level: 85, icon: "☁️" },
      { name: "Git", level: 95, icon: "📝" },
      { name: "Figma", level: 90, icon: "🎨" },
      { name: "Blender", level: 75, icon: "🟠" },
      { name: "CI/CD", level: 82, icon: "🔄" }
    ]
  }
]

export const projects = [
  {
    id: 1,
    title: "3D E-commerce Platform",
    description: "A revolutionary e-commerce platform featuring 3D product visualization, AR try-on capabilities, and real-time collaboration tools.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Three.js", "WebGL", "Node.js", "PostgreSQL"],
    features: [
      "Interactive 3D product models",
      "AR visualization with WebXR",
      "Real-time inventory management",
      "Advanced search and filtering",
      "Mobile-responsive design"
    ],
    liveUrl: "https://3d-ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/alexdev/3d-ecommerce",
    category: "Full-Stack",
    year: "2024"
  },
  {
    id: 2,
    title: "AI-Powered Portfolio Generator",
    description: "An intelligent platform that generates personalized portfolio websites using AI, with custom 3D scenes and animations.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "OpenAI API", "Prisma", "Tailwind CSS", "Framer Motion"],
    features: [
      "AI-generated content and layouts",
      "Custom 3D scene generation",
      "Real-time preview and editing",
      "SEO optimization",
      "Performance analytics"
    ],
    liveUrl: "https://ai-portfolio-gen.vercel.app",
    githubUrl: "https://github.com/alexdev/ai-portfolio",
    category: "AI/ML",
    year: "2024"
  },
  {
    id: 3,
    title: "Virtual Reality Workspace",
    description: "A collaborative VR workspace application enabling remote teams to work together in immersive 3D environments.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "A-Frame", "WebRTC", "Socket.io", "Express.js"],
    features: [
      "Multi-user VR collaboration",
      "Voice and video chat integration",
      "3D whiteboarding tools",
      "File sharing and management",
      "Cross-platform compatibility"
    ],
    liveUrl: "https://vr-workspace-demo.com",
    githubUrl: "https://github.com/alexdev/vr-workspace",
    category: "VR/AR",
    year: "2023"
  },
  {
    id: 4,
    title: "Blockchain Analytics Dashboard",
    description: "A comprehensive analytics platform for tracking and visualizing blockchain transactions with real-time data insights.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "D3.js", "Web3.js", "Python", "FastAPI"],
    features: [
      "Real-time transaction monitoring",
      "Interactive data visualizations",
      "Portfolio tracking",
      "Market analysis tools",
      "Custom alert system"
    ],
    liveUrl: "https://blockchain-analytics.app",
    githubUrl: "https://github.com/alexdev/blockchain-dashboard",
    category: "Blockchain",
    year: "2023"
  }
]

export const experience = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    type: "Full-time",
    description: "Lead development of scalable web applications serving 100K+ users. Architect and implement microservices infrastructure using modern cloud technologies.",
    achievements: [
      "Increased application performance by 40% through optimization",
      "Led a team of 6 developers on major product launches",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    duration: "2020 - 2022",
    type: "Full-time",
    description: "Developed responsive web applications and mobile apps using React and React Native. Collaborated with design team to create pixel-perfect UI/UX implementations.",
    achievements: [
      "Built and launched 3 major product features",
      "Improved mobile app performance by 35%",
      "Implemented automated testing reducing bugs by 50%",
      "Created reusable component library used across products"
    ],
    technologies: ["React", "React Native", "TypeScript", "Redux", "Jest"]
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    duration: "2019 - 2020",
    type: "Full-time",
    description: "Developed custom websites and web applications for clients across various industries. Worked closely with designers and project managers to deliver high-quality solutions.",
    achievements: [
      "Successfully delivered 20+ client projects",
      "Learned modern web development stack",
      "Improved website loading speeds by 45%",
      "Contributed to agency's design system"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"]
  }
]

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    location: "Berkeley, CA",
    duration: "2015 - 2019",
    gpa: "3.8/4.0",
    achievements: [
      "Magna Cum Laude",
      "Dean's List for 6 semesters",
      "Computer Science Excellence Award",
      "Led university hackathon team to 1st place"
    ]
  }
]

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SA-2023-001"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-PD-2022-001"
  },
  {
    name: "Meta React Developer Certificate",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-RD-2022-001"
  }
]

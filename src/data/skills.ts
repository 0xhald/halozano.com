export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  name: string;
  icon: string; // Font Awesome icon class
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "fas fa-code",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Vue.js", level: 80 }
    ]
  },
  {
    name: "Backend Development",
    icon: "fas fa-server",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 80 }
    ]
  },
  {
    name: "Design & Tools",
    icon: "fas fa-palette",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX Principles", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "SCSS/SASS", level: 85 }
    ]
  },
  {
    name: "DevOps & Deployment",
    icon: "fas fa-rocket",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel/Netlify", level: 85 },
      { name: "Docker", level: 65 }
    ]
  },
  {
    name: "Performance & Testing",
    icon: "fas fa-tachometer-alt",
    skills: [
      { name: "Web Performance", level: 85 },
      { name: "Jest", level: 80 },
      { name: "React Testing Library", level: 75 },
      { name: "Lighthouse", level: 90 },
      { name: "Accessibility", level: 85 }
    ]
  },
  {
    name: "Other Skills",
    icon: "fas fa-tools",
    skills: [
      { name: "Astro", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "WordPress", level: 75 },
      { name: "SEO", level: 70 },
      { name: "Technical Writing", level: 80 }
    ]
  }
];

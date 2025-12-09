export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Clearo",
    description: "Revolutionary AI-powered task management system with intuitive interface and smart automation.",
    tags: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
    image: "/projects/placeholder-1.jpg",
  },
  {
    id: "2",
    title: "Clearo",
    description: "Smart inventory management system for modern businesses with real-time analytics.",
    tags: ["Node.js", "Express", "MongoDB"],
    image: "/projects/placeholder-2.jpg",
  },
  {
    id: "3",
    title: "Clearo",
    description: "Cloud-based collaboration platform with seamless team communication and project tracking.",
    tags: ["React.js", "Firebase", "Material-UI"],
    image: "/projects/placeholder-3.jpg",
  },
  {
    id: "4",
    title: "Clearo",
    description: "E-commerce platform with advanced recommendation engine and secure payment processing.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/projects/placeholder-4.jpg",
  },
  {
    id: "5",
    title: "Clearo",
    description: "Machine learning model for predictive analytics in healthcare diagnostics.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    image: "/projects/placeholder-5.jpg",
  },
  {
    id: "6",
    title: "Clearo",
    description: "Mobile-first social media application with real-time messaging and content sharing.",
    tags: ["React Native", "Socket.io", "Redis"],
    image: "/projects/placeholder-6.jpg",
  },
];

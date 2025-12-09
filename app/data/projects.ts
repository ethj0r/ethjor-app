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
    description: "Productivity app that combines the Pomodoro Technique with real-time AI object detection.",
    tags: ["React.js", "TensorFlow", "Node.js", "PostgreSQL"],
    image: "/projects/clearo.webp",
  },
  {
    id: "2",
    title: "YAREU",
    description: "Sustainability-focused platform enables users to buy/sell items, donate goods or money, and trade-ins in a unified system.",
    tags: ["Flet", "Python", "PostgreSQL"],
    image: "/projects/yareu.webp",
  },
  {
    id: "3",
    title: "Eigen Pustaka",
    description: "Book discovery system enables users to perform text & image based search, and book recommendations thru a fully custom search engine.",
    tags: ["Next.js", "FastAPI", "Python"],
    image: "/projects/eigen-pustaka.webp",
  },
  {
    id: "4",
    title: "GRODDIT",
    description: "Terminal based social media application that brings the essence of Reddit to user command line.",
    tags: ["C Lang"],
    image: "/projects/groddit.webp",
  },
  {
    id: "5",
    title: "Matrix Calculator",
    description: "Featuring System of Linear Equations solver, matrix operations, interpolation, polynomial regression, and seamless cloning.",
    tags: ["Java", "JavaFX"],
    image: "/projects/matrix-calculator.webp",
  },
  {
    id: "6",
    title: "Pokémon Battle",
    description: "Board game using Prolog (GNU Prolog).",
    tags: ["Prolog"],
    image: "/projects/placeholder-6.jpg",
  },
];

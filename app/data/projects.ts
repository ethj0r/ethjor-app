export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  images?: string[]; // Array of detail images (min 3)
  fullDescription?: string; // Longer description for detail page
  keyFeatures?: {
    title: string;
    description: string;
  }[];
  techStack?: {
    frontend?: string;
    backend?: string;
    deployment?: string;
  };
  links?: {
    github?: string;
    website?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Clearo",
    description: "Productivity app that combines the Pomodoro Technique with real-time AI object detection.",
    tags: ["React.js", "TensorFlow", "Node.js", "PostgreSQL"],
    image: "/projects/clearo.webp",
    images: ["/projects/clearo-1.webp", "/projects/clearo-2.webp", "/projects/clearo-3.webp"],
    fullDescription: "Clearo is a productivity app that combines the Pomodoro Technique with real-time AI object detection to help user stay focused while studying or working. Using webcam and machine learning, Clearo detects distractions (like smartphones) and tracks user's productivity with points and streak system.",
    keyFeatures: [
      {
        title: "Pomodoro Time",
        description: "customizable focus sessions"
      },
      {
        title: "Real-time Object Detection",
        description: "distraction monitoring using TensorFlow.js"
      },
      {
        title: "Secure Auth",
        description: "JWT-based auth with PostgreSQL"
      }
    ],
    techStack: {
      frontend: "React 18 with Vite, TensorFlow.js + COCO-SSD for object detection",
      backend: "Node.js, PostgreSQL with Sequelize ORM",
      deployment: "Vercel + Railway"
    },
    links: {
      github: "https://github.com/ethj0r/clearo",
      website: "https://clearo.vercel.app"
    }
  },
  {
    id: "2",
    title: "YAREU",
    description: "Sustainability-focused platform enables users to buy/sell items, donate goods or money, and trade-ins in a unified system.",
    tags: ["Flet", "Python", "PostgreSQL"],
    image: "/projects/yareu.webp",
    images: ["/projects/yareu-1.webp", "/projects/yareu-2.webp", "/projects/yareu-3.webp"],
    fullDescription: "YAREU is a sustainability-focused platform that enables users to buy/sell items, donate goods or money, and trade-ins in a unified system.",
    keyFeatures: [
      {
        title: "Buy/Sell Marketplace",
        description: "user-friendly interface for transactions"
      },
      {
        title: "Donation System",
        description: "support sustainability initiatives"
      },
      {
        title: "Trade-in Feature",
        description: "exchange old items for credits"
      }
    ],
    techStack: {
      frontend: "Flet (Python-based UI framework)",
      backend: "Python with PostgreSQL database",
      deployment: "Self-hosted"
    },
    links: {
      github: "https://github.com/ethj0r/yareu"
    }
  },
  {
    id: "3",
    title: "Eigen Pustaka",
    description: "Book discovery system enables users to perform text & image based search, and book recommendations thru a fully custom search engine.",
    tags: ["Next.js", "FastAPI", "Python"],
    image: "/projects/eigen-pustaka.webp",
    images: ["/projects/eigen-pustaka-1.webp", "/projects/eigen-pustaka-2.webp", "/projects/eigen-pustaka-3.webp"],
    fullDescription: "Eigen Pustaka is a book discovery system that enables users to perform text & image based search, and book recommendations through a fully custom search engine built from scratch.",
    keyFeatures: [
      {
        title: "Text Search",
        description: "custom search engine with TF-IDF"
      },
      {
        title: "Image Search",
        description: "visual book discovery with AI"
      },
      {
        title: "Recommendations",
        description: "personalized book suggestions"
      }
    ],
    techStack: {
      frontend: "Next.js with TypeScript",
      backend: "FastAPI with Python for search algorithms",
      deployment: "Vercel + Railway"
    },
    links: {
      github: "https://github.com/ethj0r/eigen-pustaka",
      website: "https://eigen-pustaka.vercel.app"
    }
  },
  {
    id: "4",
    title: "GRODDIT",
    description: "Terminal based social media application that brings the essence of Reddit to user command line.",
    tags: ["C Lang"],
    image: "/projects/groddit.webp",
    images: ["/projects/groddit-1.webp", "/projects/groddit-2.webp", "/projects/groddit-3.webp"],
    fullDescription: "GRODDIT is a terminal-based social media application that brings the essence of Reddit to your command line with posts, comments, and voting system.",
    keyFeatures: [
      {
        title: "Post & Comment",
        description: "create and interact with content"
      },
      {
        title: "Voting System",
        description: "upvote/downvote functionality"
      },
      {
        title: "Terminal UI",
        description: "fully command-line based interface"
      }
    ],
    techStack: {
      backend: "C Language with custom data structures",
      deployment: "Command-line application"
    },
    links: {
      github: "https://github.com/ethj0r/groddit"
    }
  },
  {
    id: "5",
    title: "Matrix Calculator",
    description: "Featuring System of Linear Equations solver, matrix operations, interpolation, polynomial regression, and seamless cloning.",
    tags: ["Java", "JavaFX"],
    image: "/projects/matrix-calculator.webp",
    images: ["/projects/matrix-calculator-1.webp", "/projects/matrix-calculator-2.webp", "/projects/matrix-calculator-3.webp"],
    fullDescription: "Advanced matrix calculator featuring System of Linear Equations solver, matrix operations, interpolation, polynomial regression, and seamless cloning capabilities.",
    keyFeatures: [
      {
        title: "Linear Equations",
        description: "solve systems with multiple methods"
      },
      {
        title: "Matrix Operations",
        description: "determinant, inverse, multiplication"
      },
      {
        title: "Regression Analysis",
        description: "polynomial & interpolation tools"
      }
    ],
    techStack: {
      frontend: "JavaFX for desktop GUI",
      backend: "Java with custom algorithms",
      deployment: "Desktop application"
    },
    links: {
      github: "https://github.com/ethj0r/matrix-calculator"
    }
  },
  {
    id: "6",
    title: "Pokémon Battle",
    description: "Board game using Prolog (GNU Prolog).",
    tags: ["Prolog"],
    image: "/projects/placeholder-6.jpg",
    images: ["/projects/placeholder-6.jpg", "/projects/placeholder-6.jpg", "/projects/placeholder-6.jpg"],
    fullDescription: "A strategic Pokémon battle board game implemented using Prolog logic programming with GNU Prolog.",
    keyFeatures: [
      {
        title: "Turn-based Battle",
        description: "strategic combat system"
      },
      {
        title: "Logic Programming",
        description: "powered by Prolog rules"
      },
      {
        title: "Type Advantages",
        description: "authentic Pokémon mechanics"
      }
    ],
    techStack: {
      backend: "Prolog (GNU Prolog)",
      deployment: "Command-line game"
    },
    links: {
      github: "https://github.com/ethj0r/pokemon-battle"
    }
  },
];

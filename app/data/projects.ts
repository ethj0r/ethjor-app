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
    images: ["/projects/clearo.webp", "/projects/clearo-2.webp", "/projects/clearo-3.webp"],
    fullDescription: "Clearo is a productivity app that combines the Pomodoro Technique with real-time AI object detection to help user stay focused while studying or working. Using webcam and machine learning, Clearo detects distractions (like smartphones) and tracks user's productivity with points and streak system.",
    keyFeatures: [
      {
        title: "Pomodoro Timer",
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
      github: "https://github.com/ethj0r/Clearo",
      website: "https://clearo-by-ethjor.vercel.app"
    }
  },
  {
    id: "2",
    title: "YAREU",
    description: "Sustainability-focused platform enables users to buy/sell items, donate goods or money, and trade-ins in a unified system.",
    tags: ["Flet", "Python", "PostgreSQL"],
    image: "/projects/yareu.webp",
    images: ["/projects/yareu-1.webp", "/projects/yareu-2.webp", "/projects/yareu-3.webp"],
    fullDescription: "YAREU - Your Action to Reuse & Unite\nis a sustainability-focused platform that enables users to buy/sell items, donate goods or money, and perform trade-ins in a unified system. Built with Flet (Python) using the MVC architecture, the app integrates PostgreSQL for robust data management and supports modular subsystems such as Donations, Marketplace, Trade-In, and Shipping.",
    keyFeatures: [
      {
        title: "Buy/Sell Marketplace",
        description: "buy and sell new/preloved items"
      },
      {
        title: "Donation System",
        description: "donate money or goods to verified recipients"
      },
      {
        title: "Trade-in Feature",
        description: "exchange items thru request and approval flows"
      },
      {
        title: "Shipping & Confirmation",
        description: "manage deliveries and item reception"
      },
      {
        title: "Modular MVC Architecture",
        description: "clear separation of models, views, and controllers for maintainability"
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
    fullDescription: "Eigen Pustaka is a book discovery system that enables users to perform text based search, image based search, and personalized book recommendations thru a fully custom search engine. The app leverages classical linear algebra algorithms (TF‑IDF, LSA, PCA, SVD) without any external Machine Learning libraries.",
    keyFeatures: [
      {
        title: "Text Search with Latent Semantics Analysis (LSA)",
        description: "advanced text-based book search using TF-IDF (Term Frequency-Inverse Document Frequency) and LSA"
      },
      {
        title: "Image Search with Principal Component Analysis (PCA)",
        description: "find books using cover images via PCA for dimensionality reduction and similarity matching"
      },
      {
        title: "Book Recommendations",
        description: "suggest similar books based on user selected titles using SVD (Singular Value Decomposition) and embedding similarity"
      },
      {
        title: "Custom Linear Algebra Algorithms",
        description: "fully implemented from scratch without external ML libraries, manual implementation of TF-IDF, LSA, PCA, and SVD"
      }
    ],
    techStack: {
      frontend: "Next.js with TypeScript",
      backend: "FastAPI with Python for search algorithms",
      // database: "CSV & JSON based datasets",
      deployment: "Vercel + Railway"
    },
    links: {
      // github: "https://github.com/ethj0r/eigen-pustaka",
      website: "https://eigenpustaka-gkk.cloud"
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
        title: "User Management",
        description: "register accounts, login/logout with secure password hashing"
      },
      {
        title: "Content Creation",
        description: "create posts in subgroddits (topic-based communities) and comment with nedted replies"
      },
      {
        title: "Voting System",
        description: "Upvote/downvote posts and comments with karma tracking"
      },
      {
        title: "Social Features",
        description: "Follow/unfollow users, views followers and following lists"
      },
      {
        title: "Profile System",
        description: "View user profiles with activity statistics and recent posts/comments"
      },
      {
        title: "Smart Feed (Heap based)",
        description: "personalized feed from followed users with latest/newest sorting using heap data structure"
      },
      {
        title: "Trending Analysis",
        description: "discover hot topics in subgroddits with keyword frequency "
      },
      {
        title: "Advanced Search (Trie based)",
        description: "Fast prefix search for users, posts, and subgroddits using trie data structure"
      },
      {
        title: "Friend Recoomendations (BFS Graph)",
        description: "Suggest friends based on graph traversal using Breadth-First Search (BFS)"
      },
      {
        title: "Content Moderation",
        description: "Automatic filtering of inappropriate content using blacklist keywords"
      },
      {
        title: "Data Security",
        description: "Password hashing (FNV-1a) and file encryption (LCG cipher) for secure data storage"
      },
    ],
    techStack: {
      backend: "C Language with custom data structures",
      deployment: "Command-line application"
    },
    links: {
      github: "https://github.com/Labpro-22/if2110-tubes-2025-k01-i-1"
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

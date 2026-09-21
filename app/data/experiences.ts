export type ExperienceCategory = "work" | "leadership";

export interface Experience {
  id: string;
  category: ExperienceCategory;
  title: string;
  organization: string;
  location?: string;
  startDate: string; // Format: "YYYY-MM"
  endDate: string | "present"; // Format: "YYYY-MM" or "present"
  description: string[];
  url?: string;
}

export const experienceCategories: { id: ExperienceCategory; label: string }[] = [
  { id: "work", label: "Working Experience" },
  { id: "leadership", label: "Leadership Experience" },
];

export const experiences: Experience[] = [
  // Working Experience
  {
    id: "1",
    category: "work",
    title: "Software Engineering Laboratory Assistant",
    organization: "STEI ITB",
    location: "Bandung, West Java",
    startDate: "2026-08",
    endDate: "present",
    description: [
      "Assist IF2150 Software Engineering, guiding student teams through the full SDLC, from project ideation, requirements elicitation, and user stories to construction and deployment, across Waterfall, Iterative, Scrum, and Agile process models.",
      "Mentor analysis and design with UML modeling (activity, swimlane, use case, sequence, and class diagrams), covering design concepts, strategies, and architectural design, then reviewing artifacts for consistency against their implementation.",
      "Coach verification & validation, from requirements validation and design evaluation to structured and automated testing of the delivered build.",
      "Teach software configuration management and Git best practices (branching, code review, collaborative workflows), guiding students to organize engineering work as a team under professional ethics.",
    ],
  },
  {
    id: "2",
    category: "work",
    title: "DevOps Engineer (Technology Development)",
    organization: "Inkubator IT (IIT)",
    location: "Bandung, West Java",
    startDate: "2026-05",
    endDate: "present",
    description: [
      "Built and maintained CI/CD pipelines with GitHub Actions and Docker at a software house, automating build and deployment across multiple client web and mobile products with reliable, repeatable production releases.",
      "Deployed and operated applications on the Cloudflare edge stack (Workers, Pages, D1, R2 object storage) for fast global delivery, and wired AWS SES for transactional email (account verification, password resets, notifications).",
      "Evaluating a K3s (lightweight Kubernetes) setup to share infrastructure across client apps, letting each engagement start small and scale horizontally on demand.",
    ],
  },
  {
    id: "3",
    category: "work",
    title: "Software Engineer",
    organization: "Concorde Systems",
    location: "Bandung, West Java",
    startDate: "2026-05",
    endDate: "present",
    description: [
      "Owning the backend end to end at a startup building ConcordeOS, an AI-powered offline-first maintenance platform bridging enterprise CMMS (MaintainX) and field technicians in extreme industrial environments.",
      "Designed the database schema (ERD) and REST API from scratch, implementing type-safe endpoints with Go (Chi, sqlc) over Supabase (PostgreSQL), plus JWT auth middleware and realtime data flows.",
      "Architecting an asynchronous offline-first sync layer that guarantees zero data loss in remote and underground sites, cutting MTTR for F&B, heavy manufacturing, and oil & gas clients.",
    ],
  },

  // Leadership Experience
  {
    id: "4",
    category: "leadership",
    title: "Director of Technology",
    organization: "The Sandbox 3.0",
    location: "Bandung, West Java",
    startDate: "2025-11",
    endDate: "2026-05",
    description: [
      "Led end-to-end engineering of a competition platform for 250+ users, shipping the full registration and multi-stage submission pipeline (preliminary to final) with Next.js, Prisma, and CockroachDB.",
      "Built an internal admin panel for real-time financial verification and submission management, cutting organizers' manual review effort across the event cycle.",
    ],
  },
  {
    id: "5",
    category: "leadership",
    title: "Software Engineering Curriculum Developer",
    organization: "Arkavidia",
    location: "Bandung, West Java",
    startDate: "2026-05",
    endDate: "present",
    description: [
      "Designed a hands-on software engineering curriculum covering backend architecture, API integration, and production deployment for mentees.",
      "Led milestone-based build sessions on real features, guiding mentees to ship deployable end-to-end projects.",
    ],
  },
  {
    id: "6",
    category: "leadership",
    title: "Full-Stack Developer",
    organization: "TEDxITB 9.0",
    location: "Bandung, West Java",
    startDate: "2025-11",
    endDate: "2026-05",
    description: [
      "Shipped full-stack features for the official TEDxITB website, building user flows from account registration to content discovery across server and client.",
      "Delivered API integrations, database logic, and responsive UI for a high-traffic public platform, collaborating via GitHub-based workflows.",
    ],
  },
  {
    id: "7",
    category: "leadership",
    title: "Full-Stack Developer",
    organization: "IEEE ITB Student Branch Batch 2025/2026",
    location: "Bandung, West Java",
    startDate: "2025-08",
    endDate: "2026-06",
    description: [
      "Engineered the IEEE Paper Explorer, a data pipeline that fetches, processes, and renders live research-paper data from the IEEE API with dynamic content delivery.",
    ],
  },
];

// Helper function to format date
export const formatDate = (dateString: string): string => {
  if (dateString === "present") return "present";
  
  const [year, month] = dateString.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  return `${months[parseInt(month) - 1]} ${year}`;
};

// Helper function to sort experiences by date (most recent first)
export const sortExperiences = (experiences: Experience[]): Experience[] => {
  return [...experiences].sort((a, b) => {
    const aEnd = a.endDate === "present" ? "9999-12" : a.endDate;
    const bEnd = b.endDate === "present" ? "9999-12" : b.endDate;
    
    // First sort by end date (descending)
    if (aEnd !== bEnd) {
      return bEnd.localeCompare(aEnd);
    }
    
    // If end dates are equal, sort by start date (descending)
    return b.startDate.localeCompare(a.startDate);
  });
};

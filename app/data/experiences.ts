export interface Experience {
  id: string;
  title: string;
  organization: string;
  location?: string;
  startDate: string; // Format: "YYYY-MM"
  endDate: string | "present"; // Format: "YYYY-MM" or "present"
  description: string[];
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Technology Development",
    organization: "Inkubator IT (IIT)",
    location: "Bandung, West Java",
    startDate: "2026-05",
    endDate: "present",
    description: [
      "Onboarding into the DevOps team at a software house delivering client web, mobile, and business software, focusing on build automation and production deployment.",
      "Getting hands-on with the CI/CD toolchain and deployment infrastructure to support reliable, repeatable releases for multiple client engagements.",
    ],
  },
  {
    id: "2",
    title: "Systems & Backend Engineer",
    organization: "Concorde Systems",
    location: "Bandung, West Java",
    startDate: "2026-05",
    endDate: "present",
    description: [
      "Onboarding as a Systems & Backend Engineer at a startup building ConcordeOS, an AI-powered, offline-first maintenance platform bridging enterprise ERPs (Odoo) and blue-collar technicians in extreme industrial environments.",
      "Ramping up on the backend stack and asynchronous offline-first sync architecture that ensures zero data loss in remote fields and underground plants while reducing MTTR for F&B, heavy manufacturing, and oil & gas operations.",
    ],
  },
  {
    id: "3",
    title: "Software Engineering Curriculum Developer",
    organization: "Arkavidia",
    location: "Bandung, West Java",
    startDate: "2026-05",
    endDate: "present",
    description: [
      "Developed a software engineering curriculum and hands-on project materials for mentees, designing practice-focused modules on backend architecture, API integration, and production-ready implementation.",
      "Structured milestone-based assignments and guided build sessions around real features, helping mentees translate theory into deployable, end-to-end software workflows.",
    ],
  },
  {
    id: "4",
    title: "Director of Technology",
    organization: "The Sandbox 3.0",
    location: "Bandung, West Java",
    startDate: "2025-11",
    endDate: "2026-05",
    description: [
      "Led end-to-end software engineering for the competition platform serving 250+ users, building the full registration and multi-stage submission pipeline (preliminary to final) using Next.js, Prisma, and CockroachDB.",
      "Developed an internal admin panel for real-time financial verification and participant submission management, streamlining the operational workflow for organizers throughout the event cycle.",
    ],
  },
  {
    id: "5",
    title: "Full-Stack Developer",
    organization: "TEDxITB 9.0",
    location: "Bandung, West Java",
    startDate: "2025-11",
    endDate: "2026-05",
    description: [
      "Built end-to-end full-stack features for the official TEDxITB website, handling both server-side logic and client-side interfaces to support complete user flows from account registration to content discovery.",
      "Owned cross-stack implementation across API integration, database interaction, and responsive UI delivery, collaborating with the IT team via GitHub workflows to ship a reliable, high-traffic public platform.",
    ],
  },
  {
    id: "6",
    title: "Full-Stack Developer",
    organization: "IEEE ITB Student Branch Batch 2025/2026",
    location: "Bandung, West Java",
    startDate: "2025-08",
    endDate: "present",
    description: [
      "Engineered the IEEE Paper Explorer feature, building a full data pipeline that fetches, processes, and displays live research paper data directly from the IEEE API, demonstrating strong command of external API integration, data flow architecture, and dynamic content rendering.",
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

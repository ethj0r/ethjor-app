export interface Experience {
  id: string;
  title: string;
  organization: string;
  startDate: string; // Format: "YYYY-MM"
  endDate: string | "present"; // Format: "YYYY-MM" or "present"
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Director of IT",
    organization: "The Sandbox 3.0 by IEEE ITB SB",
    startDate: "2025-11",
    endDate: "present",
  },
  {
    id: "2",
    title: "Web Developer",
    organization: "TEDxITB",
    startDate: "2025-11",
    endDate: "present",
  },
  {
    id: "3",
    title: "Frontend Engineer",
    organization: "IEEE ITB Student Branch",
    startDate: "2025-08",
    endDate: "present",
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

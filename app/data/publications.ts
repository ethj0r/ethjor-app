export interface Publication {
  id: string;
  title: string;
  publisher: string;
  date: string;
  link?: string;
  categories: string[];
}

export const publications: Publication[] = [
  {
    id: "1",
    title: "Anomaly Detection in AI Knowledge Graphs: A Discrete Mathematical Framework Against Graph Poisoning",
    publisher: "STEI ITB",
    date: "June 2025",
    link: "https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2024-2025-2/Makalah2025/Makalah-Matdis-2025-IF-ITB%20(33).pdf",
    categories: ["Knowledge Graphs", "AI Security", "Discrete Mathematics", "Graph Theory", "Anomaly Detection"],
  }
];

export interface GraphNode {
  id: string;
  label: string;
  type: "paper" | "concept";
  group: "paper1" | "paper2" | "shared";
  description: string;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export const graphNodes: GraphNode[] = [
  {
    id: "paper1",
    label: "Transformer Compression",
    type: "paper",
    group: "paper1",
    description:
      "Efficient compression of pre-trained language models through selective tensor rank reduction",
  },
  {
    id: "paper2",
    label: "KG Anomaly Detection",
    type: "paper",
    group: "paper2",
    description:
      "A discrete mathematical framework for detecting anomalies in AI knowledge graphs against graph poisoning",
  },
  {
    id: "model-compression",
    label: "Model Compression",
    type: "concept",
    group: "paper1",
    description:
      "Techniques to reduce neural network size while preserving performance",
  },
  {
    id: "nlp",
    label: "NLP",
    type: "concept",
    group: "paper1",
    description:
      "Natural Language Processing — understanding and generating human language with AI",
  },
  {
    id: "transformer",
    label: "Transformer",
    type: "concept",
    group: "paper1",
    description:
      "Neural network architecture based on self-attention mechanisms",
  },
  {
    id: "tensor-decomp",
    label: "Tensor Decomposition",
    type: "concept",
    group: "paper1",
    description:
      "Decomposing multi-dimensional arrays into simpler factor components",
  },
  {
    id: "low-rank",
    label: "Low Rank Approx.",
    type: "concept",
    group: "paper1",
    description:
      "Approximating matrices with lower-dimensional representations to reduce complexity",
  },
  {
    id: "linear-algebra",
    label: "Linear Algebra",
    type: "concept",
    group: "paper1",
    description:
      "Mathematical foundation for vectors, matrices, and linear transformations",
  },
  {
    id: "knowledge-graphs",
    label: "Knowledge Graphs",
    type: "concept",
    group: "paper2",
    description:
      "Structured networks of real-world entities and their relationships",
  },
  {
    id: "ai-security",
    label: "AI Security",
    type: "concept",
    group: "paper2",
    description:
      "Protecting AI systems from adversarial attacks and data manipulation",
  },
  {
    id: "discrete-math",
    label: "Discrete Math",
    type: "concept",
    group: "paper2",
    description:
      "Mathematical structures that are fundamentally discrete rather than continuous",
  },
  {
    id: "graph-theory",
    label: "Graph Theory",
    type: "concept",
    group: "paper2",
    description:
      "Study of graphs — mathematical structures modeling pairwise relations between objects",
  },
  {
    id: "anomaly-detection",
    label: "Anomaly Detection",
    type: "concept",
    group: "paper2",
    description:
      "Identifying patterns in data that deviate significantly from expected behavior",
  },
  {
    id: "ml",
    label: "Machine Learning",
    type: "concept",
    group: "shared",
    description: "The central discipline connecting both research areas",
  },
];

export const graphEdges: GraphEdge[] = [
  // Paper 1 connections
  { source: "paper1", target: "model-compression" },
  { source: "paper1", target: "nlp" },
  { source: "paper1", target: "transformer" },
  { source: "paper1", target: "tensor-decomp" },
  { source: "paper1", target: "low-rank" },
  { source: "paper1", target: "linear-algebra" },
  { source: "paper1", target: "ml" },
  // Paper 2 connections
  { source: "paper2", target: "knowledge-graphs" },
  { source: "paper2", target: "ai-security" },
  { source: "paper2", target: "discrete-math" },
  { source: "paper2", target: "graph-theory" },
  { source: "paper2", target: "anomaly-detection" },
  { source: "paper2", target: "ml" },
  // Cross-connections
  { source: "linear-algebra", target: "discrete-math" },
  { source: "knowledge-graphs", target: "nlp" },
  { source: "knowledge-graphs", target: "graph-theory" },
  { source: "tensor-decomp", target: "low-rank" },
  { source: "anomaly-detection", target: "ai-security" },
  { source: "low-rank", target: "model-compression" },
];

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  graphNodes,
  graphEdges,
  type GraphNode,
  type GraphEdge,
} from "../data/researchGraph";

interface SimNode extends GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  fx: number | null;
  fy: number | null;
}

const WIDTH = 900;
const HEIGHT = 550;
const PADDING = 60;
const PAPER_RADIUS = 32;
const CONCEPT_RADIUS = 20;
const SHARED_RADIUS = 24;

const REPULSION = 4000;
const ATTRACTION = 0.008;
const DAMPING = 0.88;
const CENTER_GRAVITY = 0.008;

const COLORS = {
  paper1: "#7E9DB8",
  paper2: "#0F3063",
  shared: "#0367FD",
  edge: "#6B7280",
  edgeActive: "#8f8f8f",
  text: "#161616",
};

function getNodeRadius(node: SimNode) {
  if (node.type === "paper") return PAPER_RADIUS;
  if (node.group === "shared") return SHARED_RADIUS;
  return CONCEPT_RADIUS;
}

function getNodeColor(node: { group: string }) {
  if (node.group === "paper1") return COLORS.paper1;
  if (node.group === "paper2") return COLORS.paper2;
  return COLORS.shared;
}

function initializeNodes(): SimNode[] {
  const p1Concepts = graphNodes.filter(
    (n) => n.group === "paper1" && n.type === "concept"
  );
  const p2Concepts = graphNodes.filter(
    (n) => n.group === "paper2" && n.type === "concept"
  );

  return graphNodes.map((node) => {
    let x: number, y: number;

    if (node.id === "paper1") {
      x = WIDTH * 0.28;
      y = HEIGHT * 0.48;
    } else if (node.id === "paper2") {
      x = WIDTH * 0.72;
      y = HEIGHT * 0.48;
    } else if (node.group === "shared") {
      x = WIDTH * 0.5;
      y = HEIGHT * 0.42;
    } else {
      const concepts = node.group === "paper1" ? p1Concepts : p2Concepts;
      const idx = concepts.findIndex((n) => n.id === node.id);
      const centerX = node.group === "paper1" ? WIDTH * 0.28 : WIDTH * 0.72;
      const centerY = HEIGHT * 0.48;
      const angle = (2 * Math.PI * idx) / concepts.length - Math.PI / 2;
      const radius = 140;
      x = centerX + radius * Math.cos(angle);
      y = centerY + radius * Math.sin(angle);
    }

    return { ...node, x, y, vx: 0, vy: 0, fx: null, fy: null };
  });
}

function getConnectedIds(nodeId: string): Set<string> {
  const connected = new Set<string>();
  for (const edge of graphEdges) {
    if (edge.source === nodeId) connected.add(edge.target);
    if (edge.target === nodeId) connected.add(edge.source);
  }
  return connected;
}

export default function ResearchGraphSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<SimNode[]>([]);
  const frameRef = useRef<number>(0);
  const isRunningRef = useRef(false);
  const dragRef = useRef<{ id: string } | null>(null);

  const [renderNodes, setRenderNodes] = useState<SimNode[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    node: GraphNode;
  } | null>(null);

  const highlightId = hoveredId || activeId;
  const connectedIds = highlightId
    ? getConnectedIds(highlightId)
    : new Set<string>();

  const applyForces = useCallback(() => {
    const nodes = nodesRef.current;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = REPULSION / (dist * dist);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;

        if (nodes[i].fx == null) {
          nodes[i].vx -= fx;
          nodes[i].vy -= fy;
        }
        if (nodes[j].fx == null) {
          nodes[j].vx += fx;
          nodes[j].vy += fy;
        }

        const minDist =
          getNodeRadius(nodes[i]) + getNodeRadius(nodes[j]) + 20;
        if (dist < minDist) {
          const overlap = (minDist - dist) * 0.5;
          const ox = (dx / dist) * overlap;
          const oy = (dy / dist) * overlap;
          if (nodes[i].fx == null) {
            nodes[i].x -= ox;
            nodes[i].y -= oy;
          }
          if (nodes[j].fx == null) {
            nodes[j].x += ox;
            nodes[j].y += oy;
          }
        }
      }
    }

    for (const edge of graphEdges) {
      const source = nodes.find((n) => n.id === edge.source)!;
      const target = nodes.find((n) => n.id === edge.target)!;
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const idealDist = 120;
      const force = (dist - idealDist) * ATTRACTION;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;

      if (source.fx == null) {
        source.vx += fx;
        source.vy += fy;
      }
      if (target.fx == null) {
        target.vx -= fx;
        target.vy -= fy;
      }
    }

    for (const node of nodes) {
      if (node.fx != null) {
        node.x = node.fx;
        node.y = node.fy!;
        node.vx = 0;
        node.vy = 0;
        continue;
      }

      node.vx += (WIDTH / 2 - node.x) * CENTER_GRAVITY;
      node.vy += (HEIGHT / 2 - node.y) * CENTER_GRAVITY;

      node.vx *= DAMPING;
      node.vy *= DAMPING;

      node.x += node.vx;
      node.y += node.vy;

      const r = getNodeRadius(node);
      node.x = Math.max(PADDING + r, Math.min(WIDTH - PADDING - r, node.x));
      node.y = Math.max(PADDING + r, Math.min(HEIGHT - PADDING - r, node.y));
    }
  }, []);

  const startSimulation = useCallback(() => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    let frame = 0;

    function loop() {
      applyForces();
      frame++;

      if (frame % 2 === 0) {
        setRenderNodes(nodesRef.current.map((n) => ({ ...n })));
      }

      const totalVelocity = nodesRef.current.reduce(
        (sum, n) => sum + Math.abs(n.vx) + Math.abs(n.vy),
        0
      );

      if ((totalVelocity > 0.5 || dragRef.current) && frame < 600) {
        frameRef.current = requestAnimationFrame(loop);
      } else {
        isRunningRef.current = false;
        setRenderNodes(nodesRef.current.map((n) => ({ ...n })));
      }
    }

    frameRef.current = requestAnimationFrame(loop);
  }, [applyForces]);

  useEffect(() => {
    nodesRef.current = initializeNodes();
    setRenderNodes(nodesRef.current.map((n) => ({ ...n })));
    startSimulation();
    return () => cancelAnimationFrame(frameRef.current);
  }, [startSimulation]);

  const toSVGPoint = useCallback((clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const pt = svg.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const svgPt = pt.matrixTransform(ctm.inverse());
    return { x: svgPt.x, y: svgPt.y };
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, nodeId: string) => {
      e.preventDefault();
      e.stopPropagation();
      (e.target as Element).setPointerCapture(e.pointerId);
      dragRef.current = { id: nodeId };

      const node = nodesRef.current.find((n) => n.id === nodeId);
      if (node) {
        const pt = toSVGPoint(e.clientX, e.clientY);
        node.fx = pt.x;
        node.fy = pt.y;
      }

      startSimulation();
    },
    [toSVGPoint, startSimulation]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current) return;
      const node = nodesRef.current.find(
        (n) => n.id === dragRef.current!.id
      );
      if (node) {
        const pt = toSVGPoint(e.clientX, e.clientY);
        node.fx = pt.x;
        node.fy = pt.y;
      }
    },
    [toSVGPoint]
  );

  const handlePointerUp = useCallback(() => {
    if (!dragRef.current) return;
    const node = nodesRef.current.find((n) => n.id === dragRef.current!.id);
    if (node) {
      node.fx = null;
      node.fy = null;
    }
    dragRef.current = null;
  }, []);

  const handleNodeEnter = useCallback(
    (e: React.MouseEvent, node: SimNode) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top - 10,
        node,
      });
      setHoveredId(node.id);
    },
    []
  );

  const handleNodeLeave = useCallback(() => {
    setTooltip(null);
    setHoveredId(null);
  }, []);

  const handleNodeClick = useCallback((nodeId: string) => {
    setActiveId((prev) => (prev === nodeId ? null : nodeId));
  }, []);

  const handleBgClick = useCallback(() => {
    setActiveId(null);
  }, []);

  const isNodeHighlighted = (id: string) =>
    !highlightId || id === highlightId || connectedIds.has(id);
  const isEdgeHighlighted = (edge: GraphEdge) =>
    !highlightId ||
    edge.source === highlightId ||
    edge.target === highlightId;

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-[#E7E7E7] pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="text-center mb-2 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Research Concept Map
          </h2> */}
          {/* <p className="text-center text-sm text-gray-500 mb-8 md:text-base">
            Explore the connections between concepts across my research papers
          </p> */}
        </motion.div>

        <motion.div
          ref={containerRef}
          className="liquid-glass-card relative mx-auto md:rounded-[54px]!"
          style={{
            maxWidth: "900px",
            borderRadius: "44px",
            border: "1px solid rgba(255, 255, 255, 0.7)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="relative z-[1] w-full h-auto"
            style={{ touchAction: "pan-y" }}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onClick={handleBgClick}
          >
            <defs>
              <radialGradient id="rg-node-paper1" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#A4BFCF" />
                <stop offset="100%" stopColor="#161616" />
              </radialGradient>
              <radialGradient id="rg-node-paper2" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#7184A1" />
                <stop offset="100%" stopColor="#161616" />
              </radialGradient>
              <radialGradient id="rg-node-shared" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#0367FD" />
                <stop offset="100%" stopColor="#161616" />
              </radialGradient>
              <filter
                id="rg-node-shadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="4"
                  floodColor="#000000"
                  floodOpacity="0.4"
                />
              </filter>
            </defs>

            {/* Edges */}
            <g>
              {graphEdges.map((edge, i) => {
                const source = renderNodes.find((n) => n.id === edge.source);
                const target = renderNodes.find((n) => n.id === edge.target);
                if (!source || !target) return null;
                const highlighted = isEdgeHighlighted(edge);
                return (
                  <line
                    key={i}
                    x1={source.x}
                    y1={source.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={
                      highlighted && highlightId
                        ? COLORS.edgeActive
                        : COLORS.edge
                    }
                    strokeWidth={highlighted && highlightId ? 2 : 1}
                    opacity={highlighted ? (highlightId ? 0.8 : 0.4) : 0.1}
                    style={{
                      transition:
                        "opacity 0.3s, stroke 0.3s, stroke-width 0.3s",
                    }}
                  />
                );
              })}
            </g>

            {/* Nodes */}
            <g>
              {renderNodes.map((node) => {
                const radius = getNodeRadius(node);
                const highlighted = isNodeHighlighted(node.id);
                const isActive = node.id === highlightId;
                const gradientId =
                  node.group === "paper1"
                    ? "rg-node-paper1"
                    : node.group === "paper2"
                      ? "rg-node-paper2"
                      : "rg-node-shared";

                return (
                  <g
                    key={node.id}
                    style={{ cursor: "pointer", transition: "opacity 0.3s" }}
                    opacity={highlighted ? 1 : 0.2}
                    onPointerDown={(e) => handlePointerDown(e, node.id)}
                    onMouseEnter={(e) => handleNodeEnter(e, node)}
                    onMouseLeave={handleNodeLeave}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNodeClick(node.id);
                    }}
                  >
                    {isActive && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={radius + 8}
                        fill="none"
                        stroke={getNodeColor(node)}
                        strokeWidth={2}
                        opacity={0.3}
                      />
                    )}

                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={radius}
                      fill={`url(#${gradientId})`}
                      filter="url(#rg-node-shadow)"
                      stroke="none"
                    />

                    <text
                      x={node.x}
                      y={node.y + radius + 14}
                      textAnchor="middle"
                      fill={COLORS.text}
                      fontSize={node.type === "paper" ? 12 : 10}
                      fontWeight={node.type === "paper" ? 600 : 500}
                      style={{ pointerEvents: "none", userSelect: "none" }}
                    >
                      {node.label}
                    </text>

                    {node.type === "paper" && (
                      <text
                        x={node.x}
                        y={node.y + 1}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize={14}
                        fontWeight={700}
                        style={{ pointerEvents: "none", userSelect: "none" }}
                      >
                        {node.id === "paper1" ? "P1" : "P2"}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Tooltip */}
          {tooltip && (
            <div
              className="absolute pointer-events-none z-10"
              style={{
                left: tooltip.x,
                top: tooltip.y,
                transform: "translate(-50%, -100%)",
              }}
            >
              <div
                className="rounded-xl px-4 py-3 text-left shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                  maxWidth: "240px",
                }}
              >
                <p className="text-sm font-semibold text-gray-900">
                  {tooltip.node.label}
                </p>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  {tooltip.node.description}
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Legend */}
        <div className="mt-4 flex flex-col items-center gap-2 md:mt-6 md:flex-row md:justify-center md:gap-6">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ background: COLORS.paper1 }}
            />
            <span className="text-xs font-medium text-gray-700">Paper 1: Transformer Compression</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ background: COLORS.paper2 }}
            />
            <span className="text-xs font-medium text-gray-700">Paper 2: KG Anomaly Detection</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ background: COLORS.shared }}
            />
            <span className="text-xs font-medium text-gray-700">Shared Concept</span>
          </div>
        </div>
        {/* <p className="mt-3 text-center text-xs text-gray-400">
          Hover or tap on nodes to explore · Drag to rearrange
        </p> */}
      </div>
    </section>
  );
}

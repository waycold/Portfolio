import React, { useMemo } from 'react';
import { ReactFlow, Background, Controls, Handle, Position, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useTheme } from '../../context/ThemeContext';

const SIDES = ['top', 'right', 'bottom', 'left'];
const SIDE_POSITION = {
  top: Position.Top,
  right: Position.Right,
  bottom: Position.Bottom,
  left: Position.Left,
};

const FlowNode = ({ data }) => (
  <div
    className={`relative rounded-xl border px-4 py-3 min-w-[170px] text-center shadow-sm ${
      data.accent ? 'bg-primary/15 border-primary' : 'bg-card border-border'
    }`}
  >
    {SIDES.map((side) => (
      <React.Fragment key={side}>
        <Handle id={`${side}-target`} type="target" position={SIDE_POSITION[side]} style={{ opacity: 0 }} />
        <Handle id={`${side}-source`} type="source" position={SIDE_POSITION[side]} style={{ opacity: 0 }} />
      </React.Fragment>
    ))}
    <div className="text-sm font-medium text-foreground">{data.label}</div>
    {data.sub && <div className="text-xs font-mono text-muted-foreground mt-1">{data.sub}</div>}
  </div>
);

const nodeTypes = { architecture: FlowNode };

// Picks which side of the source/target node an edge should connect through,
// based on their relative position, so edges route along the shortest path
// instead of always exiting/entering the same fixed side.
function pickSides(source, target) {
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  if (Math.abs(dx) >= Math.abs(dy)) {
    return dx >= 0 ? ['right', 'left'] : ['left', 'right'];
  }
  return dy >= 0 ? ['bottom', 'top'] : ['top', 'bottom'];
}

const FlowDiagram = ({ nodes, edges }) => {
  const { theme } = useTheme();

  const rfNodes = useMemo(
    () =>
      (nodes ?? []).map((n) => ({
        id: n.id,
        type: 'architecture',
        position: { x: n.x, y: n.y },
        data: { label: n.label, sub: n.sub, accent: n.accent },
        draggable: false,
        connectable: false,
      })),
    [nodes]
  );

  const rfEdges = useMemo(() => {
    const byId = Object.fromEntries((nodes ?? []).map((n) => [n.id, n]));
    return (edges ?? []).map((e, i) => {
      const source = byId[e.from];
      const target = byId[e.to];
      const [sourceSide, targetSide] = source && target ? pickSides(source, target) : ['right', 'left'];
      return {
        id: `${e.from}-${e.to}-${i}`,
        source: e.from,
        target: e.to,
        sourceHandle: `${sourceSide}-source`,
        targetHandle: `${targetSide}-target`,
        label: e.label,
        type: 'smoothstep',
        style: { stroke: 'var(--border)', strokeWidth: 1.5 },
        labelStyle: { fill: 'var(--muted-foreground)', fontSize: 11, fontFamily: 'var(--font-mono)' },
        labelBgStyle: { fill: 'var(--card)', fillOpacity: 0.92 },
        labelBgPadding: [4, 2],
        markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--muted-foreground)', width: 18, height: 18 },
      };
    });
  }, [nodes, edges]);

  if (!nodes?.length) return null;

  return (
    <div className="rounded-2xl overflow-hidden bg-muted border border-border">
      <p className="text-xs font-mono tracking-widest uppercase px-6 pt-6 pb-3 text-muted-subtext">
        System Architecture
      </p>
      <div className="h-[420px] sm:h-[480px] w-full" role="group" aria-label="System architecture flow diagram">
        <ReactFlow
          nodes={rfNodes}
          edges={rfEdges}
          nodeTypes={nodeTypes}
          colorMode={theme}
          fitView
          fitViewOptions={{ padding: 0.25 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnScroll={false}
          zoomOnScroll={false}
          zoomOnPinch
          panOnDrag
          proOptions={{ hideAttribution: false }}
        >
          <Background variant="dots" gap={18} size={1} color="var(--border)" />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowDiagram;

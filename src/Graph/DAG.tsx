import React from 'react';
import { DefaultLink, Graph as VisxGraph } from '@visx/network';
import Graph from './dagre/Graph';
import DefaultNode from '../Node/DefaultNode';
import { DAGProps } from '../types/module';

const DAG: React.FC<DAGProps> = ({ nodes, edges, zoomable, draggable }) => {
  const graph = new Graph(nodes, edges);
  graph.initialize()
  const processedGraph = graph.getProcessedGraph()

  return <VisxGraph nodeComponent={DefaultNode} linkComponent={DefaultLink} graph={processedGraph} />;
};

export default DAG;

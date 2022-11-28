import React, { useEffect, useState } from 'react';
import DagreGraph from './dagre/DagreGraph';
import { DagProps } from '../types/module';
import DagProper from './DagProper';
import { DagGraph } from '../types/graph';

const Dag: React.FC<DagProps> = ({ nodes, edges, zoomable, draggable, options, LoadingComponent }) => {

  const [processedGraph, setProcessedGraph] = useState<DagGraph | undefined>(undefined);

  useEffect(() => {
    const graph = new DagreGraph(nodes, edges, options);
    graph.initialize()
    setProcessedGraph(graph.getProcessedGraph())
  }, [nodes, edges])

  if(!processedGraph){
    if(LoadingComponent){
      return <LoadingComponent />
    }
    
    return <></>
  }

  return <DagProper nodes={processedGraph.nodes} edges={processedGraph.edges} />
};

export default Dag;

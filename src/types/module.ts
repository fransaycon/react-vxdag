import { FunctionComponent } from "react";
import { Edge, Node, Options } from "./graph";

export interface ModuleProps {
    width: number | string;
    height: number | string;
    backgroundColor: string;
    padding: number | string;
}

export interface DagProps<T = {}> {
    zoomable?: boolean;
    draggable?: boolean;
    nodes: Node<T>[];
    edges: Edge[];
    options?: Options;
    LoadingComponent?: FunctionComponent;
}

export interface ReactVxDagProps<T = {}> extends ModuleProps, DagProps<T> {
}

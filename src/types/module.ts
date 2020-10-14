import { Edge, Node, Options } from "./graph";

export interface ModuleProps {
    width: number | string;
    height: number | string;
    backgroundColor: string;
}

export interface DAGProps<T = {}> {
    zoomable?: boolean;
    draggable?: boolean;
    nodes: Node<T>[];
    edges: Edge[];
    options: Options;
}

export interface ReactVxDagProps<T = {}> extends ModuleProps, DAGProps<T> {
}

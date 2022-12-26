export type DataResType = {
    Label: string;
    icon?: string;
    id: string;
    isFolder: string;
    parent: string;
    path: string;
}


export type DataType = {
    id: number,
    title: string,
    key: string,
    parent?: number,
    children?: DataType[],
}
export type DataType = {
    id: number,
    title: string,
    key: string,
    parent?: number,
    children?: DataType[],
}
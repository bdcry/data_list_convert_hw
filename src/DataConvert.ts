import { database } from "./utils/database";

type DataResType = {
  Label: string;
  icon?: string;
  id: string;
  isFolder: string;
  parent: string;
  path: string;
};

type DataType = {
  id: number;
  title: string;
  key: string;
  parent?: number;
  children?: DataType[];
};

export const convertArray = (arr: DataResType[], parentNum: number): DataType[] | undefined => {
  let tempArr = [];
  arr.forEach((i) => {
    if (Number(i.parent) === parentNum) {
      tempArr = [...tempArr, {
        id: Number(i.id),
        label: i.Label,
        key: i.id,
        parent: Number(i.parent),
        children: convertArray(arr, Number(i.id)),
      }]
    }
  })


  if(tempArr.length === 0) tempArr = undefined;
  return tempArr;
}
export const treeArray = convertArray(database, 0);
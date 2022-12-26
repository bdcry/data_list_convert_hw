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
// Func could be like this:
// const convertArray = (arr: DataResType[], parentNum: string): DataType[] => {
//     1. Declar an empty tempArr
//     2. Loop through each value in the array and then:
//           2.1. If item.parent === parentNum ---> Push to tempArr
//           2.2. Also add the property children: convertArray(arr, i.id), --> This is recursion
// }

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
export const treeArray = convertArray(database, 45);











// first test function
// function flatToTree(database): any {
//   let map = {},
//     tempdb,
//     res = [],
//     i;
//   for (i = 0; i < database.length; i++) {
//     map[database[i].id] = i;
//     database[i].children = [];
//   }
//   for (i = 0; i < database.length; i++) {
//     map[database[i].id] = i;
//     database[i].children = [];

//     tempdb = database[i];
//     if (tempdb.parent !== "0") {
//       database[map[tempdb.parent]].children.push(tempdb);
//     } else {
//       res.push(tempdb);
//     }
//   }
//   return res;
// }

// export const treeDataBase = JSON.stringify(flatToTree(database), undefined, 5);

// third test function
// const convertArray = database => database.filter(item => {
//   item.children = database.filter(i => i.parent === item.id);
//   return item.parent;
// })

// export const treeArray = JSON.stringify(convertArray(database), undefined, 5);

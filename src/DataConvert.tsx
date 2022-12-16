import { database } from "./utils/database";

function flatToTree(database): any {
  let map = {},
    tempdb,
    res = [],
    i;
  for (i = 0; i < database.length; i++) {
    map[database[i].id] = i;
    database[i].children = [];
  }
  for (i = 0; i < database.length; i++) {
    map[database[i].id] = i;
    database[i].children = [];

    tempdb = database[i];
    if (tempdb.parent !== "0") {
      database[map[tempdb.parent]].children.push(tempdb);
    } else {
      res.push(tempdb);
    }
  }
  return res;
}

export const treeDataBase = JSON.stringify(flatToTree(database), undefined, 5);

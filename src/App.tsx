import React from "react";
import "./App.css";
import { convertArray } from "./DataConvert";
import { treeArray } from "./DataConvert";
import { EditTwoTone, BookTwoTone, FolderOpenTwoTone } from "@ant-design/icons";
import { Menu, Space } from "antd";

function App() {
  console.log(convertArray);
  console.log(treeArray);
  return (
    <div className="App">
      <header className="App-header">
        <Space>
          <Menu
            mode="inline"
            items={treeArray}
          ></Menu>
        </Space>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { treeArray } from "./DataConvert";
import { Menu, Space } from "antd";

function App() {
  const onClick = (info) => {
    console.log('click ', info);
  };
  console.log(treeArray);
  return (
    <div className="App">
      <header className="App-header">
        <Space>
          <Menu 
          onClick={onClick}
          mode="inline" 
          items={treeArray}
          >
          </Menu>
        </Space>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
// import { treeDataBase } from "./DataConvert";
import { treeArray } from "./DataConvert";
import { EditTwoTone, BookTwoTone, FolderOpenTwoTone } from "@ant-design/icons";
import { Menu, Space } from "antd";

function App() {
  // console.log(treeDataBase);
  console.log(treeArray);
  return (
    <div className="App">
      <header className="App-header">
        <Space>
          <Menu
            mode="inline"
            items={[
              {
                label: "Dictionary",
                key: "dictionary",
                icon: <FolderOpenTwoTone />,
                children: [
                  { label: "Access Level Type", key: "ALT" },
                  { label: "Additional Salary", key: "AS" },
                  { label: "Address type", key: "AddressT" },
                  { label: "Attachment type", key: "AttacmentT" },
                  { label: "Attachments uploaded", key: "AttachmentsUpl" },
                  { label: "Banks", key: "Banks" },
                  { label: "Billing methods", key: "BM" },
                  { label: "Billing Terms", key: "BT" },
                  { label: "Bonds", key: "Bonds" },
                ],
              },
              {
                label: "Journals",
                key: "journals",
                icon: <BookTwoTone />,
                children: [{ label: "blablabla", key: "blabla" }],
              },
              {
                label: "Reports",
                key: "reports",
                icon: <EditTwoTone />,
                children: [{ label: "lalalal", key: "lalal" }],
              },
            ]}
          ></Menu>
        </Space>
      </header>
    </div>
  );
}

export default App;

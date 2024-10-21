import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";

export default function Home({ menuBar }) {
  const [catagory, setCategory] = useState(0);
  return (
    <div className="flex ml-10">
      <div>
        <SideBar
          menuBar={menuBar}
          catagory={catagory}
          setCategory={setCategory}
        />
      </div>
      <div>
        <Content catagory={catagory} setCategory={setCategory} />
      </div>
    </div>
  );
}

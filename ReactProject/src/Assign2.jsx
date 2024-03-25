import React, { useState } from "react";

import { NestedArray } from "./constants.jsx";

const NestedListExample = () => {
  const [data, setData] = useState(NestedArray);
  const [childData, setChildData] = useState([]);
  const [subChildData, setSubChildData] = useState([]);

  const handleItemClick = (item) => {
    setChildData(item?.children);
    setSubChildData([]);
    console.log("Item clicked:", childData);
  };

  const handleChildItemClick = (item) => {
    setSubChildData(item?.children);
    console.log("Item clicked:", childData);
  };

  const NestedList = ({ items, onItemClick }) => {
    return (
      <>
        <ul className="no-bullets">
          {items?.map((item) => (
            <li
              className="element"
              key={item.id}
              onClick={() => onItemClick(item)}
            >
              <div className="folder-info">
                <label>{item.name}</label>
                {item?.children?.length > 0 && <label>{">"}</label>}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="folder-div">
      <div className="nested-folder-div">
        <NestedList items={data} onItemClick={handleItemClick} />
      </div>
      <div className="nested-folder-div">
        <NestedList items={childData} onItemClick={handleChildItemClick} />
      </div>

      <div className="nested-folder-div">
        <NestedList items={subChildData} />
      </div>
    </div>
  );
};

export default NestedListExample;

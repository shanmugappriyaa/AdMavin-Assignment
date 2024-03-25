import React, { useState } from "react";

const TransferComponent = () => {
  const [bucket1, setBucket1] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]); // Initial items in Bucket 1
  const [bucket2, setBucket2] = useState([]); // Initial items in Bucket 2
  const [selectedItems, setSelectedItems] = useState([]); // Tracks selected items

  // Function to handle individual item selection
  const handleItemSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)?.sort()
      );
    } else {
      setSelectedItems([...selectedItems, item]?.sort());
    }
  };

  // Function to add selected items from Bucket 1 to Bucket 2
  const handleAddToBucket2 = () => {
    setBucket2([...bucket2, ...selectedItems]?.sort());
    setBucket1(bucket1.filter((item) => !selectedItems.includes(item))?.sort());
    setSelectedItems([]);
  };

  // Function to remove selected items from Bucket 2 and add them back to Bucket 1
  const handleRemoveFromBucket2 = () => {
    setBucket1([...bucket1, ...selectedItems]?.sort());
    setBucket2(bucket2.filter((item) => !selectedItems.includes(item))?.sort());
    setSelectedItems([]);
  };

  // Function to add all items from Bucket 1 to Bucket 2
  const handleAddAllToBucket2 = () => {
    setBucket2([...bucket2, ...bucket1]?.sort());
    setBucket1([]);
    setSelectedItems([]);
  };

  // Function to remove all items from Bucket 2 and add them back to Bucket 1
  const handleRemoveAllFromBucket2 = () => {
    setBucket1([...bucket1, ...bucket2]?.sort());
    setBucket2([]);
    setSelectedItems([]);
  };

  return (
    <div className="bucket-row">
      <div className="buckets">
        <h2>Bucket 1</h2>
        <ul className="no-bullets">
          {bucket1.map((item) => (
            <li
              className={selectedItems.includes(item) ? "active" : "element"}
              key={item}
              onClick={() => handleItemSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="btn-col">
        <h2 className="text-center">Actions</h2>
        <button onClick={handleAddToBucket2}>Add to Bucket 2 {" - >"}</button>
        <button onClick={handleRemoveFromBucket2}>
          {"< - "}Remove from Bucket 2
        </button>
        <button onClick={handleAddAllToBucket2}>
          Add All to Bucket 2 {" - >>"}
        </button>
        <button onClick={handleRemoveAllFromBucket2}>
          {"<< - "}Remove All from Bucket 2
        </button>
      </div>
      <div className="buckets">
        <h2>Bucket 2</h2>
        <ul className="no-bullets">
          {bucket2.map((item) => (
            <li
              className={selectedItems.includes(item) ? "active" : "element"}
              key={item}
              onClick={() => handleItemSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferComponent;

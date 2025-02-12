import React, { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Malaysia",
    "Mauritius",
    "Rodrigues",
  ];

  //   items = [];

  // let selectIndex = 0;
  //Hook
  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items available</p>}
      <div>
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;

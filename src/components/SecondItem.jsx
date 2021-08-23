import React, { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";

const SecondItem = ({ parentId }) => {
  const { items, itemUrl, setItemUrl } = useContext(ItemContext);

  const [selectedItems, setSelectedItems] = useState();

  const toggleChecktHandler = (e, el, name) => {
    let isChecked = e.target.checked;
    isChecked ? setSelectedItems(el) : setSelectedItems(null);
    isChecked
      ? setItemUrl((prevstate) => prevstate.concat(`/${name}`))
      : setItemUrl((prevstate) => prevstate);
  };

  const filteredSecondItems = items?.filter((item) => {
    return item.parent === parentId;
  });

  const showSecondItems = filteredSecondItems?.map((item) => {
    if (item.id === selectedItems) {
      return (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => toggleChecktHandler(e, item.id, item.name)}
            />
            {item.name}
          </label>
          <SecondItem keys={item.id} parentId={selectedItems} />
        </li>
      );
    } else {
      return (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => toggleChecktHandler(e, item.id, item.name)}
            />
            {item.name}
          </label>
        </li>
      );
    }
  });

  return (
    <>
      <ul>{showSecondItems}</ul>
    </>
  );
};

export default SecondItem;

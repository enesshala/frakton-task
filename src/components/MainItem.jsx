import React, { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import { Link } from "react-router-dom";
import SecondItem from "./SecondItem";
import Summary from "./pages/Summary";

const MainItem = () => {
  const { items, itemUrl, setItemUrl } = useContext(ItemContext);

  const [selectedItems, setSelectedItems] = useState();

  const toggleChecktHandler = (e, el, name) => {
    let isChecked = e.target.checked;
    isChecked ? setSelectedItems(el) : setSelectedItems(0);
    isChecked
      ? setItemUrl((prevstate) => prevstate.concat(`${name}`))
      : setItemUrl((prevstate) => prevstate);
  };
  const filteredMainItems = items?.filter((item) => {
    return item.parent === 0;
  });

  const showItems = filteredMainItems?.map((item) => {
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

          <SecondItem key={item.key} parentId={selectedItems} />
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
      <ul>{showItems}</ul>
      <Link to="/summary">
        <button>summary</button>
      </Link>
    </>
  );
};

export default MainItem;

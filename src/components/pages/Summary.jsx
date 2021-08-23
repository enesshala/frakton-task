import React, { useContext, useState } from "react";
import { ItemContext } from "../../context/ItemContext";
import { Link } from "react-router-dom";

const Summary = () => {
  const { itemUrl, setItemUrl, globalArray, setGlobalArray } =
    useContext(ItemContext);
  let counter = 0;

  const mergeArrayHandler = () => {
    setGlobalArray(globalArray.concat(itemUrl));
    setItemUrl("");
  };

  const showGlobalArray = globalArray.map((item) => {
    counter++;
    return (
      <h3 key={counter}>
        {`${counter}.`}
        {item}
      </h3>
    );
  });

  return (
    <div>
      {showGlobalArray}
      <h3>Last Search : {itemUrl}</h3>
      <Link to="/">
        <button onClick={mergeArrayHandler}>Chose Again</button>
      </Link>
    </div>
  );
};

export default Summary;

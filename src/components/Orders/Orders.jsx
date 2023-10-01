import React from "react";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2>Here is your all orders </h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Orders;

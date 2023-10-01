import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2>this is home page</h2>
    </div>
  );
};

export default Home;

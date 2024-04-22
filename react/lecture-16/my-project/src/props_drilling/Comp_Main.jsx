import React from "react";
import Comp_A from "./Comp_A";

const Comp_Main = () => {
  const name = "Dhanani";
  return (
    <div>
      <h1>This is Components Main</h1>
      <Comp_A name={name} />
    </div>
  );
};

export default Comp_Main;

import React, { useContext } from "react";
import { data, data1 } from "./Comp_Main";

const Comp_C = () => {
  const firstname = useContext(data);
  const age = useContext(data1);

  return (
    <div>
      <h1>My name is {firstname}. And My age is {age}.</h1>
    </div>
  );
};

export default Comp_C;

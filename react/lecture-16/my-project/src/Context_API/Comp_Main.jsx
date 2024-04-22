import React from "react";
import Comp_A from "./Comp_A";
import { createContext } from "react";

// Create , Provider and Consumer.
const data = createContext();
const data1 = createContext();

const Comp_Main = () => {
  const name = "Ashiti";
  const age = "21";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <h1>This is Components Main</h1>
          <Comp_A />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default Comp_Main;
export { data ,data1 };

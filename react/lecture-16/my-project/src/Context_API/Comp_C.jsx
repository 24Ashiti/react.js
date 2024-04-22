import React from "react";
import { data, data1 } from "./Comp_Main";

const Comp_C = () => {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <>
              <data1.Consumer>
                {(age) => {
                  return(
                  <>
                    <h1>
                      My name is {name}. And My age is {age}.{" "}
                    </h1>
                  </>
                  )
                }}
              </data1.Consumer>
            </>
          );
        }}
      </data.Consumer>
    </div>
  );
};

export default Comp_C;

import React from "react";
import { useRef, useState } from "react";

// useRef Hook In React

const Use_Ref = () => {
  const [name, setName] = useState("Ashiti");

  const refElement = useRef('');
  const NewRefElement = useRef('');
  console.log(refElement);
  function ResetName() {
    setName("");
    refElement.current.focus()
  }

  function ApplyBgColor(){
    NewRefElement.current.style.backgroundColor = "orange"
  }
  return (
    <div>
      <div className="flex justify-center">
        <div>
            <div ref={NewRefElement} className="h-96 w-96"></div>
          <input ref={(refElement)}
            className="border-2 border-solid p-3"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="btn bg-green-500 p-3 mx-3 border-2 border-black"
            onClick={ResetName}
          >
            Reset
          </button>
          <button className="btn bg-green-500 p-3 mx-3" onClick={ApplyBgColor}> Click me</button>
        </div>
      </div>
    </div>
  );
};

export default Use_Ref;

import React from "react";

// React With useEffect Hooks
import { useState, useEffect } from "react";

const Use_Effect = () => {
  const [data, setData] = useState(0);
  const [userData, setUserData] = useState("Dhanani  ");

  function handleClick() {
    setData(data + 1);
  }

  function handleClick2() {
    setUserData(" ");
  }
  useEffect(() => {
    console.log("Ashiti");
    // document.title("UseEffect Hooks");
  });

  return (
    <div>
      <span className="btn me-4 bg-pink-400 p-3">{data}</span>
      <button className="btn me-4 bg-pink-700 p-3 " onClick={handleClick}>
        {" "}
        Click Me
      </button>
      <span className="btn me-4 bg-pink-400 p-3">{userData}</span>
      <button className="btn me-4 bg-pink-700 p-3 " onClick={handleClick2}>
        {" "}
        Click Me
      </button>
    </div>
  );
};

export default Use_Effect;

import React from "react";
import { Product } from "../Product";
import { useState } from "react";

const Card = () => {
    const [index , setIndex] =useState(0)
//   let index = 0;
  function Next() {
    // index = index + 1;
    // console.log(index);
    setIndex(index + 1);
  }
  function prev() {
    // index = index - 1;
    // console.log(index);
    setIndex(index - 1);
  }
  let ProductData = Product[index];
  return (
    <div>
      <button onClick={Next} className="btn bg-purple-400 p-3 font-bold">Next</button>
      <button onClick={prev}className="btn bg-purple-400 p-3 font-bold">prev</button>
      <div className="flex justify-center">
        <div className="w-[300px] border-2 border-soild border-black rounded-xl overflow-hidden p-4">
          <div className="flex justify-center p-4">
            <img className="h-[150px] w-[200px]"src={ProductData.image}alt=""/>
          </div>
          <div className="bg-blue-400 rounded-2xl p-4">
            <h1 className="font-bold">{ProductData.title}</h1>
            <p>{ProductData.description}</p>
            <span className="font-bold">_{ProductData.category}</span>
            <span className="font-bold ms-12">${ProductData.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

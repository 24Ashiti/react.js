import React from "react";
import CardImg from "./assets/kashi2.jpeg";

const Crad = (props) => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="max-w-[500px]  mx-4 h-fit-content shadow-xl shadow-gray-600">
        <div>
          <img
            className="w-[500px] h-[250px] object-cover"
            src={props.Img}
            alt=""
          />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">{props.title}</h1>
          <p>
            Varanasi is a city in the northern Indian state of Uttar Pradesh
            dating to the 11th century B.C. Regarded as the spiritual capital of
            India, the city draws Hindu pilgrims who bathe in the Ganges River's
            sacred waters and perform funeral rites. Along the city's winding
            streets are some 2,000 temples, including Kashi Vishwanath, the
            “Golden Temple,” dedicated to the Hindu god Shiva.
          </p>
          <a className="btn inline-block mt-4 "> {props.name}</a>
        </div>
      </div>
    </div>
  );
};

export default Crad;
// shadow-xl shadow-gray-600

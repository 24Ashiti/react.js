// // import { Button } from '@mui/material';
// import "./App.css";
// import React from "react";
// import Navbar from "../src/Components/Navbar";
// import Card from "../src/Components/Card";
// import Article from "../src/Components/Article";
// import Table from "../src/Components/Table";
// import Footer from "../src/Components/Footer";

// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Article/>
//     <div className="flex my-4 gap-4">

//     <Card className="max-md:hidden "/>
//     <Table/>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default App;

import React from 'react'
import Nested from './Components/Nested'
import Ashiti from './Components/Ashiti'


const App = () => {
  return (
    <div>
      
      <Nested/>
      <Ashiti/>
    </div>
  )
}

export default App


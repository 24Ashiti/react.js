import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Components from './components'
import Navbar from './Navbar'
import Artical from './article'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Components/> */}
    <Navbar/>
    <Artical/>
    <Table/>  
      </>
  )
}

export default App

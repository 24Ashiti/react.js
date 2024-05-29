import './App.css'
import Home from './Pages/Home'
import About from'./Pages/About'
import Contact from'./Pages/Contact'
import Product from './Pages/Product'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Navbar from './Componets/Navbar'
import User from './Pages/User'
import Error404 from './Pages/Error404'
import Edit_User from './Pages/Edit_User'



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contac" element={<Contact/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path='/edit' element={<Edit_User/>}/>
      <Route path="/*" element={<Error404/>}/>
    </Routes>
    </BrowserRouter> 

    </>
  )
}

export default App

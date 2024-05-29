import './App.css'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Error404 from './Pages/Error404'
import { BrowserRouter ,Routes , Route} from 'react-router-dom'


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

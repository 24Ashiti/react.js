import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
//import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Error404 from './Pages/Error404'
import OrderSummary from './Pages/OrderSummary'
import Product from './Pages/Product'
import ProductFratures from './Pages/ProductFratures'
import NewProduct from './Pages/NewProduct'
import User from './Pages/User'
import User_Main from './Pages/User_Main'
import Admin from './Pages/Admin'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import RequireAuth from './Pages/RequireAuth'
import { AuthProvider } from './Pages/Auth'
import { BrowserRouter ,Routes , Route} from 'react-router-dom'
const AboutLazy = React.lazy(() => import('./Pages/AboutUs'))

function App() {
  
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="aboutus" element={
          <React.Suspense fallback="Loding......">
            <AboutLazy />
          </React.Suspense>
        } />
        <Route path="shop" element={<Shop/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path='ordersummary' element={<OrderSummary />} />
        <Route path='product' element={<Product />}>
          <Route path='productfeatures' element={<ProductFratures />} />
          <Route path='newproduct' element={<NewProduct />} />
        </Route>
        <Route path='user' element={<User/>}>
          <Route path=':userId' element={<User_Main/>}/>
          <Route path='admin' element={<Admin />}/>
        </Route>
        <Route path='profile' element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
        <Route path='login' element={<Login />}/>
        <Route path="+" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App

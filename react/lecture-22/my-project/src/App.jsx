import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
// import AboutUs from './Pages/AboutUs'
import Blog from './Pages/Blog'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Error404 from './Pages/Error404'
import OrderSummary from './Pages/OrderSummary'
import Product from './Pages/Product'
import ProductFeatures from './Pages/ProductFeatures'
import NewProduct from './Pages/NewProduct'
import User from './Pages/User'
import Usermain from './Pages/Usermain'
import Admins from './Pages/Admins'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './Pages/Profile'
import { AuthProvider } from './Pages/Auth'
import Login from './Pages/Login'

const AboutLazy = React.lazy(() => import('./Pages/AboutUs'))

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={
              <React.Suspense fallback="Loding......">
                <AboutLazy />
              </React.Suspense>
            } />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="ordersummary" element={<OrderSummary />} />
            <Route path='product' element={<Product />}>
              <Route index element={<NewProduct />} />
              <Route index element={<ProductFeatures />} />
            </Route>
            <Route path="user" element={<User />} >
              <Route path=":userId" element={<Usermain />} />
              <Route path="admin" element={<Admins />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
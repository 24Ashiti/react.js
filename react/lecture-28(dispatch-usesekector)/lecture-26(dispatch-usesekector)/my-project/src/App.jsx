
import './App.css'
import { addToCart, removeToCart, emptyCart } from './ProductData/Action'
import { useDispatch } from 'react-redux'
import { ProductData } from './ProductData/ProductAction'
import Header from './Header'

function App() {

  const dispatch = useDispatch()

  const product = {
    name: 'iphone',
    color: 'Matteblue',
    price: 60000,
    chip: 'M2'
  }

  return (
    <>
      <Header/>
      <button onClick={() => dispatch(addToCart(product))}>AddToCart</button>
      <button onClick={() => dispatch(removeToCart(product))}>AddToCart</button>
      <button onClick={() => dispatch(emptyCart())}>AddToCart</button>
      <button onClick={() => dispatch(ProductData())}>ProductCart</button>
    </>
  )
}

export default App

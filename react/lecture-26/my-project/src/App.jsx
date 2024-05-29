import './App.css'
import CakeContainer from './Components/CakeContainer'
import {Provider} from 'react-redux'
import Store from './Redux/Store'
import Store1 from './Redux/Store1'
import DosaContainer from './Components/DosaContainer'
function App() {
 
  return (
    <>
    <Provider store = {Store}>
      <CakeContainer/>
    </Provider>

  
    </>
  )
}

export default App


import './App.css'
// import Button from './Buttons/Button'
import Card from './Card'
import CardImg from '../src/assets/kashi2.jpeg'
import cardImg1 from '../src/assets/kashi4.jpeg'
import cardImg2 from './assets/kashi3.jpeg'


function App() {

  return (
    <>
    <div className='flex justify-center items-center'>

     {/* <Button/> */}
     <Card name={"History"} title={"KASHI"} Img={CardImg}/>
     <Card name={"View History"} title={"VARANASI"} Img={cardImg1}/>
     <Card name={"More.."} title={"BANARAS"} Img={cardImg2}/>
    </div>
    </>
  )
}

export default App

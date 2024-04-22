import React from 'react'


 export function Button(){
    return(
        <>
        <button>Click Me</button>
        </>
    )
}
export function Button1(){
  return(
      <>
      <button>start</button>
      </>
  )
}
const Nested = () => {
  return (
    <div>
      <Button/>
      {/* <Button1/> */}
    </div>
  )
}

export default Nested

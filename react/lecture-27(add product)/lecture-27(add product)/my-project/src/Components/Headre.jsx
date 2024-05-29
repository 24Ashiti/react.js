import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Headre = () => {

     const reult = useSelector((state) => state.Reducer)

     console.warn("header called" ,reult);
  return (
    <div className='h-24 bg-yellow-500 flex justify-end items-center px-20'>
      <NavLink to="/"> Shop </NavLink>
      <NavLink to="Cart">
        <div>
            <span>{reult.length}</span> 
            </div>
      </NavLink>
    </div>
  )
}

export default Headre

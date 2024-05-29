import React from 'react'
import { useParams } from 'react-router-dom'

const User_Main = () => {
    const {userId} = useParams()
  return (
    <div>
      <h1>UserDetails {userId}</h1>
    </div>
  )
}

export default User_Main

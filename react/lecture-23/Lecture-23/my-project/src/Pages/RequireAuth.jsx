import React from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const RequireAuth = () => {
    const auth = UseAuth()

    if(!auth.user){
        return <Navigate to="/login"></Navigate>
    }
  return (
    children
  )
}

export default RequireAuth

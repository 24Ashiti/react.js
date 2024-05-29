import React, { Children } from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({Children}) => {

    const auth = useAuth()

    if(!auth.user){
        return <Navigate to={"/login"}></Navigate>
    }
  return (
    Children
  )
}

export default RequireAuth
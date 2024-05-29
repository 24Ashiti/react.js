import React from 'react'
import { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user , setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.login(user)
        navigate('/profile')
    }
  return (
    <div>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
import React, { useContext, useState } from 'react'
import UserContext from '../../contexts/UserContext/UserContext'
export default function Login() {
    const [username,setusername]=useState('')
    const {setUsername} = useContext(UserContext)
    const handleSubmit= () =>{
        setUsername(username)
    }
    return (
        <div>
            <h2>Login</h2>
            <input
            onChange={(e)=>{
                setusername(e.target.value)
            }}
            value={username} placeholder='username' type="text" />
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext/UserContext'
function Profile() {
    const {username} = useContext(UserContext)
        if(!username) return <div>Please enter username</div>
        else return <div>Welcome {username}</div>
  
}

export default Profile
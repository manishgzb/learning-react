import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Profile//Profile'
import UserContextProvider from './contexts/UserContext/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App

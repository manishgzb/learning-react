import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const increaseCount = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }

  }
  const decreaseCount = () => {
    if (counter >= 1) {
      setCounter(counter - 1)
    }

  }
  return (
    <>
      <h3>Counter Value:{counter}</h3>
      <button onClick={increaseCount}>Increase Counter</button>
      <br />
      <button onClick={decreaseCount}>Decrease Counter</button>
    </>
  )
}

export default App

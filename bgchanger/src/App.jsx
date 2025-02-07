import { useState } from 'react'
import './index.css'
function App() {
  const [color, setColor] = useState('olive')
  return (
    <div className='w-full h-screen ' style={{ backgroundColor: color }}>
      <div className='w-full h-10 fixed bottom-3 bg-white flex items-center flex-row justify-center rounded-lg'>
        <button onClick={() => setColor('red')} className=' w-20 h-8 rounded-md bg-red-500 text-white m-2'>Red</button>
        <button onClick={() => setColor('orange')} className=' w-20 h-8 rounded-md bg-orange-500 text-white m-2'>Orange</button>
        <button onClick={() => setColor('blue')} className=' w-20 h-8 rounded-md bg-blue-500 text-white m-2'>Blue</button>
        <button onClick={() => setColor('purple')} className=' w-20 h-8 rounded-md bg-purple-800 text-white m-2'>Purple</button>
      </div>
    </div>
  )
}

export default App

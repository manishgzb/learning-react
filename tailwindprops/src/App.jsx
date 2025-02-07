import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card title="Javascript" subtitle="Scripting Language" maintext="Javascript is a best development language"></Card>
    <Card title="Java" subtitle="Programming Language" maintext="Java is used in many fields"></Card>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
//  ++++++++++ PROPS - makes component reusable ++++++++++
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-300 rounded-xl text-black p-6 mb-4'>Tailwind CSS</h1>
      <Card username= "YASH"/>
      <Card username= "HITESH"/>

    </>
  )
}

export default App


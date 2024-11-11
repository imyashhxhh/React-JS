import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // let counter = 5
  // const addValue = () => {
  //   console.log("clicked", counter);
  //   // counter= counter + 1;
    
  // }



  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter} </h2>
      <button onclick={ addValue}>increase</button>
      <button onclick= { removeValue}>decrease</button>
    </>
  )
}

export default App

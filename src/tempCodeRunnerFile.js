import React, { useState } from "react"
import './App.css'


function App() {

  const [count, setCount] = useState(3)

  const increase = () => {
    setCount(count + 1)
  }
  return (
    <div className='App'>
      {count}
      <h1> hi my name is reeeya </h1>



      <div>
        <button className='button' onClick={increase}></button>
      </div>
    </div>


  )
}
export default App



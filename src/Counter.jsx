import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };


  const decrease=()=>{
    setCount(count -1)
  }
  const name = "santanu is an asshole";

  return (
    <div className="App">
      {count}
      <h1> hi my name is reeeya</h1>

      <div>
        <button className="button" onClick={increase}>increase</button>
        <br/>
        <br/>
        <button  onClick={decrease}>decrease</button>
      </div>
    </div>
  );
}
export default Counter;

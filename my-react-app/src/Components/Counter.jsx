import React, { useEffect, useState } from 'react'
import "../App.css"
const Counter = () => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
  function handleIncrement(){
       setCount(count+1)
  }
  function handleDecrement(){
     setCount(count-1);
  }
  useEffect(()=>{
    setCount1(count*5)
  },[count])
  return (
    <div>
      Counter1: {count}<br/>
      Counter2: {count1}<br/>
      <button id="inc" onClick={handleIncrement}>Increment</button>
      <button id="dec" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter

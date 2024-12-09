import React from 'react'
import { useRef } from 'react';
const Refex = () => {
    let a=5;
    const refcount=useRef(0);
    console.log("object Redered")
    function handleref(){
        refcount.current++;
        console.log("refcount=",refcount.current)
        if(refcount.current==a)
            alert("counter ="+refcount.current)
    }
  return (
    <div>
      <h1>Refcount={refcount.current}</h1>
      <button onClick={handleref}>Increment</button>
      <p>{a}</p>
    </div>
  )
}

export default Refex

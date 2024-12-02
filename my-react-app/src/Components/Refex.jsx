import React from 'react'
import {useState,useRef} from 'react'
const Refex = () => {
    const [inputvalue,setInputvalue]=useState("");
    const count=useRef(0);
  return (
    <div>
      <input type='text'
       value={inputvalue} 
       onChange={(e)=>{
        setInputvalue(e.target.value); 
       }} /> <br/>
       Render Count: {count.current=count.current+1}
    </div>
  )
}

export default Refex

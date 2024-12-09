import React from 'react'
import {useState,useEffect} from 'react'
const Stopwatch = () => {
    const [isrunning,setIsrunning]=useState(false);
    const [time,setTime]=useState(0);
    const [validid,setValidid]=useState(null);
    function handlerestart(){
        setTime(0);
        setIsrunning(false);
    }
    function handleStart(){
        setIsrunning((pre)=>!pre)
    }
    useEffect(()=>{
        if(isrunning){
        const id=setInterval(()=>{
            setTime((time)=>time+1)
        },1000);
        setValidid(id);
        
             }
         else{
            clearInterval(validid)
         }    
            
         return()=>clearInterval(validid)    
    },[isrunning]
)
function formattime(time){
    const hours=Math.floor(time/3600);
    const minutes=Math.floor((time/3600)/60);
    const seconds=time%60;
    return `${hours}:${minutes}:${seconds}`
}
  return (
    <div>
      <h1>My Stop Watch App</h1>
      <h1>{formattime(time)}</h1><br/>
      <button onClick={handleStart}>{isrunning?'Stop': 'Start'}</button>
      <button onClick={handlerestart}>Reset</button>
    </div>
  )
}

export default Stopwatch

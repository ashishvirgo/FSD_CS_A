import React from 'react'
import { useReducer } from 'react';
const Reducerex = () => {
    const initialValue={name:"XYZ",age:25};
    const [state,dispatch]=useReducer(reducer,initialValue)
    function reducer(state,action){
             switch(action.type){
              case "updatename":
                return {name:"ABC",age:state.age};
              case "updateage":
                return {name:state.name,age:20};
              case "reset":
                return {name:"XYZ",age:25}
              default:
                throw new Error("Unexpected Action");      
             }
    }
  return (
    <div>
      <h1>UseReducer Example</h1>
      <h1>Name:{state.name}</h1><br/>
      <h1>Age:{state.age}</h1>
      <button onClick={()=>dispatch({type:"updatename"})}>Update Name</button>
      <button onClick={()=>dispatch({type:"updateage"})}>Update Age</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Reducerex

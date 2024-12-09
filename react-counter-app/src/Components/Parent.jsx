import React, { createContext } from 'react'
import Child1 from './Child1'
const studentContext=createContext()
const Parent = () => {
    const student={
        name: "XYZ",
        age: 21,
    }
  return (
    <div>
        <studentContext.Provider value={student}>
        <h1>Parent Component</h1>
        <Child1/>
        </studentContext.Provider>   
    </div>
  )
}
export default Parent
export {studentContext}

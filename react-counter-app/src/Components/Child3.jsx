import React, { useContext } from 'react'
import {studentContext} from './Parent'
const Child3 = () => {
    const {name,age}=useContext(studentContext)
  return (
    <div>
      <h1> Child3 Component</h1>
      <h1>Student Name: {name}</h1>
      <h1>Student Age: {age}</h1>
    </div>
  )
}

export default Child3

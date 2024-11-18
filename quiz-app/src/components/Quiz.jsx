import React from 'react'
import qBank from '../Data'
import './Quiz.css'
const Quiz = () => {
  return (
    <div className="Quiz">
        <h1>Quiz App</h1>
        Question{qBank.id}: {qBank.ques}<br/>
        <div><input type="radio"/>{qBank.opt1}</div>
        <div><input type="radio"/>{qBank.opt2}</div>
        <div><input type="radio"/>{qBank.opt3}</div>
        <div><input type="radio"/>{qBank.opt4}</div>
        <div>
        <button>Previous</button>
        <button>Next</button>
        </div>
        
    </div>
  )
}

export default Quiz
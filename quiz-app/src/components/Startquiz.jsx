import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import './Quiz.css'
const Startquiz = () => {
  return (
    <div>
        <Header/>
        <div className='startquiz'>
            <button className='btn' onClick={()=>{
                <Link to='/quiz'></Link>
            }}> Start Quiz</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Startquiz
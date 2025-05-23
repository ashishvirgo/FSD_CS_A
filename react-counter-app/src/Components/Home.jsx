import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link to="/counter">Counter App</Link></li>
        <li><Link to="/stopwatch">Stop watch App</Link></li>
        <li><Link to="/refex">useRef Hook Example</Link></li>
        <li><Link to="/contextex">Context Example</Link></li>
        <li><Link to="/reducerex">Reducer Example</Link></li>
        </ul>
    </div>
  )
}

export default Home

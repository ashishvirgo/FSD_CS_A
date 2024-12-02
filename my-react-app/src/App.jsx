import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Counter from './Components/Counter'
import Refex from './Components/Refex'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<h1>Login Page</h1>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/refex" element={<Refex/>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App

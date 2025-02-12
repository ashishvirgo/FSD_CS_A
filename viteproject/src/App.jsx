import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import { useState } from 'react'
const App = () => {
  const [regData,setRegData]=useState();
  return (
    <div>
      {JSON.stringify(regData)}
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/login" element={<Login regData={regData}/>}></Route>
        <Route path="/register" element={<Register setRegData={setRegData}/>}></Route>
        </Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/dashboard" element={<Dashboard regData={regData}/>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App

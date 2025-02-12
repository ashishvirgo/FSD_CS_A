import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({regData}) => {
  const [email,setEmail]=useState();
  const [pass,setPass]=useState();
  const navigate=useNavigate();
  const validate=(e)=>{
      e.preventDefault();
      if(regData.email==email && regData.pass==pass){
        alert("Login Successfull")
        navigate("/dashboard")
      }
      else{
        alert("Login Failed")
        navigate("/login")
      }
  }
  return (
    <div>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e)=>setPass(e.target.value)}class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={validate}class="btn btn-primary">Login</button>
</form>
    </div>
  )
}

export default Login

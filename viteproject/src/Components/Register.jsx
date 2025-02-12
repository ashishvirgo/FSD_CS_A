import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = ({setRegData}) => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const navigate=useNavigate();
    const getData=(e)=>{
          e.preventDefault();
          const data={name,email,pass};
          setRegData(data);
          alert("Registration Successfull");
          navigate("/login")
    }
  return (
    <div>
      <form>
      <div class="mb-3">
    <label for="exampleInputName"  class="form-label">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)}class="form-control" id="exampleInputName" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1"  class="form-label">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)}class="form-control" id="exampleInputEmail1" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" onChange={(e)=>setPass(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" onClick={getData} class="btn btn-primary">Register</button>
</form>
    </div>
  )
}

export default Register

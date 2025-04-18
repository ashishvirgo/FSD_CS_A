import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import "../App.css"
const ViewUsers = () => {
    const [users,setUsers]=useState([]);
    const [error,setError]=useState(null);
    useEffect(()=>{
       loadUsers();
    },[]);
    const loadUsers=async()=>{
      try{
        const res=await axios.get("https://useraap4.onrender.com/users");
         setUsers(res.data);
      }
      catch(err){
        console.log("Data fetching Error",err.message);
        setError(err.message);
    }
      }
      
  return (
    <div className='content'>
      <h1>View Users</h1>
      <table style={{width:'100%',backgroundColor: 'white'}}>
        <thead>
            <tr>
            <th>Sr. No.</th>
            <th>name</th>
            <th>email</th>
            <th>role</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
         {error || users.map((user,index)=>(
         <tr>
         <td>{++index}</td>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>{user.role}</td>
         <td>
            <button>Edit</button>
            <button>Delete</button>
         </td>
         </tr>
         )

         )}
        </tbody>
      </table>
      
    </div>
  )
}

export default ViewUsers

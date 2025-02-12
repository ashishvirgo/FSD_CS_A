import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Dashboard = ({regData}) => {
  
  const [recipes,setRecipes]=useState([]);
  const [isloading,setIsloading]=useState(true);
  const [error,setError]=useState(null);
  const currentdate=new Date();
  useEffect(()=>{
    const url='https://dummyjson.com/recipes';
    const res=fetch(url);
          res.then((res)=>res.json())
          .then((data)=>{
           console.log(data);
           setRecipes(data.recipes);
           setIsloading(false);
          })
          .catch((err)=>{
            console.log("Error",err);
            setError("Error fetching data");
            setIsloading(false);
          })
  },[])
  return (
    <div>
      <nav>
        <ul>
            <li>
                Welcome: {regData.name}
            </li>
            <li>
                Date:{currentdate.toDateString()}
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
      </nav>
      <h1>Dashboard Page</h1>
      {isloading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!error && !isloading && (
        <div>
          <table>
            <tr>
              <th>&nbsp;</th>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Rating</th>
              <th>Price</th>
            </tr>
            {recipes.map((r)=>(
              <tr>
                <td><img src={r.image} height="100" width="100"/></td>
                <td>{r.name}</td>
                <td>{r.cuisine}</td>
                <td>{r.rating}</td>
                <td>120/-</td>
              </tr>  
            ))}
          </table>
        </div>  
      )}
      
    </div>
  )
}

export default Dashboard

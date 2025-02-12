import React from 'react'
import Header from './Header'
import Footer from './Footer'
import data from './Data'
import {Link,Outlet} from 'react-router-dom'
const Dashboard = ({regDash}) => {
  return (
    <div>
        <Header/>
      <nav>
        <ul>
          <li>
            Welcome {regDash.name}
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className='datatable'>
        <table>
          <tr>
          <th>Id </th>
          <th>Name </th>
          <th>Email Id </th>
          <th>Mobile </th>
          </tr>
            {data.map((data1)=>(
              <tr>
                <td>{data1.id}</td>
                <td>{data1.name}</td>
                <td>{data1.Email}</td>
                <td>{data1.mobile}</td>
                </tr>
            ))}
        </table>
      </div>
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default Dashboard

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'
const Home = () => {
  return (
    <div>
      <Header/>
      <nav>
        <ul>
            <li>
                <Link to="/login">LOGIN</Link>
            </li>
            <li>
                <Link to="/register">REGISTER</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home

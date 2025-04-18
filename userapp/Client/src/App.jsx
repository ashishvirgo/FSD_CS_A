import React from 'react'
import ViewUsers from './components/ViewUsers'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<ViewUsers/>}></Route>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App

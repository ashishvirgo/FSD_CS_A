import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Startquiz from "./components/Startquiz"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<Startquiz/>></Route>
        <Route path="/quiz" element=<Home/>></Route>
        <Route path="/login" element=<h1>Login Page</h1>></Route>
        <Route path="/logout" element=<h1>Logout Page</h1>></Route>
      </Routes>
    </>
  )
}

export default App

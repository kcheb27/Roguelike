import Home from "./pages/Home.jsx"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Projects from "./pages/Projects.jsx"
import Art from "./pages/Art.jsx"
import Rps from "./pages/Rps.jsx"
import Car from "./pages/Car.jsx"
import OS from "./pages/OS.jsx"
function App() {

  return (
    <Router>
        <Routes>
          <Route exact path = "/" element={<Home/>}></Route>
          <Route exact path = "/home" element={<Home/>}></Route>
          <Route exact path = "/projects" element={<Projects/>}></Route>
          <Route exact path = "/art" element={<Art/>}></Route>
          <Route exact path = "/Rps" element={<Rps/>}></Route>
          <Route exact path = "/Car" element={<Car/>}></Route>
          <Route exact path = "/OS" element={<OS/>}></Route>
        </Routes>
    </Router>

  )
}

export default App

import {Home} from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import "./css/App.css"
function App() {
  

  return (
    <BrowserRouter>
    <Routes> <Route path="/" element={<Home/>}/> </Routes>
    </BrowserRouter>
  )
}

export default App

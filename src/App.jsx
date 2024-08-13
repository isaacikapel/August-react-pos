//import React from "react"; -IN REACT 17+ we don't need to import react to use it
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Members from "./pages/Members";
//import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="members" element={<Members />}/>
        </Route>
      </Routes>   {/* A <Route> with a path of "/" will render <Home /> when at the root URL */}
    </BrowserRouter>
  )
}

export default App

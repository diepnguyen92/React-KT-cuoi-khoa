import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Detail from './pages/Detail'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home  />}>
    {/* <Route path='/' element={<Detail />} /> */}
    </Route>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
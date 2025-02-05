import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Home/Main';
import AboutMain from './Components/About/AboutMain';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<AboutMain/>}/>
        </Routes>


      </div>
    </BrowserRouter>
  )
}

export default App

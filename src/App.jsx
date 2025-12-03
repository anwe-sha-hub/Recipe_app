import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import Favs from './pages/favs/favs'
import Home from './pages/home/home'
import Details from './pages/details/details'
import Navbar from './components/navbar/navbar'
import React from 'react'

function App() {
 

  return (
    <>
     <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/favs' element={<Favs/>}/>
          <Route path='/recipe-item/:id' element={<Details/>}/>
        </Routes>
      </div>
     </div>
    </>
  )
}

export default App

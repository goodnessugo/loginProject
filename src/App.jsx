import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

const App = () => {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
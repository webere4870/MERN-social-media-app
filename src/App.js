import './App.css';
import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register/>}/>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>

  );
}

export default App;

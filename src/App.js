import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp.js';
import { Routes, Route } from  'react-router-dom';
import Modal from './components/Modal';
import React, { useState } from 'react';


function App() {

  return (
    <div className='app'>
        <Routes>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;

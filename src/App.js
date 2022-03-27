import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp.js';
import { Routes, Route } from  'react-router-dom';
import Modal from './components/Modal';
import React, { useState } from 'react';
import Search from './pages/Search';


function App() {

  return (
    <div className='app'>
        <Routes>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
    </div>
  );
}

export default App;

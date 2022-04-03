import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp.js';
import { Routes, Route } from  'react-router-dom';
import Modal from './components/Modal';
import React, { useState } from 'react';
import Search from './pages/Search';
import Like from './pages/Like';


function App() {

  return (
    <div className='app'>
        <Routes>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/like" element={<Like/>}/>
        </Routes>
    </div>
  );
}

export default App;

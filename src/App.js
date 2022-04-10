import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp.js';
import { Routes, Route } from  'react-router-dom';
import Modal from './components/Modal';
import React, { useState } from 'react';
import Search from './pages/Search';
import Like from './pages/Like';


function App() {

  let [showModal, showModal2] = useState(false);

  let [movieInfo, movieInfo2] = useState([]);

  showCheck()


  const show = ()=>{
    showModal2(!showModal)
  }

  function showCheck(e) {
    if(document.getElementById('home-Container') == null) {
      return null
    }
    else {
      let home = document.getElementById('home-Container');
      if(showModal == true) {
        home.style.visibility = "hidden";
      }
      else {
        home.style.visibility = "visible";
      }
    }
  }


  return (
    <div className='app'>
          {

              showModal == true 
              ? <Modal show={show} movieInfo={movieInfo}/>
              : null

          }
        <Routes>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/" element={<Home show={show} movieInfo2={movieInfo2}/>}/>
            <Route path="/search" element={<Search show={show} movieInfo2={movieInfo2}/>}/>
            <Route path="/like" element={<Like show={show} movieInfo2={movieInfo2}/>}/>
        </Routes>
    </div>
  );
}

export default App;

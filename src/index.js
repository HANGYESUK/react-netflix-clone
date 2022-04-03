import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let Likemovie = [];

function likeReducer(state=Likemovie, action) {
  if(action.type === "likeMovie") {
    console.log(action.payload)
    let copy=state
    copy.push(action.payload)
    return copy
  }
  else {
    return state
  }
}

let store = createStore(likeReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


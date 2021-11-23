import React from 'react';
import ReactDOM from 'react-dom';
import Me from './me.js';
import Home from './home';

export default () => {
  return (
    <div>
      <h1> Sub App1 here!</h1>
      <Home />
      <Me />
    </div>
  )
}
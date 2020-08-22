import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
        <ul className="flex-row">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
      <Router />
    </div>
  );
}

export default App;

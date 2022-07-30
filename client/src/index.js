import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from './components/App';

ReactDOM.render(
  <Router>
    <Routes>
      <App />
    </Routes>
  </Router>,
  document.getElementById('root')
);

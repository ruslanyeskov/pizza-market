import React from 'react';
import Home from './pages/Home.jsx';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AppRouter from './components/AppRouter.jsx';
import './styles/App.css';

function App() {
  return (
      <AppRouter />
  );
}

export default App;

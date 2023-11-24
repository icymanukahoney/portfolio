import { HashRouter, Routes, Route } from 'react-router-dom'
import React from 'react';

import './App.css'

//import Componenets
import Header from './components/Header'
import Footer from './components/Footer';


// Import Pages
import Home from './pages/Home'


function App() {

  return (
    <HashRouter>
     <Header/>
     <Home/>
     <Footer/>
    </HashRouter>
  )
}

export default App

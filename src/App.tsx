import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Contact/>
    <Footer/>
    </>
  );  
}
export default App;
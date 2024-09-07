import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Categories from './components/Categories';

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Categories/>
    <Contact/>
    <Footer/>
    </>
  );  
}
export default App;
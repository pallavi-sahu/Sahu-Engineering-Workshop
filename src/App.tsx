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
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>    
      <div className="pt-16 pb-16 ">
        <HomePage />
        <Categories />
        <Contact />
      </div>
      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>    </>
  );
}
export default App;
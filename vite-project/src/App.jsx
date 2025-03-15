import React from 'react'
import './scss/style.scss';
import ScrollToTop from './components/ScrollToTop';
import Cards from './components/cards';
import Clients from './components/clients';
import Footer from './components/footer';
import Free from './components/free';
import Home from './components/Home';
import Like from './components/like';
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import SignUp from "./components/SignUp";
import SuperRare from "./components/SuperRare";
import"./scss/style.scss"

function App() {
  return (
    <div className='app-container'>
      <ScrollToTop/>
     <Cards/>
     <Clients/>
     <Footer/>
     <Free/> 
     <Home/>
     <Like/>
     <Navbar/>
     <Release/>
     <SignUp/>
     <SuperRare/>
    </div>
  )
}

export default App


  

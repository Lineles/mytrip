import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Navigation from "./Components/Navigation/Navigation";

import Scottland from "./Components/Countries/Scottland/Scottland";
import Island from "./Components/Countries/Island/Island";



import './App.css';
import Footer from "./Components/Footer/Footer";
import Countries from "./Components/Countries/Countries";

function App() {
  return (
    <Router>
      <Header />
      <Navigation /> 
      <Routes> 
        <Route path="/" element={ <HomePage />} /> 
        <Route path="/Countries" element={ <Countries />} />
        <Route path="/Scottland" element={ <Scottland /> }/>
        <Route path="/Island" element={ <Island /> }/>
      </Routes>  
      <Footer />      
  </Router>  
  );
}

export default App;

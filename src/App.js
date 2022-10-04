import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Navigation from "./Components/Navigation/Navigation";



import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Navigation /> 
      <Routes> 
        <Route path="/" element={ <HomePage />} /> 
        <Route path="/Caracters" element={ '#'}/>

      </Routes>        
  </Router>  
  );
}

export default App;

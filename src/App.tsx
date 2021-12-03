import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Admission from './components/pages/Admission';
import "bootstrap/dist/css/bootstrap.css";
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs'
import PageNotFound from './components/pages/PageNotFound';
import PrePrimary from './components/pages/PrePrimary';
import Primary from './components/pages/Primary';
import Secondary from './components/pages/Secondary';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route  path="/*" element={<PageNotFound/>}/>
      <Route  path="/" element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path='/admission' element={<Admission/>}/>
       <Route path="/about" element={<AboutUs/>}/>
       <Route path="/contact" element={<ContactUs/>}/>
       <Route path="/pre-primary" element={<PrePrimary/>}/>
       <Route path="/primary" element={<Primary/>}/>
       <Route path="/secondary" element={<Secondary/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import { Suspense, lazy } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Admission from './components/pages/Admission';
import "bootstrap/dist/css/bootstrap.css";
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs'
import PageNotFound from './components/pages/PageNotFound';
// import PrePrimary from './components/pages/PrePrimary';
// import Primary from './components/pages/Primary';
// import Secondary from './components/pages/Secondary';
import Login from './components/pages/Login';
import StudentPage from './components/pages/StudentPage';
const PrePrimary = lazy(() => import("./components/pages/PrePrimary"));
const Primary = lazy(() => import("./components/pages/Primary"));
const Secondary = lazy(() => import("./components/pages/Secondary"));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loader
          type="ThreeDots" color="#00BFFF" height={80} width={80}
          timeout={8000} //3 secs
        />}>

          <Routes>

            <Route path="/*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/admission' element={<Admission />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pre-primary" element={<PrePrimary />} />
            <Route path="/primary" element={<Primary />} />
            <Route path="/secondary" element={<Secondary />} />
            <Route path="/login" element={<Login />} />
            <Route path="/student" element={<StudentPage />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

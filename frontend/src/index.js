import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './landing_page/home/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUpPage from './landing_page/signup/SignUpPage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import ProductPage from './landing_page/product/ProductPage';
import NotFound from './landing_page/NotFound';
import NavBar from './landing_page/NavBar'
import OpenAccount from './landing_page/OpenAccount'
import Footer from './landing_page/Footer'
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <NavBar/>
     <Routes>
      <Route path ="/" element={<HomePage/>}/>
        <Route path ="/signup" element={<SignUpPage/>}/>
         <Route path ="/product" element={<ProductPage/>}/>
          <Route path ="/about" element={<AboutPage/>}/>
           <Route path ="/pricing" element={<PricingPage/>}/>
            <Route path ="/support" element={<SupportPage/>}/>
            <Route path ="*" element={<NotFound/>}/>
     </Routes>
     <OpenAccount/>
     <Footer/>
  </BrowserRouter>
  
);
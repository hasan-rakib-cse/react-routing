import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
// import all the Pages here. See previous React-Router example
export default function app() {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
    </div>
  )}

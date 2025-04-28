import React from 'react'
import LandingPage from './Components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About'
import Courses from './Pages/Courses';
import CourseDetails from './Components/CourseDetails';
import ContactPage from './Components/ContactPage';
import Partnership from './Components/Partnership';

export default function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path = "/" element={<LandingPage/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/course" element={<Courses/>}/>
        <Route path = "/details" element={<CourseDetails/>}/>
        <Route path = "/contact" element={<ContactPage/>}/>
        <Route path = "/partners" element={<Partnership/>}/>
      </Routes>
      </Router>
    </div>
  )
}

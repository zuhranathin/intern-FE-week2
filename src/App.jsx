import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
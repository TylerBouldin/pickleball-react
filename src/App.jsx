import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import HowToPlay from './pages/HowToPlay.jsx';
import Shop from './pages/Shop.jsx';
import NearYou from './pages/NearYou.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Gallery from './pages/Gallery.jsx';
import './css/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-to-play" element={<HowToPlay />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/near-you" element={<NearYou />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


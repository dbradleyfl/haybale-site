import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DownloadSection from './components/DownloadSection';
import FeaturesSection from './components/FeaturesSection';
import FooterSection from './components/FooterSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HeroSection />
        <DownloadSection />
        <FeaturesSection />
        <FooterSection />
      </div>
    );
  }
}

export default App;

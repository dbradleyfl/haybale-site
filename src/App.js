import React, { Component } from 'react';
import './App.css';

import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FooterSection from './components/FooterSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection />
        <FeaturesSection />
        <FooterSection />
      </div>
    );
  }
}

export default App;

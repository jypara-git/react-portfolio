import React from 'react'; 
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
    <Navigation></Navigation>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;

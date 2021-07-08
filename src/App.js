import React from 'react'; 
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ContactForm from './components/Contact';
import ProjectList from './components/ProjectList';


function App() {
  return (
    <div className="App">
    <Navigation></Navigation>
    <About/>
    <ProjectList></ProjectList>
    <ContactForm/>
    <Footer/>
    </div>
  );
}

export default App;

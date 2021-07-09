import React from 'react'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ContactForm from './components/Contact';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';


function App() {
  return (
    <Router>
        <div className="App">
          <Navigation></Navigation>
          <>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={ProjectList} />
            <Route exact path="/contact" component={ContactForm} />
            <Route exact path="/resume" component={Resume} />
          </>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;

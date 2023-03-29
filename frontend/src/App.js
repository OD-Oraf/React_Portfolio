// import logo from './logo.svg';

// React and Bootstrap Inports
import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

// Components imports
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      title: 'Ooduah Orafidiya',
      // Paths
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],

      home:{
        title: 'Ooduah Orafidiya ', 
        subTitle: 'Software Engineer',
        text: 'View My Work Below'
      },
      about: {
        title: 'About me',       
      },
      contact: {
        title: 'Contact Me',
        
      }
    }
  }
  render(){
    return (

      <div>
        <Router>
          <Container className = "p-0" fluid ={true}>
            {/* Navbar */}
            <Navbar className = "border-bottom" bg= "transparent" expand= "lg">
              <Navbar.Brand> OD-Oraf </Navbar.Brand>
              <Navbar.Toggle className= "border-0" aria-controls= "navbar-toggle"/>
              <Navbar.Collapse id = "navbar-toggle">
                  <Nav className= "ml-auto">
                    {/* Link instead of anchor tag */}
                    <Link className= "nav-link" to="/"> Home </Link>
                    <Link className= "nav-link" to="/about"> About </Link>
                    <Link className= "nav-link" to="/contact"> Contact </Link>                   
                  </Nav>
              </Navbar.Collapse>            
              {/* </Navbar.Toggle> */}
            </Navbar>

            {/* Home Route */}
            <Route path="/" exact render= { () => <HomePage title={this.state.home.title} 
            subTitle={this.state.home.subTitle} 
            text={this.state.home.text} /> } /> 

            {/* About Route */}
            <Route path="/about" render={ () => 
            <AboutPage title={this.state.about.title} 
            /> }/> 

            {/* Contact Route */}
            <Route path="/contact" render={ () => 
            <Contact title={this.state.contact.title } 
             /> }/> 

          </Container>
          <Footer/>

        </Router>

      </div>
    
      );

  }
  
}

export default App;

// import logo from './logo.svg';

// React and Bootstrap Inports
import React, {useState, useEffect} from 'react';
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

// Type definitions
interface HeaderLink {
    title: string;
    path: string;
}

interface PageState {
    title: string;
    subTitle?: string;
    text?: string;
}

const App = () => {
    const [home, setHome] = useState<PageState>({
        title: "OD Orafidiya",
        subTitle: "Software Engineer",
        text: "View My Work Below"
    });

    const [about, setAbout] = useState<PageState>({
        title: "About me"
    });

    const [contact, setContact] = useState<PageState>({
        title: "Contact Me"
    });


    return (
        <div>
            <Router>
                <Container className="p-0" fluid={true}>
                    {/* Navbar */}
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand> OD-Oraf </Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                {/* Link instead of anchor tag */}
                                <Link className="nav-link" to="/"> Home </Link>
                                <Link className="nav-link" to="/about"> About </Link>
                                <Link className="nav-link" to="/contact"> Contact </Link>
                            </Nav>
                        </Navbar.Collapse>
                        {/* </Navbar.Toggle> */}
                    </Navbar>

                    {/* Home Route */}
                    <Route path="/" exact render={() => <HomePage title={home.title}
                                                                  subTitle={home.subTitle}
                                                                  text={home.text}/>}/>

                    {/* About Route */}
                    <Route path="/about" render={() =>
                        <AboutPage title={about.title}
                        />}/>

                    {/* Contact Route */}
                    <Route path="/contact" render={() =>
                        <Contact name={contact.title}
                        />}/>

                </Container>
                <Footer/>

            </Router>

        </div>

    );

}

export default App;

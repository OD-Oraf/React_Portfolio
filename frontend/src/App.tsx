import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

interface PageState {
    title: string;
    subTitle?: string;
    text?: string;
}

const App = () => {
    const [home] = useState<PageState>({
        title: 'OD Orafidiya',
        subTitle: 'Software Engineer',
        text: 'View My Work Below',
    });

    const [about] = useState<PageState>({
        title: 'About me',
    });

    const [contact] = useState<PageState>({
        title: 'Contact Me',
    });

    return (
        <div>
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand>OD-Oraf</Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ms-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Routes>
                        <Route path="/" element={
                            <HomePage title={home.title} subTitle={home.subTitle} text={home.text} />
                        } />
                        <Route path="/about" element={
                            <AboutPage title={about.title} />
                        } />
                        <Route path="/contact" element={
                            <Contact name={contact.title} />
                        } />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </div>
    );
};

export default App;

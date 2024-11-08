import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import milogo from '../assets/img/milogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav_icon4.svg';
import { HashLink } from 'react-router-hash-link';

import {  BrowserRouter as Router} from "react-router-dom";
import React from 'react'

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={milogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#Languages" className={activeLink === 'Languages' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Languages')}>Programming</Nav.Link>
              <Nav.Link href="#Languages_2" className={activeLink === 'Languages_2' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Languages_2')}>Languages</Nav.Link>
              {/* <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/imad-eddine-siham/"><img src={navIcon1} alt="" /></a>
                <a target="_blank" href="https://web.facebook.com/dev.web.99/"><img src={navIcon2} alt="" /></a>
                <a target="_blank" href="https://www.instagram.com/web.dev.99/"><img src={navIcon3} alt="" /></a>
                <a target="_blank" href="https://wa.me/message/ECWUXQDH5MBBK1"><img src={navIcon4} alt="" /></a>
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
              <HashLink  to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
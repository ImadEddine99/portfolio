import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav_icon4.svg";
import milogo from '../assets/img/milogo.png';
import React from 'react'
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
           <a href="/"> <img src={milogo} alt="Logo"/></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a target="_blank" href="https://www.linkedin.com/in/imad-eddine-siham/"><img src={navIcon1} alt="" /></a>
                <a target="_blank" href="https://web.facebook.com/dev.web.99/"><img src={navIcon2} alt="" /></a>
                <a target="_blank" href="https://www.instagram.com/web.dev.99/"><img src={navIcon3} alt="" /></a>
                <a target="_blank" href="https://wa.me/message/ECWUXQDH5MBBK1"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}